System.register(['aurelia-dependency-injection', 'backend/server', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, AUChannel, Index;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }],
    execute: function () {
      Index = (function () {
        function Index(server, channel) {
          _classCallCheck(this, _Index);

          this.server = server;
          this.channel = channel;
          this.isApi = true;
        }

        _createClass(Index, [{
          key: 'configureRouter',
          value: function configureRouter(config, router) {
            config.map([{ route: ['home', 'overview'], moduleId: './product', title: 'API' }, { route: ':classOrInterface/:name', moduleId: './class-or-interface' }]);

            this.router = router;
          }
        }, {
          key: 'activate',
          value: function activate() {
            var _this = this;

            return this.server.getOfficialProducts().then(function (products) {
              return _this.products = products;
            });
          }
        }, {
          key: 'attached',
          value: function attached() {}
        }]);

        var _Index = Index;
        Index = inject(Server, AUChannel)(Index) || Index;
        return Index;
      })();

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUNBS2EsS0FBSzs7Ozs7Ozs7MkNBTFYsTUFBTTs7OEJBQ04sTUFBTTs7bUNBQ04sU0FBUzs7O0FBR0osV0FBSztBQUVMLGlCQUZBLEtBQUssQ0FFSixNQUFNLEVBQUUsT0FBTyxFQUFFOzs7QUFDM0IsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7O3FCQU5VLEtBQUs7O2lCQVFELHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsRUFDcEUsRUFBRSxLQUFLLEVBQUUseUJBQXlCLEVBQUUsUUFBUSxFQUFFLHNCQUFzQixFQUFFLENBQ3ZFLENBQUMsQ0FBQzs7QUFFSCxnQkFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7V0FDdEI7OztpQkFFTyxvQkFBRzs7O0FBQ1QsbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFFBQVE7cUJBQUksTUFBSyxRQUFRLEdBQUcsUUFBUTthQUFBLENBQUMsQ0FBQztXQUNyRjs7O2lCQUVPLG9CQUFHLEVBQ1Y7OztxQkF0QlUsS0FBSztBQUFMLGFBQUssR0FEakIsTUFBTSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FDYixLQUFLLEtBQUwsS0FBSztlQUFMLEtBQUsiLCJmaWxlIjoiYXBpL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gJ2JhY2tlbmQvc2VydmVyJztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICdzZXJ2aWNlcy9jaGFubmVsJztcblxuQGluamVjdChTZXJ2ZXIsIEFVQ2hhbm5lbClcbmV4cG9ydCBjbGFzcyBJbmRleCB7XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyLCBjaGFubmVsKSB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLmlzQXBpID0gdHJ1ZTtcbiAgfVxuXG4gIGNvbmZpZ3VyZVJvdXRlcihjb25maWcsIHJvdXRlcikge1xuICAgIGNvbmZpZy5tYXAoW1xuICAgICAgeyByb3V0ZTogWydob21lJywgJ292ZXJ2aWV3J10sIG1vZHVsZUlkOiAnLi9wcm9kdWN0JywgdGl0bGU6ICdBUEknIH0sXG4gICAgICB7IHJvdXRlOiAnOmNsYXNzT3JJbnRlcmZhY2UvOm5hbWUnLCBtb2R1bGVJZDogJy4vY2xhc3Mtb3ItaW50ZXJmYWNlJyB9XG4gICAgXSk7XG5cbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZlci5nZXRPZmZpY2lhbFByb2R1Y3RzKCkudGhlbihwcm9kdWN0cyA9PiB0aGlzLnByb2R1Y3RzID0gcHJvZHVjdHMpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
