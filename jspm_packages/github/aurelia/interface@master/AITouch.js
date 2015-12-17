/* */ 
define(['exports', 'hammer'], function (exports, _hammer) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var _bind = Function.prototype.bind;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Hammer = _interopRequireDefault(_hammer);

  var AITouch = (function () {
    function AITouch() {
      _classCallCheck(this, AITouch);
    }

    _createClass(AITouch, [{
      key: 'touchControl',
      value: function touchControl(element) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        return new _Hammer['default'].Manager(element, options);
      }
    }], [{
      key: 'Tap',
      value: function Tap() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new (_bind.apply(_Hammer['default'].Tap, [null].concat(args)))();
      }
    }]);

    return AITouch;
  })();

  exports.AITouch = AITouch;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFJVG91Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztNQUdhLE9BQU87YUFBUCxPQUFPOzRCQUFQLE9BQU87OztpQkFBUCxPQUFPOzthQUtOLHNCQUFDLE9BQU8sRUFBZ0I7WUFBZCxPQUFPLHlEQUFHLEVBQUU7O0FBQ2hDLGVBQU8sSUFBSSxtQkFBTyxPQUFPLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO09BQzdDOzs7YUFMUyxlQUFVOzBDQUFOLElBQUk7QUFBSixjQUFJOzs7QUFDaEIsZ0NBQVcsbUJBQU8sR0FBRyxnQkFBSSxJQUFJLE1BQUU7T0FDaEM7OztXQUpVLE9BQU8iLCJmaWxlIjoiQUlUb3VjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyJztcblxuXG5leHBvcnQgY2xhc3MgQUlUb3VjaCB7XG5cbiAgc3RhdGljIFRhcCguLi5hcmdzKSB7XG4gICAgcmV0dXJuIG5ldyBIYW1tZXIuVGFwKC4uLmFyZ3MpO1xuICB9XG4gIHRvdWNoQ29udHJvbChlbGVtZW50LCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gbmV3IEhhbW1lci5NYW5hZ2VyKGVsZW1lbnQsIG9wdGlvbnMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
