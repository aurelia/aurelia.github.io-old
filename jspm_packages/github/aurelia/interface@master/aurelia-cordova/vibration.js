/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var notification = _plugins.Plugins.fromNavigator('notification');

  var Vibration = (function () {
    function Vibration() {
      _classCallCheck(this, Vibration);

      this.isSupported = !!notification.vibrate && !!notification.vibrateWithPattern && !!notification.cancelVibration;
    }

    _createClass(Vibration, [{
      key: 'vibrate',
      value: function vibrate(times) {
        if (this.isSupported) {
          return notification.vibrate(times);
        }
      }
    }, {
      key: 'vibrateWithPattern',
      value: function vibrateWithPattern(pattern, repeat) {
        if (this.isSupported) {
          return notification.vibrateWithPattern(pattern, repeat);
        }
      }
    }, {
      key: 'cancelVibration',
      value: function cancelVibration() {
        if (this.isSupported) {
          return notification.cancelVibration();
        }
      }
    }]);

    return Vibration;
  })();

  exports.Vibration = Vibration;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS92aWJyYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxNQUFJLFlBQVksR0FBRyxTQVBYLE9BQU8sQ0FPWSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7O01BQzVDLFNBQVM7YUFBVCxTQUFTOzRCQUFULFNBQVM7O1dBRXBCLFdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLGtCQUFrQixJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsZUFBZTs7O2lCQUZoRyxTQUFTOzthQUdiLGlCQUFDLEtBQUssRUFBRTtBQUNiLFlBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNwQixpQkFBTyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3BDO09BQ0Y7OzthQUVpQiw0QkFBQyxPQUFPLEVBQUUsTUFBTSxFQUFFO0FBQ2xDLFlBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNwQixpQkFBTyxZQUFZLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3pEO09BQ0Y7OzthQUVjLDJCQUFHO0FBQ2hCLFlBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNwQixpQkFBTyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDdkM7T0FDRjs7O1dBbkJVLFNBQVMiLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL3ZpYnJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcbi8qKlxuICogY2xhc3MgVmlicmF0aW9uXG4gKlxuICogQGluc3RhbGwgICQgIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb25cbiAqIEByZXNvdXJjZSBodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXZpYnJhdGlvblxuICovXG5sZXQgbm90aWZpY2F0aW9uID0gUGx1Z2lucy5mcm9tTmF2aWdhdG9yKCdub3RpZmljYXRpb24nKTtcbmV4cG9ydCBjbGFzcyBWaWJyYXRpb24ge1xuXG4gIGlzU3VwcG9ydGVkID0gISFub3RpZmljYXRpb24udmlicmF0ZSAmJiAhIW5vdGlmaWNhdGlvbi52aWJyYXRlV2l0aFBhdHRlcm4gJiYgISFub3RpZmljYXRpb24uY2FuY2VsVmlicmF0aW9uXG4gIHZpYnJhdGUodGltZXMpIHtcbiAgICBpZiAodGhpcy5pc1N1cHBvcnRlZCkge1xuICAgICAgcmV0dXJuIG5vdGlmaWNhdGlvbi52aWJyYXRlKHRpbWVzKTtcbiAgICB9XG4gIH1cblxuICB2aWJyYXRlV2l0aFBhdHRlcm4ocGF0dGVybiwgcmVwZWF0KSB7XG4gICAgaWYgKHRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiBub3RpZmljYXRpb24udmlicmF0ZVdpdGhQYXR0ZXJuKHBhdHRlcm4sIHJlcGVhdCk7XG4gICAgfVxuICB9XG5cbiAgY2FuY2VsVmlicmF0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm4gbm90aWZpY2F0aW9uLmNhbmNlbFZpYnJhdGlvbigpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
