System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var customElement, bindable, children, bindingMode, inject, isTouch, device, DOM, clickEvent, DropdownElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      children = _aureliaTemplating.children;
    }, function (_aureliaBinding) {
      bindingMode = _aureliaBinding.bindingMode;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaInterfacePlatforms) {
      isTouch = _aureliaInterfacePlatforms.isTouch;
      device = _aureliaInterfacePlatforms.device;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      clickEvent = isTouch ? 'touchstart' : 'click';

      DropdownElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(DropdownElement, [{
          key: 'items',
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
          key: 'title',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'icon',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'position',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'options',
          decorators: [bindable],
          initializer: function initializer() {
            return [];
          },
          enumerable: true
        }, {
          key: '_options',
          decorators: [children('option')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function DropdownElement(element, channel) {
          _classCallCheck(this, _DropdownElement);

          _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'position', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, '_options', _instanceInitializers);

          this.items = [];

          this.element = element;
          this.channel = channel;
          this.onClick = this.onClick.bind(this);
          this.onSelect = this.onSelect.bind(this);
          this.isHandHeld = device.isHandHeld;
        }

        _createDecoratedClass(DropdownElement, [{
          key: '_bindEventListeners',
          value: function _bindEventListeners() {
            if (this.isListening) return;
            this.isListening = true;
            DOM.addEventListener(clickEvent, this.onSelect, true);
          }
        }, {
          key: '_unbindEventListeners',
          value: function _unbindEventListeners() {
            if (!this.isListening) {
              this.isListening = false;
              DOM.removeEventListener(clickEvent, this.onSelect);
            }
          }
        }, {
          key: '_setContainerHeight',
          value: function _setContainerHeight(zero) {
            if (zero === 0) {
              this.container.style.height = '';
              return;
            }
            var height = this.container.scrollHeight + 'px';
            if (height !== '0px') {
              this.container.style.height = height;
            }
          }
        }, {
          key: '_setPosition',
          value: function _setPosition() {
            var w = window.screen.width;
            var h = window.screen.height;
            var left = this.element.offsetLeft;
            var top = this.element.offsetTop;
            var valign = undefined;
            var halign = undefined;
            if (left > w / 2) {
              halign = 'right';
            } else {
              halign = 'left';
            }

            if (top > h / 2) {
              valign = 'bottom';
            } else {
              valign = 'top';
            }

            halign && valign && this.element.classList.add('position-' + valign + '-' + halign);
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
              this._setPosition();
              this._bindEventListeners();
              this._setContainerHeight();
              this.element.classList.add('active');
            } else {
              this._setContainerHeight(0);
              this._unbindEventListeners();
              this.element.classList.remove('active');
            }
          }
        }, {
          key: '_optionsChanged',
          value: function _optionsChanged(options) {
            var _this = this;

            this._options.forEach(function (o) {
              var text = (o.innerText || o.innerHTML).trim();
              var value = text || value;
              _this.items.push({ text: text, value: value });
              _this.container.appendChild(o);
            });
          }
        }, {
          key: 'optionsChanged',
          value: function optionsChanged(options) {
            this.items = options.map(function (o) {
              if (typeof o === 'string') return { value: o, text: o };
              return o;
            });
          }
        }, {
          key: 'onClick',
          value: function onClick() {
            this.open();
          }
        }, {
          key: 'onSelect',
          value: function onSelect(event, value) {
            this.close();
            if (value) {
              this.value = value;
            }
          }
        }], null, _instanceInitializers);

        var _DropdownElement = DropdownElement;
        DropdownElement = bindable({
          name: 'value',
          attribute: 'value',
          defaultBindingMode: bindingMode.twoWay
        })(DropdownElement) || DropdownElement;
        DropdownElement = inject(Element)(DropdownElement) || DropdownElement;
        DropdownElement = customElement('au-dropdown')(DropdownElement) || DropdownElement;
        return DropdownElement;
      })();

      _export('DropdownElement', DropdownElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1kcm9wZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7b0ZBTU0sVUFBVSxFQVNILGVBQWU7Ozs7Ozs7Ozs7eUNBZnBCLGFBQWE7b0NBQUUsUUFBUTtvQ0FBRSxRQUFROztvQ0FDakMsV0FBVzs7MkNBQ1gsTUFBTTs7MkNBQ04sT0FBTzswQ0FBRSxNQUFNOzt3QkFDZixHQUFHOzs7QUFFTCxnQkFBVSxHQUFHLE9BQU8sR0FBRyxZQUFZLEdBQUcsT0FBTzs7QUFTdEMscUJBQWU7Ozs7OEJBQWYsZUFBZTs7dUJBQ3pCLFFBQVE7O21CQUFVLElBQUk7Ozs7O3VCQUN0QixRQUFROzttQkFBVSxJQUFJOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQVUsSUFBSTs7Ozs7dUJBQ3RCLFFBQVE7O21CQUFVLElBQUk7Ozs7O3VCQUN0QixRQUFROzttQkFBWSxJQUFJOzs7Ozt1QkFDeEIsUUFBUTs7bUJBQVcsRUFBRTs7Ozs7dUJBQ3JCLFFBQVEsQ0FBQyxRQUFRLENBQUM7Ozs7O0FBSVIsaUJBWEEsZUFBZSxDQVdkLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBRjlCLEtBQUssR0FBRyxFQUFFOztBQUdSLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDekMsY0FBSSxDQUFDLFFBQVEsR0FBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUMxQyxjQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7U0FDckM7OzhCQWpCVSxlQUFlOztpQkFtQlAsK0JBQUc7QUFDcEIsZ0JBQUksSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPO0FBQzdCLGdCQUFJLENBQUMsV0FB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ZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBjaGlsZHJlbn0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7YmluZGluZ01vZGV9IGZyb20gJ2F1cmVsaWEtYmluZGluZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge2lzVG91Y2gsIGRldmljZX0gZnJvbSAnYXVyZWxpYS1pbnRlcmZhY2UtcGxhdGZvcm1zJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmNvbnN0IGNsaWNrRXZlbnQgPSBpc1RvdWNoID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJztcblxuQGN1c3RvbUVsZW1lbnQoJ2F1LWRyb3Bkb3duJylcbkBpbmplY3QoRWxlbWVudClcbkBiaW5kYWJsZSh7XG4gIG5hbWU6ICd2YWx1ZScsXG4gIGF0dHJpYnV0ZTogJ3ZhbHVlJyxcbiAgZGVmYXVsdEJpbmRpbmdNb2RlOiBiaW5kaW5nTW9kZS50d29XYXlcbn0pXG5leHBvcnQgY2xhc3MgRHJvcGRvd25FbGVtZW50IHtcbiAgQGJpbmRhYmxlIGl0ZW1zICA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuICBAYmluZGFibGUgdGl0bGUgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGljb24gICA9IG51bGw7XG4gIEBiaW5kYWJsZSBwb3NpdGlvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gW107XG4gIEBjaGlsZHJlbignb3B0aW9uJykgX29wdGlvbnM7XG5cbiAgaXRlbXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMub25DbGljayAgID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vblNlbGVjdCAgPSB0aGlzLm9uU2VsZWN0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5pc0hhbmRIZWxkID0gZGV2aWNlLmlzSGFuZEhlbGQ7XG4gIH1cblxuICBfYmluZEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIGlmICh0aGlzLmlzTGlzdGVuaW5nKSByZXR1cm47XG4gICAgdGhpcy5pc0xpc3RlbmluZyA9IHRydWU7XG4gICAgRE9NLmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgdGhpcy5vblNlbGVjdCwgdHJ1ZSk7XG4gIH1cblxuICBfdW5iaW5kRXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgaWYgKCF0aGlzLmlzTGlzdGVuaW5nKSB7XG4gICAgICB0aGlzLmlzTGlzdGVuaW5nID0gZmFsc2U7XG4gICAgICBET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCB0aGlzLm9uU2VsZWN0KTtcbiAgICB9XG4gIH1cblxuICBfc2V0Q29udGFpbmVySGVpZ2h0KHplcm8pIHtcbiAgICBpZiAoemVybyA9PT0gMCkge1xuICAgICAgdGhpcy5jb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBoZWlnaHQgPSAodGhpcy5jb250YWluZXIuc2Nyb2xsSGVpZ2h0ICsgJ3B4Jyk7XG4gICAgaWYgKGhlaWdodCAhPT0gJzBweCcpIHtcbiAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodDtcbiAgICB9XG4gIH1cblxuICBfc2V0UG9zaXRpb24oKSB7XG4gICAgbGV0IHcgPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICAgIGxldCBoID0gd2luZG93LnNjcmVlbi5oZWlnaHQ7XG4gICAgbGV0IGxlZnQgPSB0aGlzLmVsZW1lbnQub2Zmc2V0TGVmdDtcbiAgICBsZXQgdG9wICA9IHRoaXMuZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgbGV0IHZhbGlnbjtcbiAgICBsZXQgaGFsaWduO1xuICAgIGlmIChsZWZ0ID4gKHcgLyAyKSkge1xuICAgICAgaGFsaWduID0gJ3JpZ2h0JztcbiAgICB9IGVsc2Uge1xuICAgICAgaGFsaWduID0gJ2xlZnQnO1xuICAgIH1cblxuICAgIGlmICh0b3AgPiAoaCAvIDIpKSB7XG4gICAgICB2YWxpZ24gPSAnYm90dG9tJztcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWduID0gJ3RvcCc7XG4gICAgfVxuICAgIC8vIGhhbGlnbiAmJiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChgcG9zaXRpb24tJHtoYWxpZ259YCk7XG4gICAgLy8gdmFsaWduICYmIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwb3NpdGlvbi0ke3ZhbGlnbn1gKTtcbiAgICBoYWxpZ24gJiYgdmFsaWduICYmIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwb3NpdGlvbi0ke3ZhbGlnbn0tJHtoYWxpZ259YCk7XG4gIH1cblxuICBvcGVuKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5fc2V0UG9zaXRpb24oKTtcbiAgICAgIHRoaXMuX2JpbmRFdmVudExpc3RlbmVycygpO1xuICAgICAgdGhpcy5fc2V0Q29udGFpbmVySGVpZ2h0KCk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldENvbnRhaW5lckhlaWdodCgwKTtcbiAgICAgIHRoaXMuX3VuYmluZEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgX29wdGlvbnNDaGFuZ2VkKG9wdGlvbnMpIHtcbiAgICB0aGlzLl9vcHRpb25zLmZvckVhY2gobyA9PiB7XG4gICAgICBsZXQgdGV4dCA9IChvLmlubmVyVGV4dCB8fCBvLmlubmVySFRNTCkudHJpbSgpO1xuICAgICAgbGV0IHZhbHVlID0gdGV4dCB8fCB2YWx1ZTtcbiAgICAgIHRoaXMuaXRlbXMucHVzaCh7dGV4dCwgdmFsdWV9KTtcbiAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKG8pO1xuICAgIH0pO1xuICB9XG5cbiAgb3B0aW9uc0NoYW5nZWQob3B0aW9ucykge1xuICAgIHRoaXMuaXRlbXMgPSBvcHRpb25zLm1hcCgobyk9PiB7XG4gICAgICBpZiAodHlwZW9mIG8gPT09ICdzdHJpbmcnKSByZXR1cm4ge3ZhbHVlOiBvLCB0ZXh0OiBvfTtcbiAgICAgIHJldHVybiBvO1xuICAgIH0pO1xuICB9XG5cbiAgb25DbGljaygpIHtcbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxuXG4gIG9uU2VsZWN0KGV2ZW50LCB2YWx1ZSkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
