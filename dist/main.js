System.register(['aurelia-interface-platforms'], function (_export) {
  'use strict';

  var isAndroid;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-animator-css').plugin('aurelia-interface-platforms', function (config) {
      config.setClassList(document.documentElement);
      if (isAndroid) {
        var meta = document.getElementById('metatag');
        meta.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
      }
    }).feature('article/language').feature('services').globalResources('resources/au-icon', 'resources/au-preview');

    aurelia.start().then(function (a) {
      return a.setRoot();
    });
  }

  return {
    setters: [function (_aureliaInterfacePlatforms) {
      isAndroid = _aureliaInterfacePlatforms.isAndroid;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVPLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxXQUFPLENBQUMsR0FBRyxDQUNSLHFCQUFxQixFQUFFLENBQ3ZCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxDQUM5QixNQUFNLENBQUMsNkJBQTZCLEVBQUUsVUFBQSxNQUFNLEVBQUk7QUFDL0MsWUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsVUFBSSxTQUFTLEVBQUU7QUFDYixZQUFJLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzlDLFlBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLHlEQUF5RCxDQUFDLENBQUM7T0FDekY7S0FDRixDQUFDLENBQ0QsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQzNCLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FDbkIsZUFBZSxDQUFDLG1CQUFtQixFQUFFLHNCQUFzQixDQUFDLENBQUM7O0FBRWhFLFdBQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO2FBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRTtLQUFBLENBQUMsQ0FBQztHQUN4Qzs7Ozs2Q0FsQk8sU0FBUyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc0FuZHJvaWR9IGZyb20gJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3Jtcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5wbHVnaW4oJ2F1cmVsaWEtYW5pbWF0b3ItY3NzJylcbiAgICAucGx1Z2luKCdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnLCBjb25maWcgPT4ge1xuICAgICAgY29uZmlnLnNldENsYXNzTGlzdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICBsZXQgbWV0YSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXRhdGFnJyk7XG4gICAgICAgIG1ldGEuc2V0QXR0cmlidXRlKCdjb250ZW50JywgJ3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAsIHVzZXItc2NhbGFibGU9bm8nKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC5mZWF0dXJlKCdhcnRpY2xlL2xhbmd1YWdlJylcbiAgICAuZmVhdHVyZSgnc2VydmljZXMnKVxuICAgIC5nbG9iYWxSZXNvdXJjZXMoJ3Jlc291cmNlcy9hdS1pY29uJywgJ3Jlc291cmNlcy9hdS1wcmV2aWV3Jyk7XG5cbiAgYXVyZWxpYS5zdGFydCgpLnRoZW4oYSA9PiBhLnNldFJvb3QoKSk7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
