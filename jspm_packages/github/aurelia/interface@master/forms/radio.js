/* */ 
define(['exports', 'aurelia-framework', 'lodash', './decorators/input-control', './form'], function (exports, _aureliaFramework, _lodash, _decoratorsInputControl, _form) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-radio';

  var RadioElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(RadioElement, [{
      key: 'value',
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
      key: 'options',
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
      key: 'checked',
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
      key: 'change',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function RadioElement(element, form) {
      _classCallCheck(this, _RadioElement);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'label', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'change', _instanceInitializers);

      element.className += ' ' + className;
      this.element = element;
      this.form = form;
    }

    _createDecoratedClass(RadioElement, [{
      key: 'attached',
      value: function attached() {
        this.selectLabel();
        this.createElementListeners();
        this.name = this.name || (0, _lodash.camelCase)(this.label);
        this.disabled = this.disabled || this.element.hasAttribute('disabled');
      }
    }, {
      key: '_checkedChanged',
      value: function _checkedChanged(value) {
        this.checked = value;
      }
    }], null, _instanceInitializers);

    var _RadioElement = RadioElement;
    RadioElement = (0, _decoratorsInputControl.inputControl)(RadioElement) || RadioElement;
    RadioElement = (0, _aureliaFramework.inject)(Element, _form.FormComponent)(RadioElement) || RadioElement;
    RadioElement = (0, _aureliaFramework.customElement)('ai-radio')(RadioElement) || RadioElement;
    return RadioElement;
  })();

  exports.RadioElement = RadioElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL3JhZGlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSxNQUFJLFNBQVMsR0FBRyxVQUFVLENBQUM7O01BS2QsWUFBWTs7OzswQkFBWixZQUFZOztxQ0FWakIsUUFBUTs7ZUFXSSxJQUFJOzs7OztxQ0FYaEIsUUFBUTs7ZUFZRyxJQUFJOzs7OztxQ0FaZixRQUFROztlQWFJLElBQUk7Ozs7O3FDQWJoQixRQUFROztlQWNNLElBQUk7Ozs7O3FDQWRsQixRQUFROztlQWVJLElBQUk7Ozs7O3FDQWZoQixRQUFROztlQWdCTSxJQUFJOzs7OztxQ0FoQmxCLFFBQVE7O2VBaUJPLElBQUk7Ozs7O3FDQWpCbkIsUUFBUTs7ZUFrQkssSUFBSTs7Ozs7QUFHWixhQVhBLFlBQVksQ0FXWCxPQUFPLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3pCLGFBQU8sQ0FBQyxTQUFTLFVBQVEsU0FBUyxBQUFFLENBQUM7QUFDckMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7S0FDbEI7OzBCQWZVLFlBQVk7O2FBaUJmLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBQ25CLFlBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0FBQzlCLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxZQTdCckIsU0FBUyxFQTZCc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUN4RTs7O2FBRWMseUJBQUMsS0FBSyxFQUFFO0FBQ3JCLFlBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO09BQ3RCOzs7d0JBMUJVLFlBQVk7QUFBWixnQkFBWSwrQkFSakIsWUFBWSxFQVFQLFlBQVksS0FBWixZQUFZO0FBQVosZ0JBQVksR0FGeEIsc0JBUmlCLE1BQU0sRUFRaEIsT0FBTyxRQUxQLGFBQWEsQ0FLVSxDQUVsQixZQUFZLEtBQVosWUFBWTtBQUFaLGdCQUFZLEdBSHhCLHNCQVB5QixhQUFhLEVBT3hCLFVBQVUsQ0FBQyxDQUdiLFlBQVksS0FBWixZQUFZO1dBQVosWUFBWSIsImZpbGUiOiJmb3Jtcy9yYWRpby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgY3VzdG9tRWxlbWVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtjYW1lbENhc2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2lucHV0Q29udHJvbH0gZnJvbSAnLi9kZWNvcmF0b3JzL2lucHV0LWNvbnRyb2wnO1xuaW1wb3J0IHtGb3JtQ29tcG9uZW50fSBmcm9tICcuL2Zvcm0nO1xuXG5sZXQgY2xhc3NOYW1lID0gJ2FpLXJhZGlvJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLXJhZGlvJylcbkBpbmplY3QoRWxlbWVudCwgRm9ybUNvbXBvbmVudClcbkBpbnB1dENvbnRyb2xcbmV4cG9ydCBjbGFzcyBSYWRpb0VsZW1lbnQge1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBsYWJlbCA9IG51bGw7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcbiAgQGJpbmRhYmxlIG1vZGVsID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNoZWNrZWQgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZWQgPSBudWxsO1xuICBAYmluZGFibGUgY2hhbmdlID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGZvcm0pIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5zZWxlY3RMYWJlbCgpO1xuICAgIHRoaXMuY3JlYXRlRWxlbWVudExpc3RlbmVycygpO1xuICAgIHRoaXMubmFtZSA9IHRoaXMubmFtZSB8fCBjYW1lbENhc2UodGhpcy5sYWJlbCk7XG4gICAgdGhpcy5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxuXG4gIF9jaGVja2VkQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
