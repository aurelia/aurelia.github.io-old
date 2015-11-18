System.register(['aurelia-framework', 'backend/server'], function (_export) {
  'use strict';

  var inject, Server, Profile;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3Byb2ZpbGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3NCQUlhLE9BQU87Ozs7Ozs7O2lDQUpaLE1BQU07OzhCQUNOLE1BQU07OztBQUdELGFBQU87QUFXUCxpQkFYQSxPQUFPLENBV04sTUFBTSxFQUFFOzs7ZUFWcEIsR0FBRyxHQUFHLFNBQVM7ZUFDZixPQUFPLEdBQUcsU0FBUztlQUNuQixPQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxTQUFTLENBQUM7ZUFDaEUsT0FBTyxHQUFHLENBQ1IsRUFBQyxJQUFJLEVBQUUsV0FBVyxFQUFNLEtBQUssRUFBRSxXQUFXLEVBQU8sSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQ3pFLEVBQUMsSUFBSSxFQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFHLElBQUksRUFBRSx1QkFBdUIsRUFBQyxFQUMvRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQU0sS0FBSyxFQUFFLFdBQVcsRUFBTyxJQUFJLEVBQUUsY0FBYyxFQUFDLEVBQ3RFLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBUSxLQUFLLEVBQUUsU0FBUyxFQUFTLElBQUksRUFBRSxrQkFBa0IsRUFBQyxDQUMzRTs7QUFHQyxjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztTQUN0Qjs7cUJBYlUsT0FBTzs7aUJBZU4sd0JBQUc7QUFDYixtQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUN6RDs7O3VCQWpCVSxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ0YsT0FBTyxLQUFQLE9BQU87ZUFBUCxPQUFPIiwiZmlsZSI6InNlcnZpY2VzL3Byb2ZpbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gJ2JhY2tlbmQvc2VydmVyJztcblxuQGluamVjdChTZXJ2ZXIpXG5leHBvcnQgY2xhc3MgUHJvZmlsZSB7XG4gIGtleSA9ICdwcm9maWxlJztcbiAgY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgb3B0aW9ucyA9IFsnZGV2ZWxvcGVyJywgJ25ldy1kZXZlbG9wZXInLCAnYXJjaGl0ZWN0JywgJ21hbmFnZXInXTtcbiAgZGlzcGxheSA9IFtcbiAgICB7bmFtZTogJ2RldmVsb3BlcicsICAgICB2YWx1ZTogJ2RldmVsb3BlcicsICAgICAgdGV4dDogJ2Egd2ViIGRldmVsb3Blcid9LFxuICAgIHtuYW1lOiAnbmV3LWRldmVsb3BlcicsIHZhbHVlOiAnbmV3LWRldmVsb3BlcicsICB0ZXh0OiAnbmV3IHRvIHdlYiBkZXYgb3IgU1BBJ30sXG4gICAge25hbWU6ICdhcmNoaXRlY3QnLCAgICAgdmFsdWU6ICdhcmNoaXRlY3QnLCAgICAgIHRleHQ6ICdhbiBhcmNoaXRlY3QnfSxcbiAgICB7bmFtZTogJ21hbmFnZXInLCAgICAgICB2YWx1ZTogJ21hbmFnZXInLCAgICAgICAgdGV4dDogJ2EgbWFuYWdlciBvciBDVE8nfVxuICBdO1xuXG4gIGNvbnN0cnVjdG9yKHNlcnZlcikge1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICB9XG5cbiAgZ2V0VHV0b3JpYWxzKCkge1xuICAgIHJldHVybiB0aGlzLnNlcnZlci5nZXRUdXRvcmlhbHNGb3JQcm9maWxlKHRoaXMuY3VycmVudCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
