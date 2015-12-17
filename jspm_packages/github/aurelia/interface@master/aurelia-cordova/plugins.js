/* */ 
define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  var Plugins = (function () {
    function Plugins() {
      _classCallCheck(this, Plugins);
    }

    _createClass(Plugins, null, [{
      key: "getPlugin",
      value: function getPlugin(plugin) {
        var plugins = window.plugins || {};
        return plugin in plugins && plugins[plugin];
      }
    }, {
      key: "fromDevice",
      value: function fromDevice(plugin) {
        var device = window.device || {};
        return plugin in device && device[plugin];
      }
    }, {
      key: "fromNavigator",
      value: function fromNavigator(plugin) {
        return plugin in navigator && navigator[plugin];
      }
    }, {
      key: "fromWindow",
      value: function fromWindow(plugin) {
        var navigator = window.navigator;
        return plugin in window && window[plugin];
      }
    }]);

    return Plugins;
  })();

  exports.Plugins = Plugins;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9wbHVnaW5zLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BQ2EsT0FBTzthQUFQLE9BQU87NEJBQVAsT0FBTzs7O2lCQUFQLE9BQU87O2FBRUYsbUJBQUMsTUFBTSxFQUFFO0FBQ3ZCLFlBQUksT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDO0FBQ25DLGVBQU8sTUFBTSxJQUFJLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7T0FDN0M7OzthQUVnQixvQkFBQyxNQUFNLEVBQUU7QUFDeEIsWUFBSSxNQUFNLEdBQUksTUFBTSxDQUFDLE1BQU0sSUFBSyxFQUFFLENBQUM7QUFDbkMsZUFBTyxNQUFNLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUMzQzs7O2FBRW1CLHVCQUFDLE1BQU0sRUFBRTtBQUMzQixlQUFPLE1BQU0sSUFBSSxTQUFTLElBQUksU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQ2pEOzs7YUFFZ0Isb0JBQUMsTUFBTSxFQUFFO0FBQ3hCLFlBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7QUFDakMsZUFBTyxNQUFNLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUMzQzs7O1dBbkJVLE9BQU8iLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL3BsdWdpbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBQbHVnaW5zIHtcblxuICBzdGF0aWMgZ2V0UGx1Z2luKHBsdWdpbikge1xuICAgIGxldCBwbHVnaW5zID0gd2luZG93LnBsdWdpbnMgfHwge307XG4gICAgcmV0dXJuIHBsdWdpbiBpbiBwbHVnaW5zICYmIHBsdWdpbnNbcGx1Z2luXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tRGV2aWNlKHBsdWdpbikge1xuICAgIGxldCBkZXZpY2UgID0gd2luZG93LmRldmljZSAgfHwge307XG4gICAgcmV0dXJuIHBsdWdpbiBpbiBkZXZpY2UgJiYgZGV2aWNlW3BsdWdpbl07XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hdmlnYXRvcihwbHVnaW4pIHtcbiAgICByZXR1cm4gcGx1Z2luIGluIG5hdmlnYXRvciAmJiBuYXZpZ2F0b3JbcGx1Z2luXTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tV2luZG93KHBsdWdpbikge1xuICAgIGxldCBuYXZpZ2F0b3IgPSB3aW5kb3cubmF2aWdhdG9yO1xuICAgIHJldHVybiBwbHVnaW4gaW4gd2luZG93ICYmIHdpbmRvd1twbHVnaW5dO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
