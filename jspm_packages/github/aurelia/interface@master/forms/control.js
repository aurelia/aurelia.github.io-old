/* */ 
define(['exports', 'aurelia-framework', '../util/string'], function (exports, _aureliaFramework, _utilString) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var TextInputControl = (function () {
    function TextInputControl(context, control) {
      _classCallCheck(this, TextInputControl);

      this.context = context;
      this.control = control;
      this.input = this.context.inputElement || this.context.textarea;
      this.element = this.context.element;

      this.onFocus = this.onFocus.bind(this);
      this.onBlur = this.onBlur.bind(this);
    }

    _createClass(TextInputControl, [{
      key: 'nameChanged',
      value: function nameChanged(name) {
        this.name = name;
        this.context.name = name;
      }
    }, {
      key: 'labelChanged',
      value: function labelChanged(label) {
        this.label = label;
        if (label.hasAttribute('float')) {
          this.isFloating = true;
        } else if (label.hasAttribute('inline')) {} else if (label.hasAttribute('placeholder')) {
          label.style.display = 'none';
          this.context.placeholder = (label.innerText || label.innerHTML).trim();
        }
      }
    }, {
      key: 'attached',
      value: function attached(name, label) {}
    }, {
      key: 'onFocus',
      value: function onFocus(event) {
        this.control.element.classList.add('is-focused');
      }
    }, {
      key: 'onBlur',
      value: function onBlur() {
        this.control.element.classList.remove('is-focused');
      }
    }]);

    return TextInputControl;
  })();

  var BaseCheckedControl = (function () {
    function BaseCheckedControl(context, control) {
      _classCallCheck(this, BaseCheckedControl);

      this.context = context;
      this.context.autoLabel = true;
      this.control = control;
      this.element = context.element;
      this.name = this.control.name;
    }

    _createClass(BaseCheckedControl, [{
      key: 'nameChanged',
      value: function nameChanged(name) {
        this.name = name;
        this.context.name = name;
      }
    }, {
      key: 'labelChanged',
      value: function labelChanged(label) {
        if (typeof label === 'string') {
          this.context.label = label;
        } else if (label instanceof Element) {
          if (!label.hasAttribute('for')) {
            label.setAttribute('for', this.element.id || this.name);
          }
        }
      }
    }]);

    return BaseCheckedControl;
  })();

  var SwitchControl = (function (_BaseCheckedControl) {
    _inherits(SwitchControl, _BaseCheckedControl);

    function SwitchControl() {
      _classCallCheck(this, SwitchControl);

      _get(Object.getPrototypeOf(SwitchControl.prototype), 'constructor', this).apply(this, arguments);
    }

    return SwitchControl;
  })(BaseCheckedControl);

  var CheckboxControl = (function (_BaseCheckedControl2) {
    _inherits(CheckboxControl, _BaseCheckedControl2);

    function CheckboxControl() {
      _classCallCheck(this, CheckboxControl);

      _get(Object.getPrototypeOf(CheckboxControl.prototype), 'constructor', this).apply(this, arguments);
    }

    return CheckboxControl;
  })(BaseCheckedControl);

  var ControlComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ControlComponent, [{
      key: 'labelElement',
      decorators: [(0, _aureliaFramework.child)('label')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'aicon',
      decorators: [(0, _aureliaFramework.child)('.ai-icon')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'label',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function ControlComponent(element) {
      _classCallCheck(this, _ControlComponent);

      _defineDecoratedPropertyDescriptor(this, 'labelElement', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'aicon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'label', _instanceInitializers);

      this.isControl = true;
      this.eventListeners = [];

      this.element = element;
    }

    _createDecoratedClass(ControlComponent, [{
      key: 'unbind',
      value: function unbind() {
        this.eventListeners.forEach(function (cb) {
          return cb();
        });
      }
    }, {
      key: 'TextInput',
      value: function TextInput(context) {
        this.element.classList.add('ai-input-control');
        this.control = new TextInputControl(context, this);
        return this.control;
      }
    }, {
      key: 'Checkbox',
      value: function Checkbox(context) {
        this.element.classList.add('ai-checkbox-control');
        this.control = new CheckboxControl(context, this);
        this.nameChanged(this.name);
        this.labelChanged(this.label);
        return this.control;
      }
    }, {
      key: 'Switch',
      value: function Switch(context) {
        this.element.classList.add('ai-switch-control');
        this.control = new SwitchControl(context, this);
        this.nameChanged(this.name);
        this.labelChanged(this.label);
        return this.control;
      }
    }, {
      key: 'attached',
      value: function attached() {
        if (!this.name && this.label) {
          if (this.label instanceof Element) {
            this.name = (0, _utilString.camelCase)((this.label.innerText || this.label.innerHTML).trim());
          } else {
            this.name = (0, _utilString.camelCase)(this.label);
          }
        }
      }
    }, {
      key: 'nameChanged',
      value: function nameChanged(name, lastName) {
        if (this.control) {
          this.control.nameChanged(name, lastName);
        }
      }
    }, {
      key: 'labelChanged',
      value: function labelChanged(label, lastLabel) {
        if (this.control) {
          this.control.labelChanged(label, lastLabel);
        }
      }
    }, {
      key: 'labelElementChanged',
      value: function labelElementChanged() {
        this.label = this.labelElement;
      }
    }, {
      key: 'aiconChanged',
      value: function aiconChanged(value) {
        this.element.classList[this.aicon ? 'add' : 'remove']('has-icon');
      }
    }], null, _instanceInitializers);

    var _ControlComponent = ControlComponent;
    ControlComponent = (0, _aureliaFramework.inject)(Element)(ControlComponent) || ControlComponent;
    ControlComponent = (0, _aureliaFramework.customElement)('ai-control')(ControlComponent) || ControlComponent;
    return ControlComponent;
  })();

  exports.ControlComponent = ControlComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL2NvbnRyb2wuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQUVNLGdCQUFnQjtBQUVULGFBRlAsZ0JBQWdCLENBRVIsT0FBTyxFQUFFLE9BQU8sRUFBRTs0QkFGMUIsZ0JBQWdCOztBQUdsQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ2hFLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7O0FBRXBDLFVBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdkMsVUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qzs7aUJBVkcsZ0JBQWdCOzthQVlULHFCQUFDLElBQUksRUFBRTtBQUNoQixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixZQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7T0FDMUI7OzthQUVXLHNCQUFDLEtBQUssRUFBRTtBQUNsQixZQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixZQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUU7QUFDL0IsY0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7U0FDeEIsTUFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFFdEMsTUFDSSxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLEVBQUU7QUFDMUMsZUFBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQzdCLGNBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLENBQUMsS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFBLENBQUUsSUFBSSxFQUFFLENBQUM7U0FDeEU7T0FDRjs7O2FBRU8sa0JBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUNyQjs7O2FBRU0saUJBQUMsS0FBSyxFQUFFO0FBQ2IsWUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztPQUNsRDs7O2FBRUssa0JBQUc7QUFDUCxZQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO09BQ3JEOzs7V0F4Q0csZ0JBQWdCOzs7TUEyQ2hCLGtCQUFrQjtBQUNYLGFBRFAsa0JBQWtCLENBQ1YsT0FBTyxFQUFFLE9BQU8sRUFBRTs0QkFEMUIsa0JBQWtCOztBQUVwQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7QUFDOUIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO0FBQy9CLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7S0FDL0I7O2lCQVBHLGtCQUFrQjs7YUFTWCxxQkFBQyxJQUFJLEVBQUU7QUFDaEIsWUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO09BQzFCOzs7YUFFVyxzQkFBQyxLQUFLLEVBQUU7QUFDbEIsWUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDN0IsY0FBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQzVCLE1BQ0ksSUFBSSxLQUFLLFlBQVksT0FBTyxFQUFFO0FBQ2pDLGNBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzlCLGlCQUFLLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDekQ7U0FDRjtPQUNGOzs7V0F2Qkcsa0JBQWtCOzs7TUEwQmxCLGFBQWE7Y0FBYixhQUFhOzthQUFiLGFBQWE7NEJBQWIsYUFBYTs7aUNBQWIsYUFBYTs7O1dBQWIsYUFBYTtLQUFTLGtCQUFrQjs7TUFDeEMsZUFBZTtjQUFmLGVBQWU7O2FBQWYsZUFBZTs0QkFBZixlQUFlOztpQ0FBZixlQUFlOzs7V0FBZixlQUFlO0tBQVMsa0JBQWtCOztNQUluQyxnQkFBZ0I7Ozs7MEJBQWhCLGdCQUFnQjs7bUJBQzFCLHNCQTdFK0MsS0FBSyxFQTZFOUMsT0FBTyxDQUFDOztlQUFnQixJQUFJOzs7OzttQkFDbEMsc0JBOUUrQyxLQUFLLEVBOEU5QyxVQUFVLENBQUM7O2VBQVMsSUFBSTs7Ozs7cUNBOUVELFFBQVE7O2VBK0VyQixJQUFJOzs7OztxQ0EvRVMsUUFBUTs7ZUFnRnBCLElBQUk7Ozs7O0FBS1gsYUFUQSxnQkFBZ0IsQ0FTZixPQUFPLEVBQUU7Ozs7Ozs7Ozs7O1dBSHJCLFNBQVMsR0FBRyxJQUFJO1dBRWhCLGNBQWMsR0FBRyxFQUFFOztBQUVqQixVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBWFUsZ0JBQWdCOzthQWFyQixrQkFBRztBQUNQLFlBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRTtpQkFBSSxFQUFFLEVBQUU7U0FBQSxDQUFDLENBQUM7T0FDekM7OzthQUVRLG1CQUFDLE9BQU8sRUFBRTtBQUNqQixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUMvQyxZQUFJLENBQUMsT0FBTyxHQUFHLElBQUksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ25ELGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztPQUNyQjs7O2FBRU8sa0JBQUMsT0FBTyxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQ2xELFlBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxlQUFlLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xELFlBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzVCLFlBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztPQUNyQjs7O2FBRUssZ0JBQUMsT0FBTyxFQUFFO0FBQ2QsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDaEQsWUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGFBQWEsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsWUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDNUIsWUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUIsZUFBTyxJQUFJLENBQUMsT0FBTyxDQUFDO09BQ3JCOzs7YUFFTyxvQkFBRztBQUNULFlBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7QUFDNUIsY0FBSSxJQUFJLENBQUMsS0FBSyxZQUFZLE9BQU8sRUFBRTtBQUNqQyxnQkFBSSxDQUFDLElBQUksR0FBRyxnQkFySFosU0FBUyxFQXFIYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFBLENBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztXQUM5RSxNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxJQUFJLEdBQUcsZ0JBdkhaLFNBQVMsRUF1SGEsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ25DO1NBQ0Y7T0FDRjs7O2FBRVUscUJBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTtBQUMxQixZQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDaEIsY0FBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQzFDO09BQ0Y7OzthQUVXLHNCQUFDLEtBQUssRUFBRSxTQUFTLEVBQUU7QUFDN0IsWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLGNBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztTQUM3QztPQUNGOzs7YUFFa0IsK0JBQUc7QUFDcEIsWUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO09BQ2hDOzs7YUFFVyxzQkFBQyxLQUFLLEVBQUU7QUFDbEIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7T0FDbkU7Ozs0QkFuRVUsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUQ1QixzQkEzRXlDLE1BQU0sRUEyRXhDLE9BQU8sQ0FBQyxDQUNILGdCQUFnQixLQUFoQixnQkFBZ0I7QUFBaEIsb0JBQWdCLEdBRjVCLHNCQTFFZ0IsYUFBYSxFQTBFZixZQUFZLENBQUMsQ0FFZixnQkFBZ0IsS0FBaEIsZ0JBQWdCO1dBQWhCLGdCQUFnQiIsImZpbGUiOiJmb3Jtcy9jb250cm9sLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBjaGlsZH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtjYW1lbENhc2V9IGZyb20gJy4uL3V0aWwvc3RyaW5nJztcbmNsYXNzIFRleHRJbnB1dENvbnRyb2wge1xuXG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIGNvbnRyb2wpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XG4gICAgdGhpcy5pbnB1dCA9IHRoaXMuY29udGV4dC5pbnB1dEVsZW1lbnQgfHwgdGhpcy5jb250ZXh0LnRleHRhcmVhO1xuICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuY29udGV4dC5lbGVtZW50O1xuXG4gICAgdGhpcy5vbkZvY3VzID0gdGhpcy5vbkZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbkJsdXIgPSB0aGlzLm9uQmx1ci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgbmFtZUNoYW5nZWQobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5jb250ZXh0Lm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgbGFiZWxDaGFuZ2VkKGxhYmVsKSB7XG4gICAgdGhpcy5sYWJlbCA9IGxhYmVsO1xuICAgIGlmIChsYWJlbC5oYXNBdHRyaWJ1dGUoJ2Zsb2F0JykpIHtcbiAgICAgIHRoaXMuaXNGbG9hdGluZyA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhYmVsLmhhc0F0dHJpYnV0ZSgnaW5saW5lJykpIHtcblxuICAgIH1cbiAgICBlbHNlIGlmIChsYWJlbC5oYXNBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJykpIHtcbiAgICAgIGxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLmNvbnRleHQucGxhY2Vob2xkZXIgPSAobGFiZWwuaW5uZXJUZXh0IHx8IGxhYmVsLmlubmVySFRNTCkudHJpbSgpO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaGVkKG5hbWUsIGxhYmVsKSB7XG4gIH1cblxuICBvbkZvY3VzKGV2ZW50KSB7XG4gICAgdGhpcy5jb250cm9sLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaXMtZm9jdXNlZCcpO1xuICB9XG5cbiAgb25CbHVyKCkge1xuICAgIHRoaXMuY29udHJvbC5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWZvY3VzZWQnKTtcbiAgfVxufVxuXG5jbGFzcyBCYXNlQ2hlY2tlZENvbnRyb2wge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBjb250cm9sKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmNvbnRleHQuYXV0b0xhYmVsID0gdHJ1ZTtcbiAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xuICAgIHRoaXMuZWxlbWVudCA9IGNvbnRleHQuZWxlbWVudDtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLmNvbnRyb2wubmFtZTtcbiAgfVxuXG4gIG5hbWVDaGFuZ2VkKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuY29udGV4dC5uYW1lID0gbmFtZTtcbiAgfVxuXG4gIGxhYmVsQ2hhbmdlZChsYWJlbCkge1xuICAgIGlmICh0eXBlb2YgbGFiZWwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLmNvbnRleHQubGFiZWwgPSBsYWJlbDtcbiAgICB9XG4gICAgZWxzZSBpZiAobGFiZWwgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgICBpZiAoIWxhYmVsLmhhc0F0dHJpYnV0ZSgnZm9yJykpIHtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCB0aGlzLmVsZW1lbnQuaWQgfHwgdGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgU3dpdGNoQ29udHJvbCBleHRlbmRzIEJhc2VDaGVja2VkQ29udHJvbCB7fVxuY2xhc3MgQ2hlY2tib3hDb250cm9sIGV4dGVuZHMgQmFzZUNoZWNrZWRDb250cm9sIHt9XG5cbkBjdXN0b21FbGVtZW50KCdhaS1jb250cm9sJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBDb250cm9sQ29tcG9uZW50IHtcbiAgQGNoaWxkKCdsYWJlbCcpIGxhYmVsRWxlbWVudCA9IG51bGw7XG4gIEBjaGlsZCgnLmFpLWljb24nKSBhaWNvbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBuYW1lID0gbnVsbDtcbiAgQGJpbmRhYmxlIGxhYmVsID0gbnVsbDtcblxuICBpc0NvbnRyb2wgPSB0cnVlO1xuXG4gIGV2ZW50TGlzdGVuZXJzID0gW107XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiBjYigpKTtcbiAgfVxuXG4gIFRleHRJbnB1dChjb250ZXh0KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FpLWlucHV0LWNvbnRyb2wnKTtcbiAgICB0aGlzLmNvbnRyb2wgPSBuZXcgVGV4dElucHV0Q29udHJvbChjb250ZXh0LCB0aGlzKTtcbiAgICByZXR1cm4gdGhpcy5jb250cm9sO1xuICB9XG5cbiAgQ2hlY2tib3goY29udGV4dCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhaS1jaGVja2JveC1jb250cm9sJyk7XG4gICAgdGhpcy5jb250cm9sID0gbmV3IENoZWNrYm94Q29udHJvbChjb250ZXh0LCB0aGlzKTtcbiAgICB0aGlzLm5hbWVDaGFuZ2VkKHRoaXMubmFtZSk7XG4gICAgdGhpcy5sYWJlbENoYW5nZWQodGhpcy5sYWJlbCk7XG4gICAgcmV0dXJuIHRoaXMuY29udHJvbDtcbiAgfVxuXG4gIFN3aXRjaChjb250ZXh0KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FpLXN3aXRjaC1jb250cm9sJyk7XG4gICAgdGhpcy5jb250cm9sID0gbmV3IFN3aXRjaENvbnRyb2woY29udGV4dCwgdGhpcyk7XG4gICAgdGhpcy5uYW1lQ2hhbmdlZCh0aGlzLm5hbWUpO1xuICAgIHRoaXMubGFiZWxDaGFuZ2VkKHRoaXMubGFiZWwpO1xuICAgIHJldHVybiB0aGlzLmNvbnRyb2w7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAoIXRoaXMubmFtZSAmJiB0aGlzLmxhYmVsKSB7XG4gICAgICBpZiAodGhpcy5sYWJlbCBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gY2FtZWxDYXNlKCh0aGlzLmxhYmVsLmlubmVyVGV4dCB8fCB0aGlzLmxhYmVsLmlubmVySFRNTCkudHJpbSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubmFtZSA9IGNhbWVsQ2FzZSh0aGlzLmxhYmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuYW1lQ2hhbmdlZChuYW1lLCBsYXN0TmFtZSkge1xuICAgIGlmICh0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMuY29udHJvbC5uYW1lQ2hhbmdlZChuYW1lLCBsYXN0TmFtZSk7XG4gICAgfVxuICB9XG5cbiAgbGFiZWxDaGFuZ2VkKGxhYmVsLCBsYXN0TGFiZWwpIHtcbiAgICBpZiAodGhpcy5jb250cm9sKSB7XG4gICAgICB0aGlzLmNvbnRyb2wubGFiZWxDaGFuZ2VkKGxhYmVsLCBsYXN0TGFiZWwpO1xuICAgIH1cbiAgfVxuXG4gIGxhYmVsRWxlbWVudENoYW5nZWQoKSB7XG4gICAgdGhpcy5sYWJlbCA9IHRoaXMubGFiZWxFbGVtZW50O1xuICB9XG5cbiAgYWljb25DaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt0aGlzLmFpY29uID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2hhcy1pY29uJyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
