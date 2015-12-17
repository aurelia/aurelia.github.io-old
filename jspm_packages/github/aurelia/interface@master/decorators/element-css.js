/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.elementCss = elementCss;
  exports.elementTransitions = elementTransitions;
  exports.elementAnimations = elementAnimations;

  function elementCss(target) {
    function deco(Target) {
      Target.prototype.css = function (element, options) {
        if (!options) {
          options = element;
          element = this.element;
        }
        styleElement(element, options);
      };
      return Target;
    }
    return target && target.constructor ? deco(target) : deco;
  }

  function elementTransitions(target) {
    function deco(Target) {
      Target.prototype.transition = function (element, options) {
        if (!options) {
          options = element;
          element = this.element;
        }
        return onStyleElement(element, options, 'transitionend');
      };
      return Target;
    }
    return target && target.constructor ? deco(target) : deco;
  }

  function elementAnimations(target) {
    function deco(target) {
      Target.prototype.animate = function (element, options) {
        if (!options) {
          options = element;
          element = this.element;
        }
        return onStyleElement(element, options, 'animationend');
      };
      return Target;
    }
    return target && target.constructor ? deco(target) : deco;
  }

  function onStyleElement(element, options, eventName) {
    return new Promise(function (resolve) {
      element.addEventListener(eventName, _handler);

      styleElement(element, options);
      function _handler($event) {
        element.removeEventListener(eventName, _handler);
        resolve($event);
      }
    });
  }

  function styleElement(element, options) {
    Object.assign(element.style, options);
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY29yYXRvcnMvZWxlbWVudC1jc3MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNPLFdBQVMsVUFBVSxDQUFDLE1BQU0sRUFBRTtBQUNqQyxhQUFTLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDcEIsWUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ2hELFlBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixpQkFBTyxHQUFHLE9BQU8sQ0FBQztBQUNsQixpQkFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDeEI7QUFDRCxvQkFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQztPQUNoQyxDQUFBO0FBQ0QsYUFBTyxNQUFNLENBQUM7S0FDZjtBQUNELFdBQU8sQUFBQyxNQUFNLElBQUksTUFBTSxDQUFDLFdBQVcsR0FBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDO0dBQzdEOztBQUVNLFdBQVMsa0JBQWtCLENBQUMsTUFBTSxFQUFFO0FBQ3pDLGFBQVMsSUFBSSxDQUFDLE1BQU0sRUFBRTtBQUNwQixZQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxVQUFTLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDdkQsWUFBSSxDQUFDLE9BQU8sRUFBRTtBQUNaLGlCQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ2xCLGlCQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztTQUN4QjtBQUNELGVBQU8sY0FBYyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7T0FDMUQsQ0FBQTtBQUNELGFBQU8sTUFBTSxDQUFDO0tBQ2Y7QUFDRCxXQUFPLEFBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxXQUFXLEdBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztHQUM3RDs7QUFFTSxXQUFTLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtBQUN4QyxhQUFTLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDcEIsWUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUcsVUFBUyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3BELFlBQUksQ0FBQyxPQUFPLEVBQUU7QUFDWixpQkFBTyxHQUFHLE9BQU8sQ0FBQztBQUNsQixpQkFBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDeEI7QUFDRCxlQUFPLGNBQWMsQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO09BQ3pELENBQUE7QUFDRCxhQUFPLE1BQU0sQ0FBQztLQUNmO0FBQ0QsV0FBTyxBQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsV0FBVyxHQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7R0FDN0Q7O0FBRUQsV0FBUyxjQUFjLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDbkQsV0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUM1QixhQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUU5QyxrQkFBWSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQTtBQUM5QixlQUFTLFFBQVEsQ0FBQyxNQUFNLEVBQUU7QUFDeEIsZUFBTyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNqRCxlQUFPLENBQUMsTUFBTSxDQUFDLENBQUE7T0FDaEI7S0FDRixDQUFDLENBQUM7R0FDSjs7QUFFRCxXQUFTLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3RDLFVBQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztHQUN2QyIsImZpbGUiOiJkZWNvcmF0b3JzL2VsZW1lbnQtY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gZWxlbWVudENzcyh0YXJnZXQpIHtcbiAgZnVuY3Rpb24gZGVjbyhUYXJnZXQpIHtcbiAgICBUYXJnZXQucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gZWxlbWVudDtcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHN0eWxlRWxlbWVudChlbGVtZW50LCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIFRhcmdldDtcbiAgfVxuICByZXR1cm4gKHRhcmdldCAmJiB0YXJnZXQuY29uc3RydWN0b3IpID8gZGVjbyh0YXJnZXQpIDogZGVjbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRUcmFuc2l0aW9ucyh0YXJnZXQpIHtcbiAgZnVuY3Rpb24gZGVjbyhUYXJnZXQpIHtcbiAgICBUYXJnZXQucHJvdG90eXBlLnRyYW5zaXRpb24gPSBmdW5jdGlvbihlbGVtZW50LCBvcHRpb25zKSB7XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gb25TdHlsZUVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucywgJ3RyYW5zaXRpb25lbmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIFRhcmdldDtcbiAgfVxuICByZXR1cm4gKHRhcmdldCAmJiB0YXJnZXQuY29uc3RydWN0b3IpID8gZGVjbyh0YXJnZXQpIDogZGVjbztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVsZW1lbnRBbmltYXRpb25zKHRhcmdldCkge1xuICBmdW5jdGlvbiBkZWNvKHRhcmdldCkge1xuICAgIFRhcmdldC5wcm90b3R5cGUuYW5pbWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnQsIG9wdGlvbnMpIHtcbiAgICAgIGlmICghb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gZWxlbWVudDtcbiAgICAgICAgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvblN0eWxlRWxlbWVudChlbGVtZW50LCBvcHRpb25zLCAnYW5pbWF0aW9uZW5kJyk7XG4gICAgfVxuICAgIHJldHVybiBUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuICh0YXJnZXQgJiYgdGFyZ2V0LmNvbnN0cnVjdG9yKSA/IGRlY28odGFyZ2V0KSA6IGRlY287XG59XG5cbmZ1bmN0aW9uIG9uU3R5bGVFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMsIGV2ZW50TmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgX2hhbmRsZXIpO1xuXG4gICAgc3R5bGVFbGVtZW50KGVsZW1lbnQsIG9wdGlvbnMpXG4gICAgZnVuY3Rpb24gX2hhbmRsZXIoJGV2ZW50KSB7XG4gICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBfaGFuZGxlcik7XG4gICAgICByZXNvbHZlKCRldmVudClcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzdHlsZUVsZW1lbnQoZWxlbWVudCwgb3B0aW9ucykge1xuICBPYmplY3QuYXNzaWduKGVsZW1lbnQuc3R5bGUsIG9wdGlvbnMpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
