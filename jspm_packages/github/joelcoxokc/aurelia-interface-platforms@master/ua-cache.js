/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _storeKey = 'AureliaInternterface.browserAgentCache';

  var UserAgentCache = (function () {
    function UserAgentCache() {
      _classCallCheck(this, UserAgentCache);

      this._cache = {};
    }

    _createClass(UserAgentCache, [{
      key: 'get',
      value: function get(key) {
        return this.local[key];
      }
    }, {
      key: 'has',
      value: function has(key) {
        return !!this.local[key];
      }
    }, {
      key: 'set',
      value: function set(key, value) {
        this.local[key] = value;
        return this.save();
      }
    }, {
      key: 'save',
      value: function save() {
        this.local = this._cache;
        return this.local;
      }
    }, {
      key: 'local',
      set: function set(value) {
        localStorage.setItem(_storeKey, JSON.stringify(value));
        this.reset = true;
      },
      get: function get() {
        if (this.reset) {
          var store = localStorage.getItem(_storeKey) || {};
          this._cache = store ? JSON.parse(store) : {};
        }
        this.reset = false;
        return this._cache;
      }
    }]);

    return UserAgentCache;
  })();

  exports.UserAgentCache = UserAgentCache;
});