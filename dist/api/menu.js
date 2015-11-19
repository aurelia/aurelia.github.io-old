System.register(['aurelia-dependency-injection', 'backend/server', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, AUChannel, APIMenu;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztpQ0FLYSxPQUFPOzs7Ozs7OzsyQ0FMWixNQUFNOzs4QkFDTixNQUFNOzttQ0FDTixTQUFTOzs7QUFHSixhQUFPO0FBQ1AsaUJBREEsT0FBTyxDQUNOLE1BQU0sRUFBRSxPQUFPLEVBQUU7OztBQUMzQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNuQjs7cUJBTFUsT0FBTzs7aUJBT1Ysb0JBQUc7OztBQUNULG1CQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO3FCQUFJLE1BQUssUUFBUSxHQUFHLFFBQVE7YUFBQSxDQUFDLENBQUM7V0FDckY7Ozt1QkFUVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUNiLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJhcGkvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5cbkBpbmplY3QoU2VydmVyLCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQVBJTWVudSB7XG4gIGNvbnN0cnVjdG9yKHNlcnZlciwgY2hhbm5lbCkge1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5pc0FwaSA9IHRydWU7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIuZ2V0T2ZmaWNpYWxQcm9kdWN0cygpLnRoZW4ocHJvZHVjdHMgPT4gdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
