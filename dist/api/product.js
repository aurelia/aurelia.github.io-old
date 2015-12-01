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
            var id = name ? type + '-' + name : type;
            var element = DOM.getElementById(id);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9wcm9kdWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs2Q0FhYSxVQUFVOzs7Ozs7OztBQVB2QixXQUFTLGVBQWUsQ0FBQyxPQUFPLEVBQUU7QUFDaEMsUUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztBQUN4RSxRQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3RELG1CQUFlLENBQUMsU0FBUyxHQUFHLGNBQWMsQ0FBQztHQUM1Qzs7OztvQ0FWTyxRQUFROzsyQ0FDUixNQUFNOzs4QkFDTixNQUFNOzs4QkFDTixNQUFNOzt3QkFDTixHQUFHOzs7QUFTRSxnQkFBVTs7Ozs4QkFBVixVQUFVOzt1QkFFcEIsUUFBUTs7Ozs7QUFFRSxpQkFKQSxVQUFVLENBSVQsTUFBTSxFQUFFLE1BQU0sRUFBRTs7Ozs7QUFDMUIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7OzhCQVBVLFVBQVU7O2lCQVNiLGtCQUFDLE1BQU0sRUFBRTs7O0FBQ2YsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsV0FBVyxDQUFDLENBQy9ELElBQUksQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNmLHFCQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDakIscUJBQU8sT0FBTyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsY0FBYyxFQUFJO0FBQy9ELHVCQUFPLENBQUMsZ0JBQWdCLEdBQUcsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7QUFFbEQsc0JBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixzQkFBSyxzQkFBc0IsR0FBRyxjQUFjLENBQUM7QUFDN0Msc0JBQUssZUFBZSxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7ZUFDL0MsQ0FBQyxDQUFDO2FBQ0osQ0FBQyxDQUFDO1dBQ047OztpQkFFcUIsZ0NBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRTtBQUN6QyxnQkFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixLQUFLLFFBQVEsRUFBRTtBQUM5QyxrQkFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLFFBQU0sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLFNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLFNBQUksUUFBUSx1QkFBb0IsQ0FBQzthQUM3RztXQUNGOzs7aUJBRU8sa0JBQUMsSUFBSSxFQUFFLElBQUksRUFBRTtBQUNuQixnQkFBSSxFQUFFLEdBQUcsSUFBSSxHQUFNLElBQUksU0FBSSxJQUFJLEdBQUssSUFBSSxDQUFDO0FBQ3pDLGdCQUFJLE9BQU8sR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3JDLDJCQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDMUI7OzswQkFqQ1UsVUFBVTtBQUFWLGtCQUFVLEdBRHRCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQ1YsVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVIiwiZmlsZSI6ImFwaS9wcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZX0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7Um91dGVyfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuZnVuY3Rpb24gc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgbGV0IHNjcm9sbFBvc2l0aW9uID0gZWxlbWVudC5vZmZzZXRUb3AgKyBlbGVtZW50Lm9mZnNldFBhcmVudC5vZmZzZXRUb3A7XG4gIGxldCBzY3JvbGxDb250YWluZXIgPSBET00uZ2V0RWxlbWVudEJ5SWQoJ3BhZ2UtaG9zdCcpO1xuICBzY3JvbGxDb250YWluZXIuc2Nyb2xsVG9wID0gc2Nyb2xsUG9zaXRpb247XG59XG5cbkBpbmplY3QoU2VydmVyLCBSb3V0ZXIpXG5leHBvcnQgY2xhc3MgUmVwb3NpdG9yeSB7XG5cbiAgQGJpbmRhYmxlIHNlbGVjdGVkVmVyc2lvbjtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIHJvdXRlcikge1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyLmdldFByb2R1Y3QocGFyYW1zLnVzZXJOYW1lLCBwYXJhbXMucHJvZHVjdE5hbWUpXG4gICAgICAudGhlbihwcm9kdWN0ID0+IHtcbiAgICAgICAgcHJvZHVjdC5zZWxlY3QoKTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QuZ2V0VmVyc2lvbihwYXJhbXMudmVyc2lvbikudGhlbihwcm9kdWN0VmVyc2lvbiA9PiB7XG4gICAgICAgICAgcHJvZHVjdC5wcmVmZXJyZWRWZXJzaW9uID0gcHJvZHVjdFZlcnNpb24udmVyc2lvbjtcblxuICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFByb2R1Y3RWZXJzaW9uID0gcHJvZHVjdFZlcnNpb247XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFZlcnNpb24gPSBwcm9kdWN0VmVyc2lvbi52ZXJzaW9uO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG5cbiAgc2VsZWN0ZWRWZXJzaW9uQ2hhbmdlZChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAodGhpcy5wcm9kdWN0LnByZWZlcnJlZFZlcnNpb24gIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShgIy8ke3RoaXMucHJvZHVjdC51c2VyTmFtZX0vJHt0aGlzLnByb2R1Y3QucHJvZHVjdE5hbWV9LyR7bmV3VmFsdWV9L2RvYy9hcGkvb3ZlcnZpZXdgKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxUbyh0eXBlLCBuYW1lKSB7XG4gICAgbGV0IGlkID0gbmFtZSA/IGAke3R5cGV9LSR7bmFtZX1gIDogdHlwZTtcbiAgICBsZXQgZWxlbWVudCA9IERPTS5nZXRFbGVtZW50QnlJZChpZCk7XG4gICAgc2Nyb2xsVG9FbGVtZW50KGVsZW1lbnQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
