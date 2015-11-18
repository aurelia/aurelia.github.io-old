System.register(['aurelia-framework', 'resources/au-overlay', 'services/channel', './util', 'aurelia-pal'], function (_export) {
  'use strict';

  var customElement, bindable, inject, OverlayController, AUChannel, onTransitionEnd, onDocumentEvent, clickEvent, DOM, ACTIVE_CLASSNAME, DEFAULT_CLASSNAME, AuSettingsButtonElement;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_resourcesAuOverlay) {
      OverlayController = _resourcesAuOverlay.OverlayController;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }, function (_util) {
      onTransitionEnd = _util.onTransitionEnd;
      onDocumentEvent = _util.onDocumentEvent;
      clickEvent = _util.clickEvent;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      ACTIVE_CLASSNAME = 'is-active';
      DEFAULT_CLASSNAME = 'au-settings-button';

      AuSettingsButtonElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AuSettingsButtonElement, [{
          key: 'active',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AuSettingsButtonElement(element, channel, overlayController) {
          _classCallCheck(this, _AuSettingsButtonElement);

          _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

          this.name = 'settings';
          this.bindableKey = 'active';
          this.subscriptions = [];

          element.className += ' ' + DEFAULT_CLASSNAME;
          channel.createInstruction(this);

          this.element = element;
          this.channel = channel;
          this.overlay = overlayController.getOrCreateOverlay(this);
        }

        _createDecoratedClass(AuSettingsButtonElement, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            var channel = this.channel;
            var subscriptions = this.subscriptions;

            subscriptions.push(channel.subscribe('au-deactivate:navigation', function (payload) {
              !payload.validate(_this) && _this.close();
            }), channel.subscribe('au-activate:settings', function (payload) {
              _this.open();
            }), channel.subscribe('deactivate-settings', function (payload) {
              _this.close();
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
          key: 'open',
          value: function open() {
            return this.invokeAnimationLifecycle();
          }
        }, {
          key: 'close',
          value: function close() {
            if (!this.active) return;
            DOM.dispatchEvent(new Event(clickEvent));
          }
        }, {
          key: 'activeChanged',
          value: function activeChanged(value) {
            this.onClick = this[value ? 'close' : 'open'];
            this.element.classList[value ? 'add' : 'remove'](ACTIVE_CLASSNAME);
          }
        }, {
          key: 'invokeAnimationLifecycle',
          value: function invokeAnimationLifecycle() {
            var _this2 = this;

            this.overlay.attach();
            return this.setActive(true).then(function () {
              return _this2.addListeners();
            }).then(function () {
              return _this2.setActive(false);
            }).then(function () {
              return _this2.overlay.detach();
            }).then(function () {
              return _this2.channel.publish('au-on-deactivate:settings');
            });
          }
        }, {
          key: 'setActive',
          value: function setActive(value) {
            var _this3 = this;

            return onTransitionEnd(this.element, function () {
              _this3.active = value;
              return _this3.active;
            });
          }
        }, {
          key: 'addListeners',
          value: function addListeners() {
            var _this4 = this;

            return onDocumentEvent(clickEvent, function (e, ready) {
              if (!_this4.element.contains(e.target)) return ready();
            }, true);
          }
        }, {
          key: 'onClick',
          value: function onClick($event) {
            this.open();
          }
        }], null, _instanceInitializers);

        var _AuSettingsButtonElement = AuSettingsButtonElement;
        AuSettingsButtonElement = inject(Element, AUChannel, OverlayController)(AuSettingsButtonElement) || AuSettingsButtonElement;
        AuSettingsButtonElement = customElement('au-settings-button')(AuSettingsButtonElement) || AuSettingsButtonElement;
        return AuSettingsButtonElement;
      })();

      _export('AuSettingsButtonElement', AuSettingsButtonElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1zZXR0aW5ncy1idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3dIQUtNLGdCQUFnQixFQUNoQixpQkFBaUIsRUFJVix1QkFBdUI7Ozs7Ozs7Ozs7d0NBVjVCLGFBQWE7bUNBQUUsUUFBUTtpQ0FBRSxNQUFNOzs4Q0FDL0IsaUJBQWlCOzttQ0FDakIsU0FBUzs7OEJBQ1QsZUFBZTs4QkFBRSxlQUFlO3lCQUFFLFVBQVU7O3dCQUM1QyxHQUFHOzs7QUFDTCxzQkFBZ0IsR0FBRyxXQUFXO0FBQzlCLHVCQUFpQixHQUFHLG9CQUFvQjs7QUFJakMsNkJBQXVCOzs7OzhCQUF2Qix1QkFBdUI7O3VCQUNqQyxRQUFROzttQkFBVSxJQUFJOzs7OztBQU1aLGlCQVBBLHVCQUF1QixDQU90QixPQUFPLEVBQUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFOzs7OztlQUpqRCxJQUFJLEdBQUcsVUFBVTtlQUNqQixXQUFXLEdBQUcsUUFBUTtlQUN0QixhQUFhLEdBQUcsRUFBRTs7QUFHaEIsaUJBQU8sQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFHLGlCQUFpQixDQUFDO0FBQzdDLGlCQUFPLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRWhDLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsaUJBQWlCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0Q7OzhCQWRVLHVCQUF1Qjs7aUJBZ0I5QixnQkFBRzs7O0FBQ0wsZ0JBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsZ0JBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7O0FBRXZDLHlCQUFhLENBQUMsSUFBSSxDQUVoQixPQUFPLENBQUMsU0FBUyxDQUFDLDBCQUEwQixFQUFFLFVBQUMsT0FBTyxFQUFLO0FBQ3pELGVBQUMsT0FBTyxDQUFDLFFBQVEsT0FBTSxJQUFJLE1BQUssS0FBSyxFQUFFLENBQUM7YUFDekMsQ0FBQyxFQUVGLE9BQU8sQ0FBQyxTQUFTLENBQUMsc0JBQXNCLEVBQUUsVUFBQyxPQUFPLEVBQUs7QUFDckQsb0JBQUssSUFBSSxFQUFFLENBQUM7YUFDYixDQUFDLEVBRUYsT0FBTyxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsRUFBRSxVQUFDLE9BQU8sRUFBSztBQUNwRCxvQkFBSyxLQUFLLEVBQUUsQ0FBQzthQUNkLENBQUMsQ0FDSCxDQUFDO1dBQ0g7OztpQkFFSyxrQkFBRztBQUNQLGdCQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7cUJBQUksS0FBSyxDQUFDLE9BQU8sRUFBRTthQUFBLENBQUMsQ0FBQztXQUN0RDs7O2lCQUVHLGdCQUFHO0FBQ0wsbUJBQU8sSUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7V0FDeEM7OztpQkFFSSxpQkFBRztBQUNOLGdCQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPO0FBQ3pCLGVBQUcsQ0FBQyxhQUFhLENBQUMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztXQUMxQzs7O2lCQUVZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixnQkFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxNQUFNLENBQUMsQ0FBQztBQUM5QyxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1dBQ3BFOzs7aUJBRXVCLG9DQUFHOzs7QUFDekIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEIsbUJBQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FDeEIsSUFBSSxDQUFDO3FCQUFNLE9BQUssWUFBWSxFQUFFO2FBQUEsQ0FBQyxDQUMvQixJQUFJLENBQUM7cUJBQU0sT0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUM7cUJBQU0sT0FBSyxPQUFPLENBQUMsTUFBTSxFQUFFO2FBQUEsQ0FBQyxDQUNqQyxJQUFJLENBQUM7cUJBQU0sT0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDLDJCQUEyQixDQUFDO2FBQUEsQ0FBQyxDQUFDO1dBQ2xFOzs7aUJBRVEsbUJBQUMsS0FBSyxFQUFFOzs7QUFDZixtQkFBTyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxZQUFLO0FBQ3hDLHFCQUFLLE1BQU0sR0FBRyxLQUFLLENBQUM7QUFDcEIscUJBQU8sT0FBSyxNQUFNLENBQUM7YUFDcEIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFVyx3QkFBRzs7O0FBQ2IsbUJBQU8sZUFBZSxDQUFDLFVBQVUsRUFBRSxVQUFDLENBQUMsRUFBRSxLQUFLLEVBQUk7QUFDOUMsa0JBQUksQ0FBQyxPQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLE9BQU8sS0FBSyxFQUFFLENBQUM7YUFDdEQsRUFBRSxJQUFJLENBQUMsQ0FBQztXQUNWOzs7aUJBRU0saUJBQUMsTUFBTSxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztXQUNiOzs7dUNBOUVVLHVCQUF1QjtBQUF2QiwrQkFBdUIsR0FEbkMsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQWlCLENBQUMsQ0FDakMsdUJBQXVCLEtBQXZCLHVCQUF1QjtBQUF2QiwrQkFBdUIsR0FGbkMsYUFBYSxDQUFDLG9CQUFvQixDQUFDLENBRXZCLHVCQUF1QixLQUF2Qix1QkFBdUI7ZUFBdkIsdUJBQXVCIiwiZmlsZSI6InJlc291cmNlcy9hdS1zZXR0aW5ncy1idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7T3ZlcmxheUNvbnRyb2xsZXJ9IGZyb20gJ3Jlc291cmNlcy9hdS1vdmVybGF5JztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICdzZXJ2aWNlcy9jaGFubmVsJztcbmltcG9ydCB7b25UcmFuc2l0aW9uRW5kLCBvbkRvY3VtZW50RXZlbnQsIGNsaWNrRXZlbnR9IGZyb20gJy4vdXRpbCc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuY29uc3QgQUNUSVZFX0NMQVNTTkFNRSA9ICdpcy1hY3RpdmUnO1xuY29uc3QgREVGQVVMVF9DTEFTU05BTUUgPSAnYXUtc2V0dGluZ3MtYnV0dG9uJztcblxuQGN1c3RvbUVsZW1lbnQoJ2F1LXNldHRpbmdzLWJ1dHRvbicpXG5AaW5qZWN0KEVsZW1lbnQsIEFVQ2hhbm5lbCwgT3ZlcmxheUNvbnRyb2xsZXIpXG5leHBvcnQgY2xhc3MgQXVTZXR0aW5nc0J1dHRvbkVsZW1lbnQge1xuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcblxuICBuYW1lID0gJ3NldHRpbmdzJztcbiAgYmluZGFibGVLZXkgPSAnYWN0aXZlJztcbiAgc3Vic2NyaXB0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwsIG92ZXJsYXlDb250cm9sbGVyKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gJyAnICsgREVGQVVMVF9DTEFTU05BTUU7XG4gICAgY2hhbm5lbC5jcmVhdGVJbnN0cnVjdGlvbih0aGlzKTtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLm92ZXJsYXkgPSBvdmVybGF5Q29udHJvbGxlci5nZXRPckNyZWF0ZU92ZXJsYXkodGhpcyk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVsO1xuICAgIGxldCBzdWJzY3JpcHRpb25zID0gdGhpcy5zdWJzY3JpcHRpb25zO1xuXG4gICAgc3Vic2NyaXB0aW9ucy5wdXNoKFxuXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtZGVhY3RpdmF0ZTpuYXZpZ2F0aW9uJywgKHBheWxvYWQpID0+IHtcbiAgICAgICAgIXBheWxvYWQudmFsaWRhdGUodGhpcykgJiYgdGhpcy5jbG9zZSgpOy8vIGlmICh0aGlzLmFjdGl2ZSAmJiAhcGF5bG9hZC52YWxpZGF0ZSh0aGlzKSkgeyB0aGlzLmNsb3NlKCk7IH1cbiAgICAgIH0pLFxuXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtYWN0aXZhdGU6c2V0dGluZ3MnLCAocGF5bG9hZCkgPT4ge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH0pLFxuXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnZGVhY3RpdmF0ZS1zZXR0aW5ncycsIChwYXlsb2FkKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChldmVudCA9PiBldmVudC5kaXNwb3NlKCkpO1xuICB9XG5cbiAgb3BlbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnZva2VBbmltYXRpb25MaWZlY3ljbGUoKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIGlmICghdGhpcy5hY3RpdmUpIHJldHVybjtcbiAgICBET00uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoY2xpY2tFdmVudCkpO1xuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMub25DbGljayA9IHRoaXNbdmFsdWUgPyAnY2xvc2UnIDogJ29wZW4nXTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oQUNUSVZFX0NMQVNTTkFNRSk7XG4gIH1cblxuICBpbnZva2VBbmltYXRpb25MaWZlY3ljbGUoKSB7XG4gICAgdGhpcy5vdmVybGF5LmF0dGFjaCgpO1xuICAgIHJldHVybiB0aGlzLnNldEFjdGl2ZSh0cnVlKVxuICAgICAgLnRoZW4oKCkgPT4gdGhpcy5hZGRMaXN0ZW5lcnMoKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuc2V0QWN0aXZlKGZhbHNlKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMub3ZlcmxheS5kZXRhY2goKSlcbiAgICAgIC50aGVuKCgpID0+IHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhdS1vbi1kZWFjdGl2YXRlOnNldHRpbmdzJykpO1xuICB9XG5cbiAgc2V0QWN0aXZlKHZhbHVlKSB7XG4gICAgcmV0dXJuIG9uVHJhbnNpdGlvbkVuZCh0aGlzLmVsZW1lbnQsICgpPT4ge1xuICAgICAgdGhpcy5hY3RpdmUgPSB2YWx1ZTtcbiAgICAgIHJldHVybiB0aGlzLmFjdGl2ZTtcbiAgICB9KTtcbiAgfVxuXG4gIGFkZExpc3RlbmVycygpIHtcbiAgICByZXR1cm4gb25Eb2N1bWVudEV2ZW50KGNsaWNrRXZlbnQsIChlLCByZWFkeSk9PiB7XG4gICAgICBpZiAoIXRoaXMuZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkpIHJldHVybiByZWFkeSgpO1xuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgb25DbGljaygkZXZlbnQpIHtcbiAgICB0aGlzLm9wZW4oKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
