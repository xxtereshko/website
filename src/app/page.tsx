import { RandomAnimal } from '@shared/ui/atoms/random-animal'

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="space-y-1 w-48">
        <h2 className="text-2xl font-semibold tracking-tight">@xxtereshko</h2>
        <RandomAnimal />
      </div>
    </div>
  )
}
