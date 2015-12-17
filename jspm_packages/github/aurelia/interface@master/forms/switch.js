/* */ 
define(['exports', 'aurelia-framework', './form', '././control', 'lodash'], function (exports, _aureliaFramework, _form, _control, _lodash) {
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

    function SwitchElement(element, controller, form) {
      _classCallCheck(this, _SwitchElement);

      _defineDecoratedPropertyDescriptor(this, 'labelElement', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'ios', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'changed', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'ax_aria', _instanceInitializers);

      this.element = element;

      if (controller.Switch) {
        this.controller = controller.Switch(this);
      }

      if (form.isFormElement) {
        this.form = form;
      }
    }

    _createDecoratedClass(SwitchElement, [{
      key: 'attached',
      value: function attached() {
        var _this = this;

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
    SwitchElement = (0, _aureliaFramework.inject)(Element, _control.ControlComponent, _form.FormComponent)(SwitchElement) || SwitchElement;
    SwitchElement = (0, _aureliaFramework.customElement)('ai-switch')(SwitchElement) || SwitchElement;
    return SwitchElement;
  })();

  exports.SwitchElement = SwitchElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL3N3aXRjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BT2EsYUFBYTs7OzswQkFBYixhQUFhOzttQkFDdkIsc0JBUnNDLEtBQUssRUFRckMsT0FBTyxDQUFDOztlQUFnQixJQUFJOzs7OztxQ0FSN0IsUUFBUTs7ZUFTTSxJQUFJOzs7OztxQ0FUbEIsUUFBUTs7ZUFVSSxJQUFJOzs7OztxQ0FWaEIsUUFBUTs7ZUFXSSxJQUFJOzs7OztxQ0FYaEIsUUFBUTs7ZUFZSSxJQUFJOzs7OztxQ0FaaEIsUUFBUTs7ZUFhRSxJQUFJOzs7OztxQ0FiZCxRQUFROztlQWNJLElBQUk7Ozs7O3FDQWRoQixRQUFROztlQWVPLElBQUk7Ozs7O3FDQWZuQixRQUFROztlQWdCTSxJQUFJOzs7OztxQ0FoQmxCLFFBQVE7O2VBa0JNLEVBQUU7Ozs7O0FBRVgsYUFiQSxhQUFhLENBYVosT0FBTyxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3JDLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUV2QixVQUFJLFVBQVUsQ0FBQyxNQUFNLEVBQUU7QUFDckIsWUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzNDOztBQUVELFVBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtBQUN0QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztPQUNsQjtLQUNGOzswQkF2QlUsYUFBYTs7YUF5QmhCLG9CQUFHOzs7QUFDVCxZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksWUE5QnJCLFNBQVMsRUE4QnNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7O0FBRXZFLFlBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNoQixjQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFDLEtBQUssRUFBSTtBQUNyRCxrQkFBSyxPQUFPLENBQUMsS0FBSyxRQUFPLENBQUM7V0FDM0IsQ0FBQyxDQUFDO1NBQ0o7T0FDRjs7O3lCQWxDVSxhQUFhO0FBQWIsaUJBQWEsR0FEekIsc0JBTmlCLE1BQU0sRUFNaEIsT0FBTyxXQUpQLGdCQUFnQixRQURoQixhQUFhLENBSzRCLENBQ3BDLGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FGekIsc0JBTHlCLGFBQWEsRUFLeEIsV0FBVyxDQUFDLENBRWQsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImZvcm1zL3N3aXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgY3VzdG9tRWxlbWVudCwgY2hpbGR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7Q29udHJvbENvbXBvbmVudH0gZnJvbSAnLi8uL2NvbnRyb2wnO1xuaW1wb3J0IHtjYW1lbENhc2V9IGZyb20gJ2xvZGFzaCc7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1zd2l0Y2gnKVxuQGluamVjdChFbGVtZW50LCBDb250cm9sQ29tcG9uZW50LCBGb3JtQ29tcG9uZW50KVxuZXhwb3J0IGNsYXNzIFN3aXRjaEVsZW1lbnQge1xuICBAY2hpbGQoJ2xhYmVsJykgbGFiZWxFbGVtZW50ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNoZWNrZWQgPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgbW9kZWwgPSBudWxsO1xuICBAYmluZGFibGUgbmFtZSAgPSBudWxsO1xuICBAYmluZGFibGUgaW9zID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNvbG9yID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gbnVsbDtcbiAgQGJpbmRhYmxlIGNoYW5nZWQgPSBudWxsO1xuICAvLyBBY2Nlc3NpYmlsaXR5IFRleHQgU2VydmljZXNcbiAgQGJpbmRhYmxlIGF4X2FyaWEgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250cm9sbGVyLCBmb3JtKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGlmIChjb250cm9sbGVyLlN3aXRjaCkge1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlci5Td2l0Y2godGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm0uaXNGb3JtRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgY2FtZWxDYXNlKHRoaXMubGFiZWwpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICBpZiAodGhpcy5jaGFuZ2VkKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpPT4ge1xuICAgICAgICB0aGlzLmNoYW5nZWQoZXZlbnQsIHRoaXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
