/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-router', 'aurelia-metadata', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaRouter, _aureliaMetadata, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var SwapStrategies = (function () {
    function SwapStrategies() {
      _classCallCheck(this, SwapStrategies);
    }

    _createClass(SwapStrategies, [{
      key: 'before',
      value: function before(viewSlot, previousView, callback) {
        var promise = Promise.resolve(callback());
        if (previousView !== undefined) {
          return promise.then(function () {
            return viewSlot.remove(previousView, true);
          });
        }
        return promise;
      }
    }, {
      key: 'with',
      value: function _with(viewSlot, previousView, callback) {
        callback();

        if (previousView !== undefined) {
          viewSlot.remove(previousView, true);
        }
      }
    }, {
      key: 'after',
      value: function after(viewSlot, previousView, callback) {
        return Promise.resolve(viewSlot.removeAll(true)).then(callback);
      }
    }], [{
      key: 'default',
      value: 'after',
      enumerable: true
    }]);

    return SwapStrategies;
  })();

  var swapStrategies = new SwapStrategies();

  var AIRouterView = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AIRouterView, [{
      key: 'swapOrder',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function AIRouterView(element, container, viewSlot, router, viewLocator) {
      _classCallCheck(this, _AIRouterView);

      _defineDecoratedPropertyDescriptor(this, 'swapOrder', _instanceInitializers);

      this.defaultSwapOrder = SwapStrategies['default'];

      this.element = element;
      this.container = container;
      this.viewSlot = viewSlot;
      this.router = router;
      this.viewLocator = viewLocator;
      this.router.registerViewPort(this, this.element.getAttribute('name'));
    }

    _createDecoratedClass(AIRouterView, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.container.viewModel = bindingContext;
      }
    }, {
      key: 'process',
      value: function process(viewPortInstruction, waitToSwap) {
        var _this = this;

        var component = viewPortInstruction.component;
        var childContainer = component.childContainer;
        var viewModel = component.viewModel;
        var viewModelResource = component.viewModelResource;
        var metadata = viewModelResource.metadata;

        var viewStrategy = this.viewLocator.getViewStrategy(component.view || viewModel);
        if (viewStrategy) {
          viewStrategy.makeRelativeTo(_aureliaMetadata.Origin.get(component.router.container.viewModel.constructor).moduleId);
        }

        return metadata.load(childContainer, viewModelResource.value, null, viewStrategy, true).then(function (viewFactory) {
          viewPortInstruction.controller = metadata.create(childContainer, _aureliaTemplating.BehaviorInstruction.dynamic(_this.element, viewModel, viewFactory));

          if (waitToSwap) {
            return;
          }

          _this.swap(viewPortInstruction);
        });
      }
    }, {
      key: 'swap',
      value: function swap(viewPortInstruction) {
        var previousView = this.view;
        var viewSlot = this.viewSlot;
        var element = this.element;
        var swapStrategy = undefined;
        var started = 0;
        var ended = 0;
        var p = undefined;

        addNextView();
        if (previousView) {
          p = viewSlot.remove(previousView, true);
        }
        this.view = viewPortInstruction.controller.view;

        function addNextView() {
          viewPortInstruction.controller.automate();
          return viewSlot.add(viewPortInstruction.controller.view, true, true);
        }
      }
    }], null, _instanceInitializers);

    var _AIRouterView = AIRouterView;
    AIRouterView = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.ViewSlot, _aureliaRouter.Router, _aureliaTemplating.ViewLocator)(AIRouterView) || AIRouterView;
    AIRouterView = (0, _aureliaTemplating.noView)(AIRouterView) || AIRouterView;
    AIRouterView = (0, _aureliaTemplating.customElement)('ai-router-view')(AIRouterView) || AIRouterView;
    return AIRouterView;
  })();

  exports.AIRouterView = AIRouterView;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvcm91dGVyLXZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O01BT00sY0FBYzthQUFkLGNBQWM7NEJBQWQsY0FBYzs7O2lCQUFkLGNBQWM7O2FBSVosZ0JBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUU7QUFDdkMsWUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQzFDLFlBQUksWUFBWSxLQUFLLFNBQVMsRUFBRTtBQUM5QixpQkFBTyxPQUFPLENBQUMsSUFBSSxDQUFDO21CQUFNLFFBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQztXQUFBLENBQUMsQ0FBQztTQUNoRTtBQUNELGVBQU8sT0FBTyxDQUFDO09BQ2hCOzs7YUFHRyxlQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFO0FBQ3JDLGdCQUFRLEVBQUUsQ0FBQzs7QUFFWCxZQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7QUFDOUIsa0JBQVEsQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3JDO09BQ0Y7OzthQUdJLGVBQUMsUUFBUSxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUU7QUFDdEMsZUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDakU7OzthQXZCZ0IsT0FBTzs7OztXQURwQixjQUFjOzs7QUE0QnBCLE1BQU0sY0FBYyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7O01BSy9CLFlBQVk7Ozs7MEJBQVosWUFBWTs7c0NBdkNrRCxRQUFROzs7OztBQTJDdEUsYUFKQSxZQUFZLENBSVgsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRTs7Ozs7V0FGL0QsZ0JBQWdCLEdBQUcsY0FBYyxXQUFROztBQUd2QyxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixVQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztBQUMvQixVQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0tBQ3ZFOzswQkFYVSxZQUFZOzthQWFuQixjQUFDLGNBQWMsRUFBRTtBQUNuQixZQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7T0FDM0M7OzthQUVNLGlCQUFDLG1CQUFtQixFQUFFLFVBQVUsRUFBRTs7O0FBQ3ZDLFlBQUksU0FBUyxHQUFHLG1CQUFtQixDQUFDLFNBQVMsQ0FBQztBQUM5QyxZQUFJLGNBQWMsR0FBRyxTQUFTLENBQUMsY0FBYyxDQUFDO0FBQzlDLFlBQUksU0FBUyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUM7QUFDcEMsWUFBSSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsaUJBQWlCLENBQUM7QUFDcEQsWUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsUUFBUSxDQUFDOztBQUUxQyxZQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLFNBQVMsQ0FBQyxDQUFDO0FBQ2pGLFlBQUksWUFBWSxFQUFFO0FBQ2hCLHNCQUFZLENBQUMsY0FBYyxDQUFDLGlCQS9EMUIsTUFBTSxDQStEMkIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNwRzs7QUFFRCxlQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLFdBQVcsRUFBSTtBQUMxRyw2QkFBbUIsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQzdELG1CQXRFOEMsbUJBQW1CLENBc0U3QyxPQUFPLENBQ3pCLE1BQUssT0FBTyxFQUNaLFNBQVMsRUFDVCxXQUFXLENBQ1osQ0FDRixDQUFDOztBQUVGLGNBQUksVUFBVSxFQUFFO0FBQ2QsbUJBQU87V0FDUjs7QUFFRCxnQkFBSyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoQyxDQUFDLENBQUM7T0FDSjs7O2FBRUcsY0FBQyxtQkFBbUIsRUFBRTtBQUN4QixZQUFJLFlBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0FBQzdCLFlBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFDN0IsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUMzQixZQUFJLFlBQVksWUFBQSxDQUFDO0FBQ2pCLFlBQUksT0FBTyxHQUFHLENBQUMsQ0FBQztBQUNoQixZQUFJLEtBQUssR0FBRyxDQUFDLENBQUM7QUFDZCxZQUFJLENBQUMsWUFBQSxDQUFDOztBQUdOLG1CQUFXLEVBQUUsQ0FBQztBQUNkLFlBQUksWUFBWSxFQUFFO0FBQ2hCLFdBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN6QztBQUNELFlBQUksQ0FBQyxJQUFJLEdBQUcsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQzs7QUFFaEQsaUJBQVMsV0FBVyxHQUFHO0FBQ3JCLDZCQUFtQixDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUMxQyxpQkFBTyxRQUFRLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3RFO09BQ0Y7Ozt3QkFsRVUsWUFBWTtBQUFaLGdCQUFZLEdBRHhCLGdDQXZDa0IsTUFBTSxFQXVDakIsWUFuQ0EsR0FBRyxDQW1DQyxPQUFPLDhCQXZDWCxTQUFTLHFCQUNULFFBQVEsaUJBQ1IsTUFBTSxxQkFESSxXQUFXLENBc0NpQyxDQUNqRCxZQUFZLEtBQVosWUFBWTtBQUFaLGdCQUFZLDBCQXZDcUIsTUFBTSxFQXVDdkMsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUh4Qix1QkFwQzhCLGFBQWEsRUFvQzdCLGdCQUFnQixDQUFDLENBR25CLFlBQVksS0FBWixZQUFZO1dBQVosWUFBWSIsImZpbGUiOiJjb21wb25lbnRzL3JvdXRlci12aWV3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXIsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge1ZpZXdTbG90LCBWaWV3TG9jYXRvciwgY3VzdG9tRWxlbWVudCwgbm9WaWV3LCBCZWhhdmlvckluc3RydWN0aW9uLCBiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge09yaWdpbn0gZnJvbSAnYXVyZWxpYS1tZXRhZGF0YSc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5cbmNsYXNzIFN3YXBTdHJhdGVnaWVzIHtcbiAgc3RhdGljIGRlZmF1bHQgPSAnYWZ0ZXInO1xuXG4gIC8vIGFuaW1hdGUgdGhlIG5leHQgdmlldyBpbiBiZWZvcmUgcmVtb3ZpbmcgdGhlIGN1cnJlbnQgdmlldztcbiAgYmVmb3JlKHZpZXdTbG90LCBwcmV2aW91c1ZpZXcsIGNhbGxiYWNrKSB7XG4gICAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoY2FsbGJhY2soKSk7XG4gICAgaWYgKHByZXZpb3VzVmlldyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZS50aGVuKCgpID0+IHZpZXdTbG90LnJlbW92ZShwcmV2aW91c1ZpZXcsIHRydWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICAvLyBhbmltYXRlIHRoZSBuZXh0IHZpZXcgYXQgdGhlIHNhbWUgdGltZSB0aGUgY3VycmVudCB2aWV3IGlzIHJlbW92ZWRcbiAgd2l0aCh2aWV3U2xvdCwgcHJldmlvdXNWaWV3LCBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKCk7XG5cbiAgICBpZiAocHJldmlvdXNWaWV3ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZpZXdTbG90LnJlbW92ZShwcmV2aW91c1ZpZXcsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGFuaW1hdGUgdGhlIG5leHQgdmlldyBpbiBhZnRlciB0aGUgY3VycmVudCB2aWV3IGhhcyBiZWVuIHJlbW92ZWRcbiAgYWZ0ZXIodmlld1Nsb3QsIHByZXZpb3VzVmlldywgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHZpZXdTbG90LnJlbW92ZUFsbCh0cnVlKSkudGhlbihjYWxsYmFjayk7XG4gIH1cbn1cblxuXG5jb25zdCBzd2FwU3RyYXRlZ2llcyA9IG5ldyBTd2FwU3RyYXRlZ2llcygpO1xuXG5AY3VzdG9tRWxlbWVudCgnYWktcm91dGVyLXZpZXcnKVxuQG5vVmlld1xuQGluamVjdChET00uRWxlbWVudCwgQ29udGFpbmVyLCBWaWV3U2xvdCwgUm91dGVyLCBWaWV3TG9jYXRvcilcbmV4cG9ydCBjbGFzcyBBSVJvdXRlclZpZXcge1xuICBAYmluZGFibGUgc3dhcE9yZGVyO1xuICBkZWZhdWx0U3dhcE9yZGVyID0gU3dhcFN0cmF0ZWdpZXMuZGVmYXVsdDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBjb250YWluZXIsIHZpZXdTbG90LCByb3V0ZXIsIHZpZXdMb2NhdG9yKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLnZpZXdTbG90ID0gdmlld1Nsb3Q7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy52aWV3TG9jYXRvciA9IHZpZXdMb2NhdG9yO1xuICAgIHRoaXMucm91dGVyLnJlZ2lzdGVyVmlld1BvcnQodGhpcywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpKTtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmNvbnRhaW5lci52aWV3TW9kZWwgPSBiaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIHByb2Nlc3Modmlld1BvcnRJbnN0cnVjdGlvbiwgd2FpdFRvU3dhcCkge1xuICAgIGxldCBjb21wb25lbnQgPSB2aWV3UG9ydEluc3RydWN0aW9uLmNvbXBvbmVudDtcbiAgICBsZXQgY2hpbGRDb250YWluZXIgPSBjb21wb25lbnQuY2hpbGRDb250YWluZXI7XG4gICAgbGV0IHZpZXdNb2RlbCA9IGNvbXBvbmVudC52aWV3TW9kZWw7XG4gICAgbGV0IHZpZXdNb2RlbFJlc291cmNlID0gY29tcG9uZW50LnZpZXdNb2RlbFJlc291cmNlO1xuICAgIGxldCBtZXRhZGF0YSA9IHZpZXdNb2RlbFJlc291cmNlLm1ldGFkYXRhO1xuXG4gICAgbGV0IHZpZXdTdHJhdGVneSA9IHRoaXMudmlld0xvY2F0b3IuZ2V0Vmlld1N0cmF0ZWd5KGNvbXBvbmVudC52aWV3IHx8IHZpZXdNb2RlbCk7XG4gICAgaWYgKHZpZXdTdHJhdGVneSkge1xuICAgICAgdmlld1N0cmF0ZWd5Lm1ha2VSZWxhdGl2ZVRvKE9yaWdpbi5nZXQoY29tcG9uZW50LnJvdXRlci5jb250YWluZXIudmlld01vZGVsLmNvbnN0cnVjdG9yKS5tb2R1bGVJZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1ldGFkYXRhLmxvYWQoY2hpbGRDb250YWluZXIsIHZpZXdNb2RlbFJlc291cmNlLnZhbHVlLCBudWxsLCB2aWV3U3RyYXRlZ3ksIHRydWUpLnRoZW4odmlld0ZhY3RvcnkgPT4ge1xuICAgICAgdmlld1BvcnRJbnN0cnVjdGlvbi5jb250cm9sbGVyID0gbWV0YWRhdGEuY3JlYXRlKGNoaWxkQ29udGFpbmVyLFxuICAgICAgICBCZWhhdmlvckluc3RydWN0aW9uLmR5bmFtaWMoXG4gICAgICAgICAgdGhpcy5lbGVtZW50LFxuICAgICAgICAgIHZpZXdNb2RlbCxcbiAgICAgICAgICB2aWV3RmFjdG9yeVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgICBpZiAod2FpdFRvU3dhcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3dhcCh2aWV3UG9ydEluc3RydWN0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN3YXAodmlld1BvcnRJbnN0cnVjdGlvbikge1xuICAgIGxldCBwcmV2aW91c1ZpZXcgPSB0aGlzLnZpZXc7XG4gICAgbGV0IHZpZXdTbG90ID0gdGhpcy52aWV3U2xvdDtcbiAgICBsZXQgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICBsZXQgc3dhcFN0cmF0ZWd5O1xuICAgIGxldCBzdGFydGVkID0gMDtcbiAgICBsZXQgZW5kZWQgPSAwO1xuICAgIGxldCBwO1xuXG5cbiAgICBhZGROZXh0VmlldygpO1xuICAgIGlmIChwcmV2aW91c1ZpZXcpIHtcbiAgICAgIHAgPSB2aWV3U2xvdC5yZW1vdmUocHJldmlvdXNWaWV3LCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy52aWV3ID0gdmlld1BvcnRJbnN0cnVjdGlvbi5jb250cm9sbGVyLnZpZXc7XG5cbiAgICBmdW5jdGlvbiBhZGROZXh0VmlldygpIHtcbiAgICAgIHZpZXdQb3J0SW5zdHJ1Y3Rpb24uY29udHJvbGxlci5hdXRvbWF0ZSgpO1xuICAgICAgcmV0dXJuIHZpZXdTbG90LmFkZCh2aWV3UG9ydEluc3RydWN0aW9uLmNvbnRyb2xsZXIudmlldywgdHJ1ZSwgdHJ1ZSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
