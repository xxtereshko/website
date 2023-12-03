'use client'

import { Skeleton } from '@shared/shadcn/ui/skeleton'
import { useEffect, useState } from 'react'
import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator'

export const RandomAnimal = () => {
  const [shortName, setShortName] = useState('')

  useEffect(() => {
    const uniqueName = uniqueNamesGenerator({
      dictionaries: [adjectives, animals], // colors can be omitted here as not used
      separator: ' ',
      length: 2,
    })

    setShortName(`The ${uniqueName}.`)
  }, [])

  if (!shortName) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />
  }

  return <p className="text-sm text-muted-foreground">{shortName}</p>
}
