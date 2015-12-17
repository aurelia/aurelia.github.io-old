/* */ 
define(['exports', 'aurelia-framework', '../AIDialogController', 'aurelia-metadata', 'aurelia-pal', 'aurelia-event-aggregator', './content-process'], function (exports, _aureliaFramework, _AIDialogController, _aureliaMetadata, _aureliaPal, _aureliaEventAggregator, _contentProcess) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var AIDialogViewport = (function () {
    function AIDialogViewport(element, container, eventAggregator) {
      _classCallCheck(this, _AIDialogViewport);

      this.dialogs = [];
      this.activeDialog = null;
      this.overlayClickListeners = [];

      var viewSlot = container.get(_aureliaFramework.ViewSlot);
      var instruction = container.get(_aureliaFramework.TargetInstruction);
      var overlayFactory = instruction.elementInstruction.overlayFactory;

      this.element = element;
      this.viewSlot = viewSlot;
      this.container = container;
      this.eventAggregator = eventAggregator;
      this.overlayFactory = overlayFactory;
    }

    _createClass(AIDialogViewport, [{
      key: 'bind',
      value: function bind() {
        var _this = this;

        this.subscription = this.eventAggregator.subscribe('ai-dialog:open', function (dialog) {
          _this.activeOverlay();

          if (dialog.view) {
            dialog.onClose(function () {

              _this.viewSlot.remove(dialog.view, true);
              _this.dialogs.pop();

              if (!_this.dialogs.length) {
                _this.deactivateOverlay();
              }
            });

            _this.viewSlot.add(dialog.view, true);
            _this.dialogs.push(dialog);
          }
        });
      }
    }, {
      key: 'unbind',
      value: function unbind() {
        if (this.subscription) {
          this.subscription.dispose();
        }
      }
    }, {
      key: 'activeOverlay',
      value: function activeOverlay() {
        if (!this.overlay) {
          this.overlay = this.overlayFactory.create(this.container);
          this.viewSlot.add(this.overlay, true);
        }
      }
    }, {
      key: 'deactivateOverlay',
      value: function deactivateOverlay() {
        if (this.overlay) {
          this.viewSlot.remove(this.overlay, true);
          this.overlay = null;
        }
      }
    }]);

    var _AIDialogViewport = AIDialogViewport;
    AIDialogViewport = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaFramework.Container, _aureliaEventAggregator.EventAggregator)(AIDialogViewport) || AIDialogViewport;
    AIDialogViewport = (0, _aureliaFramework.processContent)(_contentProcess.AIDialogContentProcessing.container)(AIDialogViewport) || AIDialogViewport;
    AIDialogViewport = (0, _aureliaFramework.useView)('./content.html')(AIDialogViewport) || AIDialogViewport;
    AIDialogViewport = (0, _aureliaFramework.customElement)('ai-dialog-viewport')(AIDialogViewport) || AIDialogViewport;
    return AIDialogViewport;
  })();

  exports.AIDialogViewport = AIDialogViewport;

  var AIDialog = (function () {
    var _instanceInitializers = {};
    var _instanceInitializers = {};

    _createDecoratedClass(AIDialog, [{
      key: 'active',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return null;
      },
      enumerable: true
    }, {
      key: 'actions',
      decorators: [_aureliaFramework.bindable],
      initializer: function initializer() {
        return [];
      },
      enumerable: true
    }], null, _instanceInitializers);

    function AIDialog(element, eventAggregator, container, instruction) {
      _classCallCheck(this, _AIDialog);

      _defineDecoratedPropertyDescriptor(this, 'active', _instanceInitializers);

      _defineDecoratedPropertyDescriptor(this, 'actions', _instanceInitializers);

      this._listeners = [];

      this.element = element;
      this.container = container;
      this.viewFactory = instruction.elementInstruction.dialogFactory;
      this.eventAggregator = eventAggregator;

      this._instruction = instruction;
    }

    _createDecoratedClass(AIDialog, [{
      key: 'bind',
      value: function bind(bindingContext) {
        this.bindingContext = bindingContext;
      }
    }, {
      key: 'activeChanged',
      value: function activeChanged(value) {
        if (value) {
          this.close();
        } else {
          this.open();
        }
      }
    }, {
      key: 'onTouch',
      value: function onTouch() {
        if (this.setings.deactivateOnTouch) {
          this.close();
        }
      }
    }, {
      key: 'onClose',
      value: function onClose(cb) {
        this._listeners.push(cb);
      }
    }, {
      key: 'close',
      value: function close() {
        while (this._listeners.length) {
          var _listener = this._listeners.pop();
          _listener(this);
        }
      }
    }, {
      key: 'open',
      value: function open() {
        var setings = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this.setings = setings;
        this.view = this.viewFactory.create(this.container, this._instruction);
        this.view.bind(this, this.bindingContext);
        this.eventAggregator.publish('ai-dialog:open', this);
      }
    }], null, _instanceInitializers);

    var _AIDialog = AIDialog;
    AIDialog = (0, _aureliaFramework.inject)(_aureliaPal.DOM.Element, _aureliaEventAggregator.EventAggregator, _aureliaFramework.Container, _aureliaFramework.TargetInstruction)(AIDialog) || AIDialog;
    AIDialog = (0, _aureliaFramework.processContent)(_contentProcess.AIDialogContentProcessing.dialog)(AIDialog) || AIDialog;
    AIDialog = (0, _aureliaFramework.noView)(AIDialog) || AIDialog;
    AIDialog = (0, _aureliaFramework.customElement)('ai-dialog')(AIDialog) || AIDialog;
    return AIDialog;
  })();

  exports.AIDialog = AIDialog;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvZGlhbG9nLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztNQWNhLGdCQUFnQjtBQUtoQixhQUxBLGdCQUFnQixDQUtmLE9BQU8sRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFOzs7V0FKakQsT0FBTyxHQUFHLEVBQUU7V0FDWixZQUFZLEdBQUcsSUFBSTtXQUNuQixxQkFBcUIsR0FBRyxFQUFFOztBQUd4QixVQUFJLFFBQVEsR0FBRyxTQUFTLENBQUMsR0FBRyxtQkFwQitFLFFBQVEsQ0FvQjdFLENBQUM7QUFDdkMsVUFBSSxXQUFXLEdBQUcsU0FBUyxDQUFDLEdBQUcsbUJBckJQLGlCQUFpQixDQXFCUyxDQUFDO0FBQ25ELFVBQUksY0FBYyxHQUFHLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUM7O0FBRW5FLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0FBQ3pCLFVBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFVBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDO0FBQ3ZDLFVBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFDO0tBQ3RDOztpQkFmVSxnQkFBZ0I7O2FBaUJ2QixnQkFBRzs7O0FBQ0wsWUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFBLE1BQU0sRUFBSTtBQUM3RSxnQkFBSyxhQUFhLEVBQUUsQ0FBQzs7QUFFckIsY0FBSSxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ2Ysa0JBQU0sQ0FBQyxPQUFPLENBQUMsWUFBSzs7QUFFbEIsb0JBQUssUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3hDLG9CQUFLLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQzs7QUFFbkIsa0JBQUksQ0FBQyxNQUFLLE9BQU8sQ0FBQyxNQUFNLEVBQUU7QUFDeEIsc0JBQUssaUJBQWlCLEVBQUUsQ0FBQztlQUMxQjthQUNGLENBQUMsQ0FBQzs7QUFFSCxrQkFBSyxRQUFRLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDckMsa0JBQUssT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztXQUMzQjtTQUNGLENBQUMsQ0FBQztPQUNKOzs7YUFFSyxrQkFBRztBQUNQLFlBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtBQUNyQixjQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO09BQ0Y7OzthQUVZLHlCQUFHO0FBQ2QsWUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7QUFDakIsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDMUQsY0FBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2QztPQUNGOzs7YUFFZ0IsNkJBQUc7QUFDbEIsWUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO0FBQ2hCLGNBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDekMsY0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDckI7T0FDRjs7OzRCQXhEVSxnQkFBZ0I7QUFBaEIsb0JBQWdCLEdBRDVCLHNCQWI0RixNQUFNLEVBYTNGLFlBVkEsR0FBRyxDQVVDLE9BQU8sb0JBYkYsU0FBUywwQkFJbEIsZUFBZSxDQVN5QixDQUNuQyxnQkFBZ0IsS0FBaEIsZ0JBQWdCO0FBQWhCLG9CQUFnQixHQUY1QixzQkFaNEUsY0FBYyxFQVkzRSxnQkFQUix5QkFBeUIsQ0FPUyxTQUFTLENBQUMsQ0FFdkMsZ0JBQWdCLEtBQWhCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FINUIsc0JBWE8sT0FBTyxFQVdOLGdCQUFnQixDQUFDLENBR2IsZ0JBQWdCLEtBQWhCLGdCQUFnQjtBQUFoQixvQkFBZ0IsR0FKNUIsc0JBVndILGFBQWEsRUFVdkgsb0JBQW9CLENBQUMsQ0FJdkIsZ0JBQWdCLEtBQWhCLGdCQUFnQjtXQUFoQixnQkFBZ0I7Ozs7O01BZ0VoQixRQUFROzs7OzBCQUFSLFFBQVE7O3FDQTlFZ0YsUUFBUTs7ZUErRXhGLElBQUk7Ozs7O3FDQS9FNEUsUUFBUTs7ZUFnRnZGLEVBQUU7Ozs7O0FBR1gsYUFMQSxRQUFRLENBS1AsT0FBTyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFOzs7Ozs7O1dBRDlELFVBQVUsR0FBRyxFQUFFOztBQUdiLFVBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLFVBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0FBQzNCLFVBQUksQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGFBQWEsQ0FBQztBQUNoRSxVQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQzs7QUFFdkMsVUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7S0FDakM7OzBCQWJVLFFBQVE7O2FBZWYsY0FBQyxjQUFjLEVBQUU7QUFDbkIsWUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7T0FDdEM7OzthQUVZLHVCQUFDLEtBQUssRUFBRTtBQUNuQixZQUFJLEtBQUssRUFBRTtBQUNULGNBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNkLE1BQU07QUFDTCxjQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDYjtPQUNGOzs7YUFFTSxtQkFBRztBQUNSLFlBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtBQUNsQyxjQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDZDtPQUNGOzs7YUFFTSxpQkFBQyxFQUFFLEVBQUU7QUFDVixZQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztPQUMxQjs7O2FBRUksaUJBQUc7QUFDTixlQUFNLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFO0FBQzVCLGNBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDdEMsbUJBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNqQjtPQUNGOzs7YUFFRyxnQkFBZTtZQUFkLE9BQU8seURBQUcsRUFBRTs7QUFDZixZQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixZQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ3ZFLFlBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7QUFDekMsWUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7T0FDdEQ7OztvQkFqRFUsUUFBUTtBQUFSLFlBQVEsR0FEcEIsc0JBN0U0RixNQUFNLEVBNkUzRixZQTFFQSxHQUFHLENBMEVDLE9BQU8sMEJBekVYLGVBQWUsb0JBSk4sU0FBUyxvQkFBRSxpQkFBaUIsQ0E2RXNCLENBQ3RELFFBQVEsS0FBUixRQUFRO0FBQVIsWUFBUSxHQUZwQixzQkE1RTRFLGNBQWMsRUE0RTNFLGdCQXZFUix5QkFBeUIsQ0F1RVMsTUFBTSxDQUFDLENBRXBDLFFBQVEsS0FBUixRQUFRO0FBQVIsWUFBUSx5QkE5RStILE1BQU0sRUE4RTdJLFFBQVEsS0FBUixRQUFRO0FBQVIsWUFBUSxHQUpwQixzQkExRXdILGFBQWEsRUEwRXZILFdBQVcsQ0FBQyxDQUlkLFFBQVEsS0FBUixRQUFRO1dBQVIsUUFBUSIsImZpbGUiOiJjb21wb25lbnRzL2RpYWxvZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlVmlldywgQ29udGFpbmVyLCBUYXJnZXRJbnN0cnVjdGlvbiwgVmlld1Jlc291cmNlcywgY29udGFpbmVybGVzcywgcHJvY2Vzc0NvbnRlbnQsIGluamVjdCwgYmluZGFibGUsIFZpZXdTbG90LCBjdXN0b21FbGVtZW50LCBpbmxpbmVWaWV3LCBub1ZpZXd9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcbmltcG9ydCB7QUlEaWFsb2dDb250cm9sbGVyfSBmcm9tICcuLi9BSURpYWxvZ0NvbnRyb2xsZXInO1xuaW1wb3J0IHtPcmlnaW59IGZyb20gJ2F1cmVsaWEtbWV0YWRhdGEnO1xuaW1wb3J0IHtET019IGZyb20gJ2F1cmVsaWEtcGFsJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0IHtBSURpYWxvZ0NvbnRlbnRQcm9jZXNzaW5nfSBmcm9tICcuL2NvbnRlbnQtcHJvY2Vzcyc7XG5cblxuXG5cbkBjdXN0b21FbGVtZW50KCdhaS1kaWFsb2ctdmlld3BvcnQnKVxuQHVzZVZpZXcoJy4vY29udGVudC5odG1sJylcbkBwcm9jZXNzQ29udGVudChBSURpYWxvZ0NvbnRlbnRQcm9jZXNzaW5nLmNvbnRhaW5lcilcbkBpbmplY3QoRE9NLkVsZW1lbnQsIENvbnRhaW5lciwgRXZlbnRBZ2dyZWdhdG9yKVxuZXhwb3J0IGNsYXNzIEFJRGlhbG9nVmlld3BvcnQge1xuICBkaWFsb2dzID0gW107XG4gIGFjdGl2ZURpYWxvZyA9IG51bGw7XG4gIG92ZXJsYXlDbGlja0xpc3RlbmVycyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGNvbnRhaW5lciwgZXZlbnRBZ2dyZWdhdG9yKSB7XG4gICAgbGV0IHZpZXdTbG90ID0gY29udGFpbmVyLmdldChWaWV3U2xvdCk7XG4gICAgbGV0IGluc3RydWN0aW9uID0gY29udGFpbmVyLmdldChUYXJnZXRJbnN0cnVjdGlvbik7XG4gICAgbGV0IG92ZXJsYXlGYWN0b3J5ID0gaW5zdHJ1Y3Rpb24uZWxlbWVudEluc3RydWN0aW9uLm92ZXJsYXlGYWN0b3J5O1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB0aGlzLnZpZXdTbG90ID0gdmlld1Nsb3Q7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IgPSBldmVudEFnZ3JlZ2F0b3I7XG4gICAgdGhpcy5vdmVybGF5RmFjdG9yeSA9IG92ZXJsYXlGYWN0b3J5O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnN1YnNjcmliZSgnYWktZGlhbG9nOm9wZW4nLCBkaWFsb2cgPT4ge1xuICAgICAgdGhpcy5hY3RpdmVPdmVybGF5KCk7XG5cbiAgICAgIGlmIChkaWFsb2cudmlldykge1xuICAgICAgICBkaWFsb2cub25DbG9zZSgoKT0+IHtcblxuICAgICAgICAgIHRoaXMudmlld1Nsb3QucmVtb3ZlKGRpYWxvZy52aWV3LCB0cnVlKTtcbiAgICAgICAgICB0aGlzLmRpYWxvZ3MucG9wKCk7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuZGlhbG9ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuZGVhY3RpdmF0ZU92ZXJsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmlld1Nsb3QuYWRkKGRpYWxvZy52aWV3LCB0cnVlKTtcbiAgICAgICAgdGhpcy5kaWFsb2dzLnB1c2goZGlhbG9nKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmRpc3Bvc2UoKTtcbiAgICB9XG4gIH1cblxuICBhY3RpdmVPdmVybGF5KCkge1xuICAgIGlmICghdGhpcy5vdmVybGF5KSB7XG4gICAgICB0aGlzLm92ZXJsYXkgPSB0aGlzLm92ZXJsYXlGYWN0b3J5LmNyZWF0ZSh0aGlzLmNvbnRhaW5lcik7XG4gICAgICB0aGlzLnZpZXdTbG90LmFkZCh0aGlzLm92ZXJsYXksIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIGRlYWN0aXZhdGVPdmVybGF5KCkge1xuICAgIGlmICh0aGlzLm92ZXJsYXkpIHtcbiAgICAgIHRoaXMudmlld1Nsb3QucmVtb3ZlKHRoaXMub3ZlcmxheSwgdHJ1ZSk7XG4gICAgICB0aGlzLm92ZXJsYXkgPSBudWxsO1xuICAgIH1cbiAgfVxufVxuXG5cbkBjdXN0b21FbGVtZW50KCdhaS1kaWFsb2cnKVxuQG5vVmlld1xuQHByb2Nlc3NDb250ZW50KEFJRGlhbG9nQ29udGVudFByb2Nlc3NpbmcuZGlhbG9nKVxuQGluamVjdChET00uRWxlbWVudCwgRXZlbnRBZ2dyZWdhdG9yLCBDb250YWluZXIsIFRhcmdldEluc3RydWN0aW9uKVxuZXhwb3J0IGNsYXNzIEFJRGlhbG9nIHtcbiAgQGJpbmRhYmxlIGFjdGl2ZSA9IG51bGw7XG4gIEBiaW5kYWJsZSBhY3Rpb25zID0gW107XG5cbiAgX2xpc3RlbmVycyA9IFtdO1xuICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudEFnZ3JlZ2F0b3IsIGNvbnRhaW5lciwgaW5zdHJ1Y3Rpb24pIHtcblxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgdGhpcy52aWV3RmFjdG9yeSA9IGluc3RydWN0aW9uLmVsZW1lbnRJbnN0cnVjdGlvbi5kaWFsb2dGYWN0b3J5O1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yID0gZXZlbnRBZ2dyZWdhdG9yO1xuXG4gICAgdGhpcy5faW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbjtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQpIHtcbiAgICB0aGlzLmJpbmRpbmdDb250ZXh0ID0gYmluZGluZ0NvbnRleHQ7XG4gIH1cblxuICBhY3RpdmVDaGFuZ2VkKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIG9uVG91Y2goKSB7XG4gICAgaWYgKHRoaXMuc2V0aW5ncy5kZWFjdGl2YXRlT25Ub3VjaCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xvc2UoY2IpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChjYik7XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB3aGlsZSh0aGlzLl9saXN0ZW5lcnMubGVuZ3RoKSB7XG4gICAgICBsZXQgX2xpc3RlbmVyID0gdGhpcy5fbGlzdGVuZXJzLnBvcCgpO1xuICAgICAgX2xpc3RlbmVyKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW4oc2V0aW5ncyA9IHt9KSB7XG4gICAgdGhpcy5zZXRpbmdzID0gc2V0aW5ncztcbiAgICB0aGlzLnZpZXcgPSB0aGlzLnZpZXdGYWN0b3J5LmNyZWF0ZSh0aGlzLmNvbnRhaW5lciwgdGhpcy5faW5zdHJ1Y3Rpb24pO1xuICAgIHRoaXMudmlldy5iaW5kKHRoaXMsIHRoaXMuYmluZGluZ0NvbnRleHQpXG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaCgnYWktZGlhbG9nOm9wZW4nLCB0aGlzKTtcbiAgfVxufVxuXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
