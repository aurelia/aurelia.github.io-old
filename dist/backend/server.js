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
//# sourceMappingURL=data:application/json;base64,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Q0FBQzthQUFBLENBQUMsQ0FDeEIsTUFBTSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ1gscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFBLEFBQUMsQ0FBQzthQUN6RCxDQUFDLENBQUM7V0FDSjs7O3NCQXZNVSxNQUFNO0FBQU4sY0FBTSxHQURsQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQ0QsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6ImJhY2tlbmQvc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhYmFzZX0gZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IHtDYWNoZX0gZnJvbSAnc2VydmljZXMvY2FjaGUnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtcbiAgUHJvZHVjdCxcbiAgUHJvZHVjdFZlcnNpb24sXG4gIEFydGljbGUsXG4gIEdyb3VwTW9kZWwsXG4gIENsYXNzTW9kZWwsXG4gIENvbnN0cnVjdG9yTW9kZWwsXG4gIE1ldGhvZE1vZGVsLFxuICBJbnRlcmZhY2VNb2RlbCxcbiAgUHJvcGVydHlNb2RlbCxcbiAgVmFyaWFibGVNb2RlbCxcbiAgU2lnbmF0dXJlTW9kZWwsXG4gIEZ1bmN0aW9uTW9kZWxcbn0gZnJvbSAnLi9tb2RlbCc7XG5cbkBpbmplY3QoQ2FjaGUpXG5leHBvcnQgY2xhc3MgU2VydmVyIHtcbiAgY29uc3RydWN0b3IoY2FjaGUpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgdGhpcy5vZmZpY2lhbFByb2R1Y3RzID0gW107XG4gICAgdGhpcy5vdGhlclByb2R1Y3RzID0gW107XG4gIH1cblxuICBnZXRPZmZpY2lhbFByb2R1Y3RzKCkge1xuICAgIGlmICh0aGlzLm9mZmljaWFsUHJvZHVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLm9mZmljaWFsUHJvZHVjdHMpO1xuICAgIH1cblxuICAgIHRoaXMub2ZmaWNpYWxQcm9kdWN0cyA9IGRhdGFiYXNlLm9mZmljaWFsUHJvZHVjdHMubWFwKHggPT4gbmV3IFByb2R1Y3QoeCwgdGhpcykpO1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5vZmZpY2lhbFByb2R1Y3RzKTtcbiAgfVxuXG4gIGdldFR1dG9yaWFsc0ZvclByb2ZpbGUocHJvZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPZmZpY2lhbFByb2R1Y3RzKCkudGhlbihwcm9kdWN0cyA9PiB7XG4gICAgICBsZXQgdGVtcCA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBwcm9kdWN0cy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICAgIHRlbXAgPSBwcm9kdWN0c1tpXS5nZXRUdXRvcmlhbEZvclByb2ZpbGUocHJvZmlsZU5hbWUpLmNvbmNhdCh0ZW1wKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRlbXAuc29ydCgoYSwgYikgPT4gYS5nZXRPcmRlckZvclByb2ZpbGUocHJvZmlsZU5hbWUpIDwgYi5nZXRPcmRlckZvclByb2ZpbGUocHJvZmlsZU5hbWUpID8gLTEgOiAxKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb2R1Y3QodXNlck5hbWUsIHByb2R1Y3ROYW1lKSB7XG4gICAgbGV0IGZvdW5kID0gdGhpcy5vdGhlclByb2R1Y3RzLmZpbmQoeCA9PiB4LnVzZXJOYW1lID09PSB1c2VyTmFtZSAmJiB4LnByb2R1Y3ROYW1lID09PSBwcm9kdWN0TmFtZSk7XG4gICAgaWYgKGZvdW5kKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZvdW5kKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5nZXRPZmZpY2lhbFByb2R1Y3RzKCkudGhlbihvZmZpY2lhbFByb2R1Y3RzID0+IHtcbiAgICAgIGZvdW5kID0gb2ZmaWNpYWxQcm9kdWN0cy5maW5kKHggPT4geC51c2VyTmFtZSA9PT0gdXNlck5hbWUgJiYgeC5wcm9kdWN0TmFtZSA9PT0gcHJvZHVjdE5hbWUpO1xuXG4gICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIGZvdW5kID0gbmV3IFByb2R1Y3Qoe3VzZXJOYW1lOiB1c2VyTmFtZSwgcHJvZHVjdE5hbWU6IHByb2R1Y3ROYW1lLCBsYXRlc3RWZXJzaW9uOiAnbGF0ZXN0J30sIHRoaXMpO1xuICAgICAgICB0aGlzLm90aGVyUHJvZHVjdHMucHVzaChmb3VuZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3VuZDtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFByb2R1Y3RWZXJzaW9uKHByb2R1Y3QsIHZlcnNpb24pIHtcbiAgICBpZiAocHJvZHVjdC5pc0xvYWRlZCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvYWRQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbG9hZFByb2R1Y3REZXNjcmlwdGlvbih0aGlzLmNoYW5nZUxvZ1BhcnNlciwgcHJvZHVjdClcbiAgICAgIC50aGVuKHggPT4gdGhpcy5fbG9hZFByb2R1Y3RWZXJzaW9uKHByb2R1Y3QsIHZlcnNpb24pKTtcbiAgfVxuXG4gIGdldFRlc3RQcm9kdWN0VmVyc2lvbigpIHtcbiAgICBsZXQgcHJvZHVjdCA9IG5ldyBQcm9kdWN0KHtcbiAgICAgIHVzZXJOYW1lOiAndGVzdCcsXG4gICAgICBwcm9kdWN0TmFtZTogJ3Byb2R1Y3QnLFxuICAgICAgdHV0b3JpYWxzOiBbXVxuICAgIH0sIHRoaXMpO1xuXG4gICAgbGV0IHByb2R1Y3RWZXJzaW9uID0gbmV3IFByb2R1Y3RWZXJzaW9uKFxuICAgICAgcHJvZHVjdCxcbiAgICAgICdsb2NhbCcsXG4gICAgICB0aGlzLFxuICAgICAgdHJ1ZVxuICAgICk7XG5cbiAgICBwcm9kdWN0LnZlcnNpb25zLnB1c2gocHJvZHVjdFZlcnNpb24pO1xuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwcm9kdWN0VmVyc2lvbik7XG4gIH1cblxuICBsb2FkQXJ0aWNsZVRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKSB7XG4gICAgbGV0IGZvdW5kID0gdHJhbnNsYXRpb24ubG9jYWwgPyBudWxsIDogdGhpcy5jYWNoZS5nZXRJdGVtKHRyYW5zbGF0aW9uLnVybCk7XG4gICAgbGV0IGxvYWRlZCA9IGZvdW5kXG4gICAgICA/IFByb21pc2UucmVzb2x2ZShmb3VuZClcbiAgICAgIDogbmV3IEh0dHBDbGllbnQoKS5jcmVhdGVSZXF1ZXN0KHRyYW5zbGF0aW9uLnVybClcbiAgICAgICAgICAuYXNHZXQoKVxuICAgICAgICAgIC53aXRoUmVzcG9uc2VUeXBlKCd0ZXh0JylcbiAgICAgICAgICAuc2VuZCgpLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuY29udGVudClcbiAgICAgICAgICAuY2F0Y2goKCkgPT4gJycpXG4gICAgICAgICAgLnRoZW4oY29udGVudCA9PiB7XG4gICAgICAgICAgICBpZiAoIXRyYW5zbGF0aW9uLmxvY2FsKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2FjaGUuc2V0SXRlbSh0cmFuc2xhdGlvbi51cmwsIGNvbnRlbnQsIHRoaXMuY2FjaGUuZmFyRnV0dXJlKCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgICB9KTtcblxuICAgIHJldHVybiBsb2FkZWQudGhlbihjb250ZW50ID0+IHtcbiAgICAgIHRyYW5zbGF0aW9uLmNvbnRlbnQgPSBjb250ZW50O1xuXG4gICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgdHJhbnNsYXRpb24udW5hdmFpbGFibGUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJhbnNsYXRpb247XG4gICAgfSk7XG4gIH1cblxuICBfbG9hZFByb2R1Y3RWZXJzaW9uKHByb2R1Y3QsIHZlcnNpb24pIHtcbiAgICBpZiAodmVyc2lvbiA9PT0gJ2xhdGVzdCcpIHtcbiAgICAgIHZlcnNpb24gPSBwcm9kdWN0LmxhdGVzdFZlcnNpb247XG4gICAgfVxuXG4gICAgbGV0IHByb2R1Y3RWZXJzaW9uID0gbmV3IFByb2R1Y3RWZXJzaW9uKHByb2R1Y3QsIHZlcnNpb24sIHRoaXMpO1xuICAgIHByb2R1Y3QudmVyc2lvbnMucHVzaChwcm9kdWN0VmVyc2lvbik7XG5cbiAgICBsZXQgaHR0cCA9IG5ldyBIdHRwQ2xpZW50KCk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoW1xuICAgICAgaHR0cC5nZXQocHJvZHVjdFZlcnNpb24uYXBpVXJsKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24uY2hpbGRyZW4gPSByZXNwb25zZS5jb250ZW50LmNoaWxkcmVuO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5ncm91cHMgPSByZXNwb25zZS5jb250ZW50Lmdyb3VwcztcbiAgICAgICAgY2hlY2tGb3JDaGlsZHJlbihwcm9kdWN0VmVyc2lvbik7XG4gICAgICAgIGNoZWNrRm9yR3JvdXBzKHByb2R1Y3RWZXJzaW9uKTtcbiAgICAgIH0pLFxuICAgICAgaHR0cC5nZXQocHJvZHVjdFZlcnNpb24ucGFja2FnZVVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIGxldCBwYWNrID0gcmVzcG9uc2UuY29udGVudDtcblxuICAgICAgICBwcm9kdWN0VmVyc2lvbi5kZXNjcmlwdGlvbiA9IHBhY2suZGVzY3JpcHRpb247XG4gICAgICAgIHByb2R1Y3RWZXJzaW9uLmJ1Z3NVcmwgPSBwYWNrLmJ1Z3MudXJsO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5yZXBvc2l0b3J5VXJsID0gcGFjay5yZXBvc2l0b3J5LnVybDtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24uY2hhbmdlTG9nVXJsID0gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb2R1Y3QudXNlck5hbWV9LyR7cHJvZHVjdC5wcm9kdWN0TmFtZX0vYmxvYi9tYXN0ZXIvZG9jL0NIQU5HRUxPRy5tZGA7XG4gICAgICAgIHByb2R1Y3RWZXJzaW9uLmxpY2Vuc2VVcmwgPSBgaHR0cHM6Ly9naXRodWIuY29tLyR7cHJvZHVjdC51c2VyTmFtZX0vJHtwcm9kdWN0LnByb2R1Y3ROYW1lfS9ibG9iL21hc3Rlci9MSUNFTlNFYDtcblxuICAgICAgICBpZiAocGFjay5qc3BtICYmIHBhY2suanNwbS5kZXBlbmRlbmNpZXMpIHtcbiAgICAgICAgICBwcm9kdWN0VmVyc2lvbi5kZXBlbmRlbmNpZXMgPSBPYmplY3Qua2V5cyhwYWNrLmpzcG0uZGVwZW5kZW5jaWVzKVxuICAgICAgICAgICAgLmZpbHRlcih4ID0+IHguc3RhcnRzV2l0aCgnYXVyZWxpYS0nKSlcbiAgICAgICAgICAgIC5tYXAoeCA9PiB4LnJlcGxhY2UoJ2F1cmVsaWEtJywgJycpKVxuICAgICAgICAgICAgLm1hcCh4ID0+IHRoaXMub2ZmaWNpYWxQcm9kdWN0cy5maW5kKHkgPT4geS5wcm9kdWN0TmFtZSA9PT0geCkgfHwgdGhpcy5vdGhlclByb2R1Y3RzLmZpbmQoeSA9PiB5LnByb2R1Y3ROYW1lID09PSB4KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGFjay5hdXJlbGlhICYmIHBhY2suYXVyZWxpYS5kb2N1bWVudGF0aW9uKSB7XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24uYXJ0aWNsZXMgPSBwYWNrLmF1cmVsaWEuZG9jdW1lbnRhdGlvbi5hcnRpY2xlcyB8fCBbXTtcbiAgICAgICAgICBwcm9kdWN0VmVyc2lvbi5hcnRpY2xlcyA9IHByb2R1Y3RWZXJzaW9uLmFydGljbGVzLm1hcCh4ID0+IG5ldyBBcnRpY2xlKHgsIHByb2R1Y3RWZXJzaW9uLCB0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBwYWNrLmtleXdvcmRzLmZvckVhY2goa2V5d29yZCA9PiB7XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24ua2V5d29yZHMucHVzaChrZXl3b3JkKTtcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgIF0pLnRoZW4oKCkgPT4gcHJvZHVjdFZlcnNpb24pO1xuICB9XG5cbiAgX2xvYWRQcm9kdWN0RGVzY3JpcHRpb24oY2hhbmdlTG9nUGFyc2VyLCBwcm9kdWN0KSB7XG4gICAgbGV0IHRhZ0xpc3QgPSBgaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS9yZXBvcy8ke3Byb2R1Y3QudXNlck5hbWV9LyR7cHJvZHVjdC5wcm9kdWN0TmFtZX0vdGFnc2A7XG4gICAgbGV0IGNvbnRlbnQgPSB0aGlzLmNhY2hlLmdldEl0ZW0odGFnTGlzdCk7XG4gICAgbGV0IGxvYWRlZDtcblxuICAgIGlmIChjb250ZW50KSB7XG4gICAgICBsb2FkZWQgPSBQcm9taXNlLnJlc29sdmUoY29udGVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvYWRlZCA9IG5ldyBIdHRwQ2xpZW50KClcbiAgICAgICAgLmNyZWF0ZVJlcXVlc3QodGFnTGlzdClcbiAgICAgICAgLmFzR2V0KClcbiAgICAgICAgLnNlbmQoKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB0aGlzLmNhY2hlLnNldEl0ZW0odGFnTGlzdCwgcmVzcG9uc2UuY29udGVudCkpO1xuICAgIH1cblxuICAgIHJldHVybiBsb2FkZWQudGhlbihfY29udGVudCA9PiB7XG4gICAgICBwcm9kdWN0LmF2YWlsYWJsZVZlcnNpb25zID0gdGhpcy5fZ2V0VmVyc2lvbnMoX2NvbnRlbnQubWFwKHggPT4geC5uYW1lKSk7XG4gICAgICBwcm9kdWN0LmNvbmZpZ3VyZUxhdGVzdFZlcnNpb24oKTtcbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHByb2R1Y3QuaXNMb2FkZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIHByb2R1Y3Q7XG4gICAgfSk7XG4gIH1cblxuICBfZ2V0VmVyc2lvbnMoYWxsKSB7XG4gICAgbGV0IGxvb2t1cCA9IHt9O1xuXG4gICAgcmV0dXJuIGFsbC5tYXAoeCA9PiB7XG4gICAgICBsZXQgZGl2aXNpb25zID0geC5zcGxpdCgnLScpO1xuICAgICAgbGV0IFttYWpvciwgbWlub3IsIHBhdGNoXSA9IGRpdmlzaW9uc1swXS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHByZSA9IGRpdmlzaW9uc1sxXSB8fCAnJztcbiAgICAgIGxldCBwcmVQYXJ0cyA9IHByZS5zcGxpdCgnLicpO1xuICAgICAgbGV0IHZlcnNpb24gPSBwcmVcbiAgICAgICAgPyBtYWpvciArICcuJyArIG1pbm9yICsgJy4nICsgcGF0Y2ggKyAnLScgKyBwcmVcbiAgICAgICAgOiBtYWpvciArICcuJyArIG1pbm9yICsgJy4nICsgcGF0Y2g7XG4gICAgICBsZXQgZGlzcGxheSA9IHByZVxuICAgICAgICA/IG1ham9yICsgJy4nICsgbWlub3IgKyAnLicgKyBwYXRjaCArICctJyArIHByZVBhcnRzWzBdICsgJy4nICsgcHJlUGFydHNbMV1cbiAgICAgICAgOiBtYWpvciArICcuJyArIG1pbm9yICsgJy54JztcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWFqb3I6IHBhcnNlSW50KG1ham9yLCAxMCksXG4gICAgICAgIG1pbm9yOiBwYXJzZUludChtaW5vciwgMTApLFxuICAgICAgICBwYXRjaDogcGF0Y2gsXG4gICAgICAgIHByZTogcHJlLFxuICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uLFxuICAgICAgICBkaXNwbGF5OiBkaXNwbGF5XG4gICAgICB9O1xuICAgIH0pXG4gICAgLmZpbHRlcih4ID0+IHgubWFqb3IgPiAwKVxuICAgIC5maWx0ZXIoeCA9PiB7XG4gICAgICByZXR1cm4gIWxvb2t1cFt4LmRpc3BsYXldICYmIChsb29rdXBbeC5kaXNwbGF5XSA9IHRydWUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yQ2hpbGRyZW4ob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLmNoaWxkcmVuKSB7XG4gICAgb2JqLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgbGV0IG5ld0NoaWxkID0gY2FzdE9iamVjdEFzVHlwZShjaGlsZCwgb2JqKTtcbiAgICAgIGNoZWNrRm9yQ2hpbGRyZW4obmV3Q2hpbGQpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yR3JvdXBzKG9iaikge1xuICBpZiAob2JqICYmIG9iai5ncm91cHMpIHtcbiAgICBvYmouZ3JvdXBzLmZvckVhY2goZ3JvdXAgPT4ge1xuICAgICAgZ3JvdXAua2luZE5hbWUgPSBncm91cC5raW5kLm5hbWU7XG4gICAgICBvYmouZ3JvdXBzLnB1c2gobmV3IEdyb3VwTW9kZWwoZ3JvdXApKTtcbiAgICAgIGNoZWNrRm9yR3JvdXBzKGdyb3VwKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBGaW5kcyB0aGUgdHlwZSBhbmQgY2FzdHMgdGhlIG9iamVjdCBhcyBpdCBzbyB3ZSBjYW4gcmVjdXJzaXZlbHkgc2VhcmNoIG9iamVjdHNcbmZ1bmN0aW9uIGNhc3RPYmplY3RBc1R5cGUob2JqLCBwYXJlbnQpIHtcbiAgbGV0IHR5cGUgPSBvYmoua2luZFN0cmluZztcbiAgbGV0IHRoaXNPYmplY3Q7XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gIGNhc2UgJ0NsYXNzJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IENsYXNzTW9kZWwob2JqKTtcbiAgICBwYXJlbnQuY2xhc3Nlcy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdDb25zdHJ1Y3Rvcic6XG4gICAgdGhpc09iamVjdCA9IG5ldyBDb25zdHJ1Y3Rvck1vZGVsKG9iaik7XG4gICAgdGhpc09iamVjdC5zaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlTW9kZWwodGhpc09iamVjdC5zaWduYXR1cmVzWzBdKTtcbiAgICBwYXJlbnQuY29uc3RydWN0b3JNZXRob2QgPSB0aGlzT2JqZWN0O1xuICAgIGJyZWFrO1xuICBjYXNlICdNZXRob2QnOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgTWV0aG9kTW9kZWwob2JqKTtcbiAgICB0aGlzT2JqZWN0LnNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmVNb2RlbCh0aGlzT2JqZWN0LnNpZ25hdHVyZXNbMF0pO1xuICAgIHBhcmVudC5tZXRob2RzLnB1c2godGhpc09iamVjdCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ0ludGVyZmFjZSc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBJbnRlcmZhY2VNb2RlbChvYmopO1xuICAgIHBhcmVudC5pbnRlcmZhY2VzLnB1c2godGhpc09iamVjdCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ1Byb3BlcnR5JzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IFByb3BlcnR5TW9kZWwob2JqKTtcbiAgICBwYXJlbnQucHJvcGVydGllcy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdWYXJpYWJsZSc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBWYXJpYWJsZU1vZGVsKG9iaik7XG4gICAgcGFyZW50LnZhcmlhYmxlcy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdTaWduYXR1cmUnOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgU2lnbmF0dXJlTW9kZWwob2JqKTtcbiAgICBwYXJlbnQuc2lnbmF0dXJlLnB1c2godGhpc09iamVjdCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ0Z1bmN0aW9uJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IEZ1bmN0aW9uTW9kZWwob2JqKTtcbiAgICBwYXJlbnQuZnVuY3Rpb25zLnB1c2godGhpc09iamVjdCk7XG4gICAgYnJlYWs7XG4gIGRlZmF1bHQ6XG4gIC8vIERvIG5vdGhpbmdcbiAgfVxuXG4gIHJldHVybiB0aGlzT2JqZWN0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
