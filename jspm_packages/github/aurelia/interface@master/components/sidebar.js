/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-event-aggregator', './layout', './content-process', '../AIViewController'], function (exports, _aureliaFramework, _aureliaPal, _aureliaEventAggregator, _layout, _contentProcess, _AIViewController) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-sidebar';
  var SIDE_BAR_ANIMATIONS = {
    'slide-over': 'slide-over',
    'slide-over-ios': 'slide-over-ios',
    'slide-over-android': 'slide-over-android',
    'slide-over-ai': 'slide-over-ai',
    'push-view': 'push-view',
    'push-view-ios': 'push-view-ios',
    'push-view-android': 'push-view-android',
    'push-view-ai': 'push-view-ai',
    'push-content': 'push-content',
    'push-content-ios': 'push-content-ios',
    'push-content-android': 'push-content-android',
    'push-content-ai': 'push-content-ai'
  };

  function isPushView(animation) {
    return (/push-view/gi.test(animation)
    );
  }

  var AISidebarElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AISidebarElement, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'fold',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'side',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'offScreen',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'animation',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'slide-over';
      },
      enumerable: true
    }, {
      key: 'enableOverlay',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function AISidebarElement(element, container, eventAggregator, instruction) {
      _classCallCheck(this, _AISidebarElement);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'fold', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'side', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'offScreen', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'animation', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'enableOverlay', _instanceInitializers);

      this.subscriptions = [];
      this.activeChangedListeners = [];

      this.element = element;
      this.container = container;
      this.instruction = instruction.elementInstruction;
      this.viewFactory = instruction.elementInstruction.sidebarContentFactory;
      this.eventAggregator = eventAggregator;
    }

    _createDecoratedClass(AISidebarElement, [{
      key: 'bind',
      value: function bind(bindingContext) {
        var _this = this;

        this.bindingContext = bindingContext;

        this.enableOverlay = this.enableOverlay || this.element.hasAttribute('enable-overlay');
        this.subscriptions.push(this.eventAggregator.subscribe('ai-sidebar:close', function () {
          _this.active = false;
        }), this.eventAggregator.subscribe('ai-sidebar:open', function () {
          _this.active = true;
        }));
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.view = this.viewFactory.create(this.container, this.instruction);
        this.view.bind(this, this.bindingContext);
        this.eventAggregator.publish(this);
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        while (this.subscriptions.length) {
          this.subscriptions.pop().dispose();
        }
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        var _this2 = this;

        var self = this;
        this.element.classList[value ? 'add' : 'remove']('is-open');

        if (this.enableOverlay) {
          if (value) {
            this.eventAggregator.publish('ai-overlay:show', {
              touchHandler: function touchHandler() {
                _this2.active = false;
              }
            });
          } else {
            this.eventAggregator.publish('ai-overlay:hide');
          }
        }

        this.activeChangedListeners.forEach(function (listener) {
          listener(value);
        });
      }
    }, {
      key: 'onOpenChanged',
      value: function onOpenChanged(listener) {
        this.activeChangedListeners.push(listener);
      }
    }, {
      key: 'openSidebar',
      value: function openSidebar() {
        this.active = true;
      }
    }, {
      key: 'closeSidebar',
      value: function closeSidebar() {
        this.active = false;
      }
    }, {
      key: 'toggleSidebar',
      value: function toggleSidebar() {
        if (this.active) this.closeSidebar();else this.openSidebar();
      }
    }, {
      key: 'animationChanged',
      value: function animationChanged(animation, lastAnimation) {

        if (animation in SIDE_BAR_ANIMATIONS) {
          lastAnimation && this.element.classList.remove(lastAnimation);
          animation && this.element.classList.add(animation);
        }

        this.isPushView = isPushView(animation);
        if (this.isPushView && this.element.parentElement) {
          this.element.parentElement.classList.add('sidebar-' + animation);
        }
      }
    }, {
      key: 'offScreenChanged',
      value: function offScreenChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('off-screen');
      }
    }], null, _instanceInitializers);

    var _AISidebarElement = AISidebarElement;
    AISidebarElement = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaFramework.Container, _aureliaEventAggregator.EventAggregator, _aureliaFramework.TargetInstruction)(AISidebarElement) || AISidebarElement;
    AISidebarElement = (0, _aureliaFramework.processContent)(_contentProcess.AISidebarContentProcessing.sidebar)(AISidebarElement) || AISidebarElement;
    AISidebarElement = (0, _aureliaFramework.customElement)('ai-sidebar')(AISidebarElement) || AISidebarElement;
    return AISidebarElement;
  })();

  exports.AISidebarElement = AISidebarElement;

  var AISidebarSlot = (function () {
    var _instanceInitializers2 = {};
    var _instanceInitializers2 = {};

    _createDecoratedClass(AISidebarSlot, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers2);

    function AISidebarSlot(viewSlot, container, eventAggregator) {
      _classCallCheck(this, _AISidebarSlot);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers2);

      this.container = container;
      this.viewSlot = viewSlot;
      this.eventAggregator = eventAggregator;
    }

    _createDecoratedClass(AISidebarSlot, [{
      key: 'bind',
      value: function bind(bindingContext) {
        var _this3 = this;

        this.appSidebar = bindingContext;
        this.subscription = this.eventAggregator.subscribe(AISidebarElement, function (sidebar) {
          var view = _this3.view;

          if (view) {
            _this3.viewSlot.remove(view, true);
          }

          sidebar.onOpenChanged(function (value) {
            _this3.appSidebar.active = value;
          });

          _this3.view = sidebar.view;
          _this3.viewSlot.add(sidebar.view);
        });
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        if (this.subscription) {
          this.subscription.dispose();
        }
      }
    }], null, _instanceInitializers2);

    var _AISidebarSlot = AISidebarSlot;
    AISidebarSlot = (0, _aureliaFramework.inject)(_aureliaFramework.ViewSlot, _aureliaFramework.Container, _aureliaEventAggregator.EventAggregator)(AISidebarSlot) || AISidebarSlot;
    AISidebarSlot = (0, _aureliaFramework.noView)(AISidebarSlot) || AISidebarSlot;
    AISidebarSlot = (0, _aureliaFramework.customElement)('ai-sidebar-slot')(AISidebarSlot) || AISidebarSlot;
    return AISidebarSlot;
  })();

  exports.AISidebarSlot = AISidebarSlot;
});
//# sourceMappingURL=data:application/json;base64,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YSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvc2lkZWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvY2Vzc0NvbnRlbnQsIFZpZXdTbG90LCBub1ZpZXcsIENvbnRhaW5lciwgVGFyZ2V0SW5zdHJ1Y3Rpb24sIGlubGluZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcbmltcG9ydCB7TGF5b3V0Q29udHJvbGxlcn0gZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IHtBSVNpZGViYXJDb250ZW50UHJvY2Vzc2luZ30gZnJvbSAnLi9jb250ZW50LXByb2Nlc3MnO1xuaW1wb3J0IHtBSX0gZnJvbSAnLi4vQUlWaWV3Q29udHJvbGxlcic7XG5jb25zdCBjbGFzc05hbWUgPSAnYWktc2lkZWJhcic7XG5jb25zdCBTSURFX0JBUl9BTklNQVRJT05TID0ge1xuICAnc2xpZGUtb3Zlcic6J3NsaWRlLW92ZXInLFxuICAnc2xpZGUtb3Zlci1pb3MnOidzbGlkZS1vdmVyLWlvcycsXG4gICdzbGlkZS1vdmVyLWFuZHJvaWQnOidzbGlkZS1vdmVyLWFuZHJvaWQnLFxuICAnc2xpZGUtb3Zlci1haSc6J3NsaWRlLW92ZXItYWknLFxuICAncHVzaC12aWV3JzoncHVzaC12aWV3JyxcbiAgJ3B1c2gtdmlldy1pb3MnOidwdXNoLXZpZXctaW9zJyxcbiAgJ3B1c2gtdmlldy1hbmRyb2lkJzoncHVzaC12aWV3LWFuZHJvaWQnLFxuICAncHVzaC12aWV3LWFpJzoncHVzaC12aWV3LWFpJyxcbiAgJ3B1c2gtY29udGVudCc6J3B1c2gtY29udGVudCcsXG4gICdwdXNoLWNvbnRlbnQtaW9zJzoncHVzaC1jb250ZW50LWlvcycsXG4gICdwdXNoLWNvbnRlbnQtYW5kcm9pZCc6J3B1c2gtY29udGVudC1hbmRyb2lkJyxcbiAgJ3B1c2gtY29udGVudC1haSc6J3B1c2gtY29udGVudC1haSdcbn07XG5cbmZ1bmN0aW9uIGlzUHVzaFZpZXcoYW5pbWF0aW9uKSB7XG4gIHJldHVybiAvcHVzaC12aWV3L2dpLnRlc3QoYW5pbWF0aW9uKTtcbn1cblxuXG5AY3VzdG9tRWxlbWVudCgnYWktc2lkZWJhcicpXG5AcHJvY2Vzc0NvbnRlbnQoQUlTaWRlYmFyQ29udGVudFByb2Nlc3Npbmcuc2lkZWJhcilcbkBpbmplY3QoRE9NLkVsZW1lbnQsIENvbnRhaW5lciwgRXZlbnRBZ2dyZWdhdG9yLCBUYXJnZXRJbnN0cnVjdGlvbilcbmV4cG9ydCBjbGFzcyBBSVNpZGViYXJFbGVtZW50IHtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBmb2xkID0gbnVsbDtcbiAgQGJpbmRhYmxlIHNpZGUgPSBudWxsO1xuICBAYmluZGFibGUgb2ZmU2NyZWVuID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFuaW1hdGlvbiA9ICdzbGlkZS1vdmVyJztcbiAgQGJpbmRhYmxlIGVuYWJsZU92ZXJsYXk7XG5cbiAgc3Vic2NyaXB0aW9ucyA9IFtdO1xuICBhY3RpdmVDaGFuZ2VkTGlzdGVuZXJzID0gW107XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lciwgZXZlbnRBZ2dyZWdhdG9yLCBpbnN0cnVjdGlvbikge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5pbnN0cnVjdGlvbiA9IGluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbjtcbiAgICB0aGlzLnZpZXdGYWN0b3J5ID0gaW5zdHJ1Y3Rpb24uZWxlbWVudEluc3RydWN0aW9uLnNpZGViYXJDb250ZW50RmFjdG9yeTtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmJpbmRpbmdDb250ZXh0ID0gYmluZGluZ0NvbnRleHQ7XG5cbiAgICB0aGlzLmVuYWJsZU92ZXJsYXkgPSB0aGlzLmVuYWJsZU92ZXJsYXkgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZW5hYmxlLW92ZXJsYXknKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnYWktc2lkZWJhcjpjbG9zZScsICgpPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSksXG4gICAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2FpLXNpZGViYXI6b3BlbicsICgpPT4ge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnZpZXdGYWN0b3J5LmNyZWF0ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5pbnN0cnVjdGlvbik7XG4gICAgdGhpcy52aWV3LmJpbmQodGhpcywgdGhpcy5iaW5kaW5nQ29udGV4dCk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCh0aGlzKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICB3aGlsZSh0aGlzLnN1YnNjcmlwdGlvbnMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnMucG9wKCkuZGlzcG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGdW5jdGlvbiBhY3RpdmVDaGFuZ2VkKClcbiAgICogQHBhcmFtICB7T2JqZWN0fSB2YWx1ZSB2YWx1ZSBpcyB0aG9iamVjdCBwYXNzZWQgaW4uXG4gICAqIEByZXR1cm4ge1N0cmluZ30gICAgICAgcmV0dXJuIHZhbHVlLm5hbWU7XG4gICAqL1xuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaXMtb3BlbicpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlT3ZlcmxheSkge1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2FpLW92ZXJsYXk6c2hvdycsIHtcbiAgICAgICAgICB0b3VjaEhhbmRsZXI6ICgpPT4ge3RoaXMuYWN0aXZlID0gZmFsc2V9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnYWktb3ZlcmxheTpoaWRlJyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmVDaGFuZ2VkTGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgbGlzdGVuZXIodmFsdWUpO1xuICAgIH0pO1xuICB9XG5cbiAgb25PcGVuQ2hhbmdlZChsaXN0ZW5lcikge1xuICAgIHRoaXMuYWN0aXZlQ2hhbmdlZExpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgfVxuXG4gIG9wZW5TaWRlYmFyKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxuXG4gIGNsb3NlU2lkZWJhcigpIHtcbiAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG5cbiAgdG9nZ2xlU2lkZWJhcigpIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHRoaXMuY2xvc2VTaWRlYmFyKClcbiAgICBlbHNlIHRoaXMub3BlblNpZGViYXIoKTtcbiAgfVxuXG4gIGFuaW1hdGlvbkNoYW5nZWQoYW5pbWF0aW9uLCBsYXN0QW5pbWF0aW9uKSB7XG5cbiAgICBpZiAoYW5pbWF0aW9uIGluIFNJREVfQkFSX0FOSU1BVElPTlMpIHtcbiAgICAgIGxhc3RBbmltYXRpb24gJiYgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUobGFzdEFuaW1hdGlvbik7XG4gICAgICBhbmltYXRpb24gJiYgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoYW5pbWF0aW9uKTtcbiAgICB9XG5cbiAgICB0aGlzLmlzUHVzaFZpZXcgPSBpc1B1c2hWaWV3KGFuaW1hdGlvbik7XG4gICAgaWYgKHRoaXMuaXNQdXNoVmlldyAmJiB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudCkge1xuICAgICAgdGhpcy5lbGVtZW50LnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChgc2lkZWJhci0ke2FuaW1hdGlvbn1gKTtcbiAgICB9XG4gIH1cblxuICBvZmZTY3JlZW5DaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdvZmYtc2NyZWVuJyk7XG4gIH1cbn1cblxuXG5AY3VzdG9tRWxlbWVudCgnYWktc2lkZWJhci1zbG90JylcbkBub1ZpZXdcbkBpbmplY3QoVmlld1Nsb3QsIENvbnRhaW5lciwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEFJU2lkZWJhclNsb3Qge1xuXG4gIEBiaW5kYWJsZSBhY3RpdmUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHZpZXdTbG90LCBjb250YWluZXIsIGV2ZW50QWdncmVnYXRvcikge1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudmlld1Nsb3QgPSB2aWV3U2xvdDtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b3R5cGUoKTogYmluZFxuICAgKi9cbiAgYmluZChiaW5kaW5nQ29udGV4dCkge1xuICAgIHRoaXMuYXBwU2lkZWJhciA9IGJpbmRpbmdDb250ZXh0O1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uID0gIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZShBSVNpZGViYXJFbGVtZW50LCBzaWRlYmFyID0+IHtcbiAgICAgIGxldCB2aWV3ID0gdGhpcy52aWV3O1xuXG4gICAgICBpZiAodmlldykge1xuICAgICAgICB0aGlzLnZpZXdTbG90LnJlbW92ZSh2aWV3LCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgc2lkZWJhci5vbk9wZW5DaGFuZ2VkKCh2YWx1ZSk9PiB7XG4gICAgICAgIHRoaXMuYXBwU2lkZWJhci5hY3RpdmUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnZpZXcgPSBzaWRlYmFyLnZpZXc7XG4gICAgICB0aGlzLnZpZXdTbG90LmFkZChzaWRlYmFyLnZpZXcpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiB1bmJpbmRcbiAgICovXG4gIHVuYmluZCgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
