/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var spinnerDialog = _plugins.Plugins.getPlugin('spinnerDialog');

  var SpinnerDialog = (function () {
    function SpinnerDialog() {
      _classCallCheck(this, SpinnerDialog);

      this.isSupported = !!spinnerDialog;
    }

    _createClass(SpinnerDialog, [{
      key: 'show',
      value: function show(title, message) {
        var fixed = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

        if (this.isSupported) {
          return spinnerDialog.show(title, message, fixed);
        }
      }
    }, {
      key: 'hide',
      value: function hide() {
        if (this.isSupported) {
          return spinnerDialog.hide();
        }
      }
    }]);

    return SpinnerDialog;
  })();

  exports.SpinnerDialog = SpinnerDialog;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9zcGlubmVyLWRpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU1BLE1BQUksYUFBYSxHQUFHLFNBTlosT0FBTyxDQU1hLFNBQVMsQ0FBQyxlQUFlLENBQUMsQ0FBQzs7TUFDMUMsYUFBYTthQUFiLGFBQWE7NEJBQWIsYUFBYTs7V0FFeEIsV0FBVyxHQUFHLENBQUMsQ0FBQyxhQUFhOzs7aUJBRmxCLGFBQWE7O2FBSXBCLGNBQUMsS0FBSyxFQUFFLE9BQU8sRUFBaUI7WUFBZixLQUFLLHlEQUFHLEtBQUs7O0FBQ2hDLFlBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNwQixpQkFBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDbEQ7T0FDRjs7O2FBRUcsZ0JBQUc7QUFDTCxZQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDcEIsaUJBQU8sYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO09BQ0Y7OztXQWRVLGFBQWEiLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL3NwaW5uZXItZGlhbG9nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbHVnaW5zfSBmcm9tICcuL3BsdWdpbnMnO1xuLyoqXG4gKiBjbGFzcyBTcGlubmVyRGlhbG9nXG4gKiBAaW5zdGFsbCAgICQgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vU3Bpbm5lckRpYWxvZy5naXRcbiAqIEByZXNvdXJjZSAgaHR0cHM6Ly9naXRodWIuY29tL1BhbGRvbS9TcGlubmVyRGlhbG9nXG4gKi9cbmxldCBzcGlubmVyRGlhbG9nID0gUGx1Z2lucy5nZXRQbHVnaW4oJ3NwaW5uZXJEaWFsb2cnKTtcbmV4cG9ydCBjbGFzcyBTcGlubmVyRGlhbG9nIHtcblxuICBpc1N1cHBvcnRlZCA9ICEhc3Bpbm5lckRpYWxvZztcblxuICBzaG93KHRpdGxlLCBtZXNzYWdlLCBmaXhlZCA9IGZhbHNlKSB7XG4gICAgaWYgKHRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiBzcGlubmVyRGlhbG9nLnNob3codGl0bGUsIG1lc3NhZ2UsIGZpeGVkKTtcbiAgICB9XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm4gc3Bpbm5lckRpYWxvZy5oaWRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
