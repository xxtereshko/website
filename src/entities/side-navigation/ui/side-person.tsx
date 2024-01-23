import Image from 'next/image'
import Link from 'next/link'

import { Avatar, AvatarFallback, AvatarImage } from '@shared/shadcn/ui/avatar'

type Props = {
  imageSrc: string
  name: string
  position: string
}

export const SidePerson = ({ imageSrc, name, position }: Props) => {
  return (
    <Link
      className="link-card inline-flex items-center rounded-md gap-2 px-2 py-1  focusable text-sm"
      href="/">
      <Avatar className="border">
        <AvatarImage asChild src={imageSrc}>
          <Image alt={name} height={40} src={imageSrc} width={40} />
        </AvatarImage>
        <AvatarFallback delayMs={250}>M</AvatarFallback>
      </Avatar>

      <div className="flex flex-col">
        <span className="font-semibold tracking-tight">{name}</span>
        <span className="text-muted-foreground">{position}</span>
      </div>
    </Link>
  )
}
