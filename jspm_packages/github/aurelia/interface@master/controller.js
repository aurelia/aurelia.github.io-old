/* */ 
define(['exports', 'aurelia-framework', './channel'], function (exports, _aureliaFramework, _channel) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.dispatchDocumentEvent = dispatchDocumentEvent;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function dispatchDocumentEvent(eventName, detail) {
    var event = new CustomEvent(eventName, { detail: detail });
    document.dispatchEvent(event);
  }

  var InterfaceController = (function () {
    function InterfaceController(interfaceChannel) {
      _classCallCheck(this, _InterfaceController);

      this.__components__ = {};

      this.interfaceChannel = interfaceChannel;
      interfaceChannel.publish('init-controller', this);
    }

    _createClass(InterfaceController, [{
      key: 'init',
      value: function init(ai) {
        this.ai = ai;
        this.theme = 'light';
        Object.assign(this, this.ai.instruction());
        this.initListeners();
      }
    }, {
      key: 'getDeviceInstruction',
      value: function getDeviceInstruction(platform, deviceType, theme, device) {
        return { platform: platform, deviceType: deviceType, theme: theme, device: device };
      }
    }, {
      key: 'bind',
      value: function bind(config) {
        Object.assign(this, config);
      }
    }, {
      key: 'initListeners',
      value: function initListeners() {
        var _this = this;

        this.subscribe('platform-init', function (payload) {
          Object.assign(payload.context, _this.deviceInstruction);
        });
        this.subscribe('view-attached', function (payload) {
          var view = payload.view;

          if (!_this.rootVew) {
            view.isRootView = true;
            _this.rootVew = view;
          }
        });

        this.subscribe('view-detached', function (payload) {
          var view = payload.view;

          if (view.isRootView) {
            view.isRootView = false;
            _this.rootVew = findRootView();
          }
        });

        this.subscribe('blur-view', function (payload) {
          var blur = payload.blur;
          _this.rootRouterView = _this.rootRouterView || _this.findRootRouterView();
          _this.rootRouterView.classList[blur ? 'add' : 'remove']('blur-view');
        });
      }
    }, {
      key: 'addComponent',
      value: function addComponent(name, component) {
        if (name) {
          this[name] = component;
        }
      }
    }, {
      key: 'getComponent',
      value: function getComponent(name) {
        return this.components[name];
      }
    }, {
      key: 'publish',
      value: function publish(event, payload) {
        payload = typeof payload !== 'object' && !Array.isArray(payload) ? { detail: payload } : payload;
        return this.interfaceChannel.publish(event, payload);
      }
    }, {
      key: 'subscribe',
      value: function subscribe(name, callback) {
        return this.interfaceChannel.subscribe(name, callback);
      }
    }, {
      key: 'setView',
      value: function setView(view) {
        this.components.view = view;
        this.publish('view-ready', { view: view });
        this.publish('view-changed', { view: view });
      }
    }, {
      key: 'getView',
      value: function getView() {
        return this.components.view;
      }
    }, {
      key: 'bindDevice',
      value: function bindDevice(context) {
        Object.assign(context, this.deviceInstruction);
      }
    }, {
      key: 'findRootView',
      value: function findRootView() {
        var view = document.body.querySelectorAll('ai-view')[0];
        return view && view.au.controller.model;
      }
    }, {
      key: 'findRootRouterView',
      value: function findRootRouterView() {
        return document.body.querySelectorAll('router-view')[0];
      }
    }, {
      key: 'deviceInstruction',
      get: function get() {
        return this.ai.instruction();
      }
    }, {
      key: 'components',
      get: function get() {
        return this.__components__;
      }
    }, {
      key: 'view',
      set: function set(view) {
        this.setView(view);
      },
      get: function get() {
        return this.components.view;
      }
    }]);

    var _InterfaceController = InterfaceController;
    InterfaceController = (0, _aureliaFramework.inject)(_channel.InterfaceChannel)(InterfaceController) || InterfaceController;
    return InterfaceController;
  })();

  exports.InterfaceController = InterfaceController;

  var WindowAPI = (function () {
    function WindowAPI(controller) {
      _classCallCheck(this, WindowAPI);

      this.platformCallbacks = new Map();

      this.controller = controller;
      controller.publish('platform-init', { context: this });
    }

    _createClass(WindowAPI, [{
      key: 'platformChange',
      value: function platformChange(context, callback) {
        callback(this.controller.deviceInstruction);
        return this.controller.subscribe('platform-changed', callback);
      }
    }, {
      key: 'publish',
      get: function get() {
        return this.controller.publish;
      }
    }, {
      key: 'subscribe',
      get: function get() {
        return this.controller.subscribe;
      }
    }]);

    return WindowAPI;
  })();

  exports.WindowAPI = WindowAPI;
});
//# sourceMappingURL=data:application/json;base64,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QU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUE7T0FDL0I7OztXQUNZLGVBQUc7QUFDZCxlQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFBO09BQ2pDOzs7V0FqQlUsU0FBUyIsImZpbGUiOiJjb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIENvbnRhaW5lciwgTGF6eX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtJbnRlcmZhY2VDaGFubmVsfSBmcm9tICcuL2NoYW5uZWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2hEb2N1bWVudEV2ZW50KGV2ZW50TmFtZSwgZGV0YWlsKSB7XG4gIHZhciBldmVudCA9IG5ldyBDdXN0b21FdmVudChldmVudE5hbWUsIHtkZXRhaWx9KTtcbiAgZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG59XG5cbkBpbmplY3QoSW50ZXJmYWNlQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VDb250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3RvcihpbnRlcmZhY2VDaGFubmVsKSB7XG4gICAgdGhpcy5pbnRlcmZhY2VDaGFubmVsID0gaW50ZXJmYWNlQ2hhbm5lbDtcbiAgICBpbnRlcmZhY2VDaGFubmVsLnB1Ymxpc2goJ2luaXQtY29udHJvbGxlcicsIHRoaXMpO1xuICB9XG5cbiAgaW5pdChhaSkge1xuICAgIHRoaXMuYWkgPSBhaTtcbiAgICB0aGlzLnRoZW1lID0gJ2xpZ2h0JztcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIHRoaXMuYWkuaW5zdHJ1Y3Rpb24oKSk7XG4gICAgdGhpcy5pbml0TGlzdGVuZXJzKCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyKCk6IGRldmljZUluc3RydWN0aW9uXG4gICAqXG4gICAqIFJldHJpZXZlcyB0aGUgY3VycmVudCBkZXZpY2UgaW5zdHJ1Y3Rpb25cbiAgICpcbiAgICogQHVzZXMgUHJvdG90eXBlKCk6IGdldERldmljZUluc3RydWN0aW9uXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICovXG4gIGdldCBkZXZpY2VJbnN0cnVjdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5haS5pbnN0cnVjdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBnZXREZXZpY2VJbnN0cnVjdGlvblxuICAgKlxuICAgKiBAdXNlZEJ5IEdldHRlcigpOiBwbGF0Zm9ybUluc3RydWN0aW9uXG4gICAqIEBwYXJhbSAge1N0cmluZ30gICBbcGxhdGZvcm1dICAgPCBhaSB8IGlvcyB8IGFuZHJvaWQgfCB3aW5kb3dzID5cbiAgICogQHBhcmFtICB7U3RyaW5nfSAgIFtkZXZpY2VUeXBlXSA8IG1vYmlsZSB8IHRhYmxldCB8IGRlc2t0b3AgPlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9ICAgW3RoZW1lXSAgICAgIDwgbGlnaHQgfCBkYXJrID5cbiAgICogQHBhcmFtICB7SW5zdGFuY2V9IFtkZXZpY2VdICAgICBbVGhlIGF1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3JtcyBpbnN0YW5jZV1cbiAgICogQHJldHVybiB7T2JqZWN0fSAgICAgICAgICAgICAgICBbT2JqZWN0IGNvbnRhaW5pbmcgZWFjaCBhcmd1bWVudF1cbiAgICovXG4gIGdldERldmljZUluc3RydWN0aW9uKHBsYXRmb3JtLGRldmljZVR5cGUsdGhlbWUsZGV2aWNlKSB7XG4gICAgcmV0dXJuIHtwbGF0Zm9ybSxkZXZpY2VUeXBlLHRoZW1lLGRldmljZX07XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IGJpbmRcbiAgICogVXNlZCBmb3IgY29uZmlndXJpbmcgdGhlIGludGVyZmFjZS1jb250cm9sbGVyXG4gICAqXG4gICAqIEBwYXJhbSAge09iamVjdH0gW2NvbmZpZ11cbiAgICovXG4gIGJpbmQoY29uZmlnKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBpbml0TGlzdGVuZXJzXG4gICAqXG4gICAqIEluaXRpYWxpemUgYWxsIExpc3RlbmVycyBmb3IgY29tcG9uZW50IHVzYWdlXG4gICAqL1xuICBpbml0TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuc3Vic2NyaWJlKCdwbGF0Zm9ybS1pbml0JywgKHBheWxvYWQpPT4ge1xuICAgICAgT2JqZWN0LmFzc2lnbihwYXlsb2FkLmNvbnRleHQsIHRoaXMuZGV2aWNlSW5zdHJ1Y3Rpb24pO1xuICAgIH0pO1xuICAgIHRoaXMuc3Vic2NyaWJlKCd2aWV3LWF0dGFjaGVkJywgKHBheWxvYWQpPT4ge1xuICAgICAgbGV0IHZpZXcgPSBwYXlsb2FkLnZpZXc7XG5cbiAgICAgIGlmICghdGhpcy5yb290VmV3KSB7XG4gICAgICAgIHZpZXcuaXNSb290VmlldyA9IHRydWU7XG4gICAgICAgIHRoaXMucm9vdFZldyA9IHZpZXc7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmliZSgndmlldy1kZXRhY2hlZCcsIChwYXlsb2FkKT0+IHtcbiAgICAgIGxldCB2aWV3ID0gcGF5bG9hZC52aWV3O1xuXG4gICAgICBpZiAodmlldy5pc1Jvb3RWaWV3KSB7XG4gICAgICAgIHZpZXcuaXNSb290VmlldyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnJvb3RWZXcgPSBmaW5kUm9vdFZpZXcoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaWJlKCdibHVyLXZpZXcnLCAocGF5bG9hZCk9PiB7XG4gICAgICBsZXQgYmx1ciA9IHBheWxvYWQuYmx1cjtcbiAgICAgIHRoaXMucm9vdFJvdXRlclZpZXcgPSB0aGlzLnJvb3RSb3V0ZXJWaWV3IHx8IHRoaXMuZmluZFJvb3RSb3V0ZXJWaWV3KCk7XG4gICAgICB0aGlzLnJvb3RSb3V0ZXJWaWV3LmNsYXNzTGlzdFtibHVyID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2JsdXItdmlldycpO1xuICAgIH0pXG4gIH1cblxuICBfX2NvbXBvbmVudHNfXyA9IHt9O1xuICAvKipcbiAgICogR2V0dGVyKCk6IGNvbXBvbmVudHNcbiAgICpcbiAgICogQHVzYWVkQnkgUHJvdG90eXBlKCk6IGFkZENvbXBvbmVudFxuICAgKiBAdXNhZWRCeSBQcm90b3R5cGUoKTogZ2V0Q29tcG9uZW50XG4gICAqIEByZXR1cm4ge09iamVjdH0gUHJpdmF0ZSBpbnN0YW5jZSBvZiB0aGUgaW50ZXJuYWwgY29tcG9uZW50c1xuICAgKi9cbiAgZ2V0IGNvbXBvbmVudHMoKXtcbiAgICByZXR1cm4gdGhpcy5fX2NvbXBvbmVudHNfX1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBhZGRDb21wb25lbnRcbiAgICpcbiAgICogVXNlZCBmb3Igc3RvcmluZyBjb21wb25lbnRzIGZvciBsYXRlciByZXRyaWV2YWxcbiAgICogQHVzZXMgR2V0dGVyKCk6IGNvbXBvbmVudHNcbiAgICogQHBhcmFtIHtTdHJpbmd9ICAgIFtuYW1lXSAgICAgICBDb21wb25lbnQgTmFtZVxuICAgKiBAcGFyYW0ge0lubnN0YW5jZX0gW2NvbXBvbmVudF0gIENvbXBvbmVudCBJbnN0YW5jZVxuICAgKi9cbiAgYWRkQ29tcG9uZW50KG5hbWUsIGNvbXBvbmVudCkge1xuICAgIGlmIChuYW1lKSB7XG4gICAgICB0aGlzW25hbWVdID0gY29tcG9uZW50O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b3R5cGUoKTogZ2V0Q29tcG9uZW50XG4gICAqXG4gICAqIFVzZWQgZm9yIHJldHJpZXZpbmcgaW50ZXJuYWwgY29tcG9uZW50c1xuICAgKiBAdXNlcyBHZXR0ZXIoKTogY29tcG9uZW50c1xuICAgKiBAcGFyYW0ge1N0cmluZ30gICAgW25hbWVdICAgICAgIENvbXBvbmVudCBOYW1lXG4gICAqIEByZXR1cm4ge0luc3RhbmNlfSBbY29tcG9uZW50XSAgQ29tcG9uZW50IEluc3RhbmNlXG4gICAqL1xuICBnZXRDb21wb25lbnQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbbmFtZV07XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IHB1Ymxpc2hcbiAgICpcbiAgICogUHVibGljaCBhbiBldmVudCBvbiB0aGUgSW50ZXJmYWNlQ2hhbm5lbFxuICAgKiBJZiB0aGUgZXZlbnQgaXMgYSBzdHJpbmcsIEV2ZW50IHdpbGwgYmUgcHJlZml4ZWQgd2l0aCB0aGUgRXZlbnRLZXlcbiAgICogQEV2ZW50S2V5IGlzIGBpbnRlcmZhY2U6JHtuYW1lfWBcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfENsYXNzfSBbZXZlbnRdIFtUaGUgZXZlbnQgdG8gcHVibGlzaF1cbiAgICogQHBhcmFtICB7T2JqZWN0fFN0cmluZ30gICAgICAgIFtwYXlsb2FkXSBbVGhlIHBhcmFtZXRlcnMgfCBkYXRhIHRvIHNlbmQgd2l0aCB0aGUgbWVzc2FnZV1cbiAgICovXG4gIHB1Ymxpc2goZXZlbnQsIHBheWxvYWQpIHtcbiAgICBwYXlsb2FkID0gKHR5cGVvZiBwYXlsb2FkICE9PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShwYXlsb2FkKSkgPyB7ZGV0YWlsOnBheWxvYWR9IDogcGF5bG9hZDtcbiAgICByZXR1cm4gdGhpcy5pbnRlcmZhY2VDaGFubmVsLnB1Ymxpc2goZXZlbnQsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBzdWJzY3JpYmVcbiAgICpcbiAgICogU3Vic2NyaWJlIHRvIGFuIGV2ZW50IG9uIHRoZSBJbnRlcmZhY2VDaGFubmVsLlxuICAgKiBJZiB0aGUgZXZlbnQgaXMgYSBzdHJpbmcsIEV2ZW50IHdpbGwgYmUgcHJlZml4ZWQgd2l0aCB0aGUgRXZlbnRLZXlcbiAgICogQEV2ZW50S2V5IGlzIGBpbnRlcmZhY2U6JHtuYW1lfWBcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfENsYXNzfSAgW2V2ZW50XSAgICBbVGhlIGV2ZW50IHRvIHB1Ymxpc2hdXG4gICAqIEBwYXJhbSAge09iamVjdHxTdHJpbmd9IFtjYWxsYmFja10gW1RoZSBjYWxsYmFjayB0byBpbnZva2Ugb25jZSB0aGUgbWVzc2FnZSBpcyBwdWJsaXNoZWRdXG4gICAqIEByZXR1cm4ge0Z1bmN0aW9ufSAgICAgICAgICAgICAgICAgW3RoZSBVbnN1YnNjcmliZSBmdW5jdGlvbiByZXR1cm5lZCBmcm9tIHRoZSBFdmVudCBBZ2dyZWdhdG9yXVxuICAgKi9cbiAgc3Vic2NyaWJlKG5hbWUsIGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJmYWNlQ2hhbm5lbC5zdWJzY3JpYmUobmFtZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHRlcigpOiB2aWV3XG4gICAqXG4gICAqIFNldCB0aGUgY3VycmVudCB2aWV3XG4gICAqIEBwYXJhbSAge0ludGFjYW5jZSB9IFt2aWV3XSAgSW5zdGFuY2Ugb2YgQXVyZWxpYSBSb3V0ZXJcbiAgICogQHJldHVybiB7W3R5cGVdfSAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICovXG4gIHNldCB2aWV3KHZpZXcpIHtcbiAgICB0aGlzLnNldFZpZXcodmlldylcbiAgfVxuXG4gIGdldCB2aWV3KCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMudmlldztcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b3R5cGUoKTogc2V0Vmlld1xuICAgKlxuICAgKiBTZXQgdGhlIEN1cnJlbnQgVmlld0luc3RhbmNlXG4gICAqIEBwYXJhbSB7Vk0gSW5zdGFuY2V9IFt2aWV3XSBbVGhlIGN1cnJlbnQgVmlldyBNb2RhbCBvZiBhaS12aWV3XVxuICAgKi9cbiAgc2V0Vmlldyh2aWV3KSB7XG4gICAgdGhpcy5jb21wb25lbnRzLnZpZXcgPSB2aWV3XG4gICAgdGhpcy5wdWJsaXNoKCd2aWV3LXJlYWR5Jywge3ZpZXd9KTtcbiAgICB0aGlzLnB1Ymxpc2goJ3ZpZXctY2hhbmdlZCcsIHt2aWV3fSk7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IGdldFZpZXdcbiAgICpcbiAgICogR2V0IHRoZSBDdXJyZW50IFZpZXdJbnN0YW5jZVxuICAgKiBAcmV0dXJuIFtUaGUgY3VycmVudCBWaWV3IE1vZGFsIG9mIGFpLXZpZXddXG4gICAqL1xuICBnZXRWaWV3KCl7XG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy52aWV3XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IGJpbmREZXZpY2VcbiAgICpcbiAgICogVXNlZCBmb3IgYXBwbHlpbmcgYWxsIGRldmljZSBpbmZvcm1hdGlvbiB0byB0aGUgcGFzc2VkIGluc3RhbmNlXG4gICAqIEBwYXJhbSAge0luc3RhbmNlfSBbY29udGV4dF0gQSBjb21wb25lbnQncyBpbnN0YW5jZSB0aGF0IHJlcXVpcmVzIHBsYXRmb3JtIGluZm9ybWF0aW9uXG4gICAqL1xuICBiaW5kRGV2aWNlKGNvbnRleHQpIHtcbiAgICBPYmplY3QuYXNzaWduKGNvbnRleHQsIHRoaXMuZGV2aWNlSW5zdHJ1Y3Rpb24pO1xuICB9XG5cbiAgZmluZFJvb3RWaWV3KCkge1xuICAgIGxldCB2aWV3ID0gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdhaS12aWV3JylbMF07XG4gICAgcmV0dXJuIHZpZXcgJiYgdmlldy5hdS5jb250cm9sbGVyLm1vZGVsO1xuICB9XG4gIGZpbmRSb290Um91dGVyVmlldygpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yQWxsKCdyb3V0ZXItdmlldycpWzBdO1xuICB9XG59XG5cblxuLy8gRE8gTk9UIFVTRSEhIVxuLy9cbi8vIEZvciBEZXZlbG9wbWVudCBVc2FnZSBvbmx5XG5leHBvcnQgY2xhc3MgV2luZG93QVBJIHtcbiAgcGxhdGZvcm1DYWxsYmFja3MgPSBuZXcgTWFwKCk7XG4gIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgIGNvbnRyb2xsZXIucHVibGlzaCgncGxhdGZvcm0taW5pdCcsIHtjb250ZXh0OiB0aGlzfSk7XG4gIH1cblxuICBwbGF0Zm9ybUNoYW5nZShjb250ZXh0LCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHRoaXMuY29udHJvbGxlci5kZXZpY2VJbnN0cnVjdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbGxlci5zdWJzY3JpYmUoJ3BsYXRmb3JtLWNoYW5nZWQnLCBjYWxsYmFjayk7XG4gIH1cblxuICBnZXQgcHVibGlzaCgpIHtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sbGVyLnB1Ymxpc2hcbiAgfVxuICBnZXQgc3Vic2NyaWJlKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2xsZXIuc3Vic2NyaWJlXG4gIH1cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
