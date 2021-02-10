import { pipe } from '../utils/pipe'
import { deepCopy } from '../utils/deepCopy'
import { TTools, StatementObject, TSettings } from '../types/index.h'
import { initTools, clearTools } from './init'

const isPrimitive = <O = unknown>(value: O): boolean => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'undefined'
  )
}

export const update = <O = unknown, R = unknown>(
  object: O,
  callback: (v: StatementObject<O & TTools<O>>) => void,
  settings: TSettings = {
    withDeepCopy: true,
  }
): R => {
  const { withDeepCopy } = settings
  const store = isPrimitive(object) ? {} : object
  const nested = withDeepCopy ? deepCopy(store) : store

  pipe(initTools, callback, clearTools)(nested)

  return nested as R
}

export default update
