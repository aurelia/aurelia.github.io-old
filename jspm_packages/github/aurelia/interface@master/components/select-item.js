/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var SelectItemElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SelectItemElement, [{
      key: 'options',
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

    function SelectItemElement(element) {
      _classCallCheck(this, _SelectItemElement);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.onClick = this.onClick.bind(this);
      this.onSelect = this.onSelect.bind(this);
      this.element = element;
      element.tabIndex = '0';
    }

    _createDecoratedClass(SelectItemElement, [{
      key: 'created',
      value: function created(view) {
        this.list = view.container.viewModel;
        this.clickEvent = this.list.device.isTouch() ? 'click' : 'touchstart';
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.parentElement = this.element.parentElement;

        console.log(this.containerHeight);
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.button.removeEventListener(this.clickEvent, this.onClick, false);
        this.container.removeEventListener(this.clickEvent, this.onSelect);
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (this.container) {
          this.container.style.height = this.list.getHeight() + 'px';
        }
        if (this.parentElement) {
          this.parentElement.classList[value ? 'add' : 'remove']('active-item');
        }
      }
    }, {
      key: 'onClick',
      value: function onClick(event) {
        if (!this.active) {
          this.active = true;
        }
      }
    }, {
      key: 'onSelect',
      value: function onSelect($event, value) {
        this.active = false;
        this.value = value;
      }
    }], null, _instanceInitializers);

    var _SelectItemElement = SelectItemElement;
    SelectItemElement = (0, _aureliaFramework.customElement)('ai-select-item')(SelectItemElement) || SelectItemElement;
    SelectItemElement = (0, _aureliaFramework.inject)(Element)(SelectItemElement) || SelectItemElement;
    return SelectItemElement;
  })();

  exports.SelectItemElement = SelectItemElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2VsZWN0LWl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUlhLGlCQUFpQjs7OzswQkFBakIsaUJBQWlCOztxQ0FKUCxRQUFROztlQUtULElBQUk7Ozs7O3FDQUxILFFBQVE7O2VBTVYsSUFBSTs7Ozs7QUFFWixhQUpBLGlCQUFpQixDQUloQixPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN2QyxVQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3pDLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGFBQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0tBQ3hCOzswQkFUVSxpQkFBaUI7O2FBV3JCLGlCQUFDLElBQUksRUFBRTtBQUNaLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDckMsWUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxPQUFPLEdBQUcsWUFBWSxDQUFDO09BQ3ZFOzs7YUFFTyxvQkFBRTtBQUNSLFlBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUM7O0FBSWhELGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFBO09BQ2xDOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3RFLFlBQUksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDcEU7OzthQUdZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixZQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDbEIsY0FBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEdBQUcsSUFBSSxBQUFDLENBQUM7U0FDOUQ7QUFDRCxZQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDdEIsY0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUN2RTtPQUNGOzs7YUFFTSxpQkFBQyxLQUFLLEVBQUU7QUFDYixZQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNoQixjQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNwQjtPQUNGOzs7YUFFTyxrQkFBQyxNQUFNLEVBQUUsS0FBSyxFQUFFO0FBQ3RCLFlBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO09BQ3BCOzs7NkJBaERVLGlCQUFpQjtBQUFqQixxQkFBaUIsR0FEN0Isc0JBSE8sYUFBYSxFQUdOLGdCQUFnQixDQUFDLENBQ25CLGlCQUFpQixLQUFqQixpQkFBaUI7QUFBakIscUJBQWlCLEdBRjdCLHNCQUZnQyxNQUFNLEVBRS9CLE9BQU8sQ0FBQyxDQUVILGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCIiwiZmlsZSI6ImNvbXBvbmVudHMvc2VsZWN0LWl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuQGN1c3RvbUVsZW1lbnQoJ2FpLXNlbGVjdC1pdGVtJylcbmV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25TZWxlY3QgPSB0aGlzLm9uU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICBlbGVtZW50LnRhYkluZGV4ID0gJzAnO1xuICB9XG5cbiAgY3JlYXRlZCh2aWV3KSB7XG4gICAgdGhpcy5saXN0ID0gdmlldy5jb250YWluZXIudmlld01vZGVsO1xuICAgIHRoaXMuY2xpY2tFdmVudCA9IHRoaXMubGlzdC5kZXZpY2UuaXNUb3VjaCgpID8gJ2NsaWNrJyA6ICd0b3VjaHN0YXJ0JztcbiAgfVxuXG4gIGF0dGFjaGVkKCl7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgLy8gdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmNsaWNrRXZlbnQsIHRoaXMub25DbGljaywgZmFsc2UpO1xuICAgIC8vIHRoaXMuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5jbGlja0V2ZW50LCB0aGlzLm9uU2VsZWN0KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udGFpbmVySGVpZ2h0KVxuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5idXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcih0aGlzLmNsaWNrRXZlbnQsIHRoaXMub25DbGljaywgZmFsc2UpO1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5jbGlja0V2ZW50LCB0aGlzLm9uU2VsZWN0KTtcbiAgfVxuXG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gKHRoaXMubGlzdC5nZXRIZWlnaHQoKSArICdweCcpO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZS1pdGVtJyk7XG4gICAgfVxuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGlmICghdGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBvblNlbGVjdCgkZXZlbnQsIHZhbHVlKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
