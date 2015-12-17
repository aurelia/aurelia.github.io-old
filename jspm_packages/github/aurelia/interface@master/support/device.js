/* */ 
define(['exports', '../config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var __ai;

  var HandHeld = 'HandHeld';
  var Mobile = 'Mobile';
  var Tablet = 'Tablet';
  var Desktop = 'Desktop';

  var config = _config.deviceConfig;

  var InterfaceDeviceSupport = (function () {
    function InterfaceDeviceSupport(aureliaInterface) {
      _classCallCheck(this, InterfaceDeviceSupport);

      this.config = config;
      this.userAgent = config.USER_AGENT;
      this.isReady = false;
      this.readyHandlers = Array();
      this.isStatusBarShown = config._isStatusBarShown;
      this.isFullScreen = config._isFullScreen;
      this.classNames = [];
      this.device = config._device;
      this.pixelRatio = window.devicePixelRatio || 1;

      __ai = aureliaInterface;
    }

    _createClass(InterfaceDeviceSupport, [{
      key: 'init',
      value: function init(platform, version, device) {

        this.device = this.setDevice(this.detectDevice(device));
        this.setStatusBar();
        this.classNames.push('device-' + this.localName);
        this.classNames.push('pixel-ratio-' + Math.floor(this.pixelRatio));
        if (this.pixelRatio >= 2) {
          this.classNames.push('retina');
        }
        if (this.isStatusBarShown) {
          classNames.push('with-statusbar-overlay');
        } else {
          document.documentElement.classList.remove('with-statusbar-overlay');
        }
        document.documentElement.classList.add.apply(document.documentElement.classList, this.classNames);

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
      key: 'detectDevice',
      value: function detectDevice(device, _device) {
        _device = device ? device : config.isDevice(HandHeld) ? HandHeld : !config.isDevice(HandHeld) ? Desktop : null;

        return _device === Desktop ? Desktop : config.isDevice(Tablet) ? Tablet : Mobile;
      }
    }, {
      key: 'setDevice',
      value: function setDevice(device) {
        this.localName = device.toLowerCase();
        return device || Desktop;
      }
    }, {
      key: 'setStatusBar',
      value: function setStatusBar() {
        var windowWidth = ai(window).width();
        var windowHeight = ai(window).height();
        this.isStatusBarShown = false;
        if (this.isWebView() && windowWidth * windowHeight === screen.width * screen.height) {
          this.isStatusBarShown = true;
        } else {
          this.isStatusBarShown = false;
        }
      }
    }, {
      key: 'isTouch',
      value: function isTouch() {
        return config.global.IS_TOUCH;
      }
    }, {
      key: 'exitApp',
      value: function exitApp() {
        navigator.app && navigator.app.exitApp && navigator.app.exitApp();
      }
    }, {
      key: 'showStatusBar',
      value: function showStatusBar(value) {
        var _this = this;

        this.isStatusBarShown = value;
        this.ready(function () {
          __ai.requestAnimationFrame(function () {
            if (_this.isStatusBarShown) {
              window.StatusBar && window.StatusBar.show();
              document.body.classList.remove('status-bar-hide');
            } else {
              window.StatusBar && window.StatusBar.hide();
              document.body.classList.add('status-bar-hide');
            }
          });
        });
      }
    }, {
      key: 'fullScreen',
      value: function fullScreen(showFullScreen, showStatusBar) {
        var _this2 = this;

        this.isFullScreen = showFullScreen !== false;

        this.ready(function () {
          __ai.requestAnimationFrame(function () {
            if (self.isFullScreen) {
              document.body.classList.add('fullscreen');
            } else {
              document.body.classList.remove('fullscreen');
            }
          });

          _this2.showStatusBar(showStatusBar === true);
        });
      }
    }, {
      key: 'isWebView',
      value: function isWebView() {
        return !(!window.cordova && !window.PhoneGap && !window.phonegap && !window.forge);
      }
    }, {
      key: 'isHandHeld',
      value: function isHandHeld() {
        return config.isDevice(HandHeld);
      }
    }, {
      key: 'isMobile',
      value: function isMobile() {
        return config.isDevice(HandHeld) && !config.isDevice(Tablet);
      }
    }, {
      key: 'isTablet',
      value: function isTablet() {
        return config.isDevice(HandHeld) && config.isDevice(Tablet);
      }
    }, {
      key: 'isDesktop',
      value: function isDesktop() {
        return !config.isDevice(HandHeld);
      }
    }]);

    return InterfaceDeviceSupport;
  })();

  exports.InterfaceDeviceSupport = InterfaceDeviceSupport;
});
//# sourceMappingURL=data:application/json;base64,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LENBQUMsS0FBSyxDQUFBLEFBQUMsQ0FBQztPQUNwRjs7O2FBV1Msc0JBQUc7QUFDWCxlQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUE7T0FDakM7OzthQVNPLG9CQUFHO0FBQ1QsZUFBTyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUM5RDs7O2FBU08sb0JBQUc7QUFDVCxlQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUM3RDs7O2FBU1EscUJBQUc7QUFDVixlQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztPQUNuQzs7O1dBeFBVLHNCQUFzQiIsImZpbGUiOiJzdXBwb3J0L2RldmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGV2aWNlQ29uZmlnfSBmcm9tICcuLi9jb25maWcnO1xudmFyIF9fYWk7XG5cbmNvbnN0IEhhbmRIZWxkID0gJ0hhbmRIZWxkJztcbmNvbnN0IE1vYmlsZSAgID0gJ01vYmlsZSc7XG5jb25zdCBUYWJsZXQgICA9ICdUYWJsZXQnO1xuY29uc3QgRGVza3RvcCAgPSAnRGVza3RvcCc7XG5cbnZhciBjb25maWcgPSBkZXZpY2VDb25maWc7XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VEZXZpY2VTdXBwb3J0IHtcbiAgY29uZmlnICAgICAgICAgICA9IGNvbmZpZztcbiAgdXNlckFnZW50ICAgICAgICA9IGNvbmZpZy5VU0VSX0FHRU5UO1xuICBpc1JlYWR5ICAgICAgICAgID0gZmFsc2U7XG4gIHJlYWR5SGFuZGxlcnMgICAgPSBBcnJheSgpO1xuICBpc1N0YXR1c0JhclNob3duID0gY29uZmlnLl9pc1N0YXR1c0JhclNob3duO1xuICBpc0Z1bGxTY3JlZW4gICAgID0gY29uZmlnLl9pc0Z1bGxTY3JlZW47XG4gIGNsYXNzTmFtZXMgICAgICAgPSBbXTtcbiAgLyoqXG4gICAqIFByb3BlcnR5KCk6IGRldmljZVxuICAgKi9cbiAgZGV2aWNlID0gY29uZmlnLl9kZXZpY2U7XG4gIHBpeGVsUmF0aW8gPSB3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuXG4gIGNvbnN0cnVjdG9yKGF1cmVsaWFJbnRlcmZhY2UpIHtcbiAgICBfX2FpID0gYXVyZWxpYUludGVyZmFjZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IGluaXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemUgdGhlIEludGVyZmFjZVBsYXRmb3JtXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW3BsYXRmb3JtXSBUaGUgY3VycmVudCBydW5uaW5nIFBsYXRmb3JtTmFtZVxuICAgKi9cbiAgaW5pdChwbGF0Zm9ybSwgdmVyc2lvbiwgZGV2aWNlKSB7XG5cbiAgICB0aGlzLmRldmljZSAgID0gdGhpcy5zZXREZXZpY2UodGhpcy5kZXRlY3REZXZpY2UoZGV2aWNlKSk7XG4gICAgdGhpcy5zZXRTdGF0dXNCYXIoKTtcbiAgICB0aGlzLmNsYXNzTmFtZXMucHVzaChgZGV2aWNlLSR7dGhpcy5sb2NhbE5hbWV9YClcbiAgICB0aGlzLmNsYXNzTmFtZXMucHVzaCgncGl4ZWwtcmF0aW8tJyArIE1hdGguZmxvb3IodGhpcy5waXhlbFJhdGlvKSk7XG4gICAgIGlmICh0aGlzLnBpeGVsUmF0aW8gPj0gMikge1xuICAgICAgICB0aGlzLmNsYXNzTmFtZXMucHVzaCgncmV0aW5hJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzU3RhdHVzQmFyU2hvd24pIHtcbiAgICAgICAgY2xhc3NOYW1lcy5wdXNoKCd3aXRoLXN0YXR1c2Jhci1vdmVybGF5Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dpdGgtc3RhdHVzYmFyLW92ZXJsYXknKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQuYXBwbHkoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdCwgdGhpcy5jbGFzc05hbWVzKTtcbiAgICAvLyBJbnZva2UgUmVhZHkgQ2FsbGJhY2tzXG4gICAgdGhpcy5vblJlYWR5KCk7XG4gIH1cblxuICAvKipcbiAgICogQFByb3RvdHlwZSgpOiByZWFkeVxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gU3RvcmUgY2FsbGJhY2tzIGZvciB3aGVuIHRoaXMgUGxhdGZvcm0gaXMgcmVhZHlcbiAgICovXG4gIHJlYWR5KGNhbGxiYWNrKSB7XG4gICAgaWYgKHRoaXMuaXNSZWFkeSkgcmV0dXJuIGNhbGxiYWNrKHRoaXMpO1xuICAgIHRoaXMucmVhZHlIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IG9uUmVhZHlcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIEludm9rZSBlYWNoIHJlYWR5IGhhbmRsZXIgcGFzc2luZyB0aGlzIGNvbnRleHRcbiAgICovXG4gIG9uUmVhZHkoKSB7XG4gICAgaWYgKHRoaXMuaXNSZWFkeSkgcmV0dXJuO1xuICAgIHRoaXMuaXNSZWFkeSA9IHRydWU7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5yZWFkeUhhbmRsZXJzKSB7XG4gICAgICB0aGlzLnJlYWR5SGFuZGxlcnNbaW5kZXhdKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIFByb3RvdHlwZSgpOiBkZXRlY3REZXZpY2VcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIENoZWNrIGZvciB0ZWggY3VycmVudCBEZXZpY2VcbiAgICogQHBhcmFtICB7U3RyaW5nfSBbZGV2aWNlXVxuICAgKiBAcGFyYW0gIHtOdWxsfSAgIFtfZGV2aWNlXSBOdWxsIFVzZWQgdG8gYXZvaWQgYSBWYXJcbiAgICogQHJldHVybiB7U3RyaW5nfSAgICAgICAgICAgQ3VycmVudCBSdW5uaW5nIERldmljZVxuICAgKi9cbiAgZGV0ZWN0RGV2aWNlKGRldmljZSwgX2RldmljZSkge1xuICAgIF9kZXZpY2UgPSBkZXZpY2UgPyBkZXZpY2VcbiAgICAgICAgICAgIDogY29uZmlnLmlzRGV2aWNlKEhhbmRIZWxkKSA/IEhhbmRIZWxkXG4gICAgICAgICAgICA6ICFjb25maWcuaXNEZXZpY2UoSGFuZEhlbGQpID8gRGVza3RvcFxuICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIChfZGV2aWNlID09PSBEZXNrdG9wKSA/IERlc2t0b3BcbiAgICAgICAgIDogY29uZmlnLmlzRGV2aWNlKFRhYmxldCkgPyBUYWJsZXRcbiAgICAgICAgIDogTW9iaWxlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIFByb3RvdHlwZSgpOiBzZXREZXZpY2VcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFByaXZhdGUgY29uZmlndXJhdGlvbnMgYmVmb3JlIHNldHRpbmcgdGhlIGdsb2JhbCBkZXZpY2VcbiAgICogQHBhcmFtIHtTdHJpbmd9IFtkZXZpY2VdIFRoZSBkZXRlY3RlZCBEZXZpY2VcbiAgICovXG4gIHNldERldmljZShkZXZpY2UpIHtcbiAgICB0aGlzLmxvY2FsTmFtZSA9IGRldmljZS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBkZXZpY2UgfHwgRGVza3RvcFxuICB9XG5cbiAgc2V0U3RhdHVzQmFyKCkge1xuICAgIHZhciB3aW5kb3dXaWR0aCA9IGFpKHdpbmRvdykud2lkdGgoKTtcbiAgICB2YXIgd2luZG93SGVpZ2h0ID0gYWkod2luZG93KS5oZWlnaHQoKTtcbiAgICB0aGlzLmlzU3RhdHVzQmFyU2hvd24gPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pc1dlYlZpZXcoKSAmJiAod2luZG93V2lkdGggKiB3aW5kb3dIZWlnaHQgPT09IHNjcmVlbi53aWR0aCAqIHNjcmVlbi5oZWlnaHQpKSB7XG4gICAgICAgIHRoaXMuaXNTdGF0dXNCYXJTaG93biA9IHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmlzU3RhdHVzQmFyU2hvd24gPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKiBEZXZpY2UgSGVscGVycyAqL1xuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIFByb3RvdHlwZSgpOiBpc1RvdWNoXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBDaGVjayBpZiB0aGUgY3VycmVudCBkZXZpY2Ugc3VwcG9ydHMgdG91Y2hFdmVudHNcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzVG91Y2goKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5nbG9iYWwuSVNfVE9VQ0g7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBQcm90b3R5cGUoKTogZXhpdEFwcFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gTmF0aXZlIEFwcGxpY2F0aW9uIEV4aXRcbiAgICovXG4gIGV4aXRBcHAoKSB7XG4gICAgbmF2aWdhdG9yLmFwcCAmJiBuYXZpZ2F0b3IuYXBwLmV4aXRBcHAgJiYgbmF2aWdhdG9yLmFwcC5leGl0QXBwKCk7XG4gIH1cblxuICAvKiBDb3Jkb3ZhIEhlbHBlcnMgKi9cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IHNob3dTdGF0dXNCYXJcbiAgICpcbiAgICogQGF1dGhvciBieSBJb25pYyBUZWFtXG4gICAqIEBkZXNjcmlwdGlvbiBTaG93cyBvciBoaWRlcyB0aGUgZGV2aWNlIHN0YXR1cyBiYXIgKGluIENvcmRvdmEpLiBSZXF1aXJlcyBgY29yZG92YSBwbHVnaW4gYWRkIG9yZy5hcGFjaGUuY29yZG92YS5zdGF0dXNiYXJgXG4gICAqIEBwYXJhbSAge0Jvb2xlYW59IFt2YWx1ZV0gU2hvdyBvciBIaWRlXG4gICAqL1xuICBzaG93U3RhdHVzQmFyKHZhbHVlKSB7XG4gICAgLy8gT25seSB1c2VmdWwgd2hlbiBydW4gd2l0aGluIGNvcmRvdmFcbiAgICB0aGlzLmlzU3RhdHVzQmFyU2hvd24gPSB2YWx1ZTtcbiAgICB0aGlzLnJlYWR5KCgpPT4ge1xuICAgICAgLy8gcnVuIHRoaXMgb25seSB3aGVuIG9yIGlmIHRoZSBwbGF0Zm9ybSAoY29yZG92YSkgaXMgcmVhZHlcbiAgICAgIF9fYWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpPT57XG4gICAgICAgIGlmICh0aGlzLmlzU3RhdHVzQmFyU2hvd24pIHtcbiAgICAgICAgICAvLyB0aGV5IGRvIG5vdCB3YW50IGl0IHRvIGJlIGZ1bGwgc2NyZWVuXG4gICAgICAgICAgd2luZG93LlN0YXR1c0JhciAmJiB3aW5kb3cuU3RhdHVzQmFyLnNob3coKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3N0YXR1cy1iYXItaGlkZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGl0IHNob3VsZCBiZSBmdWxsIHNjcmVlblxuICAgICAgICAgIHdpbmRvdy5TdGF0dXNCYXIgJiYgd2luZG93LlN0YXR1c0Jhci5oaWRlKCk7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzdGF0dXMtYmFyLWhpZGUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBQcm90b3R5cGUoKTogZnVsbFNjcmVlblxuICAgKlxuICAgKiBAYXV0aG9yIElvbmljIFRlYW1cbiAgICogQGRlc2NyaXB0aW9uXG4gICAqIFNldHMgd2hldGhlciB0aGUgYXBwIGlzIGZ1bGxzY3JlZW4gb3Igbm90IChpbiBDb3Jkb3ZhKS5cbiAgICogQHBhcmFtIHtib29sZWFuPX0gc2hvd0Z1bGxTY3JlZW4gV2hldGhlciBvciBub3QgdG8gc2V0IHRoZSBhcHAgdG8gZnVsbHNjcmVlbi4gRGVmYXVsdHMgdG8gdHJ1ZS4gUmVxdWlyZXMgYGNvcmRvdmEgcGx1Z2luIGFkZCBvcmcuYXBhY2hlLmNvcmRvdmEuc3RhdHVzYmFyYFxuICAgKiBAcGFyYW0ge2Jvb2xlYW49fSBzaG93U3RhdHVzQmFyIFdoZXRoZXIgb3Igbm90IHRvIHNob3cgdGhlIGRldmljZSdzIHN0YXR1cyBiYXIuIERlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgZnVsbFNjcmVlbihzaG93RnVsbFNjcmVlbiwgc2hvd1N0YXR1c0Jhcikge1xuICAgIC8vIHNob3dGdWxsU2NyZWVuOiBkZWZhdWx0IGlzIHRydWUgaWYgbm8gcGFyYW0gcHJvdmlkZWRcbiAgICB0aGlzLmlzRnVsbFNjcmVlbiA9IChzaG93RnVsbFNjcmVlbiAhPT0gZmFsc2UpO1xuXG4gICAgLy8gYWRkL3JlbW92ZSB0aGUgZnVsbHNjcmVlbiBjbGFzc25hbWUgdG8gdGhlIGJvZHlcbiAgICAvLyBpb25pYy5Eb21VdGlsLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVhZHkoKCk9PiB7XG4gICAgICAvLyBydW4gdGhpcyBvbmx5IHdoZW4gb3IgaWYgdGhlIERPTSBpcyByZWFkeVxuICAgICAgX19haS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChzZWxmLmlzRnVsbFNjcmVlbikge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZnVsbHNjcmVlbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnZnVsbHNjcmVlbicpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIHNob3dTdGF0dXNCYXI6IGRlZmF1bHQgaXMgZmFsc2UgaWYgbm8gcGFyYW0gcHJvdmlkZWRcbiAgICAgIHRoaXMuc2hvd1N0YXR1c0Jhcigoc2hvd1N0YXR1c0JhciA9PT0gdHJ1ZSkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tIFBsYXRmb3JtIERldGVjdGlvbiBmb3IgcHVibGljIHVzYWdlIC0tLS0tLS0tLS0tLS0tLS0tKi9cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBQcm90b3R5cGUoKTogaXNXZWJWaWV3XG4gICAqXG4gICAqIGlzIHJ1bm5pbmcgV2ViVmlldyA/IGUuZy4gQ29yZG92YVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNXZWJWaWV3KCkge1xuICAgIHJldHVybiAhKCF3aW5kb3cuY29yZG92YSAmJiAhd2luZG93LlBob25lR2FwICYmICF3aW5kb3cucGhvbmVnYXAgJiYgIXdpbmRvdy5mb3JnZSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0gRGV2aWNlIERldGVjdGlvbiBmb3IgcHVibGljIHVzYWdlIC0tLS0tLS0tLS0tLS0tICovXG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogUHJvdG90eXBlKCk6IGlzSGFuZEhlbGRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIElzIERldmljZSBhIG1vYmlsZSBvciBUYWJsZXQgRGV2aWNlXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0hhbmRIZWxkKCkge1xuICAgIHJldHVybiBjb25maWcuaXNEZXZpY2UoSGFuZEhlbGQpXG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBQcm90b3R5cGUoKTogaXNNb2JpbGVcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIElzIERldmljZSBhIG1vYmlsZSBEZXZpY2VcbiAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICovXG4gIGlzTW9iaWxlKCkge1xuICAgIHJldHVybiBjb25maWcuaXNEZXZpY2UoSGFuZEhlbGQpICYmICFjb25maWcuaXNEZXZpY2UoVGFibGV0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIFByb3RvdHlwZSgpOiBpc1RhYmxldFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gSXMgRGV2aWNlIGEgdGFibGV0IERldmljZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNUYWJsZXQoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5pc0RldmljZShIYW5kSGVsZCkgJiYgY29uZmlnLmlzRGV2aWNlKFRhYmxldCk7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBQcm90b3R5cGUoKTogaXNEZXNrdG9wXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBJcyBEZXZpY2UgYSBkZXNrdG9wIERldmljZVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNEZXNrdG9wKCkge1xuICAgIHJldHVybiAhY29uZmlnLmlzRGV2aWNlKEhhbmRIZWxkKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
