/* */ 
define(['exports', 'aurelia-pal', './browser', './platform', './device', './support'], function (exports, _aureliaPal, _browser, _platform, _device, _support) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  var browser = new _browser.Browser();
  var platform = new _platform.Platform();
  var device = new _device.Device();
  var support = new _support.Support(browser, platform);
  var isTouch = support.isTouch;
  var clickEvent = support.clickEvent;

  exports.Browser = _browser.Browser;
  exports.Platform = _platform.Platform;
  exports.Device = _device.Device;
  exports.Support = _support.Support;
  exports.browser = browser;
  exports.platform = platform;
  exports.device = device;
  exports.support = support;
  exports.isTouch = isTouch;
  exports.clickEvent = clickEvent;

  function configure(framework, config) {

    return config && typeof config === 'function' && config({
      setClassList: function setClassList(element) {
        if (element instanceof Element) {
          platform.setClassList(element);
          browser.setClassList(element);
          device.setClassList(element);
        }
      },
      setViewPort: function setViewPort(name) {
        platform.viewport(name);
      },
      webAppCapable: function webAppCapable() {
        platform.webAppCapable(name);
      },
      statusBar: function statusBar(color) {
        platform.statusBar(color);
      }
    });
  }
});