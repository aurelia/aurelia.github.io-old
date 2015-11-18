System.register(['aurelia-framework', 'backend/server', 'services/local', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, LocalAPI, AUChannel, Index;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJDQU1hLEtBQUs7Ozs7Ozs7O2lDQU5WLE1BQU07OzhCQUNOLE1BQU07O2dDQUNOLFFBQVE7O21DQUNSLFNBQVM7OztBQUdKLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7OztBQUNoQyxjQUFJLENBQUMsR0FBRyxHQUFPLEdBQUcsQ0FBQztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoQyxjQUFJLENBQUMsTUFBTSxHQUFJLE1BQU0sQ0FBQztBQUN0QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBUFUsS0FBSzs7aUJBU0QseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM5QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUM1RCxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxDQUNqRCxDQUFDLENBQUM7O0FBRUgsa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFBLFdBQVc7cUJBQUksV0FBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRTthQUFBLENBQUMsQ0FBQzs7QUFFekUsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1dBQ3RCOzs7cUJBbEJVLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUN2QixLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoiYXJ0aWNsZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuXG5AaW5qZWN0KFNlcnZlciwgTG9jYWxBUEksIEFVQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBJbmRleCB7XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyLCBhcGksIGNoYW5uZWwpIHtcbiAgICB0aGlzLmFwaSAgICAgPSBhcGk7XG4gICAgdGhpcy5wcm9maWxlID0gYXBpLmdldFByb2ZpbGUoKTtcbiAgICB0aGlzLnNlcnZlciAgPSBzZXJ2ZXI7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgfVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogJycsIG1vZHVsZUlkOiAnLi9uby1zZWxlY3Rpb24nLCB0aXRsZTogJ0FQSSBIb21lJyB9LFxuICAgICAgeyByb3V0ZTogJzphcnRpY2xlU2x1ZycsIG1vZHVsZUlkOiAnLi9hcnRpY2xlJyB9XG4gICAgXSk7XG5cbiAgICBjb25maWcubWFwVW5rbm93blJvdXRlcyhpbnN0cnVjdGlvbiA9PiBpbnN0cnVjdGlvbi5jb25maWcubW9kdWxlSWQgPSAnJyk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
