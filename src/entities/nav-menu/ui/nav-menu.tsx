'use client'
import Link from 'next/link'

import { Avatar, AvatarImage } from '@shared/shadcn/ui/avatar'

import { NAV_MENU_LINKS, SocialLinks } from '../constants'
import { NavLink } from './nav-link'

export const NavMenu = () => {
  return (
    <div className="flex flex-col gap-4 h-full select-none px-3 py-2">
      <Link className="link-card inline-flex items-center gap-2 p-2" href="/">
        <Avatar className="border">
          <AvatarImage src="https://avatars.githubusercontent.com/u/19520678?v=4" />
        </Avatar>

        <div className="flex flex-col">
          <span className="font-semibold tracking-tight">Maxim Tereshko</span>
          <span className="text-muted-foreground">Software Engineer</span>
        </div>
      </Link>

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
  )
}
