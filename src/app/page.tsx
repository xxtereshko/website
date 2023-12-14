import { RandomAnimal } from '@entities/random-animal'
import { ThemeToggle } from '@entities/theme'
import dynamic from 'next/dynamic'

const Easter = dynamic(() => import('../features/easter/easter'), {
  ssr: false,
})

export default function Home() {
  return (
    <>
      <Easter />
      <div className="flex flex-col items-center justify-center min-h-screen w-screen">
        <div className="space-y-1 w-48 flex flex-1 justify-center flex-col select-none">
          <h2 className="text-2xl font-semibold tracking-tight cursor-default">
            @xxtereshko
          </h2>
          <RandomAnimal />
        </div>

        <div className="my-4">
          <ThemeToggle />
        </div>
      </div>
    </>
  )
}
