System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var inlineView, processContent, customElement, bindable, inject, aiRegex, IconElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function auPrefix(className) {
    return aiRegex.test(className) ? className : 'au-' + className;
  }

  return {
    setters: [function (_aureliaTemplating) {
      inlineView = _aureliaTemplating.inlineView;
      processContent = _aureliaTemplating.processContent;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
//# sourceMappingURL=data:application/json;base64,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aUJBRVksdUJBQUMsTUFBTSxFQUFFO0FBQ3BCLGdCQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDbEMsZ0JBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1dBQy9DOzs7MkJBNURVLFdBQVc7QUFBWCxtQkFBVyxHQUR2QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsV0FBVyxLQUFYLFdBQVc7QUFBWCxtQkFBVyxHQUZ2QixjQUFjLENBQUMsS0FBSyxDQUFDLENBRVQsV0FBVyxLQUFYLFdBQVc7QUFBWCxtQkFBVyxHQUh2QixVQUFVLENBQUMsa0ZBQWtGLENBQUMsQ0FHbEYsV0FBVyxLQUFYLFdBQVc7QUFBWCxtQkFBVyxHQUp2QixhQUFhLENBQUMsU0FBUyxDQUFDLENBSVosV0FBVyxLQUFYLFdBQVc7ZUFBWCxXQUFXIiwiZmlsZSI6InJlc291cmNlcy9hdS1pY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmxpbmVWaWV3LCBwcm9jZXNzQ29udGVudCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5cbmNvbnN0IGFpUmVnZXggPSAvYWlcXC0vZ2k7XG5cbmZ1bmN0aW9uIGF1UHJlZml4KGNsYXNzTmFtZSkge1xuICByZXR1cm4gYWlSZWdleC50ZXN0KGNsYXNzTmFtZSkgPyBjbGFzc05hbWUgOiAoICAnYXUtJyArIGNsYXNzTmFtZSk7XG59XG5cbkBjdXN0b21FbGVtZW50KCdhdS1pY29uJylcbkBpbmxpbmVWaWV3KCc8dGVtcGxhdGUgY2xhc3M9XCIke2FjdHVhbENsYXNzfVwiPjxpIHJlZj1cImllbFwiPjxjb250ZW50PjwvY29udGVudD48L2k+PC90ZW1wbGF0ZT4nKVxuQHByb2Nlc3NDb250ZW50KGZhbHNlKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEljb25FbGVtZW50IHtcblxuICBAYmluZGFibGUgaWNvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBuZXh0ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGZhSWNvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBuZXh0SWNvbiA9IG51bGw7XG5cbiAgdGF4dFZhbHVlID0gbnVsbDtcblxuICBjbGFzc05hbWUgPSAnYXUtaWNvbiBhdWNvbic7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSAnICcgKyB0aGlzLmNsYXNzTmFtZTtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgdHJhbnNmb3JtZXJzID0ge1xuICAgIHNjYWxlOiAxLFxuICAgIHJvdGF0ZTogMCxcbiAgICB0cmFuc2xhdGVYOiAwLFxuICAgIHRyYW5zbGF0ZVk6IDAsXG4gICAgdHJhbnNsYXRlWjogMFxuICB9O1xuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5pY29uKSB7dGhpcy5mZXRjaEljb24oKTt9XG5cbiAgICB0aGlzLmllbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcsIHRoaXMudGV4dFZhbHVlKTtcbiAgICB0aGlzLmllbC5pbm5lclRleHQgPSAnJztcbiAgICB0aGlzLmllbC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIGljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLmljb25DbGFzcyA9IGF1UHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gICAgdGhpcy5hY3R1YWxDbGFzcyA9IHRoaXMuaWNvbkNsYXNzO1xuICB9XG5cbiAgbmV4dEljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLm5leHRDbGFzcyA9IGF1UHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBuZXh0Q2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMTgwZGVnKSc7XG4gICAgICB0aGlzLmFjdHVhbENsYXNzID0gdGhpcy5uZXh0Q2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgIHRoaXMuYWN0dWFsQ2xhc3MgPSB0aGlzLmljb25DbGFzcztcbiAgICB9XG4gIH1cblxuICBmZXRjaEljb24oKSB7XG4gICAgbGV0IGljb24gPSAnJztcbiAgICBpY29uID0gdGhpcy50ZXh0VmFsdWUgfHwgKHRoaXMuaWVsID8gKHRoaXMuaWVsLmlubmVyVGV4dCkgOiBpY29uKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSBpY29uO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cblxuICByb3RhdGVDaGFuZ2VkKHJvdGF0ZSkge1xuICAgIHRoaXMudHJhbnNmb3JtZXJzLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
