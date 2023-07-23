import './globals.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import Background from '@/components/background'
import Bg from '@/components/bg'
import { Inter, Rubik } from 'next/font/google'

const font = Rubik({ subsets: ['latin'] })

export const metadata: Metadata = {
 title: '@jordan_robots',
 description: 'A pile of links',
 //  viewport: {
 //   width: 'device-width',
 //   initialScale: 1,
 //   maximumScale: 1,
 //  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
  <html lang='en'>
   <body className={font.className}>
    {/* <Background /> */}
    {/* <Bg></Bg> */}
    {children}
    <Analytics />
   </body>
  </html>
 )
}
