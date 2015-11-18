System.register(['aurelia-framework', '../services/channel', 'aurelia-pal', './util'], function (_export) {
  'use strict';

  var inject, AUChannel, DOM, onAnimationEnd, ACTIVE_CLASSNAME, ANIMATION_CLASSNAME, DEFAULT_CLASSNAME, OverlayElement, OverlayController;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
//# sourceMappingURL=data:application/json;base64,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QUFDLFNBQVMsQ0FBQyxDQUNMLGlCQUFpQixLQUFqQixpQkFBaUI7ZUFBakIsaUJBQWlCIiwiZmlsZSI6InJlc291cmNlcy9hdS1vdmVybGF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICcuLi9zZXJ2aWNlcy9jaGFubmVsJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge29uQW5pbWF0aW9uRW5kfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1NOQU1FID0gJ2lzLWFjdGl2ZSc7XG5jb25zdCBBTklNQVRJT05fQ0xBU1NOQU1FID0gJ2F1LWFuaW1hdGlvbic7XG5jb25zdCBERUZBVUxUX0NMQVNTTkFNRSA9ICdhdS1vdmVybGF5JztcblxuZXhwb3J0IGNsYXNzIE92ZXJsYXlFbGVtZW50IHtcbiAgZWxlbWVudCA9IERPTS5jcmVhdGVFbGVtZW50KCdvdmVybGF5Jyk7XG5cbiAgZXZlbnRMaXN0ZW5lcnMgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihwYXJlbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtBTklNQVRJT05fQ0xBU1NOQU1FfSAke0RFRkFVTFRfQ0xBU1NOQU1FfWA7XG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2F1LWFuaW1hdGUnKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGF0dGFjaCgpIHtcbiAgICByZXR1cm4gb25BbmltYXRpb25FbmQoIHRoaXMuZWxlbWVudCwgKCk9PiB7XG4gICAgICB0aGlzLnBhcmVudC5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgfSk7XG4gIH1cblxuICBkZXRhY2goKSB7XG4gICAgcmV0dXJuIG9uQW5pbWF0aW9uRW5kKCB0aGlzLmVsZW1lbnQsICgpPT4ge1xuICAgICAgdGhpcy5wYXJlbnQuZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZSgpO1xuICB9XG59XG5cbkBpbmplY3QoQVVDaGFubmVsKVxuZXhwb3J0IGNsYXNzIE92ZXJsYXlDb250cm9sbGVyIHtcblxuICBlbGVtZW50ICA9IERPTS5jcmVhdGVFbGVtZW50KCdhdS1vdmVybGF5Jyk7XG4gIGZyYWdtZW50ID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgYWN0aXZlICAgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwpIHtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB9XG5cbiAgcmVnaXN0ZXJDb250YWluZXIoY29udGV4dCwgZWxlbWVudCkge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBlbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBkZXN0cm95Q29udGFpbmVyKCkge1xuICAgIHRoaXMuY29udGFpbmVyLnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gIH1cblxuICBnZXRPckNyZWF0ZU92ZXJsYXkoY29udGV4dCkge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUVsZW1lbnQodGhpcyk7XG4gIH1cbiAgY3JlYXRlT3ZlcmxheShjb250ZXh0KSB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5RWxlbWVudCh0aGlzKTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKEFDVElWRV9DTEFTU05BTUUpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShBQ1RJVkVfQ0xBU1NOQU1FKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
