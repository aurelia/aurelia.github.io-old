System.register(['aurelia-framework', 'aurelia-event-aggregator'], function (_export) {
  'use strict';

  var inject, EventAggregator, AUChannel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2NoYW5uZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytCQUlhLFNBQVM7Ozs7Ozs7O2lDQUpkLE1BQU07O2dEQUNOLGVBQWU7OztBQUdWLGVBQVM7QUFDVCxpQkFEQSxTQUFTLENBQ1IsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUhVLFNBQVM7O2lCQUtYLG1CQUFDLFNBQVMsRUFBRSxRQUFRLEVBQUU7QUFDN0IsbUJBQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLFVBQUMsT0FBTyxFQUFJO0FBQ25ELHNCQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDbkIsQ0FBQyxDQUFDO1dBQ0o7OztpQkFFTSxpQkFBQyxTQUFTLEVBQUUsT0FBTyxFQUFFO0FBQzFCLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztXQUNqRDs7O2lCQUVnQiwyQkFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtBQUM1QyxtQkFBTyxDQUFDLGtCQUFrQixHQUFHLEVBQUMsT0FBTyxFQUFQLE9BQU8sRUFBRSxJQUFJLEVBQUosSUFBSSxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUUsUUFBUSxFQUFSLFFBQVEsRUFBQyxDQUFDO0FBQ2hFLG1CQUFPLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQzs7QUFHbEMscUJBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN0QixrQkFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLEdBQUcsV0FBVyxJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUN4RCxtQkFBSyxHQUFHLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDdEIscUJBQVEsQ0FBQyxXQUFXLElBQUksT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFBLEtBQU0sS0FBSyxDQUFDO2FBQ3pEOztBQUVELHFCQUFTLFFBQVEsQ0FBQyxRQUFRLEVBQUU7QUFDMUIscUJBQU8sUUFBUSxLQUFLLE9BQU8sQ0FBQzthQUM3QjtXQUNGOzs7eUJBN0JVLFNBQVM7QUFBVCxpQkFBUyxHQURyQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQ1gsU0FBUyxLQUFULFNBQVM7ZUFBVCxTQUFTIiwiZmlsZSI6InNlcnZpY2VzL2NoYW5uZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtFdmVudEFnZ3JlZ2F0b3J9IGZyb20gJ2F1cmVsaWEtZXZlbnQtYWdncmVnYXRvcic7XG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEFVQ2hhbm5lbCB7XG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwpIHtcbiAgICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB9XG5cbiAgc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICByZXR1cm4gdGhpcy5jaGFubmVsLnN1YnNjcmliZShldmVudE5hbWUsIChwYXlsb2FkKT0+IHtcbiAgICAgIGNhbGxiYWNrKHBheWxvYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGlzaChldmVudE5hbWUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFubmVsLnB1Ymxpc2goZXZlbnROYW1lLCBwYXlsb2FkKTtcbiAgfVxuXG4gIGNyZWF0ZUluc3RydWN0aW9uKGNvbnRleHQsIG5hbWUsIGJpbmRhYmxla2V5KSB7XG4gICAgY29udGV4dC5jaGFubmVsSW5zdHJ1Y3Rpb24gPSB7Y29udGV4dCwgbmFtZSwgaXNWYWx1ZSwgdmFsaWRhdGV9O1xuICAgIHJldHVybiBjb250ZXh0LmNoYW5uZWxJbnN0cnVjdGlvbjtcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIGZ1bmN0aW9uIGlzVmFsdWUodmFsdWUpIHtcbiAgICAgIGlmICghdmFsdWUpIHZhbHVlID0gYmluZGFibGVrZXkgfHwgY29udGV4dFtiaW5kYWJsZWtleV07XG4gICAgICB2YWx1ZSA9IHZhbHVlIHx8IHRydWU7XG4gICAgICByZXR1cm4gIChiaW5kYWJsZWtleSAmJiBjb250ZXh0W2JpbmRhYmxla2V5XSkgPT09IHZhbHVlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKF9jb250ZXh0KSB7XG4gICAgICByZXR1cm4gX2NvbnRleHQgPT09IGNvbnRleHQ7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
