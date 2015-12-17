/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-task-queue', 'aurelia-templating', 'aurelia-pal'], function (exports, _aureliaDependencyInjection, _aureliaTaskQueue, _aureliaTemplating, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var Compose = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(Compose, [{
      key: 'model',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'view',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'viewModel',
      decorators: [_aureliaTemplating.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function Compose(element, container, compositionEngine, viewSlot, viewResources, taskQueue) {
      _classCallCheck(this, _Compose);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'view', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'viewModel', _instanceInitializers);

      this.element = element;
      this.container = container;
      this.compositionEngine = compositionEngine;
      this.viewSlot = viewSlot;
      this.viewResources = viewResources;
      this.taskQueue = taskQueue;
      this.currentController = null;
      this.currentViewModel = null;
    }

    _createDecoratedClass(Compose, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.$parent = bindingContext;
        processInstruction(this, createInstruction(this, {
          view: this.view,
          viewModel: this.viewModel,
          model: this.model
        }));
      }
    }, {
      key: 'modelChanged',
      value: function modelChanged(newValue, oldValue) {
        var _this = this;

        if (this.currentInstruction) {
          this.currentInstruction.model = newValue;
          return;
        }

        this.taskQueue.queueMicroTask(function () {
          if (_this.currentInstruction) {
            _this.currentInstruction.model = newValue;
            return;
          }

          var vm = _this.currentViewModel;

          if (vm && typeof vm.activate === 'function') {
            vm.activate(newValue);
          }
        });
      }
    }, {
      key: 'viewChanged',
      value: function viewChanged(newValue, oldValue) {
        var _this2 = this;

        var instruction = createInstruction(this, {
          view: newValue,
          viewModel: this.currentViewModel || this.viewModel,
          model: this.model
        });

        if (this.currentInstruction) {
          this.currentInstruction = instruction;
          return;
        }

        this.currentInstruction = instruction;
        this.taskQueue.queueMicroTask(function () {
          return processInstruction(_this2, _this2.currentInstruction);
        });
      }
    }, {
      key: 'viewModelChanged',
      value: function viewModelChanged(newValue, oldValue) {
        var _this3 = this;

        var instruction = createInstruction(this, {
          viewModel: newValue,
          view: this.view,
          model: this.model
        });

        if (this.currentInstruction) {
          this.currentInstruction = instruction;
          return;
        }

        this.currentInstruction = instruction;
        this.taskQueue.queueMicroTask(function () {
          return processInstruction(_this3, _this3.currentInstruction);
        });
      }
    }], null, _instanceInitializers);

    var _Compose = Compose;
    Compose = (0, _aureliaDependencyInjection.inject)(_aureliaPal.DOM.Element, _aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.ViewSlot, _aureliaTemplating.ViewResources, _aureliaTaskQueue.TaskQueue)(Compose) || Compose;
    Compose = (0, _aureliaTemplating.noView)(Compose) || Compose;
    Compose = (0, _aureliaTemplating.customElement)('view-composer')(Compose) || Compose;
    return Compose;
  })();

  exports.Compose = Compose;

  function createInstruction(composer, instruction) {
    return Object.assign(instruction, {
      bindingContext: composer.$parent,
      container: composer.container,
      viewSlot: composer.viewSlot,
      viewResources: composer.viewResources,
      currentController: composer.currentController,
      host: composer.element
    });
  }

  function processInstruction(composer, instruction) {
    composer.currentInstruction = null;
    composer.compositionEngine.compose(instruction).then(function (controller) {
      composer.currentController = controller;
      composer.currentViewModel = controller ? controller.viewModel : null;
    });
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcvdmlldy1jb21wb3Nlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O01BcUJhLE9BQU87Ozs7MEJBQVAsT0FBTzs7c0NBakJILFFBQVE7Ozs7O3NDQUFSLFFBQVE7Ozs7O3NDQUFSLFFBQVE7Ozs7O0FBd0NaLGFBdkJBLE9BQU8sQ0F1Qk4sT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLFNBQVMsRUFBRTs7Ozs7Ozs7O0FBQ3JGLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFVBQUksQ0FBQyxpQkFBaUIsR0FBRyxpQkFBaUIsQ0FBQztBQUMzQyxVQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztBQUN6QixVQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztBQUNuQyxVQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztBQUMzQixVQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO0FBQzlCLFVBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7S0FDOUI7OzBCQWhDVSxPQUFPOzthQXdDZCxjQUFDLGNBQWMsRUFBRTtBQUNuQixZQUFJLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQztBQUM5QiwwQkFBa0IsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFO0FBQy9DLGNBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtBQUNmLG1CQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7QUFDekIsZUFBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQyxDQUFDO09BQ0w7OzthQUVXLHNCQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUU7OztBQUMvQixZQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUMzQixjQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztBQUN6QyxpQkFBTztTQUNSOztBQUVELFlBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLFlBQU07QUFDbEMsY0FBSSxNQUFLLGtCQUFrQixFQUFFO0FBQzNCLGtCQUFLLGtCQUFrQixDQUFDLEtBQUssR0FBRyxRQUFRLENBQUM7QUFDekMsbUJBQU87V0FDUjs7QUFFRCxjQUFJLEVBQUUsR0FBRyxNQUFLLGdCQUFnQixDQUFDOztBQUUvQixjQUFJLEVBQUUsSUFBSSxPQUFPLEVBQUUsQ0FBQyxRQUFRLEtBQUssVUFBVSxFQUFFO0FBQzNDLGNBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7V0FDdkI7U0FDRixDQUFDLENBQUM7T0FDSjs7O2FBRVUscUJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTs7O0FBQzlCLFlBQUksV0FBVyxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRTtBQUN4QyxjQUFJLEVBQUUsUUFBUTtBQUNkLG1CQUFTLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxTQUFTO0FBQ2xELGVBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUM7O0FBRUgsWUFBSSxJQUFJLENBQUMsa0JBQWtCLEVBQUU7QUFDM0IsY0FBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztBQUN0QyxpQkFBTztTQUNSOztBQUVELFlBQUksQ0FBQyxrQkFBa0IsR0FBRyxXQUFXLENBQUM7QUFDdEMsWUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUM7aUJBQU0sa0JBQWtCLFNBQU8sT0FBSyxrQkFBa0IsQ0FBQztTQUFBLENBQUMsQ0FBQztPQUN4Rjs7O2FBRWUsMEJBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTs7O0FBQ25DLFlBQUksV0FBVyxHQUFHLGlCQUFpQixDQUFDLElBQUksRUFBRTtBQUN4QyxtQkFBUyxFQUFFLFFBQVE7QUFDbkIsY0FBSSxFQUFFLElBQUksQ0FBQyxJQUFJO0FBQ2YsZUFBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ2xCLENBQUMsQ0FBQzs7QUFFSCxZQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtBQUMzQixjQUFJLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxDQUFDO0FBQ3RDLGlCQUFPO1NBQ1I7O0FBRUQsWUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQztBQUN0QyxZQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQztpQkFBTSxrQkFBa0IsU0FBTyxPQUFLLGtCQUFrQixDQUFDO1NBQUEsQ0FBQyxDQUFDO09BQ3hGOzs7bUJBbkdVLE9BQU87QUFBUCxXQUFPLEdBRG5CLGdDQXBCa0IsTUFBTSxFQW9CakIsWUFkQSxHQUFHLENBY0MsT0FBTyw4QkFwQlgsU0FBUyxxQkFHZixpQkFBaUIscUJBQUUsUUFBUSxxQkFBRSxhQUFhLG9CQUZwQyxTQUFTLENBbUJxRSxDQUN6RSxPQUFPLEtBQVAsT0FBTztBQUFQLFdBQU8sMEJBakJPLE1BQU0sRUFpQnBCLE9BQU8sS0FBUCxPQUFPO0FBQVAsV0FBTyxHQUhuQix1QkFkQyxhQUFhLEVBY0EsZUFBZSxDQUFDLENBR2xCLE9BQU8sS0FBUCxPQUFPO1dBQVAsT0FBTzs7Ozs7QUFzR3BCLFdBQVMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUNoRCxXQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO0FBQ2hDLG9CQUFjLEVBQUUsUUFBUSxDQUFDLE9BQU87QUFDaEMsZUFBUyxFQUFFLFFBQVEsQ0FBQyxTQUFTO0FBQzdCLGNBQVEsRUFBRSxRQUFRLENBQUMsUUFBUTtBQUMzQixtQkFBYSxFQUFFLFFBQVEsQ0FBQyxhQUFhO0FBQ3JDLHVCQUFpQixFQUFFLFFBQVEsQ0FBQyxpQkFBaUI7QUFDN0MsVUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPO0tBQ3ZCLENBQUMsQ0FBQztHQUNKOztBQUVELFdBQVMsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFdBQVcsRUFBRTtBQUNqRCxZQUFRLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO0FBQ25DLFlBQVEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsVUFBVSxFQUFJO0FBQ2pFLGNBQVEsQ0FBQyxpQkFBaUIsR0FBRyxVQUFVLENBQUM7QUFDeEMsY0FBUSxDQUFDLGdCQUFnQixHQUFHLFVBQVUsR0FBRyxVQUFVLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztLQUN0RSxDQUFDLENBQUM7R0FDSiIsImZpbGUiOiJ2aWV3L3ZpZXctY29tcG9zZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbnRhaW5lciwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7VGFza1F1ZXVlfSBmcm9tICdhdXJlbGlhLXRhc2stcXVldWUnO1xuaW1wb3J0IHtcbiAgQ29tcG9zaXRpb25FbmdpbmUsIFZpZXdTbG90LCBWaWV3UmVzb3VyY2VzLFxuICBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgbm9WaWV3XG59IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG4vKipcbiogVXNlZCB0byBjb21wb3NlIGEgbmV3IHZpZXcgLyB2aWV3LW1vZGVsIHRlbXBsYXRlIG9yIGJpbmQgdG8gYW4gZXhpc3RpbmcgaW5zdGFuY2VcbipcbiogQGNsYXNzIENvbXBvc2VcbiogQGNvbnN0cnVjdG9yXG4qIEBwYXJhbSB7Q29udGFpbmVyfSBjb250YWluZXIgVGhlIGNvbnRhaW5pbmcgY29udGFpbmVyXG4qIEBwYXJhbSB7Q29tcG9zaXRpb25FbmdpbmV9IGNvbXBvc2l0aW9uRW5naW5lIFRoZSBlbmdpbmUgdXNlZCB3aGVuIGNvbXBvc2luZyB0aGlzIHZpZXdcbiogQHBhcmFtIHtWaWV3U2xvdH0gdmlld1Nsb3QgVGhlIHNsb3QgdGhlIHZpZXcgd2lsbCBiZSBpbnNlcnRlZCBpbiB0b1xuKiBAcGFyYW0ge1ZpZXdSZXNvdXJjZXN9IHZpZXdSZXNvdXJjZXMgVGhlIHJlc291cmNlcyBhdmFpbGFibGUgaW4gdGhlIGN1cnJlbnQgdmlld1Nsb3RcbiovXG5AY3VzdG9tRWxlbWVudCgndmlldy1jb21wb3NlcicpXG5Abm9WaWV3XG5AaW5qZWN0KERPTS5FbGVtZW50LCBDb250YWluZXIsIENvbXBvc2l0aW9uRW5naW5lLCBWaWV3U2xvdCwgVmlld1Jlc291cmNlcywgVGFza1F1ZXVlKVxuZXhwb3J0IGNsYXNzIENvbXBvc2Uge1xuICAvKipcbiAgKiBNb2RlbCB0byBiaW5kIHRoZSBjdXN0b20gZWxlbWVudCB0b1xuICAqXG4gICogQHByb3BlcnR5IG1vZGVsXG4gICogQHR5cGUge0N1c3RvbUVsZW1lbnR9XG4gICovXG4gIEBiaW5kYWJsZSBtb2RlbFxuICAvKipcbiAgKiBWaWV3IHRvIGJpbmQgdGhlIGN1c3RvbSBlbGVtZW50IHRvXG4gICpcbiAgKiBAcHJvcGVydHkgdmlld1xuICAqIEB0eXBlIHtIdG1sRWxlbWVudH1cbiAgKi9cbiAgQGJpbmRhYmxlIHZpZXdcbiAgLyoqXG4gICogVmlldy1tb2RlbCB0byBiaW5kIHRoZSBjdXN0b20gZWxlbWVudCdzIHRlbXBsYXRlIHRvXG4gICpcbiAgKiBAcHJvcGVydHkgdmlld01vZGVsXG4gICogQHR5cGUge0NsYXNzfVxuICAqL1xuICBAYmluZGFibGUgdmlld01vZGVsXG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udGFpbmVyLCBjb21wb3NpdGlvbkVuZ2luZSwgdmlld1Nsb3QsIHZpZXdSZXNvdXJjZXMsIHRhc2tRdWV1ZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb21wb3NpdGlvbkVuZ2luZSA9IGNvbXBvc2l0aW9uRW5naW5lO1xuICAgIHRoaXMudmlld1Nsb3QgPSB2aWV3U2xvdDtcbiAgICB0aGlzLnZpZXdSZXNvdXJjZXMgPSB2aWV3UmVzb3VyY2VzO1xuICAgIHRoaXMudGFza1F1ZXVlID0gdGFza1F1ZXVlO1xuICAgIHRoaXMuY3VycmVudENvbnRyb2xsZXIgPSBudWxsO1xuICAgIHRoaXMuY3VycmVudFZpZXdNb2RlbCA9IG51bGw7XG4gIH1cblxuICAvKipcbiAgKiBVc2VkIHRvIHNldCB0aGUgYmluZGluZ0NvbnRleHRcbiAgKlxuICAqIEBtZXRob2QgYmluZFxuICAqIEBwYXJhbSB7YmluZGluZ0NvbnRleHR9IGJpbmRpbmdDb250ZXh0IFRoZSBjb250ZXh0IGluIHdoaWNoIHRoZSB2aWV3IG1vZGVsIGlzIGV4ZWN1dGVkIGluXG4gICovXG4gIGJpbmQoYmluZGluZ0NvbnRleHQpIHtcbiAgICB0aGlzLiRwYXJlbnQgPSBiaW5kaW5nQ29udGV4dDtcbiAgICBwcm9jZXNzSW5zdHJ1Y3Rpb24odGhpcywgY3JlYXRlSW5zdHJ1Y3Rpb24odGhpcywge1xuICAgICAgdmlldzogdGhpcy52aWV3LFxuICAgICAgdmlld01vZGVsOiB0aGlzLnZpZXdNb2RlbCxcbiAgICAgIG1vZGVsOiB0aGlzLm1vZGVsXG4gICAgfSkpO1xuICB9XG5cbiAgbW9kZWxDaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJbnN0cnVjdGlvbikge1xuICAgICAgdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24ubW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24ubW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgdm0gPSB0aGlzLmN1cnJlbnRWaWV3TW9kZWw7XG5cbiAgICAgIGlmICh2bSAmJiB0eXBlb2Ygdm0uYWN0aXZhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdm0uYWN0aXZhdGUobmV3VmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmlld0NoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgbGV0IGluc3RydWN0aW9uID0gY3JlYXRlSW5zdHJ1Y3Rpb24odGhpcywge1xuICAgICAgdmlldzogbmV3VmFsdWUsXG4gICAgICB2aWV3TW9kZWw6IHRoaXMuY3VycmVudFZpZXdNb2RlbCB8fCB0aGlzLnZpZXdNb2RlbCxcbiAgICAgIG1vZGVsOiB0aGlzLm1vZGVsXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudEluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb247XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcbiAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiBwcm9jZXNzSW5zdHJ1Y3Rpb24odGhpcywgdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24pKTtcbiAgfVxuXG4gIHZpZXdNb2RlbENoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgbGV0IGluc3RydWN0aW9uID0gY3JlYXRlSW5zdHJ1Y3Rpb24odGhpcywge1xuICAgICAgdmlld01vZGVsOiBuZXdWYWx1ZSxcbiAgICAgIHZpZXc6IHRoaXMudmlldyxcbiAgICAgIG1vZGVsOiB0aGlzLm1vZGVsXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24pIHtcbiAgICAgIHRoaXMuY3VycmVudEluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb247XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcbiAgICB0aGlzLnRhc2tRdWV1ZS5xdWV1ZU1pY3JvVGFzaygoKSA9PiBwcm9jZXNzSW5zdHJ1Y3Rpb24odGhpcywgdGhpcy5jdXJyZW50SW5zdHJ1Y3Rpb24pKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVJbnN0cnVjdGlvbihjb21wb3NlciwgaW5zdHJ1Y3Rpb24pIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oaW5zdHJ1Y3Rpb24sIHtcbiAgICBiaW5kaW5nQ29udGV4dDogY29tcG9zZXIuJHBhcmVudCxcbiAgICBjb250YWluZXI6IGNvbXBvc2VyLmNvbnRhaW5lcixcbiAgICB2aWV3U2xvdDogY29tcG9zZXIudmlld1Nsb3QsXG4gICAgdmlld1Jlc291cmNlczogY29tcG9zZXIudmlld1Jlc291cmNlcyxcbiAgICBjdXJyZW50Q29udHJvbGxlcjogY29tcG9zZXIuY3VycmVudENvbnRyb2xsZXIsXG4gICAgaG9zdDogY29tcG9zZXIuZWxlbWVudFxuICB9KTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0luc3RydWN0aW9uKGNvbXBvc2VyLCBpbnN0cnVjdGlvbikge1xuICBjb21wb3Nlci5jdXJyZW50SW5zdHJ1Y3Rpb24gPSBudWxsO1xuICBjb21wb3Nlci5jb21wb3NpdGlvbkVuZ2luZS5jb21wb3NlKGluc3RydWN0aW9uKS50aGVuKGNvbnRyb2xsZXIgPT4ge1xuICAgIGNvbXBvc2VyLmN1cnJlbnRDb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICBjb21wb3Nlci5jdXJyZW50Vmlld01vZGVsID0gY29udHJvbGxlciA/IGNvbnRyb2xsZXIudmlld01vZGVsIDogbnVsbDtcbiAgfSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
