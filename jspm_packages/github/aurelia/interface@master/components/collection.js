/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal', '../AITouch'], function (exports, _aureliaFramework, _aureliaPal, _AITouch) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var NODE_ANIMATION = {
    easing: "easeInOutBack",
    duration: "200ms"
  };

  function animateEnter(node) {
    return Velocity(node, 'slideDown', NODE_ANIMATION);
  }

  function animateExit(node) {
    return Velocity(node, 'slideUp', NODE_ANIMATION);
  }

  function processTemplate(compiler, resources, element, instruction) {
    if (element.hasAttribute('expand')) {
      for (var index in element.children) {
        var _child = element.children.item(index);
        if (_child.nodeName === 'AI-COLLECTABLE') {
          _child.setAttribute('expand', true);
        }
      }
    }
    return true;
  }

  var AICollection = (function () {
    function AICollection() {
      _classCallCheck(this, _AICollection);
    }

    var _AICollection = AICollection;
    AICollection = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element)(AICollection) || AICollection;
    AICollection = (0, _aureliaFramework.processContent)(processTemplate)(AICollection) || AICollection;
    AICollection = (0, _aureliaFramework.useView)('./content.html')(AICollection) || AICollection;
    AICollection = (0, _aureliaFramework.customElement)('ai-collection')(AICollection) || AICollection;
    return AICollection;
  })();

  exports.AICollection = AICollection;

  function compileTemplate(compiler, resources, element, instruction) {
    var headingFragment = undefined;
    var factory = undefined;
    var content = undefined;
    var contentFragment = undefined;
    var heading = undefined;
    var node = undefined;
    var temp = undefined;
    var icon = undefined;
    var child = undefined;
    var key = undefined;

    headingFragment = _aureliaPal.DOM.createDocumentFragment();
    contentFragment = _aureliaPal.DOM.createDocumentFragment();

    content = element.querySelectorAll('ai-content')[0];
    content = content || _aureliaPal.DOM.createElement('ai-content');
    content.classList.add('au-animate');
    contentFragment.appendChild(content);

    heading = element.querySelectorAll('ai-heading')[0];
    heading = heading || _aureliaPal.DOM.createElement('ai-heading');
    heading.setAttribute('touch.call', 'onTouch($event)');

    icon = heading.querySelectorAll('ai-icon')[0];
    icon = icon || _aureliaPal.DOM.createElement('ai-icon');
    icon.setAttribute('caret', true);

    heading.appendChild(icon);
    headingFragment.appendChild(heading);

    node = element.firstChild;
    while (node) {
      content.appendChild(node);
      node = element.firstChild;
    }

    instruction.aiContentFactory = compiler.compile(contentFragment, resources);
    instruction.aiHeadingFactory = compiler.compile(headingFragment, resources);
    return true;
  }

  var AICollectable = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AICollectable, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AICollectable(element, touch, container, viewSlot, targetInstruction) {
      _classCallCheck(this, _AICollectable);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      this.element = element;
      this.container = container;
      this.viewSlot = viewSlot;
      this.touch = touch;
      this.headingFactory = targetInstruction.elementInstruction.aiHeadingFactory;
      this.contentFactory = targetInstruction.elementInstruction.aiContentFactory;
    }

    _createDecoratedClass(AICollectable, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.bindingContext = bindingContext;
      }
    }, {
      key: 'attached',
      value: function attached() {
        this.active = this.active || this.element.getAttribute('active');

        this.headingView = this.headingFactory.create(this.container);
        this.heading = this.headingView.fragment.firstElementChild;
        this.headingView.bind(this, this.bindingContext);
        this.viewSlot.add(this.headingView, true);

        if (this.active) {
          this.activeChanged(this.active);
        }
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) {
          this.element.classList.add('is-active');
          this.createContentView();
        } else {
          this.element.classList.remove('is-active');
          this.removeContentView();
        }
      }
    }, {
      key: 'onTouch',
      value: function onTouch(event) {
        this.active = !this.active;
      }
    }, {
      key: 'createContentView',
      value: function createContentView() {
        if (!this.contentView) {
          this.contentView = this.contentFactory.create(this.container);
          this.content = this.contentView.fragment.firstElementChild;
          this.contentView.bind(this, this.bindingContext);
          this.viewSlot.add(this.contentView, true);
          return animateEnter(this.content);
        }
      }
    }, {
      key: 'removeContentView',
      value: function removeContentView() {
        var _this = this;

        if (this.contentView) {
          (function () {
            var view = _this.contentView;
            _this.contentView = null;
            Promise.resolve(animateExit(_this.content)).then(function () {
              _this.viewSlot.remove(view);
            });
          })();
        }
      }
    }], null, _instanceInitializers);

    var _AICollectable = AICollectable;
    AICollectable = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _AITouch.AITouch, _aureliaFramework.Container, _aureliaFramework.ViewSlot, _aureliaFramework.TargetInstruction)(AICollectable) || AICollectable;
    AICollectable = (0, _aureliaFramework.noView)(AICollectable) || AICollectable;
    AICollectable = (0, _aureliaFramework.processContent)(compileTemplate)(AICollectable) || AICollectable;
    AICollectable = (0, _aureliaFramework.customElement)('ai-collectable')(AICollectable) || AICollectable;
    return AICollectable;
  })();

  exports.AICollectable = AICollectable;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBY0EsTUFBTSxjQUFjLEdBQUc7QUFDckIsVUFBTSxFQUFFLGVBQWU7QUFDdkIsWUFBUSxFQUFFLE9BQU87R0FDbEIsQ0FBQTs7QUFFRCxXQUFTLFlBQVksQ0FBQyxJQUFJLEVBQUU7QUFDMUIsV0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxjQUFjLENBQUMsQ0FBQztHQUNwRDs7QUFFRCxXQUFTLFdBQVcsQ0FBQyxJQUFJLEVBQUU7QUFDekIsV0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxjQUFjLENBQUMsQ0FBQztHQUNsRDs7QUFFRCxXQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDbEUsUUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQ2xDLFdBQUssSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUNsQyxZQUFJLE1BQUssR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QyxZQUFJLE1BQUssQ0FBQyxRQUFRLEtBQUssZ0JBQWdCLEVBQUU7QUFDdkMsZ0JBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BDO09BQ0Y7S0FDRjtBQUNELFdBQU8sSUFBSSxDQUFDO0dBQ2I7O01BTVksWUFBWTthQUFaLFlBQVk7Ozs7d0JBQVosWUFBWTtBQUFaLGdCQUFZLEdBRHhCLHNCQXZDQyxNQUFNLEVBdUNBLFlBL0JBLEdBQUcsQ0ErQkMsT0FBTyxDQUFDLENBQ1AsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUZ4QixzQkF2Q0MsY0FBYyxFQXVDQSxlQUFlLENBQUMsQ0FFbkIsWUFBWSxLQUFaLFlBQVk7QUFBWixnQkFBWSxHQUh4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T0FBTyxvQkFMYixTQUFTLG9CQUNULFFBQVEsb0JBRVIsaUJBQWlCLENBbUZrRCxDQUN4RCxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLHlCQXpGeEIsTUFBTSxFQXlGSyxhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBSHpCLHNCQXpGQyxjQUFjLEVBeUZBLGVBQWUsQ0FBQyxDQUduQixhQUFhLEtBQWIsYUFBYTtBQUFiLGlCQUFhLEdBSnpCLHNCQXpGQyxhQUFhLEVBeUZBLGdCQUFnQixDQUFDLENBSW5CLGFBQWEsS0FBYixhQUFhO1dBQWIsYUFBYSIsImZpbGUiOiJjb21wb25lbnRzL2NvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBjdXN0b21FbGVtZW50XG4sIHByb2Nlc3NDb250ZW50XG4sIGluamVjdFxuLCBiaW5kYWJsZVxuLCBub1ZpZXdcbiwgdXNlVmlld1xuLCBDb250YWluZXJcbiwgVmlld1Nsb3RcbiwgY2hpbGRcbiwgVGFyZ2V0SW5zdHJ1Y3Rpb259IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RE9NfSBmcm9tICdhdXJlbGlhLXBhbCc7XG5pbXBvcnQge0FJVG91Y2h9IGZyb20gJy4uL0FJVG91Y2gnO1xuXG5jb25zdCBOT0RFX0FOSU1BVElPTiA9IHtcbiAgZWFzaW5nOiBcImVhc2VJbk91dEJhY2tcIixcbiAgZHVyYXRpb246IFwiMjAwbXNcIlxufVxuXG5mdW5jdGlvbiBhbmltYXRlRW50ZXIobm9kZSkge1xuICByZXR1cm4gVmVsb2NpdHkobm9kZSwgJ3NsaWRlRG93bicsIE5PREVfQU5JTUFUSU9OKTtcbn1cblxuZnVuY3Rpb24gYW5pbWF0ZUV4aXQobm9kZSkge1xuICByZXR1cm4gVmVsb2NpdHkobm9kZSwgJ3NsaWRlVXAnLCBOT0RFX0FOSU1BVElPTik7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZShjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbikge1xuICBpZiAoZWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2V4cGFuZCcpKSB7XG4gICAgZm9yIChsZXQgaW5kZXggaW4gZWxlbWVudC5jaGlsZHJlbikge1xuICAgICAgbGV0IGNoaWxkID0gZWxlbWVudC5jaGlsZHJlbi5pdGVtKGluZGV4KTtcbiAgICAgIGlmIChjaGlsZC5ub2RlTmFtZSA9PT0gJ0FJLUNPTExFQ1RBQkxFJykge1xuICAgICAgICBjaGlsZC5zZXRBdHRyaWJ1dGUoJ2V4cGFuZCcsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWNvbGxlY3Rpb24nKVxuQHVzZVZpZXcoJy4vY29udGVudC5odG1sJylcbkBwcm9jZXNzQ29udGVudChwcm9jZXNzVGVtcGxhdGUpXG5AaW5qZWN0KERPTS5FbGVtZW50KVxuZXhwb3J0IGNsYXNzIEFJQ29sbGVjdGlvbiB7fVxuXG5cblxuXG5mdW5jdGlvbiBjb21waWxlVGVtcGxhdGUoY29tcGlsZXIsIHJlc291cmNlcywgZWxlbWVudCwgaW5zdHJ1Y3Rpb24pIHtcbiAgbGV0IGhlYWRpbmdGcmFnbWVudDtcbiAgbGV0IGZhY3Rvcnk7XG4gIGxldCBjb250ZW50O1xuICBsZXQgY29udGVudEZyYWdtZW50O1xuICBsZXQgaGVhZGluZztcbiAgbGV0IG5vZGU7XG4gIGxldCB0ZW1wO1xuICBsZXQgaWNvbjtcbiAgbGV0IGNoaWxkO1xuICBsZXQga2V5O1xuXG4gIGhlYWRpbmdGcmFnbWVudCAgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBjb250ZW50RnJhZ21lbnQgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gIGNvbnRlbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2FpLWNvbnRlbnQnKVswXTtcbiAgY29udGVudCA9IGNvbnRlbnQgfHwgRE9NLmNyZWF0ZUVsZW1lbnQoJ2FpLWNvbnRlbnQnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdhdS1hbmltYXRlJyk7XG4gIGNvbnRlbnRGcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcblxuICBoZWFkaW5nID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdhaS1oZWFkaW5nJylbMF07XG4gIGhlYWRpbmcgPSBoZWFkaW5nIHx8IERPTS5jcmVhdGVFbGVtZW50KCdhaS1oZWFkaW5nJyk7XG4gIGhlYWRpbmcuc2V0QXR0cmlidXRlKCd0b3VjaC5jYWxsJywgJ29uVG91Y2goJGV2ZW50KScpO1xuXG4gIGljb24gICAgPSBoZWFkaW5nLnF1ZXJ5U2VsZWN0b3JBbGwoJ2FpLWljb24nKVswXTtcbiAgaWNvbiAgICA9IGljb24gfHwgRE9NLmNyZWF0ZUVsZW1lbnQoJ2FpLWljb24nKTtcbiAgaWNvbi5zZXRBdHRyaWJ1dGUoJ2NhcmV0JywgdHJ1ZSk7XG5cbiAgaGVhZGluZy5hcHBlbmRDaGlsZChpY29uKTtcbiAgaGVhZGluZ0ZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuXG4gIG5vZGUgPSBlbGVtZW50LmZpcnN0Q2hpbGRcbiAgd2hpbGUobm9kZSkge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgbm9kZSA9IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgfVxuXG4gIGluc3RydWN0aW9uLmFpQ29udGVudEZhY3RvcnkgPSBjb21waWxlci5jb21waWxlKGNvbnRlbnRGcmFnbWVudCwgcmVzb3VyY2VzKTtcbiAgaW5zdHJ1Y3Rpb24uYWlIZWFkaW5nRmFjdG9yeSA9IGNvbXBpbGVyLmNvbXBpbGUoaGVhZGluZ0ZyYWdtZW50LCByZXNvdXJjZXMpO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLWNvbGxlY3RhYmxlJylcbkBwcm9jZXNzQ29udGVudChjb21waWxlVGVtcGxhdGUpXG5Abm9WaWV3XG5AaW5qZWN0KERPTS5FbGVtZW50LCBBSVRvdWNoLCBDb250YWluZXIsIFZpZXdTbG90LCBUYXJnZXRJbnN0cnVjdGlvbilcbmV4cG9ydCBjbGFzcyBBSUNvbGxlY3RhYmxlIHtcblxuICBAYmluZGFibGUgYWN0aXZlID0gbnVsbDtcbiAgY29udGVudEZhY3Rvcnk7XG4gIGNvbnRlbnRWaWV3O1xuICBjb250ZW50O1xuXG4gIGhlYWRpbmdGYWN0b3J5O1xuICBoZWFkaW5nVmlldztcbiAgaGVhZGluZztcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0b3VjaCwgY29udGFpbmVyLCB2aWV3U2xvdCwgdGFyZ2V0SW5zdHJ1Y3Rpb24pIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIHRoaXMudmlld1Nsb3QgID0gdmlld1Nsb3Q7XG4gICAgdGhpcy50b3VjaCAgICAgPSB0b3VjaDtcbiAgICB0aGlzLmhlYWRpbmdGYWN0b3J5ID0gdGFyZ2V0SW5zdHJ1Y3Rpb24uZWxlbWVudEluc3RydWN0aW9uLmFpSGVhZGluZ0ZhY3Rvcnk7XG4gICAgdGhpcy5jb250ZW50RmFjdG9yeSA9IHRhcmdldEluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbi5haUNvbnRlbnRGYWN0b3J5O1xuICB9XG5cbiAgYmluZChiaW5kaW5nQ29udGV4dCkge1xuICAgIHRoaXMuYmluZGluZ0NvbnRleHQgPSBiaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuYWN0aXZlID0gdGhpcy5hY3RpdmUgfHwgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnYWN0aXZlJylcblxuICAgIHRoaXMuaGVhZGluZ1ZpZXcgPSB0aGlzLmhlYWRpbmdGYWN0b3J5LmNyZWF0ZSh0aGlzLmNvbnRhaW5lcik7XG4gICAgdGhpcy5oZWFkaW5nID0gdGhpcy5oZWFkaW5nVmlldy5mcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICB0aGlzLmhlYWRpbmdWaWV3LmJpbmQodGhpcywgdGhpcy5iaW5kaW5nQ29udGV4dCk7XG4gICAgdGhpcy52aWV3U2xvdC5hZGQodGhpcy5oZWFkaW5nVmlldywgdHJ1ZSk7XG5cbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlQ2hhbmdlZCh0aGlzLmFjdGl2ZSk7XG4gICAgfVxuICB9XG5cbiAgYWN0aXZlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgdGhpcy5jcmVhdGVDb250ZW50VmlldygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICB0aGlzLnJlbW92ZUNvbnRlbnRWaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgb25Ub3VjaChldmVudCkge1xuICAgIHRoaXMuYWN0aXZlID0gIXRoaXMuYWN0aXZlO1xuICB9XG5cbiAgY3JlYXRlQ29udGVudFZpZXcoKSB7XG4gICAgaWYgKCF0aGlzLmNvbnRlbnRWaWV3KSB7XG4gICAgICB0aGlzLmNvbnRlbnRWaWV3ID0gdGhpcy5jb250ZW50RmFjdG9yeS5jcmVhdGUodGhpcy5jb250YWluZXIpO1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5jb250ZW50Vmlldy5mcmFnbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIHRoaXMuY29udGVudFZpZXcuYmluZCh0aGlzLCB0aGlzLmJpbmRpbmdDb250ZXh0KTtcbiAgICAgIHRoaXMudmlld1Nsb3QuYWRkKHRoaXMuY29udGVudFZpZXcsIHRydWUpO1xuICAgICAgcmV0dXJuIGFuaW1hdGVFbnRlcih0aGlzLmNvbnRlbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNvbnRlbnRWaWV3KCkge1xuICAgIGlmICh0aGlzLmNvbnRlbnRWaWV3KSB7XG4gICAgICBsZXQgdmlldyA9IHRoaXMuY29udGVudFZpZXc7XG4gICAgICB0aGlzLmNvbnRlbnRWaWV3ID0gbnVsbDtcbiAgICAgIFByb21pc2UucmVzb2x2ZShhbmltYXRlRXhpdCh0aGlzLmNvbnRlbnQpKVxuICAgICAgICAudGhlbigoKT0+IHtcbiAgICAgICAgICB0aGlzLnZpZXdTbG90LnJlbW92ZSh2aWV3KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
