/* */ 
define(['exports', './card-io-config', './camera', './capture', './card-io', './device', './dialog', './image-picker', './spinner-dialog', './splash-screen', './action-sheet', './touchid', './vibration', './sqlite', './status-bar', './3d-touch'], function (exports, _cardIoConfig, _camera, _capture, _cardIo, _device, _dialog, _imagePicker, _spinnerDialog, _splashScreen, _actionSheet, _touchid, _vibration, _sqlite, _statusBar, _dTouch) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;
  exports.Camera = _camera.Camera;
  exports.Capture = _capture.Capture;
  exports.CardIO = _cardIo.CardIO;
  exports.Device = _device.Device;
  exports.Dialog = _dialog.Dialog;
  exports.PinDialog = _dialog.PinDialog;
  exports.ImagePicker = _imagePicker.ImagePicker;
  exports.SpinnerDialog = _spinnerDialog.SpinnerDialog;
  exports.SplashScreen = _splashScreen.SplashScreen;
  exports.ActionSheet = _actionSheet.ActionSheet;
  exports.TouchID = _touchid.TouchID;
  exports.Vibration = _vibration.Vibration;
  exports.SQLite = _sqlite.SQLite;
  exports.StatusBar = _statusBar.StatusBar;
  exports.ThreeDeeTouch = _dTouch.ThreeDeeTouch;

  function configure(framework, config) {

    var device = new _device.Device();
    var statusbar = new _statusBar.StatusBar();

    var platform = device.getPlatform();

    if (platform) {
      platform = platform.toLowerCase();
      document.documentElement.classList.add('platform-' + platform);

      if (statusbar.isVisible()) {
        document.documentElement.classList.add('statusbar-is-visible');
      }
    }

    if (typeof config === 'function') {
      return config({
        cardIO: _cardIoConfig.CardIOConfig.configure(framework),
        checkStatusBar: function checkStatusBar() {}
      });
    }
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1VBaUJJLE1BQU0sV0FmRixNQUFNO1VBZ0JWLE9BQU8sWUFmSCxPQUFPO1VBZ0JYLE1BQU0sV0FmRixNQUFNO1VBZ0JWLE1BQU0sV0FmRixNQUFNO1VBZ0JWLE1BQU0sV0FmRixNQUFNO1VBZ0JWLFNBQVMsV0FoQkcsU0FBUztVQWlCckIsV0FBVyxnQkFoQlAsV0FBVztVQWlCZixhQUFhLGtCQWhCVCxhQUFhO1VBaUJqQixZQUFZLGlCQWhCUixZQUFZO1VBaUJoQixXQUFXLGdCQWhCUCxXQUFXO1VBaUJmLE9BQU8sWUFoQkgsT0FBTztVQWlCWCxTQUFTLGNBaEJMLFNBQVM7VUFpQmIsTUFBTSxXQWhCRixNQUFNO1VBaUJWLFNBQVMsY0FoQkwsU0FBUztVQWlCYixhQUFhLFdBaEJULGFBQWE7O0FBbUJkLFdBQVMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUU7O0FBRTNDLFFBQUksTUFBTSxHQUFHLFlBL0JQLE1BQU0sRUErQmEsQ0FBQztBQUMxQixRQUFJLFNBQVMsR0FBRyxlQXZCVixTQUFTLEVBdUJnQixDQUFDOztBQUVoQyxRQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7O0FBRXBDLFFBQUksUUFBUSxFQUFFO0FBQ1osY0FBUSxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNsQyxjQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLGVBQWEsUUFBUSxDQUFHLENBQUM7O0FBRS9ELFVBQUksU0FBUyxDQUFDLFNBQVMsRUFBRSxFQUFFO0FBQ3pCLGdCQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztPQUNoRTtLQUNGOztBQUdELFFBQUksT0FBTyxNQUFNLEtBQUssVUFBVSxFQUFFO0FBQ2hDLGFBQU8sTUFBTSxDQUFDO0FBQ1osY0FBTSxFQUFFLGNBckROLFlBQVksQ0FxRE8sU0FBUyxDQUFDLFNBQVMsQ0FBQztBQUN6QyxzQkFBYyxFQUFBLDBCQUFHLEVBQ2hCO09BQ0YsQ0FBQyxDQUFDO0tBQ0o7R0FDRiIsImZpbGUiOiJhdXJlbGlhLWNvcmRvdmEvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NhcmRJT0NvbmZpZ30gZnJvbSAnLi9jYXJkLWlvLWNvbmZpZyc7XG5cbmltcG9ydCB7Q2FtZXJhfSBmcm9tICcuL2NhbWVyYSc7XG5pbXBvcnQge0NhcHR1cmV9IGZyb20gJy4vY2FwdHVyZSc7XG5pbXBvcnQge0NhcmRJT30gZnJvbSAnLi9jYXJkLWlvJztcbmltcG9ydCB7RGV2aWNlfSBmcm9tICcuL2RldmljZSc7XG5pbXBvcnQge0RpYWxvZywgUGluRGlhbG9nfSBmcm9tICcuL2RpYWxvZyc7XG5pbXBvcnQge0ltYWdlUGlja2VyfSBmcm9tICcuL2ltYWdlLXBpY2tlcic7XG5pbXBvcnQge1NwaW5uZXJEaWFsb2d9IGZyb20gJy4vc3Bpbm5lci1kaWFsb2cnO1xuaW1wb3J0IHtTcGxhc2hTY3JlZW59IGZyb20gJy4vc3BsYXNoLXNjcmVlbic7XG5pbXBvcnQge0FjdGlvblNoZWV0fSBmcm9tICcuL2FjdGlvbi1zaGVldCc7XG5pbXBvcnQge1RvdWNoSUR9IGZyb20gJy4vdG91Y2hpZCc7XG5pbXBvcnQge1ZpYnJhdGlvbn0gZnJvbSAnLi92aWJyYXRpb24nO1xuaW1wb3J0IHtTUUxpdGV9IGZyb20gJy4vc3FsaXRlJztcbmltcG9ydCB7U3RhdHVzQmFyfSBmcm9tICcuL3N0YXR1cy1iYXInO1xuaW1wb3J0IHtUaHJlZURlZVRvdWNofSBmcm9tICcuLzNkLXRvdWNoJztcbmV4cG9ydCB7XG4gICAgQ2FtZXJhXG4gICwgQ2FwdHVyZVxuICAsIENhcmRJT1xuICAsIERldmljZVxuICAsIERpYWxvZ1xuICAsIFBpbkRpYWxvZ1xuICAsIEltYWdlUGlja2VyXG4gICwgU3Bpbm5lckRpYWxvZ1xuICAsIFNwbGFzaFNjcmVlblxuICAsIEFjdGlvblNoZWV0XG4gICwgVG91Y2hJRFxuICAsIFZpYnJhdGlvblxuICAsIFNRTGl0ZVxuICAsIFN0YXR1c0JhclxuICAsIFRocmVlRGVlVG91Y2hcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmssIGNvbmZpZykge1xuXG4gIGxldCBkZXZpY2UgPSBuZXcgRGV2aWNlKCk7XG4gIGxldCBzdGF0dXNiYXIgPSBuZXcgU3RhdHVzQmFyKCk7XG5cbiAgbGV0IHBsYXRmb3JtID0gZGV2aWNlLmdldFBsYXRmb3JtKCk7XG5cbiAgaWYgKHBsYXRmb3JtKSB7XG4gICAgcGxhdGZvcm0gPSBwbGF0Zm9ybS50b0xvd2VyQ2FzZSgpO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGBwbGF0Zm9ybS0ke3BsYXRmb3JtfWApO1xuXG4gICAgaWYgKHN0YXR1c2Jhci5pc1Zpc2libGUoKSkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3N0YXR1c2Jhci1pcy12aXNpYmxlJyk7XG4gICAgfVxuICB9XG5cblxuICBpZiAodHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBjb25maWcoe1xuICAgICAgY2FyZElPOiBDYXJkSU9Db25maWcuY29uZmlndXJlKGZyYW1ld29yayksXG4gICAgICBjaGVja1N0YXR1c0JhcigpIHtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
