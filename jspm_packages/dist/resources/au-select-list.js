System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customElement, inject, SelectListElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customElement = _aureliaFramework.customElement;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      SelectListElement = (function () {
        function SelectListElement(element) {
          _classCallCheck(this, _SelectListElement);

          this.element = element;
        }

        _createClass(SelectListElement, [{
          key: 'activeChanged',
          value: function activeChanged(activeItem) {
            this.element.classList[activeItem ? 'add' : 'remove']('active-item');
          }
        }, {
          key: 'getHeight',
          value: function getHeight() {
            return this.element.clientHeight;
          }
        }]);

        var _SelectListElement = SelectListElement;
        SelectListElement = inject(Element)(SelectListElement) || SelectListElement;
        SelectListElement = customElement('au-select-list')(SelectListElement) || SelectListElement;
        return SelectListElement;
      })();

      _export('SelectListElement', SelectListElement);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1zZWxlY3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkJBS2EsaUJBQWlCOzs7Ozs7Ozt3Q0FMdEIsYUFBYTtpQ0FBRSxNQUFNOzs7QUFLaEIsdUJBQWlCO0FBRWpCLGlCQUZBLGlCQUFpQixDQUVoQixPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSlUsaUJBQWlCOztpQkFNZix1QkFBQyxVQUFVLEVBQUU7QUFDeEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDdEU7OztpQkFFUSxxQkFBRztBQUNWLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1dBQ2xDOzs7aUNBWlUsaUJBQWlCO0FBQWpCLHlCQUFpQixHQUQ3QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQix5QkFBaUIsR0FGN0IsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBRW5CLGlCQUFpQixLQUFqQixpQkFBaUI7ZUFBakIsaUJBQWlCIiwiZmlsZSI6InJlc291cmNlcy9hdS1zZWxlY3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudCwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2F1LXNlbGVjdC1saXN0JylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBTZWxlY3RMaXN0RWxlbWVudCB7XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKGFjdGl2ZUl0ZW0pIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0W2FjdGl2ZUl0ZW0gPyAnYWRkJyA6ICdyZW1vdmUnXSgnYWN0aXZlLWl0ZW0nKTtcbiAgfVxuXG4gIGdldEhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5lbGVtZW50LmNsaWVudEhlaWdodDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
