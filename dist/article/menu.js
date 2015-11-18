System.register(['aurelia-framework', 'backend/server', 'services/local', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, LocalAPI, AUChannel, ArticleMenu, Vowels, VowelValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_backendServer) {
      Server = _backendServer.Server;
    }, function (_servicesLocal) {
      LocalAPI = _servicesLocal.LocalAPI;
    }, function (_servicesChannel) {
      AUChannel = _servicesChannel.AUChannel;
    }],
    execute: function () {
      ArticleMenu = (function () {
        function ArticleMenu(server, channel, api) {
          var _this = this;

          _classCallCheck(this, _ArticleMenu);

          this.tutorials = null;

          this.api = api;
          this.server = server;
          this.channel = channel;
          this.profile = api.getProfile();
          this.profile.getTutorials().then(function (tutorials) {
            _this.tutorials = tutorials;
          });
        }

        _createClass(ArticleMenu, [{
          key: 'activate',
          value: function activate() {
            var _this2 = this;

            this.changedHandler = this.channel.subscribe('profile-changed', function (profile) {
              profile.getTutorials().then(function (tutorials) {
                _this2.tutorials = tutorials;
              });

              _this2.profile = profile;
            });
          }
        }, {
          key: 'deactivate',
          value: function deactivate() {
            this.changedHandler.dispose();
          }
        }]);

        var _ArticleMenu = ArticleMenu;
        ArticleMenu = inject(Server, AUChannel, LocalAPI)(ArticleMenu) || ArticleMenu;
        return ArticleMenu;
      })();

      _export('ArticleMenu', ArticleMenu);

      Vowels = ['a', 'e', 'i', 'o', 'u'];

      VowelValueConverter = (function () {
        function VowelValueConverter() {
          _classCallCheck(this, VowelValueConverter);
        }

        _createClass(VowelValueConverter, [{
          key: 'toView',
          value: function toView(text) {
            if (typeof text === 'object') {
              return text.displayName;
            }
            return Vowels.indexOf(first) < 0 ? 'a ' + text : 'an ' + text;
          }
        }]);

        return VowelValueConverter;
      })();

      _export('VowelValueConverter', VowelValueConverter);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MkNBTWEsV0FBVyxFQThCbEIsTUFBTSxFQUNDLG1CQUFtQjs7Ozs7Ozs7aUNBckN4QixNQUFNOzs4QkFDTixNQUFNOztnQ0FDTixRQUFROzttQ0FDUixTQUFTOzs7QUFHSixpQkFBVztBQUdYLGlCQUhBLFdBQVcsQ0FHVixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTs7Ozs7ZUFGbEMsU0FBUyxHQUFHLElBQUk7O0FBR2QsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoQyxjQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUM1QyxrQkFBSyxTQUFTLEdBQUcsU0FBUyxDQUFDO1dBQzVCLENBQUMsQ0FBQztTQUNKOztxQkFYVSxXQUFXOztpQkFhZCxvQkFBRzs7O0FBQ1QsZ0JBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxPQUFPLEVBQUk7QUFDMUUscUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUUsVUFBQSxTQUFTLEVBQUk7QUFDeEMsdUJBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQztlQUM1QixDQUFDLENBQUM7O0FBR0gscUJBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUN4QixDQUFDLENBQUM7V0FDSjs7O2lCQUVTLHNCQUFHO0FBQ1gsZ0JBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDL0I7OzsyQkExQlUsV0FBVztBQUFYLG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUN2QixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVc7Ozs7O0FBOEJsQixZQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztBQUMzQix5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLElBQUksRUFBRTtBQUNYLGdCQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUM1QixxQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCO0FBQ0QsbUJBQU8sQUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFNLEtBQUssR0FBRyxJQUFJLEFBQUMsQ0FBQztXQUN0RTs7O2VBTlUsbUJBQW1CIiwiZmlsZSI6ImFydGljbGUvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge1NlcnZlcn0gZnJvbSAnYmFja2VuZC9zZXJ2ZXInO1xuaW1wb3J0IHtMb2NhbEFQSX0gZnJvbSAnc2VydmljZXMvbG9jYWwnO1xuaW1wb3J0IHtBVUNoYW5uZWx9IGZyb20gJ3NlcnZpY2VzL2NoYW5uZWwnO1xuXG5AaW5qZWN0KFNlcnZlciwgQVVDaGFubmVsLCBMb2NhbEFQSSlcbmV4cG9ydCBjbGFzcyBBcnRpY2xlTWVudSB7XG4gIHR1dG9yaWFscyA9IG51bGw7XG5cbiAgY29uc3RydWN0b3Ioc2VydmVyLCBjaGFubmVsLCBhcGkpIHtcbiAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICB0aGlzLnNlcnZlciA9IHNlcnZlcjtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICAgIHRoaXMucHJvZmlsZSA9IGFwaS5nZXRQcm9maWxlKCk7XG4gICAgdGhpcy5wcm9maWxlLmdldFR1dG9yaWFscygpLnRoZW4odHV0b3JpYWxzID0+IHtcbiAgICAgIHRoaXMudHV0b3JpYWxzID0gdHV0b3JpYWxzO1xuICAgIH0pO1xuICB9XG5cbiAgYWN0aXZhdGUoKSB7XG4gICAgdGhpcy5jaGFuZ2VkSGFuZGxlciA9IHRoaXMuY2hhbm5lbC5zdWJzY3JpYmUoJ3Byb2ZpbGUtY2hhbmdlZCcsIChwcm9maWxlKT0+IHtcbiAgICAgIHByb2ZpbGUuZ2V0VHV0b3JpYWxzKCkudGhlbiggdHV0b3JpYWxzID0+IHtcbiAgICAgICAgdGhpcy50dXRvcmlhbHMgPSB0dXRvcmlhbHM7XG4gICAgICB9KTtcblxuXG4gICAgICB0aGlzLnByb2ZpbGUgPSBwcm9maWxlO1xuICAgIH0pO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmNoYW5nZWRIYW5kbGVyLmRpc3Bvc2UoKTtcbiAgfVxuXG59XG5cbmNvbnN0IFZvd2VscyA9IFsnYScsICdlJywgJ2knLCAnbycsICd1J107XG5leHBvcnQgY2xhc3MgVm93ZWxWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh0ZXh0KSB7XG4gICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuIHRleHQuZGlzcGxheU5hbWU7XG4gICAgfVxuICAgIHJldHVybiAoVm93ZWxzLmluZGV4T2YoZmlyc3QpIDwgMCkgPyAoJ2EgJyArIHRleHQgKSA6ICgnYW4gJyArIHRleHQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
