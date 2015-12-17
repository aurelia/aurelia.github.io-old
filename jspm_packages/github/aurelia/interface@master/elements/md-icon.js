/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var MdIconElement = (function () {
    var _instanceInitializers = {};

    _createDecoratedClass(MdIconElement, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function MdIconElement(element) {
      _classCallCheck(this, _MdIconElement);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      element.className += ' ai-icon';
      this.element = element;
    }

    var _MdIconElement = MdIconElement;
    MdIconElement = (0, _aureliaFramework.customElement)('md-icon')(MdIconElement) || MdIconElement;
    MdIconElement = (0, _aureliaFramework.inlineView)('<template><i ref="iel"><content></content></i></template>')(MdIconElement) || MdIconElement;
    MdIconElement = (0, _aureliaFramework.inject)(Element)(MdIconElement) || MdIconElement;
    return MdIconElement;
  })();

  exports.MdIconElement = MdIconElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL21kLWljb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUthLGFBQWE7OzswQkFBYixhQUFhOztxQ0FMUyxRQUFROztlQU12QixJQUFJOzs7OztBQUVYLGFBSEEsYUFBYSxDQUdaLE9BQU8sRUFBRTs7Ozs7QUFDbkIsYUFBTyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUM7QUFDaEMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7O3lCQU5VLGFBQWE7QUFBYixpQkFBYSxHQUR6QixzQkFKbUIsYUFBYSxFQUlsQixTQUFTLENBQUMsQ0FDWixhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBRnpCLHNCQUhPLFVBQVUsRUFHTiwyREFBMkQsQ0FBQyxDQUUzRCxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBSHpCLHNCQUY0QyxNQUFNLEVBRTNDLE9BQU8sQ0FBQyxDQUdILGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJlbGVtZW50cy9tZC1pY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbkBpbmplY3QoRWxlbWVudClcbkBpbmxpbmVWaWV3KCc8dGVtcGxhdGU+PGkgcmVmPVwiaWVsXCI+PGNvbnRlbnQ+PC9jb250ZW50PjwvaT48L3RlbXBsYXRlPicpXG5AY3VzdG9tRWxlbWVudCgnbWQtaWNvbicpXG5leHBvcnQgY2xhc3MgTWRJY29uRWxlbWVudCB7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGxcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyBhaS1pY29uJztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
