import { icons } from 'lucide-react'

export type TLink = {
  href: string
  icon?: keyof typeof icons
  name: string
}

export const NAV_MENU_LINKS: TLink[] = [
  {
    href: '/',
    icon: 'Sparkles',
    name: 'Home',
  },
  {
    href: '/writing',
    icon: 'PenLine',
    name: 'Writing',
  },
]

export const SocialLinks: TLink[] = [
  {
    href: 'https://twitter.com/xxtereshko',
    icon: 'Twitter',
    name: 'Twitter',
  },
  {
    href: 'https://github.com/xxtereshko',
    icon: 'Github',
    name: 'GitHub',
  },
  {
    href: 'https://instagram.com/xxtereshko',
    icon: 'Instagram',
    name: 'Instagram',
  },
]
