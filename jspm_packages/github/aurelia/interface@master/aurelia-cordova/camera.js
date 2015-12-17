/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var camera = _plugins.Plugins.fromNavigator('camera');

  var Camera = (function () {
    function Camera() {
      _classCallCheck(this, Camera);

      this.isSupported = !!camera;

      this._onSuccess = this._onSuccess.bind(this);
      this._onError = this._onError.bind(this);
    }

    _createClass(Camera, [{
      key: 'getPicture',
      value: function getPicture(options) {
        var _this = this;

        return this._runPromised(function () {
          camera.getPicture(_this._onSuccess, _this._onError, options);
        });
      }
    }, {
      key: 'cleanup',
      value: function cleanup() {
        var _this2 = this;

        return this._runPromised(function () {
          camera.cleanup(_this2._onSuccess, _this2._onError);
        });
      }
    }, {
      key: '_runPromised',
      value: function _runPromised(cb) {
        var _this3 = this;

        return new Promise(function (resolve, reject) {
          _this3._resolve = resolve;
          _this3._reject = reject;

          if (!isSupported) {
            error = 'Camera plugin not supported';
            return reject({ isSupported: isSupported, error: error });
          }

          cb();
        });
      }
    }, {
      key: '_onSuccess',
      value: function _onSuccess(imageData) {
        this._resolve(imageData);
      }
    }, {
      key: '_onError',
      value: function _onError(error) {
        var isSupported = this.isSupported;
        this._reject({ isSupported: isSupported, error: error });
      }
    }]);

    return Camera;
  })();

  exports.Camera = Camera;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9jYW1lcmEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxNQUFJLE1BQU0sR0FBRyxTQVJMLE9BQU8sQ0FRTSxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7O01BQ2hDLE1BQU07QUFFTixhQUZBLE1BQU0sR0FFSDs0QkFGSCxNQUFNOztXQUNqQixXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU07O0FBRXBCLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsVUFBSSxDQUFDLFFBQVEsR0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7aUJBTFUsTUFBTTs7YUFPUCxvQkFBQyxPQUFPLEVBQUU7OztBQUNsQixlQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBSztBQUM1QixnQkFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFLLFVBQVUsRUFBRSxNQUFLLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1RCxDQUFDLENBQUM7T0FDSjs7O2FBRU0sbUJBQUc7OztBQUNSLGVBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFLO0FBQzVCLGdCQUFNLENBQUMsT0FBTyxDQUFDLE9BQUssVUFBVSxFQUFFLE9BQUssUUFBUSxDQUFDLENBQUM7U0FDaEQsQ0FBQyxDQUFBO09BQ0g7OzthQUVXLHNCQUFDLEVBQUUsRUFBRTs7O0FBQ2YsZUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsaUJBQUssUUFBUSxHQUFHLE9BQU8sQ0FBQztBQUN4QixpQkFBSyxPQUFPLEdBQUksTUFBTSxDQUFDOztBQUV2QixjQUFJLENBQUMsV0FBVyxFQUFFO0FBQ2hCLGlCQUFLLEdBQUcsNkJBQTZCLENBQUM7QUFDdEMsbUJBQU8sTUFBTSxDQUFDLEVBQUMsV0FBVyxFQUFYLFdBQVcsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFDLENBQUMsQ0FBQztXQUNyQzs7QUFFRCxZQUFFLEVBQUUsQ0FBQztTQUNOLENBQUMsQ0FBQztPQUNKOzs7YUFFUyxvQkFBQyxTQUFTLEVBQUU7QUFDcEIsWUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUMxQjs7O2FBRU8sa0JBQUMsS0FBSyxFQUFFO0FBQ2QsWUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUNuQyxZQUFJLENBQUMsT0FBTyxDQUFDLEVBQUMsV0FBVyxFQUFYLFdBQVcsRUFBRSxLQUFLLEVBQUwsS0FBSyxFQUFDLENBQUMsQ0FBQTtPQUNuQzs7O1dBeENVLE1BQU0iLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL2NhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcblxuLyoqXG4gKiBjbGFzcyBDYW1lcmFcbiAqXG4gKiBAaW5zdGFsbCAgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxuICogQGxpbmsgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhXG4gKi9cbmxldCBjYW1lcmEgPSBQbHVnaW5zLmZyb21OYXZpZ2F0b3IoJ2NhbWVyYScpO1xuZXhwb3J0IGNsYXNzIENhbWVyYSB7XG4gIGlzU3VwcG9ydGVkID0gISFjYW1lcmE7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX29uU3VjY2VzcyA9IHRoaXMuX29uU3VjY2Vzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uRXJyb3IgICAgPSB0aGlzLl9vbkVycm9yLmJpbmQodGhpcyk7XG4gIH1cblxuICBnZXRQaWN0dXJlKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVuUHJvbWlzZWQoKCk9PiB7XG4gICAgICBjYW1lcmEuZ2V0UGljdHVyZSh0aGlzLl9vblN1Y2Nlc3MsIHRoaXMuX29uRXJyb3IsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG5cbiAgY2xlYW51cCgpIHtcbiAgICByZXR1cm4gdGhpcy5fcnVuUHJvbWlzZWQoKCk9PiB7XG4gICAgICBjYW1lcmEuY2xlYW51cCh0aGlzLl9vblN1Y2Nlc3MsIHRoaXMuX29uRXJyb3IpO1xuICAgIH0pXG4gIH1cblxuICBfcnVuUHJvbWlzZWQoY2IpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLl9yZWplY3QgID0gcmVqZWN0O1xuXG4gICAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgIGVycm9yID0gJ0NhbWVyYSBwbHVnaW4gbm90IHN1cHBvcnRlZCc7XG4gICAgICAgIHJldHVybiByZWplY3Qoe2lzU3VwcG9ydGVkLCBlcnJvcn0pO1xuICAgICAgfVxuXG4gICAgICBjYigpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uU3VjY2VzcyhpbWFnZURhdGEpIHtcbiAgICB0aGlzLl9yZXNvbHZlKGltYWdlRGF0YSk7XG4gIH1cblxuICBfb25FcnJvcihlcnJvcikge1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IHRoaXMuaXNTdXBwb3J0ZWQ7XG4gICAgdGhpcy5fcmVqZWN0KHtpc1N1cHBvcnRlZCwgZXJyb3J9KVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
