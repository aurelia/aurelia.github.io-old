System.register(['aurelia-framework', 'backend/server'], function (_export) {
  'use strict';

  var inject, Server, ClassOrInterface;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
                  _this.target = productVersion.findClass(params.name);
                } else {
                  _this.target = productVersion.findInterface(params.name);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9jbGFzcy1vci1pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUlhLGdCQUFnQjs7Ozs7Ozs7aUNBSnJCLE1BQU07OzhCQUNOLE1BQU07OztBQUdELHNCQUFnQjtBQUVoQixpQkFGQSxnQkFBZ0IsQ0FFZixNQUFNLEVBQUU7OztlQURwQixNQUFNLEdBQUcsRUFBRTs7QUFFVCxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7cUJBSlUsZ0JBQWdCOztpQkFNbkIsa0JBQUMsTUFBTSxFQUFFOzs7QUFDZixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDL0QsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2YscUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixxQkFBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxjQUFjLEVBQUk7QUFDL0QsdUJBQU8sQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ2xELHNCQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRXZCLG9CQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxPQUFPLEVBQUU7QUFDdkMsd0JBQUssTUFBTSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyRCxNQUFNO0FBQ0wsd0JBQUssTUFBTSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6RDtBQUNELG9CQUFJLE1BQUssTUFBTSxFQUFFLE1BQUssb0JBQW9CLEdBQUcsTUFBSyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsTUFBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztlQUM3SCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7V0FDTjs7O2dDQXRCVSxnQkFBZ0I7QUFBaEIsd0JBQWdCLEdBRDVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDRixnQkFBZ0IsS0FBaEIsZ0JBQWdCO2VBQWhCLGdCQUFnQiIsImZpbGUiOiJhcGkvY2xhc3Mtb3ItaW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5cbkBpbmplY3QoU2VydmVyKVxuZXhwb3J0IGNsYXNzIENsYXNzT3JJbnRlcmZhY2Uge1xuICB0YXJnZXQgPSB7fTtcbiAgY29uc3RydWN0b3Ioc2VydmVyKSB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gIH1cblxuICBhY3RpdmF0ZShwYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIuZ2V0UHJvZHVjdChwYXJhbXMudXNlck5hbWUsIHBhcmFtcy5wcm9kdWN0TmFtZSlcbiAgICAgIC50aGVuKHByb2R1Y3QgPT4ge1xuICAgICAgICBwcm9kdWN0LnNlbGVjdCgpO1xuICAgICAgICByZXR1cm4gcHJvZHVjdC5nZXRWZXJzaW9uKHBhcmFtcy52ZXJzaW9uKS50aGVuKHByb2R1Y3RWZXJzaW9uID0+IHtcbiAgICAgICAgICBwcm9kdWN0LnByZWZlcnJlZFZlcnNpb24gPSBwcm9kdWN0VmVyc2lvbi52ZXJzaW9uO1xuICAgICAgICAgIHRoaXMucHJvZHVjdCA9IHByb2R1Y3Q7XG5cbiAgICAgICAgICBpZiAocGFyYW1zLmNsYXNzT3JJbnRlcmZhY2UgPT09ICdjbGFzcycpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gcHJvZHVjdFZlcnNpb24uZmluZENsYXNzKHBhcmFtcy5uYW1lKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBwcm9kdWN0VmVyc2lvbi5maW5kSW50ZXJmYWNlKHBhcmFtcy5uYW1lKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMudGFyZ2V0KSB0aGlzLmNvbnN0cnVjdG9yU2lnbmF0dXJlID0gdGhpcy50YXJnZXQuY29uc3RydWN0b3JNZXRob2QgPyB0aGlzLnRhcmdldC5jb25zdHJ1Y3Rvck1ldGhvZC5zaWduYXR1cmUgOiBudWxsO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
