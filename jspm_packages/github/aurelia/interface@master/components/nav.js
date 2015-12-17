/* */ 
define(['exports', 'aurelia-framework', 'aurelia-router', 'aurelia-interface-platforms', '../channel', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaRouter, _aureliaInterfacePlatforms, _channel, _aureliaEventAggregator) {
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

  var NavDropdownComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(NavDropdownComponent, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function NavDropdownComponent(element, channel) {
      _classCallCheck(this, _NavDropdownComponent);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.element = element;
      this.channel = channel;
    }

    _createDecoratedClass(NavDropdownComponent, [{
      key: 'activeChanged',
      value: function activeChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('is-active');
        this.animation = value ? 'slideDown' : 'slideUp';
        this[value ? '_show' : '_hide']();
      }
    }, {
      key: '_show',
      value: function _show() {
        var _this = this;

        this.navigationSubscription = this.channel.subscribeOnce('navigate', function () {
          return _this.hide();
        });
        return Velocity(this.element, this.animation, {
          duration: '500ms',
          easing: 'easeOutExpo'
        });
      }
    }, {
      key: '_hide',
      value: function _hide() {
        this.navigationSubscription.dispose();
        return Velocity(this.element, this.animation, {
          duration: '500ms',
          easing: 'easeOutExpo'
        });
      }
    }, {
      key: 'show',
      value: function show() {
        this.active = true;
      }
    }, {
      key: 'hide',
      value: function hide() {
        this.active = false;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this.active = !this.active;
      }
    }], null, _instanceInitializers);

    var _NavDropdownComponent = NavDropdownComponent;
    NavDropdownComponent = (0, _aureliaFramework.useView)('./content.html')(NavDropdownComponent) || NavDropdownComponent;
    NavDropdownComponent = (0, _aureliaFramework.inject)(Element, _channel.InterfaceChannel)(NavDropdownComponent) || NavDropdownComponent;
    NavDropdownComponent = (0, _aureliaFramework.customElement)('ai-nav-dropdown')(NavDropdownComponent) || NavDropdownComponent;
    return NavDropdownComponent;
  })();

  exports.NavDropdownComponent = NavDropdownComponent;

  var NavElement = (function () {
    var _instanceInitializers2 = {};
    var _instanceInitializers2 = {};

    _createDecoratedClass(NavElement, [{
      key: 'indicator',
      decorators: [(0, _aureliaFramework.child)('nav-indicator')],
      initializer: null,
      enumerable: true
    }, {
      key: 'links',
      decorators: [(0, _aureliaFramework.children)('ai-link')],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }], null, _instanceInitializers2);

    function NavElement(element) {
      _classCallCheck(this, _NavElement);

      _defineDecoratedPropertyDescriptor(this, 'indicator', _instanceInitializers2);

      _defineDecoratedPropertyDescriptor(this, 'links', _instanceInitializers2);

      this.element = element;
    }

    _createDecoratedClass(NavElement, [{
      key: 'linksChanged',
      value: function linksChanged() {
        var _this2 = this;

        this.links.forEach(function (link) {
          link.onActiveChanged(function () {
            return _this2.setIndicator.apply(_this2, arguments);
          });
        });
      }
    }, {
      key: 'setIndicator',
      value: function setIndicator(value, oldValue, item) {
        if (!value) return;
        var node = item.element;
        var element = this.element;
        var indicator = this.indicator;

        if (indicator) {
          (function () {
            indicator.left = indicator.left || 0;
            var left = node.offsetLeft;
            var width = node.offsetWidth;
            var right = element.offsetWidth - (left + width);

            if (left > indicator.left) {
              indicator.style.right = right + 'px';
              runTimout(function () {
                indicator.style.left = left + 'px';
              });
            } else {
              indicator.style.left = left + 'px';
              runTimout(function () {
                indicator.style.right = right + 'px';
              });
            }
            indicator.left = left;
          })();
        }
      }
    }], null, _instanceInitializers2);

    var _NavElement = NavElement;
    NavElement = (0, _aureliaFramework.inject)(Element)(NavElement) || NavElement;
    NavElement = (0, _aureliaFramework.useView)('./content.html')(NavElement) || NavElement;
    NavElement = (0, _aureliaFramework.customElement)('ai-nav')(NavElement) || NavElement;
    return NavElement;
  })();

  exports.NavElement = NavElement;

  var NavLinkTemplate = '\n  <template touch.call="onTap($event)">\n    <ai-icon if.bind="icon" icon.bind="icon"></ai-icon>\n    <md-icon if.bind="mdIcon" icon.bind="mdIcon"></md-icon>\n    <content></content>\n  </template>\n';

  var NavLinkElement = (function () {
    var _instanceInitializers3 = {};
    var _instanceInitializers3 = {};

    _createDecoratedClass(NavLinkElement, [{
      key: 'href',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'mdIcon',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers3);

    function NavLinkElement(element, router, eventAggregator) {
      _classCallCheck(this, _NavLinkElement);

      _defineDecoratedPropertyDescriptor(this, 'href', _instanceInitializers3);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers3);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers3);

      _defineDecoratedPropertyDescriptor(this, 'mdIcon', _instanceInitializers3);

      this.isClickListener = true;
      this.isTouchListener = true;
      this.activeChangedListeners = [];

      this.element = element;
      this.onTap = this.onTap.bind(this);
      this.eventAggregator = eventAggregator;
      this.dropdownTrigger = this.dropdownTrigger || element.hasAttribute('dropdown-trigger');

      this.navigate = function (route) {
        router.navigate(route);
      };
    }

    _createDecoratedClass(NavLinkElement, [{
      key: 'activeChanged',
      value: function activeChanged(value, oldValue) {
        var _this3 = this;

        this.element.classList[value ? 'add' : 'remove']('is-active');

        this.activeChangedListeners.forEach(function (cb) {
          cb(value, oldValue, _this3);
        });
      }
    }, {
      key: 'onActiveChanged',
      value: function onActiveChanged(cb) {
        this.activeChangedListeners.push(cb);
      }
    }, {
      key: 'onTap',
      value: function onTap() {

        if (this.dropdownTrigger) {
          this.eventAggregator.publish('ai:nav-dropdown:toggle');
        } else {
          this.href && this.navigate(this.href);
        }
      }
    }], null, _instanceInitializers3);

    var _NavLinkElement = NavLinkElement;
    NavLinkElement = (0, _aureliaFramework.inject)(Element, _aureliaRouter.Router, _aureliaEventAggregator.EventAggregator)(NavLinkElement) || NavLinkElement;
    NavLinkElement = (0, _aureliaFramework.inlineView)(NavLinkTemplate)(NavLinkElement) || NavLinkElement;
    NavLinkElement = (0, _aureliaFramework.customElement)('ai-link')(NavLinkElement) || NavLinkElement;
    return NavLinkElement;
  })();

  exports.NavLinkElement = NavLinkElement;
});
//# sourceMappingURL=data:application/json;base64,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N0IsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQTs7QUFFN0QsWUFBSSxDQUFDLHNCQUFzQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUUsRUFBSTtBQUN4QyxZQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsU0FBTyxDQUFDO1NBQzNCLENBQUMsQ0FBQztPQUNKOzs7YUFFYyx5QkFBQyxFQUFFLEVBQUU7QUFDbEIsWUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtPQUNyQzs7O2FBRUksaUJBQUc7O0FBRU4sWUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO0FBQ3hCLGNBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDLENBQUE7U0FDdkQsTUFBTTtBQUNMLGNBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdkM7T0FFRjs7OzBCQXpDVSxjQUFjO0FBQWQsa0JBQWMsR0FEMUIsc0JBakhxRCxNQUFNLEVBaUhwRCxPQUFPLGlCQWhIUCxNQUFNLDBCQUdOLGVBQWUsQ0E2R2tCLENBQzVCLGNBQWMsS0FBZCxjQUFjO0FBQWQsa0JBQWMsR0FGMUIsc0JBaEhnQixVQUFVLEVBZ0hmLGVBQWUsQ0FBQyxDQUVmLGNBQWMsS0FBZCxjQUFjO0FBQWQsa0JBQWMsR0FIMUIsc0JBL0c0QixhQUFhLEVBK0czQixTQUFTLENBQUMsQ0FHWixjQUFjLEtBQWQsY0FBYztXQUFkLGNBQWMiLCJmaWxlIjoiY29tcG9uZW50cy9uYXYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVZpZXcsIGlubGluZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkLCBjaGlsZHJlbn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7c3VwcG9ydH0gZnJvbSAnYXVyZWxpYS1pbnRlcmZhY2UtcGxhdGZvcm1zJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcblxuXG5mdW5jdGlvbiBydW5UaW1vdXQoY2IpIHtcbiAgbGV0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCk9PiB7XG4gICAgY2IoKTtcbiAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgfSwgMTUwKTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLW5hdi1kcm9wZG93bicpXG5AaW5qZWN0KEVsZW1lbnQsIEludGVyZmFjZUNoYW5uZWwpXG5AdXNlVmlldygnLi9jb250ZW50Lmh0bWwnKVxuZXhwb3J0IGNsYXNzIE5hdkRyb3Bkb3duQ29tcG9uZW50IHtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY2hhbm5lbCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lzLWFjdGl2ZScpO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gdmFsdWUgPyAnc2xpZGVEb3duJyA6ICdzbGlkZVVwJ1xuICAgIHRoaXNbdmFsdWUgPyAnX3Nob3cnIDogJ19oaWRlJ10oKTtcbiAgfVxuXG4gIF9zaG93KCkge1xuICAgIHRoaXMubmF2aWdhdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuY2hhbm5lbC5zdWJzY3JpYmVPbmNlKCduYXZpZ2F0ZScsICgpPT4gdGhpcy5oaWRlKCkpO1xuICAgIHJldHVybiBWZWxvY2l0eSh0aGlzLmVsZW1lbnQsIHRoaXMuYW5pbWF0aW9uLCB7XG4gICAgICBkdXJhdGlvbjogJzUwMG1zJyxcbiAgICAgIGVhc2luZzogJ2Vhc2VPdXRFeHBvJ1xuICAgIH0pO1xuICB9XG5cbiAgX2hpZGUoKSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICByZXR1cm4gVmVsb2NpdHkodGhpcy5lbGVtZW50LCB0aGlzLmFuaW1hdGlvbiwge1xuICAgICAgZHVyYXRpb246ICc1MDBtcycsXG4gICAgICBlYXNpbmc6ICdlYXNlT3V0RXhwbydcbiAgICB9KTtcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICB9XG4gIGhpZGUoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuICB0b2dnbGUoKSB7XG4gICAgdGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmU7XG4gIH1cbn1cblxuXG5AY3VzdG9tRWxlbWVudCgnYWktbmF2JylcbkB1c2VWaWV3KCcuL2NvbnRlbnQuaHRtbCcpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgTmF2RWxlbWVudCB7XG4gIEBjaGlsZCgnbmF2LWluZGljYXRvcicpIGluZGljYXRvcjtcbiAgQGNoaWxkcmVuKCdhaS1saW5rJykgbGlua3MgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGxpbmtzQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICBsaW5rLm9uQWN0aXZlQ2hhbmdlZCgoLi4uYXJncyk9PiB0aGlzLnNldEluZGljYXRvciguLi5hcmdzKSlcbiAgICB9KTtcbiAgfVxuXG4gIHNldEluZGljYXRvcih2YWx1ZSwgb2xkVmFsdWUsIGl0ZW0pIHtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG4gICAgbGV0IG5vZGUgPSBpdGVtLmVsZW1lbnQ7XG4gICAgbGV0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnQ7XG4gICAgbGV0IGluZGljYXRvciA9IHRoaXMuaW5kaWNhdG9yO1xuXG4gICAgaWYgKGluZGljYXRvcikge1xuICAgICAgaW5kaWNhdG9yLmxlZnQgPSBpbmRpY2F0b3IubGVmdCB8fCAwO1xuICAgICAgbGV0IGxlZnQgPSBub2RlLm9mZnNldExlZnQ7XG4gICAgICBsZXQgd2lkdGggPSBub2RlLm9mZnNldFdpZHRoO1xuICAgICAgbGV0IHJpZ2h0ID0gKGVsZW1lbnQub2Zmc2V0V2lkdGggLSAobGVmdCArIHdpZHRoKSk7XG5cbiAgICAgIGlmIChsZWZ0ID4gaW5kaWNhdG9yLmxlZnQpIHtcbiAgICAgICAgaW5kaWNhdG9yLnN0eWxlLnJpZ2h0ID0gKHJpZ2h0ICsgJ3B4Jyk7XG4gICAgICAgIHJ1blRpbW91dCgoKT0+IHtcbiAgICAgICAgICBpbmRpY2F0b3Iuc3R5bGUubGVmdCA9IChsZWZ0ICsgJ3B4Jyk7XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmRpY2F0b3Iuc3R5bGUubGVmdCA9IChsZWZ0ICsgJ3B4Jyk7XG4gICAgICAgIHJ1blRpbW91dCgoKT0+IHtcbiAgICAgICAgICBpbmRpY2F0b3Iuc3R5bGUucmlnaHQgPSAocmlnaHQgKyAncHgnKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICAgIGluZGljYXRvci5sZWZ0ID0gbGVmdDtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgTmF2TGlua1RlbXBsYXRlID0gYFxuICA8dGVtcGxhdGUgdG91Y2guY2FsbD1cIm9uVGFwKCRldmVudClcIj5cbiAgICA8YWktaWNvbiBpZi5iaW5kPVwiaWNvblwiIGljb24uYmluZD1cImljb25cIj48L2FpLWljb24+XG4gICAgPG1kLWljb24gaWYuYmluZD1cIm1kSWNvblwiIGljb24uYmluZD1cIm1kSWNvblwiPjwvbWQtaWNvbj5cbiAgICA8Y29udGVudD48L2NvbnRlbnQ+XG4gIDwvdGVtcGxhdGU+XG5gO1xuQGN1c3RvbUVsZW1lbnQoJ2FpLWxpbmsnKVxuQGlubGluZVZpZXcoTmF2TGlua1RlbXBsYXRlKVxuQGluamVjdChFbGVtZW50LCBSb3V0ZXIsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBOYXZMaW5rRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBocmVmO1xuICBAYmluZGFibGUgYWN0aXZlO1xuICBAYmluZGFibGUgaWNvbjtcbiAgQGJpbmRhYmxlIG1kSWNvbjtcblxuICBpc0NsaWNrTGlzdGVuZXIgPSB0cnVlO1xuICBpc1RvdWNoTGlzdGVuZXIgPSB0cnVlO1xuICBhY3RpdmVDaGFuZ2VkTGlzdGVuZXJzID0gW107XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgcm91dGVyLCBldmVudEFnZ3JlZ2F0b3IpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMub25UYXAgPSB0aGlzLm9uVGFwLmJpbmQodGhpcyk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgdGhpcy5kcm9wZG93blRyaWdnZXIgPSB0aGlzLmRyb3Bkb3duVHJpZ2dlciB8fCBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZHJvcGRvd24tdHJpZ2dlcicpXG5cbiAgICB0aGlzLm5hdmlnYXRlID0gZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShyb3V0ZSk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lzLWFjdGl2ZScpXG5cbiAgICB0aGlzLmFjdGl2ZUNoYW5nZWRMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiB7XG4gICAgICBjYih2YWx1ZSwgb2xkVmFsdWUsIHRoaXMpO1xuICAgIH0pO1xuICB9XG5cbiAgb25BY3RpdmVDaGFuZ2VkKGNiKSB7XG4gICAgdGhpcy5hY3RpdmVDaGFuZ2VkTGlzdGVuZXJzLnB1c2goY2IpXG4gIH1cblxuICBvblRhcCgpIHtcblxuICAgIGlmICh0aGlzLmRyb3Bkb3duVHJpZ2dlcikge1xuICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnYWk6bmF2LWRyb3Bkb3duOnRvZ2dsZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaHJlZiAmJiB0aGlzLm5hdmlnYXRlKHRoaXMuaHJlZik7XG4gICAgfVxuXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
