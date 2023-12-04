'use client'

import { Skeleton } from '@shared/shadcn/ui/skeleton'
import { useEffect, useState } from 'react'
import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator'
import { prependArticle } from './lib'

export const RandomAnimal = () => {
  const [shortName, setShortName] = useState('')

  useEffect(() => {
    const uniqueName = uniqueNamesGenerator({
      dictionaries: [adjectives, animals],
      separator: ' ',
      length: 2,
    })

    setShortName(prependArticle(`${uniqueName}.`))
  }, [])

  if (!shortName) {
    return <Skeleton className="w-[100px] h-[20px] rounded-full" />
  }

  return <p className="text-sm text-muted-foreground">{shortName}</p>
}
