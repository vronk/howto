/**
 * Returns number range.
 *
 * Assumes `end` is larger than `start`.
 */
export function range(start: number, end: number): Array<number> {
  return Array.from(Array(end - start + 1).keys()).map((i) => start + i)
}
