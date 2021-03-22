/**
 * Type guard for empty array.
 */
export function isEmptyArray(value: unknown): value is [] {
  return Array.isArray(value) && value.length === 0
}
