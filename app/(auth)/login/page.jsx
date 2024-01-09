"use client"
import { useState } from "react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
// components
import AuthForm from "../AuthForm"

export default function Login() {
    const [error , setError] = useState('')
  const router = useRouter()
  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    const supbase = createClientComponentClient()
    const { error } = await supbase.auth.signInWithPassword({ email, password })
    if (error) {
      setError(error.message)
    }
    if (!error) {
      router.push('/')
    }
  }
[]
  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div>{error}</div>}
    </main>
  )
}