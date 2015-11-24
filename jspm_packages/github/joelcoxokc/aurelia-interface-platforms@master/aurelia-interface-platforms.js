/* */ 
define(['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.configure = configure;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var IE8 = 'IE8';
  var IE9 = 'IE9';
  var IE10 = 'IE10';

  var IERegexp = /(MSIE|IEMobile|Trident)/ig;
  var PLATFORM_EXPRESSIONS = {
    Android: /(?!like Android)Android/i,
    Windows: /Windows/i,
    iOS: /iP(hone|od|ad)/i,
    OSX: /MAC OS X|OS X/i
  };
  var DEVICE_EXPRESSIONS = {
    HandHeld: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i,
    Tablet: /(tablet|Tablet|iPad|Playbook|Silk)|(Android(?!.*Mobile))/i
  };

  var userAgent = window.navigator.userAgent;
  exports.userAgent = userAgent;
  var isTouch = 'ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch;
  exports.isTouch = isTouch;
  var isIE10 = document.all && window.atob;
  exports.isIE10 = isIE10;
  var isIE9 = !isIE10 && document.all && window.addEventListener && !window.atob;
  exports.isIE9 = isIE9;
  var isHandHeld = DEVICE_EXPRESSIONS.HandHeld.test(userAgent);
  exports.isHandHeld = isHandHeld;
  var isTablet = DEVICE_EXPRESSIONS.HandHeld.test(userAgent);
  exports.isTablet = isTablet;
  var isMobile = isHandHeld && !isTablet;
  exports.isMobile = isMobile;
  var isDesktop = !isHandHeld && !isTablet;
  exports.isDesktop = isDesktop;
  var isIOS = PLATFORM_EXPRESSIONS.iOS.test(userAgent);
  exports.isIOS = isIOS;
  var isAndroid = PLATFORM_EXPRESSIONS.Android.test(userAgent);
  exports.isAndroid = isAndroid;
  var isWindows = PLATFORM_EXPRESSIONS.Windows.test(userAgent);

  exports.isWindows = isWindows;

  var Browser = (function () {
    function Browser() {
      _classCallCheck(this, Browser);
    }

    _createClass(Browser, null, [{
      key: 'isChrome',
      value: (function () {
        var value = /Chrome\//i.test(window.navigator.userAgent);
        if (value) Browser.version = window.navigator.userAgent.match(/Chrome\/([\d*]+)/i)[1];
        return value;
      })(),
      enumerable: true
    }, {
      key: 'isFirefox',
      value: (function () {
        var value = 'mozApps' in window.navigator || 'mozContacts' in window.navigator || 'mozTCPSocket' in window.navigator || 'mozPay' in window.navigator || /Firefox\/\d+/.test(window.navigator.userAgent);
        if (value) Browser.version = window.navigator.userAgent.match(/Firefox\/([\d*]+)/i)[1];
        return value;
      })(),
      enumerable: true
    }, {
      key: 'isSafari',
      value: (function () {
        var value = !Browser.isChrome && /Safari/i.test(window.navigator.userAgent) && /Version/i.test(window.navigator.userAgent);
        if (value) Browser.version = window.navigator.userAgent.match(/Version\/([\d*]+)/i)[1];
        return value;
      })(),
      enumerable: true
    }, {
      key: 'isIE',
      value: (function () {
        var value = IERegexp.test(window.navigator.userAgent);
        if (value) Browser.version = isIE10 ? '10' : isIE9 ? '9' : window.navigator.userAgent.match(/MSIE\s([\d*]+)/i)[1];
        return value;
      })(),
      enumerable: true
    }]);

    return Browser;
  })();

  exports.Browser = Browser;
  var platform = isIOS ? 'ios' : isAndroid ? 'android' : isWindows ? 'windows' : 'ai';
  exports.platform = platform;
  var device = isDesktop ? 'desktop' : isMobile ? 'mobile' : isTablet ? 'tablet' : 'desktop';
  exports.device = device;
  var browser = Browser.isChrome ? 'chrome' : Browser.isFirefox ? 'firefox' : Browser.isSafari ? 'safari' : Browser.isIE ? 'ie' : 'unknown';
  exports.browser = browser;
  var browserVersion = Browser.version;

  exports.browserVersion = browserVersion;

  function configure(framework, config) {

    if (document && document.head) {
      var viewportMeta = _aureliaPal.DOM.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');

      if (isIOS) {
        var meta = _aureliaPal.DOM.createElement('meta');
        meta.setAttribute('name', 'apple-mobile-web-app-capable');
        meta.setAttribute('content', 'yesy');
        document.head.appendChild(meta);
      }

      if (isAndroid) {
        viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no; minimal-ui');
      } else {
        viewportMeta.setAttribute('content', 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1; minimal-ui');
      }
      document.head.appendChild(viewportMeta);
    }

    return config && typeof config === 'function' && config({

      setClassList: function setClassList(element) {
        if (element instanceof Element) {
          element.classList.add('platform-' + platform, 'device-' + device, 'browser-' + browser, 'browser-' + browser + '-' + browserVersion);
        }
      }
    });
  }
});