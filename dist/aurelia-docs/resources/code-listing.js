System.register(['aurelia-templating', 'aurelia-dependency-injection', 'services/local'], function (_export) {
  'use strict';

  var bindable, children, inject, LocalAPI, languageLookup, CodeListing;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function htmlEscape(str) {
    return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function fixIndent(markdown) {
    var result = /^( +)\S/im.exec(markdown);

    if (result) {
      markdown = markdown.replace(new RegExp('^ {' + result[1].length.toString() + '}', 'gim'), '');
    }

    return markdown;
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
    }, function (_servicesLocal) {
      LocalAPI = _servicesLocal.LocalAPI;
    }],
    execute: function () {
      languageLookup = {
        'HTML': 'language-markup'
      };

      CodeListing = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(CodeListing, [{
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

        function CodeListing(element, api) {
          _classCallCheck(this, _CodeListing);

          _defineDecoratedPropertyDescriptor(this, 'selectedSource', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'availableSources', _instanceInitializers);

          this.api = api;
          this.element = element;
          this.language = api.getLanguage();
        }

        _createDecoratedClass(CodeListing, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            this.languageSubscription = this.api.channel.subscribe('language-changed', function () {
              return _this.selectSourceForLanguage();
            });
            this.selectSourceForLanguage();
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

        var _CodeListing = CodeListing;
        CodeListing = inject(Element, LocalAPI)(CodeListing) || CodeListing;
        return CodeListing;
      })();

      _export('CodeListing', CodeListing);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvY29kZS1saXN0aW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0Q0FJSSxjQUFjLEVBS0wsV0FBVzs7Ozs7Ozs7QUFtRHhCLFdBQVMsVUFBVSxDQUFDLEdBQUcsRUFBRTtBQUN2QixXQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FDZixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUN2QixPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUN0QixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUNyQixPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0dBQzFCOztBQUVELFdBQVMsU0FBUyxDQUFDLFFBQVEsRUFBRTtBQWtCM0IsUUFBSSxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs7QUFFeEMsUUFBSSxNQUFNLEVBQUU7QUFDVixjQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDL0Y7O0FBRUQsV0FBTyxRQUFRLENBQUM7R0FDakI7O0FBRUQsV0FBUyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBRWxELFdBQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqRCxXQUFPLENBQUMsU0FBUyxHQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxxQkFBcUIsQUFBQyxDQUFDO0FBQ3hFLFNBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztHQUNqQzs7O29DQXJHTyxRQUFRO29DQUFFLFFBQVE7OzJDQUNsQixNQUFNOztnQ0FDTixRQUFROzs7QUFFWixvQkFBYyxHQUFHO0FBQ25CLGNBQU0sRUFBRSxpQkFBaUI7T0FDMUI7O0FBR1ksaUJBQVc7Ozs7OEJBQVgsV0FBVzs7dUJBQ3JCLFFBQVE7Ozs7O3VCQUNSLFFBQVE7Ozs7O3VCQUNSLFFBQVEsQ0FBQyxhQUFhLENBQUM7O21CQUFvQixFQUFFOzs7OztBQUVuQyxpQkFMQSxXQUFXLENBS1YsT0FBTyxFQUFFLEdBQUcsRUFBRTs7Ozs7Ozs7O0FBQ3hCLGNBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQ2YsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDbkM7OzhCQVRVLFdBQVc7O2lCQVdsQixnQkFBRzs7O0FBQ0wsZ0JBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUU7cUJBQU0sTUFBSyx1QkFBdUIsRUFBRTthQUFBLENBQUMsQ0FBQztBQUNqSCxnQkFBSSxDQUFDLHVCQUF1QixFQUFFLENBQUM7V0FDaEM7OztpQkFFSyxrQkFBRztBQUNQLGdCQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDckM7OztpQkFFc0IsbUNBQUc7OztBQUN4QixnQkFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLGdCQUFJLFVBQVUsR0FBRyxDQUNmLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUNyQixTQUFTLEVBQ1QsU0FBUyxFQUNULGNBQWMsRUFDZCxZQUFZLEVBQ1osNEJBQTRCLEVBQzVCLE1BQU0sQ0FDUCxDQUFDOztrQ0FFTyxDQUFDLEVBQU0sRUFBRTtBQUNoQixtQkFBSyxHQUFHLE9BQUssZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUM7ZUFBQSxDQUFDLENBQUM7QUFDbEUsa0JBQUksS0FBSyxFQUFFO0FBQ1QsK0JBQU07ZUFDUDs7O0FBSkgsaUJBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUU7K0JBQTVDLENBQUMsRUFBTSxFQUFFOztvQ0FHZCxNQUFNO2FBRVQ7O0FBRUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1dBQ2hEOzs7aUJBRUssZ0JBQUMsTUFBTSxFQUFFOzs7QUFDYixnQkFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7QUFDN0Isa0JBQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDaEMscUJBQUssSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDckQscUNBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFLLElBQUksQ0FBQyxDQUFDO2FBQ2pELENBQUMsQ0FBQztXQUNKOzs7MkJBaERVLFdBQVc7QUFBWCxtQkFBVyxHQUR2QixNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUNiLFdBQVcsS0FBWCxXQUFXO2VBQVgsV0FBVyIsImZpbGUiOiJhdXJlbGlhLWRvY3MvcmVzb3VyY2VzL2NvZGUtbGlzdGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGNoaWxkcmVufSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuXG5sZXQgbGFuZ3VhZ2VMb29rdXAgPSB7XG4gICdIVE1MJzogJ2xhbmd1YWdlLW1hcmt1cCdcbn07XG5cbkBpbmplY3QoRWxlbWVudCwgTG9jYWxBUEkpXG5leHBvcnQgY2xhc3MgQ29kZUxpc3Rpbmcge1xuICBAYmluZGFibGUgc2VsZWN0ZWRTb3VyY2U7XG4gIEBiaW5kYWJsZSBoZWFkaW5nO1xuICBAY2hpbGRyZW4oJ3NvdXJjZS1jb2RlJykgYXZhaWxhYmxlU291cmNlcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGFwaSkge1xuICAgIHRoaXMuYXBpID0gYXBpO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5sYW5ndWFnZSA9IGFwaS5nZXRMYW5ndWFnZSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uID0gdGhpcy5hcGkuY2hhbm5lbC5zdWJzY3JpYmUoJ2xhbmd1YWdlLWNoYW5nZWQnLCAoKSA9PiB0aGlzLnNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkpO1xuICAgIHRoaXMuc2VsZWN0U291cmNlRm9yTGFuZ3VhZ2UoKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLmxhbmd1YWdlU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZUZvckxhbmd1YWdlKCkge1xuICAgIGxldCBmb3VuZDtcbiAgICBsZXQgcHJpb3JpdGllcyA9IFtcbiAgICAgIHRoaXMubGFuZ3VhZ2UuY3VycmVudCxcbiAgICAgICdFUyAyMDE2JyxcbiAgICAgICdFUyAyMDE1JyxcbiAgICAgICdFUyAyMDE1LzIwMTYnLFxuICAgICAgJ1R5cGVTY3JpcHQnLFxuICAgICAgJ0VTIDIwMTUvRVMgMjAxNi9UeXBlU2NyaXB0JyxcbiAgICAgICdIVE1MJ1xuICAgIF07XG5cbiAgICBmb3IgKGxldCBpID0gMCwgaWkgPSBwcmlvcml0aWVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGZvdW5kID0gdGhpcy5hdmFpbGFibGVTb3VyY2VzLmZpbmQoeCA9PiB4LmxhbmcgPT09IHByaW9yaXRpZXNbaV0pO1xuICAgICAgaWYgKGZvdW5kKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0KGZvdW5kIHx8IHRoaXMuYXZhaWxhYmxlU291cmNlc1swXSk7XG4gIH1cblxuICBzZWxlY3Qoc291cmNlKSB7XG4gICAgdGhpcy5zZWxlY3RlZFNvdXJjZSA9IHNvdXJjZTtcbiAgICBzb3VyY2UubG9hZFRleHQoKS50aGVuKGNvbnRlbnQgPT4ge1xuICAgICAgdGhpcy5jb2RlLmlubmVySFRNTCA9IGZpeEluZGVudChodG1sRXNjYXBlKGNvbnRlbnQpKTtcbiAgICAgIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKHNvdXJjZS5sYW5nLCB0aGlzLmNvZGUpO1xuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGh0bWxFc2NhcGUoc3RyKSB7XG4gIHJldHVybiBTdHJpbmcoc3RyKVxuICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgIC5yZXBsYWNlKC8nL2csICcmIzM5OycpXG4gICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgIC5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIGZpeEluZGVudChtYXJrZG93bikge1xuICAvKlxuICBUaGlzIGlzIGludGVuZGVkIHRvIHJlbW92ZSBpbmRlbnRhdGlvbiB0aGF0IGlzIG5vdCByZWFsbHkgcGFydCBvZlxuICB0aGUgbWFya2Rvd24sIHRvIHByZXNlcnZlIHRoZSBhYmlsaXR5IHRvIGluZGVudCB0aGUgbWFya3VwIHByb3Blcmx5LlxuICBJbiB0aGUgZXhhbXBsZSBiZWxvdyB0aGUgdG90YWwgaW5kZW50YXRpb24gd2lsbCBiZSByZWR1Y2VkIGJ5IDQgY2hhcmFjdGVycy5cbiAgfFxuICB8PHRlbXBsYXRlPlxuICB8ICA8bWFya2Rvd24+XG4gIHwgICAgIyBoZWxsbyB3b3JsZFxuICB8XG4gIHwgICAgbG9yZW0gaXBzdW0gYmxhIGJsYVxuICB8XG4gIHwgICAgICAgIHZhciB4ID0gMztcbiAgfFxuICB8ICA8L21hcmtkb3duPlxuICB8PC90ZW1wbGF0ZT5cbiAgfFxuICAqL1xuICBsZXQgcmVzdWx0ID0gL14oICspXFxTL2ltLmV4ZWMobWFya2Rvd24pO1xuXG4gIGlmIChyZXN1bHQpIHtcbiAgICBtYXJrZG93biA9IG1hcmtkb3duLnJlcGxhY2UobmV3IFJlZ0V4cCgnXiB7JyArIHJlc3VsdFsxXS5sZW5ndGgudG9TdHJpbmcoKSArICd9JywgJ2dpbScpLCAnJyk7XG4gIH1cblxuICByZXR1cm4gbWFya2Rvd247XG59XG5cbmZ1bmN0aW9uIGFwcGx5U3ludGF4SGlnaGxpZ2h0aW5nKGxhbmd1YWdlLCBlbGVtZW50KSB7XG4gIC8vIHRyaW0gdGhlIGNvZGUgdG8gYXZvaWQgc3RyYW5nZSBhcHBlYXJhbmNlIHdpdGggbGluZSBudW1iZXJzLlxuICBlbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudC50cmltKCk7XG4gIGVsZW1lbnQuY2xhc3NOYW1lID0gKGxhbmd1YWdlTG9va3VwW2xhbmd1YWdlXSB8fCAnbGFuZ3VhZ2UtamF2YXNjcmlwdCcpO1xuICBQcmlzbS5oaWdobGlnaHRFbGVtZW50KGVsZW1lbnQpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
