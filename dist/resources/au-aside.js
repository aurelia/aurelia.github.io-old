System.register(['aurelia-framework', 'aurelia-pal', 'services/channel', 'resources/au-overlay', './util'], function (_export) {
  'use strict';

  var noView, customElement, bindable, inject, DOM, AUChannel, OverlayController, onTransitionEnd, onDocumentEvent, clickEvent, resolvePromise, ACTIVE_CLASSNAME, DEFAULT_CLASSNAME, AuAsideElement, AuAsidePlaceholderElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      noView = _aureliaFramework.noView;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }, function (_resourcesAuOverlay) {
      OverlayController = _resourcesAuOverlay.OverlayController;
    }, function (_util) {
      onTransitionEnd = _util.onTransitionEnd;
      onDocumentEvent = _util.onDocumentEvent;
      clickEvent = _util.clickEvent;
      resolvePromise = _util.resolvePromise;
    }],
    execute: function () {
      ACTIVE_CLASSNAME = 'is-active';
      DEFAULT_CLASSNAME = 'au-aside';

      AuAsideElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AuAsideElement, [{
          key: 'active',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AuAsideElement(element, channel, overlayController) {
          _classCallCheck(this, _AuAsideElement);

          _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

          this.name = 'aside';
          this.bindableKey = 'active';
          this.eventListeners = [];
          this.subscriptions = [];

          element.className += ' ' + DEFAULT_CLASSNAME;
          channel.createInstruction(this, this.name, this.bindableKey);

          this.element = element;
          this.channel = channel;
          this.overlay = overlayController.createOverlay(this);
          this.onTransitionEnd = onTransitionEnd(this.element);
        }

        _createDecoratedClass(AuAsideElement, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            var channel = this.channel;
            var subscriptions = this.subscriptions;

            subscriptions.push(channel.subscribe('au-deactivate:navigation', function (payload) {
              !payload.validate(_this) && _this.close();
            }), channel.subscribe('au-activate:aside', function (x) {
              resolvePromise(_this.open(), x);
            }), channel.subscribe('au-deactivate:aside', function (x) {
              resolvePromise(_this.close(), x);
            }));
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.subscriptions.forEach(function (event) {
              return event.dispose();
            });
          }
        }, {
          key: 'activeChanged',
          value: function activeChanged(value) {
            this.element.classList[value ? 'add' : 'remove'](ACTIVE_CLASSNAME);
          }
        }, {
          key: 'open',
          value: function open() {
            return this.invokeAnimationLifecycle();
          }
        }, {
          key: 'close',
          value: function close() {
            var _this2 = this;

            if (this.active) {
              return new Promise(function (resolve) {
                var event = _this2.channel.subscribe('au-on-deactivate:aside', function (promise) {
                  event.dispose();
                  resolve(promise);
                });
                DOM.dispatchEvent(new Event(clickEvent));
              });
            }
          }
        }, {
          key: 'invokeAnimationLifecycle',
          value: function invokeAnimationLifecycle() {
            var _this3 = this;

            this.overlay.attach();
            return this.setActive(true).then(function () {
              return _this3.addListeners();
            }).then(function () {
              return _this3.setActive(false);
            }).then(function () {
              return _this3.overlay.detach();
            }).then(function () {
              return _this3.channel.publish('au-on-deactivate:aside');
            });
          }
        }, {
          key: 'setActive',
          value: function setActive(value) {
            var _this4 = this;

            return this.onTransitionEnd(function () {
              return _this4.active = value;
            });
          }
        }, {
          key: 'addListeners',
          value: function addListeners() {
            var _this5 = this;

            return onDocumentEvent(clickEvent, function (e, ready) {
              if (!_this5.element.contains(e.target)) return ready();
            }, true);
          }
        }], null, _instanceInitializers);

        var _AuAsideElement = AuAsideElement;
        AuAsideElement = inject(Element, AUChannel, OverlayController)(AuAsideElement) || AuAsideElement;
        AuAsideElement = customElement('au-aside')(AuAsideElement) || AuAsideElement;
        return AuAsideElement;
      })();

      _export('AuAsideElement', AuAsideElement);

      AuAsidePlaceholderElement = (function () {
        function AuAsidePlaceholderElement(element) {
          _classCallCheck(this, _AuAsidePlaceholderElement);
        }

        _createClass(AuAsidePlaceholderElement, [{
          key: 'attached',
          value: function attached() {}
        }]);

        var _AuAsidePlaceholderElement = AuAsidePlaceholderElement;
        AuAsidePlaceholderElement = inject(Element)(AuAsidePlaceholderElement) || AuAsidePlaceholderElement;
        AuAsidePlaceholderElement = noView(AuAsidePlaceholderElement) || AuAsidePlaceholderElement;
        AuAsidePlaceholderElement = customElement('au-aside-placeholder')(AuAsidePlaceholderElement) || AuAsidePlaceholderElement;
        return AuAsidePlaceholderElement;
      })();

      _export('AuAsidePlaceholderElement', AuAsidePlaceholderElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QWMsR0FGMUIsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUViLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYzs7Ozs7QUFvRmQsK0JBQXlCO0FBQ3pCLGlCQURBLHlCQUF5QixDQUN4QixPQUFPLEVBQUU7O1NBQUU7O3FCQURaLHlCQUF5Qjs7aUJBRTVCLG9CQUFHLEVBQUU7Ozt5Q0FGRix5QkFBeUI7QUFBekIsaUNBQXlCLEdBRHJDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCx5QkFBeUIsS0FBekIseUJBQXlCO0FBQXpCLGlDQUF5QixHQUZyQyxNQUFNLENBRU0seUJBQXlCLEtBQXpCLHlCQUF5QjtBQUF6QixpQ0FBeUIsR0FIckMsYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBR3pCLHlCQUF5QixLQUF6Qix5QkFBeUI7ZUFBekIseUJBQXlCIiwiZmlsZSI6InJlc291cmNlcy9hdS1hc2lkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bm9WaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuaW1wb3J0IHtPdmVybGF5Q29udHJvbGxlcn0gZnJvbSAncmVzb3VyY2VzL2F1LW92ZXJsYXknO1xuaW1wb3J0IHtvblRyYW5zaXRpb25FbmQsIG9uRG9jdW1lbnRFdmVudCwgY2xpY2tFdmVudCwgcmVzb2x2ZVByb21pc2V9IGZyb20gJy4vdXRpbCc7XG5cblxuY29uc3QgQUNUSVZFX0NMQVNTTkFNRSA9ICdpcy1hY3RpdmUnO1xuY29uc3QgREVGQVVMVF9DTEFTU05BTUUgPSAnYXUtYXNpZGUnO1xuXG5AY3VzdG9tRWxlbWVudCgnYXUtYXNpZGUnKVxuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwsIE92ZXJsYXlDb250cm9sbGVyKVxuZXhwb3J0IGNsYXNzIEF1QXNpZGVFbGVtZW50IHtcblxuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcblxuICBuYW1lID0gJ2FzaWRlJztcbiAgYmluZGFibGVLZXkgPSAnYWN0aXZlJztcbiAgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwsIG92ZXJsYXlDb250cm9sbGVyKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgREVGQVVMVF9DTEFTU05BTUU7XG4gICAgY2hhbm5lbC5jcmVhdGVJbnN0cnVjdGlvbih0aGlzLCB0aGlzLm5hbWUsIHRoaXMuYmluZGFibGVLZXkpO1xuXG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsICA9IGNoYW5uZWw7XG4gICAgdGhpcy5vdmVybGF5ICA9IG92ZXJsYXlDb250cm9sbGVyLmNyZWF0ZU92ZXJsYXkodGhpcyk7XG4gICAgdGhpcy5vblRyYW5zaXRpb25FbmQgPSBvblRyYW5zaXRpb25FbmQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWw7XG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnM7XG5cbiAgICBzdWJzY3JpcHRpb25zLnB1c2goXG5cbiAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCdhdS1kZWFjdGl2YXRlOm5hdmlnYXRpb24nLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAhcGF5bG9hZC52YWxpZGF0ZSh0aGlzKSAmJiB0aGlzLmNsb3NlKCk7XG4gICAgICB9KSxcbiAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCdhdS1hY3RpdmF0ZTphc2lkZScsICh4KT0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UodGhpcy5vcGVuKCksIHgpO1xuICAgICAgfSksXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtZGVhY3RpdmF0ZTphc2lkZScsICh4KT0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UodGhpcy5jbG9zZSgpLCB4KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChldmVudCA9PiBldmVudC5kaXNwb3NlKCkpO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXShBQ1RJVkVfQ0xBU1NOQU1FKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52b2tlQW5pbWF0aW9uTGlmZWN5Y2xlKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHRoaXMuY2hhbm5lbC5zdWJzY3JpYmUoJ2F1LW9uLWRlYWN0aXZhdGU6YXNpZGUnLCAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIGV2ZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICByZXNvbHZlKHByb21pc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGNsaWNrRXZlbnQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGludm9rZUFuaW1hdGlvbkxpZmVjeWNsZSgpIHtcbiAgICB0aGlzLm92ZXJsYXkuYXR0YWNoKCk7XG4gICAgcmV0dXJuIHRoaXMuc2V0QWN0aXZlKHRydWUpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmFkZExpc3RlbmVycygpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vdmVybGF5LmRldGFjaCgpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jaGFubmVsLnB1Ymxpc2goJ2F1LW9uLWRlYWN0aXZhdGU6YXNpZGUnKSk7XG4gIH1cblxuICBzZXRBY3RpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5vblRyYW5zaXRpb25FbmQoICgpPT4gdGhpcy5hY3RpdmUgPSB2YWx1ZSApO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBvbkRvY3VtZW50RXZlbnQoY2xpY2tFdmVudCwgKGUsIHJlYWR5KT0+IHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuIHJlYWR5KCk7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2F1LWFzaWRlLXBsYWNlaG9sZGVyJylcbkBub1ZpZXdcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBdUFzaWRlUGxhY2Vob2xkZXJFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge31cbiAgYXR0YWNoZWQoKSB7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
