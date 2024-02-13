import type { Metadata } from 'next'
import { SpeedInsights } from "@vercel/speed-insights/next"
import './css/globals.css'

export const metadata: Metadata = {
  title: 'Telext World Clock',
  description: 'Classic Teletext World Clock built in Next.js',
  keywords: 'teletext, teletekst, world clock, world, clock, wereldklok, 8-bit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <SpeedInsights />
    </html>
    
  )
}
