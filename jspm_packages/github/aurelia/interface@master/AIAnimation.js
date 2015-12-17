/* */ 
define(['exports', 'aurelia-event-aggregator', './channel', 'aurelia-framework'], function (exports, _aureliaEventAggregator, _channel, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AIAnimation = (function () {
    function AIAnimation(channel) {
      _classCallCheck(this, _AIAnimation);

      this.globalAnimation = null;

      this.channel = channel;
    }

    _createClass(AIAnimation, [{
      key: 'registerGlobal',
      value: function registerGlobal(animation) {
        var _this = this;

        return new Promise(function (resolve) {
          _this.stopGlobalAnimation().then(function () {
            _this.globalAnimation = resolve;
          });
        });
      }
    }, {
      key: 'stopGlobalAnimation',
      value: function stopGlobalAnimation() {
        var _this2 = this;

        return new Promise(function (resolve) {
          if (_this2.globalAnimation) {
            resolve(_this2.globalAnimation());
          } else {
            resolve();
          }
        });
      }
    }]);

    var _AIAnimation = AIAnimation;
    AIAnimation = (0, _aureliaFramework.inject)(_channel.InterfaceChannel)(AIAnimation) || AIAnimation;
    return AIAnimation;
  })();

  exports.AIAnimation = AIAnimation;

  var AnimationPipeline = (function () {
    function AnimationPipeline(eventAggregator) {
      _classCallCheck(this, _AnimationPipeline);

      this.last = 0;
      this.history = [];
      this.queue = [];

      this.eventAggregator = eventAggregator;
      window.pipeline = this;
    }

    _createClass(AnimationPipeline, [{
      key: 'run',
      value: function run(instruction, nextStep) {
        var last = undefined;
        var next = undefined;
        var current = undefined;
        var config = instruction.config;
        var viewPorts = instruction.router.viewPorts;
        next = instruction.fragment;

        if (next === '/') {
          next = '/' + (config.route || config.name);
        }

        current = this.history.pop();
        last = this.history.pop();

        if (this.isHistory) {
          if (last !== next) {
            this.isHistory = !this.isHistory;
            if (last) this.history.push(last);
            if (current) this.history.push(current);
          }
        } else {
          if (last === next) {
            this.isHistory = !this.isHistory;
          } else {
            if (last) this.history.push(last);
            if (current) this.history.push(current);
          }
        }
        this.history.push(next);

        document.body.classList[this.isHistory ? 'add' : 'remove']('route-history');

        this.eventAggregator.publish('ai:navigate');
        console.log(this.queue);
        console.log(this.isHistory);
        return nextStep();
      }
    }, {
      key: 'setHistory',
      value: function setHistory() {
        this.isHistory = !this.isHistory;
        if (this.isHistory) {
          document.body.classList.add('history');
        } else {
          document.body.classList.remove('history');
        }
      }
    }]);

    var _AnimationPipeline = AnimationPipeline;
    AnimationPipeline = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(AnimationPipeline) || AnimationPipeline;
    return AnimationPipeline;
  })();

  exports.AnimationPipeline = AnimationPipeline;
});
//# sourceMappingURL=data:application/json;base64,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U0FDRjtBQUNELFlBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUd4QixnQkFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRTVFLFlBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzVDLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ3ZCLGVBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0FBQzNCLGVBQU8sUUFBUSxFQUFFLENBQUM7T0FDbkI7OzthQUVTLHNCQUFHO0FBQ1gsWUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDakMsWUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2xCLGtCQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDeEMsTUFBTTtBQUNMLGtCQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDM0M7T0FDRjs7OzZCQXhEVSxpQkFBaUI7QUFBakIscUJBQWlCLEdBRDdCLHNCQTVCTyxNQUFNLDBCQUZOLGVBQWUsQ0E4QkMsQ0FDWCxpQkFBaUIsS0FBakIsaUJBQWlCO1dBQWpCLGlCQUFpQiIsImZpbGUiOiJBSUFuaW1hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtJbnRlcmZhY2VDaGFubmVsfSBmcm9tICcuL2NoYW5uZWwnO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuQGluamVjdChJbnRlcmZhY2VDaGFubmVsKVxuZXhwb3J0IGNsYXNzIEFJQW5pbWF0aW9uIHtcbiAgZ2xvYmFsQW5pbWF0aW9uID0gbnVsbDtcbiAgY29uc3RydWN0b3IoY2hhbm5lbCkge1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICByZWdpc3Rlckdsb2JhbChhbmltYXRpb24pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICB0aGlzLnN0b3BHbG9iYWxBbmltYXRpb24oKS50aGVuKCgpPT4ge1xuICAgICAgICB0aGlzLmdsb2JhbEFuaW1hdGlvbiA9IHJlc29sdmU7XG4gICAgICB9KTtcbiAgICB9KVxuICB9XG5cbiAgc3RvcEdsb2JhbEFuaW1hdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAodGhpcy5nbG9iYWxBbmltYXRpb24pIHtcbiAgICAgICAgcmVzb2x2ZSh0aGlzLmdsb2JhbEFuaW1hdGlvbigpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvblBpcGVsaW5lIHtcbiAgbGFzdCA9IDA7XG4gIGhpc3RvcnkgPSBbXTtcbiAgcXVldWUgPSBbXTtcbiAgY29uc3RydWN0b3IoZXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgd2luZG93LnBpcGVsaW5lID0gdGhpcztcbiAgfVxuXG4gIHJ1bihpbnN0cnVjdGlvbiwgbmV4dFN0ZXApIHtcbiAgICBsZXQgbGFzdDtcbiAgICBsZXQgbmV4dDtcbiAgICBsZXQgY3VycmVudDtcbiAgICBsZXQgY29uZmlnID0gaW5zdHJ1Y3Rpb24uY29uZmlnO1xuICAgIGxldCB2aWV3UG9ydHMgPSBpbnN0cnVjdGlvbi5yb3V0ZXIudmlld1BvcnRzO1xuICAgIG5leHQgPSBpbnN0cnVjdGlvbi5mcmFnbWVudDtcblxuICAgIGlmIChuZXh0ID09PSAnLycpIHtcbiAgICAgIG5leHQgPSAoJy8nKyhjb25maWcucm91dGUgfHwgY29uZmlnLm5hbWUpKTtcbiAgICB9XG5cbiAgICBjdXJyZW50ID0gdGhpcy5oaXN0b3J5LnBvcCgpO1xuICAgIGxhc3QgPSB0aGlzLmhpc3RvcnkucG9wKCk7XG5cbiAgICBpZiAodGhpcy5pc0hpc3RvcnkpIHtcbiAgICAgIGlmIChsYXN0ICE9PSBuZXh0KSB7XG4gICAgICAgIHRoaXMuaXNIaXN0b3J5ID0gIXRoaXMuaXNIaXN0b3J5O1xuICAgICAgICBpZiAobGFzdCkgdGhpcy5oaXN0b3J5LnB1c2gobGFzdCk7XG4gICAgICAgIGlmIChjdXJyZW50KSB0aGlzLmhpc3RvcnkucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGxhc3QgPT09IG5leHQpIHtcbiAgICAgICAgdGhpcy5pc0hpc3RvcnkgPSAhdGhpcy5pc0hpc3Rvcnk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAobGFzdCkgdGhpcy5oaXN0b3J5LnB1c2gobGFzdCk7XG4gICAgICAgIGlmIChjdXJyZW50KSB0aGlzLmhpc3RvcnkucHVzaChjdXJyZW50KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5oaXN0b3J5LnB1c2gobmV4dCk7XG5cblxuICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0W3RoaXMuaXNIaXN0b3J5ID8gJ2FkZCcgOiAncmVtb3ZlJ10oJ3JvdXRlLWhpc3RvcnknKTtcblxuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goJ2FpOm5hdmlnYXRlJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5xdWV1ZSlcbiAgICBjb25zb2xlLmxvZyh0aGlzLmlzSGlzdG9yeSlcbiAgICByZXR1cm4gbmV4dFN0ZXAoKTtcbiAgfVxuXG4gIHNldEhpc3RvcnkoKSB7XG4gICAgdGhpcy5pc0hpc3RvcnkgPSAhdGhpcy5pc0hpc3Rvcnk7XG4gICAgaWYgKHRoaXMuaXNIaXN0b3J5KSB7XG4gICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdoaXN0b3J5Jyk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
