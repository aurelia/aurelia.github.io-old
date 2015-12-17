System.register(['aurelia-dependency-injection', 'aurelia-event-aggregator'], function (_export) {
  'use strict';

  var inject, EventAggregator, AUChannel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaEventAggregator) {
      EventAggregator = _aureliaEventAggregator.EventAggregator;
    }],
    execute: function () {
      AUChannel = (function () {
        function AUChannel(channel) {
          _classCallCheck(this, _AUChannel);

          this.channel = channel;
        }

        _createClass(AUChannel, [{
          key: 'subscribe',
          value: function subscribe(eventName, callback) {
            return this.channel.subscribe(eventName, function (payload) {
              callback(payload);
            });
          }
        }, {
          key: 'publish',
          value: function publish(eventName, payload) {
            return this.channel.publish(eventName, payload);
          }
        }, {
          key: 'createInstruction',
          value: function createInstruction(context, name, bindablekey) {
            context.channelInstruction = { context: context, name: name, isValue: isValue, validate: validate };
            return context.channelInstruction;

            function isValue(value) {
              if (!value) value = bindablekey || context[bindablekey];
              value = value || true;
              return (bindablekey && context[bindablekey]) === value;
            }

            function validate(_context) {
              return _context === context;
            }
          }
        }]);

        var _AUChannel = AUChannel;
        AUChannel = inject(EventAggregator)(AUChannel) || AUChannel;
        return AUChannel;
      })();

      _export('AUChannel', AUChannel);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytCQUlhLFNBQVM7Ozs7Ozs7OzJDQUpkLE1BQU07O2dEQUNOLGVBQWU7OztBQUdWLGVBQVM7QUFDVCxpQkFEQSxTQUFTLENBQ1IsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUhVLFNBQVM7O2lCQUtYLG1CQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUU7QUFDN0IsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsT0FBTyxFQUFJO0FBQ25ELHNCQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFTSxpQkFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzFCLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztXQUNqRDs7O2lCQUVnQiwyQkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUM1QyxtQkFBTyxDQUFDLGtCQUFrQixHQUFHLEVBQUMsT0FBTyxFQUFQLE9BQU8sRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUUsUUFBUSxFQUFSLFFBQVEsRUFBQyxDQUFDO0FBQ2hFLG1CQUFPLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQzs7QUFHbEMscUJBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN0QixrQkFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4RCxtQkFBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDdEIscUJBQVEsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBLEtBQU0sS0FBSyxDQUFDO2FBQ3pEOztBQUVELHFCQUFTLFFBQVEsQ0FBQyxRQUFRLEVBQUU7QUFDMUIscUJBQU8sUUFBUSxLQUFLLE9BQU8sQ0FBQzthQUM3QjtXQUNGOzs7eUJBN0JVLFNBQVM7QUFBVCxpQkFBUyxHQURyQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQ1gsU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTIiwiZmlsZSI6InNlcnZpY2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1kZXBlbmRlbmN5LWluamVjdGlvbic7XG5pbXBvcnQge0V2ZW50QWdncmVnYXRvcn0gZnJvbSAnYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yJztcblxuQGluamVjdChFdmVudEFnZ3JlZ2F0b3IpXG5leHBvcnQgY2xhc3MgQVVDaGFubmVsIHtcbiAgY29uc3RydWN0b3IoY2hhbm5lbCkge1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIH1cblxuICBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0aGlzLmNoYW5uZWwuc3Vic2NyaWJlKGV2ZW50TmFtZSwgKHBheWxvYWQpPT4ge1xuICAgICAgY2FsbGJhY2socGF5bG9hZCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaXNoKGV2ZW50TmFtZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLmNoYW5uZWwucHVibGlzaChldmVudE5hbWUsIHBheWxvYWQpO1xuICB9XG5cbiAgY3JlYXRlSW5zdHJ1Y3Rpb24oY29udGV4dCwgbmFtZSwgYmluZGFibGVrZXkpIHtcbiAgICBjb250ZXh0LmNoYW5uZWxJbnN0cnVjdGlvbiA9IHtjb250ZXh0LCBuYW1lLCBpc1ZhbHVlLCB2YWxpZGF0ZX07XG4gICAgcmV0dXJuIGNvbnRleHQuY2hhbm5lbEluc3RydWN0aW9uO1xuXG4gICAgLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgZnVuY3Rpb24gaXNWYWx1ZSh2YWx1ZSkge1xuICAgICAgaWYgKCF2YWx1ZSkgdmFsdWUgPSBiaW5kYWJsZWtleSB8fCBjb250ZXh0W2JpbmRhYmxla2V5XTtcbiAgICAgIHZhbHVlID0gdmFsdWUgfHwgdHJ1ZTtcbiAgICAgIHJldHVybiAgKGJpbmRhYmxla2V5ICYmIGNvbnRleHRbYmluZGFibGVrZXldKSA9PT0gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGUoX2NvbnRleHQpIHtcbiAgICAgIHJldHVybiBfY29udGV4dCA9PT0gY29udGV4dDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
