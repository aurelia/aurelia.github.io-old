/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var statusbar = _plugins.Plugins.fromWindow('StatusBar');

  var StatusBar = (function () {
    function StatusBar() {
      _classCallCheck(this, StatusBar);

      this.isSupported = !!statusbar;
      this.STYLES = {
        DEFAULT: 0,
        LIGHT_CONTENT: 1,
        BLACK_TRANSLUCENT: 2,
        BLACK_OPAQUE: 3
      };
    }

    _createClass(StatusBar, [{
      key: '_validate',
      value: function _validate(cb) {
        var error = undefined;
        var isSupported = this.isSupported;
        if (!isSupported) {
          error = 'StatusBar plugin not installed!';
          Promise.reject({ isSupported: isSupported, error: error });
          return false;
        }

        return cb();
      }
    }, {
      key: 'overlaysWebView',
      value: function overlaysWebView(bool) {
        return this._validate(function () {
          return statusbar.overlaysWebView(!!bool);
        });
      }
    }, {
      key: 'style',
      value: function style(_style) {
        return this._validate(function () {
          switch (_style) {
            case 0:
              return statusbar.styleDefault();

            case 1:
              return statusbar.styleLightContent();

            case 2:
              return statusbar.styleBlackTranslucent();

            case 3:
              return statusbar.styleBlackOpaque();

            default:
              return statusbar.styleDefault();
          }
        });
      }
    }, {
      key: 'styleColor',
      value: function styleColor(color) {
        return this._validate(function () {
          return statusbar.backgroundColorByName(color);
        });
      }
    }, {
      key: 'styleHex',
      value: function styleHex(colorHex) {
        return this._validate(function () {
          return statusbar.backgroundColorByHexString(colorHex);
        });
      }
    }, {
      key: 'hide',
      value: function hide() {
        return this._validate(function () {
          return statusbar.hide();
        });
      }
    }, {
      key: 'show',
      value: function show() {
        return this._validate(function () {
          return statusbar.show();
        });
      }
    }, {
      key: 'isVisible',
      value: function isVisible() {
        return this._validate(function () {
          return statusbar.isVisible;
        });
      }
    }]);

    return StatusBar;
  })();

  exports.StatusBar = StatusBar;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9zdGF0dXMtYmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsTUFBSSxTQUFTLEdBQUcsU0FSUixPQUFPLENBUVMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztNQUNuQyxTQUFTO2FBQVQsU0FBUzs0QkFBVCxTQUFTOztXQUNwQixXQUFXLEdBQUcsQ0FBQyxDQUFDLFNBQVM7V0FDekIsTUFBTSxHQUFHO0FBQ1AsZUFBTyxFQUFFLENBQUM7QUFDVixxQkFBYSxFQUFFLENBQUM7QUFDaEIseUJBQWlCLEVBQUUsQ0FBQztBQUNwQixvQkFBWSxFQUFFLENBQUM7T0FDaEI7OztpQkFQVSxTQUFTOzthQVNYLG1CQUFDLEVBQUUsRUFBRTtBQUNaLFlBQUksS0FBSyxZQUFBLENBQUM7QUFDVixZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ25DLFlBQUksQ0FBQyxXQUFXLEVBQUU7QUFDaEIsZUFBSyxHQUFHLGlDQUFpQyxDQUFDO0FBQzFDLGlCQUFPLENBQUMsTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFYLFdBQVcsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUNyQyxpQkFBTyxLQUFLLENBQUM7U0FDZDs7QUFFRCxlQUFPLEVBQUUsRUFBRSxDQUFDO09BQ2I7OzthQUtjLHlCQUFDLElBQUksRUFBRTtBQUNwQixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBSztBQUN6QixpQkFBTyxTQUFTLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7T0FDSjs7O2FBS0ksZUFBQyxNQUFLLEVBQUU7QUFDWCxlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBSztBQUN6QixrQkFBUSxNQUFLO0FBRVgsaUJBQUssQ0FBQztBQUNOLHFCQUFPLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7QUFBQSxBQUdoQyxpQkFBSyxDQUFDO0FBQ04scUJBQU8sU0FBUyxDQUFDLGlCQUFpQixFQUFFLENBQUM7O0FBQUEsQUFHckMsaUJBQUssQ0FBQztBQUNOLHFCQUFPLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztBQUFBLEFBR3pDLGlCQUFLLENBQUM7QUFDTixxQkFBTyxTQUFTLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzs7QUFBQSxBQUVwQztBQUNBLHFCQUFPLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUFBLFdBQ2pDO1NBQ0YsQ0FBQyxDQUFDO09BQ0o7OzthQUtTLG9CQUFDLEtBQUssRUFBRTtBQUNoQixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBSztBQUN6QixpQkFBTyxTQUFTLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0MsQ0FBQyxDQUFDO09BQ0o7OzthQUVPLGtCQUFDLFFBQVEsRUFBRTtBQUNqQixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBSztBQUN6QixpQkFBTyxTQUFTLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkQsQ0FBQyxDQUFDO09BQ0o7OzthQUVHLGdCQUFHO0FBQ0wsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQUs7QUFDekIsaUJBQU8sU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3pCLENBQUMsQ0FBQztPQUNKOzs7YUFFRyxnQkFBRztBQUNMLGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFLO0FBQ3pCLGlCQUFPLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUN6QixDQUFDLENBQUM7T0FDSjs7O2FBRVEscUJBQUc7QUFDVixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBSztBQUN6QixpQkFBTyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQzVCLENBQUMsQ0FBQztPQUNKOzs7V0F6RlUsU0FBUyIsImZpbGUiOiJhdXJlbGlhLWNvcmRvdmEvc3RhdHVzLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcblxuLyoqXG4gKiBjbGFzcyBTdGF0dXNCYXJcbiAqXG4gKiBAaW5zdGFsbCAgIDogICAgICBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyXG4gKiBAbGluayAgICAgIDogICAgICBodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXN0YXR1c2JhclxuICovXG5sZXQgc3RhdHVzYmFyID0gUGx1Z2lucy5mcm9tV2luZG93KCdTdGF0dXNCYXInKTtcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIge1xuICBpc1N1cHBvcnRlZCA9ICEhc3RhdHVzYmFyO1xuICBTVFlMRVMgPSB7XG4gICAgREVGQVVMVDogMCxcbiAgICBMSUdIVF9DT05URU5UOiAxLFxuICAgIEJMQUNLX1RSQU5TTFVDRU5UOiAyLFxuICAgIEJMQUNLX09QQVFVRTogM1xuICB9O1xuXG4gIF92YWxpZGF0ZShjYikge1xuICAgIGxldCBlcnJvcjtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSB0aGlzLmlzU3VwcG9ydGVkO1xuICAgIGlmICghaXNTdXBwb3J0ZWQpIHtcbiAgICAgIGVycm9yID0gJ1N0YXR1c0JhciBwbHVnaW4gbm90IGluc3RhbGxlZCEnO1xuICAgICAgUHJvbWlzZS5yZWplY3Qoe2lzU3VwcG9ydGVkLCBlcnJvcn0pO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiBjYigpO1xuICB9XG5cbiAgLyoqXG4gICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJvb2xcbiAgICAqL1xuICBvdmVybGF5c1dlYlZpZXcoYm9vbCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZSgoKT0+IHtcbiAgICAgIHJldHVybiBzdGF0dXNiYXIub3ZlcmxheXNXZWJWaWV3KCEhYm9vbCk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdHlsZVxuICAgICovXG4gIHN0eWxlKHN0eWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKCgpPT4ge1xuICAgICAgc3dpdGNoIChzdHlsZSkge1xuICAgICAgICAvLyBEZWZhdWx0XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIHN0YXR1c2Jhci5zdHlsZURlZmF1bHQoKTtcblxuICAgICAgICAvLyBMaWdodENvbnRlbnRcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gc3RhdHVzYmFyLnN0eWxlTGlnaHRDb250ZW50KCk7XG5cbiAgICAgICAgLy8gQmxhY2tUcmFuc2x1Y2VudFxuICAgICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBzdGF0dXNiYXIuc3R5bGVCbGFja1RyYW5zbHVjZW50KCk7XG5cbiAgICAgICAgLy8gQmxhY2tPcGFxdWVcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gc3RhdHVzYmFyLnN0eWxlQmxhY2tPcGFxdWUoKTtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gc3RhdHVzYmFyLnN0eWxlRGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gc3VwcG9ydGVkIG5hbWVzOlxuICAvLyBibGFjaywgZGFya0dyYXksIGxpZ2h0R3JheSwgd2hpdGUsIGdyYXksIHJlZCwgZ3JlZW4sXG4gIC8vIGJsdWUsIGN5YW4sIHllbGxvdywgbWFnZW50YSwgb3JhbmdlLCBwdXJwbGUsIGJyb3duXG4gIHN0eWxlQ29sb3IoY29sb3IpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGUoKCk9PiB7XG4gICAgICByZXR1cm4gc3RhdHVzYmFyLmJhY2tncm91bmRDb2xvckJ5TmFtZShjb2xvcik7XG4gICAgfSk7XG4gIH1cblxuICBzdHlsZUhleChjb2xvckhleCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZSgoKT0+IHtcbiAgICAgIHJldHVybiBzdGF0dXNiYXIuYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoY29sb3JIZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGUoKCk9PiB7XG4gICAgICByZXR1cm4gc3RhdHVzYmFyLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKCgpPT4ge1xuICAgICAgcmV0dXJuIHN0YXR1c2Jhci5zaG93KCk7XG4gICAgfSk7XG4gIH1cblxuICBpc1Zpc2libGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKCgpPT4ge1xuICAgICAgcmV0dXJuIHN0YXR1c2Jhci5pc1Zpc2libGU7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
