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
            config.map([{ route: [''], name: 'home', moduleId: './article' }, { route: [':articleSlug'], moduleId: './article', settings: { closeAside: true } }, { route: [':articleSlug/:scrollId'], moduleId: './article', settings: { closeAside: true } }]);

            config.mapUnknownRoutes(function (instruction) {
              instruction.config.moduleId = '';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJDQU1hLEtBQUs7Ozs7Ozs7OzJDQU5WLE1BQU07OzhCQUNOLE1BQU07O2dDQUNOLFFBQVE7O21DQUNSLFNBQVM7OztBQUdKLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7OztBQUNoQyxjQUFJLENBQUMsR0FBRyxHQUFPLEdBQUcsQ0FBQztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoQyxjQUFJLENBQUMsTUFBTSxHQUFJLE1BQU0sQ0FBQztBQUN0QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBUFUsS0FBSzs7aUJBU0QseUJBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM5QixrQkFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNULEVBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFDLEVBQ2xELEVBQUMsS0FBSyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFDLEVBQUMsRUFDOUUsRUFBQyxLQUFLLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxFQUFDLENBQ3pGLENBQUMsQ0FBQzs7QUFFSCxrQkFBTSxDQUFDLGdCQUFnQixDQUFDLFVBQUEsV0FBVyxFQUFJO0FBQ3JDLHlCQUFXLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7YUFDbEMsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O3FCQXJCVSxLQUFLO0FBQUwsYUFBSyxHQURqQixNQUFNLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FDdkIsS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6ImFydGljbGUvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuXG5AaW5qZWN0KFNlcnZlciwgTG9jYWxBUEksIEFVQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBJbmRleCB7XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyLCBhcGksIGNoYW5uZWwpIHtcbiAgICB0aGlzLmFwaSAgICAgPSBhcGk7XG4gICAgdGhpcy5wcm9maWxlID0gYXBpLmdldFByb2ZpbGUoKTtcbiAgICB0aGlzLnNlcnZlciAgPSBzZXJ2ZXI7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgfVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAge3JvdXRlOiBbJyddLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOiAnLi9hcnRpY2xlJ30sXG4gICAgICB7cm91dGU6IFsnOmFydGljbGVTbHVnJ10sIG1vZHVsZUlkOiAnLi9hcnRpY2xlJywgc2V0dGluZ3M6IHtjbG9zZUFzaWRlOiB0cnVlfX0sXG4gICAgICB7cm91dGU6IFsnOmFydGljbGVTbHVnLzpzY3JvbGxJZCddLCBtb2R1bGVJZDogJy4vYXJ0aWNsZScsIHNldHRpbmdzOiB7Y2xvc2VBc2lkZTogdHJ1ZX19XG4gICAgXSk7XG5cbiAgICBjb25maWcubWFwVW5rbm93blJvdXRlcyhpbnN0cnVjdGlvbiA9PiB7XG4gICAgICBpbnN0cnVjdGlvbi5jb25maWcubW9kdWxlSWQgPSAnJztcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
