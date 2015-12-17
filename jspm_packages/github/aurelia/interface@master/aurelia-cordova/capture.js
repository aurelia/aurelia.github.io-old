/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var capture = _plugins.Plugins.fromDevice('capture');

  var Capture = (function () {
    function Capture() {
      _classCallCheck(this, Capture);

      this.isSupported = !!capture;
    }

    _createClass(Capture, [{
      key: '_validate',
      value: function _validate(cb) {
        var error = undefined;
        var isSupported = this.isSupported;

        return new Promise(function (_resolve, _reject) {
          if (!isSupported) {
            error = 'Capture plugin not installed';
            return _reject({ isSupported: isSupported, error: error });
          }

          return cb({
            resolve: function resolve(data) {
              _resolve(data);
            },
            reject: function reject(error) {
              _reject({ isSupported: isSupported, error: error });
            }
          });
        });
      }
    }, {
      key: 'captureAudio',
      value: function captureAudio(options) {
        return this._validate(function (promised) {
          capture.captureAudio(promised.resolve, promised.reject, options);
        });
      }
    }, {
      key: 'captureImage',
      value: function captureImage(options) {
        return this._validate(function (promised) {
          capture.captureData(promised.resolve, promised.reject, options);
        });
      }
    }, {
      key: 'captureVideo',
      value: function captureVideo(options) {
        return this._validate(function (promised) {
          capture.captureVideo(promised.resolve, promised.reject, options);
        });
      }
    }]);

    return Capture;
  })();

  exports.Capture = Capture;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9jYXB0dXJlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsTUFBSSxPQUFPLEdBQUcsU0FSTixPQUFPLENBUU8sVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDOztNQUMvQixPQUFPO2FBQVAsT0FBTzs0QkFBUCxPQUFPOztXQUVsQixXQUFXLEdBQUcsQ0FBQyxDQUFDLE9BQU87OztpQkFGWixPQUFPOzthQUlULG1CQUFDLEVBQUUsRUFBRTtBQUNaLFlBQUksS0FBSyxZQUFBLENBQUM7QUFDVixZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztBQUVuQyxlQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsUUFBTyxFQUFFLE9BQU0sRUFBSztBQUN0QyxjQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2hCLGlCQUFLLEdBQUcsOEJBQThCLENBQUM7QUFDdkMsbUJBQU8sT0FBTSxDQUFDLEVBQUMsV0FBVyxFQUFYLFdBQVcsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFDLENBQUMsQ0FBQztXQUNyQzs7QUFFRCxpQkFBTyxFQUFFLENBQUM7QUFDUixtQkFBTyxFQUFBLGlCQUFDLElBQUksRUFBRTtBQUNaLHNCQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDZjtBQUNELGtCQUFNLEVBQUEsZ0JBQUMsS0FBSyxFQUFFO0FBQ1oscUJBQU0sQ0FBQyxFQUFDLFdBQVcsRUFBWCxXQUFXLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBQyxDQUFDLENBQUM7YUFDOUI7V0FDRixDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7T0FDSjs7O2FBRVcsc0JBQUMsT0FBTyxFQUFFO0FBQ3BCLGVBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFBLFFBQVEsRUFBSTtBQUNoQyxpQkFBTyxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDbEUsQ0FBQyxDQUFDO09BQ0o7OzthQUVXLHNCQUFDLE9BQU8sRUFBRTtBQUNwQixlQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBQSxRQUFRLEVBQUk7QUFDaEMsaUJBQU8sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ2pFLENBQUMsQ0FBQztPQUNKOzs7YUFFVyxzQkFBQyxPQUFPLEVBQUU7QUFDcEIsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hDLGlCQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUMsQ0FBQztTQUNsRSxDQUFDLENBQUM7T0FDSjs7O1dBekNVLE9BQU8iLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL2NhcHR1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsdWdpbnN9IGZyb20gJy4vcGx1Z2lucyc7XG5cbi8qKlxuICogY2xhc3MgQ2FwdHVyZVxuICpcbiAqIEBpbnN0YWxsICAgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLW1lZGlhLWNhcHR1cmVcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYS1jYXB0dXJlXG4gKi9cbmxldCBjYXB0dXJlID0gUGx1Z2lucy5mcm9tRGV2aWNlKCdjYXB0dXJlJyk7XG5leHBvcnQgY2xhc3MgQ2FwdHVyZSB7XG5cbiAgaXNTdXBwb3J0ZWQgPSAhIWNhcHR1cmU7XG5cbiAgX3ZhbGlkYXRlKGNiKSB7XG4gICAgbGV0IGVycm9yO1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IHRoaXMuaXNTdXBwb3J0ZWQ7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFpc1N1cHBvcnRlZCkge1xuICAgICAgICBlcnJvciA9ICdDYXB0dXJlIHBsdWdpbiBub3QgaW5zdGFsbGVkJztcbiAgICAgICAgcmV0dXJuIHJlamVjdCh7aXNTdXBwb3J0ZWQsIGVycm9yfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjYih7XG4gICAgICAgIHJlc29sdmUoZGF0YSkge1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdChlcnJvcikge1xuICAgICAgICAgIHJlamVjdCh7aXNTdXBwb3J0ZWQsIGVycm9yfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgY2FwdHVyZUF1ZGlvKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGUocHJvbWlzZWQgPT4ge1xuICAgICAgY2FwdHVyZS5jYXB0dXJlQXVkaW8ocHJvbWlzZWQucmVzb2x2ZSwgcHJvbWlzZWQucmVqZWN0LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhcHR1cmVJbWFnZShvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKHByb21pc2VkID0+IHtcbiAgICAgIGNhcHR1cmUuY2FwdHVyZURhdGEocHJvbWlzZWQucmVzb2x2ZSwgcHJvbWlzZWQucmVqZWN0LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNhcHR1cmVWaWRlbyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKHByb21pc2VkID0+IHtcbiAgICAgIGNhcHR1cmUuY2FwdHVyZVZpZGVvKHByb21pc2VkLnJlc29sdmUsIHByb21pc2VkLnJlamVjdCwgb3B0aW9ucyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
