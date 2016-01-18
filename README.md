# typographic-arrows [![Build Status][travis-image]][travis-url]

> Use real arrows, not alphabetic substitutes

Micro module for real arrows.

## Install

```sh
npm install --save typographic-arrows
```

## Usage

```js
import arrows from 'typographic-arrows';

arrows('a <- b'); // a ← b
arrows('a -> b'); // a → b
arrows('a <-> b'); // a ↔ b
arrows('a <= b'); // a ⇐ b
arrows('a => b'); // a ⇒ b
arrows('a <=> b'); // a ⇔ b
```

## API

### arrows(input)

#### input

Type: `string`

Text for transform.

## License

MIT

[travis-url]: https://travis-ci.org/andrepolischuk/typographic-arrows
[travis-image]: https://travis-ci.org/andrepolischuk/typographic-arrows.svg?branch=master
