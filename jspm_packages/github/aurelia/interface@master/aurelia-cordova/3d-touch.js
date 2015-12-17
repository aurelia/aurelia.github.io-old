/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var DEFAULT_CONFIGURATIONS = [{
    type: 'checkin',
    title: 'Check in',
    subtitle: 'Quickly check in',
    iconType: 'Compose' }, {
    type: 'share',
    title: 'Share',
    subtitle: 'Share like you care',
    iconType: 'Share'
  }, {
    type: 'search',
    title: 'Search',
    iconType: 'Search'
  }, {
    title: 'Show favorites',
    iconTemplate: 'HeartTemplate' }];

  var error = { isSupported: false, error: 'Plugin not supported on device!' };
  var threeDeeTouch = _plugins.Plugins.fromWindow('ThreeDeeTouch');

  var ThreeDeeTouch = (function () {
    function ThreeDeeTouch() {
      _classCallCheck(this, ThreeDeeTouch);

      this.isSupported = !!threeDeeTouch;
      this.touchListeners = [];
    }

    _createClass(ThreeDeeTouch, [{
      key: 'isAvailable',
      value: function isAvailable(cb) {
        if (!this.isSupported) {
          Promise.reject(error);return;
        }
        if (cb) {
          threeDeeTouch.isAvailable(function (avail) {
            cb(avail);
          });
          return;
        }
        return new Promise(function (resolve, reject) {
          threeDeeTouch.isAvailable(function (avail) {
            resolve(avail);
          });
        });
      }
    }, {
      key: '_watchForceTouches',
      value: function _watchForceTouches() {
        var _this = this;

        if (this.isWatchingForTouches) return;
        this.isWatchingForTouches = true;
        threeDeeTouch.watchForceTouchedPromise(function (e) {
          _this.touchListeners.forEach(function (cb) {
            if (typeof cb === 'function') {
              cb(e);
            }
          });
        });
      }
    }, {
      key: 'watchForceTouches',
      value: function watchForceTouches(cb) {
        var _this2 = this;

        if (!this.isSupported) {
          Promise.reject(error);return;
        }

        this.isAvailable(function (avail) {
          if (!avail) {
            Promise.reject(error);return;;
          }

          _this2._watchForceTouches();

          if (cb) {
            _this2.touchListeners.push(cb);
            return { dispose: dispose };
          }

          var promised = new Promise(function (resolve) {
            _this2.touchListeners.push(onTouch);
            cb = resolve;
            function onTouch(e) {
              resolve(e);
            }
          });
          promised.dispose = dispose;

          return promised;

          function dispose() {
            var index = this.touchListeners.indexOf(cb);
            this.touchListeners.splice(index, 1);
          }
        });
      }
    }, {
      key: 'configureQuickActions',
      value: function configureQuickActions(options) {
        if (!options || !Array.isArray(options) || !options.length) {
          options = DEFAULT_CONFIGURATIONS;
        }
        if (!this.isSupported) {
          Promise.reject(error);return;
        }
        this.isAvailable(function (avail) {
          if (avail) {
            threeDeeTouch.configureQuickActions(options);
          }
        });
      }
    }, {
      key: 'onHomeIconPressed',
      value: function onHomeIconPressed(cb) {
        var _this3 = this;

        if (!this.isSupported) {
          Promise.reject(error);return;
        }
        return new Promise(function (resolve, reject) {
          _this3.isAvailable(function (avail) {

            if (!avail) {
              var result = { isSupported: isSupported, error: 'Plugin not supported on device!' };
              return Promise.reject(result);
            }

            if (cb) {
              return threeDeeTouch.onHomeIconPressed(cb);
            }

            threeDeeTouch.onHomeIconPressed(resolve);
          });
        });
      }
    }, {
      key: 'enableLinkPreview',
      value: function enableLinkPreview() {
        if (!this.isSupported) {
          Promise.reject(error);return;
        }
        this.isAvailable(function (avail) {
          if (avail) {
            threeDeeTouch.enableLinkPreview();
          }
        });
      }
    }, {
      key: 'disableLinkPreview',
      value: function disableLinkPreview() {
        if (!this.isSupported) {
          Promise.reject(error);return;
        }
        this.isAvailable(function (avail) {
          if (avail) {
            threeDeeTouch.disableLinkPreview();
          }
        });
      }
    }]);

    return ThreeDeeTouch;
  })();

  exports.ThreeDeeTouch = ThreeDeeTouch;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS8zZC10b3VjaC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUdBLE1BQU0sc0JBQXNCLEdBQUcsQ0FDN0I7QUFDRSxRQUFJLEVBQUUsU0FBUztBQUNmLFNBQUssRUFBRSxVQUFVO0FBQ2pCLFlBQVEsRUFBRSxrQkFBa0I7QUFDNUIsWUFBUSxFQUFFLFNBQVMsRUFDcEIsRUFDRDtBQUNFLFFBQUksRUFBRSxPQUFPO0FBQ2IsU0FBSyxFQUFFLE9BQU87QUFDZCxZQUFRLEVBQUUscUJBQXFCO0FBQy9CLFlBQVEsRUFBRSxPQUFPO0dBQ2xCLEVBQ0Q7QUFDRSxRQUFJLEVBQUUsUUFBUTtBQUNkLFNBQUssRUFBRSxRQUFRO0FBQ2YsWUFBUSxFQUFFLFFBQVE7R0FDbkIsRUFDRDtBQUNFLFNBQUssRUFBRSxnQkFBZ0I7QUFDdkIsZ0JBQVksRUFBRSxlQUFlLEVBQzlCLENBQ0YsQ0FBQzs7QUFPRixNQUFJLEtBQUssR0FBRyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLGlDQUFpQyxFQUFDLENBQUM7QUFDMUUsTUFBSSxhQUFhLEdBQUcsU0FqQ1osT0FBTyxDQWlDYSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUM7O01BQzNDLGFBQWE7YUFBYixhQUFhOzRCQUFiLGFBQWE7O1dBQ3hCLFdBQVcsR0FBRyxDQUFDLENBQUMsYUFBYTtXQUU3QixjQUFjLEdBQUcsRUFBRTs7O2lCQUhSLGFBQWE7O2FBS2IscUJBQUMsRUFBRSxFQUFFO0FBQ2QsWUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUFDLE9BQU87U0FBQztBQUN2RCxZQUFJLEVBQUUsRUFBRTtBQUNOLHVCQUFhLENBQUMsV0FBVyxDQUFDLFVBQUMsS0FBSyxFQUFJO0FBQ2xDLGNBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztXQUNYLENBQUMsQ0FBQztBQUNILGlCQUFPO1NBQ1I7QUFDRCxlQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU0sRUFBSztBQUN0Qyx1QkFBYSxDQUFDLFdBQVcsQ0FBQyxVQUFDLEtBQUssRUFBSTtBQUNsQyxtQkFBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1dBQ2hCLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztPQUNKOzs7YUFFaUIsOEJBQUc7OztBQUNuQixZQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxPQUFPO0FBQ3RDLFlBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUM7QUFDakMscUJBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFDLENBQUMsRUFBSTtBQUMzQyxnQkFBSyxjQUFjLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxFQUFJO0FBQ2hDLGdCQUFJLE9BQU8sRUFBRSxLQUFLLFVBQVUsRUFBRTtBQUM1QixnQkFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2FBQ047V0FDRixDQUFDLENBQUE7U0FDSCxDQUFDLENBQUM7T0FDSjs7O2FBRWdCLDJCQUFDLEVBQUUsRUFBRTs7O0FBQ3BCLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQUFBQyxPQUFPO1NBQUM7O0FBRXZELFlBQUksQ0FBQyxXQUFXLENBQUMsVUFBQSxLQUFLLEVBQUk7QUFDeEIsY0FBSSxDQUFDLEtBQUssRUFBRTtBQUNWLG1CQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLEFBQUMsT0FBTyxDQUFDO1dBQ2hDOztBQUVELGlCQUFLLGtCQUFrQixFQUFFLENBQUM7O0FBRTFCLGNBQUksRUFBRSxFQUFFO0FBQ04sbUJBQUssY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3QixtQkFBTyxFQUFDLE9BQU8sRUFBUCxPQUFPLEVBQUMsQ0FBQztXQUNsQjs7QUFFRCxjQUFJLFFBQVEsR0FBRyxJQUFJLE9BQU8sQ0FBQyxVQUFBLE9BQU8sRUFBSTtBQUNwQyxtQkFBSyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLGNBQUUsR0FBRyxPQUFPLENBQUM7QUFDYixxQkFBUyxPQUFPLENBQUMsQ0FBQyxFQUFFO0FBQ2xCLHFCQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDWjtXQUNGLENBQUMsQ0FBQztBQUNILGtCQUFRLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7QUFFM0IsaUJBQU8sUUFBUSxDQUFDOztBQUVoQixtQkFBUyxPQUFPLEdBQUc7QUFDakIsZ0JBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQzVDLGdCQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7V0FDdEM7U0FDRixDQUFDLENBQUM7T0FDSjs7O2FBRW9CLCtCQUFDLE9BQU8sRUFBRTtBQUM3QixZQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDMUQsaUJBQU8sR0FBRyxzQkFBc0IsQ0FBQztTQUNsQztBQUNELFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQUFBQyxPQUFPO1NBQUM7QUFDdkQsWUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFBLEtBQUssRUFBSTtBQUN4QixjQUFJLEtBQUssRUFBRTtBQUNULHlCQUFhLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDOUM7U0FDRixDQUFDLENBQUM7T0FDSjs7O2FBRWdCLDJCQUFDLEVBQUUsRUFBRTs7O0FBQ3BCLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQUFBQyxPQUFPO1NBQUM7QUFDdkQsZUFBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUk7QUFDckMsaUJBQUssV0FBVyxDQUFDLFVBQUEsS0FBSyxFQUFJOztBQUV4QixnQkFBSSxDQUFDLEtBQUssRUFBRTtBQUNWLGtCQUFJLE1BQU0sR0FBRyxFQUFDLFdBQVcsRUFBWCxXQUFXLEVBQUUsS0FBSyxFQUFFLGlDQUFpQyxFQUFDLENBQUM7QUFDckUscUJBQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUMvQjs7QUFFRCxnQkFBSSxFQUFFLEVBQUU7QUFDTixxQkFBTyxhQUFhLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDNUM7O0FBRUQseUJBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztXQUMxQyxDQUFDLENBQUM7U0FDSixDQUFDLENBQUM7T0FDSjs7O2FBRWdCLDZCQUFHO0FBQ2xCLFlBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO0FBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQUFBQyxPQUFPO1NBQUM7QUFDdkQsWUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFBLEtBQUssRUFBSTtBQUN4QixjQUFJLEtBQUssRUFBRTtBQUNULHlCQUFhLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztXQUNuQztTQUNGLENBQUMsQ0FBQztPQUNKOzs7YUFFaUIsOEJBQUc7QUFDbkIsWUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7QUFBQyxpQkFBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxBQUFDLE9BQU87U0FBQztBQUN2RCxZQUFJLENBQUMsV0FBVyxDQUFDLFVBQUEsS0FBSyxFQUFJO0FBQ3hCLGNBQUksS0FBSyxFQUFFO0FBQ1QseUJBQWEsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1dBQ3BDO1NBQ0YsQ0FBQyxDQUFDO09BQ0o7OztXQWhIVSxhQUFhIiwiZmlsZSI6ImF1cmVsaWEtY29yZG92YS8zZC10b3VjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcblxuXG5jb25zdCBERUZBVUxUX0NPTkZJR1VSQVRJT05TID0gW1xuICB7XG4gICAgdHlwZTogJ2NoZWNraW4nLCAvLyBvcHRpb25hbCwgYnV0IGNhbiBiZSB1c2VkIGluIHRoZSBvbkhvbWVJY29uUHJlc3NlZCBjYWxsYmFja1xuICAgIHRpdGxlOiAnQ2hlY2sgaW4nLCAvLyBtYW5kYXRvcnlcbiAgICBzdWJ0aXRsZTogJ1F1aWNrbHkgY2hlY2sgaW4nLCAvLyBvcHRpb25hbFxuICAgIGljb25UeXBlOiAnQ29tcG9zZScgLy8gb3B0aW9uYWxcbiAgfSxcbiAge1xuICAgIHR5cGU6ICdzaGFyZScsXG4gICAgdGl0bGU6ICdTaGFyZScsXG4gICAgc3VidGl0bGU6ICdTaGFyZSBsaWtlIHlvdSBjYXJlJyxcbiAgICBpY29uVHlwZTogJ1NoYXJlJ1xuICB9LFxuICB7XG4gICAgdHlwZTogJ3NlYXJjaCcsXG4gICAgdGl0bGU6ICdTZWFyY2gnLFxuICAgIGljb25UeXBlOiAnU2VhcmNoJ1xuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTaG93IGZhdm9yaXRlcycsXG4gICAgaWNvblRlbXBsYXRlOiAnSGVhcnRUZW1wbGF0ZScgLy8gZnJvbSBBc3NldHMgY2F0YWxvZ1xuICB9XG5dO1xuXG4vKipcbiAqIGNsYXNzIFRocmVlRGVlVG91Y2hcbiAqIEBpbnN0YWxsICBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tM2R0b3VjaFxuICogQHJlc291cmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi0zZHRvdWNoXG4gKi9cbmxldCBlcnJvciA9IHtpc1N1cHBvcnRlZDpmYWxzZSwgZXJyb3I6ICdQbHVnaW4gbm90IHN1cHBvcnRlZCBvbiBkZXZpY2UhJ307XG5sZXQgdGhyZWVEZWVUb3VjaCA9IFBsdWdpbnMuZnJvbVdpbmRvdygnVGhyZWVEZWVUb3VjaCcpO1xuZXhwb3J0IGNsYXNzIFRocmVlRGVlVG91Y2gge1xuICBpc1N1cHBvcnRlZCA9ICEhdGhyZWVEZWVUb3VjaDtcblxuICB0b3VjaExpc3RlbmVycyA9IFtdO1xuXG4gIGlzQXZhaWxhYmxlKGNiKSB7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7UHJvbWlzZS5yZWplY3QoZXJyb3IpOyByZXR1cm47fVxuICAgIGlmIChjYikge1xuICAgICAgdGhyZWVEZWVUb3VjaC5pc0F2YWlsYWJsZSgoYXZhaWwpPT4ge1xuICAgICAgICBjYihhdmFpbCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRocmVlRGVlVG91Y2guaXNBdmFpbGFibGUoKGF2YWlsKT0+IHtcbiAgICAgICAgcmVzb2x2ZShhdmFpbCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF93YXRjaEZvcmNlVG91Y2hlcygpIHtcbiAgICBpZiAodGhpcy5pc1dhdGNoaW5nRm9yVG91Y2hlcykgcmV0dXJuO1xuICAgIHRoaXMuaXNXYXRjaGluZ0ZvclRvdWNoZXMgPSB0cnVlO1xuICAgIHRocmVlRGVlVG91Y2gud2F0Y2hGb3JjZVRvdWNoZWRQcm9taXNlKChlKT0+IHtcbiAgICAgIHRoaXMudG91Y2hMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYihlKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgd2F0Y2hGb3JjZVRvdWNoZXMoY2IpIHtcbiAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtQcm9taXNlLnJlamVjdChlcnJvcik7IHJldHVybjt9XG5cbiAgICB0aGlzLmlzQXZhaWxhYmxlKGF2YWlsID0+IHtcbiAgICAgIGlmICghYXZhaWwpIHtcbiAgICAgICAgUHJvbWlzZS5yZWplY3QoZXJyb3IpOyByZXR1cm47O1xuICAgICAgfVxuXG4gICAgICB0aGlzLl93YXRjaEZvcmNlVG91Y2hlcygpO1xuXG4gICAgICBpZiAoY2IpIHtcbiAgICAgICAgdGhpcy50b3VjaExpc3RlbmVycy5wdXNoKGNiKTtcbiAgICAgICAgcmV0dXJuIHtkaXNwb3NlfTtcbiAgICAgIH1cblxuICAgICAgbGV0IHByb21pc2VkID0gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgIHRoaXMudG91Y2hMaXN0ZW5lcnMucHVzaChvblRvdWNoKTtcbiAgICAgICAgY2IgPSByZXNvbHZlO1xuICAgICAgICBmdW5jdGlvbiBvblRvdWNoKGUpIHtcbiAgICAgICAgICByZXNvbHZlKGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHByb21pc2VkLmRpc3Bvc2UgPSBkaXNwb3NlO1xuXG4gICAgICByZXR1cm4gcHJvbWlzZWQ7XG5cbiAgICAgIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG91Y2hMaXN0ZW5lcnMuaW5kZXhPZihjYik7XG4gICAgICAgIHRoaXMudG91Y2hMaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvbmZpZ3VyZVF1aWNrQWN0aW9ucyhvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zIHx8ICFBcnJheS5pc0FycmF5KG9wdGlvbnMpIHx8ICFvcHRpb25zLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucyA9IERFRkFVTFRfQ09ORklHVVJBVElPTlM7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCkge1Byb21pc2UucmVqZWN0KGVycm9yKTsgcmV0dXJuO31cbiAgICB0aGlzLmlzQXZhaWxhYmxlKGF2YWlsID0+IHtcbiAgICAgIGlmIChhdmFpbCkge1xuICAgICAgICB0aHJlZURlZVRvdWNoLmNvbmZpZ3VyZVF1aWNrQWN0aW9ucyhvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9uSG9tZUljb25QcmVzc2VkKGNiKSB7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7UHJvbWlzZS5yZWplY3QoZXJyb3IpOyByZXR1cm47fVxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+IHtcbiAgICAgIHRoaXMuaXNBdmFpbGFibGUoYXZhaWwgPT4ge1xuXG4gICAgICAgIGlmICghYXZhaWwpIHtcbiAgICAgICAgICBsZXQgcmVzdWx0ID0ge2lzU3VwcG9ydGVkLCBlcnJvcjogJ1BsdWdpbiBub3Qgc3VwcG9ydGVkIG9uIGRldmljZSEnfTtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzdWx0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjYikge1xuICAgICAgICAgIHJldHVybiB0aHJlZURlZVRvdWNoLm9uSG9tZUljb25QcmVzc2VkKGNiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocmVlRGVlVG91Y2gub25Ib21lSWNvblByZXNzZWQocmVzb2x2ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGVuYWJsZUxpbmtQcmV2aWV3KCkge1xuICAgIGlmICghdGhpcy5pc1N1cHBvcnRlZCkge1Byb21pc2UucmVqZWN0KGVycm9yKTsgcmV0dXJuO31cbiAgICB0aGlzLmlzQXZhaWxhYmxlKGF2YWlsID0+IHtcbiAgICAgIGlmIChhdmFpbCkge1xuICAgICAgICB0aHJlZURlZVRvdWNoLmVuYWJsZUxpbmtQcmV2aWV3KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBkaXNhYmxlTGlua1ByZXZpZXcoKSB7XG4gICAgaWYgKCF0aGlzLmlzU3VwcG9ydGVkKSB7UHJvbWlzZS5yZWplY3QoZXJyb3IpOyByZXR1cm47fVxuICAgIHRoaXMuaXNBdmFpbGFibGUoYXZhaWwgPT4ge1xuICAgICAgaWYgKGF2YWlsKSB7XG4gICAgICAgIHRocmVlRGVlVG91Y2guZGlzYWJsZUxpbmtQcmV2aWV3KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
