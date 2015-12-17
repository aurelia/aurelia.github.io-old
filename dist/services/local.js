System.register(['aurelia-dependency-injection', 'aurelia-binding', './cache', './channel', './profile', './culture', './language'], function (_export) {
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
    setters: [function (_aureliaDependencyInjection) {
      inject = _aureliaDependencyInjection.inject;
    }, function (_aureliaBinding) {
      ObserverLocator = _aureliaBinding.ObserverLocator;
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
//# sourceMappingURL=data:application/json;base64,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QVUsRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNyQyx1QkFBTyxDQUFDLE9BQU8sQ0FBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7ZUFDdEM7YUFDRixDQUFDOztBQUVGLGtCQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzs7QUFFckMsZ0JBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxTQUFTLENBQzdELFVBQUMsUUFBUTtxQkFBSyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQzthQUFBLENBQzFDLENBQUM7O0FBRUYsbUJBQU8sQ0FBQyxTQUFTLFVBQVEsR0FBRyxFQUFJLFVBQUMsUUFBUSxFQUFJO0FBQzNDLHNCQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDcEIsQ0FBQyxDQUFDOztBQUVILG1CQUFPLENBQUMsU0FBUyxVQUFRLEdBQUcsRUFBSSxVQUFDLFFBQVEsRUFBSTtBQUMzQyxzQkFBUSxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUM7YUFDN0IsQ0FBQyxDQUFDOztBQUVILGdCQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsVUFBQyxRQUFRLEVBQUk7QUFDMUIsc0JBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDO2FBQzdCLENBQUM7O0FBRUYsZ0JBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFLO0FBQ2xCLHFCQUFPLFFBQVEsQ0FBQzthQUNqQixDQUFDOztBQUVGLGdCQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1dBQ3RCOzs7d0JBakVVLFFBQVE7QUFBUixnQkFBUSxHQURwQixNQUFNLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FDekQsUUFBUSxLQUFSLFFBQVE7ZUFBUixRQUFRIiwiZmlsZSI6InNlcnZpY2VzL2xvY2FsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpbmplY3R9IGZyb20gJ2F1cmVsaWEtZGVwZW5kZW5jeS1pbmplY3Rpb24nO1xuaW1wb3J0IHtPYnNlcnZlckxvY2F0b3J9IGZyb20gJ2F1cmVsaWEtYmluZGluZyc7XG5pbXBvcnQge0NhY2hlfSBmcm9tICcuL2NhY2hlJztcbmltcG9ydCB7QVVDaGFubmVsfSBmcm9tICcuL2NoYW5uZWwnO1xuaW1wb3J0IHtQcm9maWxlfSBmcm9tICcuL3Byb2ZpbGUnO1xuaW1wb3J0IHtDdWx0dXJlfSBmcm9tICcuL2N1bHR1cmUnO1xuaW1wb3J0IHtMYW5ndWFnZX0gZnJvbSAnLi9sYW5ndWFnZSc7XG5cbkBpbmplY3QoT2JzZXJ2ZXJMb2NhdG9yLCBDYWNoZSwgQVVDaGFubmVsLCBQcm9maWxlLCBDdWx0dXJlLCBMYW5ndWFnZSlcbmV4cG9ydCBjbGFzcyBMb2NhbEFQSSB7XG5cbiAgY29uc3RydWN0b3Iob2JzZXJ2ZXJMb2NhdG9yLCBjYWNoZSwgY2hhbm5lbCwgcHJvZmlsZSwgY3VsdHVyZSwgbGFuZ3VhZ2UpIHtcbiAgICB0aGlzLmNhY2hlID0gY2FjaGU7XG4gICAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbiAgICB0aGlzLm9ic2VydmVyTG9jYXRvciA9IG9ic2VydmVyTG9jYXRvcjtcbiAgICB0aGlzLnJlZ2lzdGVyTW9kZWwocHJvZmlsZS5rZXksIHByb2ZpbGUpO1xuICAgIHRoaXMucmVnaXN0ZXJNb2RlbChjdWx0dXJlLmtleSwgY3VsdHVyZSk7XG4gICAgdGhpcy5yZWdpc3Rlck1vZGVsKGxhbmd1YWdlLmtleSwgbGFuZ3VhZ2UpO1xuICB9XG5cbiAgcmVnaXN0ZXJNb2RlbChrZXksIGluc3RhbmNlKSB7XG4gICAgbGV0IGNoYW5uZWwgPSB0aGlzLmNoYW5uZWw7XG4gICAgbGV0IGNhY2hlICAgPSB0aGlzLmNhY2hlO1xuICAgIGxldCBjYXBpdGFsS2V5ID0gY2FwaXRhbGl6ZShrZXkpO1xuICAgIGxldCBnZXRLZXkgICAgID0gJ2dldCcgKyBjYXBpdGFsS2V5O1xuICAgIGxldCBzZXRLZXkgICAgID0gJ3NldCcgKyBjYXBpdGFsS2V5O1xuICAgIGxldCBjdXJyZW50S2V5ID0gIGtleSAgKyAnLmN1cnJlbnQnO1xuICAgIGxldCBldmVudEtleSAgID0gIGtleSAgKyAnLWNoYW5nZWQnO1xuXG4gICAgbGV0IGN1cnJlbnRWYWx1ZSA9IHRoaXMuY2FjaGUuZ2V0SXRlbShjdXJyZW50S2V5KTtcbiAgICBpZiAoIWN1cnJlbnRWYWx1ZSkge1xuICAgICAgY3VycmVudFZhbHVlID0gIGluc3RhbmNlLm9wdGlvbnNbMF07XG4gICAgICB0aGlzLmNhY2hlLnNldEl0ZW0oY3VycmVudEtleSwgY3VycmVudFZhbHVlKTtcbiAgICB9XG5cbiAgICBsZXQgaW5zdHJ1Y3Rpb24gPSB7XG4gICAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgICAgY3VycmVudDogY3VycmVudFZhbHVlLFxuICAgICAgX2hhbmRsZXJzOiBbXSxcblxuICAgICAgb25DaGFuZ2UoY2IpIHtcbiAgICAgICAgdGhpcy5faGFuZGxlcnMucHVzaChjYik7XG4gICAgICAgIHJldHVybiBjcmVhdGVEaXNwb3NhYmxlKGNiLCB0aGlzLl9oYW5kbGVycyk7XG4gICAgICB9LFxuXG4gICAgICBfY2hhbmdlZChuZXdWYWx1ZSkge1xuICAgICAgICBjYWNoZS5zZXRJdGVtKCBjdXJyZW50S2V5LCBuZXdWYWx1ZSk7XG4gICAgICAgIGNoYW5uZWwucHVibGlzaCggZXZlbnRLZXksIGluc3RhbmNlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgT2JqZWN0LmFzc2lnbihpbnN0YW5jZSwgaW5zdHJ1Y3Rpb24pO1xuXG4gICAgdGhpcy5vYnNlcnZlckxvY2F0b3IuZ2V0T2JzZXJ2ZXIoaW5zdGFuY2UsICdjdXJyZW50Jykuc3Vic2NyaWJlKFxuICAgICAgKG5ld1ZhbHVlKSA9PiBpbnN0YW5jZS5fY2hhbmdlZChuZXdWYWx1ZSlcbiAgICApO1xuXG4gICAgY2hhbm5lbC5zdWJzY3JpYmUoYGdldC0ke2tleX1gLCAoY2FsbGJhY2spPT4ge1xuICAgICAgY2FsbGJhY2soaW5zdGFuY2UpO1xuICAgIH0pO1xuXG4gICAgY2hhbm5lbC5zdWJzY3JpYmUoYHNldC0ke2tleX1gLCAobmV3VmFsdWUpPT4ge1xuICAgICAgaW5zdGFuY2UuY3VycmVudCA9IG5ld1ZhbHVlO1xuICAgIH0pO1xuXG4gICAgdGhpc1tzZXRLZXldID0gKG5ld1ZhbHVlKT0+IHtcbiAgICAgIGluc3RhbmNlLmN1cnJlbnQgPSBuZXdWYWx1ZTtcbiAgICB9O1xuXG4gICAgdGhpc1tnZXRLZXldID0gKCk9PiB7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcblxuICAgIHRoaXNba2V5XSA9IGluc3RhbmNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhcGl0YWxpemUobmFtZSkge1xuICByZXR1cm4gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzcG9zYWJsZShjYWxsYmFjaywgaGFuZGxlcnMpIHtcbiAgZnVuY3Rpb24gZGlzcG9zZSgpIHtcbiAgICBsZXQgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiB7ZGlzcG9zZX07XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
