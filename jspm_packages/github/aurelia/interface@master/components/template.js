/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var TemplateElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(TemplateElement, [{
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function TemplateElement(element) {
      _classCallCheck(this, _TemplateElement);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(TemplateElement, [{
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _TemplateElement = TemplateElement;
    TemplateElement = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(TemplateElement) || TemplateElement;
    TemplateElement = (0, _aureliaFramework.customElement)('ai-template')(TemplateElement) || TemplateElement;
    return TemplateElement;
  })();

  exports.TemplateElement = TemplateElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGVtcGxhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUthLGVBQWU7Ozs7MEJBQWYsZUFBZTs7cUNBTEwsUUFBUTs7ZUFNWixJQUFJOzs7OztBQUVWLGFBSEEsZUFBZSxDQUdkLE9BQU8sRUFBRTs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7OzBCQUxVLGVBQWU7O2FBT2xCLG9CQUFFLEVBQUU7OzsyQkFQRCxlQUFlO0FBQWYsbUJBQWUsR0FEM0Isc0JBSmdDLE1BQU0sRUFJL0IsWUFIQSxHQUFHLENBR0MsT0FBTyxDQUFDLENBQ1AsZUFBZSxLQUFmLGVBQWU7QUFBZixtQkFBZSxHQUYzQixzQkFITyxhQUFhLEVBR04sYUFBYSxDQUFDLENBRWhCLGVBQWUsS0FBZixlQUFlO1dBQWYsZUFBZSIsImZpbGUiOiJjb21wb25lbnRzL3RlbXBsYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktdGVtcGxhdGUnKVxuQGluamVjdChET00uRWxlbWVudClcbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZUVsZW1lbnQge1xuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hlZCgpe31cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
