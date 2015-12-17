/* */ 
define(['exports', 'aurelia-framework', '../channel', '../util/screen-size', 'aurelia-pal', '../AILayoutController'], function (exports, _aureliaFramework, _channel, _utilScreenSize, _aureliaPal, _AILayoutController) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AIOverlay = (function () {
    function AIOverlay(element) {
      _classCallCheck(this, _AIOverlay);

      this.element = element;
    }

    var _AIOverlay = AIOverlay;
    AIOverlay = (0, _aureliaFramework.inject)(Element)(AIOverlay) || AIOverlay;
    AIOverlay = (0, _aureliaFramework.noView)(AIOverlay) || AIOverlay;
    AIOverlay = (0, _aureliaFramework.customElement)('ai-overlay')(AIOverlay) || AIOverlay;
    return AIOverlay;
  })();

  exports.AIOverlay = AIOverlay;

  function processing(compiler, resources, element, instruction) {
    console.log({ compiler: compiler, resources: resources, element: element, instruction: instruction });

    return true;
  }

  var LayoutElement = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(LayoutElement, [{
      key: 'enableNavbar',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'navbarSize',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'content',
      decorators: [(0, _aureliaFramework.child)('layout-content')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'navbar',
      decorators: [(0, _aureliaFramework.child)('ai-navbar')],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function LayoutElement(element, controller, instruction) {
      _classCallCheck(this, _LayoutElement);

      _defineDecoratedPropertyDescriptor(this, 'enableNavbar', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'navbarSize', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'content', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'navbar', _instanceInitializers);

      this.navbarConfig = {};
      this.cssStyles = {};

      this.element = element;
      controller.setLayout(this, this.element);
      console.log(instruction);
    }

    _createDecoratedClass(LayoutElement, [{
      key: 'bind',
      value: function bind(bindingContext) {}
    }], null, _instanceInitializers);

    var _LayoutElement = LayoutElement;
    LayoutElement = (0, _aureliaFramework.inject)(Element, _AILayoutController.AILayoutController, _aureliaFramework.TargetInstruction)(LayoutElement) || LayoutElement;
    LayoutElement = (0, _aureliaFramework.processContent)(processing)(LayoutElement) || LayoutElement;
    LayoutElement = (0, _aureliaFramework.singleton)()(LayoutElement) || LayoutElement;
    LayoutElement = (0, _aureliaFramework.customElement)('ai-layout')(LayoutElement) || LayoutElement;
    return LayoutElement;
  })();

  exports.LayoutElement = LayoutElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7TUFTYSxTQUFTO0FBQ1QsYUFEQSxTQUFTLENBQ1IsT0FBTyxFQUFFOzs7QUFDbkIsVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7S0FDeEI7O3FCQUhVLFNBQVM7QUFBVCxhQUFTLEdBRHJCLHNCQVJ1RyxNQUFNLEVBUXRHLE9BQU8sQ0FBQyxDQUNILFNBQVMsS0FBVCxTQUFTO0FBQVQsYUFBUyx5QkFUSyxNQUFNLEVBU3BCLFNBQVMsS0FBVCxTQUFTO0FBQVQsYUFBUyxHQUhyQixzQkFOOEUsYUFBYSxFQU03RSxZQUFZLENBQUMsQ0FHZixTQUFTLEtBQVQsU0FBUztXQUFULFNBQVM7Ozs7O0FBTXRCLFdBQVMsVUFBVSxDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUM3RCxXQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsUUFBUSxFQUFSLFFBQVEsRUFBRSxTQUFTLEVBQVQsU0FBUyxFQUFFLE9BQU8sRUFBUCxPQUFPLEVBQUUsV0FBVyxFQUFYLFdBQVcsRUFBQyxDQUFDLENBQUM7O0FBRXpELFdBQU8sSUFBSSxDQUFDO0dBQ2I7O01BS1ksYUFBYTs7OzswQkFBYixhQUFhOztxQ0F4Qm9FLFFBQVE7O2VBeUIzRSxJQUFJOzs7OztxQ0F6QitELFFBQVE7O2VBMEI3RSxJQUFJOzs7OzttQkFDMUIsc0JBM0J1SCxLQUFLLEVBMkJ0SCxnQkFBZ0IsQ0FBQzs7ZUFBVyxJQUFJOzs7OzttQkFDdEMsc0JBNUJ1SCxLQUFLLEVBNEJ0SCxXQUFXLENBQUM7O2VBQVUsSUFBSTs7Ozs7QUFLdEIsYUFUQSxhQUFhLENBU1osT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUU7Ozs7Ozs7Ozs7O1dBSDlDLFlBQVksR0FBRyxFQUFFO1dBQ2pCLFNBQVMsR0FBRyxFQUFFOztBQUdaLFVBQUksQ0FBQyxPQUFPLEdBQU0sT0FBTyxDQUFDO0FBQzFCLGdCQUFVLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtLQUN6Qjs7MEJBYlUsYUFBYTs7YUFlcEIsY0FBQyxjQUFjLEVBQUUsRUFFcEI7Ozt5QkFqQlUsYUFBYTtBQUFiLGlCQUFhLEdBRHpCLHNCQXZCdUcsTUFBTSxFQXVCdEcsT0FBTyxzQkFuQlAsa0JBQWtCLG9CQUpsQixpQkFBaUIsQ0F1QjhCLENBQzFDLGFBQWEsS0FBYixhQUFhO0FBQWIsaUJBQWEsR0FGekIsc0JBdEJrQyxjQUFjLEVBc0JqQyxVQUFVLENBQUMsQ0FFZCxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBSHpCLHNCQXJCbUUsU0FBUyxHQXFCakUsQ0FHQyxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBSnpCLHNCQXBCOEUsYUFBYSxFQW9CN0UsV0FBVyxDQUFDLENBSWQsYUFBYSxLQUFiLGFBQWE7V0FBYixhQUFhIiwiZmlsZSI6ImNvbXBvbmVudHMvbGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUYXJnZXRJbnN0cnVjdGlvbiwgbm9WaWV3LCBwcm9jZXNzQ29udGVudCwgdXNlVmlld1N0cmF0ZWd5LCBzaW5nbGV0b24sIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIFZpZXdTbG90LCBjaGlsZH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtJbnRlcmZhY2VDaGFubmVsfSBmcm9tICcuLi9jaGFubmVsJztcbmltcG9ydCB7U2NyZWVuU2l6ZX0gZnJvbSAnLi4vdXRpbC9zY3JlZW4tc2l6ZSc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuaW1wb3J0IHtBSUxheW91dENvbnRyb2xsZXJ9IGZyb20gJy4uL0FJTGF5b3V0Q29udHJvbGxlcic7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1vdmVybGF5JylcbkBub1ZpZXdcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBBSU92ZXJsYXkge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcm9jZXNzaW5nKGNvbXBpbGVyLCByZXNvdXJjZXMsIGVsZW1lbnQsIGluc3RydWN0aW9uKSB7XG4gIGNvbnNvbGUubG9nKHtjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbn0pO1xuXG4gIHJldHVybiB0cnVlO1xufVxuQGN1c3RvbUVsZW1lbnQoJ2FpLWxheW91dCcpXG5Ac2luZ2xldG9uKClcbkBwcm9jZXNzQ29udGVudChwcm9jZXNzaW5nKVxuQGluamVjdChFbGVtZW50LCBBSUxheW91dENvbnRyb2xsZXIsIFRhcmdldEluc3RydWN0aW9uKVxuZXhwb3J0IGNsYXNzIExheW91dEVsZW1lbnQge1xuICBAYmluZGFibGUgZW5hYmxlTmF2YmFyID0gbnVsbDtcbiAgQGJpbmRhYmxlIG5hdmJhclNpemUgPSBudWxsO1xuICBAY2hpbGQoJ2xheW91dC1jb250ZW50JykgY29udGVudCA9IG51bGw7XG4gIEBjaGlsZCgnYWktbmF2YmFyJykgbmF2YmFyID0gbnVsbDtcblxuICBuYXZiYXJDb25maWcgPSB7fTtcbiAgY3NzU3R5bGVzID0ge307XG5cbiAgY29uc3RydWN0b3IoZWxlbWVudCwgY29udHJvbGxlciwgaW5zdHJ1Y3Rpb24pIHtcbiAgICB0aGlzLmVsZW1lbnQgICAgPSBlbGVtZW50O1xuICAgIGNvbnRyb2xsZXIuc2V0TGF5b3V0KHRoaXMsIHRoaXMuZWxlbWVudCk7XG4gICAgY29uc29sZS5sb2coaW5zdHJ1Y3Rpb24pXG4gIH1cblxuICBiaW5kKGJpbmRpbmdDb250ZXh0KSB7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
