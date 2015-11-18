System.register(['aurelia-framework', 'aurelia-path', 'aurelia-loader'], function (_export) {
  'use strict';

  var inject, bindable, processContent, noView, TargetInstruction, Aurelia, Container, join, Loader, SourceCode;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function extractRawSource(compiler, resources, element, instruction) {
    instruction.raw = unescape(element.innerHTML);
    element.innerHTML = '';
    return false;
  }
  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      bindable = _aureliaFramework.bindable;
      processContent = _aureliaFramework.processContent;
      noView = _aureliaFramework.noView;
      TargetInstruction = _aureliaFramework.TargetInstruction;
      Aurelia = _aureliaFramework.Aurelia;
      Container = _aureliaFramework.Container;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbGFuZ3VhZ2Uvc291cmNlLWNvZGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3FHQU9hLFVBQVU7Ozs7Ozs7O0FBaUN2QixXQUFTLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRTtBQUNuRSxlQUFXLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDOUMsV0FBTyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7QUFDdkIsV0FBTyxLQUFLLENBQUM7R0FDZDs7O2lDQTVDTyxNQUFNO21DQUFFLFFBQVE7eUNBQUUsY0FBYztpQ0FBRSxNQUFNOzRDQUFFLGlCQUFpQjtrQ0FBRSxPQUFPO29DQUFFLFNBQVM7OzBCQUMvRSxJQUFJOzs4QkFDSixNQUFNOzs7QUFLRCxnQkFBVTs7Ozs4QkFBVixVQUFVOzt1QkFDcEIsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7QUFFRSxpQkFKQSxVQUFVLENBSVQsV0FBVyxFQUFFLE1BQU0sRUFBRTs7Ozs7OztBQUMvQixjQUFJLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUM7QUFDOUMsY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7OzhCQVBVLFVBQVU7O2lCQVNqQixjQUFDLE9BQU8sRUFBRTtBQUNaLGdCQUFJLElBQUksQ0FBQyxHQUFHLEVBQUU7QUFDWixrQkFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3RELGtCQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7QUFDakIsb0JBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7ZUFDOUI7YUFDRjtXQUNGOzs7aUJBRU8sb0JBQUc7OztBQUNULGdCQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDYixxQkFBTyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzt1QkFBSSxNQUFLLEdBQUcsR0FBRyxDQUFDO2VBQUEsQ0FBQyxDQUFDO2FBQ2hFOztBQUVELG1CQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1dBQ2xDOzs7aUJBRVEsbUJBQUMsSUFBSSxFQUFFOzs7QUFDZCxnQkFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksU0FBUyxFQUFFLENBQUMsQ0FBQztBQUNyRCxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztBQUNyQyxnQkFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDO3FCQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBSyxJQUFJLEVBQUUsSUFBSSxDQUFDO2FBQUEsQ0FBQyxDQUFDO1dBQ3hEOzs7MEJBOUJVLFVBQVU7QUFBVixrQkFBVSxHQUR0QixNQUFNLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQ3JCLFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FGdEIsY0FBYyxDQUFDLGdCQUFnQixDQUFDLENBRXBCLFVBQVUsS0FBVixVQUFVO0FBQVYsa0JBQVUsR0FIdEIsTUFBTSxFQUFFLENBR0ksVUFBVSxLQUFWLFVBQVU7ZUFBVixVQUFVIiwiZmlsZSI6ImFydGljbGUvbGFuZ3VhZ2Uvc291cmNlLWNvZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2luamVjdCwgYmluZGFibGUsIHByb2Nlc3NDb250ZW50LCBub1ZpZXcsIFRhcmdldEluc3RydWN0aW9uLCBBdXJlbGlhLCBDb250YWluZXJ9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7am9pbn0gZnJvbSAnYXVyZWxpYS1wYXRoJztcbmltcG9ydCB7TG9hZGVyfSBmcm9tICdhdXJlbGlhLWxvYWRlcic7XG5cbkBub1ZpZXcoKVxuQHByb2Nlc3NDb250ZW50KGV4dHJhY3RSYXdTb3VyY2UpXG5AaW5qZWN0KFRhcmdldEluc3RydWN0aW9uLCBMb2FkZXIpXG5leHBvcnQgY2xhc3MgU291cmNlQ29kZSB7XG4gIEBiaW5kYWJsZSBzcmM7XG4gIEBiaW5kYWJsZSBsYW5nO1xuXG4gIGNvbnN0cnVjdG9yKGluc3RydWN0aW9uLCBsb2FkZXIpIHtcbiAgICB0aGlzLnJhdyA9IGluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbi5yYXc7XG4gICAgdGhpcy5sb2FkZXIgPSBsb2FkZXI7XG4gIH1cblxuICBiaW5kKGNvbnRleHQpIHtcbiAgICBpZiAodGhpcy5zcmMpIHtcbiAgICAgIHRoaXMucGF0aCA9IGpvaW4oY29udGV4dC51cmwsICcuLi8uLi8uLi8nICsgdGhpcy5zcmMpO1xuICAgICAgaWYgKGNvbnRleHQubG9jYWwpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gJy4vJyArIHRoaXMucGF0aDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkVGV4dCgpIHtcbiAgICBpZiAodGhpcy5wYXRoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sb2FkZXIubG9hZFRleHQodGhpcy5wYXRoKS50aGVuKHggPT4gdGhpcy5yYXcgPSB4KTtcbiAgICB9XG5cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMucmF3KTtcbiAgfVxuXG4gIGNyZWF0ZUFwcChob3N0KSB7XG4gICAgdGhpcy5hcHAgPSBuZXcgQXVyZWxpYSh0aGlzLmxvYWRlciwgbmV3IENvbnRhaW5lcigpKTtcbiAgICB0aGlzLmFwcC51c2Uuc3RhbmRhcmRDb25maWd1cmF0aW9uKCk7XG4gICAgdGhpcy5hcHAuc3RhcnQoKS50aGVuKGEgPT4gYS5zZXRSb290KHRoaXMucGF0aCwgaG9zdCkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV4dHJhY3RSYXdTb3VyY2UoY29tcGlsZXIsIHJlc291cmNlcywgZWxlbWVudCwgaW5zdHJ1Y3Rpb24pIHtcbiAgaW5zdHJ1Y3Rpb24ucmF3ID0gdW5lc2NhcGUoZWxlbWVudC5pbm5lckhUTUwpO1xuICBlbGVtZW50LmlubmVySFRNTCA9ICcnO1xuICByZXR1cm4gZmFsc2U7XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
