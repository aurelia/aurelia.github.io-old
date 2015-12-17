/* */ 
define(['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var className = "ai-help";

  var HelpTextElement = (function () {
    function HelpTextElement(element) {
      _classCallCheck(this, _HelpTextElement);

      element.className += ' ' + className;
      this.element = element;
    }

    var _HelpTextElement = HelpTextElement;
    HelpTextElement = (0, _aureliaFramework.inject)(Element)(HelpTextElement) || HelpTextElement;
    HelpTextElement = (0, _aureliaFramework.useView)('./content.html')(HelpTextElement) || HelpTextElement;
    HelpTextElement = (0, _aureliaFramework.customElement)('ai-help')(HelpTextElement) || HelpTextElement;
    return HelpTextElement;
  })();

  exports.HelpTextElement = HelpTextElement;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVsZW1lbnRzL2hlbHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRUEsTUFBTSxTQUFTLEdBQUcsU0FBUyxDQUFDOztNQUtmLGVBQWU7QUFFZixhQUZBLGVBQWUsQ0FFZCxPQUFPLEVBQUU7OztBQUNuQixhQUFPLENBQUMsU0FBUyxVQUFRLFNBQVMsQUFBRSxDQUFDO0FBQ3JDLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0tBQ3hCOzsyQkFMVSxlQUFlO0FBQWYsbUJBQWUsR0FEM0Isc0JBTnlDLE1BQU0sRUFNeEMsT0FBTyxDQUFDLENBQ0gsZUFBZSxLQUFmLGVBQWU7QUFBZixtQkFBZSxHQUYzQixzQkFMTyxPQUFPLEVBS04sZ0JBQWdCLENBQUMsQ0FFYixlQUFlLEtBQWYsZUFBZTtBQUFmLG1CQUFlLEdBSDNCLHNCQUpnQixhQUFhLEVBSWYsU0FBUyxDQUFDLENBR1osZUFBZSxLQUFmLGVBQWU7V0FBZixlQUFlIiwiZmlsZSI6ImVsZW1lbnRzL2hlbHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVZpZXcsIGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcblxuY29uc3QgY2xhc3NOYW1lID0gXCJhaS1oZWxwXCI7XG5cbkBjdXN0b21FbGVtZW50KCdhaS1oZWxwJylcbkB1c2VWaWV3KCcuL2NvbnRlbnQuaHRtbCcpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgSGVscFRleHRFbGVtZW50IHtcblxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc05hbWUgKz0gYCAke2NsYXNzTmFtZX1gO1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
