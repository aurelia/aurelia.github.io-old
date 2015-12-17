/* */ 
define(['exports', 'aurelia-framework', './form', './channel', 'lodash'], function (exports, _aureliaFramework, _form, _channel, _lodash) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-select';
  var SPACE = 'SPACE';
  var ENTER = 'ENTER';
  var UP_ARROW = 'UP_ARROW';
  var DOWN_ARROW = 'DOWN_ARROW';
  var SHADOW_DEPTH = '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)';
  var KEY_BINDINGS = {
    32: SPACE,
    13: ENTER,
    38: UP_ARROW,
    40: DOWN_ARROW
  };

  function isKey(data, KEY) {
    return KEY_BINDINGS[data.keyCode] === KEY;
  }

  var SelectElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(SelectElement, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return { text: 'select' };
      },
      enumerable: true
    }, {
      key: 'default',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'options',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }, {
      key: 'groups',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }, {
      key: 'open',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'searchValue',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'enableSearch',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return undefined;
      },
      enumerable: true
    }, {
      key: 'max',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 6;
      },
      enumerable: true
    }, {
      key: 'labels',
      decorators: [(0, _aureliaFramework.children)('label')],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }], null, _instanceInitializers);

    function SelectElement(element, form, interfaceChannel) {
      _classCallCheck(this, _SelectElement);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'default', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'groups', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'open', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'searchValue', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'enableSearch', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'max', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'labels', _instanceInitializers);

      this.itemHeight = 48;

      element.className += ' ' + className;
      element.tabIndex = '0';
      this.element = element;
      this.form = form;
      this.interfaceChannel = interfaceChannel;
    }

    _createDecoratedClass(SelectElement, [{
      key: 'attached',
      value: function attached() {
        var self = this;
        this.targetId = this.element.getAttribute('au-target-id');
        this.enableSearch = this.enableSearch || this.element.hasAttribute('enable-search');

        if (this.labelElement) {
          this.headerContainer.appendChild(this.labelElement);
        }

        this.createTimeline(this.optionsElement, this.headerContainer, this.labelElement);

        this.parseOptions();
        this.createEventListeners();
        if (this.enableSearch) {
          this.enableSearchableControls();
        }
      }
    }, {
      key: 'detached',
      value: function detached() {
        document.removeEventListener('click', this.documentClick.bind(this), true);
        this.element.removeEventListener('focus', this.elementFocus.bind(this), true);
        this.optionsElement.removeEventListener('keydown', this.optionKeydown.bind(this), true);
        this.element.removeEventListener('focus', this.elementFocus);

        if (this.enableSearch) {
          this.searchElement.removeEventListener('keydown', this.searchKeyDown);
        }
      }
    }, {
      key: 'createTimeline',
      value: function createTimeline(options, header, label) {
        this.timeline = this.timeline || new TimelineMax({ paused: true });
        var currentIcon = window.getComputedStyle(this.searchIcon.iel, ':before').getPropertyValue('content');
        this.timeline.to(options, 0.2, {
          height: this.max * this.itemHeight + 'px',
          boxShadow: SHADOW_DEPTH
        }).to(header, 0.2, {
          boxShadow: SHADOW_DEPTH
        }, 0).to(this.searchIcon.iel, 0.4, {
          rotation: '360deg'
        }, 0).to(this.searchIcon.element, 0.1, {
          className: '-=ai-' + currentIcon
        }, 0.2).to(this.searchIcon.element, 0.1, {
          className: '+=ai-search'
        }, 0.2);
      }
    }, {
      key: 'openChanged',
      value: function openChanged(value) {
        var height;
        this.element.classList[value ? 'add' : 'remove']('is-active');
        this.interfaceChannel.publish(value ? 'stop-window-scroll' : 'enable-window-scroll', {});

        if (value) {
          this.enableSearch && this.focusSearch();
        }

        this.labelElement && this.floatLabel(value);
        this.timeline[value ? 'play' : 'reverse']();
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(option, oldOption) {
        this.value = option.model.value;
        this.form.setValue(this.name, this.value);
      }
    }, {
      key: 'focusSearch',
      value: function focusSearch() {
        this.searchElement.focus();
      }
    }, {
      key: 'floatLabel',
      value: function floatLabel(value) {
        if (value) {
          if (this.isLabelFloating) return;
          this.isLabelFloating = true;
          TweenMax.to(this.labelElement, 0.2, {
            scale: 0.8,
            y: '-80%',
            x: '-56px'
          });
        } else if (!this.active.model) {
          if (!this.isLabelFloating) return;
          this.isLabelFloating = false;
          TweenMax.to(this.labelElement, 0.2, {
            scale: 1,
            y: '0%',
            x: '0px'
          });
        }
      }
    }, {
      key: 'selectOption',
      value: function selectOption(option) {
        var event = new Event('change');
        this.active = option;
        this.searchValue = '';
        this.element.dispatchEvent(event);
        this.open = false;
      }
    }, {
      key: 'enableSearchableControls',
      value: function enableSearchableControls() {
        this.searchKeyDown = searchKeyDown;
        this.searchElement.addEventListener('keydown', this.searchKeyDown.bind(this), false);

        function searchKeyDown(event) {
          var isDown = isKey(event, DOWN_ARROW);
          var isUp = isKey(event, UP_ARROW);
          if (!isDown && !isUp) return;
          event.preventDefault();

          isDown && this.optionsElement.firstElementChild.focus();
          isUp && this.optionsElement.lastElementChild.focus();
        }
      }
    }, {
      key: 'createEventListeners',
      value: function createEventListeners() {
        this.elementFocus = elementFocus;
        this.documentClick = documentClick;
        this.optionKeydown = optionKeydown;
        this.element.addEventListener('focus', this.elementFocus.bind(this), true);
        document.addEventListener('click', this.documentClick.bind(this), true);
        this.optionsElement.addEventListener('keydown', this.optionKeydown.bind(this), true);

        function elementFocus(event) {
          if (!this.element.contains(event.target)) return;
          if (!this.open) {
            this.handleFocus();
            this.open = true;
          }
        }

        function documentClick(event) {
          if (!this.element.contains(event.target)) this.open = false;
        }
        function optionKeydown(event) {
          if (!this.optionsElement.contains(event.target)) return;

          var isDown = isKey(event, DOWN_ARROW);
          var isUp = isKey(event, UP_ARROW);

          if (!isUp && !isDown) return;

          event.preventDefault();
          if (isDown && event.target.nextElementSibling) {
            return event.target.nextElementSibling.focus();
          }
          if (isUp && event.target.previousElementSibling) {
            return event.target.previousElementSibling.focus();
          }
          this.focusSearch();
        }
      }
    }, {
      key: 'handleFocus',
      value: function handleFocus() {
        var _this = this;

        var element = this.element;
        this.interfaceChannel.publish('scroll-to', {
          element: this.element,
          onComplete: function onComplete() {
            if (_this.enableSearch) {
              _this.focusSearch();
            } else {
              _this.optionsElement.children[0].focus();
            }
          } });
      }
    }, {
      key: 'parseOptions',
      value: function parseOptions() {
        var groups = this.contentContainer.querySelectorAll('optgroup');
        if (groups.length) {
          this.groups = this.parseGroupElements(groups);
        } else {
          this.options = this.parseOptionElements(this.contentContainer.querySelectorAll('option'));
        }
      }
    }, {
      key: 'parseGroupElements',
      value: function parseGroupElements(groups) {
        var _groups = arguments.length <= 1 || arguments[1] === undefined ? [] : arguments[1];

        for (var index in groups) {
          var element = undefined;
          if (element = groups.item(index)) {
            var model = element.au ? element.au.controller.model : element.primaryBehavior ? element.primaryBehavior.bindingContext : {};
            var options = element.querySelectorAll('option');
            _groups.push(new SelectGroup(element, model, options, this));
          }
        }
        return _groups;
      }
    }, {
      key: 'parseOptionElements',
      value: function parseOptionElements(options, group) {
        var _options = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

        for (var index in options) {
          var element = undefined;
          if (element = options.item(index)) {
            var model = element.au ? element.au.controller.model : element.primaryBehavior ? element.primaryBehavior.bindingContext : {};
            _options.push(new SelectOption(element, model, group, this));
          }
        }
        return _options;
      }
    }, {
      key: 'labelElement',
      get: function get() {
        return this.labels[0];
      }
    }], null, _instanceInitializers);

    var _SelectElement = SelectElement;
    SelectElement = (0, _aureliaFramework.inject)(Element, _form.FormComponent, _channel.InterfaceChannel)(SelectElement) || SelectElement;
    SelectElement = (0, _aureliaFramework.customElement)('ai-select')(SelectElement) || SelectElement;
    return SelectElement;
  })();

  exports.SelectElement = SelectElement;

  var SelectGroup = function SelectGroup(element, model, options, select) {
    _classCallCheck(this, SelectGroup);

    model.label = model.lable || element.getAttribute('label');

    this.element = element;
    this.model = model;
    this.options = select.parseOptionElements(options, this);
    this.select = select;
  };

  var SelectOption = (function () {
    function SelectOption(element, model, group, select) {
      _classCallCheck(this, SelectOption);

      model.text = model.text || (element.innerText || element.innerHTML).trim();
      model.value = model.value || element.getAttribute('value') || model.text;
      model.text = model.text || model.value;

      this.active = model.active || element.hasAttribute('active');
      this['default'] = element.hasAttribute('default');
      this.element = element;
      this.model = model;
      this.group = group;
      this.select = select;

      if (this.isDefault || this.value === select['default']) {
        select['default'] = this;
      }
      if (this.active || this.value === select.value) {
        select.active = this;
      }
    }

    _createClass(SelectOption, [{
      key: 'click',
      value: function click($event) {
        this.select.selectOption(this);
      }
    }, {
      key: 'keydown',
      value: function keydown($event) {}
    }]);

    return SelectOption;
  })();

  var SearchFilterValueConverter = (function () {
    function SearchFilterValueConverter() {
      _classCallCheck(this, SearchFilterValueConverter);
    }

    _createClass(SearchFilterValueConverter, [{
      key: 'toView',
      value: function toView(options, value) {
        if (!value) return options;
        var regexp = new RegExp(value);
        return options.filter(function (o) {
          if (!o || !o.model.text) return false;
          return regexp.test(o.model.text) || regexp.test(o.model.value);
        });
      }
    }]);

    return SearchFilterValueConverter;
  })();

  exports.SearchFilterValueConverter = SearchFilterValueConverter;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm1zL3NlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFNQSxNQUFNLFNBQVMsR0FBRyxXQUFXLENBQUM7QUFDOUIsTUFBTSxLQUFLLEdBQVEsT0FBTyxDQUFDO0FBQzNCLE1BQU0sS0FBSyxHQUFRLE9BQU8sQ0FBQztBQUMzQixNQUFNLFFBQVEsR0FBSyxVQUFVLENBQUM7QUFDOUIsTUFBTSxVQUFVLEdBQUcsWUFBWSxDQUFDO0FBQ2hDLE1BQU0sWUFBWSxHQUFHLDJHQUEyRyxDQUFDO0FBQ2pJLE1BQUksWUFBWSxHQUFHO0FBQ2hCLE1BQUUsRUFBRyxLQUFLO0FBQ1YsTUFBRSxFQUFHLEtBQUs7QUFDVixNQUFFLEVBQUcsUUFBUTtBQUNiLE1BQUUsRUFBRyxVQUFVO0dBQ2pCLENBQUM7O0FBRUYsV0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUN4QixXQUFPLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDO0dBQzNDOztNQUtZLGFBQWE7Ozs7MEJBQWIsYUFBYTs7cUNBMUJWLFFBQVE7O2VBMkJILEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBQzs7Ozs7cUNBM0JyQixRQUFROztlQTRCRixJQUFJOzs7OztxQ0E1QlYsUUFBUTs7ZUE2QkosSUFBSTs7Ozs7cUNBN0JSLFFBQVE7O2VBOEJGLEVBQUU7Ozs7O3FDQTlCUixRQUFROztlQStCSCxFQUFFOzs7OztxQ0EvQlAsUUFBUTs7ZUFnQ0wsSUFBSTs7Ozs7cUNBaENQLFFBQVE7O2VBaUNFLElBQUk7Ozs7O3FDQWpDZCxRQUFROztlQWtDRyxTQUFTOzs7OztxQ0FsQ3BCLFFBQVE7O2VBbUNOLENBQUM7Ozs7O21CQUVoQixzQkFyQ3NDLFFBQVEsRUFxQ3JDLE9BQU8sQ0FBQzs7ZUFBVSxFQUFFOzs7OztBQUluQixhQWZBLGFBQWEsQ0FlWixPQUFPLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztXQUY3QyxVQUFVLEdBQUcsRUFBRTs7QUFHYixhQUFPLENBQUMsU0FBUyxVQUFRLFNBQVMsQUFBRSxDQUFDO0FBQ3JDLGFBQU8sQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLFVBQUksQ0FBQyxnQkFBZ0IsR0FBRyxnQkFBZ0IsQ0FBQztLQUUxQzs7MEJBdEJVLGFBQWE7O2FBNEJoQixvQkFBRztBQUNULFlBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixZQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzFELFlBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQzs7QUFFcEYsWUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO0FBQ3JCLGNBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUNyRDs7QUFFRCxZQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBR2xGLFlBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztBQUNwQixZQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztBQUM1QixZQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7QUFDckIsY0FBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7U0FDakM7T0FDRjs7O2FBRU8sb0JBQUc7QUFDVCxnQkFBUSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMzRSxZQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUM5RSxZQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN4RixZQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRTdELFlBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNyQixjQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDdkU7T0FDRjs7O2FBRWEsd0JBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7QUFDckMsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksV0FBVyxDQUFDLEVBQUMsTUFBTSxFQUFDLElBQUksRUFBQyxDQUFDLENBQUE7QUFDL0QsWUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ3RHLFlBQUksQ0FBQyxRQUFRLENBQ1YsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7QUFDaEIsZ0JBQU0sRUFBRyxBQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBSSxJQUFJLEFBQUM7QUFDN0MsbUJBQVMsRUFBRSxZQUFZO1NBQ3hCLENBQUMsQ0FDRCxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRTtBQUNmLG1CQUFTLEVBQUUsWUFBWTtTQUN4QixFQUFFLENBQUMsQ0FBQyxDQUNKLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDNUIsa0JBQVEsRUFBRSxRQUFRO1NBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQ0osRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtBQUNoQyxtQkFBUyxZQUFVLFdBQVcsQUFBRTtTQUNqQyxFQUFFLEdBQUcsQ0FBQyxDQUNOLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7QUFDaEMsbUJBQVMsRUFBRSxhQUFhO1NBQ3pCLEVBQUUsR0FBRyxDQUFDLENBQUE7T0FFVjs7O2FBRVUscUJBQUMsS0FBSyxFQUFFO0FBQ2pCLFlBQUksTUFBTSxDQUFDO0FBQ1gsWUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEtBQUssR0FBRyxRQUFRLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUM5RCxZQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEtBQUssR0FBRyxvQkFBb0IsR0FBRyxzQkFBc0IsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFFekYsWUFBSSxLQUFLLEVBQUU7QUFBQyxjQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtTQUFDOztBQUVwRCxZQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDNUMsWUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsTUFBTSxHQUFHLFNBQVMsQ0FBQyxFQUFFLENBQUM7T0FFN0M7OzthQUVZLHVCQUFDLE1BQU0sRUFBRSxTQUFTLEVBQUU7QUFDL0IsWUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUNoQyxZQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUMzQzs7O2FBRVUsdUJBQUc7QUFDWixZQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO09BQzVCOzs7YUFFUyxvQkFBQyxLQUFLLEVBQUU7QUFDaEIsWUFBSSxLQUFLLEVBQUU7QUFDVCxjQUFJLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTztBQUNqQyxjQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztBQUM1QixrQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtBQUNsQyxpQkFBSyxFQUFFLEdBQUc7QUFDVixhQUFDLEVBQUUsTUFBTTtBQUNULGFBQUMsRUFBRSxPQUFPO1dBQ1gsQ0FBQyxDQUFDO1NBQ0osTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDN0IsY0FBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsT0FBTztBQUNsQyxjQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztBQUM3QixrQkFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLEdBQUcsRUFBRTtBQUNsQyxpQkFBSyxFQUFFLENBQUM7QUFDUixhQUFDLEVBQUUsSUFBSTtBQUNQLGFBQUMsRUFBRSxLQUFLO1dBQ1QsQ0FBQyxDQUFDO1NBQ0o7T0FDRjs7O2FBRVcsc0JBQUMsTUFBTSxFQUFFO0FBQ25CLFlBQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2hDLFlBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0FBQ3JCLFlBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLFlBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ2xDLFlBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO09BQ25COzs7YUFPdUIsb0NBQUc7QUFDekIsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsWUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7O0FBRXJGLGlCQUFTLGFBQWEsQ0FBQyxLQUFLLEVBQUU7QUFDNUIsY0FBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN0QyxjQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLGNBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTztBQUM3QixlQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7O0FBRXZCLGdCQUFNLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUN4RCxjQUFJLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0RDtPQUNGOzs7YUFTbUIsZ0NBQUc7QUFDckIsWUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7QUFDakMsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsWUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7QUFDbkMsWUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDM0UsZ0JBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDeEUsWUFBSSxDQUFDLGNBQWMsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7O0FBRXJGLGlCQUFTLFlBQVksQ0FBQyxLQUFLLEVBQUM7QUFDMUIsY0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxPQUFPO0FBQ2pELGNBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ2QsZ0JBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNuQixnQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7V0FDbEI7U0FDRjs7QUFFRCxpQkFBUyxhQUFhLENBQUMsS0FBSyxFQUFDO0FBQzNCLGNBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7U0FDN0Q7QUFDRCxpQkFBUyxhQUFhLENBQUUsS0FBSyxFQUFDO0FBQzVCLGNBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsT0FBTzs7QUFFeEQsY0FBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUMsQ0FBQztBQUN0QyxjQUFJLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDOztBQUVsQyxjQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU87O0FBRTdCLGVBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN2QixjQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLGtCQUFrQixFQUFFO0FBQzdDLG1CQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7V0FDaEQ7QUFDRCxjQUFJLElBQUksSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLHNCQUFzQixFQUFFO0FBQy9DLG1CQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7V0FDcEQ7QUFDRCxjQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEI7T0FDRjs7O2FBRVUsdUJBQUc7OztBQUNaLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDM0IsWUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7QUFDekMsaUJBQU8sRUFBQyxJQUFJLENBQUMsT0FBTztBQUNwQixvQkFBVSxFQUFFLHNCQUFLO0FBQ2YsZ0JBQUksTUFBSyxZQUFZLEVBQUU7QUFDckIsb0JBQUssV0FBVyxFQUFFLENBQUM7YUFDcEIsTUFBTTtBQUNMLG9CQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDekM7V0FDRixFQUFDLENBQUMsQ0FBQztPQUNQOzs7YUFRVyx3QkFBRztBQUNiLFlBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNoRSxZQUFJLE1BQU0sQ0FBQyxNQUFNLEVBQUU7QUFDakIsY0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDL0MsTUFBTTtBQUNMLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQzNGO09BQ0Y7OzthQWFpQiw0QkFBQyxNQUFNLEVBQWdCO1lBQWQsT0FBTyx5REFBRyxFQUFFOztBQUNyQyxhQUFJLElBQUksS0FBSyxJQUFJLE1BQU0sRUFBRTtBQUFDLGNBQUksT0FBTyxZQUFBLENBQUM7QUFDcEMsY0FBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNoQyxnQkFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FDbEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUMzQixPQUFPLENBQUMsZUFBZSxHQUN2QixPQUFPLENBQUMsZUFBZSxDQUFDLGNBQWMsR0FDdEMsRUFBRSxDQUFDO0FBQ1AsZ0JBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUNqRCxtQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFBO1dBQzdEO1NBQ0Y7QUFDRCxlQUFPLE9BQU8sQ0FBQztPQUNoQjs7O2FBYWtCLDZCQUFDLE9BQU8sRUFBRSxLQUFLLEVBQWlCO1lBQWYsUUFBUSx5REFBRyxFQUFFOztBQUMvQyxhQUFLLElBQUksS0FBSyxJQUFJLE9BQU8sRUFBRTtBQUFDLGNBQUksT0FBTyxZQUFBLENBQUM7QUFDdEMsY0FBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNqQyxnQkFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsR0FDbEIsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUMzQixPQUFPLENBQUMsZUFBZSxHQUN2QixPQUFPLENBQUMsZUFBZSxDQUFDLGNBQWMsR0FDdEMsRUFBRSxDQUFDO0FBQ1Asb0JBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztXQUM5RDtTQUNGO0FBQ0QsZUFBTyxRQUFRLENBQUM7T0FDakI7OztXQXhQZSxlQUFHO0FBQ2pCLGVBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztPQUN2Qjs7O3lCQTFCVSxhQUFhO0FBQWIsaUJBQWEsR0FEekIsc0JBekJPLE1BQU0sRUF5Qk4sT0FBTyxRQXhCUCxhQUFhLFdBQ2IsZ0JBQWdCLENBdUJ5QixDQUNwQyxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBRnpCLHNCQXhCeUIsYUFBYSxFQXdCeEIsV0FBVyxDQUFDLENBRWQsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhOzs7OztNQW1ScEIsV0FBVyxHQUVKLFNBRlAsV0FBVyxDQUVILE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRTswQkFGekMsV0FBVzs7QUFHYixTQUFLLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7QUFFM0QsUUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsUUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7QUFDbkIsUUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3pELFFBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0dBQ3RCOztNQUdHLFlBQVk7QUFDTCxhQURQLFlBQVksQ0FDSixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7NEJBRHZDLFlBQVk7O0FBR2QsV0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFBLENBQUUsSUFBSSxFQUFFLENBQUM7QUFDM0UsV0FBSyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQztBQUN6RSxXQUFLLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQzs7QUFFdkMsVUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDN0QsVUFBSSxXQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQyxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztBQUNuQixVQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7QUFFckIsVUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxXQUFRLEVBQUU7QUFDbkQsY0FBTSxXQUFRLEdBQUcsSUFBSSxDQUFDO09BQ3ZCO0FBQ0QsVUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssRUFBRTtBQUM5QyxjQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztPQUN0QjtLQUNGOztpQkFwQkcsWUFBWTs7YUFzQlgsZUFBQyxNQUFNLEVBQUU7QUFDWixZQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUNoQzs7O2FBRU0saUJBQUMsTUFBTSxFQUFFLEVBQUU7OztXQTFCZCxZQUFZOzs7TUE2QkwsMEJBQTBCO2FBQTFCLDBCQUEwQjs0QkFBMUIsMEJBQTBCOzs7aUJBQTFCLDBCQUEwQjs7YUFDL0IsZ0JBQUMsT0FBTyxFQUFFLEtBQUssRUFBRTtBQUNyQixZQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sT0FBTyxDQUFDO0FBQzNCLFlBQUksTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQy9CLGVBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBSztBQUMzQixjQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDdEMsaUJBQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoRSxDQUFDLENBQUM7T0FDSjs7O1dBUlUsMEJBQTBCIiwiZmlsZSI6ImZvcm1zL3NlbGVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgY2hpbGRyZW4sIGR5bmFtaWNPcHRpb25zfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0Zvcm1Db21wb25lbnR9IGZyb20gJy4vZm9ybSc7XG5pbXBvcnQge0ludGVyZmFjZUNoYW5uZWx9IGZyb20gJy4vY2hhbm5lbCc7XG5pbXBvcnQge2ZpbHRlcn0gZnJvbSAnbG9kYXNoJztcblxuXG5jb25zdCBjbGFzc05hbWUgPSAnYWktc2VsZWN0JztcbmNvbnN0IFNQQUNFICAgICAgPSAnU1BBQ0UnO1xuY29uc3QgRU5URVIgICAgICA9ICdFTlRFUic7XG5jb25zdCBVUF9BUlJPVyAgID0gJ1VQX0FSUk9XJztcbmNvbnN0IERPV05fQVJST1cgPSAnRE9XTl9BUlJPVyc7XG5jb25zdCBTSEFET1dfREVQVEggPSAnMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpJztcbmxldCBLRVlfQklORElOR1MgPSB7XG4gICAzMiA6IFNQQUNFXG4gICwxMyA6IEVOVEVSXG4gICwzOCA6IFVQX0FSUk9XXG4gICw0MCA6IERPV05fQVJST1dcbn07XG5cbmZ1bmN0aW9uIGlzS2V5KGRhdGEsIEtFWSkge1xuICByZXR1cm4gS0VZX0JJTkRJTkdTW2RhdGEua2V5Q29kZV0gPT09IEtFWTtcbn1cblxuXG5AY3VzdG9tRWxlbWVudCgnYWktc2VsZWN0JylcbkBpbmplY3QoRWxlbWVudCwgRm9ybUNvbXBvbmVudCwgSW50ZXJmYWNlQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBTZWxlY3RFbGVtZW50IHtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IHt0ZXh0OiAnc2VsZWN0J307XG4gIEBiaW5kYWJsZSBkZWZhdWx0ID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIG9wdGlvbnMgPSBbXTtcbiAgQGJpbmRhYmxlIGdyb3VwcyA9IFtdO1xuICBAYmluZGFibGUgb3BlbiA9IG51bGw7XG4gIEBiaW5kYWJsZSBzZWFyY2hWYWx1ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBlbmFibGVTZWFyY2ggPSB1bmRlZmluZWQ7XG4gIEBiaW5kYWJsZSBtYXggPSA2O1xuXG4gIEBjaGlsZHJlbignbGFiZWwnKSBsYWJlbHMgPSBbXTtcblxuICBpdGVtSGVpZ2h0ID0gNDg7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9ybSwgaW50ZXJmYWNlQ2hhbm5lbCkge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICBlbGVtZW50LnRhYkluZGV4ID0gJzAnO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB0aGlzLmludGVyZmFjZUNoYW5uZWwgPSBpbnRlcmZhY2VDaGFubmVsO1xuXG4gIH1cblxuICBnZXQgbGFiZWxFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmxhYmVsc1swXTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB0aGlzLnRhcmdldElkID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnYXUtdGFyZ2V0LWlkJyk7XG4gICAgdGhpcy5lbmFibGVTZWFyY2ggPSB0aGlzLmVuYWJsZVNlYXJjaCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdlbmFibGUtc2VhcmNoJyk7XG5cbiAgICBpZiAodGhpcy5sYWJlbEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaGVhZGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubGFiZWxFbGVtZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0ZVRpbWVsaW5lKHRoaXMub3B0aW9uc0VsZW1lbnQsIHRoaXMuaGVhZGVyQ29udGFpbmVyLCB0aGlzLmxhYmVsRWxlbWVudCk7XG5cblxuICAgIHRoaXMucGFyc2VPcHRpb25zKCk7XG4gICAgdGhpcy5jcmVhdGVFdmVudExpc3RlbmVycygpO1xuICAgIGlmICh0aGlzLmVuYWJsZVNlYXJjaCkge1xuICAgICAgdGhpcy5lbmFibGVTZWFyY2hhYmxlQ29udHJvbHMoKTtcbiAgICB9XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRDbGljay5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmVsZW1lbnRGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICB0aGlzLm9wdGlvbnNFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wdGlvbktleWRvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG4gICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5lbGVtZW50Rm9jdXMpO1xuXG4gICAgaWYgKHRoaXMuZW5hYmxlU2VhcmNoKSB7XG4gICAgICB0aGlzLnNlYXJjaEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuc2VhcmNoS2V5RG93bik7XG4gICAgfVxuICB9XG5cbiAgY3JlYXRlVGltZWxpbmUob3B0aW9ucywgaGVhZGVyLCBsYWJlbCkge1xuICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLnRpbWVsaW5lIHx8IG5ldyBUaW1lbGluZU1heCh7cGF1c2VkOnRydWV9KVxuICAgIHZhciBjdXJyZW50SWNvbiA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2VhcmNoSWNvbi5pZWwsICc6YmVmb3JlJykuZ2V0UHJvcGVydHlWYWx1ZSgnY29udGVudCcpO1xuICAgIHRoaXMudGltZWxpbmVcbiAgICAgIC50byhvcHRpb25zLCAwLjIsIHtcbiAgICAgICAgaGVpZ2h0OiAoKHRoaXMubWF4ICogdGhpcy5pdGVtSGVpZ2h0KSArICdweCcpLFxuICAgICAgICBib3hTaGFkb3c6IFNIQURPV19ERVBUSFxuICAgICAgfSlcbiAgICAgIC50byhoZWFkZXIsIDAuMiwge1xuICAgICAgICBib3hTaGFkb3c6IFNIQURPV19ERVBUSFxuICAgICAgfSwgMClcbiAgICAgIC50byh0aGlzLnNlYXJjaEljb24uaWVsLCAwLjQsIHtcbiAgICAgICAgcm90YXRpb246ICczNjBkZWcnLFxuICAgICAgfSwgMClcbiAgICAgIC50byh0aGlzLnNlYXJjaEljb24uZWxlbWVudCwgMC4xLCB7XG4gICAgICAgIGNsYXNzTmFtZTogYC09YWktJHtjdXJyZW50SWNvbn1gLFxuICAgICAgfSwgMC4yKVxuICAgICAgLnRvKHRoaXMuc2VhcmNoSWNvbi5lbGVtZW50LCAwLjEsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnKz1haS1zZWFyY2gnLFxuICAgICAgfSwgMC4yKVxuXG4gIH1cblxuICBvcGVuQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHZhciBoZWlnaHQ7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpcy1hY3RpdmUnKTtcbiAgICB0aGlzLmludGVyZmFjZUNoYW5uZWwucHVibGlzaCh2YWx1ZSA/ICdzdG9wLXdpbmRvdy1zY3JvbGwnIDogJ2VuYWJsZS13aW5kb3ctc2Nyb2xsJywge30pO1xuXG4gICAgaWYgKHZhbHVlKSB7dGhpcy5lbmFibGVTZWFyY2ggJiYgdGhpcy5mb2N1c1NlYXJjaCgpfVxuXG4gICAgdGhpcy5sYWJlbEVsZW1lbnQgJiYgdGhpcy5mbG9hdExhYmVsKHZhbHVlKTtcbiAgICB0aGlzLnRpbWVsaW5lW3ZhbHVlID8gJ3BsYXknIDogJ3JldmVyc2UnXSgpO1xuXG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKG9wdGlvbiwgb2xkT3B0aW9uKSB7XG4gICAgdGhpcy52YWx1ZSA9IG9wdGlvbi5tb2RlbC52YWx1ZTtcbiAgICB0aGlzLmZvcm0uc2V0VmFsdWUodGhpcy5uYW1lLCB0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIGZvY3VzU2VhcmNoKCkge1xuICAgIHRoaXMuc2VhcmNoRWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgZmxvYXRMYWJlbCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKHRoaXMuaXNMYWJlbEZsb2F0aW5nKSByZXR1cm47XG4gICAgICB0aGlzLmlzTGFiZWxGbG9hdGluZyA9IHRydWU7XG4gICAgICBUd2Vlbk1heC50byh0aGlzLmxhYmVsRWxlbWVudCwgMC4yLCB7XG4gICAgICAgIHNjYWxlOiAwLjgsXG4gICAgICAgIHk6ICctODAlJyxcbiAgICAgICAgeDogJy01NnB4JyxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoIXRoaXMuYWN0aXZlLm1vZGVsKSB7XG4gICAgICBpZiAoIXRoaXMuaXNMYWJlbEZsb2F0aW5nKSByZXR1cm47XG4gICAgICB0aGlzLmlzTGFiZWxGbG9hdGluZyA9IGZhbHNlO1xuICAgICAgVHdlZW5NYXgudG8odGhpcy5sYWJlbEVsZW1lbnQsIDAuMiwge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgeTogJzAlJyxcbiAgICAgICAgeDogJzBweCdcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdE9wdGlvbihvcHRpb24pIHtcbiAgICBsZXQgZXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScpO1xuICAgIHRoaXMuYWN0aXZlID0gb3B0aW9uO1xuICAgIHRoaXMuc2VhcmNoVmFsdWUgPSAnJztcbiAgICB0aGlzLmVsZW1lbnQuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogQFByb3RvdHlwZSgpOiBlbmFibGVTZWFyY2hhYmxlQ29udHJvbHNcbiAgICpcbiAgICogQ3JlYXRlcyBMaXN0ZW5lcnMgb24gdGhlIHNlYXJjaC9pbnB1dEVsZW1lbnRcbiAgICovXG4gIGVuYWJsZVNlYXJjaGFibGVDb250cm9scygpIHtcbiAgICB0aGlzLnNlYXJjaEtleURvd24gPSBzZWFyY2hLZXlEb3duO1xuICAgIHRoaXMuc2VhcmNoRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5zZWFyY2hLZXlEb3duLmJpbmQodGhpcyksIGZhbHNlKTtcblxuICAgIGZ1bmN0aW9uIHNlYXJjaEtleURvd24oZXZlbnQpIHtcbiAgICAgIGxldCBpc0Rvd24gPSBpc0tleShldmVudCwgRE9XTl9BUlJPVyk7XG4gICAgICBsZXQgaXNVcCA9IGlzS2V5KGV2ZW50LCBVUF9BUlJPVyk7XG4gICAgICBpZiAoIWlzRG93biAmJiAhaXNVcCkgcmV0dXJuO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgaXNEb3duICYmIHRoaXMub3B0aW9uc0VsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKTtcbiAgICAgIGlzVXAgJiYgdGhpcy5vcHRpb25zRWxlbWVudC5sYXN0RWxlbWVudENoaWxkLmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBQcm90b3R5cGUoKTogY3JlYXRlRXZlbnRMaXN0ZW5lcnNcbiAgICpcbiAgICogQ3JlYXRlIExpc3RlbmVycyBvbiBjb250ZW50IGVsZW1lbnRzXG4gICAqIEBidXR0b24gQ3JlYXRlIExpc3RlbmVyIG9uIGlubmVyIGJ1dHRvbiBlbGVtZW50XG4gICAqIEBvdmVybGF5IENyZWF0ZSBMaXN0ZW5lciBvbiBpbm5lciBvdmVybGF5IGVsZW1lbnRcbiAgICovXG4gIGNyZWF0ZUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHRoaXMuZWxlbWVudEZvY3VzID0gZWxlbWVudEZvY3VzO1xuICAgIHRoaXMuZG9jdW1lbnRDbGljayA9IGRvY3VtZW50Q2xpY2s7XG4gICAgdGhpcy5vcHRpb25LZXlkb3duID0gb3B0aW9uS2V5ZG93bjtcbiAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmVsZW1lbnRGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuZG9jdW1lbnRDbGljay5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgICB0aGlzLm9wdGlvbnNFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLm9wdGlvbktleWRvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG5cbiAgICBmdW5jdGlvbiBlbGVtZW50Rm9jdXMoZXZlbnQpe1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgcmV0dXJuO1xuICAgICAgaWYgKCF0aGlzLm9wZW4pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVGb2N1cygpO1xuICAgICAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRvY3VtZW50Q2xpY2soZXZlbnQpe1xuICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkgdGhpcy5vcGVuID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9wdGlvbktleWRvd24gKGV2ZW50KXtcbiAgICAgIGlmICghdGhpcy5vcHRpb25zRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSByZXR1cm47XG5cbiAgICAgIGxldCBpc0Rvd24gPSBpc0tleShldmVudCwgRE9XTl9BUlJPVyk7XG4gICAgICBsZXQgaXNVcCA9IGlzS2V5KGV2ZW50LCBVUF9BUlJPVyk7XG5cbiAgICAgIGlmICghaXNVcCAmJiAhaXNEb3duKSByZXR1cm47XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAoaXNEb3duICYmIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcpIHtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuZm9jdXMoKTtcbiAgICAgIH1cbiAgICAgIGlmIChpc1VwICYmIGV2ZW50LnRhcmdldC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgIHJldHVybiBldmVudC50YXJnZXQucHJldmlvdXNFbGVtZW50U2libGluZy5mb2N1cygpO1xuICAgICAgfVxuICAgICAgdGhpcy5mb2N1c1NlYXJjaCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCkge1xuICAgIGxldCBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIHRoaXMuaW50ZXJmYWNlQ2hhbm5lbC5wdWJsaXNoKCdzY3JvbGwtdG8nLCB7XG4gICAgICBlbGVtZW50OnRoaXMuZWxlbWVudCxcbiAgICAgIG9uQ29tcGxldGU6ICgpPT4ge1xuICAgICAgICBpZiAodGhpcy5lbmFibGVTZWFyY2gpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vcHRpb25zRWxlbWVudC5jaGlsZHJlblswXS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9fSk7XG4gIH1cblxuICAvKipcbiAgICogQFByb3RvdHlwZSgpOiBwYXJzZU9wdGlvbnNcbiAgICpcbiAgICogQ3JlYXRlcyBPYmplY3RzIGZvcm0gc3RhdGljL2hhcmQgY29kZWQgY29udGVudCBpbm5lckVsZW1lbnRzXG4gICAqIFNlZSBiZWxvdyBmb3IgZGV0YWlsZWQgZGVzY3JpcHRpb25cbiAgICovXG4gIHBhcnNlT3B0aW9ucygpIHtcbiAgICBsZXQgZ3JvdXBzID0gdGhpcy5jb250ZW50Q29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ29wdGdyb3VwJyk7XG4gICAgaWYgKGdyb3Vwcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ3JvdXBzID0gdGhpcy5wYXJzZUdyb3VwRWxlbWVudHMoZ3JvdXBzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5wYXJzZU9wdGlvbkVsZW1lbnRzKHRoaXMuY29udGVudENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdvcHRpb24nKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBQcm90b3R5cGUoKTogcGFyc2VHcm91cEVsZW1lbnRzXG4gICAqXG4gICAqIEBwYXJhbSAge0VsZW1lbnRzfSBbZ3JvdXBzXSBBcnJheSBvZiA8b3B0Z3JvdXA+IGVsZW1lbnRzXG4gICAqXG4gICAqIE1ldGhvZCBpdGVyYXRlcyBvdmVyIHRoZSBjb250ZW50IGdyYWJiaW5nIGFueSBvcHRHcm91cEVsZW1lbnRcbiAgICogVXNlcyB0aGUgb3B0R3JvdXAgdG8gY3JlYXRlIGEgZ3JvdXAgT2JqZWN0XG4gICAqIHRoZW4gcHVzaGVzIHRoZSBncm91cCBPYmplY3QgdG8gdGhlIHRoaXMuZ3JvdXBzIGFycmF5XG4gICAqIElzc3VlIGFuZCBvcHRncm91cCBvciBvcHRpb24gZWxlbWVudCBmb3VuZCBkb2VzIG5vdCBrZWVwIGl0J3MgYmluZGluZy5cbiAgICogSW4gb3JkZXIgdG8ga2VlcCB0aGUgYmluZGluZyBwbGVhc2UgYmluZCBhbiBvYmplY3QgdG8gdGhlIGdyb3VwcyBAYmluZGFibGUgYXR0cmlidXRlXG4gICAqL1xuICBwYXJzZUdyb3VwRWxlbWVudHMoZ3JvdXBzLCBfZ3JvdXBzID0gW10pIHtcbiAgICBmb3IobGV0IGluZGV4IGluIGdyb3Vwcykge2xldCBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQgPSBncm91cHMuaXRlbShpbmRleCkpIHtcbiAgICAgICAgbGV0IG1vZGVsID0gZWxlbWVudC5hdVxuICAgICAgICAgID8gZWxlbWVudC5hdS5jb250cm9sbGVyLm1vZGVsXG4gICAgICAgICAgOiBlbGVtZW50LnByaW1hcnlCZWhhdmlvclxuICAgICAgICAgID8gZWxlbWVudC5wcmltYXJ5QmVoYXZpb3IuYmluZGluZ0NvbnRleHRcbiAgICAgICAgICA6IHt9O1xuICAgICAgICBsZXQgb3B0aW9ucyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyk7XG4gICAgICAgIF9ncm91cHMucHVzaChuZXcgU2VsZWN0R3JvdXAoZWxlbWVudCwgbW9kZWwsIG9wdGlvbnMsIHRoaXMpKVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX2dyb3VwcztcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IHBhcnNlT3B0aW9uRWxlbWVudHNcbiAgICpcbiAgICogQHBhcmFtICB7RWxlbWVudHN9IG9wdGlvbnMgIEFycmF5IG9mIDxvcHRpb24+IGVsZW1lbnRzXG4gICAqXG4gICAqIE1ldGhvZCBpdGVyYXRlcyBvdmVyIHRoZSBjb250ZW50IGdyYWJiaW5nIGFueSBPcHRpb25FbGVtZW50XG4gICAqIFVzZXMgdGhlIG9wdGlvbkVsZW1lbnQgdG8gY3JlYXRlIHRoZSBvcHRpb24gT2JqZWN0XG4gICAqIEZpbmFsbHkgcmVtb3ZlcyB0aGUgb3B0aW9uRWxlbWVudCBmcm9tIHRoZSBET01cbiAgICogSVNTVUU6IEJlY2F1c2Ugb2YgdGhpcyBzdHJhdGVneSwgb3B0aW9uIGVsZW1lbnRzIGRvIG5vdCBrZWVwIHRoZWlyIGJpbmRpbmdcbiAgICogSWYgeW91IHdhbnQgdG8ga2VlcCB0aGUgYmluZGluZywgdGhlbiBwYXNzIG9wdGlvbnMgaW4gYXMgYSBjb2xsZWN0aW9uXG4gICAqL1xuICBwYXJzZU9wdGlvbkVsZW1lbnRzKG9wdGlvbnMsIGdyb3VwLCBfb3B0aW9ucyA9IFtdKSB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gb3B0aW9ucykge2xldCBlbGVtZW50O1xuICAgICAgaWYgKGVsZW1lbnQgPSBvcHRpb25zLml0ZW0oaW5kZXgpKSB7XG4gICAgICAgIGxldCBtb2RlbCA9IGVsZW1lbnQuYXVcbiAgICAgICAgICA/IGVsZW1lbnQuYXUuY29udHJvbGxlci5tb2RlbFxuICAgICAgICAgIDogZWxlbWVudC5wcmltYXJ5QmVoYXZpb3JcbiAgICAgICAgICA/IGVsZW1lbnQucHJpbWFyeUJlaGF2aW9yLmJpbmRpbmdDb250ZXh0XG4gICAgICAgICAgOiB7fTtcbiAgICAgICAgX29wdGlvbnMucHVzaChuZXcgU2VsZWN0T3B0aW9uKGVsZW1lbnQsIG1vZGVsLCBncm91cCwgdGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gX29wdGlvbnM7XG4gIH1cbn1cblxuY2xhc3MgU2VsZWN0R3JvdXAge1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG1vZGVsLCBvcHRpb25zLCBzZWxlY3QpIHtcbiAgICBtb2RlbC5sYWJlbCA9IG1vZGVsLmxhYmxlIHx8IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdsYWJlbCcpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XG4gICAgdGhpcy5vcHRpb25zID0gc2VsZWN0LnBhcnNlT3B0aW9uRWxlbWVudHMob3B0aW9ucywgdGhpcyk7XG4gICAgdGhpcy5zZWxlY3QgPSBzZWxlY3Q7XG4gIH1cbn1cblxuY2xhc3MgU2VsZWN0T3B0aW9uIHtcbiAgY29uc3RydWN0b3IoZWxlbWVudCwgbW9kZWwsIGdyb3VwLCBzZWxlY3QpIHtcblxuICAgIG1vZGVsLnRleHQgPSBtb2RlbC50ZXh0IHx8IChlbGVtZW50LmlubmVyVGV4dCB8fCBlbGVtZW50LmlubmVySFRNTCkudHJpbSgpO1xuICAgIG1vZGVsLnZhbHVlID0gbW9kZWwudmFsdWUgfHwgZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykgfHwgbW9kZWwudGV4dDtcbiAgICBtb2RlbC50ZXh0ID0gbW9kZWwudGV4dCB8fCBtb2RlbC52YWx1ZTtcblxuICAgIHRoaXMuYWN0aXZlID0gbW9kZWwuYWN0aXZlIHx8IGVsZW1lbnQuaGFzQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICB0aGlzLmRlZmF1bHQgPSBlbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGVmYXVsdCcpO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xuICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcbiAgICB0aGlzLnNlbGVjdCA9IHNlbGVjdDtcblxuICAgIGlmICh0aGlzLmlzRGVmYXVsdCB8fCB0aGlzLnZhbHVlID09PSBzZWxlY3QuZGVmYXVsdCkge1xuICAgICAgc2VsZWN0LmRlZmF1bHQgPSB0aGlzO1xuICAgIH1cbiAgICBpZiAodGhpcy5hY3RpdmUgfHwgdGhpcy52YWx1ZSA9PT0gc2VsZWN0LnZhbHVlKSB7XG4gICAgICBzZWxlY3QuYWN0aXZlID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBjbGljaygkZXZlbnQpIHtcbiAgICB0aGlzLnNlbGVjdC5zZWxlY3RPcHRpb24odGhpcyk7XG4gIH1cblxuICBrZXlkb3duKCRldmVudCkge31cbn1cblxuZXhwb3J0IGNsYXNzIFNlYXJjaEZpbHRlclZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KG9wdGlvbnMsIHZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkgcmV0dXJuIG9wdGlvbnM7XG4gICAgbGV0IHJlZ2V4cCA9IG5ldyBSZWdFeHAodmFsdWUpO1xuICAgIHJldHVybiBvcHRpb25zLmZpbHRlcigobykgPT4ge1xuICAgICAgaWYgKCFvIHx8ICFvLm1vZGVsLnRleHQpIHJldHVybiBmYWxzZTtcbiAgICAgIHJldHVybiByZWdleHAudGVzdChvLm1vZGVsLnRleHQpIHx8IHJlZ2V4cC50ZXN0KG8ubW9kZWwudmFsdWUpO1xuICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
