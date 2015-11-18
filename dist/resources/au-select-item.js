System.register(['aurelia-framework', 'aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var customElement, bindable, inject, bindingMode, isTouch, DOM, clickEvent, SelectItemElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      bindingMode = _aureliaFramework.bindingMode;
    }, function (_aureliaInterfacePlatforms) {
      isTouch = _aureliaInterfacePlatforms.isTouch;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      clickEvent = isTouch ? 'touchstart' : 'click';

      SelectItemElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(SelectItemElement, [{
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'active',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'value',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function SelectItemElement(element) {
          _classCallCheck(this, _SelectItemElement);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

          this._options = [];
          this.display = null;

          this.element = element;
          this.element.tabIndex = '0';
          this.onClick = this.onClick.bind(this);
        }

        _createDecoratedClass(SelectItemElement, [{
          key: 'bind',
          value: function bind() {
            this.parentElement = this.element.parentElement;
            this.optionsChanged(this.options);
          }
        }, {
          key: 'valueChanged',
          value: function valueChanged(value, oldValue) {
            this.change && this.change(value, oldValue);
            this.setDisplay(value);
          }
        }, {
          key: 'activeChanged',
          value: function activeChanged(value) {
            if (this.options.length < 2) return;
            if (value) this.addListeners();

            if (this.container) {
              this.container.style.height = this.parentElement.clientHeight + 'px';
            }
            if (this.parentElement) {
              this.parentElement.classList[value ? 'add' : 'remove']('active-item');
            }
          }
        }, {
          key: 'optionsChanged',
          value: function optionsChanged(options) {
            this._options = options.map(function (o) {
              if (typeof o === 'string') {
                return { text: o, value: o };
              } else {
                return o;
              }
            });
            this.setDisplay(this.value);
          }
        }, {
          key: 'addListeners',
          value: function addListeners() {
            DOM.addEventListener(clickEvent, this.onClick, true);
          }
        }, {
          key: 'removeListeners',
          value: function removeListeners() {
            DOM.removeEventListener(clickEvent, this.onClick, true);
          }
        }, {
          key: 'change',
          value: function change() {
            this.active = false;
            this.removeListeners();
          }
        }, {
          key: 'onClick',
          value: function onClick(event) {
            if (!this.element.contains(event.target)) {
              this.active = false;
              this.removeListeners();
            }
          }
        }, {
          key: 'setDisplay',
          value: function setDisplay(value) {
            this.display = this._options.find(function (o) {
              if (typeof o === 'string' && o === value) {
                return true;
              } else if (o.value === value) {
                return true;
              }
              return false;
            });
            console.log(this.display);
          }
        }], null, _instanceInitializers);

        var _SelectItemElement = SelectItemElement;
        SelectItemElement = bindable({
          name: 'value',
          attribute: 'value',
          changeHandler: 'valueChanged',
          defaultBindingMode: bindingMode.twoWay
        })(SelectItemElement) || SelectItemElement;
        SelectItemElement = inject(Element)(SelectItemElement) || SelectItemElement;
        SelectItemElement = customElement('au-select-item')(SelectItemElement) || SelectItemElement;
        return SelectItemElement;
      })();

      _export('SelectItemElement', SelectItemElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1zZWxlY3QtaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0VBSU0sVUFBVSxFQVVILGlCQUFpQjs7Ozs7Ozs7Ozt3Q0FkdEIsYUFBYTttQ0FBRSxRQUFRO2lDQUFFLE1BQU07c0NBQUUsV0FBVzs7MkNBQzVDLE9BQU87O3dCQUNQLEdBQUc7OztBQUVMLGdCQUFVLEdBQUcsT0FBTyxHQUFHLFlBQVksR0FBRyxPQUFPOztBQVV0Qyx1QkFBaUI7Ozs7OEJBQWpCLGlCQUFpQjs7dUJBQzNCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBVSxJQUFJOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7QUFLWCxpQkFSQSxpQkFBaUIsQ0FRaEIsT0FBTyxFQUFFOzs7Ozs7Ozs7ZUFIckIsUUFBUSxHQUFHLEVBQUU7ZUFDYixPQUFPLEdBQUcsSUFBSTs7QUFHWixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDNUIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4Qzs7OEJBWlUsaUJBQWlCOztpQkFjeEIsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUNoRCxnQkFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDbkM7OztpQkFFVyxzQkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQzVCLGdCQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLGdCQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ3hCOzs7aUJBRVksdUJBQUMsS0FBSyxF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anMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGJpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge2lzVG91Y2h9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5jb25zdCBjbGlja0V2ZW50ID0gaXNUb3VjaCA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljayc7XG5cbkBjdXN0b21FbGVtZW50KCdhdS1zZWxlY3QtaXRlbScpXG5AaW5qZWN0KEVsZW1lbnQpXG5AYmluZGFibGUoe1xuICBuYW1lOiAndmFsdWUnLFxuICBhdHRyaWJ1dGU6ICd2YWx1ZScsXG4gIGNoYW5nZUhhbmRsZXI6ICd2YWx1ZUNoYW5nZWQnLFxuICBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheVxufSlcbmV4cG9ydCBjbGFzcyBTZWxlY3RJdGVtRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG5cbiAgX29wdGlvbnMgPSBbXTtcbiAgZGlzcGxheSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5lbGVtZW50LnRhYkluZGV4ID0gJzAnO1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnBhcmVudEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB0aGlzLm9wdGlvbnNDaGFuZ2VkKHRoaXMub3B0aW9ucyk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2UgJiYgdGhpcy5jaGFuZ2UodmFsdWUsIG9sZFZhbHVlKTtcbiAgICB0aGlzLnNldERpc3BsYXkodmFsdWUpO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMubGVuZ3RoIDwgMikgcmV0dXJuO1xuICAgIGlmICh2YWx1ZSkgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcblxuICAgIGlmICh0aGlzLmNvbnRhaW5lcikge1xuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5wYXJlbnRFbGVtZW50LmNsaWVudEhlaWdodCArICdweCc7XG4gICAgfVxuICAgIGlmICh0aGlzLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIHRoaXMucGFyZW50RWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlLWl0ZW0nKTtcbiAgICB9XG4gIH1cblxuICBvcHRpb25zQ2hhbmdlZChvcHRpb25zKSB7XG4gICAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMubWFwKChvKT0+IHtcbiAgICAgIGlmICh0eXBlb2YgbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHt0ZXh0OiBvLCB2YWx1ZTogb307XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnNldERpc3BsYXkodGhpcy52YWx1ZSk7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgRE9NLmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgdGhpcy5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgY2hhbmdlKCkge1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgICB9XG4gIH1cblxuICBzZXREaXNwbGF5KHZhbHVlKSB7XG4gICAgdGhpcy5kaXNwbGF5ID0gdGhpcy5fb3B0aW9ucy5maW5kKG8gPT4ge1xuICAgICAgaWYgKHR5cGVvZiBvID09PSAnc3RyaW5nJyAmJiBvID09PSB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH0gZWxzZSBpZiAoby52YWx1ZSA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2codGhpcy5kaXNwbGF5KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
