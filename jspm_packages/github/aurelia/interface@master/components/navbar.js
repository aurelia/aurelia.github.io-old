/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', 'aurelia-event-aggregator', 'aurelia-router', './content-process'], function (exports, _aureliaFramework, _aureliaPal, _aureliaEventAggregator, _aureliaRouter, _contentProcess) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AINavbarSlot = (function () {
    function AINavbarSlot(container, eventAggregator, targetInstruction, router) {
      var _this = this;

      _classCallCheck(this, _AINavbarSlot);

      this.container = container;
      this.eventAggregator = eventAggregator;
      this.instruction = targetInstruction.elementInstruction;
      this.viewFactory = targetInstruction.elementInstruction.appBarContentFactory;
      this.router = router;
      this.previousLocation = router.history.previousLocation;

      this.navigateBack = function () {
        if (_this.previousLocation) {
          router.navigate(_this.previousLocation);
        } else {
          router.navigateBack();
        }
      };
    }

    _createClass(AINavbarSlot, [{
      key: 'bind',
      value: function bind(bindingContext, overrideContext) {
        overrideContext.navbar = this;
        this.bindingContext = bindingContext;
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.view = this.viewFactory.create(this.container, this.instruction.elementInstruction);
        this.view.bind(this, this.bindingContext);
        this.eventAggregator.publish(this);
      }
    }]);

    var _AINavbarSlot = AINavbarSlot;
    AINavbarSlot = (0, _aureliaFramework.inject)(_aureliaFramework.Container, _aureliaEventAggregator.EventAggregator, _aureliaFramework.TargetInstruction, _aureliaRouter.Router)(AINavbarSlot) || AINavbarSlot;
    AINavbarSlot = (0, _aureliaFramework.processContent)(_contentProcess.AINavbarContentProcessing.navbar)(AINavbarSlot) || AINavbarSlot;
    AINavbarSlot = (0, _aureliaFramework.noView)(AINavbarSlot) || AINavbarSlot;
    AINavbarSlot = (0, _aureliaFramework.customElement)('ai-navbar-slot')(AINavbarSlot) || AINavbarSlot;
    return AINavbarSlot;
  })();

  exports.AINavbarSlot = AINavbarSlot;

  var AINavbarElement = (function () {
    function AINavbarElement(element, container, eventAggregator) {
      _classCallCheck(this, _AINavbarElement);

      this.subscriptions = [];
      this.activeDropdown = false;

      this.element = element;
      this.eventAggregator = eventAggregator;
    }

    _createClass(AINavbarElement, [{
      key: 'bind',
      value: function bind(bindingContext) {
        var _this2 = this;

        var eventAggregator = this.eventAggregator;

        if (bindingContext.__isAppBar) {
          this.appbar = bindingContext;
        }

        this.subscriptions.push(eventAggregator.subscribe('ai:nav-dropdown:toggle', function () {
          var lastValue = _this2.activeDropdown;
          _this2.activeDropdown = !_this2.activeDropdown;
          _this2.activeDropdownChanged(_this2.activeDropdown, lastValue);
        }), eventAggregator.subscribe('ai:navigate', function () {
          _this2.activeDropdown = false;
          _this2.activeDropdownChanged(_this2.activeDropdown);
        }));
      }
    }, {
      key: 'attached',
      value: function attached() {
        if (!this.appbar) {
          var _parent = this.element.parentElement;
          if (_parent.au && _parent.au.controller && _parent.au.controller.viewModel) {
            _parent = _parent.au.controller.viewModel;
            _parent.__isAppBar && (this.appbar = _parent);
          }
        }
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        while (this.subscriptions.length) {
          this.subscriptions.pop().dispose();
        }
      }
    }, {
      key: 'activeDropdownChanged',
      value: function activeDropdownChanged(value) {
        if (this.appbar) {
          this.appbar.element.classList[value ? 'add' : 'remove']('is-dropdown-active');
        }
      }
    }]);

    var _AINavbarElement = AINavbarElement;
    AINavbarElement = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaFramework.Container, _aureliaEventAggregator.EventAggregator)(AINavbarElement) || AINavbarElement;
    AINavbarElement = (0, _aureliaFramework.useView)('./content.html')(AINavbarElement) || AINavbarElement;
    AINavbarElement = (0, _aureliaFramework.customElement)('ai-navbar')(AINavbarElement) || AINavbarElement;
    return AINavbarElement;
  })();

  exports.AINavbarElement = AINavbarElement;
});
//# sourceMappingURL=data:application/json;base64,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QyxPQUFPLG9CQTlDYSxTQUFTLDBCQUVqQyxlQUFlLENBNEN5QixDQUNuQyxlQUFlLEtBQWYsZUFBZTtBQUFmLG1CQUFlLEdBRjNCLHNCQTdDTyxPQUFPLEVBNkNOLGdCQUFnQixDQUFDLENBRWIsZUFBZSxLQUFmLGVBQWU7QUFBZixtQkFBZSxHQUgzQixzQkE1Q2dCLGFBQWEsRUE0Q2YsV0FBVyxDQUFDLENBR2QsZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlIiwiZmlsZSI6ImNvbXBvbmVudHMvbmF2YmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VWaWV3LCBjdXN0b21FbGVtZW50LCBDb250YWluZXIsIFZpZXdTbG90LCBWaWV3Q29tcGlsZXIsIFZpZXdGYWN0b3J5LCBWaWV3UmVzb3VyY2VzLCBub1ZpZXcsIGluamVjdCwgcHJvY2Vzc0NvbnRlbnQsIFRhcmdldEluc3RydWN0aW9ufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuXG5pbXBvcnQge0FJTmF2YmFyQ29udGVudFByb2Nlc3NpbmcsIGdldGF1fSBmcm9tICcuL2NvbnRlbnQtcHJvY2Vzcyc7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1uYXZiYXItc2xvdCcpXG5Abm9WaWV3XG5AcHJvY2Vzc0NvbnRlbnQoQUlOYXZiYXJDb250ZW50UHJvY2Vzc2luZy5uYXZiYXIpXG5AaW5qZWN0KENvbnRhaW5lciwgRXZlbnRBZ2dyZWdhdG9yLCBUYXJnZXRJbnN0cnVjdGlvbiwgUm91dGVyKVxuZXhwb3J0IGNsYXNzIEFJTmF2YmFyU2xvdCB7XG5cbiAgY29uc3RydWN0b3IoY29udGFpbmVyLCBldmVudEFnZ3JlZ2F0b3IsIHRhcmdldEluc3RydWN0aW9uLCByb3V0ZXIpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcbiAgICB0aGlzLmluc3RydWN0aW9uID0gdGFyZ2V0SW5zdHJ1Y3Rpb24uZWxlbWVudEluc3RydWN0aW9uO1xuICAgIHRoaXMudmlld0ZhY3RvcnkgPSB0YXJnZXRJbnN0cnVjdGlvbi5lbGVtZW50SW5zdHJ1Y3Rpb24uYXBwQmFyQ29udGVudEZhY3Rvcnk7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gICAgdGhpcy5wcmV2aW91c0xvY2F0aW9uID0gcm91dGVyLmhpc3RvcnkucHJldmlvdXNMb2NhdGlvbjtcblxuICAgIHRoaXMubmF2aWdhdGVCYWNrID0gKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucHJldmlvdXNMb2NhdGlvbikge1xuICAgICAgICByb3V0ZXIubmF2aWdhdGUodGhpcy5wcmV2aW91c0xvY2F0aW9uKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJvdXRlci5uYXZpZ2F0ZUJhY2soKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBiaW5kKGJpbmRpbmdDb250ZXh0LCBvdmVycmlkZUNvbnRleHQpIHtcbiAgICBvdmVycmlkZUNvbnRleHQubmF2YmFyID0gdGhpcztcbiAgICB0aGlzLmJpbmRpbmdDb250ZXh0ID0gYmluZGluZ0NvbnRleHQ7XG5cbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMudmlldyA9IHRoaXMudmlld0ZhY3RvcnkuY3JlYXRlKHRoaXMuY29udGFpbmVyLCB0aGlzLmluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbik7XG4gICAgdGhpcy52aWV3LmJpbmQodGhpcywgdGhpcy5iaW5kaW5nQ29udGV4dCk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCh0aGlzKTtcbiAgfVxufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktbmF2YmFyJylcbkB1c2VWaWV3KCcuL2NvbnRlbnQuaHRtbCcpXG5AaW5qZWN0KERPTS5FbGVtZW50LCBDb250YWluZXIsIEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBBSU5hdmJhckVsZW1lbnQge1xuICBzdWJzY3JpcHRpb25zID0gW107XG4gIGFjdGl2ZURyb3Bkb3duID0gZmFsc2U7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lciwgZXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgdGhpcy5lbGVtZW50ICA9IGVsZW1lbnQ7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gIH1cblxuICBiaW5kKGJpbmRpbmdDb250ZXh0KSB7XG4gICAgbGV0IGV2ZW50QWdncmVnYXRvciA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yO1xuXG4gICAgaWYgKGJpbmRpbmdDb250ZXh0Ll9faXNBcHBCYXIpIHtcbiAgICAgIHRoaXMuYXBwYmFyID0gYmluZGluZ0NvbnRleHQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goXG4gICAgICBldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlKCdhaTpuYXYtZHJvcGRvd246dG9nZ2xlJywgKCk9PiB7XG4gICAgICAgIGxldCBsYXN0VmFsdWUgPSB0aGlzLmFjdGl2ZURyb3Bkb3duO1xuICAgICAgICB0aGlzLmFjdGl2ZURyb3Bkb3duID0gIXRoaXMuYWN0aXZlRHJvcGRvd247XG4gICAgICAgIHRoaXMuYWN0aXZlRHJvcGRvd25DaGFuZ2VkKHRoaXMuYWN0aXZlRHJvcGRvd24sIGxhc3RWYWx1ZSk7XG4gICAgICB9KSxcbiAgICAgIGV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ2FpOm5hdmlnYXRlJywgKCk9PiB7XG4gICAgICAgIHRoaXMuYWN0aXZlRHJvcGRvd24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hY3RpdmVEcm9wZG93bkNoYW5nZWQodGhpcy5hY3RpdmVEcm9wZG93bik7XG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5hcHBiYXIpIHtcbiAgICAgIGxldCBwYXJlbnQgPSB0aGlzLmVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICAgIGlmIChwYXJlbnQuYXUgJiYgcGFyZW50LmF1LmNvbnRyb2xsZXIgJiYgcGFyZW50LmF1LmNvbnRyb2xsZXIudmlld01vZGVsKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC5hdS5jb250cm9sbGVyLnZpZXdNb2RlbDtcbiAgICAgICAgcGFyZW50Ll9faXNBcHBCYXIgJiYgKHRoaXMuYXBwYmFyID0gcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgd2hpbGUodGhpcy5zdWJzY3JpcHRpb25zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnBvcCgpLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmVEcm9wZG93bkNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5hcHBiYXIpIHtcbiAgICAgIHRoaXMuYXBwYmFyLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lzLWRyb3Bkb3duLWFjdGl2ZScpO1xuICAgIH1cbiAgfVxufVxuXG5cblxuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
