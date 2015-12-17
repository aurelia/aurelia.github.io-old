/* */ 
define(['exports', 'aurelia-framework', './form', './decorators/input-control', 'lodash'], function (exports, _aureliaFramework, _form, _decoratorsInputControl, _lodash) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var SwitchElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SwitchElement, [{
      key: 'checked',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'model',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'label',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'ios',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'color',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'disabled',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'changed',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'ax_aria',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return {};
      },
      enumerable: true
    }], null, _instanceInitializers);

    function SwitchElement(element, form) {
      _classCallCheck(this, _SwitchElement);

      _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'label', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'ios', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'changed', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'ax_aria', _instanceInitializers);

      this.element = element;
      this.form = form;
    }

    _createDecoratedClass(SwitchElement, [{
      key: 'attached',
      value: function attached() {
        var _this = this;

        this.selectLabel();
        this.createElementListeners();
        this.name = this.name || (0, _lodash.camelCase)(this.label);
        this.disabled = this.disabled || this.element.hasAttribute('disabled');

        if (this.changed) {
          this.inputElement.addEventListener('change', function (event) {
            _this.changed(event, _this);
          });
        }
      }
    }], null, _instanceInitializers);

    var _SwitchElement = SwitchElement;
    SwitchElement = (0, _decoratorsInputControl.inputControl)(SwitchElement) || SwitchElement;
    SwitchElement = (0, _aureliaFramework.inject)(Element, _form.FormComponent)(SwitchElement) || SwitchElement;
    SwitchElement = (0, _aureliaFramework.customElement)('ai-switch')(SwitchElement) || SwitchElement;
    return SwitchElement;
  })();

  exports.SwitchElement = SwitchElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL19zd2l0Y2guanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQVFhLGFBQWE7Ozs7MEJBQWIsYUFBYTs7cUNBUmxCLFFBQVE7O2VBVU0sSUFBSTs7Ozs7cUNBVmxCLFFBQVE7O2VBV0ksSUFBSTs7Ozs7cUNBWGhCLFFBQVE7O2VBWUksSUFBSTs7Ozs7cUNBWmhCLFFBQVE7O2VBYUksSUFBSTs7Ozs7cUNBYmhCLFFBQVE7O2VBY0ksSUFBSTs7Ozs7cUNBZGhCLFFBQVE7O2VBZUUsSUFBSTs7Ozs7cUNBZmQsUUFBUTs7ZUFnQkksSUFBSTs7Ozs7cUNBaEJoQixRQUFROztlQWlCTyxJQUFJOzs7OztxQ0FqQm5CLFFBQVE7O2VBa0JNLElBQUk7Ozs7O3FDQWxCbEIsUUFBUTs7ZUFvQk0sRUFBRTs7Ozs7QUFFWCxhQWRBLGFBQWEsQ0FjWixPQUFPLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN6QixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7MEJBakJVLGFBQWE7O2FBbUJoQixvQkFBRzs7O0FBQ1QsWUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLFlBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQzlCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxZQTNCckIsU0FBUyxFQTJCc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQzs7QUFFdkUsWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLGNBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLFVBQUMsS0FBSyxFQUFJO0FBQ3JELGtCQUFLLE9BQU8sQ0FBQyxLQUFLLFFBQU8sQ0FBQztXQUMzQixDQUFDLENBQUM7U0FDSjtPQUNGOzs7eUJBOUJVLGFBQWE7QUFBYixpQkFBYSwrQkFObEIsWUFBWSxFQU1QLGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FGekIsc0JBTmlCLE1BQU0sRUFNaEIsT0FBTyxRQUxQLGFBQWEsQ0FLVSxDQUVsQixhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBSHpCLHNCQUx5QixhQUFhLEVBS3hCLFdBQVcsQ0FBQyxDQUdkLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJmb3Jtcy9fc3dpdGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgaW5qZWN0LCBjdXN0b21FbGVtZW50fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0Zvcm1Db21wb25lbnR9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQge2lucHV0Q29udHJvbH0gZnJvbSAnLi9kZWNvcmF0b3JzL2lucHV0LWNvbnRyb2wnO1xuaW1wb3J0IHtjYW1lbENhc2V9IGZyb20gJ2xvZGFzaCc7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1zd2l0Y2gnKVxuQGluamVjdChFbGVtZW50LCBGb3JtQ29tcG9uZW50KVxuQGlucHV0Q29udHJvbFxuZXhwb3J0IGNsYXNzIFN3aXRjaEVsZW1lbnR7XG5cbiAgQGJpbmRhYmxlIGNoZWNrZWQgPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgbW9kZWwgPSBudWxsO1xuICBAYmluZGFibGUgbmFtZSAgPSBudWxsO1xuICBAYmluZGFibGUgbGFiZWwgPSBudWxsO1xuICBAYmluZGFibGUgaW9zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNvbG9yID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNoYW5nZWQgPSBudWxsO1xuICAvLyBBY2Nlc3NpYmlsaXR5IFRleHQgU2VydmljZXNcbiAgQGJpbmRhYmxlIGF4X2FyaWEgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBmb3JtKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5zZWxlY3RMYWJlbCgpO1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudExpc3RlbmVycygpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCBjYW1lbENhc2UodGhpcy5sYWJlbCk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgIGlmICh0aGlzLmNoYW5nZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCk9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlZChldmVudCwgdGhpcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
