System.register(['aurelia-dependency-injection', 'backend/server'], function (_export) {
  'use strict';

  var inject, Server, Profile;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }],
    execute: function () {
      Profile = (function () {
        function Profile(server) {
          _classCallCheck(this, _Profile);

          this.key = 'profile';
          this.current = undefined;
          this.options = ['developer', 'new-developer', 'architect', 'manager'];
          this.display = [{ name: 'developer', value: 'developer', text: 'a web developer' }, { name: 'new-developer', value: 'new-developer', text: 'new to web dev or SPA' }, { name: 'architect', value: 'architect', text: 'an architect' }, { name: 'manager', value: 'manager', text: 'a manager or CTO' }];

          this.server = server;
        }

        _createClass(Profile, [{
          key: 'getTutorials',
          value: function getTutorials() {
            return this.server.getTutorialsForProfile(this.current);
          }
        }]);

        var _Profile = Profile;
        Profile = inject(Server)(Profile) || Profile;
        return Profile;
      })();

      _export('Profile', Profile);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUlhLE9BQU87Ozs7Ozs7OzJDQUpaLE1BQU07OzhCQUNOLE1BQU07OztBQUdELGFBQU87QUFXUCxpQkFYQSxPQUFPLENBV04sTUFBTSxFQUFFOzs7ZUFWcEIsR0FBRyxHQUFHLFNBQVM7ZUFDZixPQUFPLEdBQUcsU0FBUztlQUNuQixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7ZUFDaEUsT0FBTyxHQUFHLENBQ1IsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFNLEtBQUssRUFBRSxXQUFXLEVBQU8sSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQ3pFLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFHLElBQUksRUFBRSx1QkFBdUIsRUFBQyxFQUMvRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQU0sS0FBSyxFQUFFLFdBQVcsRUFBTyxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBUSxLQUFLLEVBQUUsU0FBUyxFQUFTLElBQUksRUFBRSxrQkFBa0IsRUFBQyxDQUMzRTs7QUFHQyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7cUJBYlUsT0FBTzs7aUJBZU4sd0JBQUc7QUFDYixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUN6RDs7O3VCQWpCVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPIiwiZmlsZSI6InNlcnZpY2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuXG5AaW5qZWN0KFNlcnZlcilcbmV4cG9ydCBjbGFzcyBQcm9maWxlIHtcbiAga2V5ID0gJ3Byb2ZpbGUnO1xuICBjdXJyZW50ID0gdW5kZWZpbmVkO1xuICBvcHRpb25zID0gWydkZXZlbG9wZXInLCAnbmV3LWRldmVsb3BlcicsICdhcmNoaXRlY3QnLCAnbWFuYWdlciddO1xuICBkaXNwbGF5ID0gW1xuICAgIHtuYW1lOiAnZGV2ZWxvcGVyJywgICAgIHZhbHVlOiAnZGV2ZWxvcGVyJywgICAgICB0ZXh0OiAnYSB3ZWIgZGV2ZWxvcGVyJ30sXG4gICAge25hbWU6ICduZXctZGV2ZWxvcGVyJywgdmFsdWU6ICduZXctZGV2ZWxvcGVyJywgIHRleHQ6ICduZXcgdG8gd2ViIGRldiBvciBTUEEnfSxcbiAgICB7bmFtZTogJ2FyY2hpdGVjdCcsICAgICB2YWx1ZTogJ2FyY2hpdGVjdCcsICAgICAgdGV4dDogJ2FuIGFyY2hpdGVjdCd9LFxuICAgIHtuYW1lOiAnbWFuYWdlcicsICAgICAgIHZhbHVlOiAnbWFuYWdlcicsICAgICAgICB0ZXh0OiAnYSBtYW5hZ2VyIG9yIENUTyd9XG4gIF07XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyKSB7XG4gICAgdGhpcy5zZXJ2ZXIgPSBzZXJ2ZXI7XG4gIH1cblxuICBnZXRUdXRvcmlhbHMoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VydmVyLmdldFR1dG9yaWFsc0ZvclByb2ZpbGUodGhpcy5jdXJyZW50KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
