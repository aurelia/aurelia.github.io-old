/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'hammer'], function (exports, _aureliaFramework, _aureliaPal, _hammer) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _Hammer = _interopRequireDefault(_hammer);

  var BaseSwipe = (function () {
    function BaseSwipe(element, event) {
      _classCallCheck(this, BaseSwipe);

      this.event = event;
      this.element = element;
      this.hammer = new _Hammer['default'].Manager(element, {
        recognizers: [[_Hammer['default'].Swipe, { enable: true, direction: _Hammer['default'].DIRECTION_HORIZONTAL }]]
      });
    }

    _createClass(BaseSwipe, [{
      key: 'bind',
      value: function bind() {
        if (this.value) {
          this.hammer.on('swipe ' + this.event, this.value);
        }
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        this.hammer.destroy();
      }
    }]);

    return BaseSwipe;
  })();

  var SwipeLeftAttribute = (function (_BaseSwipe) {
    _inherits(SwipeLeftAttribute, _BaseSwipe);

    function SwipeLeftAttribute(element) {
      _classCallCheck(this, _SwipeLeftAttribute);

      _get(Object.getPrototypeOf(_SwipeLeftAttribute.prototype), 'constructor', this).call(this, element, 'swipeLeft');
    }

    var _SwipeLeftAttribute = SwipeLeftAttribute;
    SwipeLeftAttribute = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(SwipeLeftAttribute) || SwipeLeftAttribute;
    SwipeLeftAttribute = (0, _aureliaFramework.noView)(SwipeLeftAttribute) || SwipeLeftAttribute;
    SwipeLeftAttribute = (0, _aureliaFramework.customAttribute)('swipe-left')(SwipeLeftAttribute) || SwipeLeftAttribute;
    return SwipeLeftAttribute;
  })(BaseSwipe);

  exports.SwipeLeftAttribute = SwipeLeftAttribute;

  var SwipeRightAttribute = (function (_BaseSwipe2) {
    _inherits(SwipeRightAttribute, _BaseSwipe2);

    function SwipeRightAttribute(element, touch) {
      _classCallCheck(this, _SwipeRightAttribute);

      _get(Object.getPrototypeOf(_SwipeRightAttribute.prototype), 'constructor', this).call(this, element, 'swipeRight');
    }

    var _SwipeRightAttribute = SwipeRightAttribute;
    SwipeRightAttribute = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(SwipeRightAttribute) || SwipeRightAttribute;
    SwipeRightAttribute = (0, _aureliaFramework.noView)(SwipeRightAttribute) || SwipeRightAttribute;
    SwipeRightAttribute = (0, _aureliaFramework.customAttribute)('swipe-right')(SwipeRightAttribute) || SwipeRightAttribute;
    return SwipeRightAttribute;
  })(BaseSwipe);

  exports.SwipeRightAttribute = SwipeRightAttribute;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN3aXBlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFJTSxTQUFTO0FBQ0YsYUFEUCxTQUFTLENBQ0QsT0FBTyxFQUFFLEtBQUssRUFBRTs0QkFEeEIsU0FBUzs7QUFFWCxVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbUJBQU8sT0FBTyxDQUFDLE9BQU8sRUFBRTtBQUN0QyxtQkFBVyxFQUFFLENBRVQsQ0FBQyxtQkFBTyxLQUFLLEVBQUMsRUFBRSxNQUFNLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxtQkFBTyxvQkFBb0IsRUFBRSxDQUFDLENBQ3pFO09BQ0osQ0FBQyxDQUFDO0tBQ0o7O2lCQVZHLFNBQVM7O2FBWVQsZ0JBQUc7QUFDTCxZQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDZCxjQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBRSxRQUFRLEdBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbkQ7T0FDRjs7O2FBRUssa0JBQUc7QUFDUCxZQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO09BQ3ZCOzs7V0FwQkcsU0FBUzs7O01BMEJGLGtCQUFrQjtjQUFsQixrQkFBa0I7O0FBRWxCLGFBRkEsa0JBQWtCLENBRWpCLE9BQU8sRUFBRTs7O0FBQ25CLGlHQUFNLE9BQU8sRUFBRSxXQUFXLEVBQUU7S0FDN0I7OzhCQUpVLGtCQUFrQjtBQUFsQixzQkFBa0IsR0FEOUIsc0JBN0JnQyxNQUFNLEVBNkIvQixZQTVCQSxHQUFHLENBNEJDLE9BQU8sQ0FBQyxDQUNQLGtCQUFrQixLQUFsQixrQkFBa0I7QUFBbEIsc0JBQWtCLHlCQTlCdkIsTUFBTSxFQThCRCxrQkFBa0IsS0FBbEIsa0JBQWtCO0FBQWxCLHNCQUFrQixHQUg5QixzQkEzQmUsZUFBZSxFQTJCZCxZQUFZLENBQUMsQ0FHakIsa0JBQWtCLEtBQWxCLGtCQUFrQjtXQUFsQixrQkFBa0I7S0FBUyxTQUFTOzs7O01BVXBDLG1CQUFtQjtjQUFuQixtQkFBbUI7O0FBRW5CLGFBRkEsbUJBQW1CLENBRWxCLE9BQU8sRUFBRSxLQUFLLEVBQUU7OztBQUMxQixrR0FBTSxPQUFPLEVBQUUsWUFBWSxFQUFFO0tBQzlCOzsrQkFKVSxtQkFBbUI7QUFBbkIsdUJBQW1CLEdBRC9CLHNCQXZDZ0MsTUFBTSxFQXVDL0IsWUF0Q0EsR0FBRyxDQXNDQyxPQUFPLENBQUMsQ0FDUCxtQkFBbUIsS0FBbkIsbUJBQW1CO0FBQW5CLHVCQUFtQix5QkF4Q3hCLE1BQU0sRUF3Q0QsbUJBQW1CLEtBQW5CLG1CQUFtQjtBQUFuQix1QkFBbUIsR0FIL0Isc0JBckNlLGVBQWUsRUFxQ2QsYUFBYSxDQUFDLENBR2xCLG1CQUFtQixLQUFuQixtQkFBbUI7V0FBbkIsbUJBQW1CO0tBQVMsU0FBUyIsImZpbGUiOiJzd2lwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bm9WaWV3LCBjdXN0b21BdHRyaWJ1dGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCBIYW1tZXIgZnJvbSAnaGFtbWVyJztcblxuY2xhc3MgQmFzZVN3aXBlIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZXZlbnQpIHtcbiAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmhhbW1lciA9IG5ldyBIYW1tZXIuTWFuYWdlcihlbGVtZW50LCB7XG4gICAgICAgIHJlY29nbml6ZXJzOiBbXG4gICAgICAgICAgICAvLyBSZWNvZ25pemVyQ2xhc3MsIFtvcHRpb25zXSwgW3JlY29nbml6ZVdpdGgsIC4uLl0sIFtyZXF1aXJlRmFpbHVyZSwgLi4uXVxuICAgICAgICAgICAgW0hhbW1lci5Td2lwZSx7IGVuYWJsZTp0cnVlLCBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fSE9SSVpPTlRBTCB9XSxcbiAgICAgICAgXVxuICAgIH0pO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5oYW1tZXIub24oICdzd2lwZSAnKyB0aGlzLmV2ZW50LCB0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5oYW1tZXIuZGVzdHJveSgpO1xuICB9XG59XG5cbkBjdXN0b21BdHRyaWJ1dGUoJ3N3aXBlLWxlZnQnKVxuQG5vVmlld1xuQGluamVjdChET00uRWxlbWVudClcbmV4cG9ydCBjbGFzcyBTd2lwZUxlZnRBdHRyaWJ1dGUgZXh0ZW5kcyBCYXNlU3dpcGUge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICBzdXBlcihlbGVtZW50LCAnc3dpcGVMZWZ0Jyk7XG4gIH1cbn1cblxuQGN1c3RvbUF0dHJpYnV0ZSgnc3dpcGUtcmlnaHQnKVxuQG5vVmlld1xuQGluamVjdChET00uRWxlbWVudClcbmV4cG9ydCBjbGFzcyBTd2lwZVJpZ2h0QXR0cmlidXRlIGV4dGVuZHMgQmFzZVN3aXBlIHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0b3VjaCkge1xuICAgIHN1cGVyKGVsZW1lbnQsICdzd2lwZVJpZ2h0Jyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
