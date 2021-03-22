import type { ParsedUrlQueryInput } from 'querystring'

import { isEmpty } from '@/lib/util/isEmpty'

/**
 * Removes keys with empty values from query params.
 */
export function sanitizeQueryParams(
  query: ParsedUrlQueryInput,
): ParsedUrlQueryInput {
  const sanitized: ParsedUrlQueryInput = {}

  Object.entries(query).forEach(([key, value]) => {
    if (!isEmpty(value)) {
      sanitized[key] = value
    }
  })

  return sanitized
}
