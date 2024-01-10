import { TBook } from '@entities/bookshelf/types'
import { ScrollArea, ScrollBar } from '@shared/shadcn/ui/scroll-area'

import { Book } from '../book'

type Props = {
  books: TBook[]
  title: string
}

export const Bookshelf = ({ books, title }: Props) => {
  if (books.length === 0) {
    return null
  }

  return (
    <div className="container my-8 py-8 sm:pt-14 sm:pb-16 sm:rounded-3xl bg-neutral-50 dark:bg-neutral-900">
      <div className="container px-4 sm:px-8 md:px-16 mb-10">
        <h2 className="font-bold tracking-tight text-transparent text-xl sm:text-2xl bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-950 dark:from-neutral-300 dark:to-neutral-50">
          {title}
        </h2>
      </div>

      <ScrollArea className="w-full whitespace-nowrap scroll-smooth -my-5">
        <div className="flex w-max space-x-8 px-4 sm:px-8 md:px-16">
          {books.map((book, index) => (
            <Book key={`${book.href}-${index}`} {...book} />
          ))}
        </div>

        <ScrollBar className="opacity-0" orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}
