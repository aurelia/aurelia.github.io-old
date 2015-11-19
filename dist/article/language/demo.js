System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var bindable, child, inject, Demo;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      child = _aureliaTemplating.child;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbGFuZ3VhZ2UvZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBSWEsSUFBSTs7Ozs7Ozs7OztvQ0FKVCxRQUFRO2lDQUFFLEtBQUs7OzJDQUNmLE1BQU07OztBQUdELFVBQUk7Ozs7OEJBQUosSUFBSTs7dUJBQ2QsUUFBUTs7Ozs7dUJBQ1IsS0FBSyxDQUFDLGFBQWEsQ0FBQzs7Ozs7QUFFVixpQkFKQSxJQUFJLENBSUgsT0FBTyxFQUFFOzs7Ozs7O0FBQ25CLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOzs4QkFOVSxJQUFJOztpQkFRWCxnQkFBRztBQUNMLGdCQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7V0FDdEM7OztvQkFWVSxJQUFJO0FBQUosWUFBSSxHQURoQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsSUFBSSxLQUFKLElBQUk7ZUFBSixJQUFJIiwiZmlsZSI6ImFydGljbGUvbGFuZ3VhZ2UvZGVtby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGUsIGNoaWxkfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgRGVtbyB7XG4gIEBiaW5kYWJsZSB0aXRsZTtcbiAgQGNoaWxkKCdzb3VyY2UtY29kZScpIHNvdXJjZUNvZGU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuc291cmNlQ29kZS5jcmVhdGVBcHAodGhpcy5ob3N0KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
