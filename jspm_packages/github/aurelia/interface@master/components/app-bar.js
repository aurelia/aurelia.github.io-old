/* */ 
define(['exports', 'aurelia-framework', 'aurelia-templating', 'aurelia-pal', 'aurelia-router', '../AINavbarController', './navbar', 'aurelia-event-aggregator', './instruction'], function (exports, _aureliaFramework, _aureliaTemplating, _aureliaPal, _aureliaRouter, _AINavbarController, _navbar, _aureliaEventAggregator, _instruction) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AIApplicationBar = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AIApplicationBar, [{
      key: 'fixed',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AIApplicationBar(element, viewSlot, navbarController, eventAggregator) {
      _classCallCheck(this, _AIApplicationBar);

      this.__isAppBar = true;

      _defineDecoratedPropertyDescriptor(this, 'fixed', _instanceInitializers);

      this.subscriptions = [];

      this.element = element;
      this.viewSlot = viewSlot;
      this.eventAggregator = eventAggregator;
      navbarController.applicationBar = this;
    }

    _createDecoratedClass(AIApplicationBar, [{
      key: 'bind',
      value: function bind(bindingContext) {
        var _this = this;

        var eventAggregator = this.eventAggregator;
        this.fixed = this.fixed || this.element.hasAttribute('fixed');

        this.subscriptions.push(eventAggregator.subscribe(_navbar.AINavbarSlot, function (slot) {
          var view = _this.view;

          if (view) {
            _this.viewSlot.remove(view, true);
          }

          view = slot.view;

          if (view) {
            _this.viewSlot.add(view, true, true);
            _this.view = view;
          }
        }));
      }
    }, {
      key: 'unbind',
      value: function unbind() {}
    }], null, _instanceInitializers);

    var _AIApplicationBar = AIApplicationBar;
    AIApplicationBar = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaFramework.ViewSlot, _AINavbarController.AINavbarController, _aureliaEventAggregator.EventAggregator)(AIApplicationBar) || AIApplicationBar;
    AIApplicationBar = (0, _aureliaFramework.noView)(AIApplicationBar) || AIApplicationBar;
    AIApplicationBar = (0, _aureliaFramework.customElement)('ai-app-bar')(AIApplicationBar) || AIApplicationBar;
    return AIApplicationBar;
  })();

  exports.AIApplicationBar = AIApplicationBar;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYXBwLWJhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BWWEsZ0JBQWdCOzs7OzBCQUFoQixnQkFBZ0I7O3FDQVowRyxRQUFROztlQWUzSCxJQUFJOzs7OztBQUdYLGFBTkEsZ0JBQWdCLENBTWYsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLEVBQUU7OztXQUxsRSxVQUFVLEdBQUcsSUFBSTs7OztXQUlqQixhQUFhLEdBQUcsRUFBRTs7QUFFaEIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsVUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7QUFDdkMsc0JBQWdCLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztLQUN4Qzs7MEJBWFUsZ0JBQWdCOzthQWF2QixjQUFDLGNBQWMsRUFBRTs7O0FBQ25CLFlBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDM0MsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU5RCxZQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDckIsZUFBZSxDQUFDLFNBQVMsU0F6QnZCLFlBQVksRUF5QjBCLFVBQUMsSUFBSSxFQUFJO0FBQy9DLGNBQUksSUFBSSxHQUFHLE1BQUssSUFBSSxDQUFDOztBQUVyQixjQUFJLElBQUksRUFBRTtBQUNSLGtCQUFLLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1dBQ2xDOztBQUVELGNBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDOztBQUVqQixjQUFJLElBQUksRUFBRTtBQUNSLGtCQUFLLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNwQyxrQkFBSyxJQUFJLEdBQUcsSUFBSSxDQUFDO1dBQ2xCO1NBQ0YsQ0FBQyxDQUNILENBQUM7T0FDSDs7O2FBRUssa0JBQUcsRUFDUjs7OzRCQXBDVSxnQkFBZ0I7QUFBaEIsb0JBQWdCLEdBRDVCLHNCQVhnSixNQUFNLEVBVy9JLFlBVEEsR0FBRyxDQVNDLE9BQU8sb0JBWHdCLFFBQVEsc0JBSTNDLGtCQUFrQiwwQkFFbEIsZUFBZSxDQUs0QyxDQUN0RCxnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLG9CQUFnQix5QkFabUQsTUFBTSxFQVl6RSxnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUg1QixzQkFUdUgsYUFBYSxFQVN0SCxZQUFZLENBQUMsQ0FHZixnQkFBZ0IsS0FBaEIsZ0JBQWdCO1dBQWhCLGdCQUFnQiIsImZpbGUiOiJjb21wb25lbnRzL2FwcC1iYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgQm91bmRWaWV3RmFjdG9yeSwgVmlld1Nsb3QsVmlld1Jlc291cmNlcyxWaWV3Q29tcGlsZXIsIG5vVmlldywgdGVtcGxhdGVDb250cm9sbGVyLCBpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBDb250YWluZXIsIGNoaWxkfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1RlbXBsYXRpbmdFbmdpbmUsIEJlaGF2aW9ySW5zdHJ1Y3Rpb259IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7QUlOYXZiYXJDb250cm9sbGVyfSBmcm9tICcuLi9BSU5hdmJhckNvbnRyb2xsZXInO1xuaW1wb3J0IHtBSU5hdmJhclNsb3R9IGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtEeW5hbWljTmF2YmFySW5zdHJ1Y3Rpb24sIE5hdmJhckVsZW1lbnRJbnN0cnVjdGlvbn0gZnJvbSAnLi9pbnN0cnVjdGlvbidcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWFwcC1iYXInKVxuQG5vVmlld1xuQGluamVjdChET00uRWxlbWVudCwgVmlld1Nsb3QsIEFJTmF2YmFyQ29udHJvbGxlciwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEFJQXBwbGljYXRpb25CYXIge1xuICBfX2lzQXBwQmFyID0gdHJ1ZTtcblxuICBAYmluZGFibGUgZml4ZWQgPSBudWxsO1xuXG4gIHN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgdmlld1Nsb3QsIG5hdmJhckNvbnRyb2xsZXIsIGV2ZW50QWdncmVnYXRvcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy52aWV3U2xvdCA9IHZpZXdTbG90O1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICAgIG5hdmJhckNvbnRyb2xsZXIuYXBwbGljYXRpb25CYXIgPSB0aGlzO1xuICB9XG5cbiAgYmluZChiaW5kaW5nQ29udGV4dCkge1xuICAgIGxldCBldmVudEFnZ3JlZ2F0b3IgPSB0aGlzLmV2ZW50QWdncmVnYXRvcjtcbiAgICB0aGlzLmZpeGVkID0gdGhpcy5maXhlZCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdmaXhlZCcpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICBldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKEFJTmF2YmFyU2xvdCwgKHNsb3QpPT4ge1xuICAgICAgICBsZXQgdmlldyA9IHRoaXMudmlldztcblxuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgIHRoaXMudmlld1Nsb3QucmVtb3ZlKHZpZXcsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmlldyA9IHNsb3QudmlldztcblxuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgIHRoaXMudmlld1Nsb3QuYWRkKHZpZXcsIHRydWUsIHRydWUpO1xuICAgICAgICAgIHRoaXMudmlldyA9IHZpZXc7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
