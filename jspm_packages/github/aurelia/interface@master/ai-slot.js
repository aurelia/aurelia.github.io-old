/* */ 
define(['exports', 'aurelia-framework', './templates', './ai-template', './ai-view'], function (exports, _aureliaFramework, _templates, _aiTemplate, _aiView) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var SlotAttribute = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SlotAttribute, [{
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function SlotAttribute(element, container, viewFactory, viewSlot) {
      _classCallCheck(this, _SlotAttribute);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      this.viewFactory = viewFactory;
      this.viewSlot = viewSlot;
      this.view = null;
      this.container = container.root;
      this.element = element;
    }

    _createDecoratedClass(SlotAttribute, [{
      key: 'bind',
      value: function bind(bindingContext, overrideContext) {

        if (!this.view && this.viewFactory && this.viewFactory.create) {
          var templates = this.container.get(_aiTemplate.AITemplates);
        }
        console.log(this);
        console.log(this.container.get(_aiTemplate.AITemplates));
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        this.view.unbind();
      }
    }], null, _instanceInitializers);

    var _SlotAttribute = SlotAttribute;
    SlotAttribute = (0, _aureliaFramework.inject)(Element, _aureliaFramework.Container, _aureliaFramework.BoundViewFactory, _aureliaFramework.ViewSlot)(SlotAttribute) || SlotAttribute;
    SlotAttribute = (0, _aureliaFramework.noView)(SlotAttribute) || SlotAttribute;
    SlotAttribute = (0, _aureliaFramework.customElement)('ai-slot')(SlotAttribute) || SlotAttribute;
    return SlotAttribute;
  })();

  exports.SlotAttribute = SlotAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLXNsb3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQVFhLGFBQWE7Ozs7MEJBQWIsYUFBYTs7cUNBUm1GLFFBQVE7O2VBU2xHLElBQUk7Ozs7O0FBQ1YsYUFGQSxhQUFhLENBRVosT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFOzs7OztBQUNyRCxVQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixVQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUE7QUFDL0IsVUFBSSxDQUFDLE9BQU8sR0FBSyxPQUFPLENBQUM7S0FDMUI7OzBCQVJVLGFBQWE7O2FBVXBCLGNBQUMsY0FBYyxFQUFFLGVBQWUsRUFBRTs7QUFFcEMsWUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtBQUM3RCxjQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsYUFuQmhDLFdBQVcsQ0FtQmtDLENBQUM7U0FDakQ7QUFDRCxlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xCLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGFBdEIxQixXQUFXLENBc0I0QixDQUFDLENBQUM7T0FTOUM7OzthQUVLLGtCQUFFO0FBQ04sWUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztPQUNwQjs7O3lCQTdCVSxhQUFhO0FBQWIsaUJBQWEsR0FEekIsc0JBUHNILE1BQU0sRUFPckgsT0FBTyxvQkFQYSxTQUFTLG9CQUFtQixnQkFBZ0Isb0JBQXNELFFBQVEsQ0FPL0UsQ0FDMUMsYUFBYSxLQUFiLGFBQWE7QUFBYixpQkFBYSx5QkFSbEIsTUFBTSxFQVFELGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FIekIsc0JBTDZGLGFBQWEsRUFLNUYsU0FBUyxDQUFDLENBR1osYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImFpLXNsb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge25vVmlldywgaW5saW5lVmlldywgQ29udGFpbmVyLCBjdXN0b21BdHRyaWJ1dGUsIEJvdW5kVmlld0ZhY3RvcnksIHRlbXBsYXRlQ29udHJvbGxlciwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCxWaWV3U2xvdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtjb250ZW50fSBmcm9tICcuL3RlbXBsYXRlcyc7XG5pbXBvcnQge0FJVGVtcGxhdGVzfSBmcm9tICcuL2FpLXRlbXBsYXRlJ1xuaW1wb3J0IHtWaWV3RWxlbWVudH0gZnJvbSAnLi9haS12aWV3JztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLXNsb3QnKVxuQG5vVmlld1xuQGluamVjdChFbGVtZW50LCBDb250YWluZXIsIEJvdW5kVmlld0ZhY3RvcnksIFZpZXdTbG90KVxuZXhwb3J0IGNsYXNzIFNsb3RBdHRyaWJ1dGUge1xuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lciwgdmlld0ZhY3RvcnksIHZpZXdTbG90KSB7XG4gICAgdGhpcy52aWV3RmFjdG9yeSA9IHZpZXdGYWN0b3J5O1xuICAgIHRoaXMudmlld1Nsb3QgPSB2aWV3U2xvdDtcbiAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyLnJvb3RcbiAgICB0aGlzLmVsZW1lbnQgICA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKGJpbmRpbmdDb250ZXh0LCBvdmVycmlkZUNvbnRleHQpIHtcblxuICAgIGlmICghdGhpcy52aWV3ICYmIHRoaXMudmlld0ZhY3RvcnkgJiYgdGhpcy52aWV3RmFjdG9yeS5jcmVhdGUpIHtcbiAgICAgIGxldCB0ZW1wbGF0ZXMgPSB0aGlzLmNvbnRhaW5lci5nZXQoQUlUZW1wbGF0ZXMpO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRhaW5lci5nZXQoQUlUZW1wbGF0ZXMpKTtcblxuICAgIC8vIGlmICghdGhpcy52aWV3ICYmIHZpZXdTbG90KSB7XG4gICAgLy8gICB0aGlzLnZpZXcgPSB0aGlzLnZpZXdGYWN0b3J5LmNyZWF0ZSgpO1xuXG4gICAgLy8gICBpZiAodmlldyAmJiAhdmlldy5pc0F0dGFjaGVkKSB2aWV3U2xvdC5yZW1vdmUodmlldyk7XG4gICAgLy8gICB2aWV3U2xvdC5hZGQodGhpcy52aWV3KTtcbiAgICAvLyB9XG4gICAgLy8gdGhpcy52aWV3LmJpbmQoYmluZGluZ0NvbnRleHQsIG92ZXJyaWRlQ29udGV4dCk7XG4gIH1cblxuICB1bmJpbmQoKXtcbiAgICB0aGlzLnZpZXcudW5iaW5kKCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
