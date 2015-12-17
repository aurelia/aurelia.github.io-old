/* */ 
define(['exports', 'aurelia-interface-platforms', 'aurelia-pal'], function (exports, _aureliaInterfacePlatforms, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.onClick = onClick;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var clickEvent = _aureliaInterfacePlatforms.device.isHandHeld ? 'touchstart' : 'click';

  var EventDetection = {
    detected: false,
    clickEvent: 'click',
    pending: [],
    detect: function detect() {
      if (this.detected) return;
      this.detected = true;
      this.watchInitialClickEvent();
    },
    watchInitialClickEvent: function watchInitialClickEvent() {}
  };

  exports.EventDetection = EventDetection;
  function bindEventHandler(eventName, element, bubble) {
    var eventInstance = { unbind: unbind, bind: bind, onEventHandler: onEventHandler, handler: handler };

    return eventInstance;

    function handler() {
      eventInstance.unbind();
    };

    function bind(_handler) {
      eventInstance.handler = _handler;
      eventInstance.isBound = true;
      element.addEventListener(eventName, onEventHandler, bubble);
    }

    function unbind() {
      eventInstance.isBound = false;
      element.removeEventListener(eventName, onEventHandler, bubble);
    }

    function onEventHandler($event) {
      eventInstance.handler($event);
    }
  }

  _aureliaInterfacePlatforms.support.ontap = function (element, bubble) {
    if (element instanceof _aureliaPal.DOM.Element) {
      element.style.touchAction = 'none';
    }
    var eventInstance = { bind: bind, unbind: unbind, onEventHandler: onEventHandler };
    return eventInstance;

    function handler() {
      eventInstance.unbind();
    }
    function bind(handler) {
      eventInstance.handler = handler;
      eventInstance.isBound = true;
      element.addEventListener(EventDetection.clickEvent, onEventHandler, bubble);
      return eventInstance;
    }
    function unbind() {
      eventInstance.isBound = false;
      element.removeEventListener(EventDetection.clickEvent, onEventHandler, bubble);
      return eventInstance;
    }
    function onEventHandler($event) {
      eventInstance.handler($event);
    }
  };

  _aureliaInterfacePlatforms.support.onclick = function (element, bubble) {
    return bindEventHandler('click', element, bubble);
  };

  _aureliaInterfacePlatforms.support.ontouch = function (element, bubble) {
    return bindEventHandler('touchstart', element, bubble);
  };

  var documentClick = _aureliaInterfacePlatforms.support.ontap(document, true);
  documentClick.bind(function (e) {
    console.log('tapped', e.type);
    documentClick.unbind();
  });

  var EventHandlers = (function () {
    _createClass(EventHandlers, null, [{
      key: 'on',
      value: function on(element) {
        return new EventHandlers(element);
      }
    }]);

    function EventHandlers(element) {
      _classCallCheck(this, EventHandlers);

      this.element = element;
    }

    _createClass(EventHandlers, [{
      key: '_event',
      value: function _event(name, bubble, _handler) {
        var element = this.element;
        return {
          bind: function bind() {
            element.addEventListener(name, _handler, bubble);
          },
          unbind: function unbind() {
            element.removeEventListener(name, _handler, bubble);
          }
        };
      }
    }, {
      key: 'click',
      value: function click(cb, bubble) {
        return this._event(clickEvent, bubble, cb);
      }
    }]);

    return EventHandlers;
  })();

  exports.EventHandlers = EventHandlers;

  function onClick(element, bubble) {
    var _resolve = function _resolve() {};

    var _event = { bind: bind, unbind: unbind };
    return _event;

    function bind() {
      element.addEventListener(clickEvent, _handler, bubble);
      return new Promise(function (resolve) {
        _resolve = resolve;
      });
    }

    function unbind() {
      element.removeEventListener(clickEvent, _handler, bubble);
    }

    function _handler(event) {
      _resolve(event);
    }
  }
});
//# sourceMappingURL=data:application/json;base64,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LENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztXQUNyRDtTQUNGLENBQUM7T0FDSDs7O2FBRUksZUFBQyxFQUFFLEVBQUUsTUFBTSxFQUFFO0FBQ2hCLGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDO09BQzVDOzs7V0F0QlUsYUFBYTs7Ozs7QUF5Qm5CLFdBQVMsT0FBTyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDdkMsUUFBSSxRQUFRLEdBQUcsb0JBQVcsRUFBRSxDQUFBOztBQUU1QixRQUFJLE1BQU0sR0FBRyxFQUFDLElBQUksRUFBSixJQUFJLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBQyxDQUFDO0FBQzVCLFdBQU8sTUFBTSxDQUFDOztBQUVkLGFBQVMsSUFBSSxHQUFHO0FBQ2QsYUFBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkQsYUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM1QixnQkFBUSxHQUFHLE9BQU8sQ0FBQztPQUNwQixDQUFDLENBQUM7S0FDSjs7QUFFRCxhQUFTLE1BQU0sR0FBRztBQUNoQixhQUFPLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUMzRDs7QUFFRCxhQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUU7QUFDdkIsY0FBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2pCO0dBQ0YiLCJmaWxlIjoidXRpbC9ldmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2RldmljZSwgc3VwcG9ydCwgYnJvd3Nlcn0gZnJvbSAnYXVyZWxpYS1pbnRlcmZhY2UtcGxhdGZvcm1zJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5sZXQgY2xpY2tFdmVudCA9IGRldmljZS5pc0hhbmRIZWxkID8gJ3RvdWNoc3RhcnQnIDogJ2NsaWNrJztcblxuZXhwb3J0IGxldCBFdmVudERldGVjdGlvbiA9IHtcbiAgZGV0ZWN0ZWQ6IGZhbHNlLFxuICBjbGlja0V2ZW50OiAnY2xpY2snLFxuICBwZW5kaW5nOiBbXSxcbiAgZGV0ZWN0KCkge1xuICAgIGlmICh0aGlzLmRldGVjdGVkKSByZXR1cm47XG4gICAgdGhpcy5kZXRlY3RlZCA9IHRydWU7XG4gICAgdGhpcy53YXRjaEluaXRpYWxDbGlja0V2ZW50KCk7XG4gIH0sXG4gIHdhdGNoSW5pdGlhbENsaWNrRXZlbnQoKSB7XG5cblxuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmRFdmVudEhhbmRsZXIoZXZlbnROYW1lLCBlbGVtZW50LCBidWJibGUpIHtcbiAgbGV0IGV2ZW50SW5zdGFuY2UgPSB7dW5iaW5kLCBiaW5kLCBvbkV2ZW50SGFuZGxlciwgaGFuZGxlcn07XG5cbiAgcmV0dXJuIGV2ZW50SW5zdGFuY2U7XG5cbiAgZnVuY3Rpb24gaGFuZGxlcigpIHtldmVudEluc3RhbmNlLnVuYmluZCgpfTtcblxuICBmdW5jdGlvbiBiaW5kKF9oYW5kbGVyKSB7XG4gICAgZXZlbnRJbnN0YW5jZS5oYW5kbGVyID0gX2hhbmRsZXI7XG4gICAgZXZlbnRJbnN0YW5jZS5pc0JvdW5kID0gdHJ1ZTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBvbkV2ZW50SGFuZGxlciwgYnViYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZCgpe1xuICAgIGV2ZW50SW5zdGFuY2UuaXNCb3VuZCA9IGZhbHNlO1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIG9uRXZlbnRIYW5kbGVyLCBidWJibGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25FdmVudEhhbmRsZXIoJGV2ZW50KSB7XG4gICAgZXZlbnRJbnN0YW5jZS5oYW5kbGVyKCRldmVudCk7XG4gIH1cbn1cblxuc3VwcG9ydC5vbnRhcCA9IGZ1bmN0aW9uKGVsZW1lbnQsIGJ1YmJsZSkge1xuICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIERPTS5FbGVtZW50KSB7XG4gICAgZWxlbWVudC5zdHlsZS50b3VjaEFjdGlvbiA9ICdub25lJztcbiAgfVxuICBsZXQgZXZlbnRJbnN0YW5jZSA9IHtiaW5kLCB1bmJpbmQsIG9uRXZlbnRIYW5kbGVyfVxuICByZXR1cm4gZXZlbnRJbnN0YW5jZTtcblxuICBmdW5jdGlvbiBoYW5kbGVyKCl7ZXZlbnRJbnN0YW5jZS51bmJpbmQoKX1cbiAgZnVuY3Rpb24gYmluZChoYW5kbGVyKSB7XG4gICAgZXZlbnRJbnN0YW5jZS5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICBldmVudEluc3RhbmNlLmlzQm91bmQgPSB0cnVlO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihFdmVudERldGVjdGlvbi5jbGlja0V2ZW50LCBvbkV2ZW50SGFuZGxlciwgYnViYmxlKTtcbiAgICByZXR1cm4gZXZlbnRJbnN0YW5jZTtcbiAgfVxuICBmdW5jdGlvbiB1bmJpbmQoKSB7XG4gICAgZXZlbnRJbnN0YW5jZS5pc0JvdW5kID0gZmFsc2U7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKEV2ZW50RGV0ZWN0aW9uLmNsaWNrRXZlbnQsIG9uRXZlbnRIYW5kbGVyLCBidWJibGUpO1xuICAgIHJldHVybiBldmVudEluc3RhbmNlO1xuICB9XG4gIGZ1bmN0aW9uIG9uRXZlbnRIYW5kbGVyKCRldmVudCkge1xuICAgIGV2ZW50SW5zdGFuY2UuaGFuZGxlcigkZXZlbnQpO1xuICB9XG59XG5cbnN1cHBvcnQub25jbGljayA9IGZ1bmN0aW9uKGVsZW1lbnQsIGJ1YmJsZSkge1xuICByZXR1cm4gYmluZEV2ZW50SGFuZGxlcignY2xpY2snLCBlbGVtZW50LCBidWJibGUpO1xufVxuXG5zdXBwb3J0Lm9udG91Y2ggPSBmdW5jdGlvbihlbGVtZW50LCBidWJibGUpIHtcbiAgcmV0dXJuIGJpbmRFdmVudEhhbmRsZXIoJ3RvdWNoc3RhcnQnLCBlbGVtZW50LCBidWJibGUpO1xufVxuXG5sZXQgZG9jdW1lbnRDbGljayA9IHN1cHBvcnQub250YXAoZG9jdW1lbnQsIHRydWUpO1xuZG9jdW1lbnRDbGljay5iaW5kKChlKT0+IHtcbiAgY29uc29sZS5sb2coJ3RhcHBlZCcsIGUudHlwZSk7XG4gIGRvY3VtZW50Q2xpY2sudW5iaW5kKCk7XG59KVxuXG5leHBvcnQgY2xhc3MgRXZlbnRIYW5kbGVycyB7XG5cbiAgc3RhdGljIG9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gbmV3IEV2ZW50SGFuZGxlcnMoZWxlbWVudCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7dGhpcy5lbGVtZW50ID0gZWxlbWVudH1cblxuICBfZXZlbnQobmFtZSwgYnViYmxlLCBfaGFuZGxlcikge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIHJldHVybiB7XG4gICAgICBiaW5kKCkge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgX2hhbmRsZXIsIGJ1YmJsZSk7XG4gICAgICB9LFxuICAgICAgdW5iaW5kKCkge1xuICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgX2hhbmRsZXIsIGJ1YmJsZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNsaWNrKGNiLCBidWJibGUpIHtcbiAgICByZXR1cm4gdGhpcy5fZXZlbnQoY2xpY2tFdmVudCwgYnViYmxlLCBjYik7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uQ2xpY2soZWxlbWVudCwgYnViYmxlKSB7XG4gIGxldCBfcmVzb2x2ZSA9IGZ1bmN0aW9uKCkge31cblxuICBsZXQgX2V2ZW50ID0ge2JpbmQsIHVuYmluZH07XG4gIHJldHVybiBfZXZlbnQ7XG5cbiAgZnVuY3Rpb24gYmluZCgpIHtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgX2hhbmRsZXIsIGJ1YmJsZSk7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgX3Jlc29sdmUgPSByZXNvbHZlO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kKCkge1xuICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCBfaGFuZGxlciwgYnViYmxlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9oYW5kbGVyKGV2ZW50KSB7XG4gICAgX3Jlc29sdmUoZXZlbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
