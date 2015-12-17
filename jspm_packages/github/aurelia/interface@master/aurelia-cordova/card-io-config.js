/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function isObject(obj) {
    return typeof obj === 'object';
  }

  var CardIOConfig = (function () {
    function CardIOConfig() {
      _classCallCheck(this, CardIOConfig);

      this.responseFields = ['card_type', 'redacted_card_number', 'card_number', 'expiry_month', 'expiry_year', 'short_expiry_year', 'cvv', 'zip'];
      this.scanConfig = {
        'expiry': true,
        'cvv': true,
        'zip': false,
        'suppressManual': false,
        'suppressConfirm': false,
        'hideLogo': true
      };
    }

    _createClass(CardIOConfig, [{
      key: 'configure',
      value: function configure(options) {
        if (options.responseFields) {
          this.configureResponseFields(options.responseFields);
        }
        if (options.config) {
          this.setScanerConfig(options.config);
        }
      }
    }, {
      key: 'configureResponseFields',
      value: function configureResponseFields(fields) {
        if (!isArray(fields)) {
          return;
        }
        this.responseFields = fields;
      }
    }, {
      key: 'setScanerConfig',
      value: function setScanerConfig(config) {
        if (isObject(config)) {
          return;
        }

        Object.assign(this.scanConfig, {
          expiry: config.expiry || true,
          cvv: config.cvv || true,
          zip: config.zip || false,
          hideLogo: config.hideLogo || true,
          suppressManual: config.suppressManual || false,
          suppressConfirm: config.suppressConfirm || false
        });
      }
    }], [{
      key: 'configure',
      value: function configure(framework) {
        var config = new CardIOConfig();
        framework.instance(config, CardIOConfig);
        return config;
      }
    }]);

    return CardIOConfig;
  })();

  exports.CardIOConfig = CardIOConfig;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9jYXJkLWlvLWNvbmZpZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLFdBQVMsUUFBUSxDQUFDLEdBQUcsRUFBRTtBQUNyQixXQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsQ0FBQztHQUNoQzs7TUFPWSxZQUFZO2FBQVosWUFBWTs0QkFBWixZQUFZOztXQUlyQixjQUFjLEdBQUcsQ0FDZixXQUFXLEVBQ1gsc0JBQXNCLEVBQ3RCLGFBQWEsRUFDYixjQUFjLEVBQ2QsYUFBYSxFQUNiLG1CQUFtQixFQUNuQixLQUFLLEVBQ0wsS0FBSyxDQUNOO1dBS0QsVUFBVSxHQUFHO0FBQ1gsZ0JBQVEsRUFBRSxJQUFJO0FBQ2QsYUFBSyxFQUFFLElBQUk7QUFDWCxhQUFLLEVBQUUsS0FBSztBQUNaLHdCQUFnQixFQUFFLEtBQUs7QUFDdkIseUJBQWlCLEVBQUUsS0FBSztBQUN4QixrQkFBVSxFQUFFLElBQUk7T0FDakI7OztpQkF6QlEsWUFBWTs7YUFpQ1osbUJBQUMsT0FBTyxFQUFFO0FBQ2pCLFlBQUksT0FBTyxDQUFDLGNBQWMsRUFBRTtBQUMxQixjQUFJLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3REO0FBQ0QsWUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO0FBQ2xCLGNBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFBO1NBQ3JDO09BQ0Y7OzthQUtzQixpQ0FBQyxNQUFNLEVBQUU7QUFDOUIsWUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNwQixpQkFBTztTQUNSO0FBQ0QsWUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7T0FDOUI7OzthQUtjLHlCQUFDLE1BQU0sRUFBRTtBQUN0QixZQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNwQixpQkFBTztTQUNSOztBQUdELGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtBQUM3QixnQkFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSTtBQUM3QixhQUFHLEVBQUUsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJO0FBQ3ZCLGFBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxJQUFJLEtBQUs7QUFDeEIsa0JBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxJQUFJLElBQUk7QUFDakMsd0JBQWMsRUFBRSxNQUFNLENBQUMsY0FBYyxJQUFJLEtBQUs7QUFDOUMseUJBQWUsRUFBRSxNQUFNLENBQUMsZUFBZSxJQUFJLEtBQUs7U0FDakQsQ0FBQyxDQUFDO09BQ0o7OzthQTFDZSxtQkFBQyxTQUFTLEVBQUU7QUFDMUIsWUFBSSxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztBQUNoQyxpQkFBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDekMsZUFBTyxNQUFNLENBQUM7T0FDZjs7O1dBL0JRLFlBQVkiLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL2NhcmQtaW8tY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnO1xufVxuXG4vKipcbiAqIGNsYXNzIENhcmRJT0NvbmZpZ1xuICpcbiAqIERlZmF1bHRzIGZvciBjYXJkLWlvXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXJkSU9Db25maWcge1xuICAgIC8qKlxuICAgICAqIERlZmF1bHQgYXJyYXkgb2YgcmVzcG9uc2UgZGF0YSBmcm9tIGNhcmRJTyBzY2FuIGNhcmRcbiAgICAgKi9cbiAgICByZXNwb25zZUZpZWxkcyA9IFtcbiAgICAgICdjYXJkX3R5cGUnLFxuICAgICAgJ3JlZGFjdGVkX2NhcmRfbnVtYmVyJyxcbiAgICAgICdjYXJkX251bWJlcicsXG4gICAgICAnZXhwaXJ5X21vbnRoJyxcbiAgICAgICdleHBpcnlfeWVhcicsXG4gICAgICAnc2hvcnRfZXhwaXJ5X3llYXInLFxuICAgICAgJ2N2dicsXG4gICAgICAnemlwJ1xuICAgIF07XG5cbiAgICAvKipcbiAgICAgKiBEZWZhdWx0IGNvbmZpZyBmb3IgY2FyZElPIHNjYW4gZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzY2FuQ29uZmlnID0ge1xuICAgICAgJ2V4cGlyeSc6IHRydWUsXG4gICAgICAnY3Z2JzogdHJ1ZSxcbiAgICAgICd6aXAnOiBmYWxzZSxcbiAgICAgICdzdXBwcmVzc01hbnVhbCc6IGZhbHNlLFxuICAgICAgJ3N1cHByZXNzQ29uZmlybSc6IGZhbHNlLFxuICAgICAgJ2hpZGVMb2dvJzogdHJ1ZVxuICAgIH07XG5cbiAgICBzdGF0aWMgY29uZmlndXJlKGZyYW1ld29yaykge1xuICAgICAgbGV0IGNvbmZpZyA9IG5ldyBDYXJkSU9Db25maWcoKTtcbiAgICAgIGZyYW1ld29yay5pbnN0YW5jZShjb25maWcsIENhcmRJT0NvbmZpZyk7XG4gICAgICByZXR1cm4gY29uZmlnO1xuICAgIH1cblxuICAgIGNvbmZpZ3VyZShvcHRpb25zKSB7XG4gICAgICBpZiAob3B0aW9ucy5yZXNwb25zZUZpZWxkcykge1xuICAgICAgICB0aGlzLmNvbmZpZ3VyZVJlc3BvbnNlRmllbGRzKG9wdGlvbnMucmVzcG9uc2VGaWVsZHMpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMuY29uZmlnKSB7XG4gICAgICAgIHRoaXMuc2V0U2NhbmVyQ29uZmlnKG9wdGlvbnMuY29uZmlnKVxuICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENvbmZpZ3VyaW5nIGRlZmF1bHRSZXNwb25jZUZpZWxkc1xuICAgICAqL1xuICAgIGNvbmZpZ3VyZVJlc3BvbnNlRmllbGRzKGZpZWxkcykge1xuICAgICAgaWYgKCFpc0FycmF5KGZpZWxkcykpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdGhpcy5yZXNwb25zZUZpZWxkcyA9IGZpZWxkcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb25maWd1cmluZyBzY2FuQ29uZmlnIHVzaW5nICRjb3Jkb3ZhTmdDYXJkSU9Qcm92aWRlclxuICAgICAqL1xuICAgIHNldFNjYW5lckNvbmZpZyhjb25maWcpIHtcbiAgICAgIGlmIChpc09iamVjdChjb25maWcpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gRGVmYXVsdCBldmVyeXRoaW5nIHRvIGZhbHNlLCBpZiBub3QgYWxyZWFkeSBmYWxzZTtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5zY2FuQ29uZmlnLCB7XG4gICAgICAgIGV4cGlyeTogY29uZmlnLmV4cGlyeSB8fCB0cnVlLFxuICAgICAgICBjdnY6IGNvbmZpZy5jdnYgfHwgdHJ1ZSxcbiAgICAgICAgemlwOiBjb25maWcuemlwIHx8IGZhbHNlLFxuICAgICAgICBoaWRlTG9nbzogY29uZmlnLmhpZGVMb2dvIHx8IHRydWUsXG4gICAgICAgIHN1cHByZXNzTWFudWFsOiBjb25maWcuc3VwcHJlc3NNYW51YWwgfHwgZmFsc2UsXG4gICAgICAgIHN1cHByZXNzQ29uZmlybTogY29uZmlnLnN1cHByZXNzQ29uZmlybSB8fCBmYWxzZSxcbiAgICAgIH0pO1xuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
