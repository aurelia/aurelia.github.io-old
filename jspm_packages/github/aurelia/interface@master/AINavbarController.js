/* */ 
define(['exports', 'aurelia-framework', './AILayoutController', './channel', './components/instruction'], function (exports, _aureliaFramework, _AILayoutController, _channel, _componentsInstruction) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var NAVBAR_DEFAULTS = {
    background: 'light'
  };

  var NAV_BAR_INDEX = 0;

  function getIndexID() {
    return NAV_BAR_INDEX++;
  }

  var AINavbarController = (function () {
    function AINavbarController(layoutController, channel, container) {
      _classCallCheck(this, _AINavbarController);

      this.map = new Map();
      this.config = {};

      this.layoutController = layoutController;
      this.channel = channel;
      this.container = container;
      this.channel.publish('ai-navbar-controller', this);
    }

    _createClass(AINavbarController, [{
      key: 'registerNavbar',
      value: function registerNavbar(model, viewModel) {
        model.viewModel = viewModel;
        this.map.set(model.id, model);
        this.channel.publish(model);
      }
    }, {
      key: 'createNavbar',
      value: function createNavbar(instruction, deps) {
        return this.createInstruction(instruction, deps);
      }
    }, {
      key: 'createInstruction',
      value: function createInstruction(instruction, deps) {
        if (instruction === undefined) instruction = {};

        var title = instruction.brand || title;

        if (typeof title === 'string') {
          instruction.brand = { title: title };
        }

        instruction.raw = instruction;
        instruction.isConfigured = true;

        if (instruction.isEnhanceable || instruction.element) {
          return Promise.resolve(new _componentsInstruction.NavbarElementInstruction({
            navbarController: this,
            channel: this.channel,
            isDynamic: true
          }));
        }

        Object.assign(instruction, {
          navbarController: this,
          channel: this.channel,
          element: instruction.element,
          isDynamic: false,
          isElement: true,
          isEnhanceable: true
        });
        return Promise.resolve(new _componentsInstruction.DynamicNavbarInstruction(instruction));
      }
    }, {
      key: 'hideNavbar',
      value: function hideNavbar() {}
    }, {
      key: 'showNavbar',
      value: function showNavbar() {}
    }, {
      key: 'onNavbarHidden',
      value: function onNavbarHidden() {}
    }, {
      key: 'onNavbarShown',
      value: function onNavbarShown() {}
    }]);

    var _AINavbarController = AINavbarController;
    AINavbarController = (0, _aureliaFramework.inject)(_AILayoutController.AILayoutController, _channel.InterfaceChannel, _aureliaFramework.Container)(AINavbarController) || AINavbarController;
    return AINavbarController;
  })();

  exports.AINavbarController = AINavbarController;

  var AINavbarPipeline = (function () {
    function AINavbarPipeline(navbarController) {
      _classCallCheck(this, _AINavbarPipeline);

      this.navbarController = navbarController;
    }

    _createClass(AINavbarPipeline, [{
      key: 'run',
      value: function run(instruction, next) {
        var controller = this.navbarController;
        controller.channel.publish('navigate', instruction);
        return next();
      }
    }]);

    var _AINavbarPipeline = AINavbarPipeline;
    AINavbarPipeline = (0, _aureliaFramework.inject)(AINavbarController, _componentsInstruction.DynamicNavbarInstruction)(AINavbarPipeline) || AINavbarPipeline;
    return AINavbarPipeline;
  })();

  exports.AINavbarPipeline = AINavbarPipeline;
});
//# sourceMappingURL=data:application/json;base64,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V0FBbEIsa0JBQWtCOzs7OztNQThEbEIsZ0JBQWdCO0FBQ2hCLGFBREEsZ0JBQWdCLENBQ2YsZ0JBQWdCLEVBQUU7OztBQUM1QixVQUFJLENBQUMsZ0JBQWdCLEdBQUcsZ0JBQWdCLENBQUM7S0FDMUM7O2lCQUhVLGdCQUFnQjs7YUFLeEIsYUFBQyxXQUFXLEVBQUUsSUFBSSxFQUFFO0FBQ3JCLFlBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztBQUN2QyxrQkFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3BELGVBQU8sSUFBSSxFQUFFLENBQUM7T0FDZjs7OzRCQVRVLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FENUIsc0JBN0VrQixNQUFNLEVBNkVqQixrQkFBa0IseUJBMUUyQix3QkFBd0IsQ0EwRXhCLENBQ3hDLGdCQUFnQixLQUFoQixnQkFBZ0I7V0FBaEIsZ0JBQWdCIiwiZmlsZSI6IkFJTmF2YmFyQ29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dHJhbnNpZW50LCBpbmplY3QsIENvbnRhaW5lcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtBSUxheW91dENvbnRyb2xsZXJ9IGZyb20gJy4vQUlMYXlvdXRDb250cm9sbGVyJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi9jaGFubmVsJztcbmltcG9ydCB7TmF2YmFySW5zdHJ1Y3Rpb24sIE5hdmJhckVsZW1lbnRJbnN0cnVjdGlvbiwgRHluYW1pY05hdmJhckluc3RydWN0aW9ufSBmcm9tICcuL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb24nO1xuXG5jb25zdCBOQVZCQVJfREVGQVVMVFMgPSB7XG4gIGJhY2tncm91bmQ6ICdsaWdodCcsXG59O1xuXG5sZXQgTkFWX0JBUl9JTkRFWCA9IDA7XG5cbmZ1bmN0aW9uIGdldEluZGV4SUQoKSB7XG4gIHJldHVybiBOQVZfQkFSX0lOREVYKys7XG59XG5cbkBpbmplY3QoQUlMYXlvdXRDb250cm9sbGVyLCBJbnRlcmZhY2VDaGFubmVsLCBDb250YWluZXIpXG5leHBvcnQgY2xhc3MgQUlOYXZiYXJDb250cm9sbGVyIHtcblxuICBuYXZiYXI7XG4gIGNoYW5uZWw7XG4gIGxheW91dENvbnRyb2xsZXI7XG4gIG1hcCA9IG5ldyBNYXAoKTtcbiAgY29uZmlnID0ge307XG5cbiAgY29uc3RydWN0b3IobGF5b3V0Q29udHJvbGxlciwgY2hhbm5lbCwgY29udGFpbmVyKSB7XG4gICAgdGhpcy5sYXlvdXRDb250cm9sbGVyID0gbGF5b3V0Q29udHJvbGxlcjtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMuY2hhbm5lbC5wdWJsaXNoKCdhaS1uYXZiYXItY29udHJvbGxlcicsIHRoaXMpO1xuICB9XG5cbiAgcmVnaXN0ZXJOYXZiYXIobW9kZWwsIHZpZXdNb2RlbCkge1xuICAgIG1vZGVsLnZpZXdNb2RlbCA9IHZpZXdNb2RlbDtcbiAgICB0aGlzLm1hcC5zZXQobW9kZWwuaWQsIG1vZGVsKTtcbiAgICB0aGlzLmNoYW5uZWwucHVibGlzaChtb2RlbCk7XG4gIH1cblxuICBjcmVhdGVOYXZiYXIoaW5zdHJ1Y3Rpb24sIGRlcHMpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0cnVjdGlvbihpbnN0cnVjdGlvbiwgZGVwcyk7XG4gIH1cblxuICBjcmVhdGVJbnN0cnVjdGlvbihpbnN0cnVjdGlvbiA9IHt9LCBkZXBzKSB7XG4gICAgbGV0IHRpdGxlICAgPSBpbnN0cnVjdGlvbi5icmFuZCB8fCB0aXRsZTtcblxuICAgIGlmICh0eXBlb2YgdGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICBpbnN0cnVjdGlvbi5icmFuZCA9IHt0aXRsZX07XG4gICAgfVxuXG4gICAgaW5zdHJ1Y3Rpb24ucmF3ID0gaW5zdHJ1Y3Rpb247XG4gICAgaW5zdHJ1Y3Rpb24uaXNDb25maWd1cmVkID0gdHJ1ZTtcblxuICAgIGlmIChpbnN0cnVjdGlvbi5pc0VuaGFuY2VhYmxlIHx8IGluc3RydWN0aW9uLmVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IE5hdmJhckVsZW1lbnRJbnN0cnVjdGlvbih7XG4gICAgICAgIG5hdmJhckNvbnRyb2xsZXI6IHRoaXMsXG4gICAgICAgIGNoYW5uZWw6IHRoaXMuY2hhbm5lbCxcbiAgICAgICAgaXNEeW5hbWljOiB0cnVlLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIE9iamVjdC5hc3NpZ24oaW5zdHJ1Y3Rpb24sIHtcbiAgICAgIG5hdmJhckNvbnRyb2xsZXI6IHRoaXMsXG4gICAgICBjaGFubmVsOiB0aGlzLmNoYW5uZWwsXG4gICAgICBlbGVtZW50OiBpbnN0cnVjdGlvbi5lbGVtZW50LFxuICAgICAgaXNEeW5hbWljOiBmYWxzZSxcbiAgICAgIGlzRWxlbWVudDogdHJ1ZSxcbiAgICAgIGlzRW5oYW5jZWFibGU6IHRydWUsXG4gICAgfSlcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG5ldyBEeW5hbWljTmF2YmFySW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24pKTtcbiAgfVxuXG4gIGhpZGVOYXZiYXIoKSB7fVxuICBzaG93TmF2YmFyKCkge31cblxuICBvbk5hdmJhckhpZGRlbigpIHt9XG4gIG9uTmF2YmFyU2hvd24oKSB7fVxufVxuXG5AaW5qZWN0KEFJTmF2YmFyQ29udHJvbGxlciwgRHluYW1pY05hdmJhckluc3RydWN0aW9uKVxuZXhwb3J0IGNsYXNzIEFJTmF2YmFyUGlwZWxpbmUge1xuICBjb25zdHJ1Y3RvcihuYXZiYXJDb250cm9sbGVyKSB7XG4gICAgdGhpcy5uYXZiYXJDb250cm9sbGVyID0gbmF2YmFyQ29udHJvbGxlcjtcbiAgfVxuXG4gIHJ1bihpbnN0cnVjdGlvbiwgbmV4dCkge1xuICAgIGxldCBjb250cm9sbGVyID0gdGhpcy5uYXZiYXJDb250cm9sbGVyO1xuICAgIGNvbnRyb2xsZXIuY2hhbm5lbC5wdWJsaXNoKCduYXZpZ2F0ZScsIGluc3RydWN0aW9uKTtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
