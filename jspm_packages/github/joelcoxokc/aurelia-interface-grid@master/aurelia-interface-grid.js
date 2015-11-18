/* */ 
define(["exports","./aurelia-interface-grid.css!css"], function (exports, _aureliaInterfaceGridCss) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function configure(framework) {
    framework.globalResources('./flexible');
  }
});