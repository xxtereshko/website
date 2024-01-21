'use client'

import { useMemo } from 'react'

import { formatDistanceToNow, parseISO } from 'date-fns'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from '@shared/ui'

type Props = {
  date: string
  description: string
  href: string
  title: string
}

export const WritingListItem = ({ date, description, href, title }: Props) => {
  const pathname = usePathname()

  const isSelected = useMemo(() => pathname === href, [href, pathname])

  return (
    <Link
      className={cn(
        'flex flex-col items-start gap-2 rounded-lg border px-3 py-2 text-left text-sm transition-all hover:bg-accent',
        isSelected && 'bg-accent',
      )}
      href={href}>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <div className="font-semibold">{title}</div>
          </div>
        </div>
        <div className="text-xs font-medium">{description}</div>
        <div className="text-xs text-muted-foreground">
          {formatDistanceToNow(parseISO(date), {
            addSuffix: true,
          })}
        </div>
      </div>
    </Link>
  )
}
