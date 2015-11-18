System.register(['aurelia-framework', './util', 'aurelia-pal', 'commonmark'], function (_export) {
  'use strict';

  var bindable, processContent, noView, inject, fixIndent, DOM, commonmark, Narrative, reader, writer;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function handleMarkdown(compiler, resources, element, instruction) {
    var markdown = unescape(element.innerHTML);
    markdown = fixIndent(markdown);
    markdown = fixBlockQuotes(markdown);
    element.innerHTML = getHtml(markdown);
    updateAnchorTargets(element);
    return true;
  }

  function checkDomain(url) {
    if (url.indexOf('//') === 0) {
      url = location.protocol + url;
    }
    return url.toLowerCase().replace(/([a-z])?:\/\//, '$1').split('/')[0];
  }

  function isExternalLink(url) {
    return (url.indexOf(':') > -1 || url.indexOf('//') > -1) && checkDomain(location.href) !== checkDomain(url);
  }

  function getHtml(markdown) {
    return writer.render(reader.parse(markdown));
  }

  function fixBlockQuotes(markdown) {
    return markdown.replace(/^(\s*)&gt;/gim, function (match, p1) {
      return p1 + '>';
    });
  }

  function updateAnchorTargets(element) {
    var anchors = element.getElementsByTagName('a');

    for (var i = 0, ii = anchors.length; i < ii; i++) {
      if (isExternalLink(anchors[i].href)) {
        anchors[i].target = '_blank';
      }
    }
  }
  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      processContent = _aureliaFramework.processContent;
      noView = _aureliaFramework.noView;
      inject = _aureliaFramework.inject;
    }, function (_util) {
      fixIndent = _util.fixIndent;
    }, function (_aureliaPal) {
      DOM = _aureliaPal.DOM;
    }, function (_commonmark) {
      commonmark = _commonmark['default'];
    }],
    execute: function () {
      Narrative = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Narrative, [{
          key: 'format',
          decorators: [bindable],
          initializer: function initializer() {
            return 'markdown';
          },
          enumerable: true
        }, {
          key: 'version',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'uid',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'versionMatches',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }, {
          key: 'title',
          decorators: [bindable],
          initializer: null,
          enumerable: true
        }], null, _instanceInitializers);

        function Narrative(element) {
          _classCallCheck(this, _Narrative);

          _defineDecoratedPropertyDescriptor(this, 'format', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'version', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'uid', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'versionMatches', _instanceInitializers);

          _defineDecoratedPropertyDescriptor(this, 'title', _instanceInitializers);

          this.titleElement = DOM.createElement('h2');

          this.element = element;
        }

        _createDecoratedClass(Narrative, [{
          key: 'attached',
          value: function attached() {
            if (this.title) {
              this.titleElement.innerHTML = this.title;
              this.element.insertBefore(this.titleElement, this.element.firstChild);
            }
          }
        }], null, _instanceInitializers);

        var _Narrative = Narrative;
        Narrative = inject(Element)(Narrative) || Narrative;
        Narrative = processContent(handleMarkdown)(Narrative) || Narrative;
        return Narrative;
      })();

      _export('Narrative', Narrative);

      reader = new commonmark.Parser();
      writer = new commonmark.HtmlRenderer();
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFydGljbGUvbGFuZ3VhZ2UvbmFycmF0aXZlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs0RUFPYSxTQUFTLEVBcUJsQixNQUFNLEVBQ04sTUFBTTs7Ozs7Ozs7QUFFVixXQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUU7QUFDakUsUUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMzQyxZQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQy9CLFlBQVEsR0FBRyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDcEMsV0FBTyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEMsdUJBQW1CLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDN0IsV0FBTyxJQUFJLENBQUM7R0FDYjs7QUFFRCxXQUFTLFdBQVcsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsUUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRztBQUM1QixTQUFHLEdBQUcsUUFBUSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7S0FDL0I7QUFDRCxXQUFPLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztHQUN0RTs7QUFFRCxXQUFTLGNBQWMsQ0FBQyxHQUFHLEVBQUU7QUFDM0IsV0FBUyxDQUFFLEdBQUcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxJQUFNLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFHO0dBQ25IOztBQUVELFdBQVMsT0FBTyxDQUFDLFFBQVEsRUFBRTtBQUN6QixXQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0dBQzlDOztBQUVELFdBQVMsY0FBYyxDQUFDLFFBQVEsRUFBRTtBQUNoQyxXQUFPLFFBQVEsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLFVBQUMsS0FBSyxFQUFFLEVBQUU7YUFBSyxFQUFFLEdBQUcsR0FBRztLQUFBLENBQUMsQ0FBQztHQUNuRTs7QUFFRCxXQUFTLG1CQUFtQixDQUFDLE9BQU8sRUFBRTtBQUVwQyxRQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUM7O0FBRWhELFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7QUFDaEQsVUFBSSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ25DLGVBQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO09BQzlCO0tBQ0Y7R0FDRjs7O21DQXBFTyxRQUFRO3lDQUFFLGNBQWM7aUNBQUUsTUFBTTtpQ0FBRSxNQUFNOzt3QkFDeEMsU0FBUzs7d0JBQ1QsR0FBRzs7Ozs7QUFLRSxlQUFTOzs7OzhCQUFULFNBQVM7O3VCQUNuQixRQUFROzttQkFBVSxVQUFVOzs7Ozt1QkFDNUIsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7dUJBQ1IsUUFBUTs7Ozs7QUFJRSxpQkFUQSxTQUFTLENBU1IsT0FBTyxFQUFFOzs7Ozs7Ozs7Ozs7O2VBRnJCLFlBQVksR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQzs7QUFHcEMsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7OzhCQVhVLFNBQVM7O2lCQWFaLG9CQUFHO0FBQ1QsZ0JBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNkLGtCQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO0FBQ3pDLGtCQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdkU7V0FDRjs7O3lCQWxCVSxTQUFTO0FBQVQsaUJBQVMsR0FEckIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILFNBQVMsS0FBVCxTQUFTO0FBQVQsaUJBQVMsR0FGckIsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUVsQixTQUFTLEtBQVQsU0FBUztlQUFULFNBQVM7Ozs7O0FBcUJsQixZQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQ2hDLFlBQU0sR0FBRyxJQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQUUiLCJmaWxlIjoiYXJ0aWNsZS9sYW5ndWFnZS9uYXJyYXRpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBwcm9jZXNzQ29udGVudCwgbm9WaWV3LCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7Zml4SW5kZW50fSBmcm9tICcuL3V0aWwnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCBjb21tb25tYXJrIGZyb20gJ2NvbW1vbm1hcmsnO1xuXG5AcHJvY2Vzc0NvbnRlbnQoaGFuZGxlTWFya2Rvd24pXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgTmFycmF0aXZlIHtcbiAgQGJpbmRhYmxlIGZvcm1hdCA9ICdtYXJrZG93bic7XG4gIEBiaW5kYWJsZSB2ZXJzaW9uO1xuICBAYmluZGFibGUgdWlkO1xuICBAYmluZGFibGUgdmVyc2lvbk1hdGNoZXM7XG4gIEBiaW5kYWJsZSB0aXRsZTtcblxuICB0aXRsZUVsZW1lbnQgPSBET00uY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICh0aGlzLnRpdGxlKSB7XG4gICAgICB0aGlzLnRpdGxlRWxlbWVudC5pbm5lckhUTUwgPSB0aGlzLnRpdGxlO1xuICAgICAgdGhpcy5lbGVtZW50Lmluc2VydEJlZm9yZSh0aGlzLnRpdGxlRWxlbWVudCwgdGhpcy5lbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxufVxuXG5sZXQgcmVhZGVyID0gbmV3IGNvbW1vbm1hcmsuUGFyc2VyKCk7XG5sZXQgd3JpdGVyID0gbmV3IGNvbW1vbm1hcmsuSHRtbFJlbmRlcmVyKCk7XG5cbmZ1bmN0aW9uIGhhbmRsZU1hcmtkb3duKGNvbXBpbGVyLCByZXNvdXJjZXMsIGVsZW1lbnQsIGluc3RydWN0aW9uKSB7XG4gIGxldCBtYXJrZG93biA9IHVuZXNjYXBlKGVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgbWFya2Rvd24gPSBmaXhJbmRlbnQobWFya2Rvd24pO1xuICBtYXJrZG93biA9IGZpeEJsb2NrUXVvdGVzKG1hcmtkb3duKTtcbiAgZWxlbWVudC5pbm5lckhUTUwgPSBnZXRIdG1sKG1hcmtkb3duKTtcbiAgdXBkYXRlQW5jaG9yVGFyZ2V0cyhlbGVtZW50KTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNoZWNrRG9tYWluKHVybCkge1xuICBpZiAodXJsLmluZGV4T2YoJy8vJykgPT09IDAgKSB7XG4gICAgdXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyB1cmw7XG4gIH1cbiAgcmV0dXJuIHVybC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLyhbYS16XSk/OlxcL1xcLy8sJyQxJykuc3BsaXQoJy8nKVswXTtcbn1cblxuZnVuY3Rpb24gaXNFeHRlcm5hbExpbmsodXJsKSB7XG4gIHJldHVybiAoICggdXJsLmluZGV4T2YoJzonKSA+IC0xIHx8IHVybC5pbmRleE9mKCcvLycpID4gLTEgKSAmJiBjaGVja0RvbWFpbihsb2NhdGlvbi5ocmVmKSAhPT0gY2hlY2tEb21haW4odXJsKSApO1xufVxuXG5mdW5jdGlvbiBnZXRIdG1sKG1hcmtkb3duKSB7XG4gIHJldHVybiB3cml0ZXIucmVuZGVyKHJlYWRlci5wYXJzZShtYXJrZG93bikpO1xufVxuXG5mdW5jdGlvbiBmaXhCbG9ja1F1b3RlcyhtYXJrZG93bikge1xuICByZXR1cm4gbWFya2Rvd24ucmVwbGFjZSgvXihcXHMqKSZndDsvZ2ltLCAobWF0Y2gsIHAxKSA9PiBwMSArICc+Jyk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUFuY2hvclRhcmdldHMoZWxlbWVudCkge1xuICAvLyBleHRlcm5hbCBsaW5rcyBuZWVkIHRhcmdldD1cIl9ibGFua1wiXG4gIGxldCBhbmNob3JzID0gZWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpO1xuXG4gIGZvciAobGV0IGkgPSAwLCBpaSA9IGFuY2hvcnMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgIGlmIChpc0V4dGVybmFsTGluayhhbmNob3JzW2ldLmhyZWYpKSB7XG4gICAgICBhbmNob3JzW2ldLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
