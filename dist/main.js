System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('aurelia-animator-css').plugin('aurelia-interface-platforms', function (config) {
      config.setClassList(document.documentElement);
    }).feature('article/language').globalResources('resources/au-icon', 'resources/au-preview');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixrQkFBa0IsRUFBRSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FDOUIsTUFBTSxDQUFDLDZCQUE2QixFQUFFLFVBQUEsTUFBTSxFQUFJO0FBQy9DLFlBQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQy9DLENBQUMsQ0FDRCxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDM0IsZUFBZSxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDLENBQUM7O0FBRWhFLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtLQUFBLENBQUMsQ0FBQztHQUN4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWEpIHtcbiAgYXVyZWxpYS51c2VcbiAgICAuc3RhbmRhcmRDb25maWd1cmF0aW9uKClcbiAgICAuZGV2ZWxvcG1lbnRMb2dnaW5nKClcbiAgICAucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLWNzcycpXG4gICAgLnBsdWdpbignYXVyZWxpYS1pbnRlcmZhY2UtcGxhdGZvcm1zJywgY29uZmlnID0+IHtcbiAgICAgIGNvbmZpZy5zZXRDbGFzc0xpc3QoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICB9KVxuICAgIC5mZWF0dXJlKCdhcnRpY2xlL2xhbmd1YWdlJylcbiAgICAuZ2xvYmFsUmVzb3VyY2VzKCdyZXNvdXJjZXMvYXUtaWNvbicsICdyZXNvdXJjZXMvYXUtcHJldmlldycpO1xuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KCkpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
