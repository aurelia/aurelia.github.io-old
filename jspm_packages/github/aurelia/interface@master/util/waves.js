/* */ 
define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var $$ = document.querySelectorAll.bind(document);

    function isWindow(obj) {
        return obj !== null && obj === obj.window;
    }

    function getWindow(elem) {
        return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }

    function offset(elem) {
        var docElem,
            win,
            box = { top: 0, left: 0 },
            doc = elem && elem.ownerDocument;

        docElem = doc.documentElement;

        if (typeof elem.getBoundingClientRect !== typeof undefined) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow(doc);
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    }

    function convertStyle(obj) {
        var style = '';

        for (var a in obj) {
            if (obj.hasOwnProperty(a)) {
                style += a + ':' + obj[a] + ';';
            }
        }

        return style;
    }

    var WaveEffect = (function () {
        function WaveEffect() {
            _classCallCheck(this, WaveEffect);

            this.duration = 750;
        }

        _createClass(WaveEffect, [{
            key: 'show',
            value: function show(e, element) {
                if (e.button === 2) {
                    return false;
                }

                var el = element || this;

                var ripple = document.createElement('div');
                ripple.className = 'waves-ripple';
                el.appendChild(ripple);

                var pos = offset(el);
                var relativeY = e.pageY - pos.top;
                var relativeX = e.pageX - pos.left;
                var scale = 'scale(' + el.clientWidth / 100 * 10 + ')';

                if ('touches' in e) {
                    relativeY = e.touches[0].pageY - pos.top;
                    relativeX = e.touches[0].pageX - pos.left;
                }

                ripple.setAttribute('data-hold', Date.now());
                ripple.setAttribute('data-scale', scale);
                ripple.setAttribute('data-x', relativeX);
                ripple.setAttribute('data-y', relativeY);

                var rippleStyle = {
                    'top': relativeY + 'px',
                    'left': relativeX + 'px'
                };

                ripple.className = ripple.className + ' waves-notransition';
                ripple.setAttribute('style', convertStyle(rippleStyle));
                ripple.className = ripple.className.replace('waves-notransition', '');

                rippleStyle['-webkit-transform'] = scale;
                rippleStyle['-moz-transform'] = scale;
                rippleStyle['-ms-transform'] = scale;
                rippleStyle['-o-transform'] = scale;
                rippleStyle.transform = scale;
                rippleStyle.opacity = '1';

                rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
                rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
                rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
                rippleStyle['transition-duration'] = Effect.duration + 'ms';

                rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
                rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
                rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
                rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';

                ripple.setAttribute('style', convertStyle(rippleStyle));
            }
        }, {
            key: 'hide',
            value: function hide(e) {
                TouchHandler.touchup(e);

                var el = this;
                var width = el.clientWidth * 1.4;

                var ripple = null;
                var ripples = el.getElementsByClassName('waves-ripple');
                if (ripples.length > 0) {
                    ripple = ripples[ripples.length - 1];
                } else {
                    return false;
                }

                var relativeX = ripple.getAttribute('data-x');
                var relativeY = ripple.getAttribute('data-y');
                var scale = ripple.getAttribute('data-scale');

                var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
                var delay = 350 - diff;

                if (delay < 0) {
                    delay = 0;
                }

                setTimeout(function () {
                    var style = {
                        'top': relativeY + 'px',
                        'left': relativeX + 'px',
                        'opacity': '0',

                        '-webkit-transition-duration': Effect.duration + 'ms',
                        '-moz-transition-duration': Effect.duration + 'ms',
                        '-o-transition-duration': Effect.duration + 'ms',
                        'transition-duration': Effect.duration + 'ms',
                        '-webkit-transform': scale,
                        '-moz-transform': scale,
                        '-ms-transform': scale,
                        '-o-transform': scale,
                        'transform': scale
                    };

                    ripple.setAttribute('style', convertStyle(style));

                    setTimeout(function () {
                        try {
                            el.removeChild(ripple);
                        } catch (e) {
                            return false;
                        }
                    }, Effect.duration);
                }, delay);
            }
        }, {
            key: 'wrapInput',
            value: function wrapInput(elements) {
                for (var a = 0; a < elements.length; a++) {
                    var el = elements[a];

                    if (el.tagName.toLowerCase() === 'input') {
                        var parent = el.parentNode;

                        if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
                            continue;
                        }

                        var wrapper = document.createElement('i');
                        wrapper.className = el.className + ' waves-input-wrapper';

                        var elementStyle = el.getAttribute('style');

                        if (!elementStyle) {
                            elementStyle = '';
                        }

                        wrapper.setAttribute('style', elementStyle);

                        el.className = 'waves-button-input';
                        el.removeAttribute('style');

                        parent.replaceChild(wrapper, el);
                        wrapper.appendChild(el);
                    }
                }
            }
        }]);

        return WaveEffect;
    })();

    var WavesTouchHandler = (function () {
        function WavesTouchHandler() {
            _classCallCheck(this, WavesTouchHandler);

            this.touches = 0;
        }

        _createClass(WavesTouchHandler, [{
            key: 'allowEvent',
            value: function allowEvent(e) {
                var allow = true;

                if (e.type === 'touchstart') {
                    TouchHandler.touches += 1;
                } else if (e.type === 'touchend' || e.type === 'touchcancel') {
                        setTimeout(function () {
                            if (TouchHandler.touches > 0) {
                                TouchHandler.touches -= 1;
                            }
                        }, 500);
                    } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
                        allow = false;
                    }

                return allow;
            }
        }, {
            key: 'touchup',
            value: function touchup(e) {
                TouchHandler.allowEvent(e);
            }
        }]);

        return WavesTouchHandler;
    })();

    function getWavesEffectElement(e) {
        if (TouchHandler.allowEvent(e) === false) {
            return null;
        }

        var element = null;
        var target = e.target || e.srcElement;

        while (target.parentElement !== null) {
            if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
                element = target;
                break;
            } else if (target.classList.contains('waves-effect')) {
                element = target;
                break;
            }
            target = target.parentElement;
        }

        return element;
    }

    function showEffect(e) {
        var element = getWavesEffectElement(e);

        if (element !== null) {
            Effect.show(e, element);

            if ('ontouchstart' in window) {
                element.addEventListener('touchend', Effect.hide, false);
                element.addEventListener('touchcancel', Effect.hide, false);
            }

            element.addEventListener('mouseup', Effect.hide, false);
            element.addEventListener('mouseleave', Effect.hide, false);
        }
    }

    var WavesComponent = (function () {
        function WavesComponent() {
            _classCallCheck(this, WavesComponent);
        }

        _createClass(WavesComponent, [{
            key: 'displayEffect',
            value: function displayEffect(options) {
                options = options || {};
                if ('duration' in options) {
                    Effect.duration = options.duration;
                }

                Effect.wrapInput($$('.waves-effect'));

                if ('ontouchstart' in window) {
                    document.body.addEventListener('touchstart', showEffect, false);
                }

                document.body.addEventListener('mousedown', showEffect, false);
            }
        }, {
            key: 'attach',
            value: function attach(element) {
                if (element.tagName.toLowerCase() === 'input') {
                    Effect.wrapInput([element]);
                    element = element.parentElement;
                }

                if ('ontouchstart' in window) {
                    element.addEventListener('touchstart', showEffect, false);
                }

                element.addEventListener('mousedown', showEffect, false);
            }
        }]);

        return WavesComponent;
    })();

    var Waves = Waves || new WavesComponent();
    var TouchHandler = TouchHandler || new WavesTouchHandler();
    var Effect = Effect || new WaveEffect();

    exports.Waves = Waves;
    exports.TouchHandler = TouchHandler;
    exports.Effect = Effect;

    window.Waves = Waves;

    document.addEventListener('DOMContentLoaded', function () {
        Waves.displayEffect();
    }, false);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvd2F2ZXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxRQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDOztBQUdsRCxhQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUU7QUFDbkIsZUFBTyxHQUFHLEtBQUssSUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDO0tBQzdDOztBQUVELGFBQVMsU0FBUyxDQUFDLElBQUksRUFBRTtBQUNyQixlQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQztLQUMxRTs7QUFFRCxhQUFTLE1BQU0sQ0FBQyxJQUFJLEVBQUU7QUFDbEIsWUFBSSxPQUFPO1lBQUUsR0FBRztZQUNaLEdBQUcsR0FBRyxFQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBQztZQUN2QixHQUFHLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUM7O0FBRXJDLGVBQU8sR0FBRyxHQUFHLENBQUMsZUFBZSxDQUFDOztBQUU5QixZQUFJLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixLQUFLLE9BQU8sU0FBUyxFQUFFO0FBQ3hELGVBQUcsR0FBRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztTQUN0QztBQUNELFdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDckIsZUFBTztBQUNILGVBQUcsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVM7QUFDbEQsZ0JBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFVBQVU7U0FDeEQsQ0FBQztLQUNMOztBQUVELGFBQVMsWUFBWSxDQUFDLEdBQUcsRUFBRTtBQUN2QixZQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7O0FBRWYsYUFBSyxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUU7QUFDZixnQkFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLHFCQUFLLElBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxBQUFDLENBQUM7YUFDckM7U0FDSjs7QUFFRCxlQUFPLEtBQUssQ0FBQztLQUNoQjs7UUFHTSxVQUFVO2lCQUFWLFVBQVU7a0NBQVYsVUFBVTs7aUJBR2IsUUFBUSxHQUFHLEdBQUc7OztxQkFIWCxVQUFVOzttQkFLVCxjQUFDLENBQUMsRUFBRSxPQUFPLEVBQUU7QUFHYixvQkFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtBQUNoQiwyQkFBTyxLQUFLLENBQUM7aUJBQ2hCOztBQUVELG9CQUFJLEVBQUUsR0FBRyxPQUFPLElBQUksSUFBSSxDQUFDOztBQUd6QixvQkFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMzQyxzQkFBTSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUM7QUFDbEMsa0JBQUUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBR3ZCLG9CQUFJLEdBQUcsR0FBVyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDN0Isb0JBQUksU0FBUyxHQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQUFBQyxDQUFDO0FBQ3RDLG9CQUFJLFNBQVMsR0FBTSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEFBQUMsQ0FBQztBQUN2QyxvQkFBSSxLQUFLLEdBQVMsUUFBUSxHQUFFLEFBQUMsRUFBRSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUksRUFBRSxBQUFDLEdBQUMsR0FBRyxDQUFDOztBQUc3RCxvQkFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO0FBQ2xCLDZCQUFTLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQUFBQyxDQUFDO0FBQzdDLDZCQUFTLEdBQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQUFBQyxDQUFDO2lCQUMvQzs7QUFHRCxzQkFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7QUFDN0Msc0JBQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3pDLHNCQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUN6QyxzQkFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBR3pDLG9CQUFJLFdBQVcsR0FBRztBQUNkLHlCQUFLLEVBQUUsU0FBUyxHQUFDLElBQUk7QUFDckIsMEJBQU0sRUFBRSxTQUFTLEdBQUMsSUFBSTtpQkFDekIsQ0FBQzs7QUFFRixzQkFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLHFCQUFxQixDQUFDO0FBQzVELHNCQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUN4RCxzQkFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQzs7QUFHdEUsMkJBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6QywyQkFBVyxDQUFDLGdCQUFnQixDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3RDLDJCQUFXLENBQUMsZUFBZSxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3JDLDJCQUFXLENBQUMsY0FBYyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3BDLDJCQUFXLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztBQUM5QiwyQkFBVyxDQUFDLE9BQU8sR0FBSyxHQUFHLENBQUM7O0FBRTVCLDJCQUFXLENBQUMsNkJBQTZCLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztBQUNwRSwyQkFBVyxDQUFDLDBCQUEwQixDQUFDLEdBQU0sTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7QUFDcEUsMkJBQVcsQ0FBQyx3QkFBd0IsQ0FBQyxHQUFRLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0FBQ3BFLDJCQUFXLENBQUMscUJBQXFCLENBQUMsR0FBVyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzs7QUFFcEUsMkJBQVcsQ0FBQyxvQ0FBb0MsQ0FBQyxHQUFHLDBDQUEwQyxDQUFDO0FBQy9GLDJCQUFXLENBQUMsaUNBQWlDLENBQUMsR0FBTSwwQ0FBMEMsQ0FBQztBQUMvRiwyQkFBVyxDQUFDLCtCQUErQixDQUFDLEdBQVEsMENBQTBDLENBQUM7QUFDL0YsMkJBQVcsQ0FBQyw0QkFBNEIsQ0FBQyxHQUFXLDBDQUEwQyxDQUFDOztBQUUvRixzQkFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDM0Q7OzttQkFFRyxjQUFDLENBQUMsRUFBRTtBQUNKLDRCQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUV4QixvQkFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2Qsb0JBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDOztBQUdqQyxvQkFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLG9CQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDeEQsb0JBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7QUFDcEIsMEJBQU0sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDeEMsTUFBTTtBQUNILDJCQUFPLEtBQUssQ0FBQztpQkFDaEI7O0FBRUQsb0JBQUksU0FBUyxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsb0JBQUksU0FBUyxHQUFLLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEQsb0JBQUksS0FBSyxHQUFTLE1BQU0sQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBR3BELG9CQUFJLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztBQUNqRSxvQkFBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQzs7QUFFdkIsb0JBQUksS0FBSyxHQUFHLENBQUMsRUFBRTtBQUNYLHlCQUFLLEdBQUcsQ0FBQyxDQUFDO2lCQUNiOztBQUdELDBCQUFVLENBQUMsWUFBVztBQUNsQix3QkFBSSxLQUFLLEdBQUc7QUFDUiw2QkFBSyxFQUFFLFNBQVMsR0FBQyxJQUFJO0FBQ3JCLDhCQUFNLEVBQUUsU0FBUyxHQUFDLElBQUk7QUFDdEIsaUNBQVMsRUFBRSxHQUFHOztBQUdkLHFEQUE2QixFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSTtBQUNyRCxrREFBMEIsRUFBRSxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUk7QUFDbEQsZ0RBQXdCLEVBQUUsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJO0FBQ2hELDZDQUFxQixFQUFFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSTtBQUM3QywyQ0FBbUIsRUFBRSxLQUFLO0FBQzFCLHdDQUFnQixFQUFFLEtBQUs7QUFDdkIsdUNBQWUsRUFBRSxLQUFLO0FBQ3RCLHNDQUFjLEVBQUUsS0FBSztBQUNyQixtQ0FBVyxFQUFFLEtBQUs7cUJBQ3JCLENBQUM7O0FBRUYsMEJBQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxFQUFFLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztBQUVsRCw4QkFBVSxDQUFDLFlBQVc7QUFDbEIsNEJBQUk7QUFDQSw4QkFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt5QkFDMUIsQ0FBQyxPQUFNLENBQUMsRUFBRTtBQUNQLG1DQUFPLEtBQUssQ0FBQzt5QkFDaEI7cUJBQ0osRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3ZCLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDYjs7O21CQUdRLG1CQUFDLFFBQVEsRUFBRTtBQUNoQixxQkFBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDdEMsd0JBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFckIsd0JBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsS0FBSyxPQUFPLEVBQUU7QUFDdEMsNEJBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUM7O0FBRzNCLDRCQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO0FBQ3pGLHFDQUFTO3lCQUNaOztBQUdELDRCQUFJLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLCtCQUFPLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxTQUFTLEdBQUcsc0JBQXNCLENBQUM7O0FBRTFELDRCQUFJLFlBQVksR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU1Qyw0QkFBSSxDQUFDLFlBQVksRUFBRTtBQUNmLHdDQUFZLEdBQUcsRUFBRSxDQUFDO3lCQUNyQjs7QUFFRCwrQkFBTyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDLENBQUM7O0FBRTVDLDBCQUFFLENBQUMsU0FBUyxHQUFHLG9CQUFvQixDQUFDO0FBQ3BDLDBCQUFFLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUc1Qiw4QkFBTSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDakMsK0JBQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQzNCO2lCQUNKO2FBQ0o7OztlQS9KRSxVQUFVOzs7UUFzS1gsaUJBQWlCO2lCQUFqQixpQkFBaUI7a0NBQWpCLGlCQUFpQjs7aUJBS25CLE9BQU8sR0FBRyxDQUFDOzs7cUJBTFQsaUJBQWlCOzttQkFNVCxvQkFBQyxDQUFDLEVBQUU7QUFDVixvQkFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDOztBQUVqQixvQkFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksRUFBRTtBQUN6QixnQ0FBWSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7aUJBQzdCLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFVBQVUsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLGFBQWEsRUFBRTtBQUMxRCxrQ0FBVSxDQUFDLFlBQVc7QUFDbEIsZ0NBQUksWUFBWSxDQUFDLE9BQU8sR0FBRyxDQUFDLEVBQUU7QUFDMUIsNENBQVksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDOzZCQUM3Qjt5QkFDSixFQUFFLEdBQUcsQ0FBQyxDQUFDO3FCQUNYLE1BQU0sSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxZQUFZLENBQUMsT0FBTyxHQUFHLENBQUMsRUFBRTtBQUMzRCw2QkFBSyxHQUFHLEtBQUssQ0FBQztxQkFDakI7O0FBRUQsdUJBQU8sS0FBSyxDQUFDO2FBQ2hCOzs7bUJBQ00saUJBQUMsQ0FBQyxFQUFFO0FBQ1AsNEJBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDOUI7OztlQXpCQyxpQkFBaUI7OztBQWlDdkIsYUFBUyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUU7QUFDOUIsWUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxLQUFLLEtBQUssRUFBRTtBQUN0QyxtQkFBTyxJQUFJLENBQUM7U0FDZjs7QUFFRCxZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsWUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDOztBQUV0QyxlQUFPLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxFQUFFO0FBQ2xDLGdCQUFJLEVBQUUsTUFBTSxZQUFZLFVBQVUsQ0FBQSxBQUFDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7QUFDcEYsdUJBQU8sR0FBRyxNQUFNLENBQUM7QUFDakIsc0JBQU07YUFDVCxNQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUU7QUFDbEQsdUJBQU8sR0FBRyxNQUFNLENBQUM7QUFDakIsc0JBQU07YUFDVDtBQUNELGtCQUFNLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQztTQUNqQzs7QUFFRCxlQUFPLE9BQU8sQ0FBQztLQUNsQjs7QUFLRCxhQUFTLFVBQVUsQ0FBQyxDQUFDLEVBQUU7QUFDbkIsWUFBSSxPQUFPLEdBQUcscUJBQXFCLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRXZDLFlBQUksT0FBTyxLQUFLLElBQUksRUFBRTtBQUNsQixrQkFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7O0FBRXhCLGdCQUFJLGNBQWMsSUFBSSxNQUFNLEVBQUU7QUFDMUIsdUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztBQUN6RCx1QkFBTyxDQUFDLGdCQUFnQixDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQy9EOztBQUVELG1CQUFPLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDeEQsbUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM5RDtLQUNKOztRQUVLLGNBQWM7aUJBQWQsY0FBYztrQ0FBZCxjQUFjOzs7cUJBQWQsY0FBYzs7bUJBRUwsdUJBQUMsT0FBTyxFQUFFO0FBQ3JCLHVCQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztBQUN4QixvQkFBSSxVQUFVLElBQUksT0FBTyxFQUFFO0FBQ3ZCLDBCQUFNLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUM7aUJBQ3RDOztBQUdELHNCQUFNLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDOztBQUV0QyxvQkFBSSxjQUFjLElBQUksTUFBTSxFQUFFO0FBQzFCLDRCQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ25FOztBQUVELHdCQUFRLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDaEU7OzttQkFPSyxnQkFBQyxPQUFPLEVBQUU7QUFHZCxvQkFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLE9BQU8sRUFBRTtBQUMzQywwQkFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDNUIsMkJBQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO2lCQUNuQzs7QUFFRCxvQkFBSSxjQUFjLElBQUksTUFBTSxFQUFFO0FBQzFCLDJCQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDN0Q7O0FBRUQsdUJBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzFEOzs7ZUFwQ0csY0FBYzs7O0FBdUNwQixRQUFJLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxjQUFjLEVBQUUsQ0FBQztBQUMxQyxRQUFJLFlBQVksR0FBRyxZQUFZLElBQUksSUFBSSxpQkFBaUIsRUFBRSxDQUFDO0FBQzNELFFBQUksTUFBTSxHQUFHLE1BQU0sSUFBSSxJQUFJLFVBQVUsRUFBRSxDQUFDOztZQUVoQyxLQUFLLEdBQUwsS0FBSztZQUFFLFlBQVksR0FBWixZQUFZO1lBQUUsTUFBTSxHQUFOLE1BQU07O0FBQ25DLFVBQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztBQUVyQixZQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztBQUNyRCxhQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDekIsRUFBRSxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJ1dGlsL3dhdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICQkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbC5iaW5kKGRvY3VtZW50KTtcblxuLy8gRmluZCBleGFjdCBwb3NpdGlvbiBvZiBlbGVtZW50XG5mdW5jdGlvbiBpc1dpbmRvdyhvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93KGVsZW0pIHtcbiAgICByZXR1cm4gaXNXaW5kb3coZWxlbSkgPyBlbGVtIDogZWxlbS5ub2RlVHlwZSA9PT0gOSAmJiBlbGVtLmRlZmF1bHRWaWV3O1xufVxuXG5mdW5jdGlvbiBvZmZzZXQoZWxlbSkge1xuICAgIHZhciBkb2NFbGVtLCB3aW4sXG4gICAgICAgIGJveCA9IHt0b3A6IDAsIGxlZnQ6IDB9LFxuICAgICAgICBkb2MgPSBlbGVtICYmIGVsZW0ub3duZXJEb2N1bWVudDtcblxuICAgIGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgaWYgKHR5cGVvZiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCAhPT0gdHlwZW9mIHVuZGVmaW5lZCkge1xuICAgICAgICBib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIH1cbiAgICB3aW4gPSBnZXRXaW5kb3coZG9jKTtcbiAgICByZXR1cm4ge1xuICAgICAgICB0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcbiAgICAgICAgbGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0U3R5bGUob2JqKSB7XG4gICAgdmFyIHN0eWxlID0gJyc7XG5cbiAgICBmb3IgKHZhciBhIGluIG9iaikge1xuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGEpKSB7XG4gICAgICAgICAgICBzdHlsZSArPSAoYSArICc6JyArIG9ialthXSArICc7Jyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG59XG5cblxuY2xhc3MgIFdhdmVFZmZlY3Qge1xuXG4gICAgLy8gRWZmZWN0IGRlbGF5XG4gICAgZHVyYXRpb24gPSA3NTA7XG5cbiAgICBzaG93KGUsIGVsZW1lbnQpIHtcblxuICAgICAgICAvLyBEaXNhYmxlIHJpZ2h0IGNsaWNrXG4gICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVsID0gZWxlbWVudCB8fCB0aGlzO1xuXG4gICAgICAgIC8vIENyZWF0ZSByaXBwbGVcbiAgICAgICAgdmFyIHJpcHBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICByaXBwbGUuY2xhc3NOYW1lID0gJ3dhdmVzLXJpcHBsZSc7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHJpcHBsZSk7XG5cbiAgICAgICAgLy8gR2V0IGNsaWNrIGNvb3JkaW5hdGUgYW5kIGVsZW1lbnQgd2l0ZGhcbiAgICAgICAgdmFyIHBvcyAgICAgICAgID0gb2Zmc2V0KGVsKTtcbiAgICAgICAgdmFyIHJlbGF0aXZlWSAgID0gKGUucGFnZVkgLSBwb3MudG9wKTtcbiAgICAgICAgdmFyIHJlbGF0aXZlWCAgID0gKGUucGFnZVggLSBwb3MubGVmdCk7XG4gICAgICAgIHZhciBzY2FsZSAgICAgICA9ICdzY2FsZSgnKygoZWwuY2xpZW50V2lkdGggLyAxMDApICogMTApKycpJztcblxuICAgICAgICAvLyBTdXBwb3J0IGZvciB0b3VjaCBkZXZpY2VzXG4gICAgICAgIGlmICgndG91Y2hlcycgaW4gZSkge1xuICAgICAgICAgIHJlbGF0aXZlWSAgID0gKGUudG91Y2hlc1swXS5wYWdlWSAtIHBvcy50b3ApO1xuICAgICAgICAgIHJlbGF0aXZlWCAgID0gKGUudG91Y2hlc1swXS5wYWdlWCAtIHBvcy5sZWZ0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEF0dGFjaCBkYXRhIHRvIGVsZW1lbnRcbiAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnZGF0YS1ob2xkJywgRGF0ZS5ub3coKSk7XG4gICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc2NhbGUnLCBzY2FsZSk7XG4gICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteCcsIHJlbGF0aXZlWCk7XG4gICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEteScsIHJlbGF0aXZlWSk7XG5cbiAgICAgICAgLy8gU2V0IHJpcHBsZSBwb3NpdGlvblxuICAgICAgICB2YXIgcmlwcGxlU3R5bGUgPSB7XG4gICAgICAgICAgICAndG9wJzogcmVsYXRpdmVZKydweCcsXG4gICAgICAgICAgICAnbGVmdCc6IHJlbGF0aXZlWCsncHgnXG4gICAgICAgIH07XG5cbiAgICAgICAgcmlwcGxlLmNsYXNzTmFtZSA9IHJpcHBsZS5jbGFzc05hbWUgKyAnIHdhdmVzLW5vdHJhbnNpdGlvbic7XG4gICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XG4gICAgICAgIHJpcHBsZS5jbGFzc05hbWUgPSByaXBwbGUuY2xhc3NOYW1lLnJlcGxhY2UoJ3dhdmVzLW5vdHJhbnNpdGlvbicsICcnKTtcblxuICAgICAgICAvLyBTY2FsZSB0aGUgcmlwcGxlXG4gICAgICAgIHJpcHBsZVN0eWxlWyctd2Via2l0LXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgIHJpcHBsZVN0eWxlWyctbW96LXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgIHJpcHBsZVN0eWxlWyctbXMtdHJhbnNmb3JtJ10gPSBzY2FsZTtcbiAgICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zZm9ybSddID0gc2NhbGU7XG4gICAgICAgIHJpcHBsZVN0eWxlLnRyYW5zZm9ybSA9IHNjYWxlO1xuICAgICAgICByaXBwbGVTdHlsZS5vcGFjaXR5ICAgPSAnMSc7XG5cbiAgICAgICAgcmlwcGxlU3R5bGVbJy13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbiddID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgcmlwcGxlU3R5bGVbJy1tb3otdHJhbnNpdGlvbi1kdXJhdGlvbiddICAgID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgcmlwcGxlU3R5bGVbJy1vLXRyYW5zaXRpb24tZHVyYXRpb24nXSAgICAgID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgcmlwcGxlU3R5bGVbJ3RyYW5zaXRpb24tZHVyYXRpb24nXSAgICAgICAgID0gRWZmZWN0LmR1cmF0aW9uICsgJ21zJztcblxuICAgICAgICByaXBwbGVTdHlsZVsnLXdlYmtpdC10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgICByaXBwbGVTdHlsZVsnLW1vei10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbiddICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgICByaXBwbGVTdHlsZVsnLW8tdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuICAgICAgICByaXBwbGVTdHlsZVsndHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24nXSAgICAgICAgID0gJ2N1YmljLWJlemllcigwLjI1MCwgMC40NjAsIDAuNDUwLCAwLjk0MCknO1xuXG4gICAgICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgY29udmVydFN0eWxlKHJpcHBsZVN0eWxlKSk7XG4gICAgfVxuXG4gICAgaGlkZShlKSB7XG4gICAgICAgIFRvdWNoSGFuZGxlci50b3VjaHVwKGUpO1xuXG4gICAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICAgIHZhciB3aWR0aCA9IGVsLmNsaWVudFdpZHRoICogMS40O1xuXG4gICAgICAgIC8vIEdldCBmaXJzdCByaXBwbGVcbiAgICAgICAgdmFyIHJpcHBsZSA9IG51bGw7XG4gICAgICAgIHZhciByaXBwbGVzID0gZWwuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2F2ZXMtcmlwcGxlJyk7XG4gICAgICAgIGlmIChyaXBwbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJpcHBsZSA9IHJpcHBsZXNbcmlwcGxlcy5sZW5ndGggLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWxhdGl2ZVggICA9IHJpcHBsZS5nZXRBdHRyaWJ1dGUoJ2RhdGEteCcpO1xuICAgICAgICB2YXIgcmVsYXRpdmVZICAgPSByaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLXknKTtcbiAgICAgICAgdmFyIHNjYWxlICAgICAgID0gcmlwcGxlLmdldEF0dHJpYnV0ZSgnZGF0YS1zY2FsZScpO1xuXG4gICAgICAgIC8vIEdldCBkZWxheSBiZWV0d2VlbiBtb3VzZWRvd24gYW5kIG1vdXNlIGxlYXZlXG4gICAgICAgIHZhciBkaWZmID0gRGF0ZS5ub3coKSAtIE51bWJlcihyaXBwbGUuZ2V0QXR0cmlidXRlKCdkYXRhLWhvbGQnKSk7XG4gICAgICAgIHZhciBkZWxheSA9IDM1MCAtIGRpZmY7XG5cbiAgICAgICAgaWYgKGRlbGF5IDwgMCkge1xuICAgICAgICAgICAgZGVsYXkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmFkZSBvdXQgcmlwcGxlIGFmdGVyIGRlbGF5XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgJ3RvcCc6IHJlbGF0aXZlWSsncHgnLFxuICAgICAgICAgICAgICAgICdsZWZ0JzogcmVsYXRpdmVYKydweCcsXG4gICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMCcsXG5cbiAgICAgICAgICAgICAgICAvLyBEdXJhdGlvblxuICAgICAgICAgICAgICAgICctd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICctbW96LXRyYW5zaXRpb24tZHVyYXRpb24nOiBFZmZlY3QuZHVyYXRpb24gKyAnbXMnLFxuICAgICAgICAgICAgICAgICctby10cmFuc2l0aW9uLWR1cmF0aW9uJzogRWZmZWN0LmR1cmF0aW9uICsgJ21zJyxcbiAgICAgICAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IEVmZmVjdC5kdXJhdGlvbiArICdtcycsXG4gICAgICAgICAgICAgICAgJy13ZWJraXQtdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiBzY2FsZSxcbiAgICAgICAgICAgICAgICAnLW8tdHJhbnNmb3JtJzogc2NhbGUsXG4gICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6IHNjYWxlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmlwcGxlLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBjb252ZXJ0U3R5bGUoc3R5bGUpKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBlbC5yZW1vdmVDaGlsZChyaXBwbGUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgRWZmZWN0LmR1cmF0aW9uKTtcbiAgICAgICAgfSwgZGVsYXkpO1xuICAgIH1cblxuICAgIC8vIExpdHRsZSBoYWNrIHRvIG1ha2UgPGlucHV0PiBjYW4gcGVyZm9ybSB3YXZlcyBlZmZlY3RcbiAgICB3cmFwSW5wdXQoZWxlbWVudHMpIHtcbiAgICAgICAgZm9yICh2YXIgYSA9IDA7IGEgPCBlbGVtZW50cy5sZW5ndGg7IGErKykge1xuICAgICAgICAgICAgdmFyIGVsID0gZWxlbWVudHNbYV07XG5cbiAgICAgICAgICAgIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcblxuICAgICAgICAgICAgICAgIC8vIElmIGlucHV0IGFscmVhZHkgaGF2ZSBwYXJlbnQganVzdCBwYXNzIHRocm91Z2hcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2knICYmIHBhcmVudC5jbGFzc05hbWUuaW5kZXhPZignd2F2ZXMtZWZmZWN0JykgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFB1dCBlbGVtZW50IGNsYXNzIGFuZCBzdHlsZSB0byB0aGUgc3BlY2lmaWVkIHBhcmVudFxuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgIHdyYXBwZXIuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lICsgJyB3YXZlcy1pbnB1dC13cmFwcGVyJztcblxuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50U3R5bGUgPSBlbC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWVsZW1lbnRTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50U3R5bGUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCBlbGVtZW50U3R5bGUpO1xuXG4gICAgICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gJ3dhdmVzLWJ1dHRvbi1pbnB1dCc7XG4gICAgICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gUHV0IGVsZW1lbnQgYXMgY2hpbGRcbiAgICAgICAgICAgICAgICBwYXJlbnQucmVwbGFjZUNoaWxkKHdyYXBwZXIsIGVsKTtcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vKipcbiAqIERpc2FibGUgbW91c2Vkb3duIGV2ZW50IGZvciA1MDBtcyBkdXJpbmcgYW5kIGFmdGVyIHRvdWNoXG4gKi9cbmNsYXNzIFdhdmVzVG91Y2hIYW5kbGVyIHtcbiAgICAvKiB1c2VzIGFuIGludGVnZXIgcmF0aGVyIHRoYW4gYm9vbCBzbyB0aGVyZSdzIG5vIGlzc3VlcyB3aXRoXG4gICAgICogbmVlZGluZyB0byBjbGVhciB0aW1lb3V0cyBpZiBhbm90aGVyIHRvdWNoIGV2ZW50IG9jY3VycmVkXG4gICAgICogd2l0aGluIHRoZSA1MDBtcy4gQ2Fubm90IG1vdXNldXAgYmV0d2VlbiB0b3VjaHN0YXJ0IGFuZFxuICAgICAqIHRvdWNoZW5kLCBub3IgaW4gdGhlIDUwMG1zIGFmdGVyIHRvdWNoZW5kLiAqL1xuICAgIHRvdWNoZXMgPSAwO1xuICAgIGFsbG93RXZlbnQoZSkge1xuICAgICAgICB2YXIgYWxsb3cgPSB0cnVlO1xuXG4gICAgICAgIGlmIChlLnR5cGUgPT09ICd0b3VjaHN0YXJ0Jykge1xuICAgICAgICAgICAgVG91Y2hIYW5kbGVyLnRvdWNoZXMgKz0gMTsgLy9wdXNoXG4gICAgICAgIH0gZWxzZSBpZiAoZS50eXBlID09PSAndG91Y2hlbmQnIHx8IGUudHlwZSA9PT0gJ3RvdWNoY2FuY2VsJykge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoVG91Y2hIYW5kbGVyLnRvdWNoZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIFRvdWNoSGFuZGxlci50b3VjaGVzIC09IDE7IC8vcG9wIGFmdGVyIDUwMG1zXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnR5cGUgPT09ICdtb3VzZWRvd24nICYmIFRvdWNoSGFuZGxlci50b3VjaGVzID4gMCkge1xuICAgICAgICAgICAgYWxsb3cgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhbGxvdztcbiAgICB9XG4gICAgdG91Y2h1cChlKSB7XG4gICAgICAgIFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpO1xuICAgIH1cbn1cblxuXG4vKipcbiAqIERlbGVnYXRlZCBjbGljayBoYW5kbGVyIGZvciAud2F2ZXMtZWZmZWN0IGVsZW1lbnQuXG4gKiByZXR1cm5zIG51bGwgd2hlbiAud2F2ZXMtZWZmZWN0IGVsZW1lbnQgbm90IGluIFwiY2xpY2sgdHJlZVwiXG4gKi9cbmZ1bmN0aW9uIGdldFdhdmVzRWZmZWN0RWxlbWVudChlKSB7XG4gICAgaWYgKFRvdWNoSGFuZGxlci5hbGxvd0V2ZW50KGUpID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IG51bGw7XG4gICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudDtcblxuICAgIHdoaWxlICh0YXJnZXQucGFyZW50RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBTVkdFbGVtZW50KSAmJiB0YXJnZXQuY2xhc3NOYW1lLmluZGV4T2YoJ3dhdmVzLWVmZmVjdCcpICE9PSAtMSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IHRhcmdldDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3dhdmVzLWVmZmVjdCcpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gdGFyZ2V0O1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbi8qKlxuICogQnViYmxlIHRoZSBjbGljayBhbmQgc2hvdyBlZmZlY3QgaWYgLndhdmVzLWVmZmVjdCBlbGVtIHdhcyBmb3VuZFxuICovXG5mdW5jdGlvbiBzaG93RWZmZWN0KGUpIHtcbiAgICB2YXIgZWxlbWVudCA9IGdldFdhdmVzRWZmZWN0RWxlbWVudChlKTtcblxuICAgIGlmIChlbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgIEVmZmVjdC5zaG93KGUsIGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICgnb250b3VjaHN0YXJ0JyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIEVmZmVjdC5oaWRlLCBmYWxzZSk7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBFZmZlY3QuaGlkZSwgZmFsc2UpO1xuICAgIH1cbn1cblxuY2xhc3MgV2F2ZXNDb21wb25lbnQge1xuXG4gIGRpc3BsYXlFZmZlY3Qob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIGlmICgnZHVyYXRpb24nIGluIG9wdGlvbnMpIHtcbiAgICAgICAgRWZmZWN0LmR1cmF0aW9uID0gb3B0aW9ucy5kdXJhdGlvbjtcbiAgICB9XG5cbiAgICAvL1dyYXAgaW5wdXQgaW5zaWRlIDxpPiB0YWdcbiAgICBFZmZlY3Qud3JhcElucHV0KCQkKCcud2F2ZXMtZWZmZWN0JykpO1xuXG4gICAgaWYgKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzaG93RWZmZWN0LCBmYWxzZSk7XG4gIH1cbiAgLyoqXG4gICAqIEF0dGFjaCBXYXZlcyB0byBhbiBpbnB1dCBlbGVtZW50IChvciBhbnkgZWxlbWVudCB3aGljaCBkb2Vzbid0XG4gICAqIGJ1YmJsZSBtb3VzZXVwL21vdXNlZG93biBldmVudHMpLlxuICAgKiAgIEludGVuZGVkIHRvIGJlIHVzZWQgd2l0aCBkeW5hbWljYWxseSBsb2FkZWQgZm9ybXMvaW5wdXRzLCBvclxuICAgKiB3aGVyZSB0aGUgdXNlciBkb2Vzbid0IHdhbnQgYSBkZWxlZ2F0ZWQgY2xpY2sgaGFuZGxlci5cbiAgICovXG4gIGF0dGFjaChlbGVtZW50KSB7XG4gICAgLy9GVVRVUkU6IGF1dG9tYXRpY2FsbHkgYWRkIHdhdmVzIGNsYXNzZXMgYW5kIGFsbG93IHVzZXJzXG4gICAgLy8gdG8gc3BlY2lmeSB0aGVtIHdpdGggYW4gb3B0aW9ucyBwYXJhbT8gRWcuIGxpZ2h0L2NsYXNzaWMvYnV0dG9uXG4gICAgaWYgKGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW5wdXQnKSB7XG4gICAgICAgIEVmZmVjdC53cmFwSW5wdXQoW2VsZW1lbnRdKTtcbiAgICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG5cbiAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgICB9XG5cbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNob3dFZmZlY3QsIGZhbHNlKTtcbiAgfVxufVxuXG52YXIgV2F2ZXMgPSBXYXZlcyB8fCBuZXcgV2F2ZXNDb21wb25lbnQoKTtcbnZhciBUb3VjaEhhbmRsZXIgPSBUb3VjaEhhbmRsZXIgfHwgbmV3IFdhdmVzVG91Y2hIYW5kbGVyKCk7XG52YXIgRWZmZWN0ID0gRWZmZWN0IHx8IG5ldyBXYXZlRWZmZWN0KCk7XG5cbmV4cG9ydCB7V2F2ZXMsIFRvdWNoSGFuZGxlciwgRWZmZWN0fTtcbndpbmRvdy5XYXZlcyA9IFdhdmVzO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XG4gICAgV2F2ZXMuZGlzcGxheUVmZmVjdCgpO1xufSwgZmFsc2UpO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
