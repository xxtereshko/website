'use client'

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

  const isSelected = pathname === href

  return (
    <Link
      className={cn(
        'text-sm flex flex-col items-start gap-2 rounded-md px-3 py-2 ring-offset-background transition-colors focusable',
        isSelected
          ? 'bg-accent hover:bg-accent text-accent-foreground'
          : 'hover:bg-accent hover:text-accent-foreground ',
      )}
      href={href}>
      <div className="flex w-full flex-col gap-1">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <span className="font-semibold">{title}</span>
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
