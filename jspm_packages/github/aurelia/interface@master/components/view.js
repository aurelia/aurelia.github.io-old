/* */ 
define(['exports', 'aurelia-framework', '../util/style', 'aurelia-animator-velocity', '../channel', './view-content', '../AIViewController', 'aurelia-router'], function (exports, _aureliaFramework, _utilStyle, _aureliaAnimatorVelocity, _channel, _viewContent, _AIViewController, _aureliaRouter) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ViewElement = (function () {
    function ViewElement(element, channel) {
      _classCallCheck(this, _ViewElement);

      this.isView = true;
      this.className = 'ai-view';

      this.element = element;
      this.channel = channel;
    }

    _createClass(ViewElement, [{
      key: 'attached',
      value: function attached() {}
    }, {
      key: 'detached',
      value: function detached() {}
    }, {
      key: 'navigateBack',
      value: function navigateBack(e) {
        this.channel.publish('swipe-left');
      }
    }]);

    var _ViewElement = ViewElement;
    ViewElement = (0, _aureliaFramework.inject)(Element, _channel.InterfaceChannel)(ViewElement) || ViewElement;
    ViewElement = (0, _aureliaFramework.customElement)('ai-view')(ViewElement) || ViewElement;
    return ViewElement;
  })();

  exports.ViewElement = ViewElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlldy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQVVhLFdBQVc7QUFJWCxhQUpBLFdBQVcsQ0FJVixPQUFPLEVBQUUsT0FBTyxFQUFFOzs7V0FIOUIsTUFBTSxHQUFHLElBQUk7V0FDYixTQUFTLEdBQUcsU0FBUzs7QUFHbkIsVUFBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLENBQUM7QUFDNUIsVUFBSSxDQUFDLE9BQU8sR0FBUSxPQUFPLENBQUM7S0FDN0I7O2lCQVBVLFdBQVc7O2FBU2Qsb0JBQUcsRUFNVjs7O2FBRU8sb0JBQUcsRUFPVjs7O2FBRVcsc0JBQUMsQ0FBQyxFQUFFO0FBQ2QsWUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7T0FDcEM7Ozt1QkE1QlUsV0FBVztBQUFYLGVBQVcsR0FEdkIsc0JBVHVGLE1BQU0sRUFTdEYsT0FBTyxXQU5QLGdCQUFnQixDQU1VLENBQ3JCLFdBQVcsS0FBWCxXQUFXO0FBQVgsZUFBVyxHQUZ2QixzQkFSOEQsYUFBYSxFQVE3RCxTQUFTLENBQUMsQ0FFWixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoiY29tcG9uZW50cy92aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIEJvdW5kVmlld0ZhY3RvcnksIHRlbXBsYXRlQ29udHJvbGxlciwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCxWaWV3U2xvdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtlYXNlfSBmcm9tICcuLi91dGlsL3N0eWxlJztcbmltcG9ydCB7VmVsb2NpdHlBbmltYXRvcn0gZnJvbSAnYXVyZWxpYS1hbmltYXRvci12ZWxvY2l0eSc7XG5pbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4uL2NoYW5uZWwnO1xuaW1wb3J0IHtWaWV3Q29udHJvbGxlckVsZW1lbnR9IGZyb20gJy4vdmlldy1jb250ZW50JztcbmltcG9ydCB7QUl9IGZyb20gJy4uL0FJVmlld0NvbnRyb2xsZXInO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcblxuQGN1c3RvbUVsZW1lbnQoJ2FpLXZpZXcnKVxuQGluamVjdChFbGVtZW50LCBJbnRlcmZhY2VDaGFubmVsKVxuZXhwb3J0IGNsYXNzIFZpZXdFbGVtZW50IHtcbiAgaXNWaWV3ID0gdHJ1ZTtcbiAgY2xhc3NOYW1lID0gJ2FpLXZpZXcnO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwpIHtcbiAgICB0aGlzLmVsZW1lbnQgICAgICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsICAgICAgPSBjaGFubmVsO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgLy8gcmV0dXJuIFZlbG9jaXR5KHRoaXMuZWxlbWVudCwge1xuICAgIC8vICAgZHVyYXRpb246ICczMDBtcycsXG4gICAgLy8gICBvcGFjaXR5OiAnMScsXG4gICAgLy8gICB0cmFuc2xhdGVYOiAnMCdcbiAgICAvLyB9KTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuXG4gICAgLy8gcmV0dXJuIFZlbG9jaXR5KHRoaXMuZWxlbWVudCwge1xuICAgIC8vICAgZHVyYXRpb246ICczMDBtcycsXG4gICAgLy8gICBvcGFjaXR5OiAnMCcsXG4gICAgLy8gICB0cmFuc2xhdGVYOiB4XG4gICAgLy8gfSlcbiAgfVxuXG4gIG5hdmlnYXRlQmFjayhlKSB7XG4gICAgdGhpcy5jaGFubmVsLnB1Ymxpc2goJ3N3aXBlLWxlZnQnKTtcbiAgfVxufVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
