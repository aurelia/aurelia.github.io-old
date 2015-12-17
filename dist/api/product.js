System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router', 'backend/server', 'aurelia-pal'], function (_export) {
  'use strict';

  var bindable, inject, Router, Server, DOM, Product;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function scrollToElement(element) {
    var scrollPosition = element.offsetTop + element.offsetParent.offsetTop;
    var scrollContainer = DOM.getElementById('page-host');
    scrollContainer.scrollTop = scrollPosition;
  }

  return {
    setters: [function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      Product = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Product, [{
          key: 'selectedVersion',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Product(server, router) {
          _classCallCheck(this, _Product);

          _defineDecoratedPropertyDescriptor(this, 'selectedVersion', _instanceInitializers);

          this.server = server;
          this.router = router;
        }

        _createDecoratedClass(Product, [{
          key: 'activate',
          value: function activate(params) {
            var _this = this;

            return this.server.getProduct(params.userName, params.productName).then(function (product) {
              product.select();
              return product.getVersion(params.version).then(function (productVersion) {
                product.preferredVersion = productVersion.version;

                _this.product = product;
                _this.api = productVersion.api;
                _this.selectedProductVersion = productVersion;
                _this.selectedVersion = productVersion.version;
              });
            });
          }
        }, {
          key: 'selectedVersionChanged',
          value: function selectedVersionChanged(newValue, oldValue) {
            if (this.product.preferredVersion !== newValue) {
              this.router.navigate('#/' + this.product.userName + '/' + this.product.productName + '/' + newValue + '/doc/api/overview');
            }
          }
        }, {
          key: 'scrollTo',
          value: function scrollTo(type, name) {
            var id = name ? type + '-' + name : type;
            var element = DOM.getElementById(id);
            scrollToElement(element);
          }
        }], null, _instanceInitializers);

        var _Product = Product;
        Product = inject(Server, Router)(Product) || Product;
        return Product;
      })();

      _export('Product', Product);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FhYSxPQUFPOzs7Ozs7OztBQVBwQixXQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUU7QUFDaEMsUUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUN4RSxRQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELG1CQUFlLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztHQUM1Qzs7OztvQ0FWTyxRQUFROzsyQ0FDUixNQUFNOzs4QkFDTixNQUFNOzs4QkFDTixNQUFNOzt3QkFDTixHQUFHOzs7QUFTRSxhQUFPOzs7OzhCQUFQLE9BQU87O3VCQUNqQixRQUFROzs7OztBQUVFLGlCQUhBLE9BQU8sQ0FHTixNQUFNLEVBQUUsTUFBTSxFQUFFOzs7OztBQUMxQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7OEJBTlUsT0FBTzs7aUJBUVYsa0JBQUMsTUFBTSxFQUFFOzs7QUFDZixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDL0QsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2YscUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixxQkFBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxjQUFjLEVBQUk7QUFDL0QsdUJBQU8sQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDOztBQUVsRCxzQkFBSyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLHNCQUFLLEdBQUcsR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDO0FBQzlCLHNCQUFLLHNCQUFzQixHQUFHLGNBQWMsQ0FBQztBQUM3QyxzQkFBSyxlQUFlLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQztlQUMvQyxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7V0FDTjs7O2lCQUVxQixnQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0FBQ3pDLGdCQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEtBQUssUUFBUSxFQUFFO0FBQzlDLGtCQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsUUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsU0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsU0FBSSxRQUFRLHVCQUFvQixDQUFDO2FBQzdHO1dBQ0Y7OztpQkFFTyxrQkFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQ25CLGdCQUFJLEVBQUUsR0FBRyxJQUFJLEdBQU0sSUFBSSxTQUFJLElBQUksR0FBSyxJQUFJLENBQUM7QUFDekMsZ0JBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckMsMkJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUMxQjs7O3VCQWpDVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUNWLE9BQU8sS0FBUCxPQUFPO2VBQVAsT0FBTyIsImZpbGUiOiJhcGkvcHJvZHVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YmluZGFibGV9IGZyb20gJ2F1cmVsaWEtdGVtcGxhdGluZyc7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gJ2JhY2tlbmQvc2VydmVyJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmZ1bmN0aW9uIHNjcm9sbFRvRWxlbWVudChlbGVtZW50KSB7XG4gIGxldCBzY3JvbGxQb3NpdGlvbiA9IGVsZW1lbnQub2Zmc2V0VG9wICsgZWxlbWVudC5vZmZzZXRQYXJlbnQub2Zmc2V0VG9wO1xuICBsZXQgc2Nyb2xsQ29udGFpbmVyID0gRE9NLmdldEVsZW1lbnRCeUlkKCdwYWdlLWhvc3QnKTtcbiAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbFBvc2l0aW9uO1xufVxuXG5AaW5qZWN0KFNlcnZlciwgUm91dGVyKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3Qge1xuICBAYmluZGFibGUgc2VsZWN0ZWRWZXJzaW9uO1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlciwgcm91dGVyKSB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBhY3RpdmF0ZShwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIuZ2V0UHJvZHVjdChwYXJhbXMudXNlck5hbWUsIHBhcmFtcy5wcm9kdWN0TmFtZSlcbiAgICAgIC50aGVuKHByb2R1Y3QgPT4ge1xuICAgICAgICBwcm9kdWN0LnNlbGVjdCgpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdC5nZXRWZXJzaW9uKHBhcmFtcy52ZXJzaW9uKS50aGVuKHByb2R1Y3RWZXJzaW9uID0+IHtcbiAgICAgICAgICBwcm9kdWN0LnByZWZlcnJlZFZlcnNpb24gPSBwcm9kdWN0VmVyc2lvbi52ZXJzaW9uO1xuXG4gICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICB0aGlzLmFwaSA9IHByb2R1Y3RWZXJzaW9uLmFwaTtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdFZlcnNpb24gPSBwcm9kdWN0VmVyc2lvbjtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uLnZlcnNpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZFZlcnNpb25DaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmICh0aGlzLnByb2R1Y3QucHJlZmVycmVkVmVyc2lvbiAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGAjLyR7dGhpcy5wcm9kdWN0LnVzZXJOYW1lfS8ke3RoaXMucHJvZHVjdC5wcm9kdWN0TmFtZX0vJHtuZXdWYWx1ZX0vZG9jL2FwaS9vdmVydmlld2ApO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvKHR5cGUsIG5hbWUpIHtcbiAgICBsZXQgaWQgPSBuYW1lID8gYCR7dHlwZX0tJHtuYW1lfWAgOiB0eXBlO1xuICAgIGxldCBlbGVtZW50ID0gRE9NLmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
