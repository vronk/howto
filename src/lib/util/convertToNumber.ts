/**
 * Converts a string to a number.
 * Returns `undefined` for empty and invalid input strings.
 */
export function convertToNumber(value: string): number | undefined {
  /** `Number('') === 0` */
  if (value.length === 0) return undefined

  const number = Number(value)

  /** `Number.isNaN(Number('not-a-number')) === true` */
  if (Number.isNaN(number)) return undefined

  return number
}
