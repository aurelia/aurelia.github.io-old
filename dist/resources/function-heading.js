System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customElement, bindable, inject, sizes, FunctionHeading;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      sizes = {
        100: 'xl',
        80: 'lg',
        60: 'md',
        40: 'sm',
        20: 'xs',
        0: 'xxs'
      };

      FunctionHeading = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(FunctionHeading, [{
          key: 'function',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'small',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function FunctionHeading(element) {
          _classCallCheck(this, _FunctionHeading);

          _defineDecoratedPropertyDescriptor(this, 'function', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'small', _instanceInitializers);

          this.sizes = {};

          this.element = element;
        }

        _createDecoratedClass(FunctionHeading, [{
          key: 'functionChanged',
          value: function functionChanged(value) {
            this.name = value.name || value.signature.name;
            if (/^new\s/i.test(this.name)) {
              this.name = this.name.replace(/^new\s/, '');
              this.newName = true;
            }
          }
        }, {
          key: 'attached',
          value: function attached() {
            var charSize = this.element.textContent.length;
            if (charSize in sizes) charSize++;
            if (charSize > 100) charSize = 100;
            if (this.small) charSize = charSize - 20;

            this.size = sizes[Math.ceil(charSize / 20) * 20];
            this.element.setAttribute('size', this.size);
          }
        }], null, _instanceInitializers);

        var _FunctionHeading = FunctionHeading;
        FunctionHeading = customElement('function-heading')(FunctionHeading) || FunctionHeading;
        FunctionHeading = inject(Element)(FunctionHeading) || FunctionHeading;
        return FunctionHeading;
      })();

      _export('FunctionHeading', FunctionHeading);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9mdW5jdGlvbi1oZWFkaW5nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1Q0FFTSxLQUFLLEVBV0UsZUFBZTs7Ozs7Ozs7Ozt3Q0FicEIsYUFBYTttQ0FBRSxRQUFRO2lDQUFFLE1BQU07OztBQUVqQyxXQUFLLEdBQUc7QUFDWixXQUFHLEVBQUUsSUFBSTtBQUNULFVBQUUsRUFBRSxJQUFJO0FBQ1IsVUFBRSxFQUFFLElBQUk7QUFDUixVQUFFLEVBQUUsSUFBSTtBQUNSLFVBQUUsRUFBRSxJQUFJO0FBQ1IsU0FBQyxFQUFFLEtBQUs7T0FDVDs7QUFJWSxxQkFBZTs7Ozs4QkFBZixlQUFlOzt1QkFDekIsUUFBUTs7bUJBQVksSUFBSTs7Ozs7dUJBQ3hCLFFBQVE7O21CQUFZLElBQUk7Ozs7O0FBRWQsaUJBSkEsZUFBZSxDQUlkLE9BQU8sRUFBRTs7Ozs7OztlQURyQixLQUFLLEdBQUcsRUFBRTs7QUFFUixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBTlUsZUFBZTs7aUJBUVgseUJBQUMsS0FBSyxFQUFFO0FBQ3JCLGdCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFDL0MsZ0JBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDN0Isa0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLGtCQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUNyQjtXQUNGOzs7aUJBRU8sb0JBQUc7QUFDVCxnQkFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDO0FBQy9DLGdCQUFJLFFBQVEsSUFBSSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUM7QUFDbEMsZ0JBQUksUUFBUSxHQUFHLEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ25DLGdCQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUM7O0FBRXpDLGdCQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztBQUNqRCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztXQU05Qzs7OytCQTdCVSxlQUFlO0FBQWYsdUJBQWUsR0FEM0IsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQ3JCLGVBQWUsS0FBZixlQUFlO0FBQWYsdUJBQWUsR0FGM0IsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUVILGVBQWUsS0FBZixlQUFlO2VBQWYsZUFBZSIsImZpbGUiOiJyZXNvdXJjZXMvZnVuY3Rpb24taGVhZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5jb25zdCBzaXplcyA9IHtcbiAgMTAwOiAneGwnLFxuICA4MDogJ2xnJyxcbiAgNjA6ICdtZCcsXG4gIDQwOiAnc20nLFxuICAyMDogJ3hzJyxcbiAgMDogJ3h4cydcbn07XG5cbkBpbmplY3QoRWxlbWVudClcbkBjdXN0b21FbGVtZW50KCdmdW5jdGlvbi1oZWFkaW5nJylcbmV4cG9ydCBjbGFzcyBGdW5jdGlvbkhlYWRpbmcge1xuICBAYmluZGFibGUgZnVuY3Rpb24gPSBudWxsO1xuICBAYmluZGFibGUgc21hbGwgICAgPSBudWxsO1xuICBzaXplcyA9IHt9O1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGZ1bmN0aW9uQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMubmFtZSA9IHZhbHVlLm5hbWUgfHwgdmFsdWUuc2lnbmF0dXJlLm5hbWU7XG4gICAgaWYgKC9ebmV3XFxzL2kudGVzdCh0aGlzLm5hbWUpKSB7XG4gICAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUucmVwbGFjZSgvXm5ld1xccy8sICcnKTtcbiAgICAgIHRoaXMubmV3TmFtZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgbGV0IGNoYXJTaXplID0gdGhpcy5lbGVtZW50LnRleHRDb250ZW50Lmxlbmd0aDtcbiAgICBpZiAoY2hhclNpemUgaW4gc2l6ZXMpIGNoYXJTaXplKys7XG4gICAgaWYgKGNoYXJTaXplID4gMTAwKSBjaGFyU2l6ZSA9IDEwMDtcbiAgICBpZiAodGhpcy5zbWFsbCkgY2hhclNpemUgPSBjaGFyU2l6ZSAtIDIwO1xuXG4gICAgdGhpcy5zaXplID0gc2l6ZXNbTWF0aC5jZWlsKGNoYXJTaXplIC8gMjApICogMjBdO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB0aGlzLnNpemUpO1xuXG4gICAgLy8gaWYgKHRoaXMuZm4pIHRoaXMuc2l6ZXMuZm4gPSBzaXplc1tNYXRoLmNlaWwodGhpcy5mbi5pbm5lclRleHQubGVuZ3RoIC8gMjApICogMjBdO1xuICAgIC8vIGlmICh0aGlzLm5hbWUpIHRoaXMuc2l6ZXMubmFtZSA9IHNpemVzW01hdGguY2VpbCh0aGlzLm5hbWUuaW5uZXJUZXh0Lmxlbmd0aCAvIDIwKSAqIDIwXTtcbiAgICAvLyBpZiAodGhpcy50eXBlKSB0aGlzLnNpemVzLnR5cGUgPSBzaXplc1tNYXRoLmNlaWwodGhpcy50eXBlLmlubmVyVGV4dC5sZW5ndGggLyAyMCkgKiAyMF07XG4gICAgLy8gaWYgKHRoaXMucGFyYW1zKSB0aGlzLnNpemVzLnBhcmFtcyA9IHNpemVzW01hdGguY2VpbCh0aGlzLnBhcmFtcy5pbm5lclRleHQubGVuZ3RoIC8gMjApICogMjBdO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
