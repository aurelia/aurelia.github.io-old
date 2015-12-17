/* */ 
define(['exports', 'aurelia-framework', './form', 'lodash', './decorators/input-control'], function (exports, _aureliaFramework, _form, _lodash, _decoratorsInputControl) {
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
      key: 'checked',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
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
    }], null, _instanceInitializers);

    function AiCheckbox(element, form) {
      _classCallCheck(this, _AiCheckbox);

      _defineDecoratedPropertyDescriptor(this, 'checked', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disabled', _instanceInitializers);

      this.isEnabled = false;

      element.className += ' ' + className;
      this.element = element;
      this.form = form;
    }

    _createDecoratedClass(AiCheckbox, [{
      key: 'attached',
      value: function attached() {
        this.selectLabel();
        this.createElementListeners();
        this.name = this.name || (0, _lodash.camelCase)(this.label);
        this.disabled = this.disabled || this.element.hasAttribute('disabled');
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.removeElementListeners();
      }
    }], null, _instanceInitializers);

    var _AiCheckbox = AiCheckbox;
    AiCheckbox = (0, _decoratorsInputControl.inputControl)(AiCheckbox) || AiCheckbox;
    AiCheckbox = (0, _aureliaFramework.inject)(Element, _form.FormComponent)(AiCheckbox) || AiCheckbox;
    AiCheckbox = (0, _aureliaFramework.customElement)('ai-checkbox')(AiCheckbox) || AiCheckbox;
    return AiCheckbox;
  })();

  exports.AiCheckbox = AiCheckbox;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL19jaGVja2JveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBS0EsTUFBTSxTQUFTLEdBQUcsYUFBYSxDQUFDOztNQUtuQixVQUFVOzs7OzBCQUFWLFVBQVU7O3FDQVZmLFFBQVE7O2VBV00sS0FBSzs7Ozs7cUNBWG5CLFFBQVE7O2VBWUksSUFBSTs7Ozs7cUNBWmhCLFFBQVE7O2VBYUksSUFBSTs7Ozs7cUNBYmhCLFFBQVE7O2VBY0csSUFBSTs7Ozs7cUNBZGYsUUFBUTs7ZUFlQyxJQUFJOzs7OztxQ0FmYixRQUFROztlQWdCTyxJQUFJOzs7OztBQUlkLGFBVkEsVUFBVSxDQVVULE9BQU8sRUFBRSxJQUFJLEVBQUU7Ozs7Ozs7Ozs7Ozs7OztXQUYzQixTQUFTLEdBQUcsS0FBSzs7QUFHZixhQUFPLENBQUMsU0FBUyxVQUFRLFNBQVMsQUFBRSxDQUFDO0FBQ3JDLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0tBQ2xCOzswQkFkVSxVQUFVOzthQWdCYixvQkFBRztBQUNULFlBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQixZQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUM5QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksWUEzQnJCLFNBQVMsRUEyQnNCLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDeEU7OzthQUVPLG9CQUFHO0FBQ1QsWUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7T0FDL0I7OztzQkF6QlUsVUFBVTtBQUFWLGNBQVUsK0JBUGYsWUFBWSxFQU9QLFVBQVUsS0FBVixVQUFVO0FBQVYsY0FBVSxHQUZ0QixzQkFSaUIsTUFBTSxFQVFoQixPQUFPLFFBUFAsYUFBYSxDQU9VLENBRWxCLFVBQVUsS0FBVixVQUFVO0FBQVYsY0FBVSxHQUh0QixzQkFQeUIsYUFBYSxFQU94QixhQUFhLENBQUMsQ0FHaEIsVUFBVSxLQUFWLFVBQVU7V0FBVixVQUFVIiwiZmlsZSI6ImZvcm1zL19jaGVja2JveC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgY3VzdG9tRWxlbWVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtGb3JtQ29tcG9uZW50fSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHtjYW1lbENhc2V9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge2lucHV0Q29udHJvbH0gZnJvbSAnLi9kZWNvcmF0b3JzL2lucHV0LWNvbnRyb2wnO1xuXG5jb25zdCBjbGFzc05hbWUgPSAnYWktY2hlY2tib3gnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktY2hlY2tib3gnKVxuQGluamVjdChFbGVtZW50LCBGb3JtQ29tcG9uZW50KVxuQGlucHV0Q29udHJvbFxuZXhwb3J0IGNsYXNzIEFpQ2hlY2tib3h7XG4gIEBiaW5kYWJsZSBjaGVja2VkID0gZmFsc2U7XG4gIEBiaW5kYWJsZSB2YWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBtb2RlbCA9IG51bGw7XG4gIEBiaW5kYWJsZSBuYW1lID0gbnVsbDtcbiAgQGJpbmRhYmxlIGlkID0gbnVsbDtcbiAgQGJpbmRhYmxlIGRpc2FibGVkID0gbnVsbDtcblxuICBpc0VuYWJsZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBmb3JtKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuc2VsZWN0TGFiZWwoKTtcbiAgICB0aGlzLmNyZWF0ZUVsZW1lbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgY2FtZWxDYXNlKHRoaXMubGFiZWwpO1xuICAgIHRoaXMuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICB0aGlzLnJlbW92ZUVsZW1lbnRMaXN0ZW5lcnMoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
