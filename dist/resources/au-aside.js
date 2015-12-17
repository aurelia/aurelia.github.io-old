System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-pal', 'services/channel', 'resources/au-overlay', './util'], function (_export) {
  'use strict';

  var noView, customElement, bindable, ViewSlot, processContent, TargetInstruction, inject, Container, DOM, AUChannel, OverlayController, onTransitionEnd, onDocumentEvent, clickEvent, resolvePromise, ACTIVE_CLASSNAME, DEFAULT_CLASSNAME, AuAsideElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      ViewSlot = _aureliaTemplating.ViewSlot;
      processContent = _aureliaTemplating.processContent;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
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
          key: 'processView',
          value: function processView(aside) {
            var _this2 = this;

            var view = this.view;
            var promised = undefined;

            if (!this.viewSlot) {
              this.viewSlot = new ViewSlot(this.content, true);
            }

            if (view) {
              promised = this.viewSlot.remove(view, true);
            }

            Promise.resolve(promised).then(function () {
              if (aside.view) {
                _this2.viewSlot.add(aside.view);
                _this2.view = aside.view;
              }
            });
          }
        }, {
          key: 'open',
          value: function open() {
            return this.invokeAnimationLifecycle();
          }
        }, {
          key: 'close',
          value: function close() {
            var _this3 = this;

            if (this.active) {
              return new Promise(function (resolve) {
                var event = _this3.channel.subscribe('au-on-deactivate:aside', function (promise) {
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
            var _this4 = this;

            this.overlay.attach();
            return this.setActive(true).then(function () {
              return _this4.addListeners();
            }).then(function () {
              return _this4.setActive(false);
            }).then(function () {
              return _this4.overlay.detach();
            }).then(function () {
              return _this4.channel.publish('au-on-deactivate:aside');
            });
          }
        }, {
          key: 'setActive',
          value: function setActive(value) {
            var _this5 = this;

            return this.onTransitionEnd(function () {
              return _this5.active = value;
            });
          }
        }, {
          key: 'addListeners',
          value: function addListeners() {
            var _this6 = this;

            return onDocumentEvent(clickEvent, function (e, ready) {
              if (!_this6.element.contains(e.target)) return ready();
            }, true);
          }
        }], null, _instanceInitializers);

        var _AuAsideElement = AuAsideElement;
        AuAsideElement = inject(Element, AUChannel, OverlayController, ViewSlot)(AuAsideElement) || AuAsideElement;
        AuAsideElement = customElement('au-aside')(AuAsideElement) || AuAsideElement;
        return AuAsideElement;
      })();

      _export('AuAsideElement', AuAsideElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LENBQUMsS0FBSyxDQUFDO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUM7cUJBQU0sT0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUM7cUJBQU0sT0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLHdCQUF3QixDQUFDO2FBQUEsQ0FBQyxDQUFDO1dBQy9EOzs7aUJBRVEsbUJBQUMsS0FBSyxFQUFFOzs7QUFDZixtQkFBTyxJQUFJLENBQUMsZUFBZSxDQUFFO3FCQUFLLE9BQUssTUFBTSxHQUFHLEtBQUs7YUFBQSxDQUFFLENBQUM7V0FDekQ7OztpQkFFVyx3QkFBRzs7O0FBQ2IsbUJBQU8sZUFBZSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsRUFBRSxLQUFLLEVBQUk7QUFDOUMsa0JBQUksQ0FBQyxPQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sS0FBSyxFQUFFLENBQUM7YUFDdEQsRUFBRSxJQUFJLENBQUMsQ0FBQztXQUNWOzs7OEJBcEdVLGNBQWM7QUFBZCxzQkFBYyxHQUQxQixNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLENBQUMsQ0FDM0MsY0FBYyxLQUFkLGNBQWM7QUFBZCxzQkFBYyxHQUYxQixhQUFhLENBQUMsVUFBVSxDQUFDLENBRWIsY0FBYyxLQUFkLGNBQWM7ZUFBZCxjQUFjIiwiZmlsZSI6InJlc291cmNlcy9hdS1hc2lkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bm9WaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgVmlld1Nsb3QsIHByb2Nlc3NDb250ZW50LCBUYXJnZXRJbnN0cnVjdGlvbn0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7aW5qZWN0LCBDb250YWluZXJ9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICdzZXJ2aWNlcy9jaGFubmVsJztcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xsZXJ9IGZyb20gJ3Jlc291cmNlcy9hdS1vdmVybGF5JztcbmltcG9ydCB7b25UcmFuc2l0aW9uRW5kLCBvbkRvY3VtZW50RXZlbnQsIGNsaWNrRXZlbnQsIHJlc29sdmVQcm9taXNlfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBBQ1RJVkVfQ0xBU1NOQU1FID0gJ2lzLWFjdGl2ZSc7XG5jb25zdCBERUZBVUxUX0NMQVNTTkFNRSA9ICdhdS1hc2lkZSc7XG5cbkBjdXN0b21FbGVtZW50KCdhdS1hc2lkZScpXG5AaW5qZWN0KEVsZW1lbnQsIEFVQ2hhbm5lbCwgT3ZlcmxheUNvbnRyb2xsZXIsIFZpZXdTbG90KVxuZXhwb3J0IGNsYXNzIEF1QXNpZGVFbGVtZW50IHtcblxuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcblxuICBuYW1lID0gJ2FzaWRlJztcbiAgYmluZGFibGVLZXkgPSAnYWN0aXZlJztcbiAgZXZlbnRMaXN0ZW5lcnMgPSBbXTtcbiAgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwsIG92ZXJsYXlDb250cm9sbGVyKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgREVGQVVMVF9DTEFTU05BTUU7XG4gICAgY2hhbm5lbC5jcmVhdGVJbnN0cnVjdGlvbih0aGlzLCB0aGlzLm5hbWUsIHRoaXMuYmluZGFibGVLZXkpO1xuXG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsICA9IGNoYW5uZWw7XG4gICAgdGhpcy5vdmVybGF5ICA9IG92ZXJsYXlDb250cm9sbGVyLmNyZWF0ZU92ZXJsYXkodGhpcyk7XG4gICAgdGhpcy5vblRyYW5zaXRpb25FbmQgPSBvblRyYW5zaXRpb25FbmQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWw7XG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnM7XG5cbiAgICBzdWJzY3JpcHRpb25zLnB1c2goXG5cbiAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCdhdS1kZWFjdGl2YXRlOm5hdmlnYXRpb24nLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICAhcGF5bG9hZC52YWxpZGF0ZSh0aGlzKSAmJiB0aGlzLmNsb3NlKCk7XG4gICAgICB9KSxcbiAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCdhdS1hY3RpdmF0ZTphc2lkZScsICh4KT0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UodGhpcy5vcGVuKCksIHgpO1xuICAgICAgfSksXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtZGVhY3RpdmF0ZTphc2lkZScsICh4KT0+IHtcbiAgICAgICAgcmVzb2x2ZVByb21pc2UodGhpcy5jbG9zZSgpLCB4KTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChldmVudCA9PiBldmVudC5kaXNwb3NlKCkpO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXShBQ1RJVkVfQ0xBU1NOQU1FKTtcbiAgfVxuXG4gIHByb2Nlc3NWaWV3KGFzaWRlKSB7XG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXc7XG4gICAgbGV0IHByb21pc2VkO1xuXG4gICAgaWYgKCF0aGlzLnZpZXdTbG90KSB7XG4gICAgICB0aGlzLnZpZXdTbG90ID0gbmV3IFZpZXdTbG90KHRoaXMuY29udGVudCwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHZpZXcpIHtcbiAgICAgIHByb21pc2VkID0gdGhpcy52aWV3U2xvdC5yZW1vdmUodmlldywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2VkKVxuICAgICAgLnRoZW4oKCk9PiB7XG4gICAgICAgIGlmIChhc2lkZS52aWV3KSB7XG4gICAgICAgICAgdGhpcy52aWV3U2xvdC5hZGQoYXNpZGUudmlldyk7XG4gICAgICAgICAgdGhpcy52aWV3ID0gYXNpZGUudmlldztcbiAgICAgICAgfVxuICAgICAgfSlcblxuICB9XG5cbiAgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZva2VBbmltYXRpb25MaWZlY3ljbGUoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSkge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcbiAgICAgICAgbGV0IGV2ZW50ID0gdGhpcy5jaGFubmVsLnN1YnNjcmliZSgnYXUtb24tZGVhY3RpdmF0ZTphc2lkZScsIChwcm9taXNlKSA9PiB7XG4gICAgICAgICAgZXZlbnQuZGlzcG9zZSgpO1xuICAgICAgICAgIHJlc29sdmUocHJvbWlzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBET00uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoY2xpY2tFdmVudCkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW52b2tlQW5pbWF0aW9uTGlmZWN5Y2xlKCkge1xuICAgIHRoaXMub3ZlcmxheS5hdHRhY2goKTtcbiAgICByZXR1cm4gdGhpcy5zZXRBY3RpdmUodHJ1ZSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuYWRkTGlzdGVuZXJzKCkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLnNldEFjdGl2ZShmYWxzZSkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLm92ZXJsYXkuZGV0YWNoKCkpXG4gICAgICAudGhlbigoKSA9PiB0aGlzLmNoYW5uZWwucHVibGlzaCgnYXUtb24tZGVhY3RpdmF0ZTphc2lkZScpKTtcbiAgfVxuXG4gIHNldEFjdGl2ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0aGlzLm9uVHJhbnNpdGlvbkVuZCggKCk9PiB0aGlzLmFjdGl2ZSA9IHZhbHVlICk7XG4gIH1cblxuICBhZGRMaXN0ZW5lcnMoKSB7XG4gICAgcmV0dXJuIG9uRG9jdW1lbnRFdmVudChjbGlja0V2ZW50LCAoZSwgcmVhZHkpPT4ge1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZS50YXJnZXQpKSByZXR1cm4gcmVhZHkoKTtcbiAgICB9LCB0cnVlKTtcbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
