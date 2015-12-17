/* */ 
define(['exports', 'aurelia-framework', '../channel'], function (exports, _aureliaFramework, _channel) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  ;(function () {
    var throttle = function throttle(type, name, obj) {
      obj = obj || window;
      var running = false;
      var func = function func() {
        if (running) {
          return;
        }
        running = true;
        requestAnimationFrame(function () {
          obj.dispatchEvent(new CustomEvent(name));
          running = false;
        });
      };
      obj.addEventListener(type, func);
    };

    throttle("resize", "optimizedResize");
  })();

  var ScreenSize = (function () {
    function ScreenSize(channel) {
      var _this = this;

      _classCallCheck(this, _ScreenSize);

      this.queries = {
        xs: '(min-width: 0px) and (max-width: 33em)',
        sm: '(min-width: 34em) and (max-width: 47em)',
        md: '(min-width: 48em) and (max-width: 61em)',
        lg: '(min-width: 62em) and (max-width: 74em)',
        xl: '(min-width: 75em)'
      };
      this.listeners = [];
      this.screen = {};

      this.currentScreen = this.checkSize();

      window.addEventListener("optimizedResize", function () {
        if (_this.checkSize()) {
          channel.publish('screen-size:' + _this.currentScreen);
          channel.publish('screen-size', _this.screen);
          _this.listeners.forEach(function (cb) {
            cb(_this.currentScreen, _this.screen);
          });
        }
      });
    }

    _createClass(ScreenSize, [{
      key: 'onChange',
      value: function onChange(callback, init) {
        this.listeners.push(callback);
        if (init) callback(this.currentScreen, this.screen);
      }
    }, {
      key: 'checkSize',
      value: function checkSize() {
        var current = this.currentScreen;
        for (var q in this.queries) {
          var query = this.queries[q];
          this.screen[q] = window.matchMedia(query).matches;
          if (this.screen[q]) {
            current = q;
          }
        }

        if (current !== this.currentScreen) {
          this.currentScreen = current;
          return this.currentScreen;
        }
        return false;
      }
    }]);

    var _ScreenSize = ScreenSize;
    ScreenSize = (0, _aureliaFramework.inject)(_channel.InterfaceChannel)(ScreenSize) || ScreenSize;
    return ScreenSize;
  })();

  exports.ScreenSize = ScreenSize;
});
//# sourceMappingURL=data:application/json;base64,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QUFhLENBQUM7U0FDM0I7QUFDRCxlQUFPLEtBQUssQ0FBQztPQUNkOzs7c0JBNUNVLFVBQVU7QUFBVixjQUFVLEdBRHRCLHNCQXhCTyxNQUFNLFdBQ04sZ0JBQWdCLENBdUJDLENBQ1osVUFBVSxLQUFWLFVBQVU7V0FBVixVQUFVIiwiZmlsZSI6InV0aWwvc2NyZWVuLXNpemUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtJbnRlcmZhY2VDaGFubmVsfSBmcm9tICcuLi9jaGFubmVsJztcblxuOyhmdW5jdGlvbigpIHtcbiAgICB2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBvYmopIHtcbiAgICAgICAgb2JqID0gb2JqIHx8IHdpbmRvdztcbiAgICAgICAgdmFyIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdmFyIGZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChydW5uaW5nKSB7IHJldHVybjsgfVxuICAgICAgICAgICAgcnVubmluZyA9IHRydWU7XG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUpKTtcbiAgICAgICAgICAgICAgICBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgb2JqLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZnVuYyk7XG4gICAgfTtcblxuICAgIC8qIGluaXQgLSB5b3UgY2FuIGluaXQgYW55IGV2ZW50ICovXG4gICAgdGhyb3R0bGUoXCJyZXNpemVcIiwgXCJvcHRpbWl6ZWRSZXNpemVcIik7XG59KSgpO1xuXG4vLyBoYW5kbGUgZXZlbnRcblxuQGluamVjdChJbnRlcmZhY2VDaGFubmVsKVxuZXhwb3J0IGNsYXNzIFNjcmVlblNpemUge1xuICBxdWVyaWVzID0ge1xuICAgIHhzOiAnKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC13aWR0aDogMzNlbSknLFxuICAgIHNtOiAnKG1pbi13aWR0aDogMzRlbSkgYW5kIChtYXgtd2lkdGg6IDQ3ZW0pJyxcbiAgICBtZDogJyhtaW4td2lkdGg6IDQ4ZW0pIGFuZCAobWF4LXdpZHRoOiA2MWVtKScsXG4gICAgbGc6ICcobWluLXdpZHRoOiA2MmVtKSBhbmQgKG1heC13aWR0aDogNzRlbSknLFxuICAgIHhsOiAnKG1pbi13aWR0aDogNzVlbSknLFxuICB9O1xuICBsaXN0ZW5lcnMgPSBbXTtcbiAgc2NyZWVuID0ge307XG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwpIHtcbiAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSB0aGlzLmNoZWNrU2l6ZSgpO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcHRpbWl6ZWRSZXNpemVcIiwgKCk9PiB7XG4gICAgICBpZiAodGhpcy5jaGVja1NpemUoKSkge1xuICAgICAgICBjaGFubmVsLnB1Ymxpc2goJ3NjcmVlbi1zaXplOicrdGhpcy5jdXJyZW50U2NyZWVuKVxuICAgICAgICBjaGFubmVsLnB1Ymxpc2goJ3NjcmVlbi1zaXplJywgdGhpcy5zY3JlZW4pO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGNiID0+IHtcbiAgICAgICAgICBjYih0aGlzLmN1cnJlbnRTY3JlZW4sIHRoaXMuc2NyZWVuKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBvbkNoYW5nZShjYWxsYmFjaywgaW5pdCkge1xuICAgIHRoaXMubGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICAgIGlmIChpbml0KSBjYWxsYmFjayh0aGlzLmN1cnJlbnRTY3JlZW4sIHRoaXMuc2NyZWVuKTtcbiAgfVxuXG4gIGNoZWNrU2l6ZSgpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFNjcmVlbjtcbiAgICBmb3IgKGxldCBxIGluIHRoaXMucXVlcmllcykge1xuICAgICAgbGV0IHF1ZXJ5ID0gdGhpcy5xdWVyaWVzW3FdO1xuICAgICAgdGhpcy5zY3JlZW5bcV0gPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSkubWF0Y2hlcztcbiAgICAgIGlmICh0aGlzLnNjcmVlbltxXSkge1xuICAgICAgICBjdXJyZW50ID0gcTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5jdXJyZW50U2NyZWVuKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSBjdXJyZW50O1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcmVlbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
