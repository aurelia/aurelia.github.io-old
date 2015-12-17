/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-router', '../AINavbarController', './navbar', './instruction', '../AIViewController'], function (exports, _aureliaFramework, _aureliaPal, _aureliaRouter, _AINavbarController, _navbar, _instruction, _AIViewController) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AIAppSidebar = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AIAppSidebar, [{
      key: 'fixed',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AIAppSidebar(element, interfaceController) {
      _classCallCheck(this, _AIAppSidebar);

      _defineDecoratedPropertyDescriptor(this, 'fixed', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.element = element;
      this.channel = interfaceController.channel;
      this.interfaceController = interfaceController;
    }

    _createDecoratedClass(AIAppSidebar, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.hasNavbar = this.element.hasAttribute('has-navbar');
        this.fixed = this.fixed || this.element.hasAttribute('fixed');
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('is-open');
      }
    }, {
      key: 'fixedChanged',
      value: function fixedChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('is-fixed');
      }
    }, {
      key: 'unbind',
      value: function unbind() {}
    }], null, _instanceInitializers);

    var _AIAppSidebar = AIAppSidebar;
    AIAppSidebar = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _AINavbarController.AINavbarController)(AIAppSidebar) || AIAppSidebar;
    AIAppSidebar = (0, _aureliaFramework.customElement)('ai-app-sidebar')(AIAppSidebar) || AIAppSidebar;
    AIAppSidebar = (0, _aureliaFramework.singleton)()(AIAppSidebar) || AIAppSidebar;
    return AIAppSidebar;
  })();

  exports.AIAppSidebar = AIAppSidebar;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLXNpZGViYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQVdhLFlBQVk7Ozs7MEJBQVosWUFBWTs7cUNBWFMsUUFBUTs7ZUFhdEIsSUFBSTs7Ozs7cUNBYlUsUUFBUTs7ZUFjcEIsSUFBSTs7Ozs7QUFFYixhQUxBLFlBQVksQ0FLWCxPQUFPLEVBQUUsbUJBQW1CLEVBQUU7Ozs7Ozs7QUFDeEMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQyxPQUFPLENBQUM7QUFDM0MsVUFBSSxDQUFDLG1CQUFtQixHQUFHLG1CQUFtQixDQUFDO0tBQ2hEOzswQkFUVSxZQUFZOzthQVduQixjQUFDLGNBQWMsRUFBRTtBQUNuQixZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3pELFlBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUMvRDs7O2FBRVksdUJBQUMsS0FBSyxFQUFFO0FBQ25CLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7T0FDN0Q7OzthQUVXLHNCQUFDLEtBQUssRUFBRTtBQUNsQixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO09BQzlEOzs7YUFFSyxrQkFBRyxFQUNSOzs7d0JBekJVLFlBQVk7QUFBWixnQkFBWSxHQUR4QixzQkFWMkMsTUFBTSxFQVUxQyxZQVRBLEdBQUcsQ0FTQyxPQUFPLHNCQVBYLGtCQUFrQixDQU9jLENBQzNCLFlBQVksS0FBWixZQUFZO0FBQVosZ0JBQVksR0FGeEIsc0JBVGtCLGFBQWEsRUFTakIsZ0JBQWdCLENBQUMsQ0FFbkIsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUh4QixzQkFSTyxTQUFTLEdBUUwsQ0FHQyxZQUFZLEtBQVosWUFBWTtXQUFaLFlBQVkiLCJmaWxlIjoiY29tcG9uZW50cy9hcHAtc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7c2luZ2xldG9uLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBDb250YWluZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtBSU5hdmJhckNvbnRyb2xsZXJ9IGZyb20gJy4uL0FJTmF2YmFyQ29udHJvbGxlcic7XG5pbXBvcnQge0FJTmF2YmFyRWxlbWVudH0gZnJvbSAnLi9uYXZiYXInO1xuaW1wb3J0IHtEeW5hbWljTmF2YmFySW5zdHJ1Y3Rpb24sIE5hdmJhckVsZW1lbnRJbnN0cnVjdGlvbn0gZnJvbSAnLi9pbnN0cnVjdGlvbidcbmltcG9ydCB7QUl9IGZyb20gJy4uL0FJVmlld0NvbnRyb2xsZXInO1xuXG5Ac2luZ2xldG9uKClcbkBjdXN0b21FbGVtZW50KCdhaS1hcHAtc2lkZWJhcicpXG5AaW5qZWN0KERPTS5FbGVtZW50LCBBSU5hdmJhckNvbnRyb2xsZXIpXG5leHBvcnQgY2xhc3MgQUlBcHBTaWRlYmFyIHtcblxuICBAYmluZGFibGUgZml4ZWQgPSBudWxsO1xuICBAYmluZGFibGUgYWN0aXZlICA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgaW50ZXJmYWNlQ29udHJvbGxlcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsID0gaW50ZXJmYWNlQ29udHJvbGxlci5jaGFubmVsO1xuICAgIHRoaXMuaW50ZXJmYWNlQ29udHJvbGxlciA9IGludGVyZmFjZUNvbnRyb2xsZXI7XG4gIH1cblxuICBiaW5kKGJpbmRpbmdDb250ZXh0KSB7XG4gICAgdGhpcy5oYXNOYXZiYXIgPSB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdoYXMtbmF2YmFyJyk7XG4gICAgdGhpcy5maXhlZCA9IHRoaXMuZml4ZWQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZml4ZWQnKTtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lzLW9wZW4nKTtcbiAgfVxuXG4gIGZpeGVkQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaXMtZml4ZWQnKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgfVxufVxuXG4vLyB2YXIgUXVldWUgPSBmdW5jdGlvbigpIHtcbi8vICAgdGhpcy5pdGVtcyA9IHt9O1xuLy8gICB0aGlzLl9mcm9udCA9IDA7XG4vLyAgIHRoaXMuX2JhY2sgPSAwO1xuXG4vLyAgIC8vIFRoaXMgd2lsbCBhZGQgYW4gaXRlbSB0byB0aGUgYmVnaW5uaW5nIG9uIHRoZSBxdWV1ZVxuLy8gICB0aGlzLmVucXVldWUgPSBmdW5jdGlvbihuZXdpdGVtKXtcblxuLy8gICB9XG5cbi8vICAgLy8gVGhpcyB3aWxsIHJlbW92ZSBhbmQgaXRlbSBmcm9tIHRoZSBiZWdpbm5pbmcgb2YgdGhlIGxpbmVcbi8vICAgLy8gYW5kIHJldHVybiB0aGUgaXRlbSByZW1vdmVkXG4vLyAgIHRoaXMuZGVxdWV1ZSA9IGZ1bmN0aW9uKCkge1xuLy8gICB9XG5cbi8vICAgLy8gdGhpcyB3aWxsIHJldHVybiB0aGUgY3VycmVudCBzaXplIG9mIHRoZSBzdGFjaztcbi8vICAgdGhpcy5zaXplID0gZnVuY3Rpb24oKSB7XG5cbi8vICAgfVxuLy8gfVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
