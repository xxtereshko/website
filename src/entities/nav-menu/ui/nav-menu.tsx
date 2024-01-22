'use client'

import { ScrollArea } from '@shared/shadcn/ui/scroll-area'

import { NAV_MENU_LINKS, SocialLinks } from '../constants'
import { NavLink } from './nav-link'
import { NavPerson } from './nav-person'

export const NavMenu = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="h-screen px-3 py-2">
        <div className="h-full flex flex-1 flex-col gap-4 select-none">
          <NavPerson
            image="https://avatars.githubusercontent.com/u/19520678?v=4"
            name="Maxim Tereshko"
            position="Software Engineer"
          />

          <div className="gap-1 flex-1 flex flex-col">
            {NAV_MENU_LINKS.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>

          <div className="gap-1 flex flex-col">
            {SocialLinks.map(link => (
              <NavLink key={link.href} {...link} />
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  )
}
