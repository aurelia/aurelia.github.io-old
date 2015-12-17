/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var touchid = window.touchid;

  var TouchID = (function () {
    function TouchID() {
      _classCallCheck(this, TouchID);

      this.isSupported = !!window.touchid;
    }

    _createClass(TouchID, [{
      key: 'checkSupport',
      value: function checkSupport() {
        var _this = this;

        return new Promise(function (resolve, reject) {
          if (!window.cordova) return reject('Cordova not found');
          if (!_this.isSupported) return reject('Plugin not supported');

          touchid.checkSupport(resolve, reject);
        });
      }
    }, {
      key: 'authenticate',
      value: function authenticate(message) {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          if (!window.cordova) return reject('Cordova not found');
          if (!_this2.isSupported) return reject('Plugin not supported');

          touchid.authenticate(resolve, reject, message);
        });
      }
    }]);

    return TouchID;
  })();

  exports.TouchID = TouchID;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS90b3VjaGlkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsTUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQzs7TUFDaEIsT0FBTzthQUFQLE9BQU87NEJBQVAsT0FBTzs7V0FFbEIsV0FBVyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTzs7O2lCQUZuQixPQUFPOzthQUlOLHdCQUFHOzs7QUFDYixlQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxjQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxPQUFPLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ3hELGNBQUksQ0FBQyxNQUFLLFdBQVcsRUFBRSxPQUFPLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOztBQUU3RCxpQkFBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDdkMsQ0FBQyxDQUFDO09BQ0o7OzthQUVXLHNCQUFDLE9BQU8sRUFBRTs7O0FBQ3BCLGVBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLGNBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDeEQsY0FBSSxDQUFDLE9BQUssV0FBVyxFQUFFLE9BQU8sTUFBTSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O0FBRTdELGlCQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDaEQsQ0FBQyxDQUFDO09BQ0o7OztXQXBCVSxPQUFPIiwiZmlsZSI6ImF1cmVsaWEtY29yZG92YS90b3VjaGlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIGNsYXNzIFRvdWNoSURcbiAqXG4gKiBAaW5zdGFsbCAgJCBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL2xlZWNyb3NzbGV5L2NvcmRvdmEtcGx1Z2luLXRvdWNoaWQuZ2l0XG4gKiBAcmVzb3VyY2UgaHR0cHM6Ly9naXRodWIuY29tL2xlZWNyb3NzbGV5L2NvcmRvdmEtcGx1Z2luLXRvdWNoaWRcbiAqL1xubGV0IHRvdWNoaWQgPSB3aW5kb3cudG91Y2hpZDtcbmV4cG9ydCBjbGFzcyBUb3VjaElEIHtcblxuICBpc1N1cHBvcnRlZCA9ICEhd2luZG93LnRvdWNoaWQ7XG5cbiAgY2hlY2tTdXBwb3J0KCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXdpbmRvdy5jb3Jkb3ZhKSByZXR1cm4gcmVqZWN0KCdDb3Jkb3ZhIG5vdCBmb3VuZCcpO1xuICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSByZXR1cm4gcmVqZWN0KCdQbHVnaW4gbm90IHN1cHBvcnRlZCcpO1xuXG4gICAgICB0b3VjaGlkLmNoZWNrU3VwcG9ydChyZXNvbHZlLCByZWplY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgYXV0aGVudGljYXRlKG1lc3NhZ2UpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF3aW5kb3cuY29yZG92YSkgcmV0dXJuIHJlamVjdCgnQ29yZG92YSBub3QgZm91bmQnKTtcbiAgICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCkgcmV0dXJuIHJlamVjdCgnUGx1Z2luIG5vdCBzdXBwb3J0ZWQnKTtcblxuICAgICAgdG91Y2hpZC5hdXRoZW50aWNhdGUocmVzb2x2ZSwgcmVqZWN0LCBtZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
