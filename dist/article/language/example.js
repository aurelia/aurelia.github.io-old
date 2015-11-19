System.register(['aurelia-templating', 'aurelia-dependency-injection', './util', 'services/local'], function (_export) {
  'use strict';

  var bindable, children, inject, fixIndent, LocalAPI, map, Example, languageLookup;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function htmlEscape(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function applySyntaxHighlighting(language, element) {
    element.textContent = element.textContent.trim();
    element.className = languageLookup[language] || 'language-javascript';
    Prism.highlightElement(element);
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      children = _aureliaTemplating.children;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_util) {
      fixIndent = _util.fixIndent;
    }, function (_servicesLocal) {
      LocalAPI = _servicesLocal.LocalAPI;
    }],
    execute: function () {
      map = Array.prototype.map;

      Example = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Example, [{
          key: 'selectedSource',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'title',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'availableSources',
          decorators: [children('source-code')],
          initializer: function initializer() {
            return [];
          },
          enumerable: true
        }], null, _instanceInitializers);

        function Example(element, api) {
          _classCallCheck(this, _Example);

          _defineDecoratedPropertyDescriptor(this, 'selectedSource', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'availableSources', _instanceInitializers);

          this.api = api;
          this.element = element;
          this.language = api.getLanguage();
        }

        _createDecoratedClass(Example, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            this.languageSubscription = this.api.channel.subscribe('language-changed', function () {
              return _this.selectSourceForLanguage();
            });
            this.selectSourceForLanguage();

            var pre = this.element.getElementsByTagName('pre')[0];
            pre.insertBefore(this.tag, pre.firstChild);
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.languageSubscription.dispose();
          }
        }, {
          key: 'selectSourceForLanguage',
          value: function selectSourceForLanguage() {
            var _this2 = this;

            var found = undefined;
            var priorities = [this.language.current, 'ES 2016', 'ES 2015', 'ES 2015/2016', 'TypeScript', 'ES 2015/ES 2016/TypeScript', 'HTML'];

            var _loop = function (i, ii) {
              found = _this2.availableSources.find(function (x) {
                return x.lang === priorities[i];
              });
              if (found) {
                return 'break';
              }
            };

            for (var i = 0, ii = priorities.length; i < ii; ++i) {
              var _ret = _loop(i, ii);

              if (_ret === 'break') break;
            }

            this.select(found || this.availableSources[0]);
          }
        }, {
          key: 'select',
          value: function select(source) {
            var _this3 = this;

            this.selectedSource = source;
            source.loadText().then(function (content) {
              _this3.code.innerHTML = fixIndent(htmlEscape(content));
              applySyntaxHighlighting(source.lang, _this3.code);
            });
          }
        }], null, _instanceInitializers);

        var _Example = Example;
        Example = inject(Element, LocalAPI)(Example) || Example;
        return Example;
      })();

      _export('Example', Example);

      languageLookup = {
        'HTML': 'language-markup'
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbGFuZ3VhZ2UvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dURBS0ksR0FBRyxFQVlNLE9BQU8sRUE2RGhCLGNBQWM7Ozs7Ozs7O0FBdkVsQixXQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDdkIsV0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ2YsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FDdkIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztHQUMxQjs7QUF5REQsV0FBUyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBRWxELFdBQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqRCxXQUFPLENBQUMsU0FBUyxHQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQUFBQyxDQUFDO0FBQ3hFLFNBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNqQzs7OztvQ0E1RU8sUUFBUTtvQ0FBRSxRQUFROzsyQ0FDbEIsTUFBTTs7d0JBQ04sU0FBUzs7Z0NBQ1QsUUFBUTs7O0FBRVosU0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRzs7QUFZaEIsYUFBTzs7Ozs4QkFBUCxPQUFPOzt1QkFDakIsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7dUJBQ1IsUUFBUSxDQUFDLGFBQWEsQ0FBQzs7bUJBQW9CLEVBQUU7Ozs7O0FBRW5DLGlCQUxBLE9BQU8sQ0FLTixPQUFPLEVBQUUsR0FBRyxFQUFFOzs7Ozs7Ozs7QUFDeEIsY0FBSSxDQUFDLEdBQUcsR0FBUSxHQUFHLENBQUM7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUM7QUFDeEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7OzhCQVRVLE9BQU87O2lCQVdkLGdCQUFHOzs7QUFDTCxnQkFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtxQkFBTSxNQUFLLHVCQUF1QixFQUFFO2FBQUEsQ0FBQyxDQUFDO0FBQ2pILGdCQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzs7QUFFL0IsZ0JBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDdEQsZUFBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztXQUM1Qzs7O2lCQUVLLGtCQUFHO0FBQ1AsZ0JBQUksQ0FBQyxvQkFBb0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQztXQUNyQzs7O2lCQUVzQixtQ0FBRzs7O0FBQ3hCLGdCQUFJLEtBQUssWUFBQSxDQUFDO0FBQ1YsZ0JBQUksVUFBVSxHQUFHLENBQ2YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQ3JCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsY0FBYyxFQUNkLFlBQVksRUFDWiw0QkFBNEIsRUFDNUIsTUFBTSxDQUNQLENBQUM7O2tDQUVPLENBQUMsRUFBTSxFQUFFO0FBQ2hCLG1CQUFLLEdBQUcsT0FBSyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO3VCQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztlQUFBLENBQUMsQ0FBQztBQUNsRSxrQkFBSSxLQUFLLEVBQUU7QUFDVCwrQkFBTTtlQUNQOzs7QUFKSCxpQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRTsrQkFBNUMsQ0FBQyxFQUFNLEVBQUU7O29DQUdkLE1BQU07YUFFVDs7QUFFRCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7V0FDaEQ7OztpQkFFSyxnQkFBQyxNQUFNLEVBQUU7OztBQUNiLGdCQUFJLENBQUMsY0FBYyxHQUFHLE1BQU0sQ0FBQztBQUM3QixrQkFBTSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNoQyxxQkFBSyxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztBQUNyRCxxQ0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQUssSUFBSSxDQUFDLENBQUM7YUFDakQsQ0FBQyxDQUFDO1dBQ0o7Ozt1QkFuRFUsT0FBTztBQUFQLGVBQU8sR0FEbkIsTUFBTSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FDYixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU87Ozs7O0FBNkRoQixvQkFBYyxHQUFHO0FBQ25CLGNBQU0sRUFBRSxpQkFBaUI7T0FDMUIiLCJmaWxlIjoiYXJ0aWNsZS9sYW5ndWFnZS9leGFtcGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY2hpbGRyZW59IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge2ZpeEluZGVudH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7TG9jYWxBUEl9IGZyb20gJ3NlcnZpY2VzL2xvY2FsJztcblxubGV0IG1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXA7XG5cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbkBpbmplY3QoRWxlbWVudCwgTG9jYWxBUEkpXG5leHBvcnQgY2xhc3MgRXhhbXBsZSB7XG4gIEBiaW5kYWJsZSBzZWxlY3RlZFNvdXJjZTtcbiAgQGJpbmRhYmxlIHRpdGxlO1xuICBAY2hpbGRyZW4oJ3NvdXJjZS1jb2RlJykgYXZhaWxhYmxlU291cmNlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGFwaSkge1xuICAgIHRoaXMuYXBpICAgICAgPSBhcGk7XG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGFwaS5nZXRMYW5ndWFnZSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uID0gdGhpcy5hcGkuY2hhbm5lbC5zdWJzY3JpYmUoJ2xhbmd1YWdlLWNoYW5nZWQnLCAoKSA9PiB0aGlzLnNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkpO1xuICAgIHRoaXMuc2VsZWN0U291cmNlRm9yTGFuZ3VhZ2UoKTtcblxuICAgIGxldCBwcmUgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ByZScpWzBdO1xuICAgIHByZS5pbnNlcnRCZWZvcmUodGhpcy50YWcsIHByZS5maXJzdENoaWxkKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkge1xuICAgIGxldCBmb3VuZDtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFtcbiAgICAgIHRoaXMubGFuZ3VhZ2UuY3VycmVudCxcbiAgICAgICdFUyAyMDE2JyxcbiAgICAgICdFUyAyMDE1JyxcbiAgICAgICdFUyAyMDE1LzIwMTYnLFxuICAgICAgJ1R5cGVTY3JpcHQnLFxuICAgICAgJ0VTIDIwMTUvRVMgMjAxNi9UeXBlU2NyaXB0JyxcbiAgICAgICdIVE1MJ1xuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBwcmlvcml0aWVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGZvdW5kID0gdGhpcy5hdmFpbGFibGVTb3VyY2VzLmZpbmQoeCA9PiB4LmxhbmcgPT09IHByaW9yaXRpZXNbaV0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0KGZvdW5kIHx8IHRoaXMuYXZhaWxhYmxlU291cmNlc1swXSk7XG4gIH1cblxuICBzZWxlY3Qoc291cmNlKSB7XG4gICAgdGhpcy5zZWxlY3RlZFNvdXJjZSA9IHNvdXJjZTtcbiAgICBzb3VyY2UubG9hZFRleHQoKS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgdGhpcy5jb2RlLmlubmVySFRNTCA9IGZpeEluZGVudChodG1sRXNjYXBlKGNvbnRlbnQpKTtcbiAgICAgIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKHNvdXJjZS5sYW5nLCB0aGlzLmNvZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKGxhbmd1YWdlLCBlbGVtZW50KSB7XG4gIC8vIHRyaW0gdGhlIGNvZGUgdG8gYXZvaWQgc3RyYW5nZSBhcHBlYXJhbmNlIHdpdGggbGluZSBudW1iZXJzLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gKGxhbmd1YWdlTG9va3VwW2xhbmd1YWdlXSB8fCAnbGFuZ3VhZ2UtamF2YXNjcmlwdCcpO1xuICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQpO1xufVxuXG5sZXQgbGFuZ3VhZ2VMb29rdXAgPSB7XG4gICdIVE1MJzogJ2xhbmd1YWdlLW1hcmt1cCdcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
