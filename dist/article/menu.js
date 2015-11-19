System.register(['aurelia-dependency-injection', 'backend/server', 'services/local', 'services/channel'], function (_export) {
  'use strict';

  var inject, Server, LocalAPI, AUChannel, ArticleMenu, Vowels, VowelValueConverter;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7MkNBTWEsV0FBVyxFQThCbEIsTUFBTSxFQUNDLG1CQUFtQjs7Ozs7Ozs7MkNBckN4QixNQUFNOzs4QkFDTixNQUFNOztnQ0FDTixRQUFROzttQ0FDUixTQUFTOzs7QUFHSixpQkFBVztBQUdYLGlCQUhBLFdBQVcsQ0FHVixNQUFNLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRTs7Ozs7ZUFGbEMsU0FBUyxHQUFHLElBQUk7O0FBR2QsY0FBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDZixjQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixjQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUNoQyxjQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLFNBQVMsRUFBSTtBQUM1QyxrQkFBSyxTQUFTLEdBQUcsU0FBUyxDQUFDO1dBQzVCLENBQUMsQ0FBQztTQUNKOztxQkFYVSxXQUFXOztpQkFhZCxvQkFBRzs7O0FBQ1QsZ0JBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsaUJBQWlCLEVBQUUsVUFBQyxPQUFPLEVBQUk7QUFDMUUscUJBQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUUsVUFBQSxTQUFTLEVBQUk7QUFDeEMsdUJBQUssU0FBUyxHQUFHLFNBQVMsQ0FBQztlQUM1QixDQUFDLENBQUM7O0FBR0gscUJBQUssT0FBTyxHQUFHLE9BQU8sQ0FBQzthQUN4QixDQUFDLENBQUM7V0FDSjs7O2lCQUVTLHNCQUFHO0FBQ1gsZ0JBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7V0FDL0I7OzsyQkExQlUsV0FBVztBQUFYLG1CQUFXLEdBRHZCLE1BQU0sQ0FBQyxNQUFNLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUN2QixXQUFXLEtBQVgsV0FBVztlQUFYLFdBQVc7Ozs7O0FBOEJsQixZQUFNLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDOztBQUMzQix5QkFBbUI7aUJBQW5CLG1CQUFtQjtnQ0FBbkIsbUJBQW1COzs7cUJBQW5CLG1CQUFtQjs7aUJBQ3hCLGdCQUFDLElBQUksRUFBRTtBQUNYLGdCQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtBQUM1QixxQkFBTyxJQUFJLENBQUMsV0FBVyxDQUFDO2FBQ3pCO0FBQ0QsbUJBQU8sQUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBSyxJQUFJLEdBQUcsSUFBSSxHQUFNLEtBQUssR0FBRyxJQUFJLEFBQUMsQ0FBQztXQUN0RTs7O2VBTlUsbUJBQW1CIiwiZmlsZSI6ImFydGljbGUvbWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7U2VydmVyfSBmcm9tICdiYWNrZW5kL3NlcnZlcic7XG5pbXBvcnQge0xvY2FsQVBJfSBmcm9tICdzZXJ2aWNlcy9sb2NhbCc7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnc2VydmljZXMvY2hhbm5lbCc7XG5cbkBpbmplY3QoU2VydmVyLCBBVUNoYW5uZWwsIExvY2FsQVBJKVxuZXhwb3J0IGNsYXNzIEFydGljbGVNZW51IHtcbiAgdHV0b3JpYWxzID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcihzZXJ2ZXIsIGNoYW5uZWwsIGFwaSkge1xuICAgIHRoaXMuYXBpID0gYXBpO1xuICAgIHRoaXMuc2VydmVyID0gc2VydmVyO1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5wcm9maWxlID0gYXBpLmdldFByb2ZpbGUoKTtcbiAgICB0aGlzLnByb2ZpbGUuZ2V0VHV0b3JpYWxzKCkudGhlbih0dXRvcmlhbHMgPT4ge1xuICAgICAgdGhpcy50dXRvcmlhbHMgPSB0dXRvcmlhbHM7XG4gICAgfSk7XG4gIH1cblxuICBhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmNoYW5nZWRIYW5kbGVyID0gdGhpcy5jaGFubmVsLnN1YnNjcmliZSgncHJvZmlsZS1jaGFuZ2VkJywgKHByb2ZpbGUpPT4ge1xuICAgICAgcHJvZmlsZS5nZXRUdXRvcmlhbHMoKS50aGVuKCB0dXRvcmlhbHMgPT4ge1xuICAgICAgICB0aGlzLnR1dG9yaWFscyA9IHR1dG9yaWFscztcbiAgICAgIH0pO1xuXG5cbiAgICAgIHRoaXMucHJvZmlsZSA9IHByb2ZpbGU7XG4gICAgfSk7XG4gIH1cblxuICBkZWFjdGl2YXRlKCkge1xuICAgIHRoaXMuY2hhbmdlZEhhbmRsZXIuZGlzcG9zZSgpO1xuICB9XG5cbn1cblxuY29uc3QgVm93ZWxzID0gWydhJywgJ2UnLCAnaScsICdvJywgJ3UnXTtcbmV4cG9ydCBjbGFzcyBWb3dlbFZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHRleHQpIHtcbiAgICBpZiAodHlwZW9mIHRleHQgPT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGV4dC5kaXNwbGF5TmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIChWb3dlbHMuaW5kZXhPZihmaXJzdCkgPCAwKSA/ICgnYSAnICsgdGV4dCApIDogKCdhbiAnICsgdGV4dCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
