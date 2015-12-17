/* */ 
define(['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'aurelia-interface-platforms', 'aurelia-pal'], function (exports, _aureliaFramework, _aureliaEventAggregator, _aureliaInterfacePlatforms, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var prefix = 'ai:';
  var isDefaultChannel = false;

  function initializeDefaultEvents(channel) {
    isDefaultChannel = true;

    var clickEvent = _aureliaInterfacePlatforms.isTouch ? 'click' : 'touchstart';
    var scrollEvent;

    _aureliaPal.DOM.addEventListener(clickEvent, function (event) {}, true);

    _aureliaPal.DOM.addEventListener('animationend', function (event) {}, true);

    _aureliaPal.DOM.addEventListener('transitionend', function (event) {}, true);
  }

  var InterfaceEvent = (function () {
    function InterfaceEvent(event) {
      _classCallCheck(this, InterfaceEvent);

      this.original = event;
      this.target = event.target;
    }

    _createClass(InterfaceEvent, [{
      key: 'isTarget',
      value: function isTarget(element) {
        return element instanceof Element && element.isEqualNode(this.target);
      }
    }, {
      key: 'hasTarget',
      value: function hasTarget(element) {
        return element instanceof Element && element.contains(this.target);
      }
    }, {
      key: 'targetHas',
      value: function targetHas(element) {
        return element instanceof Element && this.target.contains(element);
      }
    }]);

    return InterfaceEvent;
  })();

  exports.InterfaceEvent = InterfaceEvent;

  var InterfaceScroll = (function (_InterfaceEvent) {
    _inherits(InterfaceScroll, _InterfaceEvent);

    function InterfaceScroll() {
      _classCallCheck(this, InterfaceScroll);

      _get(Object.getPrototypeOf(InterfaceScroll.prototype), 'constructor', this).apply(this, arguments);
    }

    return InterfaceScroll;
  })(InterfaceEvent);

  exports.InterfaceScroll = InterfaceScroll;

  var InterfaceClick = (function (_InterfaceEvent2) {
    _inherits(InterfaceClick, _InterfaceEvent2);

    function InterfaceClick() {
      _classCallCheck(this, InterfaceClick);

      _get(Object.getPrototypeOf(InterfaceClick.prototype), 'constructor', this).apply(this, arguments);
    }

    return InterfaceClick;
  })(InterfaceEvent);

  exports.InterfaceClick = InterfaceClick;

  var InterfaceAnimation = (function (_InterfaceEvent3) {
    _inherits(InterfaceAnimation, _InterfaceEvent3);

    function InterfaceAnimation(event) {
      _classCallCheck(this, InterfaceAnimation);

      _get(Object.getPrototypeOf(InterfaceAnimation.prototype), 'constructor', this).call(this, event);
      this.type = event.type;
    }

    return InterfaceAnimation;
  })(InterfaceEvent);

  exports.InterfaceAnimation = InterfaceAnimation;

  var InterfaceTransition = (function (_InterfaceEvent4) {
    _inherits(InterfaceTransition, _InterfaceEvent4);

    function InterfaceTransition(event) {
      _classCallCheck(this, InterfaceTransition);

      _get(Object.getPrototypeOf(InterfaceTransition.prototype), 'constructor', this).call(this, event);
      this.type = event.type;
    }

    return InterfaceTransition;
  })(InterfaceEvent);

  exports.InterfaceTransition = InterfaceTransition;

  var InterfaceChannel = (function () {
    _createClass(InterfaceChannel, null, [{
      key: 'Event',
      value: InterfaceEvent,
      enumerable: true
    }, {
      key: 'Click',
      value: InterfaceClick,
      enumerable: true
    }, {
      key: 'Animation',
      value: InterfaceAnimation,
      enumerable: true
    }, {
      key: 'Transition',
      value: InterfaceTransition,
      enumerable: true
    }]);

    function InterfaceChannel(eventAggregator, prefix) {
      _classCallCheck(this, _InterfaceChannel);

      this._prefix = 'interface';
      this._sep = ':';

      this.eventAggregator = eventAggregator;
      this._prefix = prefix || this._prefix;
      if (!isDefaultChannel) {
        initializeDefaultEvents(this);
      }
    }

    _createClass(InterfaceChannel, [{
      key: 'prefix',
      value: function prefix(name) {
        return this._prefix + this._sep + name;
      }
    }, {
      key: 'createChannel',
      value: function createChannel(channelName) {
        return new InterfaceChannel(this, channelName);
      }
    }, {
      key: 'publish',
      value: function publish(name, payload) {
        if (typeof name === 'string') name = this.prefix(name);
        return this.eventAggregator.publish(name, payload);
      }
    }, {
      key: 'subscribe',
      value: function subscribe(name, callback, context) {
        if (typeof name === 'string') name = this.prefix(name);
        return this.eventAggregator.subscribe(name, callback);
      }
    }, {
      key: 'subscribeOnce',
      value: function subscribeOnce(name, callback, context) {
        if (typeof name === 'string') name = this.prefix(name);
        return this.eventAggregator.subscribeOnce(name, callback);
      }
    }]);

    var _InterfaceChannel = InterfaceChannel;
    InterfaceChannel = (0, _aureliaFramework.inject)(_aureliaEventAggregator.EventAggregator)(InterfaceChannel) || InterfaceChannel;
    return InterfaceChannel;
  })();

  exports.InterfaceChannel = InterfaceChannel;
});
//# sourceMappingURL=data:application/json;base64,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RDVCLHNCQWhFTyxNQUFNLDBCQUNOLGVBQWUsQ0ErREMsQ0FDWCxnQkFBZ0IsS0FBaEIsZ0JBQWdCO1dBQWhCLGdCQUFnQiIsImZpbGUiOiJjaGFubmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtpc1RvdWNofSBmcm9tICdhdXJlbGlhLWludGVyZmFjZS1wbGF0Zm9ybXMnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuY29uc3QgcHJlZml4ID0gJ2FpOic7XG5sZXQgaXNEZWZhdWx0Q2hhbm5lbCA9IGZhbHNlO1xuXG5mdW5jdGlvbiBpbml0aWFsaXplRGVmYXVsdEV2ZW50cyhjaGFubmVsKSB7XG4gIGlzRGVmYXVsdENoYW5uZWwgPSB0cnVlO1xuXG4gIGNvbnN0IGNsaWNrRXZlbnQgPSBpc1RvdWNoID8gJ2NsaWNrJyA6ICd0b3VjaHN0YXJ0JztcbiAgdmFyIHNjcm9sbEV2ZW50O1xuXG4gIERPTS5hZGRFdmVudExpc3RlbmVyKGNsaWNrRXZlbnQsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gY2hhbm5lbC5wdWJsaXNoKG5ldyBJbnRlcmZhY2VDbGljayhldmVudCkpO1xuICB9LCB0cnVlKTtcblxuICBET00uYWRkRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBjaGFubmVsLnB1Ymxpc2gobmV3IEludGVyZmFjZUFuaW1hdGlvbihldmVudCkpO1xuICB9LCB0cnVlKTtcblxuICBET00uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gY2hhbm5lbC5wdWJsaXNoKG5ldyBJbnRlcmZhY2VUcmFuc2l0aW9uKGV2ZW50KSk7XG4gIH0sIHRydWUpO1xufVxuXG5cbmV4cG9ydCBjbGFzcyBJbnRlcmZhY2VFdmVudCB7XG4gIGNvbnN0cnVjdG9yKGV2ZW50KSB7XG4gICAgdGhpcy5vcmlnaW5hbCA9IGV2ZW50O1xuICAgIHRoaXMudGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICB9XG5cbiAgaXNUYXJnZXQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50IGluc3RhbmNlb2YgRWxlbWVudCAmJiBlbGVtZW50LmlzRXF1YWxOb2RlKHRoaXMudGFyZ2V0KTtcbiAgfVxuXG4gIGhhc1RhcmdldChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50ICYmIGVsZW1lbnQuY29udGFpbnModGhpcy50YXJnZXQpO1xuICB9XG5cbiAgdGFyZ2V0SGFzKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgdGhpcy50YXJnZXQuY29udGFpbnMoZWxlbWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyZmFjZVNjcm9sbCBleHRlbmRzIEludGVyZmFjZUV2ZW50IHt9XG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlQ2xpY2sgZXh0ZW5kcyBJbnRlcmZhY2VFdmVudCB7fVxuZXhwb3J0IGNsYXNzIEludGVyZmFjZUFuaW1hdGlvbiBleHRlbmRzIEludGVyZmFjZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoZXZlbnQpIHtcbiAgICBzdXBlcihldmVudCk7XG4gICAgdGhpcy50eXBlID0gZXZlbnQudHlwZTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlVHJhbnNpdGlvbiBleHRlbmRzIEludGVyZmFjZUV2ZW50IHtcbiAgY29uc3RydWN0b3IoZXZlbnQpIHtcbiAgICBzdXBlcihldmVudCk7XG4gICAgdGhpcy50eXBlID0gZXZlbnQudHlwZTtcbiAgfVxufVxuXG5cbkBpbmplY3QoRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEludGVyZmFjZUNoYW5uZWwge1xuXG4gIHN0YXRpYyBFdmVudCA9IEludGVyZmFjZUV2ZW50O1xuXG4gIHN0YXRpYyBDbGljayA9IEludGVyZmFjZUNsaWNrO1xuXG4gIHN0YXRpYyBBbmltYXRpb24gPSBJbnRlcmZhY2VBbmltYXRpb247XG5cbiAgc3RhdGljIFRyYW5zaXRpb24gPSBJbnRlcmZhY2VUcmFuc2l0aW9uO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogX3ByZWZpeFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gQ2hhbm5lbCBOYW1lIHByZWZpeFxuICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgKi9cbiAgX3ByZWZpeCA9ICdpbnRlcmZhY2UnO1xuXG4gIC8qKlxuICAgKiBQcm9wZXJ0eTogX3NlcFxuICAgKlxuICAgKiBAZGVzY3JpcHRpb24gU2VwYXJhdG9yIGJldHdlZW4gcHJlZml4IGFuZCBjaGFubmVsIE5hbWVcbiAgICogQHR5cGUge1N0cmluZ31cbiAgICovXG4gIF9zZXAgPSAnOic7XG5cblxuICBjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IsIHByZWZpeCl7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgdGhpcy5fcHJlZml4ID0gcHJlZml4IHx8IHRoaXMuX3ByZWZpeDtcbiAgICBpZiAoIWlzRGVmYXVsdENoYW5uZWwpIHtcbiAgICAgIGluaXRpYWxpemVEZWZhdWx0RXZlbnRzKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQcm90b3R5cGUoKTogcHJlZml4XG4gICAqXG4gICAqIEBkZXNjcmlwdGlvbiBFdmVudE5hbWUgdG8gcHJlZml4IHdpdGggdGhlIGNoYW5uZWwgTmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IFtuYW1lXVxuICAgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICBNb2RpZmllZCBFdmVudCBOYW1lXG4gICAqL1xuICBwcmVmaXgobmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9wcmVmaXgrdGhpcy5fc2VwK25hbWU7XG4gIH1cblxuICAvKipcbiAgICogUHJvdG90eXBlKCk6IGNyZWF0ZUNoYW5uZWxcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIENyZWF0ZSBhIG5ldyBjaGFubmVsIHByZWZpeGluZyB0aGUgY2hhbm5lbCBuYW1lIHdpdGggdGhpcyBjaGFubmVsTmFtZVxuICAgKiBAcGFyYW0gIHtTdHJpbmd9IGNoYW5uZWxOYW1lXG4gICAqIEByZXR1cm4ge0luc3RhbmNlfSAgICAgICAgICAgTmV3IENoYW5uZWwgSW5zdGFuY2VcbiAgICovXG4gIGNyZWF0ZUNoYW5uZWwoY2hhbm5lbE5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEludGVyZmFjZUNoYW5uZWwodGhpcywgY2hhbm5lbE5hbWUpO1xuICB9XG5cbiAgLy8gUHVibGlzaCB0byB0aGUgZXZlbnQgYWdncmVnYXRvclxuICBwdWJsaXNoKG5hbWUsIHBheWxvYWQpIHtcbiAgICBpZiAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKSBuYW1lID0gdGhpcy5wcmVmaXgobmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2gobmFtZSwgcGF5bG9hZCk7XG4gIH1cblxuICAvLyBTdWJzY3JpYmUgdG8gdGhlIGV2ZW50IGFnZ3JlZ2F0b3JcbiAgc3Vic2NyaWJlKG5hbWUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSAnc3RyaW5nJykgbmFtZSA9IHRoaXMucHJlZml4KG5hbWUpO1xuICAgIHJldHVybiB0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUobmFtZSwgY2FsbGJhY2spO1xuICB9XG5cbiAgc3Vic2NyaWJlT25jZShuYW1lLCBjYWxsYmFjaywgY29udGV4dCkge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIG5hbWUgPSB0aGlzLnByZWZpeChuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5ldmVudEFnZ3JlZ2F0b3Iuc3Vic2NyaWJlT25jZShuYW1lLCBjYWxsYmFjayk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
