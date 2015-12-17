/* */ 
define(['exports', 'aurelia-framework', '../util/overlay-element'], function (exports, _aureliaFramework, _utilOverlayElement) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var ModalElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ModalElement, [{
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

    function ModalElement(element) {
      var _this = this;

      _classCallCheck(this, _ModalElement);

      _defineDecoratedPropertyDescriptor(this, 'actionModal', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'contentModal', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'fullscreen', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'enableBackdrop', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.openHandlers = [];
      this.closeHandlers = [];

      this.element = element;

      this.overlay = _utilOverlayElement.OverlayElement.create('modal', {
        onClick: function onClick(event) {
          return _this.active = false;
        },
        container: element,
        className: 'modal-overlay'
      });
    }

    _createDecoratedClass(ModalElement, [{
      key: 'attached',
      value: function attached() {
        this.overlay.attach();
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.overlay.detach();
        delete this.closeHandlers;
        delete this.openHandlers;
        this.closeHandlers = [];
        this.openHandlers = [];
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) this.openModal(true);else this.closeModal(true);
      }
    }, {
      key: 'openModal',
      value: function openModal(isActiveSet) {
        var self = this;
        if (!isActiveSet) return this.active = true;
        this.overlay.activate();
        this.element.classList.add('is-active');
        self.triggerOpenHandlers();
      }
    }, {
      key: 'closeModal',
      value: function closeModal(isActiveSet) {
        var self = this;
        if (!isActiveSet) return this.active = false;
        this.overlay.deactivate();
        this.element.classList.remove('is-active');
        self.triggerCloseHandlers();
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

    var _ModalElement = ModalElement;
    ModalElement = (0, _aureliaFramework.inject)(Element)(ModalElement) || ModalElement;
    ModalElement = (0, _aureliaFramework.customElement)('ai-modal')(ModalElement) || ModalElement;
    return ModalElement;
  })();

  exports.ModalElement = ModalElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztNQUthLFlBQVk7Ozs7MEJBQVosWUFBWTs7cUNBTFUsUUFBUTs7ZUFNakIsSUFBSTs7Ozs7cUNBTkssUUFBUTs7ZUFPaEIsSUFBSTs7Ozs7cUNBUEksUUFBUTs7ZUFRbEIsSUFBSTs7Ozs7cUNBUk0sUUFBUTs7ZUFTZCxJQUFJOzs7OztxQ0FURSxRQUFROztlQVV0QixJQUFJOzs7OztBQUtaLGFBVkEsWUFBWSxDQVVYLE9BQU8sRUFBRTs7Ozs7Ozs7Ozs7Ozs7O1dBSHJCLFlBQVksR0FBRyxFQUFFO1dBQ2pCLGFBQWEsR0FBRyxFQUFFOztBQUdoQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFFdkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxvQkFqQlgsY0FBYyxDQWlCWSxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQzVDLGVBQU8sRUFBRSxpQkFBQyxLQUFLO2lCQUFJLE1BQUssTUFBTSxHQUFHLEtBQUs7U0FBQTtBQUN0QyxpQkFBUyxFQUFFLE9BQU87QUFDbEIsaUJBQVMsRUFBRSxlQUFlO09BQzNCLENBQUMsQ0FBQztLQUNKOzswQkFsQlUsWUFBWTs7YUFvQmYsb0JBQUU7QUFDUixZQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO09BQ3ZCOzs7YUFDTyxvQkFBRTtBQUNSLFlBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDdEIsZUFBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0FBQzFCLGVBQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztBQUN6QixZQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztBQUN4QixZQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztPQUN4Qjs7O2FBRVksdUJBQUMsS0FBSyxFQUFFO0FBQ25CLFlBQUksS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsS0FDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUM1Qjs7O2FBRVEsbUJBQUMsV0FBVyxFQUFFO0FBQ3JCLFlBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixZQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7QUFDNUMsWUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUN4QixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEMsWUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7T0FDNUI7OzthQUVTLG9CQUFDLFdBQVcsRUFBRTtBQUN0QixZQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDaEIsWUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0FBQzdDLFlBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7QUFDMUIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzNDLFlBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO09BQzdCOzs7YUFFa0IsK0JBQUc7OztBQUNwQixZQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7aUJBQUksRUFBRSxRQUFNO1NBQUEsQ0FBQyxDQUFDO09BQzNDOzs7YUFFbUIsZ0NBQUc7OztBQUNyQixZQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEVBQUU7aUJBQUksRUFBRSxRQUFNO1NBQUEsQ0FBQyxDQUFDO09BQzVDOzs7YUFFSyxnQkFBQyxRQUFRLEVBQUU7QUFDZixZQUFJLE9BQU8sUUFBUSxLQUFLLFVBQVUsRUFBRTtBQUNsQyxjQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsQztPQUNGOzs7YUFFTSxpQkFBQyxRQUFRLEVBQUU7QUFDaEIsWUFBSSxPQUFPLFFBQVEsS0FBSyxVQUFVLEVBQUU7QUFDbEMsY0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbkM7T0FDRjs7O3dCQXRFVSxZQUFZO0FBQVosZ0JBQVksR0FEeEIsc0JBSjRDLE1BQU0sRUFJM0MsT0FBTyxDQUFDLENBQ0gsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUZ4QixzQkFIbUIsYUFBYSxFQUdsQixVQUFVLENBQUMsQ0FFYixZQUFZLEtBQVosWUFBWTtXQUFaLFlBQVkiLCJmaWxlIjoiY29tcG9uZW50cy9tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5saW5lVmlldywgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtPdmVybGF5RWxlbWVudH0gZnJvbSAnLi4vdXRpbC9vdmVybGF5LWVsZW1lbnQnO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktbW9kYWwnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIE1vZGFsRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBhY3Rpb25Nb2RhbCA9IG51bGxcbiAgQGJpbmRhYmxlIGNvbnRlbnRNb2RhbCA9IG51bGxcbiAgQGJpbmRhYmxlIGZ1bGxzY3JlZW4gPSBudWxsO1xuICBAYmluZGFibGUgZW5hYmxlQmFja2Ryb3AgPSBudWxsO1xuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcblxuICBvcGVuSGFuZGxlcnMgPSBbXTtcbiAgY2xvc2VIYW5kbGVycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgdGhpcy5vdmVybGF5ID0gT3ZlcmxheUVsZW1lbnQuY3JlYXRlKCdtb2RhbCcsIHtcbiAgICAgIG9uQ2xpY2s6IChldmVudCk9PiB0aGlzLmFjdGl2ZSA9IGZhbHNlLFxuICAgICAgY29udGFpbmVyOiBlbGVtZW50LFxuICAgICAgY2xhc3NOYW1lOiAnbW9kYWwtb3ZlcmxheSdcbiAgICB9KTtcbiAgfVxuXG4gIGF0dGFjaGVkKCl7XG4gICAgdGhpcy5vdmVybGF5LmF0dGFjaCgpO1xuICB9XG4gIGRldGFjaGVkKCl7XG4gICAgdGhpcy5vdmVybGF5LmRldGFjaCgpO1xuICAgIGRlbGV0ZSB0aGlzLmNsb3NlSGFuZGxlcnM7XG4gICAgZGVsZXRlIHRoaXMub3BlbkhhbmRsZXJzO1xuICAgIHRoaXMuY2xvc2VIYW5kbGVycyA9IFtdO1xuICAgIHRoaXMub3BlbkhhbmRsZXJzID0gW107XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB0aGlzLm9wZW5Nb2RhbCh0cnVlKTtcbiAgICBlbHNlIHRoaXMuY2xvc2VNb2RhbCh0cnVlKTtcbiAgfVxuXG4gIG9wZW5Nb2RhbChpc0FjdGl2ZVNldCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcbiAgICBpZiAoIWlzQWN0aXZlU2V0KSByZXR1cm4gdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMub3ZlcmxheS5hY3RpdmF0ZSgpO1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpcy1hY3RpdmUnKTtcbiAgICBzZWxmLnRyaWdnZXJPcGVuSGFuZGxlcnMoKTtcbiAgfVxuXG4gIGNsb3NlTW9kYWwoaXNBY3RpdmVTZXQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgaWYgKCFpc0FjdGl2ZVNldCkgcmV0dXJuIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5vdmVybGF5LmRlYWN0aXZhdGUoKTtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgc2VsZi50cmlnZ2VyQ2xvc2VIYW5kbGVycygpO1xuICB9XG5cbiAgdHJpZ2dlck9wZW5IYW5kbGVycygpIHtcbiAgICB0aGlzLm9wZW5IYW5kbGVycy5mb3JFYWNoKGNiID0+IGNiKHRoaXMpKTtcbiAgfVxuXG4gIHRyaWdnZXJDbG9zZUhhbmRsZXJzKCkge1xuICAgIHRoaXMuY2xvc2VIYW5kbGVycy5mb3JFYWNoKGNiID0+IGNiKHRoaXMpKTtcbiAgfVxuXG4gIG9uT3BlbihjYWxsYmFjaykge1xuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXMub3BlbkhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoY2FsbGJhY2spIHtcbiAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLmNsb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
