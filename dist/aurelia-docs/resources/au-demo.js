System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var bindable, child, inject, AuDemo;

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
      AuDemo = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(AuDemo, [{
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

        function AuDemo(element) {
          _classCallCheck(this, _AuDemo);

          _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'sourceCode', _instanceInitializers);

          this.element = element;
        }

        _createDecoratedClass(AuDemo, [{
          key: 'bind',
          value: function bind() {
            this.sourceCode.createApp(this.host);
          }
        }], null, _instanceInitializers);

        var _AuDemo = AuDemo;
        AuDemo = inject(Element)(AuDemo) || AuDemo;
        return AuDemo;
      })();

      _export('AuDemo', AuDemo);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvYXUtZGVtby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7K0JBSWEsTUFBTTs7Ozs7Ozs7OztvQ0FKWCxRQUFRO2lDQUFFLEtBQUs7OzJDQUNmLE1BQU07OztBQUdELFlBQU07Ozs7OEJBQU4sTUFBTTs7dUJBQ2hCLFFBQVE7Ozs7O3VCQUNSLEtBQUssQ0FBQyxhQUFhLENBQUM7Ozs7O0FBRVYsaUJBSkEsTUFBTSxDQUlMLE9BQU8sRUFBRTs7Ozs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBTlUsTUFBTTs7aUJBUWIsZ0JBQUc7QUFDTCxnQkFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1dBQ3RDOzs7c0JBVlUsTUFBTTtBQUFOLGNBQU0sR0FEbEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILE1BQU0sS0FBTixNQUFNO2VBQU4sTUFBTSIsImZpbGUiOiJhdXJlbGlhLWRvY3MvcmVzb3VyY2VzL2F1LWRlbW8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBjaGlsZH0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcblxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEF1RGVtbyB7XG4gIEBiaW5kYWJsZSB0aXRsZTtcbiAgQGNoaWxkKCdzb3VyY2UtY29kZScpIHNvdXJjZUNvZGU7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuc291cmNlQ29kZS5jcmVhdGVBcHAodGhpcy5ob3N0KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
