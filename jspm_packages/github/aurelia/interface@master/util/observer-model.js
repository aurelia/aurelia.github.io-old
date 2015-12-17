/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function unobserveHanlder(name) {
    name = name[0].toUpperCase() + name.slice(1);
    return 'unObserve' + name;
  }
  function observeHanlder(name) {
    return name + 'Observer';
  }
  function changeHanlder(name) {
    return name + 'Changed';
  }

  var ObserverModel = (function () {
    function ObserverModel(observerLocator) {
      _classCallCheck(this, ObserverModel);

      this.observerLocator = observerLocator;
    }

    _createClass(ObserverModel, [{
      key: 'attach',
      value: function attach() {
        this.isActiveObserver();
      }
    }, {
      key: 'detach',
      value: function detach() {
        this.unObserverIsActive();
      }
    }, {
      key: 'observe',
      value: function observe(property) {
        var _this = this;

        return function () {
          var unObserve = function unObserve() {};
          _this[unobserveHanlder(name)] = function () {
            return unObserve();
          };
          _this[changeHanlder(property)] = _this[changeHanlder(property)] || function () {};
          _this[observeHanlder(property)] = function () {
            unObserve = _this.observerLocator.getObserver(_this, property).subscribe(_this[changeHanlder(property)].bind(_this));
          };
        };
      }
    }], [{
      key: 'inject',
      value: function inject() {
        return [_aureliaFramework.ObserverLocator];
      }
    }]);

    return ObserverModel;
  })();

  exports.ObserverModel = ObserverModel;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvb2JzZXJ2ZXItbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFHQSxXQUFTLGdCQUFnQixDQUFDLElBQUksRUFBRTtBQUM5QixRQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDN0MseUJBQW1CLElBQUksQ0FBRztHQUMzQjtBQUNELFdBQVMsY0FBYyxDQUFDLElBQUksRUFBRTtBQUM1QixXQUFVLElBQUksY0FBVztHQUMxQjtBQUNELFdBQVMsYUFBYSxDQUFDLElBQUksRUFBRTtBQUMzQixXQUFVLElBQUksYUFBVTtHQUN6Qjs7TUFFWSxhQUFhO0FBRWIsYUFGQSxhQUFhLENBRVosZUFBZSxFQUFFOzRCQUZsQixhQUFhOztBQUd0QixVQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztLQUN4Qzs7aUJBSlUsYUFBYTs7YUFVbEIsa0JBQUc7QUFDUCxZQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztPQUN6Qjs7O2FBRUssa0JBQUc7QUFDUCxZQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztPQUMzQjs7O2FBRU0saUJBQUMsUUFBUSxFQUFFOzs7QUFDaEIsZUFBTyxZQUFLO0FBQ1YsY0FBSSxTQUFTLEdBQUcscUJBQVUsRUFBRSxDQUFDO0FBQzdCLGdCQUFLLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUc7bUJBQUssU0FBUyxFQUFFO1dBQUEsQ0FBQztBQUNoRCxnQkFBSyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFLLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLFlBQVUsRUFBRSxDQUFBO0FBQzdFLGdCQUFLLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFlBQUs7QUFDcEMscUJBQVMsR0FBRyxNQUFLLGVBQWUsQ0FBQyxXQUFXLFFBQU8sUUFBUSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQUssYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFNLENBQUMsQ0FBQztXQUNsSCxDQUFBO1NBQ0YsQ0FBQTtPQUNGOzs7YUFyQlksa0JBQUc7QUFDZCxlQUFPLG1CQXJCSCxlQUFlLENBcUJLLENBQUM7T0FDMUI7OztXQVJVLGFBQWEiLCJmaWxlIjoidXRpbC9vYnNlcnZlci1tb2RlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2ZXJMb2NhdG9yfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cblxuZnVuY3Rpb24gdW5vYnNlcnZlSGFubGRlcihuYW1lKSB7XG4gIG5hbWUgPSBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKDEpO1xuICByZXR1cm4gYHVuT2JzZXJ2ZSR7bmFtZX1gO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZUhhbmxkZXIobmFtZSkge1xuICByZXR1cm4gYCR7bmFtZX1PYnNlcnZlcmA7XG59XG5mdW5jdGlvbiBjaGFuZ2VIYW5sZGVyKG5hbWUpIHtcbiAgcmV0dXJuIGAke25hbWV9Q2hhbmdlZGA7XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZlck1vZGVsIHtcblxuICBjb25zdHJ1Y3RvcihvYnNlcnZlckxvY2F0b3IpIHtcbiAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcbiAgfVxuXG4gIHN0YXRpYyBpbmplY3QoKSB7XG4gICAgcmV0dXJuIFtPYnNlcnZlckxvY2F0b3JdO1xuICB9XG5cbiAgYXR0YWNoKCkge1xuICAgIHRoaXMuaXNBY3RpdmVPYnNlcnZlcigpO1xuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMudW5PYnNlcnZlcklzQWN0aXZlKCk7XG4gIH1cblxuICBvYnNlcnZlKHByb3BlcnR5KSB7XG4gICAgcmV0dXJuICgpPT4ge1xuICAgICAgdmFyIHVuT2JzZXJ2ZSA9IGZ1bmN0aW9uKCl7fTtcbiAgICAgIHRoaXNbdW5vYnNlcnZlSGFubGRlcihuYW1lKV0gPSAoKT0+IHVuT2JzZXJ2ZSgpO1xuICAgICAgdGhpc1tjaGFuZ2VIYW5sZGVyKHByb3BlcnR5KV0gPSB0aGlzW2NoYW5nZUhhbmxkZXIocHJvcGVydHkpXSB8fCBmdW5jdGlvbigpe31cbiAgICAgIHRoaXNbb2JzZXJ2ZUhhbmxkZXIocHJvcGVydHkpXSA9ICgpPT4ge1xuICAgICAgICB1bk9ic2VydmUgPSB0aGlzLm9ic2VydmVyTG9jYXRvci5nZXRPYnNlcnZlcih0aGlzLCBwcm9wZXJ0eSkuc3Vic2NyaWJlKHRoaXNbY2hhbmdlSGFubGRlcihwcm9wZXJ0eSldLmJpbmQodGhpcykpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
