/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-cordova'], function (exports, _aureliaFramework, _aureliaPal, _aureliaCordova) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var PressAttribute = (function () {
    function PressAttribute(element, threeDeeTouch) {
      _classCallCheck(this, _PressAttribute);

      this.element = element;
      this.onTouchStart = this.onTouchStart.bind(this);
      this.threeDeeTouch = threeDeeTouch;
    }

    _createClass(PressAttribute, [{
      key: 'bind',
      value: function bind() {
        this.element.addEventListener('touchstart', this.onTouchStart, true);
        this.listener = this.threeDeeTouch.watchForceTouches(function (result) {
          alert(result.error);
          if (!result.error) {
            alert("force touch % " + result.force);
          }
        });
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        this.element.removeEventListener('touchstart', this.onTouchStart, true);
        if (this.listener && this.listener.dispose) {
          this.listener.dispose();
        }
      }
    }, {
      key: 'onTouchStart',
      value: function onTouchStart(e) {
        var touchPoint = e.touches[0];

        var element = this.element;
        var first = element.firstChild;
        var node = _aureliaPal.DOM.createElement('pressure-point');
        var size = element.clientWidth * 2;

        var x = touchPoint.clientX;
        var y = touchPoint.clientY;
        var top = element.offsetTop;

        if (element.offsetParent) {
          top = top + (element.offsetParent.offsetTop + element.clientHeight);
        }

        y = y - top;

        node.style.left = x + 'px';
        node.style.top = y + 'px';

        element.insertBefore(node, first);
        element.addEventListener('touchend', onTouchEnd);

        function onTouchEnd() {
          element.removeEventListener('touchend', onTouchEnd);
          node.addEventListener('animationend', animationEnd, true);
          node.addEventListener('webkitAnimationEnd', animationEnd, true);
          node.classList.add('au-leave');
        }

        function animationEnd() {
          node.removeEventListener('animationend', animationEnd, true);
          node.removeEventListener('webkitAnimationEnd', animationEnd, true);
        }
      }
    }]);

    var _PressAttribute = PressAttribute;
    PressAttribute = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaCordova.ThreeDeeTouch)(PressAttribute) || PressAttribute;
    PressAttribute = (0, _aureliaFramework.customAttribute)('ai-press')(PressAttribute) || PressAttribute;
    return PressAttribute;
  })();

  exports.PressAttribute = PressAttribute;
});
//# sourceMappingURL=data:application/json;base64,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SSxDQUFDLENBQUM7QUFDaEUsY0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDaEM7O0FBRUQsaUJBQVMsWUFBWSxHQUFHO0FBQ3RCLGNBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzdELGNBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FFcEU7T0FDRjs7OzBCQWpFVSxjQUFjO0FBQWQsa0JBQWMsR0FEMUIsc0JBTmtDLE1BQU0sRUFNakMsWUFMQSxHQUFHLENBS0MsT0FBTyxrQkFKWCxhQUFhLENBSWMsQ0FDdEIsY0FBYyxLQUFkLGNBQWM7QUFBZCxrQkFBYyxHQUYxQixzQkFMTyxlQUFlLEVBS04sVUFBVSxDQUFDLENBRWYsY0FBYyxLQUFkLGNBQWM7V0FBZCxjQUFjIiwiZmlsZSI6InByZXNzdXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge1RocmVlRGVlVG91Y2h9IGZyb20gJ2F1cmVsaWEtY29yZG92YSc7XG5cblxuQGN1c3RvbUF0dHJpYnV0ZSgnYWktcHJlc3MnKVxuQGluamVjdChET00uRWxlbWVudCwgVGhyZWVEZWVUb3VjaClcbmV4cG9ydCBjbGFzcyBQcmVzc0F0dHJpYnV0ZSB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgdGhyZWVEZWVUb3VjaCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5vblRvdWNoU3RhcnQgPSB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpO1xuICAgIHRoaXMudGhyZWVEZWVUb3VjaCA9IHRocmVlRGVlVG91Y2g7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vblRvdWNoU3RhcnQsIHRydWUpO1xuICAgIHRoaXMubGlzdGVuZXIgPSB0aGlzLnRocmVlRGVlVG91Y2gud2F0Y2hGb3JjZVRvdWNoZXMoKHJlc3VsdCk9PiB7XG4gICAgICBhbGVydChyZXN1bHQuZXJyb3IpXG4gICAgICBpZiAoIXJlc3VsdC5lcnJvcikge1xuICAgICAgICBhbGVydChcImZvcmNlIHRvdWNoICUgXCIgKyByZXN1bHQuZm9yY2UpOyAvLyA4NFxuICAgICAgICAvLyBhbGVydChcImZvcmNlIHRvdWNoIHRpbWVzdGFtcCBcIiArIHJlc3VsdC50aW1lc3RhbXApOyAvLyAxNDQ5OTA4NzQ0LjcwNjQxOVxuICAgICAgICAvLyBhbGVydChcImZvcmNlIHRvdWNoIHggY29vcmRpbmF0ZSBcIiArIHJlc3VsdC54KTsgLy8gMjEzXG4gICAgICAgIC8vIGFsZXJ0KFwiZm9yY2UgdG91Y2ggeSBjb29yZGluYXRlIFwiICsgcmVzdWx0LnkpOyAvLyA0MVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uVG91Y2hTdGFydCwgdHJ1ZSk7XG4gICAgaWYgKHRoaXMubGlzdGVuZXIgJiYgdGhpcy5saXN0ZW5lci5kaXNwb3NlKSB7XG4gICAgICB0aGlzLmxpc3RlbmVyLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBvblRvdWNoU3RhcnQoZSkge1xuICAgIGxldCB0b3VjaFBvaW50ID0gZS50b3VjaGVzWzBdO1xuXG5cbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICBsZXQgZmlyc3QgICA9IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICBsZXQgbm9kZSAgICA9IERPTS5jcmVhdGVFbGVtZW50KCdwcmVzc3VyZS1wb2ludCcpO1xuICAgIGxldCBzaXplICAgID0gKGVsZW1lbnQuY2xpZW50V2lkdGggKiAyKTtcblxuICAgIGxldCB4ID0gdG91Y2hQb2ludC5jbGllbnRYO1xuICAgIGxldCB5ID0gdG91Y2hQb2ludC5jbGllbnRZO1xuICAgIGxldCB0b3AgPSBlbGVtZW50Lm9mZnNldFRvcDtcblxuICAgIGlmIChlbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgdG9wID0gdG9wICsgKGVsZW1lbnQub2Zmc2V0UGFyZW50Lm9mZnNldFRvcCArIGVsZW1lbnQuY2xpZW50SGVpZ2h0KTtcbiAgICB9XG5cbiAgICB5ID0gKHkgLSB0b3ApO1xuXG4gICAgbm9kZS5zdHlsZS5sZWZ0ID0geCArICdweCc7XG4gICAgbm9kZS5zdHlsZS50b3AgPSB5ICsgJ3B4JztcblxuICAgIGVsZW1lbnQuaW5zZXJ0QmVmb3JlKG5vZGUsIGZpcnN0KTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG5cbiAgICBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xuICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBhbmltYXRpb25FbmQsIHRydWUpO1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCd3ZWJraXRBbmltYXRpb25FbmQnLCBhbmltYXRpb25FbmQsIHRydWUpO1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdhdS1sZWF2ZScpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFuaW1hdGlvbkVuZCgpIHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgYW5pbWF0aW9uRW5kLCB0cnVlKTtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0QW5pbWF0aW9uRW5kJywgYW5pbWF0aW9uRW5kLCB0cnVlKTtcbiAgICAgIC8vIGVsZW1lbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
