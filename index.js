'use strict';

var invoke    = require('invoke-fn');
var toInteger = require('to-integer');


module.exports = function (n, func) {

  if (typeof func !== 'function') {
    throw new TypeError('Argument error: Expected a function');
  }

  n = toInteger(n);

  return function () {
    if (--n < 1) {
      return invoke(func, this, arguments);
    }
  };
};

