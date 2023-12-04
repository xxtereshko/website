import { RandomAnimal } from '@shared/ui/atoms/random-animal'
import { ModeToggle } from './toggle'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="space-y-1 w-48 flex flex-1 justify-center flex-col">
        <h2 className="text-2xl font-semibold tracking-tight">@xxtereshko</h2>
        <RandomAnimal />
      </div>

      <div className="my-4">
        <ModeToggle />
      </div>
    </div>
  )
}
