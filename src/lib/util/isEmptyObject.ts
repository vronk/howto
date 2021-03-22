import { countKeys } from '@/lib/util/countKeys'

/**
 * Type guard for empty object.
 */
export function isEmptyObject(value: unknown): value is Record<string, never> {
  return typeof value === 'object' && value !== null && countKeys(value) === 0
}
