/* */ 
define(['exports', 'aurelia-templating', 'aurelia-dependency-injection', 'aurelia-pal'], function (exports, _aureliaTemplating, _aureliaDependencyInjection, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  var _bind = Function.prototype.bind;

  var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MODULE_INDEX = {
    navbar: 0
  };

  function getIndexIDFor(name) {
    MODULE_INDEX[name] = MODULE_INDEX[name] || 0;
    return MODULE_INDEX[name]++;
  }

  var NavbarElementInstruction = (function () {
    function NavbarElementInstruction(vm, element, fragment, container) {
      _classCallCheck(this, NavbarElementInstruction);

      this.vm = vm;
      this.element = element;
      this.fragment = fragment;
      this._container = container;
    }

    _createClass(NavbarElementInstruction, [{
      key: 'compile',
      value: function compile(target, container, resources, compiler) {}
    }]);

    return NavbarElementInstruction;
  })();

  exports.NavbarElementInstruction = NavbarElementInstruction;

  var NavbarInstruction = (function () {
    _createClass(NavbarInstruction, null, [{
      key: 'element',
      value: function element() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new (_bind.apply(NavbarElementInstruction, [null].concat(args)))();
      }
    }, {
      key: 'dynamic',
      value: function dynamic() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return new (_bind.apply(DynamicNavbarInstruction, [null].concat(args)))();
      }
    }]);

    function NavbarInstruction() {
      var instruction = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var deps = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _classCallCheck(this, NavbarInstruction);

      this.isEnhanceable = false;
      this.isDyamic = false;
      this.isInstruction = true;
      this.isEnhanced = false;
      this.isElement = false;
      this.isCreated = false;
      this.isDynamic = true;
      this.isActive = false;
      this.isBound = false;
      this.brand = false;
      this.back = false;
      this.navigation = [];
      this.disposeHandlers = [];

      this.navigationStrategy = this.navigationStrategy.bind(this);
      if (this.validateInstruction(instruction)) {
        Object.assign(this, instruction);
        this.isInstruction = true;
        this._id = Symbol();
        this.id = getIndexIDFor('navbar');
        if (Object.keys(deps).length) this.addDeps(deps);
      }
    }

    _createClass(NavbarInstruction, [{
      key: 'validateInstruction',
      value: function validateInstruction(instruction) {
        var noInstruction = 'NavbarInstruction Must be provided!';
        var isInstruction = instruction.isInstruction;
        if (isInstruction) return Promise.resovle(instruction);

        if (typeof instruction === 'function') {
          instruction = instruction();
        }

        instruction.isValid = true;
        instruction.instruction = instruction;
        return instruction.isValid;
      }
    }]);

    return NavbarInstruction;
  })();

  exports.NavbarInstruction = NavbarInstruction;

  var DynamicNavbarInstruction = (function (_NavbarInstruction) {
    _inherits(DynamicNavbarInstruction, _NavbarInstruction);

    function DynamicNavbarInstruction() {
      _classCallCheck(this, DynamicNavbarInstruction);

      _get(Object.getPrototypeOf(DynamicNavbarInstruction.prototype), 'constructor', this).apply(this, arguments);

      this.isDyamic = true;
    }

    _createClass(DynamicNavbarInstruction, [{
      key: 'navigationStrategy',
      value: function navigationStrategy(instruction) {
        this.bind();
        this.createView();
      }
    }, {
      key: 'createView',
      value: function createView(cb) {
        this.view = this.viewFactory.create();
        this.viewSlot.add(this.view);
        this.view.bind(this);
        if (typeof cb === 'function') return cb(this.view);
        return Promise.resolve(this.view);
      }
    }]);

    return DynamicNavbarInstruction;
  })(NavbarInstruction);

  exports.DynamicNavbarInstruction = DynamicNavbarInstruction;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaW5zdHJ1Y3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUlBLE1BQUksWUFBWSxHQUFHO0FBQ2pCLFVBQU0sRUFBRSxDQUFDO0dBQ1YsQ0FBQTs7QUFFRCxXQUFTLGFBQWEsQ0FBQyxJQUFJLEVBQUU7QUFDM0IsZ0JBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzdDLFdBQU8sWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7R0FDN0I7O01BV1ksd0JBQXdCO0FBQ3hCLGFBREEsd0JBQXdCLENBQ3ZCLEVBQWtCLEVBQUUsT0FBZSxFQUFFLFFBQXlCLEVBQUUsU0FBbUIsRUFBRTs0QkFEdEYsd0JBQXdCOztBQUVqQyxVQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztBQUNiLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFVBQUksQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDO0tBQzdCOztpQkFOVSx3QkFBd0I7O2FBUTVCLGlCQUFDLE1BQWMsRUFBRSxTQUFtQixFQUFFLFNBQXVCLEVBQUUsUUFBcUIsRUFBZSxFQUV6Rzs7O1dBVlUsd0JBQXdCOzs7OztNQWF4QixpQkFBaUI7aUJBQWpCLGlCQUFpQjs7YUFFZCxtQkFBVTswQ0FBTixJQUFJO0FBQUosY0FBSTs7O0FBQ3BCLGdDQUFXLHdCQUF3QixnQkFBSSxJQUFJLE1BQUU7T0FDOUM7OzthQUVhLG1CQUFVOzJDQUFOLElBQUk7QUFBSixjQUFJOzs7QUFDcEIsZ0NBQVcsd0JBQXdCLGdCQUFJLElBQUksTUFBRTtPQUM5Qzs7O0FBaUJVLGFBekJBLGlCQUFpQixHQXlCUztVQUF6QixXQUFXLHlEQUFDLEVBQUU7VUFBRSxJQUFJLHlEQUFDLEVBQUU7OzRCQXpCeEIsaUJBQWlCOztXQVU1QixhQUFhLEdBQUksS0FBSztXQUN0QixRQUFRLEdBQUcsS0FBSztXQUNoQixhQUFhLEdBQUcsSUFBSTtXQUVwQixVQUFVLEdBQUcsS0FBSztXQUNsQixTQUFTLEdBQUcsS0FBSztXQUNqQixTQUFTLEdBQUcsS0FBSztXQUNqQixTQUFTLEdBQUcsSUFBSTtXQUNoQixRQUFRLEdBQUcsS0FBSztXQUNoQixPQUFPLEdBQUcsS0FBSztXQUNmLEtBQUssR0FBRyxLQUFLO1dBQ2IsSUFBSSxHQUFHLEtBQUs7V0FFWixVQUFVLEdBQUcsRUFBRTtXQUNmLGVBQWUsR0FBRyxFQUFFOztBQUVsQixVQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3RCxVQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsRUFBRTtBQUN6QyxjQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQztBQUNqQyxZQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztBQUMxQixZQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBQ3BCLFlBQUksQ0FBQyxFQUFFLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xDLFlBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUNsRDtLQUNGOztpQkFsQ1UsaUJBQWlCOzthQW9DVCw2QkFBQyxXQUFXLEVBQUU7QUFDL0IsWUFBSSxhQUFhLEdBQUcscUNBQXFDLENBQUM7QUFDMUQsWUFBSSxhQUFhLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQztBQUM5QyxZQUFJLGFBQWEsRUFBRSxPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7O0FBRXZELFlBQUksT0FBTyxXQUFXLEtBQUssVUFBVSxFQUFFO0FBQ3JDLHFCQUFXLEdBQUcsV0FBVyxFQUFFLENBQUM7U0FDN0I7O0FBRUQsbUJBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQzNCLG1CQUFXLENBQUMsV0FBVyxHQUFNLFdBQVcsQ0FBQztBQUN6QyxlQUFPLFdBQVcsQ0FBQyxPQUFPLENBQUM7T0FDNUI7OztXQWhEVSxpQkFBaUI7Ozs7O01BbURqQix3QkFBd0I7Y0FBeEIsd0JBQXdCOzthQUF4Qix3QkFBd0I7NEJBQXhCLHdCQUF3Qjs7aUNBQXhCLHdCQUF3Qjs7V0FNbkMsUUFBUSxHQUFHLElBQUk7OztpQkFOSix3QkFBd0I7O2FBUWpCLDRCQUFDLFdBQVcsRUFBRTtBQUM5QixZQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDWixZQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7T0FDbkI7OzthQUNTLG9CQUFDLEVBQUUsRUFBRTtBQUNiLFlBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUN0QyxZQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsWUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDckIsWUFBSSxPQUFPLEVBQUUsS0FBSyxVQUFVLEVBQUUsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ25ELGVBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7T0FDbkM7OztXQWxCVSx3QkFBd0I7S0FBUyxpQkFBaUIiLCJmaWxlIjoiY29tcG9uZW50cy9pbnN0cnVjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vmlld1Jlc291cmNlcywgVmlld0ZhY3RvcnksIEJpbmRpbmdMYW5ndWFnZSwgVmlld0NvbXBpbGVJbnN0cnVjdGlvbiwgQmVoYXZpb3JJbnN0cnVjdGlvbn0gZnJvbSAnYXVyZWxpYS10ZW1wbGF0aW5nJztcbmltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7RE9NLCBGRUFUVVJFfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbnZhciBNT0RVTEVfSU5ERVggPSB7XG4gIG5hdmJhcjogMFxufVxuXG5mdW5jdGlvbiBnZXRJbmRleElERm9yKG5hbWUpIHtcbiAgTU9EVUxFX0lOREVYW25hbWVdID0gTU9EVUxFX0lOREVYW25hbWVdIHx8IDA7XG4gIHJldHVybiBNT0RVTEVfSU5ERVhbbmFtZV0rKztcbn1cblxuXG5pbnRlcmZhY2UgTmF2YmFyVmlld0luc3RydWN0aW9uIHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHdlIHdhbnQgdG8gdXNlIGEgZnJhZ21lbnQgb3ZlciB0aGUgYWN0dWFsIEVsZW1lbnRcbiAgICovXG4gIGZyYWdtZW50PzogRG9jdW1lbnRGcmFnbWVudDtcbn1cblxuXG5leHBvcnQgY2xhc3MgTmF2YmFyRWxlbWVudEluc3RydWN0aW9uIHtcbiAgY29uc3RydWN0b3Iodm06QUlOYXZiYXJFbGVtZW50LCBlbGVtZW50OkVsZW1lbnQsIGZyYWdtZW50OkRvY3VtZW50RnJhZ21lbnQsIGNvbnRhaW5lcjpDb250YWluZXIpIHtcbiAgICB0aGlzLnZtID0gdm07XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLmZyYWdtZW50ID0gZnJhZ21lbnQ7XG4gICAgdGhpcy5fY29udGFpbmVyID0gY29udGFpbmVyO1xuICB9XG5cbiAgY29tcGlsZSh0YXJnZXQ6RWxlbWVudCwgY29udGFpbmVyOkNvbnRhaW5lciwgcmVzb3VyY2VzOlZpZXdSZXNvdXJjZXMsIGNvbXBpbGVyOlZpZXdDb21waWxlcik6IFZpZXdGYWN0b3J5IHtcblxuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBOYXZiYXJJbnN0cnVjdGlvbiB7XG5cbiAgc3RhdGljIGVsZW1lbnQoLi4uYXJncykge1xuICAgIHJldHVybiBuZXcgTmF2YmFyRWxlbWVudEluc3RydWN0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgc3RhdGljIGR5bmFtaWMoLi4uYXJncykge1xuICAgIHJldHVybiBuZXcgRHluYW1pY05hdmJhckluc3RydWN0aW9uKC4uLmFyZ3MpO1xuICB9XG5cbiAgaXNFbmhhbmNlYWJsZSAgPSBmYWxzZTtcbiAgaXNEeWFtaWMgPSBmYWxzZTtcbiAgaXNJbnN0cnVjdGlvbiA9IHRydWU7XG5cbiAgaXNFbmhhbmNlZCA9IGZhbHNlO1xuICBpc0VsZW1lbnQgPSBmYWxzZTtcbiAgaXNDcmVhdGVkID0gZmFsc2U7XG4gIGlzRHluYW1pYyA9IHRydWU7XG4gIGlzQWN0aXZlID0gZmFsc2U7XG4gIGlzQm91bmQgPSBmYWxzZTtcbiAgYnJhbmQgPSBmYWxzZTtcbiAgYmFjayA9IGZhbHNlO1xuXG4gIG5hdmlnYXRpb24gPSBbXTtcbiAgZGlzcG9zZUhhbmRsZXJzID0gW107XG4gIGNvbnN0cnVjdG9yKGluc3RydWN0aW9uPXt9LCBkZXBzPXt9KSB7XG4gICAgdGhpcy5uYXZpZ2F0aW9uU3RyYXRlZ3kgPSB0aGlzLm5hdmlnYXRpb25TdHJhdGVneS5iaW5kKHRoaXMpO1xuICAgIGlmICh0aGlzLnZhbGlkYXRlSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24pKSB7XG4gICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGluc3RydWN0aW9uKTtcbiAgICAgIHRoaXMuaXNJbnN0cnVjdGlvbiA9IHRydWU7XG4gICAgICB0aGlzLl9pZCA9IFN5bWJvbCgpO1xuICAgICAgdGhpcy5pZCA9IGdldEluZGV4SURGb3IoJ25hdmJhcicpO1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGRlcHMpLmxlbmd0aCkgdGhpcy5hZGREZXBzKGRlcHMpO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlSW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb24pIHtcbiAgICBsZXQgbm9JbnN0cnVjdGlvbiA9ICdOYXZiYXJJbnN0cnVjdGlvbiBNdXN0IGJlIHByb3ZpZGVkISc7XG4gICAgbGV0IGlzSW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbi5pc0luc3RydWN0aW9uO1xuICAgIGlmIChpc0luc3RydWN0aW9uKSByZXR1cm4gUHJvbWlzZS5yZXNvdmxlKGluc3RydWN0aW9uKTtcblxuICAgIGlmICh0eXBlb2YgaW5zdHJ1Y3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGluc3RydWN0aW9uID0gaW5zdHJ1Y3Rpb24oKTtcbiAgICB9XG5cbiAgICBpbnN0cnVjdGlvbi5pc1ZhbGlkID0gdHJ1ZTtcbiAgICBpbnN0cnVjdGlvbi5pbnN0cnVjdGlvbiAgICA9IGluc3RydWN0aW9uO1xuICAgIHJldHVybiBpbnN0cnVjdGlvbi5pc1ZhbGlkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEeW5hbWljTmF2YmFySW5zdHJ1Y3Rpb24gZXh0ZW5kcyBOYXZiYXJJbnN0cnVjdGlvbiB7XG5cbiAgbW9kZWw7XG4gIHZpZXc7XG4gIGlzQm91bmQ7XG4gIGlzQWN0aXZlO1xuICBpc0R5YW1pYyA9IHRydWU7XG5cbiAgbmF2aWdhdGlvblN0cmF0ZWd5KGluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5iaW5kKCk7XG4gICAgdGhpcy5jcmVhdGVWaWV3KCk7XG4gIH1cbiAgY3JlYXRlVmlldyhjYikge1xuICAgIHRoaXMudmlldyA9IHRoaXMudmlld0ZhY3RvcnkuY3JlYXRlKCk7XG4gICAgdGhpcy52aWV3U2xvdC5hZGQodGhpcy52aWV3KTtcbiAgICB0aGlzLnZpZXcuYmluZCh0aGlzKTtcbiAgICBpZiAodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKSByZXR1cm4gY2IodGhpcy52aWV3KTtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMudmlldyk7XG4gIH1cbn1cblxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
