/* */ 
define(['exports', 'aurelia-framework', './templates'], function (exports, _aureliaFramework, _templates) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var SelectListElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SelectListElement, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function SelectListElement(element) {
      _classCallCheck(this, _SelectListElement);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.items = [];

      this.element = element;
      this.platform = document.aureliaInterface.platform;
      this.device = document.aureliaInterface.device;
    }

    _createDecoratedClass(SelectListElement, [{
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'activeChanged',
      value: function activeChanged(activeItem) {
        console.log(activeItem);
        this.element.classList[activeItem ? 'add' : 'remove']('active-item');
      }
    }, {
      key: 'getHeight',
      value: function getHeight() {
        return this.element.clientHeight;
      }
    }], null, _instanceInitializers);

    var _SelectListElement = SelectListElement;
    SelectListElement = (0, _aureliaFramework.inject)(Element)(SelectListElement) || SelectListElement;
    SelectListElement = (0, _aureliaFramework.useView)('./content.html')(SelectListElement) || SelectListElement;
    SelectListElement = (0, _aureliaFramework.customElement)('ai-select-list')(SelectListElement) || SelectListElement;
    return SelectListElement;
  })();

  exports.SelectListElement = SelectListElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VsZWN0LWxpc3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQU9hLGlCQUFpQjs7OzswQkFBakIsaUJBQWlCOztxQ0FQRSxRQUFROztlQVFuQixJQUFJOzs7OztBQUdaLGFBSkEsaUJBQWlCLENBSWhCLE9BQU8sRUFBRTs7Ozs7V0FGckIsS0FBSyxHQUFHLEVBQUU7O0FBR1IsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0FBQ25ELFVBQUksQ0FBQyxNQUFNLEdBQUssUUFBUSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQztLQUNsRDs7MEJBUlUsaUJBQWlCOzthQVVwQixvQkFBRSxFQUVUOzs7YUFFWSx1QkFBQyxVQUFVLEVBQUU7QUFDeEIsZUFBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxVQUFVLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO09BQ3RFOzs7YUFFUSxxQkFBRztBQUNWLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUE7T0FDakM7Ozs2QkFyQlUsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUQ3QixzQkFOeUMsTUFBTSxFQU14QyxPQUFPLENBQUMsQ0FDSCxpQkFBaUIsS0FBakIsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUY3QixzQkFMTyxPQUFPLEVBS04sZ0JBQWdCLENBQUMsQ0FFYixpQkFBaUIsS0FBakIsaUJBQWlCO0FBQWpCLHFCQUFpQixHQUg3QixzQkFKZ0IsYUFBYSxFQUlmLGdCQUFnQixDQUFDLENBR25CLGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VsZWN0LWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Y29udGVudH0gZnJvbSAnLi90ZW1wbGF0ZXMnO1xuXG5cbkBjdXN0b21FbGVtZW50KCdhaS1zZWxlY3QtbGlzdCcpXG5AdXNlVmlldygnLi9jb250ZW50Lmh0bWwnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFNlbGVjdExpc3RFbGVtZW50IHtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIGl0ZW1zID0gW107XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5wbGF0Zm9ybSA9IGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2UucGxhdGZvcm07XG4gICAgdGhpcy5kZXZpY2UgICA9IGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2UuZGV2aWNlO1xuICB9XG5cbiAgYXR0YWNoZWQoKXtcblxuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZChhY3RpdmVJdGVtKSB7XG4gICAgY29uc29sZS5sb2coYWN0aXZlSXRlbSk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFthY3RpdmVJdGVtID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZS1pdGVtJyk7XG4gIH1cblxuICBnZXRIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHRcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
