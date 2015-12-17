/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-avatar';

  var AvatarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AvatarElement, [{
      key: 'src',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AvatarElement(element) {
      _classCallCheck(this, _AvatarElement);

      _defineDecoratedPropertyDescriptor(this, 'src', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      element.className += ' ' + className;
      this.element = element;
    }

    _createDecoratedClass(AvatarElement, [{
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _AvatarElement = AvatarElement;
    AvatarElement = (0, _aureliaFramework.inject)(Element)(AvatarElement) || AvatarElement;
    AvatarElement = (0, _aureliaFramework.customElement)('ai-avatar')(AvatarElement) || AvatarElement;
    return AvatarElement;
  })();

  exports.AvatarElement = AvatarElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2F2YXRhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUEsTUFBTSxTQUFTLEdBQUcsV0FBVyxDQUFDOztNQUlqQixhQUFhOzs7OzBCQUFiLGFBQWE7O3FDQU5xQixRQUFROztlQU9yQyxJQUFJOzs7OztxQ0FQeUIsUUFBUTs7ZUFRcEMsSUFBSTs7Ozs7QUFFVixhQUpBLGFBQWEsQ0FJWixPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsYUFBTyxDQUFDLFNBQVMsVUFBUSxTQUFTLEFBQUUsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBUFUsYUFBYTs7YUFTaEIsb0JBQUUsRUFBRTs7O3lCQVRELGFBQWE7QUFBYixpQkFBYSxHQUR6QixzQkFMd0QsTUFBTSxFQUt2RCxPQUFPLENBQUMsQ0FDSCxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBRnpCLHNCQUorQixhQUFhLEVBSTlCLFdBQVcsQ0FBQyxDQUVkLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJlbGVtZW50cy9hdmF0YXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge25vVmlldywgcHJvY2Vzc0NvbnRlbnQsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuY29uc3QgY2xhc3NOYW1lID0gJ2FpLWF2YXRhcic7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1hdmF0YXInKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEF2YXRhckVsZW1lbnQge1xuICBAYmluZGFibGUgc3JjID0gbnVsbDtcbiAgQGJpbmRhYmxlIGljb24gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCl7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
