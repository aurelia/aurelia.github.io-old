/* */ 
define(['exports', 'aurelia-framework', './channel', 'aurelia-pal'], function (exports, _aureliaFramework, _channel, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TAG_NAMES = {
    appbar: 'ai-app-bar',
    sidebar: 'ai-app-sidebar'
  };

  var PLACEHOLDER_TAG_NAMES = {
    appbar: 'navbar-placeholder'
  };

  var currentZIndex = 1000;
  var transitionEvent = (function () {
    var t = undefined;
    var el = document.createElement('fakeelement');

    var transitions = {
      'transition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'MozTransition': 'transitionend',
      'WebkitTransition': 'webkitTransitionEnd'
    };

    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
  })();

  function getNextZIndex() {
    return ++currentZIndex;
  }

  function getau(node) {
    if (node.au) {
      return node.au.controller;
    }
  }

  function createPlaceholder(tagName) {
    if (tagName in PLACEHOLDER_TAG_NAMES) {
      tagName = PLACEHOLDER_TAG_NAMES[tagName];
    }

    return {
      create: function create(node) {
        this.element = _aureliaPal.DOM.createElement(tagName);

        if (node && node instanceof _aureliaPal.DOM.Element) {
          this.container = node;
        }
        this.created = true;
        return this;
      },
      appendTo: function appendTo(node) {
        if (node && node instanceof _aureliaPal.DOM.Element) {
          this.container = node;
        }
        node = node || this.container;
        node.appendChild(this.element);
      },
      prependTo: function prependTo(node) {
        if (node && node instanceof _aureliaPal.DOM.Element) {
          this.container = node;
        }
        node = node || this.container;
        var firstChild = node.firstChild;
        if (firstChild) {
          node.insertBefore(this.element, firstChild);
        }
      },
      remove: function remove() {
        if (this.container) {
          this.container.removeChild(this.element);
          this.created = false;
        }
      }
    };
  }

  var AIViewController = (function () {
    _createClass(AIViewController, null, [{
      key: 'viewModel',
      value: function viewModel(tagName) {
        if (tagName in TAG_NAMES) {
          tagName = TAG_NAMES[tagName];
        }
        var node = _aureliaPal.DOM.querySelectorAll(tagName)[0];
        return getau(node) || node;
      }
    }, {
      key: 'createPlaceholder',
      value: createPlaceholder,
      enumerable: true
    }]);

    function AIViewController(channel, container) {
      _classCallCheck(this, _AIViewController);

      this.channel = channel;
      this.container = container;
    }

    var _AIViewController = AIViewController;
    AIViewController = (0, _aureliaFramework.inject)(_channel.InterfaceChannel)(AIViewController) || AIViewController;
    return AIViewController;
  })();

  exports.AIViewController = AIViewController;
  var AI = AIViewController;
  exports.AI = AI;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkFJVmlld0NvbnRyb2xsZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFLQSxNQUFNLFNBQVMsR0FBRztBQUNoQixVQUFNLEVBQUUsWUFBWTtBQUNwQixXQUFPLEVBQUUsZ0JBQWdCO0dBQzFCLENBQUE7O0FBRUQsTUFBTSxxQkFBcUIsR0FBRztBQUM1QixVQUFNLEVBQUUsb0JBQW9CO0dBQzdCLENBQUE7O0FBR0QsTUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO0FBQ3pCLE1BQUksZUFBZSxHQUFHLENBQUMsWUFBVztBQUNoQyxRQUFJLENBQUMsWUFBQSxDQUFDO0FBQ04sUUFBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzs7QUFFL0MsUUFBSSxXQUFXLEdBQUc7QUFDaEIsa0JBQVksRUFBRSxlQUFlO0FBQzdCLG1CQUFhLEVBQUUsZ0JBQWdCO0FBQy9CLHFCQUFlLEVBQUUsZUFBZTtBQUNoQyx3QkFBa0IsRUFBRSxxQkFBcUI7S0FDMUMsQ0FBQzs7QUFFRixTQUFLLENBQUMsSUFBSSxXQUFXLEVBQUU7QUFDckIsVUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFNBQVMsRUFBRTtBQUM3QixlQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUN2QjtLQUNGO0dBQ0YsQ0FBQSxFQUFHLENBQUM7O0FBR0wsV0FBUyxhQUFhLEdBQUc7QUFDdkIsV0FBTyxFQUFFLGFBQWEsQ0FBQztHQUN4Qjs7QUFFRCxXQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDbEIsUUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ1gsYUFBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQztLQUMzQjtHQUNGOztBQUVELFdBQVMsaUJBQWlCLENBQUMsT0FBTyxFQUFFO0FBQ2xDLFFBQUksT0FBTyxJQUFJLHFCQUFxQixFQUFFO0FBQ3BDLGFBQU8sR0FBRyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUMxQzs7QUFFRCxXQUFPO0FBQ0wsWUFBTSxFQUFBLGdCQUFDLElBQUksRUFBRTtBQUNYLFlBQUksQ0FBQyxPQUFPLEdBQUcsWUFsRGIsR0FBRyxDQWtEYyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7O0FBRTFDLFlBQUksSUFBSSxJQUFJLElBQUksWUFBWSxZQXBEMUIsR0FBRyxDQW9EMkIsT0FBTyxFQUFFO0FBQ3ZDLGNBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO0FBQ0QsWUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDcEIsZUFBTyxJQUFJLENBQUM7T0FDYjtBQUNELGNBQVEsRUFBQSxrQkFBQyxJQUFJLEVBQUU7QUFDYixZQUFJLElBQUksSUFBSSxJQUFJLFlBQVksWUEzRDFCLEdBQUcsQ0EyRDJCLE9BQU8sRUFBRTtBQUN2QyxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtBQUNELFlBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUM5QixZQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUNoQztBQUNELGVBQVMsRUFBQSxtQkFBQyxJQUFJLEVBQUU7QUFDZCxZQUFJLElBQUksSUFBSSxJQUFJLFlBQVksWUFsRTFCLEdBQUcsQ0FrRTJCLE9BQU8sRUFBRTtBQUN2QyxjQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtBQUNELFlBQUksR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUM5QixZQUFJLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQ2pDLFlBQUksVUFBVSxFQUFFO0FBQ2QsY0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQzdDO09BQ0Y7QUFDRCxZQUFNLEVBQUEsa0JBQUc7QUFDUCxZQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDbEIsY0FBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3pDLGNBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO09BQ0Y7S0FDRixDQUFBO0dBQ0Y7O01BR1ksZ0JBQWdCO2lCQUFoQixnQkFBZ0I7O2FBR1gsbUJBQUMsT0FBTyxFQUFFO0FBQ3hCLFlBQUksT0FBTyxJQUFJLFNBQVMsRUFBRTtBQUN4QixpQkFBTyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtBQUNELFlBQUksSUFBSSxHQUFHLFlBNUZQLEdBQUcsQ0E0RlEsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUMsZUFBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDO09BQzVCOzs7YUFFMEIsaUJBQWlCOzs7O0FBRWpDLGFBYkEsZ0JBQWdCLENBYWYsT0FBTyxFQUFFLFNBQVMsRUFBRTs7O0FBQzlCLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0tBQzVCOzs0QkFoQlUsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUQ1QixzQkF0Rk8sTUFBTSxXQUNOLGdCQUFnQixDQXFGQyxDQUNaLGdCQUFnQixLQUFoQixnQkFBZ0I7V0FBaEIsZ0JBQWdCOzs7O0FBbUJ0QixNQUFJLEVBQUUsR0FBRyxnQkFBZ0IsQ0FBQyIsImZpbGUiOiJBSVZpZXdDb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi9jaGFubmVsJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cblxuY29uc3QgVEFHX05BTUVTID0ge1xuICBhcHBiYXI6ICdhaS1hcHAtYmFyJyxcbiAgc2lkZWJhcjogJ2FpLWFwcC1zaWRlYmFyJyxcbn1cblxuY29uc3QgUExBQ0VIT0xERVJfVEFHX05BTUVTID0ge1xuICBhcHBiYXI6ICduYXZiYXItcGxhY2Vob2xkZXInLFxufVxuXG5cbmxldCBjdXJyZW50WkluZGV4ID0gMTAwMDtcbmxldCB0cmFuc2l0aW9uRXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gIGxldCB0O1xuICBsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmYWtlZWxlbWVudCcpO1xuXG4gIGxldCB0cmFuc2l0aW9ucyA9IHtcbiAgICAndHJhbnNpdGlvbic6ICd0cmFuc2l0aW9uZW5kJyxcbiAgICAnT1RyYW5zaXRpb24nOiAnb1RyYW5zaXRpb25FbmQnLFxuICAgICdNb3pUcmFuc2l0aW9uJzogJ3RyYW5zaXRpb25lbmQnLFxuICAgICdXZWJraXRUcmFuc2l0aW9uJzogJ3dlYmtpdFRyYW5zaXRpb25FbmQnXG4gIH07XG5cbiAgZm9yICh0IGluIHRyYW5zaXRpb25zKSB7XG4gICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cmFuc2l0aW9uc1t0XTtcbiAgICB9XG4gIH1cbn0pKCk7XG5cblxuZnVuY3Rpb24gZ2V0TmV4dFpJbmRleCgpIHtcbiAgcmV0dXJuICsrY3VycmVudFpJbmRleDtcbn1cblxuZnVuY3Rpb24gZ2V0YXUobm9kZSl7XG4gIGlmIChub2RlLmF1KSB7XG4gICAgcmV0dXJuIG5vZGUuYXUuY29udHJvbGxlcjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQbGFjZWhvbGRlcih0YWdOYW1lKSB7XG4gIGlmICh0YWdOYW1lIGluIFBMQUNFSE9MREVSX1RBR19OQU1FUykge1xuICAgIHRhZ05hbWUgPSBQTEFDRUhPTERFUl9UQUdfTkFNRVNbdGFnTmFtZV07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZShub2RlKSB7XG4gICAgICB0aGlzLmVsZW1lbnQgPSBET00uY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgICAgaWYgKG5vZGUgJiYgbm9kZSBpbnN0YW5jZW9mIERPTS5FbGVtZW50KSB7XG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gbm9kZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY3JlYXRlZCA9IHRydWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGFwcGVuZFRvKG5vZGUpIHtcbiAgICAgIGlmIChub2RlICYmIG5vZGUgaW5zdGFuY2VvZiBET00uRWxlbWVudCkge1xuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IG5vZGU7XG4gICAgICB9XG4gICAgICBub2RlID0gbm9kZSB8fCB0aGlzLmNvbnRhaW5lcjtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9LFxuICAgIHByZXBlbmRUbyhub2RlKSB7XG4gICAgICBpZiAobm9kZSAmJiBub2RlIGluc3RhbmNlb2YgRE9NLkVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBub2RlO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUgfHwgdGhpcy5jb250YWluZXI7XG4gICAgICBsZXQgZmlyc3RDaGlsZCA9IG5vZGUuZmlyc3RDaGlsZDtcbiAgICAgIGlmIChmaXJzdENoaWxkKSB7XG4gICAgICAgIG5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuZWxlbWVudCwgZmlyc3RDaGlsZCk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmUoKSB7XG4gICAgICBpZiAodGhpcy5jb250YWluZXIpIHtcbiAgICAgICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgdGhpcy5jcmVhdGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBpbmplY3QoSW50ZXJmYWNlQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBBSVZpZXdDb250cm9sbGVyIHtcblxuXG4gIHN0YXRpYyB2aWV3TW9kZWwodGFnTmFtZSkge1xuICAgIGlmICh0YWdOYW1lIGluIFRBR19OQU1FUykge1xuICAgICAgdGFnTmFtZSA9IFRBR19OQU1FU1t0YWdOYW1lXTtcbiAgICB9XG4gICAgbGV0IG5vZGUgPSBET00ucXVlcnlTZWxlY3RvckFsbCh0YWdOYW1lKVswXTtcbiAgICByZXR1cm4gZ2V0YXUobm9kZSkgfHwgbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVQbGFjZWhvbGRlciA9IGNyZWF0ZVBsYWNlaG9sZGVyO1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwsIGNvbnRhaW5lcikge1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gIH1cbn1cblxuZXhwb3J0IGxldCBBSSA9IEFJVmlld0NvbnRyb2xsZXI7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
