import { adjectives, animals, uniqueNamesGenerator } from 'unique-names-generator'

export const getRandomAnimal = () => {
  const randomAnimal = uniqueNamesGenerator({
    dictionaries: [adjectives, animals],
    separator: ' ',
    length: 2,
  })

  return randomAnimal
}
