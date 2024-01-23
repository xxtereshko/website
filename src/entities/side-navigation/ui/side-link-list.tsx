import { cn } from '@shared/ui'

import { TSideNavigationLink } from '../types'
import { SideLinkItem } from './side-link-item'

type Props = {
  className?: string
  links: TSideNavigationLink[]
}

export const SideLinkList = ({ className, links }: Props) => {
  return (
    <div className={cn('flex flex-col gap-1', className)}>
      {links.map(link => (
        <SideLinkItem key={link.href} {...link} />
      ))}
    </div>
  )
}
