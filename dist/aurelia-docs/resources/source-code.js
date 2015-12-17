System.register(['aurelia-dependency-injection', 'aurelia-templating', 'aurelia-framework', 'aurelia-path', 'aurelia-loader'], function (_export) {
  'use strict';

  var inject, Container, bindable, processContent, noView, TargetInstruction, Aurelia, join, Loader, SourceCode;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function extractRawSource(compiler, resources, element, instruction) {
    instruction.raw = unescape(element.innerHTML);
    element.innerHTML = '';
    return false;
  }
  return {
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
      Container = _aureliaDependencyInjection.Container;
    }, function (_aureliaTemplating) {
      bindable = _aureliaTemplating.bindable;
      processContent = _aureliaTemplating.processContent;
      noView = _aureliaTemplating.noView;
      TargetInstruction = _aureliaTemplating.TargetInstruction;
    }, function (_aureliaFramework) {
      Aurelia = _aureliaFramework.Aurelia;
    }, function (_aureliaPath) {
      join = _aureliaPath.join;
    }, function (_aureliaLoader) {
      Loader = _aureliaLoader.Loader;
    }],
    execute: function () {
      SourceCode = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(SourceCode, [{
          key: 'src',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'lang',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function SourceCode(instruction, loader) {
          _classCallCheck(this, _SourceCode);

          _defineDecoratedPropertyDescriptor(this, 'src', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'lang', _instanceInitializers);

          this.raw = instruction.elementInstruction.raw;
          this.loader = loader;
        }

        _createDecoratedClass(SourceCode, [{
          key: 'bind',
          value: function bind(context) {
            if (this.src) {
              this.path = join(context.url, '../../../' + this.src);
              if (context.local) {
                this.path = './' + this.path;
              }
            }
          }
        }, {
          key: 'loadText',
          value: function loadText() {
            var _this = this;

            if (this.path) {
              return this.loader.loadText(this.path).then(function (x) {
                return _this.raw = x;
              });
            }

            return Promise.resolve(this.raw);
          }
        }, {
          key: 'createApp',
          value: function createApp(host) {
            var _this2 = this;

            this.app = new Aurelia(this.loader, new Container());
            this.app.use.standardConfiguration();
            this.app.start().then(function (a) {
              return a.setRoot(_this2.path, host);
            });
          }
        }], null, _instanceInitializers);

        var _SourceCode = SourceCode;
        SourceCode = inject(TargetInstruction, Loader)(SourceCode) || SourceCode;
        SourceCode = processContent(extractRawSource)(SourceCode) || SourceCode;
        SourceCode = noView()(SourceCode) || SourceCode;
        return SourceCode;
      })();

      _export('SourceCode', SourceCode);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvc291cmNlLWNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FHQVNhLFVBQVU7Ozs7Ozs7O0FBaUN2QixXQUFTLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNuRSxlQUFXLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsV0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDdkIsV0FBTyxLQUFLLENBQUM7R0FDZDs7OzJDQTlDTyxNQUFNOzhDQUFFLFNBQVM7O29DQUNqQixRQUFROzBDQUFFLGNBQWM7a0NBQUUsTUFBTTs2Q0FBRSxpQkFBaUI7O2tDQUNuRCxPQUFPOzswQkFDUCxJQUFJOzs4QkFDSixNQUFNOzs7QUFLRCxnQkFBVTs7Ozs4QkFBVixVQUFVOzt1QkFDcEIsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7QUFFRSxpQkFKQSxVQUFVLENBSVQsV0FBVyxFQUFFLE1BQU0sRUFBRTs7Ozs7OztBQUMvQixjQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7QUFDOUMsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7OzhCQVBVLFVBQVU7O2lCQVNqQixjQUFDLE9BQU8sRUFBRTtBQUNaLGdCQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDWixrQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELGtCQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDakIsb0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7ZUFDOUI7YUFDRjtXQUNGOzs7aUJBRU8sb0JBQUc7OztBQUNULGdCQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDYixxQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxNQUFLLEdBQUcsR0FBRyxDQUFDO2VBQUEsQ0FBQyxDQUFDO2FBQ2hFOztBQUVELG1CQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQ2xDOzs7aUJBRVEsbUJBQUMsSUFBSSxFQUFFOzs7QUFDZCxnQkFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNyRCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNyQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO3FCQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQUEsQ0FBQyxDQUFDO1dBQ3hEOzs7MEJBOUJVLFVBQVU7QUFBVixrQkFBVSxHQUR0QixNQUFNLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQ3JCLFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBRXBCLFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FIdEIsTUFBTSxFQUFFLENBR0ksVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVIiwiZmlsZSI6ImF1cmVsaWEtZG9jcy9yZXNvdXJjZXMvc291cmNlLWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgQ29udGFpbmVyfSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7YmluZGFibGUsIHByb2Nlc3NDb250ZW50LCBub1ZpZXcsIFRhcmdldEluc3RydWN0aW9ufSBmcm9tICdhdXJlbGlhLXRlbXBsYXRpbmcnO1xuaW1wb3J0IHtBdXJlbGlhfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5pbXBvcnQge2pvaW59IGZyb20gJ2F1cmVsaWEtcGF0aCc7XG5pbXBvcnQge0xvYWRlcn0gZnJvbSAnYXVyZWxpYS1sb2FkZXInO1xuXG5Abm9WaWV3KClcbkBwcm9jZXNzQ29udGVudChleHRyYWN0UmF3U291cmNlKVxuQGluamVjdChUYXJnZXRJbnN0cnVjdGlvbiwgTG9hZGVyKVxuZXhwb3J0IGNsYXNzIFNvdXJjZUNvZGUge1xuICBAYmluZGFibGUgc3JjO1xuICBAYmluZGFibGUgbGFuZztcblxuICBjb25zdHJ1Y3RvcihpbnN0cnVjdGlvbiwgbG9hZGVyKSB7XG4gICAgdGhpcy5yYXcgPSBpbnN0cnVjdGlvbi5lbGVtZW50SW5zdHJ1Y3Rpb24ucmF3O1xuICAgIHRoaXMubG9hZGVyID0gbG9hZGVyO1xuICB9XG5cbiAgYmluZChjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMuc3JjKSB7XG4gICAgICB0aGlzLnBhdGggPSBqb2luKGNvbnRleHQudXJsLCAnLi4vLi4vLi4vJyArIHRoaXMuc3JjKTtcbiAgICAgIGlmIChjb250ZXh0LmxvY2FsKSB7XG4gICAgICAgIHRoaXMucGF0aCA9ICcuLycgKyB0aGlzLnBhdGg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbG9hZFRleHQoKSB7XG4gICAgaWYgKHRoaXMucGF0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubG9hZGVyLmxvYWRUZXh0KHRoaXMucGF0aCkudGhlbih4ID0+IHRoaXMucmF3ID0geCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnJhdyk7XG4gIH1cblxuICBjcmVhdGVBcHAoaG9zdCkge1xuICAgIHRoaXMuYXBwID0gbmV3IEF1cmVsaWEodGhpcy5sb2FkZXIsIG5ldyBDb250YWluZXIoKSk7XG4gICAgdGhpcy5hcHAudXNlLnN0YW5kYXJkQ29uZmlndXJhdGlvbigpO1xuICAgIHRoaXMuYXBwLnN0YXJ0KCkudGhlbihhID0+IGEuc2V0Um9vdCh0aGlzLnBhdGgsIGhvc3QpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBleHRyYWN0UmF3U291cmNlKGNvbXBpbGVyLCByZXNvdXJjZXMsIGVsZW1lbnQsIGluc3RydWN0aW9uKSB7XG4gIGluc3RydWN0aW9uLnJhdyA9IHVuZXNjYXBlKGVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSAnJztcbiAgcmV0dXJuIGZhbHNlO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
