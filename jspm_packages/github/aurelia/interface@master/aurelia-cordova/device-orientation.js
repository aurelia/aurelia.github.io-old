/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var compass = _plugins.Plugins.fromNavigator('compass');

  var DeviceOrientation = (function () {
    function DeviceOrientation() {
      _classCallCheck(this, DeviceOrientation);

      this.isSupported = !!compass;
      this.subscriptions = [];
      this.defaultOptions = {
        frequency: 3000
      };
    }

    _createClass(DeviceOrientation, [{
      key: '_subscribe',
      value: function _subscribe() {
        var _this = this;

        if (this._isListening) return;
        this._listening = true;
        var ID = undefined;
        var options = this.options = Object.assign(this.defaultOptions, this.options);
        var promise = new Promise(function (resolve, reject) {
          _this.ID = navigator.compass.watchHeading(resolve, reject, options);
        });

        promis.then(function (result) {
          _this.subscriptions.forEach(function (cb) {
            cb(result);
          });
        });

        promise['catch'](function (err) {
          _this.subscriptions.forEach(function (cb) {
            cb(null, err);
          });
        });
      }
    }, {
      key: '_dispose',
      value: function _dispose() {
        if (!this.isSupported) {
          return Promise.reject('Plugin Compass not installed');
        }
        this._listening = false;
        compass.clearWatch(this.ID);
      }
    }, {
      key: 'subscribe',
      value: function subscribe(cb) {
        var self = this;
        if (!this.isSupported) {
          return Promise.reject('Plugin Compass not installed');
        }

        if (typeof cb === 'function') {
          this.subscriptions.push(cb);
        }

        this._subscribe();
        return { dispose: dispose };

        function dispose() {
          var index = self.subscriptions.indexOf(cb);
          self.subscriptions.splice(index, 1);

          if (!self.subscriptions.length) {
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
            return reject('Plugin Compass not installed');
          }
          compass.getCurrentHeading(resolve, reject);
        });
      }
    }]);

    return DeviceOrientation;
  })();

  exports.DeviceOrientation = DeviceOrientation;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9kZXZpY2Utb3JpZW50YXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxNQUFJLE9BQU8sR0FBRyxTQVBOLE9BQU8sQ0FPTyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUM7O01BQ2xDLGlCQUFpQjthQUFqQixpQkFBaUI7NEJBQWpCLGlCQUFpQjs7V0FFNUIsV0FBVyxHQUFHLENBQUMsQ0FBQyxPQUFPO1dBQ3ZCLGFBQWEsR0FBRyxFQUFFO1dBQ2xCLGNBQWMsR0FBRztBQUNmLGlCQUFTLEVBQUUsSUFBSTtPQUNoQjs7O2lCQU5VLGlCQUFpQjs7YUFRbEIsc0JBQUc7OztBQUNYLFlBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxPQUFPO0FBQzlCLFlBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLFlBQUksRUFBRSxZQUFBLENBQUM7QUFDUCxZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUUsWUFBSSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTSxFQUFLO0FBQzVDLGdCQUFLLEVBQUUsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3JFLENBQUMsQ0FBQzs7QUFFSCxjQUFNLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTSxFQUFJO0FBQ3BCLGdCQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLEVBQUk7QUFDL0IsY0FBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1dBQ1osQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDOztBQUVILGVBQU8sU0FBTSxDQUFDLFVBQUEsR0FBRyxFQUFJO0FBQ25CLGdCQUFLLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxFQUFFLEVBQUk7QUFDL0IsY0FBRSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztXQUNmLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztPQUNKOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQ3JCLGlCQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztTQUN2RDtBQUNELFlBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0FBQ3hCLGVBQU8sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO09BQzdCOzs7YUFFUSxtQkFBQyxFQUFFLEVBQUU7QUFDWixZQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsWUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDckIsaUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1NBQ3ZEOztBQUVELFlBQUksT0FBTyxFQUFFLEtBQUssVUFBVSxFQUFFO0FBQzVCLGNBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCOztBQUVELFlBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNsQixlQUFPLEVBQUMsT0FBTyxFQUFQLE9BQU8sRUFBQyxDQUFDOztBQUVqQixpQkFBUyxPQUFPLEdBQUc7QUFDakIsY0FBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDM0MsY0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDOztBQUVwQyxjQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7QUFDOUIsZ0JBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztXQUNqQjtTQUNGO09BQ0Y7OzthQUVPLG9CQUFHOzs7QUFDVCxlQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxjQUFJLENBQUMsT0FBSyxXQUFXLEVBQUU7QUFDckIsbUJBQU8sTUFBTSxDQUFDLDhCQUE4QixDQUFDLENBQUM7V0FDL0M7QUFDRCxpQkFBTyxDQUFDLGlCQUFpQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztTQUM1QyxDQUFDLENBQUM7T0FDSjs7O1dBcEVVLGlCQUFpQiIsImZpbGUiOiJhdXJlbGlhLWNvcmRvdmEvZGV2aWNlLW9yaWVudGF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbHVnaW5zfSBmcm9tICcuL3BsdWdpbnMnO1xuLyoqXG4gKiBjbGFzcyBEZXZpY2VPcmllbnRhdGlvblxuICpcbiAqIEBpbnN0YWxsICAgJCBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZGV2aWNlLW9yaWVudGF0aW9uXG4gKiBAbGluayAgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlLW9yaWVudGF0aW9uXG4gKi9cbmxldCBjb21wYXNzID0gUGx1Z2lucy5mcm9tTmF2aWdhdG9yKCdjb21wYXNzJyk7XG5leHBvcnQgY2xhc3MgRGV2aWNlT3JpZW50YXRpb24ge1xuXG4gIGlzU3VwcG9ydGVkID0gISFjb21wYXNzO1xuICBzdWJzY3JpcHRpb25zID0gW107XG4gIGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGZyZXF1ZW5jeTogMzAwMFxuICB9O1xuXG4gIF9zdWJzY3JpYmUoKSB7XG4gICAgaWYgKHRoaXMuX2lzTGlzdGVuaW5nKSByZXR1cm47XG4gICAgdGhpcy5fbGlzdGVuaW5nID0gdHJ1ZTtcbiAgICBsZXQgSUQ7XG4gICAgbGV0IG9wdGlvbnMgPSB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHRoaXMuZGVmYXVsdE9wdGlvbnMsIHRoaXMub3B0aW9ucyk7XG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgdGhpcy5JRCA9IG5hdmlnYXRvci5jb21wYXNzLndhdGNoSGVhZGluZyhyZXNvbHZlLCByZWplY3QsIG9wdGlvbnMpO1xuICAgIH0pO1xuXG4gICAgcHJvbWlzLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcHJvbWlzZS5jYXRjaChlcnIgPT4ge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goY2IgPT4ge1xuICAgICAgICBjYihudWxsLCBlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBfZGlzcG9zZSgpIHtcbiAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnUGx1Z2luIENvbXBhc3Mgbm90IGluc3RhbGxlZCcpO1xuICAgIH1cbiAgICB0aGlzLl9saXN0ZW5pbmcgPSBmYWxzZTtcbiAgICBjb21wYXNzLmNsZWFyV2F0Y2godGhpcy5JRCk7XG4gIH1cblxuICBzdWJzY3JpYmUoY2IpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ1BsdWdpbiBDb21wYXNzIG5vdCBpbnN0YWxsZWQnKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChjYik7XG4gICAgfVxuXG4gICAgdGhpcy5fc3Vic2NyaWJlKCk7XG4gICAgcmV0dXJuIHtkaXNwb3NlfTtcblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBsZXQgaW5kZXggPSBzZWxmLnN1YnNjcmlwdGlvbnMuaW5kZXhPZihjYik7XG4gICAgICBzZWxmLnN1YnNjcmlwdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgaWYgKCFzZWxmLnN1YnNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYuX2Rpc3Bvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3QoJ1BsdWdpbiBDb21wYXNzIG5vdCBpbnN0YWxsZWQnKTtcbiAgICAgIH1cbiAgICAgIGNvbXBhc3MuZ2V0Q3VycmVudEhlYWRpbmcocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
