System.register(['aurelia-framework', './cache', './channel', './profile', './culture', './language'], function (_export) {
  'use strict';

  var inject, ObserverLocator, Cache, AUChannel, Profile, Culture, Language, LocalAPI;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function capitalize(name) {
    return name[0].toUpperCase() + name.slice(1);
  }

  function createDisposable(callback, handlers) {
    function dispose() {
      var index = handlers.indexOf(callback);
      if (index !== -1) handlers.splice(index, 1);
    }
    return { dispose: dispose };
  }
  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      ObserverLocator = _aureliaFramework.ObserverLocator;
    }, function (_cache) {
      Cache = _cache.Cache;
    }, function (_channel) {
      AUChannel = _channel.AUChannel;
    }, function (_profile) {
      Profile = _profile.Profile;
    }, function (_culture) {
      Culture = _culture.Culture;
    }, function (_language) {
      Language = _language.Language;
    }],
    execute: function () {
      LocalAPI = (function () {
        function LocalAPI(observerLocator, cache, channel, profile, culture, language) {
          _classCallCheck(this, _LocalAPI);

          this.cache = cache;
          this.channel = channel;
          this.observerLocator = observerLocator;
          this.registerModel(profile.key, profile);
          this.registerModel(culture.key, culture);
          this.registerModel(language.key, language);
        }

        _createClass(LocalAPI, [{
          key: 'registerModel',
          value: function registerModel(key, instance) {
            var channel = this.channel;
            var cache = this.cache;
            var capitalKey = capitalize(key);
            var getKey = 'get' + capitalKey;
            var setKey = 'set' + capitalKey;
            var currentKey = key + '.current';
            var eventKey = key + '-changed';

            var currentValue = this.cache.getItem(currentKey);
            if (!currentValue) {
              currentValue = instance.options[0];
              this.cache.setItem(currentKey, currentValue);
            }

            var instruction = {
              channel: channel,
              current: currentValue,
              _handlers: [],

              onChange: function onChange(cb) {
                this._handlers.push(cb);
                return createDisposable(cb, this._handlers);
              },

              _changed: function _changed(newValue) {
                cache.setItem(currentKey, newValue);
                channel.publish(eventKey, instance);
              }
            };

            Object.assign(instance, instruction);

            this.observerLocator.getObserver(instance, 'current').subscribe(function (newValue) {
              return instance._changed(newValue);
            });

            channel.subscribe('get-' + key, function (callback) {
              callback(instance);
            });

            channel.subscribe('set-' + key, function (newValue) {
              instance.current = newValue;
            });

            this[setKey] = function (newValue) {
              instance.current = newValue;
            };

            this[getKey] = function () {
              return instance;
            };

            this[key] = instance;
          }
        }]);

        var _LocalAPI = LocalAPI;
        LocalAPI = inject(ObserverLocator, Cache, AUChannel, Profile, Culture, Language)(LocalAPI) || LocalAPI;
        return LocalAPI;
      })();

      _export('LocalAPI', LocalAPI);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,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QVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNyQyx1QkFBTyxDQUFDLE9BQU8sQ0FBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7ZUFDdEM7YUFDRixDQUFDOztBQUVGLGtCQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFckMsZ0JBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQzdELFVBQUMsUUFBUTtxQkFBSyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUFBLENBQzFDLENBQUM7O0FBRUYsbUJBQU8sQ0FBQyxTQUFTLFVBQVEsR0FBRyxFQUFJLFVBQUMsUUFBUSxFQUFJO0FBQzNDLHNCQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLENBQUMsU0FBUyxVQUFRLEdBQUcsRUFBSSxVQUFDLFFBQVEsRUFBSTtBQUMzQyxzQkFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7YUFDN0IsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBQyxRQUFRLEVBQUk7QUFDMUIsc0JBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO2FBQzdCLENBQUM7O0FBRUYsZ0JBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFLO0FBQ2xCLHFCQUFPLFFBQVEsQ0FBQzthQUNqQixDQUFDOztBQUVGLGdCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1dBQ3RCOzs7d0JBakVVLFFBQVE7QUFBUixnQkFBUSxHQURwQixNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FDekQsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFRIiwiZmlsZSI6InNlcnZpY2VzL2xvY2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3QsIE9ic2VydmVyTG9jYXRvcn0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xuaW1wb3J0IHtDYWNoZX0gZnJvbSAnLi9jYWNoZSc7XG5pbXBvcnQge0FVQ2hhbm5lbH0gZnJvbSAnLi9jaGFubmVsJztcbmltcG9ydCB7UHJvZmlsZX0gZnJvbSAnLi9wcm9maWxlJztcbmltcG9ydCB7Q3VsdHVyZX0gZnJvbSAnLi9jdWx0dXJlJztcbmltcG9ydCB7TGFuZ3VhZ2V9IGZyb20gJy4vbGFuZ3VhZ2UnO1xuXG5AaW5qZWN0KE9ic2VydmVyTG9jYXRvciwgQ2FjaGUsIEFVQ2hhbm5lbCwgUHJvZmlsZSwgQ3VsdHVyZSwgTGFuZ3VhZ2UpXG5leHBvcnQgY2xhc3MgTG9jYWxBUEkge1xuXG4gIGNvbnN0cnVjdG9yKG9ic2VydmVyTG9jYXRvciwgY2FjaGUsIGNoYW5uZWwsIHByb2ZpbGUsIGN1bHR1cmUsIGxhbmd1YWdlKSB7XG4gICAgdGhpcy5jYWNoZSA9IGNhY2hlO1xuICAgIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gICAgdGhpcy5vYnNlcnZlckxvY2F0b3IgPSBvYnNlcnZlckxvY2F0b3I7XG4gICAgdGhpcy5yZWdpc3Rlck1vZGVsKHByb2ZpbGUua2V5LCBwcm9maWxlKTtcbiAgICB0aGlzLnJlZ2lzdGVyTW9kZWwoY3VsdHVyZS5rZXksIGN1bHR1cmUpO1xuICAgIHRoaXMucmVnaXN0ZXJNb2RlbChsYW5ndWFnZS5rZXksIGxhbmd1YWdlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyTW9kZWwoa2V5LCBpbnN0YW5jZSkge1xuICAgIGxldCBjaGFubmVsID0gdGhpcy5jaGFubmVsO1xuICAgIGxldCBjYWNoZSAgID0gdGhpcy5jYWNoZTtcbiAgICBsZXQgY2FwaXRhbEtleSA9IGNhcGl0YWxpemUoa2V5KTtcbiAgICBsZXQgZ2V0S2V5ICAgICA9ICdnZXQnICsgY2FwaXRhbEtleTtcbiAgICBsZXQgc2V0S2V5ICAgICA9ICdzZXQnICsgY2FwaXRhbEtleTtcbiAgICBsZXQgY3VycmVudEtleSA9ICBrZXkgICsgJy5jdXJyZW50JztcbiAgICBsZXQgZXZlbnRLZXkgICA9ICBrZXkgICsgJy1jaGFuZ2VkJztcblxuICAgIGxldCBjdXJyZW50VmFsdWUgPSB0aGlzLmNhY2hlLmdldEl0ZW0oY3VycmVudEtleSk7XG4gICAgaWYgKCFjdXJyZW50VmFsdWUpIHtcbiAgICAgIGN1cnJlbnRWYWx1ZSA9ICBpbnN0YW5jZS5vcHRpb25zWzBdO1xuICAgICAgdGhpcy5jYWNoZS5zZXRJdGVtKGN1cnJlbnRLZXksIGN1cnJlbnRWYWx1ZSk7XG4gICAgfVxuXG4gICAgbGV0IGluc3RydWN0aW9uID0ge1xuICAgICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICAgIGN1cnJlbnQ6IGN1cnJlbnRWYWx1ZSxcbiAgICAgIF9oYW5kbGVyczogW10sXG5cbiAgICAgIG9uQ2hhbmdlKGNiKSB7XG4gICAgICAgIHRoaXMuX2hhbmRsZXJzLnB1c2goY2IpO1xuICAgICAgICByZXR1cm4gY3JlYXRlRGlzcG9zYWJsZShjYiwgdGhpcy5faGFuZGxlcnMpO1xuICAgICAgfSxcblxuICAgICAgX2NoYW5nZWQobmV3VmFsdWUpIHtcbiAgICAgICAgY2FjaGUuc2V0SXRlbSggY3VycmVudEtleSwgbmV3VmFsdWUpO1xuICAgICAgICBjaGFubmVsLnB1Ymxpc2goIGV2ZW50S2V5LCBpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIE9iamVjdC5hc3NpZ24oaW5zdGFuY2UsIGluc3RydWN0aW9uKTtcblxuICAgIHRoaXMub2JzZXJ2ZXJMb2NhdG9yLmdldE9ic2VydmVyKGluc3RhbmNlLCAnY3VycmVudCcpLnN1YnNjcmliZShcbiAgICAgIChuZXdWYWx1ZSkgPT4gaW5zdGFuY2UuX2NoYW5nZWQobmV3VmFsdWUpXG4gICAgKTtcblxuICAgIGNoYW5uZWwuc3Vic2NyaWJlKGBnZXQtJHtrZXl9YCwgKGNhbGxiYWNrKT0+IHtcbiAgICAgIGNhbGxiYWNrKGluc3RhbmNlKTtcbiAgICB9KTtcblxuICAgIGNoYW5uZWwuc3Vic2NyaWJlKGBzZXQtJHtrZXl9YCwgKG5ld1ZhbHVlKT0+IHtcbiAgICAgIGluc3RhbmNlLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICB9KTtcblxuICAgIHRoaXNbc2V0S2V5XSA9IChuZXdWYWx1ZSk9PiB7XG4gICAgICBpbnN0YW5jZS5jdXJyZW50ID0gbmV3VmFsdWU7XG4gICAgfTtcblxuICAgIHRoaXNbZ2V0S2V5XSA9ICgpPT4ge1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG5cbiAgICB0aGlzW2tleV0gPSBpbnN0YW5jZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYXBpdGFsaXplKG5hbWUpIHtcbiAgcmV0dXJuIG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpc3Bvc2FibGUoY2FsbGJhY2ssIGhhbmRsZXJzKSB7XG4gIGZ1bmN0aW9uIGRpc3Bvc2UoKSB7XG4gICAgbGV0IGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG4gICAgaWYgKGluZGV4ICE9PSAtMSkgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4ge2Rpc3Bvc2V9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
