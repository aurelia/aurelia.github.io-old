/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var TileElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(TileElement, [{
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'actions',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function TileElement(element) {
      _classCallCheck(this, _TileElement);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'actions', _instanceInitializers);

      element.className += ' ai-tile';
      this.element = element;
    }

    _createDecoratedClass(TileElement, [{
      key: 'attached',
      value: function attached() {
        if (this.actions) {
          Array.prototype.forEach.call(this.element.querySelectorAll('ai-button'), function (button) {
            button.au && button.setAttribute('flat', true);
          });
        }
      }
    }, {
      key: 'actionsChanged',
      value: function actionsChanged(value) {
        if (value === "" && !String(value).isBoolean()) {
          this.actions = true;
        }
      }
    }], null, _instanceInitializers);

    var _TileElement = TileElement;
    TileElement = (0, _aureliaFramework.inject)(Element)(TileElement) || TileElement;
    TileElement = (0, _aureliaFramework.useView)('./content.html')(TileElement) || TileElement;
    TileElement = (0, _aureliaFramework.customElement)('ai-tile')(TileElement) || TileElement;
    return TileElement;
  })();

  exports.TileElement = TileElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3RpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQU1hLFdBQVc7Ozs7MEJBQVgsV0FBVzs7cUNBTlEsUUFBUTs7ZUFPckIsSUFBSTs7Ozs7cUNBUFMsUUFBUTs7ZUFRbEIsSUFBSTs7Ozs7QUFFYixhQUpBLFdBQVcsQ0FJVixPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsYUFBTyxDQUFDLFNBQVMsSUFBSSxVQUFVLENBQUM7QUFDaEMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7OzBCQVBVLFdBQVc7O2FBU2Qsb0JBQUU7QUFDUixZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDaEIsZUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBQyxNQUFNLEVBQUk7QUFDbEYsa0JBQU0sQ0FBQyxFQUFFLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7V0FDaEQsQ0FBQyxDQUFDO1NBQ0o7T0FDRjs7O2FBRWEsd0JBQUMsS0FBSyxFQUFFO0FBQ3BCLFlBQUksS0FBSyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtBQUM5QyxjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtPQUNGOzs7dUJBckJVLFdBQVc7QUFBWCxlQUFXLEdBRHZCLHNCQUx5QyxNQUFNLEVBS3hDLE9BQU8sQ0FBQyxDQUNILFdBQVcsS0FBWCxXQUFXO0FBQVgsZUFBVyxHQUZ2QixzQkFKTyxPQUFPLEVBSU4sZ0JBQWdCLENBQUMsQ0FFYixXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FIdkIsc0JBSGdCLGFBQWEsRUFHZixTQUFTLENBQUMsQ0FHWixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvdGlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5cbkBjdXN0b21FbGVtZW50KCdhaS10aWxlJylcbkB1c2VWaWV3KCcuL2NvbnRlbnQuaHRtbCcpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgVGlsZUVsZW1lbnQge1xuICBAYmluZGFibGUgaWNvbiA9IG51bGxcbiAgQGJpbmRhYmxlIGFjdGlvbnMgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnIGFpLXRpbGUnO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hlZCgpe1xuICAgIGlmICh0aGlzLmFjdGlvbnMpIHtcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwodGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FpLWJ1dHRvbicpLCAoYnV0dG9uKT0+IHtcbiAgICAgICAgYnV0dG9uLmF1ICYmIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2ZsYXQnLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFjdGlvbnNDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBcIlwiICYmICFTdHJpbmcodmFsdWUpLmlzQm9vbGVhbigpKSB7XG4gICAgICB0aGlzLmFjdGlvbnMgPSB0cnVlO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
