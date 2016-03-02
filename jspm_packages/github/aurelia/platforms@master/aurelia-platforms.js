/* */ 
define(['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  exports.__esModule = true;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.configure = configure;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var support = {};

  var util = support.util = {};

  var platforms_ = support.platforms = {};

  var vendor_ = support.vendor = {};

  support.win = window;

  support.navigator = support.win.navigator || {};

  support.cordova = support.win.cordova;

  support.userAgent = support.navigator.userAgent || '';

  support.UA = support.userAgent;

  support.ai = support.win.aureliaInterface;

  support.isAI = !!support.ai;

  support.isCompiled = support.isAI && support.ai.compiledInstruction;

  support.metaViewPortInitialScale_ = 1;

  support.metaViewPortWidth_ = 'device-width';

  platforms_.readyCallbacks = [];
  platforms_.ready = function (callback) {
    platforms_.readyCallbacks.push(callback);
  };

  platforms_.init = function (platform, device, browser) {
    while (platforms_.readyCallbacks.length) {
      platforms_.readyCallbacks.shift()(platform, device, browser);
    }
  };

  support.HANDHELD = /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/;

  support.TABLET = /(tablet|Tablet|iPad|Playbook|Silk)|(Android(?!.*Mobile))/;

  support.OPERA = /(?:Mobile Safari).*(OPR)|(?:Chrome).*(OPR)|(OPiOS)/;

  support.FIREFOX = /Firefox|PaleMoon|FireWeb|Fennec|Netscape|Fresco|SeaMonkey/;

  support.SAFARI = /Safari/;

  support.APPLE_WEBKIT = /AppleWebKit/;

  support.CHROME = /(Chromium|Chrome|CriOS)/;

  support.SILK = /Silk/;

  support.EDGE = /Edge/;

  support.WEBKIT = /WebKit/;

  support.TRIDENT = /Trident/;

  support.IE = /([MS]?IE)|IEMobile|MSIE|Edge|Trident/;

  support.ANDROID = /Android/;

  support.ANDROID_CHROME = /Android.+ Chrome\/[.0-9]*/;

  support.ANDROID_WEBVIEW = /Android.+(wv|Version\/[.0-9]* Chrome\/[.0-9]*)/;

  support.ANDROID_FIREFOX = /Android.+Firefox/;

  support.IOS = /(iP(ad|od|hone))/;

  support.IOS_CHROME = /iP(ad|od|hone).+CriOS\/[.0-9]* Mobile/;

  support.IOS_FIREFOX = /iP(ad|od|hone).+FxiOS\/[.0-9]* Mobile/;

  support.IOS_OPERA = /((iP|ad|od|hone); Opera)|Coast/;

  support.IOS_SAFARI = /iP(ad|od|hone).+Version\/[.0-9]* Mobile/;

  support.IPOD = /(iPod)/;

  support.IPAD = /(iPad)/;

  support.IPHONE = /(iPhone)/;

  support.WINDOWS = /Windows|Windows Phone|IEMobile/;

  support.MAC = /Mac OS X/;

  support.SIMULATOR = /Simulator/;

  support.LINUX = /Linux/;

  support.GECKO = /Gecko/;

  support.createMetadataElemet = function (name, content, id) {
    var node = _aureliaPal.DOM.createElement('meta');
    node.setAttribute('name', name);
    node.setAttribute('content', content);
    if (id) {
      node.id = id;
    }
    document.head.appendChild(node);
  };

  support.applyClassList = function () {
    var _document$documentElement$classList;

    (_document$documentElement$classList = document.documentElement.classList).add.apply(_document$documentElement$classList, arguments);
  };

  util.contains = function (key, lookup) {

    if (lookup) {
      if (typeof lookup === 'string' || Array.isArray(lookup)) {
        return lookup.indexOf(key) != -1;
      } else if (typeof lookup === 'object') {
        return lookup !== null && key in lookup;
      }
    }

    return false;
  };

  util.getUserAgent = function () {
    return support.UA || window.navigator && window.navigator.userAgent || '';
  };

  util.getLowerCaseUserAgent = function () {
    return support.ua || (window.navigator && window.navigator.userAgent || '').toLowerCase();
  };

  var testUA = util.testUA = function (value, filter) {
    var ua = window.navigator.userAgent;
    if (value instanceof RegExp) {
      return value.test(ua);
    }
    return util.contains(value, ua);
  };

  util.partial = function (fn) {
    var args = Array.prototype.slice.call(arguments, 1);
    return function () {
      var newArgs = args.slice();
      newArgs.push.apply(newArgs, arguments);
      return fn.apply(this, newArgs);
    };
  };

  util.createVersionTuples = function (uaString) {
    var versionRegExp = new RegExp('(\\w[\\w ]+)' + '/' + '([^\\s]+)' + '\\s*' + '(?:\\((.*?)\\))?', 'g');

    var tuple = [];
    var match;

    while (match = versionRegExp.exec(uaString)) {
      tuple.push([match[1], match[2], match[3] || undefined]);
    }

    return tuple;
  };

  util.compareVersions = function (version1, version2) {
    var order = 0;

    var v1Subs = String.prototype.trim.call(String(version1)).split('.');
    var v2Subs = String.prototype.trim.call(String(version2)).split('.');
    var subCount = Math.max(v1Subs.length, v2Subs.length);

    for (var subIdx = 0; order == 0 && subIdx < subCount; subIdx++) {
      var v1Sub = v1Subs[subIdx] || '';
      var v2Sub = v2Subs[subIdx] || '';

      var v1CompParser = new RegExp('(\\d*)(\\D*)', 'g');
      var v2CompParser = new RegExp('(\\d*)(\\D*)', 'g');
      do {
        var v1Comp = v1CompParser.exec(v1Sub) || ['', '', ''];
        var v2Comp = v2CompParser.exec(v2Sub) || ['', '', ''];

        if (v1Comp[0].length == 0 && v2Comp[0].length == 0) {
          break;
        }

        var v1CompNum = v1Comp[1].length == 0 ? 0 : parseInt(v1Comp[1], 10);
        var v2CompNum = v2Comp[1].length == 0 ? 0 : parseInt(v2Comp[1], 10);

        order = util.compareElements_(v1CompNum, v2CompNum) || util.compareElements_(v1Comp[2].length == 0, v2Comp[2].length == 0) || util.compareElements_(v1Comp[2], v2Comp[2]);
      } while (order == 0);
    }

    return order;
  };

  util.compareElements_ = function (left, right) {
    if (left < right) {
      return -1;
    } else if (left > right) {
      return 1;
    }
    return 0;
  };

  platforms_.isHandHeld = function () {
    return testUA(support.HANDHELD);
  };

  platforms_.isMobile = function () {
    return testUA(support.HANDHELD) && !testUA(support.TABLET);
  };

  platforms_.isTablet = function () {
    return testUA(support.HANDHELD) && testUA(support.TABLET);
  };

  platforms_.isDesktop = function () {
    return !platforms_.isMobile() && !platforms_.isTablet();
  };

  platforms_.isIphone = function () {
    return platforms_.isIos() && testUA(support.IPHONE);
  };

  platforms_.isIpad = function () {
    return platforms_.isIos() && testUA(support.IPAD);
  };

  platforms_.isIpod = function () {
    return platforms_.isIos() && testUA(support.IPOD);
  };

  platforms_.ready(function (platform, device, browser) {
    if (device) {
      support.applyClassList('device-' + device);
    }
  });

  platforms_.isOpera = function () {
    return testUA(support.OPERA);
  };

  platforms_.isIE = function () {
    return testUA(support.IE);
  };

  platforms_.isFirefox = function () {
    return !testUA(support.FIREFOX);
  };

  platforms_.isSafari = function () {
    return testUA(support.SAFARI) && !(testUA(support.CHROME) || testUA(support.COAST) || testUA(support.OPERA) || testUA(support.EDGE) || testUA(support.SILK));
  };

  platforms_.isCoast = function () {
    return testUA(support.COAST);
  };

  platforms_.isIosWebview = function () {
    return testUA(support.IOS) & !(testUA(support.SAFARI) || testUA(support.CHROME) || testUA(support.COAST)) & testUA(support.APPLE_WEBKIT);
  };

  platforms_.isAppleWebKit = function () {
    return testUA(support.APPLE_WEBKIT);
  };

  platforms_.isChrome = function () {
    return testUA(support.CHROME) && !testUA(support.OPERA) && !testUA(support.IE);
  };

  platforms_.isSilk = function () {
    return testUA(support.SILK);
  };

  platforms_.isIosChrome = function () {
    return testUA(support.IOS_CHROME);
  };

  platforms_.isIosFirefox = function () {
    return testUA(support.IOS_FIREFOX);
  };

  platforms_.isIosOpera = function () {
    return platforms_.isIos() && testUA(support.IOS_OPERA);
  };

  platforms_.isIosSafari = function () {
    return testUA(support.IOS_SAFARI);
  };

  platforms_.isAndroidFirefox = function () {
    return testUA(support.ANDROID_FIREFOX);
  };

  platforms_.isAndroidChrome = function () {
    return testUA(support.ANDROID_CHROME) && !testUA(support.ANDROID_WEBVIEW);
  };

  platforms_.isAndroidWebView = function () {
    return testUA(support.ANDROID_WEBVIEW);
  };

  platforms_.ready(function (platform, device, browser) {
    if (browser) {
      support.applyClassList('browser-' + browser);
    }
  });

  platforms_.isAndroid = function () {
    return testUA(support.ANDROID);
  };

  platforms_.isIos = function () {
    return testUA(support.IOS);
  };

  platforms_.isSimulator = function () {
    return testUA(support.SIMULATOR);
  };

  platforms_.isWindows = function () {
    return testUA(support.WINDOWS);
  };

  platforms_.isWindowsPhone = function () {
    return platforms_.isMobile() && testUA(support.WINDOWS);
  };

  platforms_.isMacintosh = function () {
    return testUA(support.MAC);
  };

  platforms_.isWebKit = function () {
    return testUA(support.WEBKIT) && !testUA(support.EDGE);
  };

  platforms_.isGecko = function () {
    return testUA(support.GECKO) && !testUA(support.WEBKIT) && !testUA(support.EDGE);
  };

  platforms_.isTrident = function () {
    return testUA(support.TRIDENT) || testUA(support.MSIE);
  };

  platforms_.isEdge = function () {
    return testUA(support.EDGE);
  };

  platforms_.isLinux = function () {
    return testUA(support.LINUX);
  };

  platforms_.ready(function (platform, device, browser) {
    if (platform) {
      support.applyClassList('platform-' + platform);
    }
  });

  platforms_.ready(function () {
    support.createMetadataElemet('viewport', 'initial-scale=' + support.metaViewPortInitialScale_ + ', width=' + support.metaViewPortWidth_, 'au-viewport');
  });

  platforms_.ready(function (platform, device, browser) {
    if (platform === 'ios') {
      support.createMetadataElemet('apple-mobile-web-app-capable', 'yes', 'au-apple-mobile');
    }
  });

  platforms_.noop = function () {
    return false;
  };

  platforms_.noop = function () {
    return false;
  };

  platforms_.iosBrowser = {
    isIE: platforms_.noop,
    isEdge: platforms_.noop,
    isSilk: platforms_.noop,
    isChrome: platforms_.isIosChrome,
    isOpera: platforms_.isIosOpera,
    isFirefox: platforms_.isIosFirefox,
    isSafari: platforms_.isIosSafari,
    isWebView: platforms_.isIosWebview
  };

  platforms_.androidBrowser = {
    isIE: platforms_.isIE,
    isEdge: platforms_.isEdge,
    isSilk: platforms_.isSilk,
    isChrome: platforms_.isAndroidChrome,
    isOpera: platforms_.isOpera,
    isFirefox: platforms_.isAndroidFirefox,
    isSafari: platforms_.noop,
    isWebView: platforms_.isAndroidWebView
  };

  platforms_.any = {
    isIE: platforms_.isIE,
    isEdge: platforms_.isEdge,
    isSilk: platforms_.isSilk,
    isChrome: platforms_.isChrome,
    isOpera: platforms_.isOpera,
    isFirefox: platforms_.isFirefox,
    isSafari: platforms_.isSafari,
    isWebView: platforms_.noop
  };

  platforms_.isBrowser = {
    ios: platforms_.iosBrowser,
    android: platforms_.androidBrowser,
    mac: platforms_.any,
    linux: platforms_.any,
    windows: platforms_.any
  };

  platforms_.determinePlatform = function () {
    return platforms_.isIos() ? 'ios' : platforms_.isAndroid() ? 'android' : platforms_.isWindows() ? 'windows' : platforms_.isMacintosh() ? 'mac' : platforms_.isLinux() ? 'linux' : 'android';
  };

  platforms_.determineBrowserDetection = function (platform) {
    return platforms_.isBrowser[platform] || platforms_.androidBrowser;
  };

  platforms_.determineBrowser = function (platform) {
    var browser = platforms_.determineBrowserDetection(platform);
    return browser.isOpera() ? 'opera' : browser.isIE() ? 'ie' : browser.isEdge() ? 'edge' : browser.isSilk() ? 'silk' : browser.isFirefox() ? 'firefox' : browser.isWebView() ? 'webview' : browser.isSafari() ? 'safari' : browser.isChrome() ? 'chrome' : 'chrome';
  };

  platforms_.determinDevice = function () {
    return platforms_.isMobile() ? 'mobile' : platforms_.isTablet() ? 'tablet' : 'desktop';
  };

  platforms_.detect = function () {
    var platform = platforms_.determinePlatform();
    var browser = platforms_.determineBrowser(platform);
    var device = platforms_.determinDevice();

    return {
      browser: browser,
      platform: platform,
      device: device
    };
  };

  var AureliaDeviceSupport = (function () {
    function AureliaDeviceSupport() {
      _classCallCheck(this, AureliaDeviceSupport);
    }

    AureliaDeviceSupport.prototype.isMobile = function isMobile() {
      return platforms_.isMobile();
    };

    AureliaDeviceSupport.prototype.isTablet = function isTablet() {
      return platforms_.isTablet();
    };

    AureliaDeviceSupport.prototype.isDesktop = function isDesktop() {
      return platforms_.isDesktop();
    };

    _createClass(AureliaDeviceSupport, [{
      key: 'name',
      get: function get() {
        return platforms_.detection.device;
      }
    }]);

    return AureliaDeviceSupport;
  })();

  exports.AureliaDeviceSupport = AureliaDeviceSupport;

  var AureliaBrowserSupport = (function () {
    function AureliaBrowserSupport() {
      _classCallCheck(this, AureliaBrowserSupport);
    }

    AureliaBrowserSupport.prototype.isOpera = function isOpera() {
      return !instruction.isOpera();
    };

    AureliaBrowserSupport.prototype.isIE = function isIE() {
      return platforms_.isIE();
    };

    AureliaBrowserSupport.prototype.isEdge = function isEdge() {
      return platforms_.isEdge();
    };

    AureliaBrowserSupport.prototype.isFirefox = function isFirefox() {
      return platforms_.isFirefox();
    };

    AureliaBrowserSupport.prototype.isSafari = function isSafari() {
      return platforms_.isSafari();
    };

    AureliaBrowserSupport.prototype.isCoast = function isCoast() {
      return platforms_.isCoast();
    };

    AureliaBrowserSupport.prototype.isIOSWebview = function isIOSWebview() {
      return platforms_.isIosWebview();
    };

    AureliaBrowserSupport.prototype.isAppleWebKit = function isAppleWebKit() {
      return platforms_.isAppleWebKit();
    };

    AureliaBrowserSupport.prototype.isChrome = function isChrome() {
      return platforms_.isChrome();
    };

    AureliaBrowserSupport.prototype.isAndroidBrowser = function isAndroidBrowser() {
      return platforms_.isAndroidBrowser();
    };

    AureliaBrowserSupport.prototype.isSilk = function isSilk() {
      return platforms_.isSilk();
    };

    _createClass(AureliaBrowserSupport, [{
      key: 'name',
      get: function get() {
        return platforms_.detection.browser;
      }
    }]);

    return AureliaBrowserSupport;
  })();

  exports.AureliaBrowserSupport = AureliaBrowserSupport;

  var AureliaPlatformsSupport = (function () {
    function AureliaPlatformsSupport() {
      _classCallCheck(this, AureliaPlatformsSupport);
    }

    AureliaPlatformsSupport.prototype.isAndroid = function isAndroid() {
      return platforms_.isAndroid();
    };

    AureliaPlatformsSupport.prototype.isIos = function isIos() {
      return platforms_.isIphone();
    };

    AureliaPlatformsSupport.prototype.isMacintosh = function isMacintosh() {
      return platforms_.isMacintosh();
    };

    AureliaPlatformsSupport.prototype.isWindows = function isWindows() {
      return platforms_.isWindows();
    };

    AureliaPlatformsSupport.prototype.isLinux = function isLinux() {
      return platforms_.isLinux();
    };

    _createClass(AureliaPlatformsSupport, [{
      key: 'name',
      get: function get() {
        return platforms_.detection.platform;
      }
    }]);

    return AureliaPlatformsSupport;
  })();

  exports.AureliaPlatformsSupport = AureliaPlatformsSupport;

  var AureliaEngineSupport = (function () {
    function AureliaEngineSupport() {
      _classCallCheck(this, AureliaEngineSupport);
    }

    AureliaEngineSupport.prototype.isTrident = function isTrident() {
      return platforms_.isTrident();
    };

    AureliaEngineSupport.prototype.isEdge = function isEdge() {
      return platforms_.isEdge();
    };

    AureliaEngineSupport.prototype.isWebKit = function isWebKit() {
      return platforms_.isWebKit();
    };

    AureliaEngineSupport.prototype.isGecko = function isGecko() {
      return platforms_.isGecko();
    };

    return AureliaEngineSupport;
  })();

  exports.AureliaEngineSupport = AureliaEngineSupport;
  var PLATFORMS = {
    browser: new AureliaBrowserSupport(),
    platform: new AureliaPlatformsSupport(),
    device: new AureliaPlatformsSupport()
  };

  exports.PLATFORMS = PLATFORMS;

  function configure() {
    platforms_.detection = platforms_.detect();
    support.navigator.platforms_;
    platforms_.init(platforms_.detection.platform, platforms_.detection.device, platforms_.detection.browser);
  }
});