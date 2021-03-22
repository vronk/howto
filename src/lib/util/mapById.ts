/**
 * Maps items by an `id` key.
 */
export function mapById<
  T extends { [id in K]: string | number },
  K extends string
>(items: Array<T> | undefined, idKey: K): Record<string, T> {
  const map: Record<string | number, T> = {}

  if (items === undefined) return map

  items.forEach((item) => {
    const id = item[idKey]
    map[id] = item
  })

  return map
}
