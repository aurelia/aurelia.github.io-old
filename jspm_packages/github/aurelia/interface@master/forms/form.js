/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-form';

  var FormComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(FormComponent, [{
      key: 'submit',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'layout',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'controlLayout',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function FormComponent(element) {
      _classCallCheck(this, _FormComponent);

      _defineDecoratedPropertyDescriptor(this, 'submit', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'layout', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'controlLayout', _instanceInitializers);

      this.formValue = {};
      this.inputs = {};
      this._inputs = {};
      this.isFormElement = true;
      this._eventListeners = {
        change: new Set()
      };

      element.className += ' ' + className;
      this.element = element;
    }

    _createDecoratedClass(FormComponent, [{
      key: 'hasAttr',
      value: function hasAttr(attribute) {
        return this.element.hasAttribute(attribute);
      }
    }, {
      key: 'bind',
      value: function bind($parent) {
        this.$parent = $parent;
      }
    }, {
      key: 'attached',
      value: function attached() {
        var _this = this;

        this.layout = this._layout;
        if (this.$parent.setValidation) {
          this.validation = new Validation(this.formElement, this, this.$parent);
        }

        if (this._eventListeners.change.size) {
          this.formElement.addEventListener('change', function (event) {
            _this._eventListeners.change.forEach(function (cb) {
              return cb(event, _this);
            });
          });
        }
      }
    }, {
      key: 'onChange',
      value: function onChange(callback) {
        this._eventListeners.change.add(callback);
      }
    }, {
      key: 'addInput',
      value: function addInput(id, input) {
        this.inputs[id] = input;
      }
    }, {
      key: 'setValue',
      value: function setValue(name, value) {
        this.formValue[name] = value;
      }
    }, {
      key: '_layout',
      get: function get() {
        return this.hasAttr('stacked') ? 'stacked' : this.hasAttr('inline') ? 'inline' : this.layout;
      }
    }], null, _instanceInitializers);

    var _FormComponent = FormComponent;
    FormComponent = (0, _aureliaFramework.inject)(Element)(FormComponent) || FormComponent;
    FormComponent = (0, _aureliaFramework.customElement)('ai-form')(FormComponent) || FormComponent;
    return FormComponent;
  })();

  exports.FormComponent = FormComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2Zvcm0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLE1BQUksU0FBUyxHQUFHLFNBQVMsQ0FBQzs7TUFJYixhQUFhOzs7OzBCQUFiLGFBQWE7O3FDQU5sQixRQUFROztlQU9PLElBQUk7Ozs7O3FDQVBuQixRQUFROztlQVFPLElBQUk7Ozs7O3FDQVJuQixRQUFROztlQVNZLElBQUk7Ozs7O0FBVW5CLGFBYkEsYUFBYSxDQWFaLE9BQU8sRUFBRTs7Ozs7Ozs7O1dBUnJCLFNBQVMsR0FBRyxFQUFFO1dBQ2QsTUFBTSxHQUFHLEVBQUU7V0FDWCxPQUFPLEdBQUcsRUFBRTtXQUNaLGFBQWEsR0FBRyxJQUFJO1dBQ3BCLGVBQWUsR0FBRztBQUNoQixjQUFNLEVBQUUsSUFBSSxHQUFHLEVBQUU7T0FDbEI7O0FBR0MsYUFBTyxDQUFDLFNBQVMsVUFBUSxTQUFTLEFBQUUsQ0FBQztBQUNyQyxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBaEJVLGFBQWE7O2FBa0JqQixpQkFBQyxTQUFTLEVBQUU7QUFDakIsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztPQUM3Qzs7O2FBTUcsY0FBQyxPQUFPLEVBQUU7QUFDWixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztPQUN4Qjs7O2FBRU8sb0JBQUc7OztBQUNULFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMzQixZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFO0FBQzlCLGNBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hFOztBQUVELFlBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3BDLGNBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFJO0FBQ3BELGtCQUFLLGVBQWUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTtxQkFBRyxFQUFFLENBQUMsS0FBSyxRQUFPO2FBQUEsQ0FBRSxDQUFBO1dBQzNELENBQUMsQ0FBQztTQUNKO09BQ0Y7OzthQUVPLGtCQUFDLFFBQVEsRUFBRTtBQUNqQixZQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7T0FDMUM7OzthQUVPLGtCQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUU7QUFDbEIsWUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUM7T0FDekI7OzthQUVPLGtCQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDcEIsWUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7T0FDOUI7OztXQS9CVSxlQUFHO0FBQ1osZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO09BQzlGOzs7eUJBeEJVLGFBQWE7QUFBYixpQkFBYSxHQUR6QixzQkFMaUIsTUFBTSxFQUtoQixPQUFPLENBQUMsQ0FDSCxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBRnpCLHNCQUp5QixhQUFhLEVBSXhCLFNBQVMsQ0FBQyxDQUVaLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJmb3Jtcy9mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0LCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmxldCBjbGFzc05hbWUgPSAnYWktZm9ybSc7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1mb3JtJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBGb3JtQ29tcG9uZW50IHtcbiAgQGJpbmRhYmxlIHN1Ym1pdCAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGxheW91dCAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNvbnRyb2xMYXlvdXQgPSBudWxsO1xuXG4gIGZvcm1WYWx1ZSA9IHt9O1xuICBpbnB1dHMgPSB7fTtcbiAgX2lucHV0cyA9IHt9O1xuICBpc0Zvcm1FbGVtZW50ID0gdHJ1ZTtcbiAgX2V2ZW50TGlzdGVuZXJzID0ge1xuICAgIGNoYW5nZTogbmV3IFNldCgpXG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBoYXNBdHRyKGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gIH1cblxuICBnZXQgX2xheW91dCgpIHtcbiAgICByZXR1cm4gdGhpcy5oYXNBdHRyKCdzdGFja2VkJykgPyAnc3RhY2tlZCcgOiB0aGlzLmhhc0F0dHIoJ2lubGluZScpID8gJ2lubGluZScgOiB0aGlzLmxheW91dDtcbiAgfVxuXG4gIGJpbmQoJHBhcmVudCkge1xuICAgIHRoaXMuJHBhcmVudCA9ICRwYXJlbnQ7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmxheW91dCA9IHRoaXMuX2xheW91dDtcbiAgICBpZiAodGhpcy4kcGFyZW50LnNldFZhbGlkYXRpb24pIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbiA9IG5ldyBWYWxpZGF0aW9uKHRoaXMuZm9ybUVsZW1lbnQsIHRoaXMsIHRoaXMuJHBhcmVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2V2ZW50TGlzdGVuZXJzLmNoYW5nZS5zaXplKSB7XG4gICAgICB0aGlzLmZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCk9PiB7XG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzLmNoYW5nZS5mb3JFYWNoKGNiPT4gY2IoZXZlbnQsIHRoaXMpIClcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2hhbmdlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnMuY2hhbmdlLmFkZChjYWxsYmFjaylcbiAgfVxuXG4gIGFkZElucHV0KGlkLCBpbnB1dCkge1xuICAgIHRoaXMuaW5wdXRzW2lkXSA9IGlucHV0O1xuICB9XG5cbiAgc2V0VmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLmZvcm1WYWx1ZVtuYW1lXSA9IHZhbHVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
