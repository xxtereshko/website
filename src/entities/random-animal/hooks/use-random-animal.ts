import { useEffect, useState } from 'react'

import { getRandomAnimal } from '@shared/lib/random'
import { capitalize, getArticle } from '@shared/lib/string'

const generateRandomAnimal = () => {
  const randomAnimal = getRandomAnimal()
  const article = getArticle(randomAnimal)

  return capitalize(`${article} ${randomAnimal}.`)
}

export const useRandomAnimal = () => {
  const [animal, setAnimal] = useState<null | string>(null)

  useEffect(() => {
    const randomAnimal = generateRandomAnimal()
    setAnimal(randomAnimal)
  }, [])

  return animal
}
