import { set, remove } from '../tools'
import { TKey } from '../types/index.h'

function toolsset() {
  return {
    $set(path: TKey, value?: unknown) {
      if (
        Array.isArray(path) ||
        typeof path === 'string' ||
        typeof path === 'number'
      ) {
        return set(this, path, value, { withDeepCopy: false })
      }
      return this
    },
    $setBy<T = unknown>(callback: (v: T) => void) {
      if (typeof callback === 'function') {
        const args = this as unknown
        return Object.assign(this, callback(args as T))
      }
      return this
    },
    $remove(path: TKey) {
      return remove(this, path, { withDeepCopy: false })
    },
  }
}

export function initTools(nested: unknown) {
  const proto = Object.getPrototypeOf(nested)
  proto.$set = toolsset().$set
  proto.$setBy = toolsset().$setBy
  proto.$remove = toolsset().$remove

  return nested
}

export function clearTools(nested: unknown) {
  if (nested !== undefined) {
    const proto = Object.getPrototypeOf(nested)
    delete proto.$remove
    delete proto.$set
    delete proto.$setBy
  }
  return nested
}
