import { ScrollArea } from '@shared/shadcn/ui/scroll-area'

import { sideNavigationLinks, sideSocialLinks } from '../constants'
import { SideLinkList } from './side-link-list'
import { SidePerson } from './side-person'

export const SideNavigation = () => {
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
      </div>
    </ScrollArea>
  )
}
