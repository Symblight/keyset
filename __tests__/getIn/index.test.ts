import { get } from '../../src'

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

const arrayTest = ['user', 'admin', 'root']

describe('get function', () => {
  it('get value in object by string path', () => {
    const result = get(user, 'name')
    expect(result).toEqual('Test')
  })
  it('get value in object by number from array', () => {
    const result = get(userArray, 1)
    expect(result).toEqual(userArray[1])
  })
  it('get key from object by path', () => {
    const result = get(user, ['job', 'type', 'name'])
    expect(result).toEqual('dev')
    expect(get(user, ['job'])).toEqual({
      title: 'Test',
      type: {
        name: 'dev',
      },
    })
  })
  it('get key from array objects by path', () => {
    expect(get(userArray, [1, 'job', 'type', 'name'])).toEqual('prod')
    expect(get(arrayTest, [0])).toEqual('user')
  })
  it('get the key from the object on the wrong path', () => {
    expect(get(user, ['job', 'type', 'age'])).toBeUndefined()
  })
  it('get the key from the empty object', () => {
    expect(get({}, ['job', 'type', 'age'])).toBeUndefined()
  })
  it('get the key from the array by wrong the index', () => {
    expect(get(arrayTest, [4])).toBeUndefined()
  })
  it('get the key from the array of objects by wrong the path', () => {
    expect(get(arrayTest, [0, 'job', 'test'])).toBeUndefined()
  })
})
