import './globals.css'

import { ThemeProvider } from '@shared/providers'

import { cn } from '@shared/ui'
import { Metadata, Viewport } from 'next'

import { Inter as FontSans } from 'next/font/google'

export const metadata = {
  title: 'Максим Терешко',
  icons: {
    shortcut: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
} satisfies Metadata

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
} satisfies Viewport

const fontSans = FontSans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans',
})

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
