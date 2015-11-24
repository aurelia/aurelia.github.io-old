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
          this.onTouchend = this.onTouchend.bind(this);
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

            if (isTouch) {
              this.element.addEventListener('touchend', this.onTouchend, true);
            }
          }
        }, {
          key: 'unbind',
          value: function unbind() {
            this.subscriptions.forEach(function (evt) {
              return evt();
            });

            if (isTouch) {
              this.element.removeEventListener('touchend', this.onTouchend, true);
            }
          }
        }, {
          key: 'onTouchend',
          value: function onTouchend(event) {
            this.channel.publish('au-deactivate:aside');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztvRkFrQmEsYUFBYSxFQTRDYixtQkFBbUI7Ozs7Ozs7O0FBekRoQyxXQUFTLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDOUMsUUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPO0FBQ3ZCLFFBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ25DLFFBQUksU0FBUyxxQkFBbUIsR0FBRyxNQUFHLENBQUM7QUFDdkMsYUFBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQzVDLGFBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUN6QyxhQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDeEMsYUFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQ3ZDLGFBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztHQUN2Qzs7OztrQ0FkTyxNQUFNOzJDQUFFLGVBQWU7eUNBQUUsYUFBYTtvQ0FBRSxRQUFROzsyQ0FDaEQsTUFBTTs7bUNBQ04sU0FBUzs7MkNBQ1QsT0FBTzs7O0FBZUYsbUJBQWE7Ozs7OEJBQWIsYUFBYTs7dUJBRXZCLFFBQVE7O21CQUFRLElBQUk7Ozs7O0FBSVYsaUJBTkEsYUFBYSxDQU1aLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7O2VBSDlCLGFBQWEsR0FBRyxFQUFFO2VBQ2xCLFdBQVcsR0FBRyxLQUFLOztBQUdqQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzlDOzs4QkFWVSxhQUFhOztpQkFXcEIsZ0JBQUc7OztBQUNMLGdCQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQzNCLGdCQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQ3ZDLHlCQUFhLENBQUMsSUFBSSxDQUVoQixPQUFPLENBQUMsU0FBUyxDQUFDLG9CQUFvQixFQUFFLFVBQUMsT0FBTyxFQUFLO0FBQ25ELGdDQUFrQixDQUFDLE9BQU8sRUFBRSxNQUFLLFNBQVMsQ0FBQyxDQUFDO2FBQzdDLENBQUMsQ0FDSCxDQUFDOztBQUdGLGdCQUFJLE9BQU8sRUFBRTtBQUNYLGtCQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ2xFO1dBQ0Y7OztpQkFFSyxrQkFBRztBQUNQLGdCQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7cUJBQUksR0FBRyxFQUFFO2FBQUEsQ0FBQyxDQUFDOztBQUd6QyxnQkFBSSxPQUFPLEVBQUU7QUFDWCxrQkFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNyRTtXQUNGOzs7aUJBRVMsb0JBQUMsS0FBSyxFQUFFO0FBQ2hCLGdCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1dBQzdDOzs7NkJBdENVLGFBQWE7QUFBYixxQkFBYSxHQUR6QixNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUNkLGFBQWEsS0FBYixhQUFhO0FBQWIscUJBQWEsR0FGekIsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUVaLGFBQWEsS0FBYixhQUFhO2VBQWIsYUFBYTs7Ozs7QUE0Q2IseUJBQW1COzs7OzhCQUFuQixtQkFBbUI7O3VCQUM3QixRQUFROzttQkFBUSxJQUFJOzs7Ozt1QkFDcEIsUUFBUTs7bUJBQVUsSUFBSTs7Ozs7dUJBQ3RCLFFBQVE7O21CQUFhLElBQUk7Ozs7O0FBRWYsaUJBTEEsbUJBQW1CLENBS2xCLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7OztBQUM1QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBUlUsbUJBQW1COztpQkFVdEIsb0JBQUc7QUFDVCxnQkFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2Ysa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxRDtXQUNGOzs7aUJBRVksdUJBQUMsS0FBSyxFQUFFO0FBQ25CLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNELGdCQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDckU7OzttQ0FuQlUsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUQvQixNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUNkLG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsMkJBQW1CLEdBRi9CLE1BQU0sQ0FFTSxtQkFBbUIsS0FBbkIsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUgvQixlQUFlLENBQUMsY0FBYyxDQUFDLENBR25CLG1CQUFtQixLQUFuQixtQkFBbUI7ZUFBbkIsbUJBQW1CIiwiZmlsZSI6InJlc291cmNlcy9hdS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub1ZpZXcsIGN1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudCwgYmluZGFibGV9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5pbXBvcnQge2lzVG91Y2h9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUluZGljYXRvcihlbGVtZW50LCBpbmRpY2F0b3IpIHtcbiAgaWYgKCFpbmRpY2F0b3IpIHJldHVybjtcbiAgbGV0IHRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wICsgJ3B4JztcbiAgbGV0IHRyYW5zbGF0ZSA9IGB0cmFuc2xhdGUoMCwgJHt0b3B9KWA7XG4gIGluZGljYXRvci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2xhdGU7XG4gIGluZGljYXRvci5zdHlsZS5tb3pUcmFuc2Zvcm0gPSB0cmFuc2xhdGU7XG4gIGluZGljYXRvci5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLm9UcmFuc2Zvcm0gPSB0cmFuc2xhdGU7XG4gIGluZGljYXRvci5zdHlsZS50cmFuc2Zvcm0gPSB0cmFuc2xhdGU7XG59XG5cbkBjdXN0b21FbGVtZW50KCdhdS1tZW51JylcbkBpbmplY3QoRWxlbWVudCwgQVVDaGFubmVsKVxuZXhwb3J0IGNsYXNzIEF1TWVudUVsZW1lbnQge1xuXG4gIEBiaW5kYWJsZSBuYW1lID0gbnVsbDtcbiAgc3Vic2NyaXB0aW9ucyA9IFtdO1xuICBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5vblRvdWNoZW5kID0gdGhpcy5vblRvdWNoZW5kLmJpbmQodGhpcyk7XG4gIH1cbiAgYmluZCgpIHtcbiAgICBsZXQgY2hhbm5lbCA9IHRoaXMuY2hhbm5lbDtcbiAgICBsZXQgc3Vic2NyaXB0aW9ucyA9IHRoaXMuc3Vic2NyaXB0aW9ucztcbiAgICBzdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICAvLyBIYW5kbGVzIG1lbnUtaW5kaWNhdG9yLCBQdWJsaXNoZWQgZnJvbSBpbmRpdmlkdWFsIG1lbnUtaXRlbXMgd2hlbiBzZWxlY3RlZFxuICAgICAgY2hhbm5lbC5zdWJzY3JpYmUoJ2F1LW1lbnU6c2V0LWFjdGl2ZScsIChlbGVtZW50KSA9PiB7XG4gICAgICAgIHRyYW5zbGF0ZUluZGljYXRvcihlbGVtZW50LCB0aGlzLmluZGljYXRvcik7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICAvLyBIYW5kbGVzIGlzc3VlIHdoZW4gb24gdG91Y2ggZGV2aWNlLCBhIG1lbnVJdGVtIGlzIG5hdmlnYXRlZCwgdGhlIHNpZGViYXIgc2hvdWxkIGNsb3NlO1xuICAgIGlmIChpc1RvdWNoKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCB0aGlzLm9uVG91Y2hlbmQsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChldnQgPT4gZXZ0KCkpO1xuXG4gICAgLy8gSGFuZGxlcyBpc3N1ZSB3aGVuIG9uIHRvdWNoIGRldmljZSwgYSBtZW51SXRlbSBpcyBuYXZpZ2F0ZWQsIHRoZSBzaWRlYmFyIHNob3VsZCBjbG9zZTtcbiAgICBpZiAoaXNUb3VjaCkge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vblRvdWNoZW5kLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvblRvdWNoZW5kKGV2ZW50KSB7XG4gICAgdGhpcy5jaGFubmVsLnB1Ymxpc2goJ2F1LWRlYWN0aXZhdGU6YXNpZGUnKTtcbiAgfVxufVxuXG5AY3VzdG9tQXR0cmlidXRlKCdhdS1tZW51LWl0ZW0nKVxuQG5vVmlld1xuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQXVNZW51SXRlbUF0dHJpYnV0ZSB7XG4gIEBiaW5kYWJsZSBpdGVtID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBpbmRpY2F0b3IgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhdS1tZW51OnNldC1hY3RpdmUnLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xuICAgIGlmICh2YWx1ZSkgdGhpcy5jaGFubmVsLnB1Ymxpc2goJ2F1LW1lbnU6c2V0LWFjdGl2ZScsIHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
