"use client"

import { useFormState } from "react-dom";
export default function SubmitButton() {
  const { pending } = useFormState()

  return (
    <button disabled={pending} className='btn-primary'>
      {pending && <span>Submitting...</span>}
      {!pending && <span>Submit</span>}
    </button>
  )
}