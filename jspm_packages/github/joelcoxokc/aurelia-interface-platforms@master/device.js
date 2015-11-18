/* */ 
define(['exports', './ua-cache', './util', 'lodash'], function (exports, _uaCache, _util, _lodash) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.isSafari = isSafari;
  exports.isTouch = isTouch;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var DEVICE_REGEXP = {
    MOBILE_OR_TABLET: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i,
    TABLET_ONLY: /(tablet|ipad|playbook|silk)|(android(?!.*mobile))/i,
    LIKE_ANDROID: /like Android/i,
    ANDROID: /Android/i,
    WINDOWS: /Windows/i,
    IOS: /iP(hone|od|ad)/i,
    OSX: /MAC OS X|OS X/
  };

  var userAgent = window.navigator.userAgent;
  var _cache = _cache || {};
  var keys = {};

  function _isCached(key, dynamic) {
    return (0, _lodash.has)(_cache, (0, _util.dot)(key, dynamic));
  }

  function _getCached(key, dynamic) {
    return (0, _lodash.get)(_cache, (0, _util.dot)(key, dynamic));
  }

  function _setCash(key, value) {
    (0, _lodash.set)(_cache, key, value);
    return (0, _lodash.get)(_cache, key);
  }

  function _Test(key) {
    return DEVICE_REGEXP[key].test(userAgent);
  }

  keys.isMobile = 'device.is.mobile';
  function _deviceMobile() {
    if (_isCached(keys.isMobile)) return _getCached(keys.isMobile);else return _setCash(keys.isMobile, _Test('MOBILE_OR_TABLET') && !_Test('TABLET_ONLY'));
  }

  keys.isTablet = 'device.is.tablet';
  function _deviceTablet() {
    if (_isCached(keys.isTablet)) return _getCached(keys.isTablet);else return _setCash(keys.isTablet, _deviceMobile() && _Test('TABLET_ONLY'));
  }

  keys.isDesktop = 'device.is.desktop';
  function _deviceDesktop() {
    if (_isCached(keys.isDesktop)) return _getCached(keys.isDesktop);else return _setCash(keys.isDesktop, !_deviceMobile());
  }

  keys.isIOS = 'platform.is.ios';
  function _platformIOS(key) {
    if (_isCached(keys.isIOS)) return _getCached(keys.isIOS);else return _setCash(keys.isIOS, _deviceMobile() && _Test('IOS'));
  }

  keys.isAndroid = 'device.is.android';
  function _platformAndroid(key) {
    if (_isCached(keys.isAndroid)) return _getCached(keys.isAndroid);else return _setCash(keys.isAndroid, !_Test('LIKE_ANDROID') && _Test('ANDROID'));
  }

  keys.isWindows = 'device.is.windows';
  function _platformWindows(key) {
    if (_isCached(keys.isWindows)) return _getCached(keys.isWindows);else return _setCash(keys.isWindows, _Test('WINDOWS'));
  }

  keys.isOSX = 'platform.is.osx';
  function _platformOSX() {
    if (_isCached(keys.isOSX)) return _getCached(keys.isOSX);else return _setCash(keys.isOSX, !_deviceMobile() && _Test('OSX'));
  }

  keys.isChrome = 'browser.is.chrome';
  function _browserChrome() {
    if (_isCached(keys.isWindows)) return _getCached(keys.isWindows);else return _setCash(keys.isWindows, _Test('CHROME'));
  }

  keys.isChromeIOS = 'browser.is.chromeIOS';

  function _browserChromeIOS() {
    return (/CriOS/i.test(userAgent)
    );
  }

  keys.isSafari = 'browser.is.safari';
  function _browserSafari() {
    return !_browserChrome() && /Safari/i.test(userAgent);
  }

  function isSafari() {
    return _browserSafari();
  }

  keys.isIE = 'browser.is.IE';

  function _browserIE() {}

  keys.isFirefox = 'browser.is.firefox';
  function _browserFirefox() {}

  function isTouch() {
    return 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
  }

  var Device = (function () {
    function Device() {
      _classCallCheck(this, Device);

      this.cache = _cache;
      this.instruction = {
        mobile: _deviceMobile,
        tablet: _deviceTablet,
        desktop: _deviceDesktop,
        ios: _platformIOS,
        android: _platformAndroid,
        windows: _platformWindows,
        osx: _platformOSX
      };
    }

    _createClass(Device, [{
      key: 'getAll',
      value: function getAll() {
        var all = this.instruction;
        for (var _name in this.instruction) {
          var isFN = this.instruction[_name];
          var FNname = isFN.name;
          if (/\_device/.test(FNname)) {
            this.getDevice(_name);
          } else if (/\_platform/.test(FNname)) {
            this.getPlatform(_name);
          }
        }
        var device = this.device;
        var platform = this.platform;
        this.information = { device: device, platform: platform };
        return this.information;
      }
    }, {
      key: 'getDevice',
      value: function getDevice(device) {
        var isFN = this.instruction[device];
        var value = isFN();
        return value ? (this.device = device) && value : value;
      }
    }, {
      key: 'getPlatform',
      value: function getPlatform(platform) {
        var isFN = this.instruction[platform];
        var value = isFN();
        return value ? (this.platform = platform) && value : value;
      }
    }, {
      key: 'getBrowser',
      value: function getBrowser(browser) {
        var isFN = this.browserInstruction[browser];
        var value = isFN();
        return value ? (this.browser = browser) && valule : value;
      }
    }, {
      key: 'isMobile',
      get: function get() {
        return this.getDevice('mobile');
      }
    }, {
      key: 'isTablet',
      get: function get() {
        return this.getDevice('tablet');
      }
    }, {
      key: 'isDesktop',
      get: function get() {
        return this.getDevice('desktop');
      }
    }, {
      key: 'isIOS',
      get: function get() {
        return this.getPlatform('ios');
      }
    }, {
      key: 'isAndroid',
      get: function get() {
        return this.getPlatform('android');
      }
    }, {
      key: 'isWindows',
      get: function get() {
        return this.getPlatform('windows');
      }
    }, {
      key: 'isOSX',
      get: function get() {
        return this.getPlatform('osx');
      }
    }, {
      key: 'info',
      get: function get() {
        return this.information ? this.information : this.getAll();
      }
    }, {
      key: 'isTouch',
      get: function get() {
        return 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
      }
    }]);

    return Device;
  })();

  exports.Device = Device;
});