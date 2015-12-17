System.register(['aurelia-templating', 'aurelia-dependency-injection', 'services/channel', 'aurelia-interface-platforms', 'aurelia-pal'], function (_export) {
  'use strict';

  var noView, customAttribute, customElement, bindable, processContent, TargetInstruction, ViewSlot, children, inject, Container, AUChannel, isTouch, DOM, AuMenuSlot, AuMenuElement, AuMenuItemAttribute;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function translateIndicator(element, indicator) {
    if (!indicator) return;
    var top = '48px';
    if (element) {
      top = element.offsetTop + 'px';
    }
    var translate = 'translate(0, ' + top + ')';
    indicator.style.webkitTransform = translate;
    indicator.style.mozTransform = translate;
    indicator.style.msTransform = translate;
    indicator.style.oTransform = translate;
    indicator.style.transform = translate;
  }

  function compileTemplate(compiler, resouces, element, instruction) {
    var indicator = undefined;
    var fragment = undefined;
    var content = undefined;
    var factory = undefined;
    var node = undefined;

    fragment = DOM.createDocumentFragment();

    content = element.firstChild;
    while (content) {
      fragment.appendChild(content);
      content = element.firstChild;
    }

    factory = compiler.compile(fragment, resouces);
    instruction.menuFactory = factory;
    return true;
  }

  return {
    setters: [function (_aureliaTemplating) {
      noView = _aureliaTemplating.noView;
      customAttribute = _aureliaTemplating.customAttribute;
      customElement = _aureliaTemplating.customElement;
      bindable = _aureliaTemplating.bindable;
      processContent = _aureliaTemplating.processContent;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
      ViewSlot = _aureliaTemplating.ViewSlot;
      children = _aureliaTemplating.children;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }, function (_aureliaInterfacePlatforms) {
      isTouch = _aureliaInterfacePlatforms.isTouch;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      AuMenuSlot = (function () {
        function AuMenuSlot(element, channel, container, targetInstruction) {
          _classCallCheck(this, _AuMenuSlot);

          this.element = element;
          this.channel = channel;
          this.container = container;
          this.factory = targetInstruction.elementInstruction.menuFactory;
        }

        _createClass(AuMenuSlot, [{
          key: 'bind',
          value: function bind(bindingContext) {
            this.bindingContext = bindingContext;
          }
        }, {
          key: 'attached',
          value: function attached() {
            this.view = this.factory.create(this.container);
            this.view.bind(this.bindingContext);
            this.channel.publish(this);
          }
        }]);

        var _AuMenuSlot = AuMenuSlot;
        AuMenuSlot = inject(DOM.Element, AUChannel, Container, TargetInstruction)(AuMenuSlot) || AuMenuSlot;
        AuMenuSlot = processContent(compileTemplate)(AuMenuSlot) || AuMenuSlot;
        AuMenuSlot = noView(AuMenuSlot) || AuMenuSlot;
        AuMenuSlot = customElement('au-menu-slot')(AuMenuSlot) || AuMenuSlot;
        return AuMenuSlot;
      })();

      _export('AuMenuSlot', AuMenuSlot);

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
        }, {
          key: 'items',
          decorators: [children('au-menu-item')],
          initializer: function initializer() {
            return [];
          },
          enumerable: true
        }], null, _instanceInitializers);

        function AuMenuElement(element, channel, viewSlot) {
          _classCallCheck(this, _AuMenuElement);

          _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

          this.subscriptions = [];
          this.initialized = false;

          this.element = element;
          this.channel = channel;
          this.viewSlot = viewSlot;
        }

        _createDecoratedClass(AuMenuElement, [{
          key: 'bind',
          value: function bind() {
            var _this = this;

            var channel = this.channel;
            var subscriptions = this.subscriptions;
            subscriptions.push(channel.subscribe('au-menu:set-active', function (element) {
              translateIndicator(element, _this.indicator);
            }), channel.subscribe(AuMenuSlot, function (menu) {
              var promised = undefined;
              var view = _this.view;
              if (view) {
                promised = _this.viewSlot.remove(view, true);
              }
              Promise.resolve(promised).then(function () {
                _this.viewSlot.add(menu.view);
                _this.view = menu.view;
              });
            }), channel.subscribe('profile-changed', function (payload) {
              var firstChild = _this.element.firstElementChild;
              if (firstChild.nodeName === 'AU-MENU-INDICATOR') {
                firstChild = null;
              }
              translateIndicator(firstChild, _this.indicator);
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
        AuMenuElement = inject(Element, AUChannel, ViewSlot)(AuMenuElement) || AuMenuElement;
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
//# sourceMappingURL=data:application/json;base64,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LFFBQVE7O21CQUFhLElBQUk7Ozs7O0FBRWYsaUJBTEEsbUJBQW1CLENBS2xCLE9BQU8sRUFBRSxPQUFPLEVBQUU7Ozs7Ozs7OztBQUM1QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBUlUsbUJBQW1COztpQkFVdEIsb0JBQUc7QUFDVCxnQkFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2Ysa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxRDtXQUNGOzs7aUJBRVksdUJBQUMsS0FBSyxFQUFFO0FBQ25CLGdCQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQzNELGdCQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDckU7OzttQ0FuQlUsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUQvQixNQUFNLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxDQUNkLG1CQUFtQixLQUFuQixtQkFBbUI7QUFBbkIsMkJBQW1CLEdBRi9CLE1BQU0sQ0FFTSxtQkFBbUIsS0FBbkIsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUgvQixlQUFlLENBQUMsY0FBYyxDQUFDLENBR25CLG1CQUFtQixLQUFuQixtQkFBbUI7ZUFBbkIsbUJBQW1CIiwiZmlsZSI6InJlc291cmNlcy9hdS1tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub1ZpZXcsIGN1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIHByb2Nlc3NDb250ZW50LCBUYXJnZXRJbnN0cnVjdGlvbiwgVmlld1Nsb3QsIGNoaWxkcmVufSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtpbmplY3QsIENvbnRhaW5lcn0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5pbXBvcnQge2lzVG91Y2h9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuZnVuY3Rpb24gdHJhbnNsYXRlSW5kaWNhdG9yKGVsZW1lbnQsIGluZGljYXRvcikge1xuICBpZiAoIWluZGljYXRvcikgcmV0dXJuO1xuICBsZXQgdG9wID0gJzQ4cHgnO1xuICBpZiAoZWxlbWVudCkge1xuICAgIHRvcCA9IGVsZW1lbnQub2Zmc2V0VG9wICsgJ3B4JztcbiAgfVxuICBsZXQgdHJhbnNsYXRlID0gYHRyYW5zbGF0ZSgwLCAke3RvcH0pYDtcbiAgaW5kaWNhdG9yLnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLm1velRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLm1zVHJhbnNmb3JtID0gdHJhbnNsYXRlO1xuICBpbmRpY2F0b3Iuc3R5bGUub1RyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbiAgaW5kaWNhdG9yLnN0eWxlLnRyYW5zZm9ybSA9IHRyYW5zbGF0ZTtcbn1cblxuXG5mdW5jdGlvbiBjb21waWxlVGVtcGxhdGUoY29tcGlsZXIsIHJlc291Y2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbikge1xuICBsZXQgaW5kaWNhdG9yO1xuICBsZXQgZnJhZ21lbnQ7XG4gIGxldCBjb250ZW50O1xuICBsZXQgZmFjdG9yeTtcbiAgbGV0IG5vZGU7XG5cbiAgZnJhZ21lbnQgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIGNvbnRlbnQgPSBlbGVtZW50LmZpcnN0Q2hpbGQ7XG4gIHdoaWxlKGNvbnRlbnQpIHtcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICBjb250ZW50ID0gZWxlbWVudC5maXJzdENoaWxkO1xuICB9XG5cbiAgZmFjdG9yeSA9IGNvbXBpbGVyLmNvbXBpbGUoZnJhZ21lbnQsIHJlc291Y2VzKTtcbiAgaW5zdHJ1Y3Rpb24ubWVudUZhY3RvcnkgPSBmYWN0b3J5O1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2F1LW1lbnUtc2xvdCcpXG5Abm9WaWV3XG5AcHJvY2Vzc0NvbnRlbnQoY29tcGlsZVRlbXBsYXRlKVxuQGluamVjdChET00uRWxlbWVudCwgQVVDaGFubmVsLCBDb250YWluZXIsIFRhcmdldEluc3RydWN0aW9uKVxuZXhwb3J0IGNsYXNzIEF1TWVudVNsb3Qge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsLCBjb250YWluZXIsIHRhcmdldEluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuZmFjdG9yeSA9IHRhcmdldEluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbi5tZW51RmFjdG9yeTtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmJpbmRpbmdDb250ZXh0ID0gYmluZGluZ0NvbnRleHQ7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmZhY3RvcnkuY3JlYXRlKHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLnZpZXcuYmluZCh0aGlzLmJpbmRpbmdDb250ZXh0KTtcbiAgICB0aGlzLmNoYW5uZWwucHVibGlzaCh0aGlzKTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnYXUtbWVudScpXG5AaW5qZWN0KEVsZW1lbnQsIEFVQ2hhbm5lbCwgVmlld1Nsb3QpXG5leHBvcnQgY2xhc3MgQXVNZW51RWxlbWVudCB7XG5cbiAgQGJpbmRhYmxlIG5hbWUgPSBudWxsO1xuICBAY2hpbGRyZW4oJ2F1LW1lbnUtaXRlbScpIGl0ZW1zID0gW107XG4gIHN1YnNjcmlwdGlvbnMgPSBbXTtcbiAgaW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsLCB2aWV3U2xvdCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLnZpZXdTbG90ID0gdmlld1Nsb3Q7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVsO1xuICAgIGxldCBzdWJzY3JpcHRpb25zID0gdGhpcy5zdWJzY3JpcHRpb25zO1xuICAgIHN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIC8vIEhhbmRsZXMgbWVudS1pbmRpY2F0b3IsIFB1Ymxpc2hlZCBmcm9tIGluZGl2aWR1YWwgbWVudS1pdGVtcyB3aGVuIHNlbGVjdGVkXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgnYXUtbWVudTpzZXQtYWN0aXZlJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgdHJhbnNsYXRlSW5kaWNhdG9yKGVsZW1lbnQsIHRoaXMuaW5kaWNhdG9yKTtcbiAgICAgIH0pLFxuICAgICAgY2hhbm5lbC5zdWJzY3JpYmUoQXVNZW51U2xvdCwgKG1lbnUpPT4ge1xuICAgICAgICBsZXQgcHJvbWlzZWQ7XG4gICAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3O1xuICAgICAgICBpZiAodmlldykge1xuICAgICAgICAgIHByb21pc2VkID0gdGhpcy52aWV3U2xvdC5yZW1vdmUodmlldywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHByb21pc2VkKVxuICAgICAgICAgIC50aGVuKCgpPT4ge1xuICAgICAgICAgICAgdGhpcy52aWV3U2xvdC5hZGQobWVudS52aWV3KTtcbiAgICAgICAgICAgIHRoaXMudmlldyA9IG1lbnUudmlldztcbiAgICAgICAgICB9KVxuICAgICAgfSksXG4gICAgICBjaGFubmVsLnN1YnNjcmliZSgncHJvZmlsZS1jaGFuZ2VkJywgKHBheWxvYWQpPT4ge1xuICAgICAgICBsZXQgZmlyc3RDaGlsZCA9IHRoaXMuZWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgaWYgKGZpcnN0Q2hpbGQubm9kZU5hbWUgPT09ICdBVS1NRU5VLUlORElDQVRPUicpIHtcbiAgICAgICAgICBmaXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0cmFuc2xhdGVJbmRpY2F0b3IoZmlyc3RDaGlsZCwgdGhpcy5pbmRpY2F0b3IpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGV2dCA9PiBldnQoKSk7XG4gIH1cbn1cblxuQGN1c3RvbUF0dHJpYnV0ZSgnYXUtbWVudS1pdGVtJylcbkBub1ZpZXdcbkBpbmplY3QoRWxlbWVudCwgQVVDaGFubmVsKVxuZXhwb3J0IGNsYXNzIEF1TWVudUl0ZW1BdHRyaWJ1dGUge1xuICBAYmluZGFibGUgaXRlbSA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuICBAYmluZGFibGUgaW5kaWNhdG9yID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjaGFubmVsKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmNoYW5uZWwucHVibGlzaCgnYXUtbWVudTpzZXQtYWN0aXZlJywgdGhpcy5lbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdhY3RpdmUnKTtcbiAgICBpZiAodmFsdWUpIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhdS1tZW51OnNldC1hY3RpdmUnLCB0aGlzLmVsZW1lbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
