System.register(['./database', 'aurelia-http-client', 'services/cache', 'aurelia-dependency-injection', './model'], function (_export) {
  'use strict';

  var database, HttpClient, Cache, inject, Product, ProductVersion, Article, GroupModel, ClassModel, ConstructorModel, MethodModel, InterfaceModel, PropertyModel, VariableModel, SignatureModel, FunctionModel, Server;

  var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function checkForChildren(obj) {
    if (obj && obj.children) {
      obj.children.forEach(function (child) {
        var newChild = castObjectAsType(child, obj);
        checkForChildren(newChild);
      });
    }
  }

  function checkForGroups(obj) {
    if (obj && obj.groups) {
      obj.groups.forEach(function (group) {
        group.kindName = group.kind.name;
        obj.groups.push(new GroupModel(group));
        checkForGroups(group);
      });
    }
  }

  function castObjectAsType(obj, parent) {
    var type = obj.kindString;
    var thisObject = undefined;

    switch (type) {
      case 'Class':
        thisObject = new ClassModel(obj);
        parent.classes.push(thisObject);
        break;
      case 'Constructor':
        thisObject = new ConstructorModel(obj);
        thisObject.signature = new SignatureModel(thisObject.signatures[0]);
        parent.constructorMethod = thisObject;
        break;
      case 'Method':
        thisObject = new MethodModel(obj);
        thisObject.signature = new SignatureModel(thisObject.signatures[0]);
        parent.methods.push(thisObject);
        break;
      case 'Interface':
        thisObject = new InterfaceModel(obj);
        parent.interfaces.push(thisObject);
        break;
      case 'Property':
        thisObject = new PropertyModel(obj);
        parent.properties.push(thisObject);
        break;
      case 'Variable':
        thisObject = new VariableModel(obj);
        parent.variables.push(thisObject);
        break;
      case 'Signature':
        thisObject = new SignatureModel(obj);
        parent.signature.push(thisObject);
        break;
      case 'Function':
        thisObject = new FunctionModel(obj);
        parent.functions.push(thisObject);
        break;
      default:
    }

    return thisObject;
  }
  return {
    setters: [function (_database) {
      database = _database.database;
    }, function (_aureliaHttpClient) {
      HttpClient = _aureliaHttpClient.HttpClient;
    }, function (_servicesCache) {
      Cache = _servicesCache.Cache;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_model) {
      Product = _model.Product;
      ProductVersion = _model.ProductVersion;
      Article = _model.Article;
      GroupModel = _model.GroupModel;
      ClassModel = _model.ClassModel;
      ConstructorModel = _model.ConstructorModel;
      MethodModel = _model.MethodModel;
      InterfaceModel = _model.InterfaceModel;
      PropertyModel = _model.PropertyModel;
      VariableModel = _model.VariableModel;
      SignatureModel = _model.SignatureModel;
      FunctionModel = _model.FunctionModel;
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
              productVersion.children = response.content.children;
              productVersion.groups = response.content.groups;
              checkForChildren(productVersion);
              checkForGroups(productVersion);
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
                  return new Article(x, productVersion, _this5);
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
//# sourceMappingURL=data:application/json;base64,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QUUsUUFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7QUFDMUIscUJBQUssRUFBRSxLQUFLO0FBQ1osbUJBQUcsRUFBRSxHQUFHO0FBQ1IsdUJBQU8sRUFBRSxPQUFPO0FBQ2hCLHVCQUFPLEVBQUUsT0FBTztlQUNqQixDQUFDO2FBQ0gsQ0FBQyxDQUNELE1BQU0sQ0FBQyxVQUFBLENBQUM7cUJBQUksQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDO2FBQUEsQ0FBQyxDQUN4QixNQUFNLENBQUMsVUFBQSxDQUFDLEVBQUk7QUFDWCxxQkFBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUEsQUFBQyxDQUFDO2FBQ3pELENBQUMsQ0FBQztXQUNKOzs7c0JBNU1VLE1BQU07QUFBTixjQUFNLEdBRGxCLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FDRCxNQUFNLEtBQU4sTUFBTTtlQUFOLE1BQU0iLCJmaWxlIjoiYmFja2VuZC9zZXJ2ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RhdGFiYXNlfSBmcm9tICcuL2RhdGFiYXNlJztcbmltcG9ydCB7SHR0cENsaWVudH0gZnJvbSAnYXVyZWxpYS1odHRwLWNsaWVudCc7XG5pbXBvcnQge0NhY2hlfSBmcm9tICdzZXJ2aWNlcy9jYWNoZSc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge1xuICBQcm9kdWN0LFxuICBQcm9kdWN0VmVyc2lvbixcbiAgQXJ0aWNsZSxcbiAgR3JvdXBNb2RlbCxcbiAgQ2xhc3NNb2RlbCxcbiAgQ29uc3RydWN0b3JNb2RlbCxcbiAgTWV0aG9kTW9kZWwsXG4gIEludGVyZmFjZU1vZGVsLFxuICBQcm9wZXJ0eU1vZGVsLFxuICBWYXJpYWJsZU1vZGVsLFxuICBTaWduYXR1cmVNb2RlbCxcbiAgRnVuY3Rpb25Nb2RlbFxufSBmcm9tICcuL21vZGVsJztcblxuQGluamVjdChDYWNoZSlcbmV4cG9ydCBjbGFzcyBTZXJ2ZXIge1xuICBjb25zdHJ1Y3RvcihjYWNoZSkge1xuICAgIHRoaXMuY2FjaGUgPSBjYWNoZTtcbiAgICB0aGlzLm9mZmljaWFsUHJvZHVjdHMgPSBbXTtcbiAgICB0aGlzLm90aGVyUHJvZHVjdHMgPSBbXTtcbiAgfVxuXG4gIGdldE9mZmljaWFsUHJvZHVjdHMoKSB7XG4gICAgaWYgKHRoaXMub2ZmaWNpYWxQcm9kdWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMub2ZmaWNpYWxQcm9kdWN0cyk7XG4gICAgfVxuXG4gICAgdGhpcy5vZmZpY2lhbFByb2R1Y3RzID0gZGF0YWJhc2Uub2ZmaWNpYWxQcm9kdWN0cy5tYXAoeCA9PiBuZXcgUHJvZHVjdCh4LCB0aGlzKSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm9mZmljaWFsUHJvZHVjdHMpO1xuICB9XG5cbiAgZ2V0VHV0b3JpYWxzRm9yUHJvZmlsZShwcm9maWxlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmdldE9mZmljaWFsUHJvZHVjdHMoKS50aGVuKHByb2R1Y3RzID0+IHtcbiAgICAgIGxldCB0ZW1wID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHByb2R1Y3RzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgdGVtcCA9IHByb2R1Y3RzW2ldLmdldFR1dG9yaWFsRm9yUHJvZmlsZShwcm9maWxlTmFtZSkuY29uY2F0KHRlbXApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGVtcC5zb3J0KChhLCBiKSA9PiBhLmdldE9yZGVyRm9yUHJvZmlsZShwcm9maWxlTmFtZSkgPCBiLmdldE9yZGVyRm9yUHJvZmlsZShwcm9maWxlTmFtZSkgPyAtMSA6IDEpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZHVjdCh1c2VyTmFtZSwgcHJvZHVjdE5hbWUpIHtcbiAgICBpZiAoIXVzZXJOYW1lICYmICFwcm9kdWN0TmFtZSkgcmV0dXJuIHRoaXMuZ2V0RGVmYXVsdFByb2R1Y3QoKTtcbiAgICBsZXQgZm91bmQgPSB0aGlzLm90aGVyUHJvZHVjdHMuZmluZCh4ID0+IHgudXNlck5hbWUgPT09IHVzZXJOYW1lICYmIHgucHJvZHVjdE5hbWUgPT09IHByb2R1Y3ROYW1lKTtcbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm91bmQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmdldE9mZmljaWFsUHJvZHVjdHMoKS50aGVuKG9mZmljaWFsUHJvZHVjdHMgPT4ge1xuICAgICAgZm91bmQgPSBvZmZpY2lhbFByb2R1Y3RzLmZpbmQoeCA9PiB4LnVzZXJOYW1lID09PSB1c2VyTmFtZSAmJiB4LnByb2R1Y3ROYW1lID09PSBwcm9kdWN0TmFtZSk7XG5cbiAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgZm91bmQgPSBuZXcgUHJvZHVjdCh7dXNlck5hbWU6IHVzZXJOYW1lLCBwcm9kdWN0TmFtZTogcHJvZHVjdE5hbWUsIGxhdGVzdFZlcnNpb246ICdsYXRlc3QnfSwgdGhpcyk7XG4gICAgICAgIHRoaXMub3RoZXJQcm9kdWN0cy5wdXNoKGZvdW5kKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0UHJvZHVjdFZlcnNpb24ocHJvZHVjdCwgdmVyc2lvbikge1xuICAgIGlmIChwcm9kdWN0LmlzTG9hZGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9hZFByb2R1Y3RWZXJzaW9uKHByb2R1Y3QsIHZlcnNpb24pO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9sb2FkUHJvZHVjdERlc2NyaXB0aW9uKHRoaXMuY2hhbmdlTG9nUGFyc2VyLCBwcm9kdWN0KVxuICAgICAgLnRoZW4oeCA9PiB0aGlzLl9sb2FkUHJvZHVjdFZlcnNpb24ocHJvZHVjdCwgdmVyc2lvbikpO1xuICB9XG5cbiAgZ2V0RGVmYXVsdFByb2R1Y3QoKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShQcm9kdWN0LnByZXZpb3VzU2VsZWN0aW9uIHx8IHRoaXMub2ZmaWNpYWxQcm9kdWN0c1swXSk7XG4gIH1cblxuICBnZXRUZXN0UHJvZHVjdFZlcnNpb24oKSB7XG4gICAgbGV0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdCh7XG4gICAgICB1c2VyTmFtZTogJ3Rlc3QnLFxuICAgICAgcHJvZHVjdE5hbWU6ICdwcm9kdWN0JyxcbiAgICAgIHR1dG9yaWFsczogW11cbiAgICB9LCB0aGlzKTtcblxuICAgIGxldCBwcm9kdWN0VmVyc2lvbiA9IG5ldyBQcm9kdWN0VmVyc2lvbihcbiAgICAgIHByb2R1Y3QsXG4gICAgICAnbG9jYWwnLFxuICAgICAgdGhpcyxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgcHJvZHVjdC52ZXJzaW9ucy5wdXNoKHByb2R1Y3RWZXJzaW9uKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvZHVjdFZlcnNpb24pO1xuICB9XG5cbiAgbG9hZEFydGljbGVUcmFuc2xhdGlvbih0cmFuc2xhdGlvbikge1xuICAgIGxldCBmb3VuZCA9IHRyYW5zbGF0aW9uLmxvY2FsID8gbnVsbCA6IHRoaXMuY2FjaGUuZ2V0SXRlbSh0cmFuc2xhdGlvbi51cmwpO1xuICAgIGxldCBsb2FkZWQgPSBmb3VuZFxuICAgICAgPyBQcm9taXNlLnJlc29sdmUoZm91bmQpXG4gICAgICA6IG5ldyBIdHRwQ2xpZW50KCkuY3JlYXRlUmVxdWVzdCh0cmFuc2xhdGlvbi51cmwpXG4gICAgICAgICAgLmFzR2V0KClcbiAgICAgICAgICAud2l0aFJlc3BvbnNlVHlwZSgndGV4dCcpXG4gICAgICAgICAgLnNlbmQoKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmNvbnRlbnQpXG4gICAgICAgICAgLmNhdGNoKCgpID0+ICcnKVxuICAgICAgICAgIC50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGlvbi5sb2NhbCkge1xuICAgICAgICAgICAgICB0aGlzLmNhY2hlLnNldEl0ZW0odHJhbnNsYXRpb24udXJsLCBjb250ZW50LCB0aGlzLmNhY2hlLmZhckZ1dHVyZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbG9hZGVkLnRoZW4oY29udGVudCA9PiB7XG4gICAgICB0cmFuc2xhdGlvbi5jb250ZW50ID0gY29udGVudDtcblxuICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHRyYW5zbGF0aW9uLnVuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgX2xvYWRQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09ICdsYXRlc3QnKSB7XG4gICAgICB2ZXJzaW9uID0gcHJvZHVjdC5sYXRlc3RWZXJzaW9uO1xuICAgIH1cblxuICAgIGxldCBwcm9kdWN0VmVyc2lvbiA9IG5ldyBQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uLCB0aGlzKTtcbiAgICBwcm9kdWN0LnZlcnNpb25zLnB1c2gocHJvZHVjdFZlcnNpb24pO1xuXG4gICAgbGV0IGh0dHAgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIGh0dHAuZ2V0KHByb2R1Y3RWZXJzaW9uLmFwaVVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHByb2R1Y3RWZXJzaW9uLmNoaWxkcmVuID0gcmVzcG9uc2UuY29udGVudC5jaGlsZHJlbjtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24uZ3JvdXBzID0gcmVzcG9uc2UuY29udGVudC5ncm91cHM7XG4gICAgICAgIGNoZWNrRm9yQ2hpbGRyZW4ocHJvZHVjdFZlcnNpb24pO1xuICAgICAgICBjaGVja0Zvckdyb3Vwcyhwcm9kdWN0VmVyc2lvbik7XG4gICAgICB9KSxcbiAgICAgIGh0dHAuZ2V0KHByb2R1Y3RWZXJzaW9uLnBhY2thZ2VVcmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcGFjayA9IHJlc3BvbnNlLmNvbnRlbnQ7XG5cbiAgICAgICAgcHJvZHVjdFZlcnNpb24uZGVzY3JpcHRpb24gPSBwYWNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5idWdzVXJsID0gcGFjay5idWdzLnVybDtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24ucmVwb3NpdG9yeVVybCA9IHBhY2sucmVwb3NpdG9yeS51cmw7XG4gICAgICAgIHByb2R1Y3RWZXJzaW9uLmNoYW5nZUxvZ1VybCA9IGBodHRwczovL2dpdGh1Yi5jb20vJHtwcm9kdWN0LnVzZXJOYW1lfS8ke3Byb2R1Y3QucHJvZHVjdE5hbWV9L2Jsb2IvbWFzdGVyL2RvYy9DSEFOR0VMT0cubWRgO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5saWNlbnNlVXJsID0gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb2R1Y3QudXNlck5hbWV9LyR7cHJvZHVjdC5wcm9kdWN0TmFtZX0vYmxvYi9tYXN0ZXIvTElDRU5TRWA7XG5cbiAgICAgICAgaWYgKHBhY2suanNwbSAmJiBwYWNrLmpzcG0uZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24uZGVwZW5kZW5jaWVzID0gT2JqZWN0LmtleXMocGFjay5qc3BtLmRlcGVuZGVuY2llcylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnN0YXJ0c1dpdGgoJ2F1cmVsaWEtJykpXG4gICAgICAgICAgICAubWFwKHggPT4geC5yZXBsYWNlKCdhdXJlbGlhLScsICcnKSlcbiAgICAgICAgICAgIC5tYXAoeCA9PiB0aGlzLm9mZmljaWFsUHJvZHVjdHMuZmluZCh5ID0+IHkucHJvZHVjdE5hbWUgPT09IHgpIHx8IHRoaXMub3RoZXJQcm9kdWN0cy5maW5kKHkgPT4geS5wcm9kdWN0TmFtZSA9PT0geCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhY2suYXVyZWxpYSAmJiBwYWNrLmF1cmVsaWEuZG9jdW1lbnRhdGlvbikge1xuICAgICAgICAgIHByb2R1Y3RWZXJzaW9uLmFydGljbGVzID0gcGFjay5hdXJlbGlhLmRvY3VtZW50YXRpb24uYXJ0aWNsZXMgfHwgW107XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24uYXJ0aWNsZXMgPSBwcm9kdWN0VmVyc2lvbi5hcnRpY2xlcy5tYXAoeCA9PiBuZXcgQXJ0aWNsZSh4LCBwcm9kdWN0VmVyc2lvbiwgdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFjay5rZXl3b3Jkcy5mb3JFYWNoKGtleXdvcmQgPT4ge1xuICAgICAgICAgIHByb2R1Y3RWZXJzaW9uLmtleXdvcmRzLnB1c2goa2V5d29yZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICBdKS50aGVuKCgpID0+IHByb2R1Y3RWZXJzaW9uKTtcbiAgfVxuXG4gIF9sb2FkUHJvZHVjdERlc2NyaXB0aW9uKGNoYW5nZUxvZ1BhcnNlciwgcHJvZHVjdCkge1xuICAgIGxldCB0YWdMaXN0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHtwcm9kdWN0LnVzZXJOYW1lfS8ke3Byb2R1Y3QucHJvZHVjdE5hbWV9L3RhZ3NgO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5jYWNoZS5nZXRJdGVtKHRhZ0xpc3QpO1xuICAgIGxldCBsb2FkZWQ7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgbG9hZGVkID0gUHJvbWlzZS5yZXNvbHZlKGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkZWQgPSBuZXcgSHR0cENsaWVudCgpXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KHRhZ0xpc3QpXG4gICAgICAgIC5hc0dldCgpXG4gICAgICAgIC5zZW5kKClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5jYWNoZS5zZXRJdGVtKHRhZ0xpc3QsIHJlc3BvbnNlLmNvbnRlbnQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGVkLnRoZW4oX2NvbnRlbnQgPT4ge1xuICAgICAgcHJvZHVjdC5hdmFpbGFibGVWZXJzaW9ucyA9IHRoaXMuX2dldFZlcnNpb25zKF9jb250ZW50Lm1hcCh4ID0+IHgubmFtZSkpO1xuICAgICAgcHJvZHVjdC5jb25maWd1cmVMYXRlc3RWZXJzaW9uKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBwcm9kdWN0LmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcm9kdWN0O1xuICAgIH0pO1xuICB9XG5cbiAgX2dldFZlcnNpb25zKGFsbCkge1xuICAgIGxldCBsb29rdXAgPSB7fTtcblxuICAgIHJldHVybiBhbGwubWFwKHggPT4ge1xuICAgICAgbGV0IGRpdmlzaW9ucyA9IHguc3BsaXQoJy0nKTtcbiAgICAgIGxldCBbbWFqb3IsIG1pbm9yLCBwYXRjaF0gPSBkaXZpc2lvbnNbMF0uc3BsaXQoJy4nKTtcbiAgICAgIGxldCBwcmUgPSBkaXZpc2lvbnNbMV0gfHwgJyc7XG4gICAgICBsZXQgcHJlUGFydHMgPSBwcmUuc3BsaXQoJy4nKTtcbiAgICAgIGxldCB2ZXJzaW9uID0gcHJlXG4gICAgICAgID8gbWFqb3IgKyAnLicgKyBtaW5vciArICcuJyArIHBhdGNoICsgJy0nICsgcHJlXG4gICAgICAgIDogbWFqb3IgKyAnLicgKyBtaW5vciArICcuJyArIHBhdGNoO1xuICAgICAgbGV0IGRpc3BsYXkgPSBwcmVcbiAgICAgICAgPyBtYWpvciArICcuJyArIG1pbm9yICsgJy4nICsgcGF0Y2ggKyAnLScgKyBwcmVQYXJ0c1swXSArICcuJyArIHByZVBhcnRzWzFdXG4gICAgICAgIDogbWFqb3IgKyAnLicgKyBtaW5vciArICcueCc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1ham9yOiBwYXJzZUludChtYWpvciwgMTApLFxuICAgICAgICBtaW5vcjogcGFyc2VJbnQobWlub3IsIDEwKSxcbiAgICAgICAgcGF0Y2g6IHBhdGNoLFxuICAgICAgICBwcmU6IHByZSxcbiAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgZGlzcGxheTogZGlzcGxheVxuICAgICAgfTtcbiAgICB9KVxuICAgIC5maWx0ZXIoeCA9PiB4Lm1ham9yID4gMClcbiAgICAuZmlsdGVyKHggPT4ge1xuICAgICAgcmV0dXJuICFsb29rdXBbeC5kaXNwbGF5XSAmJiAobG9va3VwW3guZGlzcGxheV0gPSB0cnVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvckNoaWxkcmVuKG9iaikge1xuICBpZiAob2JqICYmIG9iai5jaGlsZHJlbikge1xuICAgIG9iai5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGxldCBuZXdDaGlsZCA9IGNhc3RPYmplY3RBc1R5cGUoY2hpbGQsIG9iaik7XG4gICAgICBjaGVja0ZvckNoaWxkcmVuKG5ld0NoaWxkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvckdyb3VwcyhvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouZ3JvdXBzKSB7XG4gICAgb2JqLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGdyb3VwLmtpbmROYW1lID0gZ3JvdXAua2luZC5uYW1lO1xuICAgICAgb2JqLmdyb3Vwcy5wdXNoKG5ldyBHcm91cE1vZGVsKGdyb3VwKSk7XG4gICAgICBjaGVja0Zvckdyb3Vwcyhncm91cCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gRmluZHMgdGhlIHR5cGUgYW5kIGNhc3RzIHRoZSBvYmplY3QgYXMgaXQgc28gd2UgY2FuIHJlY3Vyc2l2ZWx5IHNlYXJjaCBvYmplY3RzXG5mdW5jdGlvbiBjYXN0T2JqZWN0QXNUeXBlKG9iaiwgcGFyZW50KSB7XG4gIGxldCB0eXBlID0gb2JqLmtpbmRTdHJpbmc7XG4gIGxldCB0aGlzT2JqZWN0O1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlICdDbGFzcyc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBDbGFzc01vZGVsKG9iaik7XG4gICAgcGFyZW50LmNsYXNzZXMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnQ29uc3RydWN0b3InOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgQ29uc3RydWN0b3JNb2RlbChvYmopO1xuICAgIHRoaXNPYmplY3Quc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZU1vZGVsKHRoaXNPYmplY3Quc2lnbmF0dXJlc1swXSk7XG4gICAgcGFyZW50LmNvbnN0cnVjdG9yTWV0aG9kID0gdGhpc09iamVjdDtcbiAgICBicmVhaztcbiAgY2FzZSAnTWV0aG9kJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IE1ldGhvZE1vZGVsKG9iaik7XG4gICAgdGhpc09iamVjdC5zaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlTW9kZWwodGhpc09iamVjdC5zaWduYXR1cmVzWzBdKTtcbiAgICBwYXJlbnQubWV0aG9kcy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdJbnRlcmZhY2UnOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgSW50ZXJmYWNlTW9kZWwob2JqKTtcbiAgICBwYXJlbnQuaW50ZXJmYWNlcy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdQcm9wZXJ0eSc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBQcm9wZXJ0eU1vZGVsKG9iaik7XG4gICAgcGFyZW50LnByb3BlcnRpZXMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnVmFyaWFibGUnOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgVmFyaWFibGVNb2RlbChvYmopO1xuICAgIHBhcmVudC52YXJpYWJsZXMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnU2lnbmF0dXJlJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IFNpZ25hdHVyZU1vZGVsKG9iaik7XG4gICAgcGFyZW50LnNpZ25hdHVyZS5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdGdW5jdGlvbic6XG4gICAgdGhpc09iamVjdCA9IG5ldyBGdW5jdGlvbk1vZGVsKG9iaik7XG4gICAgcGFyZW50LmZ1bmN0aW9ucy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBkZWZhdWx0OlxuICAvLyBEbyBub3RoaW5nXG4gIH1cblxuICByZXR1cm4gdGhpc09iamVjdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
