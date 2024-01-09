import { notFound } from "next/navigation"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

export const dynamicParams = true // default val = true

export async function generateMetadata({ params }) {
  const supbase = createServerComponentClient({ cookies })
  const { data: ticket } = await supbase.from("tickets")
    .select()
    .eq("id", params.id)
    .single()
 
  return {
    title: `Dojo Helpdesk | ${ticket?.title || "Ticket Not Found"}`,
  }
}

async function getTicket(id) {
  const supbase = createServerComponentClient({ cookies })
  const { data } = await supbase.from("tickets")
    .select()
    .eq("id", id)
    .single()
 
  if (!data) {
    notFound()
  }

  return data
}


export default async function TicketDetails({ params }) {
  // const id = params.id
  const ticket = await getTicket(params.id)

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  )
}