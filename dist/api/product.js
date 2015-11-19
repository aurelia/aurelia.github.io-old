System.register(['aurelia-templating', 'aurelia-dependency-injection', 'aurelia-router', 'backend/server', 'aurelia-pal'], function (_export) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FjYSxVQUFVOzs7Ozs7OztBQVB2QixXQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUU7QUFDaEMsUUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUN4RSxRQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELG1CQUFlLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztHQUM1Qzs7OztvQ0FYTyxRQUFROzsyQ0FDUixNQUFNOzs4QkFDTixNQUFNOzs4QkFDTixNQUFNOzt3QkFDTixHQUFHOzs7QUFVRSxnQkFBVTs7Ozs4QkFBVixVQUFVOzt1QkFFcEIsUUFBUTs7Ozs7QUFFRSxpQkFKQSxVQUFVLENBSVQsTUFBTSxFQUFFLE1BQU0sRUFBRTs7Ozs7QUFDMUIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7OzhCQVBVLFVBQVU7O2lCQVNiLGtCQUFDLE1BQU0sRUFBRTs7O0FBQ2YsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQy9ELElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNmLHFCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakIscUJBQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsY0FBYyxFQUFJO0FBQy9ELHVCQUFPLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7QUFFbEQsc0JBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixzQkFBSyxzQkFBc0IsR0FBRyxjQUFjLENBQUM7QUFDN0Msc0JBQUssZUFBZSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7ZUFDL0MsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1dBQ047OztpQkFFcUIsZ0NBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUN6QyxnQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixLQUFLLFFBQVEsRUFBRTtBQUM5QyxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFFBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLFNBQUksUUFBUSx1QkFBb0IsQ0FBQzthQUM3RztXQUNGOzs7aUJBRU8sa0JBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNuQixnQkFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDLGNBQWMsQ0FBSSxJQUFJLFNBQUksSUFBSSxDQUFHLENBQUM7QUFDcEQsMkJBQWUsQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUMxQjs7OzBCQWhDVSxVQUFVO0FBQVYsa0JBQVUsR0FEdEIsTUFBTSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FDVixVQUFVLEtBQVYsVUFBVTtlQUFWLFVBQVUiLCJmaWxlIjoiYXBpL3Byb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtSb3V0ZXJ9IGZyb20gJ2F1cmVsaWEtcm91dGVyJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5cbmZ1bmN0aW9uIHNjcm9sbFRvRWxlbWVudChlbGVtZW50KSB7XG4gIGxldCBzY3JvbGxQb3NpdGlvbiA9IGVsZW1lbnQub2Zmc2V0VG9wICsgZWxlbWVudC5vZmZzZXRQYXJlbnQub2Zmc2V0VG9wO1xuICBsZXQgc2Nyb2xsQ29udGFpbmVyID0gRE9NLmdldEVsZW1lbnRCeUlkKCdwYWdlLWhvc3QnKTtcbiAgc2Nyb2xsQ29udGFpbmVyLnNjcm9sbFRvcCA9IHNjcm9sbFBvc2l0aW9uO1xufVxuXG5AaW5qZWN0KFNlcnZlciwgUm91dGVyKVxuZXhwb3J0IGNsYXNzIFJlcG9zaXRvcnkge1xuXG4gIEBiaW5kYWJsZSBzZWxlY3RlZFZlcnNpb247XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyLCByb3V0ZXIpIHtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNlcnZlci5nZXRQcm9kdWN0KHBhcmFtcy51c2VyTmFtZSwgcGFyYW1zLnByb2R1Y3ROYW1lKVxuICAgICAgLnRoZW4ocHJvZHVjdCA9PiB7XG4gICAgICAgIHByb2R1Y3Quc2VsZWN0KCk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0LmdldFZlcnNpb24ocGFyYW1zLnZlcnNpb24pLnRoZW4ocHJvZHVjdFZlcnNpb24gPT4ge1xuICAgICAgICAgIHByb2R1Y3QucHJlZmVycmVkVmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uLnZlcnNpb247XG5cbiAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRQcm9kdWN0VmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uO1xuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWZXJzaW9uID0gcHJvZHVjdFZlcnNpb24udmVyc2lvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdGVkVmVyc2lvbkNoYW5nZWQobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMucHJvZHVjdC5wcmVmZXJyZWRWZXJzaW9uICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoYCMvJHt0aGlzLnByb2R1Y3QudXNlck5hbWV9LyR7dGhpcy5wcm9kdWN0LnByb2R1Y3ROYW1lfS8ke25ld1ZhbHVlfS9kb2MvYXBpL292ZXJ2aWV3YCk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsVG8odHlwZSwgbmFtZSkge1xuICAgIGxldCBlbGVtZW50ID0gRE9NLmdldEVsZW1lbnRCeUlkKGAke3R5cGV9LSR7bmFtZX1gKTtcbiAgICBzY3JvbGxUb0VsZW1lbnQoZWxlbWVudCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
