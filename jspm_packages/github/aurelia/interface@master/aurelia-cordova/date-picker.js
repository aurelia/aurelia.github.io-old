/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var datePicker = _plugins.Plugins.fromWindow('datePicker');

  var DatePicker = (function () {
    function DatePicker() {
      _classCallCheck(this, DatePicker);

      this.isSupported = !!datePicker;
    }

    _createClass(DatePicker, [{
      key: 'show',
      value: function show(options) {
        var _this = this;

        options = options || { date: new Date(), mode: 'date' };
        return new Promise(function (resolve, reject) {
          if (!_this.isSupported) {
            return reject({ isSupported: _this.isSupported, error: 'Date Picker either not installed of not supported!' });
          }

          datePicker.show(options, function (date) {
            resolve({ isSupported: _this.isSupported, value: date });
          });
        });
      }
    }]);

    return DatePicker;
  })();

  exports.DatePicker = DatePicker;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9kYXRlLXBpY2tlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BLE1BQUksVUFBVSxHQUFHLFNBUFQsT0FBTyxDQU9VLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQzs7TUFDckMsVUFBVTthQUFWLFVBQVU7NEJBQVYsVUFBVTs7V0FFckIsV0FBVyxHQUFHLENBQUMsQ0FBQyxVQUFVOzs7aUJBRmYsVUFBVTs7YUFHakIsY0FBQyxPQUFPLEVBQUU7OztBQUNaLGVBQU8sR0FBRyxPQUFPLElBQUksRUFBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFDLENBQUM7QUFDdEQsZUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUs7QUFDdEMsY0FBSSxDQUFDLE1BQUssV0FBVyxFQUFFO0FBQ3JCLG1CQUFPLE1BQU0sQ0FBQyxFQUFDLFdBQVcsRUFBRSxNQUFLLFdBQVcsRUFBRSxLQUFLLEVBQUUsb0RBQW9ELEVBQUMsQ0FBQyxDQUFDO1dBQzdHOztBQUVELG9CQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLElBQUksRUFBSTtBQUNoQyxtQkFBTyxDQUFDLEVBQUMsV0FBVyxFQUFFLE1BQUssV0FBVyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO1dBQ3ZELENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztPQUNKOzs7V0FkVSxVQUFVIiwiZmlsZSI6ImF1cmVsaWEtY29yZG92YS9kYXRlLXBpY2tlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcbi8qKlxuICogY2xhc3MgRGF0ZVBpY2tlclxuICpcbiAqIEBpbnN0YWxsICAkIGNvcmRvdmEgcGx1Z2luIGFkZCBodHRwczovL2dpdGh1Yi5jb20vVml0YWxpaUJsYWdvZGlyL2NvcmRvdmEtcGx1Z2luLWRhdGVwaWNrZXIuZ2l0XG4gKiBAcmVzb3VyY2UgaHR0cHM6Ly9naXRodWIuY29tL1ZpdGFsaWlCbGFnb2Rpci9jb3Jkb3ZhLXBsdWdpbi1kYXRlcGlja2VyXG4gKi9cbmxldCBkYXRlUGlja2VyID0gUGx1Z2lucy5mcm9tV2luZG93KCdkYXRlUGlja2VyJyk7XG5leHBvcnQgY2xhc3MgRGF0ZVBpY2tlciB7XG5cbiAgaXNTdXBwb3J0ZWQgPSAhIWRhdGVQaWNrZXI7XG4gIHNob3cob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHtkYXRlOiBuZXcgRGF0ZSgpLCBtb2RlOiAnZGF0ZSd9O1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdCh7aXNTdXBwb3J0ZWQ6IHRoaXMuaXNTdXBwb3J0ZWQsIGVycm9yOiAnRGF0ZSBQaWNrZXIgZWl0aGVyIG5vdCBpbnN0YWxsZWQgb2Ygbm90IHN1cHBvcnRlZCEnfSk7XG4gICAgICB9XG5cbiAgICAgIGRhdGVQaWNrZXIuc2hvdyhvcHRpb25zLCAoZGF0ZSk9PiB7XG4gICAgICAgIHJlc29sdmUoe2lzU3VwcG9ydGVkOiB0aGlzLmlzU3VwcG9ydGVkLCB2YWx1ZTogZGF0ZX0pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
