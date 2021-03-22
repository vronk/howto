import { isEmptyArray } from '@/lib/util/isEmptyArray'
import { isEmptyObject } from '@/lib/util/isEmptyObject'
import { isEmptyString } from '@/lib/util/isEmptyString'
import { isNull } from '@/lib/util/isNull'
import { isUndefined } from '@/lib/util/isUndefined'

/**
 * Checks if a value is `undefined`, `null`, an empty string, array, or object.
 */
export function isEmpty(value: unknown): boolean {
  return (
    isUndefined(value) ||
    isNull(value) ||
    isEmptyString(value) ||
    isEmptyArray(value) ||
    isEmptyObject(value)
  )
}
