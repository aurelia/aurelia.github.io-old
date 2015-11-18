System.register(['aurelia-framework', 'services/channel'], function (_export) {
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
    setters: [function (_aureliaFramework) {
      noView = _aureliaFramework.noView;
      customAttribute = _aureliaFramework.customAttribute;
      customElement = _aureliaFramework.customElement;
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1tZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzsyRUFpQmEsYUFBYSxFQWdDYixtQkFBbUI7Ozs7Ozs7O0FBN0NoQyxXQUFTLGtCQUFrQixDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUU7QUFDOUMsUUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPO0FBQ3ZCLFFBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ25DLFFBQUksU0FBUyxxQkFBbUIsR0FBRyxNQUFHLENBQUM7QUFDdkMsYUFBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO0FBQzVDLGFBQVMsQ0FBQyxLQUFLLENBQUMsWUFBWSxHQUFHLFNBQVMsQ0FBQztBQUN6QyxhQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUM7QUFDeEMsYUFBUyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0FBQ3ZDLGFBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztHQUN2Qzs7OztpQ0FiTyxNQUFNOzBDQUFFLGVBQWU7d0NBQUUsYUFBYTttQ0FBRSxRQUFRO2lDQUFFLE1BQU07O21DQUN4RCxTQUFTOzs7QUFnQkosbUJBQWE7Ozs7OEJBQWIsYUFBYTs7dUJBRXZCLFFBQVE7O21CQUFRLElBQUk7Ozs7O0FBR1YsaUJBTEEsYUFBYSxDQUtaLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7O2VBRjlCLGFBQWEsR0FBRyxFQUFFOztBQUdoQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBUlUsYUFBYTs7aUJBU3BCLGdCQUFHOzs7QUFDTCxnQkFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMzQixnQkFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztBQUN2QyxnQkFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsRUFFdkM7QUFDRCx5QkFBYSxDQUFDLElBQUksQ0FDaEIsT0FBTyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsRUFBRSxVQUFDLE9BQU8sRUFBSztBQUNuRCxnQ0FBa0IsQ0FBQyxPQUFPLEVBQUUsTUFBSyxTQUFTLENBQUMsQ0FBQzthQUM3QyxDQUFDLENBQ0gsQ0FBQztXQUNIOzs7aUJBRUssa0JBQUc7QUFDUCxnQkFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsVUFBQSxHQUFHO3FCQUFJLEdBQUcsRUFBRTthQUFBLENBQUMsQ0FBQztXQUMxQzs7O2lCQUVPLG9CQUFHLEVBQUU7Ozs2QkExQkYsYUFBYTtBQUFiLHFCQUFhLEdBRHpCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQ2QsYUFBYSxLQUFiLGFBQWE7QUFBYixxQkFBYSxHQUZ6QixhQUFhLENBQUMsU0FBUyxDQUFDLENBRVosYUFBYSxLQUFiLGFBQWE7ZUFBYixhQUFhOzs7OztBQWdDYix5QkFBbUI7Ozs7OEJBQW5CLG1CQUFtQjs7dUJBQzdCLFFBQVE7O21CQUFRLElBQUk7Ozs7O3VCQUNwQixRQUFROzttQkFBVSxJQUFJOzs7Ozt1QkFDdEIsUUFBUTs7bUJBQWEsSUFBSTs7Ozs7QUFFZixpQkFMQSxtQkFBbUIsQ0FLbEIsT0FBTyxFQUFFLE9BQU8sRUFBRTs7Ozs7Ozs7O0FBQzVCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzs4QkFSVSxtQkFBbUI7O2lCQVV0QixvQkFBRztBQUNULGdCQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7QUFDZixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFEO1dBQ0Y7OztpQkFFWSx1QkFBQyxLQUFLLEVBQUU7QUFDbkIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0QsZ0JBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUNyRTs7O21DQW5CVSxtQkFBbUI7QUFBbkIsMkJBQW1CLEdBRC9CLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQ2QsbUJBQW1CLEtBQW5CLG1CQUFtQjtBQUFuQiwyQkFBbUIsR0FGL0IsTUFBTSxDQUVNLG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsMkJBQW1CLEdBSC9CLGVBQWUsQ0FBQyxjQUFjLENBQUMsQ0FHbkIsbUJBQW1CLEtBQW5CLG1CQUFtQjtlQUFuQixtQkFBbUIiLCJmaWxlIjoicmVzb3VyY2VzL2F1LW1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge25vVmlldywgY3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5cblxuZnVuY3Rpb24gdHJhbnNsYXRlSW5kaWNhdG9yKGVsZW1lbnQsIGluZGljYXRvcikge1xuICBpZiAoIWluZGljYXRvcikgcmV0dXJuO1xuICBsZXQgdG9wID0gZWxlbWVudC5vZmZzZXRUb3AgKyAncHgnO1xuICBsZXQgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZSgwLCAke3RvcH0pYDtcbiAgaW5kaWNhdG9yLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLm1velRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNsYXRlO1xuICBpbmRpY2F0b3Iuc3R5bGUub1RyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2F1LW1lbnUnKVxuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQXVNZW51RWxlbWVudCB7XG5cbiAgQGJpbmRhYmxlIG5hbWUgPSBudWxsO1xuICBzdWJzY3JpcHRpb25zID0gW107XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY2hhbm5lbCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgfVxuICBiaW5kKCkge1xuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVsO1xuICAgIGxldCBzdWJzY3JpcHRpb25zID0gdGhpcy5zdWJzY3JpcHRpb25zO1xuICAgIGlmICghdGhpcy5pbmRpY2F0b3IubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAvLyB0aGlzLmluZGljYXRvci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBzdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtbWVudTpzZXQtYWN0aXZlJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgdHJhbnNsYXRlSW5kaWNhdG9yKGVsZW1lbnQsIHRoaXMuaW5kaWNhdG9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChldnQgPT4gZXZ0KCkpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7fVxufVxuXG5AY3VzdG9tQXR0cmlidXRlKCdhdS1tZW51LWl0ZW0nKVxuQG5vVmlld1xuQGluamVjdChFbGVtZW50LCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgQXVNZW51SXRlbUF0dHJpYnV0ZSB7XG4gIEBiaW5kYWJsZSBpdGVtID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBpbmRpY2F0b3IgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNoYW5uZWwpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhdS1tZW51OnNldC1hY3RpdmUnLCB0aGlzLmVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2FjdGl2ZScpO1xuICAgIGlmICh2YWx1ZSkgdGhpcy5jaGFubmVsLnB1Ymxpc2goJ2F1LW1lbnU6c2V0LWFjdGl2ZScsIHRoaXMuZWxlbWVudCk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
