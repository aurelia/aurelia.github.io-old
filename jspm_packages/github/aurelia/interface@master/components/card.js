/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var CardElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(CardElement, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function CardElement(element) {
      _classCallCheck(this, _CardElement);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(CardElement, [{
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _CardElement = CardElement;
    CardElement = (0, _aureliaFramework.inject)(Element)(CardElement) || CardElement;
    CardElement = (0, _aureliaFramework.useView)('./content.html')(CardElement) || CardElement;
    CardElement = (0, _aureliaFramework.customElement)('ai-card')(CardElement) || CardElement;
    return CardElement;
  })();

  exports.CardElement = CardElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY2FyZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BT2EsV0FBVzs7OzswQkFBWCxXQUFXOztxQ0FQUSxRQUFROztlQVFwQixJQUFJOzs7OztBQUVYLGFBSEEsV0FBVyxDQUdWLE9BQU8sRUFBRTs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7OzBCQUxVLFdBQVc7O2FBT2Qsb0JBQUUsRUFBRTs7O3VCQVBELFdBQVc7QUFBWCxlQUFXLEdBRHZCLHNCQU55QyxNQUFNLEVBTXhDLE9BQU8sQ0FBQyxDQUNILFdBQVcsS0FBWCxXQUFXO0FBQVgsZUFBVyxHQUZ2QixzQkFMTyxPQUFPLEVBS04sZ0JBQWdCLENBQUMsQ0FFYixXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FIdkIsc0JBSmdCLGFBQWEsRUFJZixTQUFTLENBQUMsQ0FHWixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoiY29tcG9uZW50cy9jYXJkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuXG5AY3VzdG9tRWxlbWVudCgnYWktY2FyZCcpXG5AdXNlVmlldygnLi9jb250ZW50Lmh0bWwnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIENhcmRFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCl7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
