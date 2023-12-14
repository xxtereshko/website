import { getRandomAnimal } from '@shared/lib/random'
import { capitalize, getArticle } from '@shared/lib/string'

import { useEffect, useState } from 'react'

const generateRandomAnimal = () => {
  const randomAnimal = getRandomAnimal()
  const article = getArticle(randomAnimal)

  return capitalize(`${article} ${randomAnimal}.`)
}

export const useRandomAnimal = () => {
  const [animal, setAnimal] = useState<string | null>(null)

  useEffect(() => {
    const randomAnimal = generateRandomAnimal()
    setAnimal(randomAnimal)
  }, [])

  return animal
}
