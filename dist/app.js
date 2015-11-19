System.register(['services/local', 'services/channel', 'resources/au-overlay', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var LocalAPI, AUChannel, OverlayController, inject, App, ScrollToTop;

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
            config.addPipelineStep('postcomplete', ScrollToTop);
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

      ScrollToTop = (function () {
        function ScrollToTop() {
          _classCallCheck(this, ScrollToTop);
        }

        _createClass(ScrollToTop, [{
          key: 'run',
          value: function run(instruction, next) {
            var element = document.querySelector('.page-host');
            element.scrollTop = 0;
            return next();
          }
        }]);

        return ScrollToTop;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LENBQUM7QUFDSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztpQkFFTyxvQkFBRztBQUNULGdCQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDdEY7OztpQkFFUSxtQkFBQyxNQUFNLEVBQUU7QUFDaEIsZ0JBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ3pELGdCQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1dBQ25COzs7bUJBOUVVLEdBQUc7QUFBSCxXQUFHLEdBRGYsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQzNDLEdBQUcsS0FBSCxHQUFHO2VBQUgsR0FBRzs7Ozs7QUFpRlYsaUJBQVc7aUJBQVgsV0FBVztnQ0FBWCxXQUFXOzs7cUJBQVgsV0FBVzs7aUJBQ1osYUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQ3JCLGdCQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ25ELG1CQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztBQUN0QixtQkFBTyxJQUFJLEVBQUUsQ0FBQztXQUNmOzs7ZUFMRyxXQUFXIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9jYWxBUEl9IGZyb20gJ3NlcnZpY2VzL2xvY2FsJztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICdzZXJ2aWNlcy9jaGFubmVsJztcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xsZXJ9IGZyb20gJ3Jlc291cmNlcy9hdS1vdmVybGF5JztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcblxuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwsIE92ZXJsYXlDb250cm9sbGVyLCBMb2NhbEFQSSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwsIG92ZXJsYXlDb250cm9sbGVyLCBhcGkpIHtcbiAgICB0aGlzLmN1bHR1cmUgID0gYXBpLmdldEN1bHR1cmUoKTtcbiAgICB0aGlzLmxhbmd1YWdlID0gYXBpLmdldExhbmd1YWdlKCk7XG4gICAgdGhpcy5wcm9maWxlICA9IGFwaS5nZXRQcm9maWxlKCk7XG4gICAgdGhpcy5hcGkgICAgICA9IGFwaTtcbiAgICB0aGlzLmNoYW5uZWwgID0gY2hhbm5lbDtcbiAgICB0aGlzLmVsZW1lbnQgID0gZWxlbWVudDtcbiAgICB0aGlzLm92ZXJsYXlDb250cm9sbGVyID0gb3ZlcmxheUNvbnRyb2xsZXI7XG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSBEb2NzJztcbiAgICBjb25maWcuYWRkUGlwZWxpbmVTdGVwKCdwb3N0Y29tcGxldGUnLCBTY3JvbGxUb1RvcCk7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiBbJyddLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXJ0aWNsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3UG9ydHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiB7bW9kdWxlSWQ6ICdhcnRpY2xlL2luZGV4JywgdGl0bGU6ICdBcnRpY2xlJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXJ0aWNsZS9tZW51JywgdGl0bGU6ICdBcnRpY2xlJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICc6dXNlck5hbWUvOnByb2R1Y3ROYW1lLzp2ZXJzaW9uL2RvYy9hcnRpY2xlJyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpc0FydGljbGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgdmlld1BvcnRzOiB7XG4gICAgICAgICAgZGVmYXVsdDoge21vZHVsZUlkOiAnYXJ0aWNsZS9pbmRleCcsIHRpdGxlOiAnQXJ0aWNsZSd9LFxuICAgICAgICAgIG1lbnU6IHttb2R1bGVJZDogJ2FydGljbGUvbWVudScsIHRpdGxlOiAnQXJ0aWNsZSd9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiAnZG9jL2FydGljbGUnLFxuICAgICAgICBuYW1lOiAnbG9jYWwnLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXJ0aWNsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3UG9ydHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiB7bW9kdWxlSWQ6ICdhcnRpY2xlL2luZGV4JywgdGl0bGU6ICdMb2NhbCBBcnRpY2xlJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXJ0aWNsZS9tZW51JywgdGl0bGU6ICdBcnRpY2xlJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICdhcGknLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXBpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdQb3J0czoge1xuICAgICAgICAgIGRlZmF1bHQ6IHttb2R1bGVJZDogJ2FwaS9pbmRleCcsIHRpdGxlOiAnQVBJJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXBpL21lbnUnLCB0aXRsZTogJ0FQSSd9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiAnOnVzZXJOYW1lLzpwcm9kdWN0TmFtZS86dmVyc2lvbi9kb2MvYXBpJyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpc0FwaTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3UG9ydHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiB7bW9kdWxlSWQ6ICdhcGkvaW5kZXgnLCB0aXRsZTogJ0FQSSd9LFxuICAgICAgICAgIG1lbnU6IHttb2R1bGVJZDogJ2FwaS9tZW51JywgdGl0bGU6ICdBUEknfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSk7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIgPSB0aGlzLm92ZXJsYXlDb250cm9sbGVyLnJlZ2lzdGVyQ29udGFpbmVyKHRoaXMsIHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBvcGVuQXNpZGUoJGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMucm91dGVyLmN1cnJlbnRJbnN0cnVjdGlvbi5jb25maWcudGl0bGU7XG4gICAgdGhpcy5hc2lkZS5vcGVuKCk7XG4gIH1cbn1cblxuY2xhc3MgU2Nyb2xsVG9Ub3Age1xuICBydW4oaW5zdHJ1Y3Rpb24sIG5leHQpIHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhvc3QnKTtcbiAgICBlbGVtZW50LnNjcm9sbFRvcCA9IDA7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
