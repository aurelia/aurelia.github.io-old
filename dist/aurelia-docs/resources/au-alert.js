System.register(['aurelia-templating'], function (_export) {
  'use strict';

  var bindable, AuAlert;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
    }],
    execute: function () {
      AuAlert = (function () {
        var _instanceInitializers = {};

        function AuAlert() {
          _classCallCheck(this, AuAlert);

          _defineDecoratedPropertyDescriptor(this, 'type', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);
        }

        _createDecoratedClass(AuAlert, [{
          key: 'type',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'heading',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        return AuAlert;
      })();

      _export('AuAlert', AuAlert);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvYXUtYWxlcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQUVhLE9BQU87Ozs7Ozs7Ozs7b0NBRlosUUFBUTs7O0FBRUgsYUFBTzs7O2lCQUFQLE9BQU87Z0NBQVAsT0FBTzs7Ozs7Ozs4QkFBUCxPQUFPOzt1QkFDakIsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7ZUFGRSxPQUFPIiwiZmlsZSI6ImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvYXUtYWxlcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuXG5leHBvcnQgY2xhc3MgQXVBbGVydCB7XG4gIEBiaW5kYWJsZSB0eXBlO1xuICBAYmluZGFibGUgaGVhZGluZztcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
