import { allWritings } from 'contentlayer/generated'

import { WritingListItem } from '@entities/writing/ui'
import { ScrollArea } from '@shared/shadcn/ui/scroll-area'
import { NavMenuTemplate } from '@shared/ui/templates'

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <NavMenuTemplate
      NavMenu={
        <ScrollArea className="h-screen">
          <div className="flex flex-col">
            <div className="border-b px-6 py-4">
              <span className="font-semibold">Writings</span>
            </div>
            <div className="flex-1 flex flex-col gap-2 p-3">
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
          </div>
        </ScrollArea>
      }
      isInner>
      {children}
    </NavMenuTemplate>
  )
}
