export type TKey = string | number

export type ExtendObject<
  T extends Record<string, any>,
  K extends TKey,
  V
> = K extends keyof T // key already exists?
  ? T[K] & V extends never // incompatible type?
    ? Omit<T, K> & Record<K, V> // overwrite type
    : T[K] | V // just choose some common type
  : T & Record<K, V>

export type StatementObject<T> = {
  [key in keyof T]: T[key] & TTools<T[key]>
}

export type TSet<T> = <K extends TKey, V>(
  key: K | ((v: T) => V),
  value?: V
) => StatementObject<ExtendObject<T, K, StatementObject<V & TTools<T>>>> &
  TTools<T>

export type TCallbackSet<T> = <V>(
  callback: (v: T) => V
) => StatementObject<V> & TTools<T>

export type TRemove<T> = <K extends TKey>(key: K) => Omit<T, K> & TTools<T>

export interface TTools<T extends Record<string, any>> {
  $set: TSet<T>
  $setBy: TCallbackSet<T>
  $remove: TRemove<T>
}

export interface TSettings {
  withDeepCopy: boolean
}
