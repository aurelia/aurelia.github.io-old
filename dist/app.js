System.register(['services/local', 'services/channel', 'resources/au-overlay', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var LocalAPI, AUChannel, OverlayController, inject, App;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_servicesLocal) {
      LocalAPI = _servicesLocal.LocalAPI;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }, function (_resourcesAuOverlay) {
      OverlayController = _resourcesAuOverlay.OverlayController;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }],
    execute: function () {
      App = (function () {
        function App(element, channel, overlayController, api) {
          _classCallCheck(this, _App);

          this.culture = api.getCulture();
          this.language = api.getLanguage();
          this.profile = api.getProfile();
          this.api = api;
          this.channel = channel;
          this.element = element;
          this.overlayController = overlayController;
        }

        _createClass(App, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.title = 'Aurelia Docs';
            config.map([{
              route: [''],
              settings: {
                isArticle: true
              },
              viewPorts: {
                'default': { moduleId: 'article/index', title: 'Article' },
                menu: { moduleId: 'article/menu', title: 'Article' }
              }
            }, {
              route: ':userName/:productName/:version/doc/article',
              settings: {
                isArticle: true
              },
              viewPorts: {
                'default': { moduleId: 'article/index', title: 'Article' },
                menu: { moduleId: 'article/menu', title: 'Article' }
              }
            }, {
              route: 'doc/article',
              name: 'local',
              settings: {
                isArticle: true
              },
              viewPorts: {
                'default': { moduleId: 'article/index', title: 'Local Article' },
                menu: { moduleId: 'article/menu', title: 'Article' }
              }
            }, {
              route: 'api',
              settings: {
                isApi: true
              },
              viewPorts: {
                'default': { moduleId: 'api/index', title: 'API' },
                menu: { moduleId: 'api/menu', title: 'API' }
              }
            }, {
              route: ':userName/:productName/:version/doc/api',
              settings: {
                isApi: true
              },
              viewPorts: {
                'default': { moduleId: 'api/index', title: 'API' },
                menu: { moduleId: 'api/menu', title: 'API' }
              }
            }]);
            this.router = router;
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.overlayContainer = this.overlayController.registerContainer(this, this.element);
          }
        }, {
          key: 'openAside',
          value: function openAside($event) {
            this.title = this.router.currentInstruction.config.title;
            this.aside.open();
          }
        }]);

        var _App = App;
        App = inject(Element, AUChannel, OverlayController, LocalAPI)(App) || App;
        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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Q1QsZ0JBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUN0Rjs7O2lCQUVRLG1CQUFDLE1BQU0sRUFBRTtBQUNoQixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDekQsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7V0FDbkI7OzttQkE3RVUsR0FBRztBQUFILFdBQUcsR0FEZixNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FDM0MsR0FBRyxLQUFILEdBQUc7ZUFBSCxHQUFHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9jYWxBUEl9IGZyb20gJ3NlcnZpY2VzL2xvY2FsJztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICdzZXJ2aWNlcy9jaGFubmVsJztcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xsZXJ9IGZyb20gJ3Jlc291cmNlcy9hdS1vdmVybGF5JztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcblxuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwsIE92ZXJsYXlDb250cm9sbGVyLCBMb2NhbEFQSSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwsIG92ZXJsYXlDb250cm9sbGVyLCBhcGkpIHtcbiAgICB0aGlzLmN1bHR1cmUgID0gYXBpLmdldEN1bHR1cmUoKTtcbiAgICB0aGlzLmxhbmd1YWdlID0gYXBpLmdldExhbmd1YWdlKCk7XG4gICAgdGhpcy5wcm9maWxlICA9IGFwaS5nZXRQcm9maWxlKCk7XG4gICAgdGhpcy5hcGkgICAgICA9IGFwaTtcbiAgICB0aGlzLmNoYW5uZWwgID0gY2hhbm5lbDtcbiAgICB0aGlzLmVsZW1lbnQgID0gZWxlbWVudDtcbiAgICB0aGlzLm92ZXJsYXlDb250cm9sbGVyID0gb3ZlcmxheUNvbnRyb2xsZXI7XG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSBEb2NzJztcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHtcbiAgICAgICAgcm91dGU6IFsnJ10sXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgaXNBcnRpY2xlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdQb3J0czoge1xuICAgICAgICAgIGRlZmF1bHQ6IHttb2R1bGVJZDogJ2FydGljbGUvaW5kZXgnLCB0aXRsZTogJ0FydGljbGUnfSxcbiAgICAgICAgICBtZW51OiB7bW9kdWxlSWQ6ICdhcnRpY2xlL21lbnUnLCB0aXRsZTogJ0FydGljbGUnfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJzp1c2VyTmFtZS86cHJvZHVjdE5hbWUvOnZlcnNpb24vZG9jL2FydGljbGUnLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXJ0aWNsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3UG9ydHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiB7bW9kdWxlSWQ6ICdhcnRpY2xlL2luZGV4JywgdGl0bGU6ICdBcnRpY2xlJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXJ0aWNsZS9tZW51JywgdGl0bGU6ICdBcnRpY2xlJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICdkb2MvYXJ0aWNsZScsXG4gICAgICAgIG5hbWU6ICdsb2NhbCcsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgaXNBcnRpY2xlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdQb3J0czoge1xuICAgICAgICAgIGRlZmF1bHQ6IHttb2R1bGVJZDogJ2FydGljbGUvaW5kZXgnLCB0aXRsZTogJ0xvY2FsIEFydGljbGUnfSxcbiAgICAgICAgICBtZW51OiB7bW9kdWxlSWQ6ICdhcnRpY2xlL21lbnUnLCB0aXRsZTogJ0FydGljbGUnfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJ2FwaScsXG4gICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgaXNBcGk6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgdmlld1BvcnRzOiB7XG4gICAgICAgICAgZGVmYXVsdDoge21vZHVsZUlkOiAnYXBpL2luZGV4JywgdGl0bGU6ICdBUEknfSxcbiAgICAgICAgICBtZW51OiB7bW9kdWxlSWQ6ICdhcGkvbWVudScsIHRpdGxlOiAnQVBJJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICc6dXNlck5hbWUvOnByb2R1Y3ROYW1lLzp2ZXJzaW9uL2RvYy9hcGknLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXBpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdQb3J0czoge1xuICAgICAgICAgIGRlZmF1bHQ6IHttb2R1bGVJZDogJ2FwaS9pbmRleCcsIHRpdGxlOiAnQVBJJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXBpL21lbnUnLCB0aXRsZTogJ0FQSSd9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdKTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lciA9IHRoaXMub3ZlcmxheUNvbnRyb2xsZXIucmVnaXN0ZXJDb250YWluZXIodGhpcywgdGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIG9wZW5Bc2lkZSgkZXZlbnQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5yb3V0ZXIuY3VycmVudEluc3RydWN0aW9uLmNvbmZpZy50aXRsZTtcbiAgICB0aGlzLmFzaWRlLm9wZW4oKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
