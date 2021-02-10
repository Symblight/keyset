import { is } from '../../src'

const user = {
  name: 'Test',
  age: 26,
  job: {
    title: 'Test',
    type: {
      name: 'dev',
    },
  },
}

const userArray = [
  {
    name: 'Test',
    age: 26,
    job: {
      title: 'Test',
      type: {
        name: 'dev',
      },
    },
  },
  {
    name: 'Test-2',
    age: 24,
    job: {
      title: 'Test',
      type: {
        name: 'prod',
      },
    },
  },
]

describe('is function', () => {
  it('has the value by string path', () => {
    const result = is(user, 'name')
    expect(result).toEqual(true)
  })
  it('has the value  by number from array', () => {
    const result = is(userArray, 1)
    expect(result).toEqual(true)
  })
  it('has the value by path', () => {
    const result = is(user, ['job', 'type', 'name'])
    expect(result).toEqual(true)
  })
  it('has the value from array objects by path', () => {
    expect(is(userArray, [1, 'job', 'type', 'name'])).toEqual(true)
  })
  it('has the value from the object on the wrong path', () => {
    expect(is(user, ['job', 'type', 'age'])).toEqual(false)
  })
  it('has the value from the empty object', () => {
    expect(is({}, ['job', 'type', 'age'])).toEqual(false)
  })
})
