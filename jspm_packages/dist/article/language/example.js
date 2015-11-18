System.register(['aurelia-framework', './util', 'services/local'], function (_export) {
  'use strict';

  var bindable, inject, children, fixIndent, LocalAPI, map, Example, languageLookup;

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
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      children = _aureliaFramework.children;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbGFuZ3VhZ2UvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dURBSUksR0FBRyxFQVlNLE9BQU8sRUE2RGhCLGNBQWM7Ozs7Ozs7O0FBdkVsQixXQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDdkIsV0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ2YsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FDdkIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztHQUMxQjs7QUF5REQsV0FBUyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBRWxELFdBQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqRCxXQUFPLENBQUMsU0FBUyxHQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQUFBQyxDQUFDO0FBQ3hFLFNBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNqQzs7OzttQ0EzRU8sUUFBUTtpQ0FBRSxNQUFNO21DQUFFLFFBQVE7O3dCQUMxQixTQUFTOztnQ0FDVCxRQUFROzs7QUFFWixTQUFHLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHOztBQVloQixhQUFPOzs7OzhCQUFQLE9BQU87O3VCQUNqQixRQUFROzs7Ozt1QkFDUixRQUFROzs7Ozt1QkFDUixRQUFRLENBQUMsYUFBYSxDQUFDOzttQkFBb0IsRUFBRTs7Ozs7QUFFbkMsaUJBTEEsT0FBTyxDQUtOLE9BQU8sRUFBRSxHQUFHLEVBQUU7Ozs7Ozs7OztBQUN4QixjQUFJLENBQUMsR0FBRyxHQUFRLEdBQUcsQ0FBQztBQUNwQixjQUFJLENBQUMsT0FBTyxHQUFJLE9BQU8sQ0FBQztBQUN4QixjQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNuQzs7OEJBVFUsT0FBTzs7aUJBV2QsZ0JBQUc7OztBQUNMLGdCQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLGtCQUFrQixFQUFFO3FCQUFNLE1BQUssdUJBQXVCLEVBQUU7YUFBQSxDQUFDLENBQUM7QUFDakgsZ0JBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDOztBQUUvQixnQkFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN0RCxlQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1dBQzVDOzs7aUJBRUssa0JBQUc7QUFDUCxnQkFBSSxDQUFDLG9CQUFvQixDQUFDLE9BQU8sRUFBRSxDQUFDO1dBQ3JDOzs7aUJBRXNCLG1DQUFHOzs7QUFDeEIsZ0JBQUksS0FBSyxZQUFBLENBQUM7QUFDVixnQkFBSSxVQUFVLEdBQUcsQ0FDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFDckIsU0FBUyxFQUNULFNBQVMsRUFDVCxjQUFjLEVBQ2QsWUFBWSxFQUNaLDRCQUE0QixFQUM1QixNQUFNLENBQ1AsQ0FBQzs7a0NBRU8sQ0FBQyxFQUFNLEVBQUU7QUFDaEIsbUJBQUssR0FBRyxPQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7dUJBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDO2VBQUEsQ0FBQyxDQUFDO0FBQ2xFLGtCQUFJLEtBQUssRUFBRTtBQUNULCtCQUFNO2VBQ1A7OztBQUpILGlCQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFOytCQUE1QyxDQUFDLEVBQU0sRUFBRTs7b0NBR2QsTUFBTTthQUVUOztBQUVELGdCQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztXQUNoRDs7O2lCQUVLLGdCQUFDLE1BQU0sRUFBRTs7O0FBQ2IsZ0JBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO0FBQzdCLGtCQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2hDLHFCQUFLLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQ3JELHFDQUF1QixDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBSyxJQUFJLENBQUMsQ0FBQzthQUNqRCxDQUFDLENBQUM7V0FDSjs7O3VCQW5EVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUNiLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTzs7Ozs7QUE2RGhCLG9CQUFjLEdBQUc7QUFDbkIsY0FBTSxFQUFFLGlCQUFpQjtPQUMxQiIsImZpbGUiOiJhcnRpY2xlL2xhbmd1YWdlL2V4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIGNoaWxkcmVufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge2ZpeEluZGVudH0gZnJvbSAnLi91dGlsJztcbmltcG9ydCB7TG9jYWxBUEl9IGZyb20gJ3NlcnZpY2VzL2xvY2FsJztcblxubGV0IG1hcCA9IEFycmF5LnByb3RvdHlwZS5tYXA7XG5cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbkBpbmplY3QoRWxlbWVudCwgTG9jYWxBUEkpXG5leHBvcnQgY2xhc3MgRXhhbXBsZSB7XG4gIEBiaW5kYWJsZSBzZWxlY3RlZFNvdXJjZTtcbiAgQGJpbmRhYmxlIHRpdGxlO1xuICBAY2hpbGRyZW4oJ3NvdXJjZS1jb2RlJykgYXZhaWxhYmxlU291cmNlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGFwaSkge1xuICAgIHRoaXMuYXBpICAgICAgPSBhcGk7XG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGFwaS5nZXRMYW5ndWFnZSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uID0gdGhpcy5hcGkuY2hhbm5lbC5zdWJzY3JpYmUoJ2xhbmd1YWdlLWNoYW5nZWQnLCAoKSA9PiB0aGlzLnNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkpO1xuICAgIHRoaXMuc2VsZWN0U291cmNlRm9yTGFuZ3VhZ2UoKTtcblxuICAgIGxldCBwcmUgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3ByZScpWzBdO1xuICAgIHByZS5pbnNlcnRCZWZvcmUodGhpcy50YWcsIHByZS5maXJzdENoaWxkKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkge1xuICAgIGxldCBmb3VuZDtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFtcbiAgICAgIHRoaXMubGFuZ3VhZ2UuY3VycmVudCxcbiAgICAgICdFUyAyMDE2JyxcbiAgICAgICdFUyAyMDE1JyxcbiAgICAgICdFUyAyMDE1LzIwMTYnLFxuICAgICAgJ1R5cGVTY3JpcHQnLFxuICAgICAgJ0VTIDIwMTUvRVMgMjAxNi9UeXBlU2NyaXB0JyxcbiAgICAgICdIVE1MJ1xuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBwcmlvcml0aWVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGZvdW5kID0gdGhpcy5hdmFpbGFibGVTb3VyY2VzLmZpbmQoeCA9PiB4LmxhbmcgPT09IHByaW9yaXRpZXNbaV0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0KGZvdW5kIHx8IHRoaXMuYXZhaWxhYmxlU291cmNlc1swXSk7XG4gIH1cblxuICBzZWxlY3Qoc291cmNlKSB7XG4gICAgdGhpcy5zZWxlY3RlZFNvdXJjZSA9IHNvdXJjZTtcbiAgICBzb3VyY2UubG9hZFRleHQoKS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgdGhpcy5jb2RlLmlubmVySFRNTCA9IGZpeEluZGVudChodG1sRXNjYXBlKGNvbnRlbnQpKTtcbiAgICAgIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKHNvdXJjZS5sYW5nLCB0aGlzLmNvZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKGxhbmd1YWdlLCBlbGVtZW50KSB7XG4gIC8vIHRyaW0gdGhlIGNvZGUgdG8gYXZvaWQgc3RyYW5nZSBhcHBlYXJhbmNlIHdpdGggbGluZSBudW1iZXJzLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gKGxhbmd1YWdlTG9va3VwW2xhbmd1YWdlXSB8fCAnbGFuZ3VhZ2UtamF2YXNjcmlwdCcpO1xuICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQpO1xufVxuXG5sZXQgbGFuZ3VhZ2VMb29rdXAgPSB7XG4gICdIVE1MJzogJ2xhbmd1YWdlLW1hcmt1cCdcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
