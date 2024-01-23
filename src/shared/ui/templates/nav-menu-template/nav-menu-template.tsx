import { ReactNode } from 'react'

import { cn } from '@shared/ui'

type Props = {
  NavMenu: ReactNode
  children: ReactNode
  isInner?: boolean
}

export const NavMenuTemplate = ({ NavMenu, children, isInner = false }: Props) => {
  return (
    <div className="min-h-screen flex">
      <div
        className={cn(
          'hidden transition-[width]',
          isInner ? 'lg:block w-64 xl:w-80' : 'md:block w-56 lg:w-64',
        )}>
        <div className={cn('sticky inset-0 border-r', !isInner && 'bg-sidebar')}>
          {NavMenu}
        </div>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  )
}
