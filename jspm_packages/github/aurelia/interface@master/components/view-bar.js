/* */ 
define(['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ViewBarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ViewBarElement, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function ViewBarElement(element) {
      _classCallCheck(this, _ViewBarElement);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.isViewBar = true;

      this.element = element;
    }

    _createDecoratedClass(ViewBarElement, [{
      key: 'created',
      value: function created(view) {
        var vm = view.container.viewModel;
        if (vm.isView) this.view = vm;
      }
    }, {
      key: 'attached',
      value: function attached() {
        if (this.view) this.view.setViewBar(this);
      }
    }], null, _instanceInitializers);

    var _ViewBarElement = ViewBarElement;
    ViewBarElement = (0, _aureliaFramework.inject)(Element)(ViewBarElement) || ViewBarElement;
    ViewBarElement = (0, _aureliaFramework.customElement)('ai-view-bar')(ViewBarElement) || ViewBarElement;
    return ViewBarElement;
  })();

  exports.ViewBarElement = ViewBarElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlldy1iYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUthLGNBQWM7Ozs7MEJBQWQsY0FBYzs7cUNBTEosUUFBUTs7ZUFNWCxJQUFJOzs7OztBQUdYLGFBSkEsY0FBYyxDQUliLE9BQU8sRUFBRTs7Ozs7V0FGckIsU0FBUyxHQUFHLElBQUk7O0FBR2QsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7OzBCQU5VLGNBQWM7O2FBUWxCLGlCQUFDLElBQUksRUFBRTtBQUNaLFlBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO0FBQ2xDLFlBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztPQUMvQjs7O2FBRU8sb0JBQUU7QUFDUixZQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDM0M7OzswQkFmVSxjQUFjO0FBQWQsa0JBQWMsR0FEMUIsc0JBSmdDLE1BQU0sRUFJL0IsT0FBTyxDQUFDLENBQ0gsY0FBYyxLQUFkLGNBQWM7QUFBZCxrQkFBYyxHQUYxQixzQkFITyxhQUFhLEVBR04sYUFBYSxDQUFDLENBRWhCLGNBQWMsS0FBZCxjQUFjO1dBQWQsY0FBYyIsImZpbGUiOiJjb21wb25lbnRzL3ZpZXctYmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktdmlldy1iYXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFZpZXdCYXJFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgaXNWaWV3QmFyID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGNyZWF0ZWQodmlldykge1xuICAgIGxldCB2bSA9IHZpZXcuY29udGFpbmVyLnZpZXdNb2RlbDtcbiAgICBpZiAodm0uaXNWaWV3KSB0aGlzLnZpZXcgPSB2bTtcbiAgfVxuXG4gIGF0dGFjaGVkKCl7XG4gICAgaWYgKHRoaXMudmlldykgdGhpcy52aWV3LnNldFZpZXdCYXIodGhpcyk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
