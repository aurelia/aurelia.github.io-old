System.register(['aurelia-path', 'aurelia-templating', 'aurelia-loader', 'aurelia-pal', './html-parser', 'commonmark'], function (_export) {
  'use strict';

  var join, viewStrategy, TemplateRegistryEntry, DOM, FEATURE, HTMLParser, commonmark, baseTranslation, availableNotificationTypes, reader, writer, AureliaDoc, AureliaDocTranslation, AureliaDocTranslationViewStrategy, AureliaDocParser;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function wrapInSection(sectionHeader, sectionId, sectionVersion, node) {
    var htmlBlock = new commonmark.Node('HtmlBlock');
    var current = sectionHeader.next;

    sectionHeader.unlink();
    htmlBlock.literal = '<au-doc-section uid="' + sectionId + '" version="' + sectionVersion + '" heading="' + sectionHeader.firstChild.firstChild.literal + '">';

    while (current !== null && current !== node) {
      var next = current.next;
      htmlBlock.literal += writer.render(current);
      current.unlink();
      current = next;
    }

    htmlBlock.literal += "</au-doc-section>";

    return htmlBlock;
  }

  function checkDomain(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url.toLowerCase().replace(/([a-z])?:\/\//, '$1').split('/')[0];
  }

  function isExternalLink(url) {
    return (url.indexOf(':') > -1 || url.indexOf('//') > -1) && checkDomain(location.href) !== checkDomain(url);
  }
  return {
    setters: [function (_aureliaPath) {
      join = _aureliaPath.join;
    }, function (_aureliaTemplating) {
      viewStrategy = _aureliaTemplating.viewStrategy;
    }, function (_aureliaLoader) {
      TemplateRegistryEntry = _aureliaLoader.TemplateRegistryEntry;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
      FEATURE = _aureliaPal.FEATURE;
    }, function (_htmlParser) {
      HTMLParser = _htmlParser.HTMLParser;
    }, function (_commonmark) {
      commonmark = _commonmark['default'];
    }],
    execute: function () {
      baseTranslation = 'en-US';
      availableNotificationTypes = ['info', 'warning', 'danger'];
      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();

      AureliaDoc = (function () {
        function AureliaDoc(attrs, productVersion, server, local) {
          _classCallCheck(this, AureliaDoc);

          this.title = attrs.title;
          this.productVersion = productVersion;
          this.server = server;
          this.baseUrl = productVersion.baseUrl;
          this.href = attrs.href;
          this.primaryUrl = join(this.baseUrl, attrs.href);
          this.slug = this.primaryUrl.substring(this.primaryUrl.lastIndexOf('/') + 1).replace('.md', '');
          this.translations = {};
          this.local = !!local;
        }

        _createClass(AureliaDoc, [{
          key: 'getTranslation',
          value: function getTranslation(culture, local) {
            var _this = this;

            if (culture in this.translations) {
              return Promise.resolve(this.translations[culture]);
            }

            if (baseTranslation in this.translations) {
              return this._loadTranslation(culture);
            }

            return this._loadTranslation(baseTranslation).then(function () {
              return _this.getTranslation(culture);
            });
          }
        }, {
          key: '_loadTranslation',
          value: function _loadTranslation(culture) {
            var _this2 = this;

            var translation = new AureliaDocTranslation(this, culture, this.local);
            this.translations[culture] = translation;

            return this.server.loadArticleTranslation(translation).then(function (_translation) {
              if (_translation.unavailable) {
                _translation._subsume(_this2.translations[baseTranslation]);
                _translation.view = new AureliaDocTranslationViewStrategy(_translation);
              } else {
                _translation._prepare(_this2.translations[baseTranslation]);
                _translation.view = new AureliaDocTranslationViewStrategy(_translation);
              }

              return _translation;
            });
          }
        }]);

        return AureliaDoc;
      })();

      _export('AureliaDoc', AureliaDoc);

      AureliaDocTranslation = (function () {
        function AureliaDocTranslation(doc, culture, local) {
          _classCallCheck(this, AureliaDocTranslation);

          this.doc = doc;
          this.content = null;
          this.culture = culture;

          if (local) {
            this.local = true;
            this.url = 'doc/article/' + baseTranslation + '/' + doc.href + '.md';
          } else {
            this.url = doc.primaryUrl;
          }

          if (culture !== baseTranslation) {
            this.url = this.url.replace(baseTranslation, culture);
          }

          var index = this.url.indexOf(this.culture) - 8;
          this.docsUrl = this.url.substring(0, index);
        }

        _createClass(AureliaDocTranslation, [{
          key: '_subsume',
          value: function _subsume(other) {
            this.metadata = Object.assign({}, other.metadata);
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
          key: '_prepare',
          value: function _prepare(baseTranslation) {
            new AureliaDocParser(this, baseTranslation).parse();
          }
        }]);

        return AureliaDocTranslation;
      })();

      AureliaDocTranslationViewStrategy = (function () {
        function AureliaDocTranslationViewStrategy(translation) {
          _classCallCheck(this, _AureliaDocTranslationViewStrategy);

          this.translation = translation;
        }

        _createClass(AureliaDocTranslationViewStrategy, [{
          key: 'loadViewFactory',
          value: function loadViewFactory(viewEngine, compileInstruction, loadContext) {
            if (this.entry) {
              return Promise.resolve(this.entry.factory);
            }

            this.entry = new TemplateRegistryEntry(this.translation.url);
            this.entry.template = this.translation.template;
            return viewEngine.loadViewFactory(this.entry, compileInstruction, loadContext);
          }
        }]);

        var _AureliaDocTranslationViewStrategy = AureliaDocTranslationViewStrategy;
        AureliaDocTranslationViewStrategy = viewStrategy(AureliaDocTranslationViewStrategy) || AureliaDocTranslationViewStrategy;
        return AureliaDocTranslationViewStrategy;
      })();

      AureliaDocParser = (function () {
        function AureliaDocParser(translation, baseTranslation) {
          _classCallCheck(this, AureliaDocParser);

          this.metadataTokens = ['---', '---'];

          this.translation = translation;
          this.baseTranslation = baseTranslation;
        }

        _createClass(AureliaDocParser, [{
          key: 'parse',
          value: function parse() {
            this.translation.metadata = this._getMetadata(this.translation.content);
            this.translation.content = this._getContent(this.translation.content);
            this.translation.html = this._transformHTML(this.translation.content);
            this.translation.html = this._transformMarkdown(this.translation.html);
            this._configureTemplate(this.translation, this.baseTranslation);
          }
        }, {
          key: '_getMetadata',
          value: function _getMetadata(text) {
            var matcher = new RegExp('^' + this.metadataTokens[0] + '([\\s|\\S]*?)' + this.metadataTokens[1]);
            var results = matcher.exec(text);

            if (!results) {
              throw new Error('Metadata missing from Aurelia Doc.');
            }

            return JSON.parse(results[1]);
          }
        }, {
          key: '_getContent',
          value: function _getContent(text) {
            var matcher = new RegExp('^ *?\\' + this.metadataTokens[0] + '[^]*?' + this.metadataTokens[1] + '*');
            var content = text.replace(matcher, '');

            if (!content) {
              throw new Error('Content missing from Aurelia Doc.');
            }

            return content;
          }
        }, {
          key: '_transformHTML',
          value: function _transformHTML(input) {
            var output = '';
            var needsEncoding = false;

            HTMLParser(input, {
              start: function start(tag, attrs, unary) {
                output += "<" + tag;

                for (var i = 0; i < attrs.length; i++) {
                  output += " " + attrs[i].name + '="' + attrs[i].escaped + '"';
                }

                output += ">";

                if (tag === 'source-code') {
                  needsEncoding = true;
                }
              },
              end: function end(tag) {
                if (tag === 'source-code') {
                  needsEncoding = false;
                }

                output += "</" + tag + ">";
              },
              chars: function chars(text) {
                if (needsEncoding) {
                  text = escape(text);
                }

                output += text;
              },
              comment: function comment(text) {
                output += "<!--" + text + "-->";
              }
            });

            return output;
          }
        }, {
          key: '_transformMarkdown',
          value: function _transformMarkdown(content) {
            var parsed = reader.parse(content);
            var walker = parsed.walker();
            var event = undefined,
                node = undefined;
            var sectionHeader = null;
            var sectionId = undefined;
            var sectionVersion = undefined;

            while (event = walker.next()) {
              node = event.node;

              if (event.entering) {
                switch (node.type) {
                  case 'Header':
                    if (node.level === 2) {
                      if (sectionHeader !== null) {
                        node.insertBefore(wrapInSection(sectionHeader, sectionId, sectionVersion, node));
                      }

                      sectionHeader = node;
                    }
                    break;
                }
              } else {
                switch (node.type) {
                  case 'Image':
                    if (!isExternalLink(node.destination)) {
                      node.destination = join(this.translation.docsUrl, node.destination);
                    }
                    break;
                  case 'Link':
                    if (node.destination) {
                      if (node.destination.indexOf('aurelia-doc://') === 0) {
                        var info = node.destination.replace('aurelia-doc://', '');

                        if (info.indexOf('section/') === 0) {
                          info = info.replace('section/', '');
                          var parts = info.split('/version/');
                          sectionId = parts[0];
                          sectionVersion = parts[1];
                        } else if (info.indexOf('resource/') === 0) {
                          info = info.replace('resource/', '');
                          var ref = new commonmark.Node('HtmlBlock');
                          ref.literal = '<resource-ref resource-id="' + info + '" heading="' + node.firstChild.literal + '"></resource-ref>';
                          node.insertBefore(ref);
                          node.unlink();
                        }
                      } else if (isExternalLink(node.destination)) {
                        var a = new commonmark.Node('HtmlBlock');
                        a.literal = '<a href="' + node.destination + '" target="_blank">' + node.firstChild.literal + '</a>';
                        node.insertBefore(a);
                        node.unlink();
                      }
                    }
                    break;
                  case 'BlockQuote':
                    var literal = node.firstChild.firstChild.literal;

                    if (literal) {
                      literal = literal.trim();

                      var typeAndHeading = literal.split(':').map(function (x) {
                        return x.trim();
                      });
                      var notificationType = typeAndHeading[0].toLowerCase();

                      if (availableNotificationTypes.indexOf(notificationType) !== -1) {
                        var htmlBlock = new commonmark.Node('HtmlBlock');
                        var current = node.firstChild;

                        current.firstChild.unlink();
                        htmlBlock.literal = '<au-alert type="' + notificationType + '" heading="' + (typeAndHeading[1] || typeAndHeading[0]) + '">';

                        while (current) {
                          htmlBlock.literal += writer.render(current);
                          current = current.next;
                        }

                        htmlBlock.literal += "</au-alert>";
                        node.insertBefore(htmlBlock);
                        node.unlink();
                      }
                    }
                    break;
                }
              }
            }

            if (sectionHeader !== null) {
              parsed.appendChild(wrapInSection(sectionHeader, sectionId, sectionVersion, node));
            }

            return writer.render(parsed);
          }
        }, {
          key: '_configureTemplate',
          value: function _configureTemplate(translation, baseTranslation) {
            var template = translation.template = DOM.createTemplateFromMarkup('<template>' + translation.html + '</template>');
            var sectionIds = template.content.querySelectorAll('au-doc-section');
            var sections = {};

            for (var i = 0, ii = sectionIds.length; i < ii; ++i) {
              var current = sectionIds[i];
              sections[current.getAttribute('uid')] = current;
            }

            if (baseTranslation !== translation) {
              translation.metadata = Object.assign({}, baseTranslation.metadata, translation.metadata);

              for (var sectionId in baseTranslation.sections) {
                var primarySection = baseTranslation.sections[sectionId];
                var translationSection = sections[sectionId];

                if (translationSection) {
                  var primaryVersion = primarySection.getAttribute('version');
                  if (primaryVersion) {
                    var translationVersion = translationSection.getAttribute('version');
                    translationSection.setAttribute('version-matches', this._determineVersionMatches(primaryVersion, translationVersion));
                  }
                } else {
                  translation.unavailable = true;
                  break;
                }
              }

              if (!translation.unavailable) {
                var resourceRefs = template.content.querySelectorAll('resource-ref');
                var current = undefined;
                var resourceId = undefined;
                var resource = undefined;
                var clone = undefined;

                for (var i = 0, ii = resourceRefs.length; i < ii; ++i) {
                  current = resourceRefs[i];
                  resourceId = current.getAttribute('resource-id');
                  resource = baseTranslation.resources[resourceId];

                  if (resource) {
                    clone = resource.cloneNode(true);
                    clone.setAttribute('heading', current.getAttribute('heading'));
                    current.parentNode.replaceChild(clone, current);
                  }
                }
              }
            } else {
              for (var sectionId in sections) {
                sections[sectionId] = sections[sectionId].cloneNode(true);
              }

              translation.sections = sections;

              var resourceIds = template.content.querySelectorAll('[resource]');
              var resources = {};
              var current = undefined;

              for (var i = 0, ii = resourceIds.length; i < ii; ++i) {
                current = resourceIds[i];
                resources[current.getAttribute('resource')] = current.cloneNode(true);
              }

              translation.resources = resources;

              this._preserveOriginalTemplate(translation);
            }
          }
        }, {
          key: '_preserveOriginalTemplate',
          value: function _preserveOriginalTemplate(translation) {
            var originalTemplate = FEATURE.ensureHTMLTemplateElement(DOM.createElement('template'));
            var current = translation.template.content.firstChild;

            while (current) {
              originalTemplate.content.appendChild(current.cloneNode(true));
              current = current.nextSibling;
            }

            translation.originalTemplate = originalTemplate;
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

        return AureliaDocParser;
      })();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZG9jcy9hdXJlbGlhLWRvYy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUZBUUksZUFBZSxFQUNmLDBCQUEwQixFQUMxQixNQUFNLEVBQ04sTUFBTSxFQUVHLFVBQVUsRUE2Q2pCLHFCQUFxQixFQTJDckIsaUNBQWlDLEVBZ0JqQyxnQkFBZ0I7Ozs7OztBQW1SdEIsV0FBUyxhQUFhLENBQUMsYUFBYSxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFO0FBQ3JFLFFBQUksU0FBUyxHQUFHLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNqRCxRQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDOztBQUVqQyxpQkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQ3ZCLGFBQVMsQ0FBQyxPQUFPLDZCQUEyQixTQUFTLG1CQUFjLGNBQWMsbUJBQWMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxPQUFJLENBQUM7O0FBRS9JLFdBQU0sT0FBTyxLQUFLLElBQUksSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO0FBQzFDLFVBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUM7QUFDeEIsZUFBUyxDQUFDLE9BQU8sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLGFBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixhQUFPLEdBQUcsSUFBSSxDQUFDO0tBQ2hCOztBQUVELGFBQVMsQ0FBQyxPQUFPLElBQUksbUJBQW1CLENBQUM7O0FBRXpDLFdBQU8sU0FBUyxDQUFDO0dBQ2xCOztBQUVELFdBQVMsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUN4QixRQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFHO0FBQzVCLFNBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztLQUMvQjtBQUNE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Q0FBQyxDQUFDLENBQUMsRUFBRTtBQUMzQyxrQkFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDM0Msb0JBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLElBQUksZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtBQUMxRCxzQkFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsMkJBQU8sQ0FBQyxDQUFDO21CQUNWO2lCQUNGOztBQUVELHVCQUFPLENBQUMsQ0FBQztlQUNWOztBQUVELHFCQUFPLENBQUMsQ0FBQzthQUNWOztBQUVELG1CQUFPLENBQUMsQ0FBQztXQUNWOzs7ZUFoUkcsZ0JBQWdCIiwiZmlsZSI6ImF1cmVsaWEtZG9jcy9hdXJlbGlhLWRvYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7am9pbn0gZnJvbSAnYXVyZWxpYS1wYXRoJztcbmltcG9ydCB7dmlld1N0cmF0ZWd5fSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtUZW1wbGF0ZVJlZ2lzdHJ5RW50cnl9IGZyb20gJ2F1cmVsaWEtbG9hZGVyJztcbmltcG9ydCB7RE9NLCBGRUFUVVJFfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge0hUTUxQYXJzZXJ9IGZyb20gJy4vaHRtbC1wYXJzZXInO1xuXG5pbXBvcnQgY29tbW9ubWFyayBmcm9tICdjb21tb25tYXJrJztcblxubGV0IGJhc2VUcmFuc2xhdGlvbiA9ICdlbi1VUyc7XG5sZXQgYXZhaWxhYmxlTm90aWZpY2F0aW9uVHlwZXMgPSBbJ2luZm8nLCAnd2FybmluZycsICdkYW5nZXInXTtcbmxldCByZWFkZXIgPSBuZXcgY29tbW9ubWFyay5QYXJzZXIoKTtcbmxldCB3cml0ZXIgPSBuZXcgY29tbW9ubWFyay5IdG1sUmVuZGVyZXIoKTtcblxuZXhwb3J0IGNsYXNzIEF1cmVsaWFEb2Mge1xuICBjb25zdHJ1Y3RvcihhdHRycywgcHJvZHVjdFZlcnNpb24sIHNlcnZlciwgbG9jYWwpIHtcbiAgICB0aGlzLnRpdGxlID0gYXR0cnMudGl0bGU7XG4gICAgdGhpcy5wcm9kdWN0VmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uO1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMuYmFzZVVybCA9IHByb2R1Y3RWZXJzaW9uLmJhc2VVcmw7XG4gICAgdGhpcy5ocmVmID0gYXR0cnMuaHJlZjtcbiAgICB0aGlzLnByaW1hcnlVcmwgPSBqb2luKHRoaXMuYmFzZVVybCwgYXR0cnMuaHJlZik7XG4gICAgdGhpcy5zbHVnID0gdGhpcy5wcmltYXJ5VXJsLnN1YnN0cmluZyh0aGlzLnByaW1hcnlVcmwubGFzdEluZGV4T2YoJy8nKSArIDEpLnJlcGxhY2UoJy5tZCcsICcnKTtcbiAgICB0aGlzLnRyYW5zbGF0aW9ucyA9IHt9O1xuICAgIHRoaXMubG9jYWwgPSAhIWxvY2FsO1xuICB9XG5cbiAgZ2V0VHJhbnNsYXRpb24oY3VsdHVyZSwgbG9jYWwpIHtcbiAgICBpZiAoY3VsdHVyZSBpbiB0aGlzLnRyYW5zbGF0aW9ucykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnRyYW5zbGF0aW9uc1tjdWx0dXJlXSk7XG4gICAgfVxuXG4gICAgaWYgKGJhc2VUcmFuc2xhdGlvbiBpbiB0aGlzLnRyYW5zbGF0aW9ucykge1xuICAgICAgcmV0dXJuIHRoaXMuX2xvYWRUcmFuc2xhdGlvbihjdWx0dXJlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5fbG9hZFRyYW5zbGF0aW9uKGJhc2VUcmFuc2xhdGlvbilcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuZ2V0VHJhbnNsYXRpb24oY3VsdHVyZSkpO1xuICB9XG5cbiAgX2xvYWRUcmFuc2xhdGlvbihjdWx0dXJlKSB7XG4gICAgbGV0IHRyYW5zbGF0aW9uID0gbmV3IEF1cmVsaWFEb2NUcmFuc2xhdGlvbih0aGlzLCBjdWx0dXJlLCB0aGlzLmxvY2FsKTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uc1tjdWx0dXJlXSA9IHRyYW5zbGF0aW9uO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VydmVyLmxvYWRBcnRpY2xlVHJhbnNsYXRpb24odHJhbnNsYXRpb24pXG4gICAgICAudGhlbihfdHJhbnNsYXRpb24gPT4ge1xuICAgICAgICBpZiAoX3RyYW5zbGF0aW9uLnVuYXZhaWxhYmxlKSB7XG4gICAgICAgICAgX3RyYW5zbGF0aW9uLl9zdWJzdW1lKHRoaXMudHJhbnNsYXRpb25zW2Jhc2VUcmFuc2xhdGlvbl0pO1xuICAgICAgICAgIF90cmFuc2xhdGlvbi52aWV3ID0gbmV3IEF1cmVsaWFEb2NUcmFuc2xhdGlvblZpZXdTdHJhdGVneShfdHJhbnNsYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF90cmFuc2xhdGlvbi5fcHJlcGFyZSh0aGlzLnRyYW5zbGF0aW9uc1tiYXNlVHJhbnNsYXRpb25dKTtcbiAgICAgICAgICBfdHJhbnNsYXRpb24udmlldyA9IG5ldyBBdXJlbGlhRG9jVHJhbnNsYXRpb25WaWV3U3RyYXRlZ3koX3RyYW5zbGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdHJhbnNsYXRpb247XG4gICAgICB9KTtcbiAgfVxufVxuXG5jbGFzcyBBdXJlbGlhRG9jVHJhbnNsYXRpb24ge1xuICBjb25zdHJ1Y3Rvcihkb2MsIGN1bHR1cmUsIGxvY2FsKSB7XG4gICAgdGhpcy5kb2MgPSBkb2M7XG4gICAgdGhpcy5jb250ZW50ID0gIG51bGw7XG4gICAgdGhpcy5jdWx0dXJlID0gY3VsdHVyZTtcblxuICAgIGlmIChsb2NhbCkge1xuICAgICAgdGhpcy5sb2NhbCA9IHRydWU7XG4gICAgICB0aGlzLnVybCA9IGBkb2MvYXJ0aWNsZS8ke2Jhc2VUcmFuc2xhdGlvbn0vJHtkb2MuaHJlZn0ubWRgO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVybCA9IGRvYy5wcmltYXJ5VXJsO1xuICAgIH1cblxuICAgIGlmIChjdWx0dXJlICE9PSBiYXNlVHJhbnNsYXRpb24pIHtcbiAgICAgIHRoaXMudXJsID0gdGhpcy51cmwucmVwbGFjZShiYXNlVHJhbnNsYXRpb24sIGN1bHR1cmUpO1xuICAgIH1cblxuICAgIGxldCBpbmRleCA9IHRoaXMudXJsLmluZGV4T2YodGhpcy5jdWx0dXJlKSAtIDg7XG4gICAgdGhpcy5kb2NzVXJsID0gdGhpcy51cmwuc3Vic3RyaW5nKDAsIGluZGV4KTtcbiAgfVxuXG4gIF9zdWJzdW1lKG90aGVyKSB7XG4gICAgdGhpcy5tZXRhZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIG90aGVyLm1ldGFkYXRhKTtcbiAgICB0aGlzLnRlbXBsYXRlID0gRE9NLmNyZWF0ZVRlbXBsYXRlRnJvbU1hcmt1cCgnPHRlbXBsYXRlPicgKyBvdGhlci5vcmlnaW5hbFRlbXBsYXRlLmNvbnRlbnQuaW5uZXJIVE1MICsgJzwvdGVtcGxhdGU+Jyk7XG5cbiAgICBsZXQgb3JpZ2luYWxDb250ZW50ID0gb3RoZXIub3JpZ2luYWxUZW1wbGF0ZS5jb250ZW50O1xuICAgIGxldCB0ZW1wbGF0ZSA9IEZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudChET00uY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKSk7XG4gICAgbGV0IGN1cnJlbnQgPSBvcmlnaW5hbENvbnRlbnQuZmlyc3RDaGlsZDtcblxuICAgIHdoaWxlIChjdXJyZW50KSB7XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKGN1cnJlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRTaWJsaW5nO1xuICAgIH1cblxuICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgfVxuXG4gIF9wcmVwYXJlKGJhc2VUcmFuc2xhdGlvbikge1xuICAgIG5ldyBBdXJlbGlhRG9jUGFyc2VyKHRoaXMsIGJhc2VUcmFuc2xhdGlvbikucGFyc2UoKTtcbiAgfVxufVxuXG5Admlld1N0cmF0ZWd5XG5jbGFzcyBBdXJlbGlhRG9jVHJhbnNsYXRpb25WaWV3U3RyYXRlZ3kge1xuICBjb25zdHJ1Y3Rvcih0cmFuc2xhdGlvbikge1xuICAgIHRoaXMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcbiAgfVxuXG4gIGxvYWRWaWV3RmFjdG9yeSh2aWV3RW5naW5lLCBjb21waWxlSW5zdHJ1Y3Rpb24sIGxvYWRDb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuZW50cnkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5lbnRyeS5mYWN0b3J5KTtcbiAgICB9XG5cbiAgICB0aGlzLmVudHJ5ID0gbmV3IFRlbXBsYXRlUmVnaXN0cnlFbnRyeSh0aGlzLnRyYW5zbGF0aW9uLnVybCk7XG4gICAgdGhpcy5lbnRyeS50ZW1wbGF0ZSA9IHRoaXMudHJhbnNsYXRpb24udGVtcGxhdGU7XG4gICAgcmV0dXJuIHZpZXdFbmdpbmUubG9hZFZpZXdGYWN0b3J5KHRoaXMuZW50cnksIGNvbXBpbGVJbnN0cnVjdGlvbiwgbG9hZENvbnRleHQpO1xuICB9XG59XG5cbmNsYXNzIEF1cmVsaWFEb2NQYXJzZXIge1xuICBtZXRhZGF0YVRva2VucyA9IFsnLS0tJywnLS0tJ107XG5cbiAgY29uc3RydWN0b3IodHJhbnNsYXRpb24sIGJhc2VUcmFuc2xhdGlvbikge1xuICAgIHRoaXMudHJhbnNsYXRpb24gPSB0cmFuc2xhdGlvbjtcbiAgICB0aGlzLmJhc2VUcmFuc2xhdGlvbiA9IGJhc2VUcmFuc2xhdGlvbjtcbiAgfVxuXG4gIHBhcnNlKCkge1xuICAgIHRoaXMudHJhbnNsYXRpb24ubWV0YWRhdGEgPSB0aGlzLl9nZXRNZXRhZGF0YSh0aGlzLnRyYW5zbGF0aW9uLmNvbnRlbnQpO1xuICAgIHRoaXMudHJhbnNsYXRpb24uY29udGVudCA9IHRoaXMuX2dldENvbnRlbnQodGhpcy50cmFuc2xhdGlvbi5jb250ZW50KTtcbiAgICB0aGlzLnRyYW5zbGF0aW9uLmh0bWwgPSB0aGlzLl90cmFuc2Zvcm1IVE1MKHRoaXMudHJhbnNsYXRpb24uY29udGVudCk7XG4gICAgdGhpcy50cmFuc2xhdGlvbi5odG1sID0gdGhpcy5fdHJhbnNmb3JtTWFya2Rvd24odGhpcy50cmFuc2xhdGlvbi5odG1sKTtcbiAgICB0aGlzLl9jb25maWd1cmVUZW1wbGF0ZSh0aGlzLnRyYW5zbGF0aW9uLCB0aGlzLmJhc2VUcmFuc2xhdGlvbik7XG4gIH1cblxuICBfZ2V0TWV0YWRhdGEodGV4dCkge1xuICAgIGxldCBtYXRjaGVyID0gbmV3IFJlZ0V4cCgnXicgKyB0aGlzLm1ldGFkYXRhVG9rZW5zWzBdICsgJyhbXFxcXHN8XFxcXFNdKj8pJyArIHRoaXMubWV0YWRhdGFUb2tlbnNbMV0pO1xuICAgIGxldCByZXN1bHRzID0gbWF0Y2hlci5leGVjKHRleHQpO1xuXG4gICAgaWYgKCFyZXN1bHRzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGFkYXRhIG1pc3NpbmcgZnJvbSBBdXJlbGlhIERvYy4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gSlNPTi5wYXJzZShyZXN1bHRzWzFdKTtcbiAgfVxuXG4gIF9nZXRDb250ZW50KHRleHQpIHtcblx0XHRsZXQgbWF0Y2hlciA9IG5ldyBSZWdFeHAoJ14gKj9cXFxcJyArIHRoaXMubWV0YWRhdGFUb2tlbnNbMF0gKyAnW15dKj8nICsgdGhpcy5tZXRhZGF0YVRva2Vuc1sxXSArICcqJyk7XG4gICAgbGV0IGNvbnRlbnQgPSB0ZXh0LnJlcGxhY2UobWF0Y2hlciwgJycpO1xuXG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbnRlbnQgbWlzc2luZyBmcm9tIEF1cmVsaWEgRG9jLicpXG4gICAgfVxuXG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBfdHJhbnNmb3JtSFRNTChpbnB1dCkge1xuICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICBsZXQgbmVlZHNFbmNvZGluZyA9IGZhbHNlO1xuXG4gICAgSFRNTFBhcnNlcihpbnB1dCwge1xuICAgICAgc3RhcnQodGFnLCBhdHRycywgdW5hcnkpIHtcbiAgICAgICAgb3V0cHV0ICs9IFwiPFwiICsgdGFnO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXR0cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBvdXRwdXQgKz0gXCIgXCIgKyBhdHRyc1tpXS5uYW1lICsgJz1cIicgKyBhdHRyc1tpXS5lc2NhcGVkICsgJ1wiJztcbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dCArPSBcIj5cIjtcblxuICAgICAgICBpZih0YWcgPT09ICdzb3VyY2UtY29kZScpIHtcbiAgICAgICAgICBuZWVkc0VuY29kaW5nID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGVuZCh0YWcpIHtcbiAgICAgICAgaWYodGFnID09PSAnc291cmNlLWNvZGUnKSB7XG4gICAgICAgICAgbmVlZHNFbmNvZGluZyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgb3V0cHV0ICs9IFwiPC9cIiArIHRhZyArIFwiPlwiO1xuICAgICAgfSxcbiAgICAgIGNoYXJzKHRleHQpIHtcbiAgICAgICAgaWYobmVlZHNFbmNvZGluZykge1xuICAgICAgICAgIHRleHQgPSBlc2NhcGUodGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQgKz0gdGV4dDtcbiAgICAgIH0sXG4gICAgICBjb21tZW50KHRleHQpIHtcbiAgICAgICAgb3V0cHV0ICs9IFwiPCEtLVwiICsgdGV4dCArIFwiLS0+XCI7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gb3V0cHV0O1xuICB9XG5cbiAgX3RyYW5zZm9ybU1hcmtkb3duKGNvbnRlbnQpIHtcbiAgICBsZXQgcGFyc2VkID0gcmVhZGVyLnBhcnNlKGNvbnRlbnQpO1xuICAgIGxldCB3YWxrZXIgPSBwYXJzZWQud2Fsa2VyKCk7XG4gICAgbGV0IGV2ZW50LCBub2RlO1xuICAgIGxldCBzZWN0aW9uSGVhZGVyID0gbnVsbDtcbiAgICBsZXQgc2VjdGlvbklkO1xuICAgIGxldCBzZWN0aW9uVmVyc2lvbjtcblxuICAgIHdoaWxlIChldmVudCA9IHdhbGtlci5uZXh0KCkpIHtcbiAgICAgIG5vZGUgPSBldmVudC5ub2RlO1xuXG4gICAgICBpZiAoZXZlbnQuZW50ZXJpbmcpIHtcbiAgICAgICAgc3dpdGNoKG5vZGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ0hlYWRlcic6XG4gICAgICAgICAgICBpZihub2RlLmxldmVsID09PSAyKSB7XG4gICAgICAgICAgICAgIGlmIChzZWN0aW9uSGVhZGVyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbnNlcnRCZWZvcmUod3JhcEluU2VjdGlvbihzZWN0aW9uSGVhZGVyLCBzZWN0aW9uSWQsIHNlY3Rpb25WZXJzaW9uLCBub2RlKSk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzZWN0aW9uSGVhZGVyID0gbm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ0ltYWdlJzpcbiAgICAgICAgICAgIGlmICghaXNFeHRlcm5hbExpbmsobm9kZS5kZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgbm9kZS5kZXN0aW5hdGlvbiA9IGpvaW4odGhpcy50cmFuc2xhdGlvbi5kb2NzVXJsLCBub2RlLmRlc3RpbmF0aW9uKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnTGluayc6XG4gICAgICAgICAgICBpZihub2RlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICAgIGlmKG5vZGUuZGVzdGluYXRpb24uaW5kZXhPZignYXVyZWxpYS1kb2M6Ly8nKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGxldCBpbmZvID0gbm9kZS5kZXN0aW5hdGlvbi5yZXBsYWNlKCdhdXJlbGlhLWRvYzovLycsICcnKTtcblxuICAgICAgICAgICAgICAgIGlmIChpbmZvLmluZGV4T2YoJ3NlY3Rpb24vJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGluZm8gPSBpbmZvLnJlcGxhY2UoJ3NlY3Rpb24vJywgJycpO1xuICAgICAgICAgICAgICAgICAgbGV0IHBhcnRzID0gaW5mby5zcGxpdCgnL3ZlcnNpb24vJyk7XG4gICAgICAgICAgICAgICAgICBzZWN0aW9uSWQgPSBwYXJ0c1swXTtcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25WZXJzaW9uID0gcGFydHNbMV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmZvLmluZGV4T2YoJ3Jlc291cmNlLycpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICBpbmZvID0gaW5mby5yZXBsYWNlKCdyZXNvdXJjZS8nLCAnJyk7XG4gICAgICAgICAgICAgICAgICBsZXQgcmVmID0gbmV3IGNvbW1vbm1hcmsuTm9kZSgnSHRtbEJsb2NrJyk7XG4gICAgICAgICAgICAgICAgICByZWYubGl0ZXJhbCA9IGA8cmVzb3VyY2UtcmVmIHJlc291cmNlLWlkPVwiJHtpbmZvfVwiIGhlYWRpbmc9XCIke25vZGUuZmlyc3RDaGlsZC5saXRlcmFsfVwiPjwvcmVzb3VyY2UtcmVmPmA7XG4gICAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShyZWYpO1xuICAgICAgICAgICAgICAgICAgbm9kZS51bmxpbmsoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNFeHRlcm5hbExpbmsobm9kZS5kZXN0aW5hdGlvbikpIHtcbiAgICAgICAgICAgICAgICBsZXQgYSA9IG5ldyBjb21tb25tYXJrLk5vZGUoJ0h0bWxCbG9jaycpO1xuICAgICAgICAgICAgICAgIGEubGl0ZXJhbCA9IGA8YSBocmVmPVwiJHtub2RlLmRlc3RpbmF0aW9ufVwiIHRhcmdldD1cIl9ibGFua1wiPiR7bm9kZS5maXJzdENoaWxkLmxpdGVyYWx9PC9hPmBcbiAgICAgICAgICAgICAgICBub2RlLmluc2VydEJlZm9yZShhKTtcbiAgICAgICAgICAgICAgICBub2RlLnVubGluaygpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdCbG9ja1F1b3RlJzpcbiAgICAgICAgICAgIGxldCBsaXRlcmFsID0gbm9kZS5maXJzdENoaWxkLmZpcnN0Q2hpbGQubGl0ZXJhbDtcblxuICAgICAgICAgICAgaWYobGl0ZXJhbCkge1xuICAgICAgICAgICAgICBsaXRlcmFsID0gbGl0ZXJhbC50cmltKCk7XG5cbiAgICAgICAgICAgICAgbGV0IHR5cGVBbmRIZWFkaW5nID0gbGl0ZXJhbC5zcGxpdCgnOicpLm1hcCh4ID0+IHgudHJpbSgpKTtcbiAgICAgICAgICAgICAgbGV0IG5vdGlmaWNhdGlvblR5cGUgPSB0eXBlQW5kSGVhZGluZ1swXS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgICAgICAgIGlmKGF2YWlsYWJsZU5vdGlmaWNhdGlvblR5cGVzLmluZGV4T2Yobm90aWZpY2F0aW9uVHlwZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgbGV0IGh0bWxCbG9jayA9IG5ldyBjb21tb25tYXJrLk5vZGUoJ0h0bWxCbG9jaycpO1xuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gbm9kZS5maXJzdENoaWxkO1xuXG4gICAgICAgICAgICAgICAgY3VycmVudC5maXJzdENoaWxkLnVubGluaygpO1xuICAgICAgICAgICAgICAgIGh0bWxCbG9jay5saXRlcmFsID0gYDxhdS1hbGVydCB0eXBlPVwiJHtub3RpZmljYXRpb25UeXBlfVwiIGhlYWRpbmc9XCIke3R5cGVBbmRIZWFkaW5nWzFdIHx8IHR5cGVBbmRIZWFkaW5nWzBdfVwiPmA7XG5cbiAgICAgICAgICAgICAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgICAgICAgICAgICAgaHRtbEJsb2NrLmxpdGVyYWwgKz0gd3JpdGVyLnJlbmRlcihjdXJyZW50KTtcbiAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaHRtbEJsb2NrLmxpdGVyYWwgKz0gXCI8L2F1LWFsZXJ0PlwiO1xuICAgICAgICAgICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKGh0bWxCbG9jayk7XG4gICAgICAgICAgICAgICAgbm9kZS51bmxpbmsoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoc2VjdGlvbkhlYWRlciAhPT0gbnVsbCkge1xuICAgICAgcGFyc2VkLmFwcGVuZENoaWxkKHdyYXBJblNlY3Rpb24oc2VjdGlvbkhlYWRlciwgc2VjdGlvbklkLCBzZWN0aW9uVmVyc2lvbiwgbm9kZSkpO1xuICAgIH1cblxuICAgIHJldHVybiB3cml0ZXIucmVuZGVyKHBhcnNlZCk7XG4gIH1cblxuICBfY29uZmlndXJlVGVtcGxhdGUodHJhbnNsYXRpb24sIGJhc2VUcmFuc2xhdGlvbikge1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRyYW5zbGF0aW9uLnRlbXBsYXRlID0gRE9NLmNyZWF0ZVRlbXBsYXRlRnJvbU1hcmt1cCgnPHRlbXBsYXRlPicgKyB0cmFuc2xhdGlvbi5odG1sICsgJzwvdGVtcGxhdGU+Jyk7XG4gICAgbGV0IHNlY3Rpb25JZHMgPSB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2F1LWRvYy1zZWN0aW9uJyk7XG4gICAgbGV0IHNlY3Rpb25zID0ge307XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBzZWN0aW9uSWRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGxldCBjdXJyZW50ID0gc2VjdGlvbklkc1tpXTtcbiAgICAgIHNlY3Rpb25zW2N1cnJlbnQuZ2V0QXR0cmlidXRlKCd1aWQnKV0gPSBjdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChiYXNlVHJhbnNsYXRpb24gIT09IHRyYW5zbGF0aW9uKSB7XG4gICAgICB0cmFuc2xhdGlvbi5tZXRhZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIGJhc2VUcmFuc2xhdGlvbi5tZXRhZGF0YSwgdHJhbnNsYXRpb24ubWV0YWRhdGEpO1xuXG4gICAgICBmb3IgKGxldCBzZWN0aW9uSWQgaW4gYmFzZVRyYW5zbGF0aW9uLnNlY3Rpb25zKSB7XG4gICAgICAgIGxldCBwcmltYXJ5U2VjdGlvbiA9IGJhc2VUcmFuc2xhdGlvbi5zZWN0aW9uc1tzZWN0aW9uSWRdO1xuICAgICAgICBsZXQgdHJhbnNsYXRpb25TZWN0aW9uID0gc2VjdGlvbnNbc2VjdGlvbklkXTtcblxuICAgICAgICBpZiAodHJhbnNsYXRpb25TZWN0aW9uKSB7XG4gICAgICAgICAgbGV0IHByaW1hcnlWZXJzaW9uID0gcHJpbWFyeVNlY3Rpb24uZ2V0QXR0cmlidXRlKCd2ZXJzaW9uJyk7XG4gICAgICAgICAgaWYgKHByaW1hcnlWZXJzaW9uKSB7XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRpb25WZXJzaW9uID0gdHJhbnNsYXRpb25TZWN0aW9uLmdldEF0dHJpYnV0ZSgndmVyc2lvbicpO1xuICAgICAgICAgICAgdHJhbnNsYXRpb25TZWN0aW9uLnNldEF0dHJpYnV0ZSgndmVyc2lvbi1tYXRjaGVzJywgdGhpcy5fZGV0ZXJtaW5lVmVyc2lvbk1hdGNoZXMocHJpbWFyeVZlcnNpb24sIHRyYW5zbGF0aW9uVmVyc2lvbikpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0cmFuc2xhdGlvbi51bmF2YWlsYWJsZSA9IHRydWU7IC8vVE9ETzogY3JlYXRlIGVuZ2xpc2ggc2VjdGlvbj9cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZighdHJhbnNsYXRpb24udW5hdmFpbGFibGUpIHtcbiAgICAgICAgbGV0IHJlc291cmNlUmVmcyA9IHRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgncmVzb3VyY2UtcmVmJyk7XG4gICAgICAgIGxldCBjdXJyZW50O1xuICAgICAgICBsZXQgcmVzb3VyY2VJZDtcbiAgICAgICAgbGV0IHJlc291cmNlO1xuICAgICAgICBsZXQgY2xvbmU7XG5cbiAgICAgICAgZm9yKGxldCBpID0gMCwgaWkgPSByZXNvdXJjZVJlZnMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgIGN1cnJlbnQgPSByZXNvdXJjZVJlZnNbaV07XG4gICAgICAgICAgcmVzb3VyY2VJZCA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdyZXNvdXJjZS1pZCcpO1xuICAgICAgICAgIHJlc291cmNlID0gYmFzZVRyYW5zbGF0aW9uLnJlc291cmNlc1tyZXNvdXJjZUlkXTtcblxuICAgICAgICAgIGlmIChyZXNvdXJjZSkge1xuICAgICAgICAgICAgY2xvbmUgPSByZXNvdXJjZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjbG9uZS5zZXRBdHRyaWJ1dGUoJ2hlYWRpbmcnLCBjdXJyZW50LmdldEF0dHJpYnV0ZSgnaGVhZGluZycpKTtcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoY2xvbmUsIGN1cnJlbnQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBzZWN0aW9uSWQgaW4gc2VjdGlvbnMpIHtcbiAgICAgICAgc2VjdGlvbnNbc2VjdGlvbklkXSA9IHNlY3Rpb25zW3NlY3Rpb25JZF0uY2xvbmVOb2RlKHRydWUpO1xuICAgICAgfVxuXG4gICAgICB0cmFuc2xhdGlvbi5zZWN0aW9ucyA9IHNlY3Rpb25zO1xuXG4gICAgICBsZXQgcmVzb3VyY2VJZHMgPSB0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tyZXNvdXJjZV0nKTtcbiAgICAgIGxldCByZXNvdXJjZXMgPSB7fTtcbiAgICAgIGxldCBjdXJyZW50O1xuXG4gICAgICBmb3IobGV0IGkgPSAwLCBpaSA9IHJlc291cmNlSWRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgY3VycmVudCA9IHJlc291cmNlSWRzW2ldO1xuICAgICAgICByZXNvdXJjZXNbY3VycmVudC5nZXRBdHRyaWJ1dGUoJ3Jlc291cmNlJyldID0gY3VycmVudC5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zbGF0aW9uLnJlc291cmNlcyA9IHJlc291cmNlcztcblxuICAgICAgdGhpcy5fcHJlc2VydmVPcmlnaW5hbFRlbXBsYXRlKHRyYW5zbGF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBfcHJlc2VydmVPcmlnaW5hbFRlbXBsYXRlKHRyYW5zbGF0aW9uKSB7XG4gICAgbGV0IG9yaWdpbmFsVGVtcGxhdGUgPSBGRUFUVVJFLmVuc3VyZUhUTUxUZW1wbGF0ZUVsZW1lbnQoRE9NLmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJykpO1xuICAgIGxldCBjdXJyZW50ID0gdHJhbnNsYXRpb24udGVtcGxhdGUuY29udGVudC5maXJzdENoaWxkO1xuXG4gICAgd2hpbGUgKGN1cnJlbnQpIHtcbiAgICAgIG9yaWdpbmFsVGVtcGxhdGUuY29udGVudC5hcHBlbmRDaGlsZChjdXJyZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0U2libGluZztcbiAgICB9XG5cbiAgICB0cmFuc2xhdGlvbi5vcmlnaW5hbFRlbXBsYXRlID0gb3JpZ2luYWxUZW1wbGF0ZTtcbiAgfVxuXG4gIF9kZXRlcm1pbmVWZXJzaW9uTWF0Y2hlcyhwcmltYXJ5VmVyc2lvbiwgdHJhbnNsYXRpb25WZXJzaW9uKSB7XG4gICAgbGV0IHByaW1hcnlQYXJ0cyA9IHByaW1hcnlWZXJzaW9uLnNwbGl0KCcuJykubWFwKHggPT4gcGFyc2VJbnQoeC50cmltKCksIDEwKSk7XG4gICAgbGV0IHRyYW5zbGF0aW9uUGFydHMgPSB0cmFuc2xhdGlvblZlcnNpb24uc3BsaXQoJy4nKS5tYXAoeCA9PiBwYXJzZUludCh4LnRyaW0oKSwgMTApKTtcblxuICAgIGlmIChwcmltYXJ5UGFydHNbMF0gPT09IHRyYW5zbGF0aW9uUGFydHNbMF0pIHtcbiAgICAgIGlmIChwcmltYXJ5UGFydHNbMV0gPT09IHRyYW5zbGF0aW9uUGFydHNbMV0pIHtcbiAgICAgICAgaWYgKHByaW1hcnlQYXJ0cy5sZW5ndGggPiAxICYmIHRyYW5zbGF0aW9uUGFydHMubGVuZ3RoID4gMikge1xuICAgICAgICAgIGlmIChwcmltYXJ5UGFydHNbMl0gPT09IHRyYW5zbGF0aW9uUGFydHNbMl0pIHtcbiAgICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAyO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiB3cmFwSW5TZWN0aW9uKHNlY3Rpb25IZWFkZXIsIHNlY3Rpb25JZCwgc2VjdGlvblZlcnNpb24sIG5vZGUpIHtcbiAgbGV0IGh0bWxCbG9jayA9IG5ldyBjb21tb25tYXJrLk5vZGUoJ0h0bWxCbG9jaycpO1xuICBsZXQgY3VycmVudCA9IHNlY3Rpb25IZWFkZXIubmV4dDtcblxuICBzZWN0aW9uSGVhZGVyLnVubGluaygpO1xuICBodG1sQmxvY2subGl0ZXJhbCA9IGA8YXUtZG9jLXNlY3Rpb24gdWlkPVwiJHtzZWN0aW9uSWR9XCIgdmVyc2lvbj1cIiR7c2VjdGlvblZlcnNpb259XCIgaGVhZGluZz1cIiR7c2VjdGlvbkhlYWRlci5maXJzdENoaWxkLmZpcnN0Q2hpbGQubGl0ZXJhbH1cIj5gO1xuXG4gIHdoaWxlKGN1cnJlbnQgIT09IG51bGwgJiYgY3VycmVudCAhPT0gbm9kZSkge1xuICAgIGxldCBuZXh0ID0gY3VycmVudC5uZXh0O1xuICAgIGh0bWxCbG9jay5saXRlcmFsICs9IHdyaXRlci5yZW5kZXIoY3VycmVudCk7XG4gICAgY3VycmVudC51bmxpbmsoKTtcbiAgICBjdXJyZW50ID0gbmV4dDtcbiAgfVxuXG4gIGh0bWxCbG9jay5saXRlcmFsICs9IFwiPC9hdS1kb2Mtc2VjdGlvbj5cIjtcblxuICByZXR1cm4gaHRtbEJsb2NrO1xufVxuXG5mdW5jdGlvbiBjaGVja0RvbWFpbih1cmwpIHtcbiAgaWYgKHVybC5pbmRleE9mKCcvLycpID09PSAwICkge1xuICAgIHVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgdXJsO1xuICB9XG4gIHJldHVybiB1cmwudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC8oW2Etel0pPzpcXC9cXC8vLCckMScpLnNwbGl0KCcvJylbMF07XG59XG5cbmZ1bmN0aW9uIGlzRXh0ZXJuYWxMaW5rKHVybCkge1xuICByZXR1cm4gKCAoIHVybC5pbmRleE9mKCc6JykgPiAtMSB8fCB1cmwuaW5kZXhPZignLy8nKSA+IC0xICkgJiYgY2hlY2tEb21haW4obG9jYXRpb24uaHJlZikgIT09IGNoZWNrRG9tYWluKHVybCkgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
