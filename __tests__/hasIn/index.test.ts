import { has } from '../../src'

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

describe('has function', () => {
  it('is the value the same by string path', () => {
    const result = has(user, 'name', 'Test')
    expect(result).toEqual(true)
  })
  it('is the value the same object by number from array', () => {
    const result = has(userArray, 1, userArray[1])
    expect(result).toEqual(true)
  })
  it('is the value the same value by path', () => {
    const result = has(user, ['job', 'type', 'name'], 'dev')
    expect(result).toEqual(true)
  })
  it('is the value the same value from array objects by path', () => {
    expect(has(userArray, [1, 'job', 'type', 'name'], 'prod')).toEqual(true)
  })
  it('is the value the same value from the object on the wrong path', () => {
    expect(has(user, ['job', 'type', 'age'], 26)).toEqual(false)
  })
  it('is the value the same value from the empty object', () => {
    expect(has({}, ['job', 'type', 'age'], 26)).toEqual(false)
  })
})
