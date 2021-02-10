export const compose = (...fns: any[]) => (x: any) =>
  fns.reduceRight((v, f) => f(v), x)
