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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9jbGFzcy1vci1pbnRlcmZhY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUlhLGdCQUFnQjs7Ozs7Ozs7MkNBSnJCLE1BQU07OzhCQUNOLE1BQU07OztBQUdELHNCQUFnQjtBQUVoQixpQkFGQSxnQkFBZ0IsQ0FFZixNQUFNLEVBQUU7OztlQURwQixNQUFNLEdBQUcsRUFBRTs7QUFFVCxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7cUJBSlUsZ0JBQWdCOztpQkFNbkIsa0JBQUMsTUFBTSxFQUFFOzs7QUFDZixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDL0QsSUFBSSxDQUFDLFVBQUEsT0FBTyxFQUFJO0FBQ2YscUJBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNqQixxQkFBTyxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxjQUFjLEVBQUk7QUFDL0QsdUJBQU8sQ0FBQyxnQkFBZ0IsR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQ2xELHNCQUFLLE9BQU8sR0FBRyxPQUFPLENBQUM7O0FBRXZCLG9CQUFJLE1BQU0sQ0FBQyxnQkFBZ0IsS0FBSyxPQUFPLEVBQUU7QUFDdkMsd0JBQUssTUFBTSxHQUFHLGNBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyRCxNQUFNO0FBQ0wsd0JBQUssTUFBTSxHQUFHLGNBQWMsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6RDtBQUNELG9CQUFJLE1BQUssTUFBTSxFQUFFLE1BQUssb0JBQW9CLEdBQUcsTUFBSyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsTUFBSyxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztlQUM3SCxDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7V0FDTjs7O2dDQXRCVSxnQkFBZ0I7QUFBaEIsd0JBQWdCLEdBRDVCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FDRixnQkFBZ0IsS0FBaEIsZ0JBQWdCO2VBQWhCLGdCQUFnQiIsImZpbGUiOiJhcGkvY2xhc3Mtb3ItaW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gJ2JhY2tlbmQvc2VydmVyJztcblxuQGluamVjdChTZXJ2ZXIpXG5leHBvcnQgY2xhc3MgQ2xhc3NPckludGVyZmFjZSB7XG4gIHRhcmdldCA9IHt9O1xuICBjb25zdHJ1Y3RvcihzZXJ2ZXIpIHtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcykge1xuICAgIHJldHVybiB0aGlzLnNlcnZlci5nZXRQcm9kdWN0KHBhcmFtcy51c2VyTmFtZSwgcGFyYW1zLnByb2R1Y3ROYW1lKVxuICAgICAgLnRoZW4ocHJvZHVjdCA9PiB7XG4gICAgICAgIHByb2R1Y3Quc2VsZWN0KCk7XG4gICAgICAgIHJldHVybiBwcm9kdWN0LmdldFZlcnNpb24ocGFyYW1zLnZlcnNpb24pLnRoZW4ocHJvZHVjdFZlcnNpb24gPT4ge1xuICAgICAgICAgIHByb2R1Y3QucHJlZmVycmVkVmVyc2lvbiA9IHByb2R1Y3RWZXJzaW9uLnZlcnNpb247XG4gICAgICAgICAgdGhpcy5wcm9kdWN0ID0gcHJvZHVjdDtcblxuICAgICAgICAgIGlmIChwYXJhbXMuY2xhc3NPckludGVyZmFjZSA9PT0gJ2NsYXNzJykge1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgPSBwcm9kdWN0VmVyc2lvbi5maW5kQ2xhc3MocGFyYW1zLm5hbWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRhcmdldCA9IHByb2R1Y3RWZXJzaW9uLmZpbmRJbnRlcmZhY2UocGFyYW1zLm5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy50YXJnZXQpIHRoaXMuY29uc3RydWN0b3JTaWduYXR1cmUgPSB0aGlzLnRhcmdldC5jb25zdHJ1Y3Rvck1ldGhvZCA/IHRoaXMudGFyZ2V0LmNvbnN0cnVjdG9yTWV0aG9kLnNpZ25hdHVyZSA6IG51bGw7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
