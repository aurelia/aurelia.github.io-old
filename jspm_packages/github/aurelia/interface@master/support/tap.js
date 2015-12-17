/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var __ai, __tap, __util, __iselement;

  var config = {
    doc: undefined,

    activeEle: undefined,

    enabledTouchEvents: undefined,

    mouseResetTimer: undefined,

    pointerMoved: undefined,

    pointerStart: undefined,

    touchFocusedInput: undefined,

    lastTouchTarget: undefined,

    touchMoveListener: 'touchmove'
  };

  var defaults = {
    RELEASE_TOLERANCE: 12,

    RELEASE_BUTTON_TOLERANCE: 50
  };

  var TAP_EVENT_LISTENERS = {
    'click': tapClickGateKeeper,

    'mousedown': tapMouseDown,
    'mouseup': tapMouseUp,
    'mousemove': tapMouseMove,

    'touchstart': tapTouchStart,
    'touchend': tapTouchEnd,
    'touchcancel': tapTouchCancel,
    'touchmove': tapTouchMove,

    'pointerdown': tapTouchStart,
    'pointerup': tapTouchEnd,
    'pointercancel': tapTouchCancel,
    'pointermove': tapTouchMove,

    'MSPointerDown': tapTouchStart,
    'MSPointerUp': tapTouchEnd,
    'MSPointerCancel': tapTouchCancel,
    'MSPointerMove': tapTouchMove,

    'focusin': tapFocusIn,
    'focusout': tapFocusOut
  };

  var InterfaceTapUtil = (function () {
    function InterfaceTapUtil() {
      _classCallCheck(this, InterfaceTapUtil);
    }

    _createClass(InterfaceTapUtil, [{
      key: 'requiresNativeClick',
      value: function requiresNativeClick(element) {
        if (!element || element.disabled || /^(file|range)$/i.test(element.type) || /^(object|video)$/i.test(element.tagName) || __iselement.isLabelContainingFileInput(element)) {
          return true;
        }
        return __iselement.isElementTapDisabled(element);
      }
    }, {
      key: 'pointerCoord',
      value: function pointerCoord(event) {
        var c = { x: 0, y: 0 };
        if (event) {
          var touches = event.touches && event.touches.length ? event.touches : [event];
          var e = event.changedTouches && event.changedTouches[0] || touches[0];
          if (e) {
            c.x = e.clientX || e.pageX || 0;
            c.y = e.clientY || e.pageY || 0;
          }
        }
        return c;
      }
    }, {
      key: 'activeElement',
      value: function activeElement(ele) {
        if (arguments.length) {
          config.activeEle = ele;
        }
        return config.activeEle || document.activeElement;
      }
    }, {
      key: 'hasPointerMoved',
      value: function hasPointerMoved(endEvent) {
        if (!endEvent || endEvent.target.nodeType !== 1 || !config.pointerStart || config.pointerStart.x === 0 && config.pointerStart.y === 0) {
          return false;
        }
        var endCoordinates = __util.pointerCoord(endEvent);

        var hasClassList = !!(endEvent.target.classList && endEvent.target.classList.contains && typeof endEvent.target.classList.contains === 'function');
        var releaseTolerance = hasClassList && endEvent.target.classList.contains('button') ? defaults.RELEASE_BUTTON_TOLERANCE : defaults.RELEASE_TOLERANCE;

        return Math.abs(config.pointerStart.x - endCoordinates.x) > releaseTolerance || Math.abs(config.pointerStart.y - endCoordinates.y) > releaseTolerance;
      }
    }, {
      key: 'containingElement',
      value: function containingElement(element, allowSelf) {
        var climbEle = element;
        for (var x = 0; x < 6; x++) {
          if (!climbEle) break;
          if (climbEle.tagName === 'LABEL') return climbEle;
          climbEle = climbEle.parentElement;
        }
        if (allowSelf !== false) return element;
      }
    }, {
      key: 'targetElement',
      value: function targetElement(element) {
        if (element && element.tagName === 'LABEL') {
          if (element.control) return element.control;

          if (element.querySelector) {
            var control = element.querySelector('input,textarea,select');
            if (control) return control;
          }
        }
        return element;
      }
    }]);

    return InterfaceTapUtil;
  })();

  exports.InterfaceTapUtil = InterfaceTapUtil;
  ;

  var InterfaceTapIsElement = (function () {
    function InterfaceTapIsElement() {
      _classCallCheck(this, InterfaceTapIsElement);
    }

    _createClass(InterfaceTapIsElement, [{
      key: 'isElementTapDisabled',
      value: function isElementTapDisabled(element) {
        if (element && element.nodeType === 1) {
          while (element) {
            if ((element.dataset ? element.dataset.tapDisabled : element.getAttribute('data-tap-disabled')) == 'true') {
              return true;
            }
            element = element.parentElement;
          }
        }
        return false;
      }
    }, {
      key: 'isLabelContainingFileInput',
      value: function isLabelContainingFileInput(element) {
        var labelElement = __util.containingElement(element);
        if (labelElement.tagName !== 'LABEL') return false;
        var fileInput = labelElement.querySelector('input[type=file]');
        if (fileInput && fileInput.disabled === false) return true;
        return false;
      }
    }, {
      key: 'isTextInput',
      value: function isTextInput(element) {
        return !!element && (element.tagName == 'TEXTAREA' || element.contentEditable === 'true' || element.tagName == 'INPUT' && !/^(radio|checkbox|range|file|submit|reset|color|image|button)$/i.test(element.type));
      }
    }, {
      key: 'isDateInput',
      value: function isDateInput(element) {
        return !!element && element.tagName == 'INPUT' && /^(date|time|datetime-local|month|week)$/i.test(element.type);
      }
    }, {
      key: 'isKeyboardElement',
      value: function isKeyboardElement(element) {
        if (!__ai.platform.isIOS() || __ai.platform.isIPad()) {
          return __tap.element.isTextInput(element) && !__iselement.isDateInput(element);
        } else {
          return __iselement.isTextInput(element) || !!element && element.tagName == "SELECT";
        }
      }
    }, {
      key: 'isLabelWithTextInput',
      value: function isLabelWithTextInput(element) {
        var container = __util.containingElement(element, false);

        return !!container && __iselement.isTextInput(__util.targetElement(container));
      }
    }, {
      key: 'containsOrIsTextInput',
      value: function containsOrIsTextInput(element) {
        return __iselement.isTextInput(element) || __iselement.isLabelWithTextInput(element);
      }
    }]);

    return InterfaceTapIsElement;
  })();

  exports.InterfaceTapIsElement = InterfaceTapIsElement;

  var InterfaceTapSupport = (function () {
    function InterfaceTapSupport(aureliaInterface) {
      _classCallCheck(this, InterfaceTapSupport);

      this.config = config;
      this.hasCheckedClone = false;

      __ai = aureliaInterface;
      __tap = this;
      __util = new InterfaceTapUtil();
      __iselement = new InterfaceTapIsElement();

      this.ai = __ai;
      this.util = __util;
      this.iselement = __iselement;

      return this;
    }

    _createClass(InterfaceTapSupport, [{
      key: 'register',
      value: function register(element) {
        config.doc = element;
        tapEventListener('click', true, true);
        tapEventListener('mouseup');
        tapEventListener('mousedown');

        if (window.navigator.pointerEnabled) {
          tapEventListener('pointerdown');
          tapEventListener('pointerup');
          tapEventListener('pointcancel');
          config.touchMoveListener = 'pointermove';
        } else if (window.navigator.msPointerEnabled) {
          tapEventListener('MSPointerDown');
          tapEventListener('MSPointerUp');
          tapEventListener('MSPointerCancel');
          config.touchMoveListener = 'MSPointerMove';
        } else {
          tapEventListener('touchstart');
          tapEventListener('touchend');
          tapEventListener('touchcancel');
        }

        tapEventListener('focusin');
        tapEventListener('focusout');

        return function () {
          for (var type in TAP_EVENT_LISTENERS) {
            tapEventListener(type, false);
          }
          config.doc = null;
          config.activeEle = null;
          config.enabledTouchEvents = false;
          config.pointerMoved = false;
          config.pointerStart = null;
        };
      }
    }, {
      key: 'ignoreScrollStart',
      value: function ignoreScrollStart(e) {
        return e.defaultPrevented || /^(file|range)$/i.test(e.target.type) || (e.target.dataset ? e.target.dataset.preventScroll : e.target.getAttribute('data-prevent-scroll')) == 'true' || !!/^(object|embed)$/i.test(e.target.tagName) || __iselement.isElementTapDisabled(e.target);
      }
    }, {
      key: 'removeClonedInputs',
      value: function removeClonedInputs(container) {
        this.hasCheckedClone = false;

        __ai.requestAnimationFrame(function () {
          var clonedInputs = container.querySelectorAll('.cloned-text-input');
          var previousInputFocus = container.querySelectorAll('.previous-input-focus');
          var x;

          for (x = 0; x < clonedInputs.length; x++) {
            clonedInputs[x].parentElement.removeChild(clonedInputs[x]);
          }

          for (x = 0; x < previousInputFocus.length; x++) {
            previousInputFocus[x].classList.remove('previous-input-focus');
            previousInputFocus[x].style.top = '';
            if (__ai.keyboard.isOpen && !__ai.keyboard.isClosing) previousInputFocus[x].focus();
          }
        });
      }
    }, {
      key: 'cloneFocusedInput',
      value: function cloneFocusedInput(container) {
        if (this.hasCheckedClone) return;
        this.hasCheckedClone = true;

        __ai.requestAnimationFrame(function () {
          var focusInput = container.querySelector(':focus');
          if (__iselement.isTextInput(focusInput) && !__iselement.isDateInput(focusInput)) {
            var clonedInput = focusInput.cloneNode(true);

            clonedInput.value = focusInput.value;
            clonedInput.classList.add('cloned-text-input');
            clonedInput.readOnly = true;
            if (focusInput.isContentEditable) {
              clonedInput.contentEditable = focusInput.contentEditable;
              clonedInput.innerHTML = focusInput.innerHTML;
            }
            focusInput.parentElement.insertBefore(clonedInput, focusInput);
            focusInput.classList.add('previous-input-focus');

            clonedInput.scrollTop = focusInput.scrollTop;
          }
        });
      }
    }, {
      key: 'setTolerance',
      value: function setTolerance(releaseTolerance, releaseButtonTolerance) {
        defaults.RELEASE_TOLERANCE = releaseTolerance;
        defaults.RELEASE_BUTTON_TOLERANCE = releaseButtonTolerance;
      }
    }, {
      key: 'cancelClick',
      value: function cancelClick() {
        config.pointerMoved = true;
      }
    }]);

    return InterfaceTapSupport;
  })();

  exports.InterfaceTapSupport = InterfaceTapSupport;

  function tapEventListener(type, enable, useCapture) {
    if (enable !== false) {
      config.doc.addEventListener(type, TAP_EVENT_LISTENERS[type], useCapture);
    } else {
      config.doc.removeEventListener(type, TAP_EVENT_LISTENERS[type]);
    }
  }

  function tapClick(e) {
    var container = __util.containingElement(e.target);
    var ele = __util.targetElement(container);

    if (__util.requiresNativeClick(ele) || config.pointerMoved) return false;

    var c = __util.pointerCoord(e);

    triggerMouseEvent('click', ele, c.x, c.y);

    tapHandleFocus(ele);
  }

  function triggerMouseEvent(type, ele, x, y) {
    var clickEvent = document.createEvent("MouseEvents");
    clickEvent.initMouseEvent(type, true, true, window, 1, 0, 0, x, y, false, false, false, false, 0, null);
    clickEvent.isAiTap = true;
    ele.dispatchEvent(clickEvent);
  }

  function tapClickGateKeeper(e) {
    if (e.target.type == 'submit' && e.detail === 0) {
      return null;
    }

    if (__ai.scroll.isScrolling && __util.containsOrIsTextInput(e.target) || !e.isAiTap && !__util.requiresNativeClick(e.target)) {
      e.stopPropagation();

      if (!__iselement.isLabelWithTextInput(e.target)) {
        e.preventDefault();
      }
      return false;
    }
  }

  function tapMouseDown(e) {
    if (e.isAiTap || tapIgnoreEvent(e)) return null;

    if (config.enabledTouchEvents) {
      console.log('mousedown', 'stop event');
      e.stopPropagation();

      if ((!__iselement.isTextInput(e.target) || config.lastTouchTarget !== e.target) && !/^(select|option)$/i.test(e.target.tagName)) {
        e.preventDefault();
      }

      return false;
    }

    config.pointerMoved = false;
    config.pointerStart = __util.pointerCoord(e);

    tapEventListener('mousemove');
    __ai.tapActivator.start(e);
  }

  function tapMouseUp(e) {
    if (config.enabledTouchEvents) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }

    if (tapIgnoreEvent(e) || /^(select|option)$/i.test(e.target.tagName)) return false;

    if (!__util.hasPointerMoved(e)) {
      tapClick(e);
    }
    tapEventListener('mousemove', false);
    __ai.tapActivator.end();
    config.pointerMoved = false;
  }

  function tapMouseMove(e) {
    if (__util.hasPointerMoved(e)) {
      tapEventListener('mousemove', false);
      __ai.tapActivator.end();
      config.pointerMoved = true;
      return false;
    }
  }

  function tapTouchStart(e) {
    if (tapIgnoreEvent(e)) return;

    config.pointerMoved = false;

    tapEnableTouchEvents();
    config.pointerStart = __util.pointerCoord(e);

    tapEventListener(config.touchMoveListener);
    __ai.tapActivator.start(e);

    if (__ai.platform.isIOS() && __iselement.isLabelWithTextInput(e.target)) {

      var textInput = __util.targetElement(__util.containingElement(e.target));
      if (textInput !== tapActiveEle) {
        e.preventDefault();
      }
    }
  }

  function tapTouchEnd(e) {
    if (tapIgnoreEvent(e)) return;

    tapEnableTouchEvents();
    if (!__util.hasPointerMoved(e)) {
      tapClick(e);

      if (/^(select|option)$/i.test(e.target.tagName)) {
        e.preventDefault();
      }
    }

    config.lastTouchTarget = e.target;
    tapTouchCancel();
  }

  function tapTouchMove(e) {
    if (__util.hasPointerMoved(e)) {
      config.pointerMoved = true;
      tapEventListener(config.touchMoveListener, false);
      __ai.tapActivator.end();
      return false;
    }
  }

  function tapTouchCancel() {
    tapEventListener(config.touchMoveListener, false);
    __ai.tapActivator.end();
    config.pointerMoved = false;
  }

  function tapEnableTouchEvents() {
    config.enabledTouchEvents = true;
    clearTimeout(config.mouseResetTimer);
    config.mouseResetTimer = setTimeout(function () {
      config.enabledTouchEvents = false;
    }, 600);
  }

  function tapIgnoreEvent(e) {
    if (e.isTapHandled) return true;
    e.isTapHandled = true;

    if (__ai.scroll.isScrolling && __util.containsOrIsTextInput(e.target)) {
      e.preventDefault();
      return true;
    }
  }

  function tapHandleFocus(ele) {
    config.touchFocusedInput = null;

    var triggerFocusIn = false;

    if (ele.tagName == 'SELECT') {
      triggerMouseEvent('mousedown', ele, 0, 0);
      ele.focus && ele.focus();
      triggerFocusIn = true;
    } else if (__util.activeElement() === ele) {
      triggerFocusIn = true;
    } else if (/^(input|textarea)$/i.test(ele.tagName) || ele.isContentEditable) {
      triggerFocusIn = true;
      ele.focus && ele.focus();
      ele.value = ele.value;
      if (config.enabledTouchEvents) {
        config.touchFocusedInput = ele;
      }
    } else {
      tapFocusOutActive();
    }

    if (triggerFocusIn) {
      __util.activeElement(ele);
      __ai.trigger('ai.focusin', {
        target: ele
      }, true);
    }
  }

  function tapFocusOutActive() {
    var ele = __util.activeElement();
    if (ele && (/^(input|textarea|select)$/i.test(ele.tagName) || ele.isContentEditable)) {
      console.log('tapFocusOutActive', ele.tagName);
      ele.blur();
    }
    __util.activeElement(null);
  }

  function tapFocusIn(e) {

    if (config.enabledTouchEvents && __iselement.isTextInput(__util.activeElement()) && __iselement.isTextInput(config.touchFocusedInput) && config.touchFocusedInput !== e.target) {
      console.log('focusin', 'config.touchFocusedInput');
      config.touchFocusedInput.focus();
      config.touchFocusedInput = null;
    }
    __ai.scroll.isScrolling = false;
  }

  function tapFocusOut() {
    __util.activeElement(null);
  }
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7R0FDNUI7O0FBRUQsV0FBUyxVQUFVLENBQUMsQ0FBQyxFQUFFOztBQU1yQixRQUFJLE1BQU0sQ0FBQyxrQkFBa0IsSUFDekIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsSUFDL0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsaUJBQWlCLENBQUMsSUFDakQsTUFBTSxDQUFDLGlCQUFpQixLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUU7QUFNekMsYUFBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsMEJBQTBCLENBQUMsQ0FBQztBQUNuRCxZQUFNLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDakMsWUFBTSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztLQUNqQztBQUNELFFBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztHQUNqQzs7QUFFRCxXQUFTLFdBQVcsR0FBRztBQUVyQixVQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBQzVCIiwiZmlsZSI6InN1cHBvcnQvdGFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXJlbGlhIEludGVyZmFjZSBUYXAgU3VwcG9ydFxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogT24gdG91Y2ggZGV2aWNlcyBzdWNoIGFzIGEgcGhvbmUgb3IgdGFibGV0LCBzb21lIGJyb3dzZXJzIGltcGxlbWVudCBhIDMwMG1zIGRlbGF5IGJldHdlZW5cbiAqIHRoZSB0aW1lIHRoZSB1c2VyIHN0b3BzIHRvdWNoaW5nIHRoZSBkaXNwbGF5IGFuZCB0aGUgbW9tZW50IHRoZSBicm93c2VyIGV4ZWN1dGVzIHRoZVxuICogY2xpY2suIFRoaXMgZGVsYXkgd2FzIGluaXRpYWxseSBpbnRyb2R1Y2VkIHNvIHRoZSBicm93c2VyIGNhbiBrbm93IHdoZXRoZXIgdGhlIHVzZXIgd2FudHMgdG9cbiAqIGRvdWJsZS10YXAgdG8gem9vbSBpbiBvbiB0aGUgd2VicGFnZS4gIEJhc2ljYWxseSwgdGhlIGJyb3dzZXIgd2FpdHMgcm91Z2hseSAzMDBtcyB0byBzZWUgaWZcbiAqIHRoZSB1c2VyIGlzIGRvdWJsZS10YXBwaW5nLCBvciBqdXN0IHRhcHBpbmcgb24gdGhlIGRpc3BsYXkgb25jZS5cbiAqXG4gKiBPdXQgb2YgdGhlIGJveCwgQXVyZWxpYSBJbnRlcmZhY2UgYXV0b21hdGljYWxseSByZW1vdmVzIHRoZSAzMDBtcyBkZWxheSBpbiBvcmRlciB0byBtYWtlXG4gKiBDcm9zcy1QbGF0Zm9ybSBhcHBzIGZlZWwgbW9yZSBcIm5hdGl2ZVwiIGxpa2UuIFJlc3VsdGluZ2x5LCBvdGhlciBzb2x1dGlvbnMgc3VjaCBhc1xuICogW2Zhc3RjbGlja10oaHR0cHM6Ly9naXRodWIuY29tL2Z0bGFicy9mYXN0Y2xpY2spIGFuZCBBbmd1bGFyJ3NcbiAqIFtuZ1RvdWNoXShodHRwczovL2RvY3MuYW5ndWxhcmpzLm9yZy9hcGkvbmdUb3VjaCkgc2hvdWxkIG5vdCBiZSBpbmNsdWRlZCwgdG8gYXZvaWQgY29uZmxpY3RzLlxuICpcbiAqIFNvbWUgYnJvd3NlcnMgYWxyZWFkeSByZW1vdmUgdGhlIGRlbGF5IHdpdGggY2VydGFpbiBzZXR0aW5ncywgc3VjaCBhcyB0aGUgQ1NTIHByb3BlcnR5XG4gKiBgdG91Y2gtZXZlbnRzOiBub25lYCBvciB3aXRoIHNwZWNpZmljIG1ldGEgdGFnIHZpZXdwb3J0IHZhbHVlcy4gSG93ZXZlciwgZWFjaCBvZiB0aGVzZVxuICogYnJvd3NlcnMgc3RpbGwgaGFuZGxlIGNsaWNrcyBkaWZmZXJlbnRseSwgc3VjaCBhcyB3aGVuIHRvIGZpcmUgb2ZmIG9yIGNhbmNlbCB0aGUgZXZlbnRcbiAqIChsaWtlIHNjcm9sbGluZyB3aGVuIHRoZSB0YXJnZXQgaXMgYSBidXR0b24sIG9yIGhvbGRpbmcgYSBidXR0b24gZG93bikuXG4gKiBGb3IgYnJvd3NlcnMgdGhhdCBhbHJlYWR5IHJlbW92ZSB0aGUgMzAwbXMgZGVsYXksIGNvbnNpZGVyIEFJJ3MgdGFwIHN5c3RlbSBhcyBhIHdheSB0b1xuICogbm9ybWFsaXplIGhvdyBjbGlja3MgYXJlIGhhbmRsZWQgYWNyb3NzIHRoZSB2YXJpb3VzIGRldmljZXMgc28gdGhlcmUncyBhbiBleHBlY3RlZCByZXNwb25zZVxuICogbm8gbWF0dGVyIHdoYXQgdGhlIGRldmljZSwgcGxhdGZvcm0gb3IgdmVyc2lvbi4gQWRkaXRpb25hbGx5LCBBSSB3aWxsIHByZXZlbnRcbiAqIGdob3N0Y2xpY2tzIHdoaWNoIGV2ZW4gYnJvd3NlcnMgdGhhdCByZW1vdmUgdGhlIGRlbGF5IHN0aWxsIGV4cGVyaWVuY2UuXG4gKlxuICogSW4gc29tZSBjYXNlcywgdGhpcmQtcGFydHkgbGlicmFyaWVzIG1heSBhbHNvIGJlIHdvcmtpbmcgd2l0aCB0b3VjaCBldmVudHMgd2hpY2ggY2FuIGludGVyZmVyZVxuICogd2l0aCB0aGUgdGFwIHN5c3RlbS4gRm9yIGV4YW1wbGUsIG1hcHBpbmcgbGlicmFyaWVzIGxpa2UgR29vZ2xlIG9yIExlYWZsZXQgTWFwcyBvZnRlbiBpbXBsZW1lbnRcbiAqIGEgdG91Y2ggZGV0ZWN0aW9uIHN5c3RlbSB3aGljaCBjb25mbGljdHMgd2l0aCBBSSdzIHRhcCBzeXN0ZW0uXG4gKlxuICogIyMjIERpc2FibGluZyB0aGUgdGFwIHN5c3RlbVxuICpcbiAqIFRvIGRpc2FibGUgdGhlIHF1aWNrIHRvdWNoIGZvciBhbiBlbGVtZW50IGFuZCBhbGwgb2YgaXRzIGNoaWxkcmVuIGVsZW1lbnRzLFxuICogYWRkIHRoZSBhdHRyaWJ1dGUgYGFpLXRhcC1kaXNhYmxlZD1cInRydWVcImAuXG4gKlxuICogYGBgaHRtbFxuICogPGRpdiBhaS10YXAtZGlzYWJsZWQ9XCJ0cnVlXCI+PC9kaXY+XG4gKiBgYGBcbiAqXG4gKiAjIyMgQWRkaXRpb25hbCBOb3RlczpcbiAqXG4gKiAtIEFJIFRBUCB3b3JrcyB3aXRoIEF1cmVsaWEgSW50ZXJmYWNlJ3MgU2Nyb2xsaW5nIFN5c3RlbVxuICogLSBFbGVtZW50cyBjYW4gY29tZSBhbmQgZ28gZnJvbSB0aGUgRE9NIGFuZCBhaS10YXAgZG9lc24ndCBrZWVwIGFkZGluZyBhbmQgcmVtb3ZpbmdcbiAqICAgbGlzdGVuZXJzXG4gKiAtIE5vIFwidGFwIGRlbGF5XCIgYWZ0ZXIgdGhlIGZpcnN0IFwidGFwXCIgKHlvdSBjYW4gdGFwIGFzIGZhc3QgYXMgeW91IHdhbnQsIHRoZXkgYWxsIGNsaWNrKVxuICogLSBNaW5pbWFsIGV2ZW50cyBsaXN0ZW5lcnMsIG9ubHkgYmVpbmcgYWRkZWQgdG8gZG9jdW1lbnRcbiAqIC0gQ29ycmVjdCBmb2N1cyBpbi9vdXQgb24gZWFjaCBpbnB1dCB0eXBlIChzZWxlY3QsIHRleHRlYXJlYSwgcmFuZ2UpIG9uIGVhY2ggcGxhdGZvcm0vZGV2aWNlXG4gKiAtIFNob3dzIGFuZCBoaWRlcyB2aXJ0dWFsIGtleWJvYXJkIGNvcnJlY3RseSBmb3IgZWFjaCBwbGF0Zm9ybS9kZXZpY2VcbiAqIC0gV29ya3Mgd2l0aCBsYWJlbHMgc3Vycm91bmRpbmcgaW5wdXRzXG4gKiAtIERvZXMgbm90IGZpcmUgb2ZmIGEgY2xpY2sgaWYgdGhlIHVzZXIgbW92ZXMgdGhlIHBvaW50ZXIgdG9vIGZhclxuICogLSBBZGRzIGFuZCByZW1vdmVzIGFuICdhY3RpdmF0ZWQnIGNzcyBjbGFzc1xuICpcbiAqL1xuLypcblxuIEFJIFRBUFxuIC0tLS0tLS0tLS0tLS0tLVxuIC0gQm90aCB0b3VjaCBhbmQgbW91c2UgZXZlbnRzIGFyZSBhZGRlZCB0byB0aGUgZG9jdW1lbnQuYm9keSBvbiBET00gcmVhZHlcbiAtIElmIGEgdG91Y2ggZXZlbnQgaGFwcGVucywgaXQgZG9lcyBub3QgdXNlIG1vdXNlIGV2ZW50IGxpc3RlbmVyc1xuIC0gT24gdG91Y2hlbmQsIGlmIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHN0YXJ0IGFuZCBlbmQgd2FzIHNtYWxsLCB0cmlnZ2VyIGEgY2xpY2tcbiAtIEluIHRoZSB0cmlnZ2VyZWQgY2xpY2sgZXZlbnQsIGFkZCBhICdpc0FpVGFwJyBwcm9wZXJ0eVxuIC0gVGhlIHRyaWdnZXJlZCBjbGljayByZWNlaXZlcyB0aGUgc2FtZSB4LHkgY29vcmRpbmF0ZXMgYXMgYXMgdGhlIGVuZCBldmVudFxuIC0gT24gZG9jdW1lbnQuYm9keSBjbGljayBsaXN0ZW5lciAod2l0aCB1c2VDYXB0dXJlPXRydWUpLCBvbmx5IGFsbG93IGNsaWNrcyB3aXRoICdpc0FpVGFwJ1xuIC0gVHJpZ2dlcmluZyBjbGlja3Mgd2l0aCBtb3VzZSBldmVudHMgd29yayB0aGUgc2FtZSBhcyB0b3VjaCwgZXhjZXB0IHdpdGggbW91c2Vkb3duL21vdXNldXBcbiAtIFRhcHBpbmcgaW5wdXRzIGlzIGRpc2FibGVkIGR1cmluZyBzY3JvbGxpbmdcbiovXG52YXIgX19haSwgX190YXAsIF9fdXRpbCwgX19pc2VsZW1lbnQ7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLyoqXG4gICAqIFByb3BlcnR5OiBkb2NcbiAgICogQGRlc2NyaXB0aW9uIHRoZSBlbGVtZW50IHdoaWNoIHRoZSBsaXN0ZW5lcnMgYXJlIG9uIChkb2N1bWVudC5ib2R5KVxuICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICovXG4gIGRvYzogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogYWN0aXZlRWxlXG4gICAqIEBkZXNjcmlwdGlvbiB0aGUgZWxlbWVudCB3aGljaCBpcyBhY3RpdmUgKHByb2JhYmx5IGhhcyBmb2N1cylcbiAgICogQHR5cGUge0VsZW1lbnR9XG4gICAqL1xuICBhY3RpdmVFbGU6IHVuZGVmaW5lZCxcblxuICAvKipcbiAgICogUHJvcGVydHk6IGVuYWJsZWRUb3VjaEV2ZW50c1xuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gRmxhZyBmb3IgZW5hYmxpbmcgdG91Y2ggZm9jdXNcbiAgICogQHR5cGUge0Jvb2xlYW59XG4gICAqL1xuICBlbmFibGVkVG91Y2hFdmVudHM6IHVuZGVmaW5lZCxcblxuICAvKipcbiAgICogUHJvcGVydHk6IG1vdXNlUmVzZXRUaW1lclxuICAgKiBAdHlwZSB7VGltZXN0YW1wfVxuICAgKi9cbiAgbW91c2VSZXNldFRpbWVyOiB1bmRlZmluZWQsXG5cbiAgLyoqXG4gICAqIFByb3BlcnR5OiBwb2ludGVyTW92ZWRcbiAgICovXG4gIHBvaW50ZXJNb3ZlZDogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogcG9pbnRlclN0YXJ0XG4gICAqL1xuICBwb2ludGVyU3RhcnQ6IHVuZGVmaW5lZCxcblxuICAvKipcbiAgICogUHJvcGVydHk6IHRvdWNoRm9jdXNlZElucHV0XG4gICAqL1xuICB0b3VjaEZvY3VzZWRJbnB1dDogdW5kZWZpbmVkLFxuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogbGFzdFRvdWNoVGFyZ2V0XG4gICAqL1xuICBsYXN0VG91Y2hUYXJnZXQ6IHVuZGVmaW5lZCxcblxuICAvKipcbiAgICogUHJvcGVydHk6IHRvdWNoTW92ZUxpc3RlbmVyXG4gICAqL1xuICB0b3VjaE1vdmVMaXN0ZW5lcjogJ3RvdWNobW92ZScsXG59O1xuXG5jb25zdCBkZWZhdWx0cyA9IHtcbiAgLyoqXG4gICAqIEBkZWZhdWx0XG4gICAqIFByb3BlcnR5OiBSRUxFQVNFX1RPTEVSQU5DRSBkZXNjcmlwdGlvbl1cbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIGhvdyBtdWNoIHRoZSBjb29yZGluYXRlcyBjYW4gYmUgb2ZmIGJldHdlZW4gc3RhcnQvZW5kLCBidXQgc3RpbGwgYSBjbGlja1xuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgUkVMRUFTRV9UT0xFUkFOQ0U6IDEyLFxuXG4gIC8qKlxuICAgKiBAZGVmYXVsdFxuICAgKiBQcm9wZXJ0eTogUkVMRUFTRV9CVVRUT05fVE9MRVJBTkNFXG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBidXR0b24gZWxlbWVudHMgc2hvdWxkIGhhdmUgYSBsYXJnZXIgdG9sZXJhbmNlXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBSRUxFQVNFX0JVVFRPTl9UT0xFUkFOQ0U6IDUwXG59O1xuXG5jb25zdCBUQVBfRVZFTlRfTElTVEVORVJTID0ge1xuICAnY2xpY2snOiB0YXBDbGlja0dhdGVLZWVwZXIsXG5cbiAgJ21vdXNlZG93bic6IHRhcE1vdXNlRG93bixcbiAgJ21vdXNldXAnOiB0YXBNb3VzZVVwLFxuICAnbW91c2Vtb3ZlJzogdGFwTW91c2VNb3ZlLFxuXG4gICd0b3VjaHN0YXJ0JzogdGFwVG91Y2hTdGFydCxcbiAgJ3RvdWNoZW5kJzogdGFwVG91Y2hFbmQsXG4gICd0b3VjaGNhbmNlbCc6IHRhcFRvdWNoQ2FuY2VsLFxuICAndG91Y2htb3ZlJzogdGFwVG91Y2hNb3ZlLFxuXG4gICdwb2ludGVyZG93bic6IHRhcFRvdWNoU3RhcnQsXG4gICdwb2ludGVydXAnOiB0YXBUb3VjaEVuZCxcbiAgJ3BvaW50ZXJjYW5jZWwnOiB0YXBUb3VjaENhbmNlbCxcbiAgJ3BvaW50ZXJtb3ZlJzogdGFwVG91Y2hNb3ZlLFxuXG4gICdNU1BvaW50ZXJEb3duJzogdGFwVG91Y2hTdGFydCxcbiAgJ01TUG9pbnRlclVwJzogdGFwVG91Y2hFbmQsXG4gICdNU1BvaW50ZXJDYW5jZWwnOiB0YXBUb3VjaENhbmNlbCxcbiAgJ01TUG9pbnRlck1vdmUnOiB0YXBUb3VjaE1vdmUsXG5cbiAgJ2ZvY3VzaW4nOiB0YXBGb2N1c0luLFxuICAnZm9jdXNvdXQnOiB0YXBGb2N1c091dFxufTtcblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVRhcFV0aWwge1xuXG4gIHJlcXVpcmVzTmF0aXZlQ2xpY2soZWxlbWVudCkge1xuICAgIGlmICghZWxlbWVudCB8fCBlbGVtZW50LmRpc2FibGVkIHx8ICgvXihmaWxlfHJhbmdlKSQvaSkudGVzdChlbGVtZW50LnR5cGUpIHx8ICgvXihvYmplY3R8dmlkZW8pJC9pKS50ZXN0KGVsZW1lbnQudGFnTmFtZSkgfHwgX19pc2VsZW1lbnQuaXNMYWJlbENvbnRhaW5pbmdGaWxlSW5wdXQoZWxlbWVudCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gX19pc2VsZW1lbnQuaXNFbGVtZW50VGFwRGlzYWJsZWQoZWxlbWVudCk7XG4gIH1cblxuXG4gIHBvaW50ZXJDb29yZChldmVudCkge1xuICAgIC8vIFRoaXMgbWV0aG9kIGNhbiBnZXQgY29vcmRpbmF0ZXMgZm9yIGJvdGggYSBtb3VzZSBjbGlja1xuICAgIC8vIG9yIGEgdG91Y2ggZGVwZW5kaW5nIG9uIHRoZSBnaXZlbiBldmVudFxuICAgIHZhciBjID0geyB4OiAwLCB5OiAwIH07XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICB2YXIgdG91Y2hlcyA9IGV2ZW50LnRvdWNoZXMgJiYgZXZlbnQudG91Y2hlcy5sZW5ndGggPyBldmVudC50b3VjaGVzIDogW2V2ZW50XTtcbiAgICAgIHZhciBlID0gKGV2ZW50LmNoYW5nZWRUb3VjaGVzICYmIGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdKSB8fCB0b3VjaGVzWzBdO1xuICAgICAgaWYgKGUpIHtcbiAgICAgICAgYy54ID0gZS5jbGllbnRYIHx8IGUucGFnZVggfHwgMDtcbiAgICAgICAgYy55ID0gZS5jbGllbnRZIHx8IGUucGFnZVkgfHwgMDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGM7XG4gIH1cblxuXG4gIGFjdGl2ZUVsZW1lbnQoZWxlKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZy5hY3RpdmVFbGUgPSBlbGU7XG4gICAgfVxuICAgIHJldHVybiBjb25maWcuYWN0aXZlRWxlIHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBoYXNQb2ludGVyTW92ZWQoZW5kRXZlbnQpIHtcbiAgICBpZiAoIWVuZEV2ZW50IHx8IGVuZEV2ZW50LnRhcmdldC5ub2RlVHlwZSAhPT0gMSB8fCAhY29uZmlnLnBvaW50ZXJTdGFydCB8fCAoY29uZmlnLnBvaW50ZXJTdGFydC54ID09PSAwICYmIGNvbmZpZy5wb2ludGVyU3RhcnQueSA9PT0gMCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVuZENvb3JkaW5hdGVzID0gX191dGlsLnBvaW50ZXJDb29yZChlbmRFdmVudCk7XG5cbiAgICB2YXIgaGFzQ2xhc3NMaXN0ID0gISEoZW5kRXZlbnQudGFyZ2V0LmNsYXNzTGlzdCAmJiBlbmRFdmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zICYmXG4gICAgICB0eXBlb2YgZW5kRXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgdmFyIHJlbGVhc2VUb2xlcmFuY2UgPSBoYXNDbGFzc0xpc3QgJiYgZW5kRXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYnV0dG9uJykgP1xuICAgICAgZGVmYXVsdHMuUkVMRUFTRV9CVVRUT05fVE9MRVJBTkNFIDpcbiAgICAgIGRlZmF1bHRzLlJFTEVBU0VfVE9MRVJBTkNFO1xuXG4gICAgcmV0dXJuIE1hdGguYWJzKGNvbmZpZy5wb2ludGVyU3RhcnQueCAtIGVuZENvb3JkaW5hdGVzLngpID4gcmVsZWFzZVRvbGVyYW5jZSB8fFxuICAgICAgICAgICBNYXRoLmFicyhjb25maWcucG9pbnRlclN0YXJ0LnkgLSBlbmRDb29yZGluYXRlcy55KSA+IHJlbGVhc2VUb2xlcmFuY2U7XG4gIH1cblxuICBjb250YWluaW5nRWxlbWVudChlbGVtZW50LCBhbGxvd1NlbGYpIHtcbiAgICB2YXIgY2xpbWJFbGUgPSBlbGVtZW50O1xuICAgIGZvciAodmFyIHggPSAwOyB4IDwgNjsgeCsrKSB7XG4gICAgICBpZiAoIWNsaW1iRWxlKSBicmVhaztcbiAgICAgIGlmIChjbGltYkVsZS50YWdOYW1lID09PSAnTEFCRUwnKSByZXR1cm4gY2xpbWJFbGU7XG4gICAgICBjbGltYkVsZSA9IGNsaW1iRWxlLnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuICAgIGlmIChhbGxvd1NlbGYgIT09IGZhbHNlKSByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG4gIHRhcmdldEVsZW1lbnQoZWxlbWVudCkge1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQudGFnTmFtZSA9PT0gJ0xBQkVMJykge1xuICAgICAgaWYgKGVsZW1lbnQuY29udHJvbCkgcmV0dXJuIGVsZW1lbnQuY29udHJvbDtcblxuICAgICAgLy8gb2xkZXIgZGV2aWNlcyBkbyBub3Qgc3VwcG9ydCB0aGUgXCJjb250cm9sXCIgcHJvcGVydHlcbiAgICAgIGlmIChlbGVtZW50LnF1ZXJ5U2VsZWN0b3IpIHtcbiAgICAgICAgdmFyIGNvbnRyb2wgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0LHRleHRhcmVhLHNlbGVjdCcpO1xuICAgICAgICBpZiAoY29udHJvbCkgcmV0dXJuIGNvbnRyb2w7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59O1xuXG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VUYXBJc0VsZW1lbnQge1xuXG4gIGlzRWxlbWVudFRhcERpc2FibGVkKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Lm5vZGVUeXBlID09PSAxKSB7XG4gICAgICB3aGlsZSAoZWxlbWVudCkge1xuICAgICAgICBpZiAoKGVsZW1lbnQuZGF0YXNldCA/IGVsZW1lbnQuZGF0YXNldC50YXBEaXNhYmxlZCA6IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcC1kaXNhYmxlZCcpKSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpc0xhYmVsQ29udGFpbmluZ0ZpbGVJbnB1dChlbGVtZW50KSB7XG4gICAgdmFyIGxhYmVsRWxlbWVudCA9IF9fdXRpbC5jb250YWluaW5nRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAobGFiZWxFbGVtZW50LnRhZ05hbWUgIT09ICdMQUJFTCcpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgZmlsZUlucHV0ID0gbGFiZWxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9ZmlsZV0nKTtcbiAgICBpZiAoZmlsZUlucHV0ICYmIGZpbGVJbnB1dC5kaXNhYmxlZCA9PT0gZmFsc2UpIHJldHVybiB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlzVGV4dElucHV0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gISFlbGVtZW50ICYmXG4gICAgICAgICAgIChlbGVtZW50LnRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fFxuICAgICAgICAgICAgZWxlbWVudC5jb250ZW50RWRpdGFibGUgPT09ICd0cnVlJyB8fFxuICAgICAgICAgICAgKGVsZW1lbnQudGFnTmFtZSA9PSAnSU5QVVQnICYmICEoL14ocmFkaW98Y2hlY2tib3h8cmFuZ2V8ZmlsZXxzdWJtaXR8cmVzZXR8Y29sb3J8aW1hZ2V8YnV0dG9uKSQvaSkudGVzdChlbGVtZW50LnR5cGUpKSk7XG4gIH1cblxuICBpc0RhdGVJbnB1dChlbGVtZW50KSB7XG4gICAgcmV0dXJuICEhZWxlbWVudCAmJlxuICAgICAgICAgICAgKGVsZW1lbnQudGFnTmFtZSA9PSAnSU5QVVQnICYmICgvXihkYXRlfHRpbWV8ZGF0ZXRpbWUtbG9jYWx8bW9udGh8d2VlaykkL2kpLnRlc3QoZWxlbWVudC50eXBlKSk7XG4gIH1cblxuICBpc0tleWJvYXJkRWxlbWVudChlbGVtZW50KSB7XG4gICAgaWYgKCAhX19haS5wbGF0Zm9ybS5pc0lPUygpIHx8IF9fYWkucGxhdGZvcm0uaXNJUGFkKCkgKSB7XG4gICAgICByZXR1cm4gX190YXAuZWxlbWVudC5pc1RleHRJbnB1dChlbGVtZW50KSAmJiAhX19pc2VsZW1lbnQuaXNEYXRlSW5wdXQoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBfX2lzZWxlbWVudC5pc1RleHRJbnB1dChlbGVtZW50KSB8fCAoICEhZWxlbWVudCAmJiBlbGVtZW50LnRhZ05hbWUgPT0gXCJTRUxFQ1RcIik7XG4gICAgfVxuICB9XG5cbiAgaXNMYWJlbFdpdGhUZXh0SW5wdXQoZWxlbWVudCkge1xuICAgIHZhciBjb250YWluZXIgPSBfX3V0aWwuY29udGFpbmluZ0VsZW1lbnQoZWxlbWVudCwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICEhY29udGFpbmVyICYmXG4gICAgICAgICAgIF9faXNlbGVtZW50LmlzVGV4dElucHV0KF9fdXRpbC50YXJnZXRFbGVtZW50KGNvbnRhaW5lcikpO1xuICB9XG5cbiAgY29udGFpbnNPcklzVGV4dElucHV0KGVsZW1lbnQpIHtcbiAgICByZXR1cm4gX19pc2VsZW1lbnQuaXNUZXh0SW5wdXQoZWxlbWVudCkgfHwgX19pc2VsZW1lbnQuaXNMYWJlbFdpdGhUZXh0SW5wdXQoZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVRhcFN1cHBvcnQge1xuICBjb25maWcgPSBjb25maWc7XG4gIGhhc0NoZWNrZWRDbG9uZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKGF1cmVsaWFJbnRlcmZhY2UpIHtcbiAgICBfX2FpID0gYXVyZWxpYUludGVyZmFjZTtcbiAgICBfX3RhcCA9IHRoaXM7XG4gICAgX191dGlsID0gbmV3IEludGVyZmFjZVRhcFV0aWwoKTtcbiAgICBfX2lzZWxlbWVudCA9IG5ldyBJbnRlcmZhY2VUYXBJc0VsZW1lbnQoKTtcblxuICAgIHRoaXMuYWkgPSBfX2FpO1xuICAgIHRoaXMudXRpbCA9IF9fdXRpbFxuICAgIHRoaXMuaXNlbGVtZW50ID0gX19pc2VsZW1lbnRcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiByZWdpc3RlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gSW50aWFsaXplIExpc3RlbmVycyBvbiBSb290IEVsZW1lbnRcbiAgICogQHBhcmFtICB7RWxlbWVudH0gW2VsZW1lbnRdXG4gICAqL1xuICByZWdpc3RlcihlbGVtZW50KSB7XG4gICAgY29uZmlnLmRvYyA9IGVsZW1lbnQ7XG4gICAgdGFwRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0cnVlLCB0cnVlKTtcbiAgICB0YXBFdmVudExpc3RlbmVyKCdtb3VzZXVwJyk7XG4gICAgdGFwRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJyk7XG5cbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCkge1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcigncG9pbnRlcmRvd24nKTtcbiAgICAgIHRhcEV2ZW50TGlzdGVuZXIoJ3BvaW50ZXJ1cCcpO1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcigncG9pbnRjYW5jZWwnKTtcbiAgICAgIGNvbmZpZy50b3VjaE1vdmVMaXN0ZW5lciA9ICdwb2ludGVybW92ZSc7XG5cbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCkge1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyRG93bicpO1xuICAgICAgdGFwRXZlbnRMaXN0ZW5lcignTVNQb2ludGVyVXAnKTtcbiAgICAgIHRhcEV2ZW50TGlzdGVuZXIoJ01TUG9pbnRlckNhbmNlbCcpO1xuICAgICAgY29uZmlnLnRvdWNoTW92ZUxpc3RlbmVyID0gJ01TUG9pbnRlck1vdmUnO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnKTtcbiAgICAgIHRhcEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJyk7XG4gICAgICB0YXBFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcpO1xuICAgIH1cblxuICAgIHRhcEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nKTtcbiAgICB0YXBFdmVudExpc3RlbmVyKCdmb2N1c291dCcpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgdHlwZSBpbiBUQVBfRVZFTlRfTElTVEVORVJTKSB7XG4gICAgICAgIHRhcEV2ZW50TGlzdGVuZXIodHlwZSwgZmFsc2UpO1xuICAgICAgfVxuICAgICAgY29uZmlnLmRvYyA9IG51bGw7XG4gICAgICBjb25maWcuYWN0aXZlRWxlID0gbnVsbDtcbiAgICAgIGNvbmZpZy5lbmFibGVkVG91Y2hFdmVudHMgPSBmYWxzZTtcbiAgICAgIGNvbmZpZy5wb2ludGVyTW92ZWQgPSBmYWxzZTtcbiAgICAgIGNvbmZpZy5wb2ludGVyU3RhcnQgPSBudWxsO1xuICAgIH07XG4gIH1cblxuICBpZ25vcmVTY3JvbGxTdGFydChlKSB7XG4gICAgLy8gZGVmYXVsdFByZXZlbnRlZCBoYXMgYmVlbiBhc3NpZ25lZCBieSBhbm90aGVyIGNvbXBvbmVudCBoYW5kbGluZyB0aGUgZXZlbnRcbiAgICByZXR1cm4gKGUuZGVmYXVsdFByZXZlbnRlZCkgfHxcbiAgICAgICAgICAgKC9eKGZpbGV8cmFuZ2UpJC9pKS50ZXN0KGUudGFyZ2V0LnR5cGUpIHx8XG4gICAgICAgICAgIC8vIG1hbnVhbGx5IHNldCB3aXRoaW4gYW4gZWxlbWVudHMgYXR0cmlidXRlc1xuICAgICAgICAgICAoZS50YXJnZXQuZGF0YXNldCA/IGUudGFyZ2V0LmRhdGFzZXQucHJldmVudFNjcm9sbCA6IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2ZW50LXNjcm9sbCcpKSA9PSAndHJ1ZScgfHxcbiAgICAgICAgICAgLy8gZmxhc2gvbW92aWUvb2JqZWN0IHRvdWNoZXMgc2hvdWxkIG5vdCB0cnkgdG8gc2Nyb2xsXG4gICAgICAgICAgICghISgvXihvYmplY3R8ZW1iZWQpJC9pKS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpKSB8fFxuICAgICAgICAgICAvLyBjaGVjayBpZiB0aGlzIGVsZW1lbnQsIG9yIGFuIGFuY2VzdG9yLCBoYXMgYGRhdGEtdGFwLWRpc2FibGVkYCBhdHRyaWJ1dGVcbiAgICAgICAgICAgX19pc2VsZW1lbnQuaXNFbGVtZW50VGFwRGlzYWJsZWQoZS50YXJnZXQpO1xuICB9XG5cbiAgcmVtb3ZlQ2xvbmVkSW5wdXRzKGNvbnRhaW5lcikge1xuICAgIHRoaXMuaGFzQ2hlY2tlZENsb25lID0gZmFsc2U7XG5cbiAgICBfX2FpLnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjbG9uZWRJbnB1dHMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmNsb25lZC10ZXh0LWlucHV0Jyk7XG4gICAgICB2YXIgcHJldmlvdXNJbnB1dEZvY3VzID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcmV2aW91cy1pbnB1dC1mb2N1cycpO1xuICAgICAgdmFyIHg7XG5cbiAgICAgIGZvciAoeCA9IDA7IHggPCBjbG9uZWRJbnB1dHMubGVuZ3RoOyB4KyspIHtcbiAgICAgICAgY2xvbmVkSW5wdXRzW3hdLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2xvbmVkSW5wdXRzW3hdKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh4ID0gMDsgeCA8IHByZXZpb3VzSW5wdXRGb2N1cy5sZW5ndGg7IHgrKykge1xuICAgICAgICBwcmV2aW91c0lucHV0Rm9jdXNbeF0uY2xhc3NMaXN0LnJlbW92ZSgncHJldmlvdXMtaW5wdXQtZm9jdXMnKTtcbiAgICAgICAgcHJldmlvdXNJbnB1dEZvY3VzW3hdLnN0eWxlLnRvcCA9ICcnO1xuICAgICAgICBpZiAoIF9fYWkua2V5Ym9hcmQuaXNPcGVuICYmICFfX2FpLmtleWJvYXJkLmlzQ2xvc2luZyApIHByZXZpb3VzSW5wdXRGb2N1c1t4XS5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2xvbmVGb2N1c2VkSW5wdXQoY29udGFpbmVyKSB7XG4gICAgaWYgKHRoaXMuaGFzQ2hlY2tlZENsb25lKSByZXR1cm47XG4gICAgdGhpcy5oYXNDaGVja2VkQ2xvbmUgPSB0cnVlO1xuXG4gICAgX19haS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgZm9jdXNJbnB1dCA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMnKTtcbiAgICAgIGlmIChfX2lzZWxlbWVudC5pc1RleHRJbnB1dChmb2N1c0lucHV0KSAmJiAhX19pc2VsZW1lbnQuaXNEYXRlSW5wdXQoZm9jdXNJbnB1dCkpIHtcbiAgICAgICAgdmFyIGNsb25lZElucHV0ID0gZm9jdXNJbnB1dC5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgICAgY2xvbmVkSW5wdXQudmFsdWUgPSBmb2N1c0lucHV0LnZhbHVlO1xuICAgICAgICBjbG9uZWRJbnB1dC5jbGFzc0xpc3QuYWRkKCdjbG9uZWQtdGV4dC1pbnB1dCcpO1xuICAgICAgICBjbG9uZWRJbnB1dC5yZWFkT25seSA9IHRydWU7XG4gICAgICAgIGlmIChmb2N1c0lucHV0LmlzQ29udGVudEVkaXRhYmxlKSB7XG4gICAgICAgICAgY2xvbmVkSW5wdXQuY29udGVudEVkaXRhYmxlID0gZm9jdXNJbnB1dC5jb250ZW50RWRpdGFibGU7XG4gICAgICAgICAgY2xvbmVkSW5wdXQuaW5uZXJIVE1MID0gZm9jdXNJbnB1dC5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgICAgZm9jdXNJbnB1dC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShjbG9uZWRJbnB1dCwgZm9jdXNJbnB1dCk7XG4gICAgICAgIGZvY3VzSW5wdXQuY2xhc3NMaXN0LmFkZCgncHJldmlvdXMtaW5wdXQtZm9jdXMnKTtcblxuICAgICAgICBjbG9uZWRJbnB1dC5zY3JvbGxUb3AgPSBmb2N1c0lucHV0LnNjcm9sbFRvcDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvbGVyYW5jZShyZWxlYXNlVG9sZXJhbmNlLCByZWxlYXNlQnV0dG9uVG9sZXJhbmNlKSB7XG4gICAgZGVmYXVsdHMuUkVMRUFTRV9UT0xFUkFOQ0UgPSByZWxlYXNlVG9sZXJhbmNlO1xuICAgIGRlZmF1bHRzLlJFTEVBU0VfQlVUVE9OX1RPTEVSQU5DRSA9IHJlbGVhc2VCdXR0b25Ub2xlcmFuY2U7XG4gIH1cblxuICBjYW5jZWxDbGljaygpIHtcbiAgICAvLyB1c2VkIHRvIGNhbmNlbCBhbnkgc2ltdWxhdGVkIGNsaWNrcyB3aGljaCBtYXkgaGFwcGVuIG9uIGEgdG91Y2hlbmQvbW91c2V1cFxuICAgIC8vIGdlc3R1cmVzIHVzZXMgdGhpcyBtZXRob2Qgd2l0aGluIGl0cyB0YXAgYW5kIGhvbGQgZXZlbnRzXG4gICAgY29uZmlnLnBvaW50ZXJNb3ZlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwRXZlbnRMaXN0ZW5lcih0eXBlLCBlbmFibGUsIHVzZUNhcHR1cmUpIHtcbiAgaWYgKGVuYWJsZSAhPT0gZmFsc2UpIHtcbiAgICBjb25maWcuZG9jLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgVEFQX0VWRU5UX0xJU1RFTkVSU1t0eXBlXSwgdXNlQ2FwdHVyZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uZmlnLmRvYy5yZW1vdmVFdmVudExpc3RlbmVyKHR5cGUsIFRBUF9FVkVOVF9MSVNURU5FUlNbdHlwZV0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhcENsaWNrKGUpIHtcbiAgLy8gc2ltdWxhdGUgYSBub3JtYWwgY2xpY2sgYnkgcnVubmluZyB0aGUgZWxlbWVudCdzIGNsaWNrIG1ldGhvZCB0aGVuIGZvY3VzIG9uIGl0XG4gIHZhciBjb250YWluZXIgPSBfX3V0aWwuY29udGFpbmluZ0VsZW1lbnQoZS50YXJnZXQpO1xuICB2YXIgZWxlID0gX191dGlsLnRhcmdldEVsZW1lbnQoY29udGFpbmVyKTtcblxuICBpZiAoX191dGlsLnJlcXVpcmVzTmF0aXZlQ2xpY2soZWxlKSB8fCBjb25maWcucG9pbnRlck1vdmVkKSByZXR1cm4gZmFsc2U7XG5cbiAgdmFyIGMgPSBfX3V0aWwucG9pbnRlckNvb3JkKGUpO1xuXG4gIC8vY29uc29sZS5sb2coJ3RhcENsaWNrJywgZS50eXBlLCBlbGUudGFnTmFtZSwgJygnK2MueCsnLCcrYy55KycpJyk7XG4gIHRyaWdnZXJNb3VzZUV2ZW50KCdjbGljaycsIGVsZSwgYy54LCBjLnkpO1xuXG4gIC8vIGlmIGl0J3MgYW4gaW5wdXQsIGZvY3VzIGluIG9uIHRoZSB0YXJnZXQsIG90aGVyd2lzZSBibHVyXG4gIHRhcEhhbmRsZUZvY3VzKGVsZSk7XG59XG5cbmZ1bmN0aW9uIHRyaWdnZXJNb3VzZUV2ZW50KHR5cGUsIGVsZSwgeCwgeSkge1xuICAvLyB1c2luZyBpbml0TW91c2VFdmVudCBpbnN0ZWFkIG9mIE1vdXNlRXZlbnQgZm9yIG91ciBBbmRyb2lkIGZyaWVuZHNcbiAgdmFyIGNsaWNrRXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIk1vdXNlRXZlbnRzXCIpO1xuICBjbGlja0V2ZW50LmluaXRNb3VzZUV2ZW50KHR5cGUsIHRydWUsIHRydWUsIHdpbmRvdywgMSwgMCwgMCwgeCwgeSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuICBjbGlja0V2ZW50LmlzQWlUYXAgPSB0cnVlO1xuICBlbGUuZGlzcGF0Y2hFdmVudChjbGlja0V2ZW50KTtcbn1cblxuZnVuY3Rpb24gdGFwQ2xpY2tHYXRlS2VlcGVyKGUpIHtcbiAgLy9jb25zb2xlLmxvZygnY2xpY2sgJyArIERhdGUubm93KCkgKyAnIGlzQWlUYXA6ICcgKyAoZS5pc0FpVGFwID8gdHJ1ZSA6IGZhbHNlKSk7XG4gIGlmIChlLnRhcmdldC50eXBlID09ICdzdWJtaXQnICYmIGUuZGV0YWlsID09PSAwKSB7XG4gICAgLy8gZG8gbm90IHByZXZlbnQgY2xpY2sgaWYgaXQgY2FtZSBmcm9tIGFuIFwiRW50ZXJcIiBvciBcIkdvXCIga2V5cHJlc3Mgc3VibWl0XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvLyBkbyBub3QgYWxsb3cgdGhyb3VnaCBhbnkgY2xpY2sgZXZlbnRzIHRoYXQgd2VyZSBub3QgY3JlYXRlZCBieSBfX2FpLnRhcFxuICBpZiAoKF9fYWkuc2Nyb2xsLmlzU2Nyb2xsaW5nICYmIF9fdXRpbC5jb250YWluc09ySXNUZXh0SW5wdXQoZS50YXJnZXQpKSB8fFxuICAgICAgKCFlLmlzQWlUYXAgJiYgIV9fdXRpbC5yZXF1aXJlc05hdGl2ZUNsaWNrKGUudGFyZ2V0KSkpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjbGlja1ByZXZlbnQnLCBlLnRhcmdldC50YWdOYW1lKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgaWYgKCFfX2lzZWxlbWVudC5pc0xhYmVsV2l0aFRleHRJbnB1dChlLnRhcmdldCkpIHtcbiAgICAgIC8vIGxhYmVscyBjbGlja3MgZnJvbSBuYXRpdmUgc2hvdWxkIG5vdCBwcmV2ZW50RGVmYXVsdCBvdGhlcnNpemUga2V5Ym9hcmQgd2lsbCBub3Qgc2hvdyBvbiBpbnB1dCBmb2N1c1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLy8gTU9VU0VcbmZ1bmN0aW9uIHRhcE1vdXNlRG93bihlKSB7XG4gIC8vY29uc29sZS5sb2coJ21vdXNlZG93biAnICsgRGF0ZS5ub3coKSk7XG4gIGlmIChlLmlzQWlUYXAgfHwgdGFwSWdub3JlRXZlbnQoZSkpIHJldHVybiBudWxsO1xuXG4gIGlmIChjb25maWcuZW5hYmxlZFRvdWNoRXZlbnRzKSB7XG4gICAgY29uc29sZS5sb2coJ21vdXNlZG93bicsICdzdG9wIGV2ZW50Jyk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmICgoIV9faXNlbGVtZW50LmlzVGV4dElucHV0KGUudGFyZ2V0KSB8fCBjb25maWcubGFzdFRvdWNoVGFyZ2V0ICE9PSBlLnRhcmdldCkgJiYgISgvXihzZWxlY3R8b3B0aW9uKSQvaSkudGVzdChlLnRhcmdldC50YWdOYW1lKSkge1xuICAgICAgLy8gSWYgeW91IHByZXZlbnREZWZhdWx0IG9uIGEgdGV4dCBpbnB1dCB0aGVuIHlvdSBjYW5ub3QgbW92ZSBpdHMgdGV4dCBjYXJldC9jdXJzb3IuXG4gICAgICAvLyBBbGxvdyB0aHJvdWdoIG9ubHkgdGhlIHRleHQgaW5wdXQgZGVmYXVsdC4gSG93ZXZlciwgd2l0aG91dCBwcmV2ZW50RGVmYXVsdCBvbiBhblxuICAgICAgLy8gaW5wdXQgdGhlIDMwMG1zIGRlbGF5IGNhbiBjaGFuZ2UgZm9jdXMgb24gaW5wdXRzIGFmdGVyIHRoZSBrZXlib2FyZCBzaG93cyB1cC5cbiAgICAgIC8vIFRoZSBmb2N1c2luIGV2ZW50IGhhbmRsZXMgdGhlIGNoYW5jZSBvZiBmb2N1cyBjaGFuZ2luZyBhZnRlciB0aGUga2V5Ym9hcmQgc2hvd3MuXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uZmlnLnBvaW50ZXJNb3ZlZCA9IGZhbHNlO1xuICBjb25maWcucG9pbnRlclN0YXJ0ID0gX191dGlsLnBvaW50ZXJDb29yZChlKTtcblxuICB0YXBFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnKTtcbiAgX19haS50YXBBY3RpdmF0b3Iuc3RhcnQoZSk7XG59XG5cbmZ1bmN0aW9uIHRhcE1vdXNlVXAoZSkge1xuICAvL2NvbnNvbGUubG9nKFwibW91c2V1cCBcIiArIERhdGUubm93KCkpO1xuICBpZiAoY29uZmlnLmVuYWJsZWRUb3VjaEV2ZW50cykge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0YXBJZ25vcmVFdmVudChlKSB8fCAoL14oc2VsZWN0fG9wdGlvbikkL2kpLnRlc3QoZS50YXJnZXQudGFnTmFtZSkpIHJldHVybiBmYWxzZTtcblxuICBpZiAoIV9fdXRpbC5oYXNQb2ludGVyTW92ZWQoZSkpIHtcbiAgICB0YXBDbGljayhlKTtcbiAgfVxuICB0YXBFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBmYWxzZSk7XG4gIF9fYWkudGFwQWN0aXZhdG9yLmVuZCgpO1xuICBjb25maWcucG9pbnRlck1vdmVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRhcE1vdXNlTW92ZShlKSB7XG4gIGlmIChfX3V0aWwuaGFzUG9pbnRlck1vdmVkKGUpKSB7XG4gICAgdGFwRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZmFsc2UpO1xuICAgIF9fYWkudGFwQWN0aXZhdG9yLmVuZCgpO1xuICAgIGNvbmZpZy5wb2ludGVyTW92ZWQgPSB0cnVlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5cbi8vIFRPVUNIXG5mdW5jdGlvbiB0YXBUb3VjaFN0YXJ0KGUpIHtcbiAgLy9jb25zb2xlLmxvZyhcInRvdWNoc3RhcnQgXCIgKyBEYXRlLm5vdygpKTtcbiAgaWYgKHRhcElnbm9yZUV2ZW50KGUpKSByZXR1cm47XG5cbiAgY29uZmlnLnBvaW50ZXJNb3ZlZCA9IGZhbHNlO1xuXG4gIHRhcEVuYWJsZVRvdWNoRXZlbnRzKCk7XG4gIGNvbmZpZy5wb2ludGVyU3RhcnQgPSBfX3V0aWwucG9pbnRlckNvb3JkKGUpO1xuXG4gIHRhcEV2ZW50TGlzdGVuZXIoY29uZmlnLnRvdWNoTW92ZUxpc3RlbmVyKTtcbiAgX19haS50YXBBY3RpdmF0b3Iuc3RhcnQoZSk7XG5cbiAgaWYgKF9fYWkucGxhdGZvcm0uaXNJT1MoKSAmJiBfX2lzZWxlbWVudC5pc0xhYmVsV2l0aFRleHRJbnB1dChlLnRhcmdldCkpIHtcbiAgICAvLyBpZiB0aGUgdGFwcGVkIGVsZW1lbnQgaXMgYSBsYWJlbCwgd2hpY2ggaGFzIGEgY2hpbGQgaW5wdXRcbiAgICAvLyB0aGVuIHByZXZlbnREZWZhdWx0IHNvIGlPUyBkb2Vzbid0IHVnbHkgYXV0byBzY3JvbGwgdG8gdGhlIGlucHV0XG4gICAgLy8gYnV0IGRvIG5vdCBwcmV2ZW50IGRlZmF1bHQgb24gQW5kcm9pZCBvciBlbHNlIHlvdSBjYW5ub3QgbW92ZSB0aGUgdGV4dCBjYXJldFxuICAgIC8vIGFuZCBkbyBub3QgcHJldmVudCBkZWZhdWx0IG9uIEFuZHJvaWQgb3IgZWxzZSBubyB2aXJ0dWFsIGtleWJvYXJkIHNob3dzIHVwXG5cbiAgICB2YXIgdGV4dElucHV0ID0gX191dGlsLnRhcmdldEVsZW1lbnQoX191dGlsLmNvbnRhaW5pbmdFbGVtZW50KGUudGFyZ2V0KSk7XG4gICAgaWYgKHRleHRJbnB1dCAhPT0gdGFwQWN0aXZlRWxlKSB7XG4gICAgICAvLyBkb24ndCBwcmV2ZW50RGVmYXVsdCBvbiBhbiBhbHJlYWR5IGZvY3VzZWQgaW5wdXQgb3IgZWxzZSBpT1MncyB0ZXh0IGNhcmV0IGlzbid0IHVzYWJsZVxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0YXBUb3VjaEVuZChlKSB7XG4gIC8vY29uc29sZS5sb2coJ3RvdWNoZW5kICcgKyBEYXRlLm5vdygpKTtcbiAgaWYgKHRhcElnbm9yZUV2ZW50KGUpKSByZXR1cm47XG5cbiAgdGFwRW5hYmxlVG91Y2hFdmVudHMoKTtcbiAgaWYgKCFfX3V0aWwuaGFzUG9pbnRlck1vdmVkKGUpKSB7XG4gICAgdGFwQ2xpY2soZSk7XG5cbiAgICBpZiAoKC9eKHNlbGVjdHxvcHRpb24pJC9pKS50ZXN0KGUudGFyZ2V0LnRhZ05hbWUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgY29uZmlnLmxhc3RUb3VjaFRhcmdldCA9IGUudGFyZ2V0O1xuICB0YXBUb3VjaENhbmNlbCgpO1xufVxuXG5mdW5jdGlvbiB0YXBUb3VjaE1vdmUoZSkge1xuICBpZiAoX191dGlsLmhhc1BvaW50ZXJNb3ZlZChlKSkge1xuICAgIGNvbmZpZy5wb2ludGVyTW92ZWQgPSB0cnVlO1xuICAgIHRhcEV2ZW50TGlzdGVuZXIoY29uZmlnLnRvdWNoTW92ZUxpc3RlbmVyLCBmYWxzZSk7XG4gICAgX19haS50YXBBY3RpdmF0b3IuZW5kKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRhcFRvdWNoQ2FuY2VsKCkge1xuICB0YXBFdmVudExpc3RlbmVyKGNvbmZpZy50b3VjaE1vdmVMaXN0ZW5lciwgZmFsc2UpO1xuICBfX2FpLnRhcEFjdGl2YXRvci5lbmQoKTtcbiAgY29uZmlnLnBvaW50ZXJNb3ZlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiB0YXBFbmFibGVUb3VjaEV2ZW50cygpIHtcbiAgY29uZmlnLmVuYWJsZWRUb3VjaEV2ZW50cyA9IHRydWU7XG4gIGNsZWFyVGltZW91dChjb25maWcubW91c2VSZXNldFRpbWVyKTtcbiAgY29uZmlnLm1vdXNlUmVzZXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgY29uZmlnLmVuYWJsZWRUb3VjaEV2ZW50cyA9IGZhbHNlO1xuICB9LCA2MDApO1xufVxuXG5mdW5jdGlvbiB0YXBJZ25vcmVFdmVudChlKSB7XG4gIGlmIChlLmlzVGFwSGFuZGxlZCkgcmV0dXJuIHRydWU7XG4gIGUuaXNUYXBIYW5kbGVkID0gdHJ1ZTtcblxuICBpZiAoX19haS5zY3JvbGwuaXNTY3JvbGxpbmcgJiYgX191dGlsLmNvbnRhaW5zT3JJc1RleHRJbnB1dChlLnRhcmdldCkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFwSGFuZGxlRm9jdXMoZWxlKSB7XG4gIGNvbmZpZy50b3VjaEZvY3VzZWRJbnB1dCA9IG51bGw7XG5cbiAgdmFyIHRyaWdnZXJGb2N1c0luID0gZmFsc2U7XG5cbiAgaWYgKGVsZS50YWdOYW1lID09ICdTRUxFQ1QnKSB7XG4gICAgLy8gdHJpY2sgdG8gZm9yY2UgQW5kcm9pZCBvcHRpb25zIHRvIHNob3cgdXBcbiAgICB0cmlnZ2VyTW91c2VFdmVudCgnbW91c2Vkb3duJywgZWxlLCAwLCAwKTtcbiAgICBlbGUuZm9jdXMgJiYgZWxlLmZvY3VzKCk7XG4gICAgdHJpZ2dlckZvY3VzSW4gPSB0cnVlO1xuXG4gIH0gZWxzZSBpZiAoX191dGlsLmFjdGl2ZUVsZW1lbnQoKSA9PT0gZWxlKSB7XG4gICAgLy8gYWxyZWFkeSBpcyB0aGUgYWN0aXZlIGVsZW1lbnQgYW5kIGhhcyBmb2N1c1xuICAgIHRyaWdnZXJGb2N1c0luID0gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKCgvXihpbnB1dHx0ZXh0YXJlYSkkL2kpLnRlc3QoZWxlLnRhZ05hbWUpIHx8IGVsZS5pc0NvbnRlbnRFZGl0YWJsZSkge1xuICAgIHRyaWdnZXJGb2N1c0luID0gdHJ1ZTtcbiAgICBlbGUuZm9jdXMgJiYgZWxlLmZvY3VzKCk7XG4gICAgZWxlLnZhbHVlID0gZWxlLnZhbHVlO1xuICAgIGlmIChjb25maWcuZW5hYmxlZFRvdWNoRXZlbnRzKSB7XG4gICAgICBjb25maWcudG91Y2hGb2N1c2VkSW5wdXQgPSBlbGU7XG4gICAgfVxuXG4gIH0gZWxzZSB7XG4gICAgdGFwRm9jdXNPdXRBY3RpdmUoKTtcbiAgfVxuXG4gIGlmICh0cmlnZ2VyRm9jdXNJbikge1xuICAgIF9fdXRpbC5hY3RpdmVFbGVtZW50KGVsZSk7XG4gICAgX19haS50cmlnZ2VyKCdhaS5mb2N1c2luJywge1xuICAgICAgdGFyZ2V0OiBlbGVcbiAgICB9LCB0cnVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YXBGb2N1c091dEFjdGl2ZSgpIHtcbiAgdmFyIGVsZSA9IF9fdXRpbC5hY3RpdmVFbGVtZW50KCk7XG4gIGlmIChlbGUgJiYgKCgvXihpbnB1dHx0ZXh0YXJlYXxzZWxlY3QpJC9pKS50ZXN0KGVsZS50YWdOYW1lKSB8fCBlbGUuaXNDb250ZW50RWRpdGFibGUpKSB7XG4gICAgY29uc29sZS5sb2coJ3RhcEZvY3VzT3V0QWN0aXZlJywgZWxlLnRhZ05hbWUpO1xuICAgIGVsZS5ibHVyKCk7XG4gIH1cbiAgX191dGlsLmFjdGl2ZUVsZW1lbnQobnVsbCk7XG59XG5cbmZ1bmN0aW9uIHRhcEZvY3VzSW4oZSkge1xuICAvL2NvbnNvbGUubG9nKCdmb2N1c2luICcgKyBEYXRlLm5vdygpKTtcbiAgLy8gQmVjYXVzZSBhIHRleHQgaW5wdXQgZG9lc24ndCBwcmV2ZW50RGVmYXVsdCAoc28gdGhlIGNhcmV0IHN0aWxsIHdvcmtzKSB0aGVyZSdzIGEgY2hhbmNlXG4gIC8vIHRoYXQgaXRzIG1vdXNlZG93biBldmVudCAzMDBtcyBsYXRlciB3aWxsIGNoYW5nZSB0aGUgZm9jdXMgdG8gYW5vdGhlciBlbGVtZW50IGFmdGVyXG4gIC8vIHRoZSBrZXlib2FyZCBzaG93cyB1cC5cblxuICBpZiAoY29uZmlnLmVuYWJsZWRUb3VjaEV2ZW50cyAmJlxuICAgICAgX19pc2VsZW1lbnQuaXNUZXh0SW5wdXQoX191dGlsLmFjdGl2ZUVsZW1lbnQoKSkgJiZcbiAgICAgIF9faXNlbGVtZW50LmlzVGV4dElucHV0KGNvbmZpZy50b3VjaEZvY3VzZWRJbnB1dCkgJiZcbiAgICAgIGNvbmZpZy50b3VjaEZvY3VzZWRJbnB1dCAhPT0gZS50YXJnZXQpIHtcblxuICAgIC8vIDEpIFRoZSBwb2ludGVyIGlzIGZyb20gdG91Y2ggZXZlbnRzXG4gICAgLy8gMikgVGhlcmUgaXMgYW4gYWN0aXZlIGVsZW1lbnQgd2hpY2ggaXMgYSB0ZXh0IGlucHV0XG4gICAgLy8gMykgQSB0ZXh0IGlucHV0IHdhcyBqdXN0IHNldCB0byBiZSBmb2N1c2VkIG9uIGJ5IGEgdG91Y2ggZXZlbnRcbiAgICAvLyA0KSBBIG5ldyBmb2N1cyBoYXMgYmVlbiBzZXQsIGhvd2V2ZXIgdGhlIHRhcmdldCBpc24ndCB0aGUgb25lIHRoZSB0b3VjaCBldmVudCB3YW50ZWRcbiAgICBjb25zb2xlLmxvZygnZm9jdXNpbicsICdjb25maWcudG91Y2hGb2N1c2VkSW5wdXQnKTtcbiAgICBjb25maWcudG91Y2hGb2N1c2VkSW5wdXQuZm9jdXMoKTtcbiAgICBjb25maWcudG91Y2hGb2N1c2VkSW5wdXQgPSBudWxsO1xuICB9XG4gIF9fYWkuc2Nyb2xsLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRhcEZvY3VzT3V0KCkge1xuICAvL2NvbnNvbGUubG9nKFwiZm9jdXNvdXRcIik7XG4gIF9fdXRpbC5hY3RpdmVFbGVtZW50KG51bGwpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
