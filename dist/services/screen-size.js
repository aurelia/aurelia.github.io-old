System.register([], function (_export) {
  'use strict';

  var ScreenSize;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function debounce(func, wait, immediate) {
    var timeout = undefined;
    return function () {
      var context = this;
      var args = arguments;
      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  return {
    setters: [],
    execute: function () {
      ScreenSize = (function () {
        function ScreenSize(channel) {
          _classCallCheck(this, ScreenSize);

          this.queries = [{ name: 'xs', min: '0px', max: '33em' }, { name: 'sm', min: '34em', max: '47em' }, { name: 'md', min: '48em', max: '61em' }, { name: 'lg', min: '62em', max: '74em' }, { name: 'xl', min: '75em', max: '85em' }, { name: 'xxl', min: '86em', max: '1000em' }];
          this.indexOF = { xs: 0, sm: 1, md: 2, lg: 3, xl: 4, xxl: 5 };
          this.screen = {};
          this.eventListeners = [];

          this.currentScreen = this.checkSize();
        }

        _createClass(ScreenSize, [{
          key: 'onChange',
          value: function onChange(cb) {
            this.eventListeners.push(cb);
            if (!this.listener) {
              this.createListener();
            }
          }
        }, {
          key: 'checkSize',
          value: function checkSize() {
            var current = this.currentScreen;
            for (var q in this.queries) {
              if (this.queries[q + 1]) {
                this.screen[q] = this.fromTo(this.queries[q].name, this.queries[q + 1].name);
              } else {
                this.screen[q] = this.from(this.queries[q].name);
              }
              if (this.screen[q]) {
                current = q;
              }
            }

            if (current !== this.currentScreen) {
              this.currentScreen = current;
              return this.currentScreen;
            }
            return false;
          }
        }, {
          key: 'createQuery',
          value: function createQuery(min, max) {
            var query = '';
            if (min) {
              var minIndex = this.indexOF[min];
              min = this.queries[minIndex].min;
              query += '(min-width: ' + min + ')';
            }
            query = max ? query + ' and ' : query;

            if (max) {
              var maxIndex = this.indexOF[max];
              maxIndex = maxIndex - 1;

              max = this.queries[maxIndex].max;
              query += '(max-width: ' + max + ')';
            }
            return query;
          }
        }, {
          key: 'from',
          value: function from(min) {
            var match = window.matchMedia(this.createQuery(min));
            return match && match.matches;
          }
        }, {
          key: 'to',
          value: function to(max) {
            var match = window.matchMedia(this.createQuery(null, max));
            return match && match.matches;
          }
        }, {
          key: 'fromTo',
          value: function fromTo(min, max) {
            var match = window.matchMedia(this.createQuery(min, max));
            return match && match.matches;
          }
        }, {
          key: 'createListener',
          value: function createListener() {
            var self = this;
            window.addEventListener('resize', debounce(update, 200));

            function update() {
              var current = self.checkSize();
              if (current) {
                (function () {
                  var media = self.queries[current];
                  var screen = window.screen;
                  self.eventListeners.forEach(function (cb) {
                    return cb({ media: media, screen: screen });
                  });
                })();
              }
            }
          }
        }]);

        return ScreenSize;
      })();

      _export('ScreenSize', ScreenSize);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3NjcmVlbi1zaXplLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztNQUNhLFVBQVU7Ozs7OztBQTZGdkIsV0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUU7QUFDdkMsUUFBSSxPQUFPLFlBQUEsQ0FBQztBQUNaLFdBQU8sWUFBVztBQUNoQixVQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFDbkIsVUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ3JCLFVBQUksS0FBSyxHQUFHLFNBQVIsS0FBSyxHQUFjO0FBQ3JCLGVBQU8sR0FBRyxJQUFJLENBQUM7QUFDZixZQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO09BQzNDLENBQUM7QUFDRixVQUFJLE9BQU8sR0FBRyxTQUFTLElBQUksQ0FBQyxPQUFPLENBQUM7QUFDcEMsa0JBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QixhQUFPLEdBQUcsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztBQUNsQyxVQUFJLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztLQUN4QyxDQUFDO0dBQ0g7Ozs7QUEzR1ksZ0JBQVU7QUFhVixpQkFiQSxVQUFVLENBYVQsT0FBTyxFQUFFO2dDQWJWLFVBQVU7O2VBRXJCLE9BQU8sR0FBRyxDQUNSLEVBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUMsRUFDckMsRUFBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQyxFQUN0QyxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFDLEVBQ3RDLEVBQUMsSUFB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QyxFQUFDLEtBQUssRUFBTCxLQUFLLEVBQUUsTUFBTSxFQUFOLE1BQU0sRUFBQyxDQUFDO21CQUFBLENBQUMsQ0FBQzs7ZUFDeEQ7YUFDRjtXQUNGOzs7ZUExRlUsVUFBVSIsImZpbGUiOiJzZXJ2aWNlcy9zY3JlZW4tc2l6ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIFNjcmVlblNpemUge1xuXG4gIHF1ZXJpZXMgPSBbXG4gICAge25hbWU6ICd4cycsIG1pbjogJzBweCcsIG1heDogJzMzZW0nfSxcbiAgICB7bmFtZTogJ3NtJywgbWluOiAnMzRlbScsIG1heDogJzQ3ZW0nfSxcbiAgICB7bmFtZTogJ21kJywgbWluOiAnNDhlbScsIG1heDogJzYxZW0nfSxcbiAgICB7bmFtZTogJ2xnJywgbWluOiAnNjJlbScsIG1heDogJzc0ZW0nfSxcbiAgICB7bmFtZTogJ3hsJywgbWluOiAnNzVlbScsIG1heDogJzg1ZW0nfSxcbiAgICB7bmFtZTogJ3h4bCcsIG1pbjogJzg2ZW0nLCBtYXg6ICcxMDAwZW0nfVxuICBdO1xuICBpbmRleE9GID0ge3hzOiAwLCBzbTogMSwgbWQ6IDIsIGxnOiAzLCB4bDogNCwgeHhsOiA1fTtcbiAgc2NyZWVuID0ge307XG4gIGV2ZW50TGlzdGVuZXJzID0gW107XG4gIGNvbnN0cnVjdG9yKGNoYW5uZWwpIHtcbiAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSB0aGlzLmNoZWNrU2l6ZSgpO1xuICB9XG5cbiAgb25DaGFuZ2UoY2IpIHtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2goY2IpO1xuICAgIGlmICghdGhpcy5saXN0ZW5lcikge1xuICAgICAgdGhpcy5jcmVhdGVMaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2l6ZSgpIHtcbiAgICBsZXQgY3VycmVudCA9IHRoaXMuY3VycmVudFNjcmVlbjtcbiAgICBmb3IgKGxldCBxIGluIHRoaXMucXVlcmllcykge1xuICAgICAgaWYgKHRoaXMucXVlcmllc1txICsgMV0pIHtcbiAgICAgICAgdGhpcy5zY3JlZW5bcV0gPSB0aGlzLmZyb21Ubyh0aGlzLnF1ZXJpZXNbcV0ubmFtZSwgdGhpcy5xdWVyaWVzW3EgKyAxXS5uYW1lKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2NyZWVuW3FdID0gdGhpcy5mcm9tKHRoaXMucXVlcmllc1txXS5uYW1lKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnNjcmVlbltxXSkge1xuICAgICAgICBjdXJyZW50ID0gcTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY3VycmVudCAhPT0gdGhpcy5jdXJyZW50U2NyZWVuKSB7XG4gICAgICB0aGlzLmN1cnJlbnRTY3JlZW4gPSBjdXJyZW50O1xuICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFNjcmVlbjtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY3JlYXRlUXVlcnkobWluLCBtYXgpIHtcbiAgICBsZXQgcXVlcnkgPSAnJztcbiAgICBpZiAobWluKSB7XG4gICAgICBsZXQgbWluSW5kZXggPSB0aGlzLmluZGV4T0ZbbWluXTtcbiAgICAgIG1pbiA9IHRoaXMucXVlcmllc1ttaW5JbmRleF0ubWluO1xuICAgICAgcXVlcnkgKz0gYChtaW4td2lkdGg6ICR7bWlufSlgO1xuICAgIH1cbiAgICBxdWVyeSA9IG1heCA/IChxdWVyeSArICcgYW5kICcpIDogcXVlcnk7XG5cbiAgICBpZiAobWF4KSB7XG4gICAgICBsZXQgbWF4SW5kZXggPSB0aGlzLmluZGV4T0ZbbWF4XTtcbiAgICAgIG1heEluZGV4ID0gbWF4SW5kZXggLSAxO1xuXG4gICAgICBtYXggPSB0aGlzLnF1ZXJpZXNbbWF4SW5kZXhdLm1heDtcbiAgICAgIHF1ZXJ5ICs9IGAobWF4LXdpZHRoOiAke21heH0pYDtcbiAgICB9XG4gICAgcmV0dXJuIHF1ZXJ5O1xuICB9XG5cbiAgZnJvbShtaW4pIHtcbiAgICBsZXQgbWF0Y2ggPSB3aW5kb3cubWF0Y2hNZWRpYSh0aGlzLmNyZWF0ZVF1ZXJ5KG1pbikpO1xuICAgIHJldHVybiBtYXRjaCAmJiBtYXRjaC5tYXRjaGVzO1xuICB9XG5cbiAgdG8obWF4KSB7XG4gICAgbGV0IG1hdGNoID0gd2luZG93Lm1hdGNoTWVkaWEodGhpcy5jcmVhdGVRdWVyeShudWxsLCBtYXgpKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2gubWF0Y2hlcztcbiAgfVxuXG4gIGZyb21UbyhtaW4sIG1heCkge1xuICAgIGxldCBtYXRjaCA9IHdpbmRvdy5tYXRjaE1lZGlhKHRoaXMuY3JlYXRlUXVlcnkobWluLCBtYXgpKTtcbiAgICByZXR1cm4gbWF0Y2ggJiYgbWF0Y2gubWF0Y2hlcztcbiAgfVxuXG4gIGNyZWF0ZUxpc3RlbmVyKCkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2UodXBkYXRlLCAyMDApKTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcbiAgICAgIGxldCBjdXJyZW50ID0gc2VsZi5jaGVja1NpemUoKTtcbiAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgIGxldCBtZWRpYSA9IHNlbGYucXVlcmllc1tjdXJyZW50XTtcbiAgICAgICAgbGV0IHNjcmVlbiA9IHdpbmRvdy5zY3JlZW47XG4gICAgICAgIHNlbGYuZXZlbnRMaXN0ZW5lcnMuZm9yRWFjaChjYiA9PiBjYih7bWVkaWEsIHNjcmVlbn0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XG4gIGxldCB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgbGV0IGNvbnRleHQgPSB0aGlzO1xuICAgIGxldCBhcmdzID0gYXJndW1lbnRzO1xuICAgIGxldCBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBpZiAoIWltbWVkaWF0ZSkgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcbiAgICB9O1xuICAgIGxldCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
