System.register(['aurelia-dependency-injection', 'backend/server'], function (_export) {
  'use strict';

  var inject, Server, ClassOrInterface;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }],
    execute: function () {
      ClassOrInterface = (function () {
        function ClassOrInterface(server) {
          _classCallCheck(this, _ClassOrInterface);

          this.target = {};

          this.server = server;
        }

        _createClass(ClassOrInterface, [{
          key: 'activate',
          value: function activate(params) {
            var _this = this;

            return this.server.getProduct(params.userName, params.productName).then(function (product) {
              product.select();
              return product.getVersion(params.version).then(function (productVersion) {
                product.preferredVersion = productVersion.version;
                _this.product = product;

                if (params.classOrInterface === 'class') {
                  _this.target = productVersion.api.findClass(params.name);
                } else {
                  _this.target = productVersion.api.findInterface(params.name);
                }
                if (_this.target) _this.constructorSignature = _this.target.constructorMethod ? _this.target.constructorMethod.signature : null;
              });
            });
          }
        }]);

        var _ClassOrInterface = ClassOrInterface;
        ClassOrInterface = inject(Server)(ClassOrInterface) || ClassOrInterface;
        return ClassOrInterface;
      })();

      _export('ClassOrInterface', ClassOrInterface);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9jbGFzcy1vci1pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUlhLGdCQUFnQjs7Ozs7Ozs7MkNBSnJCLE1BQU07OzhCQUNOLE1BQU07OztBQUdELHNCQUFnQjtBQUVoQixpQkFGQSxnQkFBZ0IsQ0FFZixNQUFNLEVBQUU7OztlQURwQixNQUFNLEdBQUcsRUFBRTs7QUFFVCxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7cUJBSlUsZ0JBQWdCOztpQkFNbkIsa0JBQUMsTUFBTSxFQUFFOzs7QUFDZixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDL0QsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2YscUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixxQkFBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxjQUFjLEVBQUk7QUFDL0QsdUJBQU8sQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ2xELHNCQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRXZCLG9CQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxPQUFPLEVBQUU7QUFDdkMsd0JBQUssTUFBTSxHQUFHLGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekQsTUFBTTtBQUNMLHdCQUFLLE1BQU0sR0FBRyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzdEO0FBQ0Qsb0JBQUksTUFBSyxNQUFNLEVBQUUsTUFBSyxvQkFBb0IsR0FBRyxNQUFLLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxNQUFLLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2VBQzdILENBQUMsQ0FBQzthQUNKLENBQUMsQ0FBQztXQUNOOzs7Z0NBdEJVLGdCQUFnQjtBQUFoQix3QkFBZ0IsR0FENUIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUNGLGdCQUFnQixLQUFoQixnQkFBZ0I7ZUFBaEIsZ0JBQWdCIiwiZmlsZSI6ImFwaS9jbGFzcy1vci1pbnRlcmZhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuXG5AaW5qZWN0KFNlcnZlcilcbmV4cG9ydCBjbGFzcyBDbGFzc09ySW50ZXJmYWNlIHtcbiAgdGFyZ2V0ID0ge307XG4gIGNvbnN0cnVjdG9yKHNlcnZlcikge1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyLmdldFByb2R1Y3QocGFyYW1zLnVzZXJOYW1lLCBwYXJhbXMucHJvZHVjdE5hbWUpXG4gICAgICAudGhlbihwcm9kdWN0ID0+IHtcbiAgICAgICAgcHJvZHVjdC5zZWxlY3QoKTtcbiAgICAgICAgcmV0dXJuIHByb2R1Y3QuZ2V0VmVyc2lvbihwYXJhbXMudmVyc2lvbikudGhlbihwcm9kdWN0VmVyc2lvbiA9PiB7XG4gICAgICAgICAgcHJvZHVjdC5wcmVmZXJyZWRWZXJzaW9uID0gcHJvZHVjdFZlcnNpb24udmVyc2lvbjtcbiAgICAgICAgICB0aGlzLnByb2R1Y3QgPSBwcm9kdWN0O1xuXG4gICAgICAgICAgaWYgKHBhcmFtcy5jbGFzc09ySW50ZXJmYWNlID09PSAnY2xhc3MnKSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHByb2R1Y3RWZXJzaW9uLmFwaS5maW5kQ2xhc3MocGFyYW1zLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHByb2R1Y3RWZXJzaW9uLmFwaS5maW5kSW50ZXJmYWNlKHBhcmFtcy5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB0aGlzLmNvbnN0cnVjdG9yU2lnbmF0dXJlID0gdGhpcy50YXJnZXQuY29uc3RydWN0b3JNZXRob2QgPyB0aGlzLnRhcmdldC5jb25zdHJ1Y3Rvck1ldGhvZC5zaWduYXR1cmUgOiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
