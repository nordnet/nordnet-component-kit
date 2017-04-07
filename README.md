# Nordnet Component Kit

[![Greenkeeper badge](https://badges.greenkeeper.io/nordnet/nordnet-component-kit.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

## Installation
```bash
npm install --save nordnet-component-kit
```

## Usage
```javascript
import { Percent, Currency } from 'nordnet-component-kit';

// ... some code

<Percent value={ 0.23 } decimals={ 1 } />
<Currency value={ 45.345 } currency="SEK" />
```

## Documentation is available [here](https://nordnet.github.io/nordnet-component-kit).

To run the documentation locally, to this:
```bash
# With Hot Module Reloading
npm run docs:watch
# A static version (will end up in docs/)
npm run docs
```

## License
This open source project released by Nordnet is licensed under the MIT license.

MIT [license](/LICENSE)

[npm-url]: https://npmjs.org/package/nordnet-component-kit
[npm-image]: https://img.shields.io/npm/v/nordnet-component-kit.svg

[travis-url]: https://travis-ci.org/nordnet/nordnet-component-kit
[travis-image]: https://travis-ci.org/nordnet/nordnet-component-kit.svg?branch=master

[depstat-url]: https://david-dm.org/nordnet/nordnet-component-kit
[depstat-image]: https://david-dm.org/nordnet/nordnet-component-kit.svg

[coveralls-image]: https://coveralls.io/repos/github/nordnet/nordnet-component-kit/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/nordnet/nordnet-component-kit?branch=master
