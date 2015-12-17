/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var __ai = document.aureliaInterface;
  var __tap;

  var queueElements = {};
  var activeElements = {};
  var keyId = 0;
  var ACTIVATED_CLASS = 'activated';

  var InterfaceTapActivator = (function () {
    function InterfaceTapActivator(aureliaInterface) {
      _classCallCheck(this, InterfaceTapActivator);

      __ai = aureliaInterface;
      __tap = __ai.tap;
    }

    _createClass(InterfaceTapActivator, [{
      key: 'start',
      value: function start(e) {
        var hitX = __ai.tap.util.pointerCoord(e).x;
        if (hitX > 0 && hitX < 30) {
          return;
        }

        __ai.requestAnimationFrame(function () {
          if (__ai.scroll && __ai.scroll.isScrolling || __ai.tap.util.requiresNativeClick(e.target)) return;
          var ele = e.target;
          var eleToActivate;

          for (var x = 0; x < 6; x++) {
            if (!ele || ele.nodeType !== 1) break;
            if (eleToActivate && ele.classList && ele.classList.contains('item')) {
              eleToActivate = ele;
              break;
            }
            if (ele.tagName == 'A' || ele.tagName == 'BUTTON' || ele.hasAttribute('ng-click')) {
              eleToActivate = ele;
              break;
            }
            if (ele.classList.contains('button')) {
              eleToActivate = ele;
              break;
            }

            if (ele.tagName == 'ION-CONTENT' || ele.classList && ele.classList.contains('pane') || ele.tagName == 'BODY') {
              break;
            }
            ele = ele.parentElement;
          }

          if (eleToActivate) {
            queueElements[keyId] = eleToActivate;

            __ai.requestAnimationFrame(activateElements);

            keyId = keyId > 29 ? 0 : keyId + 1;
          }
        });
      }
    }, {
      key: 'end',
      value: function end() {
        setTimeout(clear, 200);
      }
    }]);

    return InterfaceTapActivator;
  })();

  exports.InterfaceTapActivator = InterfaceTapActivator;

  function clear() {
    queueElements = {};

    __ai.requestAnimationFrame(deactivateElements);
  }

  function activateElements() {
    for (var key in queueElements) {
      if (queueElements[key]) {
        queueElements[key].classList.add(ACTIVATED_CLASS);
        activeElements[key] = queueElements[key];
      }
    }
    queueElements = {};
  }

  function deactivateElements() {
    if (__ai.transition && __ai.transition.isActive) {
      setTimeout(deactivateElements, 400);
      return;
    }

    for (var key in activeElements) {
      if (activeElements[key]) {
        activeElements[key].classList.remove(ACTIVATED_CLASS);
        delete activeElements[key];
      }
    }
  }
});
//# sourceMappingURL=data:application/json;base64,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LENBQUM7T0FDeEI7OztXQXREVSxxQkFBcUI7Ozs7O0FBMkRsQyxXQUFTLEtBQUssR0FBRztBQUVmLGlCQUFhLEdBQUcsRUFBRSxDQUFDOztBQUduQixRQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQUMsQ0FBQztHQUNoRDs7QUFFRCxXQUFTLGdCQUFnQixHQUFHO0FBRTFCLFNBQUssSUFBSSxHQUFHLElBQUksYUFBYSxFQUFFO0FBQzdCLFVBQUksYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUFFO0FBQ3RCLHFCQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUNsRCxzQkFBYyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztPQUMxQztLQUNGO0FBQ0QsaUJBQWEsR0FBRyxFQUFFLENBQUM7R0FDcEI7O0FBRUQsV0FBUyxrQkFBa0IsR0FBRztBQUM1QixRQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUU7QUFDL0MsZ0JBQVUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNwQyxhQUFPO0tBQ1I7O0FBRUQsU0FBSyxJQUFJLEdBQUcsSUFBSSxjQUFjLEVBQUU7QUFDOUIsVUFBSSxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7QUFDdkIsc0JBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBQ3RELGVBQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQzVCO0tBQ0Y7R0FDRiIsImZpbGUiOiJzdXBwb3J0L3RhcC1hY3RpdmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19haSA9IGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2U7XG52YXIgX190YXA7XG5cbnZhciBxdWV1ZUVsZW1lbnRzID0ge307ICAgLy8gZWxlbWVudHMgdGhhdCBzaG91bGQgZ2V0IGFuIGFjdGl2ZSBzdGF0ZSBpbiBYWCBtaWxsaXNlY29uZHNcbnZhciBhY3RpdmVFbGVtZW50cyA9IHt9OyAgLy8gZWxlbWVudHMgdGhhdCBhcmUgY3VycmVudGx5IGFjdGl2ZVxudmFyIGtleUlkID0gMDsgICAgICAgICAgICAvLyBhIGNvdW50ZXIgZm9yIHVuaXF1ZSBrZXlzIGZvciB0aGUgYWJvdmUgb2plY3RzXG52YXIgQUNUSVZBVEVEX0NMQVNTID0gJ2FjdGl2YXRlZCc7XG5cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVRhcEFjdGl2YXRvciB7XG4gIGNvbnN0cnVjdG9yKGF1cmVsaWFJbnRlcmZhY2UpIHtcbiAgICBfX2FpID0gYXVyZWxpYUludGVyZmFjZTtcbiAgICBfX3RhcCA9IF9fYWkudGFwO1xuICB9XG4gIHN0YXJ0KGUpIHtcbiAgICB2YXIgaGl0WCA9IF9fYWkudGFwLnV0aWwucG9pbnRlckNvb3JkKGUpLng7XG4gICAgaWYgKGhpdFggPiAwICYmIGhpdFggPCAzMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIHdoZW4gYW4gZWxlbWVudCBpcyB0b3VjaGVkL2NsaWNrZWQsIGl0IGNsaW1icyB1cCBhIGZld1xuICAgIC8vIHBhcmVudHMgdG8gc2VlIGlmIGl0IGlzIGFuIC5pdGVtIG9yIC5idXR0b24gZWxlbWVudFxuICAgIF9fYWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKChfX2FpLnNjcm9sbCAmJiBfX2FpLnNjcm9sbC5pc1Njcm9sbGluZykgfHwgX19haS50YXAudXRpbC5yZXF1aXJlc05hdGl2ZUNsaWNrKGUudGFyZ2V0KSkgcmV0dXJuO1xuICAgICAgdmFyIGVsZSA9IGUudGFyZ2V0O1xuICAgICAgdmFyIGVsZVRvQWN0aXZhdGU7XG5cbiAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNjsgeCsrKSB7XG4gICAgICAgIGlmICghZWxlIHx8IGVsZS5ub2RlVHlwZSAhPT0gMSkgYnJlYWs7XG4gICAgICAgIGlmIChlbGVUb0FjdGl2YXRlICYmIGVsZS5jbGFzc0xpc3QgJiYgZWxlLmNsYXNzTGlzdC5jb250YWlucygnaXRlbScpKSB7XG4gICAgICAgICAgZWxlVG9BY3RpdmF0ZSA9IGVsZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZWxlLnRhZ05hbWUgPT0gJ0EnIHx8IGVsZS50YWdOYW1lID09ICdCVVRUT04nIHx8IGVsZS5oYXNBdHRyaWJ1dGUoJ25nLWNsaWNrJykpIHtcbiAgICAgICAgICBlbGVUb0FjdGl2YXRlID0gZWxlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdidXR0b24nKSkge1xuICAgICAgICAgIGVsZVRvQWN0aXZhdGUgPSBlbGU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbm8gc2Vuc2UgY2xpbWJpbmcgcGFzdCB0aGVzZVxuICAgICAgICBpZiAoZWxlLnRhZ05hbWUgPT0gJ0lPTi1DT05URU5UJyB8fCAoZWxlLmNsYXNzTGlzdCAmJiBlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdwYW5lJykpIHx8IGVsZS50YWdOYW1lID09ICdCT0RZJykge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGVsZSA9IGVsZS5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuXG4gICAgICBpZiAoZWxlVG9BY3RpdmF0ZSkge1xuICAgICAgICAvLyBxdWV1ZSB0aGF0IHRoaXMgZWxlbWVudCBzaG91bGQgYmUgc2V0IHRvIGFjdGl2ZVxuICAgICAgICBxdWV1ZUVsZW1lbnRzW2tleUlkXSA9IGVsZVRvQWN0aXZhdGU7XG5cbiAgICAgICAgLy8gb24gdGhlIG5leHQgZnJhbWUsIHNldCB0aGUgcXVldWVkIGVsZW1lbnRzIHRvIGFjdGl2ZVxuICAgICAgICBfX2FpLnJlcXVlc3RBbmltYXRpb25GcmFtZShhY3RpdmF0ZUVsZW1lbnRzKTtcblxuICAgICAgICBrZXlJZCA9IChrZXlJZCA+IDI5ID8gMCA6IGtleUlkICsgMSk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuICBlbmQoKSB7XG4gICAgLy8gY2xlYXIgb3V0IGFueSBhY3RpdmUvcXVldWVkIGVsZW1lbnRzIGFmdGVyIFhYIG1pbGxpc2Vjb25kc1xuICAgIHNldFRpbWVvdXQoY2xlYXIsIDIwMCk7XG4gIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNsZWFyKCkge1xuICAvLyBjbGVhciBvdXQgYW55IGVsZW1lbnRzIHRoYXQgYXJlIHF1ZXVlZCB0byBiZSBzZXQgdG8gYWN0aXZlXG4gIHF1ZXVlRWxlbWVudHMgPSB7fTtcblxuICAvLyBpbiB0aGUgbmV4dCBmcmFtZSwgcmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3MgZnJvbSBhbGwgYWN0aXZlIGVsZW1lbnRzXG4gIF9fYWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRlYWN0aXZhdGVFbGVtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGFjdGl2YXRlRWxlbWVudHMoKSB7XG4gIC8vIGFjdGl2YXRlIGFsbCBlbGVtZW50cyBpbiB0aGUgcXVldWVcbiAgZm9yICh2YXIga2V5IGluIHF1ZXVlRWxlbWVudHMpIHtcbiAgICBpZiAocXVldWVFbGVtZW50c1trZXldKSB7XG4gICAgICBxdWV1ZUVsZW1lbnRzW2tleV0uY2xhc3NMaXN0LmFkZChBQ1RJVkFURURfQ0xBU1MpO1xuICAgICAgYWN0aXZlRWxlbWVudHNba2V5XSA9IHF1ZXVlRWxlbWVudHNba2V5XTtcbiAgICB9XG4gIH1cbiAgcXVldWVFbGVtZW50cyA9IHt9O1xufVxuXG5mdW5jdGlvbiBkZWFjdGl2YXRlRWxlbWVudHMoKSB7XG4gIGlmIChfX2FpLnRyYW5zaXRpb24gJiYgX19haS50cmFuc2l0aW9uLmlzQWN0aXZlKSB7XG4gICAgc2V0VGltZW91dChkZWFjdGl2YXRlRWxlbWVudHMsIDQwMCk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGFjdGl2ZUVsZW1lbnRzKSB7XG4gICAgaWYgKGFjdGl2ZUVsZW1lbnRzW2tleV0pIHtcbiAgICAgIGFjdGl2ZUVsZW1lbnRzW2tleV0uY2xhc3NMaXN0LnJlbW92ZShBQ1RJVkFURURfQ0xBU1MpO1xuICAgICAgZGVsZXRlIGFjdGl2ZUVsZW1lbnRzW2tleV07XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
