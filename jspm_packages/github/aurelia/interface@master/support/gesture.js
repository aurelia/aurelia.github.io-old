/* */ 
define(['exports', '../config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var __ai;

  var config = _config.InterfaceConfig.gestureConfig;

  function setup() {
    if (__ai.Gestures.READY) {
      return;
    }

    __ai.Gestures.event.determineEventTypes();

    for (var name in __ai.Gestures.gestures) {
      if (__ai.Gestures.gestures.hasOwnProperty(name)) {
        __ai.Gestures.detection.register(__ai.Gestures.gestures[name]);
      }
    }

    __ai.Gestures.event.onTouch(__ai.Gestures.DOCUMENT, __ai.Gestures.EVENT_MOVE, __ai.Gestures.detection.detect);
    __ai.Gestures.event.onTouch(__ai.Gestures.DOCUMENT, __ai.Gestures.EVENT_END, __ai.Gestures.detection.detect);

    __ai.Gestures.READY = true;
  }

  var Gesture = (function () {
    function Gesture(element) {
      var _this = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      _classCallCheck(this, Gesture);

      if (element === null) {
        console.error('Null element passed to gesture (element does not exist). Not listening for gesture');
        return this;
      }

      setup();

      this.element = element;

      this.enabled = true;

      this.options = __ai.Gestures.utils.extend(__ai.Gestures.utils.extend({}, __ai.Gestures.defaults), options || {});

      if (this.options.stop_browser_behavior) {
        __ai.Gestures.utils.stopDefaultBrowserBehavior(this.element, this.options.stop_browser_behavior);
      }

      __ai.Gestures.event.onTouch(element, __ai.Gestures.EVENT_START, function (ev) {
        if (_this.enabled) {
          __ai.Gestures.detection.startDetect(_this, ev);
        }
      });

      return this;
    }

    _createClass(Gesture, [{
      key: 'on',
      value: function on(gesture, handler) {
        var gestures = gesture.split(' ');
        for (var t = 0; t < gestures.length; t++) {
          this.element.addEventListener(gestures[t], handler, false);
        }
        return this;
      }
    }, {
      key: 'off',
      value: function off(gesture, handler) {
        var gestures = gesture.split(' ');
        for (var t = 0; t < gestures.length; t++) {
          this.element.removeEventListener(gestures[t], handler, false);
        }
        return this;
      }
    }, {
      key: 'trigger',
      value: function trigger(gesture, eventData) {
        var event = __ai.Gestures.DOCUMENT.createEvent('Event');
        event.initEvent(gesture, true, true);
        event.gesture = eventData;

        var element = this.element;
        if (__ai.Gestures.utils.hasParent(eventData.target, element)) {
          element = eventData.target;
        }

        element.dispatchEvent(event);
        return this;
      }
    }, {
      key: 'enable',
      value: function enable(state) {
        this.enabled = state;
        return this;
      }
    }]);

    return Gesture;
  })();

  var last_move_event = null;

  var enable_detect = false;

  var touch_triggered = false;

  var InterfaceGestures = function InterfaceGestures(aureliaInterface) {
    _classCallCheck(this, InterfaceGestures);

    this.defaults = {
      stop_browser_behavior: 'disable-user-behavior'
    };
    this.HAS_POINTEREVENTS = _config.InterfaceConfig.IS_POINTEREVENTS;
    this.HAS_TOUCHEVENTS = _config.InterfaceConfig.IS_TOUCH;
    this.NO_MOUSEEVENTS = _config.InterfaceConfig.NO_MOUSEEVENTS;
    this.EVENT_TYPES = {};
    this.DIRECTION_UP = config.DIRECTION_UP;
    this.DIRECTION_DOWN = config.DIRECTION_DOWN;
    this.DIRECTION_LEFT = config.DIRECTION_LEFT;
    this.DIRECTION_RIGHT = config.DIRECTION_RIGHT;
    this.POINTER_MOUSE = config.POINTER_MOUSE;
    this.POINTER_TOUCH = config.POINTER_TOUCH;
    this.POINTER_PEN = config.POINTER_PEN;
    this.EVENT_START = config.EVENT_START;
    this.EVENT_MOVE = config.EVENT_MOVE;
    this.EVENT_END = config.EVENT_END;
    this.DOCUMENT = _config.InterfaceConfig.DOCUMENT;
    this.plugins = {};
    this.READY = false;
    this.event = new GesturesEvent();
    this.utils = new GesturesUtils();
    this.detection = new GesturesDetection();
    this.PointerEvent = new GesturesPointerEvent();
    this.gestures = {
      Hold: new HoldGesture(),
      Tap: new TapGesture(),
      Swipe: new SwipeGesture(),
      Drag: new DragGesture(),
      Transform: new TransformGesture(),
      Touch: new TouchGesture(),
      Release: new ReleaseGesture()
    };

    __ai = aureliaInterface;
    __ai.Gesture = function (element) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return new Gesture(element, options);
    };
  };

  exports.InterfaceGestures = InterfaceGestures;

  var GesturesEvent = (function () {
    function GesturesEvent() {
      _classCallCheck(this, GesturesEvent);
    }

    _createClass(GesturesEvent, [{
      key: 'bindDom',
      value: function bindDom(element, type, handler) {
        var types = type.split(' ');
        for (var t = 0; t < types.length; t++) {
          element.addEventListener(types[t], handler, false);
        }
      }
    }, {
      key: 'onTouch',
      value: function onTouch(element, eventType, handler) {
        var self = this;

        this.bindDom(element, __ai.Gestures.EVENT_TYPES[eventType], function bindDomOnTouch(ev) {
          var sourceEventType = ev.type.toLowerCase();

          if (sourceEventType.match(/mouse/) && touch_triggered) {
            return;
          } else if (sourceEventType.match(/touch/) || sourceEventType.match(/pointerdown/) || sourceEventType.match(/mouse/) && ev.which === 1) {
                enable_detect = true;
              } else if (sourceEventType.match(/mouse/) && ev.which !== 1) {
                enable_detect = false;
              }

          if (sourceEventType.match(/touch|pointer/)) {
            touch_triggered = true;
          }

          var count_touches = 0;

          if (enable_detect) {
            if (__ai.Gestures.HAS_POINTEREVENTS && eventType != __ai.Gestures.EVENT_END) {
              count_touches = __ai.Gestures.PointerEvent.updatePointer(eventType, ev);
            } else if (sourceEventType.match(/touch/)) {
                count_touches = ev.touches.length;
              } else if (!touch_triggered) {
                  count_touches = sourceEventType.match(/up/) ? 0 : 1;
                }

            if (count_touches > 0 && eventType == __ai.Gestures.EVENT_END) {
              eventType = __ai.Gestures.EVENT_MOVE;
            } else if (!count_touches) {
                eventType = __ai.Gestures.EVENT_END;
              }

            if (count_touches || last_move_event === null) {
              last_move_event = ev;
            }

            handler.call(__ai.Gestures.detection, self.collectEventData(element, eventType, self.getTouchList(last_move_event, eventType), ev));

            if (__ai.Gestures.HAS_POINTEREVENTS && eventType == __ai.Gestures.EVENT_END) {
              count_touches = __ai.Gestures.PointerEvent.updatePointer(eventType, ev);
            }
          }

          if (!count_touches) {
            last_move_event = null;
            enable_detect = false;
            touch_triggered = false;
            __ai.Gestures.PointerEvent.reset();
          }
        });
      }
    }, {
      key: 'determineEventTypes',
      value: function determineEventTypes() {
        var types;

        if (__ai.Gestures.HAS_POINTEREVENTS) {
          types = __ai.Gestures.PointerEvent.getEvents();
        } else if (__ai.Gestures.NO_MOUSEEVENTS) {
            types = ['touchstart', 'touchmove', 'touchend touchcancel'];
          } else {
              types = ['touchstart mousedown', 'touchmove mousemove', 'touchend touchcancel mouseup'];
            }

        __ai.Gestures.EVENT_TYPES[__ai.Gestures.EVENT_START] = types[0];
        __ai.Gestures.EVENT_TYPES[__ai.Gestures.EVENT_MOVE] = types[1];
        __ai.Gestures.EVENT_TYPES[__ai.Gestures.EVENT_END] = types[2];
      }
    }, {
      key: 'getTouchList',
      value: function getTouchList(ev) {
        if (__ai.Gestures.HAS_POINTEREVENTS) {
          return __ai.Gestures.PointerEvent.getTouchList();
        } else if (ev.touches) {
            return ev.touches;
          } else {
              ev.identifier = 1;
              return [ev];
            }
      }
    }, {
      key: 'collectEventData',
      value: function collectEventData(element, eventType, touches, ev) {
        var pointerType = __ai.Gestures.POINTER_TOUCH;
        if (ev.type.match(/mouse/) || __ai.Gestures.PointerEvent.matchType(__ai.Gestures.POINTER_MOUSE, ev)) {
          pointerType = __ai.Gestures.POINTER_MOUSE;
        }

        return {
          center: __ai.Gestures.utils.getCenter(touches),
          timeStamp: new Date().getTime(),
          target: ev.target,
          touches: touches,
          eventType: eventType,
          pointerType: pointerType,
          srcEvent: ev,

          preventDefault: function preventDefault() {
            if (this.srcEvent.preventManipulation) {
              this.srcEvent.preventManipulation();
            }

            if (this.srcEvent.preventDefault) {}
          },

          stopPropagation: function stopPropagation() {
            this.srcEvent.stopPropagation();
          },

          stopDetect: function stopDetect() {
            return __ai.Gestures.detection.stopDetect();
          }
        };
      }
    }]);

    return GesturesEvent;
  })();

  var GesturesPointerEvent = (function () {
    function GesturesPointerEvent() {
      _classCallCheck(this, GesturesPointerEvent);

      this.pointers = {};
    }

    _createClass(GesturesPointerEvent, [{
      key: 'getTouchList',
      value: function getTouchList() {
        var self = this;
        var touchlist = [];

        Object.keys(self.pointers).sort().forEach(function (id) {
          touchlist.push(self.pointers[id]);
        });
        return touchlist;
      }
    }, {
      key: 'updatePointer',
      value: function updatePointer(type, pointerEvent) {
        if (type == __ai.Gestures.EVENT_END) {
          this.pointers = {};
        } else {
          pointerEvent.identifier = pointerEvent.pointerId;
          this.pointers[pointerEvent.pointerId] = pointerEvent;
        }

        return Object.keys(this.pointers).length;
      }
    }, {
      key: 'matchType',
      value: function matchType(pointerType, ev) {
        if (!ev.pointerType) {
          return false;
        }

        var types = {};
        types[__ai.Gestures.POINTER_MOUSE] = ev.pointerType == ev.MSPOINTER_TYPE_MOUSE || ev.pointerType == __ai.Gestures.POINTER_MOUSE;
        types[__ai.Gestures.POINTER_TOUCH] = ev.pointerType == ev.MSPOINTER_TYPE_TOUCH || ev.pointerType == __ai.Gestures.POINTER_TOUCH;
        types[__ai.Gestures.POINTER_PEN] = ev.pointerType == ev.MSPOINTER_TYPE_PEN || ev.pointerType == __ai.Gestures.POINTER_PEN;
        return types[pointerType];
      }
    }, {
      key: 'getEvents',
      value: function getEvents() {
        return ['pointerdown MSPointerDown', 'pointermove MSPointerMove', 'pointerup pointercancel MSPointerUp MSPointerCancel'];
      }
    }, {
      key: 'reset',
      value: function reset() {

        this.pointers = {};
      }
    }]);

    return GesturesPointerEvent;
  })();

  var GesturesUtils = (function () {
    function GesturesUtils() {
      _classCallCheck(this, GesturesUtils);
    }

    _createClass(GesturesUtils, [{
      key: 'extend',
      value: function extend(dest, src, merge) {
        for (var key in src) {
          if (dest[key] !== undefined && merge) {
            continue;
          }
          dest[key] = src[key];
        }
        return dest;
      }
    }, {
      key: 'hasParent',
      value: function hasParent(node, parent) {
        while (node) {
          if (node == parent) {
            return true;
          }
          node = node.parentNode;
        }
        return false;
      }
    }, {
      key: 'getCenter',
      value: function getCenter(touches) {
        var valuesX = [],
            valuesY = [];

        for (var t = 0, len = touches.length; t < len; t++) {
          valuesX.push(touches[t].pageX);
          valuesY.push(touches[t].pageY);
        }

        return {
          pageX: (Math.min.apply(Math, valuesX) + Math.max.apply(Math, valuesX)) / 2,
          pageY: (Math.min.apply(Math, valuesY) + Math.max.apply(Math, valuesY)) / 2
        };
      }
    }, {
      key: 'getVelocity',
      value: function getVelocity(delta_time, delta_x, delta_y) {
        return {
          x: Math.abs(delta_x / delta_time) || 0,
          y: Math.abs(delta_y / delta_time) || 0
        };
      }
    }, {
      key: 'getAngle',
      value: function getAngle(touch1, touch2) {
        var y = touch2.pageY - touch1.pageY,
            x = touch2.pageX - touch1.pageX;
        return Math.atan2(y, x) * 180 / Math.PI;
      }
    }, {
      key: 'getDirection',
      value: function getDirection(touch1, touch2) {
        var x = Math.abs(touch1.pageX - touch2.pageX),
            y = Math.abs(touch1.pageY - touch2.pageY);

        if (x >= y) {
          return touch1.pageX - touch2.pageX > 0 ? __ai.Gestures.DIRECTION_LEFT : __ai.Gestures.DIRECTION_RIGHT;
        } else {
          return touch1.pageY - touch2.pageY > 0 ? __ai.Gestures.DIRECTION_UP : __ai.Gestures.DIRECTION_DOWN;
        }
      }
    }, {
      key: 'getDistance',
      value: function getDistance(touch1, touch2) {
        var x = touch2.pageX - touch1.pageX,
            y = touch2.pageY - touch1.pageY;
        return Math.sqrt(x * x + y * y);
      }
    }, {
      key: 'getScale',
      value: function getScale(start, end) {
        if (start.length >= 2 && end.length >= 2) {
          return this.getDistance(end[0], end[1]) / this.getDistance(start[0], start[1]);
        }
        return 1;
      }
    }, {
      key: 'getRotation',
      value: function getRotation(start, end) {
        if (start.length >= 2 && end.length >= 2) {
          return this.getAngle(end[1], end[0]) - this.getAngle(start[1], start[0]);
        }
        return 0;
      }
    }, {
      key: 'isVertical',
      value: function isVertical(direction) {

        return direction == __ai.Gestures.DIRECTION_UP || direction == __ai.Gestures.DIRECTION_DOWN;
      }
    }, {
      key: 'stopDefaultBrowserBehavior',
      value: function stopDefaultBrowserBehavior(element, css_class) {
        if (element && element.classList) {
          element.classList.add(css_class);
          element.onselectstart = function () {
            return false;
          };
        }
      }
    }]);

    return GesturesUtils;
  })();

  var GesturesDetection = (function () {
    function GesturesDetection() {
      _classCallCheck(this, GesturesDetection);

      this.gestures = [];
      this.current = null;
      this.previous = null;
      this.stopped = false;
    }

    _createClass(GesturesDetection, [{
      key: 'startDetect',
      value: function startDetect(inst, eventData) {
        if (this.current) {
          return;
        }

        this.stopped = false;

        this.current = {
          inst: inst,
          startEvent: __ai.Gestures.utils.extend({}, eventData),
          lastEvent: false,
          name: '' };

        this.detect(eventData);
      }
    }, {
      key: 'detect',
      value: function detect(eventData) {
        if (!this.current || this.stopped) {
          return null;
        }

        eventData = this.extendEventData(eventData);

        var inst_options = this.current.inst.options;

        for (var g = 0, len = this.gestures.length; g < len; g++) {
          var gesture = this.gestures[g];

          if (!this.stopped && inst_options[gesture.name] !== false) {
            if (gesture.handler.call(gesture, eventData, this.current.inst) === false) {
              this.stopDetect();
              break;
            }
          }
        }

        if (this.current) {
          this.current.lastEvent = eventData;
        }

        if (eventData.eventType == __ai.Gestures.EVENT_END && !eventData.touches.length - 1) {
          this.stopDetect();
        }

        return eventData;
      }
    }, {
      key: 'stopDetect',
      value: function stopDetect() {
        this.previous = __ai.Gestures.utils.extend({}, this.current);

        this.current = null;

        this.stopped = true;
      }
    }, {
      key: 'extendEventData',
      value: function extendEventData(ev) {
        var startEv = this.current.startEvent;

        if (startEv && (ev.touches.length != startEv.touches.length || ev.touches === startEv.touches)) {
          startEv.touches = [];
          for (var i = 0, len = ev.touches.length; i < len; i++) {
            startEv.touches.push(__ai.Gestures.utils.extend({}, ev.touches[i]));
          }
        }

        var delta_time = ev.timeStamp - startEv.timeStamp,
            delta_x = ev.center.pageX - startEv.center.pageX,
            delta_y = ev.center.pageY - startEv.center.pageY,
            velocity = __ai.Gestures.utils.getVelocity(delta_time, delta_x, delta_y);

        __ai.Gestures.utils.extend(ev, {
          deltaTime: delta_time,
          deltaX: delta_x,
          deltaY: delta_y,

          velocityX: velocity.x,
          velocityY: velocity.y,

          distance: __ai.Gestures.utils.getDistance(startEv.center, ev.center),
          angle: __ai.Gestures.utils.getAngle(startEv.center, ev.center),
          direction: __ai.Gestures.utils.getDirection(startEv.center, ev.center),

          scale: __ai.Gestures.utils.getScale(startEv.touches, ev.touches),
          rotation: __ai.Gestures.utils.getRotation(startEv.touches, ev.touches),

          startEvent: startEv
        });

        return ev;
      }
    }, {
      key: 'register',
      value: function register(gesture) {
        var options = gesture.defaults || {};
        if (options[gesture.name] === undefined) {
          options[gesture.name] = true;
        }

        __ai.Gestures.utils.extend(__ai.Gestures.defaults, options, true);

        gesture.index = gesture.index || 1000;

        this.gestures.push(gesture);

        this.gestures.sort(function (a, b) {
          if (a.index < b.index) {
            return -1;
          }
          if (a.index > b.index) {
            return 1;
          }
          return 0;
        });

        return this.gestures;
      }
    }]);

    return GesturesDetection;
  })();

  var HoldGesture = (function () {
    function HoldGesture() {
      _classCallCheck(this, HoldGesture);

      this.name = 'hold';
      this.index = 10;
      this.defaults = {
        hold_timeout: 500,
        hold_threshold: 1
      };
      this.timer = null;
    }

    _createClass(HoldGesture, [{
      key: 'handler',
      value: function handler(ev, inst) {
        switch (ev.eventType) {
          case __ai.Gestures.EVENT_START:
            clearTimeout(this.timer);

            __ai.Gestures.detection.current.name = this.name;

            this.timer = setTimeout(function () {
              if (__ai.Gestures.detection.current.name == 'hold') {
                __ai.tap.cancelClick();
                inst.trigger('hold', ev);
              }
            }, inst.options.hold_timeout);
            break;

          case __ai.Gestures.EVENT_MOVE:
            if (ev.distance > inst.options.hold_threshold) {
              clearTimeout(this.timer);
            }
            break;

          case __ai.Gestures.EVENT_END:
            clearTimeout(this.timer);
            break;
        }
      }
    }]);

    return HoldGesture;
  })();

  var TapGesture = (function () {
    function TapGesture() {
      _classCallCheck(this, TapGesture);

      this.name = 'tap';
      this.index = 100;
      this.defaults = {
        tap_max_touchtime: 250,
        tap_max_distance: 10,
        tap_always: true,
        doubletap_distance: 20,
        doubletap_interval: 300
      };
    }

    _createClass(TapGesture, [{
      key: 'handler',
      value: function handler(ev, inst) {
        if (ev.eventType == __ai.Gestures.EVENT_END && ev.srcEvent.type != 'touchcancel') {
          var prev = __ai.Gestures.detection.previous,
              did_doubletap = false;

          if (ev.deltaTime > inst.options.tap_max_touchtime || ev.distance > inst.options.tap_max_distance) {
            return;
          }

          if (prev && prev.name == 'tap' && ev.timeStamp - prev.lastEvent.timeStamp < inst.options.doubletap_interval && ev.distance < inst.options.doubletap_distance) {
            inst.trigger('doubletap', ev);
            did_doubletap = true;
          }

          if (!did_doubletap || inst.options.tap_always) {
            __ai.Gestures.detection.current.name = 'tap';
            inst.trigger('tap', ev);
          }
        }
      }
    }]);

    return TapGesture;
  })();

  var SwipeGesture = (function () {
    function SwipeGesture() {
      _classCallCheck(this, SwipeGesture);

      this.name = 'swipe';
      this.index = 40;
      this.defaults = {
        swipe_max_touches: 1,
        swipe_velocity: 0.4
      };
    }

    _createClass(SwipeGesture, [{
      key: 'handler',
      value: function handler(ev, inst) {
        if (ev.eventType == __ai.Gestures.EVENT_END) {
          if (inst.options.swipe_max_touches > 0 && ev.touches.length > inst.options.swipe_max_touches) {
            return;
          }

          if (ev.velocityX > inst.options.swipe_velocity || ev.velocityY > inst.options.swipe_velocity) {
            inst.trigger(this.name, ev);
            inst.trigger(this.name + ev.direction, ev);
          }
        }
      }
    }]);

    return SwipeGesture;
  })();

  var DragGesture = (function () {
    function DragGesture() {
      _classCallCheck(this, DragGesture);

      this.name = 'drag';
      this.index = 50;
      this.defaults = {
        drag_min_distance: 10,

        correct_for_drag_min_distance: true,

        drag_max_touches: 1,

        drag_block_horizontal: true,
        drag_block_vertical: true,

        drag_lock_to_axis: false,

        drag_lock_min_distance: 25,

        prevent_default_directions: []
      };
      this.triggered = false;
    }

    _createClass(DragGesture, [{
      key: 'handler',
      value: function handler(ev, inst) {
        if (ev.srcEvent.type == 'touchstart' || ev.srcEvent.type == 'touchend') {
          this.preventedFirstMove = false;
        } else if (!this.preventedFirstMove && ev.srcEvent.type == 'touchmove') {
          if (inst.options.prevent_default_directions.length > 0 && inst.options.prevent_default_directions.indexOf(ev.direction) != -1) {
            ev.srcEvent.preventDefault();
          }
          this.preventedFirstMove = true;
        }

        if (__ai.Gestures.detection.current.name != this.name && this.triggered) {
          inst.trigger(this.name + 'end', ev);
          this.triggered = false;
          return;
        }

        if (inst.options.drag_max_touches > 0 && ev.touches.length > inst.options.drag_max_touches) {
          return;
        }

        switch (ev.eventType) {
          case __ai.Gestures.EVENT_START:
            this.triggered = false;
            break;

          case __ai.Gestures.EVENT_MOVE:
            if (ev.distance < inst.options.drag_min_distance && __ai.Gestures.detection.current.name != this.name) {
              return;
            }

            if (__ai.Gestures.detection.current.name != this.name) {
              __ai.Gestures.detection.current.name = this.name;
              if (inst.options.correct_for_drag_min_distance) {
                var factor = Math.abs(inst.options.drag_min_distance / ev.distance);
                __ai.Gestures.detection.current.startEvent.center.pageX += ev.deltaX * factor;
                __ai.Gestures.detection.current.startEvent.center.pageY += ev.deltaY * factor;

                ev = __ai.Gestures.detection.extendEventData(ev);
              }
            }

            if (__ai.Gestures.detection.current.lastEvent.drag_locked_to_axis || inst.options.drag_lock_to_axis && inst.options.drag_lock_min_distance <= ev.distance) {
              ev.drag_locked_to_axis = true;
            }
            var last_direction = __ai.Gestures.detection.current.lastEvent.direction;
            if (ev.drag_locked_to_axis && last_direction !== ev.direction) {
              if (__ai.Gestures.utils.isVertical(last_direction)) {
                ev.direction = ev.deltaY < 0 ? __ai.Gestures.DIRECTION_UP : __ai.Gestures.DIRECTION_DOWN;
              } else {
                ev.direction = ev.deltaX < 0 ? __ai.Gestures.DIRECTION_LEFT : __ai.Gestures.DIRECTION_RIGHT;
              }
            }

            if (!this.triggered) {
              inst.trigger(this.name + 'start', ev);
              this.triggered = true;
            }

            inst.trigger(this.name, ev);

            inst.trigger(this.name + ev.direction, ev);

            if (inst.options.drag_block_vertical && __ai.Gestures.utils.isVertical(ev.direction) || inst.options.drag_block_horizontal && !__ai.Gestures.utils.isVertical(ev.direction)) {
              ev.preventDefault();
            }
            break;

          case __ai.Gestures.EVENT_END:
            if (this.triggered) {
              inst.trigger(this.name + 'end', ev);
            }

            this.triggered = false;
            break;
        }
      }
    }]);

    return DragGesture;
  })();

  var TransformGesture = (function () {
    function TransformGesture() {
      _classCallCheck(this, TransformGesture);

      this.name = 'transform';
      this.index = 45;
      this.defaults = {
        transform_min_scale: 0.01,

        transform_min_rotation: 1,

        transform_always_block: false
      };
      this.triggered = false;
    }

    _createClass(TransformGesture, [{
      key: 'handler',
      value: function handler(ev, inst) {
        if (__ai.Gestures.detection.current.name != this.name && this.triggered) {
          inst.trigger(this.name + 'end', ev);
          this.triggered = false;
          return;
        }

        if (ev.touches.length < 2) {
          return;
        }

        if (inst.options.transform_always_block) {
          ev.preventDefault();
        }

        switch (ev.eventType) {
          case __ai.Gestures.EVENT_START:
            this.triggered = false;
            break;

          case __ai.Gestures.EVENT_MOVE:
            var scale_threshold = Math.abs(1 - ev.scale);
            var rotation_threshold = Math.abs(ev.rotation);

            if (scale_threshold < inst.options.transform_min_scale && rotation_threshold < inst.options.transform_min_rotation) {
              return;
            }

            __ai.Gestures.detection.current.name = this.name;

            if (!this.triggered) {
              inst.trigger(this.name + 'start', ev);
              this.triggered = true;
            }

            inst.trigger(this.name, ev);
            if (rotation_threshold > inst.options.transform_min_rotation) {
              inst.trigger('rotate', ev);
            }

            if (scale_threshold > inst.options.transform_min_scale) {
              inst.trigger('pinch', ev);
              inst.trigger('pinch' + (ev.scale < 1 ? 'in' : 'out'), ev);
            }
            break;

          case __ai.Gestures.EVENT_END:
            if (this.triggered) {
              inst.trigger(this.name + 'end', ev);
            }

            this.triggered = false;
            break;
        }
      }
    }]);

    return TransformGesture;
  })();

  var TouchGesture = (function () {
    function TouchGesture() {
      _classCallCheck(this, TouchGesture);

      this.name = 'touch';
      this.index = -Infinity;
      this.defaults = {
        prevent_default: false,

        prevent_mouseevents: false
      };
    }

    _createClass(TouchGesture, [{
      key: 'handler',
      value: function handler(ev, inst) {
        if (inst.options.prevent_mouseevents && ev.pointerType == __ai.Gestures.POINTER_MOUSE) {
          ev.stopDetect();
          return;
        }

        if (inst.options.prevent_default) {
          ev.preventDefault();
        }

        if (ev.eventType == __ai.Gestures.EVENT_START) {
          inst.trigger(this.name, ev);
        }
      }
    }]);

    return TouchGesture;
  })();

  var ReleaseGesture = (function () {
    function ReleaseGesture() {
      _classCallCheck(this, ReleaseGesture);

      this.name = 'release';
      this.index = Infinity;
    }

    _createClass(ReleaseGesture, [{
      key: 'handler',
      value: function handler(ev, inst) {
        if (ev.eventType == __ai.Gestures.EVENT_END) {
          inst.trigger(this.name, ev);
        }
      }
    }]);

    return ReleaseGesture;
  })();

  ;
});
//# sourceMappingURL=data:application/json;base64,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QkcsWUFBWTs7O01Bb0NaLGNBQWM7YUFBZCxjQUFjOzRCQUFkLGNBQWM7O1dBQ2xCLElBQUksR0FBRyxTQUFTO1dBQ2hCLEtBQUssR0FBRyxRQUFROzs7aUJBRlosY0FBYzs7YUFHWCxpQkFBQyxFQUFFLEVBQUUsSUFBSSxFQUFFO0FBQ2hCLFlBQUcsRUFBRSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtBQUMxQyxjQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7U0FDN0I7T0FDRjs7O1dBUEcsY0FBYzs7O0FBUW5CLEdBQUMiLCJmaWxlIjoic3VwcG9ydC9nZXN0dXJlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbnRlcmZhY2VDb25maWd9IGZyb20gJy4uL2NvbmZpZyc7XG52YXIgX19haTtcbi8qKlxuICAqIEF1cmVsaWEgSW50ZXJmYWNlIEdlc3R1cmUgU3VwcG9ydFxuICAqXG4gICogU2ltcGxlIGdlc3R1cmUgY29udHJvbGxlcnMgd2l0aCBzb21lIGNvbW1vbiBnZXN0dXJlcyB0aGF0IGVtaXRcbiAgKiBnZXN0dXJlIGV2ZW50cy5cbiAgKlxuICAqIFBvcnRlZCBmcm9tIGdpdGh1Yi5jb20vZHJpZnR5Y28vX19haSBHZXN0dXJlcyAtIHRoYW5rcyFcbiAgKi9cblxudmFyIGNvbmZpZyA9IEludGVyZmFjZUNvbmZpZy5nZXN0dXJlQ29uZmlnO1xuXG4vKipcbiAqIHNldHVwIGV2ZW50cyB0byBkZXRlY3QgZ2VzdHVyZXMgb24gdGhlIGRvY3VtZW50XG4gKi9cbmZ1bmN0aW9uIHNldHVwKCkge1xuICBpZihfX2FpLkdlc3R1cmVzLlJFQURZKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gZmluZCB3aGF0IGV2ZW50dHlwZXMgd2UgYWRkIGxpc3RlbmVycyB0b1xuICBfX2FpLkdlc3R1cmVzLmV2ZW50LmRldGVybWluZUV2ZW50VHlwZXMoKTtcblxuICAvLyBSZWdpc3RlciBhbGwgZ2VzdHVyZXMgaW5zaWRlIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZXNcbiAgZm9yKHZhciBuYW1lIGluIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZXMpIHtcbiAgICBpZihfX2FpLkdlc3R1cmVzLmdlc3R1cmVzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICBfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5yZWdpc3RlcihfX2FpLkdlc3R1cmVzLmdlc3R1cmVzW25hbWVdKTtcbiAgICB9XG4gIH1cblxuXG4gIC8vIEFkZCB0b3VjaCBldmVudHMgb24gdGhlIGRvY3VtZW50XG4gIF9fYWkuR2VzdHVyZXMuZXZlbnQub25Ub3VjaChfX2FpLkdlc3R1cmVzLkRPQ1VNRU5ULCBfX2FpLkdlc3R1cmVzLkVWRU5UX01PVkUsIF9fYWkuR2VzdHVyZXMuZGV0ZWN0aW9uLmRldGVjdCk7XG4gIF9fYWkuR2VzdHVyZXMuZXZlbnQub25Ub3VjaChfX2FpLkdlc3R1cmVzLkRPQ1VNRU5ULCBfX2FpLkdlc3R1cmVzLkVWRU5UX0VORCwgX19haS5HZXN0dXJlcy5kZXRlY3Rpb24uZGV0ZWN0KTtcblxuICAvLyBfX2FpLkdlc3R1cmVzIGlzIHJlYWR5Li4uIVxuICBfX2FpLkdlc3R1cmVzLlJFQURZID0gdHJ1ZTtcbn1cblxuLyoqXG4gKiBjcmVhdGUgbmV3IGhhbW1lciBpbnN0YW5jZVxuICogYWxsIG1ldGhvZHMgc2hvdWxkIHJldHVybiB0aGUgaW5zdGFuY2UgaXRzZWxmLCBzbyBpdCBpcyBjaGFpbmFibGUuXG4gKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgICAgIGVsZW1lbnRcbiAqIEBwYXJhbSAgIHtPYmplY3R9ICAgICAgICAgICAgW29wdGlvbnM9e31dXG4gKiBAcmV0dXJucyB7R2VzdHVyZXMgSW5zdGFuY2V9XG4gKiBAbmFtZSBHZXN0dXJlLkluc3RhbmNlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY2xhc3MgR2VzdHVyZSB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIG9wdGlvbnMgPSB7fSkge1xuICAgIC8vIEEgbnVsbCBlbGVtZW50IHdhcyBwYXNzZWQgaW50byB0aGUgaW5zdGFuY2UsIHdoaWNoIG1lYW5zXG4gICAgLy8gd2hhdGV2ZXIgbG9va3VwIHdhcyBkb25lIHRvIGZpbmQgdGhpcyBlbGVtZW50IGZhaWxlZCB0byBmaW5kIGl0XG4gICAgLy8gc28gd2UgY2FuJ3QgbGlzdGVuIGZvciBldmVudHMgb24gaXQuXG4gICAgaWYoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgY29uc29sZS5lcnJvcignTnVsbCBlbGVtZW50IHBhc3NlZCB0byBnZXN0dXJlIChlbGVtZW50IGRvZXMgbm90IGV4aXN0KS4gTm90IGxpc3RlbmluZyBmb3IgZ2VzdHVyZScpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLy8gc2V0dXAgX19haS5HZXN0dXJlc0pTIHdpbmRvdyBldmVudHMgYW5kIHJlZ2lzdGVyIGFsbCBnZXN0dXJlc1xuICAgIC8vIHRoaXMgYWxzbyBzZXRzIHVwIHRoZSBkZWZhdWx0IG9wdGlvbnNcbiAgICBzZXR1cCgpO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcblxuICAgIC8vIHN0YXJ0L3N0b3AgZGV0ZWN0aW9uIG9wdGlvblxuICAgIHRoaXMuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAvLyBtZXJnZSBvcHRpb25zXG4gICAgdGhpcy5vcHRpb25zID0gX19haS5HZXN0dXJlcy51dGlscy5leHRlbmQoXG4gICAgICAgIF9fYWkuR2VzdHVyZXMudXRpbHMuZXh0ZW5kKHt9LCBfX2FpLkdlc3R1cmVzLmRlZmF1bHRzKSxcbiAgICAgICAgb3B0aW9ucyB8fCB7fSk7XG5cbiAgICAvLyBhZGQgc29tZSBjc3MgdG8gdGhlIGVsZW1lbnQgdG8gcHJldmVudCB0aGUgYnJvd3NlciBmcm9tIGRvaW5nIGl0cyBuYXRpdmUgYmVoYXZvaXJcbiAgICBpZih0aGlzLm9wdGlvbnMuc3RvcF9icm93c2VyX2JlaGF2aW9yKSB7XG4gICAgICBfX2FpLkdlc3R1cmVzLnV0aWxzLnN0b3BEZWZhdWx0QnJvd3NlckJlaGF2aW9yKHRoaXMuZWxlbWVudCwgdGhpcy5vcHRpb25zLnN0b3BfYnJvd3Nlcl9iZWhhdmlvcik7XG4gICAgfVxuXG4gICAgLy8gc3RhcnQgZGV0ZWN0aW9uIG9uIHRvdWNoc3RhcnRcbiAgICBfX2FpLkdlc3R1cmVzLmV2ZW50Lm9uVG91Y2goZWxlbWVudCwgX19haS5HZXN0dXJlcy5FVkVOVF9TVEFSVCwgKGV2KT0+IHtcbiAgICAgIGlmKHRoaXMuZW5hYmxlZCkge1xuICAgICAgICBfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5zdGFydERldGVjdCh0aGlzLCBldik7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyByZXR1cm4gaW5zdGFuY2VcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8qKlxuICAgKiBiaW5kIGV2ZW50cyB0byB0aGUgaW5zdGFuY2VcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICBnZXN0dXJlXG4gICAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gICAgaGFuZGxlclxuICAgKiBAcmV0dXJucyB7X19haS5HZXN0dXJlcy5JbnN0YW5jZX1cbiAgICovXG4gIG9uKGdlc3R1cmUsIGhhbmRsZXIpe1xuICAgIHZhciBnZXN0dXJlcyA9IGdlc3R1cmUuc3BsaXQoJyAnKTtcbiAgICBmb3IodmFyIHQgPSAwOyB0IDwgZ2VzdHVyZXMubGVuZ3RoOyB0KyspIHtcbiAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGdlc3R1cmVzW3RdLCBoYW5kbGVyLCBmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIHVuYmluZCBldmVudHMgdG8gdGhlIGluc3RhbmNlXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgZ2VzdHVyZVxuICAgKiBAcGFyYW0gICB7RnVuY3Rpb259ICAgIGhhbmRsZXJcbiAgICogQHJldHVybnMge19fYWkuR2VzdHVyZXMuSW5zdGFuY2V9XG4gICAqL1xuICBvZmYoZ2VzdHVyZSwgaGFuZGxlcil7XG4gICAgdmFyIGdlc3R1cmVzID0gZ2VzdHVyZS5zcGxpdCgnICcpO1xuICAgIGZvcih2YXIgdCA9IDA7IHQgPCBnZXN0dXJlcy5sZW5ndGg7IHQrKykge1xuICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoZ2VzdHVyZXNbdF0sIGhhbmRsZXIsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvKipcbiAgICogdHJpZ2dlciBnZXN0dXJlIGV2ZW50XG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgZ2VzdHVyZVxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgICAgIGV2ZW50RGF0YVxuICAgKiBAcmV0dXJucyB7X19haS5HZXN0dXJlcy5JbnN0YW5jZX1cbiAgICovXG4gIHRyaWdnZXIoZ2VzdHVyZSwgZXZlbnREYXRhKXtcbiAgICAvLyBjcmVhdGUgRE9NIGV2ZW50XG4gICAgdmFyIGV2ZW50ID0gX19haS5HZXN0dXJlcy5ET0NVTUVOVC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcbiAgICBldmVudC5pbml0RXZlbnQoZ2VzdHVyZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgZXZlbnQuZ2VzdHVyZSA9IGV2ZW50RGF0YTtcblxuICAgIC8vIHRyaWdnZXIgb24gdGhlIHRhcmdldCBpZiBpdCBpcyBpbiB0aGUgaW5zdGFuY2UgZWxlbWVudCxcbiAgICAvLyB0aGlzIGlzIGZvciBldmVudCBkZWxlZ2F0aW9uIHRyaWNrc1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5lbGVtZW50O1xuICAgIGlmKF9fYWkuR2VzdHVyZXMudXRpbHMuaGFzUGFyZW50KGV2ZW50RGF0YS50YXJnZXQsIGVsZW1lbnQpKSB7XG4gICAgICBlbGVtZW50ID0gZXZlbnREYXRhLnRhcmdldDtcbiAgICB9XG5cbiAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIGVuYWJsZSBvZiBkaXNhYmxlIGhhbW1lci5qcyBkZXRlY3Rpb25cbiAgICogQHBhcmFtICAge0Jvb2xlYW59ICAgc3RhdGVcbiAgICogQHJldHVybnMge19fYWkuR2VzdHVyZXMuSW5zdGFuY2V9XG4gICAqL1xuICBlbmFibGUoc3RhdGUpIHtcbiAgICB0aGlzLmVuYWJsZWQgPSBzdGF0ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuXG4vKipcbiAqIHRoaXMgaG9sZHMgdGhlIGxhc3QgbW92ZSBldmVudCxcbiAqIHVzZWQgdG8gZml4IGVtcHR5IHRvdWNoZW5kIGlzc3VlXG4gKiBzZWUgdGhlIG9uVG91Y2ggZXZlbnQgZm9yIGFuIGV4cGxhbmF0aW9uXG4gKiB0eXBlIHtPYmplY3R9XG4gKi9cbnZhciBsYXN0X21vdmVfZXZlbnQgPSBudWxsO1xuXG5cbi8qKlxuICogd2hlbiB0aGUgbW91c2UgaXMgaG9sZCBkb3duLCB0aGlzIGlzIHRydWVcbiAqIHR5cGUge0Jvb2xlYW59XG4gKi9cbnZhciBlbmFibGVfZGV0ZWN0ID0gZmFsc2U7XG5cblxuLyoqXG4gKiB3aGVuIHRvdWNoIGV2ZW50cyBoYXZlIGJlZW4gZmlyZWQsIHRoaXMgaXMgdHJ1ZVxuICogdHlwZSB7Qm9vbGVhbn1cbiAqL1xudmFyIHRvdWNoX3RyaWdnZXJlZCA9IGZhbHNlO1xuXG5cbi8qKlxuICogSW50ZXJmYWNlLkdlc3R1cmVzXG4gKiBAZGVzY3JpcHRpb24gQ3JlYXRlIEdlc3R1cmUgSW5zdGFuY2VzXG4gKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxlbWVudFxuICogQHBhcmFtICAge09iamVjdH0gICAgICAgIG9wdGlvbnNcbiAqIEByZXR1cm5zIHtfX2FpLkdlc3R1cmVzLkluc3RhbmNlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VHZXN0dXJlcyB7XG5cbiAgY29uc3RydWN0b3IoYXVyZWxpYUludGVyZmFjZSkge1xuICAgIF9fYWkgPSBhdXJlbGlhSW50ZXJmYWNlO1xuICAgIF9fYWkuR2VzdHVyZSA9IChlbGVtZW50LCBvcHRpb25zID0ge30pPT4ge1xuICAgICAgcmV0dXJuIG5ldyBHZXN0dXJlKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGRlZmF1bHQgc2V0dGluZ3NcbiAgZGVmYXVsdHMgPSB7XG4gICAgLy8gYWRkIGNzcyB0byB0aGUgZWxlbWVudCB0byBwcmV2ZW50IHRoZSBicm93c2VyIGZyb20gZG9pbmdcbiAgICAvLyBpdHMgbmF0aXZlIGJlaGF2aW9yLiB0aGlzIGRvZXNudCBwcmV2ZW50IHRoZSBzY3JvbGxpbmcsXG4gICAgLy8gYnV0IGNhbmNlbHMgdGhlIGNvbnRleHRtZW51LCB0YXAgaGlnaGxpZ2h0aW5nIGV0Y1xuICAgIC8vIHNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoaXNcbiAgICBzdG9wX2Jyb3dzZXJfYmVoYXZpb3I6ICdkaXNhYmxlLXVzZXItYmVoYXZpb3InXG4gIH1cblxuICBIQVNfUE9JTlRFUkVWRU5UUyA9IEludGVyZmFjZUNvbmZpZy5JU19QT0lOVEVSRVZFTlRTO1xuICBIQVNfVE9VQ0hFVkVOVFMgICA9IEludGVyZmFjZUNvbmZpZy5JU19UT1VDSDtcbiAgTk9fTU9VU0VFVkVOVFMgICAgPSBJbnRlcmZhY2VDb25maWcuTk9fTU9VU0VFVkVOVFM7XG5cbiAgRVZFTlRfVFlQRVMgPSB7fTtcblxuICAvKipcbiAgICogQHByb3BlcnRpZXMgRElSRUNUSU9OXG4gICAqIEBkZXNjcmlwdGlvbiBkZWZpbmVkIGdlc3R1cmUgZGlyZWN0aW9uc1xuICAgKi9cbiAgRElSRUNUSU9OX1VQICAgID0gY29uZmlnLkRJUkVDVElPTl9VUDtcbiAgRElSRUNUSU9OX0RPV04gID0gY29uZmlnLkRJUkVDVElPTl9ET1dOO1xuICBESVJFQ1RJT05fTEVGVCAgPSBjb25maWcuRElSRUNUSU9OX0xFRlQ7XG4gIERJUkVDVElPTl9SSUdIVCA9IGNvbmZpZy5ESVJFQ1RJT05fUklHSFQ7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0aWVzIFBPSU5URVJcbiAgICogQGRlc2NyaXB0aW9uIGdlc3R1cmUgcG9pbnRlciB0eXBlc1xuICAgKi9cbiAgUE9JTlRFUl9NT1VTRSA9IGNvbmZpZy5QT0lOVEVSX01PVVNFO1xuICBQT0lOVEVSX1RPVUNIID0gY29uZmlnLlBPSU5URVJfVE9VQ0g7XG4gIFBPSU5URVJfUEVOICAgPSBjb25maWcuUE9JTlRFUl9QRU47XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0aWVzIEVWRU5UX1xuICAgKiBAZGVzY3JpcHRpb24gZGVmaW5lZCBnZXN0dXJlIGV2ZW50c1xuICAgKi9cbiAgRVZFTlRfU1RBUlQgPSBjb25maWcuRVZFTlRfU1RBUlQ7XG4gIEVWRU5UX01PVkUgID0gY29uZmlnLkVWRU5UX01PVkU7XG4gIEVWRU5UX0VORCAgID0gY29uZmlnLkVWRU5UX0VORDtcblxuICAvKipcbiAgICogQHByb3BlcnR5IERPQ1VNRU5UXG4gICAqIEBkZXNjcmlwdGlvbiBoYW1tZXIgZG9jdW1lbnQgd2hlcmUgdGhlIGJhc2UgZXZlbnRzIGFyZSBhZGRlZCBhdFxuICAgKi9cbiAgRE9DVU1FTlQgICAgPSBJbnRlcmZhY2VDb25maWcuRE9DVU1FTlQ7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eTogcGx1Z2luc1xuICAgKiBAZGVzY3JpcHRpb24gUGx1Z2luIE5hbWVzcGFjZVxuICAgKi9cbiAgcGx1Z2lucyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHk6IFJFQURZXG4gICAqIEBkZXNjcmlwdGlvbiBpZiB0aGUgd2luZG93IGV2ZW50cyBhcmUgc2V0Li4uXG4gICAqL1xuICBSRUFEWSA9IGZhbHNlO1xuXG5cbiAgZXZlbnQgPSBuZXcgR2VzdHVyZXNFdmVudCgpO1xuICB1dGlscyA9IG5ldyBHZXN0dXJlc1V0aWxzKCk7XG4gIGRldGVjdGlvbiA9IG5ldyBHZXN0dXJlc0RldGVjdGlvbigpO1xuICBQb2ludGVyRXZlbnQgPSBuZXcgR2VzdHVyZXNQb2ludGVyRXZlbnQoKTtcbiAgZ2VzdHVyZXMgPSB7XG4gICAgSG9sZDogbmV3IEhvbGRHZXN0dXJlKCksXG4gICAgVGFwOiBuZXcgVGFwR2VzdHVyZSgpLFxuICAgIFN3aXBlOiBuZXcgU3dpcGVHZXN0dXJlKCksXG4gICAgRHJhZzogbmV3IERyYWdHZXN0dXJlKCksXG4gICAgVHJhbnNmb3JtOiBuZXcgVHJhbnNmb3JtR2VzdHVyZSgpLFxuICAgIFRvdWNoOiBuZXcgVG91Y2hHZXN0dXJlKCksXG4gICAgUmVsZWFzZTogbmV3IFJlbGVhc2VHZXN0dXJlKCksXG4gIH07XG59XG5cbmNsYXNzIEdlc3R1cmVzRXZlbnQge1xuICAvKipcbiAgICogc2ltcGxlIGFkZEV2ZW50TGlzdGVuZXJcbiAgICogQHBhcmFtICAge0hUTUxFbGVtZW50fSAgIGVsZW1lbnRcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICAgIHR5cGVcbiAgICogQHBhcmFtICAge0Z1bmN0aW9ufSAgICAgIGhhbmRsZXJcbiAgICovXG4gIGJpbmREb20oZWxlbWVudCwgdHlwZSwgaGFuZGxlcikge1xuICAgIHZhciB0eXBlcyA9IHR5cGUuc3BsaXQoJyAnKTtcbiAgICBmb3IodmFyIHQgPSAwOyB0IDwgdHlwZXMubGVuZ3RoOyB0KyspIHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlc1t0XSwgaGFuZGxlciwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiB0b3VjaCBldmVudHMgd2l0aCBtb3VzZSBmYWxsYmFja1xuICAgKiBAcGFyYW0gICB7SFRNTEVsZW1lbnR9ICAgZWxlbWVudFxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgICAgICAgZXZlbnRUeXBlICAgICAgICBsaWtlIF9fYWkuR2VzdHVyZXMuRVZFTlRfTU9WRVxuICAgKiBAcGFyYW0gICB7RnVuY3Rpb259ICAgICAgaGFuZGxlclxuICAgKi9cbiAgb25Ub3VjaChlbGVtZW50LCBldmVudFR5cGUsIGhhbmRsZXIpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB0aGlzLmJpbmREb20oZWxlbWVudCwgX19haS5HZXN0dXJlcy5FVkVOVF9UWVBFU1tldmVudFR5cGVdLCBmdW5jdGlvbiBiaW5kRG9tT25Ub3VjaChldikge1xuICAgICAgdmFyIHNvdXJjZUV2ZW50VHlwZSA9IGV2LnR5cGUudG9Mb3dlckNhc2UoKTtcblxuICAgICAgLy8gb25tb3VzZXVwLCBidXQgd2hlbiB0b3VjaGVuZCBoYXMgYmVlbiBmaXJlZCB3ZSBkbyBub3RoaW5nLlxuICAgICAgLy8gdGhpcyBpcyBmb3IgdG91Y2hkZXZpY2VzIHdoaWNoIGFsc28gZmlyZSBhIG1vdXNldXAgb24gdG91Y2hlbmRcbiAgICAgIGlmKHNvdXJjZUV2ZW50VHlwZS5tYXRjaCgvbW91c2UvKSAmJiB0b3VjaF90cmlnZ2VyZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBtb3VzZWJ1dHRvbiBtdXN0IGJlIGRvd24gb3IgYSB0b3VjaCBldmVudFxuICAgICAgZWxzZSBpZiggc291cmNlRXZlbnRUeXBlLm1hdGNoKC90b3VjaC8pIHx8ICAgLy8gdG91Y2ggZXZlbnRzIGFyZSBhbHdheXMgb24gc2NyZWVuXG4gICAgICAgIHNvdXJjZUV2ZW50VHlwZS5tYXRjaCgvcG9pbnRlcmRvd24vKSB8fCAvLyBwb2ludGVyZXZlbnRzIHRvdWNoXG4gICAgICAgIChzb3VyY2VFdmVudFR5cGUubWF0Y2goL21vdXNlLykgJiYgZXYud2hpY2ggPT09IDEpICAgLy8gbW91c2UgaXMgcHJlc3NlZFxuICAgICAgICApe1xuICAgICAgICAgIGVuYWJsZV9kZXRlY3QgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgIC8vIG1vdXNlIGlzbid0IHByZXNzZWRcbiAgICAgIGVsc2UgaWYoc291cmNlRXZlbnRUeXBlLm1hdGNoKC9tb3VzZS8pICYmIGV2LndoaWNoICE9PSAxKSB7XG4gICAgICAgIGVuYWJsZV9kZXRlY3QgPSBmYWxzZTtcbiAgICAgIH1cblxuXG4gICAgICAvLyB3ZSBhcmUgaW4gYSB0b3VjaCBldmVudCwgc2V0IHRoZSB0b3VjaCB0cmlnZ2VyZWQgYm9vbCB0byB0cnVlLFxuICAgICAgLy8gdGhpcyBmb3IgdGhlIGNvbmZsaWN0cyB0aGF0IG1heSBvY2N1ciBvbiBpb3MgYW5kIGFuZHJvaWRcbiAgICAgIGlmKHNvdXJjZUV2ZW50VHlwZS5tYXRjaCgvdG91Y2h8cG9pbnRlci8pKSB7XG4gICAgICAgIHRvdWNoX3RyaWdnZXJlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIC8vIGNvdW50IHRoZSB0b3RhbCB0b3VjaGVzIG9uIHRoZSBzY3JlZW5cbiAgICAgIHZhciBjb3VudF90b3VjaGVzID0gMDtcblxuICAgICAgLy8gd2hlbiB0b3VjaCBoYXMgYmVlbiB0cmlnZ2VyZWQgaW4gdGhpcyBkZXRlY3Rpb24gc2Vzc2lvblxuICAgICAgLy8gYW5kIHdlIGFyZSBub3cgaGFuZGxpbmcgYSBtb3VzZSBldmVudCwgd2Ugc3RvcCB0aGF0IHRvIHByZXZlbnQgY29uZmxpY3RzXG4gICAgICBpZihlbmFibGVfZGV0ZWN0KSB7XG4gICAgICAgIC8vIHVwZGF0ZSBwb2ludGVyZXZlbnRcbiAgICAgICAgaWYoX19haS5HZXN0dXJlcy5IQVNfUE9JTlRFUkVWRU5UUyAmJiBldmVudFR5cGUgIT0gX19haS5HZXN0dXJlcy5FVkVOVF9FTkQpIHtcbiAgICAgICAgICBjb3VudF90b3VjaGVzID0gX19haS5HZXN0dXJlcy5Qb2ludGVyRXZlbnQudXBkYXRlUG9pbnRlcihldmVudFR5cGUsIGV2KTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0b3VjaFxuICAgICAgICBlbHNlIGlmKHNvdXJjZUV2ZW50VHlwZS5tYXRjaCgvdG91Y2gvKSkge1xuICAgICAgICAgIGNvdW50X3RvdWNoZXMgPSBldi50b3VjaGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICAvLyBtb3VzZVxuICAgICAgICBlbHNlIGlmKCF0b3VjaF90cmlnZ2VyZWQpIHtcbiAgICAgICAgICBjb3VudF90b3VjaGVzID0gc291cmNlRXZlbnRUeXBlLm1hdGNoKC91cC8pID8gMCA6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB3ZSBhcmUgaW4gYSBlbmQgZXZlbnQsIGJ1dCB3aGVuIHdlIHJlbW92ZSBvbmUgdG91Y2ggYW5kXG4gICAgICAgIC8vIHdlIHN0aWxsIGhhdmUgZW5vdWdoLCBzZXQgZXZlbnRUeXBlIHRvIG1vdmVcbiAgICAgICAgaWYoY291bnRfdG91Y2hlcyA+IDAgJiYgZXZlbnRUeXBlID09IF9fYWkuR2VzdHVyZXMuRVZFTlRfRU5EKSB7XG4gICAgICAgICAgZXZlbnRUeXBlID0gX19haS5HZXN0dXJlcy5FVkVOVF9NT1ZFO1xuICAgICAgICB9XG4gICAgICAgIC8vIG5vIHRvdWNoZXMsIGZvcmNlIHRoZSBlbmQgZXZlbnRcbiAgICAgICAgZWxzZSBpZighY291bnRfdG91Y2hlcykge1xuICAgICAgICAgIGV2ZW50VHlwZSA9IF9fYWkuR2VzdHVyZXMuRVZFTlRfRU5EO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgbW92ZSBldmVudFxuICAgICAgICBpZihjb3VudF90b3VjaGVzIHx8IGxhc3RfbW92ZV9ldmVudCA9PT0gbnVsbCkge1xuICAgICAgICAgIGxhc3RfbW92ZV9ldmVudCA9IGV2O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJpZ2dlciB0aGUgaGFuZGxlclxuICAgICAgICBoYW5kbGVyLmNhbGwoX19haS5HZXN0dXJlcy5kZXRlY3Rpb24sIHNlbGYuY29sbGVjdEV2ZW50RGF0YShlbGVtZW50LCBldmVudFR5cGUsIHNlbGYuZ2V0VG91Y2hMaXN0KGxhc3RfbW92ZV9ldmVudCwgZXZlbnRUeXBlKSwgZXYpKTtcblxuICAgICAgICAvLyByZW1vdmUgcG9pbnRlcmV2ZW50IGZyb20gbGlzdFxuICAgICAgICBpZihfX2FpLkdlc3R1cmVzLkhBU19QT0lOVEVSRVZFTlRTICYmIGV2ZW50VHlwZSA9PSBfX2FpLkdlc3R1cmVzLkVWRU5UX0VORCkge1xuICAgICAgICAgIGNvdW50X3RvdWNoZXMgPSBfX2FpLkdlc3R1cmVzLlBvaW50ZXJFdmVudC51cGRhdGVQb2ludGVyKGV2ZW50VHlwZSwgZXYpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vZGVidWcoc291cmNlRXZlbnRUeXBlICtcIiBcIisgZXZlbnRUeXBlKTtcblxuICAgICAgLy8gb24gdGhlIGVuZCB3ZSByZXNldCBldmVyeXRoaW5nXG4gICAgICBpZighY291bnRfdG91Y2hlcykge1xuICAgICAgICBsYXN0X21vdmVfZXZlbnQgPSBudWxsO1xuICAgICAgICBlbmFibGVfZGV0ZWN0ID0gZmFsc2U7XG4gICAgICAgIHRvdWNoX3RyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBfX2FpLkdlc3R1cmVzLlBvaW50ZXJFdmVudC5yZXNldCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIHdlIGhhdmUgZGlmZmVyZW50IGV2ZW50cyBmb3IgZWFjaCBkZXZpY2UvYnJvd3NlclxuICAgKiBkZXRlcm1pbmUgd2hhdCB3ZSBuZWVkIGFuZCBzZXQgdGhlbSBpbiB0aGUgX19haS5HZXN0dXJlcy5FVkVOVF9UWVBFUyBjb25zdGFudFxuICAgKi9cbiAgZGV0ZXJtaW5lRXZlbnRUeXBlcygpIHtcbiAgICAvLyBkZXRlcm1pbmUgdGhlIGV2ZW50dHlwZSB3ZSB3YW50IHRvIHNldFxuICAgIHZhciB0eXBlcztcblxuICAgIC8vIHBvaW50ZXJFdmVudHMgbWFnaWNcbiAgICBpZihfX2FpLkdlc3R1cmVzLkhBU19QT0lOVEVSRVZFTlRTKSB7XG4gICAgICB0eXBlcyA9IF9fYWkuR2VzdHVyZXMuUG9pbnRlckV2ZW50LmdldEV2ZW50cygpO1xuICAgIH1cbiAgICAvLyBvbiBBbmRyb2lkLCBpT1MsIGJsYWNrYmVycnksIHdpbmRvd3MgbW9iaWxlIHdlIGRvbnQgd2FudCBhbnkgbW91c2VldmVudHNcbiAgICBlbHNlIGlmKF9fYWkuR2VzdHVyZXMuTk9fTU9VU0VFVkVOVFMpIHtcbiAgICAgIHR5cGVzID0gW1xuICAgICAgICAndG91Y2hzdGFydCcsXG4gICAgICAgICd0b3VjaG1vdmUnLFxuICAgICAgICAndG91Y2hlbmQgdG91Y2hjYW5jZWwnXTtcbiAgICB9XG4gICAgLy8gZm9yIG5vbiBwb2ludGVyIGV2ZW50cyBicm93c2VycyBhbmQgbWl4ZWQgYnJvd3NlcnMsXG4gICAgLy8gbGlrZSBjaHJvbWUgb24gd2luZG93czggdG91Y2ggbGFwdG9wXG4gICAgZWxzZSB7XG4gICAgICB0eXBlcyA9IFtcbiAgICAgICAgJ3RvdWNoc3RhcnQgbW91c2Vkb3duJyxcbiAgICAgICAgJ3RvdWNobW92ZSBtb3VzZW1vdmUnLFxuICAgICAgICAndG91Y2hlbmQgdG91Y2hjYW5jZWwgbW91c2V1cCddO1xuICAgIH1cblxuICAgIF9fYWkuR2VzdHVyZXMuRVZFTlRfVFlQRVNbX19haS5HZXN0dXJlcy5FVkVOVF9TVEFSVF0gPSB0eXBlc1swXTtcbiAgICBfX2FpLkdlc3R1cmVzLkVWRU5UX1RZUEVTW19fYWkuR2VzdHVyZXMuRVZFTlRfTU9WRV0gPSB0eXBlc1sxXTtcbiAgICBfX2FpLkdlc3R1cmVzLkVWRU5UX1RZUEVTW19fYWkuR2VzdHVyZXMuRVZFTlRfRU5EXSA9IHR5cGVzWzJdO1xuICB9XG5cbiAgLyoqXG4gICAqIGNyZWF0ZSB0b3VjaGxpc3QgZGVwZW5kaW5nIG9uIHRoZSBldmVudFxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgICBldlxuICAgKiBAcGFyYW0gICB7U3RyaW5nfSAgICBldmVudFR5cGUgICB1c2VkIGJ5IHRoZSBmYWtlbXVsdGl0b3VjaCBwbHVnaW5cbiAgICovXG4gIGdldFRvdWNoTGlzdChldi8qLCBldmVudFR5cGUqLykge1xuICAgIC8vIGdldCB0aGUgZmFrZSBwb2ludGVyRXZlbnQgdG91Y2hsaXN0XG4gICAgaWYoX19haS5HZXN0dXJlcy5IQVNfUE9JTlRFUkVWRU5UUykge1xuICAgICAgcmV0dXJuIF9fYWkuR2VzdHVyZXMuUG9pbnRlckV2ZW50LmdldFRvdWNoTGlzdCgpO1xuICAgIH1cbiAgICAvLyBnZXQgdGhlIHRvdWNobGlzdFxuICAgIGVsc2UgaWYoZXYudG91Y2hlcykge1xuICAgICAgcmV0dXJuIGV2LnRvdWNoZXM7XG4gICAgfVxuICAgIC8vIG1ha2UgZmFrZSB0b3VjaGxpc3QgZnJvbSBtb3VzZSBwb3NpdGlvblxuICAgIGVsc2Uge1xuICAgICAgZXYuaWRlbnRpZmllciA9IDE7XG4gICAgICByZXR1cm4gW2V2XTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogY29sbGVjdCBldmVudCBkYXRhIGZvciBfX2FpLkdlc3R1cmVzIGpzXG4gICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBlbGVtZW50XG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgICAgICBldmVudFR5cGUgICAgICAgIGxpa2UgX19haS5HZXN0dXJlcy5FVkVOVF9NT1ZFXG4gICAqIEBwYXJhbSAgIHtPYmplY3R9ICAgICAgICBldmVudERhdGFcbiAgICovXG4gIGNvbGxlY3RFdmVudERhdGEgIChlbGVtZW50LCBldmVudFR5cGUsIHRvdWNoZXMsIGV2KSB7XG5cbiAgICAvLyBmaW5kIG91dCBwb2ludGVyVHlwZVxuICAgIHZhciBwb2ludGVyVHlwZSA9IF9fYWkuR2VzdHVyZXMuUE9JTlRFUl9UT1VDSDtcbiAgICBpZihldi50eXBlLm1hdGNoKC9tb3VzZS8pIHx8IF9fYWkuR2VzdHVyZXMuUG9pbnRlckV2ZW50Lm1hdGNoVHlwZShfX2FpLkdlc3R1cmVzLlBPSU5URVJfTU9VU0UsIGV2KSkge1xuICAgICAgcG9pbnRlclR5cGUgPSBfX2FpLkdlc3R1cmVzLlBPSU5URVJfTU9VU0U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNlbnRlcjogX19haS5HZXN0dXJlcy51dGlscy5nZXRDZW50ZXIodG91Y2hlcyksXG4gICAgICB0aW1lU3RhbXA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgICAgdGFyZ2V0OiBldi50YXJnZXQsXG4gICAgICB0b3VjaGVzOiB0b3VjaGVzLFxuICAgICAgZXZlbnRUeXBlOiBldmVudFR5cGUsXG4gICAgICBwb2ludGVyVHlwZTogcG9pbnRlclR5cGUsXG4gICAgICBzcmNFdmVudDogZXYsXG5cbiAgICAgIC8qKlxuICAgICAgICogcHJldmVudCB0aGUgYnJvd3NlciBkZWZhdWx0IGFjdGlvbnNcbiAgICAgICAqIG1vc3RseSB1c2VkIHRvIGRpc2FibGUgc2Nyb2xsaW5nIG9mIHRoZSBicm93c2VyXG4gICAgICAgKi9cbiAgICAgIHByZXZlbnREZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYodGhpcy5zcmNFdmVudC5wcmV2ZW50TWFuaXB1bGF0aW9uKSB7XG4gICAgICAgICAgdGhpcy5zcmNFdmVudC5wcmV2ZW50TWFuaXB1bGF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLnNyY0V2ZW50LnByZXZlbnREZWZhdWx0KSB7XG4gICAgICAgICAgLy8gdGhpcy5zcmNFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIHN0b3AgYnViYmxpbmcgdGhlIGV2ZW50IHVwIHRvIGl0cyBwYXJlbnRzXG4gICAgICAgKi9cbiAgICAgIHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc3JjRXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIGltbWVkaWF0ZWx5IHN0b3AgZ2VzdHVyZSBkZXRlY3Rpb25cbiAgICAgICAqIG1pZ2h0IGJlIHVzZWZ1bCBhZnRlciBhIHN3aXBlIHdhcyBkZXRlY3RlZFxuICAgICAgICogQHJldHVybiB7Kn1cbiAgICAgICAqL1xuICAgICAgc3RvcERldGVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5zdG9wRGV0ZWN0KCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jbGFzcyBHZXN0dXJlc1BvaW50ZXJFdmVudCB7XG4gIC8qKlxuICAgKiBob2xkcyBhbGwgcG9pbnRlcnNcbiAgICogdHlwZSB7T2JqZWN0fVxuICAgKi9cbiAgcG9pbnRlcnMgPSB7fTtcblxuICAvKipcbiAgICogZ2V0IGEgbGlzdCBvZiBwb2ludGVyc1xuICAgKiBAcmV0dXJucyB7QXJyYXl9ICAgICB0b3VjaGxpc3RcbiAgICovXG4gIGdldFRvdWNoTGlzdCgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyIHRvdWNobGlzdCA9IFtdO1xuXG4gICAgLy8gd2UgY2FuIHVzZSBmb3JFYWNoIHNpbmNlIHBvaW50ZXJFdmVudHMgb25seSBpcyBpbiBJRTEwXG4gICAgT2JqZWN0LmtleXMoc2VsZi5wb2ludGVycykuc29ydCgpLmZvckVhY2goZnVuY3Rpb24oaWQpIHtcbiAgICAgIHRvdWNobGlzdC5wdXNoKHNlbGYucG9pbnRlcnNbaWRdKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG91Y2hsaXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZSB0aGUgcG9zaXRpb24gb2YgYSBwb2ludGVyXG4gICAqIEBwYXJhbSAgIHtTdHJpbmd9ICAgdHlwZSAgICAgICAgICAgICBfX2FpLkdlc3R1cmVzLkVWRU5UX0VORFxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgIHBvaW50ZXJFdmVudFxuICAgKi9cbiAgdXBkYXRlUG9pbnRlcih0eXBlLCBwb2ludGVyRXZlbnQpIHtcbiAgICBpZih0eXBlID09IF9fYWkuR2VzdHVyZXMuRVZFTlRfRU5EKSB7XG4gICAgICB0aGlzLnBvaW50ZXJzID0ge307XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcG9pbnRlckV2ZW50LmlkZW50aWZpZXIgPSBwb2ludGVyRXZlbnQucG9pbnRlcklkO1xuICAgICAgdGhpcy5wb2ludGVyc1twb2ludGVyRXZlbnQucG9pbnRlcklkXSA9IHBvaW50ZXJFdmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5wb2ludGVycykubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIGNoZWNrIGlmIGV2IG1hdGNoZXMgcG9pbnRlcnR5cGVcbiAgICogQHBhcmFtICAge1N0cmluZ30gICAgICAgIHBvaW50ZXJUeXBlICAgICBfX2FpLkdlc3R1cmVzLlBPSU5URVJfTU9VU0VcbiAgICogQHBhcmFtICAge1BvaW50ZXJFdmVudH0gIGV2XG4gICAqL1xuICBtYXRjaFR5cGUocG9pbnRlclR5cGUsIGV2KSB7XG4gICAgaWYoIWV2LnBvaW50ZXJUeXBlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIHR5cGVzID0ge307XG4gICAgdHlwZXNbX19haS5HZXN0dXJlcy5QT0lOVEVSX01PVVNFXSA9IChldi5wb2ludGVyVHlwZSA9PSBldi5NU1BPSU5URVJfVFlQRV9NT1VTRSB8fCBldi5wb2ludGVyVHlwZSA9PSBfX2FpLkdlc3R1cmVzLlBPSU5URVJfTU9VU0UpO1xuICAgIHR5cGVzW19fYWkuR2VzdHVyZXMuUE9JTlRFUl9UT1VDSF0gPSAoZXYucG9pbnRlclR5cGUgPT0gZXYuTVNQT0lOVEVSX1RZUEVfVE9VQ0ggfHwgZXYucG9pbnRlclR5cGUgPT0gX19haS5HZXN0dXJlcy5QT0lOVEVSX1RPVUNIKTtcbiAgICB0eXBlc1tfX2FpLkdlc3R1cmVzLlBPSU5URVJfUEVOXSA9IChldi5wb2ludGVyVHlwZSA9PSBldi5NU1BPSU5URVJfVFlQRV9QRU4gfHwgZXYucG9pbnRlclR5cGUgPT0gX19haS5HZXN0dXJlcy5QT0lOVEVSX1BFTik7XG4gICAgcmV0dXJuIHR5cGVzW3BvaW50ZXJUeXBlXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgZXZlbnRzXG4gICAqL1xuICBnZXRFdmVudHMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdwb2ludGVyZG93biBNU1BvaW50ZXJEb3duJyxcbiAgICAncG9pbnRlcm1vdmUgTVNQb2ludGVyTW92ZScsXG4gICAgJ3BvaW50ZXJ1cCBwb2ludGVyY2FuY2VsIE1TUG9pbnRlclVwIE1TUG9pbnRlckNhbmNlbCdcbiAgICAgIF07XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgdGhlIGxpc3RcbiAgICovXG4gIHJlc2V0KCkge1xuXG4gICAgdGhpcy5wb2ludGVycyA9IHt9O1xuICB9XG59XG5cbmNsYXNzIEdlc3R1cmVzVXRpbHMge1xuICAvKipcbiAgICogZXh0ZW5kIG1ldGhvZCxcbiAgICogYWxzbyB1c2VkIGZvciBjbG9uaW5nIHdoZW4gZGVzdCBpcyBhbiBlbXB0eSBvYmplY3RcbiAgICogQHBhcmFtICAge09iamVjdH0gICAgZGVzdFxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgICBzcmNcbiAgICogQHBhcmFtICB7Qm9vbGVhbn0gIG1lcmdlICAgIGRvIGEgbWVyZ2VcbiAgICogQHJldHVybnMge09iamVjdH0gICAgZGVzdFxuICAgKi9cbiAgZXh0ZW5kKGRlc3QsIHNyYywgbWVyZ2UpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gc3JjKSB7XG4gICAgICBpZihkZXN0W2tleV0gIT09IHVuZGVmaW5lZCAmJiBtZXJnZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGRlc3Rba2V5XSA9IHNyY1trZXldO1xuICAgIH1cbiAgICByZXR1cm4gZGVzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBmaW5kIGlmIGEgbm9kZSBpcyBpbiB0aGUgZ2l2ZW4gcGFyZW50XG4gICAqIHVzZWQgZm9yIGV2ZW50IGRlbGVnYXRpb24gdHJpY2tzXG4gICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBub2RlXG4gICAqIEBwYXJhbSAgIHtIVE1MRWxlbWVudH0gICBwYXJlbnRcbiAgICogQHJldHVybnMge2Jvb2xlYW59ICAgICAgIGhhc19wYXJlbnRcbiAgICovXG4gIGhhc1BhcmVudChub2RlLCBwYXJlbnQpIHtcbiAgICB3aGlsZShub2RlKXtcbiAgICAgIGlmKG5vZGUgPT0gcGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIGdldCB0aGUgY2VudGVyIG9mIGFsbCB0aGUgdG91Y2hlc1xuICAgKiBAcGFyYW0gICB7QXJyYXl9ICAgICB0b3VjaGVzXG4gICAqIEByZXR1cm5zIHtPYmplY3R9ICAgIGNlbnRlclxuICAgKi9cbiAgZ2V0Q2VudGVyKHRvdWNoZXMpIHtcbiAgICB2YXIgdmFsdWVzWCA9IFtdLCB2YWx1ZXNZID0gW107XG5cbiAgICBmb3IodmFyIHQgPSAwLCBsZW4gPSB0b3VjaGVzLmxlbmd0aDsgdCA8IGxlbjsgdCsrKSB7XG4gICAgICB2YWx1ZXNYLnB1c2godG91Y2hlc1t0XS5wYWdlWCk7XG4gICAgICB2YWx1ZXNZLnB1c2godG91Y2hlc1t0XS5wYWdlWSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBhZ2VYOiAoKE1hdGgubWluLmFwcGx5KE1hdGgsIHZhbHVlc1gpICsgTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzWCkpIC8gMiksXG4gICAgICAgIHBhZ2VZOiAoKE1hdGgubWluLmFwcGx5KE1hdGgsIHZhbHVlc1kpICsgTWF0aC5tYXguYXBwbHkoTWF0aCwgdmFsdWVzWSkpIC8gMilcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGN1bGF0ZSB0aGUgdmVsb2NpdHkgYmV0d2VlbiB0d28gcG9pbnRzXG4gICAqIEBwYXJhbSAgIHtOdW1iZXJ9ICAgIGRlbHRhX3RpbWVcbiAgICogQHBhcmFtICAge051bWJlcn0gICAgZGVsdGFfeFxuICAgKiBAcGFyYW0gICB7TnVtYmVyfSAgICBkZWx0YV95XG4gICAqIEByZXR1cm5zIHtPYmplY3R9ICAgIHZlbG9jaXR5XG4gICAqL1xuICBnZXRWZWxvY2l0eShkZWx0YV90aW1lLCBkZWx0YV94LCBkZWx0YV95KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IE1hdGguYWJzKGRlbHRhX3ggLyBkZWx0YV90aW1lKSB8fCAwLFxuICAgICAgeTogTWF0aC5hYnMoZGVsdGFfeSAvIGRlbHRhX3RpbWUpIHx8IDBcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIGNhbGN1bGF0ZSB0aGUgYW5nbGUgYmV0d2VlbiB0d28gY29vcmRpbmF0ZXNcbiAgICogQHBhcmFtICAge1RvdWNofSAgICAgdG91Y2gxXG4gICAqIEBwYXJhbSAgIHtUb3VjaH0gICAgIHRvdWNoMlxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSAgICBhbmdsZVxuICAgKi9cbiAgZ2V0QW5nbGUodG91Y2gxLCB0b3VjaDIpIHtcbiAgICB2YXIgeSA9IHRvdWNoMi5wYWdlWSAtIHRvdWNoMS5wYWdlWSxcbiAgICB4ID0gdG91Y2gyLnBhZ2VYIC0gdG91Y2gxLnBhZ2VYO1xuICAgIHJldHVybiBNYXRoLmF0YW4yKHksIHgpICogMTgwIC8gTWF0aC5QSTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhbmdsZSB0byBkaXJlY3Rpb24gZGVmaW5lXG4gICAqIEBwYXJhbSAgIHtUb3VjaH0gICAgIHRvdWNoMVxuICAgKiBAcGFyYW0gICB7VG91Y2h9ICAgICB0b3VjaDJcbiAgICogQHJldHVybnMge1N0cmluZ30gICAgZGlyZWN0aW9uIGNvbnN0YW50LCBsaWtlIF9fYWkuR2VzdHVyZXMuRElSRUNUSU9OX0xFRlRcbiAgICovXG4gIGdldERpcmVjdGlvbih0b3VjaDEsIHRvdWNoMikge1xuICAgIHZhciB4ID0gTWF0aC5hYnModG91Y2gxLnBhZ2VYIC0gdG91Y2gyLnBhZ2VYKSxcbiAgICB5ID0gTWF0aC5hYnModG91Y2gxLnBhZ2VZIC0gdG91Y2gyLnBhZ2VZKTtcblxuICAgIGlmKHggPj0geSkge1xuICAgICAgcmV0dXJuIHRvdWNoMS5wYWdlWCAtIHRvdWNoMi5wYWdlWCA+IDAgPyBfX2FpLkdlc3R1cmVzLkRJUkVDVElPTl9MRUZUIDogX19haS5HZXN0dXJlcy5ESVJFQ1RJT05fUklHSFQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgcmV0dXJuIHRvdWNoMS5wYWdlWSAtIHRvdWNoMi5wYWdlWSA+IDAgPyBfX2FpLkdlc3R1cmVzLkRJUkVDVElPTl9VUCA6IF9fYWkuR2VzdHVyZXMuRElSRUNUSU9OX0RPV047XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGNhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0d28gdG91Y2hlc1xuICAgKiBAcGFyYW0gICB7VG91Y2h9ICAgICB0b3VjaDFcbiAgICogQHBhcmFtICAge1RvdWNofSAgICAgdG91Y2gyXG4gICAqIEByZXR1cm5zIHtOdW1iZXJ9ICAgIGRpc3RhbmNlXG4gICAqL1xuICBnZXREaXN0YW5jZSh0b3VjaDEsIHRvdWNoMikge1xuICAgIHZhciB4ID0gdG91Y2gyLnBhZ2VYIC0gdG91Y2gxLnBhZ2VYLFxuICAgIHkgPSB0b3VjaDIucGFnZVkgLSB0b3VjaDEucGFnZVk7XG4gICAgcmV0dXJuIE1hdGguc3FydCgoeCAqIHgpICsgKHkgKiB5KSk7XG4gIH1cblxuICAvKipcbiAgICogY2FsY3VsYXRlIHRoZSBzY2FsZSBmYWN0b3IgYmV0d2VlbiB0d28gdG91Y2hMaXN0cyAoZmluZ2VycylcbiAgICogbm8gc2NhbGUgaXMgMSwgYW5kIGdvZXMgZG93biB0byAwIHdoZW4gcGluY2hlZCB0b2dldGhlciwgYW5kIGJpZ2dlciB3aGVuIHBpbmNoZWQgb3V0XG4gICAqIEBwYXJhbSAgIHtBcnJheX0gICAgIHN0YXJ0XG4gICAqIEBwYXJhbSAgIHtBcnJheX0gICAgIGVuZFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSAgICBzY2FsZVxuICAgKi9cbiAgZ2V0U2NhbGUoc3RhcnQsIGVuZCkge1xuICAgIC8vIG5lZWQgdHdvIGZpbmdlcnMuLi5cbiAgICBpZihzdGFydC5sZW5ndGggPj0gMiAmJiBlbmQubGVuZ3RoID49IDIpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlKGVuZFswXSwgZW5kWzFdKSAvXG4gICAgICAgIHRoaXMuZ2V0RGlzdGFuY2Uoc3RhcnRbMF0sIHN0YXJ0WzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIDE7XG4gIH1cblxuICAvKipcbiAgICogY2FsY3VsYXRlIHRoZSByb3RhdGlvbiBkZWdyZWVzIGJldHdlZW4gdHdvIHRvdWNoTGlzdHMgKGZpbmdlcnMpXG4gICAqIEBwYXJhbSAgIHtBcnJheX0gICAgIHN0YXJ0XG4gICAqIEBwYXJhbSAgIHtBcnJheX0gICAgIGVuZFxuICAgKiBAcmV0dXJucyB7TnVtYmVyfSAgICByb3RhdGlvblxuICAgKi9cbiAgZ2V0Um90YXRpb24oc3RhcnQsIGVuZCkge1xuICAgIC8vIG5lZWQgdHdvIGZpbmdlcnNcbiAgICBpZihzdGFydC5sZW5ndGggPj0gMiAmJiBlbmQubGVuZ3RoID49IDIpIHtcbiAgICAgIHJldHVybiB0aGlzLmdldEFuZ2xlKGVuZFsxXSwgZW5kWzBdKSAtXG4gICAgICAgIHRoaXMuZ2V0QW5nbGUoc3RhcnRbMV0sIHN0YXJ0WzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICAvKipcbiAgICogYm9vbGVhbiBpZiB0aGUgZGlyZWN0aW9uIGlzIHZlcnRpY2FsXG4gICAqIEBwYXJhbSAgICB7U3RyaW5nfSAgICBkaXJlY3Rpb25cbiAgICogQHJldHVybnMgIHtCb29sZWFufSAgIGlzX3ZlcnRpY2FsXG4gICAqL1xuICBpc1ZlcnRpY2FsKGRpcmVjdGlvbikge1xuXG4gICAgcmV0dXJuIChkaXJlY3Rpb24gPT0gX19haS5HZXN0dXJlcy5ESVJFQ1RJT05fVVAgfHwgZGlyZWN0aW9uID09IF9fYWkuR2VzdHVyZXMuRElSRUNUSU9OX0RPV04pO1xuICB9XG5cbiAgLyoqXG4gICAqIHN0b3AgYnJvd3NlciBkZWZhdWx0IGJlaGF2aW9yIHdpdGggY3NzIGNsYXNzXG4gICAqIEBwYXJhbSAgIHtIdG1sRWxlbWVudH0gICBlbGVtZW50XG4gICAqIEBwYXJhbSAgIHtPYmplY3R9ICAgICAgICBjc3NfY2xhc3NcbiAgICovXG4gIHN0b3BEZWZhdWx0QnJvd3NlckJlaGF2aW9yKGVsZW1lbnQsIGNzc19jbGFzcykge1xuICAgIC8vIGNoYW5nZWQgZnJvbSBtYWtpbmcgbWFueSBzdHlsZSBjaGFuZ2VzIHRvIGp1c3QgYWRkaW5nIGEgcHJlc2V0IGNsYXNzbmFtZVxuICAgIC8vIGxlc3MgRE9NIG1hbmlwdWxhdGlvbnMsIGxlc3MgY29kZSwgYW5kIGVhc2llciB0byBjb250cm9sIGluIHRoZSBDU1Mgc2lkZSBvZiB0aGluZ3NcbiAgICAvLyBoYW1tZXIuanMgZG9lc24ndCBjb21lIHdpdGggQ1NTLCBidXQgX19haSBkb2VzLCB3aGljaCBpcyB3aHkgd2UgcHJlZmVyIHRoaXMgbWV0aG9kXG4gICAgaWYoZWxlbWVudCAmJiBlbGVtZW50LmNsYXNzTGlzdCkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNzc19jbGFzcyk7XG4gICAgICBlbGVtZW50Lm9uc2VsZWN0c3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cblxuY2xhc3MgR2VzdHVyZXNEZXRlY3Rpb24ge1xuICAvLyBjb250YWlucyBhbGwgcmVnaXN0cmVkIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZXMgaW4gdGhlIGNvcnJlY3Qgb3JkZXJcbiAgZ2VzdHVyZXMgPSBbXVxuXG4gIC8vIGRhdGEgb2YgdGhlIGN1cnJlbnQgX19haS5HZXN0dXJlcy5nZXN0dXJlIGRldGVjdGlvbiBzZXNzaW9uXG4gIGN1cnJlbnQgPSBudWxsO1xuXG4gIC8vIHRoZSBwcmV2aW91cyBfX2FpLkdlc3R1cmVzLmdlc3R1cmUgc2Vzc2lvbiBkYXRhXG4gIC8vIGlzIGEgZnVsbCBjbG9uZSBvZiB0aGUgcHJldmlvdXMgZ2VzdHVyZS5jdXJyZW50IG9iamVjdFxuICBwcmV2aW91cyA9IG51bGw7XG5cbiAgLy8gd2hlbiB0aGlzIGJlY29tZXMgdHJ1ZSwgbm8gZ2VzdHVyZXMgYXJlIGZpcmVkXG4gIHN0b3BwZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogc3RhcnQgX19haS5HZXN0dXJlcy5nZXN0dXJlIGRldGVjdGlvblxuICAgKiBAcGFyYW0gICB7X19haS5HZXN0dXJlcy5JbnN0YW5jZX0gICBpbnN0XG4gICAqIEBwYXJhbSAgIHtPYmplY3R9ICAgICAgICAgICAgZXZlbnREYXRhXG4gICAqL1xuICBzdGFydERldGVjdChpbnN0LCBldmVudERhdGEpIHtcbiAgICAvLyBhbHJlYWR5IGJ1c3kgd2l0aCBhIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZSBkZXRlY3Rpb24gb24gYW4gZWxlbWVudFxuICAgIGlmKHRoaXMuY3VycmVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RvcHBlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5jdXJyZW50ID0ge1xuICAgICAgaW5zdDogaW5zdCwgLy8gcmVmZXJlbmNlIHRvIF9fYWkuR2VzdHVyZXNJbnN0YW5jZSB3ZSdyZSB3b3JraW5nIGZvclxuICAgICAgc3RhcnRFdmVudDogX19haS5HZXN0dXJlcy51dGlscy5leHRlbmQoe30sIGV2ZW50RGF0YSksIC8vIHN0YXJ0IGV2ZW50RGF0YSBmb3IgZGlzdGFuY2VzLCB0aW1pbmcgZXRjXG4gICAgICBsYXN0RXZlbnQ6IGZhbHNlLCAvLyBsYXN0IGV2ZW50RGF0YVxuICAgICAgbmFtZTogJycgLy8gY3VycmVudCBnZXN0dXJlIHdlJ3JlIGluL2RldGVjdGVkLCBjYW4gYmUgJ3RhcCcsICdob2xkJyBldGNcbiAgICB9O1xuXG4gICAgdGhpcy5kZXRlY3QoZXZlbnREYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBfX2FpLkdlc3R1cmVzLmdlc3R1cmUgZGV0ZWN0aW9uXG4gICAqIEBwYXJhbSAgIHtPYmplY3R9ICAgIGV2ZW50RGF0YVxuICAgKi9cbiAgZGV0ZWN0KGV2ZW50RGF0YSkge1xuICAgIGlmKCF0aGlzLmN1cnJlbnQgfHwgdGhpcy5zdG9wcGVkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBleHRlbmQgZXZlbnQgZGF0YSB3aXRoIGNhbGN1bGF0aW9ucyBhYm91dCBzY2FsZSwgZGlzdGFuY2UgZXRjXG4gICAgZXZlbnREYXRhID0gdGhpcy5leHRlbmRFdmVudERhdGEoZXZlbnREYXRhKTtcblxuICAgIC8vIGluc3RhbmNlIG9wdGlvbnNcbiAgICB2YXIgaW5zdF9vcHRpb25zID0gdGhpcy5jdXJyZW50Lmluc3Qub3B0aW9ucztcblxuICAgIC8vIGNhbGwgX19haS5HZXN0dXJlcy5nZXN0dXJlIGhhbmRsZXJzXG4gICAgZm9yKHZhciBnID0gMCwgbGVuID0gdGhpcy5nZXN0dXJlcy5sZW5ndGg7IGcgPCBsZW47IGcrKykge1xuICAgICAgdmFyIGdlc3R1cmUgPSB0aGlzLmdlc3R1cmVzW2ddO1xuXG4gICAgICAvLyBvbmx5IHdoZW4gdGhlIGluc3RhbmNlIG9wdGlvbnMgaGF2ZSBlbmFibGVkIHRoaXMgZ2VzdHVyZVxuICAgICAgaWYoIXRoaXMuc3RvcHBlZCAmJiBpbnN0X29wdGlvbnNbZ2VzdHVyZS5uYW1lXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgLy8gaWYgYSBoYW5kbGVyIHJldHVybnMgZmFsc2UsIHdlIHN0b3Agd2l0aCB0aGUgZGV0ZWN0aW9uXG4gICAgICAgIGlmKGdlc3R1cmUuaGFuZGxlci5jYWxsKGdlc3R1cmUsIGV2ZW50RGF0YSwgdGhpcy5jdXJyZW50Lmluc3QpID09PSBmYWxzZSkge1xuICAgICAgICAgIHRoaXMuc3RvcERldGVjdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gc3RvcmUgYXMgcHJldmlvdXMgZXZlbnQgZXZlbnRcbiAgICBpZih0aGlzLmN1cnJlbnQpIHtcbiAgICAgIHRoaXMuY3VycmVudC5sYXN0RXZlbnQgPSBldmVudERhdGE7XG4gICAgfVxuXG4gICAgLy8gZW5kZXZlbnQsIGJ1dCBub3QgdGhlIGxhc3QgdG91Y2gsIHNvIGRvbnQgc3RvcFxuICAgIGlmKGV2ZW50RGF0YS5ldmVudFR5cGUgPT0gX19haS5HZXN0dXJlcy5FVkVOVF9FTkQgJiYgIWV2ZW50RGF0YS50b3VjaGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuc3RvcERldGVjdCgpO1xuICAgIH1cblxuICAgIHJldHVybiBldmVudERhdGE7XG4gIH1cblxuICAvKipcbiAgICogY2xlYXIgdGhlIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZSB2YXJzXG4gICAqIHRoaXMgaXMgY2FsbGVkIG9uIGVuZERldGVjdCwgYnV0IGNhbiBhbHNvIGJlIHVzZWQgd2hlbiBhIGZpbmFsIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZSBoYXMgYmVlbiBkZXRlY3RlZFxuICAgKiB0byBzdG9wIG90aGVyIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZXMgZnJvbSBiZWluZyBmaXJlZFxuICAgKi9cbiAgc3RvcERldGVjdCgpIHtcbiAgICAvLyBjbG9uZSBjdXJyZW50IGRhdGEgdG8gdGhlIHN0b3JlIGFzIHRoZSBwcmV2aW91cyBnZXN0dXJlXG4gICAgLy8gdXNlZCBmb3IgdGhlIGRvdWJsZSB0YXAgZ2VzdHVyZSwgc2luY2UgdGhpcyBpcyBhbiBvdGhlciBnZXN0dXJlIGRldGVjdCBzZXNzaW9uXG4gICAgdGhpcy5wcmV2aW91cyA9IF9fYWkuR2VzdHVyZXMudXRpbHMuZXh0ZW5kKHt9LCB0aGlzLmN1cnJlbnQpO1xuXG4gICAgLy8gcmVzZXQgdGhlIGN1cnJlbnRcbiAgICB0aGlzLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgLy8gc3RvcHBlZCFcbiAgICB0aGlzLnN0b3BwZWQgPSB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIGV4dGVuZCBldmVudERhdGEgZm9yIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZXNcbiAgICogQHBhcmFtICAge09iamVjdH0gICBldlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSAgIGV2XG4gICAqL1xuICBleHRlbmRFdmVudERhdGEoZXYpIHtcbiAgICB2YXIgc3RhcnRFdiA9IHRoaXMuY3VycmVudC5zdGFydEV2ZW50O1xuXG4gICAgLy8gaWYgdGhlIHRvdWNoZXMgY2hhbmdlLCBzZXQgdGhlIG5ldyB0b3VjaGVzIG92ZXIgdGhlIHN0YXJ0RXZlbnQgdG91Y2hlc1xuICAgIC8vIHRoaXMgYmVjYXVzZSB0b3VjaGV2ZW50cyBkb24ndCBoYXZlIGFsbCB0aGUgdG91Y2hlcyBvbiB0b3VjaHN0YXJ0LCBvciB0aGVcbiAgICAvLyB1c2VyIG11c3QgcGxhY2UgaGlzIGZpbmdlcnMgYXQgdGhlIEVYQUNUIHNhbWUgdGltZSBvbiB0aGUgc2NyZWVuLCB3aGljaCBpcyBub3QgcmVhbGlzdGljXG4gICAgLy8gYnV0LCBzb21ldGltZXMgaXQgaGFwcGVucyB0aGF0IGJvdGggZmluZ2VycyBhcmUgdG91Y2hpbmcgYXQgdGhlIEVYQUNUIHNhbWUgdGltZVxuICAgIGlmKHN0YXJ0RXYgJiYgKGV2LnRvdWNoZXMubGVuZ3RoICE9IHN0YXJ0RXYudG91Y2hlcy5sZW5ndGggfHwgZXYudG91Y2hlcyA9PT0gc3RhcnRFdi50b3VjaGVzKSkge1xuICAgICAgLy8gZXh0ZW5kIDEgbGV2ZWwgZGVlcCB0byBnZXQgdGhlIHRvdWNobGlzdCB3aXRoIHRoZSB0b3VjaCBvYmplY3RzXG4gICAgICBzdGFydEV2LnRvdWNoZXMgPSBbXTtcbiAgICAgIGZvcih2YXIgaSA9IDAsIGxlbiA9IGV2LnRvdWNoZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgc3RhcnRFdi50b3VjaGVzLnB1c2goX19haS5HZXN0dXJlcy51dGlscy5leHRlbmQoe30sIGV2LnRvdWNoZXNbaV0pKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVsdGFfdGltZSA9IGV2LnRpbWVTdGFtcCAtIHN0YXJ0RXYudGltZVN0YW1wLFxuICAgICAgICBkZWx0YV94ID0gZXYuY2VudGVyLnBhZ2VYIC0gc3RhcnRFdi5jZW50ZXIucGFnZVgsXG4gICAgICAgIGRlbHRhX3kgPSBldi5jZW50ZXIucGFnZVkgLSBzdGFydEV2LmNlbnRlci5wYWdlWSxcbiAgICAgICAgdmVsb2NpdHkgPSBfX2FpLkdlc3R1cmVzLnV0aWxzLmdldFZlbG9jaXR5KGRlbHRhX3RpbWUsIGRlbHRhX3gsIGRlbHRhX3kpO1xuXG4gICAgX19haS5HZXN0dXJlcy51dGlscy5leHRlbmQoZXYsIHtcbiAgICAgIGRlbHRhVGltZTogZGVsdGFfdGltZSxcbiAgICAgIGRlbHRhWDogZGVsdGFfeCxcbiAgICAgIGRlbHRhWTogZGVsdGFfeSxcblxuICAgICAgdmVsb2NpdHlYOiB2ZWxvY2l0eS54LFxuICAgICAgdmVsb2NpdHlZOiB2ZWxvY2l0eS55LFxuXG4gICAgICBkaXN0YW5jZTogX19haS5HZXN0dXJlcy51dGlscy5nZXREaXN0YW5jZShzdGFydEV2LmNlbnRlciwgZXYuY2VudGVyKSxcbiAgICAgIGFuZ2xlOiBfX2FpLkdlc3R1cmVzLnV0aWxzLmdldEFuZ2xlKHN0YXJ0RXYuY2VudGVyLCBldi5jZW50ZXIpLFxuICAgICAgZGlyZWN0aW9uOiBfX2FpLkdlc3R1cmVzLnV0aWxzLmdldERpcmVjdGlvbihzdGFydEV2LmNlbnRlciwgZXYuY2VudGVyKSxcblxuICAgICAgc2NhbGU6IF9fYWkuR2VzdHVyZXMudXRpbHMuZ2V0U2NhbGUoc3RhcnRFdi50b3VjaGVzLCBldi50b3VjaGVzKSxcbiAgICAgIHJvdGF0aW9uOiBfX2FpLkdlc3R1cmVzLnV0aWxzLmdldFJvdGF0aW9uKHN0YXJ0RXYudG91Y2hlcywgZXYudG91Y2hlcyksXG5cbiAgICAgIHN0YXJ0RXZlbnQ6IHN0YXJ0RXZcbiAgICB9KTtcblxuICAgIHJldHVybiBldjtcbiAgfVxuXG4gIC8qKlxuICAgKiByZWdpc3RlciBuZXcgZ2VzdHVyZVxuICAgKiBAcGFyYW0gICB7T2JqZWN0fSAgICBnZXN0dXJlIG9iamVjdCwgc2VlIGdlc3R1cmVzLmpzIGZvciBkb2N1bWVudGF0aW9uXG4gICAqIEByZXR1cm5zIHtBcnJheX0gICAgIGdlc3R1cmVzXG4gICAqL1xuICByZWdpc3RlcihnZXN0dXJlKSB7XG4gICAgLy8gYWRkIGFuIGVuYWJsZSBnZXN0dXJlIG9wdGlvbnMgaWYgdGhlcmUgaXMgbm8gZ2l2ZW5cbiAgICB2YXIgb3B0aW9ucyA9IGdlc3R1cmUuZGVmYXVsdHMgfHwge307XG4gICAgaWYob3B0aW9uc1tnZXN0dXJlLm5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgIG9wdGlvbnNbZ2VzdHVyZS5uYW1lXSA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gZXh0ZW5kIF9fYWkuR2VzdHVyZXMgZGVmYXVsdCBvcHRpb25zIHdpdGggdGhlIF9fYWkuR2VzdHVyZXMuZ2VzdHVyZSBvcHRpb25zXG4gICAgX19haS5HZXN0dXJlcy51dGlscy5leHRlbmQoX19haS5HZXN0dXJlcy5kZWZhdWx0cywgb3B0aW9ucywgdHJ1ZSk7XG5cbiAgICAvLyBzZXQgaXRzIGluZGV4XG4gICAgZ2VzdHVyZS5pbmRleCA9IGdlc3R1cmUuaW5kZXggfHwgMTAwMDtcblxuICAgIC8vIGFkZCBfX2FpLkdlc3R1cmVzLmdlc3R1cmUgdG8gdGhlIGxpc3RcbiAgICB0aGlzLmdlc3R1cmVzLnB1c2goZ2VzdHVyZSk7XG5cbiAgICAvLyBzb3J0IHRoZSBsaXN0IGJ5IGluZGV4XG4gICAgdGhpcy5nZXN0dXJlcy5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGlmIChhLmluZGV4IDwgYi5pbmRleCkge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYS5pbmRleCA+IGIuaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmdlc3R1cmVzO1xuICB9XG59XG5cblxuLyoqXG4gKiBDdXN0b20gZ2VzdHVyZXNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICpcbiAqIEdlc3R1cmUgb2JqZWN0XG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogVGhlIG9iamVjdCBzdHJ1Y3R1cmUgb2YgYSBnZXN0dXJlOlxuICpcbiAqIHsgbmFtZTogJ215Z2VzdHVyZScsXG4gKiAgIGluZGV4OiAxMzM3LFxuICogICBkZWZhdWx0czoge1xuICogICAgIG15Z2VzdHVyZV9vcHRpb246IHRydWVcbiAqICAgfVxuICogICBoYW5kbGVyOiBmdW5jdGlvbih0eXBlLCBldiwgaW5zdCkge1xuICogICAgIC8vIHRyaWdnZXIgZ2VzdHVyZSBldmVudFxuICogICAgIGluc3QudHJpZ2dlcih0aGlzLm5hbWUsIGV2KTtcbiAqICAgfVxuICogfVxuICogQHBhcmFtICAge1N0cmluZ30gICAgbmFtZVxuICogdGhpcyBzaG91bGQgYmUgdGhlIG5hbWUgb2YgdGhlIGdlc3R1cmUsIGxvd2VyY2FzZVxuICogaXQgaXMgYWxzbyBiZWluZyB1c2VkIHRvIGRpc2FibGUvZW5hYmxlIHRoZSBnZXN0dXJlIHBlciBpbnN0YW5jZSBjb25maWcuXG4gKlxuICogQHBhcmFtICAge051bWJlcn0gICAgW2luZGV4PTEwMDBdXG4gKiB0aGUgaW5kZXggb2YgdGhlIGdlc3R1cmUsIHdoZXJlIGl0IGlzIGdvaW5nIHRvIGJlIGluIHRoZSBzdGFjayBvZiBnZXN0dXJlcyBkZXRlY3Rpb25cbiAqIGxpa2Ugd2hlbiB5b3UgYnVpbGQgYW4gZ2VzdHVyZSB0aGF0IGRlcGVuZHMgb24gdGhlIGRyYWcgZ2VzdHVyZSwgaXQgaXMgYSBnb29kXG4gKiBpZGVhIHRvIHBsYWNlIGl0IGFmdGVyIHRoZSBpbmRleCBvZiB0aGUgZHJhZyBnZXN0dXJlLlxuICpcbiAqIEBwYXJhbSAgIHtPYmplY3R9ICAgIFtkZWZhdWx0cz17fV1cbiAqIHRoZSBkZWZhdWx0IHNldHRpbmdzIG9mIHRoZSBnZXN0dXJlLiB0aGVzZSBhcmUgYWRkZWQgdG8gdGhlIGluc3RhbmNlIHNldHRpbmdzLFxuICogYW5kIGNhbiBiZSBvdmVycnVsZWQgcGVyIGluc3RhbmNlLiB5b3UgY2FuIGFsc28gYWRkIHRoZSBuYW1lIG9mIHRoZSBnZXN0dXJlLFxuICogYnV0IHRoaXMgaXMgYWxzbyBhZGRlZCBieSBkZWZhdWx0IChhbmQgc2V0IHRvIHRydWUpLlxuICpcbiAqIEBwYXJhbSAgIHtGdW5jdGlvbn0gIGhhbmRsZXJcbiAqIHRoaXMgaGFuZGxlcyB0aGUgZ2VzdHVyZSBkZXRlY3Rpb24gb2YgeW91ciBjdXN0b20gZ2VzdHVyZSBhbmQgcmVjZWl2ZXMgdGhlXG4gKiBmb2xsb3dpbmcgYXJndW1lbnRzOlxuICpcbiAqICAgICAgQHBhcmFtICB7T2JqZWN0fSAgICBldmVudERhdGFcbiAqICAgICAgZXZlbnQgZGF0YSBjb250YWluaW5nIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAqICAgICAgICAgIHRpbWVTdGFtcCAgIHtOdW1iZXJ9ICAgICAgICB0aW1lIHRoZSBldmVudCBvY2N1cnJlZFxuICogICAgICAgICAgdGFyZ2V0ICAgICAge0hUTUxFbGVtZW50fSAgIHRhcmdldCBlbGVtZW50XG4gKiAgICAgICAgICB0b3VjaGVzICAgICB7QXJyYXl9ICAgICAgICAgdG91Y2hlcyAoZmluZ2VycywgcG9pbnRlcnMsIG1vdXNlKSBvbiB0aGUgc2NyZWVuXG4gKiAgICAgICAgICBwb2ludGVyVHlwZSB7U3RyaW5nfSAgICAgICAga2luZCBvZiBwb2ludGVyIHRoYXQgd2FzIHVzZWQuIG1hdGNoZXMgX19haS5HZXN0dXJlcy5QT0lOVEVSX01PVVNFfFRPVUNIXG4gKiAgICAgICAgICBjZW50ZXIgICAgICB7T2JqZWN0fSAgICAgICAgY2VudGVyIHBvc2l0aW9uIG9mIHRoZSB0b3VjaGVzLiBjb250YWlucyBwYWdlWCBhbmQgcGFnZVlcbiAqICAgICAgICAgIGRlbHRhVGltZSAgIHtOdW1iZXJ9ICAgICAgICB0aGUgdG90YWwgdGltZSBvZiB0aGUgdG91Y2hlcyBpbiB0aGUgc2NyZWVuXG4gKiAgICAgICAgICBkZWx0YVggICAgICB7TnVtYmVyfSAgICAgICAgdGhlIGRlbHRhIG9uIHggYXhpcyB3ZSBoYXZlZCBtb3ZlZFxuICogICAgICAgICAgZGVsdGFZICAgICAge051bWJlcn0gICAgICAgIHRoZSBkZWx0YSBvbiB5IGF4aXMgd2UgaGF2ZWQgbW92ZWRcbiAqICAgICAgICAgIHZlbG9jaXR5WCAgIHtOdW1iZXJ9ICAgICAgICB0aGUgdmVsb2NpdHkgb24gdGhlIHhcbiAqICAgICAgICAgIHZlbG9jaXR5WSAgIHtOdW1iZXJ9ICAgICAgICB0aGUgdmVsb2NpdHkgb24geVxuICogICAgICAgICAgYW5nbGUgICAgICAge051bWJlcn0gICAgICAgIHRoZSBhbmdsZSB3ZSBhcmUgbW92aW5nXG4gKiAgICAgICAgICBkaXJlY3Rpb24gICB7U3RyaW5nfSAgICAgICAgdGhlIGRpcmVjdGlvbiB3ZSBhcmUgbW92aW5nLiBtYXRjaGVzIF9fYWkuR2VzdHVyZXMuRElSRUNUSU9OX1VQfERPV058TEVGVHxSSUdIVFxuICogICAgICAgICAgZGlzdGFuY2UgICAge051bWJlcn0gICAgICAgIHRoZSBkaXN0YW5jZSB3ZSBoYXZlZCBtb3ZlZFxuICogICAgICAgICAgc2NhbGUgICAgICAge051bWJlcn0gICAgICAgIHNjYWxpbmcgb2YgdGhlIHRvdWNoZXMsIG5lZWRzIDIgdG91Y2hlc1xuICogICAgICAgICAgcm90YXRpb24gICAge051bWJlcn0gICAgICAgIHJvdGF0aW9uIG9mIHRoZSB0b3VjaGVzLCBuZWVkcyAyIHRvdWNoZXMgKlxuICogICAgICAgICAgZXZlbnRUeXBlICAge1N0cmluZ30gICAgICAgIG1hdGNoZXMgX19haS5HZXN0dXJlcy5FVkVOVF9TVEFSVHxNT1ZFfEVORFxuICogICAgICAgICAgc3JjRXZlbnQgICAge09iamVjdH0gICAgICAgIHRoZSBzb3VyY2UgZXZlbnQsIGxpa2UgVG91Y2hTdGFydCBvciBNb3VzZURvd24gKlxuICogICAgICAgICAgc3RhcnRFdmVudCAge09iamVjdH0gICAgICAgIGNvbnRhaW5zIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgYWJvdmUsXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0IGZyb20gdGhlIGZpcnN0IHRvdWNoLiB0aGlzIGlzIHVzZWQgdG8gY2FsY3VsYXRlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzdGFuY2VzLCBkZWx0YVRpbWUsIHNjYWxpbmcgZXRjXG4gKlxuICogICAgICBAcGFyYW0gIHtfX2FpLkdlc3R1cmVzLkluc3RhbmNlfSAgICBpbnN0XG4gKiAgICAgIHRoZSBpbnN0YW5jZSB3ZSBhcmUgZG9pbmcgdGhlIGRldGVjdGlvbiBmb3IuIHlvdSBjYW4gZ2V0IHRoZSBvcHRpb25zIGZyb21cbiAqICAgICAgdGhlIGluc3Qub3B0aW9ucyBvYmplY3QgYW5kIHRyaWdnZXIgdGhlIGdlc3R1cmUgZXZlbnQgYnkgY2FsbGluZyBpbnN0LnRyaWdnZXJcbiAqXG4gKlxuICogSGFuZGxlIGdlc3R1cmVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogaW5zaWRlIHRoZSBoYW5kbGVyIHlvdSBjYW4gZ2V0L3NldCBfX2FpLkdlc3R1cmVzLmRldGVjdF9fYWkuY3VycmVudC4gVGhpcyBpcyB0aGUgY3VycmVudFxuICogZGV0ZWN0aW9uIHNlc3NfX2FpLiBJdCBoYXMgdGhlIGZvbGxvd2luZyBwcm9wZXJ0aWVzXG4gKiAgICAgIEBwYXJhbSAge1N0cmluZ30gICAgbmFtZVxuICogICAgICBjb250YWlucyB0aGUgbmFtZSBvZiB0aGUgZ2VzdHVyZSB3ZSBoYXZlIGRldGVjdGVkLiBpdCBoYXMgbm90IGEgcmVhbCBmdW5jdGlvbixcbiAqICAgICAgb25seSB0byBjaGVjayBpbiBvdGhlciBnZXN0dXJlcyBpZiBzb21ldGhpbmcgaXMgZGV0ZWN0ZWQuXG4gKiAgICAgIGxpa2UgaW4gdGhlIGRyYWcgZ2VzdHVyZSB3ZSBzZXQgaXQgdG8gJ2RyYWcnIGFuZCBpbiB0aGUgc3dpcGUgZ2VzdHVyZSB3ZSBjYW5cbiAqICAgICAgY2hlY2sgaWYgdGhlIGN1cnJlbnQgZ2VzdHVyZSBpcyAnZHJhZycgYnkgYWNjZXNzaW5nIF9fYWkuR2VzdHVyZXMuZGV0ZWN0X19haS5jdXJyZW50Lm5hbWVcbiAqXG4gKiAgICAgIHJlYWRvbmx5XG4gKiAgICAgIEBwYXJhbSAge19fYWkuR2VzdHVyZXMuSW5zdGFuY2V9ICAgIGluc3RcbiAqICAgICAgdGhlIGluc3RhbmNlIHdlIGRvIHRoZSBkZXRlY3Rpb24gZm9yXG4gKlxuICogICAgICByZWFkb25seVxuICogICAgICBAcGFyYW0gIHtPYmplY3R9ICAgIHN0YXJ0RXZlbnRcbiAqICAgICAgY29udGFpbnMgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGZpcnN0IGdlc3R1cmUgZGV0ZWN0aW9uIGluIHRoaXMgc2Vzc19fYWkuXG4gKiAgICAgIFVzZWQgZm9yIGNhbGN1bGF0aW9ucyBhYm91dCB0aW1pbmcsIGRpc3RhbmNlLCBldGMuXG4gKlxuICogICAgICByZWFkb25seVxuICogICAgICBAcGFyYW0gIHtPYmplY3R9ICAgIGxhc3RFdmVudFxuICogICAgICBjb250YWlucyBhbGwgdGhlIHByb3BlcnRpZXMgb2YgdGhlIGxhc3QgZ2VzdHVyZSBkZXRlY3QgaW4gdGhpcyBzZXNzX19haS5cbiAqXG4gKiBhZnRlciB0aGUgZ2VzdHVyZSBkZXRlY3Rpb24gc2Vzc2lvbiBoYXMgYmVlbiBjb21wbGV0ZWQgKHVzZXIgaGFzIHJlbGVhc2VkIHRoZSBzY3JlZW4pXG4gKiB0aGUgX19haS5HZXN0dXJlcy5kZXRlY3RfX2FpLmN1cnJlbnQgb2JqZWN0IGlzIGNvcGllZCBpbnRvIF9fYWkuR2VzdHVyZXMuZGV0ZWN0X19haS5wcmV2aW91cyxcbiAqIHRoaXMgaXMgdXNlZnVsbCBmb3IgZ2VzdHVyZXMgbGlrZSBkb3VibGV0YXAsIHdoZXJlIHlvdSBuZWVkIHRvIGtub3cgaWYgdGhlXG4gKiBwcmV2aW91cyBnZXN0dXJlIHdhcyBhIHRhcFxuICpcbiAqIG9wdGlvbnMgdGhhdCBoYXZlIGJlZW4gc2V0IGJ5IHRoZSBpbnN0YW5jZSBjYW4gYmUgcmVjZWl2ZWQgYnkgY2FsbGluZyBpbnN0Lm9wdGlvbnNcbiAqXG4gKiBZb3UgY2FuIHRyaWdnZXIgYSBnZXN0dXJlIGV2ZW50IGJ5IGNhbGxpbmcgaW5zdC50cmlnZ2VyKFwibXlnZXN0dXJlXCIsIGV2ZW50KS5cbiAqIFRoZSBmaXJzdCBwYXJhbSBpcyB0aGUgbmFtZSBvZiB5b3VyIGdlc3R1cmUsIHRoZSBzZWNvbmQgdGhlIGV2ZW50IGFyZ3VtZW50XG4gKlxuICpcbiAqIFJlZ2lzdGVyIGdlc3R1cmVzXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLVxuICogV2hlbiBhbiBnZXN0dXJlIGlzIGFkZGVkIHRvIHRoZSBfX2FpLkdlc3R1cmVzLmdlc3R1cmVzIG9iamVjdCwgaXQgaXMgYXV0byByZWdpc3RlcmVkXG4gKiBhdCB0aGUgc2V0dXAgb2YgdGhlIGZpcnN0IF9fYWkuR2VzdHVyZXMgaW5zdGFuY2UuIFlvdSBjYW4gYWxzbyBjYWxsIF9fYWkuR2VzdHVyZXMuZGV0ZWN0X19haS5yZWdpc3RlclxuICogbWFudWFsbHkgYW5kIHBhc3MgeW91ciBnZXN0dXJlIG9iamVjdCBhcyBhIHBhcmFtXG4gKlxuICovXG5cblxuLyoqXG4gKiBIb2xkXG4gKiBUb3VjaCBzdGF5cyBhdCB0aGUgc2FtZSBwbGFjZSBmb3IgeCB0aW1lXG4gKiBldmVudHMgIGhvbGRcbiAqL1xuY2xhc3MgSG9sZEdlc3R1cmUge1xuICBuYW1lID0gJ2hvbGQnO1xuICBpbmRleCA9IDEwO1xuICBkZWZhdWx0cyA9IHtcbiAgICBob2xkX3RpbWVvdXQ6IDUwMCxcbiAgICBob2xkX3RocmVzaG9sZDogMVxuICB9O1xuXG4gIHRpbWVyID0gbnVsbDtcbiAgaGFuZGxlcihldiwgaW5zdCkge1xuICAgIHN3aXRjaChldi5ldmVudFR5cGUpIHtcbiAgICAgIGNhc2UgX19haS5HZXN0dXJlcy5FVkVOVF9TVEFSVDpcbiAgICAgICAgLy8gY2xlYXIgYW55IHJ1bm5pbmcgdGltZXJzXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcblxuICAgICAgICAvLyBzZXQgdGhlIGdlc3R1cmUgc28gd2UgY2FuIGNoZWNrIGluIHRoZSB0aW1lb3V0IGlmIGl0IHN0aWxsIGlzXG4gICAgICAgIF9fYWkuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubmFtZSA9IHRoaXMubmFtZTtcblxuICAgICAgICAvLyBzZXQgdGltZXIgYW5kIGlmIGFmdGVyIHRoZSB0aW1lb3V0IGl0IHN0aWxsIGlzIGhvbGQsXG4gICAgICAgIC8vIHdlIHRyaWdnZXIgdGhlIGhvbGQgZXZlbnRcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYoX19haS5HZXN0dXJlcy5kZXRlY3Rpb24uY3VycmVudC5uYW1lID09ICdob2xkJykge1xuICAgICAgICAgICAgX19haS50YXAuY2FuY2VsQ2xpY2soKTtcbiAgICAgICAgICAgIGluc3QudHJpZ2dlcignaG9sZCcsIGV2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIGluc3Qub3B0aW9ucy5ob2xkX3RpbWVvdXQpO1xuICAgICAgICBicmVhaztcblxuICAgICAgICAvLyB3aGVuIHlvdSBtb3ZlIG9yIGVuZCB3ZSBjbGVhciB0aGUgdGltZXJcbiAgICAgIGNhc2UgX19haS5HZXN0dXJlcy5FVkVOVF9NT1ZFOlxuICAgICAgICBpZihldi5kaXN0YW5jZSA+IGluc3Qub3B0aW9ucy5ob2xkX3RocmVzaG9sZCkge1xuICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfX2FpLkdlc3R1cmVzLkVWRU5UX0VORDpcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuXG4vKipcbiAqIFRhcC9Eb3VibGVUYXBcbiAqIFF1aWNrIHRvdWNoIGF0IGEgcGxhY2Ugb3IgZG91YmxlIGF0IHRoZSBzYW1lIHBsYWNlXG4gKiBldmVudHMgIHRhcCwgZG91YmxldGFwXG4gKi9cbmNsYXNzIFRhcEdlc3R1cmUge1xuICBuYW1lID0ndGFwJztcbiAgaW5kZXggPSAxMDA7XG4gIGRlZmF1bHRzID0ge1xuICAgIHRhcF9tYXhfdG91Y2h0aW1lOiAyNTAsXG4gICAgdGFwX21heF9kaXN0YW5jZTogMTAsXG4gICAgdGFwX2Fsd2F5czogdHJ1ZSxcbiAgICBkb3VibGV0YXBfZGlzdGFuY2U6IDIwLFxuICAgIGRvdWJsZXRhcF9pbnRlcnZhbDogMzAwXG4gIH07XG5cbiAgaGFuZGxlcihldiwgaW5zdCkge1xuICAgIGlmKGV2LmV2ZW50VHlwZSA9PSBfX2FpLkdlc3R1cmVzLkVWRU5UX0VORCAmJiBldi5zcmNFdmVudC50eXBlICE9ICd0b3VjaGNhbmNlbCcpIHtcbiAgICAgIC8vIHByZXZpb3VzIGdlc3R1cmUsIGZvciB0aGUgZG91YmxlIHRhcCBzaW5jZSB0aGVzZSBhcmUgdHdvIGRpZmZlcmVudCBnZXN0dXJlIGRldGVjdGlvbnNcbiAgICAgIHZhciBwcmV2ID0gX19haS5HZXN0dXJlcy5kZXRlY3Rpb24ucHJldmlvdXMsXG4gICAgICBkaWRfZG91YmxldGFwID0gZmFsc2U7XG5cbiAgICAgIC8vIHdoZW4gdGhlIHRvdWNodGltZSBpcyBoaWdoZXIgdGhlbiB0aGUgbWF4IHRvdWNoIHRpbWVcbiAgICAgIC8vIG9yIHdoZW4gdGhlIG1vdmluZyBkaXN0YW5jZSBpcyB0b28gbXVjaFxuICAgICAgaWYoZXYuZGVsdGFUaW1lID4gaW5zdC5vcHRpb25zLnRhcF9tYXhfdG91Y2h0aW1lIHx8XG4gICAgICAgICAgZXYuZGlzdGFuY2UgPiBpbnN0Lm9wdGlvbnMudGFwX21heF9kaXN0YW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cblxuICAgICAgLy8gY2hlY2sgaWYgZG91YmxlIHRhcFxuICAgICAgaWYocHJldiAmJiBwcmV2Lm5hbWUgPT0gJ3RhcCcgJiZcbiAgICAgICAgICAoZXYudGltZVN0YW1wIC0gcHJldi5sYXN0RXZlbnQudGltZVN0YW1wKSA8IGluc3Qub3B0aW9ucy5kb3VibGV0YXBfaW50ZXJ2YWwgJiZcbiAgICAgICAgICBldi5kaXN0YW5jZSA8IGluc3Qub3B0aW9ucy5kb3VibGV0YXBfZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIGluc3QudHJpZ2dlcignZG91YmxldGFwJywgZXYpO1xuICAgICAgICAgICAgZGlkX2RvdWJsZXRhcCA9IHRydWU7XG4gICAgICAgICAgfVxuXG4gICAgICAvLyBkbyBhIHNpbmdsZSB0YXBcbiAgICAgIGlmKCFkaWRfZG91YmxldGFwIHx8IGluc3Qub3B0aW9ucy50YXBfYWx3YXlzKSB7XG4gICAgICAgIF9fYWkuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubmFtZSA9ICd0YXAnO1xuICAgICAgICBpbnN0LnRyaWdnZXIoJ3RhcCcsIGV2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBTd2lwZVxuICogdHJpZ2dlcnMgc3dpcGUgZXZlbnRzIHdoZW4gdGhlIGVuZCB2ZWxvY2l0eSBpcyBhYm92ZSB0aGUgdGhyZXNob2xkXG4gKiBldmVudHMgIHN3aXBlLCBzd2lwZWxlZnQsIHN3aXBlcmlnaHQsIHN3aXBldXAsIHN3aXBlZG93blxuICovXG5jbGFzcyBTd2lwZUdlc3R1cmUge1xuICBuYW1lID0gJ3N3aXBlJztcbiAgaW5kZXggPSA0MDtcbiAgZGVmYXVsdHMgPSB7XG4gICAgLy8gc2V0IDAgZm9yIHVubGltaXRlZCwgYnV0IHRoaXMgY2FuIGNvbmZsaWN0IHdpdGggdHJhbnNmb3JtXG4gICAgc3dpcGVfbWF4X3RvdWNoZXM6IDEsXG4gICAgc3dpcGVfdmVsb2NpdHk6IDAuNFxuICB9O1xuXG4gIGhhbmRsZXIoZXYsIGluc3QpIHtcbiAgICBpZihldi5ldmVudFR5cGUgPT0gX19haS5HZXN0dXJlcy5FVkVOVF9FTkQpIHtcbiAgICAgIC8vIG1heCB0b3VjaGVzXG4gICAgICBpZihpbnN0Lm9wdGlvbnMuc3dpcGVfbWF4X3RvdWNoZXMgPiAwICYmXG4gICAgICAgICAgZXYudG91Y2hlcy5sZW5ndGggPiBpbnN0Lm9wdGlvbnMuc3dpcGVfbWF4X3RvdWNoZXMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgIC8vIHdoZW4gdGhlIGRpc3RhbmNlIHdlIG1vdmVkIGlzIHRvbyBzbWFsbCB3ZSBza2lwIHRoaXMgZ2VzdHVyZVxuICAgICAgLy8gb3Igd2UgY2FuIGJlIGFscmVhZHkgaW4gZHJhZ2dpbmdcbiAgICAgIGlmKGV2LnZlbG9jaXR5WCA+IGluc3Qub3B0aW9ucy5zd2lwZV92ZWxvY2l0eSB8fFxuICAgICAgICAgIGV2LnZlbG9jaXR5WSA+IGluc3Qub3B0aW9ucy5zd2lwZV92ZWxvY2l0eSkge1xuICAgICAgICAgICAgLy8gdHJpZ2dlciBzd2lwZSBldmVudHNcbiAgICAgICAgICAgIGluc3QudHJpZ2dlcih0aGlzLm5hbWUsIGV2KTtcbiAgICAgICAgICAgIGluc3QudHJpZ2dlcih0aGlzLm5hbWUgKyBldi5kaXJlY3Rpb24sIGV2KTtcbiAgICAgICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuLyoqXG4gKiBEcmFnXG4gKiBNb3ZlIHdpdGggeCBmaW5nZXJzIChkZWZhdWx0IDEpIGFyb3VuZCBvbiB0aGUgcGFnZS4gQmxvY2tpbmcgdGhlIHNjcm9sbGluZyB3aGVuXG4gKiBtb3ZpbmcgbGVmdCBhbmQgcmlnaHQgaXMgYSBnb29kIHByYWN0aWNlLiBXaGVuIGFsbCB0aGUgZHJhZyBldmVudHMgYXJlIGJsb2NraW5nXG4gKiB5b3UgZGlzYWJsZSBzY3JvbGxpbmcgb24gdGhhdCBhcmVhLlxuICogZXZlbnRzICBkcmFnLCBkcmFwbGVmdCwgZHJhZ3JpZ2h0LCBkcmFndXAsIGRyYWdkb3duXG4gKi9cbmNsYXNzIERyYWdHZXN0dXJlIHtcbiAgbmFtZSA9ICdkcmFnJztcbiAgaW5kZXggPSA1MDtcbiAgZGVmYXVsdHMgPSB7XG4gICAgZHJhZ19taW5fZGlzdGFuY2U6IDEwLFxuICAgIC8vIFNldCBjb3JyZWN0X2Zvcl9kcmFnX21pbl9kaXN0YW5jZSB0byB0cnVlIHRvIG1ha2UgdGhlIHN0YXJ0aW5nIHBvaW50IG9mIHRoZSBkcmFnXG4gICAgLy8gYmUgY2FsY3VsYXRlZCBmcm9tIHdoZXJlIHRoZSBkcmFnIHdhcyB0cmlnZ2VyZWQsIG5vdCBmcm9tIHdoZXJlIHRoZSB0b3VjaCBzdGFydGVkLlxuICAgIC8vIFVzZWZ1bCB0byBhdm9pZCBhIGplcmstc3RhcnRpbmcgZHJhZywgd2hpY2ggY2FuIG1ha2UgZmluZS1hZGp1c3RtZW50c1xuICAgIC8vIHRocm91Z2ggZHJhZ2dpbmcgZGlmZmljdWx0LCBhbmQgYmUgdmlzdWFsbHkgdW5hcHBlYWxpbmcuXG4gICAgY29ycmVjdF9mb3JfZHJhZ19taW5fZGlzdGFuY2U6IHRydWUsXG4gICAgLy8gc2V0IDAgZm9yIHVubGltaXRlZCwgYnV0IHRoaXMgY2FuIGNvbmZsaWN0IHdpdGggdHJhbnNmb3JtXG4gICAgZHJhZ19tYXhfdG91Y2hlczogMSxcbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciB3aGVuIGRyYWdnaW5nIG9jY3Vyc1xuICAgIC8vIGJlIGNhcmVmdWwgd2l0aCBpdCwgaXQgbWFrZXMgdGhlIGVsZW1lbnQgYSBibG9ja2luZyBlbGVtZW50XG4gICAgLy8gd2hlbiB5b3UgYXJlIHVzaW5nIHRoZSBkcmFnIGdlc3R1cmUsIGl0IGlzIGEgZ29vZCBwcmFjdGljZSB0byBzZXQgdGhpcyB0cnVlXG4gICAgZHJhZ19ibG9ja19ob3Jpem9udGFsOiB0cnVlLFxuICAgIGRyYWdfYmxvY2tfdmVydGljYWw6IHRydWUsXG4gICAgLy8gZHJhZ19sb2NrX3RvX2F4aXMga2VlcHMgdGhlIGRyYWcgZ2VzdHVyZSBvbiB0aGUgYXhpcyB0aGF0IGl0IHN0YXJ0ZWQgb24sXG4gICAgLy8gSXQgZGlzYWxsb3dzIHZlcnRpY2FsIGRpcmVjdGlvbnMgaWYgdGhlIGluaXRpYWwgZGlyZWN0aW9uIHdhcyBob3Jpem9udGFsLCBhbmQgdmljZSB2ZXJzYS5cbiAgICBkcmFnX2xvY2tfdG9fYXhpczogZmFsc2UsXG4gICAgLy8gZHJhZyBsb2NrIG9ubHkga2lja3MgaW4gd2hlbiBkaXN0YW5jZSA+IGRyYWdfbG9ja19taW5fZGlzdGFuY2VcbiAgICAvLyBUaGlzIHdheSwgbG9ja2luZyBvY2N1cnMgb25seSB3aGVuIHRoZSBkaXN0YW5jZSBoYXMgYmVjb21lIGxhcmdlIGVub3VnaCB0byByZWxpYWJseSBkZXRlcm1pbmUgdGhlIGRpcmVjdGlvblxuICAgIGRyYWdfbG9ja19taW5fZGlzdGFuY2U6IDI1LFxuICAgIC8vIHByZXZlbnQgZGVmYXVsdCBpZiB0aGUgZ2VzdHVyZSBpcyBnb2luZyB0aGUgZ2l2ZW4gZGlyZWN0aW9uXG4gICAgcHJldmVudF9kZWZhdWx0X2RpcmVjdGlvbnM6IFtdXG4gIH07XG5cbiAgdHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgaGFuZGxlcihldiwgaW5zdCkge1xuICAgIGlmIChldi5zcmNFdmVudC50eXBlID09ICd0b3VjaHN0YXJ0JyB8fCBldi5zcmNFdmVudC50eXBlID09ICd0b3VjaGVuZCcpIHtcbiAgICAgIHRoaXMucHJldmVudGVkRmlyc3RNb3ZlID0gZmFsc2U7XG5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLnByZXZlbnRlZEZpcnN0TW92ZSAmJiBldi5zcmNFdmVudC50eXBlID09ICd0b3VjaG1vdmUnKSB7XG4gICAgICAvLyBQcmV2ZW50IGdlc3R1cmVzIHRoYXQgYXJlIG5vdCBpbnRlbmRlZCBmb3IgdGhpcyBldmVudCBoYW5kbGVyIGZyb20gZmlyaW5nIHN1YnNlcXVlbnQgdGltZXNcbiAgICAgIGlmIChpbnN0Lm9wdGlvbnMucHJldmVudF9kZWZhdWx0X2RpcmVjdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgICYmIGluc3Qub3B0aW9ucy5wcmV2ZW50X2RlZmF1bHRfZGlyZWN0aW9ucy5pbmRleE9mKGV2LmRpcmVjdGlvbikgIT0gLTEpIHtcbiAgICAgICAgZXYuc3JjRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucHJldmVudGVkRmlyc3RNb3ZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBjdXJyZW50IGdlc3R1cmUgaXNudCBkcmFnLCBidXQgZHJhZ2dlZCBpcyB0cnVlXG4gICAgLy8gdGhpcyBtZWFucyBhbiBvdGhlciBnZXN0dXJlIGlzIGJ1c3kuIG5vdyBjYWxsIGRyYWdlbmRcbiAgICBpZihfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lm5hbWUgIT0gdGhpcy5uYW1lICYmIHRoaXMudHJpZ2dlcmVkKSB7XG4gICAgICBpbnN0LnRyaWdnZXIodGhpcy5uYW1lICsgJ2VuZCcsIGV2KTtcbiAgICAgIHRoaXMudHJpZ2dlcmVkID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbWF4IHRvdWNoZXNcbiAgICBpZihpbnN0Lm9wdGlvbnMuZHJhZ19tYXhfdG91Y2hlcyA+IDAgJiZcbiAgICAgICAgZXYudG91Y2hlcy5sZW5ndGggPiBpbnN0Lm9wdGlvbnMuZHJhZ19tYXhfdG91Y2hlcykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgc3dpdGNoKGV2LmV2ZW50VHlwZSkge1xuICAgICAgY2FzZSBfX2FpLkdlc3R1cmVzLkVWRU5UX1NUQVJUOlxuICAgICAgICB0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfX2FpLkdlc3R1cmVzLkVWRU5UX01PVkU6XG4gICAgICAgIC8vIHdoZW4gdGhlIGRpc3RhbmNlIHdlIG1vdmVkIGlzIHRvbyBzbWFsbCB3ZSBza2lwIHRoaXMgZ2VzdHVyZVxuICAgICAgICAvLyBvciB3ZSBjYW4gYmUgYWxyZWFkeSBpbiBkcmFnZ2luZ1xuICAgICAgICBpZihldi5kaXN0YW5jZSA8IGluc3Qub3B0aW9ucy5kcmFnX21pbl9kaXN0YW5jZSAmJlxuICAgICAgICAgICAgX19haS5HZXN0dXJlcy5kZXRlY3Rpb24uY3VycmVudC5uYW1lICE9IHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UgYXJlIGRyYWdnaW5nIVxuICAgICAgICBpZihfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lm5hbWUgIT0gdGhpcy5uYW1lKSB7XG4gICAgICAgICAgX19haS5HZXN0dXJlcy5kZXRlY3Rpb24uY3VycmVudC5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICAgIGlmIChpbnN0Lm9wdGlvbnMuY29ycmVjdF9mb3JfZHJhZ19taW5fZGlzdGFuY2UpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gYSBkcmFnIGlzIHRyaWdnZXJlZCwgc2V0IHRoZSBldmVudCBjZW50ZXIgdG8gZHJhZ19taW5fZGlzdGFuY2UgcGl4ZWxzIGZyb20gdGhlIG9yaWdpbmFsIGV2ZW50IGNlbnRlci5cbiAgICAgICAgICAgIC8vIFdpdGhvdXQgdGhpcyBjb3JyZWN0aW9uLCB0aGUgZHJhZ2dlZCBkaXN0YW5jZSB3b3VsZCBqdW1wc3RhcnQgYXQgZHJhZ19taW5fZGlzdGFuY2UgcGl4ZWxzIGluc3RlYWQgb2YgYXQgMC5cbiAgICAgICAgICAgIC8vIEl0IG1pZ2h0IGJlIHVzZWZ1bCB0byBzYXZlIHRoZSBvcmlnaW5hbCBzdGFydCBwb2ludCBzb21ld2hlcmVcbiAgICAgICAgICAgIHZhciBmYWN0b3IgPSBNYXRoLmFicyhpbnN0Lm9wdGlvbnMuZHJhZ19taW5fZGlzdGFuY2UgLyBldi5kaXN0YW5jZSk7XG4gICAgICAgICAgICBfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50LnN0YXJ0RXZlbnQuY2VudGVyLnBhZ2VYICs9IGV2LmRlbHRhWCAqIGZhY3RvcjtcbiAgICAgICAgICAgIF9fYWkuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQuc3RhcnRFdmVudC5jZW50ZXIucGFnZVkgKz0gZXYuZGVsdGFZICogZmFjdG9yO1xuXG4gICAgICAgICAgICAvLyByZWNhbGN1bGF0ZSBldmVudCBkYXRhIHVzaW5nIG5ldyBzdGFydCBwb2ludFxuICAgICAgICAgICAgZXYgPSBfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5leHRlbmRFdmVudERhdGEoZXYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGxvY2sgZHJhZyB0byBheGlzP1xuICAgICAgICBpZihfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lmxhc3RFdmVudC5kcmFnX2xvY2tlZF90b19heGlzIHx8IChpbnN0Lm9wdGlvbnMuZHJhZ19sb2NrX3RvX2F4aXMgJiYgaW5zdC5vcHRpb25zLmRyYWdfbG9ja19taW5fZGlzdGFuY2UgPD0gZXYuZGlzdGFuY2UpKSB7XG4gICAgICAgICAgZXYuZHJhZ19sb2NrZWRfdG9fYXhpcyA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGxhc3RfZGlyZWN0aW9uID0gX19haS5HZXN0dXJlcy5kZXRlY3Rpb24uY3VycmVudC5sYXN0RXZlbnQuZGlyZWN0aW9uO1xuICAgICAgICBpZihldi5kcmFnX2xvY2tlZF90b19heGlzICYmIGxhc3RfZGlyZWN0aW9uICE9PSBldi5kaXJlY3Rpb24pIHtcbiAgICAgICAgICAvLyBrZWVwIGRpcmVjdGlvbiBvbiB0aGUgYXhpcyB0aGF0IHRoZSBkcmFnIGdlc3R1cmUgc3RhcnRlZCBvblxuICAgICAgICAgIGlmKF9fYWkuR2VzdHVyZXMudXRpbHMuaXNWZXJ0aWNhbChsYXN0X2RpcmVjdGlvbikpIHtcbiAgICAgICAgICAgIGV2LmRpcmVjdGlvbiA9IChldi5kZWx0YVkgPCAwKSA/IF9fYWkuR2VzdHVyZXMuRElSRUNUSU9OX1VQIDogX19haS5HZXN0dXJlcy5ESVJFQ1RJT05fRE9XTjtcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldi5kaXJlY3Rpb24gPSAoZXYuZGVsdGFYIDwgMCkgPyBfX2FpLkdlc3R1cmVzLkRJUkVDVElPTl9MRUZUIDogX19haS5HZXN0dXJlcy5ESVJFQ1RJT05fUklHSFQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmlyc3QgdGltZSwgdHJpZ2dlciBkcmFnc3RhcnQgZXZlbnRcbiAgICAgICAgaWYoIXRoaXMudHJpZ2dlcmVkKSB7XG4gICAgICAgICAgaW5zdC50cmlnZ2VyKHRoaXMubmFtZSArICdzdGFydCcsIGV2KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIG5vcm1hbCBldmVudFxuICAgICAgICBpbnN0LnRyaWdnZXIodGhpcy5uYW1lLCBldik7XG5cbiAgICAgICAgLy8gZGlyZWN0aW9uIGV2ZW50LCBsaWtlIGRyYWdkb3duXG4gICAgICAgIGluc3QudHJpZ2dlcih0aGlzLm5hbWUgKyBldi5kaXJlY3Rpb24sIGV2KTtcblxuICAgICAgICAvLyBibG9jayB0aGUgYnJvd3NlciBldmVudHNcbiAgICAgICAgaWYoIChpbnN0Lm9wdGlvbnMuZHJhZ19ibG9ja192ZXJ0aWNhbCAmJiBfX2FpLkdlc3R1cmVzLnV0aWxzLmlzVmVydGljYWwoZXYuZGlyZWN0aW9uKSkgfHxcbiAgICAgICAgICAgIChpbnN0Lm9wdGlvbnMuZHJhZ19ibG9ja19ob3Jpem9udGFsICYmICFfX2FpLkdlc3R1cmVzLnV0aWxzLmlzVmVydGljYWwoZXYuZGlyZWN0aW9uKSkpIHtcbiAgICAgICAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX19haS5HZXN0dXJlcy5FVkVOVF9FTkQ6XG4gICAgICAgIC8vIHRyaWdnZXIgZHJhZ2VuZFxuICAgICAgICBpZih0aGlzLnRyaWdnZXJlZCkge1xuICAgICAgICAgIGluc3QudHJpZ2dlcih0aGlzLm5hbWUgKyAnZW5kJywgZXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVHJhbnNmb3JtXG4gKiBVc2VyIHdhbnQgdG8gc2NhbGUgb3Igcm90YXRlIHdpdGggMiBmaW5nZXJzXG4gKiBldmVudHMgIHRyYW5zZm9ybSwgcGluY2gsIHBpbmNoaW4sIHBpbmNob3V0LCByb3RhdGVcbiAqL1xuY2xhc3MgVHJhbnNmb3JtR2VzdHVyZSB7XG4gIG5hbWUgPSAndHJhbnNmb3JtJztcbiAgaW5kZXggPSA0NTtcbiAgZGVmYXVsdHMgPSB7XG4gICAgLy8gZmFjdG9yLCBubyBzY2FsZSBpcyAxLCB6b29taW4gaXMgdG8gMCBhbmQgem9vbW91dCB1bnRpbCBoaWdoZXIgdGhlbiAxXG4gICAgdHJhbnNmb3JtX21pbl9zY2FsZTogMC4wMSxcbiAgICAvLyByb3RhdGlvbiBpbiBkZWdyZWVzXG4gICAgdHJhbnNmb3JtX21pbl9yb3RhdGlvbjogMSxcbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciB3aGVuIHR3byB0b3VjaGVzIGFyZSBvbiB0aGUgc2NyZWVuXG4gICAgLy8gYnV0IGl0IG1ha2VzIHRoZSBlbGVtZW50IGEgYmxvY2tpbmcgZWxlbWVudFxuICAgIC8vIHdoZW4geW91IGFyZSB1c2luZyB0aGUgdHJhbnNmb3JtIGdlc3R1cmUsIGl0IGlzIGEgZ29vZCBwcmFjdGljZSB0byBzZXQgdGhpcyB0cnVlXG4gICAgdHJhbnNmb3JtX2Fsd2F5c19ibG9jazogZmFsc2VcbiAgfTtcbiAgdHJpZ2dlcmVkID0gZmFsc2U7XG5cbiAgaGFuZGxlcihldiwgaW5zdCkge1xuICAgIC8vIGN1cnJlbnQgZ2VzdHVyZSBpc250IGRyYWcsIGJ1dCBkcmFnZ2VkIGlzIHRydWVcbiAgICAvLyB0aGlzIG1lYW5zIGFuIG90aGVyIGdlc3R1cmUgaXMgYnVzeS4gbm93IGNhbGwgZHJhZ2VuZFxuICAgIGlmKF9fYWkuR2VzdHVyZXMuZGV0ZWN0aW9uLmN1cnJlbnQubmFtZSAhPSB0aGlzLm5hbWUgJiYgdGhpcy50cmlnZ2VyZWQpIHtcbiAgICAgIGluc3QudHJpZ2dlcih0aGlzLm5hbWUgKyAnZW5kJywgZXYpO1xuICAgICAgdGhpcy50cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBhdGxlYXN0IG11bHRpdG91Y2hcbiAgICBpZihldi50b3VjaGVzLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBwcmV2ZW50IGRlZmF1bHQgd2hlbiB0d28gZmluZ2VycyBhcmUgb24gdGhlIHNjcmVlblxuICAgIGlmKGluc3Qub3B0aW9ucy50cmFuc2Zvcm1fYWx3YXlzX2Jsb2NrKSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHN3aXRjaChldi5ldmVudFR5cGUpIHtcbiAgICAgIGNhc2UgX19haS5HZXN0dXJlcy5FVkVOVF9TVEFSVDpcbiAgICAgICAgdGhpcy50cmlnZ2VyZWQgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgX19haS5HZXN0dXJlcy5FVkVOVF9NT1ZFOlxuICAgICAgICB2YXIgc2NhbGVfdGhyZXNob2xkID0gTWF0aC5hYnMoMSAtIGV2LnNjYWxlKTtcbiAgICAgICAgdmFyIHJvdGF0aW9uX3RocmVzaG9sZCA9IE1hdGguYWJzKGV2LnJvdGF0aW9uKTtcblxuICAgICAgICAvLyB3aGVuIHRoZSBkaXN0YW5jZSB3ZSBtb3ZlZCBpcyB0b28gc21hbGwgd2Ugc2tpcCB0aGlzIGdlc3R1cmVcbiAgICAgICAgLy8gb3Igd2UgY2FuIGJlIGFscmVhZHkgaW4gZHJhZ2dpbmdcbiAgICAgICAgaWYoc2NhbGVfdGhyZXNob2xkIDwgaW5zdC5vcHRpb25zLnRyYW5zZm9ybV9taW5fc2NhbGUgJiZcbiAgICAgICAgICAgIHJvdGF0aW9uX3RocmVzaG9sZCA8IGluc3Qub3B0aW9ucy50cmFuc2Zvcm1fbWluX3JvdGF0aW9uKSB7XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyB3ZSBhcmUgdHJhbnNmb3JtaW5nIVxuICAgICAgICBfX2FpLkdlc3R1cmVzLmRldGVjdGlvbi5jdXJyZW50Lm5hbWUgPSB0aGlzLm5hbWU7XG5cbiAgICAgICAgLy8gZmlyc3QgdGltZSwgdHJpZ2dlciBkcmFnc3RhcnQgZXZlbnRcbiAgICAgICAgaWYoIXRoaXMudHJpZ2dlcmVkKSB7XG4gICAgICAgICAgaW5zdC50cmlnZ2VyKHRoaXMubmFtZSArICdzdGFydCcsIGV2KTtcbiAgICAgICAgICB0aGlzLnRyaWdnZXJlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpbnN0LnRyaWdnZXIodGhpcy5uYW1lLCBldik7IC8vIGJhc2ljIHRyYW5zZm9ybSBldmVudFxuXG4gICAgICAgIC8vIHRyaWdnZXIgcm90YXRlIGV2ZW50XG4gICAgICAgIGlmKHJvdGF0aW9uX3RocmVzaG9sZCA+IGluc3Qub3B0aW9ucy50cmFuc2Zvcm1fbWluX3JvdGF0aW9uKSB7XG4gICAgICAgICAgaW5zdC50cmlnZ2VyKCdyb3RhdGUnLCBldik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB0cmlnZ2VyIHBpbmNoIGV2ZW50XG4gICAgICAgIGlmKHNjYWxlX3RocmVzaG9sZCA+IGluc3Qub3B0aW9ucy50cmFuc2Zvcm1fbWluX3NjYWxlKSB7XG4gICAgICAgICAgaW5zdC50cmlnZ2VyKCdwaW5jaCcsIGV2KTtcbiAgICAgICAgICBpbnN0LnRyaWdnZXIoJ3BpbmNoJyArICgoZXYuc2NhbGUgPCAxKSA/ICdpbicgOiAnb3V0JyksIGV2KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBfX2FpLkdlc3R1cmVzLkVWRU5UX0VORDpcbiAgICAgICAgLy8gdHJpZ2dlciBkcmFnZW5kXG4gICAgICAgIGlmKHRoaXMudHJpZ2dlcmVkKSB7XG4gICAgICAgICAgaW5zdC50cmlnZ2VyKHRoaXMubmFtZSArICdlbmQnLCBldik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRyaWdnZXJlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBUb3VjaFxuICogQ2FsbGVkIGFzIGZpcnN0LCB0ZWxscyB0aGUgdXNlciBoYXMgdG91Y2hlZCB0aGUgc2NyZWVuXG4gKiBldmVudHMgIHRvdWNoXG4gKi9cbmNsYXNzIFRvdWNoR2VzdHVyZXtcbiAgbmFtZSA9ICd0b3VjaCc7XG4gIGluZGV4ID0gLUluZmluaXR5O1xuICBkZWZhdWx0cyA9IHtcbiAgICAvLyBjYWxsIHByZXZlbnREZWZhdWx0IGF0IHRvdWNoc3RhcnQsIGFuZCBtYWtlcyB0aGUgZWxlbWVudCBibG9ja2luZyBieVxuICAgIC8vIGRpc2FibGluZyB0aGUgc2Nyb2xsaW5nIG9mIHRoZSBwYWdlLCBidXQgaXQgaW1wcm92ZXMgZ2VzdHVyZXMgbGlrZVxuICAgIC8vIHRyYW5zZm9ybWluZyBhbmQgZHJhZ2dpbmcuXG4gICAgLy8gYmUgY2FyZWZ1bCB3aXRoIHVzaW5nIHRoaXMsIGl0IGNhbiBiZSB2ZXJ5IGFubm95aW5nIGZvciB1c2VycyB0byBiZSBzdHVja1xuICAgIC8vIG9uIHRoZSBwYWdlXG4gICAgcHJldmVudF9kZWZhdWx0OiBmYWxzZSxcblxuICAgIC8vIGRpc2FibGUgbW91c2UgZXZlbnRzLCBzbyBvbmx5IHRvdWNoIChvciBwZW4hKSBpbnB1dCB0cmlnZ2VycyBldmVudHNcbiAgICBwcmV2ZW50X21vdXNlZXZlbnRzOiBmYWxzZVxuICB9O1xuXG4gIGhhbmRsZXIoZXYsIGluc3QpIHtcbiAgICBpZihpbnN0Lm9wdGlvbnMucHJldmVudF9tb3VzZWV2ZW50cyAmJiBldi5wb2ludGVyVHlwZSA9PSBfX2FpLkdlc3R1cmVzLlBPSU5URVJfTU9VU0UpIHtcbiAgICAgIGV2LnN0b3BEZXRlY3QoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZihpbnN0Lm9wdGlvbnMucHJldmVudF9kZWZhdWx0KSB7XG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGlmKGV2LmV2ZW50VHlwZSA9PSBfX2FpLkdlc3R1cmVzLkVWRU5UX1NUQVJUKSB7XG4gICAgICBpbnN0LnRyaWdnZXIodGhpcy5uYW1lLCBldik7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmVsZWFzZVxuICogQ2FsbGVkIGFzIGxhc3QsIHRlbGxzIHRoZSB1c2VyIGhhcyByZWxlYXNlZCB0aGUgc2NyZWVuXG4gKiBldmVudHMgIHJlbGVhc2VcbiAqL1xuY2xhc3MgUmVsZWFzZUdlc3R1cmV7XG4gIG5hbWUgPSAncmVsZWFzZSc7XG4gIGluZGV4ID0gSW5maW5pdHk7XG4gIGhhbmRsZXIoZXYsIGluc3QpIHtcbiAgICBpZihldi5ldmVudFR5cGUgPT0gX19haS5HZXN0dXJlcy5FVkVOVF9FTkQpIHtcbiAgICAgIGluc3QudHJpZ2dlcih0aGlzLm5hbWUsIGV2KTtcbiAgICB9XG4gIH1cbn07XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
