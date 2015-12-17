/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ItemHeaderElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ItemHeaderElement, [{
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function ItemHeaderElement(element) {
      _classCallCheck(this, _ItemHeaderElement);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(ItemHeaderElement, [{
      key: 'created',
      value: function created(view) {
        var vm = view.container.viewModel;
        if (vm.isItem) {
          vm.setHeader(this);
          this.item = vm;
        }
      }
    }, {
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _ItemHeaderElement = ItemHeaderElement;
    ItemHeaderElement = (0, _aureliaFramework.customElement)('item-header')(ItemHeaderElement) || ItemHeaderElement;
    ItemHeaderElement = (0, _aureliaFramework.inject)(Element)(ItemHeaderElement) || ItemHeaderElement;
    return ItemHeaderElement;
  })();

  exports.ItemHeaderElement = ItemHeaderElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2l0ZW0taGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFJYSxpQkFBaUI7Ozs7MEJBQWpCLGlCQUFpQjs7cUNBSlAsUUFBUTs7ZUFLWixJQUFJOzs7OztBQUVWLGFBSEEsaUJBQWlCLENBR2hCLE9BQU8sRUFBRTs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7OzBCQUxVLGlCQUFpQjs7YUFPckIsaUJBQUMsSUFBSSxFQUFFO0FBQ1osWUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDbEMsWUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO0FBQ2IsWUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixjQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztTQUNoQjtPQUNGOzs7YUFDTyxvQkFBRSxFQUNUOzs7NkJBZlUsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUQ3QixzQkFITyxhQUFhLEVBR04sYUFBYSxDQUFDLENBQ2hCLGlCQUFpQixLQUFqQixpQkFBaUI7QUFBakIscUJBQWlCLEdBRjdCLHNCQUZnQyxNQUFNLEVBRS9CLE9BQU8sQ0FBQyxDQUVILGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCIiwiZmlsZSI6ImVsZW1lbnRzL2l0ZW0taGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdpdGVtLWhlYWRlcicpXG5leHBvcnQgY2xhc3MgSXRlbUhlYWRlckVsZW1lbnQge1xuICBAYmluZGFibGUgaWNvbiA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZWQodmlldykge1xuICAgIGxldCB2bSA9IHZpZXcuY29udGFpbmVyLnZpZXdNb2RlbDtcbiAgICBpZiAodm0uaXNJdGVtKSB7XG4gICAgICB2bS5zZXRIZWFkZXIodGhpcyk7XG4gICAgICB0aGlzLml0ZW0gPSB2bTtcbiAgICB9XG4gIH1cbiAgYXR0YWNoZWQoKXtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
