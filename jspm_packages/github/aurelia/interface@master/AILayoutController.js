/* */ 
define(['exports', 'aurelia-framework', 'aurelia-templating', './channel', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaTemplating, _channel, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AILayoutController = (function () {
    function AILayoutController(channel, viewEngine) {
      _classCallCheck(this, _AILayoutController);

      this.overlayElement = _aureliaPal.DOM.createElement('ai-overlay');
      this.fragment = _aureliaPal.DOM.createDocumentFragment();
      this.config = {
        dialogs: []
      };

      this.channel = channel;
      this.fragment.appendChild(this.overlayElement);
    }

    _createClass(AILayoutController, [{
      key: 'getNavbar',
      value: function getNavbar() {
        var _this = this;

        return new Promise(function (resolve) {
          _this.channel.subscribeOnce('ai-navbar-controller', function (controller) {
            _this.navbarController = controller;
            resolve(_this.navbarController);
          });
        });
      }
    }, {
      key: 'setLayout',
      value: function setLayout(viewModel, element) {
        this.viewModel = viewModel;
        this.element = element;
        viewModel.controller = this;
        viewModel.config = this.config;
      }
    }]);

    var _AILayoutController = AILayoutController;
    AILayoutController = (0, _aureliaFramework.inject)(_channel.InterfaceChannel, _aureliaTemplating.ViewEngine)(AILayoutController) || AILayoutController;
    return AILayoutController;
  })();

  exports.AILayoutController = AILayoutController;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFJTGF5b3V0Q29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQU1hLGtCQUFrQjtBQWFsQixhQWJBLGtCQUFrQixDQWFqQixPQUFPLEVBQUUsVUFBVSxFQUFFOzs7V0FQakMsY0FBYyxHQUFHLFlBVFgsR0FBRyxDQVNZLGFBQWEsQ0FBQyxZQUFZLENBQUM7V0FDaEQsUUFBUSxHQUFTLFlBVlgsR0FBRyxDQVVZLHNCQUFzQixFQUFFO1dBRTdDLE1BQU0sR0FBRztBQUNQLGVBQU8sRUFBRSxFQUFFO09BQ1o7O0FBR0MsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQ2hEOztpQkFoQlUsa0JBQWtCOzthQWtCcEIscUJBQUc7OztBQUNWLGVBQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDNUIsZ0JBQUssT0FBTyxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxVQUFDLFVBQVUsRUFBSTtBQUNoRSxrQkFBSyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7QUFDbkMsbUJBQU8sQ0FBQyxNQUFLLGdCQUFnQixDQUFDLENBQUM7V0FDaEMsQ0FBQyxDQUFDO1NBQ0osQ0FBQyxDQUFDO09BQ0o7OzthQUVRLG1CQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUU7QUFDNUIsWUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7QUFDM0IsWUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsaUJBQVMsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0FBQzVCLGlCQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7T0FDaEM7Ozs4QkFoQ1Usa0JBQWtCO0FBQWxCLHNCQUFrQixHQUQ5QixzQkFMTyxNQUFNLFdBRU4sZ0JBQWdCLHFCQURoQixVQUFVLENBSW1CLENBQ3hCLGtCQUFrQixLQUFsQixrQkFBa0I7V0FBbEIsa0JBQWtCIiwiZmlsZSI6IkFJTGF5b3V0Q29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1ZpZXdFbmdpbmV9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4vY2hhbm5lbCc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5AaW5qZWN0KEludGVyZmFjZUNoYW5uZWwsIFZpZXdFbmdpbmUpXG5leHBvcnQgY2xhc3MgQUlMYXlvdXRDb250cm9sbGVyIHtcblxuICBjaGFubmVsO1xuICBzaWRlYmFyQ29udHJvbGxlcjtcbiAgbmF2YmFyQ29udHJvbGxlcjtcblxuICBvdmVybGF5RWxlbWVudCA9IERPTS5jcmVhdGVFbGVtZW50KCdhaS1vdmVybGF5Jyk7XG4gIGZyYWdtZW50ICAgICAgID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICBjb25maWcgPSB7XG4gICAgZGlhbG9nczogW11cbiAgfTtcblxuICBjb25zdHJ1Y3RvcihjaGFubmVsLCB2aWV3RW5naW5lKSB7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLmZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMub3ZlcmxheUVsZW1lbnQpO1xuICB9XG5cbiAgZ2V0TmF2YmFyKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuY2hhbm5lbC5zdWJzY3JpYmVPbmNlKCdhaS1uYXZiYXItY29udHJvbGxlcicsIChjb250cm9sbGVyKT0+IHtcbiAgICAgICAgdGhpcy5uYXZiYXJDb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLm5hdmJhckNvbnRyb2xsZXIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzZXRMYXlvdXQodmlld01vZGVsLCBlbGVtZW50KSB7XG4gICAgdGhpcy52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB2aWV3TW9kZWwuY29udHJvbGxlciA9IHRoaXM7XG4gICAgdmlld01vZGVsLmNvbmZpZyA9IHRoaXMuY29uZmlnO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
