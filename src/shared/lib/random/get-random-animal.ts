import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator'

export const getRandomAnimal = () => {
  const randomAnimal = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    length: 2,
    separator: ' ',
  })

  return randomAnimal
}
