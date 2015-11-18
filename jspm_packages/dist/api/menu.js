System.register(['aurelia-framework', 'backend/server', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, AUChannel, APIMenu;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }],
    execute: function () {
      APIMenu = (function () {
        function APIMenu(server, channel) {
          _classCallCheck(this, _APIMenu);

          this.server = server;
          this.channel = channel;
          this.isApi = true;
        }

        _createClass(APIMenu, [{
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.server.getOfficialProducts().then(function (products) {
              return _this.products = products;
            });
          }
        }]);

        var _APIMenu = APIMenu;
        APIMenu = inject(Server, AUChannel)(APIMenu) || APIMenu;
        return APIMenu;
      })();

      _export('APIMenu', APIMenu);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztpQ0FLYSxPQUFPOzs7Ozs7OztpQ0FMWixNQUFNOzs4QkFDTixNQUFNOzttQ0FDTixTQUFTOzs7QUFHSixhQUFPO0FBQ1AsaUJBREEsT0FBTyxDQUNOLE1BQU0sRUFBRSxPQUFPLEVBQUU7OztBQUMzQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjs7cUJBTFUsT0FBTzs7aUJBT1Ysb0JBQUc7OztBQUNULG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLE1BQUssUUFBUSxHQUFHLFFBQVE7YUFBQSxDQUFDLENBQUM7V0FDckY7Ozt1QkFUVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUNiLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJhcGkvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuXG5AaW5qZWN0KFNlcnZlciwgQVVDaGFubmVsKVxuZXhwb3J0IGNsYXNzIEFQSU1lbnUge1xuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIGNoYW5uZWwpIHtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMuaXNBcGkgPSB0cnVlO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyLmdldE9mZmljaWFsUHJvZHVjdHMoKS50aGVuKHByb2R1Y3RzID0+IHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
