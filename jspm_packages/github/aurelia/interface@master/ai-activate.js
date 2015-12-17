/* */ 
define(['exports', 'aurelia-framework', './activator'], function (exports, _aureliaFramework, _activator) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ActivateRefAttribute = (function () {
    function ActivateRefAttribute(element, activator) {
      _classCallCheck(this, _ActivateRefAttribute);

      this.element = element;
      this.activator = activator;
    }

    _createClass(ActivateRefAttribute, [{
      key: 'valueChanged',
      value: function valueChanged(value) {
        if (value && this.element.au) {

          if (this.element.au.controller) {
            return this.activator.registerComponent(value, this.element.au.controller);
          }

          var instruction = undefined;

          for (var item in this.element.au) {
            var _item = this.element.au[item];
            if (!instruction) {
              instruction = _item.model;
              continue;
            }
            var _name = _item.model.constructor.name;
            if (_name) _name = _name[0].toLowerCase() + _name.slice(1);
            instruction[_name] = _item.model;
          }
          this.activator.registerComponent(value, instruction);
        }
      }
    }]);

    var _ActivateRefAttribute = ActivateRefAttribute;
    ActivateRefAttribute = (0, _aureliaFramework.inject)(Element, _activator.Activator)(ActivateRefAttribute) || ActivateRefAttribute;
    ActivateRefAttribute = (0, _aureliaFramework.customAttribute)('ai-activate-ref')(ActivateRefAttribute) || ActivateRefAttribute;
    return ActivateRefAttribute;
  })();

  exports.ActivateRefAttribute = ActivateRefAttribute;

  var ActivateAttribute = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ActivateAttribute, [{
      key: 'on',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'click';
      },
      enumerable: true
    }, {
      key: 'ref',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'trigger',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'toggle',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function ActivateAttribute(element, activator) {
      _classCallCheck(this, _ActivateAttribute);

      _defineDecoratedPropertyDescriptor(this, 'on', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'ref', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'trigger', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'toggle', _instanceInitializers);

      this.element = element;
      this.activator = activator;
      this.handler = this.handler.bind(this);
    }

    _createDecoratedClass(ActivateAttribute, [{
      key: 'attached',
      value: function attached() {
        if (this.on) {
          this.element.addEventListener(this.on, this.handler, true);
        }
      }
    }, {
      key: 'detached',
      value: function detached() {
        this.element.removeEventListener(this.on, this.handler, true);
      }
    }, {
      key: 'handler',
      value: function handler(event) {
        this.model = this.model || this.getModel();
        if (!this.model) return;
        this.trigger && this.triggerRef(event, this.trigger);
        this.toggle && this.toggleRef(event, this.toggle);
      }
    }, {
      key: 'refChanged',
      value: function refChanged(ref) {
        this.model = this.getModel(ref);
      }
    }, {
      key: 'getModel',
      value: function getModel(ref) {
        ref = ref || this.ref;
        return this.activator.isComponent(ref) ? this.activator.get(ref) : false;
      }
    }, {
      key: 'triggerRef',
      value: function triggerRef(event, trigger) {
        if (this.model[trigger]) {
          this.model[trigger](event);
        }
      }
    }, {
      key: 'toggleRef',
      value: function toggleRef(event, toggle) {
        if (toggle in this.model) {
          this.model[toggle] = !this.model[toggle];
        }
      }
    }], null, _instanceInitializers);

    var _ActivateAttribute = ActivateAttribute;
    ActivateAttribute = (0, _aureliaFramework.inject)(Element, _activator.Activator)(ActivateAttribute) || ActivateAttribute;
    ActivateAttribute = (0, _aureliaFramework.customAttribute)('ai-activate')(ActivateAttribute) || ActivateAttribute;
    return ActivateAttribute;
  })();

  exports.ActivateAttribute = ActivateAttribute;
});
//# sourceMappingURL=data:application/json;base64,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QUFBakIscUJBQWlCLEdBRDdCLHNCQXhDa0MsTUFBTSxFQXdDakMsT0FBTyxhQXZDUCxTQUFTLENBdUNVLENBQ2QsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQixxQkFBaUIsR0FGN0Isc0JBdkNPLGVBQWUsRUF1Q04sYUFBYSxDQUFDLENBRWxCLGlCQUFpQixLQUFqQixpQkFBaUI7V0FBakIsaUJBQWlCIiwiZmlsZSI6ImFpLWFjdGl2YXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBpbmplY3QsIGR5bmFtaWNPcHRpb25zfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0FjdGl2YXRvcn0gZnJvbSAnLi9hY3RpdmF0b3InO1xuXG5cbkBjdXN0b21BdHRyaWJ1dGUoJ2FpLWFjdGl2YXRlLXJlZicpXG5AaW5qZWN0KEVsZW1lbnQsIEFjdGl2YXRvcilcbmV4cG9ydCBjbGFzcyBBY3RpdmF0ZVJlZkF0dHJpYnV0ZSB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgYWN0aXZhdG9yKSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmFjdGl2YXRvciA9IGFjdGl2YXRvcjtcbiAgfVxuXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiB0aGlzLmVsZW1lbnQuYXUpIHtcblxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5hdS5jb250cm9sbGVyKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2YXRvci5yZWdpc3RlckNvbXBvbmVudCh2YWx1ZSwgdGhpcy5lbGVtZW50LmF1LmNvbnRyb2xsZXIpO1xuICAgICAgfVxuXG4gICAgICBsZXQgaW5zdHJ1Y3Rpb25cblxuICAgICAgZm9yKGxldCBpdGVtIGluIHRoaXMuZWxlbWVudC5hdSkge1xuICAgICAgICBsZXQgX2l0ZW0gPSB0aGlzLmVsZW1lbnQuYXVbaXRlbV07XG4gICAgICAgIGlmICghaW5zdHJ1Y3Rpb24pIHtcbiAgICAgICAgICBpbnN0cnVjdGlvbiA9IF9pdGVtLm1vZGVsO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBfbmFtZSA9IF9pdGVtLm1vZGVsLmNvbnN0cnVjdG9yLm5hbWU7XG4gICAgICAgIGlmIChfbmFtZSkgX25hbWUgPSBfbmFtZVswXS50b0xvd2VyQ2FzZSgpICsgX25hbWUuc2xpY2UoMSk7XG4gICAgICAgIGluc3RydWN0aW9uW19uYW1lXSA9IF9pdGVtLm1vZGVsO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3RpdmF0b3IucmVnaXN0ZXJDb21wb25lbnQodmFsdWUsIGluc3RydWN0aW9uKTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbkBjdXN0b21BdHRyaWJ1dGUoJ2FpLWFjdGl2YXRlJylcbkBpbmplY3QoRWxlbWVudCwgQWN0aXZhdG9yKVxuZXhwb3J0IGNsYXNzIEFjdGl2YXRlQXR0cmlidXRlIHtcblxuICBAYmluZGFibGUgb24gPSAnY2xpY2snO1xuICBAYmluZGFibGUgcmVmID0gbnVsbDtcbiAgQGJpbmRhYmxlIHRyaWdnZXIgPSBudWxsO1xuICBAYmluZGFibGUgdG9nZ2xlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBhY3RpdmF0b3IpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuYWN0aXZhdG9yID0gYWN0aXZhdG9yO1xuICAgIHRoaXMuaGFuZGxlciA9IHRoaXMuaGFuZGxlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMub24pIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMub24sIHRoaXMuaGFuZGxlciwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5vbiwgdGhpcy5oYW5kbGVyLCB0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZXIoZXZlbnQpIHtcbiAgICB0aGlzLm1vZGVsID0gdGhpcy5tb2RlbCB8fCB0aGlzLmdldE1vZGVsKCk7XG4gICAgaWYgKCF0aGlzLm1vZGVsKSByZXR1cm47XG4gICAgdGhpcy50cmlnZ2VyICYmIHRoaXMudHJpZ2dlclJlZihldmVudCwgdGhpcy50cmlnZ2VyKTtcbiAgICB0aGlzLnRvZ2dsZSAgJiYgdGhpcy50b2dnbGVSZWYoZXZlbnQsIHRoaXMudG9nZ2xlKTtcbiAgfVxuXG4gIHJlZkNoYW5nZWQocmVmKSB7XG4gICAgdGhpcy5tb2RlbCA9IHRoaXMuZ2V0TW9kZWwocmVmKTtcbiAgfVxuXG4gIGdldE1vZGVsKHJlZikge1xuICAgIHJlZiA9IHJlZiB8fCB0aGlzLnJlZjtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmF0b3IuaXNDb21wb25lbnQocmVmKSA/IHRoaXMuYWN0aXZhdG9yLmdldChyZWYpIDogZmFsc2U7XG4gIH1cblxuICB0cmlnZ2VyUmVmKGV2ZW50LCB0cmlnZ2VyKSB7XG4gICAgaWYgKHRoaXMubW9kZWxbdHJpZ2dlcl0pIHtcbiAgICAgIHRoaXMubW9kZWxbdHJpZ2dlcl0oZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHRvZ2dsZVJlZihldmVudCwgdG9nZ2xlKSB7XG4gICAgaWYgKHRvZ2dsZSBpbiB0aGlzLm1vZGVsKSB7XG4gICAgICB0aGlzLm1vZGVsW3RvZ2dsZV0gPSAhdGhpcy5tb2RlbFt0b2dnbGVdO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
