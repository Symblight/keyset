import { baseSet } from '../base'
import { TSettings } from '../../types/index.h'
import { deepCopy } from '../../utils/deepCopy'

export function set(
  object: any,
  path: unknown[] | string | number,
  value: unknown,
  settings: TSettings = {
    withDeepCopy: true,
  }
): any {
  const { withDeepCopy } = settings
  const nested = withDeepCopy ? deepCopy(object) : object
  return baseSet(nested, path, value)
}
