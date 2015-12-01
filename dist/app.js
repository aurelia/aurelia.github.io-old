System.register(['services/local', 'services/channel', 'resources/au-overlay', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var LocalAPI, AUChannel, OverlayController, inject, initialStep, App, ScrollToTop;

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
      initialStep = false;

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

          channel.subscribe('scrollTo', function (payload) {
            var top = payload.element ? payload.element.offsetTop : payload.top;
            var scrollableElement = document.querySelector('.page-host');
            scrollableElement.scrollTop = top || 0;
          });
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
        function ScrollToTop(channel) {
          _classCallCheck(this, _ScrollToTop);

          this.channel = channel;
        }

        _createClass(ScrollToTop, [{
          key: 'run',
          value: function run(instruction, next) {
            if (instruction.viewPortInstructions['default'].childNavigationInstruction.config.settings.closeAside) {
              this.channel.publish('au-deactivate:aside');
            }
            if (initialStep) {
              this.channel.publish('scrollTo', { top: 0 });
            }
            initialStep = true;
            return next();
          }
        }]);

        var _ScrollToTop = ScrollToTop;
        ScrollToTop = inject(AUChannel)(ScrollToTop) || ScrollToTop;
        return ScrollToTop;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUMsMEJBQTBCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUU7QUFDbEcsa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDN0M7QUFDRCxnQkFBSSxXQUFXLEVBQUU7QUFDZixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUM7YUFDNUM7QUFDRCx1QkFBVyxHQUFHLElBQUksQ0FBQztBQUNuQixtQkFBTyxJQUFJLEVBQUUsQ0FBQztXQUNmOzs7MkJBYkcsV0FBVztBQUFYLG1CQUFXLEdBRGhCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FDWixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuaW1wb3J0IHtPdmVybGF5Q29udHJvbGxlcn0gZnJvbSAncmVzb3VyY2VzL2F1LW92ZXJsYXknO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuXG52YXIgaW5pdGlhbFN0ZXAgPSBmYWxzZTtcblxuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwsIE92ZXJsYXlDb250cm9sbGVyLCBMb2NhbEFQSSlcbmV4cG9ydCBjbGFzcyBBcHAge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwsIG92ZXJsYXlDb250cm9sbGVyLCBhcGkpIHtcbiAgICB0aGlzLmN1bHR1cmUgID0gYXBpLmdldEN1bHR1cmUoKTtcbiAgICB0aGlzLmxhbmd1YWdlID0gYXBpLmdldExhbmd1YWdlKCk7XG4gICAgdGhpcy5wcm9maWxlICA9IGFwaS5nZXRQcm9maWxlKCk7XG4gICAgdGhpcy5hcGkgICAgICA9IGFwaTtcbiAgICB0aGlzLmNoYW5uZWwgID0gY2hhbm5lbDtcbiAgICB0aGlzLmVsZW1lbnQgID0gZWxlbWVudDtcbiAgICB0aGlzLm92ZXJsYXlDb250cm9sbGVyID0gb3ZlcmxheUNvbnRyb2xsZXI7XG5cbiAgICBjaGFubmVsLnN1YnNjcmliZSgnc2Nyb2xsVG8nLCAocGF5bG9hZCk9PiB7XG4gICAgICBsZXQgdG9wID0gcGF5bG9hZC5lbGVtZW50ID8gcGF5bG9hZC5lbGVtZW50Lm9mZnNldFRvcCA6IHBheWxvYWQudG9wO1xuICAgICAgbGV0IHNjcm9sbGFibGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UtaG9zdCcpO1xuICAgICAgc2Nyb2xsYWJsZUVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wIHx8IDA7XG4gICAgfSk7XG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcudGl0bGUgPSAnQXVyZWxpYSBEb2NzJztcbiAgICBjb25maWcuYWRkUGlwZWxpbmVTdGVwKCdwb3N0Y29tcGxldGUnLCBTY3JvbGxUb1RvcCk7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiBbJyddLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXJ0aWNsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3UG9ydHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiB7bW9kdWxlSWQ6ICdhcnRpY2xlL2luZGV4JywgdGl0bGU6ICdBcnRpY2xlJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXJ0aWNsZS9tZW51JywgdGl0bGU6ICdBcnRpY2xlJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICc6dXNlck5hbWUvOnByb2R1Y3ROYW1lLzp2ZXJzaW9uL2RvYy9hcnRpY2xlJyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpc0FydGljbGU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgdmlld1BvcnRzOiB7XG4gICAgICAgICAgZGVmYXVsdDoge21vZHVsZUlkOiAnYXJ0aWNsZS9pbmRleCcsIHRpdGxlOiAnQXJ0aWNsZSd9LFxuICAgICAgICAgIG1lbnU6IHttb2R1bGVJZDogJ2FydGljbGUvbWVudScsIHRpdGxlOiAnQXJ0aWNsZSd9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiAnZG9jL2FydGljbGUnLFxuICAgICAgICBuYW1lOiAnbG9jYWwnLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXJ0aWNsZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3UG9ydHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiB7bW9kdWxlSWQ6ICdhcnRpY2xlL2luZGV4JywgdGl0bGU6ICdMb2NhbCBBcnRpY2xlJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXJ0aWNsZS9tZW51JywgdGl0bGU6ICdBcnRpY2xlJ31cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICdhcGknLFxuICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGlzQXBpOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHZpZXdQb3J0czoge1xuICAgICAgICAgIGRlZmF1bHQ6IHttb2R1bGVJZDogJ2FwaS9pbmRleCcsIHRpdGxlOiAnQVBJJ30sXG4gICAgICAgICAgbWVudToge21vZHVsZUlkOiAnYXBpL21lbnUnLCB0aXRsZTogJ0FQSSd9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHJvdXRlOiAnOnVzZXJOYW1lLzpwcm9kdWN0TmFtZS86dmVyc2lvbi9kb2MvYXBpJyxcbiAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICBpc0FwaTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB2aWV3UG9ydHM6IHtcbiAgICAgICAgICBkZWZhdWx0OiB7bW9kdWxlSWQ6ICdhcGkvaW5kZXgnLCB0aXRsZTogJ0FQSSd9LFxuICAgICAgICAgIG1lbnU6IHttb2R1bGVJZDogJ2FwaS9tZW51JywgdGl0bGU6ICdBUEknfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgXSk7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLm92ZXJsYXlDb250YWluZXIgPSB0aGlzLm92ZXJsYXlDb250cm9sbGVyLnJlZ2lzdGVyQ29udGFpbmVyKHRoaXMsIHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBvcGVuQXNpZGUoJGV2ZW50KSB7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMucm91dGVyLmN1cnJlbnRJbnN0cnVjdGlvbi5jb25maWcudGl0bGU7XG4gICAgdGhpcy5hc2lkZS5vcGVuKCk7XG4gIH1cbn1cblxuQGluamVjdChBVUNoYW5uZWwpXG5jbGFzcyBTY3JvbGxUb1RvcCB7XG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwpIHtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB9XG4gIHJ1bihpbnN0cnVjdGlvbiwgbmV4dCkge1xuICAgIGlmIChpbnN0cnVjdGlvbi52aWV3UG9ydEluc3RydWN0aW9ucy5kZWZhdWx0LmNoaWxkTmF2aWdhdGlvbkluc3RydWN0aW9uLmNvbmZpZy5zZXR0aW5ncy5jbG9zZUFzaWRlKSB7XG4gICAgICB0aGlzLmNoYW5uZWwucHVibGlzaCgnYXUtZGVhY3RpdmF0ZTphc2lkZScpO1xuICAgIH1cbiAgICBpZiAoaW5pdGlhbFN0ZXApIHtcbiAgICAgIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdzY3JvbGxUbycsIHt0b3A6IDB9KTtcbiAgICB9XG4gICAgaW5pdGlhbFN0ZXAgPSB0cnVlO1xuICAgIHJldHVybiBuZXh0KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
