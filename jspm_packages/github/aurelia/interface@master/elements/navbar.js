/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-router', 'aurelia-event-aggregator', '../channel'], function (exports, _aureliaFramework, _aureliaPal, _aureliaRouter, _aureliaEventAggregator, _channel) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var __globalNavbar = __globalNavbar || undefined;
  var NAV_BAR_DEFAULTS = {
    backgroud: '',
    hide: false
  };

  var Navbar = (function () {
    _createClass(Navbar, null, [{
      key: 'backgroundDarkOpaque',
      value: function backgroundDarkOpaque() {
        NAV_BAR_DEFAULTS.backgroud = 'navbar-dark-opaque';
        if (__globalNavbar) {
          __globalNavbar.resetStyle();
        }
      }
    }, {
      key: 'backgroundLightOpaque',
      value: function backgroundLightOpaque() {
        NAV_BAR_DEFAULTS.backgroud = 'navbar-light-opaque';
        if (__globalNavbar) {
          __globalNavbar.resetStyle();
        }
      }
    }, {
      key: 'hideNavbar',
      value: function hideNavbar() {
        if (__globalNavbar) {
          return __globalNavbar.hide();
        } else {
          NAV_BAR_DEFAULTS.hide = true;
        }
      }
    }, {
      key: 'showNavbar',
      value: function showNavbar() {
        if (__globalNavbar) {
          return __globalNavbar.show();
        } else {
          NAV_BAR_DEFAULTS.hide = false;
        }
      }
    }]);

    function Navbar(container) {
      _classCallCheck(this, Navbar);

      this.navbar = container.root.get(NavbarElement);
    }

    return Navbar;
  })();

  exports.Navbar = Navbar;

  var NavbarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(NavbarElement, [{
      key: 'size',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'slot',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'nav',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'router',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'backgroundClass',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'right',
      decorators: [(0, _aureliaFramework.child)('[right]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'left',
      decorators: [(0, _aureliaFramework.child)('[left]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'center',
      decorators: [(0, _aureliaFramework.child)('[center]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'brand',
      decorators: [(0, _aureliaFramework.child)('[brand]')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function NavbarElement(element, container, channel, router) {
      _classCallCheck(this, _NavbarElement);

      _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'slot', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'nav', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'router', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'backgroundClass', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'right', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'left', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'center', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'brand', _instanceInitializers);

      this.isShown = true;
      this.config = {};
      this.fragment = _aureliaPal.DOM.createDocumentFragment();

      this.channel = channel;
      this.element = element;
      this.container = container;
      this.config = {};
      __globalNavbar = this;
      this.backgroundClass = NAV_BAR_DEFAULTS.backgroud;

      this.navigateBack = function () {
        router.history.navigateBack();
      };

      this.navigate = function (route) {
        router.navigate(route);
      };
    }

    _createDecoratedClass(NavbarElement, [{
      key: 'attached',
      value: function attached() {
        if (NAV_BAR_DEFAULTS.hide) {
          this.hide();
        }
        this.placeholder = this.createPlaceholder();
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.fragment.appendChild(this.placeholder);
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        this.placeholder.remove();
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this = this;

        if (!this.isShown) return Promise.resolve();
        this.isShown = false;
        return Velocity(this.element, {
          translateY: '-100%'
        }).then(function () {
          return _this.element.dispatchEvent(new Event('velocity-animation'));
        });
      }
    }, {
      key: 'show',
      value: function show() {
        var _this2 = this;

        if (this.isShown) return Promise.resolve();
        this.isShown = true;
        return Velocity(this.element, {
          translateY: '0'
        }).then(function () {
          return _this2.element.dispatchEvent(new Event('velocity-animation'));
        });
      }
    }, {
      key: 'createPlaceholder',
      value: function createPlaceholder() {
        var element = this.element;
        var placeholder = _aureliaPal.DOM.createElement('navbar-placeholder');
        placeholder.style.display = 'block';
        placeholder.style.width = '100%';
        placeholder.style.height = element.clientHeight + 'px';
        placeholder.style.maxHeight = element.clientHeight + 'px';
        return placeholder;
      }
    }, {
      key: 'backgroundClassChanged',
      value: function backgroundClassChanged(bg, oldBg) {
        this.element.classList.remove(oldBg);
        this.element.classList.add(bg);
      }
    }], null, _instanceInitializers);

    var _NavbarElement = NavbarElement;
    NavbarElement = (0, _aureliaFramework.inject)(Element, _aureliaFramework.Container, _channel.InterfaceChannel, _aureliaRouter.Router)(NavbarElement) || NavbarElement;
    NavbarElement = (0, _aureliaFramework.transient)()(NavbarElement) || NavbarElement;
    NavbarElement = (0, _aureliaFramework.customElement)('ai-navbar')(NavbarElement) || NavbarElement;
    return NavbarElement;
  })();

  exports.NavbarElement = NavbarElement;

  var NavLinkTemplate = '\n  <template click.trigger="onClick($event)">\n    <ai-icon if.bind="icon" icon.bind="icon"></ai-icon>\n    <md-icon if.bind="mdIcon" icon.bind="mdIcon"></md-icon>\n    <content></content>\n  </template>\n';

  var NavLinkElement = (function () {
    var _instanceInitializers2 = {};
    var _instanceInitializers2 = {};

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
    }], null, _instanceInitializers2);

    function NavLinkElement(element, router) {
      _classCallCheck(this, _NavLinkElement);

      _defineDecoratedPropertyDescriptor(this, 'href', _instanceInitializers2);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers2);

      _defineDecoratedPropertyDescriptor(this, 'mdIcon', _instanceInitializers2);

      this.element = element;

      this.navigate = function (route) {
        router.navigate(route);
      };
    }

    _createDecoratedClass(NavLinkElement, [{
      key: 'activeChanged',
      value: function activeChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('is-active');
      }
    }, {
      key: 'onClick',
      value: function onClick() {
        if (this.href) {
          this.navigate(this.href);
        }
      }
    }], null, _instanceInitializers2);

    var _NavLinkElement = NavLinkElement;
    NavLinkElement = (0, _aureliaFramework.inject)(Element, _aureliaRouter.Router)(NavLinkElement) || NavLinkElement;
    NavLinkElement = (0, _aureliaFramework.inlineView)(NavLinkTemplate)(NavLinkElement) || NavLinkElement;
    NavLinkElement = (0, _aureliaFramework.customElement)('ai-link')(NavLinkElement) || NavLinkElement;
    return NavLinkElement;
  })();

  exports.NavLinkElement = NavLinkElement;
});
//# sourceMappingURL=data:application/json;base64,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UTs7Ozs7QUEySnpDLGFBTkEsY0FBYyxDQU1iLE9BQU8sRUFBRSxNQUFNLEVBQUU7Ozs7Ozs7Ozs7O0FBQzNCLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDOztBQUV2QixVQUFJLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSyxFQUFFO0FBQzlCLGNBQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7T0FDeEIsQ0FBQTtLQUNGOzswQkFaVSxjQUFjOzthQWNaLHVCQUFDLEtBQUssRUFBRTtBQUNuQixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFBO09BQzlEOzs7YUFFTSxtQkFBRztBQUNSLFlBQUksSUFBSSxDQUFDLElBQUksRUFBRTtBQUNiLGNBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO09BQ0Y7OzswQkF0QlUsY0FBYztBQUFkLGtCQUFjLEdBRDFCLHNCQXBKdUQsTUFBTSxFQW9KdEQsT0FBTyxpQkFsSlAsTUFBTSxDQWtKVSxDQUNYLGNBQWMsS0FBZCxjQUFjO0FBQWQsa0JBQWMsR0FGMUIsc0JBbkprQixVQUFVLEVBbUpqQixlQUFlLENBQUMsQ0FFZixjQUFjLEtBQWQsY0FBYztBQUFkLGtCQUFjLEdBSDFCLHNCQWxKOEIsYUFBYSxFQWtKN0IsU0FBUyxDQUFDLENBR1osY0FBYyxLQUFkLGNBQWM7V0FBZCxjQUFjIiwiZmlsZSI6ImVsZW1lbnRzL25hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dHJhbnNpZW50LCBpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBDb250YWluZXIsIGNoaWxkLCBPcHRpb25hbH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi4vY2hhbm5lbCc7XG5cbmxldCBfX2dsb2JhbE5hdmJhciA9IF9fZ2xvYmFsTmF2YmFyIHx8IHVuZGVmaW5lZDtcbmxldCBOQVZfQkFSX0RFRkFVTFRTID0ge1xuICBiYWNrZ3JvdWQ6ICcnLFxuICBoaWRlOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBjbGFzcyBOYXZiYXIge1xuXG4gIHN0YXRpYyBiYWNrZ3JvdW5kRGFya09wYXF1ZSgpIHtcbiAgICBOQVZfQkFSX0RFRkFVTFRTLmJhY2tncm91ZCA9ICduYXZiYXItZGFyay1vcGFxdWUnO1xuICAgIGlmIChfX2dsb2JhbE5hdmJhcikge1xuICAgICAgX19nbG9iYWxOYXZiYXIucmVzZXRTdHlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBiYWNrZ3JvdW5kTGlnaHRPcGFxdWUoKSB7XG4gICAgTkFWX0JBUl9ERUZBVUxUUy5iYWNrZ3JvdWQgPSAnbmF2YmFyLWxpZ2h0LW9wYXF1ZSc7XG4gICAgaWYgKF9fZ2xvYmFsTmF2YmFyKSB7XG4gICAgICBfX2dsb2JhbE5hdmJhci5yZXNldFN0eWxlKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGhpZGVOYXZiYXIoKSB7XG4gICAgaWYgKF9fZ2xvYmFsTmF2YmFyKSB7XG4gICAgICByZXR1cm4gX19nbG9iYWxOYXZiYXIuaGlkZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBOQVZfQkFSX0RFRkFVTFRTLmhpZGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBzaG93TmF2YmFyKCkge1xuICAgIGlmIChfX2dsb2JhbE5hdmJhcikge1xuICAgICAgcmV0dXJuIF9fZ2xvYmFsTmF2YmFyLnNob3coKVxuICAgIH0gZWxzZSB7XG4gICAgICBOQVZfQkFSX0RFRkFVTFRTLmhpZGUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcbiAgICB0aGlzLm5hdmJhciA9IGNvbnRhaW5lci5yb290LmdldChOYXZiYXJFbGVtZW50KTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktbmF2YmFyJylcbkB0cmFuc2llbnQoKVxuQGluamVjdChFbGVtZW50LCBDb250YWluZXIsIEludGVyZmFjZUNoYW5uZWwsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBOYXZiYXJFbGVtZW50IHtcbiAgQGJpbmRhYmxlIHNpemUgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBzbG90ICAgPSBudWxsO1xuICBAYmluZGFibGUgbmF2ICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHJvdXRlciA9IG51bGw7XG4gIEBiaW5kYWJsZSBiYWNrZ3JvdW5kQ2xhc3M7XG5cbiAgQGNoaWxkKCdbcmlnaHRdJykgcmlnaHQgPSBudWxsO1xuICBAY2hpbGQoJ1tsZWZ0XScpIGxlZnQgPSBudWxsO1xuICBAY2hpbGQoJ1tjZW50ZXJdJykgY2VudGVyID0gbnVsbDtcbiAgQGNoaWxkKCdbYnJhbmRdJykgYnJhbmQgPSBudWxsO1xuXG4gIGlzU2hvd24gICAgID0gdHJ1ZTtcbiAgY29uZmlnICAgICAgPSB7fTtcbiAgZnJhZ21lbnQgICAgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lciwgY2hhbm5lbCwgcm91dGVyKSB7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuY29uZmlnID0ge307XG4gICAgX19nbG9iYWxOYXZiYXIgPSB0aGlzO1xuICAgIHRoaXMuYmFja2dyb3VuZENsYXNzID0gTkFWX0JBUl9ERUZBVUxUUy5iYWNrZ3JvdWQ7XG5cblxuICAgIHRoaXMubmF2aWdhdGVCYWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICByb3V0ZXIuaGlzdG9yeS5uYXZpZ2F0ZUJhY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLm5hdmlnYXRlID0gZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShyb3V0ZSk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKE5BVl9CQVJfREVGQVVMVFMuaGlkZSkge1xuICAgICAgdGhpcy5oaWRlKCk7XG4gICAgfVxuICAgIHRoaXMucGxhY2Vob2xkZXIgPSB0aGlzLmNyZWF0ZVBsYWNlaG9sZGVyKCk7XG4gICAgLy8gdGhpcy5lbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5pbnNlcnRCZWZvcmUodGhpcy5wbGFjZWhvbGRlciwgdGhpcy5lbGVtZW50Lm5leHRFbGVtZW50U2libGluZy5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5wbGFjZWhvbGRlcik7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgdGhpcy5wbGFjZWhvbGRlci5yZW1vdmUoKTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKCF0aGlzLmlzU2hvd24pIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcbiAgICByZXR1cm4gVmVsb2NpdHkodGhpcy5lbGVtZW50LCB7XG4gICAgICB0cmFuc2xhdGVZOiAnLTEwMCUnLFxuICAgIH0pLnRoZW4oKCk9PiB7XG4gICAgICByZXR1cm4gdGhpcy5lbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2ZWxvY2l0eS1hbmltYXRpb24nKSlcbiAgICB9KVxuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAodGhpcy5pc1Nob3duKSByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgdGhpcy5pc1Nob3duID0gdHJ1ZTtcbiAgICByZXR1cm4gVmVsb2NpdHkodGhpcy5lbGVtZW50LCB7XG4gICAgICB0cmFuc2xhdGVZOiAnMCcsXG4gICAgfSkudGhlbigoKT0+IHtcbiAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZlbG9jaXR5LWFuaW1hdGlvbicpKVxuICAgIH0pXG4gIH1cblxuICBjcmVhdGVQbGFjZWhvbGRlcigpIHtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICBsZXQgcGxhY2Vob2xkZXIgPSBET00uY3JlYXRlRWxlbWVudCgnbmF2YmFyLXBsYWNlaG9sZGVyJyk7XG4gICAgcGxhY2Vob2xkZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgcGxhY2Vob2xkZXIuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgcGxhY2Vob2xkZXIuc3R5bGUuaGVpZ2h0ID0gZWxlbWVudC5jbGllbnRIZWlnaHQgKyAncHgnO1xuICAgIHBsYWNlaG9sZGVyLnN0eWxlLm1heEhlaWdodCA9IGVsZW1lbnQuY2xpZW50SGVpZ2h0ICsgJ3B4JztcbiAgICByZXR1cm4gcGxhY2Vob2xkZXI7XG4gIH1cblxuICBiYWNrZ3JvdW5kQ2xhc3NDaGFuZ2VkKGJnLCBvbGRCZykge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKG9sZEJnKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChiZyk7XG4gIH1cbn1cblxuXG5jb25zdCBOYXZMaW5rVGVtcGxhdGUgPSBgXG4gIDx0ZW1wbGF0ZSBjbGljay50cmlnZ2VyPVwib25DbGljaygkZXZlbnQpXCI+XG4gICAgPGFpLWljb24gaWYuYmluZD1cImljb25cIiBpY29uLmJpbmQ9XCJpY29uXCI+PC9haS1pY29uPlxuICAgIDxtZC1pY29uIGlmLmJpbmQ9XCJtZEljb25cIiBpY29uLmJpbmQ9XCJtZEljb25cIj48L21kLWljb24+XG4gICAgPGNvbnRlbnQ+PC9jb250ZW50PlxuICA8L3RlbXBsYXRlPlxuYDtcbkBjdXN0b21FbGVtZW50KCdhaS1saW5rJylcbkBpbmxpbmVWaWV3KE5hdkxpbmtUZW1wbGF0ZSlcbkBpbmplY3QoRWxlbWVudCwgUm91dGVyKVxuZXhwb3J0IGNsYXNzIE5hdkxpbmtFbGVtZW50IHtcbiAgQGJpbmRhYmxlIGhyZWY7XG4gIEBiaW5kYWJsZSBhY3RpdmU7XG4gIEBiaW5kYWJsZSBpY29uO1xuICBAYmluZGFibGUgbWRJY29uO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHJvdXRlcikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICB0aGlzLm5hdmlnYXRlID0gZnVuY3Rpb24ocm91dGUpIHtcbiAgICAgIHJvdXRlci5uYXZpZ2F0ZShyb3V0ZSk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaXMtYWN0aXZlJylcbiAgfVxuXG4gIG9uQ2xpY2soKSB7XG4gICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgdGhpcy5uYXZpZ2F0ZSh0aGlzLmhyZWYpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
