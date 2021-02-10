import { baseRemove } from '../base'
import { TSettings } from '../../types/index.h'
import { deepCopy } from '../../utils/deepCopy'

export function remove<S = unknown, R = unknown>(
  object: S,
  path: unknown[] | string | number,
  settings: TSettings = {
    withDeepCopy: true,
  }
): R {
  const { withDeepCopy } = settings
  const nested = withDeepCopy ? deepCopy(object) : object
  return baseRemove(nested, path) as R
}
