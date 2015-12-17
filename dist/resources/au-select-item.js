System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, inject, isTouch, DOM, clickEvent, SelectItemElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
          key: 'onSelect',
          value: function onSelect($event, value) {
            this.value = value;
            this.active = false;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1zZWxlY3QtaXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0VBTU0sVUFBVSxFQVVILGlCQUFpQjs7Ozs7Ozs7Ozt5Q0FoQnRCLGFBQWE7b0NBQUUsUUFBUTs7b0NBQ3ZCLFdBQVc7OzJDQUNYLE1BQU07OzJDQUNOLE9BQU87O3dCQUNQLEdBQUc7OztBQUVMLGdCQUFVLEdBQUcsT0FBTyxHQUFHLFlBQVksR0FBRyxPQUFPOztBQVV0Qyx1QkFBaUI7Ozs7OEJBQWpCLGlCQUFpQjs7dUJBQzNCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBVSxJQUFJOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQVMsSUFBSTs7Ozs7QUFLWCxpQkFSQSxpQkFBaUIsQ0FRaEIsT0FBTyxFQUFFOzs7Ozs7Ozs7ZUFIckIsUUFBUSxHQUFHLEVBQUU7ZUFDYixPQUFPLEdBQUcsSUFBSTs7QUFHWixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7QUFDNUIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4Qzs7OEJBWlUsaUJBQWlCOztpQkFjeEIsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztBQUNoRCxnQkFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDbkM7OztpQkFFVyxzQkFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQzVCLGdCQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzVDLGdCQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ3hCOzs7aUJBRVksdUJBQUMsS0FB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QUFpQixLQUFqQixpQkFBaUI7ZUFBakIsaUJBQWlCIiwiZmlsZSI6InJlc291cmNlcy9hdS1zZWxlY3QtaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge2JpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWJpbmRpbmcnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtpc1RvdWNofSBmcm9tICdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuY29uc3QgY2xpY2tFdmVudCA9IGlzVG91Y2ggPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xuXG5AY3VzdG9tRWxlbWVudCgnYXUtc2VsZWN0LWl0ZW0nKVxuQGluamVjdChFbGVtZW50KVxuQGJpbmRhYmxlKHtcbiAgbmFtZTogJ3ZhbHVlJyxcbiAgYXR0cmlidXRlOiAndmFsdWUnLFxuICBjaGFuZ2VIYW5kbGVyOiAndmFsdWVDaGFuZ2VkJyxcbiAgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXlcbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0SXRlbUVsZW1lbnQge1xuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuXG4gIF9vcHRpb25zID0gW107XG4gIGRpc3BsYXkgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuZWxlbWVudC50YWJJbmRleCA9ICcwJztcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5wYXJlbnRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgdGhpcy5vcHRpb25zQ2hhbmdlZCh0aGlzLm9wdGlvbnMpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIHRoaXMuY2hhbmdlICYmIHRoaXMuY2hhbmdlKHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgdGhpcy5zZXREaXNwbGF5KHZhbHVlKTtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmxlbmd0aCA8IDIpIHJldHVybjtcbiAgICBpZiAodmFsdWUpIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG5cbiAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IHRoaXMucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICB0aGlzLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZS1pdGVtJyk7XG4gICAgfVxuICB9XG5cbiAgb3B0aW9uc0NoYW5nZWQob3B0aW9ucykge1xuICAgIHRoaXMuX29wdGlvbnMgPSBvcHRpb25zLm1hcCgobyk9PiB7XG4gICAgICBpZiAodHlwZW9mIG8gPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB7dGV4dDogbywgdmFsdWU6IG99O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5zZXREaXNwbGF5KHRoaXMudmFsdWUpO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIERPTS5hZGRFdmVudExpc3RlbmVyKGNsaWNrRXZlbnQsIHRoaXMub25DbGljaywgdHJ1ZSk7XG4gIH1cblxuICByZW1vdmVMaXN0ZW5lcnMoKSB7XG4gICAgRE9NLnJlbW92ZUV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgdGhpcy5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIGNoYW5nZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3QoJGV2ZW50LCB2YWx1ZSkge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgc2V0RGlzcGxheSh2YWx1ZSkge1xuICAgIHRoaXMuZGlzcGxheSA9IHRoaXMuX29wdGlvbnMuZmluZChvID0+IHtcbiAgICAgIGlmICh0eXBlb2YgbyA9PT0gJ3N0cmluZycgJiYgbyA9PT0gdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2UgaWYgKG8udmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
