/* */ 
define(['exports', 'aurelia-framework', '../channel', 'aurelia-pal', 'aurelia-router'], function (exports, _aureliaFramework, _channel, _aureliaPal, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var NavbarContainer = (function () {
    function NavbarContainer(element, channel, router) {
      _classCallCheck(this, _NavbarContainer);

      this.element = element;
      this.channel = channel;
      this.navigateBack = function () {
        return router.history.navigateBack();
      };
    }

    _createClass(NavbarContainer, [{
      key: 'bind',
      value: function bind(bindingContext, override) {
        this.model = bindingContext;
        console.log(this);
      }
    }, {
      key: 'unbind',
      value: function unbind() {}
    }, {
      key: 'attached',
      value: function attached() {}
    }]);

    var _NavbarContainer = NavbarContainer;
    NavbarContainer = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _channel.InterfaceChannel, _aureliaRouter.Router)(NavbarContainer) || NavbarContainer;
    NavbarContainer = (0, _aureliaFramework.customElement)('ai-navbarss-container')(NavbarContainer) || NavbarContainer;
    return NavbarContainer;
  })();

  exports.NavbarContainer = NavbarContainer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2YmFyLWNvbnRhaW5lci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQU9hLGVBQWU7QUFFZixhQUZBLGVBQWUsQ0FFZCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTs7O0FBQ3BDLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxZQUFZLEdBQUc7ZUFBSyxNQUFNLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRTtPQUFBLENBQUM7S0FDeEQ7O2lCQU5VLGVBQWU7O2FBUXRCLGNBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRTtBQUM3QixZQUFJLENBQUMsS0FBSyxHQUFHLGNBQWMsQ0FBQztBQUM1QixlQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO09BQ25COzs7YUFFSyxrQkFBRyxFQUNSOzs7YUFFTyxvQkFBRSxFQUFFOzs7MkJBaEJELGVBQWU7QUFBZixtQkFBZSxHQUQzQixzQkFOZ0MsTUFBTSxFQU0vQixZQUpBLEdBQUcsQ0FJQyxPQUFPLFdBTFgsZ0JBQWdCLGlCQUVoQixNQUFNLENBR2dDLENBQ2pDLGVBQWUsS0FBZixlQUFlO0FBQWYsbUJBQWUsR0FGM0Isc0JBTE8sYUFBYSxFQUtOLHVCQUF1QixDQUFDLENBRTFCLGVBQWUsS0FBZixlQUFlO1dBQWYsZUFBZSIsImZpbGUiOiJjb21wb25lbnRzL25hdmJhci1jb250YWluZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLW5hdmJhcnNzLWNvbnRhaW5lcicpXG5AaW5qZWN0KERPTS5FbGVtZW50LCBJbnRlcmZhY2VDaGFubmVsLCBSb3V0ZXIpXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29udGFpbmVyIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsLCByb3V0ZXIpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5uYXZpZ2F0ZUJhY2sgPSAoKT0+IHJvdXRlci5oaXN0b3J5Lm5hdmlnYXRlQmFjaygpO1xuICB9XG5cbiAgYmluZChiaW5kaW5nQ29udGV4dCwgb3ZlcnJpZGUpIHtcbiAgICB0aGlzLm1vZGVsID0gYmluZGluZ0NvbnRleHQ7XG4gICAgY29uc29sZS5sb2codGhpcyk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gIH1cblxuICBhdHRhY2hlZCgpe31cbn1cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
