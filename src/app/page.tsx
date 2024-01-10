import { Mouse } from 'lucide-react'
import dynamic from 'next/dynamic'

import { Bookshelf } from '@entities/bookshelf'
import { TBook } from '@entities/bookshelf/types'
import { RandomAnimal } from '@entities/random-animal'
import { ThemeToggle } from '@entities/theme'

const Easter = dynamic(() => import('../features/easter/easter'), { ssr: false })

const books = [
  {
    category: 'Git, MacOS',
    href: '/',
    title: 'Несколько Git профилей на одном устройстве',
  },
] satisfies TBook[]

export default function Home() {
  return (
    <>
      <Easter />

      <div className="relative flex flex-col items-center justify-center min-h-screen w-screen">
        <div className="space-y-1 w-48 flex flex-1 justify-center flex-col select-none">
          <h2 className="text-2xl font-semibold tracking-tight cursor-default">
            @xxtereshko
          </h2>

          <RandomAnimal />
        </div>

        <Mouse
          className="w-6 h-6 absolute left-1/2 -translate-x-2/4 bottom-4"
          strokeWidth={1}
        />
      </div>

      <Bookshelf books={books} title="Если любишь почитать" />

      <div className="flex items-center justify-center mt-36 mb-8">
        <ThemeToggle />
      </div>
    </>
  )
}
