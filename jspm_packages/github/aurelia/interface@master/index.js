/* */ 
define(['exports', 'velocity', './aurelia-interface', './channel', 'aurelia-event-aggregator', 'aurelia-interface-platforms', './util/events', './AINavbarController', './controller', './AILayoutController', './AIViewController', './AIDialogController', './AIAnimation'], function (exports, _velocity, _aureliaInterface, _channel, _aureliaEventAggregator, _aureliaInterfacePlatforms, _utilEvents, _AINavbarController, _controller, _AILayoutController, _AIViewController, _AIDialogController, _AIAnimation) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.configure = configure;

  function _interopExportWildcard(obj, defaults) { var newObj = defaults({}, obj); delete newObj['default']; return newObj; }

  function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _Velocity = _interopRequireDefault(_velocity);

  _defaults(exports, _interopExportWildcard(_AINavbarController, _defaults));

  Object.defineProperty(exports, 'InterfaceController', {
    enumerable: true,
    get: function get() {
      return _controller.InterfaceController;
    }
  });
  Object.defineProperty(exports, 'AILayoutController', {
    enumerable: true,
    get: function get() {
      return _AILayoutController.AILayoutController;
    }
  });
  Object.defineProperty(exports, 'AIViewController', {
    enumerable: true,
    get: function get() {
      return _AIViewController.AIViewController;
    }
  });
  Object.defineProperty(exports, 'AIDialogController', {
    enumerable: true,
    get: function get() {
      return _AIDialogController.AIDialogController;
    }
  });
  Object.defineProperty(exports, 'AnimationPipeline', {
    enumerable: true,
    get: function get() {
      return _AIAnimation.AnimationPipeline;
    }
  });

  Element.prototype.Velocity = function () {
    return _Velocity['default'].bind(_Velocity['default'], this);
  };
  _utilEvents.EventDetection.detect();

  function configure(framework, config) {
    var ea = framework.container.get(_aureliaEventAggregator.EventAggregator);
    var interfaceChannel = new _channel.InterfaceChannel(ea);
    var aureliaInterface = new _aureliaInterface.AureliaInterface(interfaceChannel);

    framework.instance(aureliaInterface, _aureliaInterface.AureliaInterface);
    framework.instance(interfaceChannel, _channel.InterfaceChannel);

    framework.globalResources('./ai-activate');
    framework.globalResources('./ai-navigate');
    framework.globalResources('./touch');
    framework.globalResources('./swipe');
    framework.globalResources('./pressure');
    framework.globalResources('./elements/button');
    framework.globalResources('./components/template');
    framework.globalResources('./components/view');
    framework.globalResources('./components/router-view');

    return config && typeof config === 'function' && config({
      icons: function icons() {
        framework.globalResources('./elements/icon');
        framework.globalResources('./elements/md-icon');
        framework.globalResources('core.css!');
      },
      core: function core() {
        framework.globalResources('./elements/icon');
        framework.globalResources('./elements/md-icon');
        framework.globalResources('./elements/button');
        framework.globalResources('./elements/item');
        framework.globalResources('./elements/item-header');
        framework.globalResources('./elements/list');
        framework.globalResources('./elements/tile');
        framework.globalResources('./elements/help');
        framework.globalResources('./ai-activate');
      },
      elements: function elements() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        args.forEach(function (a) {
          framework.globalResources('./elements/' + a);
        });
      },
      layout: function layout() {
        framework.globalResources('./layout.css!');
        framework.globalResources('./components/view', './components/view-bar', './elements/navbar', './components/router-view');
      },
      platform: function platform(_platform) {
        _platform = _platform || _aureliaInterfacePlatforms.platform.name;
        if (_platform !== 'ios' && _platform !== 'android') _platform = 'ai';
        framework.plugin('aurelia-interface-platforms', function (_config) {
          _config.setClassList(document.documentElement);
          _config.setViewPort();
        });
        framework.globalResources(_platform + '.css!');
      },
      globalizeAll: function globalizeAll() {
        this.core();
        this.layout();
        framework.globalResources('./components/accordion');
        framework.globalResources('./forms/form');
      },
      theme: function theme(_theme) {
        interfaceChannel.publish('change-theme', { theme: _theme });
      },
      normalize: function normalize() {
        framework.globalResources('normalize.css!');
      },
      feature: function feature(feat) {
        framework.globalResources('./' + feat);
      }
    });
  }
});
//# sourceMappingURL=data:application/json;base64,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LEVBQUEsaUJBQUMsSUFBSSxFQUFFO0FBQ1osaUJBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxHQUFDLElBQUksQ0FBQyxDQUFDO09BQ3RDO0tBQ0YsQ0FBQyxDQUFDO0dBQ0oiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQge1N5bnRheEludGVycHJldGVyfSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmctYmluZGluZyc7XG4vLyBpbXBvcnQge1JvdXRlcn0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInO1xuICAvLyBzeW50YXhbJ2FjdGl2YXRlJ10gPSBhY3RpdmF0ZVJlZi5iaW5kKHN5bnRheCk7XG4gIC8vIHZhciBzeW50YXggPSBmcmFtZXdvcmsuY29udGFpbmVyLmdldChTeW50YXhJbnRlcnByZXRlcik7XG5leHBvcnQgKiBmcm9tICcuL0FJTmF2YmFyQ29udHJvbGxlcic7XG5pbXBvcnQgVmVsb2NpdHkgZnJvbSAndmVsb2NpdHknO1xuaW1wb3J0IHtBdXJlbGlhSW50ZXJmYWNlfSBmcm9tICcuL2F1cmVsaWEtaW50ZXJmYWNlJztcbmltcG9ydCB7SW50ZXJmYWNlQ2hhbm5lbH0gZnJvbSAnLi9jaGFubmVsJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtwbGF0Zm9ybSwgYnJvd3NlciwgZGV2aWNlfSBmcm9tICdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnO1xuaW1wb3J0IHtFdmVudERldGVjdGlvbn0gZnJvbSAnLi91dGlsL2V2ZW50cyc7XG5leHBvcnQge0ludGVyZmFjZUNvbnRyb2xsZXJ9IGZyb20gJy4vY29udHJvbGxlcic7XG5leHBvcnQge0FJTGF5b3V0Q29udHJvbGxlcn0gZnJvbSAnLi9BSUxheW91dENvbnRyb2xsZXInO1xuZXhwb3J0IHtBSVZpZXdDb250cm9sbGVyfSBmcm9tICcuL0FJVmlld0NvbnRyb2xsZXInO1xuZXhwb3J0IHtBSURpYWxvZ0NvbnRyb2xsZXJ9IGZyb20gJy4vQUlEaWFsb2dDb250cm9sbGVyJztcbmV4cG9ydCB7QW5pbWF0aW9uUGlwZWxpbmV9IGZyb20gJy4vQUlBbmltYXRpb24nO1xuXG5FbGVtZW50LnByb3RvdHlwZS5WZWxvY2l0eSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gVmVsb2NpdHkuYmluZChWZWxvY2l0eSwgdGhpcyk7XG59XG5FdmVudERldGVjdGlvbi5kZXRlY3QoKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmssIGNvbmZpZykge1xuICB2YXIgZWEgPSBmcmFtZXdvcmsuY29udGFpbmVyLmdldChFdmVudEFnZ3JlZ2F0b3IpO1xuICB2YXIgaW50ZXJmYWNlQ2hhbm5lbCA9IG5ldyBJbnRlcmZhY2VDaGFubmVsKGVhKTtcbiAgdmFyIGF1cmVsaWFJbnRlcmZhY2UgPSBuZXcgQXVyZWxpYUludGVyZmFjZShpbnRlcmZhY2VDaGFubmVsKTtcblxuICAvLyBmcmFtZXdvcmsucGx1Z2luKCdhdXJlbGlhLWFuaW1hdG9yLXZlbG9jaXR5Jyk7XG4gIC8vIGZyYW1ld29yay5pbnN0YW5jZShhY3RpdmF0b3IsIEFjdGl2YXRvcik7XG4gIGZyYW1ld29yay5pbnN0YW5jZShhdXJlbGlhSW50ZXJmYWNlLCBBdXJlbGlhSW50ZXJmYWNlKTtcbiAgZnJhbWV3b3JrLmluc3RhbmNlKGludGVyZmFjZUNoYW5uZWwsIEludGVyZmFjZUNoYW5uZWwpO1xuXG4gIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vYWktYWN0aXZhdGUnKTtcbiAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9haS1uYXZpZ2F0ZScpO1xuICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL3RvdWNoJyk7XG4gIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vc3dpcGUnKTtcbiAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9wcmVzc3VyZScpO1xuICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL2J1dHRvbicpO1xuICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2NvbXBvbmVudHMvdGVtcGxhdGUnKTtcbiAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9jb21wb25lbnRzL3ZpZXcnKTtcbiAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9jb21wb25lbnRzL3JvdXRlci12aWV3Jyk7XG5cbiAgcmV0dXJuIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZyA9PT0gJ2Z1bmN0aW9uJykgJiYgY29uZmlnKHtcbiAgICBpY29ucygpIHtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvaWNvbicpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9tZC1pY29uJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCdjb3JlLmNzcyEnKTtcbiAgICB9LFxuICAgIGNvcmUoKSB7XG4gICAgICAvLyBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKGBjb3JlLmNzcyFgKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvaWNvbicpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9tZC1pY29uJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL2J1dHRvbicpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9pdGVtJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL2l0ZW0taGVhZGVyJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2VsZW1lbnRzL2xpc3QnKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvdGlsZScpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9lbGVtZW50cy9oZWxwJyk7XG4gICAgICBmcmFtZXdvcmsuZ2xvYmFsUmVzb3VyY2VzKCcuL2FpLWFjdGl2YXRlJyk7XG4gICAgfSxcbiAgICBlbGVtZW50cyguLi5hcmdzKSB7XG4gICAgICBhcmdzLmZvckVhY2goYSA9PiB7XG4gICAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZWxlbWVudHMvJythKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgbGF5b3V0KCkge1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcygnLi9sYXlvdXQuY3NzIScpO1xuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcyhcbiAgICAgICAgICcuL2NvbXBvbmVudHMvdmlldydcbiAgICAgICAgLCcuL2NvbXBvbmVudHMvdmlldy1iYXInXG4gICAgICAgICwnLi9lbGVtZW50cy9uYXZiYXInXG4gICAgICAgICwnLi9jb21wb25lbnRzL3JvdXRlci12aWV3J1xuICAgICAgKTtcbiAgICB9LFxuICAgIHBsYXRmb3JtKF9wbGF0Zm9ybSkge1xuICAgICAgX3BsYXRmb3JtID0gX3BsYXRmb3JtIHx8IHBsYXRmb3JtLm5hbWU7XG4gICAgICBpZiAoX3BsYXRmb3JtICE9PSAnaW9zJyAmJiBfcGxhdGZvcm0gIT09ICdhbmRyb2lkJykgX3BsYXRmb3JtID0gJ2FpJztcbiAgICAgIGZyYW1ld29yay5wbHVnaW4oJ2F1cmVsaWEtaW50ZXJmYWNlLXBsYXRmb3JtcycsIF9jb25maWcgPT4ge1xuICAgICAgICBfY29uZmlnLnNldENsYXNzTGlzdChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgICAgICBfY29uZmlnLnNldFZpZXdQb3J0KCk7XG4gICAgICB9KVxuICAgICAgZnJhbWV3b3JrLmdsb2JhbFJlc291cmNlcyhgJHtfcGxhdGZvcm19LmNzcyFgKTtcbiAgICB9LFxuICAgIGdsb2JhbGl6ZUFsbCgpIHtcbiAgICAgIHRoaXMuY29yZSgpO1xuICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vY29tcG9uZW50cy9hY2NvcmRpb24nKTtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vZm9ybXMvZm9ybScpO1xuICAgIH0sXG4gICAgdGhlbWUodGhlbWUpIHtcbiAgICAgIGludGVyZmFjZUNoYW5uZWwucHVibGlzaCgnY2hhbmdlLXRoZW1lJywge3RoZW1lfSlcbiAgICB9LFxuICAgIG5vcm1hbGl6ZSgpIHtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJ25vcm1hbGl6ZS5jc3MhJyk7XG4gICAgfSxcbiAgICBmZWF0dXJlKGZlYXQpIHtcbiAgICAgIGZyYW1ld29yay5nbG9iYWxSZXNvdXJjZXMoJy4vJytmZWF0KTtcbiAgICB9XG4gIH0pO1xufVxuXG5cbi8vIGV4cG9ydCAqIGZyb20gJy4vdmlldy92aWV3LWNvbnRyb2xsZXInO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
