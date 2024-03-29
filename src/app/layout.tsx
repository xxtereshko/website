import { ReactNode } from 'react'

import { FloatingHeader } from '@features/floating-header'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import { Metadata, Viewport } from 'next'

import { SideNavigation } from '@entities/side-navigation'
import { ThemeProvider } from '@shared/providers'
import { cn } from '@shared/ui'
import { SidebarTemplate } from '@shared/ui/templates'

import './globals.css'

export const metadata = {
  authors: { name: 'Максим Терешко' },
  description: 'Embracing details. Nurturing novelty. Deploying excellence.',
  icons: {
    shortcut: '/favicon.png',
  },
  robots: {
    follow: true,
    index: true,
  },
  title: 'Максим Терешко',
} satisfies Metadata

export const viewport = {
  initialScale: 1,
  themeColor: [
    { color: '#fafafa', media: '(prefers-color-scheme: light)' },
    { color: '#171717', media: '(prefers-color-scheme: dark)' },
  ],
  viewportFit: 'cover',
  width: 'device-width',
} satisfies Viewport

type Props = {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body className={cn('min-h-screen', GeistSans.variable, GeistMono.variable)}>
        <ThemeProvider>
          <div className="min-h-screen bg-background" vaul-drawer-wrapper="">
            <SidebarTemplate
              HeaderNode={<FloatingHeader />}
              NavMenuNode={<SideNavigation />}>
              {children}
            </SidebarTemplate>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
