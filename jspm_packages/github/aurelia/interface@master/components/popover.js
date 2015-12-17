/* */ 
define(['exports', 'aurelia-framework', '../util/overlay-element'], function (exports, _aureliaFramework, _utilOverlayElement) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var PopoverElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(PopoverElement, [{
      key: 'actionModal',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'contentModal',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'fullscreen',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'enableBackdrop',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function PopoverElement(element) {
      var _this = this;

      _classCallCheck(this, _PopoverElement);

      _defineDecoratedPropertyDescriptor(this, 'actionModal', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'contentModal', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'fullscreen', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'enableBackdrop', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.openHandlers = [];
      this.closeHandlers = [];

      this.element = element;

      this.overlay = _utilOverlayElement.OverlayElement.create('popover', {
        onClick: function onClick(event) {
          return _this.active = false;
        },
        container: element,
        className: 'popover-overlay'
      });
    }

    _createDecoratedClass(PopoverElement, [{
      key: 'attached',
      value: function attached() {
        this.overlay.attach();
        this.element.addEventListener('transitionend', this._closeElementTransition.bind(this));
        this.overlay.element.addEventListener('transitionend', this._closeOverLayTransition.bind(this));
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.overlay.detach();
        this.element.removeEventListener('transitionend', this._closeElementTransition.bind(this));
        this.overlay.element.removeEventListener('transitionend', this._closeOverLayTransition.bind(this));
        delete this.closeHandlers;
        delete this.openHandlers;
        this.closeHandlers = [];
        this.openHandlers = [];
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) this.open(true);else this.close(true);
      }
    }, {
      key: 'open',
      value: function open(isActiveSet) {
        this.isClosing = false;
        if (!isActiveSet) return this.active = true;

        this.overlay.element.style.opacity = 1;
        this.overlay.activate();
        this.element.classList.add('is-active');
        this.triggerOpenHandlers();
      }
    }, {
      key: 'close',
      value: function close(isActiveSet) {
        this.isClosing = true;
        var self = this;
        if (!isActiveSet) return this.active = false;
        this.element.classList.remove('is-active');
      }
    }, {
      key: '_closeOverLayTransition',
      value: function _closeOverLayTransition() {
        if (this.isClosing) {
          this.isClosing = false;
          this.overlay.deactivate();
        }
      }
    }, {
      key: '_closeElementTransition',
      value: function _closeElementTransition() {
        if (this.isClosing) {
          this.overlay.element.style.opacity = 0;
          this.triggerCloseHandlers();
        }
      }
    }, {
      key: 'triggerOpenHandlers',
      value: function triggerOpenHandlers() {
        var _this2 = this;

        this.openHandlers.forEach(function (cb) {
          return cb(_this2);
        });
      }
    }, {
      key: 'triggerCloseHandlers',
      value: function triggerCloseHandlers() {
        var _this3 = this;

        this.closeHandlers.forEach(function (cb) {
          return cb(_this3);
        });
      }
    }, {
      key: 'onOpen',
      value: function onOpen(callback) {
        if (typeof callback === 'function') {
          this.openHandlers.push(callback);
        }
      }
    }, {
      key: 'onClose',
      value: function onClose(callback) {
        if (typeof callback === 'function') {
          this.closeHandlers.push(callback);
        }
      }
    }], null, _instanceInitializers);

    var _PopoverElement = PopoverElement;
    PopoverElement = (0, _aureliaFramework.inject)(Element)(PopoverElement) || PopoverElement;
    PopoverElement = (0, _aureliaFramework.customElement)('ai-popover')(PopoverElement) || PopoverElement;
    return PopoverElement;
  })();

  exports.PopoverElement = PopoverElement;
});
//# sourceMappingURL=data:application/json;base64,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QUNILGNBQWMsS0FBZCxjQUFjO0FBQWQsa0JBQWMsR0FGMUIsc0JBSG1CLGFBQWEsRUFHbEIsWUFBWSxDQUFDLENBRWYsY0FBYyxLQUFkLGNBQWM7V0FBZCxjQUFjIiwiZmlsZSI6ImNvbXBvbmVudHMvcG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5saW5lVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtPdmVybGF5RWxlbWVudH0gZnJvbSAnLi4vdXRpbC9vdmVybGF5LWVsZW1lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktcG9wb3ZlcicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgUG9wb3ZlckVsZW1lbnQge1xuICBAYmluZGFibGUgYWN0aW9uTW9kYWwgPSBudWxsO1xuICBAYmluZGFibGUgY29udGVudE1vZGFsID0gbnVsbDtcbiAgQGJpbmRhYmxlIGZ1bGxzY3JlZW4gPSBudWxsO1xuICBAYmluZGFibGUgZW5hYmxlQmFja2Ryb3AgPSBudWxsO1xuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcblxuICBvcGVuSGFuZGxlcnMgPSBbXTtcbiAgY2xvc2VIYW5kbGVycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gT3ZlcmxheUVsZW1lbnQuY3JlYXRlKCdwb3BvdmVyJywge1xuICAgICAgb25DbGljazogKGV2ZW50KT0+IHRoaXMuYWN0aXZlID0gZmFsc2UsXG4gICAgICBjb250YWluZXI6IGVsZW1lbnQsXG4gICAgICBjbGFzc05hbWU6ICdwb3BvdmVyLW92ZXJsYXknXG4gICAgfSk7XG4gIH1cblxuICBhdHRhY2hlZCgpe1xuICAgIHRoaXMub3ZlcmxheS5hdHRhY2goKTtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRoaXMuX2Nsb3NlRWxlbWVudFRyYW5zaXRpb24uYmluZCh0aGlzKSlcbiAgICB0aGlzLm92ZXJsYXkuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5fY2xvc2VPdmVyTGF5VHJhbnNpdGlvbi5iaW5kKHRoaXMpKVxuICB9XG4gIGRldGFjaGVkKCl7XG4gICAgdGhpcy5vdmVybGF5LmRldGFjaCgpO1xuICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdGhpcy5fY2xvc2VFbGVtZW50VHJhbnNpdGlvbi5iaW5kKHRoaXMpKVxuICAgIHRoaXMub3ZlcmxheS5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9jbG9zZU92ZXJMYXlUcmFuc2l0aW9uLmJpbmQodGhpcykpXG4gICAgZGVsZXRlIHRoaXMuY2xvc2VIYW5kbGVycztcbiAgICBkZWxldGUgdGhpcy5vcGVuSGFuZGxlcnM7XG4gICAgdGhpcy5jbG9zZUhhbmRsZXJzID0gW107XG4gICAgdGhpcy5vcGVuSGFuZGxlcnMgPSBbXTtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHRoaXMub3Blbih0cnVlKTtcbiAgICBlbHNlIHRoaXMuY2xvc2UodHJ1ZSk7XG4gIH1cblxuICBvcGVuKGlzQWN0aXZlU2V0KSB7XG4gICAgdGhpcy5pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICBpZiAoIWlzQWN0aXZlU2V0KSByZXR1cm4gdGhpcy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5vdmVybGF5LmVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgdGhpcy5vdmVybGF5LmFjdGl2YXRlKCk7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgIHRoaXMudHJpZ2dlck9wZW5IYW5kbGVycygpO1xuICB9XG5cbiAgY2xvc2UoaXNBY3RpdmVTZXQpIHtcbiAgICB0aGlzLmlzQ2xvc2luZyA9IHRydWU7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIGlmICghaXNBY3RpdmVTZXQpIHJldHVybiB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hY3RpdmUnKTtcbiAgfVxuXG4gIF9jbG9zZU92ZXJMYXlUcmFuc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQ2xvc2luZykge1xuICAgICAgdGhpcy5pc0Nsb3NpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMub3ZlcmxheS5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2Nsb3NlRWxlbWVudFRyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuaXNDbG9zaW5nKSB7XG4gICAgICB0aGlzLm92ZXJsYXkuZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMudHJpZ2dlckNsb3NlSGFuZGxlcnMoKTtcbiAgICAgfVxuICB9XG5cblxuICB0cmlnZ2VyT3BlbkhhbmRsZXJzKCkge1xuICAgIHRoaXMub3BlbkhhbmRsZXJzLmZvckVhY2goY2IgPT4gY2IodGhpcykpO1xuICB9XG5cbiAgdHJpZ2dlckNsb3NlSGFuZGxlcnMoKSB7XG4gICAgdGhpcy5jbG9zZUhhbmRsZXJzLmZvckVhY2goY2IgPT4gY2IodGhpcykpO1xuICB9XG5cbiAgb25PcGVuKGNhbGxiYWNrKSB7XG4gICAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhpcy5vcGVuSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgb25DbG9zZShjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMuY2xvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
