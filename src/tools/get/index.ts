import { baseGet } from '../base'

export function get(store: any, path: unknown[] | string | number): any {
  return baseGet(store, path)
}
