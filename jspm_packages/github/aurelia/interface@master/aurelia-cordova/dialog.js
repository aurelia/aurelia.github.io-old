/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var pinDialog = _plugins.Plugins.getPlugin('pinDialog');

  var PinDialog = (function () {
    function PinDialog() {
      _classCallCheck(this, PinDialog);

      this.isSupported = !!pinDialog;
    }

    _createClass(PinDialog, [{
      key: 'prompt',
      value: function prompt(message, title, buttons) {
        var _this = this;

        return new Promise(function (resolve, reject) {
          if (!_this.isSupported) return reject('pinDialog not installed!');
          pinDialog.prompt(message, function (res) {
            resolve(res);
          }, title, buttons);
        });
      }
    }]);

    return PinDialog;
  })();

  exports.PinDialog = PinDialog;

  var notification = _plugins.Plugins.fromNavigator('notification');

  var Dialog = (function () {
    function Dialog() {
      _classCallCheck(this, Dialog);

      this.isSupported = !!notification;
    }

    _createClass(Dialog, [{
      key: '_alert',
      value: function _alert(message, resolve) {
        window.alert(message);
        resolve();
      }
    }, {
      key: '_confirm',
      value: function _confirm(message, resolve) {
        var answer = window.confirm(message);
        resolve(answer ? 1 : 2);
      }
    }, {
      key: '_prompt',
      value: function _prompt(message, defaultText, resolve) {
        var value = window.prompt(message, defaultText);
        var index = value !== null ? 1 : 2;
        resolve({ value: value, index: index });
      }
    }, {
      key: 'alert',
      value: function alert() {
        var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        var _this2 = this;

        var title = arguments.length <= 1 || arguments[1] === undefined ? 'Alert' : arguments[1];
        var buttonLabel = arguments.length <= 2 || arguments[2] === undefined ? 'done' : arguments[2];

        return new Promise(function (resolve) {

          if (!_this2.isSupported) {
            return _this2._alert(message, resolve);
          }

          notification.alert(message, function () {
            resolve();
          }, title, buttonLabel);
        });
      }
    }, {
      key: 'confirm',
      value: function confirm() {
        var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

        var _this3 = this;

        var title = arguments.length <= 1 || arguments[1] === undefined ? 'confirm' : arguments[1];
        var buttonLabels = arguments.length <= 2 || arguments[2] === undefined ? ['confirm', 'cancel'] : arguments[2];

        return new Promise(function (resolve) {

          if (!_this3.isSupported) {
            return _this3._confirm(message, resolve);
          }

          notification.confirm(message, function (choice) {
            resolve(choice);
          }, title, buttonLabels);
        });
      }
    }, {
      key: 'prompt',
      value: function prompt() {
        var message = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
        var title = arguments.length <= 1 || arguments[1] === undefined ? 'Prompt' : arguments[1];

        var _this4 = this;

        var buttonLabels = arguments.length <= 2 || arguments[2] === undefined ? ['confirm', 'cancel'] : arguments[2];
        var defaultText = arguments.length <= 3 || arguments[3] === undefined ? '' : arguments[3];

        return new Promise(function (resolve) {

          if (!_this4.isSupported) {
            return _this4._prompt(message, defaultText, resolve);
          }

          notification.prompt(message, function (value) {
            resolve(value);
          }, title, buttonLabels, defaultText);
        });
      }
    }, {
      key: 'beep',
      value: function beep() {
        var times = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

        if (this.isSupported) {
          notification.beep(times);
        }
      }
    }]);

    return Dialog;
  })();

  exports.Dialog = Dialog;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9kaWFsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxNQUFJLFNBQVMsR0FBRyxTQVJSLE9BQU8sQ0FRUyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7O01BQ2xDLFNBQVM7YUFBVCxTQUFTOzRCQUFULFNBQVM7O1dBRXBCLFdBQVcsR0FBRyxDQUFDLENBQUMsU0FBUzs7O2lCQUZkLFNBQVM7O2FBSWQsZ0JBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7OztBQUM5QixlQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxjQUFJLENBQUMsTUFBSyxXQUFXLEVBQUUsT0FBTyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQztBQUNqRSxtQkFBUyxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsVUFBQSxHQUFHLEVBQUk7QUFDL0IsbUJBQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtXQUNiLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BCLENBQUMsQ0FBQztPQUNKOzs7V0FYVSxTQUFTOzs7OztBQW9CdEIsTUFBSSxZQUFZLEdBQUcsU0E3QlgsT0FBTyxDQTZCWSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7O01BQzVDLE1BQU07YUFBTixNQUFNOzRCQUFOLE1BQU07O1dBRWpCLFdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWTs7O2lCQUZqQixNQUFNOzthQUlYLGdCQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUU7QUFDdkIsY0FBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QixlQUFPLEVBQUUsQ0FBQztPQUNYOzs7YUFFTyxrQkFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFO0FBQ3pCLFlBQUksTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDckMsZUFBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7T0FDekI7OzthQUVNLGlCQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFO0FBQ3JDLFlBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ2hELFlBQUksS0FBSyxHQUFHLEtBQUssS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNuQyxlQUFPLENBQUMsRUFBQyxLQUFLLEVBQUwsS0FBSyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUMsQ0FBQyxDQUFDO09BQ3pCOzs7YUFFSSxpQkFBc0Q7WUFBckQsT0FBTyx5REFBRyxFQUFFOzs7O1lBQUUsS0FBSyx5REFBRyxPQUFPO1lBQUUsV0FBVyx5REFBRyxNQUFNOztBQUN2RCxlQUFPLElBQUksT0FBTyxDQUFDLFVBQUEsT0FBTyxFQUFJOztBQUU1QixjQUFJLENBQUMsT0FBSyxXQUFXLEVBQUU7QUFDckIsbUJBQU8sT0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1dBQ3RDOztBQUVELHNCQUFZLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxZQUFLO0FBQy9CLG1CQUFPLEVBQUUsQ0FBQTtXQUNWLEVBQUUsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBRXhCLENBQUMsQ0FBQztPQUNKOzs7YUFFTSxtQkFBd0U7WUFBdkUsT0FBTyx5REFBRyxFQUFFOzs7O1lBQUUsS0FBSyx5REFBRyxTQUFTO1lBQUUsWUFBWSx5REFBRyxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUM7O0FBQzNFLGVBQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUk7O0FBRTVCLGNBQUksQ0FBQyxPQUFLLFdBQVcsRUFBRTtBQUNyQixtQkFBTyxPQUFLLFFBQVEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7V0FDeEM7O0FBRUQsc0JBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsTUFBTSxFQUFJO0FBQ3ZDLG1CQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7V0FDakIsRUFBRSxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUFDO09BQ0o7OzthQUVLLGtCQUF5RjtZQUF4RixPQUFPLHlEQUFHLEVBQUU7WUFBRSxLQUFLLHlEQUFHLFFBQVE7Ozs7WUFBRSxZQUFZLHlEQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztZQUFFLFdBQVcseURBQUcsRUFBRTs7QUFDM0YsZUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTs7QUFFNUIsY0FBSSxDQUFDLE9BQUssV0FBVyxFQUFFO0FBQ3JCLG1CQUFPLE9BQUssT0FBTyxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxDQUFDLENBQUM7V0FDcEQ7O0FBRUQsc0JBQVksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSyxFQUFLO0FBQ3RDLG1CQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7V0FDaEIsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3RDLENBQUMsQ0FBQztPQUNKOzs7YUFFRyxnQkFBWTtZQUFYLEtBQUsseURBQUcsQ0FBQzs7QUFDWixZQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFDcEIsc0JBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7T0FDRjs7O1dBaEVVLE1BQU0iLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL2RpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcbi8qKlxuICogY2xhc3MgUGluRGlhbG9nXG4gKlxuICogQGluc3RhbGwgICQgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vUGluRGlhbG9nLmdpdFxuICogQHJlc291cmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9QYWxkb20vUGluRGlhbG9nXG4gKiBAY29uZmlnICAgPGdhcDpwbHVnaW4gbmFtZT1cImh1LmRwYWwucGhvbmVnYXAucGx1Z2lucy5waW5kaWFsb2dcIiAvPlxuICovXG5sZXQgcGluRGlhbG9nID0gUGx1Z2lucy5nZXRQbHVnaW4oJ3BpbkRpYWxvZycpO1xuZXhwb3J0IGNsYXNzIFBpbkRpYWxvZyB7XG5cbiAgaXNTdXBwb3J0ZWQgPSAhIXBpbkRpYWxvZztcblxuICBwcm9tcHQobWVzc2FnZSwgdGl0bGUsIGJ1dHRvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSByZXR1cm4gcmVqZWN0KCdwaW5EaWFsb2cgbm90IGluc3RhbGxlZCEnKTtcbiAgICAgIHBpbkRpYWxvZy5wcm9tcHQobWVzc2FnZSwgcmVzID0+IHtcbiAgICAgICAgcmVzb2x2ZShyZXMpXG4gICAgICB9LCB0aXRsZSwgYnV0dG9ucyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vKipcbiAqIGNsYXNzIERpYWxvZ1xuICogQGluc3RhbGwgICQgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWRpYWxvZ3NcbiAqIEByZXNvdXJjZSBodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRpYWxvZ3NcbiAqL1xubGV0IG5vdGlmaWNhdGlvbiA9IFBsdWdpbnMuZnJvbU5hdmlnYXRvcignbm90aWZpY2F0aW9uJyk7XG5leHBvcnQgY2xhc3MgRGlhbG9nIHtcblxuICBpc1N1cHBvcnRlZCA9ICEhbm90aWZpY2F0aW9uO1xuXG4gIF9hbGVydChtZXNzYWdlLCByZXNvbHZlKSB7XG4gICAgd2luZG93LmFsZXJ0KG1lc3NhZ2UpO1xuICAgIHJlc29sdmUoKTtcbiAgfVxuXG4gIF9jb25maXJtKG1lc3NhZ2UsIHJlc29sdmUpIHtcbiAgICBsZXQgYW5zd2VyID0gd2luZG93LmNvbmZpcm0obWVzc2FnZSk7XG4gICAgcmVzb2x2ZShhbnN3ZXIgPyAxIDogMik7XG4gIH1cblxuICBfcHJvbXB0KG1lc3NhZ2UsIGRlZmF1bHRUZXh0LCByZXNvbHZlKSB7XG4gICAgbGV0IHZhbHVlID0gd2luZG93LnByb21wdChtZXNzYWdlLCBkZWZhdWx0VGV4dCk7XG4gICAgbGV0IGluZGV4ID0gdmFsdWUgIT09IG51bGwgPyAxIDogMjtcbiAgICByZXNvbHZlKHt2YWx1ZSwgaW5kZXh9KTtcbiAgfVxuXG4gIGFsZXJ0KG1lc3NhZ2UgPSAnJywgdGl0bGUgPSAnQWxlcnQnLCBidXR0b25MYWJlbCA9ICdkb25lJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGVydChtZXNzYWdlLCByZXNvbHZlKTtcbiAgICAgIH1cblxuICAgICAgbm90aWZpY2F0aW9uLmFsZXJ0KG1lc3NhZ2UsICgpPT4ge1xuICAgICAgICByZXNvbHZlKClcbiAgICAgIH0sIHRpdGxlLCBidXR0b25MYWJlbCk7XG5cbiAgICB9KTtcbiAgfVxuXG4gIGNvbmZpcm0obWVzc2FnZSA9ICcnLCB0aXRsZSA9ICdjb25maXJtJywgYnV0dG9uTGFiZWxzID0gWydjb25maXJtJywgJ2NhbmNlbCddKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuXG4gICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpcm0obWVzc2FnZSwgcmVzb2x2ZSk7XG4gICAgICB9XG5cbiAgICAgIG5vdGlmaWNhdGlvbi5jb25maXJtKG1lc3NhZ2UsIChjaG9pY2UpPT4ge1xuICAgICAgICByZXNvbHZlKGNob2ljZSk7XG4gICAgICB9LCB0aXRsZSwgYnV0dG9uTGFiZWxzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb21wdChtZXNzYWdlID0gJycsIHRpdGxlID0gJ1Byb21wdCcsIGJ1dHRvbkxhYmVscyA9IFsnY29uZmlybScsICdjYW5jZWwnXSwgZGVmYXVsdFRleHQgPSAnJykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcblxuICAgICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9tcHQobWVzc2FnZSwgZGVmYXVsdFRleHQsIHJlc29sdmUpO1xuICAgICAgfVxuXG4gICAgICBub3RpZmljYXRpb24ucHJvbXB0KG1lc3NhZ2UsICh2YWx1ZSkgPT4ge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICAgIH0sIHRpdGxlLCBidXR0b25MYWJlbHMsIGRlZmF1bHRUZXh0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGJlZXAodGltZXMgPSAxKSB7XG4gICAgaWYgKHRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgIG5vdGlmaWNhdGlvbi5iZWVwKHRpbWVzKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
