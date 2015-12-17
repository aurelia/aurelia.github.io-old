/* */ 
define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });
    var Ai = (function () {
        var Ai = function Ai(arr) {
            var _this = this,
                i = 0;

            for (i = 0; i < arr.length; i++) {
                _this[i] = arr[i];
            }
            _this.length = arr.length;

            return this;
        };
        var ai = function ai(selector, context) {
            var arr = [],
                i = 0;
            if (selector && !context) {
                if (selector instanceof Ai) {
                    return selector;
                }
            }
            if (selector) {
                if (typeof selector === 'string') {
                    var els,
                        tempParent,
                        html = selector.trim();
                    if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
                        var toCreate = 'div';
                        if (html.indexOf('<li') === 0) toCreate = 'ul';
                        if (html.indexOf('<tr') === 0) toCreate = 'tbody';
                        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
                        if (html.indexOf('<tbody') === 0) toCreate = 'table';
                        if (html.indexOf('<option') === 0) toCreate = 'select';
                        tempParent = document.createElement(toCreate);
                        tempParent.innerHTML = selector;
                        for (i = 0; i < tempParent.childNodes.length; i++) {
                            arr.push(tempParent.childNodes[i]);
                        }
                    } else {
                        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
                            els = [document.getElementById(selector.split('#')[1])];
                        } else {
                            els = (context || document).querySelectorAll(selector);
                        }
                        for (i = 0; i < els.length; i++) {
                            if (els[i]) arr.push(els[i]);
                        }
                    }
                } else if (selector.nodeType || selector === window || selector === document) {
                        arr.push(selector);
                    } else if (selector.length > 0 && selector[0].nodeType) {
                            for (i = 0; i < selector.length; i++) {
                                arr.push(selector[i]);
                            }
                        }
            }
            return new Ai(arr);
        };

        Ai.prototype = {
            auModel: function auModel() {
                return this[0].au && this[0].au.controller.model;
            },

            addClass: function addClass(className) {
                if (typeof className === 'undefined') {
                    return this;
                }
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof this[j].classList !== 'undefined') this[j].classList.add(classes[i]);
                    }
                }
                return this;
            },
            removeClass: function removeClass(className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof this[j].classList !== 'undefined') this[j].classList.remove(classes[i]);
                    }
                }
                return this;
            },
            hasClass: function hasClass(className) {
                if (!this[0]) return false;else return this[0].classList.contains(className);
            },
            toggleClass: function toggleClass(className) {
                var classes = className.split(' ');
                for (var i = 0; i < classes.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof this[j].classList !== 'undefined') this[j].classList.toggle(classes[i]);
                    }
                }
                return this;
            },
            attr: function attr(attrs, value) {
                if (arguments.length === 1 && typeof attrs === 'string') {
                    if (this[0]) return this[0].getAttribute(attrs);else return undefined;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        if (arguments.length === 2) {
                            this[i].setAttribute(attrs, value);
                        } else {
                            for (var attrName in attrs) {
                                this[i][attrName] = attrs[attrName];
                                this[i].setAttribute(attrName, attrs[attrName]);
                            }
                        }
                    }
                    return this;
                }
            },
            removeAttr: function removeAttr(attr) {
                for (var i = 0; i < this.length; i++) {
                    this[i].removeAttribute(attr);
                }
                return this;
            },
            prop: function prop(props, value) {
                if (arguments.length === 1 && typeof props === 'string') {
                    if (this[0]) return this[0][props];else return undefined;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        if (arguments.length === 2) {
                            this[i][props] = value;
                        } else {
                            for (var propName in props) {
                                this[i][propName] = props[propName];
                            }
                        }
                    }
                    return this;
                }
            },
            data: function data(key, value) {
                if (typeof value === 'undefined') {
                    if (this[0]) {
                        if (this[0].dom7ElementDataStorage && key in this[0].dom7ElementDataStorage) {
                            return this[0].dom7ElementDataStorage[key];
                        } else {
                            var dataKey = this[0].getAttribute('data-' + key);
                            if (dataKey) {
                                return dataKey;
                            } else return undefined;
                        }
                    } else return undefined;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        var el = this[i];
                        if (!el.dom7ElementDataStorage) el.dom7ElementDataStorage = {};
                        el.dom7ElementDataStorage[key] = value;
                    }
                    return this;
                }
            },
            removeData: function removeData(key) {
                for (var i = 0; i < this.length; i++) {
                    var el = this[i];
                    if (el.dom7ElementDataStorage && el.dom7ElementDataStorage[key]) {
                        el.dom7ElementDataStorage[key] = null;
                        delete el.dom7ElementDataStorage[key];
                    }
                }
            },
            dataset: function dataset() {
                var el = this[0];
                if (el) {
                    var dataset = {};
                    if (el.dataset) {
                        for (var dataKey in el.dataset) {
                            dataset[dataKey] = el.dataset[dataKey];
                        }
                    } else {
                        for (var i = 0; i < el.attributes.length; i++) {
                            var attr = el.attributes[i];
                            if (attr.name.indexOf('data-') >= 0) {
                                dataset[ai.toCamelCase(attr.name.split('data-')[1])] = attr.value;
                            }
                        }
                    }
                    for (var key in dataset) {
                        if (dataset[key] === 'false') dataset[key] = false;else if (dataset[key] === 'true') dataset[key] = true;else if (parseFloat(dataset[key]) === dataset[key] * 1) dataset[key] = dataset[key] * 1;
                    }
                    return dataset;
                } else return undefined;
            },
            val: function val(value) {
                if (typeof value === 'undefined') {
                    if (this[0]) return this[0].value;else return undefined;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].value = value;
                    }
                    return this;
                }
            },

            transform: function transform(_transform) {
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = _transform;
                }
                return this;
            },
            transition: function transition(duration) {
                if (typeof duration !== 'string') {
                    duration = duration + 'ms';
                }
                for (var i = 0; i < this.length; i++) {
                    var elStyle = this[i].style;
                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
                }
                return this;
            },

            on: function on(eventName, targetSelector, listener, capture) {
                function handleLiveEvent(e) {
                    var target = e.target;
                    if (ai(target).is(targetSelector)) listener.call(target, e);else {
                        var parents = ai(target).parents();
                        for (var k = 0; k < parents.length; k++) {
                            if (ai(parents[k]).is(targetSelector)) listener.call(parents[k], e);
                        }
                    }
                }
                var events = eventName.split(' ');
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof targetSelector === 'function' || targetSelector === false) {
                        if (typeof targetSelector === 'function') {
                            listener = arguments[1];
                            capture = arguments[2] || false;
                        }
                        for (j = 0; j < events.length; j++) {
                            this[i].addEventListener(events[j], listener, capture);
                        }
                    } else {
                        for (j = 0; j < events.length; j++) {
                            if (!this[i].dom7LiveListeners) this[i].dom7LiveListeners = [];
                            this[i].dom7LiveListeners.push({ listener: listener, liveListener: handleLiveEvent });
                            this[i].addEventListener(events[j], handleLiveEvent, capture);
                        }
                    }
                }

                return this;
            },
            off: function off(eventName, targetSelector, listener, capture) {
                var events = eventName.split(' ');
                for (var i = 0; i < events.length; i++) {
                    for (var j = 0; j < this.length; j++) {
                        if (typeof targetSelector === 'function' || targetSelector === false) {
                            if (typeof targetSelector === 'function') {
                                listener = arguments[1];
                                capture = arguments[2] || false;
                            }
                            this[j].removeEventListener(events[i], listener, capture);
                        } else {
                            if (this[j].dom7LiveListeners) {
                                for (var k = 0; k < this[j].dom7LiveListeners.length; k++) {
                                    if (this[j].dom7LiveListeners[k].listener === listener) {
                                        this[j].removeEventListener(events[i], this[j].dom7LiveListeners[k].liveListener, capture);
                                    }
                                }
                            }
                        }
                    }
                }
                return this;
            },
            once: function once(eventName, targetSelector, listener, capture) {
                var dom = this;
                if (typeof targetSelector === 'function') {
                    listener = arguments[1];
                    capture = arguments[2];
                    targetSelector = false;
                }
                function proxy(e) {
                    listener.call(e.target, e);
                    dom.off(eventName, targetSelector, proxy, capture);
                }
                return dom.on(eventName, targetSelector, proxy, capture);
            },
            trigger: function trigger(eventName, eventData) {
                for (var i = 0; i < this.length; i++) {
                    var evt;
                    try {
                        evt = new CustomEvent(eventName, { detail: eventData, bubbles: true, cancelable: true });
                    } catch (e) {
                        evt = document.createEvent('Event');
                        evt.initEvent(eventName, true, true);
                        evt.detail = eventData;
                    }
                    this[i].dispatchEvent(evt);
                }
                return this;
            },
            transitionEnd: function transitionEnd(callback) {
                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
                    i,
                    j,
                    dom = this;
                function fireCallBack(e) {
                    if (e.target !== this) return;
                    callback.call(this, e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            },
            animationEnd: function animationEnd(callback) {
                var events = ['webkitAnimationEnd', 'OAnimationEnd', 'MSAnimationEnd', 'animationend'],
                    i,
                    j,
                    dom = this;
                function fireCallBack(e) {
                    callback(e);
                    for (i = 0; i < events.length; i++) {
                        dom.off(events[i], fireCallBack);
                    }
                }
                if (callback) {
                    for (i = 0; i < events.length; i++) {
                        dom.on(events[i], fireCallBack);
                    }
                }
                return this;
            },

            width: function width() {
                if (this[0] === window) {
                    return window.innerWidth;
                } else {
                    if (this.length > 0) {
                        return parseFloat(this.css('width'));
                    } else {
                        return null;
                    }
                }
            },
            outerWidth: function outerWidth(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        var styles = this.styles();
                        return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
                    } else return this[0].offsetWidth;
                } else return null;
            },
            height: function height() {
                if (this[0] === window) {
                    return window.innerHeight;
                } else {
                    if (this.length > 0) {
                        return parseFloat(this.css('height'));
                    } else {
                        return null;
                    }
                }
            },
            outerHeight: function outerHeight(includeMargins) {
                if (this.length > 0) {
                    if (includeMargins) {
                        var styles = this.styles();
                        return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
                    } else return this[0].offsetHeight;
                } else return null;
            },
            offset: function offset() {
                if (this.length > 0) {
                    var el = this[0];
                    var box = el.getBoundingClientRect();
                    var body = document.body;
                    var clientTop = el.clientTop || body.clientTop || 0;
                    var clientLeft = el.clientLeft || body.clientLeft || 0;
                    var scrollTop = window.pageYOffset || el.scrollTop;
                    var scrollLeft = window.pageXOffset || el.scrollLeft;
                    return {
                        top: box.top + scrollTop - clientTop,
                        left: box.left + scrollLeft - clientLeft
                    };
                } else {
                    return null;
                }
            },
            hide: function hide() {
                for (var i = 0; i < this.length; i++) {
                    this[i].style.display = 'none';
                }
                return this;
            },
            show: function show() {
                for (var i = 0; i < this.length; i++) {
                    this[i].style.display = 'block';
                }
                return this;
            },
            styles: function styles() {
                var i, styles;
                if (this[0]) return window.getComputedStyle(this[0], null);else return undefined;
            },
            css: function css(props, value) {
                var i;
                if (arguments.length === 1) {
                    if (typeof props === 'string') {
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
                    } else {
                        for (i = 0; i < this.length; i++) {
                            for (var prop in props) {
                                this[i].style[prop] = props[prop];
                            }
                        }
                        return this;
                    }
                }
                if (arguments.length === 2 && typeof props === 'string') {
                    for (i = 0; i < this.length; i++) {
                        this[i].style[props] = value;
                    }
                    return this;
                }
                return this;
            },

            each: function each(callback) {
                for (var i = 0; i < this.length; i++) {
                    callback.call(this[i], i, this[i]);
                }
                return this;
            },
            filter: function filter(callback) {
                var matchedItems = [];
                var dom = this;
                for (var i = 0; i < dom.length; i++) {
                    if (callback.call(dom[i], i, dom[i])) matchedItems.push(dom[i]);
                }
                return new Ai(matchedItems);
            },
            html: function html(_html) {
                if (typeof _html === 'undefined') {
                    return this[0] ? this[0].innerHTML : undefined;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].innerHTML = _html;
                    }
                    return this;
                }
            },
            text: function text(_text) {
                if (typeof _text === 'undefined') {
                    if (this[0]) {
                        return this[0].textContent.trim();
                    } else return null;
                } else {
                    for (var i = 0; i < this.length; i++) {
                        this[i].textContent = _text;
                    }
                }
            },
            is: function is(selector) {
                if (!this[0] || typeof selector === 'undefined') return false;
                var compareWith, i;
                if (typeof selector === 'string') {
                    var el = this[0];
                    if (el === document) return selector === document;
                    if (el === window) return selector === window;

                    if (el.matches) return el.matches(selector);else if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);else if (el.mozMatchesSelector) return el.mozMatchesSelector(selector);else if (el.msMatchesSelector) return el.msMatchesSelector(selector);else {
                        compareWith = ai(selector);
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                } else if (selector === document) return this[0] === document;else if (selector === window) return this[0] === window;else {
                    if (selector.nodeType || selector instanceof Ai) {
                        compareWith = selector.nodeType ? [selector] : selector;
                        for (i = 0; i < compareWith.length; i++) {
                            if (compareWith[i] === this[0]) return true;
                        }
                        return false;
                    }
                    return false;
                }
            },
            indexOf: function indexOf(el) {
                for (var i = 0; i < this.length; i++) {
                    if (this[i] === el) return i;
                }
            },
            index: function index() {
                if (this[0]) {
                    var child = this[0];
                    var i = 0;
                    while ((child = child.previousSibling) !== null) {
                        if (child.nodeType === 1) i++;
                    }
                    return i;
                } else return undefined;
            },
            eq: function eq(index) {
                if (typeof index === 'undefined') return this;
                var length = this.length;
                var returnIndex;
                if (index > length - 1) {
                    return new Ai([]);
                }
                if (index < 0) {
                    returnIndex = length + index;
                    if (returnIndex < 0) return new Ai([]);else return new Ai([this[returnIndex]]);
                }
                return new Ai([this[index]]);
            },
            append: function append(newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        while (tempDiv.firstChild) {
                            this[i].appendChild(tempDiv.firstChild);
                        }
                    } else if (newChild instanceof Ai) {
                        for (j = 0; j < newChild.length; j++) {
                            this[i].appendChild(newChild[j]);
                        }
                    } else {
                        this[i].appendChild(newChild);
                    }
                }
                return this;
            },
            appendTo: function appendTo(parent) {
                ai(parent).append(this);
                return this;
            },
            prepend: function prepend(newChild) {
                var i, j;
                for (i = 0; i < this.length; i++) {
                    if (typeof newChild === 'string') {
                        var tempDiv = document.createElement('div');
                        tempDiv.innerHTML = newChild;
                        for (j = tempDiv.childNodes.length - 1; j >= 0; j--) {
                            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
                        }
                    } else if (newChild instanceof Ai) {
                            for (j = 0; j < newChild.length; j++) {
                                this[i].insertBefore(newChild[j], this[i].childNodes[0]);
                            }
                        } else {
                            this[i].insertBefore(newChild, this[i].childNodes[0]);
                        }
                }
                return this;
            },
            prependTo: function prependTo(parent) {
                ai(parent).prepend(this);
                return this;
            },
            insertBefore: function insertBefore(selector) {
                var before = ai(selector);
                for (var i = 0; i < this.length; i++) {
                    if (before.length === 1) {
                        before[0].parentNode.insertBefore(this[i], before[0]);
                    } else if (before.length > 1) {
                        for (var j = 0; j < before.length; j++) {
                            before[j].parentNode.insertBefore(this[i].cloneNode(true), before[j]);
                        }
                    }
                }
            },
            insertAfter: function insertAfter(selector) {
                var after = ai(selector);
                for (var i = 0; i < this.length; i++) {
                    if (after.length === 1) {
                        after[0].parentNode.insertBefore(this[i], after[0].nextSibling);
                    } else if (after.length > 1) {
                        for (var j = 0; j < after.length; j++) {
                            after[j].parentNode.insertBefore(this[i].cloneNode(true), after[j].nextSibling);
                        }
                    }
                }
            },
            next: function next(selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].nextElementSibling && ai(this[0].nextElementSibling).is(selector)) return new Ai([this[0].nextElementSibling]);else return new Ai([]);
                    } else {
                        if (this[0].nextElementSibling) return new Ai([this[0].nextElementSibling]);else return new Ai([]);
                    }
                } else return new Ai([]);
            },
            nextAll: function nextAll(selector) {
                var nextEls = [];
                var el = this[0];
                if (!el) return new Ai([]);
                while (el.nextElementSibling) {
                    var next = el.nextElementSibling;
                    if (selector) {
                        if (ai(next).is(selector)) nextEls.push(next);
                    } else nextEls.push(next);
                    el = next;
                }
                return new Ai(nextEls);
            },
            prev: function prev(selector) {
                if (this.length > 0) {
                    if (selector) {
                        if (this[0].previousElementSibling && ai(this[0].previousElementSibling).is(selector)) return new Ai([this[0].previousElementSibling]);else return new Ai([]);
                    } else {
                        if (this[0].previousElementSibling) return new Ai([this[0].previousElementSibling]);else return new Ai([]);
                    }
                } else return new Ai([]);
            },
            prevAll: function prevAll(selector) {
                var prevEls = [];
                var el = this[0];
                if (!el) return new Ai([]);
                while (el.previousElementSibling) {
                    var prev = el.previousElementSibling;
                    if (selector) {
                        if (ai(prev).is(selector)) prevEls.push(prev);
                    } else prevEls.push(prev);
                    el = prev;
                }
                return new Ai(prevEls);
            },
            parent: function parent(selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    if (selector) {
                        if (ai(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
                    } else {
                        parents.push(this[i].parentNode);
                    }
                }
                return ai(ai.unique(parents));
            },
            parents: function parents(selector) {
                var parents = [];
                for (var i = 0; i < this.length; i++) {
                    var parent = this[i].parentNode;
                    while (parent) {
                        if (selector) {
                            if (ai(parent).is(selector)) parents.push(parent);
                        } else {
                            parents.push(parent);
                        }
                        parent = parent.parentNode;
                    }
                }
                return ai(ai.unique(parents));
            },
            find: function find(selector) {
                var foundElements = [];
                for (var i = 0; i < this.length; i++) {
                    var found = this[i].querySelectorAll(selector);
                    for (var j = 0; j < found.length; j++) {
                        foundElements.push(found[j]);
                    }
                }
                return new Ai(foundElements);
            },
            children: function children(selector) {
                var children = [];
                for (var i = 0; i < this.length; i++) {
                    var childNodes = this[i].childNodes;

                    for (var j = 0; j < childNodes.length; j++) {
                        if (!selector) {
                            if (childNodes[j].nodeType === 1) children.push(childNodes[j]);
                        } else {
                            if (childNodes[j].nodeType === 1 && ai(childNodes[j]).is(selector)) children.push(childNodes[j]);
                        }
                    }
                }
                return new Ai(ai.unique(children));
            },
            remove: function remove() {
                for (var i = 0; i < this.length; i++) {
                    if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
                }
                return this;
            },
            detach: function detach() {
                return this.remove();
            },
            add: function add() {
                var dom = this;
                var i, j;
                for (i = 0; i < arguments.length; i++) {
                    var toAdd = ai(arguments[i]);
                    for (j = 0; j < toAdd.length; j++) {
                        dom[dom.length] = toAdd[j];
                        dom.length++;
                    }
                }
                return dom;
            }
        };

        (function () {
            var shortcuts = 'click blur focus focusin focusout keyup keydown keypress submit change mousedown mousemove mouseup mouseenter mouseleave mouseout mouseover touchstart touchend touchmove resize scroll'.split(' ');
            var notTrigger = 'resize scroll'.split(' ');
            function createMethod(name) {
                Ai.prototype[name] = function (targetSelector, listener, capture) {
                    var i;
                    if (typeof targetSelector === 'undefined') {
                        for (i = 0; i < this.length; i++) {
                            if (notTrigger.indexOf(name) < 0) {
                                if (name in this[i]) this[i][name]();else {
                                    ai(this[i]).trigger(name);
                                }
                            }
                        }
                        return this;
                    } else {
                        return this.on(name, targetSelector, listener, capture);
                    }
                };
            }
            for (var i = 0; i < shortcuts.length; i++) {
                createMethod(shortcuts[i]);
            }
        })();

        var globalAjaxOptions = {};
        ai.ajaxSetup = function (options) {
            if (options.type) options.method = options.type;
            ai.each(options, function (optionName, optionValue) {
                globalAjaxOptions[optionName] = optionValue;
            });
        };

        var _jsonpRequests = 0;
        ai.ajax = function (options) {
            var defaults = {
                method: 'GET',
                data: false,
                async: true,
                cache: true,
                user: '',
                password: '',
                headers: {},
                xhrFields: {},
                statusCode: {},
                processData: true,
                dataType: 'text',
                contentType: 'application/x-www-form-urlencoded',
                timeout: 0
            };
            var callbacks = ['beforeSend', 'error', 'complete', 'success', 'statusCode'];

            if (options.type) options.method = options.type;

            ai.each(globalAjaxOptions, function (globalOptionName, globalOptionValue) {
                if (callbacks.indexOf(globalOptionName) < 0) defaults[globalOptionName] = globalOptionValue;
            });

            function fireAjaxCallback(eventName, eventData, callbackName) {
                var a = arguments;
                if (eventName) ai(document).trigger(eventName, eventData);
                if (callbackName) {
                    if (callbackName in globalAjaxOptions) globalAjaxOptions[callbackName](a[3], a[4], a[5], a[6]);

                    if (options[callbackName]) options[callbackName](a[3], a[4], a[5], a[6]);
                }
            }

            ai.each(defaults, function (prop, defaultValue) {
                if (!(prop in options)) options[prop] = defaultValue;
            });

            if (!options.url) {
                options.url = window.location.toString();
            }

            var paramsPrefix = options.url.indexOf('?') >= 0 ? '&' : '?';

            var _method = options.method.toUpperCase();

            if ((_method === 'GET' || _method === 'HEAD') && options.data) {
                var stringData;
                if (typeof options.data === 'string') {
                    if (options.data.indexOf('?') >= 0) stringData = options.data.split('?')[1];else stringData = options.data;
                } else {
                    stringData = ai.serializeObject(options.data);
                }
                if (stringData.length) {
                    options.url += paramsPrefix + stringData;
                    if (paramsPrefix === '?') paramsPrefix = '&';
                }
            }

            if (options.dataType === 'json' && options.url.indexOf('callback=') >= 0) {

                var callbackName = 'f7jsonp_' + Date.now() + _jsonpRequests++;
                var abortTimeout;
                var callbackSplit = options.url.split('callback=');
                var requestUrl = callbackSplit[0] + 'callback=' + callbackName;
                if (callbackSplit[1].indexOf('&') >= 0) {
                    var addVars = callbackSplit[1].split('&').filter(function (el) {
                        return el.indexOf('=') > 0;
                    }).join('&');
                    if (addVars.length > 0) requestUrl += '&' + addVars;
                }

                var script = document.createElement('script');
                script.type = 'text/javascript';
                script.onerror = function () {
                    clearTimeout(abortTimeout);
                    fireAjaxCallback(undefined, undefined, 'error', null, 'scripterror');
                };
                script.src = requestUrl;

                window[callbackName] = function (data) {
                    clearTimeout(abortTimeout);
                    fireAjaxCallback(undefined, undefined, 'success', data);
                    script.parentNode.removeChild(script);
                    script = null;
                    delete window[callbackName];
                };
                document.querySelector('head').appendChild(script);

                if (options.timeout > 0) {
                    abortTimeout = setTimeout(function () {
                        script.parentNode.removeChild(script);
                        script = null;
                        fireAjaxCallback(undefined, undefined, 'error', null, 'timeout');
                    }, options.timeout);
                }

                return;
            }

            if (_method === 'GET' || _method === 'HEAD') {
                if (options.cache === false) {
                    options.url += paramsPrefix + '_nocache=' + Date.now();
                }
            }

            var xhr = new XMLHttpRequest();

            xhr.requestUrl = options.url;
            xhr.requestParameters = options;

            xhr.open(_method, options.url, options.async, options.user, options.password);

            var postData = null;

            if ((_method === 'POST' || _method === 'PUT') && options.data) {
                if (options.processData) {
                    var postDataInstances = [ArrayBuffer, Blob, Document, FormData];

                    if (postDataInstances.indexOf(options.data.constructor) >= 0) {
                        postData = options.data;
                    } else {
                        var boundary = '---------------------------' + Date.now().toString(16);

                        if (options.contentType === 'multipart\/form-data') {
                            xhr.setRequestHeader('Content-Type', 'multipart\/form-data; boundary=' + boundary);
                        } else {
                            xhr.setRequestHeader('Content-Type', options.contentType);
                        }
                        postData = '';
                        var _data = ai.serializeObject(options.data);
                        if (options.contentType === 'multipart\/form-data') {
                            boundary = '---------------------------' + Date.now().toString(16);
                            _data = _data.split('&');
                            var _newData = [];
                            for (var i = 0; i < _data.length; i++) {
                                _newData.push('Content-Disposition: form-data; name="' + _data[i].split('=')[0] + '"\r\n\r\n' + _data[i].split('=')[1] + '\r\n');
                            }
                            postData = '--' + boundary + '\r\n' + _newData.join('--' + boundary + '\r\n') + '--' + boundary + '--\r\n';
                        } else {
                            postData = options.contentType === 'application/x-www-form-urlencoded' ? _data : _data.replace(/&/g, '\r\n');
                        }
                    }
                } else {
                    postData = options.data;
                }
            }

            if (options.headers) {
                ai.each(options.headers, function (headerName, headerCallback) {
                    xhr.setRequestHeader(headerName, headerCallback);
                });
            }

            if (typeof options.crossDomain === 'undefined') {
                options.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(options.url) && RegExp.$2 !== window.location.host;
            }

            if (!options.crossDomain) {
                xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
            }

            if (options.xhrFields) {
                ai.each(options.xhrFields, function (fieldName, fieldValue) {
                    xhr[fieldName] = fieldValue;
                });
            }

            var xhrTimeout;

            xhr.onload = function (e) {
                if (xhrTimeout) clearTimeout(xhrTimeout);
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 0) {
                    var responseData;
                    if (options.dataType === 'json') {
                        try {
                            responseData = JSON.parse(xhr.responseText);
                            fireAjaxCallback('ajaxSuccess', { xhr: xhr }, 'success', responseData, xhr.status, xhr);
                        } catch (err) {
                            fireAjaxCallback('ajaxError', { xhr: xhr, parseerror: true }, 'error', xhr, 'parseerror');
                        }
                    } else {
                        responseData = xhr.responseType === 'text' || xhr.responseType === '' ? xhr.responseText : xhr.response;
                        fireAjaxCallback('ajaxSuccess', { xhr: xhr }, 'success', responseData, xhr.status, xhr);
                    }
                } else {
                    fireAjaxCallback('ajaxError', { xhr: xhr }, 'error', xhr, xhr.status);
                }
                if (options.statusCode) {
                    if (globalAjaxOptions.statusCode && globalAjaxOptions.statusCode[xhr.status]) globalAjaxOptions.statusCode[xhr.status](xhr);
                    if (options.statusCode[xhr.status]) options.statusCode[xhr.status](xhr);
                }
                fireAjaxCallback('ajaxComplete', { xhr: xhr }, 'complete', xhr, xhr.status);
            };

            xhr.onerror = function (e) {
                if (xhrTimeout) clearTimeout(xhrTimeout);
                fireAjaxCallback('ajaxError', { xhr: xhr }, 'error', xhr, xhr.status);
            };

            fireAjaxCallback('ajaxStart', { xhr: xhr }, 'start', xhr);
            fireAjaxCallback(undefined, undefined, 'beforeSend', xhr);

            xhr.send(postData);

            if (options.timeout > 0) {
                xhrTimeout = setTimeout(function () {
                    xhr.abort();
                    fireAjaxCallback('ajaxError', { xhr: xhr, timeout: true }, 'error', xhr, 'timeout');
                    fireAjaxCallback('ajaxComplete', { xhr: xhr, timeout: true }, 'complete', xhr, 'timeout');
                }, options.timeout);
            }

            return xhr;
        };

        (function () {
            var methods = 'get post getJSON'.split(' ');
            function createMethod(method) {
                ai[method] = function (url, data, success) {
                    return ai.ajax({
                        url: url,
                        method: method === 'post' ? 'POST' : 'GET',
                        data: typeof data === 'function' ? undefined : data,
                        success: typeof data === 'function' ? data : success,
                        dataType: method === 'getJSON' ? 'json' : undefined
                    });
                };
            }
            for (var i = 0; i < methods.length; i++) {
                createMethod(methods[i]);
            }
        })();

        ai.parseUrlQuery = function (url) {
            var query = {},
                i,
                params,
                param;
            if (url.indexOf('?') >= 0) url = url.split('?')[1];else return query;
            params = url.split('&');
            for (i = 0; i < params.length; i++) {
                param = params[i].split('=');
                query[param[0]] = param[1];
            }
            return query;
        };
        ai.isArray = function (arr) {
            if (Object.prototype.toString.apply(arr) === '[object Array]') return true;else return false;
        };
        ai.each = function (obj, callback) {
            if (typeof obj !== 'object') return;
            if (!callback) return;
            var i, prop;
            if (ai.isArray(obj) || obj instanceof Ai) {
                for (i = 0; i < obj.length; i++) {
                    callback(i, obj[i]);
                }
            } else {
                for (prop in obj) {
                    if (obj.hasOwnProperty(prop)) {
                        callback(prop, obj[prop]);
                    }
                }
            }
        };
        ai.unique = function (arr) {
            var unique = [];
            for (var i = 0; i < arr.length; i++) {
                if (unique.indexOf(arr[i]) === -1) unique.push(arr[i]);
            }
            return unique;
        };
        ai.serializeObject = function (obj, parents) {
            if (typeof obj === 'string') return obj;
            var resultArray = [];
            var separator = '&';
            parents = parents || [];
            function var_name(name) {
                if (parents.length > 0) {
                    var _parents = '';
                    for (var j = 0; j < parents.length; j++) {
                        if (j === 0) _parents += parents[j];else _parents += '[' + encodeURIComponent(parents[j]) + ']';
                    }
                    return _parents + '[' + encodeURIComponent(name) + ']';
                } else {
                    return encodeURIComponent(name);
                }
            }
            function var_value(value) {
                return encodeURIComponent(value);
            }
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    var toPush;
                    if (ai.isArray(obj[prop])) {
                        toPush = [];
                        for (var i = 0; i < obj[prop].length; i++) {
                            toPush.push(var_name(prop) + '[]=' + var_value(obj[prop][i]));
                        }
                        if (toPush.length > 0) resultArray.push(toPush.join(separator));
                    } else if (typeof obj[prop] === 'object') {
                        var _newParents = parents.slice();
                        _newParents.push(prop);
                        toPush = ai.serializeObject(obj[prop], _newParents);
                        if (toPush !== '') resultArray.push(toPush);
                    } else if (typeof obj[prop] !== 'undefined' && obj[prop] !== '') {
                        resultArray.push(var_name(prop) + '=' + var_value(obj[prop]));
                    }
                }
            }
            return resultArray.join(separator);
        };
        ai.toCamelCase = function (string) {
            return string.toLowerCase().replace(/-(.)/g, function (match, group1) {
                return group1.toUpperCase();
            });
        };
        ai.dataset = function (el) {
            return ai(el).dataset();
        };
        ai.getTranslate = function (el, axis) {
            var matrix, curTransform, curStyle, transformMatrix;

            if (typeof axis === 'undefined') {
                axis = 'x';
            }

            curStyle = window.getComputedStyle(el, null);
            if (window.WebKitCSSMatrix) {
                curTransform = curStyle.transform || curStyle.webkitTransform;
                if (curTransform.split(',').length > 6) {
                    curTransform = curTransform.split(', ').map(function (a) {
                        return a.replace(',', '.');
                    }).join(', ');
                }

                transformMatrix = new WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
            } else {
                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
                matrix = transformMatrix.toString().split(',');
            }

            if (axis === 'x') {
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);else curTransform = parseFloat(matrix[4]);
            }
            if (axis === 'y') {
                if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);else curTransform = parseFloat(matrix[5]);
            }

            return curTransform || 0;
        };

        ai.requestAnimationFrame = function (callback) {
            if (window.requestAnimationFrame) return window.requestAnimationFrame(callback);else if (window.webkitRequestAnimationFrame) return window.webkitRequestAnimationFrame(callback);else if (window.mozRequestAnimationFrame) return window.mozRequestAnimationFrame(callback);else {
                return window.setTimeout(callback, 1000 / 60);
            }
        };
        ai.cancelAnimationFrame = function (id) {
            if (window.cancelAnimationFrame) return window.cancelAnimationFrame(id);else if (window.webkitCancelAnimationFrame) return window.webkitCancelAnimationFrame(id);else if (window.mozCancelAnimationFrame) return window.mozCancelAnimationFrame(id);else {
                return window.clearTimeout(id);
            }
        };
        ai.supportTouch = !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);

        ai.fn = Ai.prototype;

        ai.fn.scrollTo = function (left, top, duration, easing, callback) {
            if (arguments.length === 4 && typeof easing === 'function') {
                callback = easing;
                easing = undefined;
            }
            return this.each(function () {
                var el = this;
                var currentTop, currentLeft, maxTop, maxLeft, newTop, newLeft, scrollTop, scrollLeft;
                var animateTop = top > 0 || top === 0;
                var animateLeft = left > 0 || left === 0;
                if (typeof easing === 'undefined') {
                    easing = 'swing';
                }
                if (animateTop) {
                    currentTop = el.scrollTop;
                    if (!duration) {
                        el.scrollTop = top;
                    }
                }
                if (animateLeft) {
                    currentLeft = el.scrollLeft;
                    if (!duration) {
                        el.scrollLeft = left;
                    }
                }
                if (!duration) return;
                if (animateTop) {
                    maxTop = el.scrollHeight - el.offsetHeight;
                    newTop = Math.max(Math.min(top, maxTop), 0);
                }
                if (animateLeft) {
                    maxLeft = el.scrollWidth - el.offsetWidth;
                    newLeft = Math.max(Math.min(left, maxLeft), 0);
                }
                var startTime = null;
                if (animateTop && newTop === currentTop) animateTop = false;
                if (animateLeft && newLeft === currentLeft) animateLeft = false;
                function render(time) {
                    if (time === undefined) {
                        time = new Date().getTime();
                    }
                    if (startTime === null) {
                        startTime = time;
                    }
                    var doneLeft, doneTop, done;
                    var progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
                    var easeProgress = easing === 'linear' ? progress : 0.5 - Math.cos(progress * Math.PI) / 2;
                    if (animateTop) scrollTop = currentTop + easeProgress * (newTop - currentTop);
                    if (animateLeft) scrollLeft = currentLeft + easeProgress * (newLeft - currentLeft);
                    if (animateTop && newTop > currentTop && scrollTop >= newTop) {
                        el.scrollTop = newTop;
                        done = true;
                    }
                    if (animateTop && newTop < currentTop && scrollTop <= newTop) {
                        el.scrollTop = newTop;
                        done = true;
                    }

                    if (animateLeft && newLeft > currentLeft && scrollLeft >= newLeft) {
                        el.scrollLeft = newLeft;
                        done = true;
                    }
                    if (animateLeft && newLeft < currentLeft && scrollLeft <= newLeft) {
                        el.scrollLeft = newLeft;
                        done = true;
                    }

                    if (done) {
                        if (callback) callback();
                        return;
                    }
                    if (animateTop) el.scrollTop = scrollTop;
                    if (animateLeft) el.scrollLeft = scrollLeft;
                    ai.requestAnimationFrame(render);
                }
                ai.requestAnimationFrame(render);
            });
        };
        ai.fn.scrollTop = function (top, duration, easing, callback) {
            if (arguments.length === 3 && typeof easing === 'function') {
                callback = easing;
                easing = undefined;
            }
            var dom = this;
            if (typeof top === 'undefined') {
                if (dom.length > 0) return dom[0].scrollTop;else return null;
            }
            return dom.scrollTo(undefined, top, duration, easing, callback);
        };
        ai.fn.scrollLeft = function (left, duration, easing, callback) {
            if (arguments.length === 3 && typeof easing === 'function') {
                callback = easing;
                easing = undefined;
            }
            var dom = this;
            if (typeof left === 'undefined') {
                if (dom.length > 0) return dom[0].scrollLeft;else return null;
            }
            return dom.scrollTo(left, undefined, duration, easing, callback);
        };

        return ai;
    })();
    exports.Ai = Ai;
});
//# sourceMappingURL=data:application/json;base64,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Q0FBQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFVBQVUsRUFBRTtBQUN4RCx3QkFBUSxHQUFHLE1BQU0sQ0FBQztBQUNsQixzQkFBTSxHQUFHLFNBQVMsQ0FBQzthQUN0QjtBQUNELGdCQUFJLEdBQUcsR0FBRyxJQUFJLENBQUM7QUFDZixnQkFBSSxPQUFPLElBQUksS0FBSyxXQUFXLEVBQUU7QUFDN0Isb0JBQUksR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQ3hDLE9BQU8sSUFBSSxDQUFDO2FBQ3BCO0FBQ0QsbUJBQU8sR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDcEUsQ0FBQzs7QUFFRixlQUFPLEVBQUUsQ0FBQztLQUNiLENBQUEsRUFBRyxDQUFDIiwiZmlsZSI6ImFpLWVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAvKj09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIEFpIExpYnJhcnlcbiAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuZXhwb3J0IGxldCBBaSA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIEFpID0gZnVuY3Rpb24gKGFycikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzLCBpID0gMDtcbiAgICAgICAgLy8gQ3JlYXRlIGFycmF5LWxpa2Ugb2JqZWN0XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF90aGlzW2ldID0gYXJyW2ldO1xuICAgICAgICB9XG4gICAgICAgIF90aGlzLmxlbmd0aCA9IGFyci5sZW5ndGg7XG4gICAgICAgIC8vIFJldHVybiBjb2xsZWN0aW9uIHdpdGggbWV0aG9kc1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIHZhciBhaSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgY29udGV4dCkge1xuICAgICAgICB2YXIgYXJyID0gW10sIGkgPSAwO1xuICAgICAgICBpZiAoc2VsZWN0b3IgJiYgIWNvbnRleHQpIHtcbiAgICAgICAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEFpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgLy8gU3RyaW5nXG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhciBlbHMsIHRlbXBQYXJlbnQsIGh0bWwgPSBzZWxlY3Rvci50cmltKCk7XG4gICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPCcpID49IDAgJiYgaHRtbC5pbmRleE9mKCc+JykgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9DcmVhdGUgPSAnZGl2JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPGxpJykgPT09IDApIHRvQ3JlYXRlID0gJ3VsJztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRyJykgPT09IDApIHRvQ3JlYXRlID0gJ3Rib2R5JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGh0bWwuaW5kZXhPZignPHRkJykgPT09IDAgfHwgaHRtbC5pbmRleE9mKCc8dGgnKSA9PT0gMCkgdG9DcmVhdGUgPSAndHInO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8dGJvZHknKSA9PT0gMCkgdG9DcmVhdGUgPSAndGFibGUnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaHRtbC5pbmRleE9mKCc8b3B0aW9uJykgPT09IDApIHRvQ3JlYXRlID0gJ3NlbGVjdCc7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRvQ3JlYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcFBhcmVudC5pbm5lckhUTUwgPSBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRlbXBQYXJlbnQuY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2godGVtcFBhcmVudC5jaGlsZE5vZGVzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjb250ZXh0ICYmIHNlbGVjdG9yWzBdID09PSAnIycgJiYgIXNlbGVjdG9yLm1hdGNoKC9bIC48Pjp+XS8pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBQdXJlIElEIHNlbGVjdG9yXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc2VsZWN0b3Iuc3BsaXQoJyMnKVsxXSldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT3RoZXIgc2VsZWN0b3JzXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHMgPSAoY29udGV4dCB8fCBkb2N1bWVudCkucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsc1tpXSkgYXJyLnB1c2goZWxzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE5vZGUvZWxlbWVudFxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3Iubm9kZVR5cGUgfHwgc2VsZWN0b3IgPT09IHdpbmRvdyB8fCBzZWxlY3RvciA9PT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBhcnIucHVzaChzZWxlY3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL0FycmF5IG9mIGVsZW1lbnRzIG9yIGluc3RhbmNlIG9mIERvbVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IubGVuZ3RoID4gMCAmJiBzZWxlY3RvclswXS5ub2RlVHlwZSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBzZWxlY3Rvci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChzZWxlY3RvcltpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQWkoYXJyKTtcbiAgICB9O1xuXG4gICAgQWkucHJvdG90eXBlID0ge1xuICAgICAgICBhdU1vZGVsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gdGhpc1swXS5hdSAmJiB0aGlzWzBdLmF1LmNvbnRyb2xsZXIubW9kZWw7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIENsYXNzZXMgYW5kIGF0dHJpdXRlc1xuICAgICAgICBhZGRDbGFzczogZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbGFzc05hbWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tqXS5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB0aGlzW2pdLmNsYXNzTGlzdC5hZGQoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tqXS5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB0aGlzW2pdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0NsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXNbMF0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHRoaXNbMF0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjbGFzc2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB0aGlzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1tqXS5jbGFzc0xpc3QgIT09ICd1bmRlZmluZWQnKSB0aGlzW2pdLmNsYXNzTGlzdC50b2dnbGUoY2xhc3Nlc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGF0dHI6IGZ1bmN0aW9uIChhdHRycywgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxICYmIHR5cGVvZiBhdHRycyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAvLyBHZXQgYXR0clxuICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSByZXR1cm4gdGhpc1swXS5nZXRBdHRyaWJ1dGUoYXR0cnMpO1xuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNldCBhdHRyc1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnNldEF0dHJpYnV0ZShhdHRycywgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV1bYXR0ck5hbWVdID0gYXR0cnNbYXR0ck5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyc1thdHRyTmFtZV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVBdHRyOiBmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tpXS5yZW1vdmVBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgcHJvcDogZnVuY3Rpb24gKHByb3BzLCB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIHByb3BzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vIEdldCBwcm9wXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB0aGlzWzBdW3Byb3BzXTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTZXQgcHJvcHNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0cmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXVtwcm9wc10gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9iamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcE5hbWUgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldW3Byb3BOYW1lXSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gR2V0IHZhbHVlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZSAmJiAoa2V5IGluIHRoaXNbMF0uZG9tN0VsZW1lbnREYXRhU3RvcmFnZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhS2V5ID0gdGhpc1swXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtJyArIGtleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhS2V5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNldCB2YWx1ZVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UpIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVEYXRhOiBmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2UgJiYgZWwuZG9tN0VsZW1lbnREYXRhU3RvcmFnZVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsLmRvbTdFbGVtZW50RGF0YVN0b3JhZ2Vba2V5XSA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBlbC5kb203RWxlbWVudERhdGFTdG9yYWdlW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgaWYgKGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGFzZXQgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAoZWwuZGF0YXNldCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBkYXRhS2V5IGluIGVsLmRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFzZXRbZGF0YUtleV0gPSBlbC5kYXRhc2V0W2RhdGFLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVsLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhdHRyID0gZWwuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdHRyLm5hbWUuaW5kZXhPZignZGF0YS0nKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXNldFthaS50b0NhbWVsQ2FzZShhdHRyLm5hbWUuc3BsaXQoJ2RhdGEtJylbMV0pXSA9IGF0dHIudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGFzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ2ZhbHNlJykgZGF0YXNldFtrZXldID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGRhdGFzZXRba2V5XSA9PT0gJ3RydWUnKSBkYXRhc2V0W2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJzZUZsb2F0KGRhdGFzZXRba2V5XSkgPT09IGRhdGFzZXRba2V5XSAqIDEpIGRhdGFzZXRba2V5XSA9IGRhdGFzZXRba2V5XSAqIDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgICAgICB2YWw6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1swXSkgcmV0dXJuIHRoaXNbMF0udmFsdWU7XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFRyYW5zZm9ybXNcbiAgICAgICAgdHJhbnNmb3JtIDogZnVuY3Rpb24gKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsU3R5bGUgPSB0aGlzW2ldLnN0eWxlO1xuICAgICAgICAgICAgICAgIGVsU3R5bGUud2Via2l0VHJhbnNmb3JtID0gZWxTdHlsZS5Nc1RyYW5zZm9ybSA9IGVsU3R5bGUubXNUcmFuc2Zvcm0gPSBlbFN0eWxlLk1velRyYW5zZm9ybSA9IGVsU3R5bGUuT1RyYW5zZm9ybSA9IGVsU3R5bGUudHJhbnNmb3JtID0gdHJhbnNmb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb246IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkdXJhdGlvbiAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBlbFN0eWxlID0gdGhpc1tpXS5zdHlsZTtcbiAgICAgICAgICAgICAgICBlbFN0eWxlLndlYmtpdFRyYW5zaXRpb25EdXJhdGlvbiA9IGVsU3R5bGUuTXNUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLm1zVHJhbnNpdGlvbkR1cmF0aW9uID0gZWxTdHlsZS5Nb3pUcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLk9UcmFuc2l0aW9uRHVyYXRpb24gPSBlbFN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIC8vRXZlbnRzXG4gICAgICAgIG9uOiBmdW5jdGlvbiAoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZUxpdmVFdmVudChlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmIChhaSh0YXJnZXQpLmlzKHRhcmdldFNlbGVjdG9yKSkgbGlzdGVuZXIuY2FsbCh0YXJnZXQsIGUpO1xuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50cyA9IGFpKHRhcmdldCkucGFyZW50cygpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHBhcmVudHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhaShwYXJlbnRzW2tdKS5pcyh0YXJnZXRTZWxlY3RvcikpIGxpc3RlbmVyLmNhbGwocGFyZW50c1trXSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gZXZlbnROYW1lLnNwbGl0KCcgJyk7XG4gICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyB8fCB0YXJnZXRTZWxlY3RvciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVXN1YWwgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FwdHVyZSA9IGFyZ3VtZW50c1syXSB8fCBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgZXZlbnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRzW2pdLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vTGl2ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGV2ZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzW2ldLmRvbTdMaXZlTGlzdGVuZXJzKSB0aGlzW2ldLmRvbTdMaXZlTGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmRvbTdMaXZlTGlzdGVuZXJzLnB1c2goe2xpc3RlbmVyOiBsaXN0ZW5lciwgbGl2ZUxpc3RlbmVyOiBoYW5kbGVMaXZlRXZlbnR9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldmVudHNbal0sIGhhbmRsZUxpdmVFdmVudCwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBvZmY6IGZ1bmN0aW9uIChldmVudE5hbWUsIHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IGV2ZW50TmFtZS5zcGxpdCgnICcpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRoaXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJyB8fCB0YXJnZXRTZWxlY3RvciA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzdWFsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBhcmd1bWVudHNbMl0gfHwgZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2pdLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnRzW2ldLCBsaXN0ZW5lciwgY2FwdHVyZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBMaXZlIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tqXS5kb203TGl2ZUxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpc1tqXS5kb203TGl2ZUxpc3RlbmVycy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1tqXS5kb203TGl2ZUxpc3RlbmVyc1trXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbal0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudHNbaV0sIHRoaXNbal0uZG9tN0xpdmVMaXN0ZW5lcnNba10ubGl2ZUxpc3RlbmVyLCBjYXB0dXJlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBvbmNlOiBmdW5jdGlvbiAoZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmUpIHtcbiAgICAgICAgICAgIHZhciBkb20gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXRTZWxlY3RvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyID0gYXJndW1lbnRzWzFdO1xuICAgICAgICAgICAgICAgIGNhcHR1cmUgPSBhcmd1bWVudHNbMl07XG4gICAgICAgICAgICAgICAgdGFyZ2V0U2VsZWN0b3IgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZ1bmN0aW9uIHByb3h5KGUpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5jYWxsKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgICAgICBkb20ub2ZmKGV2ZW50TmFtZSwgdGFyZ2V0U2VsZWN0b3IsIHByb3h5LCBjYXB0dXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb20ub24oZXZlbnROYW1lLCB0YXJnZXRTZWxlY3RvciwgcHJveHksIGNhcHR1cmUpO1xuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyOiBmdW5jdGlvbiAoZXZlbnROYW1lLCBldmVudERhdGEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBldnQ7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KGV2ZW50TmFtZSwge2RldGFpbDogZXZlbnREYXRhLCBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2dCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuICAgICAgICAgICAgICAgICAgICBldnQuaW5pdEV2ZW50KGV2ZW50TmFtZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGV2dC5kZXRhaWwgPSBldmVudERhdGE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXNbaV0uZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGV2ZW50cyA9IFsnd2Via2l0VHJhbnNpdGlvbkVuZCcsICd0cmFuc2l0aW9uZW5kJywgJ29UcmFuc2l0aW9uRW5kJywgJ01TVHJhbnNpdGlvbkVuZCcsICdtc1RyYW5zaXRpb25FbmQnXSxcbiAgICAgICAgICAgICAgICBpLCBqLCBkb20gPSB0aGlzO1xuICAgICAgICAgICAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICAgICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCAhPT0gdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpcywgZSk7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBkb20ub2ZmKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5vbihldmVudHNbaV0sIGZpcmVDYWxsQmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGFuaW1hdGlvbkVuZDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgZXZlbnRzID0gWyd3ZWJraXRBbmltYXRpb25FbmQnLCAnT0FuaW1hdGlvbkVuZCcsICdNU0FuaW1hdGlvbkVuZCcsICdhbmltYXRpb25lbmQnXSxcbiAgICAgICAgICAgICAgICBpLCBqLCBkb20gPSB0aGlzO1xuICAgICAgICAgICAgZnVuY3Rpb24gZmlyZUNhbGxCYWNrKGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhlKTtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5vZmYoZXZlbnRzW2ldLCBmaXJlQ2FsbEJhY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLm9uKGV2ZW50c1tpXSwgZmlyZUNhbGxCYWNrKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgLy8gU2l6aW5nL1N0eWxlc1xuICAgICAgICB3aWR0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXNbMF0gPT09IHdpbmRvdykge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodGhpcy5jc3MoJ3dpZHRoJykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvdXRlcldpZHRoOiBmdW5jdGlvbiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5jbHVkZU1hcmdpbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN0eWxlcyA9IHRoaXMuc3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLm9mZnNldFdpZHRoICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLXJpZ2h0JykpICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWxlZnQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0ub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzWzBdID09PSB3aW5kb3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh0aGlzLmNzcygnaGVpZ2h0JykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvdXRlckhlaWdodDogZnVuY3Rpb24gKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluY2x1ZGVNYXJnaW5zKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzdHlsZXMgPSB0aGlzLnN0eWxlcygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQgKyBwYXJzZUZsb2F0KHN0eWxlcy5nZXRQcm9wZXJ0eVZhbHVlKCdtYXJnaW4tdG9wJykpICsgcGFyc2VGbG9hdChzdHlsZXMuZ2V0UHJvcGVydHlWYWx1ZSgnbWFyZ2luLWJvdHRvbScpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpc1swXS5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBvZmZzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgICAgIHZhciBib3ggPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgdmFyIGNsaWVudFRvcCAgPSBlbC5jbGllbnRUb3AgIHx8IGJvZHkuY2xpZW50VG9wICB8fCAwO1xuICAgICAgICAgICAgICAgIHZhciBjbGllbnRMZWZ0ID0gZWwuY2xpZW50TGVmdCB8fCBib2R5LmNsaWVudExlZnQgfHwgMDtcbiAgICAgICAgICAgICAgICB2YXIgc2Nyb2xsVG9wICA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbExlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgfHwgZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB0b3A6IGJveC50b3AgICsgc2Nyb2xsVG9wICAtIGNsaWVudFRvcCxcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogYm94LmxlZnQgKyBzY3JvbGxMZWZ0IC0gY2xpZW50TGVmdFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXNbaV0uc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgaSwgc3R5bGVzO1xuICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKTtcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfSxcbiAgICAgICAgY3NzOiBmdW5jdGlvbiAocHJvcHMsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgaTtcbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0pIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzWzBdLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKHByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5zdHlsZVtwcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAyICYmIHR5cGVvZiBwcm9wcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnN0eWxlW3Byb3BzXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vRG9tIG1hbmlwdWxhdGlvblxuICAgICAgICBlYWNoOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrLmNhbGwodGhpc1tpXSwgaSwgdGhpc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVkSXRlbXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBkb20gPSB0aGlzO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb20ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChkb21baV0sIGksIGRvbVtpXSkpIG1hdGNoZWRJdGVtcy5wdXNoKGRvbVtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFpKG1hdGNoZWRJdGVtcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGh0bWw6IGZ1bmN0aW9uIChodG1sKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGh0bWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXNbMF0gPyB0aGlzWzBdLmlubmVySFRNTCA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0ZXh0OiBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzWzBdLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGlzOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGlmICghdGhpc1swXSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB2YXIgY29tcGFyZVdpdGgsIGk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNlbGVjdG9yID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHZhciBlbCA9IHRoaXNbMF07XG4gICAgICAgICAgICAgICAgaWYgKGVsID09PSBkb2N1bWVudCkgcmV0dXJuIHNlbGVjdG9yID09PSBkb2N1bWVudDtcbiAgICAgICAgICAgICAgICBpZiAoZWwgPT09IHdpbmRvdykgcmV0dXJuIHNlbGVjdG9yID09PSB3aW5kb3c7XG5cbiAgICAgICAgICAgICAgICBpZiAoZWwubWF0Y2hlcykgcmV0dXJuIGVsLm1hdGNoZXMoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZWwubW96TWF0Y2hlc1NlbGVjdG9yKSByZXR1cm4gZWwubW96TWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbC5tc01hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1zTWF0Y2hlc1NlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZVdpdGggPSBhaShzZWxlY3Rvcik7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSB0aGlzWzBdKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZWN0b3IgPT09IGRvY3VtZW50KSByZXR1cm4gdGhpc1swXSA9PT0gZG9jdW1lbnQ7XG4gICAgICAgICAgICBlbHNlIGlmIChzZWxlY3RvciA9PT0gd2luZG93KSByZXR1cm4gdGhpc1swXSA9PT0gd2luZG93O1xuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yLm5vZGVUeXBlIHx8IHNlbGVjdG9yIGluc3RhbmNlb2YgQWkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29tcGFyZVdpdGggPSBzZWxlY3Rvci5ub2RlVHlwZSA/IFtzZWxlY3Rvcl0gOiBzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbXBhcmVXaXRoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGFyZVdpdGhbaV0gPT09IHRoaXNbMF0pIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG4gICAgICAgIGluZGV4T2Y6IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbaV0gPT09IGVsKSByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgaW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzWzBdKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpc1swXTtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKChjaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZykgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkLm5vZGVUeXBlID09PSAxKSBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgICAgICBlcTogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGluZGV4ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgcmV0dXJuSW5kZXg7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBBaShbXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuSW5kZXggPSBsZW5ndGggKyBpbmRleDtcbiAgICAgICAgICAgICAgICBpZiAocmV0dXJuSW5kZXggPCAwKSByZXR1cm4gbmV3IEFpKFtdKTtcbiAgICAgICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgQWkoW3RoaXNbcmV0dXJuSW5kZXhdXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFpKFt0aGlzW2luZGV4XV0pO1xuICAgICAgICB9LFxuICAgICAgICBhcHBlbmQ6IGZ1bmN0aW9uIChuZXdDaGlsZCkge1xuICAgICAgICAgICAgdmFyIGksIGo7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3Q2hpbGQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBEaXYuaW5uZXJIVE1MID0gbmV3Q2hpbGQ7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICh0ZW1wRGl2LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQodGVtcERpdi5maXJzdENoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXdDaGlsZCBpbnN0YW5jZW9mIEFpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBuZXdDaGlsZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5hcHBlbmRDaGlsZChuZXdDaGlsZFtqXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbaV0uYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9LFxuICAgICAgICBhcHBlbmRUbzogZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgICAgYWkocGFyZW50KS5hcHBlbmQodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcbiAgICAgICAgcHJlcGVuZDogZnVuY3Rpb24gKG5ld0NoaWxkKSB7XG4gICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdDaGlsZCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGVtcERpdi5pbm5lckhUTUwgPSBuZXdDaGlsZDtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gdGVtcERpdi5jaGlsZE5vZGVzLmxlbmd0aCAtIDE7IGogPj0gMDsgai0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZSh0ZW1wRGl2LmNoaWxkTm9kZXNbal0sIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpc1tpXS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBuZXdDaGlsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5ld0NoaWxkIGluc3RhbmNlb2YgQWkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IG5ld0NoaWxkLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2ldLmluc2VydEJlZm9yZShuZXdDaGlsZFtqXSwgdGhpc1tpXS5jaGlsZE5vZGVzWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tpXS5pbnNlcnRCZWZvcmUobmV3Q2hpbGQsIHRoaXNbaV0uY2hpbGROb2Rlc1swXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIHByZXBlbmRUbzogZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgICAgYWkocGFyZW50KS5wcmVwZW5kKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydEJlZm9yZTogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgYmVmb3JlID0gYWkoc2VsZWN0b3IpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYmVmb3JlWzBdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0sIGJlZm9yZVswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGJlZm9yZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmVmb3JlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiZWZvcmVbal0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXS5jbG9uZU5vZGUodHJ1ZSksIGJlZm9yZVtqXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGluc2VydEFmdGVyOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBhZnRlciA9IGFpKHNlbGVjdG9yKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhZnRlci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXJbMF0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpc1tpXSwgYWZ0ZXJbMF0ubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhZnRlci5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYWZ0ZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyW2pdLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXNbaV0uY2xvbmVOb2RlKHRydWUpLCBhZnRlcltqXS5uZXh0U2libGluZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgaWYgKHRoaXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgYWkodGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkgcmV0dXJuIG5ldyBBaShbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IEFpKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzWzBdLm5leHRFbGVtZW50U2libGluZykgcmV0dXJuIG5ldyBBaShbdGhpc1swXS5uZXh0RWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IEFpKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgQWkoW10pO1xuICAgICAgICB9LFxuICAgICAgICBuZXh0QWxsOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBuZXh0RWxzID0gW107XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuIG5ldyBBaShbXSk7XG4gICAgICAgICAgICB3aGlsZSAoZWwubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5leHQgPSBlbC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGFpKG5leHQpLmlzKHNlbGVjdG9yKSkgbmV4dEVscy5wdXNoKG5leHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIG5leHRFbHMucHVzaChuZXh0KTtcbiAgICAgICAgICAgICAgICBlbCA9IG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IEFpKG5leHRFbHMpO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2OiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXNbMF0ucHJldmlvdXNFbGVtZW50U2libGluZyAmJiBhaSh0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmcpLmlzKHNlbGVjdG9yKSkgcmV0dXJuIG5ldyBBaShbdGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nXSk7XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgcmV0dXJuIG5ldyBBaShbXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpc1swXS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKSByZXR1cm4gbmV3IEFpKFt0aGlzWzBdLnByZXZpb3VzRWxlbWVudFNpYmxpbmddKTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSByZXR1cm4gbmV3IEFpKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHJldHVybiBuZXcgQWkoW10pO1xuICAgICAgICB9LFxuICAgICAgICBwcmV2QWxsOiBmdW5jdGlvbiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBwcmV2RWxzID0gW107XG4gICAgICAgICAgICB2YXIgZWwgPSB0aGlzWzBdO1xuICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuIG5ldyBBaShbXSk7XG4gICAgICAgICAgICB3aGlsZSAoZWwucHJldmlvdXNFbGVtZW50U2libGluZykge1xuICAgICAgICAgICAgICAgIHZhciBwcmV2ID0gZWwucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgICAgICAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoYWkocHJldikuaXMoc2VsZWN0b3IpKSBwcmV2RWxzLnB1c2gocHJldik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgcHJldkVscy5wdXNoKHByZXYpO1xuICAgICAgICAgICAgICAgIGVsID0gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgQWkocHJldkVscyk7XG4gICAgICAgIH0sXG4gICAgICAgIHBhcmVudDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhaSh0aGlzW2ldLnBhcmVudE5vZGUpLmlzKHNlbGVjdG9yKSkgcGFyZW50cy5wdXNoKHRoaXNbaV0ucGFyZW50Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRzLnB1c2godGhpc1tpXS5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWkoYWkudW5pcXVlKHBhcmVudHMpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFyZW50czogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudCA9IHRoaXNbaV0ucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFpKHBhcmVudCkuaXMoc2VsZWN0b3IpKSBwYXJlbnRzLnB1c2gocGFyZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudHMucHVzaChwYXJlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhaShhaS51bmlxdWUocGFyZW50cykpO1xuICAgICAgICB9LFxuICAgICAgICBmaW5kIDogZnVuY3Rpb24gKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICB2YXIgZm91bmRFbGVtZW50cyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gdGhpc1tpXS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGZvdW5kLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kRWxlbWVudHMucHVzaChmb3VuZFtqXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG5ldyBBaShmb3VuZEVsZW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IGZ1bmN0aW9uIChzZWxlY3Rvcikge1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGROb2RlcyA9IHRoaXNbaV0uY2hpbGROb2RlcztcblxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2Rlc1tqXS5ub2RlVHlwZSA9PT0gMSkgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZE5vZGVzW2pdLm5vZGVUeXBlID09PSAxICYmIGFpKGNoaWxkTm9kZXNbal0pLmlzKHNlbGVjdG9yKSkgY2hpbGRyZW4ucHVzaChjaGlsZE5vZGVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgQWkoYWkudW5pcXVlKGNoaWxkcmVuKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbaV0ucGFyZW50Tm9kZSkgdGhpc1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG4gICAgICAgIGRldGFjaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRvbSA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgaSwgajtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9BZGQgPSBhaShhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCB0b0FkZC5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBkb21bZG9tLmxlbmd0aF0gPSB0b0FkZFtqXTtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmxlbmd0aCsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb207XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gU2hvcnRjdXRzXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNob3J0Y3V0cyA9ICgnY2xpY2sgYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGtleXVwIGtleWRvd24ga2V5cHJlc3Mgc3VibWl0IGNoYW5nZSBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNldXAgbW91c2VlbnRlciBtb3VzZWxlYXZlIG1vdXNlb3V0IG1vdXNlb3ZlciB0b3VjaHN0YXJ0IHRvdWNoZW5kIHRvdWNobW92ZSByZXNpemUgc2Nyb2xsJykuc3BsaXQoJyAnKTtcbiAgICAgICAgdmFyIG5vdFRyaWdnZXIgPSAoJ3Jlc2l6ZSBzY3JvbGwnKS5zcGxpdCgnICcpO1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNZXRob2QobmFtZSkge1xuICAgICAgICAgICAgQWkucHJvdG90eXBlW25hbWVdID0gZnVuY3Rpb24gKHRhcmdldFNlbGVjdG9yLCBsaXN0ZW5lciwgY2FwdHVyZSkge1xuICAgICAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0U2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm90VHJpZ2dlci5pbmRleE9mKG5hbWUpIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuYW1lIGluIHRoaXNbaV0pIHRoaXNbaV1bbmFtZV0oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWkodGhpc1tpXSkudHJpZ2dlcihuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5vbihuYW1lLCB0YXJnZXRTZWxlY3RvciwgbGlzdGVuZXIsIGNhcHR1cmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaG9ydGN1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNyZWF0ZU1ldGhvZChzaG9ydGN1dHNbaV0pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuXG4gICAgLy8gR2xvYmFsIEFqYXggU2V0dXBcbiAgICB2YXIgZ2xvYmFsQWpheE9wdGlvbnMgPSB7fTtcbiAgICBhaS5hamF4U2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucy50eXBlKSBvcHRpb25zLm1ldGhvZCA9IG9wdGlvbnMudHlwZTtcbiAgICAgICAgYWkuZWFjaChvcHRpb25zLCBmdW5jdGlvbiAob3B0aW9uTmFtZSwgb3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgIGdsb2JhbEFqYXhPcHRpb25zW29wdGlvbk5hbWVdICA9IG9wdGlvblZhbHVlO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLy8gQWpheFxuICAgIHZhciBfanNvbnBSZXF1ZXN0cyA9IDA7XG4gICAgYWkuYWpheCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICBkYXRhOiBmYWxzZSxcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxuICAgICAgICAgICAgY2FjaGU6IHRydWUsXG4gICAgICAgICAgICB1c2VyOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgICAgICAgeGhyRmllbGRzOiB7fSxcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHt9LFxuICAgICAgICAgICAgcHJvY2Vzc0RhdGE6IHRydWUsXG4gICAgICAgICAgICBkYXRhVHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgICAgICAgdGltZW91dDogMFxuICAgICAgICB9O1xuICAgICAgICB2YXIgY2FsbGJhY2tzID0gWydiZWZvcmVTZW5kJywgJ2Vycm9yJywgJ2NvbXBsZXRlJywgJ3N1Y2Nlc3MnLCAnc3RhdHVzQ29kZSddO1xuXG5cbiAgICAgICAgLy9Gb3IgalF1ZXJ5IGd1eXNcbiAgICAgICAgaWYgKG9wdGlvbnMudHlwZSkgb3B0aW9ucy5tZXRob2QgPSBvcHRpb25zLnR5cGU7XG5cbiAgICAgICAgLy8gTWVyZ2UgZ2xvYmFsIGFuZCBkZWZhdWx0c1xuICAgICAgICBhaS5lYWNoKGdsb2JhbEFqYXhPcHRpb25zLCBmdW5jdGlvbiAoZ2xvYmFsT3B0aW9uTmFtZSwgZ2xvYmFsT3B0aW9uVmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3MuaW5kZXhPZihnbG9iYWxPcHRpb25OYW1lKSA8IDApIGRlZmF1bHRzW2dsb2JhbE9wdGlvbk5hbWVdID0gZ2xvYmFsT3B0aW9uVmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHRvIHJ1biBYSFIgY2FsbGJhY2tzIGFuZCBldmVudHNcbiAgICAgICAgZnVuY3Rpb24gZmlyZUFqYXhDYWxsYmFjayAoZXZlbnROYW1lLCBldmVudERhdGEsIGNhbGxiYWNrTmFtZSkge1xuICAgICAgICAgICAgdmFyIGEgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBpZiAoZXZlbnROYW1lKSBhaShkb2N1bWVudCkudHJpZ2dlcihldmVudE5hbWUsIGV2ZW50RGF0YSk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tOYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gR2xvYmFsIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrTmFtZSBpbiBnbG9iYWxBamF4T3B0aW9ucykgZ2xvYmFsQWpheE9wdGlvbnNbY2FsbGJhY2tOYW1lXShhWzNdLCBhWzRdLCBhWzVdLCBhWzZdKTtcbiAgICAgICAgICAgICAgICAvLyBPcHRpb25zIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnNbY2FsbGJhY2tOYW1lXSkgb3B0aW9uc1tjYWxsYmFja05hbWVdKGFbM10sIGFbNF0sIGFbNV0sIGFbNl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWVyZ2Ugb3B0aW9ucyBhbmQgZGVmYXVsdHNcbiAgICAgICAgYWkuZWFjaChkZWZhdWx0cywgZnVuY3Rpb24gKHByb3AsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKCEocHJvcCBpbiBvcHRpb25zKSkgb3B0aW9uc1twcm9wXSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGVmYXVsdCBVUkxcbiAgICAgICAgaWYgKCFvcHRpb25zLnVybCkge1xuICAgICAgICAgICAgb3B0aW9ucy51cmwgPSB3aW5kb3cubG9jYXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBQYXJhbWV0ZXJzIFByZWZpeFxuICAgICAgICB2YXIgcGFyYW1zUHJlZml4ID0gb3B0aW9ucy51cmwuaW5kZXhPZignPycpID49IDAgPyAnJicgOiAnPyc7XG5cbiAgICAgICAgLy8gVUMgbWV0aG9kXG4gICAgICAgIHZhciBfbWV0aG9kID0gb3B0aW9ucy5tZXRob2QudG9VcHBlckNhc2UoKTtcbiAgICAgICAgLy8gRGF0YSB0byBtb2RpZnkgR0VUIFVSTFxuICAgICAgICBpZiAoKF9tZXRob2QgPT09ICdHRVQnIHx8IF9tZXRob2QgPT09ICdIRUFEJykgJiYgb3B0aW9ucy5kYXRhKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nRGF0YTtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5kYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBrZXk9dmFsdWUgc3RyaW5nXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGF0YS5pbmRleE9mKCc/JykgPj0gMCkgc3RyaW5nRGF0YSA9IG9wdGlvbnMuZGF0YS5zcGxpdCgnPycpWzFdO1xuICAgICAgICAgICAgICAgIGVsc2Ugc3RyaW5nRGF0YSA9IG9wdGlvbnMuZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBrZXk9dmFsdWUgb2JqZWN0XG4gICAgICAgICAgICAgICAgc3RyaW5nRGF0YSA9IGFpLnNlcmlhbGl6ZU9iamVjdChvcHRpb25zLmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHN0cmluZ0RhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy51cmwgKz0gcGFyYW1zUHJlZml4ICsgc3RyaW5nRGF0YTtcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1zUHJlZml4ID09PSAnPycpIHBhcmFtc1ByZWZpeCA9ICcmJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBKU09OUFxuICAgICAgICBpZiAob3B0aW9ucy5kYXRhVHlwZSA9PT0gJ2pzb24nICYmIG9wdGlvbnMudXJsLmluZGV4T2YoJ2NhbGxiYWNrPScpID49IDApIHtcblxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrTmFtZSA9ICdmN2pzb25wXycgKyBEYXRlLm5vdygpICsgKF9qc29ucFJlcXVlc3RzKyspO1xuICAgICAgICAgICAgdmFyIGFib3J0VGltZW91dDtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja1NwbGl0ID0gb3B0aW9ucy51cmwuc3BsaXQoJ2NhbGxiYWNrPScpO1xuICAgICAgICAgICAgdmFyIHJlcXVlc3RVcmwgPSBjYWxsYmFja1NwbGl0WzBdICsgJ2NhbGxiYWNrPScgKyBjYWxsYmFja05hbWU7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tTcGxpdFsxXS5pbmRleE9mKCcmJykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBhZGRWYXJzID0gY2FsbGJhY2tTcGxpdFsxXS5zcGxpdCgnJicpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLmluZGV4T2YoJz0nKSA+IDA7IH0pLmpvaW4oJyYnKTtcbiAgICAgICAgICAgICAgICBpZiAoYWRkVmFycy5sZW5ndGggPiAwKSByZXF1ZXN0VXJsICs9ICcmJyArIGFkZFZhcnM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBzY3JpcHRcbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhYm9ydFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIGZpcmVBamF4Q2FsbGJhY2sodW5kZWZpbmVkLCB1bmRlZmluZWQsICdlcnJvcicsIG51bGwsICdzY3JpcHRlcnJvcicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSByZXF1ZXN0VXJsO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGVyXG4gICAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGFib3J0VGltZW91dCk7XG4gICAgICAgICAgICAgICAgZmlyZUFqYXhDYWxsYmFjayh1bmRlZmluZWQsIHVuZGVmaW5lZCwgJ3N1Y2Nlc3MnLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHdpbmRvd1tjYWxsYmFja05hbWVdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gICAgICAgICAgICBpZiAob3B0aW9ucy50aW1lb3V0ID4gMCkge1xuICAgICAgICAgICAgICAgIGFib3J0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBmaXJlQWpheENhbGxiYWNrKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCAnZXJyb3InLCBudWxsLCAndGltZW91dCcpO1xuICAgICAgICAgICAgICAgIH0sIG9wdGlvbnMudGltZW91dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENhY2hlIGZvciBHRVQvSEVBRCByZXF1ZXN0c1xuICAgICAgICBpZiAoX21ldGhvZCA9PT0gJ0dFVCcgfHwgX21ldGhvZCA9PT0gJ0hFQUQnKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5jYWNoZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLnVybCArPSAocGFyYW1zUHJlZml4ICsgJ19ub2NhY2hlPScgKyBEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyZWF0ZSBYSFJcbiAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICAgIC8vIFNhdmUgUmVxdWVzdCBVUkxcbiAgICAgICAgeGhyLnJlcXVlc3RVcmwgPSBvcHRpb25zLnVybDtcbiAgICAgICAgeGhyLnJlcXVlc3RQYXJhbWV0ZXJzID0gb3B0aW9ucztcblxuICAgICAgICAvLyBPcGVuIFhIUlxuICAgICAgICB4aHIub3BlbihfbWV0aG9kLCBvcHRpb25zLnVybCwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VyLCBvcHRpb25zLnBhc3N3b3JkKTtcblxuICAgICAgICAvLyBDcmVhdGUgUE9TVCBEYXRhXG4gICAgICAgIHZhciBwb3N0RGF0YSA9IG51bGw7XG5cbiAgICAgICAgaWYgKChfbWV0aG9kID09PSAnUE9TVCcgfHwgX21ldGhvZCA9PT0gJ1BVVCcpICYmIG9wdGlvbnMuZGF0YSkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucHJvY2Vzc0RhdGEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcG9zdERhdGFJbnN0YW5jZXMgPSBbQXJyYXlCdWZmZXIsIEJsb2IsIERvY3VtZW50LCBGb3JtRGF0YV07XG4gICAgICAgICAgICAgICAgLy8gUG9zdCBEYXRhXG4gICAgICAgICAgICAgICAgaWYgKHBvc3REYXRhSW5zdGFuY2VzLmluZGV4T2Yob3B0aW9ucy5kYXRhLmNvbnN0cnVjdG9yKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBvc3REYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUE9TVCBIZWFkZXJzXG4gICAgICAgICAgICAgICAgICAgIHZhciBib3VuZGFyeSA9ICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nICsgRGF0ZS5ub3coKS50b1N0cmluZygxNik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGVudFR5cGUgPT09ICdtdWx0aXBhcnRcXC9mb3JtLWRhdGEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ211bHRpcGFydFxcL2Zvcm0tZGF0YTsgYm91bmRhcnk9JyArIGJvdW5kYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCBvcHRpb25zLmNvbnRlbnRUeXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwb3N0RGF0YSA9ICcnO1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2RhdGEgPSBhaS5zZXJpYWxpemVPYmplY3Qob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29udGVudFR5cGUgPT09ICdtdWx0aXBhcnRcXC9mb3JtLWRhdGEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3VuZGFyeSA9ICctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0nICsgRGF0ZS5ub3coKS50b1N0cmluZygxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICBfZGF0YSA9IF9kYXRhLnNwbGl0KCcmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgX25ld0RhdGEgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgX2RhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfbmV3RGF0YS5wdXNoKCdDb250ZW50LURpc3Bvc2l0aW9uOiBmb3JtLWRhdGE7IG5hbWU9XCInICsgX2RhdGFbaV0uc3BsaXQoJz0nKVswXSArICdcIlxcclxcblxcclxcbicgKyBfZGF0YVtpXS5zcGxpdCgnPScpWzFdICsgJ1xcclxcbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdERhdGEgPSAnLS0nICsgYm91bmRhcnkgKyAnXFxyXFxuJyArIF9uZXdEYXRhLmpvaW4oJy0tJyArIGJvdW5kYXJ5ICsgJ1xcclxcbicpICsgJy0tJyArIGJvdW5kYXJ5ICsgJy0tXFxyXFxuJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3REYXRhID0gb3B0aW9ucy5jb250ZW50VHlwZSA9PT0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcgPyBfZGF0YSA6IF9kYXRhLnJlcGxhY2UoLyYvZywgJ1xcclxcbicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcG9zdERhdGEgPSBvcHRpb25zLmRhdGE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFkZGl0aW9uYWwgaGVhZGVyc1xuICAgICAgICBpZiAob3B0aW9ucy5oZWFkZXJzKSB7XG4gICAgICAgICAgICBhaS5lYWNoKG9wdGlvbnMuaGVhZGVycywgZnVuY3Rpb24gKGhlYWRlck5hbWUsIGhlYWRlckNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyTmFtZSwgaGVhZGVyQ2FsbGJhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDaGVjayBmb3IgY3Jvc3NEb21haW5cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNyb3NzRG9tYWluID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgb3B0aW9ucy5jcm9zc0RvbWFpbiA9IC9eKFtcXHctXSs6KT9cXC9cXC8oW15cXC9dKykvLnRlc3Qob3B0aW9ucy51cmwpICYmIFJlZ0V4cC4kMiAhPT0gd2luZG93LmxvY2F0aW9uLmhvc3Q7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9wdGlvbnMuY3Jvc3NEb21haW4pIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdYLVJlcXVlc3RlZC1XaXRoJywgJ1hNTEh0dHBSZXF1ZXN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy54aHJGaWVsZHMpIHtcbiAgICAgICAgICAgIGFpLmVhY2gob3B0aW9ucy54aHJGaWVsZHMsIGZ1bmN0aW9uIChmaWVsZE5hbWUsIGZpZWxkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICB4aHJbZmllbGROYW1lXSA9IGZpZWxkVmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB4aHJUaW1lb3V0O1xuICAgICAgICAvLyBIYW5kbGUgWEhSXG4gICAgICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKHhoclRpbWVvdXQpIGNsZWFyVGltZW91dCh4aHJUaW1lb3V0KTtcbiAgICAgICAgICAgIGlmICgoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkgfHwgeGhyLnN0YXR1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciByZXNwb25zZURhdGE7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGF0YVR5cGUgPT09ICdqc29uJykge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpcmVBamF4Q2FsbGJhY2soJ2FqYXhTdWNjZXNzJywge3hocjogeGhyfSwgJ3N1Y2Nlc3MnLCByZXNwb25zZURhdGEsIHhoci5zdGF0dXMsIHhocik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmlyZUFqYXhDYWxsYmFjaygnYWpheEVycm9yJywge3hocjogeGhyLCBwYXJzZWVycm9yOiB0cnVlfSwgJ2Vycm9yJywgeGhyLCAncGFyc2VlcnJvcicpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSB4aHIucmVzcG9uc2VUeXBlID09PSAndGV4dCcgfHwgeGhyLnJlc3BvbnNlVHlwZSA9PT0gJycgPyB4aHIucmVzcG9uc2VUZXh0IDogeGhyLnJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBmaXJlQWpheENhbGxiYWNrKCdhamF4U3VjY2VzcycsIHt4aHI6IHhocn0sICdzdWNjZXNzJywgcmVzcG9uc2VEYXRhLCB4aHIuc3RhdHVzLCB4aHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZpcmVBamF4Q2FsbGJhY2soJ2FqYXhFcnJvcicsIHt4aHI6IHhocn0sICdlcnJvcicsIHhociwgeGhyLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5zdGF0dXNDb2RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdsb2JhbEFqYXhPcHRpb25zLnN0YXR1c0NvZGUgJiYgZ2xvYmFsQWpheE9wdGlvbnMuc3RhdHVzQ29kZVt4aHIuc3RhdHVzXSkgZ2xvYmFsQWpheE9wdGlvbnMuc3RhdHVzQ29kZVt4aHIuc3RhdHVzXSh4aHIpO1xuICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLnN0YXR1c0NvZGVbeGhyLnN0YXR1c10pIG9wdGlvbnMuc3RhdHVzQ29kZVt4aHIuc3RhdHVzXSh4aHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZmlyZUFqYXhDYWxsYmFjaygnYWpheENvbXBsZXRlJywge3hocjogeGhyfSwgJ2NvbXBsZXRlJywgeGhyLCB4aHIuc3RhdHVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBpZiAoeGhyVGltZW91dCkgY2xlYXJUaW1lb3V0KHhoclRpbWVvdXQpO1xuICAgICAgICAgICAgZmlyZUFqYXhDYWxsYmFjaygnYWpheEVycm9yJywge3hocjogeGhyfSwgJ2Vycm9yJywgeGhyLCB4aHIuc3RhdHVzKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBamF4IHN0YXJ0IGNhbGxiYWNrXG4gICAgICAgIGZpcmVBamF4Q2FsbGJhY2soJ2FqYXhTdGFydCcsIHt4aHI6IHhocn0sICdzdGFydCcsIHhocik7XG4gICAgICAgIGZpcmVBamF4Q2FsbGJhY2sodW5kZWZpbmVkLCB1bmRlZmluZWQsICdiZWZvcmVTZW5kJywgeGhyKTtcblxuXG4gICAgICAgIC8vIFNlbmQgWEhSXG4gICAgICAgIHhoci5zZW5kKHBvc3REYXRhKTtcblxuICAgICAgICAvLyBUaW1lb3V0XG4gICAgICAgIGlmIChvcHRpb25zLnRpbWVvdXQgPiAwKSB7XG4gICAgICAgICAgICB4aHJUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgeGhyLmFib3J0KCk7XG4gICAgICAgICAgICAgICAgZmlyZUFqYXhDYWxsYmFjaygnYWpheEVycm9yJywge3hocjogeGhyLCB0aW1lb3V0OiB0cnVlfSwgJ2Vycm9yJywgeGhyLCAndGltZW91dCcpO1xuICAgICAgICAgICAgICAgIGZpcmVBamF4Q2FsbGJhY2soJ2FqYXhDb21wbGV0ZScsIHt4aHI6IHhociwgdGltZW91dDogdHJ1ZX0sICdjb21wbGV0ZScsIHhociwgJ3RpbWVvdXQnKTtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMudGltZW91dCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gWEhSIG9iamVjdFxuICAgICAgICByZXR1cm4geGhyO1xuICAgIH07XG4gICAgLy8gU2hyb3RjdXRzXG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1ldGhvZHMgPSAoJ2dldCBwb3N0IGdldEpTT04nKS5zcGxpdCgnICcpO1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVNZXRob2QobWV0aG9kKSB7XG4gICAgICAgICAgICBhaVttZXRob2RdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhaS5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kID09PSAncG9zdCcgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicgPyB1bmRlZmluZWQgOiBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiB0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJyA/IGRhdGEgOiBzdWNjZXNzLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogbWV0aG9kID09PSAnZ2V0SlNPTicgPyAnanNvbicgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZXRob2RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjcmVhdGVNZXRob2QobWV0aG9kc1tpXSk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG5cbiAgICAvLyBET00gTGlicmFyeSBVdGlsaXRlc1xuICAgIGFpLnBhcnNlVXJsUXVlcnkgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHt9LCBpLCBwYXJhbXMsIHBhcmFtO1xuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSA+PSAwKSB1cmwgPSB1cmwuc3BsaXQoJz8nKVsxXTtcbiAgICAgICAgZWxzZSByZXR1cm4gcXVlcnk7XG4gICAgICAgIHBhcmFtcyA9IHVybC5zcGxpdCgnJicpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFyYW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwYXJhbSA9IHBhcmFtc1tpXS5zcGxpdCgnPScpO1xuICAgICAgICAgICAgcXVlcnlbcGFyYW1bMF1dID0gcGFyYW1bMV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5O1xuICAgIH07XG4gICAgYWkuaXNBcnJheSA9IGZ1bmN0aW9uIChhcnIpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuYXBwbHkoYXJyKSA9PT0gJ1tvYmplY3QgQXJyYXldJykgcmV0dXJuIHRydWU7XG4gICAgICAgIGVsc2UgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgYWkuZWFjaCA9IGZ1bmN0aW9uIChvYmosIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqICE9PSAnb2JqZWN0JykgcmV0dXJuO1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSByZXR1cm47XG4gICAgICAgIHZhciBpLCBwcm9wO1xuICAgICAgICBpZiAoYWkuaXNBcnJheShvYmopIHx8IG9iaiBpbnN0YW5jZW9mIEFpKSB7XG4gICAgICAgICAgICAvLyBBcnJheVxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGksIG9ialtpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBPYmplY3RcbiAgICAgICAgICAgIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICAgICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHByb3ApKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb3AsIG9ialtwcm9wXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBhaS51bmlxdWUgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIHZhciB1bmlxdWUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh1bmlxdWUuaW5kZXhPZihhcnJbaV0pID09PSAtMSkgdW5pcXVlLnB1c2goYXJyW2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5pcXVlO1xuICAgIH07XG4gICAgYWkuc2VyaWFsaXplT2JqZWN0ID0gZnVuY3Rpb24gKG9iaiwgcGFyZW50cykge1xuICAgICAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHJldHVybiBvYmo7XG4gICAgICAgIHZhciByZXN1bHRBcnJheSA9IFtdO1xuICAgICAgICB2YXIgc2VwYXJhdG9yID0gJyYnO1xuICAgICAgICBwYXJlbnRzID0gcGFyZW50cyB8fCBbXTtcbiAgICAgICAgZnVuY3Rpb24gdmFyX25hbWUobmFtZSkge1xuICAgICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBfcGFyZW50cyA9ICcnO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFyZW50cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiA9PT0gMCkgX3BhcmVudHMgKz0gcGFyZW50c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBfcGFyZW50cyArPSAnWycgKyBlbmNvZGVVUklDb21wb25lbnQocGFyZW50c1tqXSkgKyAnXSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfcGFyZW50cyArICdbJyArIGVuY29kZVVSSUNvbXBvbmVudChuYW1lKSArICddJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gdmFyX3ZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSkge1xuICAgICAgICAgICAgICAgIHZhciB0b1B1c2g7XG4gICAgICAgICAgICAgICAgaWYgKGFpLmlzQXJyYXkob2JqW3Byb3BdKSkge1xuICAgICAgICAgICAgICAgICAgICB0b1B1c2ggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmpbcHJvcF0ubGVuZ3RoOyBpICsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b1B1c2gucHVzaCh2YXJfbmFtZShwcm9wKSArICdbXT0nICsgdmFyX3ZhbHVlKG9ialtwcm9wXVtpXSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b1B1c2gubGVuZ3RoID4gMCkgcmVzdWx0QXJyYXkucHVzaCh0b1B1c2guam9pbihzZXBhcmF0b3IpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIG9ialtwcm9wXSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT2JqZWN0LCBjb252ZXJ0IHRvIG5hbWVkIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIHZhciBfbmV3UGFyZW50cyA9IHBhcmVudHMuc2xpY2UoKTtcbiAgICAgICAgICAgICAgICAgICAgX25ld1BhcmVudHMucHVzaChwcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgdG9QdXNoID0gYWkuc2VyaWFsaXplT2JqZWN0KG9ialtwcm9wXSwgX25ld1BhcmVudHMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9QdXNoICE9PSAnJykgcmVzdWx0QXJyYXkucHVzaCh0b1B1c2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygb2JqW3Byb3BdICE9PSAndW5kZWZpbmVkJyAmJiBvYmpbcHJvcF0gIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3VsZCBiZSBzdHJpbmcgb3IgcGxhaW4gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0QXJyYXkucHVzaCh2YXJfbmFtZShwcm9wKSArICc9JyArIHZhcl92YWx1ZShvYmpbcHJvcF0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdEFycmF5LmpvaW4oc2VwYXJhdG9yKTtcbiAgICB9O1xuICAgIGFpLnRvQ2FtZWxDYXNlID0gZnVuY3Rpb24gKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZSgvLSguKS9nLCBmdW5jdGlvbihtYXRjaCwgZ3JvdXAxKSB7XG4gICAgICAgICAgICByZXR1cm4gZ3JvdXAxLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgYWkuZGF0YXNldCA9IGZ1bmN0aW9uIChlbCkge1xuICAgICAgICByZXR1cm4gYWkoZWwpLmRhdGFzZXQoKTtcbiAgICB9O1xuICAgIGFpLmdldFRyYW5zbGF0ZSA9IGZ1bmN0aW9uIChlbCwgYXhpcykge1xuICAgICAgICB2YXIgbWF0cml4LCBjdXJUcmFuc2Zvcm0sIGN1clN0eWxlLCB0cmFuc2Zvcm1NYXRyaXg7XG5cbiAgICAgICAgLy8gYXV0b21hdGljIGF4aXMgZGV0ZWN0aW9uXG4gICAgICAgIGlmICh0eXBlb2YgYXhpcyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGF4aXMgPSAneCc7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsLCBudWxsKTtcbiAgICAgICAgaWYgKHdpbmRvdy5XZWJLaXRDU1NNYXRyaXgpIHtcbiAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IGN1clN0eWxlLnRyYW5zZm9ybSB8fCBjdXJTdHlsZS53ZWJraXRUcmFuc2Zvcm07XG4gICAgICAgICAgICBpZiAoY3VyVHJhbnNmb3JtLnNwbGl0KCcsJykubGVuZ3RoID4gNikge1xuICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IGN1clRyYW5zZm9ybS5zcGxpdCgnLCAnKS5tYXAoZnVuY3Rpb24oYSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnJlcGxhY2UoJywnLCcuJyk7XG4gICAgICAgICAgICAgICAgfSkuam9pbignLCAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNvbWUgb2xkIHZlcnNpb25zIG9mIFdlYmtpdCBjaG9rZSB3aGVuICdub25lJyBpcyBwYXNzZWQ7IHBhc3NcbiAgICAgICAgICAgIC8vIGVtcHR5IHN0cmluZyBpbnN0ZWFkIGluIHRoaXMgY2FzZVxuICAgICAgICAgICAgdHJhbnNmb3JtTWF0cml4ID0gbmV3IFdlYktpdENTU01hdHJpeChjdXJUcmFuc2Zvcm0gPT09ICdub25lJyA/ICcnIDogY3VyVHJhbnNmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybU1hdHJpeCA9IGN1clN0eWxlLk1velRyYW5zZm9ybSB8fCBjdXJTdHlsZS5PVHJhbnNmb3JtIHx8IGN1clN0eWxlLk1zVHJhbnNmb3JtIHx8IGN1clN0eWxlLm1zVHJhbnNmb3JtICB8fCBjdXJTdHlsZS50cmFuc2Zvcm0gfHwgY3VyU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNmb3JtJykucmVwbGFjZSgndHJhbnNsYXRlKCcsICdtYXRyaXgoMSwgMCwgMCwgMSwnKTtcbiAgICAgICAgICAgIG1hdHJpeCA9IHRyYW5zZm9ybU1hdHJpeC50b1N0cmluZygpLnNwbGl0KCcsJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXhpcyA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAvL0xhdGVzdCBDaHJvbWUgYW5kIHdlYmtpdHMgRml4XG4gICAgICAgICAgICBpZiAod2luZG93LldlYktpdENTU01hdHJpeClcbiAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSB0cmFuc2Zvcm1NYXRyaXgubTQxO1xuICAgICAgICAgICAgLy9DcmF6eSBJRTEwIE1hdHJpeFxuICAgICAgICAgICAgZWxzZSBpZiAobWF0cml4Lmxlbmd0aCA9PT0gMTYpXG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbMTJdKTtcbiAgICAgICAgICAgIC8vTm9ybWFsIEJyb3dzZXJzXG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY3VyVHJhbnNmb3JtID0gcGFyc2VGbG9hdChtYXRyaXhbNF0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChheGlzID09PSAneScpIHtcbiAgICAgICAgICAgIC8vTGF0ZXN0IENocm9tZSBhbmQgd2Via2l0cyBGaXhcbiAgICAgICAgICAgIGlmICh3aW5kb3cuV2ViS2l0Q1NTTWF0cml4KVxuICAgICAgICAgICAgICAgIGN1clRyYW5zZm9ybSA9IHRyYW5zZm9ybU1hdHJpeC5tNDI7XG4gICAgICAgICAgICAvL0NyYXp5IElFMTAgTWF0cml4XG4gICAgICAgICAgICBlbHNlIGlmIChtYXRyaXgubGVuZ3RoID09PSAxNilcbiAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFsxM10pO1xuICAgICAgICAgICAgLy9Ob3JtYWwgQnJvd3NlcnNcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjdXJUcmFuc2Zvcm0gPSBwYXJzZUZsb2F0KG1hdHJpeFs1XSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY3VyVHJhbnNmb3JtIHx8IDA7XG4gICAgfTtcblxuICAgIGFpLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKSByZXR1cm4gd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHJldHVybiB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGFpLmNhbmNlbEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUpIHJldHVybiB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgICAgICBlbHNlIGlmICh3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUpIHJldHVybiB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuY2xlYXJUaW1lb3V0KGlkKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgYWkuc3VwcG9ydFRvdWNoID0gISEoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKTtcblxuICAgIC8vIExpbmsgdG8gcHJvdG90eXBlXG4gICAgYWkuZm4gPSBBaS5wcm90b3R5cGU7XG5cbiAgICAvLyBQbHVnaW5zXG4gICAgYWkuZm4uc2Nyb2xsVG8gPSBmdW5jdGlvbiAobGVmdCwgdG9wLCBkdXJhdGlvbiwgZWFzaW5nLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gNCAmJiB0eXBlb2YgZWFzaW5nID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGVhc2luZztcbiAgICAgICAgICAgIGVhc2luZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBlbCA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgY3VycmVudFRvcCwgY3VycmVudExlZnQsIG1heFRvcCwgbWF4TGVmdCwgbmV3VG9wLCBuZXdMZWZ0LCBzY3JvbGxUb3AsIHNjcm9sbExlZnQ7XG4gICAgICAgICAgICB2YXIgYW5pbWF0ZVRvcCA9IHRvcCA+IDAgfHwgdG9wID09PSAwO1xuICAgICAgICAgICAgdmFyIGFuaW1hdGVMZWZ0ID0gbGVmdCA+IDAgfHwgbGVmdCA9PT0gMDtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZWFzaW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVhc2luZyA9ICdzd2luZyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW5pbWF0ZVRvcCkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUb3AgPSBlbC5zY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgaWYgKCFkdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSB0b3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGFuaW1hdGVMZWZ0KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudExlZnQgPSBlbC5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgICAgIGlmICghZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsTGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFkdXJhdGlvbikgcmV0dXJuO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGVUb3ApIHtcbiAgICAgICAgICAgICAgICBtYXhUb3AgPSBlbC5zY3JvbGxIZWlnaHQgLSBlbC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgbmV3VG9wID0gTWF0aC5tYXgoTWF0aC5taW4odG9wLCBtYXhUb3ApLCAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbmltYXRlTGVmdCkge1xuICAgICAgICAgICAgICAgIG1heExlZnQgPSBlbC5zY3JvbGxXaWR0aCAtIGVsLm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIG5ld0xlZnQgPSBNYXRoLm1heChNYXRoLm1pbihsZWZ0LCBtYXhMZWZ0KSwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhcnRUaW1lID0gbnVsbDtcbiAgICAgICAgICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA9PT0gY3VycmVudFRvcCkgYW5pbWF0ZVRvcCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGFuaW1hdGVMZWZ0ICYmIG5ld0xlZnQgPT09IGN1cnJlbnRMZWZ0KSBhbmltYXRlTGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgZnVuY3Rpb24gcmVuZGVyKHRpbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0YXJ0VGltZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBzdGFydFRpbWUgPSB0aW1lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgZG9uZUxlZnQsIGRvbmVUb3AsIGRvbmU7XG4gICAgICAgICAgICAgICAgdmFyIHByb2dyZXNzID0gTWF0aC5tYXgoTWF0aC5taW4oKHRpbWUgLSBzdGFydFRpbWUpIC8gZHVyYXRpb24sIDEpLCAwKTtcbiAgICAgICAgICAgICAgICB2YXIgZWFzZVByb2dyZXNzID0gZWFzaW5nID09PSAnbGluZWFyJyA/IHByb2dyZXNzIDogKDAuNSAtIE1hdGguY29zKCBwcm9ncmVzcyAqIE1hdGguUEkgKSAvIDIpO1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlVG9wKSBzY3JvbGxUb3AgPSBjdXJyZW50VG9wICsgKGVhc2VQcm9ncmVzcyAqIChuZXdUb3AgLSBjdXJyZW50VG9wKSk7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGVMZWZ0KSBzY3JvbGxMZWZ0ID0gY3VycmVudExlZnQgKyAoZWFzZVByb2dyZXNzICogKG5ld0xlZnQgLSBjdXJyZW50TGVmdCkpO1xuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlVG9wICYmIG5ld1RvcCA+IGN1cnJlbnRUb3AgJiYgc2Nyb2xsVG9wID49IG5ld1RvcCkgIHtcbiAgICAgICAgICAgICAgICAgICAgZWwuc2Nyb2xsVG9wID0gbmV3VG9wO1xuICAgICAgICAgICAgICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGVUb3AgJiYgbmV3VG9wIDwgY3VycmVudFRvcCAmJiBzY3JvbGxUb3AgPD0gbmV3VG9wKSAge1xuICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxUb3AgPSBuZXdUb3A7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0ID4gY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA+PSBuZXdMZWZ0KSAge1xuICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlTGVmdCAmJiBuZXdMZWZ0IDwgY3VycmVudExlZnQgJiYgc2Nyb2xsTGVmdCA8PSBuZXdMZWZ0KSAge1xuICAgICAgICAgICAgICAgICAgICBlbC5zY3JvbGxMZWZ0ID0gbmV3TGVmdDtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlVG9wKSBlbC5zY3JvbGxUb3AgPSBzY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgaWYgKGFuaW1hdGVMZWZ0KSBlbC5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdDtcbiAgICAgICAgICAgICAgICBhaS5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFpLnJlcXVlc3RBbmltYXRpb25GcmFtZShyZW5kZXIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIGFpLmZuLnNjcm9sbFRvcCA9IGZ1bmN0aW9uICh0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAzICYmIHR5cGVvZiBlYXNpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZWFzaW5nO1xuICAgICAgICAgICAgZWFzaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIHZhciBkb20gPSB0aGlzO1xuICAgICAgICBpZiAodHlwZW9mIHRvcCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxUb3A7XG4gICAgICAgICAgICBlbHNlIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkb20uc2Nyb2xsVG8odW5kZWZpbmVkLCB0b3AsIGR1cmF0aW9uLCBlYXNpbmcsIGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIGFpLmZuLnNjcm9sbExlZnQgPSBmdW5jdGlvbiAobGVmdCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDMgJiYgdHlwZW9mIGVhc2luZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBlYXNpbmc7XG4gICAgICAgICAgICBlYXNpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRvbSA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2YgbGVmdCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChkb20ubGVuZ3RoID4gMCkgcmV0dXJuIGRvbVswXS5zY3JvbGxMZWZ0O1xuICAgICAgICAgICAgZWxzZSByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZG9tLnNjcm9sbFRvKGxlZnQsIHVuZGVmaW5lZCwgZHVyYXRpb24sIGVhc2luZywgY2FsbGJhY2spO1xuICAgIH07XG5cbiAgICByZXR1cm4gYWk7XG59KSgpO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
