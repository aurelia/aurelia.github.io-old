/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var userAgent = window.navigator.userAgent;
  var DEVICE_EXPRESSIONS = {
    HandHeld: /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/i,
    Tablet: /(tablet|Tablet|iPad|Playbook|Silk)|(Android(?!.*Mobile))/i
  };

  var isHandHeld = DEVICE_EXPRESSIONS.HandHeld.test(userAgent);
  var isTablet = DEVICE_EXPRESSIONS.HandHeld.test(userAgent);
  var isMobile = isHandHeld && !isTablet;
  var isDesktop = !isHandHeld && !isTablet;

  var Device = (function () {
    function Device() {
      _classCallCheck(this, Device);

      this.isHandHeld = isHandHeld;
      this.isTablet = isTablet;
      this.isMobile = isMobile;
      this.isDesktop = isDesktop;
    }

    _createClass(Device, [{
      key: 'setClassList',
      value: function setClassList(element) {
        if (this.name) element.classList.add('device-' + this.name);
      }
    }, {
      key: 'name',
      get: function get() {
        if (!this.current) this.current = this.isMobile ? 'mobile' : this.isTablet ? 'tablet' : 'desktop';
        return this.current;
      }
    }]);

    return Device;
  })();

  exports.Device = Device;
});