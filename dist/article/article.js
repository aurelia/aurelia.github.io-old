System.register(['aurelia-framework', 'aurelia-router', 'backend/server', 'services/local'], function (_export) {
  'use strict';

  var inject, Router, Server, LocalAPI, ArticleView;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_servicesLocal) {
      LocalAPI = _servicesLocal.LocalAPI;
    }],
    execute: function () {
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
          }
        }, {
          key: 'activate',
          value: function activate(params, config, instruction) {
            var _this2 = this;

            this.articleSlug = params.articleSlug;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvYXJ0aWNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0NBTWEsV0FBVzs7Ozs7Ozs7aUNBTmhCLE1BQU07OzhCQUNOLE1BQU07OzhCQUNOLE1BQU07O2dDQUNOLFFBQVE7OztBQUdILGlCQUFXO0FBR1gsaUJBSEEsV0FBVyxDQUdWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFOzs7ZUFGakMsU0FBUyxHQUFHLEVBQUU7O0FBR1osY0FBSSxDQUFDLEdBQUcsR0FBTSxHQUFHLENBQUM7QUFDbEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDakM7O3FCQVJVLFdBQVc7O2lCQVVkLG9CQUFHOzs7QUFDVCxnQkFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLE9BQU8sRUFBSTtBQUNuRixvQkFBSyxXQUFXLEVBQUUsQ0FBQztBQUNuQixvQkFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3hCLENBQUMsQ0FBQztXQUNKOzs7aUJBRU8sa0JBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7OztBQUNwQyxnQkFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3RDLGdCQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQzs7QUFFbkUsZ0JBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxHQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FFeEQsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2Ysa0JBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0Qsa0JBQUksUUFBUSxFQUFFO0FBQ1osd0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztlQUNuQjs7QUFFRCxxQkFBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQyxDQUFDLENBQUM7O0FBRVQsbUJBQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQUEsY0FBYyxFQUFJO0FBQzlDLHFCQUFLLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMscUJBQU8sT0FBSyxXQUFXLEVBQUUsQ0FBQzthQUMzQixDQUFDLENBQUM7V0FDSjs7O2lCQUVVLHVCQUFHOzs7QUFDWixtQkFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQzFFLElBQUksQ0FBQyxVQUFBLE9BQU87cUJBQUksT0FBSyxPQUFPLEdBQUcsT0FBTzthQUFBLENBQUMsQ0FBQztXQUM1Qzs7O2lCQUVPLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDaEU7OzsyQkEvQ1UsV0FBVztBQUFYLG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUNwQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoiYXJ0aWNsZS9hcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuXG5AaW5qZWN0KFNlcnZlciwgUm91dGVyLCBMb2NhbEFQSSlcbmV4cG9ydCBjbGFzcyBBcnRpY2xlVmlldyB7XG4gIHR1dG9yaWFscyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlciwgcm91dGVyLCBhcGkpIHtcbiAgICB0aGlzLmFwaSAgICA9IGFwaTtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgICB0aGlzLmN1bHR1cmUgPSBhcGkuZ2V0Q3VsdHVyZSgpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5jdWx0dXJlU3Vic2NyaXB0aW9uID0gdGhpcy5hcGkuY2hhbm5lbC5zdWJzY3JpYmUoJ2N1bHR1cmUtY2hhbmdlZCcsIChjdWx0dXJlKT0+IHtcbiAgICAgIHRoaXMubG9hZEFydGljbGUoKTtcbiAgICAgIHRoaXMuY3VsdHVyZSA9IGN1bHR1cmU7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZShwYXJhbXMsIGNvbmZpZywgaW5zdHJ1Y3Rpb24pIHtcbiAgICB0aGlzLmFydGljbGVTbHVnID0gcGFyYW1zLmFydGljbGVTbHVnO1xuICAgIHRoaXMubG9jYWwgPSBpbnN0cnVjdGlvbi5wYXJlbnRJbnN0cnVjdGlvbi5jb25maWcubmFtZSA9PT0gJ2xvY2FsJztcblxuICAgIGxldCBnZXRQcm9kdWN0VmVyc2lvbiA9IHRoaXMubG9jYWxcbiAgICAgID8gdGhpcy5zZXJ2ZXIuZ2V0VGVzdFByb2R1Y3RWZXJzaW9uKClcbiAgICAgIDogdGhpcy5zZXJ2ZXIuZ2V0UHJvZHVjdChwYXJhbXMudXNlck5hbWUsIHBhcmFtcy5wcm9kdWN0TmFtZSlcblxuICAgICAgICAgIC50aGVuKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgbGV0IHR1dG9yaWFsID0gcHJvZHVjdC5nZXRUdXRvcmlhbEJ5U2x1ZyhwYXJhbXMuYXJ0aWNsZVNsdWcpO1xuICAgICAgICAgICAgaWYgKHR1dG9yaWFsKSB7XG4gICAgICAgICAgICAgIHR1dG9yaWFsLnNlbGVjdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcHJvZHVjdC5nZXRWZXJzaW9uKHBhcmFtcy52ZXJzaW9uKTtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBnZXRQcm9kdWN0VmVyc2lvbi50aGVuKHByb2R1Y3RWZXJzaW9uID0+IHtcbiAgICAgIHRoaXMucHJvZHVjdFZlcnNpb24gPSBwcm9kdWN0VmVyc2lvbjtcbiAgICAgIHJldHVybiB0aGlzLmxvYWRBcnRpY2xlKCk7XG4gICAgfSk7XG4gIH1cblxuICBsb2FkQXJ0aWNsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0VmVyc2lvbi5nZXRBcnRpY2xlKHRoaXMuYXJ0aWNsZVNsdWcsIHRoaXMuY3VsdHVyZS5jdXJyZW50KVxuICAgICAgLnRoZW4oYXJ0aWNsZSA9PiB0aGlzLmFydGljbGUgPSBhcnRpY2xlKTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuICAgIHRoaXMuY3VsdHVyZVN1YnNjcmlwdGlvbiAmJiB0aGlzLmN1bHR1cmVTdWJzY3JpcHRpb24uZGlzcG9zZSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
