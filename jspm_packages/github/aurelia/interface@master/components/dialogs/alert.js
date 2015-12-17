/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AlertDialog = (function () {
    function AlertDialog(element) {
      _classCallCheck(this, AlertDialog);

      this.actions = ['confirm', 'cancel'];
      this.callbacks = {
        confirm: 'confirmCallback',
        cancel: 'cancelCallback'
      };

      this.element = element;
    }

    _createClass(AlertDialog, [{
      key: 'created',
      value: function created(view) {
        console.log(view);
      }
    }, {
      key: 'bind',
      value: function bind() {
        console.log(arguments);
      }
    }, {
      key: 'onClick',
      value: function onClick($event, action) {
        if (action in this.callbacks) {
          this['_' + this.callbacks[action]]($event, this);
        }
      }
    }]);

    return AlertDialog;
  })();

  exports.AlertDialog = AlertDialog;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhbG9ncy9hbGVydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQUFhLFdBQVc7QUFRWCxhQVJBLFdBQVcsQ0FRVixPQUFPLEVBQUU7NEJBUlYsV0FBVzs7V0FFdEIsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQztXQUMvQixTQUFTLEdBQUc7QUFDVixlQUFPLEVBQUUsaUJBQWlCO0FBQzFCLGNBQU0sRUFBRSxnQkFBZ0I7T0FDekI7O0FBR0MsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7O2lCQVZVLFdBQVc7O2FBWWYsaUJBQUMsSUFBSSxFQUFFO0FBQ1osZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtPQUNsQjs7O2FBRUcsZ0JBQUc7QUFDTCxlQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO09BQ3ZCOzs7YUFFTSxpQkFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ3RCLFlBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7QUFDNUIsY0FBSSxDQUFDLEdBQUcsR0FBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ2pEO09BQ0Y7OztXQXhCVSxXQUFXIiwiZmlsZSI6ImNvbXBvbmVudHMvZGlhbG9ncy9hbGVydC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBBbGVydERpYWxvZyB7XG5cbiAgYWN0aW9ucyA9IFsnY29uZmlybScsICdjYW5jZWwnXTtcbiAgY2FsbGJhY2tzID0ge1xuICAgIGNvbmZpcm06ICdjb25maXJtQ2FsbGJhY2snLFxuICAgIGNhbmNlbDogJ2NhbmNlbENhbGxiYWNrJ1xuICB9O1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgY3JlYXRlZCh2aWV3KSB7XG4gICAgY29uc29sZS5sb2codmlldylcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgY29uc29sZS5sb2coYXJndW1lbnRzKVxuICB9XG5cbiAgb25DbGljaygkZXZlbnQsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24gaW4gdGhpcy5jYWxsYmFja3MpIHtcbiAgICAgIHRoaXNbJ18nKyB0aGlzLmNhbGxiYWNrc1thY3Rpb25dXSgkZXZlbnQsIHRoaXMpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
