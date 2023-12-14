export const capitalize = (input: string): string => {
  if (!input) {
    return input
  }

  return input.charAt(0).toUpperCase() + input.slice(1)
}
