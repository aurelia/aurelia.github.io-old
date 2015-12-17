System.register(['aurelia-templating'], function (_export) {
  'use strict';

  var bindable, AuDocSection;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
    }],
    execute: function () {
      AuDocSection = (function () {
        var _instanceInitializers = {};

        function AuDocSection() {
          _classCallCheck(this, AuDocSection);

          _defineDecoratedPropertyDescriptor(this, 'version', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'uid', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'versionMatches', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'heading', _instanceInitializers);
        }

        _createDecoratedClass(AuDocSection, [{
          key: 'version',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'uid',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'versionMatches',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'heading',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        return AuDocSection;
      })();

      _export('AuDocSection', AuDocSection);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvYXUtZG9jLXNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O2dCQUVhLFlBQVk7Ozs7Ozs7Ozs7b0NBRmpCLFFBQVE7OztBQUVILGtCQUFZOzs7aUJBQVosWUFBWTtnQ0FBWixZQUFZOzs7Ozs7Ozs7Ozs4QkFBWixZQUFZOzt1QkFDdEIsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7ZUFKRSxZQUFZIiwiZmlsZSI6ImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvYXUtZG9jLXNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuXG5leHBvcnQgY2xhc3MgQXVEb2NTZWN0aW9uIHtcbiAgQGJpbmRhYmxlIHZlcnNpb247XG4gIEBiaW5kYWJsZSB1aWQ7XG4gIEBiaW5kYWJsZSB2ZXJzaW9uTWF0Y2hlcztcbiAgQGJpbmRhYmxlIGhlYWRpbmc7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
