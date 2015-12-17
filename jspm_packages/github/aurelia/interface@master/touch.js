/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', './AITouch'], function (exports, _aureliaFramework, _aureliaPal, _AITouch) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TouchAttribute = (function () {
    function TouchAttribute(element, touch) {
      _classCallCheck(this, _TouchAttribute);

      element.style.touchAction = 'auto';
      this.element = element;
      this._control = touch.touchControl(element);

      this._control.add(_AITouch.AITouch.Tap({
        event: 'touch',
        taps: 1
      }));
    }

    _createClass(TouchAttribute, [{
      key: 'bind',
      value: function bind() {
        if (this.value) {
          this._control.on('touch', this.value);
        }
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        this._control.destroy();
      }
    }]);

    var _TouchAttribute = TouchAttribute;
    TouchAttribute = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _AITouch.AITouch)(TouchAttribute) || TouchAttribute;
    TouchAttribute = (0, _aureliaFramework.customAttribute)('touch')(TouchAttribute) || TouchAttribute;
    return TouchAttribute;
  })();

  exports.TouchAttribute = TouchAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BTWEsY0FBYztBQUVkLGFBRkEsY0FBYyxDQUViLE9BQU8sRUFBRSxLQUFLLEVBQUU7OztBQUMxQixhQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUM7QUFDbkMsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU1QyxVQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxTQVhkLE9BQU8sQ0FXZSxHQUFHLENBQUM7QUFDNUIsYUFBSyxFQUFFLE9BQU87QUFDZCxZQUFJLEVBQUUsQ0FBQztPQUNSLENBQUMsQ0FBQyxDQUFDO0tBQ0w7O2lCQVhVLGNBQWM7O2FBYXJCLGdCQUFHO0FBQ0wsWUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ2QsY0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztPQUNGOzs7YUFFSyxrQkFBRztBQUNQLFlBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7T0FDekI7OzswQkFyQlUsY0FBYztBQUFkLGtCQUFjLEdBRDFCLHNCQUx3QixNQUFNLEVBS3ZCLFlBSkEsR0FBRyxDQUlDLE9BQU8sV0FIWCxPQUFPLENBR2MsQ0FDaEIsY0FBYyxLQUFkLGNBQWM7QUFBZCxrQkFBYyxHQUYxQixzQkFKTyxlQUFlLEVBSU4sT0FBTyxDQUFDLENBRVosY0FBYyxLQUFkLGNBQWM7V0FBZCxjQUFjIiwiZmlsZSI6InRvdWNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7QUlUb3VjaH0gZnJvbSAnLi9BSVRvdWNoJztcblxuQGN1c3RvbUF0dHJpYnV0ZSgndG91Y2gnKVxuQGluamVjdChET00uRWxlbWVudCwgQUlUb3VjaClcbmV4cG9ydCBjbGFzcyBUb3VjaEF0dHJpYnV0ZSB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgdG91Y2gpIHtcbiAgICBlbGVtZW50LnN0eWxlLnRvdWNoQWN0aW9uID0gJ2F1dG8nO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5fY29udHJvbCA9IHRvdWNoLnRvdWNoQ29udHJvbChlbGVtZW50KTtcblxuICAgIHRoaXMuX2NvbnRyb2wuYWRkKEFJVG91Y2guVGFwKHtcbiAgICAgIGV2ZW50OiAndG91Y2gnLFxuICAgICAgdGFwczogMVxuICAgIH0pKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuX2NvbnRyb2wub24oJ3RvdWNoJywgdGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuX2NvbnRyb2wuZGVzdHJveSgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
