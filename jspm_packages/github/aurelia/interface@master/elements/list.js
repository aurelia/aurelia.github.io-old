/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ListElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ListElement, [{
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'items',
      decorators: [(0, _aureliaFramework.children)('ai-item')],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }], null, _instanceInitializers);

    function ListElement(element) {
      _classCallCheck(this, _ListElement);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      this.element = element;
      if (this.element.hasAttribute('accordion') || this.element.getAttribute('type') === 'accordion') {
        this.isList = false;
        this.isAccordion = true;
      }
    }

    _createDecoratedClass(ListElement, [{
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this = this;

        this.items.forEach(function (item) {
          if (_this.isAccordion) {
            item.accordion = _this;
            item.onClick(function (e) {
              _this.setActive(e, item);
            });
          }
        });
      }
    }, {
      key: 'setActive',
      value: function setActive(e, item) {
        if (item.accordionContainer && item.element.contains(e.target) && !item.accordionContainer.contains(e.target)) {
          if (item.active && this.activeItem && this.activeItem.active) {
            this.activeItem.active = false;
            Velocity(this.activeItem.accordionContainer, "slideUp", { duration: 200 });
          } else {
            if (this.activeItem && this.activeItem.active) {
              this.activeItem.active = false;
              Velocity(this.activeItem.accordionContainer, "slideUp", { duration: 200 });
            }
            item.active = !item.active;
            Velocity(item.accordionContainer, "slideDown", { duration: 200 });
            this.activeItem = item;
          }
        }
      }
    }], null, _instanceInitializers);

    var _ListElement = ListElement;
    ListElement = (0, _aureliaFramework.inject)(Element)(ListElement) || ListElement;
    ListElement = (0, _aureliaFramework.useView)('./content.html')(ListElement) || ListElement;
    ListElement = (0, _aureliaFramework.customElement)('ai-list')(ListElement) || ListElement;
    return ListElement;
  })();

  exports.ListElement = ListElement;

  var ListControlsAttribute = (function () {
    var _instanceInitializers2 = {};
    var _instanceInitializers2 = {};

    _createDecoratedClass(ListControlsAttribute, [{
      key: 'hidden',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers2);

    function ListControlsAttribute(element) {
      _classCallCheck(this, _ListControlsAttribute);

      _defineDecoratedPropertyDescriptor(this, 'hidden', _instanceInitializers2);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers2);

      this.element = element;
    }

    _createDecoratedClass(ListControlsAttribute, [{
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'hiddenChanged',
      value: function hiddenChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('hide-controls');
      }
    }, {
      key: 'toggleControls',
      value: function toggleControls() {
        this.hidden = !this.hidden;
      }
    }, {
      key: 'model',
      get: function get() {
        if (this.element.primaryBehavior) {
          return this.element.primaryBehavior.bindingContext;
        }

        if (this.element.au) {
          return this.element.au.controller.model;
        }
      }
    }], null, _instanceInitializers2);

    var _ListControlsAttribute = ListControlsAttribute;
    ListControlsAttribute = (0, _aureliaFramework.inject)(Element)(ListControlsAttribute) || ListControlsAttribute;
    ListControlsAttribute = (0, _aureliaFramework.noView)(ListControlsAttribute) || ListControlsAttribute;
    ListControlsAttribute = (0, _aureliaFramework.customAttribute)('list-controls')(ListControlsAttribute) || ListControlsAttribute;
    return ListControlsAttribute;
  })();

  exports.ListControlsAttribute = ListControlsAttribute;
});
//# sourceMappingURL=data:application/json;base64,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dUIsUUFBUTs7ZUFzRDVDLElBQUk7Ozs7O3FDQXREZ0MsUUFBUTs7ZUF1RDlDLElBQUk7Ozs7O0FBRVYsYUFKQSxxQkFBcUIsQ0FJcEIsT0FBTyxFQUFFOzs7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzswQkFOVSxxQkFBcUI7O2FBa0J4QixvQkFBRSxFQUNUOzs7YUFFWSx1QkFBQyxLQUFLLEVBQUU7QUFDbkIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQztPQUNuRTs7O2FBRWEsMEJBQUc7QUFDZixZQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztPQUM1Qjs7O1dBbkJRLGVBQUc7QUFDVixZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFO0FBQ2hDLGlCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQztTQUNwRDs7QUFFRCxZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ25CLGlCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDekM7T0FDRjs7O2lDQWhCVSxxQkFBcUI7QUFBckIseUJBQXFCLEdBRGpDLHNCQXBEa0UsTUFBTSxFQW9EakUsT0FBTyxDQUFDLENBQ0gscUJBQXFCLEtBQXJCLHFCQUFxQjtBQUFyQix5QkFBcUIseUJBckQxQixNQUFNLEVBcURELHFCQUFxQixLQUFyQixxQkFBcUI7QUFBckIseUJBQXFCLEdBSGpDLHNCQWxEd0IsZUFBZSxFQWtEdkIsZUFBZSxDQUFDLENBR3BCLHFCQUFxQixLQUFyQixxQkFBcUI7V0FBckIscUJBQXFCIiwiZmlsZSI6ImVsZW1lbnRzL2xpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge25vVmlldywgdXNlVmlldywgY3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZHJlbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktbGlzdCcpXG5AdXNlVmlldygnLi9jb250ZW50Lmh0bWwnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIExpc3RFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHR5cGUgPSBudWxsO1xuICBAY2hpbGRyZW4oJ2FpLWl0ZW0nKSBpdGVtcyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIGlmICh0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdhY2NvcmRpb24nKSB8fCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgPT09ICdhY2NvcmRpb24nKSB7XG4gICAgICB0aGlzLmlzTGlzdCA9IGZhbHNlO1xuICAgICAgdGhpcy5pc0FjY29yZGlvbiA9IHRydWU7XG4gICAgfVxuICB9XG4gIGF0dGFjaGVkKCkge1xuXG4gIH1cblxuICBpdGVtc0NoYW5nZWQoKXtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAodGhpcy5pc0FjY29yZGlvbikge1xuICAgICAgICBpdGVtLmFjY29yZGlvbiA9IHRoaXM7XG4gICAgICAgIGl0ZW0ub25DbGljaygoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUoZSwgaXRlbSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldEFjdGl2ZShlLCBpdGVtKSB7XG4gICAgaWYgKGl0ZW0uYWNjb3JkaW9uQ29udGFpbmVyICYmIGl0ZW0uZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkgJiYgIWl0ZW0uYWNjb3JkaW9uQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgaWYgKGl0ZW0uYWN0aXZlICYmIHRoaXMuYWN0aXZlSXRlbSAmJiB0aGlzLmFjdGl2ZUl0ZW0uYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgVmVsb2NpdHkodGhpcy5hY3RpdmVJdGVtLmFjY29yZGlvbkNvbnRhaW5lciwgXCJzbGlkZVVwXCIsIHtkdXJhdGlvbjogMjAwfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gJiYgdGhpcy5hY3RpdmVJdGVtLmFjdGl2ZSkge1xuICAgICAgICAgIHRoaXMuYWN0aXZlSXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICBWZWxvY2l0eSh0aGlzLmFjdGl2ZUl0ZW0uYWNjb3JkaW9uQ29udGFpbmVyLCBcInNsaWRlVXBcIiwge2R1cmF0aW9uOiAyMDB9KVxuICAgICAgICB9XG4gICAgICAgIGl0ZW0uYWN0aXZlID0gIWl0ZW0uYWN0aXZlO1xuICAgICAgICBWZWxvY2l0eShpdGVtLmFjY29yZGlvbkNvbnRhaW5lciwgXCJzbGlkZURvd25cIiwge2R1cmF0aW9uOiAyMDB9KVxuICAgICAgICB0aGlzLmFjdGl2ZUl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoJ2xpc3QtY29udHJvbHMnKVxuQG5vVmlld1xuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIExpc3RDb250cm9sc0F0dHJpYnV0ZSB7XG4gIEBiaW5kYWJsZSBoaWRkZW4gPSBudWxsO1xuICBAYmluZGFibGUgdHlwZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBnZXQgbW9kZWwoKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5wcmltYXJ5QmVoYXZpb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQucHJpbWFyeUJlaGF2aW9yLmJpbmRpbmdDb250ZXh0O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmVsZW1lbnQuYXUpIHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuYXUuY29udHJvbGxlci5tb2RlbDtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpe1xuICB9XG5cbiAgaGlkZGVuQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaGlkZS1jb250cm9scycpO1xuICB9XG5cbiAgdG9nZ2xlQ29udHJvbHMoKSB7XG4gICAgdGhpcy5oaWRkZW4gPSAhdGhpcy5oaWRkZW47XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
