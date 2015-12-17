/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var ViewControllerElement = (function () {
    function ViewControllerElement(view) {
      _classCallCheck(this, ViewControllerElement);

      this.scroll = null;
      this.navbar = null;
      this.tabbar = null;
      this.fragment = _aureliaPal.DOM.createDocumentFragment();
      this.placholders = {};

      this.view = view;
    }

    _createClass(ViewControllerElement, [{
      key: '_createDocumentPlaceholder',
      value: function _createDocumentPlaceholder(name, beforeOfAfter) {
        var el = _aureliaPal.DOM.createElement('DIV');
        el.className += ' ' + name + '-placeholder';
        el.style.display = 'none';
        el.show = function () {
          return el.style.display = '';
        };
        el.hide = function () {
          return el.style.display = 'none';
        };
        this.fragment.appendChild(el);
        this.placholders[name] = el;
      }
    }, {
      key: 'setItem',
      value: function setItem(key, value, oldValue) {
        var changedHandler = key + 'Changed';
        this[key] = value;
        this[changedHandler] && this[changedHandler](value, oldValue);
      }
    }, {
      key: 'created',
      value: function created() {
        this._createDocumentPlaceholder('navbar');
        this._createDocumentPlaceholder('tabbar');
      }
    }, {
      key: 'bind',
      value: function bind() {
        this.element.insertBefore(this.placholders.navbar, this.element.firstChild);
        this.element.appendChild(this.placholders.tabbar);
      }
    }, {
      key: 'navbarChanged',
      value: function navbarChanged(value) {
        this.placholders.navbar[value ? 'show' : 'hide']();
      }
    }, {
      key: 'tabbarChanged',
      value: function tabbarChanged(value) {
        this.placholders.tabbar[value ? 'show' : 'hide']();
      }
    }]);

    return ViewControllerElement;
  })();

  exports.ViewControllerElement = ViewControllerElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvdmlldy1jb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O01BR2EscUJBQXFCO0FBUXJCLGFBUkEscUJBQXFCLENBUXBCLElBQUksRUFBRTs0QkFSUCxxQkFBcUI7O1dBQ2hDLE1BQU0sR0FBRyxJQUFJO1dBQ2IsTUFBTSxHQUFHLElBQUk7V0FDYixNQUFNLEdBQUcsSUFBSTtXQUViLFFBQVEsR0FBRyxZQVBMLEdBQUcsQ0FPTSxzQkFBc0IsRUFBRTtXQUN2QyxXQUFXLEdBQUcsRUFBRTs7QUFHZCxVQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztLQUNsQjs7aUJBVlUscUJBQXFCOzthQVlOLG9DQUFDLElBQUksRUFBRSxhQUFhLEVBQUU7QUFDOUMsWUFBSSxFQUFFLEdBQUcsWUFmTCxHQUFHLENBZU0sYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlCLFVBQUUsQ0FBQyxTQUFTLElBQUksR0FBRyxHQUFFLElBQUksR0FBRSxjQUFjLENBQUM7QUFDMUMsVUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO0FBQzFCLFVBQUUsQ0FBQyxJQUFJLEdBQUc7aUJBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsRUFBRTtTQUFBLENBQUM7QUFDckMsVUFBRSxDQUFDLElBQUksR0FBRztpQkFBSyxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNO1NBQUEsQ0FBQztBQUN6QyxZQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNsQyxZQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztPQUM3Qjs7O2FBRU0saUJBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7QUFDNUIsWUFBSSxjQUFjLEdBQUcsR0FBRyxHQUFDLFNBQVMsQ0FBQztBQUNuQyxZQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ2xCLFlBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO09BQy9EOzs7YUFFTSxtQkFBRztBQUNSLFlBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMxQyxZQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7T0FDM0M7OzthQUVHLGdCQUFHO0FBQ0wsWUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM1RSxZQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQ25EOzs7YUFFWSx1QkFBQyxLQUFLLEVBQUU7QUFDbkIsWUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFBO09BQ25EOzs7YUFFWSx1QkFBQyxLQUFLLEVBQUU7QUFDbkIsWUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFBO09BQ25EOzs7V0E1Q1UscUJBQXFCIiwiZmlsZSI6ImNvbXBvbmVudHMvdmlldy1jb250ZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtub1ZpZXcsIHByb2Nlc3NDb250ZW50LCBpbmxpbmVWaWV3LCBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBDb250YWluZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbmV4cG9ydCBjbGFzcyBWaWV3Q29udHJvbGxlckVsZW1lbnQge1xuICBzY3JvbGwgPSBudWxsO1xuICBuYXZiYXIgPSBudWxsO1xuICB0YWJiYXIgPSBudWxsO1xuXG4gIGZyYWdtZW50ID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgcGxhY2hvbGRlcnMgPSB7fTtcblxuICBjb25zdHJ1Y3Rvcih2aWV3KSB7XG4gICAgdGhpcy52aWV3ID0gdmlldztcbiAgfVxuXG4gIF9jcmVhdGVEb2N1bWVudFBsYWNlaG9sZGVyKG5hbWUsIGJlZm9yZU9mQWZ0ZXIpIHtcbiAgICBsZXQgZWwgPSBET00uY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGVsLmNsYXNzTmFtZSArPSAnICcgK25hbWUgKyctcGxhY2Vob2xkZXInO1xuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBlbC5zaG93ID0gKCk9PiBlbC5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgICAgIGVsLmhpZGUgPSAoKT0+IGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIHRoaXMucGxhY2hvbGRlcnNbbmFtZV0gPSBlbDtcbiAgfVxuXG4gIHNldEl0ZW0oa2V5LCB2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBsZXQgY2hhbmdlZEhhbmRsZXIgPSBrZXkrJ0NoYW5nZWQnO1xuICAgIHRoaXNba2V5XSA9IHZhbHVlO1xuICAgIHRoaXNbY2hhbmdlZEhhbmRsZXJdICYmIHRoaXNbY2hhbmdlZEhhbmRsZXJdKHZhbHVlLCBvbGRWYWx1ZSk7XG4gIH1cblxuICBjcmVhdGVkKCkge1xuICAgIHRoaXMuX2NyZWF0ZURvY3VtZW50UGxhY2Vob2xkZXIoJ25hdmJhcicpO1xuICAgIHRoaXMuX2NyZWF0ZURvY3VtZW50UGxhY2Vob2xkZXIoJ3RhYmJhcicpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMucGxhY2hvbGRlcnMubmF2YmFyLCB0aGlzLmVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKHRoaXMucGxhY2hvbGRlcnMudGFiYmFyKTtcbiAgfVxuXG4gIG5hdmJhckNoYW5nZWQodmFsdWUpIHtcbiAgICB0aGlzLnBsYWNob2xkZXJzLm5hdmJhclt2YWx1ZSA/ICdzaG93JyA6ICdoaWRlJ10oKVxuICB9XG5cbiAgdGFiYmFyQ2hhbmdlZCh2YWx1ZSkge1xuICAgIHRoaXMucGxhY2hvbGRlcnMudGFiYmFyW3ZhbHVlID8gJ3Nob3cnIDogJ2hpZGUnXSgpXG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
