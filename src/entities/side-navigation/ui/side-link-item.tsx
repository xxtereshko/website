'use client'

import { useCallback } from 'react'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@shared/shadcn/ui/button'
import { Icon } from '@shared/ui/atoms/icon'

import { useSideLinkStatus } from '../hooks'
import { TSideNavigationLink } from '../types'

type Props = TSideNavigationLink & {
  onClick?: () => void
}

export const SideLinkItem = ({ href, icon, name, onClick }: Props) => {
  const { isActive, isExternal } = useSideLinkStatus({ href })

  const handleClick = useCallback(() => {
    if (!onClick) {
      return
    }

    onClick()
  }, [onClick])

  return (
    <Button
      asChild
      className="justify-start px-3"
      size="sm"
      variant={isActive ? 'default' : 'ghost'}
      onClick={handleClick}>
      <Link
        href={href}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        target={isExternal ? '_blank' : undefined}>
        <Icon className="w-4 h-4 mr-2" name={icon ?? 'AtSign'} />
        {name}
        {isExternal && (
          <ArrowUpRight className="w-4 h-4 ml-auto text-muted-foreground" />
        )}
      </Link>
    </Button>
  )
}
