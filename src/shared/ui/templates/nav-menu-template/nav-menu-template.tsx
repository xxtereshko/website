import { ReactNode } from 'react'

import { ScrollArea } from '@shared/shadcn/ui/scroll-area'
import { cn } from '@shared/ui'

type Props = {
  NavMenu: ReactNode
  children: ReactNode
  isInner?: boolean
}

export const NavMenuTemplate = ({ NavMenu, children, isInner = false }: Props) => {
  return (
    <div className="flex w-full h-full">
      <ScrollArea
        className={cn(
          'shrink-0 h-full bg-zinc-50 dark:bg-zinc-950 border-r text-sm',
          isInner ? 'w-64 lg:w-80' : 'w-56 lg:w-64',
        )}>
        {NavMenu}
      </ScrollArea>

      <div className="flex flex-1">{children}</div>
    </div>
  )
}
