System.register(['aurelia-templating', 'aurelia-dependency-injection'], function (_export) {
  'use strict';

  var customElement, inject, SelectListElement;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaTemplating) {
      customElement = _aureliaTemplating.customElement;
    }, function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9hdS1zZWxlY3QtbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7NkJBTWEsaUJBQWlCOzs7Ozs7Ozt5Q0FOdEIsYUFBYTs7MkNBQ2IsTUFBTTs7O0FBS0QsdUJBQWlCO0FBRWpCLGlCQUZBLGlCQUFpQixDQUVoQixPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSlUsaUJBQWlCOztpQkFNZix1QkFBQyxVQUFVLEVBQUU7QUFDeEIsZ0JBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxLQUFLLEdBQUcsUUFBUSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7V0FDdEU7OztpQkFFUSxxQkFBRztBQUNWLG1CQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDO1dBQ2xDOzs7aUNBWlUsaUJBQWlCO0FBQWpCLHlCQUFpQixHQUQ3QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsaUJBQWlCLEtBQWpCLGlCQUFpQjtBQUFqQix5QkFBaUIsR0FGN0IsYUFBYSxDQUFDLGdCQUFnQixDQUFDLENBRW5CLGlCQUFpQixLQUFqQixpQkFBaUI7ZUFBakIsaUJBQWlCIiwiZmlsZSI6InJlc291cmNlcy9hdS1zZWxlY3QtbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3VzdG9tRWxlbWVudH0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcblxuXG5AY3VzdG9tRWxlbWVudCgnYXUtc2VsZWN0LWxpc3QnKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIFNlbGVjdExpc3RFbGVtZW50IHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGFjdGl2ZUNoYW5nZWQoYWN0aXZlSXRlbSkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3RbYWN0aXZlSXRlbSA/ICdhZGQnIDogJ3JlbW92ZSddKCdhY3RpdmUtaXRlbScpO1xuICB9XG5cbiAgZ2V0SGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
