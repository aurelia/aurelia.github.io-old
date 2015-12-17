/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-button';

  var AIButtonElement = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(AIButtonElement, [{
      key: 'color',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function AIButtonElement(element) {
      _classCallCheck(this, _AIButtonElement);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      this.className = className;

      this.element = element;
    }

    var _AIButtonElement = AIButtonElement;
    AIButtonElement = (0, _aureliaFramework.inject)(Element)(AIButtonElement) || AIButtonElement;
    AIButtonElement = (0, _aureliaFramework.customElement)('ai-button')(AIButtonElement) || AIButtonElement;
    return AIButtonElement;
  })();

  exports.AIButtonElement = AIButtonElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2J1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsTUFBSSxTQUFTLEdBQUcsV0FBVyxDQUFDOztNQUlmLGVBQWU7OzswQkFBZixlQUFlOztxQ0FMWixRQUFROzs7OztBQVVYLGFBTEEsZUFBZSxDQUtkLE9BQU8sRUFBRTs7Ozs7V0FEckIsU0FBUyxHQUFHLFNBQVM7O0FBRW5CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzsyQkFQVSxlQUFlO0FBQWYsbUJBQWUsR0FEM0Isc0JBSk8sTUFBTSxFQUlOLE9BQU8sQ0FBQyxDQUNILGVBQWUsS0FBZixlQUFlO0FBQWYsbUJBQWUsR0FGM0Isc0JBSDBDLGFBQWEsRUFHekMsV0FBVyxDQUFDLENBRWQsZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlIiwiZmlsZSI6ImVsZW1lbnRzL2J1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZSwgY3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5sZXQgY2xhc3NOYW1lID0gJ2FpLWJ1dHRvbic7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1idXR0b24nKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEFJQnV0dG9uRWxlbWVudCB7XG5cbiAgQGJpbmRhYmxlIGNvbG9yO1xuXG4gIGNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
