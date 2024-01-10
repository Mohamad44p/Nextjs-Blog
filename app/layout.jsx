import './globals.css'
import { Rubik } from 'next/font/google'

export const dynamic = 'force-dynamic'
const rubik = Rubik({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Platform - Sharing Insights and Ideas',
  description: 'Explore our Blog Platform to discover a wide range of articles and insights on various topics, written by expert bloggers and thought leaders.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  )
}