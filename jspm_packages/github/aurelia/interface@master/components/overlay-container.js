/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _aureliaPal, _aureliaEventAggregator) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function createOverlayTemplate(compiler, resources, element, instruction) {
    var fragment = _aureliaPal.DOM.createDocumentFragment();
    var node = _aureliaPal.DOM.createElement('ai-overlay');
    node.classList.add('au-animate');
    node.setAttribute('touch.call', 'onTouch($event)');

    fragment.appendChild(node);
    instruction.overlayFactory = compiler.compile(fragment, resources);
    instruction.overlayFactory.element = node;
    return true;
  }

  var AIOverlayContainer = (function () {
    function AIOverlayContainer(element, viewSlot, targetInstruction, container, eventAggregator) {
      _classCallCheck(this, _AIOverlayContainer);

      this.subscriptions = [];
      this.touchListeners = [];

      this.viewSlot = viewSlot;
      this.element = element;
      this.container = container;
      this.instruction = targetInstruction.elementInstruction;
      this.overlayFactory = this.instruction.overlayFactory;
      this.eventAggregator = eventAggregator;
    }

    _createClass(AIOverlayContainer, [{
      key: 'bind',
      value: function bind() {
        var _this = this;

        this.subscriptions.push(this.eventAggregator.subscribe('ai-overlay:show', function (settings) {
          _this.show();

          if (settings.overlayHandler) {
            settings.overlayHandler(_this.overlayElement);
          }

          if (typeof settings.touchHandler === 'function') {
            _this.touchListeners.push(settings.touchHandler);
          }

          if (settings.closeOnTouch) {
            _this.touchListeners.push(function () {
              _this.hide();
            });
          }
        }), this.eventAggregator.subscribe('ai-overlay:hide', function () {
          _this.hide();
        }));
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        while (this.subscriptions.length) {
          this.subscriptions.pop().dispose();
        }
        this.touchListeners = [];
      }
    }, {
      key: 'show',
      value: function show() {
        if (!this.overlay) {
          this.overlay = this.overlayFactory.create(this.container);
          this.overlay.bind(this);
          this.viewSlot.add(this.overlay, true);
        }
      }
    }, {
      key: 'hide',
      value: function hide() {
        if (this.overlay) {
          this.viewSlot.remove(this.overlay, true);
          this.overlay = null;
        }
      }
    }, {
      key: 'onTouch',
      value: function onTouch($event) {
        this.touchListeners.forEach(function (listener) {
          listener($event);
        });
      }
    }]);

    var _AIOverlayContainer = AIOverlayContainer;
    AIOverlayContainer = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaFramework.ViewSlot, _aureliaFramework.TargetInstruction, _aureliaFramework.Container, _aureliaEventAggregator.EventAggregator)(AIOverlayContainer) || AIOverlayContainer;
    AIOverlayContainer = (0, _aureliaFramework.noView)(AIOverlayContainer) || AIOverlayContainer;
    AIOverlayContainer = (0, _aureliaFramework.processContent)(createOverlayTemplate)(AIOverlayContainer) || AIOverlayContainer;
    AIOverlayContainer = (0, _aureliaFramework.customElement)('ai-overlay-container')(AIOverlayContainer) || AIOverlayContainer;
    return AIOverlayContainer;
  })();

  exports.AIOverlayContainer = AIOverlayContainer;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvb3ZlcmxheS1jb250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFJQSxXQUFTLHFCQUFxQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUN4RSxRQUFJLFFBQVEsR0FBRyxZQUpULEdBQUcsQ0FJVSxzQkFBc0IsRUFBRSxDQUFDO0FBQzVDLFFBQUksSUFBSSxHQUFHLFlBTEwsR0FBRyxDQUtNLGFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN2QyxRQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUNqQyxRQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDOztBQUV2RCxZQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLGVBQVcsQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDbkUsZUFBVyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzFDLFdBQU8sSUFBSSxDQUFDO0dBQ2I7O01BTVksa0JBQWtCO0FBR2xCLGFBSEEsa0JBQWtCLENBR2pCLE9BQU8sRUFBRSxRQUFRLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRTs7O1dBRjlFLGFBQWEsR0FBRyxFQUFFO1dBQ2xCLGNBQWMsR0FBRyxFQUFFOztBQUVqQixVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixVQUFJLENBQUMsV0FBVyxHQUFHLGlCQUFpQixDQUFDLGtCQUFrQixDQUFDO0FBQ3hELFVBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7QUFDdEQsVUFBSSxDQUFDLGVBQWUsR0FBRyxlQUFlLENBQUM7S0FDeEM7O2lCQVZVLGtCQUFrQjs7YUFZekIsZ0JBQUc7OztBQUNMLFlBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxVQUFDLFFBQVEsRUFBSTtBQUM3RCxnQkFBSyxJQUFJLEVBQUUsQ0FBQzs7QUFFWixjQUFJLFFBQVEsQ0FBQyxjQUFjLEVBQUU7QUFDM0Isb0JBQVEsQ0FBQyxjQUFjLENBQUMsTUFBSyxjQUFjLENBQUMsQ0FBQztXQUM5Qzs7QUFFRCxjQUFJLE9BQU8sUUFBUSxDQUFDLFlBQVksS0FBSyxVQUFVLEVBQUU7QUFDL0Msa0JBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7V0FDakQ7O0FBRUQsY0FBSSxRQUFRLENBQUMsWUFBWSxFQUFFO0FBQ3pCLGtCQUFLLGNBQWMsQ0FBQyxJQUFJLENBQUMsWUFBSztBQUM1QixvQkFBSyxJQUFJLEVBQUUsQ0FBQzthQUNiLENBQUMsQ0FBQztXQUNKO1NBRUYsQ0FBQyxFQUNGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLGlCQUFpQixFQUFFLFlBQUs7QUFDckQsZ0JBQUssSUFBSSxFQUFFLENBQUM7U0FDYixDQUFDLENBQ0gsQ0FBQTtPQUNGOzs7YUFFSyxrQkFBRztBQUNQLGVBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUU7QUFDL0IsY0FBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNwQztBQUNELFlBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO09BQzFCOzs7YUFFRyxnQkFBRztBQUNMLFlBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2pCLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFELGNBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkM7T0FDRjs7O2FBRUcsZ0JBQUc7QUFDTCxZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDaEIsY0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN6QyxjQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtPQUNGOzs7YUFFTSxpQkFBQyxNQUFNLEVBQUU7QUFDZCxZQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBRSxVQUFBLFFBQVEsRUFBSTtBQUN2QyxrQkFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xCLENBQUMsQ0FBQztPQUNKOzs7OEJBaEVVLGtCQUFrQjtBQUFsQixzQkFBa0IsR0FEOUIsc0JBbkJnRyxNQUFNLEVBbUIvRixZQWxCQSxHQUFHLENBa0JDLE9BQU8sb0JBbkJILFFBQVEsb0JBQTZCLGlCQUFpQixvQkFBNUMsU0FBUywwQkFFM0IsZUFBZSxDQWlCc0QsQ0FDaEUsa0JBQWtCLEtBQWxCLGtCQUFrQjtBQUFsQixzQkFBa0IseUJBcEJ2QixNQUFNLEVBb0JELGtCQUFrQixLQUFsQixrQkFBa0I7QUFBbEIsc0JBQWtCLEdBSDlCLHNCQWpCb0MsY0FBYyxFQWlCbkMscUJBQXFCLENBQUMsQ0FHekIsa0JBQWtCLEtBQWxCLGtCQUFrQjtBQUFsQixzQkFBa0IsR0FKOUIsc0JBaEJ1RSxhQUFhLEVBZ0J0RSxzQkFBc0IsQ0FBQyxDQUl6QixrQkFBa0IsS0FBbEIsa0JBQWtCO1dBQWxCLGtCQUFrQiIsImZpbGUiOiJjb21wb25lbnRzL292ZXJsYXktY29udGFpbmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub1ZpZXcsIFZpZXdTbG90LCBDb250YWluZXIsIHByb2Nlc3NDb250ZW50LCBUYXJnZXRJbnN0cnVjdGlvbiwgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuXG5mdW5jdGlvbiBjcmVhdGVPdmVybGF5VGVtcGxhdGUoY29tcGlsZXIsIHJlc291cmNlcywgZWxlbWVudCwgaW5zdHJ1Y3Rpb24pIHtcbiAgbGV0IGZyYWdtZW50ID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgbGV0IG5vZGUgPSBET00uY3JlYXRlRWxlbWVudCgnYWktb3ZlcmxheScpO1xuICAgICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdhdS1hbmltYXRlJyk7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZSgndG91Y2guY2FsbCcsICdvblRvdWNoKCRldmVudCknKTtcblxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcbiAgaW5zdHJ1Y3Rpb24ub3ZlcmxheUZhY3RvcnkgPSBjb21waWxlci5jb21waWxlKGZyYWdtZW50LCByZXNvdXJjZXMpO1xuICBpbnN0cnVjdGlvbi5vdmVybGF5RmFjdG9yeS5lbGVtZW50ID0gbm9kZTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbkBjdXN0b21FbGVtZW50KCdhaS1vdmVybGF5LWNvbnRhaW5lcicpXG5AcHJvY2Vzc0NvbnRlbnQoY3JlYXRlT3ZlcmxheVRlbXBsYXRlKVxuQG5vVmlld1xuQGluamVjdChET00uRWxlbWVudCwgVmlld1Nsb3QsIFRhcmdldEluc3RydWN0aW9uLCBDb250YWluZXIsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBBSU92ZXJsYXlDb250YWluZXIge1xuICBzdWJzY3JpcHRpb25zID0gW107XG4gIHRvdWNoTGlzdGVuZXJzID0gW107XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHZpZXdTbG90LCB0YXJnZXRJbnN0cnVjdGlvbiwgY29udGFpbmVyLCBldmVudEFnZ3JlZ2F0b3IpIHtcbiAgICB0aGlzLnZpZXdTbG90ID0gdmlld1Nsb3Q7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmluc3RydWN0aW9uID0gdGFyZ2V0SW5zdHJ1Y3Rpb24uZWxlbWVudEluc3RydWN0aW9uO1xuICAgIHRoaXMub3ZlcmxheUZhY3RvcnkgPSB0aGlzLmluc3RydWN0aW9uLm92ZXJsYXlGYWN0b3J5O1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMucHVzaChcbiAgICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnYWktb3ZlcmxheTpzaG93JywgKHNldHRpbmdzKT0+IHtcbiAgICAgICAgdGhpcy5zaG93KCk7XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLm92ZXJsYXlIYW5kbGVyKSB7XG4gICAgICAgICAgc2V0dGluZ3Mub3ZlcmxheUhhbmRsZXIodGhpcy5vdmVybGF5RWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzLnRvdWNoSGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHRoaXMudG91Y2hMaXN0ZW5lcnMucHVzaChzZXR0aW5ncy50b3VjaEhhbmRsZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNldHRpbmdzLmNsb3NlT25Ub3VjaCkge1xuICAgICAgICAgIHRoaXMudG91Y2hMaXN0ZW5lcnMucHVzaCgoKT0+IHtcbiAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgIH0pLFxuICAgICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdhaS1vdmVybGF5OmhpZGUnLCAoKT0+IHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICB9KSxcbiAgICApXG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgd2hpbGUodGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnBvcCgpLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgdGhpcy50b3VjaExpc3RlbmVycyA9IFtdO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheSkge1xuICAgICAgdGhpcy5vdmVybGF5ID0gdGhpcy5vdmVybGF5RmFjdG9yeS5jcmVhdGUodGhpcy5jb250YWluZXIpO1xuICAgICAgdGhpcy5vdmVybGF5LmJpbmQodGhpcyk7XG4gICAgICB0aGlzLnZpZXdTbG90LmFkZCh0aGlzLm92ZXJsYXksIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMub3ZlcmxheSkge1xuICAgICAgdGhpcy52aWV3U2xvdC5yZW1vdmUodGhpcy5vdmVybGF5LCB0cnVlKTtcbiAgICAgIHRoaXMub3ZlcmxheSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaCgkZXZlbnQpIHtcbiAgICB0aGlzLnRvdWNoTGlzdGVuZXJzLmZvckVhY2goIGxpc3RlbmVyID0+IHtcbiAgICAgIGxpc3RlbmVyKCRldmVudCk7XG4gICAgfSk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
