import { ThemeToggle } from '@entities/theme'
import { ScrollArea } from '@shared/shadcn/ui/scroll-area'

import { sideNavigationLinks, sideSocialLinks } from '../constants'
import { SideLinkList } from './side-link-list'
import { SidePerson } from './side-person'

type Props = {
  isCompact?: boolean
  onClick?: () => void
}

export const SideNavigation = ({ isCompact, onClick }: Props) => {
  if (isCompact) {
    return (
      <div className="flex flex-col gap-6">
        <SidePerson
          imageSrc="/avatar.jpg"
          name="Maxim Tereshko"
          position="Software Engineer"
        />
        <SideLinkList
          className="flex-1"
          links={sideNavigationLinks}
          onClick={onClick}
        />
        <SideLinkList links={sideSocialLinks} onClick={onClick} />
      </div>
    )
  }

  return (
    <ScrollArea className="h-screen">
      <div className="h-screen p-3 flex flex-col gap-3">
        <SidePerson
          imageSrc="/avatar.jpg"
          name="Maxim Tereshko"
          position="Software Engineer"
        />
        <SideLinkList className="flex-1" links={sideNavigationLinks} />
        <SideLinkList links={sideSocialLinks} />

        <ThemeToggle />
      </div>
    </ScrollArea>
  )
}
