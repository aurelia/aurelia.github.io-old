System.register(['aurelia-dependency-injection', 'aurelia-router', 'backend/server', 'services/local'], function (_export) {
  'use strict';

  var inject, Router, Server, LocalAPI, ArticleView;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvYXJ0aWNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7d0NBTWEsV0FBVzs7Ozs7Ozs7MkNBTmhCLE1BQU07OzhCQUNOLE1BQU07OzhCQUNOLE1BQU07O2dDQUNOLFFBQVE7OztBQUdILGlCQUFXO0FBR1gsaUJBSEEsV0FBVyxDQUdWLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFOzs7ZUFGakMsU0FBUyxHQUFHLEVBQUU7O0FBR1osY0FBSSxDQUFDLEdBQUcsR0FBTSxHQUFHLENBQUM7QUFDbEIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDakM7O3FCQVJVLFdBQVc7O2lCQVVkLG9CQUFHOzs7QUFDVCxnQkFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLE9BQU8sRUFBSTtBQUNuRixvQkFBSyxXQUFXLEVBQUUsQ0FBQztBQUNuQixvQkFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO2FBQ3hCLENBQUMsQ0FBQztXQUNKOzs7aUJBRU8sa0JBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUU7OztBQUNwQyxnQkFBSSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO0FBQ3RDLGdCQUFJLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQzs7QUFFbkUsZ0JBQUksaUJBQWlCLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRSxHQUNuQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FFeEQsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2Ysa0JBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDN0Qsa0JBQUksUUFBUSxFQUFFO0FBQ1osd0JBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztlQUNuQjs7QUFFRCxxQkFBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMzQyxDQUFDLENBQUM7O0FBRVQsbUJBQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQUEsY0FBYyxFQUFJO0FBQzlDLHFCQUFLLGNBQWMsR0FBRyxjQUFjLENBQUM7QUFDckMscUJBQU8sT0FBSyxXQUFXLEVBQUUsQ0FBQzthQUMzQixDQUFDLENBQUM7V0FDSjs7O2lCQUVVLHVCQUFHOzs7QUFDWixtQkFBTyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQzFFLElBQUksQ0FBQyxVQUFBLE9BQU87cUJBQUksT0FBSyxPQUFPLEdBQUcsT0FBTzthQUFBLENBQUMsQ0FBQztXQUM1Qzs7O2lCQUVPLG9CQUFHO0FBQ1QsZ0JBQUksQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDaEU7OzsyQkEvQ1UsV0FBVztBQUFYLG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUNwQixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoiYXJ0aWNsZS9hcnRpY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5pbXBvcnQge0xvY2FsQVBJfSBmcm9tICdzZXJ2aWNlcy9sb2NhbCc7XG5cbkBpbmplY3QoU2VydmVyLCBSb3V0ZXIsIExvY2FsQVBJKVxuZXhwb3J0IGNsYXNzIEFydGljbGVWaWV3IHtcbiAgdHV0b3JpYWxzID0gW107XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyLCByb3V0ZXIsIGFwaSkge1xuICAgIHRoaXMuYXBpICAgID0gYXBpO1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICAgIHRoaXMuY3VsdHVyZSA9IGFwaS5nZXRDdWx0dXJlKCk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmN1bHR1cmVTdWJzY3JpcHRpb24gPSB0aGlzLmFwaS5jaGFubmVsLnN1YnNjcmliZSgnY3VsdHVyZS1jaGFuZ2VkJywgKGN1bHR1cmUpPT4ge1xuICAgICAgdGhpcy5sb2FkQXJ0aWNsZSgpO1xuICAgICAgdGhpcy5jdWx0dXJlID0gY3VsdHVyZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgY29uZmlnLCBpbnN0cnVjdGlvbikge1xuICAgIHRoaXMuYXJ0aWNsZVNsdWcgPSBwYXJhbXMuYXJ0aWNsZVNsdWc7XG4gICAgdGhpcy5sb2NhbCA9IGluc3RydWN0aW9uLnBhcmVudEluc3RydWN0aW9uLmNvbmZpZy5uYW1lID09PSAnbG9jYWwnO1xuXG4gICAgbGV0IGdldFByb2R1Y3RWZXJzaW9uID0gdGhpcy5sb2NhbFxuICAgICAgPyB0aGlzLnNlcnZlci5nZXRUZXN0UHJvZHVjdFZlcnNpb24oKVxuICAgICAgOiB0aGlzLnNlcnZlci5nZXRQcm9kdWN0KHBhcmFtcy51c2VyTmFtZSwgcGFyYW1zLnByb2R1Y3ROYW1lKVxuXG4gICAgICAgICAgLnRoZW4ocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICBsZXQgdHV0b3JpYWwgPSBwcm9kdWN0LmdldFR1dG9yaWFsQnlTbHVnKHBhcmFtcy5hcnRpY2xlU2x1Zyk7XG4gICAgICAgICAgICBpZiAodHV0b3JpYWwpIHtcbiAgICAgICAgICAgICAgdHV0b3JpYWwuc2VsZWN0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwcm9kdWN0LmdldFZlcnNpb24ocGFyYW1zLnZlcnNpb24pO1xuICAgICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGdldFByb2R1Y3RWZXJzaW9uLnRoZW4ocHJvZHVjdFZlcnNpb24gPT4ge1xuICAgICAgdGhpcy5wcm9kdWN0VmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uO1xuICAgICAgcmV0dXJuIHRoaXMubG9hZEFydGljbGUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGxvYWRBcnRpY2xlKCkge1xuICAgIHJldHVybiB0aGlzLnByb2R1Y3RWZXJzaW9uLmdldEFydGljbGUodGhpcy5hcnRpY2xlU2x1ZywgdGhpcy5jdWx0dXJlLmN1cnJlbnQpXG4gICAgICAudGhlbihhcnRpY2xlID0+IHRoaXMuYXJ0aWNsZSA9IGFydGljbGUpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5jdWx0dXJlU3Vic2NyaXB0aW9uICYmIHRoaXMuY3VsdHVyZVN1YnNjcmlwdGlvbi5kaXNwb3NlKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
