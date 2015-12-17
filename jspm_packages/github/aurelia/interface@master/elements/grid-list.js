/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var GridListElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(GridListElement, [{
      key: 'columns',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function GridListElement(element) {
      _classCallCheck(this, _GridListElement);

      _defineDecoratedPropertyDescriptor(this, 'columns', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(GridListElement, [{
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _GridListElement = GridListElement;
    GridListElement = (0, _aureliaFramework.inject)(Element)(GridListElement) || GridListElement;
    GridListElement = (0, _aureliaFramework.useView)('./content.html')(GridListElement) || GridListElement;
    GridListElement = (0, _aureliaFramework.customElement)('ai-grid-list')(GridListElement) || GridListElement;
    return GridListElement;
  })();

  exports.GridListElement = GridListElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2dyaWQtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BS2EsZUFBZTs7OzswQkFBZixlQUFlOztxQ0FMSSxRQUFROztlQU1sQixJQUFJOzs7OztBQUViLGFBSEEsZUFBZSxDQUdkLE9BQU8sRUFBRTs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7OzBCQUxVLGVBQWU7O2FBT2xCLG9CQUFFLEVBQUU7OzsyQkFQRCxlQUFlO0FBQWYsbUJBQWUsR0FEM0Isc0JBSnlDLE1BQU0sRUFJeEMsT0FBTyxDQUFDLENBQ0gsZUFBZSxLQUFmLGVBQWU7QUFBZixtQkFBZSxHQUYzQixzQkFITyxPQUFPLEVBR04sZ0JBQWdCLENBQUMsQ0FFYixlQUFlLEtBQWYsZUFBZTtBQUFmLG1CQUFlLEdBSDNCLHNCQUZnQixhQUFhLEVBRWYsY0FBYyxDQUFDLENBR2pCLGVBQWUsS0FBZixlQUFlO1dBQWYsZUFBZSIsImZpbGUiOiJlbGVtZW50cy9ncmlkLWxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWdyaWQtbGlzdCcpXG5AdXNlVmlldygnLi9jb250ZW50Lmh0bWwnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEdyaWRMaXN0RWxlbWVudCB7XG4gIEBiaW5kYWJsZSBjb2x1bW5zID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCl7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
