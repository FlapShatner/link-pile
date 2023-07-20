import './globals.css'
import type { Metadata } from 'next'
import Background from '@/components/background'
import { Inter, Rubik } from 'next/font/google'

const font = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: '@jordan_robots',
 description: 'A pile of links',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang='en'>
   <body className={font.className}>
    <Background />
    {children}
   </body>
  </html>
 )
}
