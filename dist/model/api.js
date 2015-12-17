System.register([], function (_export) {
  'use strict';

  var API, ChildModel, GroupModel, ClassModel, MethodModel, ConstructorModel, InterfaceModel, PropertyModel, SignatureModel, VariableModel, FunctionModel;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function checkForChildren(obj) {
    if (obj && obj.children) {
      obj.children.forEach(function (child) {
        var newChild = castObjectAsType(child, obj);
        checkForChildren(newChild);
      });
    }
  }

  function checkForGroups(obj) {
    if (obj && obj.groups) {
      obj.groups.forEach(function (group) {
        group.kindName = group.kind.name;
        obj.groups.push(new GroupModel(group));
        checkForGroups(group);
      });
    }
  }

  function castObjectAsType(obj, parent) {
    var type = obj.kindString;
    var thisObject = undefined;

    switch (type) {
      case 'Class':
        thisObject = new ClassModel(obj);
        parent.classes.push(thisObject);
        break;
      case 'Constructor':
        thisObject = new ConstructorModel(obj);
        thisObject.signature = new SignatureModel(thisObject.signatures[0]);
        parent.constructorMethod = thisObject;
        break;
      case 'Method':
        thisObject = new MethodModel(obj);
        thisObject.signature = new SignatureModel(thisObject.signatures[0]);
        parent.methods.push(thisObject);
        break;
      case 'Interface':
        thisObject = new InterfaceModel(obj);
        parent.interfaces.push(thisObject);
        break;
      case 'Property':
        thisObject = new PropertyModel(obj);
        parent.properties.push(thisObject);
        break;
      case 'Variable':
        thisObject = new VariableModel(obj);
        parent.variables.push(thisObject);
        break;
      case 'Signature':
        thisObject = new SignatureModel(obj);
        parent.signature.push(thisObject);
        break;
      case 'Function':
        thisObject = new FunctionModel(obj);
        parent.functions.push(thisObject);
        break;
      default:
    }

    return thisObject;
  }

  function prettyName(s) {
    s = s.replace(/(\-\w)/g, function (m) {
      return m[1].toUpperCase();
    });
    s = s.replace(/([a-z])([A-Z])/g, '$1 $2');
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  return {
    setters: [],
    execute: function () {
      API = (function () {
        function API(children, groups) {
          _classCallCheck(this, API);

          this.classes = [];
          this.interfaces = [];
          this.properties = [];
          this.variables = [];
          this.events = [];
          this.methods = [];
          this.functions = [];

          this.children = children;
          this.groups = groups;

          checkForChildren(this);
          checkForGroups(this);
        }

        _createClass(API, [{
          key: 'findClass',
          value: function findClass(className) {
            return this.classes.find(function (x) {
              return x.name === className;
            });
          }
        }, {
          key: 'findInterface',
          value: function findInterface(interfaceName) {
            return this.interfaces.find(function (x) {
              return x.name === interfaceName;
            });
          }
        }]);

        return API;
      })();

      _export('API', API);

      ChildModel = function ChildModel(data) {
        _classCallCheck(this, ChildModel);

        this.id = -1;
        this.kind = -1;
        this.kindString = '';
        this.kindName = '';
        this.name = '';
        this.originalName = '';
        this.children = [];
        this.classes = [];
        this.groups = [];
        this.flags = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
        this.prettyName = prettyName(this.name);
      };

      GroupModel = function GroupModel(data) {
        _classCallCheck(this, GroupModel);

        this.id = -1;
        this.kind = -1;
        this.kindName = '';
        this.title = '';
        this.children = [];

        Object.assign(this, data);
        this.kindName = this.kindName;
      };

      ClassModel = function ClassModel(data) {
        _classCallCheck(this, ClassModel);

        this.comment = {};
        this.methods = [];
        this.groups = [];
        this.flags = {};
        this.properties = [];
        this.constructorMethod = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      MethodModel = function MethodModel(data) {
        _classCallCheck(this, MethodModel);

        this.signature = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      ConstructorModel = function ConstructorModel(data) {
        _classCallCheck(this, ConstructorModel);

        this.signature = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      InterfaceModel = function InterfaceModel(data) {
        _classCallCheck(this, InterfaceModel);

        this.classes = [];
        this.properties = [];
        this.variables = [];
        this.methods = [];

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      PropertyModel = function PropertyModel(data) {
        _classCallCheck(this, PropertyModel);

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      SignatureModel = function SignatureModel(data) {
        _classCallCheck(this, SignatureModel);

        this.comment = {};

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      VariableModel = function VariableModel(data) {
        _classCallCheck(this, VariableModel);

        Object.assign(this, data);
        this.kindName = this.kindString;
      };

      FunctionModel = function FunctionModel(data) {
        _classCallCheck(this, FunctionModel);

        Object.assign(this, data);
        this.kindName = this.kindString;
        this.signature = this.signatures[0];
      };
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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T0FBTyxHQUFHLEVBQUU7O0FBRVYsY0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO09BQ2pDOztBQUdHLG1CQUFhLEdBQ04sU0FEUCxhQUFhLENBQ0wsSUFBSSxFQUFFOzhCQURkLGFBQWE7O0FBRWYsY0FBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDMUIsWUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO09BQ2pDOztBQUdHLG9CQUFjLEdBRVAsU0FGUCxjQUFjLENBRU4sSUFBSSxFQUFFOzhCQUZkLGNBQWM7O2FBQ2xCLE9BQU8sR0FBRyxFQUFFOztBQUVWLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUNqQzs7QUFHRyxtQkFBYSxHQUNOLFNBRFAsYUFBYSxDQUNMLElBQUksRUFBRTs4QkFEZCxhQUFhOztBQUVmLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztPQUNqQzs7QUFHRyxtQkFBYSxHQUNOLFNBRFAsYUFBYSxDQUNMLElBQUksRUFBRTs4QkFEZCxhQUFhOztBQUVmLGNBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzFCLFlBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUNoQyxZQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7T0FDckMiLCJmaWxlIjoibW9kZWwvYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY2hlY2tGb3JDaGlsZHJlbihvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouY2hpbGRyZW4pIHtcbiAgICBvYmouY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICBsZXQgbmV3Q2hpbGQgPSBjYXN0T2JqZWN0QXNUeXBlKGNoaWxkLCBvYmopO1xuICAgICAgY2hlY2tGb3JDaGlsZHJlbihuZXdDaGlsZCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JHcm91cHMob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLmdyb3Vwcykge1xuICAgIG9iai5ncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgICBncm91cC5raW5kTmFtZSA9IGdyb3VwLmtpbmQubmFtZTtcbiAgICAgIG9iai5ncm91cHMucHVzaChuZXcgR3JvdXBNb2RlbChncm91cCkpO1xuICAgICAgY2hlY2tGb3JHcm91cHMoZ3JvdXApO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIEZpbmRzIHRoZSB0eXBlIGFuZCBjYXN0cyB0aGUgb2JqZWN0IGFzIGl0IHNvIHdlIGNhbiByZWN1cnNpdmVseSBzZWFyY2ggb2JqZWN0c1xuZnVuY3Rpb24gY2FzdE9iamVjdEFzVHlwZShvYmosIHBhcmVudCkge1xuICBsZXQgdHlwZSA9IG9iai5raW5kU3RyaW5nO1xuICBsZXQgdGhpc09iamVjdDtcblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgY2FzZSAnQ2xhc3MnOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgQ2xhc3NNb2RlbChvYmopO1xuICAgIHBhcmVudC5jbGFzc2VzLnB1c2godGhpc09iamVjdCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ0NvbnN0cnVjdG9yJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IENvbnN0cnVjdG9yTW9kZWwob2JqKTtcbiAgICB0aGlzT2JqZWN0LnNpZ25hdHVyZSA9IG5ldyBTaWduYXR1cmVNb2RlbCh0aGlzT2JqZWN0LnNpZ25hdHVyZXNbMF0pO1xuICAgIHBhcmVudC5jb25zdHJ1Y3Rvck1ldGhvZCA9IHRoaXNPYmplY3Q7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ01ldGhvZCc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBNZXRob2RNb2RlbChvYmopO1xuICAgIHRoaXNPYmplY3Quc2lnbmF0dXJlID0gbmV3IFNpZ25hdHVyZU1vZGVsKHRoaXNPYmplY3Quc2lnbmF0dXJlc1swXSk7XG4gICAgcGFyZW50Lm1ldGhvZHMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnSW50ZXJmYWNlJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IEludGVyZmFjZU1vZGVsKG9iaik7XG4gICAgcGFyZW50LmludGVyZmFjZXMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnUHJvcGVydHknOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgUHJvcGVydHlNb2RlbChvYmopO1xuICAgIHBhcmVudC5wcm9wZXJ0aWVzLnB1c2godGhpc09iamVjdCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ1ZhcmlhYmxlJzpcbiAgICB0aGlzT2JqZWN0ID0gbmV3IFZhcmlhYmxlTW9kZWwob2JqKTtcbiAgICBwYXJlbnQudmFyaWFibGVzLnB1c2godGhpc09iamVjdCk7XG4gICAgYnJlYWs7XG4gIGNhc2UgJ1NpZ25hdHVyZSc6XG4gICAgdGhpc09iamVjdCA9IG5ldyBTaWduYXR1cmVNb2RlbChvYmopO1xuICAgIHBhcmVudC5zaWduYXR1cmUucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgY2FzZSAnRnVuY3Rpb24nOlxuICAgIHRoaXNPYmplY3QgPSBuZXcgRnVuY3Rpb25Nb2RlbChvYmopO1xuICAgIHBhcmVudC5mdW5jdGlvbnMucHVzaCh0aGlzT2JqZWN0KTtcbiAgICBicmVhaztcbiAgZGVmYXVsdDpcbiAgLy8gRG8gbm90aGluZ1xuICB9XG5cbiAgcmV0dXJuIHRoaXNPYmplY3Q7XG59XG5cbmZ1bmN0aW9uIHByZXR0eU5hbWUocykge1xuICBzID0gIHMucmVwbGFjZSgvKFxcLVxcdykvZywgZnVuY3Rpb24obSkge1xuICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gIH0pO1xuICBzID0gcy5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCAnJDEgJDInKTtcbiAgcmV0dXJuIHMuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzLnNsaWNlKDEpO1xufVxuXG5leHBvcnQgY2xhc3MgQVBJIHtcbiAgY2xhc3NlcyA9IFtdO1xuICBpbnRlcmZhY2VzID0gW107XG4gIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyaWFibGVzID0gW107XG4gIGV2ZW50cyA9IFtdO1xuICBtZXRob2RzID0gW107XG4gIGZ1bmN0aW9ucyA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKGNoaWxkcmVuLCBncm91cHMpIHtcbiAgICB0aGlzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gICAgdGhpcy5ncm91cHMgPSBncm91cHM7XG5cbiAgICBjaGVja0ZvckNoaWxkcmVuKHRoaXMpO1xuICAgIGNoZWNrRm9yR3JvdXBzKHRoaXMpO1xuICB9XG5cbiAgZmluZENsYXNzKGNsYXNzTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmNsYXNzZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gY2xhc3NOYW1lKTtcbiAgfVxuXG4gIGZpbmRJbnRlcmZhY2UoaW50ZXJmYWNlTmFtZSkge1xuICAgIHJldHVybiB0aGlzLmludGVyZmFjZXMuZmluZCh4ID0+IHgubmFtZSA9PT0gaW50ZXJmYWNlTmFtZSk7XG4gIH1cbn1cblxuY2xhc3MgQ2hpbGRNb2RlbCB7XG4gIGlkID0gLTE7XG4gIGtpbmQgPSAtMTtcbiAga2luZFN0cmluZyA9ICcnO1xuICBraW5kTmFtZSA9ICcnO1xuICBuYW1lID0gJyc7XG4gIG9yaWdpbmFsTmFtZSA9ICcnO1xuICBjaGlsZHJlbiA9IFtdO1xuICBjbGFzc2VzID0gW107XG4gIGdyb3VwcyA9IFtdO1xuICBmbGFncyA9IHt9O1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmtpbmROYW1lID0gdGhpcy5raW5kU3RyaW5nO1xuICAgIHRoaXMucHJldHR5TmFtZSA9IHByZXR0eU5hbWUodGhpcy5uYW1lKTtcbiAgfVxufVxuXG5jbGFzcyBHcm91cE1vZGVsIHtcbiAgaWQgPSAtMTtcbiAga2luZCA9IC0xO1xuICBraW5kTmFtZSA9ICcnO1xuICB0aXRsZSA9ICcnO1xuICBjaGlsZHJlbiA9IFtdO1xuICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgICB0aGlzLmtpbmROYW1lID0gdGhpcy5raW5kTmFtZTtcbiAgfVxufVxuXG5jbGFzcyBDbGFzc01vZGVsIHtcbiAgY29tbWVudCA9IHt9O1xuICBtZXRob2RzID0gW107XG4gIGdyb3VwcyA9IFtdO1xuICBmbGFncyA9IHt9O1xuICBwcm9wZXJ0aWVzID0gW107XG4gIGNvbnN0cnVjdG9yTWV0aG9kID0ge307XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmRTdHJpbmc7XG4gIH1cbn1cblxuY2xhc3MgTWV0aG9kTW9kZWwge1xuICBzaWduYXR1cmUgPSB7fTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5jbGFzcyBDb25zdHJ1Y3Rvck1vZGVsIHtcbiAgc2lnbmF0dXJlID0ge307XG4gIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMua2luZE5hbWUgPSB0aGlzLmtpbmRTdHJpbmc7XG4gIH1cbn1cblxuY2xhc3MgSW50ZXJmYWNlTW9kZWwge1xuICBjbGFzc2VzID0gW107XG4gIHByb3BlcnRpZXMgPSBbXTtcbiAgdmFyaWFibGVzID0gW107XG4gIG1ldGhvZHMgPSBbXTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5jbGFzcyBQcm9wZXJ0eU1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5jbGFzcyBTaWduYXR1cmVNb2RlbCB7XG4gIGNvbW1lbnQgPSB7fTtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5jbGFzcyBWYXJpYWJsZU1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgfVxufVxuXG5jbGFzcyBGdW5jdGlvbk1vZGVsIHtcbiAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gICAgdGhpcy5raW5kTmFtZSA9IHRoaXMua2luZFN0cmluZztcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHRoaXMuc2lnbmF0dXJlc1swXTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
