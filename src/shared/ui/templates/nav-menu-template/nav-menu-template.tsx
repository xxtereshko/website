import { ReactNode } from 'react'

import { cn } from '@shared/ui'

type Props = {
  NavMenu: ReactNode
  children: ReactNode
  isInner?: boolean
}

export const NavMenuTemplate = ({ NavMenu, children, isInner = false }: Props) => {
  return (
    <div className="flex w-full h-full items-stretch">
      <div
        className={cn(
          'hidden shrink-0 w-full h-full bg-zinc-50 dark:bg-zinc-950 border-r text-sm transition-[width]',
          isInner ? 'bg-white w-64 xl:w-80 lg:block' : 'w-56 lg:w-64 md:block',
        )}>
        {NavMenu}
      </div>

      <div className="flex flex-1 h-full">{children}</div>
    </div>
  )
}
