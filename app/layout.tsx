import { Navbar } from '@/components/navbar'
import './globals.css'
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist({ subsets: ['latin'] })

export const metadata = {
  title: 'EDGE 11 - Your AI Fantasy Team Strategist',
  description: 'The only AI-driven assistant you need to craft the perfect fantasy team.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D]">
        <Navbar/>
        <main className={urbanist.className}>{children}</main>
        </body>
    </html>
  )
}

