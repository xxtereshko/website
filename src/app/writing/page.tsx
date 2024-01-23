import { allWritings } from 'contentlayer/generated'

import { WritingListItem } from '@entities/writing/ui'

export default function Writing() {
  return (
    <div className="flex-1 flex flex-col gap-2 p-2 lg:hidden">
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
  )
}
