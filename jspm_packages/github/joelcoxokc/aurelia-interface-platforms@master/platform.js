/* */ 
define(['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var unknown = 'unknown';
  var Android = 'android';
  var Windows = 'windows';
  var iOS = 'ios';
  var OSX = 'osx';

  var userAgent = window.navigator.userAgent;
  var PLATFORM_EXPRESSIONS = {
    Android: /(?!like Android)Android/i,
    Windows: /Windows/i,
    iOS: /iP(hone|od|ad)/i,
    OSX: /MAC OS X|OS X/i
  };

  attributs: [{ name: 'name', value: 'apple-mobile-web-app-capable' }, { name: 'content', value: 'yes' }];
  var META_TAGS = {
    android: {
      viewport: {
        id: 'AndroidViewportMeta',
        name: 'viewport',
        'default': 'content',
        content: 'width=device-width, initial-scale=1.0, user-scalable=no, minimal-ui'
      }
    },
    ios: {
      viewport: {
        id: 'iOSViewPortMeta',
        name: 'viewport',
        'default': 'deviceWidth',
        deviceWidth: 'width=device-width',
        deviceWidthMax: 'width=device-width, maximum-scale=1',
        widthInitialMax: 'width=device-width, initial-scale=1.0, maximum-scale=1',
        initialScale: 'initial-scale=1.0',
        noScale: 'initial-scale=1, user-scalable=no',
        all: 'width=device-width, initial-scale=1.0, user-scalable=no'
      },
      webAppCapable: {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      },
      statusBar: {
        name: 'apple-mobile-web-app-status-bar-style',
        'default': 'translucent',
        black: 'black',
        translucent: 'translucent black'
      },
      icon: {
        tagName: 'link',
        iPhone: { rel: 'apple-touch-icon', href: null },
        iPad: { rel: 'apple-touch-icon', sizes: '76x76', href: null },
        iPhoneRetina: { rel: 'apple-touch-icon', sizes: '120x120', href: null },
        iPadRetina: { rel: 'apple-touch-icon', sizes: '152x152', href: null }
      },
      startup: {
        tagName: 'link',
        rel: 'apple-touch-startup-image',
        href: null
      }
    }
  };

  var isIOS = PLATFORM_EXPRESSIONS.iOS.test(userAgent);
  var isAndroid = PLATFORM_EXPRESSIONS.Android.test(userAgent);
  var isWindows = PLATFORM_EXPRESSIONS.Windows.test(userAgent);
  var isOSX = PLATFORM_EXPRESSIONS.OSX.test(userAgent);

  var Platform = (function () {
    function Platform() {
      _classCallCheck(this, Platform);

      this.isWindows = isWindows;
      this.isAndroid = isAndroid;
      this.isIOS = isIOS;
      this.isOSX = isOSX;
    }

    _createClass(Platform, [{
      key: 'setClassList',
      value: function setClassList(element) {
        if (this.name) element.classList.add('platform-' + this.name);
        if (this.version) element.classList.add('platform-' + this.name + '-' + this.version);
      }
    }, {
      key: 'viewport',
      value: function viewport(name) {
        if (typeof name === 'object') {
          var el = _aureliaPal.DOM.createElement('meta');
          el.setAttribute('name', 'viewport');
          el.setAttribute('content', name.content);
          if (document && document.head) {
            document.head.appendChild(el);
          }
          return;
        }
        var meta = META_TAGS[this.name];
        if (meta && meta.viewport) {
          var el = _aureliaPal.DOM.createElement('meta');
          el.setAttribute('name', 'viewport');
          el.setAttribute('id', meta.viewport.id);

          if (name in meta.viewport) {
            el.setAttribute('content', meta.viewport[name]);
          } else {
            el.setAttribute('content', meta.viewport[meta.viewport['default']]);
          }
          if (document && document.head) {
            document.head.appendChild(el);
          }
        }
      }
    }, {
      key: 'webAppCapable',
      value: function webAppCapable() {
        if (this.isIOS) {
          var el = _aureliaPal.DOM.createElement('meta');
          el.setAttribute('name', META_TAGS.ios.webAppCapable.name);
          el.setAttribute('content', META_TAGS.ios.webAppCapable.content);
          if (document && document.head) {
            document.head.appendChild(el);
          }
        }
      }
    }, {
      key: 'statusBar',
      value: function statusBar(color) {
        var meta = META_TAGS[this.name];
        if (meta && meta.statusBar) {
          var el = _aureliaPal.DOM.createElement('meta');
          el.setAttribute('name', meta.statusBar.name);
          if (color in meta.statusBar) {
            el.setAttribute('content', meta.statusBar[color]);
          } else {
            el.setAttribute('content', meta.statusBar[meta.statusBar['default']]);
          }
          if (document && document.head) {
            document.head.appendChild(el);
          }
        }
      }
    }, {
      key: 'name',
      get: function get() {
        if (!this.current) {
          this.current = this.isAndroid ? Android : this.isIOS ? iOS : this.isOSX ? OSX : this.isWindows ? Windows : unknown;
        }
        return this.current;
      }
    }]);

    return Platform;
  })();

  exports.Platform = Platform;
});