import { set, deepCopy } from '../../src'

const user = {
  name: 'Test',
  age: 26,
  job: {
    title: 'Test',
    type: {
      name: 'dev',
      item: 'rest',
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

describe('set function', () => {
  it('set value in object by string path', () => {
    const result = set(user, 'name', 'Test-5')
    expect(result).toEqual({
      ...user,
      name: 'Test-5',
    })
  })
  it('set value in object by number to array', () => {
    const result = set(userArray, 1, user)
    expect(result).toEqual([userArray[0], user])
  })
  it('set value in object', () => {
    const result = set(user, ['job', 'type', 'status'], 'online')
    expect(result).toEqual({
      ...user,
      job: {
        ...user.job,
        type: {
          ...user.job.type,
          status: 'online',
        },
      },
    })
  })
  it('set value in array', () => {
    const result = set(arrayTest, [1], { status: 'online' })
    expect(result).toEqual([
      'user',
      {
        status: 'online',
      },
      'root',
    ])
  })
  it('set value in array of objects', () => {
    const result = set(userArray, [1, 'job', 'type', 'status'], 'online')
    expect(result).toEqual([
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
            status: 'online',
          },
        },
      },
    ])
  })
  it('set value in empty object', () => {
    const result = set({}, ['job', 'type', 'status'], 'online')
    expect(result).toEqual({
      job: {
        type: {
          status: 'online',
        },
      },
    })
  })
  it('set value in empty array', () => {
    const result = set([], [1, 'job', 'type', 'status'], 'online')
    expect(result).toEqual([
      undefined,
      {
        job: {
          type: {
            status: 'online',
          },
        },
      },
    ])
  })
  it('set empty value in object', () => {
    const result = set(user, ['job', 'type', 'status'], undefined)
    expect(result).toEqual({
      name: 'Test',
      age: 26,
      job: {
        title: 'Test',
        type: {
          name: 'dev',
          item: 'rest',
          status: undefined,
        },
      },
    })
  })
  it('set empty value in array', () => {
    const result = set(arrayTest, [5], '')
    expect(result).toEqual(['user', 'admin', 'root', undefined, undefined, ''])
  })
})
