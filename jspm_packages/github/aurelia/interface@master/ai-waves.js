/* */ 
define(['exports', 'aurelia-framework', './util/waves'], function (exports, _aureliaFramework, _utilWaves) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AiWaves = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AiWaves, [{
      key: 'color',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AiWaves(element, waves) {
      _classCallCheck(this, _AiWaves);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      this.defaultColor = 'light';

      this.waves = waves;
      this.element = element;
      this.element.classList.add('waves-effect');
    }

    _createDecoratedClass(AiWaves, [{
      key: 'attached',
      value: function attached() {
        this.waves.attach(this.element);
        if (!this.color) this.color = this.defaultColor;
      }
    }, {
      key: 'colorChanged',
      value: function colorChanged(color, _color) {
        if (_color) {
          this.element.classList.remove('waves-' + _color);
        }

        this.element.classList.add('waves-' + color);
      }
    }], null, _instanceInitializers);

    var _AiWaves = AiWaves;
    AiWaves = (0, _aureliaFramework.noView)(AiWaves) || AiWaves;
    AiWaves = (0, _aureliaFramework.inject)(Element, _utilWaves.Waves)(AiWaves) || AiWaves;
    AiWaves = (0, _aureliaFramework.skipContentProcessing)(AiWaves) || AiWaves;
    AiWaves = (0, _aureliaFramework.customAttribute)('ai-waves')(AiWaves) || AiWaves;
    return AiWaves;
  })();

  exports.AiWaves = AiWaves;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXdhdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFPYSxPQUFPOzs7OzBCQUFQLE9BQU87O3FDQVBaLFFBQVE7O2VBUUksSUFBSTs7Ozs7QUFHWCxhQUpBLE9BQU8sQ0FJTixPQUFPLEVBQUUsS0FBSyxFQUFFOzs7OztXQUY1QixZQUFZLEdBQUcsT0FBTzs7QUFHcEIsVUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzVDOzswQkFSVSxPQUFPOzthQVVWLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLFlBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztPQUNsQzs7O2FBRVcsc0JBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUMxQixZQUFJLE1BQU0sRUFBRTtBQUNWLGNBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sWUFBVSxNQUFNLENBQUcsQ0FBQztTQUNsRDs7QUFFRCxZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFlBQVUsS0FBSyxDQUFHLENBQUM7T0FDOUM7OzttQkF0QlUsT0FBTztBQUFQLFdBQU8seUJBUE0sTUFBTSxFQU9uQixPQUFPLEtBQVAsT0FBTztBQUFQLFdBQU8sR0FGbkIsc0JBTGlCLE1BQU0sRUFLaEIsT0FBTyxhQUpQLEtBQUssQ0FJVSxDQUVWLE9BQU8sS0FBUCxPQUFPO0FBQVAsV0FBTyx5QkFQYyxxQkFBcUIsRUFPMUMsT0FBTyxLQUFQLE9BQU87QUFBUCxXQUFPLEdBSm5CLHNCQUh3RCxlQUFlLEVBR3ZELFVBQVUsQ0FBQyxDQUlmLE9BQU8sS0FBUCxPQUFPO1dBQVAsT0FBTyIsImZpbGUiOiJhaS13YXZlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgbm9WaWV3LCBza2lwQ29udGVudFByb2Nlc3NpbmcsIGN1c3RvbUF0dHJpYnV0ZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtXYXZlc30gZnJvbSAnLi91dGlsL3dhdmVzJztcblxuQGN1c3RvbUF0dHJpYnV0ZSgnYWktd2F2ZXMnKVxuQHNraXBDb250ZW50UHJvY2Vzc2luZ1xuQGluamVjdChFbGVtZW50LCBXYXZlcylcbkBub1ZpZXdcbmV4cG9ydCBjbGFzcyBBaVdhdmVzIHtcbiAgQGJpbmRhYmxlIGNvbG9yID0gbnVsbDtcbiAgZGVmYXVsdENvbG9yID0gJ2xpZ2h0J1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHdhdmVzKSB7XG4gICAgdGhpcy53YXZlcyA9IHdhdmVzO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dhdmVzLWVmZmVjdCcpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy53YXZlcy5hdHRhY2godGhpcy5lbGVtZW50KTtcbiAgICBpZiAoIXRoaXMuY29sb3IpXG4gICAgICB0aGlzLmNvbG9yID0gdGhpcy5kZWZhdWx0Q29sb3I7XG4gIH1cblxuICBjb2xvckNoYW5nZWQoY29sb3IsIF9jb2xvcikge1xuICAgIGlmIChfY29sb3IpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGB3YXZlcy0ke19jb2xvcn1gKTtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgd2F2ZXMtJHtjb2xvcn1gKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
