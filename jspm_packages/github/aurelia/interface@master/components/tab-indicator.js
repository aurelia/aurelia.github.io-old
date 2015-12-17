/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function runTimout(cb) {
    var timeoutId = setTimeout(function () {
      cb();
      clearTimeout(timeoutId);
    }, 150);
  }

  function assign(options) {
    Object.assign(this, options);
  }

  var TabIndicatorExtension = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(TabIndicatorExtension, [{
      key: 'left',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'right',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'width',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function TabIndicatorExtension(element) {
      _classCallCheck(this, _TabIndicatorExtension);

      _defineDecoratedPropertyDescriptor(this, 'left', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'right', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'width', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(TabIndicatorExtension, [{
      key: 'setPosition',
      value: function setPosition(tab) {
        var _this = this;

        tab = tab.element || tab;

        var isRight = false;
        var isLeft = false;
        var scaleName = undefined;
        var scaleSize = undefined;

        var width = tab.clientWidth;
        var left = tab.offsetLeft;
        var right = width + left;
        right = tab.offsetParent.clientWidth - right;

        if (!this.initialized) {
          this.initialized = true;
          return assign.call(this, { left: left, right: right });
        }

        isRight = left > this.left;
        isLeft = left < this.left;

        if (isLeft) {
          this.left = left;
          runTimout(function () {
            _this.right = right;
          });
        } else {
          this.right = right;

          runTimout(function () {
            _this.left = left;
          });
        }
      }
    }], null, _instanceInitializers);

    var _TabIndicatorExtension = TabIndicatorExtension;
    TabIndicatorExtension = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(TabIndicatorExtension) || TabIndicatorExtension;
    TabIndicatorExtension = (0, _aureliaFramework.customElement)('tab-indicator')(TabIndicatorExtension) || TabIndicatorExtension;
    return TabIndicatorExtension;
  })();

  exports.TabIndicatorExtension = TabIndicatorExtension;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdGFiLWluZGljYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBSUEsV0FBUyxTQUFTLENBQUMsRUFBRSxFQUFFO0FBQ3JCLFFBQUksU0FBUyxHQUFHLFVBQVUsQ0FBQyxZQUFLO0FBQzlCLFFBQUUsRUFBRSxDQUFDO0FBQ0wsa0JBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUN6QixFQUFFLEdBQUcsQ0FBQyxDQUFDO0dBQ1Q7O0FBRUQsV0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQ3ZCLFVBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQzlCOztNQUtZLHFCQUFxQjs7OzswQkFBckIscUJBQXFCOztxQ0FsQkgsUUFBUTs7ZUFtQm5CLElBQUk7Ozs7O3FDQW5CTyxRQUFROztlQW9CbkIsSUFBSTs7Ozs7cUNBcEJPLFFBQVE7O2VBcUJuQixJQUFJOzs7OztBQUNYLGFBSkEscUJBQXFCLENBSXBCLE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQ25CLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzswQkFOVSxxQkFBcUI7O2FBUXJCLHFCQUFDLEdBQUcsRUFBRTs7O0FBQ2YsV0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDOztBQUV6QixZQUFJLE9BQU8sR0FBTSxLQUFLLENBQUM7QUFDdkIsWUFBSSxNQUFNLEdBQU8sS0FBSyxDQUFDO0FBQ3ZCLFlBQUksU0FBUyxHQUFJLFNBQVMsQ0FBQztBQUMzQixZQUFJLFNBQVMsR0FBSSxTQUFTLENBQUM7O0FBRTNCLFlBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7QUFDNUIsWUFBSSxJQUFJLEdBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQztBQUMzQixZQUFJLEtBQUssR0FBSSxLQUFLLEdBQUcsSUFBSSxBQUFDLENBQUM7QUFDdkIsYUFBSyxHQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsV0FBVyxHQUFHLEtBQUssQUFBQyxDQUFDOztBQUVuRCxZQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNyQixjQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztBQUN4QixpQkFBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLElBQUksRUFBSixJQUFJLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDekM7O0FBRUQsZUFBTyxHQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxBQUFDLENBQUM7QUFDN0IsY0FBTSxHQUFLLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxBQUFDLENBQUM7O0FBRTdCLFlBQUksTUFBTSxFQUFFO0FBQ1YsY0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsbUJBQVMsQ0FBQyxZQUFLO0FBQ2Isa0JBQUssS0FBSyxHQUFHLEtBQUssQ0FBQztXQUNwQixDQUFDLENBQUM7U0FDSixNQUFNO0FBQ0wsY0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7O0FBRW5CLG1CQUFTLENBQUMsWUFBSztBQUNiLGtCQUFLLElBQUksR0FBRyxJQUFJLENBQUM7V0FDbEIsQ0FBQyxDQUFDO1NBQ0o7T0FDRjs7O2lDQXpDVSxxQkFBcUI7QUFBckIseUJBQXFCLEdBRGpDLHNCQWpCc0IsTUFBTSxFQWlCckIsWUFoQkEsR0FBRyxDQWdCQyxPQUFPLENBQUMsQ0FDUCxxQkFBcUIsS0FBckIscUJBQXFCO0FBQXJCLHlCQUFxQixHQUZqQyxzQkFoQk8sYUFBYSxFQWdCTixlQUFlLENBQUMsQ0FFbEIscUJBQXFCLEtBQXJCLHFCQUFxQjtXQUFyQixxQkFBcUIiLCJmaWxlIjoiY29tcG9uZW50cy90YWItaW5kaWNhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBpbmplY3QsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5cbmZ1bmN0aW9uIHJ1blRpbW91dChjYikge1xuICBsZXQgdGltZW91dElkID0gc2V0VGltZW91dCgoKT0+IHtcbiAgICBjYigpO1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICB9LCAxNTApO1xufVxuXG5mdW5jdGlvbiBhc3NpZ24ob3B0aW9ucykge1xuICBPYmplY3QuYXNzaWduKHRoaXMsIG9wdGlvbnMpO1xufVxuXG5cbkBjdXN0b21FbGVtZW50KCd0YWItaW5kaWNhdG9yJylcbkBpbmplY3QoRE9NLkVsZW1lbnQpXG5leHBvcnQgY2xhc3MgVGFiSW5kaWNhdG9yRXh0ZW5zaW9uIHtcbiAgQGJpbmRhYmxlIGxlZnQgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHJpZ2h0ID0gbnVsbDtcbiAgQGJpbmRhYmxlIHdpZHRoID0gbnVsbDtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBzZXRQb3NpdGlvbih0YWIpIHtcbiAgICB0YWIgPSB0YWIuZWxlbWVudCB8fCB0YWI7XG5cbiAgICBsZXQgaXNSaWdodCAgICA9IGZhbHNlO1xuICAgIGxldCBpc0xlZnQgICAgID0gZmFsc2U7XG4gICAgbGV0IHNjYWxlTmFtZSAgPSB1bmRlZmluZWQ7XG4gICAgbGV0IHNjYWxlU2l6ZSAgPSB1bmRlZmluZWQ7XG5cbiAgICBsZXQgd2lkdGggPSB0YWIuY2xpZW50V2lkdGg7XG4gICAgbGV0IGxlZnQgID0gdGFiLm9mZnNldExlZnQ7XG4gICAgbGV0IHJpZ2h0ID0gKHdpZHRoICsgbGVmdCk7XG4gICAgICAgIHJpZ2h0ID0gKHRhYi5vZmZzZXRQYXJlbnQuY2xpZW50V2lkdGggLSByaWdodCk7XG5cbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgcmV0dXJuIGFzc2lnbi5jYWxsKHRoaXMsIHtsZWZ0LCByaWdodH0pO1xuICAgIH1cblxuICAgIGlzUmlnaHQgPSAobGVmdCA+IHRoaXMubGVmdCk7XG4gICAgaXNMZWZ0ICA9IChsZWZ0IDwgdGhpcy5sZWZ0KTtcblxuICAgIGlmIChpc0xlZnQpIHtcbiAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICBydW5UaW1vdXQoKCk9PiB7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG5cbiAgICAgIHJ1blRpbW91dCgoKT0+IHtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
