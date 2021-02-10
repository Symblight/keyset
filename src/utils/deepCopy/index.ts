import rfdc from 'rfdc'

export const deepCopy = <O = unknown>(value: O): O => {
  const clone = rfdc()
  return clone(value)
}
