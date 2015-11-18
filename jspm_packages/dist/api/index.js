System.register(['aurelia-framework', 'backend/server', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, AUChannel, Index;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7aUNBS2EsS0FBSzs7Ozs7Ozs7aUNBTFYsTUFBTTs7OEJBQ04sTUFBTTs7bUNBQ04sU0FBUzs7O0FBR0osV0FBSztBQUVMLGlCQUZBLEtBQUssQ0FFSixNQUFNLEVBQUUsT0FBTyxFQUFFOzs7QUFDM0IsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsY0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbkI7O3FCQU5VLEtBQUs7O2lCQVFELHlCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUU7QUFDOUIsa0JBQU0sQ0FBQyxHQUFHLENBQUMsQ0FDVCxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQzFELEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxFQUNoRSxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsQ0FDdkUsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztXQUN0Qjs7O2lCQUVPLG9CQUFHOzs7QUFDVCxtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtxQkFBSSxNQUFLLFFBQVEsR0FBRyxRQUFRO2FBQUEsQ0FBQyxDQUFDO1dBQ3JGOzs7cUJBcEJVLEtBQUs7QUFBTCxhQUFLLEdBRGpCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQ2IsS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6ImFwaS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuXG5AaW5qZWN0KFNlcnZlciwgQVVDaGFubmVsKVxuZXhwb3J0IGNsYXNzIEluZGV4IHtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIGNoYW5uZWwpIHtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMuaXNBcGkgPSB0cnVlO1xuICB9XG5cbiAgY29uZmlndXJlUm91dGVyKGNvbmZpZywgcm91dGVyKSB7XG4gICAgY29uZmlnLm1hcChbXG4gICAgICB7IHJvdXRlOiAnb3ZlcnZpZXcnLCBtb2R1bGVJZDogJy4vcHJvZHVjdCcsIHRpdGxlOiAnQVBJJyB9LFxuICAgICAgeyByb3V0ZTogJ2hvbWUnLCBtb2R1bGVJZDogJy4vbm8tc2VsZWN0aW9uJywgdGl0bGU6ICdBUEkgSG9tZScgfSxcbiAgICAgIHsgcm91dGU6ICc6Y2xhc3NPckludGVyZmFjZS86bmFtZScsIG1vZHVsZUlkOiAnLi9jbGFzcy1vci1pbnRlcmZhY2UnIH1cbiAgICBdKTtcblxuICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyLmdldE9mZmljaWFsUHJvZHVjdHMoKS50aGVuKHByb2R1Y3RzID0+IHRoaXMucHJvZHVjdHMgPSBwcm9kdWN0cyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
