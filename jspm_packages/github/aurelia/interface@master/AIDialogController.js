/* */ 
define(['exports', 'aurelia-framework', 'aurelia-dependency-injection', './components/dialogs/alert', './channel', './AIViewComposer', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaDependencyInjection, _componentsDialogsAlert, _channel, _AIViewComposer, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var DialogController = function DialogController(element) {
    _classCallCheck(this, DialogController);

    this.element = element;
  };

  var AIDialogController = (function () {
    function AIDialogController(channel, container, vmComposer) {
      _classCallCheck(this, _AIDialogController);

      this.viewPorts = {};

      this.channel = channel;
      this.container = container;
    }

    _createClass(AIDialogController, [{
      key: 'registerViewPort',
      value: function registerViewPort(viewPort, name) {
        name = name || 'default';
        this.viewPorts[name] = viewPort;
      }
    }, {
      key: 'alert',
      value: function alert(settings) {
        settings = settings.model ? settings : { model: settings };
        settings.viewModel = settings.viewModel || _componentsDialogsAlert.AlertDialog;
        var name = settings.name || 'default';
        var viewPort = this.viewPorts[name];
        viewPort.add(settings);
      }
    }]);

    var _AIDialogController = AIDialogController;
    AIDialogController = (0, _aureliaFramework.inject)(_channel.InterfaceChannel, _aureliaDependencyInjection.Container, _AIViewComposer.AIViewComposer)(AIDialogController) || AIDialogController;
    return AIDialogController;
  })();

  exports.AIDialogController = AIDialogController;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFJRGlhbG9nQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQVFNLGdCQUFnQixHQUNULFNBRFAsZ0JBQWdCLENBQ1IsT0FBTyxFQUFFOzBCQURqQixnQkFBZ0I7O0FBRWxCLFFBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0dBQ3hCOztNQUlVLGtCQUFrQjtBQUVsQixhQUZBLGtCQUFrQixDQUVqQixPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRTs7O1dBRDVDLFNBQVMsR0FBRyxFQUFFOztBQUVaLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzVCOztpQkFMVSxrQkFBa0I7O2FBT2IsMEJBQUMsUUFBUSxFQUFFLElBQUksRUFBRTtBQUMvQixZQUFJLEdBQUcsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUN6QixZQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsQ0FBQztPQUNqQzs7O2FBRUksZUFBQyxRQUFRLEVBQUU7QUFDZCxnQkFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEdBQUcsUUFBUSxHQUFHLEVBQUMsS0FBSyxFQUFFLFFBQVEsRUFBQyxDQUFDO0FBQ3pELGdCQUFRLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLDRCQTFCbkMsV0FBVyxBQTBCdUMsQ0FBQztBQUN2RCxZQUFJLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQztBQUN0QyxZQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLGdCQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO09BQzVCOzs7OEJBbEJVLGtCQUFrQjtBQUFsQixzQkFBa0IsR0FEOUIsc0JBYk8sTUFBTSxXQUdOLGdCQUFnQiw4QkFGaEIsU0FBUyxrQkFHVCxjQUFjLENBUzhCLENBQ3ZDLGtCQUFrQixLQUFsQixrQkFBa0I7V0FBbEIsa0JBQWtCIiwiZmlsZSI6IkFJRGlhbG9nQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtpbmplY3QsIFZpZXdTbG90LCBWaWV3Q29tcGlsZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Q29udGFpbmVyfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7QWxlcnREaWFsb2d9IGZyb20gJy4vY29tcG9uZW50cy9kaWFsb2dzL2FsZXJ0JztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi9jaGFubmVsJztcbmltcG9ydCB7QUlWaWV3Q29tcG9zZXJ9IGZyb20gJy4vQUlWaWV3Q29tcG9zZXInO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuY2xhc3MgRGlhbG9nQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG59XG5cbkBpbmplY3QoSW50ZXJmYWNlQ2hhbm5lbCwgQ29udGFpbmVyLCBBSVZpZXdDb21wb3NlcilcbmV4cG9ydCBjbGFzcyBBSURpYWxvZ0NvbnRyb2xsZXIge1xuICB2aWV3UG9ydHMgPSB7fTtcbiAgY29uc3RydWN0b3IoY2hhbm5lbCwgY29udGFpbmVyLCB2bUNvbXBvc2VyKSB7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgfVxuXG4gIHJlZ2lzdGVyVmlld1BvcnQodmlld1BvcnQsIG5hbWUpIHtcbiAgICBuYW1lID0gbmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgdGhpcy52aWV3UG9ydHNbbmFtZV0gPSB2aWV3UG9ydDtcbiAgfVxuXG4gIGFsZXJ0KHNldHRpbmdzKSB7XG4gICAgc2V0dGluZ3MgPSBzZXR0aW5ncy5tb2RlbCA/IHNldHRpbmdzIDoge21vZGVsOiBzZXR0aW5nc307XG4gICAgc2V0dGluZ3Mudmlld01vZGVsID0gc2V0dGluZ3Mudmlld01vZGVsIHx8IEFsZXJ0RGlhbG9nO1xuICAgIGxldCBuYW1lID0gc2V0dGluZ3MubmFtZSB8fCAnZGVmYXVsdCc7XG4gICAgbGV0IHZpZXdQb3J0ID0gdGhpcy52aWV3UG9ydHNbbmFtZV07XG4gICAgICAgIHZpZXdQb3J0LmFkZChzZXR0aW5ncyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
