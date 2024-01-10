import Link from 'next/link'

import { TBook } from '@entities/bookshelf/types'

type Props = TBook

export const Book = ({ category, href, title }: Props) => {
  return (
    <Link
      prefetch
      className="shrink-0 my-5 perspective-750 cursor-pointer rounded-md ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
      href={href}>
      <div className="relative select-none transform-style-3d will-change-transform transform-gpu duration-500 hover:-translate-x-2 hover:scale-105 hover:-rotate-y-25">
        <div className="h-[260px] sm:h-[280px] w-[240px] sm:w-[260px] flex flex-row flex-wrap items-stretch bg-gradient-to-b from-neutral-700 to-neutral-800 dark:from-neutral-300 dark:to-neutral-400 rounded-l-md rounded-r-sm">
          <div className="w-[16px] sm:w-[24px] h-full book-spine-gradient opacity-20" />

          <div className="w-[224px] sm:w-[236px] whitespace-break-spaces px-4 py-5 flex flex-col justify-between">
            <h3 className="tracking-tight font-bold text-md sm:text-lg text-neutral-100 dark:text-neutral-900">
              {title}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-400 dark:text-neutral-600">
              {category}
            </p>
          </div>
        </div>

        {/* Book's pages */}
        <div className="absolute top-1 bottom-1 w-[30px] bg-neutral-100 rotate-y-90 -translate-z-8 translate-x-[220px] sm:translate-x-[240px]" />

        {/* Book's back side */}
        <div className="absolute top-0 -translate-z-8 h-[260px] sm:h-[280px] w-[240px] sm:w-[260px] rounded-l-md rounded-r-sm bg-gradient-to-b from-neutral-800 to-neutral-900 dark:from-neutral-400 dark:to-neutral-500" />
      </div>
    </Link>
  )
}
