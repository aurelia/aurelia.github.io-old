/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var IE8 = '8-or-lt-8-not-compatible';
  var IE9 = 'IE9';
  var IE10 = 'IE10';
  var IERegexp = /(MSIE|IEMobile|Trident)/ig;
  var userAgent = window.navigator.userAgent;

  var isWindowAtob = ('atob' in window);
  var isDocumentAll = ('all' in document);

  var isEdge = !!window.MSInputMethodContext && !document.documentMode;
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;
  var isIE10 = isDocumentAll && isWindowAtob;
  var isIE9 = !isIE10 && isDocumentAll && window.addEventListener && !isWindowAtob;

  var VERSION = undefined;
  var isChrome = (function () {
    var value = /Chrome\//i.test(window.navigator.userAgent);
    if (value) VERSION = window.navigator.userAgent.match(/Chrome\/([\d*]+)/i)[1];
    return value;
  })();

  var isFirefox = (function () {
    var value = 'mozApps' in window.navigator || 'mozContacts' in window.navigator || 'mozTCPSocket' in window.navigator || 'mozPay' in window.navigator || /Firefox\/\d+/.test(window.navigator.userAgent);
    if (value) VERSION = window.navigator.userAgent.match(/Firefox\/([\d*]+)/i)[1];
    return value;
  })();

  var isSafari = (function () {
    var value = !isChrome && /Safari/i.test(window.navigator.userAgent) && /Version/i.test(window.navigator.userAgent);
    if (value) VERSION = window.navigator.userAgent.match(/Version\/([\d*]+)/i)[1];
    return value;
  })();

  var isIE = (function () {
    var value = IERegexp.test(window.navigator.userAgent);
    if (value) VERSION = isEdge ? '12' : isIE11 ? '11' : isIE10 ? '10' : isIE9 ? '9' : IE8;
    return value;
  })();

  var Browser = (function () {
    function Browser() {
      _classCallCheck(this, Browser);

      this.isChrome = isChrome;
      this.isFirefox = isFirefox;
      this.isSafari = isSafari;
      this.isIE = isIE;
      this.version = VERSION;
      this.transition = {
        'default': 'transitionend',
        ios: 'webkitTransitionEnd',
        o: 'otransitionend'
      };
      this.animation = {
        'default': 'animationend',
        ios: 'webkitAnimationEnd',
        o: 'oanimationend'
      };
    }

    _createClass(Browser, [{
      key: 'setClassList',
      value: function setClassList(element) {
        if (this.current) element.classList.add('browser-' + this.name);
        if (this.version) element.classList.add('browser-' + this.name + '-' + this.version);
      }
    }, {
      key: 'name',
      get: function get() {
        if (!this.current) {
          this.current = this.isChrome ? 'chrome' : this.isFirefox ? 'firefox' : this.isSafari ? 'safari' : this.isIE ? 'ie' : 'unknown';
        }
        return this.current;
      }
    }]);

    return Browser;
  })();

  exports.Browser = Browser;
});