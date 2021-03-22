/**
 * Groups object keys alphabetically.
 */
export function groupAlphabetically<T>(
  obj: Record<string, T>,
): Record<string, Record<string, T>> {
  const grouped: Record<string, Record<string, T>> = {}

  Object.entries(obj).forEach(([key, value]) => {
    const firstChar = key.charAt(0).toLowerCase()

    if (grouped[firstChar] === undefined) {
      grouped[firstChar] = {}
    }

    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    grouped[firstChar]![key] = value
  })

  return grouped
}
