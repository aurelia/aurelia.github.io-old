/* */ 
define(['exports', 'aurelia-framework', '../util/events', 'aurelia-pal'], function (exports, _aureliaFramework, _utilEvents, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  var AccordionElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AccordionElement, [{
      key: 'expandable',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'activeItem',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'items',
      decorators: [(0, _aureliaFramework.children)('ai-item')],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AccordionElement(element) {
      _classCallCheck(this, _AccordionElement);

      _defineDecoratedPropertyDescriptor(this, 'expandable', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'activeItem', _instanceInitializers);

      this.isAccordion = true;
      this._items = [];

      _defineDecoratedPropertyDescriptor(this, 'items', _instanceInitializers);

      this.element = element;
    }

    _createDecoratedClass(AccordionElement, [{
      key: 'itemsChanged',
      value: function itemsChanged() {
        var _this = this;

        this.items.forEach(function (item) {
          item.accordion = _this;
          item.touchCallback = function (event) {
            return _this.setActive(event, item);
          };
        });
      }
    }, {
      key: 'setActive',
      value: function setActive(event, item) {
        var node = item.element;
        if (node.classList.contains('is-active')) {
          this.activeItem = null;
        } else {
          this.activeItem = item;
        }
      }
    }, {
      key: 'activeItemChanged',
      value: function activeItemChanged(item, lastItem) {

        if (lastItem) {
          var node = lastItem.element;
          node.classList.remove('is-active');

          Velocity(lastItem.content, "slideUp", {
            duration: '200ms',
            easing: "easeInOutBack"
          });
        }

        if (item) {
          var node = item.element;
          node.classList.add('is-active');
          item.content = item.content || node.querySelectorAll('ai-content')[0];

          Velocity(item.content, "slideDown", {
            duration: '200ms',
            easing: "easeInOutBack"
          });
        }
      }
    }], null, _instanceInitializers);

    var _AccordionElement = AccordionElement;
    AccordionElement = (0, _aureliaFramework.inject)(Element)(AccordionElement) || AccordionElement;
    AccordionElement = (0, _aureliaFramework.useView)('./content.html')(AccordionElement) || AccordionElement;
    AccordionElement = (0, _aureliaFramework.customElement)('ai-accordion')(AccordionElement) || AccordionElement;
    return AccordionElement;
  })();

  exports.AccordionElement = AccordionElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvYWNjb3JkaW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFPYSxnQkFBZ0I7Ozs7MEJBQWhCLGdCQUFnQjs7cUNBUEcsUUFBUTs7ZUFRZixJQUFJOzs7OztxQ0FSRyxRQUFROztlQVNmLElBQUk7Ozs7O21CQUcxQixzQkFaK0MsUUFBUSxFQVk5QyxTQUFTLENBQUM7O2VBQVMsRUFBRTs7Ozs7QUFFcEIsYUFQQSxnQkFBZ0IsQ0FPZixPQUFPLEVBQUU7Ozs7Ozs7V0FKckIsV0FBVyxHQUFHLElBQUk7V0FDbEIsTUFBTSxHQUFHLEVBQUU7Ozs7QUFJVCxVQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztLQUN4Qjs7MEJBVFUsZ0JBQWdCOzthQVdmLHdCQUFHOzs7QUFDYixZQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksRUFBSTtBQUN6QixjQUFJLENBQUMsU0FBUyxRQUFPLENBQUM7QUFDdEIsY0FBSSxDQUFDLGFBQWEsR0FBRyxVQUFDLEtBQUs7bUJBQUssTUFBSyxTQUFTLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQztXQUFBLENBQUM7U0FDN0QsQ0FBQyxDQUFDO09BQ0o7OzthQUVRLG1CQUFDLEtBQUssRUFBRSxJQUFJLEVBQUU7QUFDckIsWUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztBQUN4QixZQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO0FBQ3hDLGNBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCLE1BQU07QUFDTCxjQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztTQUN4QjtPQUNGOzs7YUFFZ0IsMkJBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTs7QUFFaEMsWUFBSSxRQUFRLEVBQUU7QUFDWixjQUFJLElBQUksR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO0FBQ3hCLGNBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDOztBQUV2QyxrQkFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFO0FBQ3BDLG9CQUFRLEVBQUUsT0FBTztBQUNqQixrQkFBTSxFQUFFLGVBQWU7V0FDeEIsQ0FBQyxDQUFBO1NBQ0g7O0FBRUQsWUFBSSxJQUFJLEVBQUU7QUFDUixjQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0FBQ3BCLGNBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLGNBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXRFLGtCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDbEMsb0JBQVEsRUFBRSxPQUFPO0FBQ2pCLGtCQUFNLEVBQUUsZUFBZTtXQUN4QixDQUFDLENBQUE7U0FDSDtPQUNGOzs7NEJBakRVLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FENUIsc0JBTnlDLE1BQU0sRUFNeEMsT0FBTyxDQUFDLENBQ0gsZ0JBQWdCLEtBQWhCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FGNUIsc0JBTE8sT0FBTyxFQUtOLGdCQUFnQixDQUFDLENBRWIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FINUIsc0JBSmdCLGFBQWEsRUFJZixjQUFjLENBQUMsQ0FHakIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtXQUFoQixnQkFBZ0IiLCJmaWxlIjoiY29tcG9uZW50cy9hY2NvcmRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIGNoaWxkcmVufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge29uQ2xpY2t9IGZyb20gJy4uL3V0aWwvZXZlbnRzJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1hY2NvcmRpb24nKVxuQHVzZVZpZXcoJy4vY29udGVudC5odG1sJylcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBY2NvcmRpb25FbGVtZW50IHtcbiAgQGJpbmRhYmxlIGV4cGFuZGFibGUgPSBudWxsXG4gIEBiaW5kYWJsZSBhY3RpdmVJdGVtID0gbnVsbDtcbiAgaXNBY2NvcmRpb24gPSB0cnVlO1xuICBfaXRlbXMgPSBbXTtcbiAgQGNoaWxkcmVuKCdhaS1pdGVtJykgaXRlbXMgPSBbXTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGl0ZW1zQ2hhbmdlZCgpIHtcbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpdGVtLmFjY29yZGlvbiA9IHRoaXM7XG4gICAgICBpdGVtLnRvdWNoQ2FsbGJhY2sgPSAoZXZlbnQpID0+IHRoaXMuc2V0QWN0aXZlKGV2ZW50LCBpdGVtKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNldEFjdGl2ZShldmVudCwgaXRlbSkge1xuICAgIGxldCBub2RlID0gaXRlbS5lbGVtZW50O1xuICAgIGlmIChub2RlLmNsYXNzTGlzdC5jb250YWlucygnaXMtYWN0aXZlJykpIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW07XG4gICAgfVxuICB9XG5cbiAgYWN0aXZlSXRlbUNoYW5nZWQoaXRlbSwgbGFzdEl0ZW0pIHtcblxuICAgIGlmIChsYXN0SXRlbSkge1xuICAgICAgbGV0IG5vZGUgPSBsYXN0SXRlbS5lbGVtZW50O1xuICAgICAgICAgIG5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG5cbiAgICAgIFZlbG9jaXR5KGxhc3RJdGVtLmNvbnRlbnQsIFwic2xpZGVVcFwiLCB7XG4gICAgICAgIGR1cmF0aW9uOiAnMjAwbXMnLFxuICAgICAgICBlYXNpbmc6IFwiZWFzZUluT3V0QmFja1wiXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChpdGVtKSB7XG4gICAgICBsZXQgbm9kZSA9IGl0ZW0uZWxlbWVudDtcbiAgICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgaXRlbS5jb250ZW50ID0gaXRlbS5jb250ZW50IHx8IG5vZGUucXVlcnlTZWxlY3RvckFsbCgnYWktY29udGVudCcpWzBdO1xuXG4gICAgICBWZWxvY2l0eShpdGVtLmNvbnRlbnQsIFwic2xpZGVEb3duXCIsIHtcbiAgICAgICAgZHVyYXRpb246ICcyMDBtcycsXG4gICAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRCYWNrXCJcbiAgICAgIH0pXG4gICAgfVxuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
