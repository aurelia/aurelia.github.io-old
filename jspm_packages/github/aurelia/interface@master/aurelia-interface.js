/* */ 
define(['exports', 'aurelia-framework', './controller', './support/animation', './support/platform', './support/browser', './support/device', './support/tap', './support/tap-activator', './support/gesture', './ai-el'], function (exports, _aureliaFramework, _controller, _supportAnimation, _supportPlatform, _supportBrowser, _supportDevice, _supportTap, _supportTapActivator, _supportGesture, _aiEl) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  document.aureliaInterface = document.aureliaInterface || new Object();

  var AureliaInterface = (function () {
    function AureliaInterface(interfaceChannel) {
      _classCallCheck(this, AureliaInterface);

      this.tap = {};
      this.scroll = {};
      this.device = {};
      this.keyboard = {};
      this.platform = {};
      this.animation = {};
      this.activator = {};
      this.tapActivator = {};
      this.util = {};
      this.views = {};
      this.theme = 'light';

      document.aureliaInterface = this;
      this.channel = interfaceChannel;
      var ai = _aiEl.Ai;
      document.aureliaInterface.ai = _aiEl.Ai;
      window.Ai = _aiEl.Ai;
      window.ai = ai;

      this.init(this.tapActivator, this.animation = new _supportAnimation.InterfaceAnimationSupport(this), this.platform = new _supportPlatform.InterfacePlatformSupport(this), this.browser = new _supportBrowser.InterfaceBrowserSupport(this), this.device = new _supportDevice.InterfaceDeviceSupport(this), this.tap, this.Gestures);
      return this;
    }

    _createClass(AureliaInterface, [{
      key: 'init',
      value: function init(tapActivator, animation, platform, browser, device, tap, Gestures) {
        var _this = this;

        this.initListeners();
        this.setTheme(this.theme);

        this.channel.subscribe('init-controller', function (controller) {
          controller.init(_this);
          _this.controller = controller;
        });

        this.setUtil();
      }
    }, {
      key: 'instruction',
      value: function instruction() {
        return {
          device: this.device,
          platform: this.platform.platform,
          deviceType: this.device.device
        };
      }
    }, {
      key: 'publish',
      value: function publish(eventName, payload) {
        return this.channel.publish(eventName, payload);
      }
    }, {
      key: 'subscribe',
      value: function subscribe(eventName, payload) {
        return this.channel.subscribe(eventName, payload);
      }
    }, {
      key: 'initListeners',
      value: function initListeners() {
        var _this2 = this;

        this.subscribe('change-platform', function (payload) {
          var oldPlatform = _this2.platform;
          _this2.platform = payload.platform;
          _this2.setPlatform(payload.platform, oldPlatform);
        });

        this.subscribe('change-theme', function (payload) {
          var oldTheme = _this2.theme;
          _this2.theme = payload.theme;
          _this2.setTheme(payload.theme, oldTheme);
        });
      }
    }, {
      key: 'setTheme',
      value: function setTheme(newTheme, lastTheme) {
        lastTheme && document.documentElement.classList.remove('theme-' + lastTheme);
        newTheme && document.documentElement.classList.add('theme-' + newTheme);
        this.publish('theme-changed', this.deviceInstruction);
      }
    }, {
      key: 'setPlatform',
      value: function setPlatform(newPlatform, lastPlatform) {
        this.setOSX(newPlatform, lastPlatform);
        lastPlatform && document.documentElement.classList.remove('platform-' + lastPlatform);
        newPlatform && document.documentElement.classList.add('platform-' + newPlatform);
        this.publish('platform-changed', this.deviceInstruction);
      }
    }, {
      key: 'setOSX',
      value: function setOSX(newPlatform, lastPlatform) {
        newPlatform === 'osx' && document.documentElement.classList.remove('platform-ios');
        lastPlatform === 'osx' && document.documentElement.classList.add('platform-ios');
      }
    }, {
      key: 'trigger',
      value: function trigger(eventType, data, bubbles, cancelable) {
        var event = new CustomEvent(eventType, {
          detail: data,
          bubbles: !!bubbles,
          cancelable: !!cancelable
        });

        data && data.target && data.target.dispatchEvent && data.target.dispatchEvent(event) || window.dispatchEvent(event);
      }
    }, {
      key: 'setUtil',
      value: function setUtil() {
        this.util.isTouch = this.device.isTouch();
        this.util.clickEvent = this.util.isTouch ? 'touchstart' : 'click';
      }
    }]);

    return AureliaInterface;
  })();

  exports.AureliaInterface = AureliaInterface;

  Element.prototype.defaultduration = 0.4;
  Element.prototype.to = function (options) {
    var duration = options.duration || this.defaultduration;
    delete options.duration;
    return TweenMax.to(this, duration, options);
  };

  Element.prototype.set = function (options) {
    return TweenMax.set(this, options);
  };
});
//# sourceMappingURL=data:application/json;base64,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QUFPLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUM7QUFDeEQsV0FBTyxPQUFPLENBQUMsUUFBUSxDQUFDO0FBQ3hCLFdBQU8sUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0dBQzdDLENBQUM7O0FBRUYsU0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDeEMsV0FBTyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRyxPQUFPLENBQUMsQ0FBQztHQUNyQyxDQUFDIiwiZmlsZSI6ImF1cmVsaWEtaW50ZXJmYWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZG9jdW1lbnQuYXVyZWxpYUludGVyZmFjZSA9IGRvY3VtZW50LmF1cmVsaWFJbnRlcmZhY2UgfHwgbmV3IE9iamVjdCgpO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJ1xuaW1wb3J0IHtJbnRlcmZhY2VDb250cm9sbGVyfSBmcm9tICcuL2NvbnRyb2xsZXInO1xuaW1wb3J0IHtJbnRlcmZhY2VBbmltYXRpb25TdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQvYW5pbWF0aW9uJztcbmltcG9ydCB7SW50ZXJmYWNlUGxhdGZvcm1TdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQvcGxhdGZvcm0nO1xuaW1wb3J0IHtJbnRlcmZhY2VCcm93c2VyU3VwcG9ydH0gZnJvbSAnLi9zdXBwb3J0L2Jyb3dzZXInO1xuaW1wb3J0IHtJbnRlcmZhY2VEZXZpY2VTdXBwb3J0fSBmcm9tICcuL3N1cHBvcnQvZGV2aWNlJztcbmltcG9ydCB7SW50ZXJmYWNlVGFwU3VwcG9ydH0gZnJvbSAnLi9zdXBwb3J0L3RhcCc7XG5pbXBvcnQge0ludGVyZmFjZVRhcEFjdGl2YXRvcn0gZnJvbSAnLi9zdXBwb3J0L3RhcC1hY3RpdmF0b3InO1xuaW1wb3J0IHtJbnRlcmZhY2VHZXN0dXJlc30gZnJvbSAnLi9zdXBwb3J0L2dlc3R1cmUnO1xuaW1wb3J0IHtBaX0gZnJvbSAnLi9haS1lbCc7XG5cbmV4cG9ydCBjbGFzcyBBdXJlbGlhSW50ZXJmYWNlIHtcblxuICB0YXAgICAgICA9IHt9O1xuICBzY3JvbGwgICA9IHt9O1xuICBkZXZpY2UgICA9IHt9O1xuICBrZXlib2FyZCA9IHt9O1xuICBwbGF0Zm9ybSA9IHt9O1xuICBhbmltYXRpb24gPSB7fTtcbiAgYWN0aXZhdG9yID0ge307XG4gIHRhcEFjdGl2YXRvciA9IHt9O1xuICB1dGlsID0ge307XG4gIHZpZXdzID0ge307XG4gIHRoZW1lID0gJ2xpZ2h0JztcblxuICBjb25zdHJ1Y3RvcihpbnRlcmZhY2VDaGFubmVsKSB7XG4gICAgZG9jdW1lbnQuYXVyZWxpYUludGVyZmFjZSA9IHRoaXM7XG4gICAgdGhpcy5jaGFubmVsID0gaW50ZXJmYWNlQ2hhbm5lbDtcbiAgICB2YXIgYWkgPSBBaSAvLyBFeHBvcnQgdG8gbG9jYWwgc2NvcGVcbiAgICBkb2N1bWVudC5hdXJlbGlhSW50ZXJmYWNlLmFpID0gQWk7IC8vIEV4cG9ydCBBaSB0byBBdXJlbGlhSW50ZXJmYWNlXG4gICAgd2luZG93LkFpID0gQWk7IC8vIEV4cG9ydCB0byBsb2NhbCBzY29wZVxuICAgIHdpbmRvdy5haSA9IGFpO1xuXG4gICAgdGhpcy5pbml0KFxuICAgICAgIHRoaXMudGFwQWN0aXZhdG9yIC8vPSBuZXcgSW50ZXJmYWNlVGFwQWN0aXZhdG9yKHRoaXMpXG4gICAgICAsdGhpcy5hbmltYXRpb24gICAgPSBuZXcgSW50ZXJmYWNlQW5pbWF0aW9uU3VwcG9ydCh0aGlzKVxuICAgICAgLHRoaXMucGxhdGZvcm0gICAgID0gbmV3IEludGVyZmFjZVBsYXRmb3JtU3VwcG9ydCh0aGlzKVxuICAgICAgLHRoaXMuYnJvd3NlciAgICAgID0gbmV3IEludGVyZmFjZUJyb3dzZXJTdXBwb3J0KHRoaXMpXG4gICAgICAsdGhpcy5kZXZpY2UgICAgICAgPSBuZXcgSW50ZXJmYWNlRGV2aWNlU3VwcG9ydCh0aGlzKVxuICAgICAgLHRoaXMudGFwICAgICAgICAgIC8vPSBuZXcgSW50ZXJmYWNlVGFwU3VwcG9ydCh0aGlzKVxuICAgICAgLHRoaXMuR2VzdHVyZXMgICAgIC8vPSBuZXcgSW50ZXJmYWNlR2VzdHVyZXModGhpcylcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW5pdCh0YXBBY3RpdmF0b3IsIGFuaW1hdGlvbiwgcGxhdGZvcm0sIGJyb3dzZXIsIGRldmljZSwgdGFwLCBHZXN0dXJlcykge1xuICAgIC8vIHBsYXRmb3JtLmluaXQoKTtcbiAgICAvLyBicm93c2VyLmluaXQoKTtcbiAgICAvLyBkZXZpY2UuaW5pdCgpO1xuICAgIC8vIHRhcC5yZWdpc3Rlcihkb2N1bWVudCk7XG5cbiAgICB0aGlzLmluaXRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLnNldFRoZW1lKHRoaXMudGhlbWUpO1xuXG4gICAgdGhpcy5jaGFubmVsLnN1YnNjcmliZSgnaW5pdC1jb250cm9sbGVyJywgKGNvbnRyb2xsZXIpPT4ge1xuICAgICAgY29udHJvbGxlci5pbml0KHRoaXMpO1xuICAgICAgdGhpcy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiAgICB9KTtcblxuICAgIC8vIGlmIChwbGF0Zm9ybS5pc0lPUygpICYmICFkZXZpY2UuaXNXZWJWaWV3KCkgJiYgZGV2aWNlLmlzTW9iaWxlKCkgJiYgcGxhdGZvcm0udmVyc2lvbiA+PSA3KSB7XG4gICAgLy8gICAgIGFpKCdtZXRhW25hbWU9XCJ2aWV3cG9ydFwiXScpLmxlbmd0aCA+IDAgJiYgYWkoJ21ldGFbbmFtZT1cInZpZXdwb3J0XCJdJykuYXR0cignY29udGVudCcpLmluZGV4T2YoJ21pbmltYWwtdWknKSA+PSAwO1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFV0aWwoKTtcbiAgfVxuXG4gIGluc3RydWN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBkZXZpY2U6IHRoaXMuZGV2aWNlLFxuICAgICAgcGxhdGZvcm06IHRoaXMucGxhdGZvcm0ucGxhdGZvcm0sXG4gICAgICBkZXZpY2VUeXBlOiB0aGlzLmRldmljZS5kZXZpY2UsXG4gICAgfVxuICB9XG5cbiAgcHVibGlzaChldmVudE5hbWUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFubmVsLnB1Ymxpc2goZXZlbnROYW1lLCBwYXlsb2FkKTtcbiAgfVxuXG4gIHN1YnNjcmliZShldmVudE5hbWUsIHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFubmVsLnN1YnNjcmliZShldmVudE5hbWUsIHBheWxvYWQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBpbml0TGlzdGVuZXJzXG4gICAqXG4gICAqIEluaXRpYWxpemUgYWxsIExpc3RlbmVycyBmb3IgY29tcG9uZW50IHVzYWdlXG4gICAqL1xuICBpbml0TGlzdGVuZXJzKCkge1xuXG4gICAgdGhpcy5zdWJzY3JpYmUoJ2NoYW5nZS1wbGF0Zm9ybScsIChwYXlsb2FkKT0+IHtcbiAgICAgIGxldCBvbGRQbGF0Zm9ybSA9IHRoaXMucGxhdGZvcm07XG4gICAgICB0aGlzLnBsYXRmb3JtID0gcGF5bG9hZC5wbGF0Zm9ybTtcbiAgICAgIHRoaXMuc2V0UGxhdGZvcm0ocGF5bG9hZC5wbGF0Zm9ybSwgb2xkUGxhdGZvcm0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpYmUoJ2NoYW5nZS10aGVtZScsIChwYXlsb2FkKT0+IHtcbiAgICAgIGxldCBvbGRUaGVtZSA9IHRoaXMudGhlbWU7XG4gICAgICB0aGlzLnRoZW1lID0gcGF5bG9hZC50aGVtZTtcbiAgICAgIHRoaXMuc2V0VGhlbWUocGF5bG9hZC50aGVtZSwgb2xkVGhlbWUpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBzZXRUaGVtZVxuICAgKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgaW50ZXJmYWNlIHRoZW1lLCBieVxuICAgKiAtIDEgU2V0dGluZyBhbmQgcmVtb3ZpbmcgdGhlIHByb3BlciBhdHRyaWJ1dGVzIHRvIGFuZCBmcm9tIHRoZSBib2R5XG4gICAqIC0gMiBQdWJsaXNoaW5nIHRoZSBwcm9wZXIgZXZlbnQgdG8gdGhlIEludGVyZmFjZUNoYW5uZWwsIGluIG9yZGVyIHRvIG5vdGlmeSBhbnkgY29tcG9uZW50IG9mIGEgVGhlbWUgY2hhbmdlXG4gICAqIC0gMyBEaXNwYXRjaCB0aGUgc2FtZSBldmVudCBvbiB0aGUgZG9jdW1lbnQsIGZvciBhbnl0aGluZyBsaXN0ZW5pbmcgdG8gZG9jdW1lbnQgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW25ld1RoZW1lXSAgW1RoZSBuZXcgbmFtZSBvZiB0aGUgaW50ZXJmYWNlLXRoZW1lXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2xhc3RUaGVtZV0gW1RoZSBsYXN0IG5hbWUgb2YgdGhlIGludGVyZmFjZS10aGVtZSwgaW4gb3JkZXIgdW5kbyB3aGF0IHdhcyBkb25lXVxuICAgKi9cbiAgc2V0VGhlbWUobmV3VGhlbWUsIGxhc3RUaGVtZSkge1xuICAgIGxhc3RUaGVtZSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgdGhlbWUtJHtsYXN0VGhlbWV9YCk7XG4gICAgbmV3VGhlbWUgICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKGB0aGVtZS0ke25ld1RoZW1lfWApO1xuICAgIHRoaXMucHVibGlzaCgndGhlbWUtY2hhbmdlZCcsIHRoaXMuZGV2aWNlSW5zdHJ1Y3Rpb24pO1xuICB9XG5cbiAgLyoqXG4gICAqIFByb3RvdHlwZSgpOiBzZXRQbGF0Zm9ybVxuICAgKlxuICAgKiBTZXQgdGhlIGN1cnJlbnQgaW50ZXJmYWNlIHBsYXRmb3JtLCBieVxuICAgKiAtIDEgU2V0dGluZyBhbmQgcmVtb3ZpbmcgdGhlIHByb3BlciBhdHRyaWJ1dGVzIHRvIGFuZCBmcm9tIHRoZSBib2R5XG4gICAqIC0gMiBQdWJsaXNoaW5nIHRoZSBwcm9wZXIgZXZlbnQgdG8gdGhlIEludGVyZmFjZUNoYW5uZWwsIGluIG9yZGVyIHRvIG5vdGlmeSBhbnkgY29tcG9uZW50IG9mIGEgUGxhdGZvcm0gY2hhbmdlXG4gICAqIC0gMyBEaXNwYXRjaCB0aGUgc2FtZSBldmVudCBvbiB0aGUgZG9jdW1lbnQsIGZvciBhbnl0aGluZyBsaXN0ZW5pbmcgdG8gZG9jdW1lbnQgZXZlbnRzLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gW25ld1BsYXRmb3JtXSAgW1RoZSBuZXcgbmFtZSBvZiB0aGUgaW50ZXJmYWNlLXBsYXRmb3JtXVxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2xhc3RQbGF0Zm9ybV0gW1RoZSBsYXN0IG5hbWUgb2YgdGhlIGludGVyZmFjZS1wbGF0Zm9ybSwgaW4gb3JkZXIgdW5kbyB3aGF0IHdhcyBkb25lXVxuICAgKi9cbiAgc2V0UGxhdGZvcm0obmV3UGxhdGZvcm0sIGxhc3RQbGF0Zm9ybSkge1xuICAgIHRoaXMuc2V0T1NYKG5ld1BsYXRmb3JtLCBsYXN0UGxhdGZvcm0pO1xuICAgIGxhc3RQbGF0Zm9ybSAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShgcGxhdGZvcm0tJHtsYXN0UGxhdGZvcm19YCk7XG4gICAgbmV3UGxhdGZvcm0gJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoYHBsYXRmb3JtLSR7bmV3UGxhdGZvcm19YCk7XG4gICAgdGhpcy5wdWJsaXNoKCdwbGF0Zm9ybS1jaGFuZ2VkJywgdGhpcy5kZXZpY2VJbnN0cnVjdGlvbik7XG4gIH1cblxuICBzZXRPU1gobmV3UGxhdGZvcm0sIGxhc3RQbGF0Zm9ybSkge1xuICAgIG5ld1BsYXRmb3JtID09PSAnb3N4JyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgncGxhdGZvcm0taW9zJyk7XG4gICAgbGFzdFBsYXRmb3JtID09PSAnb3N4JyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGxhdGZvcm0taW9zJyk7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBQcm90b3R5cGUoKTogdHJpZ2dlclxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gVHJpZ2dlciBhIG5ldyBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnRUeXBlIFRoZSBldmVudCB0byB0cmlnZ2VyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YSBUaGUgZGF0YSBmb3IgdGhlIGV2ZW50LiBIaW50OiBwYXNzIGluXG4gICAqICAgICAgIGB7dGFyZ2V0OiB0YXJnZXRFbGVtZW50fWBcbiAgICogQHBhcmFtIHtib29sZWFufSBidWJibGVzIFdoZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBidWJibGUgdXAgdGhlIERPTS5cbiAgICogQHBhcmFtIHtib29sZWFufSBjYW5jZWxhYmxlIFdoZXRoZXIgdGhlIGV2ZW50IHNob3VsZCBiZSBjYW5jZWxhYmxlLlxuICAgKi9cbiAgdHJpZ2dlcihldmVudFR5cGUsIGRhdGEsIGJ1YmJsZXMsIGNhbmNlbGFibGUpIHtcbiAgICB2YXIgZXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoZXZlbnRUeXBlLCB7XG4gICAgICBkZXRhaWw6IGRhdGEsXG4gICAgICBidWJibGVzOiAhIWJ1YmJsZXMsXG4gICAgICBjYW5jZWxhYmxlOiAhIWNhbmNlbGFibGVcbiAgICB9KTtcbiAgICAvLyBNYWtlIHN1cmUgdG8gdHJpZ2dlciB0aGUgZXZlbnQgb24gdGhlIGdpdmVuIHRhcmdldCwgb3IgZGlzcGF0Y2ggaXQgZnJvbVxuICAgIC8vIHRoZSB3aW5kb3cgaWYgd2UgZG9uJ3QgaGF2ZSBhbiBldmVudCB0YXJnZXRcbiAgICBkYXRhICYmIGRhdGEudGFyZ2V0ICYmIGRhdGEudGFyZ2V0LmRpc3BhdGNoRXZlbnQgJiYgZGF0YS50YXJnZXQuZGlzcGF0Y2hFdmVudChldmVudCkgfHwgd2luZG93LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICB9XG5cbiAgc2V0VXRpbCAoKSB7XG4gICAgdGhpcy51dGlsLmlzVG91Y2ggPSB0aGlzLmRldmljZS5pc1RvdWNoKCk7XG4gICAgdGhpcy51dGlsLmNsaWNrRXZlbnQgPSB0aGlzLnV0aWwuaXNUb3VjaCA/ICd0b3VjaHN0YXJ0JyA6ICdjbGljayc7XG4gIH1cbn1cblxuRWxlbWVudC5wcm90b3R5cGUuZGVmYXVsdGR1cmF0aW9uID0gMC40O1xuRWxlbWVudC5wcm90b3R5cGUudG8gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciBkdXJhdGlvbiA9IG9wdGlvbnMuZHVyYXRpb24gfHwgdGhpcy5kZWZhdWx0ZHVyYXRpb247XG4gIGRlbGV0ZSBvcHRpb25zLmR1cmF0aW9uO1xuICByZXR1cm4gVHdlZW5NYXgudG8odGhpcywgZHVyYXRpb24sIG9wdGlvbnMpO1xufTtcblxuRWxlbWVudC5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICByZXR1cm4gVHdlZW5NYXguc2V0KHRoaXMsICBvcHRpb25zKTtcbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
