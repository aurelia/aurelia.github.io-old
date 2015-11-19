System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-pal', 'services/channel', 'resources/au-overlay', './util'], function (_export) {
  'use strict';

  var noView, customElement, bindable, inject, DOM, AUChannel, OverlayController, onTransitionEnd, onDocumentEvent, clickEvent, resolvePromise, ACTIVE_CLASSNAME, DEFAULT_CLASSNAME, AuAsideElement, AuAsidePlaceholderElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
//# sourceMappingURL=data:application/json;base64,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QUFjLEdBRjFCLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FFYixjQUFjLEtBQWQsY0FBYztlQUFkLGNBQWM7Ozs7O0FBb0ZkLCtCQUF5QjtBQUN6QixpQkFEQSx5QkFBeUIsQ0FDeEIsT0FBTyxFQUFFOztTQUFFOztxQkFEWix5QkFBeUI7O2lCQUU1QixvQkFBRyxFQUFFOzs7eUNBRkYseUJBQXlCO0FBQXpCLGlDQUF5QixHQURyQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gseUJBQXlCLEtBQXpCLHlCQUF5QjtBQUF6QixpQ0FBeUIsR0FGckMsTUFBTSxDQUVNLHlCQUF5QixLQUF6Qix5QkFBeUI7QUFBekIsaUNBQXlCLEdBSHJDLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQyxDQUd6Qix5QkFBeUIsS0FBekIseUJBQXlCO2VBQXpCLHlCQUF5QiIsImZpbGUiOiJyZXNvdXJjZXMvYXUtYXNpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge25vVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuaW1wb3J0IHtPdmVybGF5Q29udHJvbGxlcn0gZnJvbSAncmVzb3VyY2VzL2F1LW92ZXJsYXknO1xuaW1wb3J0IHtvblRyYW5zaXRpb25FbmQsIG9uRG9jdW1lbnRFdmVudCwgY2xpY2tFdmVudCwgcmVzb2x2ZVByb21pc2V9IGZyb20gJy4vdXRpbCc7XG5cblxuY29uc3QgQUNUSVZFX0NMQVNTTkFNRSA9ICdpcy1hY3RpdmUnO1xuY29uc3QgREVGQVVMVF9DTEFTU05BTUUgPSAnYXUtYXNpZGUnO1xuXG5AY3VzdG9tRWxlbWVudCgnYXUtYXNpZGUnKVxuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwsIE92ZXJsYXlDb250cm9sbGVyKVxuZXhwb3J0IGNsYXNzIEF1QXNpZGVFbGVtZW50IHtcblxuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcblxuICBuYW1lID0gJ2FzaWRlJztcbiAgYmluZGFibGVLZXkgPSAnYWN0aXZlJztcbiAgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwsIG92ZXJsYXlDb250cm9sbGVyKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgREVGQVVMVF9DTEFTU05BTUU7XG4gICAgY2hhbm5lbC5jcmVhdGVJbnN0cnVjdGlvbih0aGlzLCB0aGlzLm5hbWUsIHRoaXMuYmluZGFibGVLZXkpO1xuXG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsICA9IGNoYW5uZWw7XG4gICAgdGhpcy5vdmVybGF5ICA9IG92ZXJsYXlDb250cm9sbGVyLmNyZWF0ZU92ZXJsYXkodGhpcyk7XG4gICAgdGhpcy5vblRyYW5zaXRpb25FbmQgPSBvblRyYW5zaXRpb25FbmQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWw7XG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnM7XG5cbiAgICBzdWJzY3JpcHRpb25zLnB1c2goXG5cbiAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCdhdS1kZWFjdGl2YXRlOm5hdmlnYXRpb24nLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAhcGF5bG9hZC52YWxpZGF0ZSh0aGlzKSAmJiB0aGlzLmNsb3NlKCk7XG4gICAgICB9KSxcbiAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCdhdS1hY3RpdmF0ZTphc2lkZScsICh4KT0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UodGhpcy5vcGVuKCksIHgpO1xuICAgICAgfSksXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtZGVhY3RpdmF0ZTphc2lkZScsICh4KT0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UodGhpcy5jbG9zZSgpLCB4KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChldmVudCA9PiBldmVudC5kaXNwb3NlKCkpO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXShBQ1RJVkVfQ0xBU1NOQU1FKTtcbiAgfVxuXG4gIG9wZW4oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52b2tlQW5pbWF0aW9uTGlmZWN5Y2xlKCk7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XG4gICAgICAgIGxldCBldmVudCA9IHRoaXMuY2hhbm5lbC5zdWJzY3JpYmUoJ2F1LW9uLWRlYWN0aXZhdGU6YXNpZGUnLCAocHJvbWlzZSkgPT4ge1xuICAgICAgICAgIGV2ZW50LmRpc3Bvc2UoKTtcbiAgICAgICAgICByZXNvbHZlKHByb21pc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgRE9NLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KGNsaWNrRXZlbnQpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGludm9rZUFuaW1hdGlvbkxpZmVjeWNsZSgpIHtcbiAgICB0aGlzLm92ZXJsYXkuYXR0YWNoKCk7XG4gICAgcmV0dXJuIHRoaXMuc2V0QWN0aXZlKHRydWUpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmFkZExpc3RlbmVycygpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5zZXRBY3RpdmUoZmFsc2UpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vdmVybGF5LmRldGFjaCgpKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5jaGFubmVsLnB1Ymxpc2goJ2F1LW9uLWRlYWN0aXZhdGU6YXNpZGUnKSk7XG4gIH1cblxuICBzZXRBY3RpdmUodmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5vblRyYW5zaXRpb25FbmQoICgpPT4gdGhpcy5hY3RpdmUgPSB2YWx1ZSApO1xuICB9XG5cbiAgYWRkTGlzdGVuZXJzKCkge1xuICAgIHJldHVybiBvbkRvY3VtZW50RXZlbnQoY2xpY2tFdmVudCwgKGUsIHJlYWR5KT0+IHtcbiAgICAgIGlmICghdGhpcy5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkgcmV0dXJuIHJlYWR5KCk7XG4gICAgfSwgdHJ1ZSk7XG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2F1LWFzaWRlLXBsYWNlaG9sZGVyJylcbkBub1ZpZXdcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBdUFzaWRlUGxhY2Vob2xkZXJFbGVtZW50IHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge31cbiAgYXR0YWNoZWQoKSB7fVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
