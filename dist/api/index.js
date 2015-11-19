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
            config.map([{ route: 'overview', moduleId: './product', title: 'API' }, { route: 'home', moduleId: './no-selection', title: 'API Home' }, { route: ':classOrInterface/:name', moduleId: './class-or-interface' }]);

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
        }]);

        var _Index = Index;
        Index = inject(Server, AUChannel)(Index) || Index;
        return Index;
      })();

      _export('Index', Index);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUNBS2EsS0FBSzs7Ozs7Ozs7MkNBTFYsTUFBTTs7OEJBQ04sTUFBTTs7bUNBQ04sU0FBUzs7O0FBR0osV0FBSztBQUVMLGlCQUZBLEtBQUssQ0FFSixNQUFNLEVBQUUsT0FBTyxFQUFFOzs7QUFDM0IsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7O3FCQU5VLEtBQUs7O2lCQVFELHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQzFELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUNoRSxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsQ0FDdkUsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2lCQUVPLG9CQUFHOzs7QUFDVCxtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSSxNQUFLLFFBQVEsR0FBRyxRQUFRO2FBQUEsQ0FBQyxDQUFDO1dBQ3JGOzs7cUJBcEJVLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQ2IsS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6ImFwaS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5cbkBpbmplY3QoU2VydmVyLCBBVUNoYW5uZWwpXG5leHBvcnQgY2xhc3MgSW5kZXgge1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlciwgY2hhbm5lbCkge1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5pc0FwaSA9IHRydWU7XG4gIH1cblxuICBjb25maWd1cmVSb3V0ZXIoY29uZmlnLCByb3V0ZXIpIHtcbiAgICBjb25maWcubWFwKFtcbiAgICAgIHsgcm91dGU6ICdvdmVydmlldycsIG1vZHVsZUlkOiAnLi9wcm9kdWN0JywgdGl0bGU6ICdBUEknIH0sXG4gICAgICB7IHJvdXRlOiAnaG9tZScsIG1vZHVsZUlkOiAnLi9uby1zZWxlY3Rpb24nLCB0aXRsZTogJ0FQSSBIb21lJyB9LFxuICAgICAgeyByb3V0ZTogJzpjbGFzc09ySW50ZXJmYWNlLzpuYW1lJywgbW9kdWxlSWQ6ICcuL2NsYXNzLW9yLWludGVyZmFjZScgfVxuICAgIF0pO1xuXG4gICAgdGhpcy5yb3V0ZXIgPSByb3V0ZXI7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2ZXIuZ2V0T2ZmaWNpYWxQcm9kdWN0cygpLnRoZW4ocHJvZHVjdHMgPT4gdGhpcy5wcm9kdWN0cyA9IHByb2R1Y3RzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
