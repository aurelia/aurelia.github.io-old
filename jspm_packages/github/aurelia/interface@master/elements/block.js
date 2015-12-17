/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var BlockElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(BlockElement, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function BlockElement(element) {
      _classCallCheck(this, _BlockElement);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(BlockElement, [{
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _BlockElement = BlockElement;
    BlockElement = (0, _aureliaFramework.inject)(Element)(BlockElement) || BlockElement;
    BlockElement = (0, _aureliaFramework.useView)('./content.html')(BlockElement) || BlockElement;
    BlockElement = (0, _aureliaFramework.customElement)('ai-block')(BlockElement) || BlockElement;
    return BlockElement;
  })();

  exports.BlockElement = BlockElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2Jsb2NrLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFLYSxZQUFZOzs7OzBCQUFaLFlBQVk7O3FDQUxPLFFBQVE7O2VBTXBCLElBQUk7Ozs7O0FBRVgsYUFIQSxZQUFZLENBR1gsT0FBTyxFQUFFOzs7OztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBTFUsWUFBWTs7YUFPZixvQkFBRSxFQUFFOzs7d0JBUEQsWUFBWTtBQUFaLGdCQUFZLEdBRHhCLHNCQUp5QyxNQUFNLEVBSXhDLE9BQU8sQ0FBQyxDQUNILFlBQVksS0FBWixZQUFZO0FBQVosZ0JBQVksR0FGeEIsc0JBSE8sT0FBTyxFQUdOLGdCQUFnQixDQUFDLENBRWIsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUh4QixzQkFGZ0IsYUFBYSxFQUVmLFVBQVUsQ0FBQyxDQUdiLFlBQVksS0FBWixZQUFZO1dBQVosWUFBWSIsImZpbGUiOiJlbGVtZW50cy9ibG9jay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktYmxvY2snKVxuQHVzZVZpZXcoJy4vY29udGVudC5odG1sJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBCbG9ja0VsZW1lbnQge1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYXR0YWNoZWQoKXt9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
