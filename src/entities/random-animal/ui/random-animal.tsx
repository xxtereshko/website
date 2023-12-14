'use client'

import { Skeleton } from '@shared/shadcn/ui/skeleton'
import { useRandomAnimal } from '../hooks'

export const RandomAnimal = () => {
  const randomAnimal = useRandomAnimal()

  if (!randomAnimal) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />
  }

  return (
    <p className="text-sm text-muted-foreground cursor-default">{randomAnimal}</p>
  )
}
