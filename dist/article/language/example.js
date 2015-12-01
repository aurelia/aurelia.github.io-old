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
          key: 'heading',
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

          _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

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

            this.heading = this.heading || this.element.getAttribute('title');
            this.element.removeAttribute('title');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbGFuZ3VhZ2UvZXhhbXBsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dURBS0ksR0FBRyxFQVlNLE9BQU8sRUE4RGhCLGNBQWM7Ozs7Ozs7O0FBeEVsQixXQUFTLFVBQVUsQ0FBQyxHQUFHLEVBQUU7QUFDdkIsV0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ2YsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FDdkIsT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FDdEIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FDckIsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztHQUMxQjs7QUEwREQsV0FBUyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBRWxELFdBQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqRCxXQUFPLENBQUMsU0FBUyxHQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQUFBQyxDQUFDO0FBQ3hFLFNBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNqQzs7OztvQ0E3RU8sUUFBUTtvQ0FBRSxRQUFROzsyQ0FDbEIsTUFBTTs7d0JBQ04sU0FBUzs7Z0NBQ1QsUUFBUTs7O0FBRVosU0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRzs7QUFZaEIsYUFBTzs7Ozs4QkFBUCxPQUFPOzt1QkFDakIsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7dUJBQ1IsUUFBUSxDQUFDLGFBQWEsQ0FBQzs7bUJBQW9CLEVBQUU7Ozs7O0FBRW5DLGlCQUxBLE9BQU8sQ0FLTixPQUFPLEVBQUUsR0FBRyxFQUFFOzs7Ozs7Ozs7QUFDeEIsY0FBSSxDQUFDLEdBQUcsR0FBUSxHQUFHLENBQUM7QUFDcEIsY0FBSSxDQUFDLE9BQU8sR0FBSSxPQUFPLENBQUM7QUFDeEIsY0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7OzhCQVRVLE9BQU87O2lCQVdkLGdCQUFHOzs7QUFDTCxnQkFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsRUFBRTtxQkFBTSxNQUFLLHVCQUF1QixFQUFFO2FBQUEsQ0FBQyxDQUFDO0FBQ2pILGdCQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQzs7QUFHL0IsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRSxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDdkM7OztpQkFFSyxrQkFBRztBQUNQLGdCQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDckM7OztpQkFFc0IsbUNBQUc7OztBQUN4QixnQkFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLGdCQUFJLFVBQVUsR0FBRyxDQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUNyQixTQUFTLEVBQ1QsU0FBUyxFQUNULGNBQWMsRUFDZCxZQUFZLEVBQ1osNEJBQTRCLEVBQzVCLE1BQU0sQ0FDUCxDQUFDOztrQ0FFTyxDQUFDLEVBQU0sRUFBRTtBQUNoQixtQkFBSyxHQUFHLE9BQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7ZUFBQSxDQUFDLENBQUM7QUFDbEUsa0JBQUksS0FBSyxFQUFFO0FBQ1QsK0JBQU07ZUFDUDs7O0FBSkgsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7K0JBQTVDLENBQUMsRUFBTSxFQUFFOztvQ0FHZCxNQUFNO2FBRVQ7O0FBRUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQ2hEOzs7aUJBRUssZ0JBQUMsTUFBTSxFQUFFOzs7QUFDYixnQkFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFDN0Isa0JBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDaEMscUJBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDckQscUNBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFLLElBQUksQ0FBQyxDQUFDO2FBQ2pELENBQUMsQ0FBQztXQUNKOzs7dUJBcERVLE9BQU87QUFBUCxlQUFPLEdBRG5CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQ2IsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPOzs7OztBQThEaEIsb0JBQWMsR0FBRztBQUNuQixjQUFNLEVBQUUsaUJBQWlCO09BQzFCIiwiZmlsZSI6ImFydGljbGUvbGFuZ3VhZ2UvZXhhbXBsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGNoaWxkcmVufSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtmaXhJbmRlbnR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge0xvY2FsQVBJfSBmcm9tICdzZXJ2aWNlcy9sb2NhbCc7XG5cbmxldCBtYXAgPSBBcnJheS5wcm90b3R5cGUubWFwO1xuXG5mdW5jdGlvbiBodG1sRXNjYXBlKHN0cikge1xuICByZXR1cm4gU3RyaW5nKHN0cilcbiAgICAucmVwbGFjZSgvJi9nLCAnJmFtcDsnKVxuICAgIC5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7JylcbiAgICAucmVwbGFjZSgvJy9nLCAnJiMzOTsnKVxuICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcbiAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xufVxuXG5AaW5qZWN0KEVsZW1lbnQsIExvY2FsQVBJKVxuZXhwb3J0IGNsYXNzIEV4YW1wbGUge1xuICBAYmluZGFibGUgc2VsZWN0ZWRTb3VyY2U7XG4gIEBiaW5kYWJsZSBoZWFkaW5nO1xuICBAY2hpbGRyZW4oJ3NvdXJjZS1jb2RlJykgYXZhaWxhYmxlU291cmNlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGFwaSkge1xuICAgIHRoaXMuYXBpICAgICAgPSBhcGk7XG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGFwaS5nZXRMYW5ndWFnZSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uID0gdGhpcy5hcGkuY2hhbm5lbC5zdWJzY3JpYmUoJ2xhbmd1YWdlLWNoYW5nZWQnLCAoKSA9PiB0aGlzLnNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkpO1xuICAgIHRoaXMuc2VsZWN0U291cmNlRm9yTGFuZ3VhZ2UoKTtcblxuXG4gICAgdGhpcy5oZWFkaW5nID0gdGhpcy5oZWFkaW5nIHx8IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RpdGxlJyk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgndGl0bGUnKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkge1xuICAgIGxldCBmb3VuZDtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFtcbiAgICAgIHRoaXMubGFuZ3VhZ2UuY3VycmVudCxcbiAgICAgICdFUyAyMDE2JyxcbiAgICAgICdFUyAyMDE1JyxcbiAgICAgICdFUyAyMDE1LzIwMTYnLFxuICAgICAgJ1R5cGVTY3JpcHQnLFxuICAgICAgJ0VTIDIwMTUvRVMgMjAxNi9UeXBlU2NyaXB0JyxcbiAgICAgICdIVE1MJ1xuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBwcmlvcml0aWVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGZvdW5kID0gdGhpcy5hdmFpbGFibGVTb3VyY2VzLmZpbmQoeCA9PiB4LmxhbmcgPT09IHByaW9yaXRpZXNbaV0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0KGZvdW5kIHx8IHRoaXMuYXZhaWxhYmxlU291cmNlc1swXSk7XG4gIH1cblxuICBzZWxlY3Qoc291cmNlKSB7XG4gICAgdGhpcy5zZWxlY3RlZFNvdXJjZSA9IHNvdXJjZTtcbiAgICBzb3VyY2UubG9hZFRleHQoKS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgdGhpcy5jb2RlLmlubmVySFRNTCA9IGZpeEluZGVudChodG1sRXNjYXBlKGNvbnRlbnQpKTtcbiAgICAgIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKHNvdXJjZS5sYW5nLCB0aGlzLmNvZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKGxhbmd1YWdlLCBlbGVtZW50KSB7XG4gIC8vIHRyaW0gdGhlIGNvZGUgdG8gYXZvaWQgc3RyYW5nZSBhcHBlYXJhbmNlIHdpdGggbGluZSBudW1iZXJzLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gKGxhbmd1YWdlTG9va3VwW2xhbmd1YWdlXSB8fCAnbGFuZ3VhZ2UtamF2YXNjcmlwdCcpO1xuICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQpO1xufVxuXG5sZXQgbGFuZ3VhZ2VMb29rdXAgPSB7XG4gICdIVE1MJzogJ2xhbmd1YWdlLW1hcmt1cCdcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
