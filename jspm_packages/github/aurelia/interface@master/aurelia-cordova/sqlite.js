/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var sqlitePlugin = _plugins.Plugins.fromWindow('sqlitePlugin');

  var SQLite = (function () {
    function SQLite() {
      _classCallCheck(this, SQLite);

      this.isSupported = !!sqlitePlugin;
    }

    _createClass(SQLite, [{
      key: '_validate',
      value: function _validate(cb) {
        var error = undefined;
        var isSupported = this.isSupported;
        return new Promise(function (_resolve, _reject) {
          if (!isSupported) {
            error = 'sqlitePlugin not installed!';
            return _reject({ isSupported: isSupported, error: error });
          }

          return cb({
            resolve: function resolve(responce) {
              _resolve(responce);
            },
            reject: function reject(error) {
              _reject({ isSupported: isSupported, error: error });
            }
          });
        });
      }
    }, {
      key: 'openDB',
      value: function openDB(options, background) {
        return this._validate(function (promised) {

          if (typeof options === 'object' && typeof options !== 'string') {
            if (typeof background !== 'undefined') {
              options.bgType = background;
            }
            return promised.resolve(sqlitePlugin.openDatabase(options));
          }

          return promised.resolve(sqlitePlugin.openDatabase({
            name: options,
            bgType: background
          }));
        });
      }
    }, {
      key: 'execute',
      value: function execute(db, query, binding) {
        return this._validate(function (promised) {
          db.transaction(function (tx) {
            tx.executeSql(query, binding, function (tx, result) {
              promised.resolve(result);
            }, function (transaction, error) {
              promised.reject(error);
            });
          });
        });
      }
    }, {
      key: 'insertCollection',
      value: function insertCollection(db, query, bindings) {
        var coll = bindings.slice(0);
        return this._validate(function (promised) {

          db.transaction(transactionSuccess);

          function transactionSuccess(_tx) {
            tx = _tx(function () {
              insertOne();
            })();
          }

          function insertOne() {
            var record = coll.splice(0, 1)[0];
            try {
              tx.executeSql(query, record, onExecuteSuccess, onExecuteError);
            } catch (exception) {
              promised.reject(exception);
            }
          }

          function onExecuteSuccess(tx, result) {
            if (coll.length === 0) {
              promised.resolve(result);
            } else {
              insertOne();
            }
          }

          function onExecuteError(transaction, error) {
            promised.reject(error);
          }
        });
      }
    }, {
      key: 'nestedExecute',
      value: function nestedExecute(db, query1, query2, binding1, binding2) {
        return this._validate(function (promised) {

          db.transaction(onSuccess, onError);

          function onSuccess(tx) {
            tx.executeSql(query1, binding1, function (tx, result) {
              promised.resolve(result);
              tx.executeSql(query2, binding2, function (tx, res) {
                promised.resolve(res);
              });
            });
          }

          function onError(transaction, error) {
            promised.reject(error);
          }
        });
      }
    }, {
      key: 'deleteDB',
      value: function deleteDB(dbName) {
        var q = $q.defer();
        return this._validate(function (promised) {
          sqlitePlugin.deleteDatabase(dbName, promised.resolve, promised.reject);
        });
      }
    }]);

    return SQLite;
  })();

  exports.SQLite = SQLite;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9zcWxpdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxNQUFJLFlBQVksR0FBRyxTQVJYLE9BQU8sQ0FRWSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7O01BQ3pDLE1BQU07YUFBTixNQUFNOzRCQUFOLE1BQU07O1dBQ2pCLFdBQVcsR0FBRyxDQUFDLENBQUMsWUFBWTs7O2lCQURqQixNQUFNOzthQUdSLG1CQUFDLEVBQUUsRUFBRTtBQUNaLFlBQUksS0FBSyxZQUFBLENBQUM7QUFDVixZQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQ25DLGVBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxRQUFPLEVBQUUsT0FBTSxFQUFLO0FBQ3RDLGNBQUksQ0FBQyxXQUFXLEVBQUU7QUFDaEIsaUJBQUssR0FBRyw2QkFBNkIsQ0FBQztBQUN0QyxtQkFBTyxPQUFNLENBQUMsRUFBQyxXQUFXLEVBQVgsV0FBVyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUMsQ0FBQyxDQUFDO1dBQ3JDOztBQUVELGlCQUFPLEVBQUUsQ0FBQztBQUNSLG1CQUFPLEVBQUEsaUJBQUMsUUFBUSxFQUFFO0FBQ2hCLHNCQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkI7QUFDRCxrQkFBTSxFQUFBLGdCQUFDLEtBQUssRUFBRTtBQUNaLHFCQUFNLENBQUMsRUFBQyxXQUFXLEVBQVgsV0FBVyxFQUFFLEtBQUssRUFBTCxLQUFLLEVBQUMsQ0FBQyxDQUFDO2FBQzlCO1dBQ0YsQ0FBQyxDQUFBO1NBQ0gsQ0FBQyxDQUFDO09BQ0o7OzthQUVLLGdCQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUU7QUFDMUIsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxFQUFJOztBQUVoQyxjQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7QUFDOUQsZ0JBQUksT0FBTyxVQUFV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QztBQUN6QixnQkFBRSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBSTtBQUMxQyx3QkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztlQUN2QixDQUFDLENBQUM7YUFDSixDQUFDLENBQUM7V0FDSjs7QUFFRCxtQkFBUyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssRUFBRTtBQUNuQyxvQkFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUN4QjtTQUNGLENBQUMsQ0FBQTtPQUNIOzs7YUFFTyxrQkFBQyxNQUFNLEVBQUU7QUFDZixZQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbkIsZUFBTyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUSxFQUFJO0FBQ2hDLHNCQUFZLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RSxDQUFDLENBQUM7T0FDSjs7O1dBbEhVLE1BQU0iLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL3NxbGl0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcblxuLyoqXG4gKiBjbGFzcyBTUUxpdGVcbiAqXG4gKiBAaW5zdGFsbCAgIDogICAgICBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL0NvcmRvdmEtc3FsaXRlLXN0b3JhZ2UuZ2l0XG4gKiBAbGluayAgICAgIDogICAgICBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZVxuICovXG5sZXQgc3FsaXRlUGx1Z2luID0gUGx1Z2lucy5mcm9tV2luZG93KCdzcWxpdGVQbHVnaW4nKTtcbmV4cG9ydCBjbGFzcyBTUUxpdGUge1xuICBpc1N1cHBvcnRlZCA9ICEhc3FsaXRlUGx1Z2luO1xuXG4gIF92YWxpZGF0ZShjYikge1xuICAgIGxldCBlcnJvcjtcbiAgICBsZXQgaXNTdXBwb3J0ZWQgPSB0aGlzLmlzU3VwcG9ydGVkO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIWlzU3VwcG9ydGVkKSB7XG4gICAgICAgIGVycm9yID0gJ3NxbGl0ZVBsdWdpbiBub3QgaW5zdGFsbGVkISc7XG4gICAgICAgIHJldHVybiByZWplY3Qoe2lzU3VwcG9ydGVkLCBlcnJvcn0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2Ioe1xuICAgICAgICByZXNvbHZlKHJlc3BvbmNlKSB7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25jZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdChlcnJvcikge1xuICAgICAgICAgIHJlamVjdCh7aXNTdXBwb3J0ZWQsIGVycm9yfSk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICBvcGVuREIob3B0aW9ucywgYmFja2dyb3VuZCkge1xuICAgIHJldHVybiB0aGlzLl92YWxpZGF0ZShwcm9taXNlZCA9PiB7XG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG9wdGlvbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGlmICh0eXBlb2YgYmFja2dyb3VuZCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBvcHRpb25zLmJnVHlwZSA9IGJhY2tncm91bmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2VkLnJlc29sdmUoc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcm9taXNlZC5yZXNvbHZlKHNxbGl0ZVBsdWdpbi5vcGVuRGF0YWJhc2Uoe1xuICAgICAgICBuYW1lOiBvcHRpb25zLFxuICAgICAgICBiZ1R5cGU6IGJhY2tncm91bmRcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4ZWN1dGUoZGIsIHF1ZXJ5LCBiaW5kaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKHByb21pc2VkID0+IHtcbiAgICAgIGRiLnRyYW5zYWN0aW9uKCh0eCkgPT4ge1xuICAgICAgICB0eC5leGVjdXRlU3FsKHF1ZXJ5LCBiaW5kaW5nLFxuICAgICAgICAgIGZ1bmN0aW9uKHR4LCByZXN1bHQpIHtcbiAgICAgICAgICAgIHByb21pc2VkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uKHRyYW5zYWN0aW9uLCBlcnJvcikge1xuICAgICAgICAgICAgcHJvbWlzZWQucmVqZWN0KGVycm9yKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGluc2VydENvbGxlY3Rpb24oZGIsIHF1ZXJ5LCBiaW5kaW5ncykge1xuICAgIGxldCBjb2xsID0gYmluZGluZ3Muc2xpY2UoMCk7IC8vIGNsb25lIGNvbGxlY3Rpb25cbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGUocHJvbWlzZWQgPT4ge1xuXG4gICAgICBkYi50cmFuc2FjdGlvbih0cmFuc2FjdGlvblN1Y2Nlc3MpO1xuXG4gICAgICBmdW5jdGlvbiB0cmFuc2FjdGlvblN1Y2Nlc3MoX3R4KSB7XG4gICAgICAgIHR4ID0gX3R4XG4gICAgICAgIChmdW5jdGlvbiAoKSB7aW5zZXJ0T25lKCl9KSgpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBpbnNlcnRPbmUoKSB7XG4gICAgICAgIGxldCByZWNvcmQgPSBjb2xsLnNwbGljZSgwLCAxKVswXTsgLy8gZ2V0IHRoZSBmaXJzdCByZWNvcmQgb2YgY29sbCBhbmQgcmVkdWNlIGNvbGwgYnkgb25lXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdHguZXhlY3V0ZVNxbChxdWVyeSwgcmVjb3JkLCBvbkV4ZWN1dGVTdWNjZXNzLCBvbkV4ZWN1dGVFcnJvcik7XG4gICAgICAgIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgICAgICAgIHByb21pc2VkLnJlamVjdChleGNlcHRpb24pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uRXhlY3V0ZVN1Y2Nlc3ModHgsIHJlc3VsdCkge1xuICAgICAgICBpZiAoY29sbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICBwcm9taXNlZC5yZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW5zZXJ0T25lKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gb25FeGVjdXRlRXJyb3IodHJhbnNhY3Rpb24sIGVycm9yKSB7XG4gICAgICAgIHByb21pc2VkLnJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZXN0ZWRFeGVjdXRlKGRiLCBxdWVyeTEsIHF1ZXJ5MiwgYmluZGluZzEsIGJpbmRpbmcyKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbGlkYXRlKHByb21pc2VkID0+IHtcblxuICAgICAgZGIudHJhbnNhY3Rpb24ob25TdWNjZXNzLCBvbkVycm9yKTtcblxuICAgICAgZnVuY3Rpb24gb25TdWNjZXNzKHR4KSB7XG4gICAgICAgIHR4LmV4ZWN1dGVTcWwocXVlcnkxLCBiaW5kaW5nMSwgKHR4LCByZXN1bHQpPT4ge1xuICAgICAgICAgIHByb21pc2VkLnJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICB0eC5leGVjdXRlU3FsKHF1ZXJ5MiwgYmluZGluZzIsICh0eCwgcmVzKT0+IHtcbiAgICAgICAgICAgIHByb21pc2VkLnJlc29sdmUocmVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIG9uRXJyb3IodHJhbnNhY3Rpb24sIGVycm9yKSB7XG4gICAgICAgIHByb21pc2VkLnJlamVjdChlcnJvcik7XG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGRlbGV0ZURCKGRiTmFtZSkge1xuICAgIHZhciBxID0gJHEuZGVmZXIoKTtcbiAgICByZXR1cm4gdGhpcy5fdmFsaWRhdGUocHJvbWlzZWQgPT4ge1xuICAgICAgc3FsaXRlUGx1Z2luLmRlbGV0ZURhdGFiYXNlKGRiTmFtZSwgcHJvbWlzZWQucmVzb2x2ZSwgcHJvbWlzZWQucmVqZWN0KTtcbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
