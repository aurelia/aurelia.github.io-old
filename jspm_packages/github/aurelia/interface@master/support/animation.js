/* */ 
define(['exports', '../config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var animationConfig = _config.InterfaceConfig.animationConfig;
  var isDomReady = document.readyState === 'complete' || document.readyState === 'interactive';
  var readyCallbacks = [];
  var __ai = document.aureliaInterface;

  var InterfaceAnimationSupport = (function () {
    function InterfaceAnimationSupport(aureliaInterface) {
      _classCallCheck(this, InterfaceAnimationSupport);

      __ai = aureliaInterface;
      __ai.requestAnimationFrame = this.requestAnimationFrame;
      __ai.cancelAnimationFrame = this.cancelAnimationFrame;
      __ai.animationFrameThrottle = this.animationFrameThrottle;
    }

    _createClass(InterfaceAnimationSupport, [{
      key: 'requestAnimationFrame',
      value: function requestAnimationFrame(cb) {
        return animationConfig.REQUEST_ANIM_FRAME(cb);
      }
    }, {
      key: 'cancelAnimationFrame',
      value: function cancelAnimationFrame(id) {
        animationConfig.CANCEL_ANIM_FRAME(id);
      }
    }, {
      key: 'animationFrameThrottle',
      value: function animationFrameThrottle(cb) {
        var args, isQueued, context;
        return function () {
          args = arguments;
          context = this;
          if (!isQueued) {
            isQueued = true;
            __ai.requestAnimationFrame(function () {
              cb.apply(context, args);
              isQueued = false;
            });
          }
        };
      }
    }, {
      key: 'contains',
      value: function contains(parentNode, otherNode) {
        var current = otherNode;
        while (current) {
          if (current === parentNode) return true;
          current = current.parentNode;
        }
      }
    }, {
      key: 'getElementPOS',
      value: function getElementPOS(element) {
        var top = element.offsetTop;
        var left = element.offsetLeft;
        return { top: top, left: left };
      }
    }, {
      key: 'swapNodes',
      value: function swapNodes(src, dest) {
        dest.parentNode.insertBefore(src, dest);
      }
    }, {
      key: 'elementIsDescendant',
      value: function elementIsDescendant(el, parent, stopAt) {
        var current = el;
        do {
          if (current === parent) return true;
          current = current.parentNode;
        } while (current && current !== stopAt);
        return false;
      }
    }, {
      key: 'getParentWithClass',
      value: function getParentWithClass(e, className, depth) {
        depth = depth || 10;
        while (e.parentNode && depth--) {
          if (e.parentNode.classList && e.parentNode.classList.contains(className)) {
            return e.parentNode;
          }
          e = e.parentNode;
        }
        return null;
      }
    }, {
      key: 'getParentOrSelfWithClass',
      value: function getParentOrSelfWithClass(e, className, depth) {
        depth = depth || 10;
        while (e && depth--) {
          if (e.classList && e.classList.contains(className)) {
            return e;
          }
          e = e.parentNode;
        }
        return null;
      }
    }, {
      key: 'rectContains',
      value: function rectContains(x, y, x1, y1, x2, y2) {
        if (x < x1 || x > x2) return false;
        if (y < y1 || y > y2) return false;
        return true;
      }
    }]);

    return InterfaceAnimationSupport;
  })();

  exports.InterfaceAnimationSupport = InterfaceAnimationSupport;
});
//# sourceMappingURL=data:application/json;base64,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cEIsZUFBTyxDQUFDLENBQUMsVUFBVSxJQUFJLEtBQUssRUFBRSxFQUFFO0FBQzlCLGNBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO0FBQ3hFLG1CQUFPLENBQUMsQ0FBQyxVQUFVLENBQUM7V0FDckI7QUFDRCxXQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztTQUNsQjtBQUNELGVBQU8sSUFBSSxDQUFDO09BQ2I7OzthQVV1QixrQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRTtBQUM1QyxhQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztBQUNwQixlQUFPLENBQUMsSUFBSSxLQUFLLEVBQUUsRUFBRTtBQUNuQixjQUFJLENBQUMsQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7QUFDbEQsbUJBQU8sQ0FBQyxDQUFDO1dBQ1Y7QUFDRCxXQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztTQUNsQjtBQUNELGVBQU8sSUFBSSxDQUFDO09BQ2I7OzthQWVXLHNCQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFO0FBQ2pDLFlBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ25DLFlBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQ25DLGVBQU8sSUFBSSxDQUFDO09BQ2I7OztXQW5JVSx5QkFBeUIiLCJmaWxlIjoic3VwcG9ydC9hbmltYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0ludGVyZmFjZUNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJ1xuXG5jb25zdCBhbmltYXRpb25Db25maWcgPSBJbnRlcmZhY2VDb25maWcuYW5pbWF0aW9uQ29uZmlnO1xuY29uc3QgaXNEb21SZWFkeSA9IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScgfHwgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2ludGVyYWN0aXZlJztcbmNvbnN0IHJlYWR5Q2FsbGJhY2tzID0gW107XG52YXIgX19haSA9IGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2U7XG5cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZUFuaW1hdGlvblN1cHBvcnQge1xuICBjb25zdHJ1Y3RvcihhdXJlbGlhSW50ZXJmYWNlKSB7XG4gICAgX19haSA9IGF1cmVsaWFJbnRlcmZhY2U7XG4gICAgX19haS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSB0aGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZTtcbiAgICBfX2FpLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gdGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICBfX2FpLmFuaW1hdGlvbkZyYW1lVGhyb3R0bGUgPSB0aGlzLmFuaW1hdGlvbkZyYW1lVGhyb3R0bGU7XG4gIH1cblxuICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2IpIHtcbiAgICByZXR1cm4gYW5pbWF0aW9uQ29uZmlnLlJFUVVFU1RfQU5JTV9GUkFNRShjYik7XG4gIH1cblxuICBjYW5jZWxBbmltYXRpb25GcmFtZShpZCkge1xuICAgIGFuaW1hdGlvbkNvbmZpZy5DQU5DRUxfQU5JTV9GUkFNRShpZClcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIFByb3RvdHlwZSgpOiBhbmltYXRpb25GcmFtZVRocm90dGxlXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvblxuICAgKiBXaGVuIGdpdmVuIGEgY2FsbGJhY2ssIGlmIHRoYXQgY2FsbGJhY2sgaXMgY2FsbGVkIDEwMCB0aW1lcyBiZXR3ZWVuXG4gICAqIGFuaW1hdGlvbiBmcmFtZXMsIGFkZGluZyBUaHJvdHRsZSB3aWxsIG1ha2UgaXQgb25seSBydW4gdGhlIGxhc3Qgb2ZcbiAgICogdGhlIDEwMCBjYWxscy5cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIFRoZSBwYXNzZWQgaW4gY2FsbGJhY2sgd2lsbCByZWNlaXZlIHRoZSBjb250ZXh0IHRoZSByZXR1cm5lZCBmdW5jdGlvbiBpc1xuICAgKiBjYWxsZWQgd2l0aC5cbiAgICogQHBhcmFtICAge2Z1bmN0aW9ufSBbY2FsbGJhY2tdIHxBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgYmUgdGhyb3R0bGVkIHRvIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgKiBAcmV0dXJucyB7ZnVuY3Rpb259ICAgICAgICAgICAgfEEgZnVuY3Rpb24gd2hpY2ggd2lsbCB0aGVuIGNhbGwgdGhlIHBhc3NlZCBpbiBjYWxsYmFjay5cbiAgICovXG4gIGFuaW1hdGlvbkZyYW1lVGhyb3R0bGUoY2IpIHtcbiAgICB2YXIgYXJncywgaXNRdWV1ZWQsIGNvbnRleHQ7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgICAgaWYgKCFpc1F1ZXVlZCkge1xuICAgICAgICBpc1F1ZXVlZCA9IHRydWU7XG4gICAgICAgIF9fYWkucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGNiLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgICAgICAgIGlzUXVldWVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICBjb250YWlucyhwYXJlbnROb2RlLCBvdGhlck5vZGUpIHtcbiAgICB2YXIgY3VycmVudCA9IG90aGVyTm9kZTtcbiAgICB3aGlsZSAoY3VycmVudCkge1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHBhcmVudE5vZGUpIHJldHVybiB0cnVlO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICB9XG4gIH1cblxuICBnZXRFbGVtZW50UE9TKGVsZW1lbnQpIHtcbiAgICBsZXQgdG9wID0gZWxlbWVudC5vZmZzZXRUb3A7XG4gICAgbGV0IGxlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgcmV0dXJuIHt0b3AsIGxlZnR9O1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzd2FwTm9kZXMoc3JjLCBkZXN0KSB7XG4gICAgZGVzdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzcmMsIGRlc3QpO1xuICB9XG5cbiAgZWxlbWVudElzRGVzY2VuZGFudChlbCwgcGFyZW50LCBzdG9wQXQpIHtcbiAgICB2YXIgY3VycmVudCA9IGVsO1xuICAgIGRvIHtcbiAgICAgIGlmIChjdXJyZW50ID09PSBwYXJlbnQpIHJldHVybiB0cnVlO1xuICAgICAgY3VycmVudCA9IGN1cnJlbnQucGFyZW50Tm9kZTtcbiAgICB9IHdoaWxlIChjdXJyZW50ICYmIGN1cnJlbnQgIT09IHN0b3BBdCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogUHJvdG90eXBlKCk6IGdldFBhcmVudFdpdGhDbGFzc1xuICAgKlxuICAgKiBAcGFyYW0gICB7RE9NRWxlbWVudH0gW2VsZW1lbnRdXG4gICAqIEBwYXJhbSAgIHtzdHJpbmd9ICAgICBbY2xhc3NOYW1lXVxuICAgKiBAcmV0dXJucyB7RE9NRWxlbWVudH0gICAgICAgICAgICAgfFRoZSBjbG9zZXN0IHBhcmVudCBvZiBlbGVtZW50IG1hdGNoaW5nIHRoZVxuICAgKiBjbGFzc05hbWUsIG9yIG51bGwuXG4gICAqL1xuICBnZXRQYXJlbnRXaXRoQ2xhc3MoZSwgY2xhc3NOYW1lLCBkZXB0aCkge1xuICAgIGRlcHRoID0gZGVwdGggfHwgMTA7XG4gICAgd2hpbGUgKGUucGFyZW50Tm9kZSAmJiBkZXB0aC0tKSB7XG4gICAgICBpZiAoZS5wYXJlbnROb2RlLmNsYXNzTGlzdCAmJiBlLnBhcmVudE5vZGUuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIGUucGFyZW50Tm9kZTtcbiAgICAgIH1cbiAgICAgIGUgPSBlLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIFByb3RvdHlwZSgpOiBnZXRQYXJlbnRPclNlbGZXaXRoQ2xhc3NcbiAgICpcbiAgICogQHBhcmFtICAge0RPTUVsZW1lbnR9IFtlbGVtZW50XVxuICAgKiBAcGFyYW0gICB7c3RyaW5nfSAgICAgW2NsYXNzTmFtZV1cbiAgICogQHJldHVybnMge0RPTUVsZW1lbnR9ICAgICAgICAgICAgIHxUaGUgY2xvc2VzdCBwYXJlbnQgb3Igc2VsZiBtYXRjaGluZyB0aGVcbiAgICogY2xhc3NOYW1lLCBvciBudWxsLlxuICAgKi9cbiAgZ2V0UGFyZW50T3JTZWxmV2l0aENsYXNzKGUsIGNsYXNzTmFtZSwgZGVwdGgpIHtcbiAgICBkZXB0aCA9IGRlcHRoIHx8IDEwO1xuICAgIHdoaWxlIChlICYmIGRlcHRoLS0pIHtcbiAgICAgIGlmIChlLmNsYXNzTGlzdCAmJiBlLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfVxuICAgICAgZSA9IGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBQcm90b3R5cGUoKTogcmVjdENvbnRhaW5zXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSB4MVxuICAgKiBAcGFyYW0ge251bWJlcn0geTFcbiAgICogQHBhcmFtIHtudW1iZXJ9IHgyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB5MlxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciB7eCx5fSBmaXRzIHdpdGhpbiB0aGUgcmVjdGFuZ2xlIGRlZmluZWQgYnlcbiAgICoge3gxLHkxLHgyLHkyfS5cbiAgICovXG4gIHJlY3RDb250YWlucyh4LCB5LCB4MSwgeTEsIHgyLCB5Mikge1xuICAgIGlmICh4IDwgeDEgfHwgeCA+IHgyKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHkgPCB5MSB8fCB5ID4geTIpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
