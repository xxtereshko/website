'use client'

import { useMemo } from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@shared/shadcn/ui/button'
import { Icon } from '@shared/ui/atoms/icon'

import { TLink } from '../constants'

type Props = TLink

export const NavLink = ({ href, icon, name }: Props) => {
  const pathname = usePathname()

  const isExternal = href.startsWith('http')

  const isActive = useMemo(() => {
    if (isExternal || pathname.length === 0) {
      return false
    }

    const splittedPathname = pathname.split('/')
    const currentPathname = splittedPathname[1] ?? ''

    return currentPathname === href.split('/')[1]
  }, [href, isExternal, pathname])

  return (
    <Button
      asChild
      className="justify-start px-3"
      size="sm"
      variant={isActive ? 'default' : 'ghost'}>
      <Link href={href} rel={isExternal ? 'noopener noreferrer' : undefined}>
        <Icon className="w-4 h-4 mr-2" name={icon ?? 'AtSign'} />
        {name}
        {isExternal && (
          <Icon
            className="w-4 h-4 ml-auto text-muted-foreground"
            name="ArrowUpRight"
          />
        )}
      </Link>
    </Button>
  )
}
