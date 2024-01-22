import Link from 'next/link'

import { Avatar, AvatarImage } from '@shared/shadcn/ui/avatar'

type Props = {
  image: string
  name: string
  position: string
}

export const NavPerson = ({ image, name, position }: Props) => {
  return (
    <Link className="link-card inline-flex items-center gap-2 p-2" href="/">
      <Avatar className="border">
        <AvatarImage src={image} />
      </Avatar>

      <div className="flex flex-col">
        <span className="font-semibold tracking-tight">{name}</span>
        <span className="text-muted-foreground">{position}</span>
      </div>
    </Link>
  )
}
