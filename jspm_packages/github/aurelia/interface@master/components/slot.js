/* */ 
define(['exports', 'aurelia-framework', '../channel', 'aurelia-pal'], function (exports, _aureliaFramework, _channel, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AISlotComponent = (function () {
    function AISlotComponent(element, targetInstruction, channel) {
      _classCallCheck(this, _AISlotComponent);

      this.viewFactory = targetInstruction.elementInstruction.appBarContentFactory;
      this.channel = channel;
      this.name = element.getAttribute('name');
    }

    _createClass(AISlotComponent, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.bindingContext = bindingContext;
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.view = this.viewFactory.create();
        this.view.bind(this.bindingContext);
        this.channel.publish('slot-content:' + this.name, this.view);
      }
    }]);

    var _AISlotComponent = AISlotComponent;
    AISlotComponent = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, TargetInstruction, _channel.InterfaceChannel)(AISlotComponent) || AISlotComponent;
    AISlotComponent = processContent(compileTemplate)(AISlotComponent) || AISlotComponent;
    AISlotComponent = noView(AISlotComponent) || AISlotComponent;
    AISlotComponent = (0, _aureliaFramework.customElement)('ai-slot')(AISlotComponent) || AISlotComponent;
    return AISlotComponent;
  })();

  exports.AISlotComponent = AISlotComponent;

  function compileTemplate(compiler, resources, element, instruction) {
    var fragment = _aureliaPal.DOM.createDocumentFragment();
    var current = element.firstChild;

    while (current) {
      fragment.appendChild(current);
      current = current.nextSibling;
    }

    var factory = compiler.compile(fragment, resources);
    instruction.appBarContentFactory = factory;

    return false;
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvc2xvdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQVFhLGVBQWU7QUFFZixhQUZBLGVBQWUsQ0FFZCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsT0FBTyxFQUFFOzs7QUFDL0MsVUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQztBQUM3RSxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDMUM7O2lCQU5VLGVBQWU7O2FBUXRCLGNBQUMsY0FBYyxFQUFFO0FBQ25CLFlBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO09BQ3RDOzs7YUFFTyxvQkFBRTtBQUNSLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QyxZQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsWUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO09BQzVEOzs7MkJBaEJVLGVBQWU7QUFBZixtQkFBZSxHQUQzQixzQkFQZ0MsTUFBTSxFQU8vQixZQUxBLEdBQUcsQ0FLQyxPQUFPLEVBQUUsaUJBQWlCLFdBTjlCLGdCQUFnQixDQU1pQyxDQUM1QyxlQUFlLEtBQWYsZUFBZTtBQUFmLG1CQUFlLEdBRjNCLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FFbkIsZUFBZSxLQUFmLGVBQWU7QUFBZixtQkFBZSxHQUgzQixNQUFNLENBR00sZUFBZSxLQUFmLGVBQWU7QUFBZixtQkFBZSxHQUozQixzQkFKTyxhQUFhLEVBSU4sU0FBUyxDQUFDLENBSVosZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlOzs7OztBQW9CNUIsV0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ2xFLFFBQUksUUFBUSxHQUFHLFlBM0JULEdBQUcsQ0EyQlUsc0JBQXNCLEVBQUUsQ0FBQztBQUM1QyxRQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDOztBQUVqQyxXQUFNLE9BQU8sRUFBRTtBQUNiLGNBQVEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDOUIsYUFBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7S0FDL0I7O0FBRUQsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDcEQsZUFBVyxDQUFDLG9CQUFvQixHQUFHLE9BQU8sQ0FBQzs7QUFFM0MsV0FBTyxLQUFLLENBQUM7R0FDZCIsImZpbGUiOiJjb21wb25lbnRzL3Nsb3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktc2xvdCcpXG5Abm9WaWV3XG5AcHJvY2Vzc0NvbnRlbnQoY29tcGlsZVRlbXBsYXRlKVxuQGluamVjdChET00uRWxlbWVudCwgVGFyZ2V0SW5zdHJ1Y3Rpb24sIEludGVyZmFjZUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQUlTbG90Q29tcG9uZW50IHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0YXJnZXRJbnN0cnVjdGlvbiwgY2hhbm5lbCkge1xuICAgIHRoaXMudmlld0ZhY3RvcnkgPSB0YXJnZXRJbnN0cnVjdGlvbi5lbGVtZW50SW5zdHJ1Y3Rpb24uYXBwQmFyQ29udGVudEZhY3Rvcnk7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLm5hbWUgPSBlbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpO1xuICB9XG5cbiAgYmluZChiaW5kaW5nQ29udGV4dCkge1xuICAgIHRoaXMuYmluZGluZ0NvbnRleHQgPSBiaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIGF0dGFjaGVkKCl7XG4gICAgdGhpcy52aWV3ID0gdGhpcy52aWV3RmFjdG9yeS5jcmVhdGUoKTtcbiAgICB0aGlzLnZpZXcuYmluZCh0aGlzLmJpbmRpbmdDb250ZXh0KTtcbiAgICB0aGlzLmNoYW5uZWwucHVibGlzaCgnc2xvdC1jb250ZW50OicrdGhpcy5uYW1lLCB0aGlzLnZpZXcpO1xuICB9XG59XG5cblxuZnVuY3Rpb24gY29tcGlsZVRlbXBsYXRlKGNvbXBpbGVyLCByZXNvdXJjZXMsIGVsZW1lbnQsIGluc3RydWN0aW9uKSB7XG4gIGxldCBmcmFnbWVudCA9IERPTS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIGxldCBjdXJyZW50ID0gZWxlbWVudC5maXJzdENoaWxkO1xuXG4gIHdoaWxlKGN1cnJlbnQpIHtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjdXJyZW50KTtcbiAgICBjdXJyZW50ID0gY3VycmVudC5uZXh0U2libGluZztcbiAgfVxuXG4gIGxldCBmYWN0b3J5ID0gY29tcGlsZXIuY29tcGlsZShmcmFnbWVudCwgcmVzb3VyY2VzKTtcbiAgaW5zdHJ1Y3Rpb24uYXBwQmFyQ29udGVudEZhY3RvcnkgPSBmYWN0b3J5O1xuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
