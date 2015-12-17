/* */ 
define(['exports', './plugins'], function (exports, _plugins) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function getDefaultOptions() {
    return {
      'androidTheme': actionSheet.ANDROID_THEMES.THEME_HOLO_LIGHT,
      'title': 'Action Sheet',
      'buttonLabels': ['Confirm', 'Disregard'],
      'androidEnableCancelButton': true,
      'winphoneEnableCancelButton': true,
      'addCancelButtonWithLabel': 'Cancel',
      'addDestructiveButtonWithLabel': 'Delete it',
      'position': [20, 40] };
  }

  var actionSheet = _plugins.Plugins.getPlugin('actionsheet');

  var ActionSheet = (function () {
    function ActionSheet() {
      _classCallCheck(this, ActionSheet);

      this.isSupported = !!actionSheet;
    }

    _createClass(ActionSheet, [{
      key: 'show',
      value: function show(options) {
        var _this = this;

        return new Promise(function (resolve) {
          if (!_this.isSupported) {
            return resolve('Not Supported');
          }
          options = options || getDefaultOptions();

          actionSheet.show(options, function (responce) {
            resolve(responce);
          });
        });
      }
    }, {
      key: 'hide',
      value: function hide() {
        if (this.isSupported) {
          return actionSheet.hide();
        }
      }
    }]);

    return ActionSheet;
  })();

  exports.ActionSheet = ActionSheet;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtY29yZG92YS9hY3Rpb24tc2hlZXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxXQUFTLGlCQUFpQixHQUFHO0FBQzNCLFdBQU87QUFDTCxvQkFBYyxFQUFFLFdBQVcsQ0FBQyxjQUFjLENBQUMsZ0JBQWdCO0FBQzNELGFBQU8sRUFBRSxjQUFjO0FBQ3ZCLG9CQUFjLEVBQUUsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDO0FBQ3hDLGlDQUEyQixFQUFHLElBQUk7QUFDbEMsa0NBQTRCLEVBQUcsSUFBSTtBQUNuQyxnQ0FBMEIsRUFBRSxRQUFRO0FBQ3BDLHFDQUErQixFQUFHLFdBQVc7QUFDN0MsZ0JBQVUsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFDckIsQ0FBQTtHQUNGOztBQVNELE1BQUksV0FBVyxHQUFHLFNBdkJWLE9BQU8sQ0F1QlcsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDOztNQUN0QyxXQUFXO2FBQVgsV0FBVzs0QkFBWCxXQUFXOztXQUN0QixXQUFXLEdBQUcsQ0FBQyxDQUFDLFdBQVc7OztpQkFEaEIsV0FBVzs7YUFHbEIsY0FBQyxPQUFPLEVBQUU7OztBQUNaLGVBQU8sSUFBSSxPQUFPLENBQUMsVUFBQSxPQUFPLEVBQUk7QUFDNUIsY0FBSSxDQUFDLE1BQUssV0FBVyxFQUFFO0FBQ3JCLG1CQUFPLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztXQUNqQztBQUNELGlCQUFPLEdBQUcsT0FBTyxJQUFJLGlCQUFpQixFQUFFLENBQUM7O0FBRXpDLHFCQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxVQUFDLFFBQVEsRUFBSztBQUN0QyxtQkFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1dBQ25CLENBQUMsQ0FBQztTQUNKLENBQUMsQ0FBQztPQUNKOzs7YUFFRyxnQkFBRztBQUNMLFlBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtBQUNwQixpQkFBTyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDM0I7T0FDRjs7O1dBcEJVLFdBQVciLCJmaWxlIjoiYXVyZWxpYS1jb3Jkb3ZhL2FjdGlvbi1zaGVldC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGx1Z2luc30gZnJvbSAnLi9wbHVnaW5zJztcblxuXG5mdW5jdGlvbiBnZXREZWZhdWx0T3B0aW9ucygpIHtcbiAgcmV0dXJuIHtcbiAgICAnYW5kcm9pZFRoZW1lJzogYWN0aW9uU2hlZXQuQU5EUk9JRF9USEVNRVMuVEhFTUVfSE9MT19MSUdIVCwgLy8gZGVmYXVsdCBpcyBUSEVNRV9UUkFESVRJT05BTFxuICAgICd0aXRsZSc6ICdBY3Rpb24gU2hlZXQnLFxuICAgICdidXR0b25MYWJlbHMnOiBbJ0NvbmZpcm0nLCAnRGlzcmVnYXJkJ10sXG4gICAgJ2FuZHJvaWRFbmFibGVDYW5jZWxCdXR0b24nIDogdHJ1ZSwgLy8gZGVmYXVsdCBmYWxzZVxuICAgICd3aW5waG9uZUVuYWJsZUNhbmNlbEJ1dHRvbicgOiB0cnVlLCAvLyBkZWZhdWx0IGZhbHNlXG4gICAgJ2FkZENhbmNlbEJ1dHRvbldpdGhMYWJlbCc6ICdDYW5jZWwnLFxuICAgICdhZGREZXN0cnVjdGl2ZUJ1dHRvbldpdGhMYWJlbCcgOiAnRGVsZXRlIGl0JyxcbiAgICAncG9zaXRpb24nOiBbMjAsIDQwXSAvLyBmb3IgaVBhZCBwYXNzIGluIHRoZSBbeCwgeV0gcG9zaXRpb24gb2YgdGhlIHBvcG92ZXJcbiAgfVxufVxuXG5cbi8qKlxuICogY2xhc3MgQWN0aW9uU2hlZXRcbiAqXG4gKiBAaW5zdGFsbCAgJCBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0LmdpdFxuICogQHJlc291cmNlIGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1hY3Rpb25zaGVldFxuICovXG5sZXQgYWN0aW9uU2hlZXQgPSBQbHVnaW5zLmdldFBsdWdpbignYWN0aW9uc2hlZXQnKTtcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldCB7XG4gIGlzU3VwcG9ydGVkID0gISFhY3Rpb25TaGVldDtcblxuICBzaG93KG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICBpZiAoIXRoaXMuaXNTdXBwb3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoJ05vdCBTdXBwb3J0ZWQnKTtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IGdldERlZmF1bHRPcHRpb25zKCk7XG5cbiAgICAgIGFjdGlvblNoZWV0LnNob3cob3B0aW9ucywgKHJlc3BvbmNlKSA9PiB7XG4gICAgICAgIHJlc29sdmUocmVzcG9uY2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIGlmICh0aGlzLmlzU3VwcG9ydGVkKSB7XG4gICAgICByZXR1cm4gYWN0aW9uU2hlZXQuaGlkZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
