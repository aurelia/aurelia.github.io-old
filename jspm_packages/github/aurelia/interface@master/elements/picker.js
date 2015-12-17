/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

    var PICKER_DEFAULTS = {
        updateValuesOnMomentum: false,
        updateValuesOnTouchmove: true,
        rotateEffect: false,
        momentumRatio: 7,
        freeMode: false,

        closeByOutsideClick: true,
        scrollToInput: true,
        inputReadOnly: true,
        convertToPopover: true,
        onlyInPopover: false,
        toolbar: true,
        toolbarCloseText: 'Done',
        toolbarTemplate: '<div class="toolbar">' + '<div class="toolbar-inner">' + '<div class="left"></div>' + '<div class="right">' + '<a href="#" class="link close-picker">{{closeText}}</a>' + '</div>' + '</div>' + '</div>'
    };

    var PickerElement = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(PickerElement, [{
            key: 'defaults',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return Object.assign({}, PICKER_DEFAULTS);
            },
            enumerable: true
        }, {
            key: 'options',
            decorators: [_aureliaFramework.bindable],
            initializer: function initializer() {
                return null;
            },
            enumerable: true
        }], null, _instanceInitializers);

        function PickerElement(element) {
            _classCallCheck(this, _PickerElement);

            _defineDecoratedPropertyDescriptor(this, 'defaults', _instanceInitializers);

            _defineDecoratedPropertyDescriptor(this, 'options', _instanceInitializers);

            this.cols = [];
            this.initialize = false;

            this.element = element;
        }

        _createDecoratedClass(PickerElement, [{
            key: 'attached',
            value: function attached() {}
        }, {
            key: 'optionsChanged',
            value: function optionsChanged(options) {
                options && Object.assign(this.options, this.defaults);
            }
        }, {
            key: 'setValue',
            value: function setValue(arrValues, transition) {
                var valueIndex = 0;
                if (this.cols.length === 0) {
                    this.value = arrValues;
                    this.updateValue(arrValues);
                    return;
                }
                for (var index in this.cols) {
                    if (this.cols[index] && !this.cols[index].divider) {
                        this.cols[index].setValue(arrValues[valueIndex], transition);
                        valueIndex++;
                    }
                }
            }
        }, {
            key: 'updateValue',
            value: function updateValue(forceValues) {
                var newValue = forceValues || [];
                var newDisplayValue = [];
                for (var index in this.cols) {
                    if (!this.cols[index].divider) {
                        newValue.push(this.cols[index].value);
                        newDisplayValue.push(this.cols[index].displayValue);
                    }
                }

                if (newValue.indexOf(undefined) >= 0) return;

                this.value = newValue;
                this.displayValue = newDisplayValue;

                if (this.params.onChange) {
                    this.params.onChange(this, this.value, this.displayValue);
                }

                if (this.input && this.input.length > 0) {
                    ai(this.input).val(this.params.formatValue ? this.params.formatValue(this, this.value, this.displayValue) : this.value.join(' '));
                    ai(this.input).trigger('change');
                }
            }
        }, {
            key: 'initPickerCol',
            value: function initPickerCol(colElement, updateItems) {}
        }], null, _instanceInitializers);

        var _PickerElement = PickerElement;
        PickerElement = (0, _aureliaFramework.inject)(Element)(PickerElement) || PickerElement;
        PickerElement = (0, _aureliaFramework.customElement)('ai-picker')(PickerElement) || PickerElement;
        return PickerElement;
    })();

    exports.PickerElement = PickerElement;
});
//# sourceMappingURL=data:application/json;base64,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QUFFN0Msb0JBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBQ3RCLG9CQUFJLENBQUMsWUFBWSxHQUFHLGVBQWUsQ0FBQzs7QUFFcEMsb0JBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7QUFDdEIsd0JBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztpQkFDN0Q7O0FBRUQsb0JBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDckMsc0JBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2xJLHNCQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDcEM7YUFDRjs7O21CQUVZLHVCQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsRUFFdEM7Ozs2QkE1RFUsYUFBYTtBQUFiLHFCQUFhLEdBRHpCLHNCQTdCZ0MsTUFBTSxFQTZCL0IsT0FBTyxDQUFDLENBQ0gsYUFBYSxLQUFiLGFBQWE7QUFBYixxQkFBYSxHQUZ6QixzQkE1Qk8sYUFBYSxFQTRCTixXQUFXLENBQUMsQ0FFZCxhQUFhLEtBQWIsYUFBYTtlQUFiLGFBQWEiLCJmaWxlIjoiZWxlbWVudHMvcGlja2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmNvbnN0IFBJQ0tFUl9ERUZBVUxUUyA9IHtcbiAgdXBkYXRlVmFsdWVzT25Nb21lbnR1bTogZmFsc2UsXG4gIHVwZGF0ZVZhbHVlc09uVG91Y2htb3ZlOiB0cnVlLFxuICByb3RhdGVFZmZlY3Q6IGZhbHNlLFxuICBtb21lbnR1bVJhdGlvOiA3LFxuICBmcmVlTW9kZTogZmFsc2UsXG4gIC8vIENvbW1vbiBzZXR0aW5nc1xuICBjbG9zZUJ5T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBzY3JvbGxUb0lucHV0OiB0cnVlLFxuICBpbnB1dFJlYWRPbmx5OiB0cnVlLFxuICBjb252ZXJ0VG9Qb3BvdmVyOiB0cnVlLFxuICBvbmx5SW5Qb3BvdmVyOiBmYWxzZSxcbiAgdG9vbGJhcjogdHJ1ZSxcbiAgdG9vbGJhckNsb3NlVGV4dDogJ0RvbmUnLFxuICB0b29sYmFyVGVtcGxhdGU6XG4gICAgICAnPGRpdiBjbGFzcz1cInRvb2xiYXJcIj4nICtcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cInRvb2xiYXItaW5uZXJcIj4nICtcbiAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJsZWZ0XCI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicmlnaHRcIj4nICtcbiAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiI1wiIGNsYXNzPVwibGluayBjbG9zZS1waWNrZXJcIj57e2Nsb3NlVGV4dH19PC9hPicgK1xuICAgICAgICAgICAgICAnPC9kaXY+JyArXG4gICAgICAgICAgJzwvZGl2PicgK1xuICAgICAgJzwvZGl2Pidcbn07XG5cblxuQGN1c3RvbUVsZW1lbnQoJ2FpLXBpY2tlcicpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgUGlja2VyRWxlbWVudCB7XG4gIEBiaW5kYWJsZSBkZWZhdWx0cyA9IE9iamVjdC5hc3NpZ24oe30sIFBJQ0tFUl9ERUZBVUxUUyk7XG4gIEBiaW5kYWJsZSBvcHRpb25zID0gbnVsbDtcblxuICBjb2xzID0gW107XG4gIGluaXRpYWxpemUgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICB9XG5cbiAgYXR0YWNoZWQoKXt9XG5cbiAgb3B0aW9uc0NoYW5nZWQob3B0aW9ucykge1xuICAgIG9wdGlvbnMgJiYgT2JqZWN0LmFzc2lnbih0aGlzLm9wdGlvbnMsIHRoaXMuZGVmYXVsdHMpO1xuICB9XG5cbiAgc2V0VmFsdWUoYXJyVmFsdWVzLCB0cmFuc2l0aW9uKSB7XG4gICAgdmFyIHZhbHVlSW5kZXggPSAwO1xuICAgIGlmICh0aGlzLmNvbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBhcnJWYWx1ZXM7XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoYXJyVmFsdWVzKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLmNvbHMpIHtcbiAgICAgICAgaWYgKHRoaXMuY29sc1tpbmRleF0gJiYgIXRoaXMuY29sc1tpbmRleF0uZGl2aWRlcikge1xuICAgICAgICAgICAgdGhpcy5jb2xzW2luZGV4XS5zZXRWYWx1ZShhcnJWYWx1ZXNbdmFsdWVJbmRleF0sIHRyYW5zaXRpb24pO1xuICAgICAgICAgICAgdmFsdWVJbmRleCsrO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlVmFsdWUoZm9yY2VWYWx1ZXMpIHtcbiAgICB2YXIgbmV3VmFsdWUgPSBmb3JjZVZhbHVlcyB8fCBbXTtcbiAgICB2YXIgbmV3RGlzcGxheVZhbHVlID0gW107XG4gICAgZm9yIChsZXQgaW5kZXggaW4gdGhpcy5jb2xzKSB7XG4gICAgICBpZiAoIXRoaXMuY29sc1tpbmRleF0uZGl2aWRlcikge1xuICAgICAgICBuZXdWYWx1ZS5wdXNoKHRoaXMuY29sc1tpbmRleF0udmFsdWUpO1xuICAgICAgICBuZXdEaXNwbGF5VmFsdWUucHVzaCh0aGlzLmNvbHNbaW5kZXhdLmRpc3BsYXlWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbHVlLmluZGV4T2YodW5kZWZpbmVkKSA+PSAwKSByZXR1cm47XG5cbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgdGhpcy5kaXNwbGF5VmFsdWUgPSBuZXdEaXNwbGF5VmFsdWU7XG5cbiAgICBpZiAodGhpcy5wYXJhbXMub25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5wYXJhbXMub25DaGFuZ2UodGhpcywgdGhpcy52YWx1ZSwgdGhpcy5kaXNwbGF5VmFsdWUpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQubGVuZ3RoID4gMCkge1xuICAgICAgICBhaSh0aGlzLmlucHV0KS52YWwodGhpcy5wYXJhbXMuZm9ybWF0VmFsdWUgPyB0aGlzLnBhcmFtcy5mb3JtYXRWYWx1ZSh0aGlzLCB0aGlzLnZhbHVlLCB0aGlzLmRpc3BsYXlWYWx1ZSkgOiB0aGlzLnZhbHVlLmpvaW4oJyAnKSk7XG4gICAgICAgIGFpKHRoaXMuaW5wdXQpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgIH1cbiAgfVxuXG4gIGluaXRQaWNrZXJDb2woY29sRWxlbWVudCwgdXBkYXRlSXRlbXMpIHtcblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
