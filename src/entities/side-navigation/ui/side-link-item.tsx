'use client'

import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

import { Button } from '@shared/shadcn/ui/button'
import { Icon } from '@shared/ui/atoms/icon'

import { useSideLinkStatus } from '../hooks'
import { TSideNavigationLink } from '../types'

type Props = TSideNavigationLink

export const SideLinkItem = ({ href, icon, name }: Props) => {
  const { isActive, isExternal } = useSideLinkStatus({ href })

  return (
    <Button
      asChild
      className="justify-start px-3"
      size="sm"
      variant={isActive ? 'default' : 'ghost'}>
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
