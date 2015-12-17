/* */ 
define(['exports', 'aurelia-framework', './form', 'lodash', './decorators/input-control', './control'], function (exports, _aureliaFramework, _form, _lodash, _decoratorsInputControl, _control) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-checkbox';

  var AiCheckbox = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AiCheckbox, [{
      key: 'labelElement',
      decorators: [(0, _aureliaFramework.child)('label')],
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
      key: 'id',
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
      key: 'autoLabel',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AiCheckbox(element, controller, form) {
      _classCallCheck(this, _AiCheckbox);

      _defineDecoratedPropertyDescriptor(this, 'labelElement', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'autoLabel', _instanceInitializers);

      this.isEnabled = false;

      element.className += ' ' + className;
      this.element = element;

      if (controller.element.nodeName !== 'BODY') {
        this.controller = controller.Checkbox(this);
      }

      if (form.isFormElement) {
        this.form = form;
      }
    }

    _createDecoratedClass(AiCheckbox, [{
      key: 'attached',
      value: function attached() {
        console.log(this.controller);
        this.autoLabel = this.autoLabel || this.element.hasAttribute('auto-label');
        this.name = this.name || (0, _lodash.camelCase)(this.label);
        this.disabled = this.disabled || this.element.hasAttribute('disabled');
      }
    }], null, _instanceInitializers);

    var _AiCheckbox = AiCheckbox;
    AiCheckbox = (0, _aureliaFramework.inject)(Element, _control.ControlComponent, _form.FormComponent)(AiCheckbox) || AiCheckbox;
    AiCheckbox = (0, _aureliaFramework.customElement)('ai-checkbox')(AiCheckbox) || AiCheckbox;
    return AiCheckbox;
  })();

  exports.AiCheckbox = AiCheckbox;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2NoZWNrYm94LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFPQSxNQUFNLFNBQVMsR0FBRyxhQUFhLENBQUM7O01BSW5CLFVBQVU7Ozs7MEJBQVYsVUFBVTs7bUJBQ3BCLHNCQVpzQyxLQUFLLEVBWXJDLE9BQU8sQ0FBQzs7ZUFBZ0IsSUFBSTs7Ozs7cUNBWjdCLFFBQVE7O2VBYU0sSUFBSTs7Ozs7cUNBYmxCLFFBQVE7O2VBY0ksSUFBSTs7Ozs7cUNBZGhCLFFBQVE7O2VBZUksSUFBSTs7Ozs7cUNBZmhCLFFBQVE7O2VBZ0JHLElBQUk7Ozs7O3FDQWhCZixRQUFROztlQWlCQyxJQUFJOzs7OztxQ0FqQmIsUUFBUTs7ZUFrQk8sSUFBSTs7Ozs7cUNBbEJuQixRQUFROztlQW1CUSxJQUFJOzs7OztBQUlmLGFBWkEsVUFBVSxDQVlULE9BQU8sRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1dBRnZDLFNBQVMsR0FBRyxLQUFLOztBQUdmLGFBQU8sQ0FBQyxTQUFTLFVBQVEsU0FBUyxBQUFFLENBQUM7QUFDckMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRXZCLFVBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssTUFBTSxFQUFFO0FBQzFDLFlBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUM3Qzs7QUFFRCxVQUFJLElBQUksQ0FBQyxhQUFhLEVBQUU7QUFDdEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7T0FDbEI7S0FDRjs7MEJBdkJVLFVBQVU7O2FBeUJiLG9CQUFHO0FBQ1QsZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7QUFDNUIsWUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNFLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxZQXJDckIsU0FBUyxFQXFDc0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9DLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztPQUN4RTs7O3NCQTlCVSxVQUFVO0FBQVYsY0FBVSxHQUR0QixzQkFWaUIsTUFBTSxFQVVoQixPQUFPLFdBTlAsZ0JBQWdCLFFBSGhCLGFBQWEsQ0FTNEIsQ0FDcEMsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBRnRCLHNCQVR5QixhQUFhLEVBU3hCLGFBQWEsQ0FBQyxDQUVoQixVQUFVLEtBQVYsVUFBVTtXQUFWLFVBQVUiLCJmaWxlIjoiZm9ybXMvY2hlY2tib3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3QsIGN1c3RvbUVsZW1lbnQsIGNoaWxkfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0Zvcm1Db21wb25lbnR9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQge2NhbWVsQ2FzZX0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7aW5wdXRDb250cm9sfSBmcm9tICcuL2RlY29yYXRvcnMvaW5wdXQtY29udHJvbCc7XG5pbXBvcnQge0NvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vY29udHJvbCc7XG5cblxuY29uc3QgY2xhc3NOYW1lID0gJ2FpLWNoZWNrYm94JztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWNoZWNrYm94JylcbkBpbmplY3QoRWxlbWVudCwgQ29udHJvbENvbXBvbmVudCwgRm9ybUNvbXBvbmVudClcbmV4cG9ydCBjbGFzcyBBaUNoZWNrYm94e1xuICBAY2hpbGQoJ2xhYmVsJykgbGFiZWxFbGVtZW50ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNoZWNrZWQgPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgbW9kZWwgPSBudWxsO1xuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBpZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBhdXRvTGFiZWwgPSBudWxsO1xuXG4gIGlzRW5hYmxlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRyb2xsZXIsIGZvcm0pIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGlmIChjb250cm9sbGVyLmVsZW1lbnQubm9kZU5hbWUgIT09ICdCT0RZJykge1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlci5DaGVja2JveCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybS5pc0Zvcm1FbGVtZW50KSB7XG4gICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29udHJvbGxlcilcbiAgICB0aGlzLmF1dG9MYWJlbCA9IHRoaXMuYXV0b0xhYmVsIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2F1dG8tbGFiZWwnKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgY2FtZWxDYXNlKHRoaXMubGFiZWwpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
