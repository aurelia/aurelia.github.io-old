/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var accelerometer = _plugins.Plugins.fromNavigator('accelerometer');

  var DeviceMotion = (function () {
    function DeviceMotion() {
      _classCallCheck(this, DeviceMotion);

      this.ID = null;
      this.isSupported = !!accelerometer;
      this.subscriptions = [];
      this.defaultOptions = {
        frequency: 3000
      };
    }

    _createClass(DeviceMotion, [{
      key: '_createResponce',
      value: function _createResponce(result, error) {
        var isSupported = this.isSupported;
        if (error) {
          return { error: error, isSupported: isSupported };
        }
        result.isSupported = this.isSupported;
        return result;
      }
    }, {
      key: '_subscribe',
      value: function _subscribe() {
        var _this = this;

        if (this._isListening) return;
        this._isListening = true;

        var p = new Promise(function (resolve, reject) {
          _this.ID = navigator.accelerometer.watchAcceleration(resolve, reject);
        });

        p.then(function (result) {
          var responce = _this._createResponce(result);
          _this.subscriptions.forEach(function (cb) {
            cb(responce);
          });
        });

        p['catch'](function (error) {
          var responce = _this._createResponce(null, error);
          _this.subscriptions.forEach(function (cb) {
            cb(null, responce);
          });
        });
      }
    }, {
      key: '_dispose',
      value: function _dispose() {
        accelerometer.clearWatch(this.ID);
      }
    }, {
      key: 'subscribe',
      value: function subscribe(cb) {
        var self = this;
        if (!this.isSupported) {
          return Promise.reject(this._createResponce(null, 'Plugin Compass not installed'));
        }

        if (typeof cb === 'function') {
          this.subscriptions.push(cb);
        }

        this._subscribe();
        return { dispose: dispose };

        function dispose() {
          var index = self.subscriptions.indexOf(cb);
          self.subscriptions.splice(index, 1);
          if (!self.subscriptions) {
            self._dispose();
          }
        }
      }
    }, {
      key: 'getValue',
      value: function getValue() {
        var _this2 = this;

        return new Promise(function (resolve, reject) {
          if (!_this2.isSupported) {
            return reject(_this2._createResponce(null, 'Plugin Compass not installed'));
          }

          accelerometer.getCurrentAcceleration(onSuccess, onFail);

          function onSuccess(result) {
            resolve(this._createResponce(result));
          }

          function onFail(error) {
            reject(this._createResponce(null, error));
          }
        });
      }
    }]);

    return DeviceMotion;
  })();

  exports.DeviceMotion = DeviceMotion;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9kZXZpY2UtbW90aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsTUFBSSxhQUFhLEdBQUcsU0FQWixPQUFPLENBT2EsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDOztNQUM5QyxZQUFZO2FBQVosWUFBWTs0QkFBWixZQUFZOztXQUN2QixFQUFFLEdBQUcsSUFBSTtXQUVULFdBQVcsR0FBRyxDQUFDLENBQUMsYUFBYTtXQUM3QixhQUFhLEdBQUcsRUFBRTtXQUNsQixjQUFjLEdBQUc7QUFDZixpQkFBUyxFQUFFLElBQUk7T0FDaEI7OztpQkFQVSxZQUFZOzthQVNSLHlCQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDN0IsWUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNuQyxZQUFJLEtBQUssRUFBRTtBQUNULGlCQUFPLEVBQUMsS0FBSyxFQUFMLEtBQUssRUFBRSxXQUFXLEVBQVgsV0FBVyxFQUFDLENBQUE7U0FDNUI7QUFDRCxjQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDdEMsZUFBTyxNQUFNLENBQUM7T0FDZjs7O2FBRVMsc0JBQUc7OztBQUNYLFlBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPO0FBQzlCLFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztBQUV6QixZQUFJLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdkMsZ0JBQUssRUFBRSxHQUFHLFNBQVMsQ0FBQyxhQUFhLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3RFLENBQUMsQ0FBQzs7QUFFSCxTQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ2YsY0FBSSxRQUFRLEdBQUcsTUFBSyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDNUMsZ0JBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsRUFBSTtBQUMvQixjQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDZCxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7O0FBRUgsU0FBQyxTQUFNLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDZixjQUFJLFFBQVEsR0FBRyxNQUFLLGVBQWUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDakQsZ0JBQUssYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsRUFBSTtBQUMvQixjQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1dBQ3BCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQTtPQUNIOzs7YUFFTyxvQkFBRztBQUNULHFCQUFhLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUNuQzs7O2FBRVEsbUJBQUMsRUFBRSxFQUFFO0FBQ1osWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2hCLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3JCLGlCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1NBQ25GOztBQUVELFlBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO0FBQzVCLGNBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCOztBQUVELFlBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsQixlQUFPLEVBQUMsT0FBTyxFQUFQLE9BQU8sRUFBQyxDQUFDOztBQUVqQixpQkFBUyxPQUFPLEdBQUc7QUFDakIsY0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0MsY0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3BDLGNBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO0FBQ3ZCLGdCQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7V0FDakI7U0FDRjtPQUNGOzs7YUFFTyxvQkFBRzs7O0FBQ1QsZUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsY0FBSSxDQUFDLE9BQUssV0FBVyxFQUFFO0FBQ3JCLG1CQUFPLE1BQU0sQ0FBQyxPQUFLLGVBQWUsQ0FBQyxJQUFJLEVBQUUsOEJBQThCLENBQUMsQ0FBQyxDQUFDO1dBQzNFOztBQUVELHVCQUFhLENBQUMsc0JBQXNCLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDOztBQUV4RCxtQkFBUyxTQUFTLENBQUMsTUFBTSxFQUFFO0FBQ3pCLG1CQUFPLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1dBQ3ZDOztBQUVELG1CQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDckIsa0JBQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1dBQzNDO1NBQ0YsQ0FBQyxDQUFDO09BQ0o7OztXQW5GVSxZQUFZIiwiZmlsZSI6ImF1cmVsaWEtY29yZG92YS9kZXZpY2UtbW90aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbHVnaW5zfSBmcm9tICcuL3BsdWdpbnMnO1xuLyoqXG4gKiBjbGFzcyBEZXZpY2VPcmllbnRhdGlvblxuICpcbiAqIEBpbnN0YWxsICAgJCBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZGV2aWNlLW1vdGlvblxuICogQGxpbmsgICAgICBodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRldmljZS1tb3Rpb25cbiAqL1xubGV0IGFjY2VsZXJvbWV0ZXIgPSBQbHVnaW5zLmZyb21OYXZpZ2F0b3IoJ2FjY2VsZXJvbWV0ZXInKTtcbmV4cG9ydCBjbGFzcyBEZXZpY2VNb3Rpb24ge1xuICBJRCA9IG51bGw7XG5cbiAgaXNTdXBwb3J0ZWQgPSAhIWFjY2VsZXJvbWV0ZXI7XG4gIHN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgZnJlcXVlbmN5OiAzMDAwXG4gIH07XG5cbiAgX2NyZWF0ZVJlc3BvbmNlKHJlc3VsdCwgZXJyb3IpIHtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSB0aGlzLmlzU3VwcG9ydGVkO1xuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIHtlcnJvciwgaXNTdXBwb3J0ZWR9XG4gICAgfVxuICAgIHJlc3VsdC5pc1N1cHBvcnRlZCA9IHRoaXMuaXNTdXBwb3J0ZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMuX2lzTGlzdGVuaW5nKSByZXR1cm47XG4gICAgdGhpcy5faXNMaXN0ZW5pbmcgPSB0cnVlO1xuXG4gICAgbGV0IHAgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLklEID0gbmF2aWdhdG9yLmFjY2VsZXJvbWV0ZXIud2F0Y2hBY2NlbGVyYXRpb24ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcblxuICAgIHAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgbGV0IHJlc3BvbmNlID0gdGhpcy5fY3JlYXRlUmVzcG9uY2UocmVzdWx0KTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2IocmVzcG9uY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBwLmNhdGNoKGVycm9yID0+IHtcbiAgICAgIGxldCByZXNwb25jZSA9IHRoaXMuX2NyZWF0ZVJlc3BvbmNlKG51bGwsIGVycm9yKTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2IobnVsbCwgcmVzcG9uY2UpO1xuICAgICAgfSk7XG4gICAgfSlcbiAgfVxuXG4gIF9kaXNwb3NlKCkge1xuICAgIGFjY2VsZXJvbWV0ZXIuY2xlYXJXYXRjaCh0aGlzLklEKTtcbiAgfVxuXG4gIHN1YnNjcmliZShjYikge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCh0aGlzLl9jcmVhdGVSZXNwb25jZShudWxsLCAnUGx1Z2luIENvbXBhc3Mgbm90IGluc3RhbGxlZCcpKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChjYik7XG4gICAgfVxuXG4gICAgdGhpcy5fc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHtkaXNwb3NlfTtcblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBsZXQgaW5kZXggPSBzZWxmLnN1YnNjcmlwdGlvbnMuaW5kZXhPZihjYik7XG4gICAgICBzZWxmLnN1YnNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGlmICghc2VsZi5zdWJzY3JpcHRpb25zKSB7XG4gICAgICAgIHNlbGYuX2Rpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3QodGhpcy5fY3JlYXRlUmVzcG9uY2UobnVsbCwgJ1BsdWdpbiBDb21wYXNzIG5vdCBpbnN0YWxsZWQnKSk7XG4gICAgICB9XG5cbiAgICAgIGFjY2VsZXJvbWV0ZXIuZ2V0Q3VycmVudEFjY2VsZXJhdGlvbihvblN1Y2Nlc3MsIG9uRmFpbCk7XG5cbiAgICAgIGZ1bmN0aW9uIG9uU3VjY2VzcyhyZXN1bHQpIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLl9jcmVhdGVSZXNwb25jZShyZXN1bHQpKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25GYWlsKGVycm9yKSB7XG4gICAgICAgIHJlamVjdCh0aGlzLl9jcmVhdGVSZXNwb25jZShudWxsLCBlcnJvcikpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
