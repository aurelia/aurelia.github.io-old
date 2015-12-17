/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', '../decorators/element-css', '../channel'], function (exports, _aureliaFramework, _aureliaPal, _decoratorsElementCss, _channel) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function createElement(tagName, className) {
    var element = _aureliaPal.DOM.createElement(tagName);
    element.className = className;
    return element;
  }

  var TooltipComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(TooltipComponent, [{
      key: 'color',
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
      key: 'position',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function TooltipComponent(element, channel) {
      _classCallCheck(this, _TooltipComponent);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'position', _instanceInitializers);

      this.classNames = {
        root: 'tooltip',
        label: 'tooltip__label',
        active: 'tooltip--is-active',
        background: 'tooltip__background',
        prefix: function prefix(_prefix) {
          return 'tooltip--' + _prefix;
        }
      };

      element.className += ' ' + this.classNames.root;
      this.element = element;
      this.bgElement = createElement('DIV', this.classNames.background);
      this.labelElement = createElement('SPAN', this.classNames.label);
      this.onMouseenter = this.onMouseenter.bind(this);
      this.onMouseleave = this.onMouseleave.bind(this);

      this.element.appendChild(this.bgElement);
      this.element.appendChild(this.labelElement);
    }

    _createDecoratedClass(TooltipComponent, [{
      key: 'bind',
      value: function bind() {
        this.parent = this.element.parentElement;
        this.position = this.position || 'top';
        this.color = this.color || 'black';
        this.positionChanged(this.position);
        this.colorChanged(this.color);

        this.parent.addEventListener('mouseenter', this.onMouseenter);
        this.parent.addEventListener('mouseleave', this.onMouseleave);
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        this.parent.removeEventListener('mouseenter', this.onMouseenter);
        this.parent.removeEventListener('mouseleave', this.onMouseleave);
      }
    }, {
      key: 'positionChanged',
      value: function positionChanged(position, lastPosition) {
        this.element.classList.add(this.classNames.prefix(position));
      }
    }, {
      key: 'colorChanged',
      value: function colorChanged(color, lastPosition) {
        this.element.classList.add(this.classNames.prefix(color));
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) {
          this.show();
        } else {
          this.hide();
        }
      }
    }, {
      key: 'show',
      value: function show() {
        var tooltip = this.element;
        tooltip.style.display = 'block';
        tooltip.classList.add(this.classNames.active);
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this = this;

        this.element.classList.remove(this.classNames.active);
        setTimeout(function () {
          _this.element.style.display = 'none';
        }, 200);
      }
    }, {
      key: 'isShown',
      value: function isShown() {
        return this.element.classList.has(this.classNames.active);
      }
    }, {
      key: 'updated',
      value: function updated(content) {
        this.content = content;
        this.element.innerText = content;
      }
    }, {
      key: 'onMouseenter',
      value: function onMouseenter() {
        this.active = true;
      }
    }, {
      key: 'onMouseleave',
      value: function onMouseleave() {
        this.active = false;
      }
    }], null, _instanceInitializers);

    var _TooltipComponent = TooltipComponent;
    TooltipComponent = (0, _aureliaFramework.inject)(Element, _channel.InterfaceChannel)(TooltipComponent) || TooltipComponent;
    TooltipComponent = (0, _decoratorsElementCss.elementCss)()(TooltipComponent) || TooltipComponent;
    TooltipComponent = (0, _aureliaFramework.useView)('./content.html')(TooltipComponent) || TooltipComponent;
    TooltipComponent = (0, _aureliaFramework.customElement)('ai-tooltip')(TooltipComponent) || TooltipComponent;
    return TooltipComponent;
  })();

  exports.TooltipComponent = TooltipComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdG9vbHRpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBS0EsV0FBUyxhQUFhLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRTtBQUN6QyxRQUFJLE9BQU8sR0FBRyxZQUxSLEdBQUcsQ0FLUyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsV0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDbEMsV0FBTyxPQUFPLENBQUM7R0FDaEI7O01BTVksZ0JBQWdCOzs7OzBCQUFoQixnQkFBZ0I7O3FDQWZHLFFBQVE7O2VBZ0JwQixJQUFJOzs7OztxQ0FoQlEsUUFBUTs7ZUFpQm5CLElBQUk7Ozs7O3FDQWpCTyxRQUFROztlQWtCakIsSUFBSTs7Ozs7QUFVZCxhQWJBLGdCQUFnQixDQWFmLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7OztXQVI5QixVQUFVLEdBQUc7QUFDWCxZQUFJLEVBQUcsU0FBUztBQUNoQixhQUFLLEVBQUUsZ0JBQWdCO0FBQ3ZCLGNBQU0sRUFBQyxvQkFBb0I7QUFDM0Isa0JBQVUsRUFBRSxxQkFBcUI7QUFDakMsY0FBTSxFQUFBLGdCQUFDLE9BQU0sRUFBQztBQUFDLCtCQUFtQixPQUFNLENBQUU7U0FBQztPQUM1Qzs7QUFHQyxhQUFPLENBQUMsU0FBUyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQztBQUNoRCxVQUFJLENBQUMsT0FBTyxHQUFRLE9BQU8sQ0FBQztBQUM1QixVQUFJLENBQUMsU0FBUyxHQUFNLGFBQWEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNyRSxVQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNqRSxVQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFB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QUFHLE9BQU8sQ0FBQztPQUNsQzs7O2FBRVcsd0JBQUc7QUFDYixZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztPQUNwQjs7O2FBRVcsd0JBQUc7QUFDYixZQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztPQUNyQjs7OzRCQXJGVSxnQkFBZ0I7QUFBaEIsb0JBQWdCLEdBRDVCLHNCQWR5QyxNQUFNLEVBY3hDLE9BQU8sV0FYUCxnQkFBZ0IsQ0FXVSxDQUNyQixnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUY1QiwwQkFYTyxVQUFVLEdBV0wsQ0FFQSxnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUg1QixzQkFaTyxPQUFPLEVBWU4sZ0JBQWdCLENBQUMsQ0FHYixnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUo1QixzQkFYZ0IsYUFBYSxFQVdmLFlBQVksQ0FBQyxDQUlmLGdCQUFnQixLQUFoQixnQkFBZ0I7V0FBaEIsZ0JBQWdCIiwiZmlsZSI6ImNvbXBvbmVudHMvdG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7ZWxlbWVudENzc30gZnJvbSAnLi4vZGVjb3JhdG9ycy9lbGVtZW50LWNzcyc7XG5pbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4uL2NoYW5uZWwnO1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIGNsYXNzTmFtZSkge1xuICBsZXQgZWxlbWVudCA9IERPTS5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktdG9vbHRpcCcpXG5AdXNlVmlldygnLi9jb250ZW50Lmh0bWwnKVxuQGVsZW1lbnRDc3MoKVxuQGluamVjdChFbGVtZW50LCBJbnRlcmZhY2VDaGFubmVsKVxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb21wb25lbnQge1xuICBAYmluZGFibGUgY29sb3IgPSBudWxsO1xuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcbiAgQGJpbmRhYmxlIHBvc2l0aW9uID0gbnVsbDtcblxuICBjbGFzc05hbWVzID0ge1xuICAgIHJvb3Q6ICAndG9vbHRpcCcsXG4gICAgbGFiZWw6ICd0b29sdGlwX19sYWJlbCcsXG4gICAgYWN0aXZlOid0b29sdGlwLS1pcy1hY3RpdmUnLFxuICAgIGJhY2tncm91bmQ6ICd0b29sdGlwX19iYWNrZ3JvdW5kJyxcbiAgICBwcmVmaXgocHJlZml4KXtyZXR1cm4gYHRvb2x0aXAtLSR7cHJlZml4fWB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgdGhpcy5jbGFzc05hbWVzLnJvb3Q7XG4gICAgdGhpcy5lbGVtZW50ICAgICAgPSBlbGVtZW50O1xuICAgIHRoaXMuYmdFbGVtZW50ICAgID0gY3JlYXRlRWxlbWVudCgnRElWJywgdGhpcy5jbGFzc05hbWVzLmJhY2tncm91bmQpO1xuICAgIHRoaXMubGFiZWxFbGVtZW50ID0gY3JlYXRlRWxlbWVudCgnU1BBTicsIHRoaXMuY2xhc3NOYW1lcy5sYWJlbCk7XG4gICAgdGhpcy5vbk1vdXNlZW50ZXIgPSB0aGlzLm9uTW91c2VlbnRlci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25Nb3VzZWxlYXZlID0gdGhpcy5vbk1vdXNlbGVhdmUuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmJnRWxlbWVudClcbiAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5sYWJlbEVsZW1lbnQpXG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMucGFyZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb24gfHwgJ3RvcCc7XG4gICAgdGhpcy5jb2xvciA9IHRoaXMuY29sb3IgfHwgJ2JsYWNrJztcbiAgICB0aGlzLnBvc2l0aW9uQ2hhbmdlZCh0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLmNvbG9yQ2hhbmdlZCh0aGlzLmNvbG9yKTtcblxuICAgIHRoaXMucGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLm9uTW91c2VlbnRlcik7XG4gICAgdGhpcy5wYXJlbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMub25Nb3VzZWxlYXZlKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnBhcmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgdGhpcy5vbk1vdXNlZW50ZXIpO1xuICAgIHRoaXMucGFyZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCB0aGlzLm9uTW91c2VsZWF2ZSk7XG4gIH1cblxuICBwb3NpdGlvbkNoYW5nZWQocG9zaXRpb24sIGxhc3RQb3NpdGlvbikge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lcy5wcmVmaXgocG9zaXRpb24pKTtcbiAgfVxuXG4gIGNvbG9yQ2hhbmdlZChjb2xvciwgbGFzdFBvc2l0aW9uKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLnByZWZpeChjb2xvcikpO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNob3coKSB7XG4gICAgbGV0IHRvb2x0aXAgPSB0aGlzLmVsZW1lbnQ7XG4gICAgdG9vbHRpcC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0b29sdGlwLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWVzLmFjdGl2ZSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lcy5hY3RpdmUpO1xuICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9LCAyMDApXG4gIH1cblxuICBpc1Nob3duKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0Lmhhcyh0aGlzLmNsYXNzTmFtZXMuYWN0aXZlKTtcbiAgfVxuXG4gIHVwZGF0ZWQoY29udGVudCkge1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5lbGVtZW50LmlubmVyVGV4dCA9IGNvbnRlbnQ7XG4gIH1cblxuICBvbk1vdXNlZW50ZXIoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG5cbiAgb25Nb3VzZWxlYXZlKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
