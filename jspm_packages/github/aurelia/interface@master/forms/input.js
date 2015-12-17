/* */ 
define(['exports', 'aurelia-framework', 'aurelia-binding', 'lodash/string/capitalize', 'lodash/string/camelCase', './form', 'lodash', './control'], function (exports, _aureliaFramework, _aureliaBinding, _lodashStringCapitalize, _lodashStringCamelCase, _form, _lodash, _control) {
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

    function InputElement(element, control, form) {
      _classCallCheck(this, _InputElement);

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

      if (control.TextInput) {
        this.control = control.TextInput(this);
      }

      if (form.isFormElement) {
        this.form = form;
      }
    }

    _createDecoratedClass(InputElement, [{
      key: 'attached',
      value: function attached() {
        if (!this.inputElement) this.inputElement = this.textarea;

        this.resizable = this.resizable || this.element.hasAttribute('resizable');
        this.disable = this.disable || this.element.hasAttribute('disable');
        this.password = this.password || this.element.hasAttribute('password');
        this.required = this.required || this.element.hasAttribute('required');
        this.readonly = this.readonly || this.element.hasAttribute('readonly');

        if (this.disable) this.disableChanged(this.disable);
        if (this.value) this.valueChanged(this.value);

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
      key: 'nameChanged',
      value: function nameChanged(name) {
        this.id = this.id || this.element.id || name;
        if (this.control.label && !this.control.label.hasAttribute('for')) {
          this.control.label.setAttribute('for', this.id || this.name);
        }
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
    InputElement = (0, _aureliaFramework.bindable)({
      name: 'value',
      defaultBindingMode: _aureliaBinding.bindingMode.twoWay
    })(InputElement) || InputElement;
    InputElement = (0, _aureliaFramework.customElement)('ai-input')(InputElement) || InputElement;
    InputElement = (0, _aureliaFramework.inject)(Element, _control.ControlComponent, _form.FormComponent)(InputElement) || InputElement;
    return InputElement;
  })();

  exports.InputElement = InputElement;
});
//# sourceMappingURL=data:application/json;base64,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QUFXLENBNEJlLE1BQU07S0FDdkMsQ0FBQyxDQUNXLFlBQVksS0FBWixZQUFZO0FBQVosZ0JBQVksR0FMeEIsc0JBMUJPLGFBQWEsRUEwQk4sVUFBVSxDQUFDLENBS2IsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQU54QixzQkF6QmdDLE1BQU0sRUF5Qi9CLE9BQU8sV0FuQlAsZ0JBQWdCLFFBRmhCLGFBQWEsQ0FxQjRCLENBTXBDLFlBQVksS0FBWixZQUFZO1dBQVosWUFBWSIsImZpbGUiOiJmb3Jtcy9pbnB1dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtiaW5kaW5nTW9kZX0gZnJvbSAnYXVyZWxpYS1iaW5kaW5nJztcbmltcG9ydCBjYXBpdGFsaXplIGZyb20gJ2xvZGFzaC9zdHJpbmcvY2FwaXRhbGl6ZSc7XG5pbXBvcnQgY2FtZWxDYXNlIGZyb20gJ2xvZGFzaC9zdHJpbmcvY2FtZWxDYXNlJztcbmltcG9ydCB7Rm9ybUNvbXBvbmVudH0gZnJvbSAnLi9mb3JtJztcbmltcG9ydCB7dW5pcXVlSWR9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQge0NvbnRyb2xDb21wb25lbnR9IGZyb20gJy4vY29udHJvbCc7XG5cblxuZnVuY3Rpb24gaXNQbGF0Zm9ybShzdHJpbmcsIGF0dHIpIHtcbiAgbGV0IHJlZ2V4ID0gbmV3IFJlZ0V4cChgJHthdHRyfVxcc3wke2F0dHJ9LShhaXxpb3N8YW5kcm9pZHx3aW58d2luZG93cylgLCAnZ2knKTtcbiAgcmV0dXJuIHJlZ2V4LnRlc3Qoc3RyaW5nKTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNlKHZhbHVlKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YWx1ZS50aGVuID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUHJvbWlzZShwciwgcmVzb2x2ZXIsIGNhdGNoZXIpIHtcbiAgY2F0Y2hlciA9IGNhdGNoZXIgfHwgcmVzb2x2ZXI7XG4gIHJldHVybiBwci50aGVuKChkYXRhKT0+IHJlc29sdmVyKGRhdGEpKS5jYXRjaCgoZXJyKT0+IGNhdGNoZXIoZXJyKSk7XG59XG5cbmNvbnN0IGNsYXNzTmFtZSA9ICdhaS1pbnB1dCc7XG5cbkBpbmplY3QoRWxlbWVudCwgQ29udHJvbENvbXBvbmVudCwgRm9ybUNvbXBvbmVudClcbkBjdXN0b21FbGVtZW50KCdhaS1pbnB1dCcpXG5AYmluZGFibGUoe1xuICBuYW1lOid2YWx1ZScsXG4gIGRlZmF1bHRCaW5kaW5nTW9kZTogYmluZGluZ01vZGUudHdvV2F5XG59KVxuZXhwb3J0IGNsYXNzIElucHV0RWxlbWVudCB7XG5cbiAgQGJpbmRhYmxlIHBsYWNlaG9sZGVyID0gbnVsbDtcblxuICBAYmluZGFibGUgbW9kZWwgPSBudWxsO1xuICBAYmluZGFibGUgdmFsdWUgPSBudWxsO1xuICBAYmluZGFibGUgbmFtZSA9IG51bGw7XG5cbiAgQGJpbmRhYmxlIG1pbiA9ICcnO1xuICBAYmluZGFibGUgbWF4ID0gJyc7XG4gIEBiaW5kYWJsZSByZXF1aXJlZCA9ICdmYWxzZSc7XG4gIEBiaW5kYWJsZSByZWFkb25seSA9IG51bGw7XG4gIEBiaW5kYWJsZSBkaXNhYmxlID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBwYXNzd29yZCA9IGZhbHNlO1xuICBAYmluZGFibGUgcmVzaXphYmxlID0gbnVsbDtcbiAgQGJpbmRhYmxlIHR5cGUgPSAndGV4dCc7XG4gIEBiaW5kYWJsZSBkYXRhTGlzdCA9IG51bGw7XG5cbiAgdW5CaW5kYWJsZUxpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRyb2wsIGZvcm0pIHtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBgICR7Y2xhc3NOYW1lfWA7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIGlmIChjb250cm9sLlRleHRJbnB1dCkge1xuICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbC5UZXh0SW5wdXQodGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKGZvcm0uaXNGb3JtRWxlbWVudCkge1xuICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5wdXRFbGVtZW50KSB0aGlzLmlucHV0RWxlbWVudCA9IHRoaXMudGV4dGFyZWE7XG5cbiAgICB0aGlzLnJlc2l6YWJsZSA9IHRoaXMucmVzaXphYmxlICB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXNpemFibGUnKTtcbiAgICB0aGlzLmRpc2FibGUgID0gdGhpcy5kaXNhYmxlICB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdkaXNhYmxlJyk7XG4gICAgdGhpcy5wYXNzd29yZCA9IHRoaXMucGFzc3dvcmQgfHwgdGhpcy5lbGVtZW50Lmhhc0F0dHJpYnV0ZSgncGFzc3dvcmQnKTtcbiAgICB0aGlzLnJlcXVpcmVkID0gdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpO1xuICAgIHRoaXMucmVhZG9ubHkgPSB0aGlzLnJlYWRvbmx5IHx8IHRoaXMuZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlKVxuICAgICAgdGhpcy5kaXNhYmxlQ2hhbmdlZCh0aGlzLmRpc2FibGUpO1xuICAgIGlmICh0aGlzLnZhbHVlKVxuICAgICAgdGhpcy52YWx1ZUNoYW5nZWQodGhpcy52YWx1ZSk7XG5cbiAgICBpZiAoIHRoaXMuaWQgJiYgdGhpcy5mb3JtICkge1xuICAgICAgdGhpcy5mb3JtLmFkZElucHV0KHRoaXMuaWQsIHRoaXMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRhdGFsaXN0ICYmIHRoaXMuaXNEYXRhTGlzdEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnZGF0YS1saXN0JywgdGhpcy5saXN0SWQpO1xuICAgIH1cblxuICAgIHRoaXMubGlzdEVsZW1lbnQgPSB0aGlzLnNldGVjdERhdGFsaXN0KCk7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICBsZXQgdW5iaW5kYWJsZUluZGV4O1xuICAgIGZvcih1bmJpbmRhYmxlSW5kZXggaW4gdGhpcy51bkJpbmRhYmxlTGlzdGVuZXJzKSB7XG4gICAgICBsZXQgbGlzdGVuZXIgPSB0aGlzLnVuQmluZGFibGVMaXN0ZW5lcnNbdW5iaW5kYWJsZUluZGV4XTtcbiAgICAgIGxpc3RlbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lci50eXBlLCBsaXN0ZW5lci5tZXRob2QpO1xuICAgIH1cbiAgfVxuXG4gIG5hbWVDaGFuZ2VkKG5hbWUpIHtcbiAgICB0aGlzLmlkID0gdGhpcy5pZCB8fCB0aGlzLmVsZW1lbnQuaWQgfHwgbmFtZTtcbiAgICBpZiAodGhpcy5jb250cm9sLmxhYmVsICYmICF0aGlzLmNvbnRyb2wubGFiZWwuaGFzQXR0cmlidXRlKCdmb3InKSkge1xuICAgICAgdGhpcy5jb250cm9sLmxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgdGhpcy5pZCB8fCB0aGlzLm5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qIFFVRVJZIFNFTEVDVE9SUyAqL1xuICBzZXRlY3REYXRhbGlzdCgpIHtcbiAgICBsZXQgbGlzdEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RhdGFsaXN0JylbMF07XG4gICAgaWYgKCFsaXN0RWxlbWVudCkgcmV0dXJuO1xuXG4gICAgbGV0IGlkID0gdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbGlzdCcpIHx8IGxpc3RFbGVtZW50LmlkO1xuICAgIGlmICghaWQpIHJldHVybjtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldEF0dHJpYnV0ZSgnbGlzdCcsIGlkKTtcbiAgICBsaXN0RWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgaWQpO1xuICAgIHJldHVybiBsaXN0RWxlbWVudDtcbiAgfVxuXG4gIC8qIEVWRU5UIEhBTkRMRVJTICovXG4gIGNsaWNrKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICB2YWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2hhcy12YWx1ZScpKSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaGFzLXZhbHVlJyk7XG4gICAgfVxuICAgIGlmICghdmFsdWUpIHtcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoYXMtdmFsdWUnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgdGhpcy5mb3JtLnNldFZhbHVlKHRoaXMubmFtZSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlc2l6YWJsZSAmJiB0aGlzLnRleHRhcmVhKSB7XG4gICAgICB0aGlzLnRleHRhcmVhLnN0eWxlLmNzc1RleHQgPSAnaGVpZ2h0OmF1dG87IHBhZGRpbmc6MCc7XG4gICAgICBsZXQgaGVpZ2h0ID0gICdoZWlnaHQ6JyArIHRoaXMudGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgJ3B4JztcbiAgICAgIHRoaXMudGV4dGFyZWEuc3R5bGUuY3NzVGV4dCA9IGhlaWdodDtcbiAgICB9XG4gIH1cblxuICBwbGFjZWhvbGRlckNoYW5nZWQocGxhY2Vob2xkZXIpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHBsYWNlaG9sZGVyID8gdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIHBsYWNlaG9sZGVyKVxuICAgICAgICAgICAgICAgICAgOiB0aGlzLmlucHV0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJyk7XG4gICAgfVxuICB9XG5cbiAgcGFzc3dvcmRDaGFuZ2VkKGlzUGFzc3dvcmQpIHtcbiAgICB0aGlzLnR5cGUgPSBpc1Bhc3N3b3JkID8gJ3Bhc3N3b3JkJyA6ICd0ZXh0JztcbiAgfVxuXG4gIGRpc2FibGVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpbnB1dC0tZGlzYWJsZScpO1xuXG4gICAgaWYgKHZhbHVlICYmIHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmVxdWlyZWRDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgdmFsdWUpO1xuICB9XG5cbiAgbWluQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdtaW4nLCB2YWx1ZSk7XG4gIH1cblxuICBtYXhDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ21heCcsIHZhbHVlKTtcbiAgfVxuXG4gIHJlYWRvbmx5Q2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICghdGhpcy5pbnB1dEVsZW1lbnQpIHJldHVybjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5yZWFkT25seSA9IHZhbHVlID8gdHJ1ZSA6ICcnO1xuICB9XG5cbiAgdG9nZ2xlQXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkgdGhpcy5pbnB1dEVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gICAgZWxzZSB0aGlzLmlucHV0RWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICB9XG5cbiAgZGF0YUxpc3RDaGFuZ2VkKGxpc3QpIHtcbiAgICB0aGlzLmlzRGF0YUxpc3RFbGVtZW50ID0gKGxpc3QgaW5zdGFuY2VvZiBFbGVtZW50KTtcbiAgICBpZiAoIXRoaXMubGlzdElkKSB0aGlzLmxpc3RJZCA9IHVuaXF1ZUlkKHRoaXMubmFtZSB8fCAnYWlfaW5wdXRfJyk7XG4gICAgaWYgKHRoaXMuaXNEYXRhTGlzdEVsZW1lbnQpIHtcbiAgICAgIGxpc3QuaWQgPSB0aGlzLmxpc3RJZDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
