import { icons } from 'lucide-react'

export type TIconProps = {
  className?: string
  name: keyof typeof icons
}

export const Icon = ({ className, name }: TIconProps) => {
  const LucideIcon = icons[name]

  return <LucideIcon className={className} />
}
