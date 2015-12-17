/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var imagePicker = _plugins.Plugins.fromWindow('imagePicker');

  var ImagePicker = (function () {
    function ImagePicker() {
      _classCallCheck(this, ImagePicker);

      this.isSupported = !!imagePicker;
    }

    _createClass(ImagePicker, [{
      key: 'getPictures',
      value: function getPictures(options) {
        return new Promise(function (resolve, reject) {
          imagePicker.getPictures(resolve, reject, options);
        });
      }
    }]);

    return ImagePicker;
  })();

  exports.ImagePicker = ImagePicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9pbWFnZS1waWNrZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFPQSxNQUFJLFdBQVcsR0FBRyxTQVBWLE9BQU8sQ0FPVyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7O01BQ3ZDLFdBQVc7YUFBWCxXQUFXOzRCQUFYLFdBQVc7O1dBQ3RCLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVzs7O2lCQURoQixXQUFXOzthQUdYLHFCQUFDLE9BQU8sRUFBRTtBQUNuQixlQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxxQkFBVyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25ELENBQUMsQ0FBQztPQUNKOzs7V0FQVSxXQUFXIiwiZmlsZSI6ImF1cmVsaWEtY29yZG92YS9pbWFnZS1waWNrZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BsdWdpbnN9IGZyb20gJy4vcGx1Z2lucyc7XG5cbi8qKlxuICogY2xhc3MgSW1hZ2VQaWNrZXJcbiAqIEBpbnN0YWxsICAgJCBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL3d5bXNlZS9jb3Jkb3ZhLWltYWdlUGlja2VyLmdpdFxuICogQHJlc291cmNlICBodHRwczovL2dpdGh1Yi5jb20vd3ltc2VlL2NvcmRvdmEtaW1hZ2VQaWNrZXJcbiAqL1xubGV0IGltYWdlUGlja2VyID0gUGx1Z2lucy5mcm9tV2luZG93KCdpbWFnZVBpY2tlcicpO1xuZXhwb3J0IGNsYXNzIEltYWdlUGlja2VyIHtcbiAgaXNTdXBwb3J0ZWQgPSAhIWltYWdlUGlja2VyO1xuXG4gIGdldFBpY3R1cmVzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaW1hZ2VQaWNrZXIuZ2V0UGljdHVyZXMocmVzb2x2ZSwgcmVqZWN0LCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
