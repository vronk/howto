/**
 * Asserts context provider.
 */
export class MissingProviderError extends Error {
  name = 'MissingProviderError'

  constructor(hook: string, provider: string) {
    super(`\`${hook}\` must be nested inside a \`${provider}\`.`)
  }
}
