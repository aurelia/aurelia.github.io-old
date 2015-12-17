System.register(['aurelia-dependency-injection', 'aurelia-event-aggregator', 'aurelia-logging'], function (_export) {
	'use strict';

	var inject, EventAggregator, LogManager, Analytics;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	return {
		setters: [function (_aureliaDependencyInjection) {
			inject = _aureliaDependencyInjection.inject;
		}, function (_aureliaEventAggregator) {
			EventAggregator = _aureliaEventAggregator.EventAggregator;
		}, function (_aureliaLogging) {
			LogManager = _aureliaLogging;
		}],
		execute: function () {
			Analytics = (function () {
				function Analytics(eventAggregator) {
					_classCallCheck(this, _Analytics);

					this.eventAggregator = eventAggregator;
					this.initialized = false;
					this.logger = LogManager.getLogger('analytics');
					this.shouldLog = false;
					this.shouldTrack = false;
				}

				_createClass(Analytics, [{
					key: 'attach',
					value: function attach() {
						var _this = this;

						if (!this.initialized) {
							if (this.shouldLog) {
								this.logger.error("Analytics must be initialized before use.");
							}
							throw new Error("Analytics must be initialized before use.");
						}

						this.eventAggregator.subscribe('router:navigation:success', function (payload) {
							return _this._onNavigation(payload);
						});
					}
				}, {
					key: 'enableLogging',
					value: function enableLogging(value) {
						this.shouldLog = value;
					}
				}, {
					key: 'enableTracking',
					value: function enableTracking(value) {
						this.shouldTrack = value;
					}
				}, {
					key: 'init',
					value: function init(id) {
						var script = document.createElement('script');
						script.text = "(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){" + "(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o)," + "m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)" + "})(window,document,'script','//www.google-analytics.com/analytics.js','ga');";
						document.querySelector('body').appendChild(script);

						window.ga = window.ga || function () {
							(ga.q = ga.q || []).push(arguments);
						};ga.l = +new Date();
						ga('create', id, 'auto');
						ga('send', 'pageview');

						this.initialized = true;
					}
				}, {
					key: 'isInitialized',
					value: function isInitialized() {
						return this.initialized;
					}
				}, {
					key: 'track',
					value: function track(path, title) {
						if (!this.shouldTrack) {
							return;
						}
						if (!this.initialized) {
							if (this.shouldLog) {
								this.logger.warn("Try calling init() before calling 'track()'.");
							}
							return;
						}

						if (this.shouldLog) {
							this.logger.debug('track: path = \'' + path + '\', title = \'' + title + '\'');
						}
						ga('set', { page: path, title: title });
						ga('send', 'pageview');
					}
				}, {
					key: '_onNavigation',
					value: function _onNavigation(payload) {
						this.track(payload.instruction.fragment, payload.instruction.config.title);
					}
				}]);

				var _Analytics = Analytics;
				Analytics = inject(EventAggregator)(Analytics) || Analytics;
				return Analytics;
			})();

			_export('Analytics', Analytics);
		}
	};
});
//# sourceMappingURL=data:application/json;base64,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SyxFQUFFLENBQUMsQ0FBQztBQUN4QyxRQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO01BQ3ZCOzs7WUFFYSx1QkFBQyxPQUFPLEVBQUU7QUFDckIsVUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztNQUM1RTs7O3FCQWpFVSxTQUFTO0FBQVQsYUFBUyxHQURyQixNQUFNLENBQUMsZUFBZSxDQUFDLENBQ1gsU0FBUyxLQUFULFNBQVM7V0FBVCxTQUFTIiwiZmlsZSI6InNlcnZpY2VzL2FuYWx5dGljcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5qZWN0fSBmcm9tICdhdXJlbGlhLWRlcGVuZGVuY3ktaW5qZWN0aW9uJztcbmltcG9ydCB7RXZlbnRBZ2dyZWdhdG9yfSBmcm9tICdhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3InO1xuaW1wb3J0ICogYXMgTG9nTWFuYWdlciBmcm9tICdhdXJlbGlhLWxvZ2dpbmcnO1xuXG5AaW5qZWN0KEV2ZW50QWdncmVnYXRvcilcbmV4cG9ydCBjbGFzcyBBbmFseXRpY3Mge1xuXHRjb25zdHJ1Y3RvcihldmVudEFnZ3JlZ2F0b3IpIHtcblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvciA9IGV2ZW50QWdncmVnYXRvcjtcblx0XHR0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XG5cdFx0dGhpcy5sb2dnZXIgPSBMb2dNYW5hZ2VyLmdldExvZ2dlcignYW5hbHl0aWNzJyk7XG5cdFx0dGhpcy5zaG91bGRMb2cgPSBmYWxzZTtcblx0XHR0aGlzLnNob3VsZFRyYWNrID0gZmFsc2U7XG5cdH1cblxuXHRhdHRhY2goKSB7XG5cdFx0aWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHtcblx0XHRcdGlmKHRoaXMuc2hvdWxkTG9nKSB7XG5cdFx0XHRcdHRoaXMubG9nZ2VyLmVycm9yKFwiQW5hbHl0aWNzIG11c3QgYmUgaW5pdGlhbGl6ZWQgYmVmb3JlIHVzZS5cIik7XG5cdFx0XHR9XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBbmFseXRpY3MgbXVzdCBiZSBpbml0aWFsaXplZCBiZWZvcmUgdXNlLlwiKTtcblx0XHR9XG5cblx0XHR0aGlzLmV2ZW50QWdncmVnYXRvci5zdWJzY3JpYmUoJ3JvdXRlcjpuYXZpZ2F0aW9uOnN1Y2Nlc3MnLCBwYXlsb2FkID0+IHRoaXMuX29uTmF2aWdhdGlvbihwYXlsb2FkKSk7XG5cdH1cblxuXHRlbmFibGVMb2dnaW5nKHZhbHVlKSB7XG5cdFx0dGhpcy5zaG91bGRMb2cgPSB2YWx1ZTtcblx0fVxuXG5cdGVuYWJsZVRyYWNraW5nKHZhbHVlKSB7XG5cdFx0dGhpcy5zaG91bGRUcmFjayA9IHZhbHVlO1xuXHR9XG5cblx0aW5pdChpZCkge1xuXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblx0XHRzY3JpcHQudGV4dCA9IFwiKGZ1bmN0aW9uKGkscyxvLGcscixhLG0pe2lbJ0dvb2dsZUFuYWx5dGljc09iamVjdCddPXI7aVtyXT1pW3JdfHxmdW5jdGlvbigpe1wiICtcblx0XHRcdFwiKGlbcl0ucT1pW3JdLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9LGlbcl0ubD0xKm5ldyBEYXRlKCk7YT1zLmNyZWF0ZUVsZW1lbnQobyksXCIgK1xuXHRcdFx0XCJtPXMuZ2V0RWxlbWVudHNCeVRhZ05hbWUobylbMF07YS5hc3luYz0xO2Euc3JjPWc7bS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShhLG0pXCIgK1xuXHRcdFx0XCJ9KSh3aW5kb3csZG9jdW1lbnQsJ3NjcmlwdCcsJy8vd3d3Lmdvb2dsZS1hbmFseXRpY3MuY29tL2FuYWx5dGljcy5qcycsJ2dhJyk7XCI7XG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKHNjcmlwdCk7XG5cblx0XHR3aW5kb3cuZ2E9d2luZG93LmdhfHxmdW5jdGlvbigpeyhnYS5xPWdhLnF8fFtdKS5wdXNoKGFyZ3VtZW50cyl9O2dhLmw9K25ldyBEYXRlO1xuXHRcdGdhKCdjcmVhdGUnLCBpZCwgJ2F1dG8nKTtcblx0XHRnYSgnc2VuZCcsICdwYWdldmlldycpO1xuXG5cdFx0dGhpcy5pbml0aWFsaXplZCA9IHRydWU7XG5cdH1cblxuXHRpc0luaXRpYWxpemVkKCkge1xuXHRcdHJldHVybiB0aGlzLmluaXRpYWxpemVkO1xuXHR9XG5cblx0dHJhY2socGF0aCwgdGl0bGUpIHtcblx0XHRpZighdGhpcy5zaG91bGRUcmFjaykgeyByZXR1cm47IH1cblx0XHRpZighdGhpcy5pbml0aWFsaXplZCkge1xuXHRcdFx0aWYodGhpcy5zaG91bGRMb2cpIHtcblx0XHRcdFx0dGhpcy5sb2dnZXIud2FybihcIlRyeSBjYWxsaW5nIGluaXQoKSBiZWZvcmUgY2FsbGluZyAndHJhY2soKScuXCIpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmKHRoaXMuc2hvdWxkTG9nKSB7XG5cdFx0XHR0aGlzLmxvZ2dlci5kZWJ1ZyhgdHJhY2s6IHBhdGggPSAnJHtwYXRofScsIHRpdGxlID0gJyR7dGl0bGV9J2ApO1xuXHRcdH1cblx0XHRnYSgnc2V0JywgeyBwYWdlOiBwYXRoLCB0aXRsZTogdGl0bGUgfSk7XG5cdFx0Z2EoJ3NlbmQnLCAncGFnZXZpZXcnKTtcblx0fVxuXG4gIF9vbk5hdmlnYXRpb24ocGF5bG9hZCkge1xuICAgIHRoaXMudHJhY2socGF5bG9hZC5pbnN0cnVjdGlvbi5mcmFnbWVudCwgcGF5bG9hZC5pbnN0cnVjdGlvbi5jb25maWcudGl0bGUpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
