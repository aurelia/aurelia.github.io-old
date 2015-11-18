System.register(['aurelia-framework', 'aurelia-router', 'backend/server', 'aurelia-pal'], function (_export) {
  'use strict';

  var bindable, inject, Router, Server, DOM, Repository;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function scrollToElement(element) {
    var scrollPosition = element.offsetTop + element.offsetParent.offsetTop;
    var scrollContainer = DOM.getElementById('page-host');
    scrollContainer.scrollTop = scrollPosition;
  }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      inject = _aureliaFramework.inject;
    }, function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }],
    execute: function () {
      Repository = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Repository, [{
          key: 'selectedVersion',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Repository(server, router) {
          _classCallCheck(this, _Repository);

          _defineDecoratedPropertyDescriptor(this, 'selectedVersion', _instanceInitializers);

          this.server = server;
          this.router = router;
        }

        _createDecoratedClass(Repository, [{
          key: 'activate',
          value: function activate(params) {
            var _this = this;

            return this.server.getProduct(params.userName, params.productName).then(function (product) {
              product.select();
              return product.getVersion(params.version).then(function (productVersion) {
                product.preferredVersion = productVersion.version;

                _this.product = product;
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
            var element = DOM.getElementById(type + '-' + name);
            scrollToElement(element);
          }
        }], null, _instanceInitializers);

        var _Repository = Repository;
        Repository = inject(Server, Router)(Repository) || Repository;
        return Repository;
      })();

      _export('Repository', Repository);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FhYSxVQUFVOzs7Ozs7OztBQVB2QixXQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUU7QUFDaEMsUUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUN4RSxRQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELG1CQUFlLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztHQUM1Qzs7OzttQ0FWTyxRQUFRO2lDQUFFLE1BQU07OzhCQUNoQixNQUFNOzs4QkFDTixNQUFNOzt3QkFDTixHQUFHOzs7QUFVRSxnQkFBVTs7Ozs4QkFBVixVQUFVOzt1QkFFcEIsUUFBUTs7Ozs7QUFFRSxpQkFKQSxVQUFVLENBSVQsTUFBTSxFQUFFLE1BQU0sRUFBRTs7Ozs7QUFDMUIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7OzhCQVBVLFVBQVU7O2lCQVNiLGtCQUFDLE1BQU0sRUFBRTs7O0FBQ2YsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQy9ELElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNmLHFCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakIscUJBQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsY0FBYyxFQUFJO0FBQy9ELHVCQUFPLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7QUFFbEQsc0JBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixzQkFBSyxzQkFBc0IsR0FBRyxjQUFjLENBQUM7QUFDN0Msc0JBQUssZUFBZSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7ZUFDL0MsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1dBQ047OztpQkFFcUIsZ0NBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUN6QyxnQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixLQUFLLFFBQVEsRUFBRTtBQUM5QyxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFFBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLFNBQUksUUFBUSx1QkFBb0IsQ0FBQzthQUM3RztXQUNGOzs7aUJBRU8sa0JBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNuQixnQkFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBSSxJQUFJLFNBQUksSUFBSSxDQUFHLENBQUM7QUFDcEQsMkJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUMxQjs7OzBCQWhDVSxVQUFVO0FBQVYsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FDVixVQUFVLEtBQVYsVUFBVTtlQUFWLFVBQVUiLCJmaWxlIjoiYXBpL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuXG5mdW5jdGlvbiBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudCkge1xuICBsZXQgc2Nyb2xsUG9zaXRpb24gPSBlbGVtZW50Lm9mZnNldFRvcCArIGVsZW1lbnQub2Zmc2V0UGFyZW50Lm9mZnNldFRvcDtcbiAgbGV0IHNjcm9sbENvbnRhaW5lciA9IERPTS5nZXRFbGVtZW50QnlJZCgncGFnZS1ob3N0Jyk7XG4gIHNjcm9sbENvbnRhaW5lci5zY3JvbGxUb3AgPSBzY3JvbGxQb3NpdGlvbjtcbn1cblxuQGluamVjdChTZXJ2ZXIsIFJvdXRlcilcbmV4cG9ydCBjbGFzcyBSZXBvc2l0b3J5IHtcblxuICBAYmluZGFibGUgc2VsZWN0ZWRWZXJzaW9uO1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlciwgcm91dGVyKSB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBhY3RpdmF0ZShwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIuZ2V0UHJvZHVjdChwYXJhbXMudXNlck5hbWUsIHBhcmFtcy5wcm9kdWN0TmFtZSlcbiAgICAgIC50aGVuKHByb2R1Y3QgPT4ge1xuICAgICAgICBwcm9kdWN0LnNlbGVjdCgpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdC5nZXRWZXJzaW9uKHBhcmFtcy52ZXJzaW9uKS50aGVuKHByb2R1Y3RWZXJzaW9uID0+IHtcbiAgICAgICAgICBwcm9kdWN0LnByZWZlcnJlZFZlcnNpb24gPSBwcm9kdWN0VmVyc2lvbi52ZXJzaW9uO1xuXG4gICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdDtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJvZHVjdFZlcnNpb24gPSBwcm9kdWN0VmVyc2lvbjtcbiAgICAgICAgICB0aGlzLnNlbGVjdGVkVmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uLnZlcnNpb247XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cblxuICBzZWxlY3RlZFZlcnNpb25DaGFuZ2VkKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmICh0aGlzLnByb2R1Y3QucHJlZmVycmVkVmVyc2lvbiAhPT0gbmV3VmFsdWUpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKGAjLyR7dGhpcy5wcm9kdWN0LnVzZXJOYW1lfS8ke3RoaXMucHJvZHVjdC5wcm9kdWN0TmFtZX0vJHtuZXdWYWx1ZX0vZG9jL2FwaS9vdmVydmlld2ApO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbFRvKHR5cGUsIG5hbWUpIHtcbiAgICBsZXQgZWxlbWVudCA9IERPTS5nZXRFbGVtZW50QnlJZChgJHt0eXBlfS0ke25hbWV9YCk7XG4gICAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
