System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var bindable, inject, child, Demo;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
      child = _aureliaFramework.child;
    }],
    execute: function () {
      Demo = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Demo, [{
          key: 'title',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'sourceCode',
          decorators: [child('source-code')],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Demo(element) {
          _classCallCheck(this, _Demo);

          _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sourceCode', _instanceInitializers);

          this.element = element;
        }

        _createDecoratedClass(Demo, [{
          key: 'bind',
          value: function bind() {
            this.sourceCode.createApp(this.host);
          }
        }], null, _instanceInitializers);

        var _Demo = Demo;
        Demo = inject(Element)(Demo) || Demo;
        return Demo;
      })();

      _export('Demo', Demo);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbGFuZ3VhZ2UvZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBR2EsSUFBSTs7Ozs7Ozs7OzttQ0FIVCxRQUFRO2lDQUFFLE1BQU07Z0NBQUUsS0FBSzs7O0FBR2xCLFVBQUk7Ozs7OEJBQUosSUFBSTs7dUJBQ2QsUUFBUTs7Ozs7dUJBQ1IsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7Ozs7QUFFVixpQkFKQSxJQUFJLENBSUgsT0FBTyxFQUFFOzs7Ozs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzs4QkFOVSxJQUFJOztpQkFRWCxnQkFBRztBQUNMLGdCQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDdEM7OztvQkFWVSxJQUFJO0FBQUosWUFBSSxHQURoQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJIiwiZmlsZSI6ImFydGljbGUvbGFuZ3VhZ2UvZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGluamVjdCwgY2hpbGR9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIERlbW8ge1xuICBAYmluZGFibGUgdGl0bGU7XG4gIEBjaGlsZCgnc291cmNlLWNvZGUnKSBzb3VyY2VDb2RlO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnNvdXJjZUNvZGUuY3JlYXRlQXBwKHRoaXMuaG9zdCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
