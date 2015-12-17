System.register(['aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var isTouch, DOM, clickEvent;

  _export('onElementEvent', onElementEvent);

  _export('onDocumentEvent', onDocumentEvent);

  _export('onAnimationEnd', onAnimationEnd);

  _export('onTransitionEnd', onTransitionEnd);

  _export('resolvePromise', resolvePromise);

  _export('doubleTap', doubleTap);

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

  function doubleTap(element, cb) {
    var tapedTwice = false;
    element.addEventListener('touchstart', _handler);

    function _handler(event) {
      if (!tapedTwice) {
        tapedTwice = true;
        setTimeout(function () {
          tapedTwice = false;
        }, 300);
        return false;
      }
      event.preventDefault();
      cb(event);
    }
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
//# sourceMappingURL=data:application/json;base64,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R0FBRyxLQUFLLENBQUM7U0FBRSxFQUFFLEdBQUcsQ0FBRSxDQUFDO0FBQ3RELGVBQU8sS0FBSyxDQUFDO09BQ2Q7QUFDRCxXQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDdkIsUUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ1g7R0FDRjs7OzsyQ0F0RU8sT0FBTzs7d0JBQ1AsR0FBRzs7O0FBRUUsZ0JBQVUsR0FBRyxPQUFPLEdBQUcsWUFBWSxHQUFHLE9BQU8iLCJmaWxlIjoicmVzb3VyY2VzL3V0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzVG91Y2h9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5leHBvcnQgY29uc3QgY2xpY2tFdmVudCA9IGlzVG91Y2ggPyAndG91Y2hzdGFydCcgOiAnY2xpY2snO1xuXG5leHBvcnQgZnVuY3Rpb24gb25FbGVtZW50RXZlbnQoZWxlbWVudCwgZXZlbnROYW1lLCBidWJibGVzKSB7XG4gIGZ1bmN0aW9uIG9uRXZlbnQodHJpZ2dlciwgX2J1YmJsZXMpIHtcbiAgICBidWJibGVzID0gX2J1YmJsZXMgfHwgYnViYmxlcztcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBidWJibGVzKTtcbiAgICAgIHRyaWdnZXIoKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgYnViYmxlcyk7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGlmIChlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCkge1xuICAgIHJldHVybiBvbkV2ZW50O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkRvY3VtZW50RXZlbnQoZXZlbnROYW1lLCBoYW5kbGVyLCBidWJibGVzKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XG4gICAgRE9NLmFkZEV2ZW50TGlzdGVuZXIoY2xpY2tFdmVudCwgaGFuZGxlQ2xpY2tFdmVudCwgdHJ1ZSk7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja0V2ZW50KGUpIHtcbiAgICAgIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykgaGFuZGxlcihlLCBkaXNwb3NlKTtcbiAgICAgIGVsc2UgZGlzcG9zZSgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICBET00ucmVtb3ZlRXZlbnRMaXN0ZW5lcihjbGlja0V2ZW50LCBoYW5kbGVDbGlja0V2ZW50LCB0cnVlKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25BbmltYXRpb25FbmQoZWxlbWVudCwgYnViYmxlcywgdHJpZ2dlcikge1xuICB0cmlnZ2VyID0gdHJpZ2dlciB8fCBidWJibGVzO1xuICBsZXQgX2hhbmRsZXIgPSBvbkVsZW1lbnRFdmVudChlbGVtZW50LCAnYW5pbWF0aW9uZW5kJywgYnViYmxlcyk7XG4gIHJldHVybiB0eXBlb2YgdHJpZ2dlciA9PT0gJ2Z1bmN0aW9uJyA/IF9oYW5kbGVyKHRyaWdnZXIsIGJ1YmJsZXMpIDogX2hhbmRsZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvblRyYW5zaXRpb25FbmQoZWxlbWVudCwgYnViYmxlcywgdHJpZ2dlcikge1xuICB0cmlnZ2VyID0gdHJpZ2dlciB8fCBidWJibGVzO1xuICBsZXQgX2hhbmRsZXIgPSBvbkVsZW1lbnRFdmVudChlbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGJ1YmJsZXMpO1xuICByZXR1cm4gdHlwZW9mIHRyaWdnZXIgPT09ICdmdW5jdGlvbicgPyBfaGFuZGxlcih0cmlnZ2VyLCBidWJibGVzKSA6IF9oYW5kbGVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZVByb21pc2UocHJvbWlzZSwgaGFuZGxlcikge1xuICByZXR1cm4gaGFuZGxlciA/IHByb21pc2UudGhlbihoYW5kbGVyKSA6IHByb21pc2U7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGRvdWJsZVRhcChlbGVtZW50LCBjYikge1xuICBsZXQgdGFwZWRUd2ljZSA9IGZhbHNlO1xuICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBfaGFuZGxlcik7XG5cbiAgZnVuY3Rpb24gX2hhbmRsZXIoZXZlbnQpIHtcbiAgICBpZiAoIXRhcGVkVHdpY2UpIHtcbiAgICAgIHRhcGVkVHdpY2UgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dCggZnVuY3Rpb24oKSB7IHRhcGVkVHdpY2UgPSBmYWxzZTsgfSwgMzAwICk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY2IoZXZlbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
