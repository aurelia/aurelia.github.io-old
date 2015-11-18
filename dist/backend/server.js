System.register(['./database', 'aurelia-http-client', 'services/cache', 'aurelia-framework', './model'], function (_export) {
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
    }, function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
//# sourceMappingURL=data:application/json;base64,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Q0FBQzthQUFBLENBQUMsQ0FDeEIsTUFBTSxDQUFDLFVBQUEsQ0FBQyxFQUFJO0FBQ1gscUJBQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFBLEFBQUMsQ0FBQzthQUN6RCxDQUFDLENBQUM7V0FDSjs7O3NCQXZNVSxNQUFNO0FBQU4sY0FBTSxHQURsQixNQUFNLENBQUMsS0FBSyxDQUFDLENBQ0QsTUFBTSxLQUFOLE1BQU07ZUFBTixNQUFNIiwiZmlsZSI6ImJhY2tlbmQvc2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtkYXRhYmFzZX0gZnJvbSAnLi9kYXRhYmFzZSc7XG5pbXBvcnQge0h0dHBDbGllbnR9IGZyb20gJ2F1cmVsaWEtaHR0cC1jbGllbnQnO1xuaW1wb3J0IHtDYWNoZX0gZnJvbSAnc2VydmljZXMvY2FjaGUnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7XG4gIFByb2R1Y3QsXG4gIFByb2R1Y3RWZXJzaW9uLFxuICBBcnRpY2xlLFxuICBHcm91cE1vZGVsLFxuICBDbGFzc01vZGVsLFxuICBDb25zdHJ1Y3Rvck1vZGVsLFxuICBNZXRob2RNb2RlbCxcbiAgSW50ZXJmYWNlTW9kZWwsXG4gIFByb3BlcnR5TW9kZWwsXG4gIFZhcmlhYmxlTW9kZWwsXG4gIFNpZ25hdHVyZU1vZGVsLFxuICBGdW5jdGlvbk1vZGVsXG59IGZyb20gJy4vbW9kZWwnO1xuXG5AaW5qZWN0KENhY2hlKVxuZXhwb3J0IGNsYXNzIFNlcnZlciB7XG4gIGNvbnN0cnVjdG9yKGNhY2hlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgIHRoaXMub2ZmaWNpYWxQcm9kdWN0cyA9IFtdO1xuICAgIHRoaXMub3RoZXJQcm9kdWN0cyA9IFtdO1xuICB9XG5cbiAgZ2V0T2ZmaWNpYWxQcm9kdWN0cygpIHtcbiAgICBpZiAodGhpcy5vZmZpY2lhbFByb2R1Y3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5vZmZpY2lhbFByb2R1Y3RzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9mZmljaWFsUHJvZHVjdHMgPSBkYXRhYmFzZS5vZmZpY2lhbFByb2R1Y3RzLm1hcCh4ID0+IG5ldyBQcm9kdWN0KHgsIHRoaXMpKTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMub2ZmaWNpYWxQcm9kdWN0cyk7XG4gIH1cblxuICBnZXRUdXRvcmlhbHNGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0T2ZmaWNpYWxQcm9kdWN0cygpLnRoZW4ocHJvZHVjdHMgPT4ge1xuICAgICAgbGV0IHRlbXAgPSBbXTtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGlpID0gcHJvZHVjdHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICB0ZW1wID0gcHJvZHVjdHNbaV0uZ2V0VHV0b3JpYWxGb3JQcm9maWxlKHByb2ZpbGVOYW1lKS5jb25jYXQodGVtcCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZW1wLnNvcnQoKGEsIGIpID0+IGEuZ2V0T3JkZXJGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSA8IGIuZ2V0T3JkZXJGb3JQcm9maWxlKHByb2ZpbGVOYW1lKSA/IC0xIDogMSk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0KHVzZXJOYW1lLCBwcm9kdWN0TmFtZSkge1xuICAgIGxldCBmb3VuZCA9IHRoaXMub3RoZXJQcm9kdWN0cy5maW5kKHggPT4geC51c2VyTmFtZSA9PT0gdXNlck5hbWUgJiYgeC5wcm9kdWN0TmFtZSA9PT0gcHJvZHVjdE5hbWUpO1xuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmb3VuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuZ2V0T2ZmaWNpYWxQcm9kdWN0cygpLnRoZW4ob2ZmaWNpYWxQcm9kdWN0cyA9PiB7XG4gICAgICBmb3VuZCA9IG9mZmljaWFsUHJvZHVjdHMuZmluZCh4ID0+IHgudXNlck5hbWUgPT09IHVzZXJOYW1lICYmIHgucHJvZHVjdE5hbWUgPT09IHByb2R1Y3ROYW1lKTtcblxuICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICBmb3VuZCA9IG5ldyBQcm9kdWN0KHt1c2VyTmFtZTogdXNlck5hbWUsIHByb2R1Y3ROYW1lOiBwcm9kdWN0TmFtZSwgbGF0ZXN0VmVyc2lvbjogJ2xhdGVzdCd9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5vdGhlclByb2R1Y3RzLnB1c2goZm91bmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm91bmQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXRQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uKSB7XG4gICAgaWYgKHByb2R1Y3QuaXNMb2FkZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2FkUHJvZHVjdFZlcnNpb24ocHJvZHVjdCwgdmVyc2lvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRQcm9kdWN0RGVzY3JpcHRpb24odGhpcy5jaGFuZ2VMb2dQYXJzZXIsIHByb2R1Y3QpXG4gICAgICAudGhlbih4ID0+IHRoaXMuX2xvYWRQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uKSk7XG4gIH1cblxuICBnZXRUZXN0UHJvZHVjdFZlcnNpb24oKSB7XG4gICAgbGV0IHByb2R1Y3QgPSBuZXcgUHJvZHVjdCh7XG4gICAgICB1c2VyTmFtZTogJ3Rlc3QnLFxuICAgICAgcHJvZHVjdE5hbWU6ICdwcm9kdWN0JyxcbiAgICAgIHR1dG9yaWFsczogW11cbiAgICB9LCB0aGlzKTtcblxuICAgIGxldCBwcm9kdWN0VmVyc2lvbiA9IG5ldyBQcm9kdWN0VmVyc2lvbihcbiAgICAgIHByb2R1Y3QsXG4gICAgICAnbG9jYWwnLFxuICAgICAgdGhpcyxcbiAgICAgIHRydWVcbiAgICApO1xuXG4gICAgcHJvZHVjdC52ZXJzaW9ucy5wdXNoKHByb2R1Y3RWZXJzaW9uKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocHJvZHVjdFZlcnNpb24pO1xuICB9XG5cbiAgbG9hZEFydGljbGVUcmFuc2xhdGlvbih0cmFuc2xhdGlvbikge1xuICAgIGxldCBmb3VuZCA9IHRyYW5zbGF0aW9uLmxvY2FsID8gbnVsbCA6IHRoaXMuY2FjaGUuZ2V0SXRlbSh0cmFuc2xhdGlvbi51cmwpO1xuICAgIGxldCBsb2FkZWQgPSBmb3VuZFxuICAgICAgPyBQcm9taXNlLnJlc29sdmUoZm91bmQpXG4gICAgICA6IG5ldyBIdHRwQ2xpZW50KCkuY3JlYXRlUmVxdWVzdCh0cmFuc2xhdGlvbi51cmwpXG4gICAgICAgICAgLmFzR2V0KClcbiAgICAgICAgICAud2l0aFJlc3BvbnNlVHlwZSgndGV4dCcpXG4gICAgICAgICAgLnNlbmQoKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmNvbnRlbnQpXG4gICAgICAgICAgLmNhdGNoKCgpID0+ICcnKVxuICAgICAgICAgIC50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKCF0cmFuc2xhdGlvbi5sb2NhbCkge1xuICAgICAgICAgICAgICB0aGlzLmNhY2hlLnNldEl0ZW0odHJhbnNsYXRpb24udXJsLCBjb250ZW50LCB0aGlzLmNhY2hlLmZhckZ1dHVyZSgpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gbG9hZGVkLnRoZW4oY29udGVudCA9PiB7XG4gICAgICB0cmFuc2xhdGlvbi5jb250ZW50ID0gY29udGVudDtcblxuICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHRyYW5zbGF0aW9uLnVuYXZhaWxhYmxlID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRyYW5zbGF0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgX2xvYWRQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uKSB7XG4gICAgaWYgKHZlcnNpb24gPT09ICdsYXRlc3QnKSB7XG4gICAgICB2ZXJzaW9uID0gcHJvZHVjdC5sYXRlc3RWZXJzaW9uO1xuICAgIH1cblxuICAgIGxldCBwcm9kdWN0VmVyc2lvbiA9IG5ldyBQcm9kdWN0VmVyc2lvbihwcm9kdWN0LCB2ZXJzaW9uLCB0aGlzKTtcbiAgICBwcm9kdWN0LnZlcnNpb25zLnB1c2gocHJvZHVjdFZlcnNpb24pO1xuXG4gICAgbGV0IGh0dHAgPSBuZXcgSHR0cENsaWVudCgpO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIGh0dHAuZ2V0KHByb2R1Y3RWZXJzaW9uLmFwaVVybCkudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIHByb2R1Y3RWZXJzaW9uLmNoaWxkcmVuID0gcmVzcG9uc2UuY29udGVudC5jaGlsZHJlbjtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24uZ3JvdXBzID0gcmVzcG9uc2UuY29udGVudC5ncm91cHM7XG4gICAgICAgIGNoZWNrRm9yQ2hpbGRyZW4ocHJvZHVjdFZlcnNpb24pO1xuICAgICAgICBjaGVja0Zvckdyb3Vwcyhwcm9kdWN0VmVyc2lvbik7XG4gICAgICB9KSxcbiAgICAgIGh0dHAuZ2V0KHByb2R1Y3RWZXJzaW9uLnBhY2thZ2VVcmwpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBsZXQgcGFjayA9IHJlc3BvbnNlLmNvbnRlbnQ7XG5cbiAgICAgICAgcHJvZHVjdFZlcnNpb24uZGVzY3JpcHRpb24gPSBwYWNrLmRlc2NyaXB0aW9uO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5idWdzVXJsID0gcGFjay5idWdzLnVybDtcbiAgICAgICAgcHJvZHVjdFZlcnNpb24ucmVwb3NpdG9yeVVybCA9IHBhY2sucmVwb3NpdG9yeS51cmw7XG4gICAgICAgIHByb2R1Y3RWZXJzaW9uLmNoYW5nZUxvZ1VybCA9IGBodHRwczovL2dpdGh1Yi5jb20vJHtwcm9kdWN0LnVzZXJOYW1lfS8ke3Byb2R1Y3QucHJvZHVjdE5hbWV9L2Jsb2IvbWFzdGVyL2RvYy9DSEFOR0VMT0cubWRgO1xuICAgICAgICBwcm9kdWN0VmVyc2lvbi5saWNlbnNlVXJsID0gYGh0dHBzOi8vZ2l0aHViLmNvbS8ke3Byb2R1Y3QudXNlck5hbWV9LyR7cHJvZHVjdC5wcm9kdWN0TmFtZX0vYmxvYi9tYXN0ZXIvTElDRU5TRWA7XG5cbiAgICAgICAgaWYgKHBhY2suanNwbSAmJiBwYWNrLmpzcG0uZGVwZW5kZW5jaWVzKSB7XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24uZGVwZW5kZW5jaWVzID0gT2JqZWN0LmtleXMocGFjay5qc3BtLmRlcGVuZGVuY2llcylcbiAgICAgICAgICAgIC5maWx0ZXIoeCA9PiB4LnN0YXJ0c1dpdGgoJ2F1cmVsaWEtJykpXG4gICAgICAgICAgICAubWFwKHggPT4geC5yZXBsYWNlKCdhdXJlbGlhLScsICcnKSlcbiAgICAgICAgICAgIC5tYXAoeCA9PiB0aGlzLm9mZmljaWFsUHJvZHVjdHMuZmluZCh5ID0+IHkucHJvZHVjdE5hbWUgPT09IHgpIHx8IHRoaXMub3RoZXJQcm9kdWN0cy5maW5kKHkgPT4geS5wcm9kdWN0TmFtZSA9PT0geCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhY2suYXVyZWxpYSAmJiBwYWNrLmF1cmVsaWEuZG9jdW1lbnRhdGlvbikge1xuICAgICAgICAgIHByb2R1Y3RWZXJzaW9uLmFydGljbGVzID0gcGFjay5hdXJlbGlhLmRvY3VtZW50YXRpb24uYXJ0aWNsZXMgfHwgW107XG4gICAgICAgICAgcHJvZHVjdFZlcnNpb24uYXJ0aWNsZXMgPSBwcm9kdWN0VmVyc2lvbi5hcnRpY2xlcy5tYXAoeCA9PiBuZXcgQXJ0aWNsZSh4LCBwcm9kdWN0VmVyc2lvbiwgdGhpcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFjay5rZXl3b3Jkcy5mb3JFYWNoKGtleXdvcmQgPT4ge1xuICAgICAgICAgIHByb2R1Y3RWZXJzaW9uLmtleXdvcmRzLnB1c2goa2V5d29yZCk7XG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgICBdKS50aGVuKCgpID0+IHByb2R1Y3RWZXJzaW9uKTtcbiAgfVxuXG4gIF9sb2FkUHJvZHVjdERlc2NyaXB0aW9uKGNoYW5nZUxvZ1BhcnNlciwgcHJvZHVjdCkge1xuICAgIGxldCB0YWdMaXN0ID0gYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vcmVwb3MvJHtwcm9kdWN0LnVzZXJOYW1lfS8ke3Byb2R1Y3QucHJvZHVjdE5hbWV9L3RhZ3NgO1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5jYWNoZS5nZXRJdGVtKHRhZ0xpc3QpO1xuICAgIGxldCBsb2FkZWQ7XG5cbiAgICBpZiAoY29udGVudCkge1xuICAgICAgbG9hZGVkID0gUHJvbWlzZS5yZXNvbHZlKGNvbnRlbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2FkZWQgPSBuZXcgSHR0cENsaWVudCgpXG4gICAgICAgIC5jcmVhdGVSZXF1ZXN0KHRhZ0xpc3QpXG4gICAgICAgIC5hc0dldCgpXG4gICAgICAgIC5zZW5kKClcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gdGhpcy5jYWNoZS5zZXRJdGVtKHRhZ0xpc3QsIHJlc3BvbnNlLmNvbnRlbnQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbG9hZGVkLnRoZW4oX2NvbnRlbnQgPT4ge1xuICAgICAgcHJvZHVjdC5hdmFpbGFibGVWZXJzaW9ucyA9IHRoaXMuX2dldFZlcnNpb25zKF9jb250ZW50Lm1hcCh4ID0+IHgubmFtZSkpO1xuICAgICAgcHJvZHVjdC5jb25maWd1cmVMYXRlc3RWZXJzaW9uKCk7XG4gICAgfSkudGhlbigoKSA9PiB7XG4gICAgICBwcm9kdWN0LmlzTG9hZGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBwcm9kdWN0O1xuICAgIH0pO1xuICB9XG5cbiAgX2dldFZlcnNpb25zKGFsbCkge1xuICAgIGxldCBsb29rdXAgPSB7fTtcblxuICAgIHJldHVybiBhbGwubWFwKHggPT4ge1xuICAgICAgbGV0IGRpdmlzaW9ucyA9IHguc3BsaXQoJy0nKTtcbiAgICAgIGxldCBbbWFqb3IsIG1pbm9yLCBwYXRjaF0gPSBkaXZpc2lvbnNbMF0uc3BsaXQoJy4nKTtcbiAgICAgIGxldCBwcmUgPSBkaXZpc2lvbnNbMV0gfHwgJyc7XG4gICAgICBsZXQgcHJlUGFydHMgPSBwcmUuc3BsaXQoJy4nKTtcbiAgICAgIGxldCB2ZXJzaW9uID0gcHJlXG4gICAgICAgID8gbWFqb3IgKyAnLicgKyBtaW5vciArICcuJyArIHBhdGNoICsgJy0nICsgcHJlXG4gICAgICAgIDogbWFqb3IgKyAnLicgKyBtaW5vciArICcuJyArIHBhdGNoO1xuICAgICAgbGV0IGRpc3BsYXkgPSBwcmVcbiAgICAgICAgPyBtYWpvciArICcuJyArIG1pbm9yICsgJy4nICsgcGF0Y2ggKyAnLScgKyBwcmVQYXJ0c1swXSArICcuJyArIHByZVBhcnRzWzFdXG4gICAgICAgIDogbWFqb3IgKyAnLicgKyBtaW5vciArICcueCc7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1ham9yOiBwYXJzZUludChtYWpvciwgMTApLFxuICAgICAgICBtaW5vcjogcGFyc2VJbnQobWlub3IsIDEwKSxcbiAgICAgICAgcGF0Y2g6IHBhdGNoLFxuICAgICAgICBwcmU6IHByZSxcbiAgICAgICAgdmVyc2lvbjogdmVyc2lvbixcbiAgICAgICAgZGlzcGxheTogZGlzcGxheVxuICAgICAgfTtcbiAgICB9KVxuICAgIC5maWx0ZXIoeCA9PiB4Lm1ham9yID4gMClcbiAgICAuZmlsdGVyKHggPT4ge1xuICAgICAgcmV0dXJuICFsb29rdXBbeC5kaXNwbGF5XSAmJiAobG9va3VwW3guZGlzcGxheV0gPSB0cnVlKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0ZvckNoaWxkcmVuKG9iaikge1xuICBpZiAob2JqICYmIG9iai5jaGlsZHJlbikge1xuICAgIG9iai5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgIGxldCBuZXdDaGlsZCA9IGNhc3RPYmplY3RBc1R5cGUoY2hpbGQsIG9iaik7XG4gICAgICBjaGVja0ZvckNoaWxkcmVuKG5ld0NoaWxkKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0Zvckdyb3VwcyhvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouZ3JvdXBzKSB7XG4gICAgb2JqLmdyb3Vwcy5mb3JFYWNoKGdyb3VwID0+IHtcbiAgICAgIGdyb3VwLmtpbmROYW1lID0gZ3JvdXAua2luZC5uYW1lO1xuICAgICAgb2JqLmdyb3Vwcy5wdXNoKG5ldyBHcm91cE1vZGVsKGdyb3VwKSk7XG4gICAgICBjaGVja0Zvckdyb3Vwcyhncm91cCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gRmluZHMgdGhlIHR5cGUgYW5kIGNhc3RzIHRoZSBvYmplY3QgYXMgaXQgc28gd2UgY2FuIHJlY3Vyc2l2ZWx5IHNlYXJjaCBvYmplY3RzXG5mdW5jdGlvbiBjYXN0T2JqZWN0QXNUeXBlKG9iaiwgcGFyZW50KSB7XG4gIGxldCB0eXBlID0gb2JqLmtpbmRTdHJpbmc7XG4gIGxldCB0aGlzT2JqZWN0O1xuXG4gIHN3aXRjaCAodHlwZSkge1xuICBjYXNlICdDbGFzcyc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBDbGFzc01vZGVsKG9iaik7XG4gICAgcGFyZW50LmNsYXNzZXMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnQ29uc3RydWN0b3InOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgQ29uc3RydWN0b3JNb2RlbChvYmopO1xuICAgIHRoaXNPYmplY3Quc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZU1vZGVsKHRoaXNPYmplY3Quc2lnbmF0dXJlc1swXSk7XG4gICAgcGFyZW50LmNvbnN0cnVjdG9yTWV0aG9kID0gdGhpc09iamVjdDtcbiAgICBicmVhaztcbiAgY2FzZSAnTWV0aG9kJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IE1ldGhvZE1vZGVsKG9iaik7XG4gICAgdGhpc09iamVjdC5zaWduYXR1cmUgPSBuZXcgU2lnbmF0dXJlTW9kZWwodGhpc09iamVjdC5zaWduYXR1cmVzWzBdKTtcbiAgICBwYXJlbnQubWV0aG9kcy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdJbnRlcmZhY2UnOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgSW50ZXJmYWNlTW9kZWwob2JqKTtcbiAgICBwYXJlbnQuaW50ZXJmYWNlcy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdQcm9wZXJ0eSc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBQcm9wZXJ0eU1vZGVsKG9iaik7XG4gICAgcGFyZW50LnByb3BlcnRpZXMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnVmFyaWFibGUnOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgVmFyaWFibGVNb2RlbChvYmopO1xuICAgIHBhcmVudC52YXJpYWJsZXMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnU2lnbmF0dXJlJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IFNpZ25hdHVyZU1vZGVsKG9iaik7XG4gICAgcGFyZW50LnNpZ25hdHVyZS5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBjYXNlICdGdW5jdGlvbic6XG4gICAgdGhpc09iamVjdCA9IG5ldyBGdW5jdGlvbk1vZGVsKG9iaik7XG4gICAgcGFyZW50LmZ1bmN0aW9ucy5wdXNoKHRoaXNPYmplY3QpO1xuICAgIGJyZWFrO1xuICBkZWZhdWx0OlxuICAvLyBEbyBub3RoaW5nXG4gIH1cblxuICByZXR1cm4gdGhpc09iamVjdDtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
