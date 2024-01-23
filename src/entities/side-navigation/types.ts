import { icons } from 'lucide-react'

export type TSideNavigationLink = {
  href: string
  icon?: keyof typeof icons
  name: string
}
