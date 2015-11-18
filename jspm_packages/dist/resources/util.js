System.register(['aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var isTouch, DOM, clickEvent;

  _export('onElementEvent', onElementEvent);

  _export('onDocumentEvent', onDocumentEvent);

  _export('onAnimationEnd', onAnimationEnd);

  _export('onTransitionEnd', onTransitionEnd);

  _export('resolvePromise', resolvePromise);

  function onElementEvent(element, eventName, bubbles) {
    function onEvent(trigger, _bubbles) {
      bubbles = _bubbles || bubbles;
      return new Promise(function (resolve) {
        element.addEventListener(eventName, handler, bubbles);
        trigger();

        function handler() {
          element.removeEventListener(eventName, handler, bubbles);
          resolve();
        }
      });
    }

    if (element instanceof Element) {
      return onEvent;
    }
  }

  function onDocumentEvent(eventName, handler, bubbles) {
    return new Promise(function (resolve) {
      DOM.addEventListener(clickEvent, handleClickEvent, true);

      function handleClickEvent(e) {
        if (typeof handler === 'function') handler(e, dispose);else dispose();
      }

      function dispose() {
        DOM.removeEventListener(clickEvent, handleClickEvent, true);
        resolve();
      }
    });
  }

  function onAnimationEnd(element, bubbles, trigger) {
    trigger = trigger || bubbles;
    var _handler = onElementEvent(element, 'animationend', bubbles);
    return typeof trigger === 'function' ? _handler(trigger, bubbles) : _handler;
  }

  function onTransitionEnd(element, bubbles, trigger) {
    trigger = trigger || bubbles;
    var _handler = onElementEvent(element, 'transitionend', bubbles);
    return typeof trigger === 'function' ? _handler(trigger, bubbles) : _handler;
  }

  function resolvePromise(promise, handler) {
    return handler ? promise.then(handler) : promise;
  }

  return {
    setters: [function (_aureliaInterfacePlatforms) {
      isTouch = _aureliaInterfacePlatforms.isTouch;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      clickEvent = isTouch ? 'touchstart' : 'click';

      _export('clickEvent', clickEvent);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvQkFHYSxVQUFVOzs7Ozs7Ozs7Ozs7QUFFaEIsV0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUU7QUFDMUQsYUFBUyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUNsQyxhQUFPLEdBQUcsUUFBUSxJQUFJLE9BQU8sQ0FBQztBQUM5QixhQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQzVCLGVBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELGVBQU8sRUFBRSxDQUFDOztBQUVWLGlCQUFTLE9BQU8sR0FBRztBQUNqQixpQkFBTyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDekQsaUJBQU8sRUFBRSxDQUFDO1NBQ1g7T0FDRixDQUFDLENBQUM7S0FDSjs7QUFFRCxRQUFJLE9BQU8sWUFBWSxPQUFPLEVBQUU7QUFDOUIsYUFBTyxPQUFPLENBQUM7S0FDaEI7R0FDRjs7QUFFTSxXQUFTLGVBQWUsQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUMzRCxXQUFPLElBQUksT0FBTyxDQUFFLFVBQUEsT0FBTyxFQUFJO0FBQzdCLFNBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRXpELGVBQVMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFO0FBQzNCLFlBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsS0FDbEQsT0FBTyxFQUFFLENBQUM7T0FDaEI7O0FBRUQsZUFBUyxPQUFPLEdBQUc7QUFDakIsV0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM1RCxlQUFPLEVBQUUsQ0FBQztPQUNYO0tBQ0YsQ0FBQyxDQUFDO0dBQ0o7O0FBRU0sV0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDeEQsV0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUM7QUFDN0IsUUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDaEUsV0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUM7R0FDOUU7O0FBRU0sV0FBUyxlQUFlLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDekQsV0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUM7QUFDN0IsUUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDakUsV0FBTyxPQUFPLE9BQU8sS0FBSyxVQUFVLEdBQUcsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsR0FBRyxRQUFRLENBQUM7R0FDOUU7O0FBRU0sV0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUMvQyxXQUFPLE9BQU8sR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLE9BQU8sQ0FBQztHQUNsRDs7OzsyQ0F0RE8sT0FBTzs7d0JBQ1AsR0FBRzs7O0FBRUUsZ0JBQVUsR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLE9BQU8iLCJmaWxlIjoicmVzb3VyY2VzL3V0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzVG91Y2h9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgY29uc3QgY2xpY2tFdmVudCA9IGlzVG91Y2ggPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBidWJibGVzKSB7XG4gIGZ1bmN0aW9uIG9uRXZlbnQodHJpZ2dlciwgX2J1YmJsZXMpIHtcbiAgICBidWJibGVzID0gX2J1YmJsZXMgfHwgYnViYmxlcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBidWJibGVzKTtcbiAgICAgIHRyaWdnZXIoKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgYnViYmxlcyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgIHJldHVybiBvbkV2ZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50RXZlbnQoZXZlbnROYW1lLCBoYW5kbGVyLCBidWJibGVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XG4gICAgRE9NLmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgaGFuZGxlQ2xpY2tFdmVudCwgdHJ1ZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0V2ZW50KGUpIHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykgaGFuZGxlcihlLCBkaXNwb3NlKTtcbiAgICAgIGVsc2UgZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCBoYW5kbGVDbGlja0V2ZW50LCB0cnVlKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25BbmltYXRpb25FbmQoZWxlbWVudCwgYnViYmxlcywgdHJpZ2dlcikge1xuICB0cmlnZ2VyID0gdHJpZ2dlciB8fCBidWJibGVzO1xuICBsZXQgX2hhbmRsZXIgPSBvbkVsZW1lbnRFdmVudChlbGVtZW50LCAnYW5pbWF0aW9uZW5kJywgYnViYmxlcyk7XG4gIHJldHVybiB0eXBlb2YgdHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJyA/IF9oYW5kbGVyKHRyaWdnZXIsIGJ1YmJsZXMpIDogX2hhbmRsZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZWxlbWVudCwgYnViYmxlcywgdHJpZ2dlcikge1xuICB0cmlnZ2VyID0gdHJpZ2dlciB8fCBidWJibGVzO1xuICBsZXQgX2hhbmRsZXIgPSBvbkVsZW1lbnRFdmVudChlbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGJ1YmJsZXMpO1xuICByZXR1cm4gdHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicgPyBfaGFuZGxlcih0cmlnZ2VyLCBidWJibGVzKSA6IF9oYW5kbGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgaGFuZGxlcikge1xuICByZXR1cm4gaGFuZGxlciA/IHByb21pc2UudGhlbihoYW5kbGVyKSA6IHByb21pc2U7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
