/**
 * Asserts exhaustive switch statement.
 *
 * @example
 * const value: 'apple' | 'orange' = 'apple'
 * switch (value) {
 *   case 'apple':
 *     return value
 *   default:
 *     throw new UnreachableCaseError(value)
 * }
 */
export class UnreachableCaseError extends Error {
  name = 'UnreachableCaseError'

  constructor(value: never) {
    super(`Unreachable case: ${JSON.stringify(value)}.`)
  }
}
