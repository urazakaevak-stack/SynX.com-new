import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Russo_One, Inter } from 'next/font/google'
import './globals.css'

const _russoOne = Russo_One({ weight: '400', subsets: ['latin', 'cyrillic'], variable: '--font-display' })
const _inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-body' })

export const metadata: Metadata = {
  title: 'SynX — Топ 3 клан СНГ | The Strongest Battlegrounds',
  description:
    'SynX — элитный клан по The Strongest Battlegrounds в Roblox. Топ 3 клан СНГ. 30+ рейдов, стафф 24/7. Вступай в наш Discord!',
  generator: 'v0.app',
  icons: {
    icon: [{ url: '/images/synx-logo.png' }],
    apple: '/images/synx-logo.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a1228',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`bg-background ${_russoOne.variable} ${_inter.variable}`}>
      <body className="antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
