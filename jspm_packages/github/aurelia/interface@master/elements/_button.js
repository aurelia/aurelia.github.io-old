/* */ 
define(['exports', 'aurelia-framework', '../util/waves'], function (exports, _aureliaFramework, _utilWaves) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-button';
  var buttonsSettings = {
    classPrefix: 'button',
    classSeparator: '--',
    className: className,
    sizeAlias: {
      'sm': 'small',
      'md': 'medium',
      'lg': 'large'
    },
    colorAlias: {
      'primary': 'button--primary',
      'accent': 'button--accent',
      'success': 'button--success',
      'error': 'button--error',
      'link': 'button--link',
      'dark': 'button--dark',
      'disabled': 'button--disabled'
    }
  };

  var ButtonComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(ButtonComponent, [{
      key: 'icon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'iconRight',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'nextIcon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'size',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'round',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'raised',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'flat',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'light',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'color',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'bordered',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'bg',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'reset',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'submit',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'button';
      },
      enumerable: true
    }, {
      key: 'attach',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'attachRight',
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
    }, {
      key: 'text',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], [{
      key: 'settings',
      value: function settings(_settings) {
        buttonsSettings = Object.assign(buttonsSettings, _settings);
      }
    }], _instanceInitializers);

    function ButtonComponent(element, waves) {
      _classCallCheck(this, _ButtonComponent);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'iconRight', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'nextIcon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'size', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'round', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'raised', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'flat', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'light', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'color', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'bordered', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'bg', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'reset', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'submit', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'attach', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'attachRight', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'text', _instanceInitializers);

      this._last = {
        icon: null,
        color: null,
        bg: null
      };

      element.className += ' ' + className;
      this.waves = waves;
      this.element = element;
    }

    _createDecoratedClass(ButtonComponent, [{
      key: 'className',
      value: function className(value) {
        var prefix = buttonsSettings.classPrefix;
        var sep = buttonsSettings.classSeparator;
        return prefix + sep + value;
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.bordered = this.bordered || this.element.hasAttribute('bordered');
        this.round = this.round || this.element.hasAttribute('round');
        this.light = this.light || this.element.hasAttribute('light');
        this.flat = this.flat || this.element.hasAttribute('flat');
        this.raised = this.raised || this.element.hasAttribute('raised');
        this.submit = this.submit || this.element.hasAttribute('submit');

        if (this.element.hasAttribute('ai-waves')) {
          this.element.classList.remove('waves-effect', 'waves-light');
          this.button.classList.add('waves-effect', 'waves-light');
          if (this.attachedContainer) {
            this.attachedContainer.classList.add('waves-effect', 'waves-light');
          }
        }

        this.size = this.size || 'medium';

        if (this.nextIcon) {
          this.element.addEventListener('mousenter', this.animateIcon.bind(this));
        }

        if (this.attachedElement) {
          this.attachedContainer.appendChild(this.attachedElement);
        }

        if (this.rightAttachedElement) {
          this.attachedContainer.appendChild(this.rightAttachedElement);
        }

        if (this.active) {
          this.activeChanged(this.active);
        }
      }
    }, {
      key: 'sizeChanged',
      value: function sizeChanged(size) {
        size = buttonsSettings.sizeAlias[size] || size;
        this.sizeClass = size ? this.className(size) : '';
      }
    }, {
      key: 'borderedChanged',
      value: function borderedChanged(bordered) {
        this.borderedClass = bordered ? this.className('bordered') : '';
      }
    }, {
      key: 'blockChanged',
      value: function blockChanged(block) {
        this.blockClass = block ? this.className('block') : '';
      }
    }, {
      key: 'roundChanged',
      value: function roundChanged(round) {
        this.roundClass = round ? this.className('round') : '';
      }
    }, {
      key: 'raisedChanged',
      value: function raisedChanged(raised) {
        this.raisedClass = raised ? this.className('raised') : '';
      }
    }, {
      key: 'flatChanged',
      value: function flatChanged(flat) {
        this.flatClass = flat ? this.className('flat') : '';
      }
    }, {
      key: 'lightChanged',
      value: function lightChanged(light) {
        this.lightClass = light ? this.className('light') : '';
      }
    }, {
      key: 'colorChanged',
      value: function colorChanged(color) {
        if (/primary|secondary|accent|success|error|warn/.test(color)) {
          this.colorClass = 'button--' + color;
        } else {
          this.colorClass = 'color-' + color;
        }
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (!this.button) return;
        this.button.classList[value ? 'add' : 'remove']('is-active');
      }
    }, {
      key: 'bgChanged',
      value: function bgChanged(bg) {
        if (bg) {
          this.element.setAttribute('bg', '');
          this.bgClass = buttonsSettings.colorAlias[bg] || 'bg-' + bg;
        } else {
          this.bgClass = '';
        }
      }
    }, {
      key: 'submitChanged',
      value: function submitChanged(value) {
        if (value) this.type = 'submit';
      }
    }, {
      key: 'resetChanged',
      value: function resetChanged(value) {
        if (value) this.type = 'reset';
      }
    }, {
      key: 'attachChanged',
      value: function attachChanged(attachment) {
        this.element.classList.add('button--has-attachment');
        var element = attachment instanceof Element ? attachment : attachment.element instanceof Element ? element = attachment.element : null;
        this.attachedElement = element;
      }
    }, {
      key: 'attachRightChanged',
      value: function attachRightChanged(attachment) {
        this.element.classList.add('button--has-attachment');
        var element = attachment instanceof Element ? attachment : attachment.element instanceof Element ? element = attachment.element : null;
        this.rightAttachedElement = element;
      }
    }, {
      key: 'animateIcon',
      value: function animateIcon() {
        this.active = true;
      }
    }], null, _instanceInitializers);

    var _ButtonComponent = ButtonComponent;
    ButtonComponent = (0, _aureliaFramework.inject)(Element, _utilWaves.Waves)(ButtonComponent) || ButtonComponent;
    ButtonComponent = (0, _aureliaFramework.customElement)('ai-button')(ButtonComponent) || ButtonComponent;
    return ButtonComponent;
  })();

  exports.ButtonComponent = ButtonComponent;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL19idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUVBLE1BQUksU0FBUyxHQUFHLFdBQVcsQ0FBQztBQUM1QixNQUFJLGVBQWUsR0FBRztBQUNwQixlQUFXLEVBQUUsUUFBUTtBQUNyQixrQkFBYyxFQUFFLElBQUk7QUFDcEIsYUFBUyxFQUFFLFNBQVM7QUFDcEIsYUFBUyxFQUFFO0FBQ1QsVUFBSSxFQUFDLE9BQU87QUFDWixVQUFJLEVBQUMsUUFBUTtBQUNiLFVBQUksRUFBQyxPQUFPO0tBQ2I7QUFDRCxjQUFVLEVBQUU7QUFDVixlQUFTLEVBQUMsaUJBQWlCO0FBQzNCLGNBQVEsRUFBQyxnQkFBZ0I7QUFDekIsZUFBUyxFQUFDLGlCQUFpQjtBQUMzQixhQUFPLEVBQUMsZUFBZTtBQUN2QixZQUFNLEVBQUMsY0FBYztBQUNyQixZQUFNLEVBQUMsY0FBYztBQUNyQixnQkFBVSxFQUFDLGtCQUFrQjtLQUM5QjtHQUNGLENBQUE7O01BSVksZUFBZTs7OzswQkFBZixlQUFlOztxQ0F6QlosUUFBUTs7ZUErQkEsSUFBSTs7Ozs7cUNBL0JaLFFBQVE7O2VBZ0NBLElBQUk7Ozs7O3FDQWhDWixRQUFROztlQWlDQSxJQUFJOzs7OztxQ0FqQ1osUUFBUTs7ZUFrQ0EsSUFBSTs7Ozs7cUNBbENaLFFBQVE7O2VBbUNBLElBQUk7Ozs7O3FDQW5DWixRQUFROztlQW9DQSxJQUFJOzs7OztxQ0FwQ1osUUFBUTs7ZUFxQ0EsSUFBSTs7Ozs7cUNBckNaLFFBQVE7O2VBc0NBLElBQUk7Ozs7O3FDQXRDWixRQUFROztlQXVDQSxJQUFJOzs7OztxQ0F2Q1osUUFBUTs7ZUF3Q0EsSUFBSTs7Ozs7cUNBeENaLFFBQVE7O2VBeUNBLElBQUk7Ozs7O3FDQXpDWixRQUFROztlQTBDQSxJQUFJOzs7OztxQ0ExQ1osUUFBUTs7ZUEyQ0EsSUFBSTs7Ozs7cUNBM0NaLFFBQVE7O2VBNENBLFFBQVE7Ozs7O3FDQTVDaEIsUUFBUTs7ZUE2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QUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCxZQUFJLE9BQU8sR0FBRyxVQUFVLFlBQVksT0FBTyxHQUN2QyxVQUFVLEdBQ1YsVUFBVSxDQUFDLE9BQU8sWUFBWSxPQUFPLEdBQ3JDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxHQUM1QixJQUFJLENBQUM7QUFDVCxZQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztPQUNoQzs7O2FBRWlCLDRCQUFDLFVBQVUsRUFBRTtBQUM3QixZQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQTtBQUNwRCxZQUFJLE9BQU8sR0FBRyxVQUFVLFlBQVksT0FBTyxHQUN2QyxVQUFVLEdBQ1YsVUFBVSxDQUFDLE9BQU8sWUFBWSxPQUFPLEdBQ3JDLE9BQU8sR0FBRyxVQUFVLENBQUMsT0FBTyxHQUM1QixJQUFJLENBQUM7QUFDVCxZQUFJLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDO09BQ3JDOzs7YUFTVSx1QkFBRztBQUNaLFlBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO09BQ3BCOzs7MkJBeEtVLGVBQWU7QUFBZixtQkFBZSxHQUQzQixzQkF4Qk8sTUFBTSxFQXdCTixPQUFPLGFBdkJQLEtBQUssQ0F1QlUsQ0FDVixlQUFlLEtBQWYsZUFBZTtBQUFmLG1CQUFlLEdBRjNCLHNCQXZCMEMsYUFBYSxFQXVCekMsV0FBVyxDQUFDLENBRWQsZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlIiwiZmlsZSI6ImVsZW1lbnRzL19idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgYmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZSwgY3VzdG9tRWxlbWVudH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtXYXZlc30gZnJvbSAnLi4vdXRpbC93YXZlcyc7XG5sZXQgY2xhc3NOYW1lID0gJ2FpLWJ1dHRvbic7XG5sZXQgYnV0dG9uc1NldHRpbmdzID0ge1xuICBjbGFzc1ByZWZpeDogJ2J1dHRvbicsXG4gIGNsYXNzU2VwYXJhdG9yOiAnLS0nLFxuICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgc2l6ZUFsaWFzOiB7XG4gICAgJ3NtJzonc21hbGwnLFxuICAgICdtZCc6J21lZGl1bScsXG4gICAgJ2xnJzonbGFyZ2UnXG4gIH0sXG4gIGNvbG9yQWxpYXM6IHtcbiAgICAncHJpbWFyeSc6J2J1dHRvbi0tcHJpbWFyeScsXG4gICAgJ2FjY2VudCc6J2J1dHRvbi0tYWNjZW50JyxcbiAgICAnc3VjY2Vzcyc6J2J1dHRvbi0tc3VjY2VzcycsXG4gICAgJ2Vycm9yJzonYnV0dG9uLS1lcnJvcicsXG4gICAgJ2xpbmsnOididXR0b24tLWxpbmsnLFxuICAgICdkYXJrJzonYnV0dG9uLS1kYXJrJyxcbiAgICAnZGlzYWJsZWQnOididXR0b24tLWRpc2FibGVkJ1xuICB9XG59XG5cbkBjdXN0b21FbGVtZW50KCdhaS1idXR0b24nKVxuQGluamVjdChFbGVtZW50LCBXYXZlcylcbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuXG4gIHN0YXRpYyBzZXR0aW5ncyhzZXR0aW5ncykge1xuICAgIGJ1dHRvbnNTZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oYnV0dG9uc1NldHRpbmdzLCBzZXR0aW5ncyk7XG4gIH1cblxuICBAYmluZGFibGUgaWNvbiAgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGljb25SaWdodCA9IG51bGw7XG4gIEBiaW5kYWJsZSBuZXh0SWNvbiAgPSBudWxsO1xuICBAYmluZGFibGUgc2l6ZSAgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHJvdW5kICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSByYWlzZWQgICAgPSBudWxsO1xuICBAYmluZGFibGUgZmxhdCAgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGxpZ2h0ICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBjb2xvciAgICAgPSBudWxsO1xuICBAYmluZGFibGUgYm9yZGVyZWQgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGJnICAgICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSByZXNldCAgICAgPSBudWxsO1xuICBAYmluZGFibGUgc3VibWl0ICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHR5cGUgICAgICA9ICdidXR0b24nO1xuICBAYmluZGFibGUgYXR0YWNoICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGF0dGFjaFJpZ2h0ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSAgICAgPSBudWxsO1xuICBAYmluZGFibGUgdGV4dCAgICAgICA9IG51bGw7XG5cbiAgX2xhc3QgPSB7XG4gICAgICBpY29uOiBudWxsXG4gICAgLCBjb2xvcjogbnVsbFxuICAgICwgYmc6IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCB3YXZlcykge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICB0aGlzLndhdmVzID0gd2F2ZXM7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZSh2YWx1ZSkge1xuICAgIGxldCBwcmVmaXggPSBidXR0b25zU2V0dGluZ3MuY2xhc3NQcmVmaXg7XG4gICAgbGV0IHNlcCAgICA9IGJ1dHRvbnNTZXR0aW5ncy5jbGFzc1NlcGFyYXRvcjtcbiAgICByZXR1cm4gcHJlZml4ICsgc2VwICsgdmFsdWU7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcblxuICAgIC8vIHRoaXMud2F2ZXMuYXR0YWNoKHRoaXMuYnV0dG9uKTtcbiAgICB0aGlzLmJvcmRlcmVkID0gdGhpcy5ib3JkZXJlZCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdib3JkZXJlZCcpO1xuICAgIHRoaXMucm91bmQgICAgPSB0aGlzLnJvdW5kICAgIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JvdW5kJyk7XG4gICAgdGhpcy5saWdodCAgICA9IHRoaXMubGlnaHQgICAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbGlnaHQnKTtcbiAgICB0aGlzLmZsYXQgICAgID0gdGhpcy5mbGF0ICAgICB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdmbGF0Jyk7XG4gICAgdGhpcy5yYWlzZWQgICA9IHRoaXMucmFpc2VkICAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmFpc2VkJyk7XG4gICAgdGhpcy5zdWJtaXQgICA9IHRoaXMuc3VibWl0ICAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc3VibWl0Jyk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWktd2F2ZXMnKSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dhdmVzLWVmZmVjdCcsICd3YXZlcy1saWdodCcpO1xuICAgICAgdGhpcy5idXR0b24uY2xhc3NMaXN0LmFkZCgnd2F2ZXMtZWZmZWN0JywgJ3dhdmVzLWxpZ2h0Jyk7XG4gICAgICBpZiAodGhpcy5hdHRhY2hlZENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmF0dGFjaGVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dhdmVzLWVmZmVjdCcsICd3YXZlcy1saWdodCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZSB8fCAnbWVkaXVtJztcblxuICAgIGlmICh0aGlzLm5leHRJY29uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VudGVyJywgdGhpcy5hbmltYXRlSWNvbi5iaW5kKHRoaXMpKVxuICAgIH1cblxuICAgIGlmICh0aGlzLmF0dGFjaGVkRWxlbWVudCkge1xuICAgICAgdGhpcy5hdHRhY2hlZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmF0dGFjaGVkRWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmlnaHRBdHRhY2hlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuYXR0YWNoZWRDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yaWdodEF0dGFjaGVkRWxlbWVudCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZUNoYW5nZWQodGhpcy5hY3RpdmUpO1xuICAgIH1cbiAgfVxuXG4gIHNpemVDaGFuZ2VkKHNpemUpIHtcbiAgICBzaXplID0gYnV0dG9uc1NldHRpbmdzLnNpemVBbGlhc1tzaXplXSB8fCBzaXplO1xuICAgIHRoaXMuc2l6ZUNsYXNzID0gc2l6ZSA/IHRoaXMuY2xhc3NOYW1lKHNpemUpIDogJyc7XG4gIH1cblxuICBib3JkZXJlZENoYW5nZWQoYm9yZGVyZWQpIHtcbiAgICB0aGlzLmJvcmRlcmVkQ2xhc3MgPSBib3JkZXJlZCA/IHRoaXMuY2xhc3NOYW1lKCdib3JkZXJlZCcpIDogJyc7XG4gIH1cblxuICBibG9ja0NoYW5nZWQoYmxvY2spIHtcbiAgICB0aGlzLmJsb2NrQ2xhc3MgPSBibG9jayA/IHRoaXMuY2xhc3NOYW1lKCdibG9jaycpIDogJyc7XG4gIH1cblxuICByb3VuZENoYW5nZWQocm91bmQpIHtcbiAgICB0aGlzLnJvdW5kQ2xhc3MgPSByb3VuZCA/IHRoaXMuY2xhc3NOYW1lKCdyb3VuZCcpIDogJyc7XG4gIH1cblxuICByYWlzZWRDaGFuZ2VkKHJhaXNlZCkge1xuICAgIHRoaXMucmFpc2VkQ2xhc3MgPSByYWlzZWQgPyB0aGlzLmNsYXNzTmFtZSgncmFpc2VkJykgOiAnJztcbiAgfVxuXG4gIGZsYXRDaGFuZ2VkKGZsYXQpIHtcbiAgICB0aGlzLmZsYXRDbGFzcyA9IGZsYXQgPyB0aGlzLmNsYXNzTmFtZSgnZmxhdCcpIDogJyc7XG4gIH1cblxuICBsaWdodENoYW5nZWQobGlnaHQpIHtcbiAgICB0aGlzLmxpZ2h0Q2xhc3MgPSBsaWdodCA/IHRoaXMuY2xhc3NOYW1lKCdsaWdodCcpIDogJyc7XG4gIH1cblxuICBjb2xvckNoYW5nZWQoY29sb3IpIHtcbiAgICBpZiAoL3ByaW1hcnl8c2Vjb25kYXJ5fGFjY2VudHxzdWNjZXNzfGVycm9yfHdhcm4vLnRlc3QoY29sb3IpKSB7XG4gICAgICB0aGlzLmNvbG9yQ2xhc3MgPSBgYnV0dG9uLS0ke2NvbG9yfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29sb3JDbGFzcyA9IGBjb2xvci0ke2NvbG9yfWA7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5idXR0b24pIHJldHVybjtcbiAgICB0aGlzLmJ1dHRvbi5jbGFzc0xpc3RbdmFsdWUgPyAnYWRkJyA6ICdyZW1vdmUnXSgnaXMtYWN0aXZlJyk7XG4gIH1cblxuICBiZ0NoYW5nZWQoYmcpIHtcbiAgICBpZiAoYmcpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2JnJywgJycpXG4gICAgICB0aGlzLmJnQ2xhc3MgPSBidXR0b25zU2V0dGluZ3MuY29sb3JBbGlhc1tiZ10gfHwgYGJnLSR7Ymd9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iZ0NsYXNzID0gJyc7XG4gICAgfVxuICB9XG5cbiAgc3VibWl0Q2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkgdGhpcy50eXBlID0gJ3N1Ym1pdCc7XG4gIH1cblxuICByZXNldENoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHRoaXMudHlwZSA9ICdyZXNldCc7XG4gIH1cblxuICBhdHRhY2hDaGFuZ2VkKGF0dGFjaG1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uLS1oYXMtYXR0YWNobWVudCcpXG4gICAgbGV0IGVsZW1lbnQgPSBhdHRhY2htZW50IGluc3RhbmNlb2YgRWxlbWVudFxuICAgICAgPyBhdHRhY2htZW50XG4gICAgICA6IGF0dGFjaG1lbnQuZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnRcbiAgICAgID8gZWxlbWVudCA9IGF0dGFjaG1lbnQuZWxlbWVudFxuICAgICAgOiBudWxsO1xuICAgIHRoaXMuYXR0YWNoZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaFJpZ2h0Q2hhbmdlZChhdHRhY2htZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbi0taGFzLWF0dGFjaG1lbnQnKVxuICAgIGxldCBlbGVtZW50ID0gYXR0YWNobWVudCBpbnN0YW5jZW9mIEVsZW1lbnRcbiAgICAgID8gYXR0YWNobWVudFxuICAgICAgOiBhdHRhY2htZW50LmVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgICA/IGVsZW1lbnQgPSBhdHRhY2htZW50LmVsZW1lbnRcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLnJpZ2h0QXR0YWNoZWRFbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBpY29uQ2hhbmdlZFxuICAgKlxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IHZhbHVlICAtIFRoZSBuZXcgSWNvbiBDbGFzcyB0byBiZSBhZGRlZCB0byB0aGUgSWNvbiBFbGVtZW50LlxuICAgKlxuICAgKiBSZW1vdmUgb2xkIEljb24gY2xhc3M/IGlmIGl0IGV4aXN0cy5cbiAgICovXG4gIGFuaW1hdGVJY29uKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
