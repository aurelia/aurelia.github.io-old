/* */ 
define(['exports', 'aurelia-framework', 'lodash/string/capitalize', 'lodash/string/camelCase', './form', 'lodash'], function (exports, _aureliaFramework, _lodashStringCapitalize, _lodashStringCamelCase, _form, _lodash) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var _capitalize = _interopRequireDefault(_lodashStringCapitalize);

  var _camelCase = _interopRequireDefault(_lodashStringCamelCase);

  function isPlatform(string, attr) {
    var regex = new RegExp(attr + 's|' + attr + '-(ai|ios|android|win|windows)', 'gi');
    return regex.test(string);
  }

  function isPromise(value) {
    return typeof value === 'object' && typeof value.then === 'function';
  }

  function resolvePromise(pr, resolver, catcher) {
    catcher = catcher || resolver;
    return pr.then(function (data) {
      return resolver(data);
    })['catch'](function (err) {
      return catcher(err);
    });
  }

  var className = 'ai-input';

  var InputElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(InputElement, [{
      key: 'id',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'placeholder',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'model',
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
      key: 'name',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'min',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'max',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return '';
      },
      enumerable: true
    }, {
      key: 'required',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'false';
      },
      enumerable: true
    }, {
      key: 'readonly',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'disable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'password',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'resizable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'type',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return 'text';
      },
      enumerable: true
    }, {
      key: 'dataList',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function InputElement(element, form) {
      _classCallCheck(this, _InputElement);

      _defineDecoratedPropertyDescriptor(this, 'id', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'placeholder', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'name', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'min', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'max', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'required', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'readonly', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'disable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'password', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'resizable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'dataList', _instanceInitializers);

      this.unBindableListeners = [];

      element.className += ' ' + className;
      this.element = element;

      if (form.isFormElement) {
        this.form = form;
      }
    }

    _createDecoratedClass(InputElement, [{
      key: 'attached',
      value: function attached() {
        if (!this.inputElement) this.inputElement = this.textarea;
        this.labelElement = this.selectLabel();
        this.name = this.name || this.label;
        this.name && (this.label = this.label || (0, _capitalize['default'])(this.name));

        this.resizable = this.resizable || this.element.hasAttribute('resizable');
        this.disable = this.disable || this.element.hasAttribute('disable');
        this.password = this.password || this.element.hasAttribute('password');
        this.required = this.required || this.element.hasAttribute('required');
        this.readonly = this.readonly || this.element.hasAttribute('readonly');

        this.placeholder = this.placeholder || this.label;

        if (this.disable) this.disableChanged(this.disable);
        if (this.value) this.valueChanged(this.value);

        if (this.name) this.name = this.name.toLowerCase();

        this.id = this.id || this.name && this.name.toLowerCase() || this.label && this.label.toLowerCase();

        if (this.id) this.id = (0, _camelCase['default'])(this.id);

        if (this.id && this.form) {
          this.form.addInput(this.id, this);
        }

        if (this.datalist && this.isDataListElement) {
          this.inputElement.setAttribute('data-list', this.listId);
        }

        this.listElement = this.setectDatalist();
      }
    }, {
      key: 'detached',
      value: function detached() {
        var unbindableIndex = undefined;
        for (unbindableIndex in this.unBindableListeners) {
          var listener = this.unBindableListeners[unbindableIndex];
          listener.element.removeEventListener(listener.type, listener.method);
        }
      }
    }, {
      key: 'selectLabel',
      value: function selectLabel() {
        var labelElement = this.element.querySelectorAll('label')[0];
        if (labelElement) {
          var label = labelElement.innerText || labelElement.innerHTML;
          this.label = label.trim();
        } else {
          labelElement = document.createElement('LABEL');
          if (this.name && !this.label) {
            this.label = (0, _capitalize['default'])(this.name);
          }
          labelElement.innerText = this.label;
        }
        return labelElement;
      }
    }, {
      key: 'setectDatalist',
      value: function setectDatalist() {
        var listElement = this.element.getElementsByTagName('datalist')[0];
        if (!listElement) return;

        var id = this.element.getAttribute('list') || listElement.id;
        if (!id) return;

        this.inputElement.setAttribute('list', id);
        listElement.setAttribute('id', id);
        return listElement;
      }
    }, {
      key: 'click',
      value: function click() {
        this.inputElement.focus();
      }
    }, {
      key: 'idChanged',
      value: function idChanged() {}
    }, {
      key: 'nameChanged',
      value: function nameChanged() {}
    }, {
      key: 'valueChanged',
      value: function valueChanged(value) {
        if (value && !this.element.classList.contains('has-value')) {
          this.element.classList.add('has-value');
        }
        if (!value) {
          this.element.classList.remove('has-value');
        }
        if (this.form) {
          this.form.setValue(this.name, value);
        }

        if (this.resizable && this.textarea) {
          this.textarea.style.cssText = 'height:auto; padding:0';
          var height = 'height:' + this.textarea.scrollHeight + 'px';
          this.textarea.style.cssText = height;
        }
      }
    }, {
      key: 'placeholderChanged',
      value: function placeholderChanged(placeholder) {
        if (this.inputElement) {
          placeholder ? this.inputElement.setAttribute('placeholder', placeholder) : this.inputElement.removeAttribute('placeholder');
        }
      }
    }, {
      key: 'passwordChanged',
      value: function passwordChanged(isPassword) {
        this.type = isPassword ? 'password' : 'text';
      }
    }, {
      key: 'disableChanged',
      value: function disableChanged(value) {
        this.element.classList[value ? 'add' : 'remove']('input--disable');

        if (value && this.inputElement) {
          this.inputElement.disabled = true;
        }
      }
    }, {
      key: 'requiredChanged',
      value: function requiredChanged(value) {
        this.toggleAttribute('required', value);
      }
    }, {
      key: 'minChanged',
      value: function minChanged(value) {
        this.toggleAttribute('min', value);
      }
    }, {
      key: 'maxChanged',
      value: function maxChanged(value) {
        this.toggleAttribute('max', value);
      }
    }, {
      key: 'readonlyChanged',
      value: function readonlyChanged(value) {
        if (!this.inputElement) return;
        this.inputElement.readOnly = value ? true : '';
      }
    }, {
      key: 'toggleAttribute',
      value: function toggleAttribute(attrName, value) {
        if (value) this.inputElement.setAttribute(attrName, value);else this.inputElement.removeAttribute(attrName);
      }
    }, {
      key: 'dataListChanged',
      value: function dataListChanged(list) {
        this.isDataListElement = list instanceof Element;
        if (!this.listId) this.listId = (0, _lodash.uniqueId)(this.name || 'ai_input_');
        if (this.isDataListElement) {
          list.id = this.listId;
        }
      }
    }], null, _instanceInitializers);

    var _InputElement = InputElement;
    InputElement = (0, _aureliaFramework.customElement)('ai-input')(InputElement) || InputElement;
    InputElement = (0, _aureliaFramework.inject)(Element, _form.FormComponent)(InputElement) || InputElement;
    return InputElement;
  })();

  exports.InputElement = InputElement;
});
//# sourceMappingURL=data:application/json;base64,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O2FBRVMsb0JBQUMsS0FBSyxFQUFFO0FBQ2hCLFlBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO09BQ3BDOzs7YUFFYyx5QkFBQyxLQUFLLEVBQUU7QUFDckIsWUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsT0FBTztBQUMvQixZQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxHQUFHLEVBQUUsQ0FBQztPQUNoRDs7O2FBRWMseUJBQUMsUUFBUSxFQUFFLEtBQUssRUFBRTtBQUMvQixZQUFJLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUMsS0FDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDbEQ7OzthQUVjLHlCQUFDLElBQUksRUFBRTtBQUNwQixZQUFJLENBQUMsaUJBQWlCLEdBQUksSUFBSSxZQUFZLE9BQU8sQUFBQyxDQUFDO0FBQ25ELFlBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsWUFoTTVCLFFBQVEsRUFnTTZCLElBQUksQ0FBQyxJQUFJLElBQUksV0FBVyxDQUFDLENBQUM7QUFDbkUsWUFBSSxJQUFJLENBQUMsaUJBQWlCLEVBQUU7QUFDMUIsY0FBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3ZCO09BQ0Y7Ozt3QkEvS1UsWUFBWTtBQUFaLGdCQUFZLEdBRHhCLHNCQXhCTyxhQUFhLEVBd0JOLFVBQVUsQ0FBQyxDQUNiLFlBQVksS0FBWixZQUFZO0FBQVosZ0JBQVksR0FGeEIsc0JBdkJnQyxNQUFNLEVBdUIvQixPQUFPLFFBcEJQLGFBQWEsQ0FvQlUsQ0FFbEIsWUFBWSxLQUFaLFlBQVk7V0FBWixZQUFZIiwiZmlsZSI6ImZvcm1zL19pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IGNhcGl0YWxpemUgZnJvbSAnbG9kYXNoL3N0cmluZy9jYXBpdGFsaXplJztcbmltcG9ydCBjYW1lbENhc2UgZnJvbSAnbG9kYXNoL3N0cmluZy9jYW1lbENhc2UnO1xuaW1wb3J0IHtGb3JtQ29tcG9uZW50fSBmcm9tICcuL2Zvcm0nO1xuaW1wb3J0IHt1bmlxdWVJZH0gZnJvbSAnbG9kYXNoJztcblxuXG5mdW5jdGlvbiBpc1BsYXRmb3JtKHN0cmluZywgYXR0cikge1xuICBsZXQgcmVnZXggPSBuZXcgUmVnRXhwKGAke2F0dHJ9XFxzfCR7YXR0cn0tKGFpfGlvc3xhbmRyb2lkfHdpbnx3aW5kb3dzKWAsICdnaScpO1xuICByZXR1cm4gcmVnZXgudGVzdChzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLnRoZW4gPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHByLCByZXNvbHZlciwgY2F0Y2hlcikge1xuICBjYXRjaGVyID0gY2F0Y2hlciB8fCByZXNvbHZlcjtcbiAgcmV0dXJuIHByLnRoZW4oKGRhdGEpPT4gcmVzb2x2ZXIoZGF0YSkpLmNhdGNoKChlcnIpPT4gY2F0Y2hlcihlcnIpKTtcbn1cblxuY29uc3QgY2xhc3NOYW1lID0gJ2FpLWlucHV0JztcblxuQGluamVjdChFbGVtZW50LCBGb3JtQ29tcG9uZW50KVxuQGN1c3RvbUVsZW1lbnQoJ2FpLWlucHV0JylcbmV4cG9ydCBjbGFzcyBJbnB1dEVsZW1lbnQge1xuXG4gIEBiaW5kYWJsZSBpZCA9IG51bGw7XG4gIEBiaW5kYWJsZSBwbGFjZWhvbGRlciA9IG51bGw7XG5cbiAgQGJpbmRhYmxlIG1vZGVsID0gbnVsbDtcbiAgQGJpbmRhYmxlIHZhbHVlID0gbnVsbDtcbiAgQGJpbmRhYmxlIG5hbWUgPSBudWxsO1xuXG4gIEBiaW5kYWJsZSBtaW4gPSAnJztcbiAgQGJpbmRhYmxlIG1heCA9ICcnO1xuICBAYmluZGFibGUgcmVxdWlyZWQgPSAnZmFsc2UnO1xuICBAYmluZGFibGUgcmVhZG9ubHkgPSBudWxsO1xuICBAYmluZGFibGUgZGlzYWJsZSA9IGZhbHNlO1xuICBAYmluZGFibGUgcGFzc3dvcmQgPSBmYWxzZTtcbiAgQGJpbmRhYmxlIHJlc2l6YWJsZSA9IG51bGw7XG4gIEBiaW5kYWJsZSB0eXBlID0gJ3RleHQnO1xuICBAYmluZGFibGUgZGF0YUxpc3QgPSBudWxsO1xuXG4gIHVuQmluZGFibGVMaXN0ZW5lcnMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBmb3JtKSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG5cbiAgICBpZiAoZm9ybS5pc0Zvcm1FbGVtZW50KSB7XG4gICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHRoaXMuaW5wdXRFbGVtZW50ID0gdGhpcy50ZXh0YXJlYTtcbiAgICB0aGlzLmxhYmVsRWxlbWVudCA9IHRoaXMuc2VsZWN0TGFiZWwoKTtcbiAgICB0aGlzLm5hbWUgPSB0aGlzLm5hbWUgfHwgdGhpcy5sYWJlbDtcbiAgICB0aGlzLm5hbWUgJiYgKHRoaXMubGFiZWwgPSB0aGlzLmxhYmVsIHx8IGNhcGl0YWxpemUodGhpcy5uYW1lKSk7XG5cbiAgICB0aGlzLnJlc2l6YWJsZSA9IHRoaXMucmVzaXphYmxlICB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXNpemFibGUnKTtcbiAgICB0aGlzLmRpc2FibGUgID0gdGhpcy5kaXNhYmxlICB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlJyk7XG4gICAgdGhpcy5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5IHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG5cbiAgICB0aGlzLnBsYWNlaG9sZGVyID0gdGhpcy5wbGFjZWhvbGRlciB8fCB0aGlzLmxhYmVsO1xuXG4gICAgaWYgKHRoaXMuZGlzYWJsZSlcbiAgICAgIHRoaXMuZGlzYWJsZUNoYW5nZWQodGhpcy5kaXNhYmxlKTtcbiAgICBpZiAodGhpcy52YWx1ZSlcbiAgICAgIHRoaXMudmFsdWVDaGFuZ2VkKHRoaXMudmFsdWUpO1xuXG4gICAgaWYgKHRoaXMubmFtZSkgdGhpcy5uYW1lID0gdGhpcy5uYW1lLnRvTG93ZXJDYXNlKCk7XG5cbiAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCAodGhpcy5uYW1lICYmIHRoaXMubmFtZS50b0xvd2VyQ2FzZSgpKSB8fCAodGhpcy5sYWJlbCAmJiB0aGlzLmxhYmVsLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgaWYgKHRoaXMuaWQpIHRoaXMuaWQgPSBjYW1lbENhc2UodGhpcy5pZCk7XG5cbiAgICBpZiAoIHRoaXMuaWQgJiYgdGhpcy5mb3JtICkge1xuICAgICAgdGhpcy5mb3JtLmFkZElucHV0KHRoaXMuaWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGFsaXN0ICYmIHRoaXMuaXNEYXRhTGlzdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0JywgdGhpcy5saXN0SWQpO1xuICAgIH1cblxuICAgIHRoaXMubGlzdEVsZW1lbnQgPSB0aGlzLnNldGVjdERhdGFsaXN0KCk7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICBsZXQgdW5iaW5kYWJsZUluZGV4O1xuICAgIGZvcih1bmJpbmRhYmxlSW5kZXggaW4gdGhpcy51bkJpbmRhYmxlTGlzdGVuZXJzKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLnVuQmluZGFibGVMaXN0ZW5lcnNbdW5iaW5kYWJsZUluZGV4XTtcbiAgICAgIGxpc3RlbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lci50eXBlLCBsaXN0ZW5lci5tZXRob2QpO1xuICAgIH1cbiAgfVxuXG4gIC8qIFFVRVJZIFNFTEVDVE9SUyAqL1xuICBzZWxlY3RMYWJlbCgpIHtcbiAgICBsZXQgbGFiZWxFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJylbMF07XG4gICAgaWYgKGxhYmVsRWxlbWVudCkge1xuICAgICAgbGV0IGxhYmVsID0gbGFiZWxFbGVtZW50LmlubmVyVGV4dCB8fCBsYWJlbEVsZW1lbnQuaW5uZXJIVE1MO1xuICAgICAgdGhpcy5sYWJlbCA9IGxhYmVsLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEFCRUwnKTtcbiAgICAgIGlmICh0aGlzLm5hbWUgJiYgIXRoaXMubGFiZWwpIHtcbiAgICAgICAgdGhpcy5sYWJlbCA9IGNhcGl0YWxpemUodGhpcy5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGxhYmVsRWxlbWVudC5pbm5lclRleHQgPSB0aGlzLmxhYmVsO1xuICAgIH1cbiAgICByZXR1cm4gbGFiZWxFbGVtZW50O1xuICB9XG5cbiAgc2V0ZWN0RGF0YWxpc3QoKSB7XG4gICAgbGV0IGxpc3RFbGVtZW50ID0gdGhpcy5lbGVtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdkYXRhbGlzdCcpWzBdO1xuICAgIGlmICghbGlzdEVsZW1lbnQpIHJldHVybjtcblxuICAgIGxldCBpZCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2xpc3QnKSB8fCBsaXN0RWxlbWVudC5pZDtcbiAgICBpZiAoIWlkKSByZXR1cm47XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2xpc3QnLCBpZCk7XG4gICAgbGlzdEVsZW1lbnQuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcbiAgICByZXR1cm4gbGlzdEVsZW1lbnQ7XG4gIH1cblxuICAvKiBFVkVOVCBIQU5ETEVSUyAqL1xuICBjbGljaygpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgaWRDaGFuZ2VkKCkge31cbiAgbmFtZUNoYW5nZWQoKSB7fVxuXG4gIHZhbHVlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSAmJiAhdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnaGFzLXZhbHVlJykpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoYXMtdmFsdWUnKTtcbiAgICB9XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2hhcy12YWx1ZScpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtKSB7XG4gICAgICB0aGlzLmZvcm0uc2V0VmFsdWUodGhpcy5uYW1lLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmVzaXphYmxlICYmIHRoaXMudGV4dGFyZWEpIHtcbiAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuY3NzVGV4dCA9ICdoZWlnaHQ6YXV0bzsgcGFkZGluZzowJztcbiAgICAgIGxldCBoZWlnaHQgPSAgJ2hlaWdodDonICsgdGhpcy50ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyAncHgnO1xuICAgICAgdGhpcy50ZXh0YXJlYS5zdHlsZS5jc3NUZXh0ID0gaGVpZ2h0O1xuICAgIH1cbiAgfVxuXG4gIHBsYWNlaG9sZGVyQ2hhbmdlZChwbGFjZWhvbGRlcikge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgcGxhY2Vob2xkZXIgPyB0aGlzLmlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgcGxhY2Vob2xkZXIpXG4gICAgICAgICAgICAgICAgICA6IHRoaXMuaW5wdXRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgncGxhY2Vob2xkZXInKTtcbiAgICB9XG4gIH1cblxuICBwYXNzd29yZENoYW5nZWQoaXNQYXNzd29yZCkge1xuICAgIHRoaXMudHlwZSA9IGlzUGFzc3dvcmQgPyAncGFzc3dvcmQnIDogJ3RleHQnO1xuICB9XG5cbiAgZGlzYWJsZUNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W3ZhbHVlID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ2lucHV0LS1kaXNhYmxlJyk7XG5cbiAgICBpZiAodmFsdWUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXF1aXJlZENoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSgncmVxdWlyZWQnLCB2YWx1ZSk7XG4gIH1cblxuICBtaW5DaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ21pbicsIHZhbHVlKTtcbiAgfVxuXG4gIG1heENoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSgnbWF4JywgdmFsdWUpO1xuICB9XG5cbiAgcmVhZG9ubHlDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmlucHV0RWxlbWVudCkgcmV0dXJuO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnJlYWRPbmx5ID0gdmFsdWUgPyB0cnVlIDogJyc7XG4gIH1cblxuICB0b2dnbGVBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB0aGlzLmlucHV0RWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIHZhbHVlKTtcbiAgICBlbHNlIHRoaXMuaW5wdXRFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gIH1cblxuICBkYXRhTGlzdENoYW5nZWQobGlzdCkge1xuICAgIHRoaXMuaXNEYXRhTGlzdEVsZW1lbnQgPSAobGlzdCBpbnN0YW5jZW9mIEVsZW1lbnQpO1xuICAgIGlmICghdGhpcy5saXN0SWQpIHRoaXMubGlzdElkID0gdW5pcXVlSWQodGhpcy5uYW1lIHx8ICdhaV9pbnB1dF8nKTtcbiAgICBpZiAodGhpcy5pc0RhdGFMaXN0RWxlbWVudCkge1xuICAgICAgbGlzdC5pZCA9IHRoaXMubGlzdElkO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
