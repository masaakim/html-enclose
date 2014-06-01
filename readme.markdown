# html-enclose [![Build Status](https://travis-ci.org/morishitter/html-enclose.svg)](https://travis-ci.org/morishitter/html-enclose)

Enclose the string HTML tag

## Installation

```shell
$ npm install html-enclose
```

## Example

```javascript
var enclose = require('html-enclose');

var str = "sample string";

enclose(str, 'p');
/*
 *  <p>sample string</p>
 */
```

## License

The MIT License (MIT)

Copyright (c) 2014 Masaaki Morishita
