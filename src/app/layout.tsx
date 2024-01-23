import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Metadata, Viewport } from 'next'

import { NavMenu } from '@entities/nav-menu/ui'
import { ThemeProvider } from '@shared/providers'
import { cn } from '@shared/ui'
import { NavMenuTemplate } from '@shared/ui/templates'

import './globals.css'

export const metadata = {
  authors: { name: 'Максим Терешко' },
  description: 'Embracing details. Nurturing novelty. Deploying excellence.',
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
  themeColor: [
    { color: '#ffffff', media: '(prefers-color-scheme: light)' },
    { color: '#171717', media: '(prefers-color-scheme: dark)' },
  ],
  viewportFit: 'cover',
  width: 'device-width',
} satisfies Viewport

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={cn(
          'h-screen font-sans antialiased bounces-none',
          GeistSans.variable,
          GeistMono.variable,
        )}>
        <ThemeProvider>
          <NavMenuTemplate NavMenu={<NavMenu />}>{children}</NavMenuTemplate>
        </ThemeProvider>
      </body>
    </html>
  )
}
