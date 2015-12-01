System.register(['aurelia-dependency-injection', 'aurelia-router', 'backend/server', 'services/local', 'backend/model'], function (_export) {
  'use strict';

  var inject, Router, Redirect, Server, LocalAPI, Tutorial, defaultParams, ArticleView;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
      Redirect = _aureliaRouter.Redirect;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_servicesLocal) {
      LocalAPI = _servicesLocal.LocalAPI;
    }, function (_backendModel) {
      Tutorial = _backendModel.Tutorial;
    }],
    execute: function () {
      defaultParams = { userName: 'aurelia', productName: 'framework', version: 'latest', slug: 'what-is-aurelia' };

      ArticleView = (function () {
        function ArticleView(server, router, api) {
          _classCallCheck(this, _ArticleView);

          this.tutorials = [];

          this.api = api;
          this.server = server;
          this.router = router;
          this.culture = api.getCulture();
        }

        _createClass(ArticleView, [{
          key: 'attached',
          value: function attached() {
            var _this = this;

            this.cultureSubscription = this.api.channel.subscribe('culture-changed', function (culture) {
              _this.loadArticle();
              _this.culture = culture;
            });

            if (this.scrollId) {
              var element = document.getElementById(this.scrollId);
              this.api.channel.publish('scrollTo', { element: element });
            }
          }
        }, {
          key: 'canActivate',
          value: function canActivate(params) {
            if (!params.articleSlug) {
              var slug = undefined,
                  userName = undefined,
                  productName = undefined,
                  version = undefined;

              slug = Tutorial.previousSelection ? Tutorial.previousSelection.slug : defaultParams.slug;
              version = Tutorial.previousSelection ? Tutorial.previousSelection.product.latestVersion : defaultParams.version;
              userName = Tutorial.previousSelection ? Tutorial.previousSelection.product.userName : defaultParams.userName;
              productName = Tutorial.previousSelection ? Tutorial.previousSelection.product.productName : defaultParams.productName;
              return new Redirect(userName + '/' + productName + '/' + version + '/doc/article/' + slug);
            }
          }
        }, {
          key: 'activate',
          value: function activate(params, config, instruction) {
            var _this2 = this;

            this.articleSlug = params.articleSlug;
            this.scrollId = params.scrollId;
            this.local = instruction.parentInstruction.config.name === 'local';
            var getProductVersion = this.local ? this.server.getTestProductVersion() : this.server.getProduct(params.userName, params.productName).then(function (product) {
              var tutorial = product.getTutorialBySlug(params.articleSlug);
              if (tutorial) {
                tutorial.select();
              }

              return product.getVersion(params.version);
            });

            return getProductVersion.then(function (productVersion) {
              _this2.productVersion = productVersion;
              return _this2.loadArticle();
            });
          }
        }, {
          key: 'loadArticle',
          value: function loadArticle() {
            var _this3 = this;

            return this.productVersion.getArticle(this.articleSlug, this.culture.current).then(function (article) {
              return _this3.article = article;
            });
          }
        }, {
          key: 'detached',
          value: function detached() {
            this.cultureSubscription && this.cultureSubscription.dispose();
          }
        }]);

        var _ArticleView = ArticleView;
        ArticleView = inject(Server, Router, LocalAPI)(ArticleView) || ArticleView;
        return ArticleView;
      })();

      _export('ArticleView', ArticleView);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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dCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuaW1wb3J0IHtUdXRvcmlhbH0gZnJvbSAnYmFja2VuZC9tb2RlbCc7XG5pbXBvcnQge1JlZGlyZWN0fSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5cbmNvbnN0IGRlZmF1bHRQYXJhbXMgPSB7dXNlck5hbWU6ICdhdXJlbGlhJywgcHJvZHVjdE5hbWU6ICdmcmFtZXdvcmsnLCB2ZXJzaW9uOiAnbGF0ZXN0Jywgc2x1ZzogJ3doYXQtaXMtYXVyZWxpYSd9O1xuXG5AaW5qZWN0KFNlcnZlciwgUm91dGVyLCBMb2NhbEFQSSlcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVmlldyB7XG4gIHR1dG9yaWFscyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlciwgcm91dGVyLCBhcGkpIHtcbiAgICB0aGlzLmFwaSAgICA9IGFwaTtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmN1bHR1cmUgPSBhcGkuZ2V0Q3VsdHVyZSgpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5jdWx0dXJlU3Vic2NyaXB0aW9uID0gdGhpcy5hcGkuY2hhbm5lbC5zdWJzY3JpYmUoJ2N1bHR1cmUtY2hhbmdlZCcsIChjdWx0dXJlKT0+IHtcbiAgICAgIHRoaXMubG9hZEFydGljbGUoKTtcbiAgICAgIHRoaXMuY3VsdHVyZSA9IGN1bHR1cmU7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5zY3JvbGxJZCkge1xuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLnNjcm9sbElkKTtcbiAgICAgIHRoaXMuYXBpLmNoYW5uZWwucHVibGlzaCgnc2Nyb2xsVG8nLCB7ZWxlbWVudH0pO1xuICAgIH1cbiAgfVxuICBjYW5BY3RpdmF0ZShwYXJhbXMpIHtcbiAgICBpZiAoIXBhcmFtcy5hcnRpY2xlU2x1Zykge1xuICAgICAgbGV0IHNsdWcsIHVzZXJOYW1lLCBwcm9kdWN0TmFtZSwgdmVyc2lvbjtcblxuICAgICAgc2x1ZyAgICAgICAgPSBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbiA/IFR1dG9yaWFsLnByZXZpb3VzU2VsZWN0aW9uLnNsdWcgOiBkZWZhdWx0UGFyYW1zLnNsdWdcbiAgICAgIHZlcnNpb24gICAgID0gVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24gPyBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbi5wcm9kdWN0LmxhdGVzdFZlcnNpb24gOiBkZWZhdWx0UGFyYW1zLnZlcnNpb25cbiAgICAgIHVzZXJOYW1lICAgID0gVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24gPyBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbi5wcm9kdWN0LnVzZXJOYW1lIDogZGVmYXVsdFBhcmFtcy51c2VyTmFtZVxuICAgICAgcHJvZHVjdE5hbWUgPSBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbiA/IFR1dG9yaWFsLnByZXZpb3VzU2VsZWN0aW9uLnByb2R1Y3QucHJvZHVjdE5hbWUgOiBkZWZhdWx0UGFyYW1zLnByb2R1Y3ROYW1lXG4gICAgICByZXR1cm4gbmV3IFJlZGlyZWN0KGAke3VzZXJOYW1lfS8ke3Byb2R1Y3ROYW1lfS8ke3ZlcnNpb259L2RvYy9hcnRpY2xlLyR7c2x1Z31gKTtcbiAgICB9XG4gIH1cbiAgYWN0aXZhdGUocGFyYW1zLCBjb25maWcsIGluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5hcnRpY2xlU2x1ZyA9IHBhcmFtcy5hcnRpY2xlU2x1ZztcbiAgICB0aGlzLnNjcm9sbElkID0gcGFyYW1zLnNjcm9sbElkO1xuICAgIHRoaXMubG9jYWwgPSBpbnN0cnVjdGlvbi5wYXJlbnRJbnN0cnVjdGlvbi5jb25maWcubmFtZSA9PT0gJ2xvY2FsJztcbiAgICBsZXQgZ2V0UHJvZHVjdFZlcnNpb24gPSB0aGlzLmxvY2FsXG4gICAgICA/IHRoaXMuc2VydmVyLmdldFRlc3RQcm9kdWN0VmVyc2lvbigpXG4gICAgICA6IHRoaXMuc2VydmVyLmdldFByb2R1Y3QocGFyYW1zLnVzZXJOYW1lLCBwYXJhbXMucHJvZHVjdE5hbWUpXG5cbiAgICAgICAgICAudGhlbihwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIGxldCB0dXRvcmlhbCA9IHByb2R1Y3QuZ2V0VHV0b3JpYWxCeVNsdWcocGFyYW1zLmFydGljbGVTbHVnKTtcbiAgICAgICAgICAgIGlmICh0dXRvcmlhbCkge1xuICAgICAgICAgICAgICB0dXRvcmlhbC5zZWxlY3QoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHByb2R1Y3QuZ2V0VmVyc2lvbihwYXJhbXMudmVyc2lvbik7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZ2V0UHJvZHVjdFZlcnNpb24udGhlbihwcm9kdWN0VmVyc2lvbiA9PiB7XG4gICAgICB0aGlzLnByb2R1Y3RWZXJzaW9uID0gcHJvZHVjdFZlcnNpb247XG4gICAgICByZXR1cm4gdGhpcy5sb2FkQXJ0aWNsZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgbG9hZEFydGljbGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZHVjdFZlcnNpb24uZ2V0QXJ0aWNsZSh0aGlzLmFydGljbGVTbHVnLCB0aGlzLmN1bHR1cmUuY3VycmVudClcbiAgICAgIC50aGVuKGFydGljbGUgPT4gdGhpcy5hcnRpY2xlID0gYXJ0aWNsZSk7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICB0aGlzLmN1bHR1cmVTdWJzY3JpcHRpb24gJiYgdGhpcy5jdWx0dXJlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
