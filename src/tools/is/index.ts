import { baseGet } from '../base'
import { isEqual } from '../../utils'

export function has(
  store: any,
  path: unknown[] | string | number,
  value: unknown
): boolean {
  return isEqual(baseGet(store, path), value)
}
