# Javascript object toolset

## get started
```bash
npm install @symblight/keyset
```

## tools
- [update](###update)
- [get](###get)
- [set](###set)
- [remove](###remove)
- [setBy](###setBy)
- [deepCopy](###deepCopy)
- [pipe](###pipe)
- [compose](###compose)

### update

Mutate a copy of data without changing the original source

```js
import {update} from '@symblight/keyset'

const updated = update<EntryType, OutputType>({}, (object) =>
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
        .$remove('test')
	)

console.log(updated)

/*
{
      key: {
        statement: {
          user: 'Vi',
          job: 'dev',
          allows: true,
          stack: ['react', 'nodejs'],
        },
      },
    }
*/

```

### get

```js
import { get } from '@symblight/keyset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = get(game, ['state', 'type', 'tag']) // output: dev
```

### set
```js
import { set } from '@symblight/keyset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = set(game, ['state', 'type', 'tag'], 'prod') // output: object game
```

### remove
```js
import { remove } from '@symblight/keyset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = remove(game, ['state', 'type', 'tag']) // output: object game
```

### setBy
```js
import { setBy } from '@symblight/keyset'

const game = {
  name: 'cyberpunk',
  state: {
    title: 'Game',
    type: {
      tag: 'dev',
    },
  },
}

const result = setBy(game, ['state', 'type'], (type) => ({ tag: 'prod', version: 1 })) // output: object game
```

### deepCopy
Copy prototype properties as well as own properties into the new object. by [`rfdc`](https://www.npmjs.com/package/rfdc):

```js
import {deepCopy} from '@symblight/keyset'

const copied = deepCopy(copied)
```

### pipe

```js
import {pipe} from '@symblight/keyset'

const result = pipe(fn1, fn2, fn3)(object)
```
### compose

```js
import {compose} from '@symblight/keyset'

const result = compose(fn1, fn2, fn3)(object)
```