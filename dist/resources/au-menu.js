System.register(['aurelia-templating', 'aurelia-dependency-injection', 'services/channel', 'aurelia-interface-platforms'], function (_export) {
  'use strict';

  var noView, customAttribute, customElement, bindable, inject, AUChannel, isTouch, AuMenuElement, AuMenuItemAttribute;

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
    }, function (_aureliaInterfacePlatforms) {
      isTouch = _aureliaInterfacePlatforms.isTouch;
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
          this.initialized = false;

          this.element = element;
          this.channel = channel;
        }

        _createDecoratedClass(AuMenuElement, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            var channel = this.channel;
            var subscriptions = this.subscriptions;
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
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzRCxnQkFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1dBQ3JFOzs7bUNBbkJVLG1CQUFtQjtBQUFuQiwyQkFBbUIsR0FEL0IsTUFBTSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsQ0FDZCxtQkFBbUIsS0FBbkIsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUYvQixNQUFNLENBRU0sbUJBQW1CLEtBQW5CLG1CQUFtQjtBQUFuQiwyQkFBbUIsR0FIL0IsZUFBZSxDQUFDLGNBQWMsQ0FBQyxDQUduQixtQkFBbUIsS0FBbkIsbUJBQW1CO2VBQW5CLG1CQUFtQiIsImZpbGUiOiJyZXNvdXJjZXMvYXUtbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bm9WaWV3LCBjdXN0b21BdHRyaWJ1dGUsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuaW1wb3J0IHtpc1RvdWNofSBmcm9tICdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnO1xuXG5mdW5jdGlvbiB0cmFuc2xhdGVJbmRpY2F0b3IoZWxlbWVudCwgaW5kaWNhdG9yKSB7XG4gIGlmICghaW5kaWNhdG9yKSByZXR1cm47XG4gIGxldCB0b3AgPSBlbGVtZW50Lm9mZnNldFRvcCArICdweCc7XG4gIGxldCB0cmFuc2xhdGUgPSBgdHJhbnNsYXRlKDAsICR7dG9wfSlgO1xuICBpbmRpY2F0b3Iuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdHJhbnNsYXRlO1xuICBpbmRpY2F0b3Iuc3R5bGUubW96VHJhbnNmb3JtID0gdHJhbnNsYXRlO1xuICBpbmRpY2F0b3Iuc3R5bGUubXNUcmFuc2Zvcm0gPSB0cmFuc2xhdGU7XG4gIGluZGljYXRvci5zdHlsZS5vVHJhbnNmb3JtID0gdHJhbnNsYXRlO1xuICBpbmRpY2F0b3Iuc3R5bGUudHJhbnNmb3JtID0gdHJhbnNsYXRlO1xufVxuXG5AY3VzdG9tRWxlbWVudCgnYXUtbWVudScpXG5AaW5qZWN0KEVsZW1lbnQsIEFVQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBBdU1lbnVFbGVtZW50IHtcblxuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG4gIHN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB9XG4gIGJpbmQoKSB7XG4gICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWw7XG4gICAgbGV0IHN1YnNjcmlwdGlvbnMgPSB0aGlzLnN1YnNjcmlwdGlvbnM7XG4gICAgc3Vic2NyaXB0aW9ucy5wdXNoKFxuICAgICAgLy8gSGFuZGxlcyBtZW51LWluZGljYXRvciwgUHVibGlzaGVkIGZyb20gaW5kaXZpZHVhbCBtZW51LWl0ZW1zIHdoZW4gc2VsZWN0ZWRcbiAgICAgIGNoYW5uZWwuc3Vic2NyaWJlKCdhdS1tZW51OnNldC1hY3RpdmUnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICB0cmFuc2xhdGVJbmRpY2F0b3IoZWxlbWVudCwgdGhpcy5pbmRpY2F0b3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGV2dCA9PiBldnQoKSk7XG4gIH1cblxufVxuXG5AY3VzdG9tQXR0cmlidXRlKCdhdS1tZW51LWl0ZW0nKVxuQG5vVmlld1xuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQXVNZW51SXRlbUF0dHJpYnV0ZSB7XG4gIEBiaW5kYWJsZSBpdGVtID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBpbmRpY2F0b3IgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhdS1tZW51OnNldC1hY3RpdmUnLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xuICAgIGlmICh2YWx1ZSkgdGhpcy5jaGFubmVsLnB1Ymxpc2goJ2F1LW1lbnU6c2V0LWFjdGl2ZScsIHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
