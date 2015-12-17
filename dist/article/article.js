System.register(['aurelia-dependency-injection', 'aurelia-router', 'backend/server', 'services/local', 'model/products'], function (_export) {
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
    }, function (_modelProducts) {
      Tutorial = _modelProducts.Tutorial;
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
//# sourceMappingURL=data:application/json;base64,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dCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuaW1wb3J0IHtUdXRvcmlhbH0gZnJvbSAnbW9kZWwvcHJvZHVjdHMnO1xuaW1wb3J0IHtSZWRpcmVjdH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5jb25zdCBkZWZhdWx0UGFyYW1zID0ge3VzZXJOYW1lOiAnYXVyZWxpYScsIHByb2R1Y3ROYW1lOiAnZnJhbWV3b3JrJywgdmVyc2lvbjogJ2xhdGVzdCcsIHNsdWc6ICd3aGF0LWlzLWF1cmVsaWEnfTtcblxuQGluamVjdChTZXJ2ZXIsIFJvdXRlciwgTG9jYWxBUEkpXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVZpZXcge1xuICB0dXRvcmlhbHMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIHJvdXRlciwgYXBpKSB7XG4gICAgdGhpcy5hcGkgICAgPSBhcGk7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5jdWx0dXJlID0gYXBpLmdldEN1bHR1cmUoKTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuY3VsdHVyZVN1YnNjcmlwdGlvbiA9IHRoaXMuYXBpLmNoYW5uZWwuc3Vic2NyaWJlKCdjdWx0dXJlLWNoYW5nZWQnLCAoY3VsdHVyZSk9PiB7XG4gICAgICB0aGlzLmxvYWRBcnRpY2xlKCk7XG4gICAgICB0aGlzLmN1bHR1cmUgPSBjdWx0dXJlO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuc2Nyb2xsSWQpIHtcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5zY3JvbGxJZCk7XG4gICAgICB0aGlzLmFwaS5jaGFubmVsLnB1Ymxpc2goJ3Njcm9sbFRvJywge2VsZW1lbnR9KTtcbiAgICB9XG4gIH1cbiAgY2FuQWN0aXZhdGUocGFyYW1zKSB7XG4gICAgaWYgKCFwYXJhbXMuYXJ0aWNsZVNsdWcpIHtcbiAgICAgIGxldCBzbHVnLCB1c2VyTmFtZSwgcHJvZHVjdE5hbWUsIHZlcnNpb247XG5cbiAgICAgIHNsdWcgICAgICAgID0gVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24gPyBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbi5zbHVnIDogZGVmYXVsdFBhcmFtcy5zbHVnXG4gICAgICB2ZXJzaW9uICAgICA9IFR1dG9yaWFsLnByZXZpb3VzU2VsZWN0aW9uID8gVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24ucHJvZHVjdC5sYXRlc3RWZXJzaW9uIDogZGVmYXVsdFBhcmFtcy52ZXJzaW9uXG4gICAgICB1c2VyTmFtZSAgICA9IFR1dG9yaWFsLnByZXZpb3VzU2VsZWN0aW9uID8gVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24ucHJvZHVjdC51c2VyTmFtZSA6IGRlZmF1bHRQYXJhbXMudXNlck5hbWVcbiAgICAgIHByb2R1Y3ROYW1lID0gVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24gPyBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbi5wcm9kdWN0LnByb2R1Y3ROYW1lIDogZGVmYXVsdFBhcmFtcy5wcm9kdWN0TmFtZVxuICAgICAgcmV0dXJuIG5ldyBSZWRpcmVjdChgJHt1c2VyTmFtZX0vJHtwcm9kdWN0TmFtZX0vJHt2ZXJzaW9ufS9kb2MvYXJ0aWNsZS8ke3NsdWd9YCk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCBjb25maWcsIGluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5hcnRpY2xlU2x1ZyA9IHBhcmFtcy5hcnRpY2xlU2x1ZztcbiAgICB0aGlzLnNjcm9sbElkID0gcGFyYW1zLnNjcm9sbElkO1xuICAgIHRoaXMubG9jYWwgPSBpbnN0cnVjdGlvbi5wYXJlbnRJbnN0cnVjdGlvbi5jb25maWcubmFtZSA9PT0gJ2xvY2FsJztcbiAgICBsZXQgZ2V0UHJvZHVjdFZlcnNpb24gPSB0aGlzLmxvY2FsXG4gICAgICA/IHRoaXMuc2VydmVyLmdldFRlc3RQcm9kdWN0VmVyc2lvbigpXG4gICAgICA6IHRoaXMuc2VydmVyLmdldFByb2R1Y3QocGFyYW1zLnVzZXJOYW1lLCBwYXJhbXMucHJvZHVjdE5hbWUpXG4gICAgICAgICAgLnRoZW4ocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgdHV0b3JpYWwgPSBwcm9kdWN0LmdldFR1dG9yaWFsQnlTbHVnKHBhcmFtcy5hcnRpY2xlU2x1Zyk7XG4gICAgICAgICAgICBpZiAodHV0b3JpYWwpIHtcbiAgICAgICAgICAgICAgdHV0b3JpYWwuc2VsZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmdldFZlcnNpb24ocGFyYW1zLnZlcnNpb24pO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGdldFByb2R1Y3RWZXJzaW9uLnRoZW4ocHJvZHVjdFZlcnNpb24gPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0VmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZEFydGljbGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRBcnRpY2xlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RWZXJzaW9uLmdldEFydGljbGUodGhpcy5hcnRpY2xlU2x1ZywgdGhpcy5jdWx0dXJlLmN1cnJlbnQpXG4gICAgICAudGhlbihhcnRpY2xlID0+IHRoaXMuYXJ0aWNsZSA9IGFydGljbGUpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5jdWx0dXJlU3Vic2NyaXB0aW9uICYmIHRoaXMuY3VsdHVyZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
