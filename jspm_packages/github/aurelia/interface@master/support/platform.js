/* */ 
define(['exports', '../config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var attrName = 'ui-';
  var platformAttr = 'ai-platform';
  var ai = 'ai';
  var AI = 'AI';
  var iOS = 'iOS';
  var Android = 'Android';
  var Windows = 'Windows';
  var presto = 'presto';
  var gecko = 'gecko';
  var webkit = 'webkit';
  var trident = 'trident';
  var HandHeld = 'HandHeld';
  var Mobile = 'Mobile';
  var Tablet = 'Tablet';
  var Desktop = 'Desktop';
  var config = _config.platformConfig;

  var InterfacePlatformSupport = (function () {
    function InterfacePlatformSupport() {
      _classCallCheck(this, InterfacePlatformSupport);

      this.config = config;
      this.userAgent = config.USER_AGENT;
      this.isReady = false;
      this.readyHandlers = Array();
      this.engine = config._engine;
      this.platform = config._localName;
      this.localName = config._localName;
      this.classNames = [];
    }

    _createClass(InterfacePlatformSupport, [{
      key: 'init',
      value: function init() {
        var overwrite = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        setPlatformAttribute();
        this.platform = this.setPlatform(this.detectPlatform(overwrite.platform));
        this.version = this.setVersion(this.detectVersion(overwrite.version));
        this.engine = this.setEngine(this.detectEngine(overwrite.engine));

        this.classNames.push('platform-' + this.localName, 'platform-' + this.localName + '-' + this.version);
        document.documentElement.classList.add.apply(document.documentElement.classList, this.classNames);
        setPrototypes();

        this.onReady();
      }
    }, {
      key: 'ready',
      value: function ready(callback) {
        if (this.isReady) return callback(this);
        this.readyHandlers.push(callback);
      }
    }, {
      key: 'onReady',
      value: function onReady() {
        if (this.isReady) return;
        this.isReady = true;
        for (var index in this.readyHandlers) {
          this.readyHandlers[index](this);
        }
      }
    }, {
      key: 'detectPlatform',
      value: function detectPlatform(platform) {
        return platform ? platform : config.isPlatform(Android) ? Android : config.isPlatform(Windows) ? Windows : config.isPlatform(iOS) ? iOS : AI;
      }
    }, {
      key: 'setPlatform',
      value: function setPlatform(platformName) {
        this.platformName = platformName;
        this.localName = platformName.toLowerCase();
        config._versionExpression = config.VERSION_EXPRESSIONS[this.platformName];
        document.body.interfacePlatform = this.localName;
        return this.localName;
      }
    }, {
      key: 'getPlatform',
      value: function getPlatform() {
        return this.localName;
      }
    }, {
      key: 'detectVersion',
      value: function detectVersion(version, _version) {
        _version = config.USER_AGENT.match(config._versionExpression);
        return _version.length > 2 ? parseFloat(_version[1] + '.' + _version[2]) : version;
      }
    }, {
      key: 'setVersion',
      value: function setVersion(version) {
        version = version || 0;
        return version = version || 0;
      }
    }, {
      key: 'detectEngine',
      value: function detectEngine(engine) {
        return engine ? engine : window.opera && Object.prototype.toString.call(opera) === '[object Opera]' ? presto : 'MozAppearance' in document.documentElement.style ? gecko : 'WebkitAppearance' in document.documentElement.style ? webkit : typeof window.navigator.cpuClass === 'string' ? trident : undefined;
      }
    }, {
      key: 'setEngine',
      value: function setEngine(engine) {
        return engine;
      }
    }, {
      key: 'isWebView',
      value: function isWebView() {
        return !(!window.cordova && !window.PhoneGap && !window.phonegap && !window.forge);
      }
    }, {
      key: 'isIOS',
      value: function isIOS() {
        return config.isPlatform(iOS);
      }
    }, {
      key: 'isAndroid',
      value: function isAndroid() {
        return config.isPlatform(Android);
      }
    }, {
      key: 'isWindows',
      value: function isWindows() {
        return config.isPlatform(Windows);
      }
    }]);

    return InterfacePlatformSupport;
  })();

  exports.InterfacePlatformSupport = InterfacePlatformSupport;

  function setPlatformAttribute() {
    if ('interfacePlatform' in document.body) return;
    Reflect.defineProperty(document.body, 'interfacePlatform', {
      set: function set(platform) {
        if (this._interfacePlatform && this._interfacePlatform !== platform) {
          document.body.removeAttribute('ui-' + this._interfacePlatform);
        }
        this._interfacePlatform = platform;
        document.body.setAttribute('ui-' + platform, platform);
        document.body.setAttribute('ai-platform', platform);
      },
      get: function get() {
        return this._interfacePlatform;
      }
    });
  }

  function setPrototypes() {
    String.prototype.isBoolean = function () {
      if (this === false || this === 'false' || this === true || this === 'true') {
        return true;
      }
      return false;
    };

    String.prototype.isFalse = function () {
      return this === false || this === 'false' || false;
    };

    String.prototype.isTrue = function () {
      return this === true || this === 'true' || false;
    };
  }
});
//# sourceMappingURL=data:application/json;base64,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SUFBSSxDQUFDLGtCQUFrQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsS0FBSyxRQUFRLEVBQUU7QUFDbkUsa0JBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxTQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBRyxDQUFDO1NBQ2hFO0FBQ0QsWUFBSSxDQUFDLGtCQUFrQixHQUFHLFFBQVEsQ0FBQztBQUNuQyxnQkFBUSxDQUFDLElBQUksQ0FBQyxZQUFZLFNBQU8sUUFBUSxFQUFJLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZELGdCQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7T0FDckQ7QUFDRCxTQUFHLEVBQUMsZUFBRztBQUNMLGVBQU8sSUFBSSxDQUFDLGtCQUFrQixDQUFDO09BQ2hDO0tBQ0YsQ0FBQyxDQUFDO0dBQ0o7O0FBSUQsV0FBUyxhQUFhLEdBQUc7QUFDdkIsVUFBTSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsWUFBWTtBQUN2QyxVQUFJLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxNQUFNLEVBQUU7QUFDMUUsZUFBTyxJQUFJLENBQUM7T0FDYjtBQUNELGFBQU8sS0FBSyxDQUFDO0tBQ2QsQ0FBQTs7QUFFRCxVQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sR0FBRyxZQUFXO0FBQ3BDLGFBQU8sSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQztLQUNwRCxDQUFBOztBQUVELFVBQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFlBQVc7QUFDbkMsYUFBTyxJQUFJLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDO0tBQ2xELENBQUE7R0FDRiIsImZpbGUiOiJzdXBwb3J0L3BsYXRmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtwbGF0Zm9ybUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGF0dHJOYW1lID0gJ3VpLSc7XG5jb25zdCBwbGF0Zm9ybUF0dHIgPSAnYWktcGxhdGZvcm0nXG5jb25zdCBhaSA9ICdhaSc7XG5jb25zdCBBSSA9ICdBSSc7XG5jb25zdCBpT1MgPSAnaU9TJztcbmNvbnN0IEFuZHJvaWQgPSAnQW5kcm9pZCdcbmNvbnN0IFdpbmRvd3MgPSAnV2luZG93cyc7XG5jb25zdCBwcmVzdG8gICA9ICdwcmVzdG8nO1xuY29uc3QgZ2Vja28gICAgPSAnZ2Vja28nO1xuY29uc3Qgd2Via2l0ICAgPSAnd2Via2l0JztcbmNvbnN0IHRyaWRlbnQgID0gJ3RyaWRlbnQnO1xuY29uc3QgSGFuZEhlbGQgPSAnSGFuZEhlbGQnO1xuY29uc3QgTW9iaWxlICAgPSAnTW9iaWxlJztcbmNvbnN0IFRhYmxldCAgID0gJ1RhYmxldCc7XG5jb25zdCBEZXNrdG9wICA9ICdEZXNrdG9wJztcbnZhciBjb25maWcgPSBwbGF0Zm9ybUNvbmZpZztcblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVBsYXRmb3JtU3VwcG9ydCB7XG5cbiAgLyoqXG4gICAqIEBQcm9wZXJ0eTogY29uZmlnXG4gICAqL1xuICBjb25maWcgPSBjb25maWc7XG4gIHVzZXJBZ2VudCA9IGNvbmZpZy5VU0VSX0FHRU5UO1xuICBpc1JlYWR5ID0gZmFsc2U7XG4gIHJlYWR5SGFuZGxlcnMgPSBBcnJheSgpO1xuICBlbmdpbmUgPSBjb25maWcuX2VuZ2luZTtcbiAgcGxhdGZvcm0gPSBjb25maWcuX2xvY2FsTmFtZTtcbiAgbG9jYWxOYW1lID0gY29uZmlnLl9sb2NhbE5hbWU7XG4gIGNsYXNzTmFtZXMgPSBbXTtcblxuICAvKipcbiAgICogQFByb3RvdHlwZSgpOiBpbml0XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBJbml0aWFsaXplIHRoZSBJbnRlcmZhY2VQbGF0Zm9ybVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtwbGF0Zm9ybV0gVGhlIGN1cnJlbnQgcnVubmluZyBQbGF0Zm9ybU5hbWVcbiAgICovXG4gIGluaXQob3ZlcndyaXRlID0ge30pIHtcbiAgICBzZXRQbGF0Zm9ybUF0dHJpYnV0ZSgpO1xuICAgIHRoaXMucGxhdGZvcm0gPSB0aGlzLnNldFBsYXRmb3JtKHRoaXMuZGV0ZWN0UGxhdGZvcm0ob3ZlcndyaXRlLnBsYXRmb3JtKSk7XG4gICAgdGhpcy52ZXJzaW9uICA9IHRoaXMuc2V0VmVyc2lvbih0aGlzLmRldGVjdFZlcnNpb24ob3ZlcndyaXRlLnZlcnNpb24pKTtcbiAgICB0aGlzLmVuZ2luZSAgID0gdGhpcy5zZXRFbmdpbmUodGhpcy5kZXRlY3RFbmdpbmUob3ZlcndyaXRlLmVuZ2luZSkpO1xuXG4gICAgdGhpcy5jbGFzc05hbWVzLnB1c2goYHBsYXRmb3JtLSR7dGhpcy5sb2NhbE5hbWV9YCwgYHBsYXRmb3JtLSR7dGhpcy5sb2NhbE5hbWV9LSR7dGhpcy52ZXJzaW9ufWApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkLmFwcGx5KGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QsIHRoaXMuY2xhc3NOYW1lcyk7XG4gICAgc2V0UHJvdG90eXBlcygpO1xuICAgIC8vIEludm9rZSBSZWFkeSBDYWxsYmFja3NcbiAgICB0aGlzLm9uUmVhZHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IHJlYWR5XG4gICAqIEBkZXNjcmlwdGlvbiBTdG9yZSBjYWxsYmFja3MgZm9yIHdoZW4gdGhpcyBQbGF0Zm9ybSBpcyByZWFkeVxuICAgKi9cbiAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5pc1JlYWR5KSByZXR1cm4gY2FsbGJhY2sodGhpcyk7XG4gICAgdGhpcy5yZWFkeUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEBQcm90b3R5cGUoKTogb25SZWFkeVxuICAgKiBAZGVzY3JpcHRpb24gSW52b2tlIGVhY2ggcmVhZHkgaGFuZGxlciBwYXNzaW5nIHRoaXMgY29udGV4dFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICBpZiAodGhpcy5pc1JlYWR5KSByZXR1cm47XG4gICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLnJlYWR5SGFuZGxlcnMpIHtcbiAgICAgIHRoaXMucmVhZHlIYW5kbGVyc1tpbmRleF0odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQFByb3RvdHlwZSgpOiBkZXRlY3RQbGF0Zm9ybVxuICAgKiBAZGVzY3JpcHRpb24gRGV0ZWN0IHRoZSBjdXJyZW50IFJ1bm5pbmcgUGxhdGZvcm1cbiAgICogQHJldHVybiB7U3RyaW5nfVxuICAgKi9cbiAgZGV0ZWN0UGxhdGZvcm0ocGxhdGZvcm0pIHtcbiAgICByZXR1cm4gcGxhdGZvcm0gICAgICAgICAgICAgICAgICAgPyBwbGF0Zm9ybVxuICAgICAgICAgOiBjb25maWcuaXNQbGF0Zm9ybShBbmRyb2lkKSA/IEFuZHJvaWRcbiAgICAgICAgIDogY29uZmlnLmlzUGxhdGZvcm0oV2luZG93cykgPyBXaW5kb3dzXG4gICAgICAgICA6IGNvbmZpZy5pc1BsYXRmb3JtKGlPUykgICAgID8gaU9TXG4gICAgICAgICA6IEFJO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBQcm90b3R5cGUoKTogc2V0UGxhdGZvcm1cbiAgICogQGRlc2NyaXB0aW9uIFByaXZhdGUgY29uZmlndXJhdGlvbnMgYmVmb3JlIHNldHRpbmcgdGhlIGdsb2JhbCBQbGF0Zm9ybVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW3BsYXRmb3JtTmFtZV0gVGhlIGRldGVjdGVkIFBsYXRmb3JtIE5hbWVcbiAgICovXG4gIHNldFBsYXRmb3JtKHBsYXRmb3JtTmFtZSkge1xuICAgIHRoaXMucGxhdGZvcm1OYW1lID0gcGxhdGZvcm1OYW1lXG4gICAgdGhpcy5sb2NhbE5hbWUgPSBwbGF0Zm9ybU5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25maWcuX3ZlcnNpb25FeHByZXNzaW9uID0gY29uZmlnLlZFUlNJT05fRVhQUkVTU0lPTlNbdGhpcy5wbGF0Zm9ybU5hbWVdO1xuICAgIGRvY3VtZW50LmJvZHkuaW50ZXJmYWNlUGxhdGZvcm0gPSB0aGlzLmxvY2FsTmFtZTtcbiAgICByZXR1cm4gdGhpcy5sb2NhbE5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQFByb3RvdHlwZSgpOiBnZXRQbGF0Zm9ybVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoaXMgUGxhdGZvcm0gTG9jYWwgTmFtZVxuICAgKi9cbiAgZ2V0UGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQFByb3RvdHlwZSgpOiBkZXRlY3RWZXJzaW9uXG4gICAqIEBkZXNjcmlwdGlvbiBEZXRlY3QgdGhlIGN1cnJlbnQgdmVyc2lvbiBiYXNlZCBvbiB0aGlzIFBsYXRmb3JtXG4gICAqIEByZXR1cm4ge1N0cmluZ30gVmVyc2lvbiBOdW1iZXJcbiAgICovXG4gIGRldGVjdFZlcnNpb24odmVyc2lvbiwgX3ZlcnNpb24pIHtcbiAgICBfdmVyc2lvbiA9IGNvbmZpZy5VU0VSX0FHRU5ULm1hdGNoKGNvbmZpZy5fdmVyc2lvbkV4cHJlc3Npb24pO1xuICAgIHJldHVybiBfdmVyc2lvbi5sZW5ndGggPiAyXG4gICAgICA/IHBhcnNlRmxvYXQoX3ZlcnNpb25bMV0gKyAnLicgKyBfdmVyc2lvblsyXSlcbiAgICAgIDogdmVyc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAUHJvdG90eXBlKCk6IHNldFZlcnNpb25cbiAgICogQGRlc2NyaXB0aW9uIFByaXZhdGUgY29uZmlndXJhdGlvbnMgYmVmb3JlIHNldHRpbmcgdGhlIGdsb2JhbCBWZXJzaW9uIE51bWJlclxuICAgKi9cbiAgc2V0VmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgdmVyc2lvbiA9IHZlcnNpb24gfHwgMDtcbiAgICByZXR1cm4gdmVyc2lvbiA9IHZlcnNpb24gfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBQcm90b3R5cGUoKTogZGV0ZWN0RW5naW5lXG4gICAqIEBkZXNjcmlwdGlvbiBEZXRlY3QgdGhlIGN1cnJlbnQgU3R5bGluZyBFbmdpbmUgZm9yIHZlbmRvciBwcmVmaXhpbmdcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbZW5naW5lPV0gQSBkZWZhdWx0IEVuZ2luZVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgICBUaGUgQ3VycmVudCBydW5uaW5nIEVuZ2luZVxuICAgKi9cbiAgZGV0ZWN0RW5naW5lKGVuZ2luZSkge1xuICAgIHJldHVybiBlbmdpbmUgID8gICBlbmdpbmVcbiAgICAgICAgIDogd2luZG93Lm9wZXJhICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvcGVyYSkgPT09ICdbb2JqZWN0IE9wZXJhXSdcbiAgICAgICAgID8gcHJlc3RvXG4gICAgICAgICA6ICdNb3pBcHBlYXJhbmNlJyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGVcbiAgICAgICAgID8gZ2Vja29cbiAgICAgICAgIDogJ1dlYmtpdEFwcGVhcmFuY2UnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZVxuICAgICAgICAgPyB3ZWJraXRcbiAgICAgICAgIDogdHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IuY3B1Q2xhc3MgPT09ICdzdHJpbmcnXG4gICAgICAgICA/IHRyaWRlbnRcbiAgICAgICAgIDogdW5kZWZpbmVkXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQFByb3RvdHlwZSgpOiBzZXRFbmdpbmVcbiAgICogQGRlc2NyaXB0aW9uIFByaXZhdGUgY29uZmlndXJhdGlvbnMgYmVmb3JlIHNldHRpbmcgdGhlIGdsb2JhbCBFbmdpbmVcbiAgICovXG4gIHNldEVuZ2luZShlbmdpbmUpIHtcbiAgICByZXR1cm4gZW5naW5lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQFByb3RvdHlwZSgpOiBpc1dlYlZpZXdcbiAgICogaXMgcnVubmluZyBXZWJWaWV3ID8gZS5nLiBDb3Jkb3ZhXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc1dlYlZpZXcoKSB7XG4gICAgcmV0dXJuICEoIXdpbmRvdy5jb3Jkb3ZhICYmICF3aW5kb3cuUGhvbmVHYXAgJiYgIXdpbmRvdy5waG9uZWdhcCAmJiAhd2luZG93LmZvcmdlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBQcm90b3R5cGUoKTogaXNJT1NcbiAgICogQGRlc2NyaXB0aW9uIElzIFBsYXRmb3JtIElPU1xuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNJT1MoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5pc1BsYXRmb3JtKGlPUyk7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAUHJvdG90eXBlKCk6IGlzQW5kcm9pZFxuICAgKiBAZGVzY3JpcHRpb24gSXMgUGxhdGZvcm0gQW5kcm9pZFxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNBbmRyb2lkKCkge1xuICAgIHJldHVybiBjb25maWcuaXNQbGF0Zm9ybShBbmRyb2lkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBQcm90b3R5cGUoKTogaXNXaW5kb3dzXG4gICAqIEBkZXNjcmlwdGlvbiBJcyBQbGF0Zm9ybSBXaW5kb3dzXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc1dpbmRvd3MoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5pc1BsYXRmb3JtKFdpbmRvd3MpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gc2V0UGxhdGZvcm1BdHRyaWJ1dGUoKSB7XG4gIGlmICgnaW50ZXJmYWNlUGxhdGZvcm0nIGluIGRvY3VtZW50LmJvZHkpIHJldHVybjtcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudC5ib2R5LCAnaW50ZXJmYWNlUGxhdGZvcm0nLCB7XG4gICAgc2V0KHBsYXRmb3JtKSB7XG4gICAgICBpZiAodGhpcy5faW50ZXJmYWNlUGxhdGZvcm0gJiYgdGhpcy5faW50ZXJmYWNlUGxhdGZvcm0gIT09IHBsYXRmb3JtKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKGB1aS0ke3RoaXMuX2ludGVyZmFjZVBsYXRmb3JtfWApO1xuICAgICAgfVxuICAgICAgdGhpcy5faW50ZXJmYWNlUGxhdGZvcm0gPSBwbGF0Zm9ybTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKGB1aS0ke3BsYXRmb3JtfWAsIHBsYXRmb3JtKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuc2V0QXR0cmlidXRlKCdhaS1wbGF0Zm9ybScsIHBsYXRmb3JtKTtcbiAgICB9LFxuICAgIGdldCAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW50ZXJmYWNlUGxhdGZvcm07XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbmZ1bmN0aW9uIHNldFByb3RvdHlwZXMoKSB7XG4gIFN0cmluZy5wcm90b3R5cGUuaXNCb29sZWFuID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzID09PSBmYWxzZSB8fCB0aGlzID09PSAnZmFsc2UnIHx8IHRoaXMgPT09IHRydWUgfHwgdGhpcyA9PT0gJ3RydWUnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgU3RyaW5nLnByb3RvdHlwZS5pc0ZhbHNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IGZhbHNlIHx8IHRoaXMgPT09ICdmYWxzZScgfHwgZmFsc2U7XG4gIH1cblxuICBTdHJpbmcucHJvdG90eXBlLmlzVHJ1ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzID09PSB0cnVlIHx8IHRoaXMgPT09ICd0cnVlJyB8fCBmYWxzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
