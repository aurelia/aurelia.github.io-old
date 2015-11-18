System.register(['aurelia-framework', 'aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var customElement, bindable, inject, bindingMode, isTouch, DOM, clickEvent, DropdownElement;

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1kcm9wZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0VBSU0sVUFBVSxFQVVILGVBQWU7Ozs7Ozs7Ozs7d0NBZHBCLGFBQWE7bUNBQUUsUUFBUTtpQ0FBRSxNQUFNO3NDQUFFLFdBQVc7OzJDQUM1QyxPQUFPOzt3QkFDUCxHQUFHOzs7QUFFTCxnQkFBVSxHQUFHLE9BQU8sR0FBRyxZQUFZLEdBQUcsT0FBTzs7QUFVdEMscUJBQWU7Ozs7OEJBQWYsZUFBZTs7dUJBQ3pCLFFBQVE7O21CQUFXLElBQUk7Ozs7O3VCQUN2QixRQUFROzttQkFBVSxJQUFJOzs7OztBQUVaLGlCQUpBLGVBQWUsQ0FJZCxPQUFPLEVBQUU7Ozs7Ozs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4Qzs7OEJBUFUsZUFBZTs7aUJBU2Qsc0JBQUMsS0FBSyxFQUFFO0FBQ2xCLGdCQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbEMsZ0JBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1dBQ3JCOzs7aUJBRVksdUJBQUMsS0FBSyxFQUFFO0FBQ25CLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzlELGdCQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7V0FDaEM7OztpQkFFVyx3QkFBRztBQUNiLGVBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztXQUN0RDs7O2lCQUVjLDJCQUFHO0FBQ2hCLGVBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztXQUN6RDs7O2lCQUVNLGlCQUFDLEtBQUssRUFBRTtBQUNiLGdCQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0FBQ3hDLGtCQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztBQUNwQixrQkFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1dBQ0Y7OzsrQkFoQ1UsZUFBZTtBQUFmLHVCQUFlLEdBTjNCLFFBQVEsQ0FBQztBQUNSLGNBQUksRUFBRSxPQUFPO0FBQ2IsbUJBQVMsRUFBRSxPQUFPO0FBQ2xCLHVCQUFhLEVBQUUsY0FBYztBQUM3Qiw0QkFBa0IsRUFBRSxXQUFXLENBQUMsTUFBTTtTQUN2QyxDQUFDLENBQ1csZUFBZSxLQUFmLGVBQWU7QUFBZix1QkFBZSxHQVAzQixNQUFNLENBQUMsT0FBTyxDQUFDLENBT0gsZUFBZSxLQUFmLGVBQWU7QUFBZix1QkFBZSxHQVIzQixhQUFhLENBQUMsYUFBYSxDQUFDLENBUWhCLGVBQWUsS0FBZixlQUFlO2VBQWYsZUFBZSIsImZpbGUiOiJyZXNvdXJjZXMvYXUtZHJvcGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGJpbmRpbmdNb2RlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge2lzVG91Y2h9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5jb25zdCBjbGlja0V2ZW50ID0gaXNUb3VjaCA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljayc7XG5cbkBjdXN0b21FbGVtZW50KCdhdS1kcm9wZG93bicpXG5AaW5qZWN0KEVsZW1lbnQpXG5AYmluZGFibGUoe1xuICBuYW1lOiAndmFsdWUnLFxuICBhdHRyaWJ1dGU6ICd2YWx1ZScsXG4gIGNoYW5nZUhhbmRsZXI6ICd2YWx1ZUNoYW5nZWQnLFxuICBkZWZhdWx0QmluZGluZ01vZGU6IGJpbmRpbmdNb2RlLnR3b1dheVxufSlcbmV4cG9ydCBjbGFzcyBEcm9wZG93bkVsZW1lbnQge1xuICBAYmluZGFibGUgb3B0aW9ucyA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub25DbGljayA9IHRoaXMub25DbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5jaGFuZ2UgJiYgdGhpcy5jaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpcy1hY3RpdmUnKTtcbiAgICBpZiAodmFsdWUpIHRoaXMuYWRkTGlzdGVuZXJzKCk7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgRE9NLmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgdGhpcy5vbkNsaWNrLCB0cnVlKTtcbiAgfVxuXG4gIHJlbW92ZUxpc3RlbmVycygpIHtcbiAgICBET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuICB9XG5cbiAgb25DbGljayhldmVudCkge1xuICAgIGlmICghdGhpcy5lbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLnJlbW92ZUxpc3RlbmVycygpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
