System.register([], function (_export) {
  'use strict';

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-animator-css').plugin('aurelia-interface-platforms', function (config) {
      config.setClassList(document.documentElement);
    }).feature('article/language').feature('services').globalResources('resources/au-icon', 'resources/au-preview');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDTyxXQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUU7QUFDakMsV0FBTyxDQUFDLEdBQUcsQ0FDUixxQkFBcUIsRUFBRSxDQUN2QixNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FDOUIsTUFBTSxDQUFDLDZCQUE2QixFQUFFLFVBQUEsTUFBTSxFQUFJO0FBQy9DLFlBQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0tBQy9DLENBQUMsQ0FDRCxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FDM0IsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUNuQixlQUFlLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsQ0FBQzs7QUFFaEUsV0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUM7YUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFO0tBQUEsQ0FBQyxDQUFDO0dBQ3hDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJylcbiAgICAucGx1Z2luKCdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnLCBjb25maWcgPT4ge1xuICAgICAgY29uZmlnLnNldENsYXNzTGlzdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIH0pXG4gICAgLmZlYXR1cmUoJ2FydGljbGUvbGFuZ3VhZ2UnKVxuICAgIC5mZWF0dXJlKCdzZXJ2aWNlcycpXG4gICAgLmdsb2JhbFJlc291cmNlcygncmVzb3VyY2VzL2F1LWljb24nLCAncmVzb3VyY2VzL2F1LXByZXZpZXcnKTtcblxuICBhdXJlbGlhLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
