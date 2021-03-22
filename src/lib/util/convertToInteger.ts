import { convertToNumber } from '@/lib/util/convertToNumber'

/**
 * Converts a string to an integer.
 */
export function convertToInteger(value: string): number | undefined {
  const number = convertToNumber(value)
  if (!Number.isInteger(number)) return undefined
  return number
}
