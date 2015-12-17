/* */ 
define(['exports', 'aurelia-framework', '../util/waves'], function (exports, _aureliaFramework, _utilWaves) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var className = 'ai-action';
  var actionsSettings = {
    classPrefix: 'action',
    classSeparator: '--',
    className: className,
    sizeAlias: {
      'sm': 'small',
      'md': 'medium',
      'lg': 'large'
    },
    colorAlias: {
      'primary': 'action--primary',
      'accent': 'action--accent',
      'success': 'action--success',
      'error': 'action--error',
      'link': 'action--link',
      'dark': 'action--dark',
      'disabled': 'action--disabled'
    }
  };

  var AIActionElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AIActionElement, [{
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
      key: 'hoverIcon',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'activeIcon',
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
        return 'action';
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
        actionsSettings = Object.assign(actionsSettings, _settings);
      }
    }], _instanceInitializers);

    function AIActionElement(element, waves) {
      _classCallCheck(this, _AIActionElement);

      _defineDecoratedPropertyDescriptor(this, 'icon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'iconRight', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'hoverIcon', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'activeIcon', _instanceInitializers);

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

    _createDecoratedClass(AIActionElement, [{
      key: 'className',
      value: function className(value) {
        var prefix = actionsSettings.classPrefix;
        var sep = actionsSettings.classSeparator;
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
          this.action.classList.add('waves-effect', 'waves-light');
          if (this.attachedContainer) {
            this.attachedContainer.classList.add('waves-effect', 'waves-light');
          }
        }

        this.size = this.size || 'medium';

        if (this.hoverIcon) {
          this.element.addEventListener('mouseenter', this.animateIconActive.bind(this));
          this.element.addEventListener('mouseleave', this.animateIconBack.bind(this));
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
      key: 'detached',
      value: function detached() {
        if (this.hoverIcon) {
          this.element.removeEventListener('mouseenter', this.animateIconActive.bind(this));
          this.element.removeEventListener('mouseleave', this.animateIconBack.bind(this));
        }
      }
    }, {
      key: 'sizeChanged',
      value: function sizeChanged(size) {
        size = actionsSettings.sizeAlias[size] || size;
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
          this.colorClass = 'action--' + color;
        } else {
          this.colorClass = 'color-' + color;
        }
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (!this.action) return;
        this.action.classList[value ? 'add' : 'remove']('is-active');
      }
    }, {
      key: 'bgChanged',
      value: function bgChanged(bg) {
        if (bg) {
          this.element.setAttribute('bg', '');
          this.bgClass = actionsSettings.colorAlias[bg] || 'bg-' + bg;
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
        this.element.classList.add('action--has-attachment');
        var element = attachment instanceof Element ? attachment : attachment.element instanceof Element ? element = attachment.element : null;
        this.attachedElement = element;
      }
    }, {
      key: 'attachRightChanged',
      value: function attachRightChanged(attachment) {
        this.element.classList.add('action--has-attachment');
        var element = attachment instanceof Element ? attachment : attachment.element instanceof Element ? element = attachment.element : null;
        this.rightAttachedElement = element;
      }
    }, {
      key: 'animateIconActive',
      value: function animateIconActive() {
        var _this = this;

        Velocity(this.iconElement.iel, {
          rotateZ: "180deg"
        }, 250);
        setTimeout(function () {
          _this.iconElement.icon = _this.hoverIcon;
        }, 125);
      }
    }, {
      key: 'animateIconBack',
      value: function animateIconBack() {
        var _this2 = this;

        Velocity(this.iconElement.iel, {
          rotateZ: "-180deg"
        }, 250);
        setTimeout(function () {
          _this2.iconElement.icon = _this2.icon;
        }, 125);
      }
    }], null, _instanceInitializers);

    var _AIActionElement = AIActionElement;
    AIActionElement = (0, _aureliaFramework.inject)(Element, _utilWaves.Waves)(AIActionElement) || AIActionElement;
    AIActionElement = (0, _aureliaFramework.customElement)('ai-action')(AIActionElement) || AIActionElement;
    return AIActionElement;
  })();

  exports.AIActionElement = AIActionElement;
});
//# sourceMappingURL=data:application/json;base64,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QUFFO0FBQzdCLGlCQUFPLEVBQUUsUUFBUTtTQUNsQixFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ1Asa0JBQVUsQ0FBQyxZQUFLO0FBQ2QsZ0JBQUssV0FBVyxDQUFDLElBQUksR0FBRyxNQUFLLFNBQVMsQ0FBQztTQUN4QyxFQUFFLEdBQUcsQ0FBQyxDQUFBO09BQ1I7OzthQUVjLDJCQUFHOzs7QUFFaEIsZ0JBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRTtBQUM3QixpQkFBTyxFQUFFLFNBQVM7U0FDbkIsRUFBRSxHQUFHLENBQUMsQ0FBQTtBQUNQLGtCQUFVLENBQUMsWUFBSztBQUNkLGlCQUFLLFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBSyxJQUFJLENBQUM7U0FDbkMsRUFBRSxHQUFHLENBQUMsQ0FBQTtPQUNSOzs7MkJBak1VLGVBQWU7QUFBZixtQkFBZSxHQUQzQixzQkF4Qk8sTUFBTSxFQXdCTixPQUFPLGFBdkJQLEtBQUssQ0F1QlUsQ0FDVixlQUFlLEtBQWYsZUFBZTtBQUFmLG1CQUFlLEdBRjNCLHNCQXZCMEMsYUFBYSxFQXVCekMsV0FBVyxDQUFDLENBRWQsZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlIiwiZmlsZSI6ImVsZW1lbnRzL2FjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0LCBiaW5kYWJsZSwgY3VzdG9tQXR0cmlidXRlLCBjdXN0b21FbGVtZW50LCBjb250YWluZXJsZXNzfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1dhdmVzfSBmcm9tICcuLi91dGlsL3dhdmVzJztcbmxldCBjbGFzc05hbWUgPSAnYWktYWN0aW9uJztcbmxldCBhY3Rpb25zU2V0dGluZ3MgPSB7XG4gIGNsYXNzUHJlZml4OiAnYWN0aW9uJyxcbiAgY2xhc3NTZXBhcmF0b3I6ICctLScsXG4gIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICBzaXplQWxpYXM6IHtcbiAgICAnc20nOidzbWFsbCcsXG4gICAgJ21kJzonbWVkaXVtJyxcbiAgICAnbGcnOidsYXJnZSdcbiAgfSxcbiAgY29sb3JBbGlhczoge1xuICAgICdwcmltYXJ5JzonYWN0aW9uLS1wcmltYXJ5JyxcbiAgICAnYWNjZW50JzonYWN0aW9uLS1hY2NlbnQnLFxuICAgICdzdWNjZXNzJzonYWN0aW9uLS1zdWNjZXNzJyxcbiAgICAnZXJyb3InOidhY3Rpb24tLWVycm9yJyxcbiAgICAnbGluayc6J2FjdGlvbi0tbGluaycsXG4gICAgJ2RhcmsnOidhY3Rpb24tLWRhcmsnLFxuICAgICdkaXNhYmxlZCc6J2FjdGlvbi0tZGlzYWJsZWQnXG4gIH1cbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWFjdGlvbicpXG5AaW5qZWN0KEVsZW1lbnQsIFdhdmVzKVxuZXhwb3J0IGNsYXNzIEFJQWN0aW9uRWxlbWVudCB7XG5cbiAgc3RhdGljIHNldHRpbmdzKHNldHRpbmdzKSB7XG4gICAgYWN0aW9uc1NldHRpbmdzID0gT2JqZWN0LmFzc2lnbihhY3Rpb25zU2V0dGluZ3MsIHNldHRpbmdzKTtcbiAgfVxuXG4gIEBiaW5kYWJsZSBpY29uICAgICAgPSBudWxsO1xuICBAYmluZGFibGUgaWNvblJpZ2h0ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGhvdmVySWNvbiAgPSBudWxsO1xuICBAYmluZGFibGUgYWN0aXZlSWNvbiAgPSBudWxsO1xuICBAYmluZGFibGUgc2l6ZSAgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHJvdW5kICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSByYWlzZWQgICAgPSBudWxsO1xuICBAYmluZGFibGUgZmxhdCAgICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGxpZ2h0ICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSBjb2xvciAgICAgPSBudWxsO1xuICBAYmluZGFibGUgYm9yZGVyZWQgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGJnICAgICAgICA9IG51bGw7XG4gIEBiaW5kYWJsZSByZXNldCAgICAgPSBudWxsO1xuICBAYmluZGFibGUgc3VibWl0ICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIHR5cGUgICAgICA9ICdhY3Rpb24nO1xuICBAYmluZGFibGUgYXR0YWNoICAgID0gbnVsbDtcbiAgQGJpbmRhYmxlIGF0dGFjaFJpZ2h0ID0gbnVsbDtcbiAgQGJpbmRhYmxlIGFjdGl2ZSAgICAgPSBudWxsO1xuICBAYmluZGFibGUgdGV4dCAgICAgICA9IG51bGw7XG5cbiAgX2xhc3QgPSB7XG4gICAgICBpY29uOiBudWxsXG4gICAgLCBjb2xvcjogbnVsbFxuICAgICwgYmc6IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCB3YXZlcykge1xuICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IGAgJHtjbGFzc05hbWV9YDtcbiAgICB0aGlzLndhdmVzID0gd2F2ZXM7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGNsYXNzTmFtZSh2YWx1ZSkge1xuICAgIGxldCBwcmVmaXggPSBhY3Rpb25zU2V0dGluZ3MuY2xhc3NQcmVmaXg7XG4gICAgbGV0IHNlcCAgICA9IGFjdGlvbnNTZXR0aW5ncy5jbGFzc1NlcGFyYXRvcjtcbiAgICByZXR1cm4gcHJlZml4ICsgc2VwICsgdmFsdWU7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcblxuICAgIC8vIHRoaXMud2F2ZXMuYXR0YWNoKHRoaXMuYWN0aW9uKTtcbiAgICB0aGlzLmJvcmRlcmVkID0gdGhpcy5ib3JkZXJlZCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdib3JkZXJlZCcpO1xuICAgIHRoaXMucm91bmQgICAgPSB0aGlzLnJvdW5kICAgIHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JvdW5kJyk7XG4gICAgdGhpcy5saWdodCAgICA9IHRoaXMubGlnaHQgICAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbGlnaHQnKTtcbiAgICB0aGlzLmZsYXQgICAgID0gdGhpcy5mbGF0ICAgICB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdmbGF0Jyk7XG4gICAgdGhpcy5yYWlzZWQgICA9IHRoaXMucmFpc2VkICAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgncmFpc2VkJyk7XG4gICAgdGhpcy5zdWJtaXQgICA9IHRoaXMuc3VibWl0ICAgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnc3VibWl0Jyk7XG5cbiAgICBpZiAodGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgnYWktd2F2ZXMnKSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3dhdmVzLWVmZmVjdCcsICd3YXZlcy1saWdodCcpO1xuICAgICAgdGhpcy5hY3Rpb24uY2xhc3NMaXN0LmFkZCgnd2F2ZXMtZWZmZWN0JywgJ3dhdmVzLWxpZ2h0Jyk7XG4gICAgICBpZiAodGhpcy5hdHRhY2hlZENvbnRhaW5lcikge1xuICAgICAgICB0aGlzLmF0dGFjaGVkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3dhdmVzLWVmZmVjdCcsICd3YXZlcy1saWdodCcpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2l6ZSA9IHRoaXMuc2l6ZSB8fCAnbWVkaXVtJztcblxuICAgIGlmICh0aGlzLmhvdmVySWNvbikge1xuICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCB0aGlzLmFuaW1hdGVJY29uQWN0aXZlLmJpbmQodGhpcykpXG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHRoaXMuYW5pbWF0ZUljb25CYWNrLmJpbmQodGhpcykpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWRFbGVtZW50KSB7XG4gICAgICB0aGlzLmF0dGFjaGVkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYXR0YWNoZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yaWdodEF0dGFjaGVkRWxlbWVudCkge1xuICAgICAgdGhpcy5hdHRhY2hlZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLnJpZ2h0QXR0YWNoZWRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2hhbmdlZCh0aGlzLmFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgaWYgKHRoaXMuaG92ZXJJY29uKSB7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIHRoaXMuYW5pbWF0ZUljb25BY3RpdmUuYmluZCh0aGlzKSlcbiAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgdGhpcy5hbmltYXRlSWNvbkJhY2suYmluZCh0aGlzKSlcbiAgICB9XG4gIH1cblxuICBzaXplQ2hhbmdlZChzaXplKSB7XG4gICAgc2l6ZSA9IGFjdGlvbnNTZXR0aW5ncy5zaXplQWxpYXNbc2l6ZV0gfHwgc2l6ZTtcbiAgICB0aGlzLnNpemVDbGFzcyA9IHNpemUgPyB0aGlzLmNsYXNzTmFtZShzaXplKSA6ICcnO1xuICB9XG5cbiAgYm9yZGVyZWRDaGFuZ2VkKGJvcmRlcmVkKSB7XG4gICAgdGhpcy5ib3JkZXJlZENsYXNzID0gYm9yZGVyZWQgPyB0aGlzLmNsYXNzTmFtZSgnYm9yZGVyZWQnKSA6ICcnO1xuICB9XG5cbiAgYmxvY2tDaGFuZ2VkKGJsb2NrKSB7XG4gICAgdGhpcy5ibG9ja0NsYXNzID0gYmxvY2sgPyB0aGlzLmNsYXNzTmFtZSgnYmxvY2snKSA6ICcnO1xuICB9XG5cbiAgcm91bmRDaGFuZ2VkKHJvdW5kKSB7XG4gICAgdGhpcy5yb3VuZENsYXNzID0gcm91bmQgPyB0aGlzLmNsYXNzTmFtZSgncm91bmQnKSA6ICcnO1xuICB9XG5cbiAgcmFpc2VkQ2hhbmdlZChyYWlzZWQpIHtcbiAgICB0aGlzLnJhaXNlZENsYXNzID0gcmFpc2VkID8gdGhpcy5jbGFzc05hbWUoJ3JhaXNlZCcpIDogJyc7XG4gIH1cblxuICBmbGF0Q2hhbmdlZChmbGF0KSB7XG4gICAgdGhpcy5mbGF0Q2xhc3MgPSBmbGF0ID8gdGhpcy5jbGFzc05hbWUoJ2ZsYXQnKSA6ICcnO1xuICB9XG5cbiAgbGlnaHRDaGFuZ2VkKGxpZ2h0KSB7XG4gICAgdGhpcy5saWdodENsYXNzID0gbGlnaHQgPyB0aGlzLmNsYXNzTmFtZSgnbGlnaHQnKSA6ICcnO1xuICB9XG5cbiAgY29sb3JDaGFuZ2VkKGNvbG9yKSB7XG4gICAgaWYgKC9wcmltYXJ5fHNlY29uZGFyeXxhY2NlbnR8c3VjY2Vzc3xlcnJvcnx3YXJuLy50ZXN0KGNvbG9yKSkge1xuICAgICAgdGhpcy5jb2xvckNsYXNzID0gYGFjdGlvbi0tJHtjb2xvcn1gO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNvbG9yQ2xhc3MgPSBgY29sb3ItJHtjb2xvcn1gO1xuICAgIH1cbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuYWN0aW9uKSByZXR1cm47XG4gICAgdGhpcy5hY3Rpb24uY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lzLWFjdGl2ZScpO1xuICB9XG5cbiAgYmdDaGFuZ2VkKGJnKSB7XG4gICAgaWYgKGJnKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdiZycsICcnKVxuICAgICAgdGhpcy5iZ0NsYXNzID0gYWN0aW9uc1NldHRpbmdzLmNvbG9yQWxpYXNbYmddIHx8IGBiZy0ke2JnfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYmdDbGFzcyA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIHN1Ym1pdENoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUpIHRoaXMudHlwZSA9ICdzdWJtaXQnO1xuICB9XG5cbiAgcmVzZXRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB0aGlzLnR5cGUgPSAncmVzZXQnO1xuICB9XG5cbiAgYXR0YWNoQ2hhbmdlZChhdHRhY2htZW50KSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGlvbi0taGFzLWF0dGFjaG1lbnQnKVxuICAgIGxldCBlbGVtZW50ID0gYXR0YWNobWVudCBpbnN0YW5jZW9mIEVsZW1lbnRcbiAgICAgID8gYXR0YWNobWVudFxuICAgICAgOiBhdHRhY2htZW50LmVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgICA/IGVsZW1lbnQgPSBhdHRhY2htZW50LmVsZW1lbnRcbiAgICAgIDogbnVsbDtcbiAgICB0aGlzLmF0dGFjaGVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhdHRhY2hSaWdodENoYW5nZWQoYXR0YWNobWVudCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3Rpb24tLWhhcy1hdHRhY2htZW50JylcbiAgICBsZXQgZWxlbWVudCA9IGF0dGFjaG1lbnQgaW5zdGFuY2VvZiBFbGVtZW50XG4gICAgICA/IGF0dGFjaG1lbnRcbiAgICAgIDogYXR0YWNobWVudC5lbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudFxuICAgICAgPyBlbGVtZW50ID0gYXR0YWNobWVudC5lbGVtZW50XG4gICAgICA6IG51bGw7XG4gICAgdGhpcy5yaWdodEF0dGFjaGVkRWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICAvKipcbiAgICogaWNvbkNoYW5nZWRcbiAgICpcbiAgICogQHBhcmFtICB7U3RyaW5nfSB2YWx1ZSAgLSBUaGUgbmV3IEljb24gQ2xhc3MgdG8gYmUgYWRkZWQgdG8gdGhlIEljb24gRWxlbWVudC5cbiAgICpcbiAgICogUmVtb3ZlIG9sZCBJY29uIGNsYXNzPyBpZiBpdCBleGlzdHMuXG4gICAqL1xuICBhbmltYXRlSWNvbkFjdGl2ZSgpIHtcblxuICAgIFZlbG9jaXR5KHRoaXMuaWNvbkVsZW1lbnQuaWVsLCB7XG4gICAgICByb3RhdGVaOiBcIjE4MGRlZ1wiLFxuICAgIH0sIDI1MClcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgdGhpcy5pY29uRWxlbWVudC5pY29uID0gdGhpcy5ob3Zlckljb247XG4gICAgfSwgMTI1KVxuICB9XG5cbiAgYW5pbWF0ZUljb25CYWNrKCkge1xuXG4gICAgVmVsb2NpdHkodGhpcy5pY29uRWxlbWVudC5pZWwsIHtcbiAgICAgIHJvdGF0ZVo6IFwiLTE4MGRlZ1wiLFxuICAgIH0sIDI1MClcbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgdGhpcy5pY29uRWxlbWVudC5pY29uID0gdGhpcy5pY29uO1xuICAgIH0sIDEyNSlcbiAgfVxufVxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
