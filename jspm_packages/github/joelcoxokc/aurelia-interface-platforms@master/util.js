/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.filter = filter;
  exports.dot = dot;
  exports.ISify = ISify;

  function filter(collection, callback, context) {
    context = context || null;
    var result = [];
    for (var key in collection) {
      var isValid = callback.call(null, collection[key]);
      if (isValid) {
        result.push(collection[key]);
      }
    }
    return result;
  }

  function dot(key, value) {
    return value ? [key, value].join('.') : key;
  }

  function ISify(name) {
    return name[0].toUpperCase() + name.slice(1);
  }
});