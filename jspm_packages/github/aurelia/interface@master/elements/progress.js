/* */ 
define(['exports', 'aurelia-framework', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function stripPercentage(value) {
    if (typeof value === 'number') {
      return value;
    }
    if (/\%/g.test(value)) {
      value = value.replace(/\%/g, '');
    }
    return parseFloat(value);
  }

  function processTemplate(compiler, resources, element, instruction) {
    var fragment = _aureliaPal.DOM.createDocumentFragment();
    var node = _aureliaPal.DOM.createElement('progress-indicator');
    node.setAttribute('ref', 'indicator');
    fragment.appendChild(node);
    instruction.viewFactory = compiler.compile(fragment, resources);
    return true;
  }

  var AIProgress = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AIProgress, [{
      key: 'value',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'max',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }, {
      key: 'min',
      decorators: [_aureliaFramework.bindable],
      initializer: null,
      enumerable: true
    }], null, _instanceInitializers);

    function AIProgress(element, targetInstruction, viewSlot) {
      _classCallCheck(this, _AIProgress);

      _defineDecoratedPropertyDescriptor(this, 'value', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'max', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'min', _instanceInitializers);

      this._value = 0;
      this._max = 100;
      this._min = 0;

      this.element = element;
      this.viewSlot = viewSlot;
      this.viewFactory = targetInstruction.elementInstruction.viewFactory;
    }

    _createDecoratedClass(AIProgress, [{
      key: 'bind',
      value: function bind() {
        this.setIndicator(this._value || this.value);
      }
    }, {
      key: 'valueChanged',
      value: function valueChanged(value) {
        value = stripPercentage(value);
        if (this.indicator) {
          this.setIndicator(value);
        }
        this._value = value;
      }
    }, {
      key: 'setIndicator',
      value: function setIndicator(value) {
        var v = 100 - value;
        this.indicator.style.right = v + '%';
      }
    }], null, _instanceInitializers);

    var _AIProgress = AIProgress;
    AIProgress = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaFramework.TargetInstruction, _aureliaFramework.ViewSlot)(AIProgress) || AIProgress;
    AIProgress = (0, _aureliaFramework.processContent)(processTemplate)(AIProgress) || AIProgress;
    AIProgress = (0, _aureliaFramework.noView)(AIProgress) || AIProgress;
    AIProgress = (0, _aureliaFramework.customElement)('ai-progress')(AIProgress) || AIProgress;
    return AIProgress;
  })();

  exports.AIProgress = AIProgress;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL3Byb2dyZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFHQSxXQUFTLGVBQWUsQ0FBQyxLQUFLLEVBQUU7QUFDOUIsUUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7QUFDN0IsYUFBTyxLQUFLLENBQUM7S0FDZDtBQUNELFFBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUNyQixXQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7S0FDbEM7QUFDRCxXQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztHQUMxQjs7QUFFRCxXQUFTLGVBQWUsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDbEUsUUFBSSxRQUFRLEdBQUcsWUFiVCxHQUFHLENBYVUsc0JBQXNCLEVBQUUsQ0FBQztBQUM1QyxRQUFJLElBQUksR0FBRyxZQWRMLEdBQUcsQ0FjTSxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUMvQyxRQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsQ0FBQztBQUMxQyxZQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzNCLGVBQVcsQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7QUFDaEUsV0FBTyxJQUFJLENBQUM7R0FDYjs7TUFNWSxVQUFVOzs7OzBCQUFWLFVBQVU7O3FDQTFCZ0IsUUFBUTs7Ozs7cUNBQVIsUUFBUTs7Ozs7cUNBQVIsUUFBUTs7Ozs7QUFtQ2xDLGFBVEEsVUFBVSxDQVNULE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxRQUFRLEVBQUU7Ozs7Ozs7OztXQUpsRCxNQUFNLEdBQUcsQ0FBQztXQUNWLElBQUksR0FBRyxHQUFHO1dBQ1YsSUFBSSxHQUFHLENBQUM7O0FBR04sVUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7QUFDdkIsVUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7QUFDekIsVUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUM7S0FDckU7OzBCQWJVLFVBQVU7O2FBZWpCLGdCQUFHO0FBQ0wsWUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztPQUM5Qzs7O2FBRVcsc0JBQUMsS0FBSyxFQUFFO0FBQ2xCLGFBQUssR0FBRyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0IsWUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2xCLGNBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7QUFDRCxZQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztPQUNyQjs7O2FBRVcsc0JBQUMsS0FBSyxFQUFFO0FBQ2xCLFlBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUM7QUFDcEIsWUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7T0FDdEM7OztzQkE5QlUsVUFBVTtBQUFWLGNBQVUsR0FEdEIsc0JBekJnRCxNQUFNLEVBeUIvQyxZQXhCQSxHQUFHLENBd0JDLE9BQU8sb0JBekJ3RCxpQkFBaUIsb0JBQTNCLFFBQVEsQ0F5QnhCLENBQ3BDLFVBQVUsS0FBVixVQUFVO0FBQVYsY0FBVSxHQUZ0QixzQkF4Qk8sY0FBYyxFQXdCTixlQUFlLENBQUMsQ0FFbkIsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLHlCQTFCa0MsTUFBTSxFQTBCbEQsVUFBVSxLQUFWLFVBQVU7QUFBVixjQUFVLEdBSnRCLHNCQXRCdUIsYUFBYSxFQXNCdEIsYUFBYSxDQUFDLENBSWhCLFVBQVUsS0FBVixVQUFVO1dBQVYsVUFBVSIsImZpbGUiOiJlbGVtZW50cy9wcm9ncmVzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cHJvY2Vzc0NvbnRlbnQsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIG5vVmlldywgVmlld1Nsb3QsIFRhcmdldEluc3RydWN0aW9ufSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYXVyZWxpYS1wYWwnO1xuXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRhZ2UodmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKC9cXCUvZy50ZXN0KHZhbHVlKSkge1xuICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFwlL2csICcnKTtcbiAgfVxuICByZXR1cm4gcGFyc2VGbG9hdCh2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NUZW1wbGF0ZShjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbikge1xuICBsZXQgZnJhZ21lbnQgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICBsZXQgbm9kZSA9IERPTS5jcmVhdGVFbGVtZW50KCdwcm9ncmVzcy1pbmRpY2F0b3InKTtcbiAgICAgIG5vZGUuc2V0QXR0cmlidXRlKCdyZWYnLCAnaW5kaWNhdG9yJyk7XG4gIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuICBpbnN0cnVjdGlvbi52aWV3RmFjdG9yeSA9IGNvbXBpbGVyLmNvbXBpbGUoZnJhZ21lbnQsIHJlc291cmNlcyk7XG4gIHJldHVybiB0cnVlO1xufVxuXG5AY3VzdG9tRWxlbWVudCgnYWktcHJvZ3Jlc3MnKVxuQG5vVmlld1xuQHByb2Nlc3NDb250ZW50KHByb2Nlc3NUZW1wbGF0ZSlcbkBpbmplY3QoRE9NLkVsZW1lbnQsIFRhcmdldEluc3RydWN0aW9uLCBWaWV3U2xvdClcbmV4cG9ydCBjbGFzcyBBSVByb2dyZXNzIHtcbiAgQGJpbmRhYmxlIHZhbHVlO1xuICBAYmluZGFibGUgbWF4O1xuICBAYmluZGFibGUgbWluO1xuXG4gIF92YWx1ZSA9IDA7XG4gIF9tYXggPSAxMDA7XG4gIF9taW4gPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRhcmdldEluc3RydWN0aW9uLCB2aWV3U2xvdCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy52aWV3U2xvdCA9IHZpZXdTbG90O1xuICAgIHRoaXMudmlld0ZhY3RvcnkgPSB0YXJnZXRJbnN0cnVjdGlvbi5lbGVtZW50SW5zdHJ1Y3Rpb24udmlld0ZhY3Rvcnk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuc2V0SW5kaWNhdG9yKHRoaXMuX3ZhbHVlIHx8IHRoaXMudmFsdWUpO1xuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSBzdHJpcFBlcmNlbnRhZ2UodmFsdWUpO1xuICAgIGlmICh0aGlzLmluZGljYXRvcikge1xuICAgICAgdGhpcy5zZXRJbmRpY2F0b3IodmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgc2V0SW5kaWNhdG9yKHZhbHVlKSB7XG4gICAgbGV0IHYgPSAxMDAgLSB2YWx1ZTtcbiAgICB0aGlzLmluZGljYXRvci5zdHlsZS5yaWdodCA9IHYgKyAnJSc7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
