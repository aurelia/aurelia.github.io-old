/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var faRegex = /^fa\-/;
  function faPrefix(icon, isfa) {
    isfa = isfa || isFa(icon);
    return isfa ? icon : 'fa-' + icon;
  }

  function isFa(icon) {
    return faRegex.test(icon);
  }

  var aiRegex = /ai\-/gi;
  function aiPrefix(className) {
    return aiRegex.test(className) ? className : 'ai-' + className;
  }

  var IconElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(IconElement, [{
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'faIcon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'nextIcon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'next',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function IconElement(element) {
      _classCallCheck(this, _IconElement);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'faIcon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'nextIcon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'next', _instanceInitializers);

      this.taxtValue = null;
      this.className = 'ai-icon aicon';
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
        } else {
          this.textValue = this.icon;
        }
        this.iel.setAttribute('data-text', this.textValue);
        this.iel.innerText = '';
      }
    }, {
      key: 'iconChanged',
      value: function iconChanged(icon) {
        this.iconClass = aiPrefix(icon.toLowerCase());
        this.actualClass = this.iconClass;
      }
    }, {
      key: 'nextIconChanged',
      value: function nextIconChanged(icon) {
        this.nextClass = aiPrefix(icon.toLowerCase());
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
    IconElement = (0, _aureliaFramework.inject)(Element)(IconElement) || IconElement;
    IconElement = (0, _aureliaFramework.inlineView)('<template class="${actualClass}"><i ref="iel"><content></content></i></template>')(IconElement) || IconElement;
    IconElement = (0, _aureliaFramework.customElement)('ai-icon')(IconElement) || IconElement;
    return IconElement;
  })();

  exports.IconElement = IconElement;
});
//# sourceMappingURL=data:application/json;base64,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QUFJLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFJLElBQUksQ0FBQSxDQUFFLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQzNGLFlBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO09BQ2xCOzs7YUFFWSx1QkFBQyxNQUFNLEVBQUU7QUFDcEIsWUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ2xDLFlBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO09BQy9DOzs7dUJBOURVLFdBQVc7QUFBWCxlQUFXLEdBRHZCLHNCQWxCa0MsTUFBTSxFQWtCakMsT0FBTyxDQUFDLENBQ0gsV0FBVyxLQUFYLFdBQVc7QUFBWCxlQUFXLEdBRnZCLHNCQWpCTyxVQUFVLEVBaUJOLGtGQUFrRixDQUFDLENBRWxGLFdBQVcsS0FBWCxXQUFXO0FBQVgsZUFBVyxHQUh2QixzQkFoQm1CLGFBQWEsRUFnQmxCLFNBQVMsQ0FBQyxDQUdaLFdBQVcsS0FBWCxXQUFXO1dBQVgsV0FBVyIsImZpbGUiOiJlbGVtZW50cy9pY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5jb25zdCBmYVJlZ2V4ID0gL15mYVxcLS87XG5mdW5jdGlvbiBmYVByZWZpeChpY29uLCBpc2ZhKSB7XG4gIGlzZmEgPSBpc2ZhIHx8IGlzRmEoaWNvbik7XG4gIHJldHVybiBpc2ZhID8gaWNvbiA6IGBmYS0ke2ljb259YDtcbn1cblxuZnVuY3Rpb24gaXNGYShpY29uKSB7XG4gIHJldHVybiBmYVJlZ2V4LnRlc3QoaWNvbik7XG59XG5cbmNvbnN0IGFpUmVnZXggPSAvYWlcXC0vZ2k7XG5mdW5jdGlvbiBhaVByZWZpeChjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGFpUmVnZXgudGVzdChjbGFzc05hbWUpID8gY2xhc3NOYW1lIDogYGFpLSR7Y2xhc3NOYW1lfWA7XG59XG5cbkBjdXN0b21FbGVtZW50KCdhaS1pY29uJylcbkBpbmxpbmVWaWV3KCc8dGVtcGxhdGUgY2xhc3M9XCIke2FjdHVhbENsYXNzfVwiPjxpIHJlZj1cImllbFwiPjxjb250ZW50PjwvY29udGVudD48L2k+PC90ZW1wbGF0ZT4nKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEljb25FbGVtZW50IHtcblxuICBAYmluZGFibGUgaWNvbiAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGZhSWNvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBuZXh0SWNvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBuZXh0ID0gbnVsbDtcblxuICB0YXh0VmFsdWUgPSBudWxsO1xuXG4gIGNsYXNzTmFtZSA9ICdhaS1pY29uIGFpY29uJztcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHt0aGlzLmNsYXNzTmFtZX1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICB0cmFuc2Zvcm1lcnMgPSB7XG4gICAgc2NhbGU6IDEsXG4gICAgcm90YXRlOjAsXG4gICAgdHJhbnNsYXRlWDogMCxcbiAgICB0cmFuc2xhdGVZOiAwLFxuICAgIHRyYW5zbGF0ZVo6IDAsXG4gIH07XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKCF0aGlzLmljb24pIHtcbiAgICAgIHRoaXMuZmV0Y2hJY29uKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGV4dFZhbHVlID0gdGhpcy5pY29uO1xuICAgIH1cbiAgICB0aGlzLmllbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGV4dCcsIHRoaXMudGV4dFZhbHVlKTtcbiAgICB0aGlzLmllbC5pbm5lclRleHQgPSAnJztcbiAgfVxuXG4gIGljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLmljb25DbGFzcyA9IGFpUHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gICAgdGhpcy5hY3R1YWxDbGFzcyA9IHRoaXMuaWNvbkNsYXNzO1xuICB9XG5cbiAgbmV4dEljb25DaGFuZ2VkKGljb24pIHtcbiAgICB0aGlzLm5leHRDbGFzcyA9IGFpUHJlZml4KGljb24udG9Mb3dlckNhc2UoKSk7XG4gIH1cblxuICBuZXh0Q2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMTgwZGVnKSc7XG4gICAgICB0aGlzLmFjdHVhbENsYXNzID0gdGhpcy5uZXh0Q2xhc3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbiAgICAgIHRoaXMuYWN0dWFsQ2xhc3MgPSB0aGlzLmljb25DbGFzcztcbiAgICB9XG4gIH1cblxuICBmZXRjaEljb24oKSB7XG4gICAgbGV0IGljb24gPSAnJztcbiAgICBpY29uID0gdGhpcy50ZXh0VmFsdWUgfHwgKHRoaXMuaWVsID8gKHRoaXMuaWVsLmlubmVyVGV4dCkgOiBpY29uKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy50ZXh0VmFsdWUgPSBpY29uO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gIH1cblxuICByb3RhdGVDaGFuZ2VkKHJvdGF0ZSkge1xuICAgIHRoaXMudHJhbnNmb3JtZXJzLnJvdGF0ZSA9IHJvdGF0ZTtcbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
