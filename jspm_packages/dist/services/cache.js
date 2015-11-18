System.register([], function (_export) {
  'use strict';

  var Cache;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function dateAdd(date, interval, units) {
    var ret = new Date(date);

    switch (interval.toLowerCase()) {
      case 'year':
        ret.setFullYear(ret.getFullYear() + units);break;
      case 'quarter':
        ret.setMonth(ret.getMonth() + 3 * units);break;
      case 'month':
        ret.setMonth(ret.getMonth() + units);break;
      case 'week':
        ret.setDate(ret.getDate() + 7 * units);break;
      case 'day':
        ret.setDate(ret.getDate() + units);break;
      case 'hour':
        ret.setTime(ret.getTime() + units * 3600000);break;
      case 'minute':
        ret.setTime(ret.getTime() + units * 60000);break;
      case 'second':
        ret.setTime(ret.getTime() + units * 1000);break;
      default:
        ret = undefined;break;
    }
    return ret;
  }

  return {
    setters: [],
    execute: function () {
      Cache = (function () {
        function Cache() {
          _classCallCheck(this, Cache);
        }

        _createClass(Cache, [{
          key: 'farFuture',
          value: function farFuture() {
            return dateAdd(new Date(), 'year', 1);
          }
        }, {
          key: 'fromNow',
          value: function fromNow() {
            var hours = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];
            var minutes = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
            var seconds = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];

            return dateAdd(dateAdd(dateAdd(new Date(), 'hour', hours), 'minute', minutes), 'second', seconds);
          }
        }, {
          key: 'getItem',
          value: function getItem(key) {
            var content = null;

            try {
              var stored = localStorage.getItem(key);
              if (stored) {
                stored = JSON.parse(stored);
                if (stored.expires - Date.now() > 0) {
                  content = stored.content;
                }
              }
            } finally {
              return content;
            }
          }
        }, {
          key: 'setItem',
          value: function setItem(key, content, expires) {
            try {
              var toStore = {
                content: content,
                expires: (expires || this.fromNow(1)).getTime()
              };

              localStorage.setItem(key, JSON.stringify(toStore));
            } finally {
              return content;
            }
          }
        }]);

        return Cache;
      })();

      _export('Cache', Cache);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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O0FBQ1IscUJBQU8sT0FBTyxDQUFDO2FBQ2hCO1dBQ0Y7OztpQkFFTSxpQkFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRTtBQUM3QixnQkFBSTtBQUNGLGtCQUFJLE9BQU8sR0FBRztBQUNaLHVCQUFPLEVBQUUsT0FBTztBQUNoQix1QkFBTyxFQUFFLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBRSxPQUFPLEVBQUU7ZUFDaEQsQ0FBQzs7QUFFRiwwQkFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2FBQ3BELFNBQVM7QUFDUixxQkFBTyxPQUFPLENBQUM7YUFDaEI7V0FDRjs7O2VBcENVLEtBQUsiLCJmaWxlIjoic2VydmljZXMvY2FjaGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkYXRlQWRkKGRhdGUsIGludGVydmFsLCB1bml0cykge1xuICBsZXQgcmV0ID0gbmV3IERhdGUoZGF0ZSk7IC8vZG9uJ3QgY2hhbmdlIG9yaWdpbmFsIGRhdGVcblxuICBzd2l0Y2ggKGludGVydmFsLnRvTG93ZXJDYXNlKCkpIHtcbiAgY2FzZSAneWVhcicgICAgOiAgcmV0LnNldEZ1bGxZZWFyKHJldC5nZXRGdWxsWWVhcigpICsgdW5pdHMpOyAgYnJlYWs7XG4gIGNhc2UgJ3F1YXJ0ZXInIDogIHJldC5zZXRNb250aChyZXQuZ2V0TW9udGgoKSArIDMgKiB1bml0cyk7ICBicmVhaztcbiAgY2FzZSAnbW9udGgnICAgOiAgcmV0LnNldE1vbnRoKHJldC5nZXRNb250aCgpICsgdW5pdHMpOyAgYnJlYWs7XG4gIGNhc2UgJ3dlZWsnICAgIDogIHJldC5zZXREYXRlKHJldC5nZXREYXRlKCkgKyA3ICogdW5pdHMpOyAgYnJlYWs7XG4gIGNhc2UgJ2RheScgICAgIDogIHJldC5zZXREYXRlKHJldC5nZXREYXRlKCkgKyB1bml0cyk7ICBicmVhaztcbiAgY2FzZSAnaG91cicgICAgOiAgcmV0LnNldFRpbWUocmV0LmdldFRpbWUoKSArIHVuaXRzICogMzYwMDAwMCk7ICBicmVhaztcbiAgY2FzZSAnbWludXRlJyAgOiAgcmV0LnNldFRpbWUocmV0LmdldFRpbWUoKSArIHVuaXRzICogNjAwMDApOyAgYnJlYWs7XG4gIGNhc2UgJ3NlY29uZCcgIDogIHJldC5zZXRUaW1lKHJldC5nZXRUaW1lKCkgKyB1bml0cyAqIDEwMDApOyAgYnJlYWs7XG4gIGRlZmF1bHQgICAgICAgIDogIHJldCA9IHVuZGVmaW5lZDsgIGJyZWFrO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmV4cG9ydCBjbGFzcyBDYWNoZSB7XG4gIGZhckZ1dHVyZSgpIHtcbiAgICByZXR1cm4gZGF0ZUFkZChuZXcgRGF0ZSgpLCAneWVhcicsIDEpO1xuICB9XG5cbiAgZnJvbU5vdyhob3VycyA9IDEsIG1pbnV0ZXMgPSAwLCBzZWNvbmRzID0gMCkge1xuICAgIHJldHVybiBkYXRlQWRkKGRhdGVBZGQoZGF0ZUFkZChuZXcgRGF0ZSgpLCAnaG91cicsIGhvdXJzKSwgJ21pbnV0ZScsIG1pbnV0ZXMpLCAnc2Vjb25kJywgc2Vjb25kcyk7XG4gIH1cblxuICBnZXRJdGVtKGtleSkge1xuICAgIGxldCBjb250ZW50ID0gbnVsbDtcblxuICAgIHRyeSB7XG4gICAgICBsZXQgc3RvcmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbiAgICAgIGlmIChzdG9yZWQpIHtcbiAgICAgICAgc3RvcmVkID0gSlNPTi5wYXJzZShzdG9yZWQpO1xuICAgICAgICBpZiAoc3RvcmVkLmV4cGlyZXMgLSBEYXRlLm5vdygpID4gMCkge1xuICAgICAgICAgIGNvbnRlbnQgPSBzdG9yZWQuY29udGVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZmluYWxseSB7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gIH1cblxuICBzZXRJdGVtKGtleSwgY29udGVudCwgZXhwaXJlcykge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdG9TdG9yZSA9IHtcbiAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgZXhwaXJlczogKGV4cGlyZXMgfHwgdGhpcy5mcm9tTm93KDEpKS5nZXRUaW1lKClcbiAgICAgIH07XG5cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodG9TdG9yZSkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
