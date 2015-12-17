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

      element.style.display = 'none';
      this.element = element;
    }

    var _TemplateElement = TemplateElement;
    TemplateElement = (0, _aureliaFramework.inject)(Element)(TemplateElement) || TemplateElement;
    TemplateElement = (0, _aureliaFramework.processContent)(false)(TemplateElement) || TemplateElement;
    TemplateElement = (0, _aureliaFramework.customElement)('ai-template')(TemplateElement) || TemplateElement;
    return TemplateElement;
  })();

  exports.TemplateElement = TemplateElement;

  var SlotElement = (function () {
    var _instanceInitializers2 = {};

    _createDecoratedClass(SlotElement, [{
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers2);

    function SlotElement(element) {
      _classCallCheck(this, _SlotElement);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers2);

      this.element = element;
    }

    var _SlotElement = SlotElement;
    SlotElement = (0, _aureliaFramework.inject)(Element)(SlotElement) || SlotElement;
    SlotElement = (0, _aureliaFramework.processContent)(false)(SlotElement) || SlotElement;
    SlotElement = (0, _aureliaFramework.customElement)('ai-slot')(SlotElement) || SlotElement;
    return SlotElement;
  })();

  exports.SlotElement = SlotElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RlbXBsYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFPYSxlQUFlOzs7MEJBQWYsZUFBZTs7cUNBUG1GLFFBQVE7O2VBUXBHLElBQUk7Ozs7O0FBRVYsYUFIQSxlQUFlLENBR2QsT0FBTyxFQUFFOzs7OztBQUNuQixhQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7QUFDL0IsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7OzJCQU5VLGVBQWU7QUFBZixtQkFBZSxHQUQzQixzQkFOd0gsTUFBTSxFQU12SCxPQUFPLENBQUMsQ0FDSCxlQUFlLEtBQWYsZUFBZTtBQUFmLG1CQUFlLEdBRjNCLHNCQUxnQixjQUFjLEVBS2YsS0FBSyxDQUFDLENBRVQsZUFBZSxLQUFmLGVBQWU7QUFBZixtQkFBZSxHQUgzQixzQkFKK0YsYUFBYSxFQUk5RixhQUFhLENBQUMsQ0FHaEIsZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlOzs7OztNQWFmLFdBQVc7OzswQkFBWCxXQUFXOztxQ0FwQnVGLFFBQVE7O2VBcUJwRyxJQUFJOzs7OztBQUVWLGFBSEEsV0FBVyxDQUdWLE9BQU8sRUFBRTs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7O3VCQUxVLFdBQVc7QUFBWCxlQUFXLEdBRHZCLHNCQW5Cd0gsTUFBTSxFQW1CdkgsT0FBTyxDQUFDLENBQ0gsV0FBVyxLQUFYLFdBQVc7QUFBWCxlQUFXLEdBRnZCLHNCQWxCZ0IsY0FBYyxFQWtCZixLQUFLLENBQUMsQ0FFVCxXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FIdkIsc0JBakIrRixhQUFhLEVBaUI5RixTQUFTLENBQUMsQ0FHWixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVZpZXcsIHByb2Nlc3NDb250ZW50LCBpbmxpbmVWaWV3LCBub1ZpZXcsIENvbnRhaW5lciwgY29udGFpbmVybGVzcywgY3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBWaWV3U2xvdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuXG5AY3VzdG9tRWxlbWVudCgnYWktdGVtcGxhdGUnKVxuQHByb2Nlc3NDb250ZW50KGZhbHNlKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBuYW1lID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cblxuXG5AY3VzdG9tRWxlbWVudCgnYWktc2xvdCcpXG5AcHJvY2Vzc0NvbnRlbnQoZmFsc2UpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgU2xvdEVsZW1lbnQge1xuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
