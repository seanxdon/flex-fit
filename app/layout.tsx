import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FlexFit',
  description: 'Your AI personal trainer! Take out the need of planning our your workout routine each week.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div>
        {children}
      </div>
      </body>
    </html>
  )
}
