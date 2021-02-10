import { baseSet } from '../base'
import { TSettings } from '../../types/index.h'
import { deepCopy } from '../../utils/deepCopy'

export function setBy(
  object: any,
  path: unknown[],
  callback: (item: any) => void,
  settings: TSettings = {
    withDeepCopy: true,
  }
): any {
  const { withDeepCopy } = settings
  const nested = withDeepCopy ? deepCopy(object) : object
  return baseSet(nested, path, callback)
}
