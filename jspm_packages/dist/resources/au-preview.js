System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customElement, bindable, inject, Container, TableOfContents, PreviewElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      Container = _aureliaFramework.Container;
    }],
    execute: function () {
      TableOfContents = (function () {
        function TableOfContents() {
          _classCallCheck(this, TableOfContents);

          this.naratives = [];
        }

        _createClass(TableOfContents, [{
          key: 'addNarrative',
          value: function addNarrative(options) {
            this.naratives.push(options);
          }
        }]);

        return TableOfContents;
      })();

      _export('TableOfContents', TableOfContents);

      PreviewElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(PreviewElement, [{
          key: 'view',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'viewModel',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function PreviewElement(element, container) {
          _classCallCheck(this, _PreviewElement);

          _defineDecoratedPropertyDescriptor(this, 'view', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'viewModel', _instanceInitializers);

          this.titles = [];

          this.element = element;
          this.container = container;
        }

        _createDecoratedClass(PreviewElement, [{
          key: 'attached',
          value: function attached() {}
        }], null, _instanceInitializers);

        var _PreviewElement = PreviewElement;
        PreviewElement = inject(Element, Container)(PreviewElement) || PreviewElement;
        PreviewElement = customElement('au-preview')(PreviewElement) || PreviewElement;
        return PreviewElement;
      })();

      _export('PreviewElement', PreviewElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1wcmV2aWV3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztrREFFYSxlQUFlLEVBV2YsY0FBYzs7Ozs7Ozs7Ozs7O3dDQWJuQixhQUFhO21DQUFFLFFBQVE7aUNBQUUsTUFBTTtvQ0FBRSxTQUFTOzs7QUFFckMscUJBQWU7QUFFZixpQkFGQSxlQUFlLEdBRVo7Z0NBRkgsZUFBZTs7ZUFDMUIsU0FBUyxHQUFHLEVBQUU7U0FDRTs7cUJBRkwsZUFBZTs7aUJBSWQsc0JBQUMsT0FBTyxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUM5Qjs7O2VBTlUsZUFBZTs7Ozs7QUFXZixvQkFBYzs7Ozs4QkFBZCxjQUFjOzt1QkFDeEIsUUFBUTs7bUJBQVEsSUFBSTs7Ozs7dUJBQ3BCLFFBQVE7O21CQUFhLElBQUk7Ozs7O0FBR2YsaUJBTEEsY0FBYyxDQUtiLE9BQU8sRUFBRSxTQUFTLEVBQUU7Ozs7Ozs7ZUFGaEMsTUFBTSxHQUFHLEVBQUU7O0FBR1QsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7U0FDNUI7OzhCQVJVLGNBQWM7O2lCQVVqQixvQkFBRyxFQUNWOzs7OEJBWFUsY0FBYztBQUFkLHNCQUFjLEdBRDFCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQ2QsY0FBYyxLQUFkLGNBQWM7QUFBZCxzQkFBYyxHQUYxQixhQUFhLENBQUMsWUFBWSxDQUFDLENBRWYsY0FBYyxLQUFkLGNBQWM7ZUFBZCxjQUFjIiwiZmlsZSI6InJlc291cmNlcy9hdS1wcmV2aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBDb250YWluZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlT2ZDb250ZW50cyB7XG4gIG5hcmF0aXZlcyA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgYWRkTmFycmF0aXZlKG9wdGlvbnMpIHtcbiAgICB0aGlzLm5hcmF0aXZlcy5wdXNoKG9wdGlvbnMpO1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdhdS1wcmV2aWV3JylcbkBpbmplY3QoRWxlbWVudCwgQ29udGFpbmVyKVxuZXhwb3J0IGNsYXNzIFByZXZpZXdFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHZpZXcgPSBudWxsO1xuICBAYmluZGFibGUgdmlld01vZGVsID0gbnVsbDtcbiAgdGl0bGVzID0gW107XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
