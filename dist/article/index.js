System.register(['aurelia-dependency-injection', 'backend/server', 'services/local', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, LocalAPI, AUChannel, Index;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_servicesLocal) {
      LocalAPI = _servicesLocal.LocalAPI;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }],
    execute: function () {
      Index = (function () {
        function Index(server, api, channel) {
          _classCallCheck(this, _Index);

          this.api = api;
          this.profile = api.getProfile();
          this.server = server;
          this.channel = channel;
        }

        _createClass(Index, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: '', moduleId: './no-selection', title: 'API Home' }, { route: ':articleSlug', moduleId: './article' }]);

            config.mapUnknownRoutes(function (instruction) {
              return instruction.config.moduleId = '';
            });

            this.router = router;
          }
        }]);

        var _Index = Index;
        Index = inject(Server, LocalAPI, AUChannel)(Index) || Index;
        return Index;
      })();

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJDQU1hLEtBQUs7Ozs7Ozs7OzJDQU5WLE1BQU07OzhCQUNOLE1BQU07O2dDQUNOLFFBQVE7O21DQUNSLFNBQVM7OztBQUdKLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7OztBQUNoQyxjQUFJLENBQUMsR0FBRyxHQUFPLEdBQUcsQ0FBQztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoQyxjQUFJLENBQUMsTUFBTSxHQUFJLE1BQU0sQ0FBQztBQUN0QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBUFUsS0FBSzs7aUJBU0QseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM5QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUM1RCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUNqRCxDQUFDLENBQUM7O0FBRUgsa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFBLFdBQVc7cUJBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRTthQUFBLENBQUMsQ0FBQzs7QUFFekUsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7cUJBbEJVLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUN2QixLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoiYXJ0aWNsZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5pbXBvcnQge0xvY2FsQVBJfSBmcm9tICdzZXJ2aWNlcy9sb2NhbCc7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5cbkBpbmplY3QoU2VydmVyLCBMb2NhbEFQSSwgQVVDaGFubmVsKVxuZXhwb3J0IGNsYXNzIEluZGV4IHtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIGFwaSwgY2hhbm5lbCkge1xuICAgIHRoaXMuYXBpICAgICA9IGFwaTtcbiAgICB0aGlzLnByb2ZpbGUgPSBhcGkuZ2V0UHJvZmlsZSgpO1xuICAgIHRoaXMuc2VydmVyICA9IHNlcnZlcjtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB9XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiAnJywgbW9kdWxlSWQ6ICcuL25vLXNlbGVjdGlvbicsIHRpdGxlOiAnQVBJIEhvbWUnIH0sXG4gICAgICB7IHJvdXRlOiAnOmFydGljbGVTbHVnJywgbW9kdWxlSWQ6ICcuL2FydGljbGUnIH1cbiAgICBdKTtcblxuICAgIGNvbmZpZy5tYXBVbmtub3duUm91dGVzKGluc3RydWN0aW9uID0+IGluc3RydWN0aW9uLmNvbmZpZy5tb2R1bGVJZCA9ICcnKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
