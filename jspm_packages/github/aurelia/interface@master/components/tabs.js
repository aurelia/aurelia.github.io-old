/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-interface-platforms'], function (exports, _aureliaFramework, _aureliaPal, _aureliaInterfacePlatforms) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AITabsComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AITabsComponent, [{
      key: 'activeTab',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'select',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'tabs',
      decorators: [(0, _aureliaFramework.children)('ai-tab')],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }, {
      key: 'indicator',
      decorators: [(0, _aureliaFramework.child)('tab-indicator')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AITabsComponent(element) {
      _classCallCheck(this, _AITabsComponent);

      _defineDecoratedPropertyDescriptor(this, 'activeTab', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'select', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'tabs', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'indicator', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(AITabsComponent, [{
      key: 'activeTabChanged',
      value: function activeTabChanged(tab, lastTab) {
        if (lastTab) lastTab.active = false;
        if (this.indicator) {
          this.indicator.setPosition(this.activeTab);
        }
        this.select.active = tab;
      }
    }, {
      key: 'tabsChanged',
      value: function tabsChanged() {
        var _this = this;

        this.tabs.forEach(function (tab) {
          if (tab.active) _this.activeTab = tab;
        });
        if (!this.activeTab) this.activeTab = this.tabs[0];
      }
    }], null, _instanceInitializers);

    var _AITabsComponent = AITabsComponent;
    AITabsComponent = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(AITabsComponent) || AITabsComponent;
    AITabsComponent = (0, _aureliaFramework.customElement)('ai-tabs')(AITabsComponent) || AITabsComponent;
    return AITabsComponent;
  })();

  exports.AITabsComponent = AITabsComponent;

  var AITabElement = (function () {
    var _instanceInitializers2 = {};
    var _instanceInitializers2 = {};

    _createDecoratedClass(AITabElement, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'tabRef',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'tabView',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers2);

    function AITabElement(element, tabsComponent) {
      _classCallCheck(this, _AITabElement);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);

      _defineDecoratedPropertyDescriptor(this, 'tabRef', _instanceInitializers2);

      _defineDecoratedPropertyDescriptor(this, 'tabView', _instanceInitializers2);

      this.element = element;
      this.tabsComponent = tabsComponent;
    }

    _createDecoratedClass(AITabElement, [{
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) {
          this.tabsComponent.activeTab = this;
        }
      }
    }, {
      key: 'onTouch',
      value: function onTouch() {
        this.active = true;
      }
    }], null, _instanceInitializers2);

    var _AITabElement = AITabElement;
    AITabElement = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, AITabsComponent)(AITabElement) || AITabElement;
    AITabElement = (0, _aureliaFramework.useView)('./touch-content.html')(AITabElement) || AITabElement;
    AITabElement = (0, _aureliaFramework.customElement)('ai-tab')(AITabElement) || AITabElement;
    return AITabElement;
  })();

  exports.AITabElement = AITabElement;

  var AITabView = (function () {
    var _instanceInitializers3 = {};

    _createDecoratedClass(AITabView, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers3);

    function AITabView(element) {
      _classCallCheck(this, _AITabView);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers3);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers3);

      this.element = element;
    }

    var _AITabView = AITabView;
    AITabView = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(AITabView) || AITabView;
    AITabView = (0, _aureliaFramework.useView)('./content.html')(AITabView) || AITabView;
    AITabView = (0, _aureliaFramework.customElement)('ai-tab-view')(AITabView) || AITabView;
    return AITabView;
  })();

  exports.AITabView = AITabView;

  var AITabContentElement = (function () {
    var _instanceInitializers4 = {};
    var _instanceInitializers4 = {};

    _createDecoratedClass(AITabContentElement, [{
      key: 'contentItems',
      decorators: [(0, _aureliaFramework.children)('ai-tab-view')],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }, {
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers4);

    function AITabContentElement(element) {
      _classCallCheck(this, _AITabContentElement);

      _defineDecoratedPropertyDescriptor(this, 'contentItems', _instanceInitializers4);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers4);

      this.views = {};

      this.element = element;
    }

    _createDecoratedClass(AITabContentElement, [{
      key: 'contentItemsChanged',
      value: function contentItemsChanged() {
        var _this2 = this;

        this.contentItems.forEach(function (item) {
          _this2.views[item.name] = item;
          _this2.container.appendChild(item.element);
        });
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(tab) {
        var name = tab;
        if (typeof tab === 'object') {
          name = tab.tabRef;
        }

        if (name in this.views) {
          var item = this.views[name];
          this.transformContainer(item.element);
        }
      }
    }, {
      key: 'transformContainer',
      value: function transformContainer(element) {
        var left = element.offsetLeft;
        this.transform = 'translateX(-' + left + 'px)';
      }
    }], null, _instanceInitializers4);

    var _AITabContentElement = AITabContentElement;
    AITabContentElement = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(AITabContentElement) || AITabContentElement;
    AITabContentElement = (0, _aureliaFramework.useView)('./tab-content.html')(AITabContentElement) || AITabContentElement;
    AITabContentElement = (0, _aureliaFramework.customElement)('ai-tab-content')(AITabContentElement) || AITabContentElement;
    return AITabContentElement;
  })();

  exports.AITabContentElement = AITabContentElement;
});
//# sourceMappingURL=data:application/json;base64,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SSxDQUFDLENBQUM7QUFDNUIsY0FBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztPQUNGOzs7YUFFaUIsNEJBQUMsT0FBTyxFQUFFO0FBQzFCLFlBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDOUIsWUFBSSxDQUFDLFNBQVMsb0JBQWtCLElBQUksUUFBSyxDQUFDO09BQzNDOzs7K0JBL0JVLG1CQUFtQjtBQUFuQix1QkFBbUIsR0FEL0Isc0JBMUU2RyxNQUFNLEVBMEU1RyxZQXpFQSxHQUFHLENBeUVDLE9BQU8sQ0FBQyxDQUNQLG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsdUJBQW1CLEdBRi9CLHNCQXpFMkUsT0FBTyxFQXlFMUUsb0JBQW9CLENBQUMsQ0FFakIsbUJBQW1CLEtBQW5CLG1CQUFtQjtBQUFuQix1QkFBbUIsR0FIL0Isc0JBeEVvRixhQUFhLEVBd0VuRixnQkFBZ0IsQ0FBQyxDQUduQixtQkFBbUIsS0FBbkIsbUJBQW1CO1dBQW5CLG1CQUFtQiIsImZpbGUiOiJjb21wb25lbnRzL3RhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JvdW5kVmlld0ZhY3RvcnksIFZpZXdTbG90LCB0ZW1wbGF0ZUNvbnRyb2xsZXIsIG5vVmlldywgaW5saW5lVmlldywgdXNlVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgY2hpbGRyZW4sIGNoaWxkfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtzdXBwb3J0fSBmcm9tICdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnO1xuXG5cbkBjdXN0b21FbGVtZW50KCdhaS10YWJzJylcbkBpbmplY3QoRE9NLkVsZW1lbnQpXG5leHBvcnQgY2xhc3MgQUlUYWJzQ29tcG9uZW50IHtcbiAgQGJpbmRhYmxlIGFjdGl2ZVRhYiA9IG51bGw7XG4gIEBiaW5kYWJsZSBzZWxlY3QgPSBudWxsO1xuICBAY2hpbGRyZW4oJ2FpLXRhYicpIHRhYnMgPSBbXTtcbiAgQGNoaWxkKCd0YWItaW5kaWNhdG9yJykgaW5kaWNhdG9yID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGFjdGl2ZVRhYkNoYW5nZWQodGFiLCBsYXN0VGFiKSB7XG4gICAgaWYgKGxhc3RUYWIpIGxhc3RUYWIuYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKHRoaXMuaW5kaWNhdG9yKSB7XG4gICAgICB0aGlzLmluZGljYXRvci5zZXRQb3NpdGlvbih0aGlzLmFjdGl2ZVRhYik7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0LmFjdGl2ZSA9IHRhYjtcbiAgfVxuXG4gIHRhYnNDaGFuZ2VkKCkge1xuICAgIHRoaXMudGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICBpZiAodGFiLmFjdGl2ZSkgdGhpcy5hY3RpdmVUYWIgPSB0YWI7XG4gICAgfSk7XG4gICAgaWYgKCF0aGlzLmFjdGl2ZVRhYikgdGhpcy5hY3RpdmVUYWIgPSB0aGlzLnRhYnNbMF07XG4gIH1cbn1cblxuXG5AY3VzdG9tRWxlbWVudCgnYWktdGFiJylcbkB1c2VWaWV3KCcuL3RvdWNoLWNvbnRlbnQuaHRtbCcpXG5AaW5qZWN0KERPTS5FbGVtZW50LCBBSVRhYnNDb21wb25lbnQpXG5leHBvcnQgY2xhc3MgQUlUYWJFbGVtZW50IHtcblxuICBAYmluZGFibGUgYWN0aXZlO1xuICBAYmluZGFibGUgdGFiUmVmID0gbnVsbDtcbiAgQGJpbmRhYmxlIHRhYlZpZXcgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRhYnNDb21wb25lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMudGFic0NvbXBvbmVudCA9IHRhYnNDb21wb25lbnQ7XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnRhYnNDb21wb25lbnQuYWN0aXZlVGFiID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBvblRvdWNoKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktdGFiLXZpZXcnKVxuQHVzZVZpZXcoJy4vY29udGVudC5odG1sJylcbkBpbmplY3QoRE9NLkVsZW1lbnQpXG5leHBvcnQgY2xhc3MgQUlUYWJWaWV3IHtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBuYW1lID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG5cbkBjdXN0b21FbGVtZW50KCdhaS10YWItY29udGVudCcpXG5AdXNlVmlldygnLi90YWItY29udGVudC5odG1sJylcbkBpbmplY3QoRE9NLkVsZW1lbnQpXG5leHBvcnQgY2xhc3MgQUlUYWJDb250ZW50RWxlbWVudCB7XG4gIEBjaGlsZHJlbignYWktdGFiLXZpZXcnKSBjb250ZW50SXRlbXMgPSBbXTtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG5cbiAgdmlld3MgPSB7fTtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBjb250ZW50SXRlbXNDaGFuZ2VkKCkge1xuICAgIHRoaXMuY29udGVudEl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB0aGlzLnZpZXdzW2l0ZW0ubmFtZV0gPSBpdGVtO1xuICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbS5lbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodGFiKSB7XG4gICAgbGV0IG5hbWUgPSB0YWI7XG4gICAgaWYgKHR5cGVvZiB0YWIgPT09ICdvYmplY3QnKSB7XG4gICAgICBuYW1lID0gdGFiLnRhYlJlZjtcbiAgICB9XG5cbiAgICBpZiAobmFtZSBpbiB0aGlzLnZpZXdzKSB7XG4gICAgICBsZXQgaXRlbSA9IHRoaXMudmlld3NbbmFtZV07XG4gICAgICB0aGlzLnRyYW5zZm9ybUNvbnRhaW5lcihpdGVtLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zZm9ybUNvbnRhaW5lcihlbGVtZW50KSB7XG4gICAgbGV0IGxlZnQgPSBlbGVtZW50Lm9mZnNldExlZnQ7XG4gICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgtJHtsZWZ0fXB4KWA7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
