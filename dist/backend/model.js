System.register(['aurelia-path', 'aurelia-pal', 'aurelia-framework', 'aurelia-loader', './html-parser'], function (_export) {
  'use strict';

  var join, DOM, FEATURE, viewStrategy, TemplateRegistryEntry, HTMLParser, baseTranslation, Product, ProductVersion, ArticleTranslationViewStrategy, Article, tagsFromSource, ArticleTranslation, Tutorial, ChildModel, GroupModel, ClassModel, MethodModel, ConstructorModel, InterfaceModel, PropertyModel, SignatureModel, VariableModel, FunctionModel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function prettyName(s) {
    s = s.replace(/(\-\w)/g, function (m) {
      return m[1].toUpperCase();
    });
    s = s.replace(/([a-z])([A-Z])/g, '$1 $2');
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return {
    setters: [function (_aureliaPath) {
      join = _aureliaPath.join;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      FEATURE = _aureliaPal.FEATURE;
    }, function (_aureliaFramework) {
      viewStrategy = _aureliaFramework.viewStrategy;
    }, function (_aureliaLoader) {
      TemplateRegistryEntry = _aureliaLoader.TemplateRegistryEntry;
    }, function (_htmlParser) {
      HTMLParser = _htmlParser.HTMLParser;
    }],
    execute: function () {
      baseTranslation = 'en-US';

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

          this.classes = [];
          this.interfaces = [];
          this.properties = [];
          this.variables = [];
          this.events = [];
          this.methods = [];
          this.functions = [];
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
          key: 'findClass',
          value: function findClass(className) {
            return this.classes.find(function (x) {
              return x.name === className;
            });
          }
        }, {
          key: 'findInterface',
          value: function findInterface(interfaceName) {
            return this.interfaces.find(function (x) {
              return x.name === interfaceName;
            });
          }
        }, {
          key: 'getArticle',
          value: function getArticle(slug, culture) {
            var found = undefined;

            if (this.local) {
              found = new Article({ title: 'Local Article', href: slug }, this, this.server, true);
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

      ArticleTranslationViewStrategy = (function () {
        function ArticleTranslationViewStrategy(articleTranslation) {
          _classCallCheck(this, _ArticleTranslationViewStrategy);

          this.articleTranslation = articleTranslation;
        }

        _createClass(ArticleTranslationViewStrategy, [{
          key: 'loadViewFactory',
          value: function loadViewFactory(viewEngine, compileInstruction, loadContext) {
            if (this.entry) {
              return Promise.resolve(this.entry.factory);
            }

            this.entry = new TemplateRegistryEntry(this.articleTranslation.url);
            this.entry.template = this.articleTranslation.template;
            return viewEngine.loadViewFactory(this.entry, compileInstruction, loadContext);
          }
        }]);

        var _ArticleTranslationViewStrategy = ArticleTranslationViewStrategy;
        ArticleTranslationViewStrategy = viewStrategy(ArticleTranslationViewStrategy) || ArticleTranslationViewStrategy;
        return ArticleTranslationViewStrategy;
      })();

      Article = (function () {
        function Article(attrs, productVersion, server, local) {
          _classCallCheck(this, Article);

          this.title = attrs.title;
          this.productVersion = productVersion;
          this.server = server;
          this.baseUrl = productVersion.baseUrl;
          this.href = attrs.href;
          this.primaryUrl = join(this.baseUrl, attrs.href);
          this.slug = this.primaryUrl.substring(this.primaryUrl.lastIndexOf('/') + 1).replace('.html', '');
          this.translations = {};
          this.local = !!local;
        }

        _createClass(Article, [{
          key: 'getTranslation',
          value: function getTranslation(culture, local) {
            var _this3 = this;

            if (culture in this.translations) {
              return Promise.resolve(this.translations[culture]);
            }

            if (baseTranslation in this.translations) {
              return this._loadTranslation(culture);
            }

            return this._loadTranslation(baseTranslation).then(function () {
              return _this3.getTranslation(culture);
            });
          }
        }, {
          key: '_loadTranslation',
          value: function _loadTranslation(culture) {
            var _this4 = this;

            var translation = new ArticleTranslation(this, culture, this.local);
            this.translations[culture] = translation;

            return this.server.loadArticleTranslation(translation).then(function (_translation) {
              if (_translation.unavailable) {
                _translation.subsume(_this4.translations[baseTranslation]);
                _translation.view = new ArticleTranslationViewStrategy(_translation);
              } else {
                _translation.prepare(_this4.translations[baseTranslation]);
                _translation.view = new ArticleTranslationViewStrategy(_translation);
              }

              return _translation;
            });
          }
        }]);

        return Article;
      })();

      _export('Article', Article);

      tagsFromSource = ['EXAMPLE', 'DEMO'];

      ArticleTranslation = (function () {
        function ArticleTranslation(article, culture, local) {
          _classCallCheck(this, ArticleTranslation);

          this.culture = culture;

          if (local) {
            this.local = true;
            this.url = 'doc/article/' + baseTranslation + '/' + article.href + '.html';
          } else {
            this.url = article.primaryUrl;
          }

          if (culture !== baseTranslation) {
            this.url = this.url.replace(baseTranslation, culture);
          }
        }

        _createClass(ArticleTranslation, [{
          key: 'subsume',
          value: function subsume(other) {
            this.title = other.title;
            this.author = other.author;
            this.description = other.description;
            this.keywords = other.keywords;
            this.template = DOM.createTemplateFromMarkup('<template>' + other.originalTemplate.content.innerHTML + '</template>');

            var originalContent = other.originalTemplate.content;
            var template = FEATURE.ensureHTMLTemplateElement(DOM.createElement('template'));
            var current = originalContent.firstChild;

            while (current) {
              template.content.appendChild(current.cloneNode(true));
              current = current.nextSibling;
            }

            this.template = template;
          }
        }, {
          key: 'prepare',
          value: function prepare(primaryTranslation) {
            var content = '';
            var needsEncoding = false;

            HTMLParser(this.content, {
              start: function start(tag, attrs, unary) {
                content += "<" + tag;

                for (var i = 0; i < attrs.length; i++) {
                  content += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
                }

                content += ">";

                if (tag === 'source-code' || tag === 'narrative') {
                  needsEncoding = true;
                }
              },
              end: function end(tag) {
                if (tag === 'source-code' || tag === 'narrative') {
                  needsEncoding = false;
                }

                content += "</" + tag + ">";
              },
              chars: function chars(text) {
                if (needsEncoding) {
                  text = escape(text);
                }

                content += text;
              },
              comment: function comment(text) {
                content += "<!--" + text + "-->";
              }
            });

            var parser = new DOMParser();
            var doc = parser.parseFromString(content, 'text/html');
            var docChild = doc.firstChild;

            while (docChild) {
              if (docChild.tagName === 'HTML') {
                var htmlChild = docChild.firstChild;

                while (htmlChild) {
                  if (htmlChild.nodeType === 1) {
                    switch (htmlChild.tagName) {
                      case 'HEAD':
                        this._handleHEAD(htmlChild);
                        break;
                      case 'BODY':
                        this._handleBODY(htmlChild, primaryTranslation);
                        break;
                      default:
                    }
                  }

                  htmlChild = htmlChild.nextSibling;
                }
              }

              docChild = docChild.nextSibling;
            }
          }
        }, {
          key: '_handleHEAD',
          value: function _handleHEAD(node) {
            var currentChild = node.firstChild;

            while (currentChild) {
              if (currentChild.nodeType === 1) {
                switch (currentChild.tagName) {
                  case 'TITLE':
                    this.title = currentChild.innerHTML;
                    break;
                  case 'META':
                    switch (currentChild.getAttribute('name')) {
                      case 'description':
                        this.description = currentChild.getAttribute('content');
                        break;
                      case 'keywords':
                        this.keywords = currentChild.getAttribute('content').split(',').map(function (x) {
                          return x.trim();
                        });
                        break;
                      case 'author':
                        this.author = currentChild.getAttribute('content');
                        break;
                      default:
                    }
                    break;
                  default:
                }
              }

              currentChild = currentChild.nextSibling;
            }
          }
        }, {
          key: '_handleBODY',
          value: function _handleBODY(node, primaryTranslation) {
            var template = this.template = this._createTemplateFromBody(node);
            var uids = template.content.querySelectorAll('[uid]');
            var sections = {};

            for (var i = 0, ii = uids.length; i < ii; ++i) {
              var current = uids[i];
              sections[current.getAttribute('uid')] = current;
            }

            if (primaryTranslation !== this) {
              this.author = primaryTranslation.author;
              this.keywords = primaryTranslation.keywords;

              for (var uid in primaryTranslation.sections) {
                var primarySection = primaryTranslation.sections[uid];
                var translationSection = sections[uid];

                if (translationSection) {
                  var primaryVersion = primarySection.getAttribute('version');
                  if (primaryVersion) {
                    var translationVersion = translationSection.getAttribute('version');
                    translationSection.setAttribute('version-matches', this._determineVersionMatches(primaryVersion, translationVersion));
                  }

                  if (this._shouldCopyContent(primarySection.tagName)) {
                    while (translationSection.firstChild) {
                      translationSection.removeChild(translationSection.firstChild);
                    }

                    var current = primarySection.firstChild;

                    while (current) {
                      translationSection.appendChild(current.cloneNode(true));
                      current = current.nextSibling;
                    }

                    this.template = template;
                  }
                } else {
                  this.unavailable = true;
                }
              }
            } else {
                this.sections = sections;

                for (var uid in sections) {
                  sections[uid] = sections[uid].cloneNode(true);
                }

                var originalTemplate = FEATURE.ensureHTMLTemplateElement(DOM.createElement('template'));
                var current = template.content.firstChild;

                while (current) {
                  originalTemplate.content.appendChild(current.cloneNode(true));
                  current = current.nextSibling;
                }

                this.originalTemplate = originalTemplate;
              }
          }
        }, {
          key: '_createTemplateFromBody',
          value: function _createTemplateFromBody(body) {
            return DOM.createTemplateFromMarkup('<template>' + body.innerHTML + '</template>');
          }
        }, {
          key: '_shouldCopyContent',
          value: function _shouldCopyContent(tagName) {
            return tagsFromSource.indexOf(tagName) !== -1;
          }
        }, {
          key: '_determineVersionMatches',
          value: function _determineVersionMatches(primaryVersion, translationVersion) {
            var primaryParts = primaryVersion.split('.').map(function (x) {
              return parseInt(x.trim(), 10);
            });
            var translationParts = translationVersion.split('.').map(function (x) {
              return parseInt(x.trim(), 10);
            });

            if (primaryParts[0] === translationParts[0]) {
              if (primaryParts[1] === translationParts[1]) {
                if (primaryParts.length > 1 && translationParts.length > 2) {
                  if (primaryParts[2] === translationParts[2]) {
                    return 3;
                  }
                }

                return 2;
              }

              return 1;
            }

            return 0;
          }
        }]);

        return ArticleTranslation;
      })();

      _export('ArticleTranslation', ArticleTranslation);

      Tutorial = (function () {
        _createClass(Tutorial, null, [{
          key: 'previousSelection',
          value: null,
          enumerable: true
        }]);

        function Tutorial(attrs, product) {
          _classCallCheck(this, Tutorial);

          this.title = attrs.title;
          this.slug = attrs.href.substring(attrs.href.lastIndexOf('/') + 1).replace('.html', '');
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

      ChildModel = function ChildModel(data) {
        _classCallCheck(this, ChildModel);

        this.id = -1;
        this.kind = -1;
        this.kindString = '';
        this.kindName = '';
        this.name = '';
        this.originalName = '';
        this.children = [];
        this.classes = [];
        this.groups = [];
        this.flags = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
        this.prettyName = prettyName(this.name);
      };

      _export('ChildModel', ChildModel);

      GroupModel = function GroupModel(data) {
        _classCallCheck(this, GroupModel);

        this.id = -1;
        this.kind = -1;
        this.kindName = '';
        this.title = '';
        this.children = [];

        Object.assign(this, data);
        this.kindName = this.kindName;
      };

      _export('GroupModel', GroupModel);

      ClassModel = function ClassModel(data) {
        _classCallCheck(this, ClassModel);

        this.comment = {};
        this.methods = [];
        this.groups = [];
        this.flags = {};
        this.properties = [];
        this.constructorMethod = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      _export('ClassModel', ClassModel);

      MethodModel = function MethodModel(data) {
        _classCallCheck(this, MethodModel);

        this.signature = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      _export('MethodModel', MethodModel);

      ConstructorModel = function ConstructorModel(data) {
        _classCallCheck(this, ConstructorModel);

        this.signature = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      _export('ConstructorModel', ConstructorModel);

      InterfaceModel = function InterfaceModel(data) {
        _classCallCheck(this, InterfaceModel);

        this.classes = [];
        this.properties = [];
        this.variables = [];
        this.methods = [];

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      _export('InterfaceModel', InterfaceModel);

      PropertyModel = function PropertyModel(data) {
        _classCallCheck(this, PropertyModel);

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      _export('PropertyModel', PropertyModel);

      SignatureModel = function SignatureModel(data) {
        _classCallCheck(this, SignatureModel);

        this.comment = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      _export('SignatureModel', SignatureModel);

      VariableModel = function VariableModel(data) {
        _classCallCheck(this, VariableModel);

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      _export('VariableModel', VariableModel);

      FunctionModel = function FunctionModel(data) {
        _classCallCheck(this, FunctionModel);

        Object.assign(this, data);
        this.kindName = this.kindString;
        this.signature = this.signatures[0];
      };

      _export('FunctionModel', FunctionModel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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OztBQUVWLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUNqQzs7OztBQUdVLG1CQUFhLEdBQ2IsU0FEQSxhQUFhLENBQ1osSUFBSSxFQUFFOzhCQURQLGFBQWE7O0FBRXRCLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUNqQzs7OztBQUdVLG1CQUFhLEdBQ2IsU0FEQSxhQUFhLENBQ1osSUFBSSxFQUFFOzhCQURQLGFBQWE7O0FBRXRCLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDckMiLCJmaWxlIjoiYmFja2VuZC9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7am9pbn0gZnJvbSAnYXVyZWxpYS1wYXRoJztcbmltcG9ydCB7RE9NLCBGRUFUVVJFfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge3ZpZXdTdHJhdGVneX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlZ2lzdHJ5RW50cnl9IGZyb20gJ2F1cmVsaWEtbG9hZGVyJztcbmltcG9ydCB7SFRNTFBhcnNlcn0gZnJvbSAnLi9odG1sLXBhcnNlcic7XG5cbmxldCBiYXNlVHJhbnNsYXRpb24gPSAnZW4tVVMnO1xuXG5mdW5jdGlvbiBwcmV0dHlOYW1lKHMpIHtcbiAgcyA9ICBzLnJlcGxhY2UoLyhcXC1cXHcpL2csIGZ1bmN0aW9uKG0pIHtcbiAgICByZXR1cm4gbVsxXS50b1VwcGVyQ2FzZSgpO1xuICB9KTtcbiAgcyA9IHMucmVwbGFjZSgvKFthLXpdKShbQS1aXSkvZywgJyQxICQyJyk7XG4gIHJldHVybiBzLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcy5zbGljZSgxKTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xuICBzdGF0aWMgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGF0dHJzLCBzZXJ2ZXIpIHtcbiAgICBhdHRycy50dXRvcmlhbHMgPSBhdHRycy50dXRvcmlhbHMgfHwgW107XG4gICAgdGhpcy51c2VyTmFtZSA9IGF0dHJzLnVzZXJOYW1lO1xuICAgIHRoaXMucHJvZHVjdE5hbWUgPSBhdHRycy5wcm9kdWN0TmFtZTtcbiAgICB0aGlzLmxhdGVzdFZlcnNpb24gPSAnbGF0ZXN0JztcbiAgICB0aGlzLnByZWZlcnJlZFZlcnNpb24gPSB0aGlzLmxhdGVzdFZlcnNpb247XG5cbiAgICB0aGlzLnR1dG9yaWFscyA9IGF0dHJzLnR1dG9yaWFscy5tYXAoYSA9PiBuZXcgVHV0b3JpYWwoYSwgdGhpcykpO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMudmVyc2lvbnMgPSBbXTtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLmJhc2VVcmwgPSBgaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS8ke3RoaXMudXNlck5hbWV9LyR7dGhpcy5wcm9kdWN0TmFtZX1gO1xuICB9XG5cbiAgc2VsZWN0KCkge1xuICAgIGlmIChQcm9kdWN0LnByZXZpb3VzU2VsZWN0aW9uKSB7XG4gICAgICBQcm9kdWN0LnByZXZpb3VzU2VsZWN0aW9uLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBQcm9kdWN0LnByZXZpb3VzU2VsZWN0aW9uID0gdGhpcztcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgZ2V0TGF0ZXN0VmVyc2lvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRWZXJzaW9uKHRoaXMubGF0ZXN0VmVyc2lvbik7XG4gIH1cblxuICBnZXRWZXJzaW9uKHZlcnNpb24pIHtcbiAgICB2ZXJzaW9uID0gdmVyc2lvbiB8fCB0aGlzLnByZWZlcnJlZFZlcnNpb247XG4gICAgbGV0IGZvdW5kID0gdGhpcy52ZXJzaW9ucy5maW5kKHggPT4geC52ZXJzaW9uID09PSB2ZXJzaW9uKTtcblxuICAgIGlmIChmb3VuZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShmb3VuZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc2VydmVyLmdldFByb2R1Y3RWZXJzaW9uKHRoaXMsIHZlcnNpb24pLnRoZW4ocHJvZHVjdFZlcnNpb24gPT4ge1xuICAgICAgdGhpcy52ZXJzaW9ucy5wdXNoKHByb2R1Y3RWZXJzaW9uKTtcbiAgICAgIHJldHVybiBwcm9kdWN0VmVyc2lvbjtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFR1dG9yaWFsQnlTbHVnKGFydGljbGVTbHVnKSB7XG4gICAgcmV0dXJuIHRoaXMudHV0b3JpYWxzLmZpbmQoeCA9PiB4LnNsdWcgPT09IGFydGljbGVTbHVnKTtcbiAgfVxuXG4gIGdldFR1dG9yaWFsRm9yUHJvZmlsZShwcm9maWxlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnR1dG9yaWFscy5maWx0ZXIoeCA9PiB4Lm1hdGNoZXNQcm9maWxlKHByb2ZpbGVOYW1lKSk7XG4gIH1cblxuICBjb25maWd1cmVMYXRlc3RWZXJzaW9uKCkge1xuICAgIGlmICh0aGlzLmxhdGVzdFZlcnNpb24gPT09ICdsYXRlc3QnKSB7XG4gICAgICB0aGlzLmxhdGVzdFZlcnNpb24gPSB0aGlzLmF2YWlsYWJsZVZlcnNpb25zWzBdLnZlcnNpb247XG5cbiAgICAgIGlmICh0aGlzLnByZWZlcnJlZFZlcnNpb24gPT09ICdsYXRlc3QnKSB7XG4gICAgICAgIHRoaXMucHJlZmVycmVkVmVyc2lvbiA9IHRoaXMubGF0ZXN0VmVyc2lvbjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFByb2R1Y3RWZXJzaW9uIHtcbiAgY2xhc3NlcyA9IFtdO1xuICBpbnRlcmZhY2VzID0gW107XG4gIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyaWFibGVzID0gW107XG4gIGV2ZW50cyA9IFtdO1xuICBtZXRob2RzID0gW107XG4gIGZ1bmN0aW9ucyA9IFtdO1xuICBhcnRpY2xlcyA9IFtdO1xuICBrZXl3b3JkcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByb2R1Y3QsIHZlcnNpb24sIHNlcnZlciwgbG9jYWwpIHtcbiAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgIHRoaXMudmVyc2lvbiA9IHZlcnNpb247XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5iYXNlVXJsID0gam9pbihwcm9kdWN0LmJhc2VVcmwsIHZlcnNpb24pO1xuICAgIHRoaXMuYXBpVXJsID0gam9pbih0aGlzLmJhc2VVcmwsICdkb2MvYXBpLmpzb24nKTtcbiAgICB0aGlzLnBhY2thZ2VVcmwgPSBqb2luKHRoaXMuYmFzZVVybCwgJ3BhY2thZ2UuanNvbicpO1xuICAgIHRoaXMubG9jYWwgPSAhIWxvY2FsO1xuICB9XG5cbiAgZmluZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZpbmRJbnRlcmZhY2UoaW50ZXJmYWNlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmludGVyZmFjZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gaW50ZXJmYWNlTmFtZSk7XG4gIH1cblxuICBnZXRBcnRpY2xlKHNsdWcsIGN1bHR1cmUpIHtcbiAgICBsZXQgZm91bmQ7XG5cbiAgICBpZiAodGhpcy5sb2NhbCkge1xuICAgICAgZm91bmQgPSBuZXcgQXJ0aWNsZSh7IHRpdGxlOiAnTG9jYWwgQXJ0aWNsZScsIGhyZWY6IHNsdWcgfSwgdGhpcywgdGhpcy5zZXJ2ZXIsIHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3VuZCA9IHRoaXMuYXJ0aWNsZXMuZmluZCh4ID0+IHguc2x1ZyA9PT0gc2x1Zyk7XG4gICAgfVxuXG4gICAgaWYgKCFmb3VuZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvdW5kLmdldFRyYW5zbGF0aW9uKGN1bHR1cmUpO1xuICB9XG59XG5cbkB2aWV3U3RyYXRlZ3lcbmNsYXNzIEFydGljbGVUcmFuc2xhdGlvblZpZXdTdHJhdGVneSB7XG4gIGNvbnN0cnVjdG9yKGFydGljbGVUcmFuc2xhdGlvbikge1xuICAgIHRoaXMuYXJ0aWNsZVRyYW5zbGF0aW9uID0gYXJ0aWNsZVRyYW5zbGF0aW9uO1xuICB9XG5cbiAgbG9hZFZpZXdGYWN0b3J5KHZpZXdFbmdpbmUsIGNvbXBpbGVJbnN0cnVjdGlvbiwgbG9hZENvbnRleHQpIHtcbiAgICBpZiAodGhpcy5lbnRyeSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLmVudHJ5LmZhY3RvcnkpO1xuICAgIH1cblxuICAgIHRoaXMuZW50cnkgPSBuZXcgVGVtcGxhdGVSZWdpc3RyeUVudHJ5KHRoaXMuYXJ0aWNsZVRyYW5zbGF0aW9uLnVybCk7XG4gICAgdGhpcy5lbnRyeS50ZW1wbGF0ZSA9IHRoaXMuYXJ0aWNsZVRyYW5zbGF0aW9uLnRlbXBsYXRlO1xuICAgIHJldHVybiB2aWV3RW5naW5lLmxvYWRWaWV3RmFjdG9yeSh0aGlzLmVudHJ5LCBjb21waWxlSW5zdHJ1Y3Rpb24sIGxvYWRDb250ZXh0KTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQXJ0aWNsZSB7XG4gIGNvbnN0cnVjdG9yKGF0dHJzLCBwcm9kdWN0VmVyc2lvbiwgc2VydmVyLCBsb2NhbCkge1xuICAgIHRoaXMudGl0bGUgPSBhdHRycy50aXRsZTtcbiAgICB0aGlzLnByb2R1Y3RWZXJzaW9uID0gcHJvZHVjdFZlcnNpb247XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5iYXNlVXJsID0gcHJvZHVjdFZlcnNpb24uYmFzZVVybDtcbiAgICB0aGlzLmhyZWYgPSBhdHRycy5ocmVmO1xuICAgIHRoaXMucHJpbWFyeVVybCA9IGpvaW4odGhpcy5iYXNlVXJsLCBhdHRycy5ocmVmKTtcbiAgICB0aGlzLnNsdWcgPSB0aGlzLnByaW1hcnlVcmwuc3Vic3RyaW5nKHRoaXMucHJpbWFyeVVybC5sYXN0SW5kZXhPZignLycpICsgMSkucmVwbGFjZSgnLmh0bWwnLCAnJyk7XG4gICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7fTtcbiAgICB0aGlzLmxvY2FsID0gISFsb2NhbDtcbiAgfVxuXG4gIGdldFRyYW5zbGF0aW9uKGN1bHR1cmUsIGxvY2FsKSB7XG4gICAgaWYgKGN1bHR1cmUgaW4gdGhpcy50cmFuc2xhdGlvbnMpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy50cmFuc2xhdGlvbnNbY3VsdHVyZV0pO1xuICAgIH1cblxuICAgIGlmIChiYXNlVHJhbnNsYXRpb24gaW4gdGhpcy50cmFuc2xhdGlvbnMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9sb2FkVHJhbnNsYXRpb24oY3VsdHVyZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2xvYWRUcmFuc2xhdGlvbihiYXNlVHJhbnNsYXRpb24pXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmdldFRyYW5zbGF0aW9uKGN1bHR1cmUpKTtcbiAgfVxuXG4gIF9sb2FkVHJhbnNsYXRpb24oY3VsdHVyZSkge1xuICAgIGxldCB0cmFuc2xhdGlvbiA9IG5ldyBBcnRpY2xlVHJhbnNsYXRpb24odGhpcywgY3VsdHVyZSwgdGhpcy5sb2NhbCk7XG4gICAgdGhpcy50cmFuc2xhdGlvbnNbY3VsdHVyZV0gPSB0cmFuc2xhdGlvbjtcblxuICAgIHJldHVybiB0aGlzLnNlcnZlci5sb2FkQXJ0aWNsZVRyYW5zbGF0aW9uKHRyYW5zbGF0aW9uKVxuICAgICAgLnRoZW4oX3RyYW5zbGF0aW9uID0+IHtcbiAgICAgICAgaWYgKF90cmFuc2xhdGlvbi51bmF2YWlsYWJsZSkge1xuICAgICAgICAgIF90cmFuc2xhdGlvbi5zdWJzdW1lKHRoaXMudHJhbnNsYXRpb25zW2Jhc2VUcmFuc2xhdGlvbl0pO1xuICAgICAgICAgIF90cmFuc2xhdGlvbi52aWV3ID0gbmV3IEFydGljbGVUcmFuc2xhdGlvblZpZXdTdHJhdGVneShfdHJhbnNsYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90cmFuc2xhdGlvbi5wcmVwYXJlKHRoaXMudHJhbnNsYXRpb25zW2Jhc2VUcmFuc2xhdGlvbl0pO1xuICAgICAgICAgIF90cmFuc2xhdGlvbi52aWV3ID0gbmV3IEFydGljbGVUcmFuc2xhdGlvblZpZXdTdHJhdGVneShfdHJhbnNsYXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90cmFuc2xhdGlvbjtcbiAgICAgIH0pO1xuICB9XG59XG5cbmxldCB0YWdzRnJvbVNvdXJjZSA9IFsnRVhBTVBMRScsICdERU1PJ107XG5cbmV4cG9ydCBjbGFzcyBBcnRpY2xlVHJhbnNsYXRpb24ge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlLCBjdWx0dXJlLCBsb2NhbCkge1xuICAgIHRoaXMuY3VsdHVyZSA9IGN1bHR1cmU7XG5cbiAgICBpZiAobG9jYWwpIHtcbiAgICAgIHRoaXMubG9jYWwgPSB0cnVlO1xuICAgICAgdGhpcy51cmwgPSBgZG9jL2FydGljbGUvJHtiYXNlVHJhbnNsYXRpb259LyR7YXJ0aWNsZS5ocmVmfS5odG1sYDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBhcnRpY2xlLnByaW1hcnlVcmw7XG4gICAgfVxuXG4gICAgaWYgKGN1bHR1cmUgIT09IGJhc2VUcmFuc2xhdGlvbikge1xuICAgICAgdGhpcy51cmwgPSB0aGlzLnVybC5yZXBsYWNlKGJhc2VUcmFuc2xhdGlvbiwgY3VsdHVyZSk7XG4gICAgfVxuICB9XG5cbiAgc3Vic3VtZShvdGhlcikge1xuICAgIHRoaXMudGl0bGUgPSBvdGhlci50aXRsZTtcbiAgICB0aGlzLmF1dGhvciA9IG90aGVyLmF1dGhvcjtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gb3RoZXIuZGVzY3JpcHRpb247XG4gICAgdGhpcy5rZXl3b3JkcyA9IG90aGVyLmtleXdvcmRzO1xuICAgIHRoaXMudGVtcGxhdGUgPSBET00uY3JlYXRlVGVtcGxhdGVGcm9tTWFya3VwKCc8dGVtcGxhdGU+JyArIG90aGVyLm9yaWdpbmFsVGVtcGxhdGUuY29udGVudC5pbm5lckhUTUwgKyAnPC90ZW1wbGF0ZT4nKTtcblxuICAgIGxldCBvcmlnaW5hbENvbnRlbnQgPSBvdGhlci5vcmlnaW5hbFRlbXBsYXRlLmNvbnRlbnQ7XG4gICAgbGV0IHRlbXBsYXRlID0gRkVBVFVSRS5lbnN1cmVIVE1MVGVtcGxhdGVFbGVtZW50KERPTS5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgICBsZXQgY3VycmVudCA9IG9yaWdpbmFsQ29udGVudC5maXJzdENoaWxkO1xuXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XG4gICAgfVxuXG4gICAgdGhpcy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuICB9XG5cbiAgcHJlcGFyZShwcmltYXJ5VHJhbnNsYXRpb24pIHtcbiAgICBsZXQgY29udGVudCA9ICcnO1xuICAgIGxldCBuZWVkc0VuY29kaW5nID0gZmFsc2U7XG5cbiAgICBIVE1MUGFyc2VyKHRoaXMuY29udGVudCwge1xuICAgICAgc3RhcnQodGFnLCBhdHRycywgdW5hcnkpIHtcblx0XHRcdFx0Y29udGVudCArPSBcIjxcIiArIHRhZztcblxuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0Y29udGVudCArPSBcIiBcIiArIGF0dHJzW2ldLm5hbWUgKyAnPVwiJyArIGF0dHJzW2ldLmVzY2FwZWQgKyAnXCInO1xuICAgICAgICB9XG5cblx0XHRcdFx0Y29udGVudCArPSBcIj5cIjtcblxuICAgICAgICBpZih0YWcgPT09ICdzb3VyY2UtY29kZScgfHwgdGFnID09PSAnbmFycmF0aXZlJykge1xuICAgICAgICAgIG5lZWRzRW5jb2RpbmcgPSB0cnVlO1xuICAgICAgICB9XG5cdFx0XHR9LFxuXHRcdFx0ZW5kKHRhZykge1xuICAgICAgICBpZih0YWcgPT09ICdzb3VyY2UtY29kZScgfHwgdGFnID09PSAnbmFycmF0aXZlJykge1xuICAgICAgICAgIG5lZWRzRW5jb2RpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuXG5cdFx0XHRcdGNvbnRlbnQgKz0gXCI8L1wiICsgdGFnICsgXCI+XCI7XG5cdFx0XHR9LFxuXHRcdFx0Y2hhcnModGV4dCkge1xuICAgICAgICBpZihuZWVkc0VuY29kaW5nKSB7XG4gICAgICAgICAgdGV4dCA9IGVzY2FwZSh0ZXh0KTtcbiAgICAgICAgfVxuXG5cdFx0XHRcdGNvbnRlbnQgKz0gdGV4dDtcblx0XHRcdH0sXG5cdFx0XHRjb21tZW50KHRleHQpIHtcblx0XHRcdFx0Y29udGVudCArPSBcIjwhLS1cIiArIHRleHQgKyBcIi0tPlwiO1xuXHRcdFx0fVxuICAgIH0pO1xuXG4gICAgbGV0IHBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBsZXQgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAndGV4dC9odG1sJyk7XG4gICAgbGV0IGRvY0NoaWxkID0gZG9jLmZpcnN0Q2hpbGQ7XG5cbiAgICB3aGlsZSAoZG9jQ2hpbGQpIHtcbiAgICAgIGlmIChkb2NDaGlsZC50YWdOYW1lID09PSAnSFRNTCcpIHtcbiAgICAgICAgbGV0IGh0bWxDaGlsZCA9IGRvY0NoaWxkLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgd2hpbGUgKGh0bWxDaGlsZCkge1xuICAgICAgICAgIGlmIChodG1sQ2hpbGQubm9kZVR5cGUgPT09IDEpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoaHRtbENoaWxkLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ0hFQUQnOlxuICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVIRUFEKGh0bWxDaGlsZCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnQk9EWSc6XG4gICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUJPRFkoaHRtbENoaWxkLCBwcmltYXJ5VHJhbnNsYXRpb24pO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaHRtbENoaWxkID0gaHRtbENoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGRvY0NoaWxkID0gZG9jQ2hpbGQubmV4dFNpYmxpbmc7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZUhFQUQobm9kZSkge1xuICAgIGxldCBjdXJyZW50Q2hpbGQgPSBub2RlLmZpcnN0Q2hpbGQ7XG5cbiAgICB3aGlsZSAoY3VycmVudENoaWxkKSB7XG4gICAgICBpZiAoY3VycmVudENoaWxkLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgIHN3aXRjaCAoY3VycmVudENoaWxkLnRhZ05hbWUpIHtcbiAgICAgICAgY2FzZSAnVElUTEUnOlxuICAgICAgICAgIHRoaXMudGl0bGUgPSBjdXJyZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdNRVRBJzpcbiAgICAgICAgICBzd2l0Y2ggKGN1cnJlbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkge1xuICAgICAgICAgIGNhc2UgJ2Rlc2NyaXB0aW9uJzpcbiAgICAgICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBjdXJyZW50Q2hpbGQuZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdrZXl3b3Jkcyc6XG4gICAgICAgICAgICB0aGlzLmtleXdvcmRzID0gY3VycmVudENoaWxkLmdldEF0dHJpYnV0ZSgnY29udGVudCcpLnNwbGl0KCcsJykubWFwKHggPT4geC50cmltKCkpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnYXV0aG9yJzpcbiAgICAgICAgICAgIHRoaXMuYXV0aG9yID0gY3VycmVudENoaWxkLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY3VycmVudENoaWxkID0gY3VycmVudENoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVCT0RZKG5vZGUsIHByaW1hcnlUcmFuc2xhdGlvbikge1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMudGVtcGxhdGUgPSB0aGlzLl9jcmVhdGVUZW1wbGF0ZUZyb21Cb2R5KG5vZGUpO1xuICAgIGxldCB1aWRzID0gdGVtcGxhdGUuY29udGVudC5xdWVyeVNlbGVjdG9yQWxsKCdbdWlkXScpO1xuICAgIGxldCBzZWN0aW9ucyA9IHt9O1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGlpID0gdWlkcy5sZW5ndGg7IGkgPCBpaTsgKytpKSB7XG4gICAgICBsZXQgY3VycmVudCA9IHVpZHNbaV07XG4gICAgICBzZWN0aW9uc1tjdXJyZW50LmdldEF0dHJpYnV0ZSgndWlkJyldID0gY3VycmVudDtcbiAgICB9XG5cbiAgICBpZiAocHJpbWFyeVRyYW5zbGF0aW9uICE9PSB0aGlzKSB7XG4gICAgICB0aGlzLmF1dGhvciA9IHByaW1hcnlUcmFuc2xhdGlvbi5hdXRob3I7XG4gICAgICB0aGlzLmtleXdvcmRzID0gcHJpbWFyeVRyYW5zbGF0aW9uLmtleXdvcmRzO1xuXG4gICAgICBmb3IgKGxldCB1aWQgaW4gcHJpbWFyeVRyYW5zbGF0aW9uLnNlY3Rpb25zKSB7XG4gICAgICAgIGxldCBwcmltYXJ5U2VjdGlvbiA9IHByaW1hcnlUcmFuc2xhdGlvbi5zZWN0aW9uc1t1aWRdO1xuICAgICAgICBsZXQgdHJhbnNsYXRpb25TZWN0aW9uID0gc2VjdGlvbnNbdWlkXTtcblxuICAgICAgICBpZiAodHJhbnNsYXRpb25TZWN0aW9uKSB7XG4gICAgICAgICAgbGV0IHByaW1hcnlWZXJzaW9uID0gcHJpbWFyeVNlY3Rpb24uZ2V0QXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gICAgICAgICAgaWYgKHByaW1hcnlWZXJzaW9uKSB7XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25WZXJzaW9uID0gdHJhbnNsYXRpb25TZWN0aW9uLmdldEF0dHJpYnV0ZSgndmVyc2lvbicpO1xuICAgICAgICAgICAgdHJhbnNsYXRpb25TZWN0aW9uLnNldEF0dHJpYnV0ZSgndmVyc2lvbi1tYXRjaGVzJywgdGhpcy5fZGV0ZXJtaW5lVmVyc2lvbk1hdGNoZXMocHJpbWFyeVZlcnNpb24sIHRyYW5zbGF0aW9uVmVyc2lvbikpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLl9zaG91bGRDb3B5Q29udGVudChwcmltYXJ5U2VjdGlvbi50YWdOYW1lKSkge1xuICAgICAgICAgICAgd2hpbGUgKHRyYW5zbGF0aW9uU2VjdGlvbi5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9uU2VjdGlvbi5yZW1vdmVDaGlsZCh0cmFuc2xhdGlvblNlY3Rpb24uZmlyc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gcHJpbWFyeVNlY3Rpb24uZmlyc3RDaGlsZDtcblxuICAgICAgICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgICAgICAgdHJhbnNsYXRpb25TZWN0aW9uLmFwcGVuZENoaWxkKGN1cnJlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy51bmF2YWlsYWJsZSA9IHRydWU7IC8vVE9ETzogY3JlYXRlIGVuZ2xpc2ggc2VjdGlvbj9cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlY3Rpb25zID0gc2VjdGlvbnM7XG5cbiAgICAgIGZvciAobGV0IHVpZCBpbiBzZWN0aW9ucykge1xuICAgICAgICBzZWN0aW9uc1t1aWRdID0gc2VjdGlvbnNbdWlkXS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGxldCBvcmlnaW5hbFRlbXBsYXRlID0gRkVBVFVSRS5lbnN1cmVIVE1MVGVtcGxhdGVFbGVtZW50KERPTS5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpKTtcbiAgICAgIGxldCBjdXJyZW50ID0gdGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICBvcmlnaW5hbFRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoY3VycmVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0U2libGluZztcbiAgICAgIH1cblxuICAgICAgdGhpcy5vcmlnaW5hbFRlbXBsYXRlID0gb3JpZ2luYWxUZW1wbGF0ZTtcbiAgICB9XG4gIH1cblxuICBfY3JlYXRlVGVtcGxhdGVGcm9tQm9keShib2R5KSB7XG4gICAgcmV0dXJuIERPTS5jcmVhdGVUZW1wbGF0ZUZyb21NYXJrdXAoJzx0ZW1wbGF0ZT4nICsgYm9keS5pbm5lckhUTUwgKyAnPC90ZW1wbGF0ZT4nKTtcbiAgfVxuXG4gIF9zaG91bGRDb3B5Q29udGVudCh0YWdOYW1lKSB7XG4gICAgcmV0dXJuIHRhZ3NGcm9tU291cmNlLmluZGV4T2YodGFnTmFtZSkgIT09IC0xO1xuICB9XG5cbiAgX2RldGVybWluZVZlcnNpb25NYXRjaGVzKHByaW1hcnlWZXJzaW9uLCB0cmFuc2xhdGlvblZlcnNpb24pIHtcbiAgICBsZXQgcHJpbWFyeVBhcnRzID0gcHJpbWFyeVZlcnNpb24uc3BsaXQoJy4nKS5tYXAoeCA9PiBwYXJzZUludCh4LnRyaW0oKSwgMTApKTtcbiAgICBsZXQgdHJhbnNsYXRpb25QYXJ0cyA9IHRyYW5zbGF0aW9uVmVyc2lvbi5zcGxpdCgnLicpLm1hcCh4ID0+IHBhcnNlSW50KHgudHJpbSgpLCAxMCkpO1xuXG4gICAgaWYgKHByaW1hcnlQYXJ0c1swXSA9PT0gdHJhbnNsYXRpb25QYXJ0c1swXSkge1xuICAgICAgaWYgKHByaW1hcnlQYXJ0c1sxXSA9PT0gdHJhbnNsYXRpb25QYXJ0c1sxXSkge1xuICAgICAgICBpZiAocHJpbWFyeVBhcnRzLmxlbmd0aCA+IDEgJiYgdHJhbnNsYXRpb25QYXJ0cy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgaWYgKHByaW1hcnlQYXJ0c1syXSA9PT0gdHJhbnNsYXRpb25QYXJ0c1syXSkge1xuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAxO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBUdXRvcmlhbCB7XG4gIHN0YXRpYyBwcmV2aW91c1NlbGVjdGlvbiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoYXR0cnMsIHByb2R1Y3QpIHtcbiAgICB0aGlzLnRpdGxlID0gYXR0cnMudGl0bGU7XG4gICAgdGhpcy5zbHVnID0gYXR0cnMuaHJlZi5zdWJzdHJpbmcoYXR0cnMuaHJlZi5sYXN0SW5kZXhPZignLycpICsgMSkucmVwbGFjZSgnLmh0bWwnLCAnJyk7XG4gICAgdGhpcy5ocmVmID0gYXR0cnMuaHJlZjtcbiAgICB0aGlzLnByb2ZpbGVzID0gYXR0cnMucHJvZmlsZXM7XG4gICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdDtcbiAgfVxuXG4gIGdldE9yZGVyRm9yUHJvZmlsZShwcm9maWxlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLnByb2ZpbGVzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHByb2ZpbGVOYW1lKS5vcmRlcjtcbiAgfVxuXG4gIG1hdGNoZXNQcm9maWxlKHByb2ZpbGVOYW1lKSB7XG4gICAgaWYgKHRoaXMucHJvZmlsZXMpIHtcbiAgICAgIHJldHVybiAhIXRoaXMucHJvZmlsZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gcHJvZmlsZU5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24pIHtcbiAgICAgIFR1dG9yaWFsLnByZXZpb3VzU2VsZWN0aW9uLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbiA9IHRoaXM7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2hpbGRNb2RlbCB7XG4gIGlkID0gLTE7XG4gIGtpbmQgPSAtMTtcbiAga2luZFN0cmluZyA9ICcnO1xuICBraW5kTmFtZSA9ICcnO1xuICBuYW1lID0gJyc7XG4gIG9yaWdpbmFsTmFtZSA9ICcnO1xuICBjaGlsZHJlbiA9IFtdO1xuICBjbGFzc2VzID0gW107XG4gIGdyb3VwcyA9IFtdO1xuICBmbGFncyA9IHt9O1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmtpbmROYW1lID0gdGhpcy5raW5kU3RyaW5nO1xuICAgIHRoaXMucHJldHR5TmFtZSA9IHByZXR0eU5hbWUodGhpcy5uYW1lKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgR3JvdXBNb2RlbCB7XG4gIGlkID0gLTE7XG4gIGtpbmQgPSAtMTtcbiAga2luZE5hbWUgPSAnJztcbiAgdGl0bGUgPSAnJztcbiAgY2hpbGRyZW4gPSBbXTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZE5hbWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsYXNzTW9kZWwge1xuICBjb21tZW50ID0ge307XG4gIG1ldGhvZHMgPSBbXTtcbiAgZ3JvdXBzID0gW107XG4gIGZsYWdzID0ge307XG4gIHByb3BlcnRpZXMgPSBbXTtcbiAgY29uc3RydWN0b3JNZXRob2QgPSB7fTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTWV0aG9kTW9kZWwge1xuICBzaWduYXR1cmUgPSB7fTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ29uc3RydWN0b3JNb2RlbCB7XG4gIHNpZ25hdHVyZSA9IHt9O1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmtpbmROYW1lID0gdGhpcy5raW5kU3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VNb2RlbCB7XG4gIGNsYXNzZXMgPSBbXTtcbiAgcHJvcGVydGllcyA9IFtdO1xuICB2YXJpYWJsZXMgPSBbXTtcbiAgbWV0aG9kcyA9IFtdO1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmtpbmROYW1lID0gdGhpcy5raW5kU3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2lnbmF0dXJlTW9kZWwge1xuICBjb21tZW50ID0ge307XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmRTdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFZhcmlhYmxlTW9kZWwge1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmtpbmROYW1lID0gdGhpcy5raW5kU3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBGdW5jdGlvbk1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMuc2lnbmF0dXJlc1swXTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
