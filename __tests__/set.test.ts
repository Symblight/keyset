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

describe('Set function', () => {
  it('set values in object', () => {
    const result = update<Trips, UpdatedTrips>(state, (object) =>
      object.trips.$set(1, { name: 'alex' }).$set(2, { name: 'vi' })
    )
    expect(result).toEqual({
      trips: [{ name: 'alexey' }, { name: 'alex' }, { name: 'vi' }, {}, {}],
    })
  })
  it('set object in string', () => {
    const result = update('test', (object) =>
      object.$set('key', { obj: { user: 'Alexey' } })
    )
    expect(result).toEqual({ key: { obj: { user: 'Alexey' } } })
  })

  it('set object in new key', () => {
    const result = update({}, (object) =>
      object.$set('key', { obj: { user: 'Alexey' } }).key.obj.$set('root', true)
    )
    expect(result).toEqual({ key: { obj: { user: 'Alexey', root: true } } })
  })

  it('set array in new key', () => {
    const test = {
      user: {
        name: 'VI',
      },
    }
    const result = update(test, (object) =>
      object.user.$set('roots', []).roots.$set(0, { name: 'admin' })
    )

    expect(result).toEqual({
      user: {
        name: 'VI',
        roots: [{ name: 'admin' }],
      },
    })
  })

  it('callback set object in new key', () => {
    const result = update({}, (object) =>
      object
        .$set('key', {
          statement: {
            user: 'Alexey',
            allows: true,
            stack: ['react', 'nodejs'],
          },
        })
        .key.statement.$setBy((statement) => ({
          ...statement,
          user: 'Vi',
          job: 'dev',
        }))
        .$set('test', 'LOL')
    )
    expect(result).toEqual({
      key: {
        statement: {
          user: 'Vi',
          job: 'dev',
          allows: true,
          stack: ['react', 'nodejs'],
          test: 'LOL',
        },
      },
    })
  })
})
