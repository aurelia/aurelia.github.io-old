/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-media';

  var MediaElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(MediaElement, [{
      key: 'src',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'size',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function MediaElement(element) {
      _classCallCheck(this, _MediaElement);

      _defineDecoratedPropertyDescriptor(this, 'src', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

      element.className += ' ' + className;
      this.element = element;
    }

    _createDecoratedClass(MediaElement, [{
      key: 'attached',
      value: function attached() {}
    }], null, _instanceInitializers);

    var _MediaElement = MediaElement;
    MediaElement = (0, _aureliaFramework.inject)(Element)(MediaElement) || MediaElement;
    MediaElement = (0, _aureliaFramework.inlineView)('<template><img src.bind="src" /><content></content></template>')(MediaElement) || MediaElement;
    MediaElement = (0, _aureliaFramework.customElement)('ai-media')(MediaElement) || MediaElement;
    return MediaElement;
  })();

  exports.MediaElement = MediaElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL21lZGlhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFQSxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUM7O01BS2hCLFlBQVk7Ozs7MEJBQVosWUFBWTs7cUNBUFUsUUFBUTs7ZUFRekIsSUFBSTs7Ozs7cUNBUmEsUUFBUTs7ZUFTeEIsSUFBSTs7Ozs7QUFFVixhQUpBLFlBQVksQ0FJWCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsYUFBTyxDQUFDLFNBQVMsVUFBUSxTQUFTLEFBQUUsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBUFUsWUFBWTs7YUFTZixvQkFBRSxFQUFFOzs7d0JBVEQsWUFBWTtBQUFaLGdCQUFZLEdBRHhCLHNCQU40QyxNQUFNLEVBTTNDLE9BQU8sQ0FBQyxDQUNILFlBQVksS0FBWixZQUFZO0FBQVosZ0JBQVksR0FGeEIsc0JBTE8sVUFBVSxFQUtOLGdFQUFnRSxDQUFDLENBRWhFLFlBQVksS0FBWixZQUFZO0FBQVosZ0JBQVksR0FIeEIsc0JBSm1CLGFBQWEsRUFJbEIsVUFBVSxDQUFDLENBR2IsWUFBWSxLQUFaLFlBQVk7V0FBWixZQUFZIiwiZmlsZSI6ImVsZW1lbnRzL21lZGlhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmNvbnN0IGNsYXNzTmFtZSA9ICdhaS1tZWRpYSc7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1tZWRpYScpXG5AaW5saW5lVmlldygnPHRlbXBsYXRlPjxpbWcgc3JjLmJpbmQ9XCJzcmNcIiAvPjxjb250ZW50PjwvY29udGVudD48L3RlbXBsYXRlPicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgTWVkaWFFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHNyYyA9IG51bGxcbiAgQGJpbmRhYmxlIHNpemUgPSBudWxsXG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYXR0YWNoZWQoKXt9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
