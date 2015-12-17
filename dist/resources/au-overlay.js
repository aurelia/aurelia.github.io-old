System.register(['aurelia-dependency-injection', '../services/channel', 'aurelia-pal', './util'], function (_export) {
  'use strict';

  var inject, AUChannel, DOM, onAnimationEnd, ACTIVE_CLASSNAME, ANIMATION_CLASSNAME, DEFAULT_CLASSNAME, OverlayElement, OverlayController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_util) {
      onAnimationEnd = _util.onAnimationEnd;
    }],
    execute: function () {
      ACTIVE_CLASSNAME = 'is-active';
      ANIMATION_CLASSNAME = 'au-animation';
      DEFAULT_CLASSNAME = 'au-overlay';

      OverlayElement = (function () {
        function OverlayElement(parent) {
          _classCallCheck(this, OverlayElement);

          this.element = DOM.createElement('overlay');
          this.eventListeners = {};

          this.element.className += ' ' + ANIMATION_CLASSNAME + ' ' + DEFAULT_CLASSNAME;
          this.parent = parent;
          this.element.classList.add('au-animate');
          return this;
        }

        _createClass(OverlayElement, [{
          key: 'attach',
          value: function attach() {
            var _this = this;

            return onAnimationEnd(this.element, function () {
              _this.parent.element.appendChild(_this.element);
            });
          }
        }, {
          key: 'detach',
          value: function detach() {
            var _this2 = this;

            return onAnimationEnd(this.element, function () {
              _this2.parent.fragment.appendChild(_this2.element);
            });
          }
        }, {
          key: 'destroy',
          value: function destroy() {
            this.element.remove();
          }
        }]);

        return OverlayElement;
      })();

      _export('OverlayElement', OverlayElement);

      OverlayController = (function () {
        function OverlayController(channel) {
          _classCallCheck(this, _OverlayController);

          this.element = DOM.createElement('au-overlay');
          this.fragment = DOM.createDocumentFragment();
          this.active = true;

          this.channel = channel;
        }

        _createClass(OverlayController, [{
          key: 'registerContainer',
          value: function registerContainer(context, element) {
            this.context = context;
            this.container = element;
            this.container.appendChild(this.element);
            return this;
          }
        }, {
          key: 'destroyContainer',
          value: function destroyContainer() {
            this.container.removeChild(this.element);
          }
        }, {
          key: 'getOrCreateOverlay',
          value: function getOrCreateOverlay(context) {
            return new OverlayElement(this);
          }
        }, {
          key: 'createOverlay',
          value: function createOverlay(context) {
            return new OverlayElement(this);
          }
        }, {
          key: 'activate',
          value: function activate() {
            this.element.classList.add(ACTIVE_CLASSNAME);
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.element.classList.remove(ACTIVE_CLASSNAME);
          }
        }]);

        var _OverlayController = OverlayController;
        OverlayController = inject(AUChannel)(OverlayController) || OverlayController;
        return OverlayController;
      })();

      _export('OverlayController', OverlayController);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFDLFNBQVMsQ0FBQyxDQUNMLGlCQUFpQixLQUFqQixpQkFBaUI7ZUFBakIsaUJBQWlCIiwiZmlsZSI6InJlc291cmNlcy9hdS1vdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJy4uL3NlcnZpY2VzL2NoYW5uZWwnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7b25BbmltYXRpb25FbmR9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IEFDVElWRV9DTEFTU05BTUUgPSAnaXMtYWN0aXZlJztcbmNvbnN0IEFOSU1BVElPTl9DTEFTU05BTUUgPSAnYXUtYW5pbWF0aW9uJztcbmNvbnN0IERFRkFVTFRfQ0xBU1NOQU1FID0gJ2F1LW92ZXJsYXknO1xuXG5leHBvcnQgY2xhc3MgT3ZlcmxheUVsZW1lbnQge1xuICBlbGVtZW50ID0gRE9NLmNyZWF0ZUVsZW1lbnQoJ292ZXJsYXknKTtcblxuICBldmVudExpc3RlbmVycyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke0FOSU1BVElPTl9DTEFTU05BTUV9ICR7REVGQVVMVF9DTEFTU05BTUV9YDtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYXUtYW5pbWF0ZScpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHJldHVybiBvbkFuaW1hdGlvbkVuZCggdGhpcy5lbGVtZW50LCAoKT0+IHtcbiAgICAgIHRoaXMucGFyZW50LmVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRldGFjaCgpIHtcbiAgICByZXR1cm4gb25BbmltYXRpb25FbmQoIHRoaXMuZWxlbWVudCwgKCk9PiB7XG4gICAgICB0aGlzLnBhcmVudC5mcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlKCk7XG4gIH1cbn1cblxuQGluamVjdChBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgT3ZlcmxheUNvbnRyb2xsZXIge1xuXG4gIGVsZW1lbnQgID0gRE9NLmNyZWF0ZUVsZW1lbnQoJ2F1LW92ZXJsYXknKTtcbiAgZnJhZ21lbnQgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBhY3RpdmUgICA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoY2hhbm5lbCkge1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICByZWdpc3RlckNvbnRhaW5lcihjb250ZXh0LCBlbGVtZW50KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGRlc3Ryb3lDb250YWluZXIoKSB7XG4gICAgdGhpcy5jb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGdldE9yQ3JlYXRlT3ZlcmxheShjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5RWxlbWVudCh0aGlzKTtcbiAgfVxuICBjcmVhdGVPdmVybGF5KGNvbnRleHQpIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlFbGVtZW50KHRoaXMpO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoQUNUSVZFX0NMQVNTTkFNRSk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKEFDVElWRV9DTEFTU05BTUUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
