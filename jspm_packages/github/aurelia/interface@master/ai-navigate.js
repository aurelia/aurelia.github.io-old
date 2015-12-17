/* */ 
define(['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var NavigateBackAttribute = (function () {
    function NavigateBackAttribute(element, router) {
      _classCallCheck(this, _NavigateBackAttribute);

      this.element = element;
      this.go = function () {
        return router.history.navigateBack();
      };
    }

    _createClass(NavigateBackAttribute, [{
      key: 'attached',
      value: function attached() {
        this.element.addEventListener('click', this.go, true);
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.element.removeEventListener('click', this.go, true);
      }
    }]);

    var _NavigateBackAttribute = NavigateBackAttribute;
    NavigateBackAttribute = (0, _aureliaFramework.inject)(Element, _aureliaRouter.Router)(NavigateBackAttribute) || NavigateBackAttribute;
    NavigateBackAttribute = (0, _aureliaFramework.noView)(NavigateBackAttribute) || NavigateBackAttribute;
    NavigateBackAttribute = (0, _aureliaFramework.customAttribute)('ai-navigate-back')(NavigateBackAttribute) || NavigateBackAttribute;
    return NavigateBackAttribute;
  })();

  exports.NavigateBackAttribute = NavigateBackAttribute;

  var NavigateBackElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(NavigateBackElement, [{
      key: 'noButton',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'ios-arrow-left';
      },
      enumerable: true
    }], null, _instanceInitializers);

    function NavigateBackElement(element, router) {
      _classCallCheck(this, _NavigateBackElement);

      _defineDecoratedPropertyDescriptor(this, 'noButton', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      this.element = element;
      this.go = function () {
        return router.history.navigateBack();
      };
    }

    _createDecoratedClass(NavigateBackElement, [{
      key: 'attached',
      value: function attached() {
        this.element.addEventListener('click', this.go, true);
        if (this.icon) this.button.icon = this.icon;
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.element.removeEventListener('click', this.go, true);
      }
    }, {
      key: 'iconChanged',
      value: function iconChanged(icon) {
        if (!this.noButton) {
          this.button.icon = icon;
        }
      }
    }, {
      key: 'noButtonChanged',
      value: function noButtonChanged(value) {
        if (value) {
          this.button.element.remove();
        }
      }
    }], null, _instanceInitializers);

    var _NavigateBackElement = NavigateBackElement;
    NavigateBackElement = (0, _aureliaFramework.inject)(Element, _aureliaRouter.Router)(NavigateBackElement) || NavigateBackElement;
    NavigateBackElement = (0, _aureliaFramework.inlineView)('<template><ai-button flat ai-button.ref="button">Back</ai-button><content></content></template>')(NavigateBackElement) || NavigateBackElement;
    NavigateBackElement = (0, _aureliaFramework.customElement)('ai-navigate-back')(NavigateBackElement) || NavigateBackElement;
    return NavigateBackElement;
  })();

  exports.NavigateBackElement = NavigateBackElement;
});
//# sourceMappingURL=data:application/json;base64,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YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBjdXN0b21BdHRyaWJ1dGUsIG5vVmlldywgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuXG5AY3VzdG9tQXR0cmlidXRlKCdhaS1uYXZpZ2F0ZS1iYWNrJylcbkBub1ZpZXdcbkBpbmplY3QoRWxlbWVudCwgUm91dGVyKVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRlQmFja0F0dHJpYnV0ZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHJvdXRlcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5nbyA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHJvdXRlci5oaXN0b3J5Lm5hdmlnYXRlQmFjaygpO1xuICAgIH1cbiAgfVxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvLCB0cnVlKTtcbiAgfVxuICBkZXRhY2hlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvLCB0cnVlKTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktbmF2aWdhdGUtYmFjaycpXG5AaW5saW5lVmlldygnPHRlbXBsYXRlPjxhaS1idXR0b24gZmxhdCBhaS1idXR0b24ucmVmPVwiYnV0dG9uXCI+QmFjazwvYWktYnV0dG9uPjxjb250ZW50PjwvY29udGVudD48L3RlbXBsYXRlPicpXG5AaW5qZWN0KEVsZW1lbnQsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0ZUJhY2tFbGVtZW50IHtcbiAgQGJpbmRhYmxlIG5vQnV0dG9uID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBpY29uID0gJ2lvcy1hcnJvdy1sZWZ0JztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCByb3V0ZXIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZ28gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiByb3V0ZXIuaGlzdG9yeS5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmdvLCB0cnVlKTtcbiAgICBpZiAodGhpcy5pY29uKSB0aGlzLmJ1dHRvbi5pY29uID0gdGhpcy5pY29uO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5nbywgdHJ1ZSk7XG4gIH1cblxuICBpY29uQ2hhbmdlZChpY29uKSB7XG4gICAgaWYgKCF0aGlzLm5vQnV0dG9uKSB7XG4gICAgICB0aGlzLmJ1dHRvbi5pY29uID0gaWNvbjtcbiAgICB9XG4gIH1cblxuICBub0J1dHRvbkNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYnV0dG9uLmVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICB9XG59XG5cblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
