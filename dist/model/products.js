System.register(['aurelia-path', 'aurelia-docs/aurelia-doc'], function (_export) {
  'use strict';

  var join, AureliaDoc, Product, ProductVersion, Tutorial;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaPath) {
      join = _aureliaPath.join;
    }, function (_aureliaDocsAureliaDoc) {
      AureliaDoc = _aureliaDocsAureliaDoc.AureliaDoc;
    }],
    execute: function () {
      Product = (function () {
        _createClass(Product, null, [{
          key: 'previousSelection',
          value: null,
          enumerable: true
        }]);

        function Product(attrs, server) {
          var _this = this;

          _classCallCheck(this, Product);

          attrs.tutorials = attrs.tutorials || [];
          this.userName = attrs.userName;
          this.productName = attrs.productName;
          this.latestVersion = 'latest';
          this.preferredVersion = this.latestVersion;

          this.tutorials = attrs.tutorials.map(function (a) {
            return new Tutorial(a, _this);
          });
          this.isSelected = false;
          this.versions = [];
          this.server = server;
          this.npmUrl = 'https://www.npmjs.com/package/aurelia-' + this.productName;
          this.baseUrl = 'https://cdn.rawgit.com/' + this.userName + '/' + this.productName;
        }

        _createClass(Product, [{
          key: 'select',
          value: function select() {
            if (Product.previousSelection) {
              Product.previousSelection.isSelected = false;
            }

            Product.previousSelection = this;
            this.isSelected = true;
          }
        }, {
          key: 'getLatestVersion',
          value: function getLatestVersion() {
            return this.getVersion(this.latestVersion);
          }
        }, {
          key: 'getVersion',
          value: function getVersion(version) {
            var _this2 = this;

            version = version || this.preferredVersion;
            var found = this.versions.find(function (x) {
              return x.version === version;
            });

            if (found) {
              return Promise.resolve(found);
            }

            return this.server.getProductVersion(this, version).then(function (productVersion) {
              _this2.versions.push(productVersion);
              return productVersion;
            });
          }
        }, {
          key: 'getTutorialBySlug',
          value: function getTutorialBySlug(articleSlug) {
            return this.tutorials.find(function (x) {
              return x.slug === articleSlug;
            });
          }
        }, {
          key: 'getTutorialForProfile',
          value: function getTutorialForProfile(profileName) {
            return this.tutorials.filter(function (x) {
              return x.matchesProfile(profileName);
            });
          }
        }, {
          key: 'configureLatestVersion',
          value: function configureLatestVersion() {
            if (this.latestVersion === 'latest') {
              this.latestVersion = this.availableVersions[0].version;

              if (this.preferredVersion === 'latest') {
                this.preferredVersion = this.latestVersion;
              }
            }
          }
        }]);

        return Product;
      })();

      _export('Product', Product);

      ProductVersion = (function () {
        function ProductVersion(product, version, server, local) {
          _classCallCheck(this, ProductVersion);

          this.articles = [];
          this.keywords = [];

          this.product = product;
          this.version = version;
          this.server = server;
          this.baseUrl = join(product.baseUrl, version);
          this.apiUrl = join(this.baseUrl, 'doc/api.json');
          this.packageUrl = join(this.baseUrl, 'package.json');
          this.local = !!local;
        }

        _createClass(ProductVersion, [{
          key: 'getArticle',
          value: function getArticle(slug, culture) {
            var found = undefined;

            if (this.local) {
              found = new AureliaDoc({ title: 'Local Article', href: slug }, this, this.server, true);
            } else {
              found = this.articles.find(function (x) {
                return x.slug === slug;
              });
            }

            if (!found) {
              return Promise.reject();
            }

            return found.getTranslation(culture);
          }
        }]);

        return ProductVersion;
      })();

      _export('ProductVersion', ProductVersion);

      Tutorial = (function () {
        _createClass(Tutorial, null, [{
          key: 'previousSelection',
          value: null,
          enumerable: true
        }]);

        function Tutorial(attrs, product) {
          _classCallCheck(this, Tutorial);

          this.title = attrs.title;
          this.slug = attrs.href.substring(attrs.href.lastIndexOf('/') + 1).replace('.md', '');
          this.href = attrs.href;
          this.profiles = attrs.profiles;
          this.product = product;
        }

        _createClass(Tutorial, [{
          key: 'getOrderForProfile',
          value: function getOrderForProfile(profileName) {
            return this.profiles.find(function (x) {
              return x.name === profileName;
            }).order;
          }
        }, {
          key: 'matchesProfile',
          value: function matchesProfile(profileName) {
            if (this.profiles) {
              return !!this.profiles.find(function (x) {
                return x.name === profileName;
              });
            }

            return false;
          }
        }, {
          key: 'select',
          value: function select() {
            if (Tutorial.previousSelection) {
              Tutorial.previousSelection.isSelected = false;
            }

            Tutorial.previousSelection = this;
            this.isSelected = true;
          }
        }]);

        return Tutorial;
      })();

      _export('Tutorial', Tutorial);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LENBQUM7V0FDOUQ7OztpQkFFYSx3QkFBQyxXQUFXLEVBQUU7QUFDMUIsZ0JBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtBQUNqQixxQkFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssV0FBVztlQUFBLENBQUMsQ0FBQzthQUMxRDs7QUFFRCxtQkFBTyxLQUFLLENBQUM7V0FDZDs7O2lCQUVLLGtCQUFHO0FBQ1AsZ0JBQUksUUFBUSxDQUFDLGlCQUFpQixFQUFFO0FBQzlCLHNCQUFRLENBQUMsaUJBQWlCLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQzthQUMvQzs7QUFFRCxvQkFBUSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztBQUNsQyxnQkFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7V0FDeEI7OztlQTlCVSxRQUFRIiwiZmlsZSI6Im1vZGVsL3Byb2R1Y3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtqb2lufSBmcm9tICdhdXJlbGlhLXBhdGgnO1xuaW1wb3J0IHtBdXJlbGlhRG9jfSBmcm9tICdhdXJlbGlhLWRvY3MvYXVyZWxpYS1kb2MnO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdCB7XG4gIHN0YXRpYyBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXR0cnMsIHNlcnZlcikge1xuICAgIGF0dHJzLnR1dG9yaWFscyA9IGF0dHJzLnR1dG9yaWFscyB8fCBbXTtcbiAgICB0aGlzLnVzZXJOYW1lID0gYXR0cnMudXNlck5hbWU7XG4gICAgdGhpcy5wcm9kdWN0TmFtZSA9IGF0dHJzLnByb2R1Y3ROYW1lO1xuICAgIHRoaXMubGF0ZXN0VmVyc2lvbiA9ICdsYXRlc3QnO1xuICAgIHRoaXMucHJlZmVycmVkVmVyc2lvbiA9IHRoaXMubGF0ZXN0VmVyc2lvbjtcblxuICAgIHRoaXMudHV0b3JpYWxzID0gYXR0cnMudHV0b3JpYWxzLm1hcChhID0+IG5ldyBUdXRvcmlhbChhLCB0aGlzKSk7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgdGhpcy52ZXJzaW9ucyA9IFtdO1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMubnBtVXJsICA9IGBodHRwczovL3d3dy5ucG1qcy5jb20vcGFja2FnZS9hdXJlbGlhLSR7dGhpcy5wcm9kdWN0TmFtZX1gO1xuICAgIHRoaXMuYmFzZVVybCA9IGBodHRwczovL2Nkbi5yYXdnaXQuY29tLyR7dGhpcy51c2VyTmFtZX0vJHt0aGlzLnByb2R1Y3ROYW1lfWA7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKFByb2R1Y3QucHJldmlvdXNTZWxlY3Rpb24pIHtcbiAgICAgIFByb2R1Y3QucHJldmlvdXNTZWxlY3Rpb24uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIFByb2R1Y3QucHJldmlvdXNTZWxlY3Rpb24gPSB0aGlzO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gIH1cblxuICBnZXRMYXRlc3RWZXJzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldFZlcnNpb24odGhpcy5sYXRlc3RWZXJzaW9uKTtcbiAgfVxuXG4gIGdldFZlcnNpb24odmVyc2lvbikge1xuICAgIHZlcnNpb24gPSB2ZXJzaW9uIHx8IHRoaXMucHJlZmVycmVkVmVyc2lvbjtcbiAgICBsZXQgZm91bmQgPSB0aGlzLnZlcnNpb25zLmZpbmQoeCA9PiB4LnZlcnNpb24gPT09IHZlcnNpb24pO1xuXG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZvdW5kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIuZ2V0UHJvZHVjdFZlcnNpb24odGhpcywgdmVyc2lvbikudGhlbihwcm9kdWN0VmVyc2lvbiA9PiB7XG4gICAgICB0aGlzLnZlcnNpb25zLnB1c2gocHJvZHVjdFZlcnNpb24pO1xuICAgICAgcmV0dXJuIHByb2R1Y3RWZXJzaW9uO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0VHV0b3JpYWxCeVNsdWcoYXJ0aWNsZVNsdWcpIHtcbiAgICByZXR1cm4gdGhpcy50dXRvcmlhbHMuZmluZCh4ID0+IHguc2x1ZyA9PT0gYXJ0aWNsZVNsdWcpO1xuICB9XG5cbiAgZ2V0VHV0b3JpYWxGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMudHV0b3JpYWxzLmZpbHRlcih4ID0+IHgubWF0Y2hlc1Byb2ZpbGUocHJvZmlsZU5hbWUpKTtcbiAgfVxuXG4gIGNvbmZpZ3VyZUxhdGVzdFZlcnNpb24oKSB7XG4gICAgaWYgKHRoaXMubGF0ZXN0VmVyc2lvbiA9PT0gJ2xhdGVzdCcpIHtcbiAgICAgIHRoaXMubGF0ZXN0VmVyc2lvbiA9IHRoaXMuYXZhaWxhYmxlVmVyc2lvbnNbMF0udmVyc2lvbjtcblxuICAgICAgaWYgKHRoaXMucHJlZmVycmVkVmVyc2lvbiA9PT0gJ2xhdGVzdCcpIHtcbiAgICAgICAgdGhpcy5wcmVmZXJyZWRWZXJzaW9uID0gdGhpcy5sYXRlc3RWZXJzaW9uO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvZHVjdFZlcnNpb24ge1xuICBhcnRpY2xlcyA9IFtdO1xuICBrZXl3b3JkcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2R1Y3QsIHZlcnNpb24sIHNlcnZlciwgbG9jYWwpIHtcbiAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5iYXNlVXJsID0gam9pbihwcm9kdWN0LmJhc2VVcmwsIHZlcnNpb24pO1xuICAgIHRoaXMuYXBpVXJsID0gam9pbih0aGlzLmJhc2VVcmwsICdkb2MvYXBpLmpzb24nKTtcbiAgICB0aGlzLnBhY2thZ2VVcmwgPSBqb2luKHRoaXMuYmFzZVVybCwgJ3BhY2thZ2UuanNvbicpO1xuICAgIHRoaXMubG9jYWwgPSAhIWxvY2FsO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZShzbHVnLCBjdWx0dXJlKSB7XG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKHRoaXMubG9jYWwpIHtcbiAgICAgIGZvdW5kID0gbmV3IEF1cmVsaWFEb2MoeyB0aXRsZTogJ0xvY2FsIEFydGljbGUnLCBocmVmOiBzbHVnIH0sIHRoaXMsIHRoaXMuc2VydmVyLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm91bmQgPSB0aGlzLmFydGljbGVzLmZpbmQoeCA9PiB4LnNsdWcgPT09IHNsdWcpO1xuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZC5nZXRUcmFuc2xhdGlvbihjdWx0dXJlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICBzdGF0aWMgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGF0dHJzLCBwcm9kdWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IGF0dHJzLnRpdGxlO1xuICAgIHRoaXMuc2x1ZyA9IGF0dHJzLmhyZWYuc3Vic3RyaW5nKGF0dHJzLmhyZWYubGFzdEluZGV4T2YoJy8nKSArIDEpLnJlcGxhY2UoJy5tZCcsICcnKTtcbiAgICB0aGlzLmhyZWYgPSBhdHRycy5ocmVmO1xuICAgIHRoaXMucHJvZmlsZXMgPSBhdHRycy5wcm9maWxlcztcbiAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICB9XG5cbiAgZ2V0T3JkZXJGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucHJvZmlsZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcHJvZmlsZU5hbWUpLm9yZGVyO1xuICB9XG5cbiAgbWF0Y2hlc1Byb2ZpbGUocHJvZmlsZU5hbWUpIHtcbiAgICBpZiAodGhpcy5wcm9maWxlcykge1xuICAgICAgcmV0dXJuICEhdGhpcy5wcm9maWxlcy5maW5kKHggPT4geC5uYW1lID09PSBwcm9maWxlTmFtZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmIChUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbikge1xuICAgICAgVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24uaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIFR1dG9yaWFsLnByZXZpb3VzU2VsZWN0aW9uID0gdGhpcztcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
