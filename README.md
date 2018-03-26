# await-to-ts

[![Greenkeeper badge](https://badges.greenkeeper.io/phra/await-to-ts.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Downloads][download-badge]][npm-url]
[![Coveralls][coveralls-image]][coveralls-url]

> Async await wrapper for easy error handling

 ## Pre-requisites
You need to use Node 7.6 (or later) with esnext target in order to use native async/await functionality. Target ES2015 (Node v4) or ES2016 (node v6) in your TypeScript compiler options if you are using an older version.

## Install

```sh
yarn add await-to-ts
```

OR

```sh
npm i --save await-to-ts
```

## Usage

```js
import to from 'await-to-ts'

const f = () => Promise.resolve(42)
const g = () => Promise.resolve('42')

async function main() {
  const [err, n] = await to(f())
  if (err) {
    throw err
  }

  console.log(n) // n is a number

  const [err1, s] = await to(g())
  if (err1) {
    throw err1
  }

  console.log(s) // s is a string
}

main().catch(console.err.bind(console))
```

[npm-url]: https://npmjs.org/package/await-to-ts
[npm-image]: https://img.shields.io/npm/v/await-to-ts.svg?style=flat-square

[travis-url]: https://travis-ci.org/phra/await-to-ts
[travis-image]: https://img.shields.io/travis/phra/await-to-ts.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/phra/await-to-ts
[coveralls-image]: https://img.shields.io/coveralls/phra/await-to-ts.svg?style=flat-square

[depstat-url]: https://david-dm.org/phra/await-to-ts
[depstat-image]: https://david-dm.org/phra/await-to-ts.svg?style=flat-square

[download-badge]: https://img.shields.io/npm/dt/await-to-ts.svg?style=flat-square
