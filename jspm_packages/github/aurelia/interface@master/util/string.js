/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.camelCase = camelCase;

  function camelCase() {
    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var result;
    str = str.trim().split(/\s/);
    result = str.shift();
    str.forEach(function (s) {
      result += s[0].toUpperCase() + s.slice(1);
    });
    return result;
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvc3RyaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sV0FBUyxTQUFTLEdBQVc7UUFBVixHQUFHLHlEQUFHLEVBQUU7O0FBQ2hDLFFBQUksTUFBTSxDQUFDO0FBQ1gsT0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsVUFBTSxHQUFHLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUNyQixPQUFHLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ2YsWUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNDLENBQUMsQ0FBQTtBQUNGLFdBQU8sTUFBTSxDQUFDO0dBQ2YiLCJmaWxlIjoidXRpbC9zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY2FtZWxDYXNlKHN0ciA9ICcnKSB7XG4gIHZhciByZXN1bHQ7XG4gIHN0ciA9IHN0ci50cmltKCkuc3BsaXQoL1xccy8pO1xuICByZXN1bHQgPSBzdHIuc2hpZnQoKTtcbiAgc3RyLmZvckVhY2gocyA9PiB7XG4gICAgcmVzdWx0ICs9IHNbMF0udG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG4gIH0pXG4gIHJldHVybiByZXN1bHQ7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
