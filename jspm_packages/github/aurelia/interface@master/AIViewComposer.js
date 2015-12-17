/* */ 
define(['exports', 'aurelia-dependency-injection', 'aurelia-templating', 'aurelia-pal', 'aurelia-metadata'], function (exports, _aureliaDependencyInjection, _aureliaTemplating, _aureliaPal, _aureliaMetadata) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.invokeLifecycle = invokeLifecycle;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ViewController = (function () {
    function ViewController(element) {
      _classCallCheck(this, ViewController);

      this.element = element;
    }

    _createClass(ViewController, [{
      key: 'destroy',
      value: function destroy() {}
    }]);

    return ViewController;
  })();

  var AIViewComposer = (function () {
    function AIViewComposer(container, compositionEngine, templatingEngine) {
      _classCallCheck(this, _AIViewComposer);

      this.container = container;
      this.compositionEngine = compositionEngine;
      this.templatingEngine = templatingEngine;
    }

    _createClass(AIViewComposer, [{
      key: 'enhance',
      value: function enhance(element) {
        return this.templatingEngine.enhance(element);
      }
    }, {
      key: 'compose',
      value: function compose(instruction, viewController) {
        var _this = this;

        viewController = viewController || ViewController;
        instruction.host = instruction.host || _aureliaPal.DOM.createDocumentFragment();

        if (typeof viewController === 'function') {
          viewController = new ViewController(instruction.host);
        }

        instruction.childContainer = instruction.container.createChild();
        instruction.anchorIsContainer = true;

        return this._getViewModel(instruction).then(function (_instruction) {
          var viewModel = _instruction.viewModel;
          var model = _instruction.model;
          viewController.viewModel = viewModel;

          return invokeLifecycle(viewModel, 'canActivate', _instruction.model).then(function (canActivate) {
            if (canActivate) return _this.compositionEngine.createController(_instruction);
          }).then(function (controller) {
            viewController.controller = controller;
            viewController.view = controller.view;
            controller.automate(model);
            return viewController;
          });
        });
      }
    }, {
      key: 'createHost',
      value: function createHost(controller) {
        controller.viewSlot.add(controller.view);
        return controller;
      }
    }, {
      key: '_getViewModel',
      value: function _getViewModel(instruction) {
        if (typeof instruction.viewModel === 'function') {
          instruction.viewModel = _aureliaMetadata.Origin.get(instruction.viewModel).moduleId;
        }

        if (typeof instruction.viewModel === 'string') {
          return this.compositionEngine.ensureViewModel(instruction);
        }

        return Promise.resolve(instruction);
      }
    }]);

    var _AIViewComposer = AIViewComposer;
    AIViewComposer = (0, _aureliaDependencyInjection.inject)(_aureliaDependencyInjection.Container, _aureliaTemplating.CompositionEngine, _aureliaTemplating.TemplatingEngine)(AIViewComposer) || AIViewComposer;
    return AIViewComposer;
  })();

  exports.AIViewComposer = AIViewComposer;

  function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] === 'function') {
      var result = instance[name](model);

      if (result instanceof Promise) {
        return result;
      }

      if (result !== null && result !== undefined) {
        return Promise.resolve(result);
      }

      return Promise.resolve(true);
    }

    return Promise.resolve(true);
  }
});
//# sourceMappingURL=data:application/json;base64,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LGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1RDs7QUFFRCxlQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7T0FDckM7OzswQkF6RFUsY0FBYztBQUFkLGtCQUFjLEdBRDFCLGdDQWhCTyxNQUFNLDhCQUFFLFNBQVMscUJBQ2pCLGlCQUFpQixxQkFHTyxnQkFBZ0IsQ0FZTyxDQUMxQyxjQUFjLEtBQWQsY0FBYztXQUFkLGNBQWM7Ozs7O0FBMkRwQixXQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUNyRCxRQUFJLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN4QyxVQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRW5DLFVBQUksTUFBTSxZQUFZLE9BQU8sRUFBRTtBQUM3QixlQUFPLE1BQU0sQ0FBQztPQUNmOztBQUVELFVBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQzNDLGVBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztPQUNoQzs7QUFFRCxhQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDOUI7O0FBRUQsV0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzlCIiwiZmlsZSI6IkFJVmlld0NvbXBvc2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIENvbnRhaW5lcn0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge0NvbXBvc2l0aW9uRW5naW5lfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7T3JpZ2lufSBmcm9tICdhdXJlbGlhLW1ldGFkYXRhJztcbmltcG9ydCB7Vmlld1Nsb3QsIFZpZXdDb21waWxlciwgVGVtcGxhdGluZ0VuZ2luZX0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcblxuY2xhc3MgVmlld0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG5cbiAgfVxufVxuXG5AaW5qZWN0KENvbnRhaW5lciwgQ29tcG9zaXRpb25FbmdpbmUsIFRlbXBsYXRpbmdFbmdpbmUpXG5leHBvcnQgY2xhc3MgQUlWaWV3Q29tcG9zZXIge1xuICBjb25zdHJ1Y3Rvcihjb250YWluZXIsIGNvbXBvc2l0aW9uRW5naW5lLCB0ZW1wbGF0aW5nRW5naW5lKSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5jb21wb3NpdGlvbkVuZ2luZSA9IGNvbXBvc2l0aW9uRW5naW5lO1xuICAgIHRoaXMudGVtcGxhdGluZ0VuZ2luZSA9IHRlbXBsYXRpbmdFbmdpbmU7XG4gIH1cblxuICBlbmhhbmNlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy50ZW1wbGF0aW5nRW5naW5lLmVuaGFuY2UoZWxlbWVudCk7XG4gIH1cblxuICBjb21wb3NlKGluc3RydWN0aW9uLCB2aWV3Q29udHJvbGxlcikge1xuICAgIHZpZXdDb250cm9sbGVyID0gdmlld0NvbnRyb2xsZXIgfHwgVmlld0NvbnRyb2xsZXI7XG4gICAgaW5zdHJ1Y3Rpb24uaG9zdCA9IGluc3RydWN0aW9uLmhvc3QgfHwgRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgIGlmICh0eXBlb2Ygdmlld0NvbnRyb2xsZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHZpZXdDb250cm9sbGVyID0gbmV3IFZpZXdDb250cm9sbGVyKGluc3RydWN0aW9uLmhvc3QpO1xuICAgIH1cblxuICAgIGluc3RydWN0aW9uLmNoaWxkQ29udGFpbmVyID0gaW5zdHJ1Y3Rpb24uY29udGFpbmVyLmNyZWF0ZUNoaWxkKCk7XG4gICAgaW5zdHJ1Y3Rpb24uYW5jaG9ySXNDb250YWluZXIgPSB0cnVlO1xuXG4gICAgcmV0dXJuIHRoaXMuX2dldFZpZXdNb2RlbChpbnN0cnVjdGlvbikudGhlbihfaW5zdHJ1Y3Rpb24gPT4ge1xuICAgICAgbGV0IHZpZXdNb2RlbCA9IF9pbnN0cnVjdGlvbi52aWV3TW9kZWw7XG4gICAgICBsZXQgbW9kZWwgPSBfaW5zdHJ1Y3Rpb24ubW9kZWw7XG4gICAgICB2aWV3Q29udHJvbGxlci52aWV3TW9kZWwgPSB2aWV3TW9kZWw7XG5cbiAgICAgIHJldHVybiBpbnZva2VMaWZlY3ljbGUodmlld01vZGVsLCAnY2FuQWN0aXZhdGUnLCBfaW5zdHJ1Y3Rpb24ubW9kZWwpXG4gICAgICAgIC50aGVuKChjYW5BY3RpdmF0ZSk9PiB7XG4gICAgICAgICAgaWYgKGNhbkFjdGl2YXRlKSByZXR1cm4gdGhpcy5jb21wb3NpdGlvbkVuZ2luZS5jcmVhdGVDb250cm9sbGVyKF9pbnN0cnVjdGlvbik7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGNvbnRyb2xsZXIgPT4ge1xuICAgICAgICAgIHZpZXdDb250cm9sbGVyLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuICAgICAgICAgIHZpZXdDb250cm9sbGVyLnZpZXcgPSBjb250cm9sbGVyLnZpZXc7XG4gICAgICAgICAgY29udHJvbGxlci5hdXRvbWF0ZShtb2RlbCk7XG4gICAgICAgICAgcmV0dXJuIHZpZXdDb250cm9sbGVyO1xuICAgICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyByZXR1cm4gdGhpcy5jcmVhdGVWaWV3TW9kZWwodmlld0NvbnRyb2xsZXIsIGluc3RydWN0aW9uKTtcbiAgfVxuXG4gIGNyZWF0ZUhvc3QoY29udHJvbGxlcikge1xuICAgIGNvbnRyb2xsZXIudmlld1Nsb3QuYWRkKGNvbnRyb2xsZXIudmlldyk7XG4gICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gIH1cblxuICBfZ2V0Vmlld01vZGVsKGluc3RydWN0aW9uKSB7XG4gICAgaWYgKHR5cGVvZiBpbnN0cnVjdGlvbi52aWV3TW9kZWwgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGluc3RydWN0aW9uLnZpZXdNb2RlbCA9IE9yaWdpbi5nZXQoaW5zdHJ1Y3Rpb24udmlld01vZGVsKS5tb2R1bGVJZDtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGluc3RydWN0aW9uLnZpZXdNb2RlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvc2l0aW9uRW5naW5lLmVuc3VyZVZpZXdNb2RlbChpbnN0cnVjdGlvbik7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShpbnN0cnVjdGlvbik7XG4gIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VMaWZlY3ljbGUoaW5zdGFuY2UsIG5hbWUsIG1vZGVsKSB7XG4gIGlmICh0eXBlb2YgaW5zdGFuY2VbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZXQgcmVzdWx0ID0gaW5zdGFuY2VbbmFtZV0obW9kZWwpO1xuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
