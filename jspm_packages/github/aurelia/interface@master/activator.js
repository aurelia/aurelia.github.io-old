/* */ 
define(['exports', 'aurelia-framework', './channel'], function (exports, _aureliaFramework, _channel) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Activator = (function () {
    function Activator(syntax, router) {
      _classCallCheck(this, Activator);

      this.components = {};
    }

    _createClass(Activator, [{
      key: 'registerComponent',
      value: function registerComponent(key, component) {
        console.log(this);
        this.components[key] = component;
      }
    }, {
      key: 'isComponent',
      value: function isComponent(key) {
        return key in this.components;
      }
    }, {
      key: 'exists',
      value: function exists(key, method) {
        if (!method) return this.isComponent(key);
        return this.isComponent(key) && method in this.components[key];
      }
    }, {
      key: 'get',
      value: function get(key) {
        return this.components[key];
      }
    }]);

    return Activator;
  })();

  exports.Activator = Activator;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRvci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztNQUdhLFNBQVM7QUFHVCxhQUhBLFNBQVMsQ0FHUixNQUFNLEVBQUUsTUFBTSxFQUFFOzRCQUhqQixTQUFTOztXQUNwQixVQUFVLEdBQUcsRUFBRTtLQUdkOztpQkFKVSxTQUFTOzthQU1ILDJCQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUU7QUFDaEMsZUFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQixZQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQVMsQ0FBQztPQUNsQzs7O2FBRVUscUJBQUMsR0FBRyxFQUFFO0FBQ2YsZUFBTyxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUMvQjs7O2FBRUssZ0JBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRTtBQUNsQixZQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyxlQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7T0FDaEU7OzthQUVFLGFBQUMsR0FBRyxFQUFFO0FBQ1AsZUFBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO09BQzdCOzs7V0F0QlUsU0FBUyIsImZpbGUiOiJhY3RpdmF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtJbnRlcmZhY2VDaGFubmVsfSBmcm9tICcuL2NoYW5uZWwnO1xuXG5leHBvcnQgY2xhc3MgQWN0aXZhdG9yIHtcbiAgY29tcG9uZW50cyA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHN5bnRheCwgcm91dGVyKSB7XG4gIH1cblxuICByZWdpc3RlckNvbXBvbmVudChrZXksIGNvbXBvbmVudCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgdGhpcy5jb21wb25lbnRzW2tleV0gPSBjb21wb25lbnQ7XG4gIH1cblxuICBpc0NvbXBvbmVudChrZXkpIHtcbiAgICByZXR1cm4ga2V5IGluIHRoaXMuY29tcG9uZW50cztcbiAgfVxuXG4gIGV4aXN0cyhrZXksIG1ldGhvZCkge1xuICAgIGlmICghbWV0aG9kKSByZXR1cm4gdGhpcy5pc0NvbXBvbmVudChrZXkpO1xuICAgIHJldHVybiB0aGlzLmlzQ29tcG9uZW50KGtleSkgJiYgbWV0aG9kIGluIHRoaXMuY29tcG9uZW50c1trZXldO1xuICB9XG5cbiAgZ2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNba2V5XTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
