System.register(['./database', 'aurelia-http-client', 'services/cache', 'aurelia-dependency-injection', 'aurelia-docs/aurelia-doc', 'model/products', 'model/api'], function (_export) {
  'use strict';

  var database, HttpClient, Cache, inject, AureliaDoc, Product, ProductVersion, API, Server;

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_database) {
      database = _database.database;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_servicesCache) {
      Cache = _servicesCache.Cache;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaDocsAureliaDoc) {
      AureliaDoc = _aureliaDocsAureliaDoc.AureliaDoc;
    }, function (_modelProducts) {
      Product = _modelProducts.Product;
      ProductVersion = _modelProducts.ProductVersion;
    }, function (_modelApi) {
      API = _modelApi.API;
    }],
    execute: function () {
      Server = (function () {
        function Server(cache) {
          _classCallCheck(this, _Server);

          this.cache = cache;
          this.officialProducts = [];
          this.otherProducts = [];
        }

        _createClass(Server, [{
          key: 'getOfficialProducts',
          value: function getOfficialProducts() {
            var _this = this;

            if (this.officialProducts.length > 0) {
              return Promise.resolve(this.officialProducts);
            }

            this.officialProducts = database.officialProducts.map(function (x) {
              return new Product(x, _this);
            });
            return Promise.resolve(this.officialProducts);
          }
        }, {
          key: 'getTutorialsForProfile',
          value: function getTutorialsForProfile(profileName) {
            return this.getOfficialProducts().then(function (products) {
              var temp = [];

              for (var i = 0, ii = products.length; i < ii; ++i) {
                temp = products[i].getTutorialForProfile(profileName).concat(temp);
              }

              return temp.sort(function (a, b) {
                return a.getOrderForProfile(profileName) < b.getOrderForProfile(profileName) ? -1 : 1;
              });
            });
          }
        }, {
          key: 'getProduct',
          value: function getProduct(userName, productName) {
            var _this2 = this;

            if (!userName && !productName) return this.getDefaultProduct();
            var found = this.otherProducts.find(function (x) {
              return x.userName === userName && x.productName === productName;
            });
            if (found) {
              return Promise.resolve(found);
            }

            return this.getOfficialProducts().then(function (officialProducts) {
              found = officialProducts.find(function (x) {
                return x.userName === userName && x.productName === productName;
              });

              if (!found) {
                found = new Product({ userName: userName, productName: productName, latestVersion: 'latest' }, _this2);
                _this2.otherProducts.push(found);
              }

              return found;
            });
          }
        }, {
          key: 'getProductVersion',
          value: function getProductVersion(product, version) {
            var _this3 = this;

            if (product.isLoaded) {
              return this._loadProductVersion(product, version);
            }

            return this._loadProductDescription(this.changeLogParser, product).then(function (x) {
              return _this3._loadProductVersion(product, version);
            });
          }
        }, {
          key: 'getDefaultProduct',
          value: function getDefaultProduct() {
            return Promise.resolve(Product.previousSelection || this.officialProducts[0]);
          }
        }, {
          key: 'getTestProductVersion',
          value: function getTestProductVersion() {
            var product = new Product({
              userName: 'test',
              productName: 'product',
              tutorials: []
            }, this);

            var productVersion = new ProductVersion(product, 'local', this, true);

            product.versions.push(productVersion);

            return Promise.resolve(productVersion);
          }
        }, {
          key: 'loadArticleTranslation',
          value: function loadArticleTranslation(translation) {
            var _this4 = this;

            var found = translation.local ? null : this.cache.getItem(translation.url);
            var loaded = found ? Promise.resolve(found) : new HttpClient().createRequest(translation.url).asGet().withResponseType('text').send().then(function (response) {
              return response.content;
            })['catch'](function () {
              return '';
            }).then(function (content) {
              if (!translation.local) {
                _this4.cache.setItem(translation.url, content, _this4.cache.farFuture());
              }

              return content;
            });

            return loaded.then(function (content) {
              translation.content = content;

              if (!content) {
                translation.unavailable = true;
              }

              return translation;
            });
          }
        }, {
          key: '_loadProductVersion',
          value: function _loadProductVersion(product, version) {
            var _this5 = this;

            if (version === 'latest') {
              version = product.latestVersion;
            }

            var productVersion = new ProductVersion(product, version, this);
            product.versions.push(productVersion);

            var http = new HttpClient();

            return Promise.all([http.get(productVersion.apiUrl).then(function (response) {
              productVersion.api = new API(response.content.children, response.content.groups);
            }), http.get(productVersion.packageUrl).then(function (response) {
              var pack = response.content;

              productVersion.description = pack.description;
              productVersion.bugsUrl = pack.bugs.url;
              productVersion.repositoryUrl = pack.repository.url;
              productVersion.changeLogUrl = 'https://github.com/' + product.userName + '/' + product.productName + '/blob/master/doc/CHANGELOG.md';
              productVersion.licenseUrl = 'https://github.com/' + product.userName + '/' + product.productName + '/blob/master/LICENSE';

              if (pack.jspm && pack.jspm.dependencies) {
                productVersion.dependencies = Object.keys(pack.jspm.dependencies).filter(function (x) {
                  return x.startsWith('aurelia-');
                }).map(function (x) {
                  return x.replace('aurelia-', '');
                }).map(function (x) {
                  return _this5.officialProducts.find(function (y) {
                    return y.productName === x;
                  }) || _this5.otherProducts.find(function (y) {
                    return y.productName === x;
                  });
                });
              }

              if (pack.aurelia && pack.aurelia.documentation) {
                productVersion.articles = pack.aurelia.documentation.articles || [];
                productVersion.articles = productVersion.articles.map(function (x) {
                  return new AureliaDoc(x, productVersion, _this5);
                });
              }

              pack.keywords.forEach(function (keyword) {
                productVersion.keywords.push(keyword);
              });
            })]).then(function () {
              return productVersion;
            });
          }
        }, {
          key: '_loadProductDescription',
          value: function _loadProductDescription(changeLogParser, product) {
            var _this6 = this;

            var tagList = 'https://api.github.com/repos/' + product.userName + '/' + product.productName + '/tags';
            var content = this.cache.getItem(tagList);
            var loaded = undefined;

            if (content) {
              loaded = Promise.resolve(content);
            } else {
              loaded = new HttpClient().createRequest(tagList).asGet().send().then(function (response) {
                return _this6.cache.setItem(tagList, response.content);
              });
            }

            return loaded.then(function (_content) {
              product.availableVersions = _this6._getVersions(_content.map(function (x) {
                return x.name;
              }));
              product.configureLatestVersion();
            }).then(function () {
              product.isLoaded = true;
              return product;
            });
          }
        }, {
          key: '_getVersions',
          value: function _getVersions(all) {
            var lookup = {};

            return all.map(function (x) {
              var divisions = x.split('-');

              var _divisions$0$split = divisions[0].split('.');

              var _divisions$0$split2 = _slicedToArray(_divisions$0$split, 3);

              var major = _divisions$0$split2[0];
              var minor = _divisions$0$split2[1];
              var patch = _divisions$0$split2[2];

              var pre = divisions[1] || '';
              var preParts = pre.split('.');
              var version = pre ? major + '.' + minor + '.' + patch + '-' + pre : major + '.' + minor + '.' + patch;
              var display = pre ? major + '.' + minor + '.' + patch + '-' + preParts[0] + '.' + preParts[1] : major + '.' + minor + '.x';

              return {
                major: parseInt(major, 10),
                minor: parseInt(minor, 10),
                patch: patch,
                pre: pre,
                version: version,
                display: display
              };
            }).filter(function (x) {
              return x.major > 0;
            }).filter(function (x) {
              return !lookup[x.display] && (lookup[x.display] = true);
            });
          }
        }]);

        var _Server = Server;
        Server = inject(Cache)(Server) || Server;
        return Server;
      })();

      _export('Server', Server);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQSxBQUFDLENBQUM7YUFDekQsQ0FBQyxDQUFDO1dBQ0o7OztzQkF6TVUsTUFBTTtBQUFOLGNBQU0sR0FEbEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUNELE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJiYWNrZW5kL3NlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7ZGF0YWJhc2V9IGZyb20gJy4vZGF0YWJhc2UnO1xuaW1wb3J0IHtIdHRwQ2xpZW50fSBmcm9tICdhdXJlbGlhLWh0dHAtY2xpZW50JztcbmltcG9ydCB7Q2FjaGV9IGZyb20gJ3NlcnZpY2VzL2NhY2hlJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7QXVyZWxpYURvY30gZnJvbSAnYXVyZWxpYS1kb2NzL2F1cmVsaWEtZG9jJztcbmltcG9ydCB7UHJvZHVjdCwgUHJvZHVjdFZlcnNpb259IGZyb20gJ21vZGVsL3Byb2R1Y3RzJztcbmltcG9ydCB7QVBJfSBmcm9tICdtb2RlbC9hcGknO1xuXG5AaW5qZWN0KENhY2hlKVxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIGNvbnN0cnVjdG9yKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgIHRoaXMub2ZmaWNpYWxQcm9kdWN0cyA9IFtdO1xuICAgIHRoaXMub3RoZXJQcm9kdWN0cyA9IFtdO1xuICB9XG5cbiAgZ2V0T2ZmaWNpYWxQcm9kdWN0cygpIHtcbiAgICBpZiAodGhpcy5vZmZpY2lhbFByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5vZmZpY2lhbFByb2R1Y3RzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9mZmljaWFsUHJvZHVjdHMgPSBkYXRhYmFzZS5vZmZpY2lhbFByb2R1Y3RzLm1hcCh4ID0+IG5ldyBQcm9kdWN0KHgsIHRoaXMpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMub2ZmaWNpYWxQcm9kdWN0cyk7XG4gIH1cblxuICBnZXRUdXRvcmlhbHNGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T2ZmaWNpYWxQcm9kdWN0cygpLnRoZW4ocHJvZHVjdHMgPT4ge1xuICAgICAgbGV0IHRlbXAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gcHJvZHVjdHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICB0ZW1wID0gcHJvZHVjdHNbaV0uZ2V0VHV0b3JpYWxGb3JQcm9maWxlKHByb2ZpbGVOYW1lKS5jb25jYXQodGVtcCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZW1wLnNvcnQoKGEsIGIpID0+IGEuZ2V0T3JkZXJGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSA8IGIuZ2V0T3JkZXJGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSA/IC0xIDogMSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0KHVzZXJOYW1lLCBwcm9kdWN0TmFtZSkge1xuICAgIGlmICghdXNlck5hbWUgJiYgIXByb2R1Y3ROYW1lKSByZXR1cm4gdGhpcy5nZXREZWZhdWx0UHJvZHVjdCgpO1xuICAgIGxldCBmb3VuZCA9IHRoaXMub3RoZXJQcm9kdWN0cy5maW5kKHggPT4geC51c2VyTmFtZSA9PT0gdXNlck5hbWUgJiYgeC5wcm9kdWN0TmFtZSA9PT0gcHJvZHVjdE5hbWUpO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmb3VuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0T2ZmaWNpYWxQcm9kdWN0cygpLnRoZW4ob2ZmaWNpYWxQcm9kdWN0cyA9PiB7XG4gICAgICBmb3VuZCA9IG9mZmljaWFsUHJvZHVjdHMuZmluZCh4ID0+IHgudXNlck5hbWUgPT09IHVzZXJOYW1lICYmIHgucHJvZHVjdE5hbWUgPT09IHByb2R1Y3ROYW1lKTtcblxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBmb3VuZCA9IG5ldyBQcm9kdWN0KHt1c2VyTmFtZTogdXNlck5hbWUsIHByb2R1Y3ROYW1lOiBwcm9kdWN0TmFtZSwgbGF0ZXN0VmVyc2lvbjogJ2xhdGVzdCd9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5vdGhlclByb2R1Y3RzLnB1c2goZm91bmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uKSB7XG4gICAgaWYgKHByb2R1Y3QuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2FkUHJvZHVjdFZlcnNpb24ocHJvZHVjdCwgdmVyc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRQcm9kdWN0RGVzY3JpcHRpb24odGhpcy5jaGFuZ2VMb2dQYXJzZXIsIHByb2R1Y3QpXG4gICAgICAudGhlbih4ID0+IHRoaXMuX2xvYWRQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uKSk7XG4gIH1cblxuICBnZXREZWZhdWx0UHJvZHVjdCgpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKFByb2R1Y3QucHJldmlvdXNTZWxlY3Rpb24gfHwgdGhpcy5vZmZpY2lhbFByb2R1Y3RzWzBdKTtcbiAgfVxuXG4gIGdldFRlc3RQcm9kdWN0VmVyc2lvbigpIHtcbiAgICBsZXQgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KHtcbiAgICAgIHVzZXJOYW1lOiAndGVzdCcsXG4gICAgICBwcm9kdWN0TmFtZTogJ3Byb2R1Y3QnLFxuICAgICAgdHV0b3JpYWxzOiBbXVxuICAgIH0sIHRoaXMpO1xuXG4gICAgbGV0IHByb2R1Y3RWZXJzaW9uID0gbmV3IFByb2R1Y3RWZXJzaW9uKFxuICAgICAgcHJvZHVjdCxcbiAgICAgICdsb2NhbCcsXG4gICAgICB0aGlzLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBwcm9kdWN0LnZlcnNpb25zLnB1c2gocHJvZHVjdFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9kdWN0VmVyc2lvbik7XG4gIH1cblxuICBsb2FkQXJ0aWNsZVRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKSB7XG4gICAgbGV0IGZvdW5kID0gdHJhbnNsYXRpb24ubG9jYWwgPyBudWxsIDogdGhpcy5jYWNoZS5nZXRJdGVtKHRyYW5zbGF0aW9uLnVybCk7XG4gICAgbGV0IGxvYWRlZCA9IGZvdW5kXG4gICAgICA/IFByb21pc2UucmVzb2x2ZShmb3VuZClcbiAgICAgIDogbmV3IEh0dHBDbGllbnQoKS5jcmVhdGVSZXF1ZXN0KHRyYW5zbGF0aW9uLnVybClcbiAgICAgICAgICAuYXNHZXQoKVxuICAgICAgICAgIC53aXRoUmVzcG9uc2VUeXBlKCd0ZXh0JylcbiAgICAgICAgICAuc2VuZCgpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuY29udGVudClcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gJycpXG4gICAgICAgICAgLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRyYW5zbGF0aW9uLmxvY2FsKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0SXRlbSh0cmFuc2xhdGlvbi51cmwsIGNvbnRlbnQsIHRoaXMuY2FjaGUuZmFyRnV0dXJlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsb2FkZWQudGhlbihjb250ZW50ID0+IHtcbiAgICAgIHRyYW5zbGF0aW9uLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgdHJhbnNsYXRpb24udW5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRpb247XG4gICAgfSk7XG4gIH1cblxuICBfbG9hZFByb2R1Y3RWZXJzaW9uKHByb2R1Y3QsIHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gJ2xhdGVzdCcpIHtcbiAgICAgIHZlcnNpb24gPSBwcm9kdWN0LmxhdGVzdFZlcnNpb247XG4gICAgfVxuXG4gICAgbGV0IHByb2R1Y3RWZXJzaW9uID0gbmV3IFByb2R1Y3RWZXJzaW9uKHByb2R1Y3QsIHZlcnNpb24sIHRoaXMpO1xuICAgIHByb2R1Y3QudmVyc2lvbnMucHVzaChwcm9kdWN0VmVyc2lvbik7XG5cbiAgICBsZXQgaHR0cCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgaHR0cC5nZXQocHJvZHVjdFZlcnNpb24uYXBpVXJsKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24uYXBpID0gbmV3IEFQSShyZXNwb25zZS5jb250ZW50LmNoaWxkcmVuLCByZXNwb25zZS5jb250ZW50Lmdyb3Vwcyk7XG4gICAgICB9KSxcbiAgICAgIGh0dHAuZ2V0KHByb2R1Y3RWZXJzaW9uLnBhY2thZ2VVcmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcGFjayA9IHJlc3BvbnNlLmNvbnRlbnQ7XG5cbiAgICAgICAgcHJvZHVjdFZlcnNpb24uZGVzY3JpcHRpb24gPSBwYWNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5idWdzVXJsID0gcGFjay5idWdzLnVybDtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24ucmVwb3NpdG9yeVVybCA9IHBhY2sucmVwb3NpdG9yeS51cmw7XG4gICAgICAgIHByb2R1Y3RWZXJzaW9uLmNoYW5nZUxvZ1VybCA9IGBodHRwczovL2dpdGh1Yi5jb20vJHtwcm9kdWN0LnVzZXJOYW1lfS8ke3Byb2R1Y3QucHJvZHVjdE5hbWV9L2Jsb2IvbWFzdGVyL2RvYy9DSEFOR0VMT0cubWRgO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5saWNlbnNlVXJsID0gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb2R1Y3QudXNlck5hbWV9LyR7cHJvZHVjdC5wcm9kdWN0TmFtZX0vYmxvYi9tYXN0ZXIvTElDRU5TRWA7XG5cbiAgICAgICAgaWYgKHBhY2suanNwbSAmJiBwYWNrLmpzcG0uZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24uZGVwZW5kZW5jaWVzID0gT2JqZWN0LmtleXMocGFjay5qc3BtLmRlcGVuZGVuY2llcylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnN0YXJ0c1dpdGgoJ2F1cmVsaWEtJykpXG4gICAgICAgICAgICAubWFwKHggPT4geC5yZXBsYWNlKCdhdXJlbGlhLScsICcnKSlcbiAgICAgICAgICAgIC5tYXAoeCA9PiB0aGlzLm9mZmljaWFsUHJvZHVjdHMuZmluZCh5ID0+IHkucHJvZHVjdE5hbWUgPT09IHgpIHx8IHRoaXMub3RoZXJQcm9kdWN0cy5maW5kKHkgPT4geS5wcm9kdWN0TmFtZSA9PT0geCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhY2suYXVyZWxpYSAmJiBwYWNrLmF1cmVsaWEuZG9jdW1lbnRhdGlvbikge1xuICAgICAgICAgIHByb2R1Y3RWZXJzaW9uLmFydGljbGVzID0gcGFjay5hdXJlbGlhLmRvY3VtZW50YXRpb24uYXJ0aWNsZXMgfHwgW107XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24uYXJ0aWNsZXMgPSBwcm9kdWN0VmVyc2lvbi5hcnRpY2xlcy5tYXAoeCA9PiBuZXcgQXVyZWxpYURvYyh4LCBwcm9kdWN0VmVyc2lvbiwgdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFjay5rZXl3b3Jkcy5mb3JFYWNoKGtleXdvcmQgPT4ge1xuICAgICAgICAgIHByb2R1Y3RWZXJzaW9uLmtleXdvcmRzLnB1c2goa2V5d29yZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICBdKS50aGVuKCgpID0+IHByb2R1Y3RWZXJzaW9uKTtcbiAgfVxuXG4gIF9sb2FkUHJvZHVjdERlc2NyaXB0aW9uKGNoYW5nZUxvZ1BhcnNlciwgcHJvZHVjdCkge1xuICAgIGxldCB0YWdMaXN0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHtwcm9kdWN0LnVzZXJOYW1lfS8ke3Byb2R1Y3QucHJvZHVjdE5hbWV9L3RhZ3NgO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5jYWNoZS5nZXRJdGVtKHRhZ0xpc3QpO1xuICAgIGxldCBsb2FkZWQ7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgbG9hZGVkID0gUHJvbWlzZS5yZXNvbHZlKGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkZWQgPSBuZXcgSHR0cENsaWVudCgpXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KHRhZ0xpc3QpXG4gICAgICAgIC5hc0dldCgpXG4gICAgICAgIC5zZW5kKClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5jYWNoZS5zZXRJdGVtKHRhZ0xpc3QsIHJlc3BvbnNlLmNvbnRlbnQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGVkLnRoZW4oX2NvbnRlbnQgPT4ge1xuICAgICAgcHJvZHVjdC5hdmFpbGFibGVWZXJzaW9ucyA9IHRoaXMuX2dldFZlcnNpb25zKF9jb250ZW50Lm1hcCh4ID0+IHgubmFtZSkpO1xuICAgICAgcHJvZHVjdC5jb25maWd1cmVMYXRlc3RWZXJzaW9uKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBwcm9kdWN0LmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcm9kdWN0O1xuICAgIH0pO1xuICB9XG5cbiAgX2dldFZlcnNpb25zKGFsbCkge1xuICAgIGxldCBsb29rdXAgPSB7fTtcblxuICAgIHJldHVybiBhbGwubWFwKHggPT4ge1xuICAgICAgbGV0IGRpdmlzaW9ucyA9IHguc3BsaXQoJy0nKTtcbiAgICAgIGxldCBbbWFqb3IsIG1pbm9yLCBwYXRjaF0gPSBkaXZpc2lvbnNbMF0uc3BsaXQoJy4nKTtcbiAgICAgIGxldCBwcmUgPSBkaXZpc2lvbnNbMV0gfHwgJyc7XG4gICAgICBsZXQgcHJlUGFydHMgPSBwcmUuc3BsaXQoJy4nKTtcbiAgICAgIGxldCB2ZXJzaW9uID0gcHJlXG4gICAgICAgID8gbWFqb3IgKyAnLicgKyBtaW5vciArICcuJyArIHBhdGNoICsgJy0nICsgcHJlXG4gICAgICAgIDogbWFqb3IgKyAnLicgKyBtaW5vciArICcuJyArIHBhdGNoO1xuICAgICAgbGV0IGRpc3BsYXkgPSBwcmVcbiAgICAgICAgPyBtYWpvciArICcuJyArIG1pbm9yICsgJy4nICsgcGF0Y2ggKyAnLScgKyBwcmVQYXJ0c1swXSArICcuJyArIHByZVBhcnRzWzFdXG4gICAgICAgIDogbWFqb3IgKyAnLicgKyBtaW5vciArICcueCc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1ham9yOiBwYXJzZUludChtYWpvciwgMTApLFxuICAgICAgICBtaW5vcjogcGFyc2VJbnQobWlub3IsIDEwKSxcbiAgICAgICAgcGF0Y2g6IHBhdGNoLFxuICAgICAgICBwcmU6IHByZSxcbiAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgZGlzcGxheTogZGlzcGxheVxuICAgICAgfTtcbiAgICB9KVxuICAgIC5maWx0ZXIoeCA9PiB4Lm1ham9yID4gMClcbiAgICAuZmlsdGVyKHggPT4ge1xuICAgICAgcmV0dXJuICFsb29rdXBbeC5kaXNwbGF5XSAmJiAobG9va3VwW3guZGlzcGxheV0gPSB0cnVlKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
