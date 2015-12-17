/* */ 
define(['exports', 'aurelia-pal'], function (exports, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  exports.getau = getau;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function getau(elements) {
    if (elements instanceof _aureliaPal.DOM.Element) {
      return elements.au ? elements.au.controller.viewModel : elements;
    }
    return Array.prototype.map.call(elements, function (node) {
      return node.au ? node.au.controller.viewModel : node;
    });
  }

  var AISidebarContentProcessing = (function () {
    function AISidebarContentProcessing() {
      _classCallCheck(this, AISidebarContentProcessing);
    }

    _createClass(AISidebarContentProcessing, null, [{
      key: 'sidebar',
      value: function sidebar(compiler, resources, element, instruction) {
        var content = undefined;
        var factory = undefined;
        var fragment = undefined;
        var node = undefined;

        node = _aureliaPal.DOM.createElement('sidebar-content');
        node.classList.add('au-animate');

        fragment = _aureliaPal.DOM.createDocumentFragment();
        fragment.appendChild(node);

        content = element.firstChild;

        while (content) {
          node.appendChild(content);
          content = node.nextSibling || element.firstChild;
        }

        factory = compiler.compile(fragment, resources);
        instruction.sidebarContentFactory = factory;

        return true;
      }
    }]);

    return AISidebarContentProcessing;
  })();

  exports.AISidebarContentProcessing = AISidebarContentProcessing;

  var AIDialogContentProcessing = (function () {
    function AIDialogContentProcessing() {
      _classCallCheck(this, AIDialogContentProcessing);
    }

    _createClass(AIDialogContentProcessing, null, [{
      key: 'container',
      value: function container(compiler, resources, element, instruction) {
        var fragment = _aureliaPal.DOM.createDocumentFragment();

        var node = _aureliaPal.DOM.createElement('ai-overlay');
        node.classList.add('au-animate');

        fragment.appendChild(node);

        var factory = compiler.compile(fragment, resources);
        instruction.overlayFactory = factory;
        return true;
      }
    }, {
      key: 'dialog',
      value: function dialog(compiler, resources, element, instruction) {
        var node = undefined;
        var container = undefined;
        var fragment = undefined;
        var factory = undefined;
        var current = undefined;

        node = _aureliaPal.DOM.createElement('ai-dialog-content');
        node.classList.add('au-animate');

        container = _aureliaPal.DOM.createElement('ai-dialog-container');
        container.classList.add('au-animate');
        container.setAttribute('touch.call', 'onTouch($event)');
        container.appendChild(node);

        fragment = _aureliaPal.DOM.createDocumentFragment();
        fragment.appendChild(container);

        current = element.firstChild;
        while (current) {
          node.appendChild(current);
          current = current.nextSibling || element.firstChild;
        }

        factory = compiler.compile(fragment, resources);
        instruction.dialogFactory = factory;
        return false;
      }
    }]);

    return AIDialogContentProcessing;
  })();

  exports.AIDialogContentProcessing = AIDialogContentProcessing;

  var AINavbarContentProcessing = (function () {
    function AINavbarContentProcessing() {
      _classCallCheck(this, AINavbarContentProcessing);
    }

    _createClass(AINavbarContentProcessing, null, [{
      key: 'navbar',
      value: function navbar(compiler, resources, element, instruction) {
        instruction.appBarContentFactory = AINavbarContentProcessing.navbarSlot(compiler, resources, element, instruction);
        instruction.indicatorFactory = AINavbarContentProcessing.indicator(compiler, resources, element, instruction);
        return true;
      }
    }, {
      key: 'navbarSlot',
      value: function navbarSlot(compiler, resources, element, instruction) {
        var factory = undefined;
        var fragment = undefined;
        var node = undefined;
        var content = undefined;
        var attributes = undefined;
        var attr = undefined;
        var deselect = undefined;

        node = _aureliaPal.DOM.createElement('ai-navbar');
        node.classList.add('au-animate');

        fragment = _aureliaPal.DOM.createDocumentFragment();
        fragment.appendChild(node);

        deselect = {
          'ref': true,
          'ai-navbar-slot.ref': true
        };

        attributes = Array.prototype.slice.call(element.attributes);
        while (attr = attributes.pop()) {
          if (!deselect[attr.nodeName]) {
            node.setAttribute(attr.nodeName, attr.nodeValue);
          }
        }

        content = element.firstChild;
        while (content) {
          node.appendChild(content);
          content = content.nextSibling || element.firstChild;
        }
        factory = compiler.compile(fragment, resources);
        return factory;
      }
    }, {
      key: 'indicator',
      value: function indicator(compiler, resources, element, instruction) {
        var fragment = undefined;
        var factory = undefined;
        var node = undefined;

        fragment = _aureliaPal.DOM.createDocumentFragment();
        node = _aureliaPal.DOM.createElement('navbar-indicator');
        fragment.appendChild(node);

        factory = compiler.compile(fragment, resources);
        return factory;
      }
    }]);

    return AINavbarContentProcessing;
  })();

  exports.AINavbarContentProcessing = AINavbarContentProcessing;

  var AICollectionContentProcessing = function AICollectionContentProcessing() {
    _classCallCheck(this, AICollectionContentProcessing);
  };

  exports.AICollectionContentProcessing = AICollectionContentProcessing;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvY29udGVudC1wcm9jZXNzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFTyxXQUFTLEtBQUssQ0FBQyxRQUFRLEVBQUU7QUFDOUIsUUFBSSxRQUFRLFlBQVksWUFIbEIsR0FBRyxDQUdtQixPQUFPLEVBQUU7QUFDbkMsYUFBTyxRQUFRLENBQUMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7S0FDbEU7QUFDRCxXQUFPLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBQyxJQUFJLEVBQUk7QUFDakQsYUFBTyxJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7S0FDdEQsQ0FBQyxDQUFBO0dBQ0g7O01BR1ksMEJBQTBCO2FBQTFCLDBCQUEwQjs0QkFBMUIsMEJBQTBCOzs7aUJBQTFCLDBCQUEwQjs7YUFDdkIsaUJBQUMsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFO0FBQ3hELFlBQUksT0FBTyxZQUFBLENBQUM7QUFDWixZQUFJLE9BQU8sWUFBQSxDQUFDO0FBQ1osWUFBSSxRQUFRLFlBQUEsQ0FBQztBQUNiLFlBQUksSUFBSSxZQUFBLENBQUM7O0FBRVQsWUFBSSxHQUFHLFlBbkJILEdBQUcsQ0FtQkksYUFBYSxDQUFDLGlCQUFpQixDQUFDLENBQUM7QUFDNUMsWUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7O0FBRWpDLGdCQUFRLEdBQUcsWUF0QlAsR0FBRyxDQXNCUSxzQkFBc0IsRUFBRSxDQUFDO0FBQ3hDLGdCQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUUzQixlQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQzs7QUFFN0IsZUFBTSxP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O1dBQ2xEO1NBQ0Y7O0FBR0QsZUFBTyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUM7QUFDN0IsZUFBTSxPQUFPLEVBQUU7QUFDYixjQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzFCLGlCQUFPLEdBQUcsT0FBTyxDQUFDLFdBQVcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDO1NBQ3JEO0FBQ0QsZUFBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELGVBQU8sT0FBTyxDQUFDO09BQ2hCOzs7YUFFZSxtQkFBQyxRQUFxQixFQUFFLFNBQXVCLEVBQUUsT0FBbUIsRUFBRSxXQUErQixFQUFlO0FBQ2xJLFlBQUksUUFBUSxZQUFBLENBQUM7QUFDYixZQUFJLE9BQU8sWUFBQSxDQUFDO0FBQ1osWUFBSSxJQUFJLFlBQUEsQ0FBQzs7QUFFVCxnQkFBUSxHQUFHLFlBdkpQLEdBQUcsQ0F1SlEsc0JBQXNCLEVBQUUsQ0FBQztBQUN4QyxZQUFJLEdBQU8sWUF4SlAsR0FBRyxDQXdKUSxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUNqRCxnQkFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFM0IsZUFBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELGVBQU8sT0FBTyxDQUFDO09BQ2hCOzs7V0F2RVUseUJBQXlCOzs7OztNQTJFekIsNkJBQTZCLFlBQTdCLDZCQUE2QjswQkFBN0IsNkJBQTZCIiwiZmlsZSI6ImNvbXBvbmVudHMvY29udGVudC1wcm9jZXNzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcblxuZXhwb3J0IGZ1bmN0aW9uIGdldGF1KGVsZW1lbnRzKSB7XG4gIGlmIChlbGVtZW50cyBpbnN0YW5jZW9mIERPTS5FbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRzLmF1ID8gZWxlbWVudHMuYXUuY29udHJvbGxlci52aWV3TW9kZWwgOiBlbGVtZW50cztcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKGVsZW1lbnRzLCAobm9kZSk9PiB7XG4gICAgcmV0dXJuIG5vZGUuYXUgPyBub2RlLmF1LmNvbnRyb2xsZXIudmlld01vZGVsIDogbm9kZTtcbiAgfSlcbn1cblxuXG5leHBvcnQgY2xhc3MgQUlTaWRlYmFyQ29udGVudFByb2Nlc3Npbmcge1xuICBzdGF0aWMgc2lkZWJhcihjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbikge1xuICAgIGxldCBjb250ZW50O1xuICAgIGxldCBmYWN0b3J5O1xuICAgIGxldCBmcmFnbWVudDtcbiAgICBsZXQgbm9kZTtcblxuICAgIG5vZGUgPSBET00uY3JlYXRlRWxlbWVudCgnc2lkZWJhci1jb250ZW50Jyk7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdhdS1hbmltYXRlJyk7XG5cbiAgICBmcmFnbWVudCA9IERPTS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICBjb250ZW50ID0gZWxlbWVudC5maXJzdENoaWxkO1xuXG4gICAgd2hpbGUoY29udGVudCkge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgIGNvbnRlbnQgPSBub2RlLm5leHRTaWJsaW5nIHx8IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICB9XG5cbiAgICBmYWN0b3J5ID0gY29tcGlsZXIuY29tcGlsZShmcmFnbWVudCwgcmVzb3VyY2VzKTtcbiAgICBpbnN0cnVjdGlvbi5zaWRlYmFyQ29udGVudEZhY3RvcnkgPSBmYWN0b3J5O1xuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFJRGlhbG9nQ29udGVudFByb2Nlc3Npbmcge1xuXG4gIHN0YXRpYyBjb250YWluZXIoY29tcGlsZXIsIHJlc291cmNlcywgZWxlbWVudCwgaW5zdHJ1Y3Rpb24pIHtcbiAgICBsZXQgZnJhZ21lbnQgPSBET00uY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgbGV0IG5vZGUgPSBET00uY3JlYXRlRWxlbWVudCgnYWktb3ZlcmxheScpO1xuICAgICAgICBub2RlLmNsYXNzTGlzdC5hZGQoJ2F1LWFuaW1hdGUnKTtcblxuICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKG5vZGUpO1xuXG4gICAgbGV0IGZhY3RvcnkgID0gY29tcGlsZXIuY29tcGlsZShmcmFnbWVudCwgcmVzb3VyY2VzKTtcbiAgICBpbnN0cnVjdGlvbi5vdmVybGF5RmFjdG9yeSA9IGZhY3Rvcnk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgZGlhbG9nKGNvbXBpbGVyLCByZXNvdXJjZXMsIGVsZW1lbnQsIGluc3RydWN0aW9uKSB7XG4gICAgbGV0IG5vZGU7XG4gICAgbGV0IGNvbnRhaW5lcjtcbiAgICBsZXQgZnJhZ21lbnQ7XG4gICAgbGV0IGZhY3Rvcnk7XG4gICAgbGV0IGN1cnJlbnQ7XG5cbiAgICBub2RlID0gRE9NLmNyZWF0ZUVsZW1lbnQoJ2FpLWRpYWxvZy1jb250ZW50Jyk7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdhdS1hbmltYXRlJyk7XG5cbiAgICBjb250YWluZXIgPSBET00uY3JlYXRlRWxlbWVudCgnYWktZGlhbG9nLWNvbnRhaW5lcicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhdS1hbmltYXRlJyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgndG91Y2guY2FsbCcsICdvblRvdWNoKCRldmVudCknKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICBmcmFnbWVudCA9IERPTS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgIGN1cnJlbnQgPSBlbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgd2hpbGUoY3VycmVudCkge1xuICAgICAgbm9kZS5hcHBlbmRDaGlsZChjdXJyZW50KTtcbiAgICAgIGN1cnJlbnQgPSBjdXJyZW50Lm5leHRTaWJsaW5nIHx8IGVsZW1lbnQuZmlyc3RDaGlsZDtcbiAgICB9XG5cbiAgICBmYWN0b3J5ID0gY29tcGlsZXIuY29tcGlsZShmcmFnbWVudCwgcmVzb3VyY2VzKTtcbiAgICBpbnN0cnVjdGlvbi5kaWFsb2dGYWN0b3J5ID0gZmFjdG9yeTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuXG5cbmV4cG9ydCBjbGFzcyBBSU5hdmJhckNvbnRlbnRQcm9jZXNzaW5nIHtcblxuICAvKipcbiAgICogQHN0YXRpYygpOiBuYXZiYXJcbiAgICogY3JlYXRzIHRoZSBhcHBCYXJDb250ZW50RmFjdG9yeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogICBjcmVhdGVzIGEgRE9NIEZyYWdtZW50XG4gICAqICAgY3JlYXRlcyBhIERPTSBFbGVtZW50IDxuYXZiYXItc2xvdD5cbiAgICogICBhcHBlbmRzIGFsbCBjaGlsZG5vZGVzIHRvIHRoZSBET00gRWxlbWVudFxuICAgKiAgIGFwcGVuZCB0aGUgRE9NIEVsZW1lbnQgdG8gdGhlIERPTSBGcmFnbWVudFxuICAgKiAgIGNyZWF0ZXMgYSB2aWV3RmFjdG9yeSBvbiBUYXJnZXRJbnN0cnVjdGlvbiBjYWxsZWQgYXBwQmFyQ29udGVudEZhY3RvcnlcbiAgICpcbiAgICogY3JlYXRlcyB0aGUgbmF2YmFySW5kaWNhdG9yRmFjdG9yeVxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqXG4gICAqIEB0eXBlIHtbdHlwZV19XG4gICAqL1xuICBzdGF0aWMgbmF2YmFyKGNvbXBpbGVyOlZpZXdDb21waWxlciwgcmVzb3VyY2VzOlZpZXdSZXNvdXJjZXMsIGVsZW1lbnQ6RE9NLkVsZW1lbnQsIGluc3RydWN0aW9uOkJlaGF2aW9ySW5zdHJ1Y3Rpb24pOiBCb29sZWFuIHtcbiAgICBpbnN0cnVjdGlvbi5hcHBCYXJDb250ZW50RmFjdG9yeSA9IEFJTmF2YmFyQ29udGVudFByb2Nlc3NpbmcubmF2YmFyU2xvdChjb21waWxlciwgcmVzb3VyY2VzLCBlbGVtZW50LCBpbnN0cnVjdGlvbik7XG4gICAgaW5zdHJ1Y3Rpb24uaW5kaWNhdG9yRmFjdG9yeSA9IEFJTmF2YmFyQ29udGVudFByb2Nlc3NpbmcuaW5kaWNhdG9yKGNvbXBpbGVyLCByZXNvdXJjZXMsIGVsZW1lbnQsIGluc3RydWN0aW9uKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHN0YXRpYyBuYXZiYXJTbG90KGNvbXBpbGVyOlZpZXdDb21waWxlciwgcmVzb3VyY2VzOlZpZXdSZXNvdXJjZXMsIGVsZW1lbnQ6RE9NLkVsZW1lbnQsIGluc3RydWN0aW9uOkJlaGF2aW9ySW5zdHJ1Y3Rpb24pOiBWaWV3RmFjdG9yeSB7XG4gICAgbGV0IGZhY3Rvcnk7XG4gICAgbGV0IGZyYWdtZW50O1xuICAgIGxldCBub2RlO1xuICAgIGxldCBjb250ZW50O1xuICAgIGxldCBhdHRyaWJ1dGVzO1xuICAgIGxldCBhdHRyO1xuICAgIGxldCBkZXNlbGVjdDtcblxuICAgIG5vZGUgPSBET00uY3JlYXRlRWxlbWVudCgnYWktbmF2YmFyJyk7XG4gICAgbm9kZS5jbGFzc0xpc3QuYWRkKCdhdS1hbmltYXRlJyk7XG5cbiAgICBmcmFnbWVudCA9IERPTS5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICBkZXNlbGVjdCA9IHtcbiAgICAgICdyZWYnOiB0cnVlLFxuICAgICAgJ2FpLW5hdmJhci1zbG90LnJlZic6dHJ1ZSxcbiAgICB9XG5cbiAgICBhdHRyaWJ1dGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxlbWVudC5hdHRyaWJ1dGVzKTtcbiAgICB3aGlsZShhdHRyID0gYXR0cmlidXRlcy5wb3AoKSkge1xuICAgICAgaWYgKCFkZXNlbGVjdFthdHRyLm5vZGVOYW1lXSkge1xuICAgICAgICBub2RlLnNldEF0dHJpYnV0ZShhdHRyLm5vZGVOYW1lLCBhdHRyLm5vZGVWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBjb250ZW50ID0gZWxlbWVudC5maXJzdENoaWxkO1xuICAgIHdoaWxlKGNvbnRlbnQpIHtcbiAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICBjb250ZW50ID0gY29udGVudC5uZXh0U2libGluZyB8fCBlbGVtZW50LmZpcnN0Q2hpbGQ7XG4gICAgfVxuICAgIGZhY3RvcnkgPSBjb21waWxlci5jb21waWxlKGZyYWdtZW50LCByZXNvdXJjZXMpO1xuICAgIHJldHVybiBmYWN0b3J5O1xuICB9XG5cbiAgc3RhdGljIGluZGljYXRvcihjb21waWxlcjpWaWV3Q29tcGlsZXIsIHJlc291cmNlczpWaWV3UmVzb3VyY2VzLCBlbGVtZW50OkRPTS5FbGVtZW50LCBpbnN0cnVjdGlvbjpCZWhhdmlvckluc3RydWN0aW9uKTogVmlld0ZhY3Rvcnkge1xuICAgIGxldCBmcmFnbWVudDtcbiAgICBsZXQgZmFjdG9yeTtcbiAgICBsZXQgbm9kZTtcblxuICAgIGZyYWdtZW50ID0gRE9NLmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICBub2RlICAgICA9IERPTS5jcmVhdGVFbGVtZW50KCduYXZiYXItaW5kaWNhdG9yJyk7XG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQobm9kZSk7XG5cbiAgICBmYWN0b3J5ID0gY29tcGlsZXIuY29tcGlsZShmcmFnbWVudCwgcmVzb3VyY2VzKTtcbiAgICByZXR1cm4gZmFjdG9yeTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBSUNvbGxlY3Rpb25Db250ZW50UHJvY2Vzc2luZyB7XG5cbn1cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
