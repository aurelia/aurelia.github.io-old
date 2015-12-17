/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var OverlayManager = (function () {
    function OverlayManager() {
      _classCallCheck(this, OverlayManager);

      this.fragment = document.createDocumentFragment();
      this.overlays = {};
    }

    _createClass(OverlayManager, [{
      key: 'getOverlay',
      value: function getOverlay(key) {
        var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

        if (this.overlays[key]) {
          options.exists = true;
          return this.overlays[key];
        }

        return false;
      }
    }, {
      key: 'createOverlay',
      value: function createOverlay(name, options, context) {
        var overlay, className;
        className = options.className || '';
        className += ' ai-overlay-element';

        overlay = document.createElement('DIV');
        overlay.className = className;
        this.overlays[name] = context;
        this.fragment.appendChild(overlay);
        return overlay;
      }
    }]);

    return OverlayManager;
  })();

  exports.OverlayManager = OverlayManager;

  var overlayManager = overlayManager || new OverlayManager();

  var OverlayElement = (function () {
    function OverlayElement(name, options) {
      _classCallCheck(this, OverlayElement);

      this.element = overlayManager.createOverlay(name, options, this);
      this.options = options;
      this.activeClass = options.activeClass || 'is-active';
      this.container = options.container || document.body;
      this.initClickHandler = this.options.deactivateOnClick || this.options.onClick;
      this.initFocusHandler = this.options.deactivateOnFocus || this.options.onFocus;
      this.onClick = this.onClick.bind(this);
      this.onFocus = this.onFocus.bind(this);
    }

    _createClass(OverlayElement, [{
      key: 'attach',
      value: function attach() {

        this.container.appendChild(this.element);
        if (this.initClickHandler && !this.isClickHandler) {
          this.isClickHandler = true;
          this.element.addEventListener('click', this.onClick, true);
        }
        if (this.initFocusHandler && !this.isFocusHandler) {
          this.isFocusHandler = true;
          this.element.addEventListener('focus', this.onFocus, true);
        }
      }
    }, {
      key: 'detach',
      value: function detach() {
        this.element.classList.remove(this.activeClass);
        if (this.isClickHandler) {
          this.isClickHandler = false;
          this.element.removeEventListener('click', this.onClick);
        }
        if (this.isFocusHandler) {
          this.isFocusHandler = false;
          this.element.removeEventListener('focus', this.onFocus);
        }
        overlayManager.fragment.appendChild(this.element);
      }
    }, {
      key: 'activate',
      value: function activate() {
        this.element.classList.add(this.activeClass);
      }
    }, {
      key: 'deactivate',
      value: function deactivate() {
        this.element.classList.remove(this.activeClass);
      }
    }, {
      key: 'onClick',
      value: function onClick(event) {
        if (this.options.onClick) {
          this.options.onClick(event, this);
        }
        if (this.options.deactivateOnClick) {
          this.deactivate();
        }
      }
    }, {
      key: 'onFocus',
      value: function onFocus(event) {
        if (this.options.onFocus) {
          this.options.onFocus(event, this);
        }
        if (this.options.deactivateOnFocus) {
          this.deactivate();
        }
      }
    }], [{
      key: 'create',
      value: function create(name, options) {
        var overlay = overlayManager.getOverlay(name, options);
        if (overlay) return overlay;
        return new OverlayElement(name, options);
      }
    }]);

    return OverlayElement;
  })();

  exports.OverlayElement = OverlayElement;
});
//# sourceMappingURL=data:application/json;base64,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QUFpQixFQUFFO0FBQ2xDLGNBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtPQUNGOzs7YUFFTSxpQkFBQyxLQUFLLEVBQUU7QUFDYixZQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQ3hCLGNBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuQztBQUNELFlBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtBQUNsQyxjQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7T0FDRjs7O2FBeERZLGdCQUFDLElBQUksRUFBRSxPQUFPLEVBQUU7QUFDM0IsWUFBSSxPQUFPLEdBQUcsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDdkQsWUFBSSxPQUFPLEVBQUUsT0FBTyxPQUFPLENBQUM7QUFDNUIsZUFBTyxJQUFJLGNBQWMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7T0FDMUM7OztXQWpCVSxjQUFjIiwiZmlsZSI6InV0aWwvb3ZlcmxheS1lbGVtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE92ZXJsYXlNYW5hZ2VyIHtcbiAgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gIG92ZXJsYXlzID0ge307XG5cbiAgZ2V0T3ZlcmxheShrZXksIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmICh0aGlzLm92ZXJsYXlzW2tleV0pIHtcbiAgICAgIG9wdGlvbnMuZXhpc3RzID0gdHJ1ZTtcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXlzW2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlT3ZlcmxheShuYW1lLCBvcHRpb25zLCBjb250ZXh0KSB7ICB2YXIgb3ZlcmxheSwgY2xhc3NOYW1lO1xuICAgIGNsYXNzTmFtZSA9IG9wdGlvbnMuY2xhc3NOYW1lIHx8ICcnO1xuICAgIGNsYXNzTmFtZSArPSAnIGFpLW92ZXJsYXktZWxlbWVudCc7XG5cbiAgICBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgb3ZlcmxheS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XG4gICAgdGhpcy5vdmVybGF5c1tuYW1lXSA9IGNvbnRleHQ7XG4gICAgdGhpcy5mcmFnbWVudC5hcHBlbmRDaGlsZChvdmVybGF5KTtcbiAgICByZXR1cm4gb3ZlcmxheVxuICB9XG59XG5cbmNvbnN0IG92ZXJsYXlNYW5hZ2VyID0gb3ZlcmxheU1hbmFnZXIgfHwgbmV3IE92ZXJsYXlNYW5hZ2VyKCk7XG5cbmV4cG9ydCBjbGFzcyBPdmVybGF5RWxlbWVudCB7XG5cbiAgY29uc3RydWN0b3IobmFtZSwgb3B0aW9ucykge1xuICAgIHRoaXMuZWxlbWVudCA9IG92ZXJsYXlNYW5hZ2VyLmNyZWF0ZU92ZXJsYXkobmFtZSwgb3B0aW9ucywgdGhpcyk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmFjdGl2ZUNsYXNzID0gb3B0aW9ucy5hY3RpdmVDbGFzcyB8fCAnaXMtYWN0aXZlJztcbiAgICB0aGlzLmNvbnRhaW5lciA9IG9wdGlvbnMuY29udGFpbmVyIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgdGhpcy5pbml0Q2xpY2tIYW5kbGVyID0gdGhpcy5vcHRpb25zLmRlYWN0aXZhdGVPbkNsaWNrIHx8IHRoaXMub3B0aW9ucy5vbkNsaWNrO1xuICAgIHRoaXMuaW5pdEZvY3VzSGFuZGxlciA9IHRoaXMub3B0aW9ucy5kZWFjdGl2YXRlT25Gb2N1cyB8fCB0aGlzLm9wdGlvbnMub25Gb2N1cztcbiAgICB0aGlzLm9uQ2xpY2sgPSB0aGlzLm9uQ2xpY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRm9jdXMgPSB0aGlzLm9uRm9jdXMuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUobmFtZSwgb3B0aW9ucykge1xuICAgIGxldCBvdmVybGF5ID0gb3ZlcmxheU1hbmFnZXIuZ2V0T3ZlcmxheShuYW1lLCBvcHRpb25zKTtcbiAgICBpZiAob3ZlcmxheSkgcmV0dXJuIG92ZXJsYXk7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5RWxlbWVudChuYW1lLCBvcHRpb25zKTtcbiAgfVxuXG4gIGF0dGFjaCgpIHtcblxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgaWYgKHRoaXMuaW5pdENsaWNrSGFuZGxlciAmJiAhdGhpcy5pc0NsaWNrSGFuZGxlcikge1xuICAgICAgdGhpcy5pc0NsaWNrSGFuZGxlciA9IHRydWU7XG4gICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2ssIHRydWUpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pbml0Rm9jdXNIYW5kbGVyICYmICF0aGlzLmlzRm9jdXNIYW5kbGVyKSB7XG4gICAgICB0aGlzLmlzRm9jdXNIYW5kbGVyID0gdHJ1ZTtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMub25Gb2N1cywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgZGV0YWNoKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICAgIGlmICh0aGlzLmlzQ2xpY2tIYW5kbGVyKSB7XG4gICAgICB0aGlzLmlzQ2xpY2tIYW5kbGVyID0gZmFsc2U7XG4gICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2spO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0ZvY3VzSGFuZGxlcikge1xuICAgICAgdGhpcy5pc0ZvY3VzSGFuZGxlciA9IGZhbHNlO1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5vbkZvY3VzKTtcbiAgICB9XG4gICAgb3ZlcmxheU1hbmFnZXIuZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIGFjdGl2YXRlKCkge1xuICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuYWN0aXZlQ2xhc3MpO1xuICB9XG5cbiAgZGVhY3RpdmF0ZSgpIHtcbiAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmFjdGl2ZUNsYXNzKTtcbiAgfVxuXG4gIG9uQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLm9uQ2xpY2spIHtcbiAgICAgIHRoaXMub3B0aW9ucy5vbkNsaWNrKGV2ZW50LCB0aGlzKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5kZWFjdGl2YXRlT25DbGljaykge1xuICAgICAgdGhpcy5kZWFjdGl2YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25Gb2N1cyhldmVudCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMub25Gb2N1cykge1xuICAgICAgdGhpcy5vcHRpb25zLm9uRm9jdXMoZXZlbnQsIHRoaXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5vcHRpb25zLmRlYWN0aXZhdGVPbkZvY3VzKSB7XG4gICAgICB0aGlzLmRlYWN0aXZhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
