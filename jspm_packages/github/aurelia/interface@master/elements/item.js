/* */ 
define(['exports', 'aurelia-framework', 'aurelia-router', '../util/events', 'aurelia-pal', '../AITouch'], function (exports, _aureliaFramework, _aureliaRouter, _utilEvents, _aureliaPal, _AITouch) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function processTemplate(compiler, resouces, element, instruction) {
    var href = undefined;
    var attrName = undefined;
    var node = undefined;
    var content = undefined;

    href = element.getAttribute('href');
    attrName = 'href';

    if (!href) {
      href = element.getAttribute('href.bind');
      attrName = 'href.bind';
    }

    if (!href) return true;

    node = _aureliaPal.DOM.createElement('A');

    content = element.firstChild;
    while (content) {
      node.appendChild(content);
      content = element.firstChild;
    }

    element.appendChild(node);

    return true;
  }

  var ItemElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ItemElement, [{
      key: 'accordion',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'href',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function ItemElement(element, router, touch) {
      var _this = this;

      _classCallCheck(this, _ItemElement);

      _defineDecoratedPropertyDescriptor(this, 'accordion', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'href', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.eventListeners = [];
      this.isItem = true;

      element.tabIndex = '0';
      this.element = element;

      this._control = touch.touchControl(element);

      this._control.add(_AITouch.AITouch.Tap({
        event: 'touch',
        taps: 1
      }));
      this.go = function (href) {
        href = href || _this.href;
        router.navigate(href);
      };
    }

    _createDecoratedClass(ItemElement, [{
      key: 'attached',
      value: function attached() {
        var _this2 = this;

        this._control.on('touch', function () {
          _this2.go(_this2.href);
        });

        this.initialHeight = this.element.clientHeight;
      }
    }, {
      key: 'detached',
      value: function detached() {
        this._control.destroy();
      }
    }, {
      key: 'accordionChanged',
      value: function accordionChanged(accordion) {}
    }, {
      key: 'hrefChanged',
      value: function hrefChanged(href) {
        var _this3 = this;

        if (href && !this.isHrefCallback) {
          this.isHrefCallback = true;
          this.onClick(function (event) {
            return _this3.go(_this3.href);
          });
        }
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('is-active');
      }
    }, {
      key: 'hrefChanged',
      value: function hrefChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('item-link');
      }
    }, {
      key: 'setHeader',
      value: function setHeader(header) {
        this.header = header;
      }
    }, {
      key: 'onClick',
      value: function onClick(cb) {
        this.eventListeners.push(cb);
      }
    }, {
      key: '_click',
      value: function _click(event) {
        var _this4 = this;

        this.eventListeners.forEach(function (cb) {
          cb(event, _this4);
        });
      }
    }], null, _instanceInitializers);

    var _ItemElement = ItemElement;
    ItemElement = (0, _aureliaFramework.inject)(Element, _aureliaRouter.Router, _AITouch.AITouch)(ItemElement) || ItemElement;
    ItemElement = (0, _aureliaFramework.processContent)(processTemplate)(ItemElement) || ItemElement;
    ItemElement = (0, _aureliaFramework.customElement)('ai-item')(ItemElement) || ItemElement;
    return ItemElement;
  })();

  exports.ItemElement = ItemElement;
});
//# sourceMappingURL=data:application/json;base64,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LE9BQUssSUFBSSxDQUFDO1dBQUEsQ0FBRSxDQUFDO1NBQzVDO09BQ0Y7OzthQUVZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO09BQy9EOzs7YUFFVSxxQkFBQyxLQUFLLEVBQUU7QUFDakIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztPQUMvRDs7O2FBRVEsbUJBQUMsTUFBTSxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO09BQ3RCOzs7YUFFTSxpQkFBQyxFQUFFLEVBQUU7QUFDVixZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUM5Qjs7O2FBRUssZ0JBQUMsS0FBSyxFQUFFOzs7QUFDWixZQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsRUFBSTtBQUNoQyxZQUFFLENBQUMsS0FBSyxTQUFPLENBQUM7U0FDakIsQ0FBQyxDQUFDO09BQ0o7Ozt1QkE1RlUsV0FBVztBQUFYLGVBQVcsR0FEdkIsc0JBcEM0RCxNQUFNLEVBb0MzRCxPQUFPLGlCQW5DUCxNQUFNLFdBR04sT0FBTyxDQWdDa0IsQ0FDcEIsV0FBVyxLQUFYLFdBQVc7QUFBWCxlQUFXLEdBRnZCLHNCQW5DTyxjQUFjLEVBbUNOLGVBQWUsQ0FBQyxDQUVuQixXQUFXLEtBQVgsV0FBVztBQUFYLGVBQVcsR0FIdkIsc0JBbENtQyxhQUFhLEVBa0NsQyxTQUFTLENBQUMsQ0FHWixXQUFXLEtBQVgsV0FBVztXQUFYLFdBQVciLCJmaWxlIjoiZWxlbWVudHMvaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvY2Vzc0NvbnRlbnQsIGlubGluZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtFdmVudEhhbmRsZXJzfSBmcm9tICcuLi91dGlsL2V2ZW50cyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtBSVRvdWNofSBmcm9tICcuLi9BSVRvdWNoJztcbmZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZShjb21waWxlciwgcmVzb3VjZXMsIGVsZW1lbnQsIGluc3RydWN0aW9uKSB7XG4gIGxldCBocmVmO1xuICBsZXQgYXR0ck5hbWU7XG4gIGxldCBub2RlO1xuICBsZXQgY29udGVudDtcblxuICBocmVmID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgYXR0ck5hbWUgPSAnaHJlZic7XG5cbiAgaWYgKCFocmVmKSB7XG4gICAgaHJlZiA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdocmVmLmJpbmQnKTtcbiAgICBhdHRyTmFtZSA9ICdocmVmLmJpbmQnO1xuICB9XG5cbiAgaWYgKCFocmVmKSByZXR1cm4gdHJ1ZTtcblxuICBub2RlID0gRE9NLmNyZWF0ZUVsZW1lbnQoJ0EnKTtcblxuICBjb250ZW50ID0gZWxlbWVudC5maXJzdENoaWxkO1xuICB3aGlsZShjb250ZW50KSB7XG4gICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250ZW50ID0gZWxlbWVudC5maXJzdENoaWxkO1xuICB9XG5cbiAgZWxlbWVudC5hcHBlbmRDaGlsZChub2RlKTtcblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWl0ZW0nKVxuQHByb2Nlc3NDb250ZW50KHByb2Nlc3NUZW1wbGF0ZSlcbkBpbmplY3QoRWxlbWVudCwgUm91dGVyLCBBSVRvdWNoKVxuZXhwb3J0IGNsYXNzIEl0ZW1FbGVtZW50IHtcbiAgQGJpbmRhYmxlIGFjY29yZGlvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBocmVmID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG5cbiAgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgaXNJdGVtID0gdHJ1ZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCByb3V0ZXIsIHRvdWNoKSB7XG4gICAgZWxlbWVudC50YWJJbmRleCA9ICcwJztcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5fY29udHJvbCA9IHRvdWNoLnRvdWNoQ29udHJvbChlbGVtZW50KTtcblxuICAgIHRoaXMuX2NvbnRyb2wuYWRkKEFJVG91Y2guVGFwKHtcbiAgICAgIGV2ZW50OiAndG91Y2gnLFxuICAgICAgdGFwczogMVxuICAgIH0pKTtcbiAgICB0aGlzLmdvID0gKGhyZWYpPT4ge1xuICAgICAgaHJlZiA9IGhyZWYgfHwgdGhpcy5ocmVmXG4gICAgICByb3V0ZXIubmF2aWdhdGUoaHJlZik7XG4gICAgICAvLyB2YXIgb3B0aW9ucyA9IHtcbiAgICAgIC8vICAgXCJocmVmXCI6IGhyZWYsXG4gICAgICAvLyAgIFwiZGlyZWN0aW9uXCIgICAgICAgIDogXCJsZWZ0XCIsIC8vICdsZWZ0fHJpZ2h0fHVwfGRvd24nLCBkZWZhdWx0ICdsZWZ0JyAod2hpY2ggaXMgbGlrZSAnbmV4dCcpXG4gICAgICAvLyAgIFwiZHVyYXRpb25cIiAgICAgICAgIDogIDUwMCwgLy8gaW4gbWlsbGlzZWNvbmRzIChtcyksIGRlZmF1bHQgNDAwXG4gICAgICAvLyAgIFwic2xvd2Rvd25mYWN0b3JcIiAgIDogICAgMywgLy8gb3ZlcmxhcCB2aWV3cyAoaGlnaGVyIG51bWJlciBpcyBtb3JlKSBvciBubyBvdmVybGFwICgxKSwgZGVmYXVsdCA0XG4gICAgICAvLyAgIFwiaW9zZGVsYXlcIiAgICAgICAgIDogIDEwMCwgLy8gbXMgdG8gd2FpdCBmb3IgdGhlIGlPUyB3ZWJ2aWV3IHRvIHVwZGF0ZSBiZWZvcmUgYW5pbWF0aW9uIGtpY2tzIGluLCBkZWZhdWx0IDYwXG4gICAgICAvLyAgIFwiYW5kcm9pZGRlbGF5XCIgICAgIDogIDE1MCwgLy8gc2FtZSBhcyBhYm92ZSBidXQgZm9yIEFuZHJvaWQsIGRlZmF1bHQgNzBcbiAgICAgIC8vICAgXCJ3aW5waG9uZWRlbGF5XCIgICAgOiAgMjUwLCAvLyBzYW1lIGFzIGFib3ZlIGJ1dCBmb3IgV2luZG93cyBQaG9uZSwgZGVmYXVsdCAyMDAsXG4gICAgICAvLyAgIFwiZml4ZWRQaXhlbHNUb3BcIiAgIDogICA3MCwgLy8gdGhlIG51bWJlciBvZiBwaXhlbHMgb2YgeW91ciBmaXhlZCBoZWFkZXIsIGRlZmF1bHQgMCAoaU9TIGFuZCBBbmRyb2lkKVxuICAgICAgLy8gICBcImZpeGVkUGl4ZWxzQm90dG9tXCI6ICAgIDAgIC8vIHRoZSBudW1iZXIgb2YgcGl4ZWxzIG9mIHlvdXIgZml4ZWQgZm9vdGVyIChmLmkuIGEgdGFiIGJhciksIGRlZmF1bHQgMCAoaU9TIGFuZCBBbmRyb2lkKVxuICAgICAgLy8gfTtcbiAgICAgIC8vIGlmIChocmVmKSB7XG4gICAgICAvLyAgIGlmICh3aW5kb3cucGx1Z2lucykge1xuICAgICAgLy8gICAgIHdpbmRvdy5wbHVnaW5zLm5hdGl2ZXBhZ2V0cmFuc2l0aW9ucyAmJlxuICAgICAgLy8gICAgIHdpbmRvdy5wbHVnaW5zLm5hdGl2ZXBhZ2V0cmFuc2l0aW9ucy5zbGlkZShcbiAgICAgIC8vICAgICAgIG9wdGlvbnMsXG4gICAgICAvLyAgICAgICBmdW5jdGlvbiAobXNnKSB7Y29uc29sZS5sb2coXCJzdWNjZXNzOiBcIiArIG1zZyl9LCAvLyBjYWxsZWQgd2hlbiB0aGUgYW5pbWF0aW9uIGhhcyBmaW5pc2hlZFxuICAgICAgLy8gICAgICAgZnVuY3Rpb24gKG1zZykge2FsZXJ0KFwiZXJyb3I6IFwiICsgbXNnKX0gLy8gY2FsbGVkIGluIGNhc2UgeW91IHBhc3MgaW4gd2VpcmQgdmFsdWVzXG4gICAgICAvLyAgICAgKTtcbiAgICAgIC8vICAgfSBlbHNlIHtcbiAgICAgIC8vICAgICByb3V0ZXIubmF2aWdhdGUoaHJlZik7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG5cbiAgfVxuXG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5fY29udHJvbC5vbigndG91Y2gnLCAoKT0+IHtcbiAgICAgIHRoaXMuZ28odGhpcy5ocmVmKTtcbiAgICB9KTtcbiAgICAvLyB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5hY2NvcmRpb25Db250YWluZXIpO1xuICAgIHRoaXMuaW5pdGlhbEhlaWdodCA9IHRoaXMuZWxlbWVudC5jbGllbnRIZWlnaHQ7XG4gICAgLy8gdGhpcy5jb250YWluZXJIZWlnaHQgPSB0aGlzLmNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gIH1cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5fY29udHJvbC5kZXN0cm95KCk7XG4gIH1cbiAgYWNjb3JkaW9uQ2hhbmdlZChhY2NvcmRpb24pIHtcbiAgICAvLyB0aGlzLmlzQWNjb3JkaW9uSXRlbSA9IHRydWU7XG4gICAgLy8gaWYgKHRoaXMuaGVhZGVyKSB0aGlzLmhlYWRlci5pc0FjY29yZGlvbkl0ZW0gPSB0cnVlO1xuICB9XG5cbiAgaHJlZkNoYW5nZWQoaHJlZikge1xuICAgIGlmIChocmVmICYmICF0aGlzLmlzSHJlZkNhbGxiYWNrKSB7XG4gICAgICB0aGlzLmlzSHJlZkNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgIHRoaXMub25DbGljayhldmVudCA9PiB0aGlzLmdvKHRoaXMuaHJlZikgKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpcy1hY3RpdmUnKTtcbiAgfVxuXG4gIGhyZWZDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpdGVtLWxpbmsnKTtcbiAgfVxuXG4gIHNldEhlYWRlcihoZWFkZXIpIHtcbiAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgfVxuXG4gIG9uQ2xpY2soY2IpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goY2IpO1xuICB9XG5cbiAgX2NsaWNrKGV2ZW50KSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVycy5mb3JFYWNoKGNiID0+IHtcbiAgICAgIGNiKGV2ZW50LCB0aGlzKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
