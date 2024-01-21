import { allWritings } from 'contentlayer/generated'

import { WritingListItem } from '@entities/writing/ui'
import { NavMenuTemplate } from '@shared/ui/templates'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <NavMenuTemplate
      NavMenu={
        <div className="flex flex-col gap-4 px-3 py-2">
          {allWritings.map(writing => (
            <WritingListItem
              key={writing._id}
              date={writing.date}
              description={writing.description ?? ''}
              href={`/writing/${writing.slugAsParams}`}
              title={writing.title}
            />
          ))}
        </div>
      }
      isInner>
      {children}
    </NavMenuTemplate>
  )
}
