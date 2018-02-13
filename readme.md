# Next.js + Graphql

Use [Graphql](http://graphql.org/) files with [Next.js](https://github.com/zeit/next.js)

## Installation

```sh
npm install next-plugin-graphql
```

or

```sh
yarn add next-plugin-graphql
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const withGraphql = require('@zeit/next-graphql')
module.exports = withGraphql()
```

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const withGraphql = require('@zeit/next-graphql')
module.exports = withGraphql({
  webpack(config, options) {
    return config
  }
})
```
