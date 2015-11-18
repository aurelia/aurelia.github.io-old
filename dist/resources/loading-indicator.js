System.register(['nprogress', 'aurelia-framework'], function (_export) {
  'use strict';

  var nprogress, bindable, noView, LoadingIndicator;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_nprogress) {
      nprogress = _nprogress['default'];
    }, function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      noView = _aureliaFramework.noView;
    }],
    execute: function () {

      nprogress.configure({ showSpinner: false });

      LoadingIndicator = (function () {
        var _instanceInitializers = {};

        function LoadingIndicator() {
          _classCallCheck(this, _LoadingIndicator);

          _defineDecoratedPropertyDescriptor(this, 'loading', _instanceInitializers);
        }

        _createDecoratedClass(LoadingIndicator, [{
          key: 'loadingChanged',
          value: function loadingChanged(newValue) {
            if (newValue) {
              nprogress.start();
            } else {
              nprogress.done();
            }
          }
        }, {
          key: 'loading',
          decorators: [bindable],
          initializer: function initializer() {
            return false;
          },
          enumerable: true
        }], null, _instanceInitializers);

        var _LoadingIndicator = LoadingIndicator;
        LoadingIndicator = noView(LoadingIndicator) || LoadingIndicator;
        return LoadingIndicator;
      })();

      _export('LoadingIndicator', LoadingIndicator);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9sb2FkaW5nLWluZGljYXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7bUNBTWEsZ0JBQWdCOzs7Ozs7Ozs7Ozs7bUNBTHJCLFFBQVE7aUNBQUUsTUFBTTs7OztBQUV4QixlQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7O0FBRy9CLHNCQUFnQjs7O2lCQUFoQixnQkFBZ0I7Ozs7Ozs4QkFBaEIsZ0JBQWdCOztpQkFHYix3QkFBQyxRQUFRLEVBQUU7QUFDdkIsZ0JBQUksUUFBUSxFQUFFO0FBQ1osdUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUNuQixNQUFNO0FBQ0wsdUJBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUNsQjtXQUNGOzs7dUJBUkEsUUFBUTs7bUJBQVcsS0FBSzs7Ozs7Z0NBRGQsZ0JBQWdCO0FBQWhCLHdCQUFnQixHQUQ1QixNQUFNLENBQ00sZ0JBQWdCLEtBQWhCLGdCQUFnQjtlQUFoQixnQkFBZ0IiLCJmaWxlIjoicmVzb3VyY2VzL2xvYWRpbmctaW5kaWNhdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG5wcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xuaW1wb3J0IHtiaW5kYWJsZSwgbm9WaWV3fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbm5wcm9ncmVzcy5jb25maWd1cmUoeyBzaG93U3Bpbm5lcjogZmFsc2UgfSk7XG5cbkBub1ZpZXdcbmV4cG9ydCBjbGFzcyBMb2FkaW5nSW5kaWNhdG9yIHtcbiAgQGJpbmRhYmxlIGxvYWRpbmcgPSBmYWxzZTtcblxuICBsb2FkaW5nQ2hhbmdlZChuZXdWYWx1ZSkge1xuICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgbnByb2dyZXNzLnN0YXJ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5wcm9ncmVzcy5kb25lKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
