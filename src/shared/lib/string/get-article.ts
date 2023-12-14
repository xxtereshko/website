type TArticle = 'a' | 'an'

const VOWELS = ['a', 'e', 'i', 'o', 'u']

export const getArticle = (word: string): TArticle => {
  const firstLetter = word.trim()[0].toLowerCase()

  const isNumeric = !firstLetter.match(/[a-z]/i)
  if (isNumeric) {
    return 'a'
  }

  const isVowel = VOWELS.includes(firstLetter)
  if (isVowel) {
    return 'an'
  }

  return 'a'
}
