import { update } from '../src'

const state = { trips: [{ name: 'alexey' }, {}, {}, {}, {}] }
const expectedTrips = [
  { name: 'alexey' },
  { name: 'alex' },
  { name: 'vi' },
  {},
  {},
]

type Trips = typeof state
type UpdatedTrips = typeof expectedTrips

describe('Remove function', () => {
  it('remove values in object', () => {
    const result = update<Trips, UpdatedTrips>(state, (object) =>
      object.trips.$set(1, { name: 'alex' }).$set(2, { name: 'vi' }).$remove(1)
    )
    expect(result).toEqual({
      trips: [{ name: 'alexey' }, { name: 'vi' }, {}, {}],
    })
  })
  it('remove values in object', () => {
    const test = { greet: { bar: { foo: 'foo' } }, test: 'lelt' }
    const result = update<typeof test, any>(test, (object) =>
      object.$remove('greet')
    )
    expect(result).toEqual({ test: 'lelt' })
  })
})
