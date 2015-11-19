System.register(['aurelia-path', 'aurelia-pal', 'aurelia-templating', 'aurelia-loader', './html-parser'], function (_export) {
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
    }, function (_aureliaTemplating) {
      viewStrategy = _aureliaTemplating.viewStrategy;
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
//# sourceMappingURL=data:application/json;base64,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OztBQUVWLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUNqQzs7OztBQUdVLG1CQUFhLEdBQ2IsU0FEQSxhQUFhLENBQ1osSUFBSSxFQUFFOzhCQURQLGFBQWE7O0FBRXRCLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUNqQzs7OztBQUdVLG1CQUFhLEdBQ2IsU0FEQSxhQUFhLENBQ1osSUFBSSxFQUFFOzhCQURQLGFBQWE7O0FBRXRCLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDckMiLCJmaWxlIjoiYmFja2VuZC9tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7am9pbn0gZnJvbSAnYXVyZWxpYS1wYXRoJztcbmltcG9ydCB7RE9NLCBGRUFUVVJFfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge3ZpZXdTdHJhdGVneX0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7VGVtcGxhdGVSZWdpc3RyeUVudHJ5fSBmcm9tICdhdXJlbGlhLWxvYWRlcic7XG5pbXBvcnQge0hUTUxQYXJzZXJ9IGZyb20gJy4vaHRtbC1wYXJzZXInO1xuXG5sZXQgYmFzZVRyYW5zbGF0aW9uID0gJ2VuLVVTJztcblxuZnVuY3Rpb24gcHJldHR5TmFtZShzKSB7XG4gIHMgPSAgcy5yZXBsYWNlKC8oXFwtXFx3KS9nLCBmdW5jdGlvbihtKSB7XG4gICAgcmV0dXJuIG1bMV0udG9VcHBlckNhc2UoKTtcbiAgfSk7XG4gIHMgPSBzLnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csICckMSAkMicpO1xuICByZXR1cm4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0IHtcbiAgc3RhdGljIHByZXZpb3VzU2VsZWN0aW9uID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihhdHRycywgc2VydmVyKSB7XG4gICAgYXR0cnMudHV0b3JpYWxzID0gYXR0cnMudHV0b3JpYWxzIHx8IFtdO1xuICAgIHRoaXMudXNlck5hbWUgPSBhdHRycy51c2VyTmFtZTtcbiAgICB0aGlzLnByb2R1Y3ROYW1lID0gYXR0cnMucHJvZHVjdE5hbWU7XG4gICAgdGhpcy5sYXRlc3RWZXJzaW9uID0gJ2xhdGVzdCc7XG4gICAgdGhpcy5wcmVmZXJyZWRWZXJzaW9uID0gdGhpcy5sYXRlc3RWZXJzaW9uO1xuXG4gICAgdGhpcy50dXRvcmlhbHMgPSBhdHRycy50dXRvcmlhbHMubWFwKGEgPT4gbmV3IFR1dG9yaWFsKGEsIHRoaXMpKTtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnZlcnNpb25zID0gW107XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5iYXNlVXJsID0gYGh0dHBzOi8vY2RuLnJhd2dpdC5jb20vJHt0aGlzLnVzZXJOYW1lfS8ke3RoaXMucHJvZHVjdE5hbWV9YDtcbiAgfVxuXG4gIHNlbGVjdCgpIHtcbiAgICBpZiAoUHJvZHVjdC5wcmV2aW91c1NlbGVjdGlvbikge1xuICAgICAgUHJvZHVjdC5wcmV2aW91c1NlbGVjdGlvbi5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgUHJvZHVjdC5wcmV2aW91c1NlbGVjdGlvbiA9IHRoaXM7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGdldExhdGVzdFZlcnNpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VmVyc2lvbih0aGlzLmxhdGVzdFZlcnNpb24pO1xuICB9XG5cbiAgZ2V0VmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgdmVyc2lvbiA9IHZlcnNpb24gfHwgdGhpcy5wcmVmZXJyZWRWZXJzaW9uO1xuICAgIGxldCBmb3VuZCA9IHRoaXMudmVyc2lvbnMuZmluZCh4ID0+IHgudmVyc2lvbiA9PT0gdmVyc2lvbik7XG5cbiAgICBpZiAoZm91bmQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZm91bmQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNlcnZlci5nZXRQcm9kdWN0VmVyc2lvbih0aGlzLCB2ZXJzaW9uKS50aGVuKHByb2R1Y3RWZXJzaW9uID0+IHtcbiAgICAgIHRoaXMudmVyc2lvbnMucHVzaChwcm9kdWN0VmVyc2lvbik7XG4gICAgICByZXR1cm4gcHJvZHVjdFZlcnNpb247XG4gICAgfSk7XG4gIH1cblxuICBnZXRUdXRvcmlhbEJ5U2x1ZyhhcnRpY2xlU2x1Zykge1xuICAgIHJldHVybiB0aGlzLnR1dG9yaWFscy5maW5kKHggPT4geC5zbHVnID09PSBhcnRpY2xlU2x1Zyk7XG4gIH1cblxuICBnZXRUdXRvcmlhbEZvclByb2ZpbGUocHJvZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy50dXRvcmlhbHMuZmlsdGVyKHggPT4geC5tYXRjaGVzUHJvZmlsZShwcm9maWxlTmFtZSkpO1xuICB9XG5cbiAgY29uZmlndXJlTGF0ZXN0VmVyc2lvbigpIHtcbiAgICBpZiAodGhpcy5sYXRlc3RWZXJzaW9uID09PSAnbGF0ZXN0Jykge1xuICAgICAgdGhpcy5sYXRlc3RWZXJzaW9uID0gdGhpcy5hdmFpbGFibGVWZXJzaW9uc1swXS52ZXJzaW9uO1xuXG4gICAgICBpZiAodGhpcy5wcmVmZXJyZWRWZXJzaW9uID09PSAnbGF0ZXN0Jykge1xuICAgICAgICB0aGlzLnByZWZlcnJlZFZlcnNpb24gPSB0aGlzLmxhdGVzdFZlcnNpb247XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9kdWN0VmVyc2lvbiB7XG4gIGNsYXNzZXMgPSBbXTtcbiAgaW50ZXJmYWNlcyA9IFtdO1xuICBwcm9wZXJ0aWVzID0gW107XG4gIHZhcmlhYmxlcyA9IFtdO1xuICBldmVudHMgPSBbXTtcbiAgbWV0aG9kcyA9IFtdO1xuICBmdW5jdGlvbnMgPSBbXTtcbiAgYXJ0aWNsZXMgPSBbXTtcbiAga2V5d29yZHMgPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9kdWN0LCB2ZXJzaW9uLCBzZXJ2ZXIsIGxvY2FsKSB7XG4gICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdDtcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMuYmFzZVVybCA9IGpvaW4ocHJvZHVjdC5iYXNlVXJsLCB2ZXJzaW9uKTtcbiAgICB0aGlzLmFwaVVybCA9IGpvaW4odGhpcy5iYXNlVXJsLCAnZG9jL2FwaS5qc29uJyk7XG4gICAgdGhpcy5wYWNrYWdlVXJsID0gam9pbih0aGlzLmJhc2VVcmwsICdwYWNrYWdlLmpzb24nKTtcbiAgICB0aGlzLmxvY2FsID0gISFsb2NhbDtcbiAgfVxuXG4gIGZpbmRDbGFzcyhjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5jbGFzc2VzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGNsYXNzTmFtZSk7XG4gIH1cblxuICBmaW5kSW50ZXJmYWNlKGludGVyZmFjZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmZhY2VzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IGludGVyZmFjZU5hbWUpO1xuICB9XG5cbiAgZ2V0QXJ0aWNsZShzbHVnLCBjdWx0dXJlKSB7XG4gICAgbGV0IGZvdW5kO1xuXG4gICAgaWYgKHRoaXMubG9jYWwpIHtcbiAgICAgIGZvdW5kID0gbmV3IEFydGljbGUoeyB0aXRsZTogJ0xvY2FsIEFydGljbGUnLCBocmVmOiBzbHVnIH0sIHRoaXMsIHRoaXMuc2VydmVyLCB0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm91bmQgPSB0aGlzLmFydGljbGVzLmZpbmQoeCA9PiB4LnNsdWcgPT09IHNsdWcpO1xuICAgIH1cblxuICAgIGlmICghZm91bmQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBmb3VuZC5nZXRUcmFuc2xhdGlvbihjdWx0dXJlKTtcbiAgfVxufVxuXG5Admlld1N0cmF0ZWd5XG5jbGFzcyBBcnRpY2xlVHJhbnNsYXRpb25WaWV3U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3RvcihhcnRpY2xlVHJhbnNsYXRpb24pIHtcbiAgICB0aGlzLmFydGljbGVUcmFuc2xhdGlvbiA9IGFydGljbGVUcmFuc2xhdGlvbjtcbiAgfVxuXG4gIGxvYWRWaWV3RmFjdG9yeSh2aWV3RW5naW5lLCBjb21waWxlSW5zdHJ1Y3Rpb24sIGxvYWRDb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuZW50cnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5lbnRyeS5mYWN0b3J5KTtcbiAgICB9XG5cbiAgICB0aGlzLmVudHJ5ID0gbmV3IFRlbXBsYXRlUmVnaXN0cnlFbnRyeSh0aGlzLmFydGljbGVUcmFuc2xhdGlvbi51cmwpO1xuICAgIHRoaXMuZW50cnkudGVtcGxhdGUgPSB0aGlzLmFydGljbGVUcmFuc2xhdGlvbi50ZW1wbGF0ZTtcbiAgICByZXR1cm4gdmlld0VuZ2luZS5sb2FkVmlld0ZhY3RvcnkodGhpcy5lbnRyeSwgY29tcGlsZUluc3RydWN0aW9uLCBsb2FkQ29udGV4dCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFydGljbGUge1xuICBjb25zdHJ1Y3RvcihhdHRycywgcHJvZHVjdFZlcnNpb24sIHNlcnZlciwgbG9jYWwpIHtcbiAgICB0aGlzLnRpdGxlID0gYXR0cnMudGl0bGU7XG4gICAgdGhpcy5wcm9kdWN0VmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uO1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMuYmFzZVVybCA9IHByb2R1Y3RWZXJzaW9uLmJhc2VVcmw7XG4gICAgdGhpcy5ocmVmID0gYXR0cnMuaHJlZjtcbiAgICB0aGlzLnByaW1hcnlVcmwgPSBqb2luKHRoaXMuYmFzZVVybCwgYXR0cnMuaHJlZik7XG4gICAgdGhpcy5zbHVnID0gdGhpcy5wcmltYXJ5VXJsLnN1YnN0cmluZyh0aGlzLnByaW1hcnlVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpLnJlcGxhY2UoJy5odG1sJywgJycpO1xuICAgIHRoaXMudHJhbnNsYXRpb25zID0ge307XG4gICAgdGhpcy5sb2NhbCA9ICEhbG9jYWw7XG4gIH1cblxuICBnZXRUcmFuc2xhdGlvbihjdWx0dXJlLCBsb2NhbCkge1xuICAgIGlmIChjdWx0dXJlIGluIHRoaXMudHJhbnNsYXRpb25zKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudHJhbnNsYXRpb25zW2N1bHR1cmVdKTtcbiAgICB9XG5cbiAgICBpZiAoYmFzZVRyYW5zbGF0aW9uIGluIHRoaXMudHJhbnNsYXRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5fbG9hZFRyYW5zbGF0aW9uKGN1bHR1cmUpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9sb2FkVHJhbnNsYXRpb24oYmFzZVRyYW5zbGF0aW9uKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5nZXRUcmFuc2xhdGlvbihjdWx0dXJlKSk7XG4gIH1cblxuICBfbG9hZFRyYW5zbGF0aW9uKGN1bHR1cmUpIHtcbiAgICBsZXQgdHJhbnNsYXRpb24gPSBuZXcgQXJ0aWNsZVRyYW5zbGF0aW9uKHRoaXMsIGN1bHR1cmUsIHRoaXMubG9jYWwpO1xuICAgIHRoaXMudHJhbnNsYXRpb25zW2N1bHR1cmVdID0gdHJhbnNsYXRpb247XG5cbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIubG9hZEFydGljbGVUcmFuc2xhdGlvbih0cmFuc2xhdGlvbilcbiAgICAgIC50aGVuKF90cmFuc2xhdGlvbiA9PiB7XG4gICAgICAgIGlmIChfdHJhbnNsYXRpb24udW5hdmFpbGFibGUpIHtcbiAgICAgICAgICBfdHJhbnNsYXRpb24uc3Vic3VtZSh0aGlzLnRyYW5zbGF0aW9uc1tiYXNlVHJhbnNsYXRpb25dKTtcbiAgICAgICAgICBfdHJhbnNsYXRpb24udmlldyA9IG5ldyBBcnRpY2xlVHJhbnNsYXRpb25WaWV3U3RyYXRlZ3koX3RyYW5zbGF0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfdHJhbnNsYXRpb24ucHJlcGFyZSh0aGlzLnRyYW5zbGF0aW9uc1tiYXNlVHJhbnNsYXRpb25dKTtcbiAgICAgICAgICBfdHJhbnNsYXRpb24udmlldyA9IG5ldyBBcnRpY2xlVHJhbnNsYXRpb25WaWV3U3RyYXRlZ3koX3RyYW5zbGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdHJhbnNsYXRpb247XG4gICAgICB9KTtcbiAgfVxufVxuXG5sZXQgdGFnc0Zyb21Tb3VyY2UgPSBbJ0VYQU1QTEUnLCAnREVNTyddO1xuXG5leHBvcnQgY2xhc3MgQXJ0aWNsZVRyYW5zbGF0aW9uIHtcbiAgY29uc3RydWN0b3IoYXJ0aWNsZSwgY3VsdHVyZSwgbG9jYWwpIHtcbiAgICB0aGlzLmN1bHR1cmUgPSBjdWx0dXJlO1xuXG4gICAgaWYgKGxvY2FsKSB7XG4gICAgICB0aGlzLmxvY2FsID0gdHJ1ZTtcbiAgICAgIHRoaXMudXJsID0gYGRvYy9hcnRpY2xlLyR7YmFzZVRyYW5zbGF0aW9ufS8ke2FydGljbGUuaHJlZn0uaHRtbGA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXJsID0gYXJ0aWNsZS5wcmltYXJ5VXJsO1xuICAgIH1cblxuICAgIGlmIChjdWx0dXJlICE9PSBiYXNlVHJhbnNsYXRpb24pIHtcbiAgICAgIHRoaXMudXJsID0gdGhpcy51cmwucmVwbGFjZShiYXNlVHJhbnNsYXRpb24sIGN1bHR1cmUpO1xuICAgIH1cbiAgfVxuXG4gIHN1YnN1bWUob3RoZXIpIHtcbiAgICB0aGlzLnRpdGxlID0gb3RoZXIudGl0bGU7XG4gICAgdGhpcy5hdXRob3IgPSBvdGhlci5hdXRob3I7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IG90aGVyLmRlc2NyaXB0aW9uO1xuICAgIHRoaXMua2V5d29yZHMgPSBvdGhlci5rZXl3b3JkcztcbiAgICB0aGlzLnRlbXBsYXRlID0gRE9NLmNyZWF0ZVRlbXBsYXRlRnJvbU1hcmt1cCgnPHRlbXBsYXRlPicgKyBvdGhlci5vcmlnaW5hbFRlbXBsYXRlLmNvbnRlbnQuaW5uZXJIVE1MICsgJzwvdGVtcGxhdGU+Jyk7XG5cbiAgICBsZXQgb3JpZ2luYWxDb250ZW50ID0gb3RoZXIub3JpZ2luYWxUZW1wbGF0ZS5jb250ZW50O1xuICAgIGxldCB0ZW1wbGF0ZSA9IEZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudChET00uY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gICAgbGV0IGN1cnJlbnQgPSBvcmlnaW5hbENvbnRlbnQuZmlyc3RDaGlsZDtcblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGN1cnJlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgIH1cblxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHByZXBhcmUocHJpbWFyeVRyYW5zbGF0aW9uKSB7XG4gICAgbGV0IGNvbnRlbnQgPSAnJztcbiAgICBsZXQgbmVlZHNFbmNvZGluZyA9IGZhbHNlO1xuXG4gICAgSFRNTFBhcnNlcih0aGlzLmNvbnRlbnQsIHtcbiAgICAgIHN0YXJ0KHRhZywgYXR0cnMsIHVuYXJ5KSB7XG5cdFx0XHRcdGNvbnRlbnQgKz0gXCI8XCIgKyB0YWc7XG5cblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGNvbnRlbnQgKz0gXCIgXCIgKyBhdHRyc1tpXS5uYW1lICsgJz1cIicgKyBhdHRyc1tpXS5lc2NhcGVkICsgJ1wiJztcbiAgICAgICAgfVxuXG5cdFx0XHRcdGNvbnRlbnQgKz0gXCI+XCI7XG5cbiAgICAgICAgaWYodGFnID09PSAnc291cmNlLWNvZGUnIHx8IHRhZyA9PT0gJ25hcnJhdGl2ZScpIHtcbiAgICAgICAgICBuZWVkc0VuY29kaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuXHRcdFx0fSxcblx0XHRcdGVuZCh0YWcpIHtcbiAgICAgICAgaWYodGFnID09PSAnc291cmNlLWNvZGUnIHx8IHRhZyA9PT0gJ25hcnJhdGl2ZScpIHtcbiAgICAgICAgICBuZWVkc0VuY29kaW5nID0gZmFsc2U7XG4gICAgICAgIH1cblxuXHRcdFx0XHRjb250ZW50ICs9IFwiPC9cIiArIHRhZyArIFwiPlwiO1xuXHRcdFx0fSxcblx0XHRcdGNoYXJzKHRleHQpIHtcbiAgICAgICAgaWYobmVlZHNFbmNvZGluZykge1xuICAgICAgICAgIHRleHQgPSBlc2NhcGUodGV4dCk7XG4gICAgICAgIH1cblxuXHRcdFx0XHRjb250ZW50ICs9IHRleHQ7XG5cdFx0XHR9LFxuXHRcdFx0Y29tbWVudCh0ZXh0KSB7XG5cdFx0XHRcdGNvbnRlbnQgKz0gXCI8IS0tXCIgKyB0ZXh0ICsgXCItLT5cIjtcblx0XHRcdH1cbiAgICB9KTtcblxuICAgIGxldCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgbGV0IGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ3RleHQvaHRtbCcpO1xuICAgIGxldCBkb2NDaGlsZCA9IGRvYy5maXJzdENoaWxkO1xuXG4gICAgd2hpbGUgKGRvY0NoaWxkKSB7XG4gICAgICBpZiAoZG9jQ2hpbGQudGFnTmFtZSA9PT0gJ0hUTUwnKSB7XG4gICAgICAgIGxldCBodG1sQ2hpbGQgPSBkb2NDaGlsZC5maXJzdENoaWxkO1xuXG4gICAgICAgIHdoaWxlIChodG1sQ2hpbGQpIHtcbiAgICAgICAgICBpZiAoaHRtbENoaWxkLm5vZGVUeXBlID09PSAxKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGh0bWxDaGlsZC50YWdOYW1lKSB7XG4gICAgICAgICAgICBjYXNlICdIRUFEJzpcbiAgICAgICAgICAgICAgdGhpcy5faGFuZGxlSEVBRChodG1sQ2hpbGQpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ0JPRFknOlxuICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVCT0RZKGh0bWxDaGlsZCwgcHJpbWFyeVRyYW5zbGF0aW9uKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGh0bWxDaGlsZCA9IGh0bWxDaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBkb2NDaGlsZCA9IGRvY0NoaWxkLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVIRUFEKG5vZGUpIHtcbiAgICBsZXQgY3VycmVudENoaWxkID0gbm9kZS5maXJzdENoaWxkO1xuXG4gICAgd2hpbGUgKGN1cnJlbnRDaGlsZCkge1xuICAgICAgaWYgKGN1cnJlbnRDaGlsZC5ub2RlVHlwZSA9PT0gMSkge1xuICAgICAgICBzd2l0Y2ggKGN1cnJlbnRDaGlsZC50YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgJ1RJVExFJzpcbiAgICAgICAgICB0aGlzLnRpdGxlID0gY3VycmVudENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnTUVUQSc6XG4gICAgICAgICAgc3dpdGNoIChjdXJyZW50Q2hpbGQuZ2V0QXR0cmlidXRlKCduYW1lJykpIHtcbiAgICAgICAgICBjYXNlICdkZXNjcmlwdGlvbic6XG4gICAgICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gY3VycmVudENoaWxkLmdldEF0dHJpYnV0ZSgnY29udGVudCcpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAna2V5d29yZHMnOlxuICAgICAgICAgICAgdGhpcy5rZXl3b3JkcyA9IGN1cnJlbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKS5zcGxpdCgnLCcpLm1hcCh4ID0+IHgudHJpbSgpKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ2F1dGhvcic6XG4gICAgICAgICAgICB0aGlzLmF1dGhvciA9IGN1cnJlbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ2NvbnRlbnQnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGN1cnJlbnRDaGlsZCA9IGN1cnJlbnRDaGlsZC5uZXh0U2libGluZztcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQk9EWShub2RlLCBwcmltYXJ5VHJhbnNsYXRpb24pIHtcbiAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLnRlbXBsYXRlID0gdGhpcy5fY3JlYXRlVGVtcGxhdGVGcm9tQm9keShub2RlKTtcbiAgICBsZXQgdWlkcyA9IHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgnW3VpZF0nKTtcbiAgICBsZXQgc2VjdGlvbnMgPSB7fTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBpaSA9IHVpZHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgbGV0IGN1cnJlbnQgPSB1aWRzW2ldO1xuICAgICAgc2VjdGlvbnNbY3VycmVudC5nZXRBdHRyaWJ1dGUoJ3VpZCcpXSA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgaWYgKHByaW1hcnlUcmFuc2xhdGlvbiAhPT0gdGhpcykge1xuICAgICAgdGhpcy5hdXRob3IgPSBwcmltYXJ5VHJhbnNsYXRpb24uYXV0aG9yO1xuICAgICAgdGhpcy5rZXl3b3JkcyA9IHByaW1hcnlUcmFuc2xhdGlvbi5rZXl3b3JkcztcblxuICAgICAgZm9yIChsZXQgdWlkIGluIHByaW1hcnlUcmFuc2xhdGlvbi5zZWN0aW9ucykge1xuICAgICAgICBsZXQgcHJpbWFyeVNlY3Rpb24gPSBwcmltYXJ5VHJhbnNsYXRpb24uc2VjdGlvbnNbdWlkXTtcbiAgICAgICAgbGV0IHRyYW5zbGF0aW9uU2VjdGlvbiA9IHNlY3Rpb25zW3VpZF07XG5cbiAgICAgICAgaWYgKHRyYW5zbGF0aW9uU2VjdGlvbikge1xuICAgICAgICAgIGxldCBwcmltYXJ5VmVyc2lvbiA9IHByaW1hcnlTZWN0aW9uLmdldEF0dHJpYnV0ZSgndmVyc2lvbicpO1xuICAgICAgICAgIGlmIChwcmltYXJ5VmVyc2lvbikge1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0aW9uVmVyc2lvbiA9IHRyYW5zbGF0aW9uU2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ3ZlcnNpb24nKTtcbiAgICAgICAgICAgIHRyYW5zbGF0aW9uU2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZlcnNpb24tbWF0Y2hlcycsIHRoaXMuX2RldGVybWluZVZlcnNpb25NYXRjaGVzKHByaW1hcnlWZXJzaW9uLCB0cmFuc2xhdGlvblZlcnNpb24pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5fc2hvdWxkQ29weUNvbnRlbnQocHJpbWFyeVNlY3Rpb24udGFnTmFtZSkpIHtcbiAgICAgICAgICAgIHdoaWxlICh0cmFuc2xhdGlvblNlY3Rpb24uZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgICB0cmFuc2xhdGlvblNlY3Rpb24ucmVtb3ZlQ2hpbGQodHJhbnNsYXRpb25TZWN0aW9uLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IHByaW1hcnlTZWN0aW9uLmZpcnN0Q2hpbGQ7XG5cbiAgICAgICAgICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICAgICAgICAgIHRyYW5zbGF0aW9uU2VjdGlvbi5hcHBlbmRDaGlsZChjdXJyZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudW5hdmFpbGFibGUgPSB0cnVlOyAvL1RPRE86IGNyZWF0ZSBlbmdsaXNoIHNlY3Rpb24/XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZWN0aW9ucyA9IHNlY3Rpb25zO1xuXG4gICAgICBmb3IgKGxldCB1aWQgaW4gc2VjdGlvbnMpIHtcbiAgICAgICAgc2VjdGlvbnNbdWlkXSA9IHNlY3Rpb25zW3VpZF0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICBsZXQgb3JpZ2luYWxUZW1wbGF0ZSA9IEZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudChET00uY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gICAgICBsZXQgY3VycmVudCA9IHRlbXBsYXRlLmNvbnRlbnQuZmlyc3RDaGlsZDtcblxuICAgICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgICAgb3JpZ2luYWxUZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGN1cnJlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgY3VycmVudCA9IGN1cnJlbnQubmV4dFNpYmxpbmc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMub3JpZ2luYWxUZW1wbGF0ZSA9IG9yaWdpbmFsVGVtcGxhdGU7XG4gICAgfVxuICB9XG5cbiAgX2NyZWF0ZVRlbXBsYXRlRnJvbUJvZHkoYm9keSkge1xuICAgIHJldHVybiBET00uY3JlYXRlVGVtcGxhdGVGcm9tTWFya3VwKCc8dGVtcGxhdGU+JyArIGJvZHkuaW5uZXJIVE1MICsgJzwvdGVtcGxhdGU+Jyk7XG4gIH1cblxuICBfc2hvdWxkQ29weUNvbnRlbnQodGFnTmFtZSkge1xuICAgIHJldHVybiB0YWdzRnJvbVNvdXJjZS5pbmRleE9mKHRhZ05hbWUpICE9PSAtMTtcbiAgfVxuXG4gIF9kZXRlcm1pbmVWZXJzaW9uTWF0Y2hlcyhwcmltYXJ5VmVyc2lvbiwgdHJhbnNsYXRpb25WZXJzaW9uKSB7XG4gICAgbGV0IHByaW1hcnlQYXJ0cyA9IHByaW1hcnlWZXJzaW9uLnNwbGl0KCcuJykubWFwKHggPT4gcGFyc2VJbnQoeC50cmltKCksIDEwKSk7XG4gICAgbGV0IHRyYW5zbGF0aW9uUGFydHMgPSB0cmFuc2xhdGlvblZlcnNpb24uc3BsaXQoJy4nKS5tYXAoeCA9PiBwYXJzZUludCh4LnRyaW0oKSwgMTApKTtcblxuICAgIGlmIChwcmltYXJ5UGFydHNbMF0gPT09IHRyYW5zbGF0aW9uUGFydHNbMF0pIHtcbiAgICAgIGlmIChwcmltYXJ5UGFydHNbMV0gPT09IHRyYW5zbGF0aW9uUGFydHNbMV0pIHtcbiAgICAgICAgaWYgKHByaW1hcnlQYXJ0cy5sZW5ndGggPiAxICYmIHRyYW5zbGF0aW9uUGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIGlmIChwcmltYXJ5UGFydHNbMl0gPT09IHRyYW5zbGF0aW9uUGFydHNbMl0pIHtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVHV0b3JpYWwge1xuICBzdGF0aWMgcHJldmlvdXNTZWxlY3Rpb24gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGF0dHJzLCBwcm9kdWN0KSB7XG4gICAgdGhpcy50aXRsZSA9IGF0dHJzLnRpdGxlO1xuICAgIHRoaXMuc2x1ZyA9IGF0dHJzLmhyZWYuc3Vic3RyaW5nKGF0dHJzLmhyZWYubGFzdEluZGV4T2YoJy8nKSArIDEpLnJlcGxhY2UoJy5odG1sJywgJycpO1xuICAgIHRoaXMuaHJlZiA9IGF0dHJzLmhyZWY7XG4gICAgdGhpcy5wcm9maWxlcyA9IGF0dHJzLnByb2ZpbGVzO1xuICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG4gIH1cblxuICBnZXRPcmRlckZvclByb2ZpbGUocHJvZmlsZU5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9maWxlcy5maW5kKHggPT4geC5uYW1lID09PSBwcm9maWxlTmFtZSkub3JkZXI7XG4gIH1cblxuICBtYXRjaGVzUHJvZmlsZShwcm9maWxlTmFtZSkge1xuICAgIGlmICh0aGlzLnByb2ZpbGVzKSB7XG4gICAgICByZXR1cm4gISF0aGlzLnByb2ZpbGVzLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHByb2ZpbGVOYW1lKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzZWxlY3QoKSB7XG4gICAgaWYgKFR1dG9yaWFsLnByZXZpb3VzU2VsZWN0aW9uKSB7XG4gICAgICBUdXRvcmlhbC5wcmV2aW91c1NlbGVjdGlvbi5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgVHV0b3JpYWwucHJldmlvdXNTZWxlY3Rpb24gPSB0aGlzO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENoaWxkTW9kZWwge1xuICBpZCA9IC0xO1xuICBraW5kID0gLTE7XG4gIGtpbmRTdHJpbmcgPSAnJztcbiAga2luZE5hbWUgPSAnJztcbiAgbmFtZSA9ICcnO1xuICBvcmlnaW5hbE5hbWUgPSAnJztcbiAgY2hpbGRyZW4gPSBbXTtcbiAgY2xhc3NlcyA9IFtdO1xuICBncm91cHMgPSBbXTtcbiAgZmxhZ3MgPSB7fTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgICB0aGlzLnByZXR0eU5hbWUgPSBwcmV0dHlOYW1lKHRoaXMubmFtZSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEdyb3VwTW9kZWwge1xuICBpZCA9IC0xO1xuICBraW5kID0gLTE7XG4gIGtpbmROYW1lID0gJyc7XG4gIHRpdGxlID0gJyc7XG4gIGNoaWxkcmVuID0gW107XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmROYW1lO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDbGFzc01vZGVsIHtcbiAgY29tbWVudCA9IHt9O1xuICBtZXRob2RzID0gW107XG4gIGdyb3VwcyA9IFtdO1xuICBmbGFncyA9IHt9O1xuICBwcm9wZXJ0aWVzID0gW107XG4gIGNvbnN0cnVjdG9yTWV0aG9kID0ge307XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmRTdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE1ldGhvZE1vZGVsIHtcbiAgc2lnbmF0dXJlID0ge307XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmRTdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENvbnN0cnVjdG9yTW9kZWwge1xuICBzaWduYXR1cmUgPSB7fTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlTW9kZWwge1xuICBjbGFzc2VzID0gW107XG4gIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyaWFibGVzID0gW107XG4gIG1ldGhvZHMgPSBbXTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlNb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmRTdHJpbmc7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFNpZ25hdHVyZU1vZGVsIHtcbiAgY29tbWVudCA9IHt9O1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmtpbmROYW1lID0gdGhpcy5raW5kU3RyaW5nO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBWYXJpYWJsZU1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRnVuY3Rpb25Nb2RlbCB7XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmRTdHJpbmc7XG4gICAgdGhpcy5zaWduYXR1cmUgPSB0aGlzLnNpZ25hdHVyZXNbMF07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
