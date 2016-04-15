# invoke-after

> Returns a function that will only be executed after being called N times.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/gearcase/invoke-after/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/gearcase/invoke-after/master.svg?style=flat-square)](https://travis-ci.org/gearcase/invoke-after)
[![coverage:?](https://img.shields.io/coveralls/gearcase/invoke-after/master.svg?style=flat-square)](https://coveralls.io/github/gearcase/invoke-after)


## Install

```
$ npm install --save invoke-after 
```

## Usage

> For more use-cases see the [tests](https://github.com/gearcase/invoke-after/blob/master/test/spec/index.js)

```js

var invokeAfter = require('invoke-after');

// invokeAfter(n, func);

var c  = 0;
var fn = invokeBefore(3, function () {
  return ++c;
});

fn(); // => undefined
fn(); // => undefined
fn(); // => 1
fn(); // => 2
fn(); // => 3

```

## Related

- [invoke-before](https://github.com/gearcase/invoke-before) - Returns a function that will only be executed before being called N times.
- [invoke-once](https://github.com/gearcase/invoke-once) - Restrict the given function only be invoked once.
- [invoke-fn](https://github.com/gearcase/invoke-fn) - A faster alternative to `Function#apply`.
- [try-invoke](https://github.com/gearcase/try-invoke) - Attempts to invoke the given function, returning either the result or the caught error object.
- [is-native](https://github.com/gearcase/is-native) - Checks if the given value is a native function.
- [to-source-code](https://github.com/gearcase/to-source-code.git) - Converts function to its source code.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/gearcase/invoke-after/issues/new).
