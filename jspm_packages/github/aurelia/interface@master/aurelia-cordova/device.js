/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var device = _plugins.Plugins.fromWindow('device');

  var Device = (function () {
    function Device() {
      _classCallCheck(this, Device);
    }

    _createClass(Device, [{
      key: 'getDevice',
      value: function getDevice() {
        return device;
      }
    }, {
      key: 'getModel',
      value: function getModel() {
        return device.model;
      }
    }, {
      key: 'getName',
      value: function getName() {
        return device.name;
      }
    }, {
      key: 'getPlatform',
      value: function getPlatform() {
        return device.platform;
      }
    }, {
      key: 'getPlatform',
      value: function getPlatform() {
        return device.platform;
      }
    }, {
      key: 'getUUID',
      value: function getUUID() {
        return device.uuid;
      }
    }, {
      key: 'getVersion',
      value: function getVersion() {
        return device.version;
      }
    }, {
      key: 'getManufacturer',
      value: function getManufacturer() {
        return device.manufacturer;
      }
    }]);

    return Device;
  })();

  exports.Device = Device;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9kZXZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxNQUFJLE1BQU0sR0FBRyxTQVBMLE9BQU8sQ0FPTSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7O01BQzdCLE1BQU07YUFBTixNQUFNOzRCQUFOLE1BQU07OztpQkFBTixNQUFNOzthQUNSLHFCQUFHO0FBQ1YsZUFBTyxNQUFNLENBQUM7T0FDZjs7O2FBRU8sb0JBQUc7QUFDVCxlQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7T0FDckI7OzthQUVNLG1CQUFHO0FBQ1IsZUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDO09BQ3BCOzs7YUFFVSx1QkFBRztBQUNaLGVBQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQztPQUN4Qjs7O2FBRVUsdUJBQUc7QUFDWixlQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUM7T0FDeEI7OzthQUVNLG1CQUFHO0FBQ1IsZUFBTyxNQUFNLENBQUMsSUFBSSxDQUFDO09BQ3BCOzs7YUFFUyxzQkFBRztBQUNYLGVBQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztPQUN2Qjs7O2FBRWMsMkJBQUc7QUFDaEIsZUFBTyxNQUFNLENBQUMsWUFBWSxDQUFDO09BQzVCOzs7V0EvQlUsTUFBTSIsImZpbGUiOiJhdXJlbGlhLWNvcmRvdmEvZGV2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbHVnaW5zfSBmcm9tICcuL3BsdWdpbnMnO1xuLyoqXG4gKiBjbGFzcyBEZXZpY2VcbiAqXG4gKiBAaW5zdGFsbCAgJCBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZGV2aWNlXG4gKiBAcmVzb3VyY2UgaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kZXZpY2VcbiAqL1xubGV0IGRldmljZSA9IFBsdWdpbnMuZnJvbVdpbmRvdygnZGV2aWNlJyk7XG5leHBvcnQgY2xhc3MgRGV2aWNlIHtcbiAgZ2V0RGV2aWNlKCkge1xuICAgIHJldHVybiBkZXZpY2U7XG4gIH1cblxuICBnZXRNb2RlbCgpIHtcbiAgICByZXR1cm4gZGV2aWNlLm1vZGVsO1xuICB9XG5cbiAgZ2V0TmFtZSgpIHtcbiAgICByZXR1cm4gZGV2aWNlLm5hbWU7XG4gIH1cblxuICBnZXRQbGF0Zm9ybSgpIHtcbiAgICByZXR1cm4gZGV2aWNlLnBsYXRmb3JtO1xuICB9XG5cbiAgZ2V0UGxhdGZvcm0oKSB7XG4gICAgcmV0dXJuIGRldmljZS5wbGF0Zm9ybTtcbiAgfVxuXG4gIGdldFVVSUQoKSB7XG4gICAgcmV0dXJuIGRldmljZS51dWlkO1xuICB9XG5cbiAgZ2V0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gZGV2aWNlLnZlcnNpb247XG4gIH1cblxuICBnZXRNYW51ZmFjdHVyZXIoKSB7XG4gICAgcmV0dXJuIGRldmljZS5tYW51ZmFjdHVyZXI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
