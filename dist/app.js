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
              moduleId: 'article/index',
              title: 'Article',
              settings: { isArticle: true }
            }, {
              route: ':userName/:productName/:version/doc/article',
              moduleId: 'article/index',
              title: 'Article',
              settings: { isArticle: true }
            }, {
              route: 'doc/article',
              name: 'local',
              moduleId: 'article/index',
              title: 'Local Article',
              settings: { isArticle: true }
            }, {
              route: 'api',
              moduleId: 'api/index',
              title: 'API',
              settings: { isApi: true }
            }, {
              route: ':userName/:productName/:version/doc/api',
              moduleId: 'api/index',
              title: 'API',
              settings: { isApi: true }
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
//# sourceMappingURL=data:application/json;base64,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RUFBRTtBQUNoQixnQkFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7QUFDekQsZ0JBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7V0FDbkI7OzttQkFoRVUsR0FBRztBQUFILFdBQUcsR0FEZixNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FDM0MsR0FBRyxLQUFILEdBQUc7ZUFBSCxHQUFHOzs7OztBQW9FVixpQkFBVztBQUNKLGlCQURQLFdBQVcsQ0FDSCxPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSEcsV0FBVzs7aUJBSVosYUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQ3JCLGdCQUFJLFdBQVcsQ0FBQyxvQkFBb0IsV0FBUSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO0FBQ2xHLGtCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQzdDO0FBQ0QsZ0JBQUksV0FBVyxFQUFFO0FBQ2Ysa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUMsQ0FBQyxDQUFDO2FBQzVDO0FBQ0QsdUJBQVcsR0FBRyxJQUFJLENBQUM7QUFDbkIsbUJBQU8sSUFBSSxFQUFFLENBQUM7V0FDZjs7OzJCQWJHLFdBQVc7QUFBWCxtQkFBVyxHQURoQixNQUFNLENBQUMsU0FBUyxDQUFDLENBQ1osV0FBVyxLQUFYLFdBQVc7ZUFBWCxXQUFXIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9jYWxBUEl9IGZyb20gJ3NlcnZpY2VzL2xvY2FsJztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICdzZXJ2aWNlcy9jaGFubmVsJztcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xsZXJ9IGZyb20gJ3Jlc291cmNlcy9hdS1vdmVybGF5JztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcblxudmFyIGluaXRpYWxTdGVwID0gZmFsc2U7XG5cbkBpbmplY3QoRWxlbWVudCwgQVVDaGFubmVsLCBPdmVybGF5Q29udHJvbGxlciwgTG9jYWxBUEkpXG5leHBvcnQgY2xhc3MgQXBwIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsLCBvdmVybGF5Q29udHJvbGxlciwgYXBpKSB7XG4gICAgdGhpcy5jdWx0dXJlICA9IGFwaS5nZXRDdWx0dXJlKCk7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGFwaS5nZXRMYW5ndWFnZSgpO1xuICAgIHRoaXMucHJvZmlsZSAgPSBhcGkuZ2V0UHJvZmlsZSgpO1xuICAgIHRoaXMuYXBpICAgICAgPSBhcGk7XG4gICAgdGhpcy5jaGFubmVsICA9IGNoYW5uZWw7XG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vdmVybGF5Q29udHJvbGxlciA9IG92ZXJsYXlDb250cm9sbGVyO1xuXG4gICAgY2hhbm5lbC5zdWJzY3JpYmUoJ3Njcm9sbFRvJywgKHBheWxvYWQpPT4ge1xuICAgICAgbGV0IHRvcCA9IHBheWxvYWQuZWxlbWVudCA/IHBheWxvYWQuZWxlbWVudC5vZmZzZXRUb3AgOiBwYXlsb2FkLnRvcDtcbiAgICAgIGxldCBzY3JvbGxhYmxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlLWhvc3QnKTtcbiAgICAgIHNjcm9sbGFibGVFbGVtZW50LnNjcm9sbFRvcCA9IHRvcCB8fCAwO1xuICAgIH0pO1xuICB9XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLnRpdGxlID0gJ0F1cmVsaWEgRG9jcyc7XG4gICAgY29uZmlnLmFkZFBpcGVsaW5lU3RlcCgncG9zdGNvbXBsZXRlJywgU2Nyb2xsVG9Ub3ApO1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAge1xuICAgICAgICByb3V0ZTogWycnXSxcbiAgICAgICAgbW9kdWxlSWQ6ICdhcnRpY2xlL2luZGV4JyxcbiAgICAgICAgdGl0bGU6ICdBcnRpY2xlJyxcbiAgICAgICAgc2V0dGluZ3M6IHtpc0FydGljbGU6IHRydWV9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJzp1c2VyTmFtZS86cHJvZHVjdE5hbWUvOnZlcnNpb24vZG9jL2FydGljbGUnLFxuICAgICAgICBtb2R1bGVJZDogJ2FydGljbGUvaW5kZXgnLFxuICAgICAgICB0aXRsZTogJ0FydGljbGUnLFxuICAgICAgICBzZXR0aW5nczoge2lzQXJ0aWNsZTogdHJ1ZX0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJ2RvYy9hcnRpY2xlJyxcbiAgICAgICAgbmFtZTogJ2xvY2FsJyxcbiAgICAgICAgbW9kdWxlSWQ6ICdhcnRpY2xlL2luZGV4JyxcbiAgICAgICAgdGl0bGU6ICdMb2NhbCBBcnRpY2xlJyxcbiAgICAgICAgc2V0dGluZ3M6IHtpc0FydGljbGU6IHRydWV9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcm91dGU6ICdhcGknLFxuICAgICAgICBtb2R1bGVJZDogJ2FwaS9pbmRleCcsXG4gICAgICAgIHRpdGxlOiAnQVBJJyxcbiAgICAgICAgc2V0dGluZ3M6IHtpc0FwaTogdHJ1ZX0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICByb3V0ZTogJzp1c2VyTmFtZS86cHJvZHVjdE5hbWUvOnZlcnNpb24vZG9jL2FwaScsXG4gICAgICAgIG1vZHVsZUlkOiAnYXBpL2luZGV4JyxcbiAgICAgICAgdGl0bGU6ICdBUEknLFxuICAgICAgICBzZXR0aW5nczoge2lzQXBpOiB0cnVlfSxcbiAgICAgIH1cbiAgICBdKTtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lciA9IHRoaXMub3ZlcmxheUNvbnRyb2xsZXIucmVnaXN0ZXJDb250YWluZXIodGhpcywgdGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIG9wZW5Bc2lkZSgkZXZlbnQpIHtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5yb3V0ZXIuY3VycmVudEluc3RydWN0aW9uLmNvbmZpZy50aXRsZTtcbiAgICB0aGlzLmFzaWRlLm9wZW4oKTtcbiAgfVxufVxuXG5AaW5qZWN0KEFVQ2hhbm5lbClcbmNsYXNzIFNjcm9sbFRvVG9wIHtcbiAgY29uc3RydWN0b3IoY2hhbm5lbCkge1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cbiAgcnVuKGluc3RydWN0aW9uLCBuZXh0KSB7XG4gICAgaWYgKGluc3RydWN0aW9uLnZpZXdQb3J0SW5zdHJ1Y3Rpb25zLmRlZmF1bHQuY2hpbGROYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24uY29uZmlnLnNldHRpbmdzLmNsb3NlQXNpZGUpIHtcbiAgICAgIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhdS1kZWFjdGl2YXRlOmFzaWRlJyk7XG4gICAgfVxuICAgIGlmIChpbml0aWFsU3RlcCkge1xuICAgICAgdGhpcy5jaGFubmVsLnB1Ymxpc2goJ3Njcm9sbFRvJywge3RvcDogMH0pO1xuICAgIH1cbiAgICBpbml0aWFsU3RlcCA9IHRydWU7XG4gICAgcmV0dXJuIG5leHQoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
