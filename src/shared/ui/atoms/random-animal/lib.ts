export const prependArticle = (word: string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  const firstLetter = word.trim()[0].toLowerCase()

  if (vowels.includes(firstLetter)) {
    return 'An ' + word
  }

  return 'A ' + word
}
