/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var splashscreen = _plugins.Plugins.fromNavigator('splashscreen');

  var SplashScreen = (function () {
    function SplashScreen() {
      _classCallCheck(this, SplashScreen);

      this.isSupported = !!splashscreen;
    }

    _createClass(SplashScreen, [{
      key: '_validate',
      value: function _validate() {
        var error = undefined;
        var isSupported = this.isSupported;
        if (!this.isSupported) {
          error = 'SplashScreen plugin not installed!';
          return Promise.reject({ isSupported: isSupported, splashscreen: splashscreen });
        }

        return Promise.resolve(cb());
      }
    }, {
      key: 'show',
      value: function show() {
        return this._validate(function () {
          splashscreen.show();
        });
      }
    }, {
      key: 'hide',
      value: function hide() {
        return this._validate(function () {
          splashscreen.hide();
        });
      }
    }]);

    return SplashScreen;
  })();

  exports.SplashScreen = SplashScreen;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9zcGxhc2gtc2NyZWVuLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsTUFBSSxZQUFZLEdBQUcsU0FSWCxPQUFPLENBUVksYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDOztNQUM1QyxZQUFZO2FBQVosWUFBWTs0QkFBWixZQUFZOztXQUN2QixXQUFXLEdBQUcsQ0FBQyxDQUFDLFlBQVk7OztpQkFEakIsWUFBWTs7YUFHZCxxQkFBRztBQUNWLFlBQUksS0FBSyxZQUFBLENBQUM7QUFDVixZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ25DLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3JCLGVBQUssR0FBRyxvQ0FBb0MsQ0FBQztBQUM3QyxpQkFBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFYLFdBQVcsRUFBRSxZQUFZLEVBQVosWUFBWSxFQUFDLENBQUMsQ0FBQztTQUNwRDs7QUFFRCxlQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztPQUM5Qjs7O2FBRUcsZ0JBQUc7QUFDTCxlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBSztBQUN6QixzQkFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCLENBQUMsQ0FBQztPQUNKOzs7YUFFRyxnQkFBRztBQUNMLGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFLO0FBQ3pCLHNCQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDckIsQ0FBQyxDQUFDO09BQ0o7OztXQXhCVSxZQUFZIiwiZmlsZSI6ImF1cmVsaWEtY29yZG92YS9zcGxhc2gtc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbHVnaW5zfSBmcm9tICcuL3BsdWdpbnMnO1xuXG4vKipcbiAqIGNsYXNzIFNwbGFzaFNjcmVlblxuICpcbiAqIEBpbnN0YWxsICBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuXG4gKiBAbGluayAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW5cbiAqL1xubGV0IHNwbGFzaHNjcmVlbiA9IFBsdWdpbnMuZnJvbU5hdmlnYXRvcignc3BsYXNoc2NyZWVuJyk7XG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuIHtcbiAgaXNTdXBwb3J0ZWQgPSAhIXNwbGFzaHNjcmVlbjtcblxuICBfdmFsaWRhdGUoKSB7XG4gICAgbGV0IGVycm9yO1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IHRoaXMuaXNTdXBwb3J0ZWQ7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICBlcnJvciA9ICdTcGxhc2hTY3JlZW4gcGx1Z2luIG5vdCBpbnN0YWxsZWQhJztcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh7aXNTdXBwb3J0ZWQsIHNwbGFzaHNjcmVlbn0pO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2IoKSk7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZSgoKT0+IHtcbiAgICAgIHNwbGFzaHNjcmVlbi5zaG93KCk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZSgoKT0+IHtcbiAgICAgIHNwbGFzaHNjcmVlbi5oaWRlKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
