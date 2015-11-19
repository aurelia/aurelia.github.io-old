System.register(['aurelia-templating', 'aurelia-binding', 'aurelia-dependency-injection', 'aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var customElement, bindable, bindingMode, inject, isTouch, DOM, clickEvent, DropdownElement;

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

      DropdownElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(DropdownElement, [{
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
        }], null, _instanceInitializers);

        function DropdownElement(element) {
          _classCallCheck(this, _DropdownElement);

          _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

          this.element = element;
          this.onClick = this.onClick.bind(this);
        }

        _createDecoratedClass(DropdownElement, [{
          key: 'valueChanged',
          value: function valueChanged(value) {
            this.change && this.change(value);
            this.active = false;
          }
        }, {
          key: 'activeChanged',
          value: function activeChanged(value) {
            this.element.classList[value ? 'add' : 'remove']('is-active');
            if (value) this.addListeners();
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
          key: 'onClick',
          value: function onClick(event) {
            if (!this.element.contains(event.target)) {
              this.active = false;
              this.removeListeners();
            }
          }
        }], null, _instanceInitializers);

        var _DropdownElement = DropdownElement;
        DropdownElement = bindable({
          name: 'value',
          attribute: 'value',
          changeHandler: 'valueChanged',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1kcm9wZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0VBTU0sVUFBVSxFQVVILGVBQWU7Ozs7Ozs7Ozs7eUNBaEJwQixhQUFhO29DQUFFLFFBQVE7O29DQUN2QixXQUFXOzsyQ0FDWCxNQUFNOzsyQ0FDTixPQUFPOzt3QkFDUCxHQUFHOzs7QUFFTCxnQkFBVSxHQUFHLE9BQU8sR0FBRyxZQUFZLEdBQUcsT0FBTzs7QUFVdEMscUJBQWU7Ozs7OEJBQWYsZUFBZTs7dUJBQ3pCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBVSxJQUFJOzs7OztBQUVaLGlCQUpBLGVBQWUsQ0FJZCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4Qzs7OEJBUFUsZUFBZTs7aUJBU2Qsc0JBQUMsS0FBSyxFQUFFO0FBQ2xCLGdCQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1dBQ3JCOzs7aUJBRVksdUJBQUMsS0FBSyxFQUFFO0FBQ25CLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlELGdCQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7V0FDaEM7OztpQkFFVyx3QkFBRztBQUNiLGVBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztXQUN0RDs7O2lCQUVjLDJCQUFHO0FBQ2hCLGVBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztXQUN6RDs7O2lCQUVNLGlCQUFDLEtBQUssRUFBRTtBQUNiLGdCQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3hDLGtCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixrQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1dBQ0Y7OzsrQkFoQ1UsZUFBZTtBQUFmLHVCQUFlLEdBTjNCLFFBQVEsQ0FBQztBQUNSLGNBQUksRUFBRSxPQUFPO0FBQ2IsbUJBQVMsRUFBRSxPQUFPO0FBQ2xCLHVCQUFhLEVBQUUsY0FBYztBQUM3Qiw0QkFBa0IsRUFBRSxXQUFXLENBQUMsTUFBTTtTQUN2QyxDQUFDLENBQ1csZUFBZSxLQUFmLGVBQWU7QUFBZix1QkFBZSxHQVAzQixNQUFNLENBQUMsT0FBTyxDQUFDLENBT0gsZUFBZSxLQUFmLGVBQWU7QUFBZix1QkFBZSxHQVIzQixhQUFhLENBQUMsYUFBYSxDQUFDLENBUWhCLGVBQWUsS0FBZixlQUFlO2VBQWYsZUFBZSIsImZpbGUiOiJyZXNvdXJjZXMvYXUtZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtiaW5kaW5nTW9kZX0gZnJvbSAnYXVyZWxpYS1iaW5kaW5nJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7aXNUb3VjaH0gZnJvbSAnYXVyZWxpYS1pbnRlcmZhY2UtcGxhdGZvcm1zJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmNvbnN0IGNsaWNrRXZlbnQgPSBpc1RvdWNoID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJztcblxuQGN1c3RvbUVsZW1lbnQoJ2F1LWRyb3Bkb3duJylcbkBpbmplY3QoRWxlbWVudClcbkBiaW5kYWJsZSh7XG4gIG5hbWU6ICd2YWx1ZScsXG4gIGF0dHJpYnV0ZTogJ3ZhbHVlJyxcbiAgY2hhbmdlSGFuZGxlcjogJ3ZhbHVlQ2hhbmdlZCcsXG4gIGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5XG59KVxuZXhwb3J0IGNsYXNzIERyb3Bkb3duRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vbkNsaWNrID0gdGhpcy5vbkNsaWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmNoYW5nZSAmJiB0aGlzLmNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lzLWFjdGl2ZScpO1xuICAgIGlmICh2YWx1ZSkgdGhpcy5hZGRMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICBET00uYWRkRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgcmVtb3ZlTGlzdGVuZXJzKCkge1xuICAgIERPTS5yZW1vdmVFdmVudExpc3RlbmVyKGNsaWNrRXZlbnQsIHRoaXMub25DbGljaywgdHJ1ZSk7XG4gIH1cblxuICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
