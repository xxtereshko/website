import { Metadata, Viewport } from 'next'
import { Inter as FontSans } from 'next/font/google'

import { ThemeProvider } from '@shared/providers'
import { cn } from '@shared/ui'

import './globals.css'

export const metadata = {
  icons: {
    shortcut: '/favicon.png',
  },
  robots: {
    follow: true,
    googleBot: {
      follow: true,
      index: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
    index: true,
  },
  title: 'Максим Терешко',
} satisfies Metadata

export const viewport = {
  initialScale: 1,
  viewportFit: 'cover',
  width: 'device-width',
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
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={cn('min-h-screen font-sans antialiased', fontSans.variable)}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
