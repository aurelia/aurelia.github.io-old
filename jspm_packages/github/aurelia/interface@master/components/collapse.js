/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function getAttribute(attr, element) {
    var value = element.getAttribute(attr);
    if (!value) {
      attr = attr + '.bind';
      value = element.getAttribute(attr);
    }
    return { value: value, attr: attr };
  }

  function compileTemplate(compiler, resources, element, instruction) {
    var fragment = undefined;
    var factory = undefined;
    var content = undefined;
    var node = undefined;
    var compose = undefined;
    var slot = undefined;
    var view = undefined;
    var model = undefined;
    var viewModel = undefined;
    var viewSlot = undefined;
    var isComposed = false;
    var viewAttr = 'view';
    var modelAttr = 'model';
    var viewModelAttr = 'view-model';

    node = _aureliaPal.DOM.createElement('collapse-slot');
    fragment = _aureliaPal.DOM.createDocumentFragment();

    node.classList.add('au-animate');

    view = getAttribute(viewAttr, element);
    model = getAttribute(modelAttr, element);
    viewModel = getAttribute(modelAttr, element);

    if (view.value || model.value || viewModel.value) {
      compose = _aureliaPal.DOM.createElement('compose');
      compose.setAttribute('containerless', true);
      node.appendChild(compose);
    }

    if (view.value) {
      compose.setAttribute(view.value, view.attr);
    }

    if (model.value) {
      compose.setAttribute(model.value, model.attr);
    }

    if (viewModel.value) {
      compose.setAttribute(viewModel.value, viewModel.attr);
    }

    if (!compose) {
      content = element.firstChild;
      while (content) {
        node.appendChild(content);
        content = element.firstChild;
      }
    }

    fragment.appendChild(node);

    factory = compiler.compile(fragment, resources);
    instruction.collapseFactory = factory;
    return true;
  }

  var CollapseComponent = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(CollapseComponent, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'model',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'view',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }, {
      key: 'viewModel',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return false;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function CollapseComponent(element) {
      _classCallCheck(this, _CollapseComponent);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'model', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'view', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'viewModel', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(CollapseComponent, [{
      key: '_addView',
      value: function _addView() {
        Velocity(this.container, 'slideDown', {
          duration: '200ms',
          easing: 'easeInOutBack'
        });
      }
    }, {
      key: '_removeView',
      value: function _removeView() {
        Velocity(this.container, 'slideUp', {
          duration: '200ms',
          easing: 'easeInOutBack'
        });
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) {
          this._addView();
        } else {
          this._removeView();
        }
        this.element.classList[value ? 'add' : 'remove']('is-active');
      }
    }, {
      key: 'open',
      value: function open() {
        this.active = true;
      }
    }, {
      key: 'close',
      value: function close() {
        this.active = false;
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        this.active = !this.active;
      }
    }], null, _instanceInitializers);

    var _CollapseComponent = CollapseComponent;
    CollapseComponent = (0, _aureliaFramework.inject)(Element)(CollapseComponent) || CollapseComponent;
    CollapseComponent = (0, _aureliaFramework.customElement)('ai-collapse')(CollapseComponent) || CollapseComponent;
    return CollapseComponent;
  })();

  exports.CollapseComponent = CollapseComponent;
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQztPQUMvRDs7O2FBRUcsZ0JBQUc7QUFBQyxZQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtPQUFDOzs7YUFDdEIsaUJBQUc7QUFBQyxZQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtPQUFDOzs7YUFDdkIsa0JBQUc7QUFBQyxZQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtPQUFDOzs7NkJBbkMxQixpQkFBaUI7QUFBakIscUJBQWlCLEdBRDdCLHNCQXZFK0csTUFBTSxFQXVFOUcsT0FBTyxDQUFDLENBQ0gsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQixxQkFBaUIsR0FGN0Isc0JBdEVzRixhQUFhLEVBc0VyRixhQUFhLENBQUMsQ0FFaEIsaUJBQWlCLEtBQWpCLGlCQUFpQjtXQUFqQixpQkFBaUIiLCJmaWxlIjoiY29tcG9uZW50cy9jb2xsYXBzZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29udGFpbmVybGVzcywgcHJvY2Vzc0NvbnRlbnQsIFZpZXdTbG90LCBUYXJnZXRJbnN0cnVjdGlvbiwgQ29udGFpbmVyLCBub1ZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmZ1bmN0aW9uIGdldEF0dHJpYnV0ZShhdHRyLCBlbGVtZW50KSB7XG4gIGxldCB2YWx1ZSA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKGF0dHIpO1xuICBpZiAoIXZhbHVlKSB7XG4gICAgYXR0ciA9IGF0dHIgKyAnLmJpbmQnO1xuICAgIHZhbHVlID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoYXR0cik7XG4gIH1cbiAgcmV0dXJuIHt2YWx1ZSwgYXR0cn07XG59XG5cbmZ1bmN0aW9uIGNvbXBpbGVUZW1wbGF0ZShjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbikge1xuICBsZXQgZnJhZ21lbnQ7XG4gIGxldCBmYWN0b3J5O1xuICBsZXQgY29udGVudDtcbiAgbGV0IG5vZGU7XG4gIGxldCBjb21wb3NlO1xuICBsZXQgc2xvdDtcbiAgbGV0IHZpZXc7XG4gIGxldCBtb2RlbDtcbiAgbGV0IHZpZXdNb2RlbDtcbiAgbGV0IHZpZXdTbG90O1xuICBsZXQgaXNDb21wb3NlZCA9IGZhbHNlO1xuICBsZXQgdmlld0F0dHIgPSAndmlldyc7XG4gIGxldCBtb2RlbEF0dHIgPSAnbW9kZWwnO1xuICBsZXQgdmlld01vZGVsQXR0ciA9ICd2aWV3LW1vZGVsJztcblxuICBub2RlICAgICA9IERPTS5jcmVhdGVFbGVtZW50KCdjb2xsYXBzZS1zbG90Jyk7XG4gIGZyYWdtZW50ID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICBub2RlLmNsYXNzTGlzdC5hZGQoJ2F1LWFuaW1hdGUnKTtcblxuICB2aWV3ID0gZ2V0QXR0cmlidXRlKHZpZXdBdHRyLCBlbGVtZW50KTtcbiAgbW9kZWwgPSBnZXRBdHRyaWJ1dGUobW9kZWxBdHRyLCBlbGVtZW50KTtcbiAgdmlld01vZGVsID0gZ2V0QXR0cmlidXRlKG1vZGVsQXR0ciwgZWxlbWVudCk7XG5cbiAgaWYgKHZpZXcudmFsdWUgfHwgbW9kZWwudmFsdWUgfHwgdmlld01vZGVsLnZhbHVlKSB7XG4gICAgY29tcG9zZSA9IERPTS5jcmVhdGVFbGVtZW50KCdjb21wb3NlJyk7XG4gICAgY29tcG9zZS5zZXRBdHRyaWJ1dGUoJ2NvbnRhaW5lcmxlc3MnLCB0cnVlKTtcbiAgICBub2RlLmFwcGVuZENoaWxkKGNvbXBvc2UpO1xuICB9XG5cbiAgaWYgKHZpZXcudmFsdWUpIHtcbiAgICBjb21wb3NlLnNldEF0dHJpYnV0ZSh2aWV3LnZhbHVlLCB2aWV3LmF0dHIpO1xuICB9XG5cbiAgaWYgKG1vZGVsLnZhbHVlKSB7XG4gICAgY29tcG9zZS5zZXRBdHRyaWJ1dGUobW9kZWwudmFsdWUsIG1vZGVsLmF0dHIpO1xuICB9XG5cbiAgaWYgKHZpZXdNb2RlbC52YWx1ZSkge1xuICAgIGNvbXBvc2Uuc2V0QXR0cmlidXRlKHZpZXdNb2RlbC52YWx1ZSwgdmlld01vZGVsLmF0dHIpO1xuICB9XG5cbiAgaWYgKCFjb21wb3NlKSB7XG4gICAgY29udGVudCA9IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICB3aGlsZShjb250ZW50KSB7XG4gICAgICBub2RlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgY29udGVudCA9IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICB9XG4gIH1cblxuICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlKTtcblxuICBmYWN0b3J5ID0gY29tcGlsZXIuY29tcGlsZShmcmFnbWVudCwgcmVzb3VyY2VzKTtcbiAgaW5zdHJ1Y3Rpb24uY29sbGFwc2VGYWN0b3J5ID0gZmFjdG9yeTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbkBjdXN0b21FbGVtZW50KCdhaS1jb2xsYXBzZScpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VDb21wb25lbnQge1xuICBAYmluZGFibGUgYWN0aXZlID0gZmFsc2U7XG4gIEBiaW5kYWJsZSBtb2RlbCA9IGZhbHNlO1xuICBAYmluZGFibGUgdmlldyA9IGZhbHNlO1xuICBAYmluZGFibGUgdmlld01vZGVsID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBfYWRkVmlldygpIHtcbiAgICBWZWxvY2l0eSh0aGlzLmNvbnRhaW5lciwgJ3NsaWRlRG93bicsIHtcbiAgICAgIGR1cmF0aW9uOiAnMjAwbXMnLFxuICAgICAgZWFzaW5nOiAnZWFzZUluT3V0QmFjaydcbiAgICB9KVxuICB9XG5cbiAgX3JlbW92ZVZpZXcoKSB7XG4gICAgVmVsb2NpdHkodGhpcy5jb250YWluZXIsICdzbGlkZVVwJywge1xuICAgICAgZHVyYXRpb246ICcyMDBtcycsXG4gICAgICBlYXNpbmc6ICdlYXNlSW5PdXRCYWNrJ1xuICAgIH0pXG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLl9hZGRWaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3JlbW92ZVZpZXcoKTtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdFt2YWx1ZSA/ICdhZGQnIDogJ3JlbW92ZSddKCdpcy1hY3RpdmUnKTtcbiAgfVxuXG4gIG9wZW4oKSB7dGhpcy5hY3RpdmUgPSB0cnVlfVxuICBjbG9zZSgpIHt0aGlzLmFjdGl2ZSA9IGZhbHNlfVxuICB0b2dnbGUoKSB7dGhpcy5hY3RpdmUgPSAhdGhpcy5hY3RpdmV9XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
