System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inlineView, processContent, customElement, inject, bindable, aiRegex, IconElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function auPrefix(className) {
    return aiRegex.test(className) ? className : 'au-' + className;
  }

  return {
    setters: [function (_aureliaFramework) {
      inlineView = _aureliaFramework.inlineView;
      processContent = _aureliaFramework.processContent;
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
    }],
    execute: function () {
      aiRegex = /ai\-/gi;

      IconElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(IconElement, [{
          key: 'icon',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'next',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'faIcon',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'nextIcon',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function IconElement(element) {
          _classCallCheck(this, _IconElement);

          _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'next', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'faIcon', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'nextIcon', _instanceInitializers);

          this.taxtValue = null;
          this.className = 'au-icon aucon';
          this.transformers = {
            scale: 1,
            rotate: 0,
            translateX: 0,
            translateY: 0,
            translateZ: 0
          };

          element.className += ' ' + this.className;
          this.element = element;
        }

        _createDecoratedClass(IconElement, [{
          key: 'attached',
          value: function attached() {
            if (!this.icon) {
              this.fetchIcon();
            }

            this.iel.setAttribute('data-text', this.textValue);
            this.iel.innerText = '';
            this.iel.innerHTML = '';
          }
        }, {
          key: 'iconChanged',
          value: function iconChanged(icon) {
            this.iconClass = auPrefix(icon.toLowerCase());
            this.actualClass = this.iconClass;
          }
        }, {
          key: 'nextIconChanged',
          value: function nextIconChanged(icon) {
            this.nextClass = auPrefix(icon.toLowerCase());
          }
        }, {
          key: 'nextChanged',
          value: function nextChanged(value) {
            if (value) {
              this.element.style.transform = 'rotate(180deg)';
              this.actualClass = this.nextClass;
            } else {
              this.element.style.transform = 'rotate(0deg)';
              this.actualClass = this.iconClass;
            }
          }
        }, {
          key: 'fetchIcon',
          value: function fetchIcon() {
            var icon = '';
            icon = this.textValue || (this.iel ? this.iel.innerText : icon).toString().toLowerCase();
            this.textValue = icon;
            this.icon = icon;
          }
        }, {
          key: 'rotateChanged',
          value: function rotateChanged(rotate) {
            this.transformers.rotate = rotate;
            this.element.style.transform = this.transform;
          }
        }], null, _instanceInitializers);

        var _IconElement = IconElement;
        IconElement = inject(Element)(IconElement) || IconElement;
        IconElement = processContent(false)(IconElement) || IconElement;
        IconElement = inlineView('<template class="${actualClass}"><i ref="iel"><content></content></i></template>')(IconElement) || IconElement;
        IconElement = customElement('au-icon')(IconElement) || IconElement;
        return IconElement;
      })();

      _export('IconElement', IconElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QkFFWSx1QkFBQyxNQUFNLEVBQUU7QUFDcEIsZ0JBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNsQyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7V0FDL0M7OzsyQkE1RFUsV0FBVztBQUFYLG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxXQUFXLEtBQVgsV0FBVztBQUFYLG1CQUFXLEdBRnZCLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FFVCxXQUFXLEtBQVgsV0FBVztBQUFYLG1CQUFXLEdBSHZCLFVBQVUsQ0FBQyxrRkFBa0YsQ0FBQyxDQUdsRixXQUFXLEtBQVgsV0FBVztBQUFYLG1CQUFXLEdBSnZCLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FJWixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVciLCJmaWxlIjoicmVzb3VyY2VzL2F1LWljb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lubGluZVZpZXcsIHByb2Nlc3NDb250ZW50LCBjdXN0b21FbGVtZW50LCBpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmNvbnN0IGFpUmVnZXggPSAvYWlcXC0vZ2k7XG5cbmZ1bmN0aW9uIGF1UHJlZml4KGNsYXNzTmFtZSkge1xuICByZXR1cm4gYWlSZWdleC50ZXN0KGNsYXNzTmFtZSkgPyBjbGFzc05hbWUgOiAoICAnYXUtJyArIGNsYXNzTmFtZSk7XG59XG5cbkBjdXN0b21FbGVtZW50KCdhdS1pY29uJylcbkBpbmxpbmVWaWV3KCc8dGVtcGxhdGUgY2xhc3M9XCIke2FjdHVhbENsYXNzfVwiPjxpIHJlZj1cImllbFwiPjxjb250ZW50PjwvY29udGVudD48L2k+PC90ZW1wbGF0ZT4nKVxuQHByb2Nlc3NDb250ZW50KGZhbHNlKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEljb25FbGVtZW50IHtcblxuICBAYmluZGFibGUgaWNvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBuZXh0ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGZhSWNvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBuZXh0SWNvbiA9IG51bGw7XG5cbiAgdGF4dFZhbHVlID0gbnVsbDtcblxuICBjbGFzc05hbWUgPSAnYXUtaWNvbiBhdWNvbic7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmNsYXNzTmFtZTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgdHJhbnNmb3JtZXJzID0ge1xuICAgIHNjYWxlOiAxLFxuICAgIHJvdGF0ZTogMCxcbiAgICB0cmFuc2xhdGVYOiAwLFxuICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgdHJhbnNsYXRlWjogMFxuICB9O1xuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5pY29uKSB7dGhpcy5mZXRjaEljb24oKTt9XG5cbiAgICB0aGlzLmllbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcsIHRoaXMudGV4dFZhbHVlKTtcbiAgICB0aGlzLmllbC5pbm5lclRleHQgPSAnJztcbiAgICB0aGlzLmllbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLmljb25DbGFzcyA9IGF1UHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gICAgdGhpcy5hY3R1YWxDbGFzcyA9IHRoaXMuaWNvbkNsYXNzO1xuICB9XG5cbiAgbmV4dEljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLm5leHRDbGFzcyA9IGF1UHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBuZXh0Q2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMTgwZGVnKSc7XG4gICAgICB0aGlzLmFjdHVhbENsYXNzID0gdGhpcy5uZXh0Q2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgIHRoaXMuYWN0dWFsQ2xhc3MgPSB0aGlzLmljb25DbGFzcztcbiAgICB9XG4gIH1cblxuICBmZXRjaEljb24oKSB7XG4gICAgbGV0IGljb24gPSAnJztcbiAgICBpY29uID0gdGhpcy50ZXh0VmFsdWUgfHwgKHRoaXMuaWVsID8gKHRoaXMuaWVsLmlubmVyVGV4dCkgOiBpY29uKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSBpY29uO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cblxuICByb3RhdGVDaGFuZ2VkKHJvdGF0ZSkge1xuICAgIHRoaXMudHJhbnNmb3JtZXJzLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
