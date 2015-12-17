/* */ 
define(['exports', 'aurelia-framework', '../channel', 'aurelia-interface-platforms', 'aurelia-pal'], function (exports, _aureliaFramework, _channel, _aureliaInterfacePlatforms, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function processTemplate(compiler, resources, element, instruction) {
    var fragment = undefined;
    var factory = undefined;
    var content = undefined;
    var temp = undefined;
    var node = undefined;

    temp = _aureliaPal.DOM.createDocumentFragment();
    fragment = _aureliaPal.DOM.createDocumentFragment();

    node = _aureliaPal.DOM.createElement('menu-container');

    node.className = 'au-animate';

    content = element.firstChild;
    while (content) {
      if (content.nodeName === 'OPTION') {
        node.appendChild(content);
      } else {
        temp.appendChild(content);
      }
      content = element.firstChild;
    }

    element.appendChild(temp);
    fragment.appendChild(node);

    instruction.optionFactory = compiler.compile(fragment, resources);
    return true;
  }

  var MenuComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(MenuComponent, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'items',
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
    }, {
      key: 'title',
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
    }, {
      key: 'position',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function MenuComponent(element, container, viewSlot, instruction, channel) {
      _classCallCheck(this, _MenuComponent);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'position', _instanceInitializers);

      this.element = element;
      this.channel = channel;
      this.viewSlot = viewSlot;
      this.container = container;
      this.viewFactory = instruction.elementInstruction.optionFactory;
      this.onTouch = this.onTouch.bind(this);
    }

    _createDecoratedClass(MenuComponent, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.bindingContext = bindingContext;
      }
    }, {
      key: 'open',
      value: function open() {
        this.active = true;
      }
    }, {
      key: 'close',
      value: function close() {
        this.active = false;
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) {
          this.addView();
          this.element.classList.add('active');
        } else {
          this.removeView();
          this.element.classList.remove('active');
        }
      }
    }, {
      key: 'valueChanged',
      value: function valueChanged(value) {
        console.log(value);
      }
    }, {
      key: 'addView',
      value: function addView() {
        if (!this.view) {
          this.view = this.viewFactory.create(this.container);
          this.view.bind(this, this.bindingContext);
          this.viewSlot.add(this.view, true);
          _aureliaPal.DOM.addEventListener('click', this.onTouch, true);
          _aureliaPal.DOM.addEventListener('touchstart', this.onTouch, true);
        }
      }
    }, {
      key: 'removeView',
      value: function removeView() {
        if (this.view) {
          this.viewSlot.remove(this.view, true);
          this.view = null;
          _aureliaPal.DOM.removeEventListener('click', this.onTouch, true);
          _aureliaPal.DOM.removeEventListener('touchstart', this.onTouch, true);
        }
      }
    }, {
      key: 'optionsChanged',
      value: function optionsChanged(options) {}
    }, {
      key: 'onTouch',
      value: function onTouch(event) {

        if (event.target.nodeName === 'OPTION') {
          this.active = false;
          this.value = event.target.value;
          return;
        }
        if (this.element.contains(event.target)) {
          this.active = true;
          return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.active = false;
        return;
      }
    }], null, _instanceInitializers);

    var _MenuComponent = MenuComponent;
    MenuComponent = (0, _aureliaFramework.inject)(Element, _aureliaFramework.Container, _aureliaFramework.ViewSlot, _aureliaFramework.TargetInstruction, _channel.InterfaceChannel)(MenuComponent) || MenuComponent;
    MenuComponent = (0, _aureliaFramework.processContent)(processTemplate)(MenuComponent) || MenuComponent;
    MenuComponent = (0, _aureliaFramework.customElement)('ai-menu')(MenuComponent) || MenuComponent;
    return MenuComponent;
  })();

  exports.MenuComponent = MenuComponent;
});
//# sourceMappingURL=data:application/json;base64,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QztTQUMzRDtPQUNGOzs7YUFFYSx3QkFBQyxPQUFPLEVBQUUsRUFLdkI7OzthQUVNLGlCQUFDLEtBQUssRUFBRTs7QUFFYixZQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxLQUFLLFFBQVEsRUFBRTtBQUN0QyxjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixjQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2hDLGlCQUFPO1NBQ1I7QUFDRCxZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN2QyxjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztBQUNuQixpQkFBTztTQUNSO0FBQ0QsYUFBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQ3ZCLGFBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQztBQUN4QixZQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixlQUFPO09BQ1I7Ozt5QkFwRlUsYUFBYTtBQUFiLGlCQUFhLEdBRHpCLHNCQXpDd0YsTUFBTSxFQXlDdkYsT0FBTyxvQkF6Q1MsU0FBUyxvQkFBcUIsUUFBUSxvQkFBM0IsaUJBQWlCLFdBQzVDLGdCQUFnQixDQXdDa0QsQ0FDN0QsYUFBYSxLQUFiLGFBQWE7QUFBYixpQkFBYSxHQUZ6QixzQkF4Q08sY0FBYyxFQXdDTixlQUFlLENBQUMsQ0FFbkIsYUFBYSxLQUFiLGFBQWE7QUFBYixpQkFBYSxHQUh6QixzQkF2QytELGFBQWEsRUF1QzlELFNBQVMsQ0FBQyxDQUdaLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL21lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Byb2Nlc3NDb250ZW50LCBDb250YWluZXIsIFRhcmdldEluc3RydWN0aW9uLCBWaWV3U2xvdCwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGRyZW59IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5pbXBvcnQge3N1cHBvcnR9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZShjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbikge1xuICBsZXQgZnJhZ21lbnQ7XG4gIGxldCBmYWN0b3J5O1xuICBsZXQgY29udGVudDtcbiAgbGV0IHRlbXA7XG4gIGxldCBub2RlO1xuXG4gIHRlbXAgICAgID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgZnJhZ21lbnQgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIG5vZGUgICAgID0gRE9NLmNyZWF0ZUVsZW1lbnQoJ21lbnUtY29udGFpbmVyJyk7XG5cbiAgbm9kZS5jbGFzc05hbWUgPSAnYXUtYW5pbWF0ZSc7XG5cbiAgY29udGVudCAgPSBlbGVtZW50LmZpcnN0Q2hpbGQ7XG4gIHdoaWxlKGNvbnRlbnQpIHtcbiAgICBpZiAoY29udGVudC5ub2RlTmFtZSA9PT0gJ09QVElPTicpIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudClcbiAgICB9IGVsc2Uge1xuICAgICAgdGVtcC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG4gICAgY29udGVudCA9IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGVtcCk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXG5cbiAgaW5zdHJ1Y3Rpb24ub3B0aW9uRmFjdG9yeSA9IGNvbXBpbGVyLmNvbXBpbGUoZnJhZ21lbnQsIHJlc291cmNlcyk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5cbkBjdXN0b21FbGVtZW50KCdhaS1tZW51JylcbkBwcm9jZXNzQ29udGVudChwcm9jZXNzVGVtcGxhdGUpXG5AaW5qZWN0KEVsZW1lbnQsIENvbnRhaW5lciwgVmlld1Nsb3QsIFRhcmdldEluc3RydWN0aW9uLCBJbnRlcmZhY2VDaGFubmVsKVxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xuICBAYmluZGFibGUgdmFsdWUgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGl0ZW1zICA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuICBAYmluZGFibGUgdGl0bGUgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGljb24gICA9IG51bGw7XG4gIEBiaW5kYWJsZSBwb3NpdGlvbiA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyLCB2aWV3U2xvdCwgaW5zdHJ1Y3Rpb24sIGNoYW5uZWwpIHtcbiAgICB0aGlzLmVsZW1lbnQgID0gZWxlbWVudDtcbiAgICB0aGlzLmNoYW5uZWwgID0gY2hhbm5lbDtcbiAgICB0aGlzLnZpZXdTbG90ID0gdmlld1Nsb3Q7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy52aWV3RmFjdG9yeSAgICA9IGluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbi5vcHRpb25GYWN0b3J5O1xuICAgIHRoaXMub25Ub3VjaCA9IHRoaXMub25Ub3VjaC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYmluZChiaW5kaW5nQ29udGV4dCkge1xuICAgIHRoaXMuYmluZGluZ0NvbnRleHQgPSBiaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMuYWRkVmlldygpO1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZVZpZXcoKTtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSlcbiAgfVxuXG4gIGFkZFZpZXcoKSB7XG4gICAgaWYgKCF0aGlzLnZpZXcpIHtcbiAgICAgIHRoaXMudmlldyA9IHRoaXMudmlld0ZhY3RvcnkuY3JlYXRlKHRoaXMuY29udGFpbmVyKTtcbiAgICAgIHRoaXMudmlldy5iaW5kKHRoaXMsIHRoaXMuYmluZGluZ0NvbnRleHQpO1xuICAgICAgdGhpcy52aWV3U2xvdC5hZGQodGhpcy52aWV3LCB0cnVlKTtcbiAgICAgIERPTS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Ub3VjaCwgdHJ1ZSk7XG4gICAgICBET00uYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVmlldygpIHtcbiAgICBpZiAodGhpcy52aWV3KSB7XG4gICAgICB0aGlzLnZpZXdTbG90LnJlbW92ZSh0aGlzLnZpZXcsIHRydWUpO1xuICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICAgIERPTS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25Ub3VjaCwgdHJ1ZSk7XG4gICAgICBET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHRoaXMub25Ub3VjaCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb3B0aW9uc0NoYW5nZWQob3B0aW9ucykge1xuICAgIC8vIHRoaXMub3B0aW9ucy5mb3JFYWNoKG8gPT4ge1xuICAgIC8vICAgaWYgKCFvLnZhbHVlKSBvLnZhbHVlID0gKG8uaW5uZXJUZXh0IHx8IG8uaW5uZXJIVE1MKS50cmltKCk7XG4gICAgLy8gICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChvKTtcbiAgICAvLyB9KTtcbiAgfVxuXG4gIG9uVG91Y2goZXZlbnQpIHtcblxuICAgIGlmIChldmVudC50YXJnZXQubm9kZU5hbWUgPT09ICdPUFRJT04nKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy52YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
