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
          var _this = this;

          _classCallCheck(this, _Index);

          this.api = api;
          this.profile = api.getProfile();
          this.server = server;
          this.channel = channel;
          this.profile.getTutorials().then(function (tutorials) {
            _this.tutorials = tutorials;
          });
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
        }, {
          key: 'activate',
          value: function activate() {
            var _this2 = this;

            this.changedHandler = this.channel.subscribe('profile-changed', function (profile) {
              profile.getTutorials().then(function (tutorials) {
                _this2.tutorials = tutorials;
              });

              _this2.profile = profile;
            });
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            if (this.changedHandler) {
              this.changedHandler.dispose();
            }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzJDQU1hLEtBQUs7Ozs7Ozs7OzJDQU5WLE1BQU07OzhCQUNOLE1BQU07O2dDQUNOLFFBQVE7O21DQUNSLFNBQVM7OztBQUdKLFdBQUs7QUFFTCxpQkFGQSxLQUFLLENBRUosTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUU7Ozs7O0FBQ2hDLGNBQUksQ0FBQyxHQUFHLEdBQU8sR0FBRyxDQUFDO0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ2hDLGNBQUksQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFDO0FBQ3RCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsU0FBUyxFQUFJO0FBQzVDLGtCQUFLLFNBQVMsR0FBRyxTQUFTLENBQUM7V0FDNUIsQ0FBQyxDQUFDO1NBQ0o7O3FCQVZVLEtBQUs7O2lCQVlELHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBQyxFQUNsRCxFQUFDLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEVBQUMsVUFBVSxFQUFFLElBQUksRUFBQyxFQUFDLEVBQzlFLEVBQUMsS0FBSyxFQUFFLENBQUMsd0JBQXdCLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxFQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUMsRUFBQyxDQUN6RixDQUFDLENBQUM7O0FBRUgsa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFBLFdBQVcsRUFBSTtBQUNyQyx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQ2xDLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztpQkFFTyxvQkFBRzs7O0FBQ1QsZ0JBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxPQUFPLEVBQUk7QUFDMUUscUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUUsVUFBQSxTQUFTLEVBQUk7QUFDeEMsdUJBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQztlQUM1QixDQUFDLENBQUM7O0FBRUgscUJBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUN4QixDQUFDLENBQUM7V0FDSjs7O2lCQUVTLHNCQUFHO0FBQ1gsZ0JBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtBQUN2QixrQkFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUMvQjtXQUNGOzs7cUJBeENVLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUN2QixLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoiYXJ0aWNsZS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5pbXBvcnQge0xvY2FsQVBJfSBmcm9tICdzZXJ2aWNlcy9sb2NhbCc7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5cbkBpbmplY3QoU2VydmVyLCBMb2NhbEFQSSwgQVVDaGFubmVsKVxuZXhwb3J0IGNsYXNzIEluZGV4IHtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIGFwaSwgY2hhbm5lbCkge1xuICAgIHRoaXMuYXBpICAgICA9IGFwaTtcbiAgICB0aGlzLnByb2ZpbGUgPSBhcGkuZ2V0UHJvZmlsZSgpO1xuICAgIHRoaXMuc2VydmVyICA9IHNlcnZlcjtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMucHJvZmlsZS5nZXRUdXRvcmlhbHMoKS50aGVuKHR1dG9yaWFscyA9PiB7XG4gICAgICB0aGlzLnR1dG9yaWFscyA9IHR1dG9yaWFscztcbiAgICB9KTtcbiAgfVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAge3JvdXRlOiBbJyddLCBuYW1lOiAnaG9tZScsIG1vZHVsZUlkOiAnLi9hcnRpY2xlJ30sXG4gICAgICB7cm91dGU6IFsnOmFydGljbGVTbHVnJ10sIG1vZHVsZUlkOiAnLi9hcnRpY2xlJywgc2V0dGluZ3M6IHtjbG9zZUFzaWRlOiB0cnVlfX0sXG4gICAgICB7cm91dGU6IFsnOmFydGljbGVTbHVnLzpzY3JvbGxJZCddLCBtb2R1bGVJZDogJy4vYXJ0aWNsZScsIHNldHRpbmdzOiB7Y2xvc2VBc2lkZTogdHJ1ZX19XG4gICAgXSk7XG5cbiAgICBjb25maWcubWFwVW5rbm93blJvdXRlcyhpbnN0cnVjdGlvbiA9PiB7XG4gICAgICBpbnN0cnVjdGlvbi5jb25maWcubW9kdWxlSWQgPSAnJztcbiAgICB9KTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5jaGFuZ2VkSGFuZGxlciA9IHRoaXMuY2hhbm5lbC5zdWJzY3JpYmUoJ3Byb2ZpbGUtY2hhbmdlZCcsIChwcm9maWxlKT0+IHtcbiAgICAgIHByb2ZpbGUuZ2V0VHV0b3JpYWxzKCkudGhlbiggdHV0b3JpYWxzID0+IHtcbiAgICAgICAgdGhpcy50dXRvcmlhbHMgPSB0dXRvcmlhbHM7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5wcm9maWxlID0gcHJvZmlsZTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlYWN0aXZhdGUoKSB7XG4gICAgaWYgKHRoaXMuY2hhbmdlZEhhbmRsZXIpIHtcbiAgICAgIHRoaXMuY2hhbmdlZEhhbmRsZXIuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
