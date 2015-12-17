/* */ 
define(['exports', './plugins', './card-io-config'], function (exports, _plugins, _cardIoConfig) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function isShortExpiryYear(field) {
    return field === 'short_expiry_year';
  }

  var cardIO = _plugins.Plugins.fromWindow('CardIO');

  var CardIO = (function () {
    _createClass(CardIO, null, [{
      key: 'inject',
      value: [_cardIoConfig.CardIOConfig],
      enumerable: true
    }]);

    function CardIO(configuration) {
      _classCallCheck(this, CardIO);

      this.isSupported = !!cardIO;

      this.defaults = configuration;
      this._onSuccess = this._onSuccess.bind(this);
      this._onCancel = this._onCancel.bind(this);
    }

    _createClass(CardIO, [{
      key: 'scanCard',
      value: function scanCard() {
        var _this = this;

        var error = undefined;
        var self = this;
        var isSupported = this.isSupported;

        return new Promise(function (resolve, reject) {
          _this._resolve = resolve;
          _this._reject = reject;

          if (!_this.isSupported) {
            error = 'CardIO plugin not installed!';
            return reject({ isSupported: isSupported, error: error });
          }

          cardIO.scan(_this.defaults.scanConfig, _this._onSuccess, _this._onCancel);
        });
      }
    }, {
      key: '_onSuccess',
      value: function _onSuccess(response) {
        var i = undefined;
        var data = {};
        var isSupported = this.isSupported;

        if (response === null) {
          return this._reject({ isSupported: isSupported, response: response });
        }

        for (i in this.defaults.responseFields) {
          var field = this.defaults.responseFields[i];

          if (isShortExpiryYear(field)) {
            data[field] = String(response.expiry_year).substr(2, 2) || '';
          } else {
            data[field] = response[field] || '';
          }
        }

        this._resolve(data);
      }
    }, {
      key: '_onCancel',
      value: function _onCancel() {
        var isSupported = this.isSupported;
        var error = 'CardIO Canceld';
        return this._reject({ isSupported: isSupported, error: error });
      }
    }]);

    return CardIO;
  })();

  exports.CardIO = CardIO;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9jYXJkLWlvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUEsV0FBUyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUU7QUFDaEMsV0FBTyxLQUFLLEtBQUssbUJBQW1CLENBQUM7R0FDdEM7O0FBUUQsTUFBSSxNQUFNLEdBQUcsU0FaTCxPQUFPLENBWU0sVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztNQUM3QixNQUFNO2lCQUFOLE1BQU07O2FBQ0QsZUFiVixZQUFZLENBYVk7Ozs7QUFJbkIsYUFMQSxNQUFNLENBS0wsYUFBYSxFQUFFOzRCQUxoQixNQUFNOztXQUdqQixXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQU07O0FBR3BCLFVBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO0FBQzlCLFVBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0MsVUFBSSxDQUFDLFNBQVMsR0FBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM3Qzs7aUJBVFUsTUFBTTs7YUFXVCxvQkFBRzs7O0FBQ1QsWUFBSSxLQUFLLFlBQUEsQ0FBQztBQUNWLFlBQUksSUFBSSxHQUFHLElBQUksQ0FBQztBQUNoQixZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDOztBQUVuQyxlQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0QyxnQkFBSyxRQUFRLEdBQUcsT0FBTyxDQUFDO0FBQ3hCLGdCQUFLLE9BQU8sR0FBSSxNQUFNLENBQUM7O0FBRXZCLGNBQUksQ0FBQyxNQUFLLFdBQVcsRUFBRTtBQUNyQixpQkFBSyxHQUFHLDhCQUE4QixDQUFDO0FBQ3ZDLG1CQUFPLE1BQU0sQ0FBQyxFQUFDLFdBQVcsRUFBWCxXQUFXLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBQyxDQUFDLENBQUM7V0FDckM7O0FBRUQsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsTUFBSyxRQUFRLENBQUMsVUFBVSxFQUFFLE1BQUssVUFBVSxFQUFFLE1BQUssU0FBUyxDQUFDLENBQUM7U0FDeEUsQ0FBQyxDQUFDO09BQ0o7OzthQUVTLG9CQUFDLFFBQVEsRUFBRTtBQUNuQixZQUFJLENBQUMsWUFBQSxDQUFDO0FBQ04sWUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ2QsWUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7QUFFbkMsWUFBSSxRQUFRLEtBQUssSUFBSSxFQUFFO0FBQ3JCLGlCQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBQyxXQUFXLEVBQVgsV0FBVyxFQUFFLFFBQVEsRUFBUixRQUFRLEVBQUMsQ0FBQyxDQUFDO1NBQzlDOztBQUVELGFBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxFQUFFO0FBQ3RDLGNBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUU1QyxjQUFJLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxFQUFFO0FBQzVCLGdCQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztXQUMvRCxNQUFNO0FBQ0wsZ0JBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO1dBQ3JDO1NBQ0Y7O0FBRUQsWUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUNyQjs7O2FBRVEscUJBQUc7QUFDVixZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ25DLFlBQUksS0FBSyxHQUFHLGdCQUFnQixDQUFDO0FBQzdCLGVBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLFdBQVcsRUFBWCxXQUFXLEVBQUUsS0FBSyxFQUFMLEtBQUssRUFBQyxDQUFDLENBQUM7T0FDM0M7OztXQXZEVSxNQUFNIiwiZmlsZSI6ImF1cmVsaWEtY29yZG92YS9jYXJkLWlvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQbHVnaW5zfSBmcm9tICcuL3BsdWdpbnMnO1xuaW1wb3J0IHtDYXJkSU9Db25maWd9IGZyb20gJy4vY2FyZC1pby1jb25maWcnO1xuZnVuY3Rpb24gaXNTaG9ydEV4cGlyeVllYXIoZmllbGQpIHtcbiAgcmV0dXJuIGZpZWxkID09PSAnc2hvcnRfZXhwaXJ5X3llYXInO1xufVxuXG4vKipcbiAqIGNsYXNzIENhcmRJT1xuICpcbiAqIEBpbnN0YWxsICBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL3ZrZWVwZS9jYXJkLmlvLmdpdFxuICogQGxpbmsgICAgIGh0dHBzOi8vZ2l0aHViLmNvbS92a2VlcGUvY2FyZC5pby5naXRcbiAqL1xubGV0IGNhcmRJTyA9IFBsdWdpbnMuZnJvbVdpbmRvdygnQ2FyZElPJyk7XG5leHBvcnQgY2xhc3MgQ2FyZElPIHtcbiAgc3RhdGljIGluamVjdCA9IFtDYXJkSU9Db25maWddO1xuXG4gIGlzU3VwcG9ydGVkID0gISFjYXJkSU87XG5cbiAgY29uc3RydWN0b3IoY29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuZGVmYXVsdHMgPSBjb25maWd1cmF0aW9uO1xuICAgIHRoaXMuX29uU3VjY2VzcyA9IHRoaXMuX29uU3VjY2Vzcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX29uQ2FuY2VsICA9IHRoaXMuX29uQ2FuY2VsLmJpbmQodGhpcyk7XG4gIH1cblxuICBzY2FuQ2FyZCgpIHtcbiAgICBsZXQgZXJyb3I7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGxldCBpc1N1cHBvcnRlZCA9IHRoaXMuaXNTdXBwb3J0ZWQ7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLl9yZWplY3QgID0gcmVqZWN0O1xuXG4gICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgZXJyb3IgPSAnQ2FyZElPIHBsdWdpbiBub3QgaW5zdGFsbGVkISc7XG4gICAgICAgIHJldHVybiByZWplY3Qoe2lzU3VwcG9ydGVkLCBlcnJvcn0pO1xuICAgICAgfVxuXG4gICAgICBjYXJkSU8uc2Nhbih0aGlzLmRlZmF1bHRzLnNjYW5Db25maWcsIHRoaXMuX29uU3VjY2VzcywgdGhpcy5fb25DYW5jZWwpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIGxldCBpO1xuICAgIGxldCBkYXRhID0ge307XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gdGhpcy5pc1N1cHBvcnRlZDtcblxuICAgIGlmIChyZXNwb25zZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JlamVjdCh7aXNTdXBwb3J0ZWQsIHJlc3BvbnNlfSk7XG4gICAgfVxuXG4gICAgZm9yIChpIGluIHRoaXMuZGVmYXVsdHMucmVzcG9uc2VGaWVsZHMpIHtcbiAgICAgIGxldCBmaWVsZCA9IHRoaXMuZGVmYXVsdHMucmVzcG9uc2VGaWVsZHNbaV07XG5cbiAgICAgIGlmIChpc1Nob3J0RXhwaXJ5WWVhcihmaWVsZCkpIHtcbiAgICAgICAgZGF0YVtmaWVsZF0gPSBTdHJpbmcocmVzcG9uc2UuZXhwaXJ5X3llYXIpLnN1YnN0cigyLCAyKSB8fCAnJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRhdGFbZmllbGRdID0gcmVzcG9uc2VbZmllbGRdIHx8ICcnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX3Jlc29sdmUoZGF0YSk7XG4gIH1cblxuICBfb25DYW5jZWwoKSB7XG4gICAgbGV0IGlzU3VwcG9ydGVkID0gdGhpcy5pc1N1cHBvcnRlZDtcbiAgICBsZXQgZXJyb3IgPSAnQ2FyZElPIENhbmNlbGQnO1xuICAgIHJldHVybiB0aGlzLl9yZWplY3Qoe2lzU3VwcG9ydGVkLCBlcnJvcn0pO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
