/* */ 
define(['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    var ElementApi = (function () {
        function ElementApi(context) {
            _classCallCheck(this, ElementApi);

            this.context = context;
        }

        _createClass(ElementApi, [{
            key: 'parent',
            value: function parent(element, selector, max) {
                var parentNode = element.parentNode;
                var _max = max || 1;

                while (parentNode && !this.is(parentNode, document.body) && _max) {
                    if (this.is(parentNode, selector)) return parentNode;
                    parentNode = parentNode.parentNode;

                    if (max) _max--;
                }
                return false;
            }
        }, {
            key: 'is',
            value: function is(element, selector) {
                if (!element || typeof selector === 'undefined') return false;
                var compareWith, i;

                if (selector instanceof Element) {
                    if (element.isEqualNode(selector)) return true;
                }

                if (typeof selector === 'string') {
                    var el = element;
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
            }
        }]);

        return ElementApi;
    })();

    exports.ElementApi = ElementApi;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFpLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1FBQWEsVUFBVTtBQUlWLGlCQUpBLFVBQVUsQ0FJVCxPQUFPLEVBQUU7a0NBSlYsVUFBVTs7QUFLbkIsZ0JBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCOztxQkFOVSxVQUFVOzttQkFPZixnQkFBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRTtBQUM3QixvQkFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztBQUNwQyxvQkFBSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQzs7QUFFcEIsdUJBQU0sVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtBQUMvRCx3QkFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxRQUFRLENBQUMsRUFBRSxPQUFPLFVBQVUsQ0FBQztBQUNyRCw4QkFBVSxHQUFHLFVBQVUsQ0FBQyxVQUFVLENBQUM7O0FBRW5DLHdCQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDakI7QUFDRCx1QkFBTyxLQUFLLENBQUM7YUFDZDs7O21CQUVDLFlBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtBQUNsQixvQkFBSSxDQUFDLE9BQU8sSUFBSSxPQUFPLFFBQVEsS0FBSyxXQUFXLEVBQUUsT0FBTyxLQUFLLENBQUM7QUFDOUQsb0JBQUksV0FBVyxFQUFFLENBQUMsQ0FBQzs7QUFFbkIsb0JBQUksUUFBUSxZQUFZLE9BQU8sRUFBRTtBQUMvQix3QkFBSSxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDO2lCQUNoRDs7QUFFRCxvQkFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7QUFDOUIsd0JBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQztBQUNqQix3QkFBSSxFQUFFLEtBQUssUUFBUSxFQUFFLE9BQU8sUUFBUSxLQUFLLFFBQVEsQ0FBQztBQUNsRCx3QkFBSSxFQUFFLEtBQUssTUFBTSxFQUFFLE9BQU8sUUFBUSxLQUFLLE1BQU0sQ0FBQzs7QUFFOUMsd0JBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsS0FDdkMsSUFBSSxFQUFFLENBQUMscUJBQXFCLEVBQUUsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FDeEUsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FDbEUsSUFBSSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsS0FDaEU7QUFDRCxtQ0FBVyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUMzQiw2QkFBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO0FBQ3JDLGdDQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxJQUFJLENBQUM7eUJBQy9DO0FBQ0QsK0JBQU8sS0FBSyxDQUFDO3FCQUNoQjtpQkFDSixNQUNJLElBQUksUUFBUSxLQUFLLFFBQVEsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxRQUFRLENBQUMsS0FDdkQsSUFBSSxRQUFRLEtBQUssTUFBTSxFQUFFLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxLQUNuRDtBQUNELHdCQUFJLFFBQVEsQ0FBQyxRQUFRLElBQUksUUFBUSxZQUFZLEVBQUUsRUFBRTtBQUM3QyxtQ0FBVyxHQUFHLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUMsR0FBRyxRQUFRLENBQUM7QUFDeEQsNkJBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtBQUNyQyxnQ0FBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sSUFBSSxDQUFDO3lCQUMvQztBQUNELCtCQUFPLEtBQUssQ0FBQztxQkFDaEI7QUFDRCwyQkFBTyxLQUFLLENBQUM7aUJBQ2hCO2FBRUo7OztlQTFEVSxVQUFVIiwiZmlsZSI6ImFpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEVsZW1lbnRBcGkge1xuXG5cblxuICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgfVxuICBwYXJlbnQoZWxlbWVudCwgc2VsZWN0b3IsIG1heCkge1xuICAgIGxldCBwYXJlbnROb2RlID0gZWxlbWVudC5wYXJlbnROb2RlO1xuICAgIGxldCBfbWF4ID0gbWF4IHx8IDE7XG5cbiAgICB3aGlsZShwYXJlbnROb2RlICYmICF0aGlzLmlzKHBhcmVudE5vZGUsIGRvY3VtZW50LmJvZHkpICYmIF9tYXgpIHtcbiAgICAgIGlmICh0aGlzLmlzKHBhcmVudE5vZGUsIHNlbGVjdG9yKSkgcmV0dXJuIHBhcmVudE5vZGU7XG4gICAgICBwYXJlbnROb2RlID0gcGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgICAgLy8gY29uc29sZS5sb2coZWxlbWVudClcbiAgICAgIGlmIChtYXgpIF9tYXgtLTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICAgIGlmICghZWxlbWVudCB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gZmFsc2U7XG4gICAgICB2YXIgY29tcGFyZVdpdGgsIGk7XG5cbiAgICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIEVsZW1lbnQpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaXNFcXVhbE5vZGUoc2VsZWN0b3IpKSByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzZWxlY3RvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB2YXIgZWwgPSBlbGVtZW50O1xuICAgICAgICAgIGlmIChlbCA9PT0gZG9jdW1lbnQpIHJldHVybiBzZWxlY3RvciA9PT0gZG9jdW1lbnQ7XG4gICAgICAgICAgaWYgKGVsID09PSB3aW5kb3cpIHJldHVybiBzZWxlY3RvciA9PT0gd2luZG93O1xuXG4gICAgICAgICAgaWYgKGVsLm1hdGNoZXMpIHJldHVybiBlbC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICAgICAgICBlbHNlIGlmIChlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC53ZWJraXRNYXRjaGVzU2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICAgIGVsc2UgaWYgKGVsLm1vek1hdGNoZXNTZWxlY3RvcikgcmV0dXJuIGVsLm1vek1hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgZWxzZSBpZiAoZWwubXNNYXRjaGVzU2VsZWN0b3IpIHJldHVybiBlbC5tc01hdGNoZXNTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgIGNvbXBhcmVXaXRoID0gYWkoc2VsZWN0b3IpO1xuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY29tcGFyZVdpdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlV2l0aFtpXSA9PT0gdGhpc1swXSkgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKHNlbGVjdG9yID09PSBkb2N1bWVudCkgcmV0dXJuIHRoaXNbMF0gPT09IGRvY3VtZW50O1xuICAgICAgZWxzZSBpZiAoc2VsZWN0b3IgPT09IHdpbmRvdykgcmV0dXJuIHRoaXNbMF0gPT09IHdpbmRvdztcbiAgICAgIGVsc2Uge1xuICAgICAgICAgIGlmIChzZWxlY3Rvci5ub2RlVHlwZSB8fCBzZWxlY3RvciBpbnN0YW5jZW9mIEFpKSB7XG4gICAgICAgICAgICAgIGNvbXBhcmVXaXRoID0gc2VsZWN0b3Iubm9kZVR5cGUgPyBbc2VsZWN0b3JdIDogc2VsZWN0b3I7XG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBjb21wYXJlV2l0aC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKGNvbXBhcmVXaXRoW2ldID09PSB0aGlzWzBdKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
