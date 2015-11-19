System.register(['aurelia-templating', 'aurelia-dependency-injection', 'services/channel'], function (_export) {
  'use strict';

  var noView, customAttribute, customElement, bindable, inject, AUChannel, AuMenuElement, AuMenuItemAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function translateIndicator(element, indicator) {
    if (!indicator) return;
    var top = element.offsetTop + 'px';
    var translate = 'translate(0, ' + top + ')';
    indicator.style.webkitTransform = translate;
    indicator.style.mozTransform = translate;
    indicator.style.msTransform = translate;
    indicator.style.oTransform = translate;
    indicator.style.transform = translate;
  }

  return {
    setters: [function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
      customAttribute = _aureliaTemplating.customAttribute;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }],
    execute: function () {
      AuMenuElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AuMenuElement, [{
          key: 'name',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AuMenuElement(element, channel) {
          _classCallCheck(this, _AuMenuElement);

          _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

          this.subscriptions = [];

          this.element = element;
          this.channel = channel;
        }

        _createDecoratedClass(AuMenuElement, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            var channel = this.channel;
            var subscriptions = this.subscriptions;
            if (!this.indicator.nextElementSibling) {}
            subscriptions.push(channel.subscribe('au-menu:set-active', function (element) {
              translateIndicator(element, _this.indicator);
            }));
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.subscriptions.forEach(function (evt) {
              return evt();
            });
          }
        }, {
          key: 'detached',
          value: function detached() {}
        }], null, _instanceInitializers);

        var _AuMenuElement = AuMenuElement;
        AuMenuElement = inject(Element, AUChannel)(AuMenuElement) || AuMenuElement;
        AuMenuElement = customElement('au-menu')(AuMenuElement) || AuMenuElement;
        return AuMenuElement;
      })();

      _export('AuMenuElement', AuMenuElement);

      AuMenuItemAttribute = (function () {
        var _instanceInitializers2 = {};
        var _instanceInitializers2 = {};

        _createDecoratedClass(AuMenuItemAttribute, [{
          key: 'item',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'active',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }, {
          key: 'indicator',
          decorators: [bindable],
          initializer: function initializer() {
            return null;
          },
          enumerable: true
        }], null, _instanceInitializers2);

        function AuMenuItemAttribute(element, channel) {
          _classCallCheck(this, _AuMenuItemAttribute);

          _defineDecoratedPropertyDescriptor(this, 'item', _instanceInitializers2);

          _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);

          _defineDecoratedPropertyDescriptor(this, 'indicator', _instanceInitializers2);

          this.element = element;
          this.channel = channel;
        }

        _createDecoratedClass(AuMenuItemAttribute, [{
          key: 'attached',
          value: function attached() {
            if (this.active) {
              this.channel.publish('au-menu:set-active', this.element);
            }
          }
        }, {
          key: 'activeChanged',
          value: function activeChanged(value) {
            this.element.classList[value ? 'add' : 'remove']('active');
            if (value) this.channel.publish('au-menu:set-active', this.element);
          }
        }], null, _instanceInitializers2);

        var _AuMenuItemAttribute = AuMenuItemAttribute;
        AuMenuItemAttribute = inject(Element, AUChannel)(AuMenuItemAttribute) || AuMenuItemAttribute;
        AuMenuItemAttribute = noView(AuMenuItemAttribute) || AuMenuItemAttribute;
        AuMenuItemAttribute = customAttribute('au-menu-item')(AuMenuItemAttribute) || AuMenuItemAttribute;
        return AuMenuItemAttribute;
      })();

      _export('AuMenuItemAttribute', AuMenuItemAttribute);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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LFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNELGdCQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDckU7OzttQ0FuQlUsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUQvQixNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUNkLG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsMkJBQW1CLEdBRi9CLE1BQU0sQ0FFTSxtQkFBbUIsS0FBbkIsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUgvQixlQUFlLENBQUMsY0FBYyxDQUFDLENBR25CLG1CQUFtQixLQUFuQixtQkFBbUI7ZUFBbkIsbUJBQW1CIiwiZmlsZSI6InJlc291cmNlcy9hdS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub1ZpZXcsIGN1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5cblxuZnVuY3Rpb24gdHJhbnNsYXRlSW5kaWNhdG9yKGVsZW1lbnQsIGluZGljYXRvcikge1xuICBpZiAoIWluZGljYXRvcikgcmV0dXJuO1xuICBsZXQgdG9wID0gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnO1xuICBsZXQgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZSgwLCAke3RvcH0pYDtcbiAgaW5kaWNhdG9yLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLm1velRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNsYXRlO1xuICBpbmRpY2F0b3Iuc3R5bGUub1RyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2F1LW1lbnUnKVxuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQXVNZW51RWxlbWVudCB7XG5cbiAgQGJpbmRhYmxlIG5hbWUgPSBudWxsO1xuICBzdWJzY3JpcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY2hhbm5lbCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgfVxuICBiaW5kKCkge1xuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVsO1xuICAgIGxldCBzdWJzY3JpcHRpb25zID0gdGhpcy5zdWJzY3JpcHRpb25zO1xuICAgIGlmICghdGhpcy5pbmRpY2F0b3IubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAvLyB0aGlzLmluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBzdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtbWVudTpzZXQtYWN0aXZlJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgdHJhbnNsYXRlSW5kaWNhdG9yKGVsZW1lbnQsIHRoaXMuaW5kaWNhdG9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChldnQgPT4gZXZ0KCkpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7fVxufVxuXG5AY3VzdG9tQXR0cmlidXRlKCdhdS1tZW51LWl0ZW0nKVxuQG5vVmlld1xuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQXVNZW51SXRlbUF0dHJpYnV0ZSB7XG4gIEBiaW5kYWJsZSBpdGVtID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBpbmRpY2F0b3IgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhdS1tZW51OnNldC1hY3RpdmUnLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xuICAgIGlmICh2YWx1ZSkgdGhpcy5jaGFubmVsLnB1Ymxpc2goJ2F1LW1lbnU6c2V0LWFjdGl2ZScsIHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
