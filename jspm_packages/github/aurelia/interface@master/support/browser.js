/* */ 
define(['exports', '../config'], function (exports, _config) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var attrName = 'ui-';
  var platformAttr = 'ai-platform';
  var ai = 'ai';
  var AI = 'AI';
  var iOS = 'iOS';
  var Android = 'Android';
  var Windows = 'Windows';
  var presto = 'presto';
  var gecko = 'gecko';
  var webkit = 'webkit';
  var trident = 'trident';
  var Opera = 'Opera';
  var IE = 'IE';
  var Chrome = 'Chrome';
  var Firefox = 'Firefox';
  var Silk = 'Silk';
  var Phantom = 'Phantom';
  var Safari = 'Safari';
  var config = _config.browserConfig;

  var InterfaceBrowserSupport = (function () {
    function InterfaceBrowserSupport() {
      _classCallCheck(this, InterfaceBrowserSupport);

      this.config = config;
      this.userAgent = config.USER_AGENT;
      this.isReady = false;
      this.readyHandlers = Array();
      this.browser = config._localName;
      this.localName = config._localName;
      this.classNames = [];
    }

    _createClass(InterfaceBrowserSupport, [{
      key: 'init',
      value: function init() {
        var overwrite = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

        this.browser = this.setBrowser(this.detectBrowser(overwrite.browser));

        this.classNames.push('browser-' + this.localName, 'browser-' + this.localName + '-' + this.version);
        document.documentElement.classList.add.apply(document.documentElement.classList, this.classNames);

        this.onReady();
      }
    }, {
      key: 'ready',
      value: function ready(callback) {
        if (this.isReady) return callback(this);
        this.readyHandlers.push(callback);
      }
    }, {
      key: 'onReady',
      value: function onReady() {
        if (this.isReady) return;
        this.isReady = true;
        for (var index in this.readyHandlers) {
          this.readyHandlers[index](this);
        }
      }
    }, {
      key: 'detectBrowser',
      value: function detectBrowser(browser) {
        return browser ? browser : this.isOpera() ? Opera : this.isIE() ? IE : this.isChrome() ? Chrome : this.isFirefox() ? Firefox : this.isSilk() ? Silk : this.isPhantom() ? Phantom : this.isSafari() ? Safari : Chrome;
      }
    }, {
      key: 'setBrowser',
      value: function setBrowser(browserName) {
        this.browserName = browserName;
        this.localName = browserName.toLowerCase();

        return this.localName;
      }
    }, {
      key: 'getBrowser',
      value: function getBrowser() {
        return this.localName;
      }
    }, {
      key: 'detectVersion',
      value: function detectVersion(version, _version) {
        _version = config.USER_AGENT.match(config._versionExpression);
        return _version.length > 2 ? parseFloat(_version[1] + '.' + _version[2]) : version;
      }
    }, {
      key: 'setVersion',
      value: function setVersion(version) {
        version = version || 0;
        return version = version || 0;
      }
    }, {
      key: 'isOpera',
      value: function isOpera() {
        return config.isBrowser(Opera);
      }
    }, {
      key: 'isIE',
      value: function isIE() {
        return !this.isOpera() && config.isBrowser(IE);
      }
    }, {
      key: 'isChrome',
      value: function isChrome() {
        return !this.isIE() && config.isBrowser(Chrome);
      }
    }, {
      key: 'isFirefox',
      value: function isFirefox() {
        return !this.isChrome() && config.isBrowser(Firefox);
      }
    }, {
      key: 'isSilk',
      value: function isSilk() {
        return !this.isFirefox() && config.isBrowser(Silk);
      }
    }, {
      key: 'isPhantom',
      value: function isPhantom() {
        return config.isBrowser(Phantom);
      }
    }, {
      key: 'isSafari',
      value: function isSafari() {
        return !this.isFirefox() && config.isBrowser(Safari);
      }
    }]);

    return InterfaceBrowserSupport;
  })();

  exports.InterfaceBrowserSupport = InterfaceBrowserSupport;
});
//# sourceMappingURL=data:application/json;base64,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RUFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7T0FDakQ7OzthQU9RLHFCQUFHO0FBQ1YsZUFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ3REOzs7YUFPSyxrQkFBRztBQUNQLGVBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztPQUNwRDs7O2FBT1EscUJBQUc7QUFDVixlQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDbEM7OzthQU9PLG9CQUFHO0FBQ1QsZUFBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO09BQ3REOzs7V0E5S1UsdUJBQXVCIiwiZmlsZSI6InN1cHBvcnQvYnJvd3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7YnJvd3NlckNvbmZpZ30gZnJvbSAnLi4vY29uZmlnJztcbmNvbnN0IGF0dHJOYW1lID0gJ3VpLSc7XG5jb25zdCBwbGF0Zm9ybUF0dHIgPSAnYWktcGxhdGZvcm0nXG5jb25zdCBhaSA9ICdhaSc7XG5jb25zdCBBSSA9ICdBSSc7XG5jb25zdCBpT1MgPSAnaU9TJztcbmNvbnN0IEFuZHJvaWQgPSAnQW5kcm9pZCdcbmNvbnN0IFdpbmRvd3MgPSAnV2luZG93cyc7XG5jb25zdCBwcmVzdG8gICA9ICdwcmVzdG8nO1xuY29uc3QgZ2Vja28gICAgPSAnZ2Vja28nO1xuY29uc3Qgd2Via2l0ICAgPSAnd2Via2l0JztcbmNvbnN0IHRyaWRlbnQgID0gJ3RyaWRlbnQnO1xuY29uc3QgT3BlcmEgICA9ICdPcGVyYSc7XG5jb25zdCBJRSAgICAgID0gJ0lFJztcbmNvbnN0IENocm9tZSAgPSAnQ2hyb21lJztcbmNvbnN0IEZpcmVmb3ggPSAnRmlyZWZveCc7XG5jb25zdCBTaWxrICAgID0gJ1NpbGsnO1xuY29uc3QgUGhhbnRvbSA9ICdQaGFudG9tJztcbmNvbnN0IFNhZmFyaSAgPSAnU2FmYXJpJztcbnZhciBjb25maWcgPSBicm93c2VyQ29uZmlnO1xuXG5leHBvcnQgY2xhc3MgSW50ZXJmYWNlQnJvd3NlclN1cHBvcnQge1xuXG4gIC8qKlxuICAgKiBAUHJvcGVydHk6IGNvbmZpZ1xuICAgKi9cbiAgY29uZmlnID0gY29uZmlnO1xuICB1c2VyQWdlbnQgPSBjb25maWcuVVNFUl9BR0VOVDtcbiAgaXNSZWFkeSA9IGZhbHNlO1xuICByZWFkeUhhbmRsZXJzID0gQXJyYXkoKTtcbiAgYnJvd3NlciA9IGNvbmZpZy5fbG9jYWxOYW1lO1xuICBsb2NhbE5hbWUgPSBjb25maWcuX2xvY2FsTmFtZTtcbiAgY2xhc3NOYW1lcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IGluaXRcbiAgICpcbiAgICogQGRlc2NyaXB0aW9uIEluaXRpYWxpemUgdGhlIEludGVyZmFjZVBsYXRmb3JtXG4gICAqIEBwYXJhbSAge1N0cmluZ30gW3BsYXRmb3JtXSBUaGUgY3VycmVudCBydW5uaW5nIFBsYXRmb3JtTmFtZVxuICAgKi9cbiAgaW5pdChvdmVyd3JpdGUgPSB7fSkge1xuICAgIHRoaXMuYnJvd3NlciA9IHRoaXMuc2V0QnJvd3Nlcih0aGlzLmRldGVjdEJyb3dzZXIob3ZlcndyaXRlLmJyb3dzZXIpKTtcbiAgICAvLyB0aGlzLnZlcnNpb24gID0gdGhpcy5zZXRWZXJzaW9uKHRoaXMuZGV0ZWN0VmVyc2lvbihvdmVyd3JpdGUudmVyc2lvbikpO1xuXG4gICAgdGhpcy5jbGFzc05hbWVzLnB1c2goYGJyb3dzZXItJHt0aGlzLmxvY2FsTmFtZX1gLCBgYnJvd3Nlci0ke3RoaXMubG9jYWxOYW1lfS0ke3RoaXMudmVyc2lvbn1gKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZC5hcHBseShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LCB0aGlzLmNsYXNzTmFtZXMpO1xuICAgIC8vIEludm9rZSBSZWFkeSBDYWxsYmFja3NcbiAgICB0aGlzLm9uUmVhZHkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IHJlYWR5XG4gICAqIEBkZXNjcmlwdGlvbiBTdG9yZSBjYWxsYmFja3MgZm9yIHdoZW4gdGhpcyBQbGF0Zm9ybSBpcyByZWFkeVxuICAgKi9cbiAgcmVhZHkoY2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5pc1JlYWR5KSByZXR1cm4gY2FsbGJhY2sodGhpcyk7XG4gICAgdGhpcy5yZWFkeUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgLyoqXG4gICAqIEBQcm90b3R5cGUoKTogb25SZWFkeVxuICAgKiBAZGVzY3JpcHRpb24gSW52b2tlIGVhY2ggcmVhZHkgaGFuZGxlciBwYXNzaW5nIHRoaXMgY29udGV4dFxuICAgKi9cbiAgb25SZWFkeSgpIHtcbiAgICBpZiAodGhpcy5pc1JlYWR5KSByZXR1cm47XG4gICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICBmb3IgKGxldCBpbmRleCBpbiB0aGlzLnJlYWR5SGFuZGxlcnMpIHtcbiAgICAgIHRoaXMucmVhZHlIYW5kbGVyc1tpbmRleF0odGhpcyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQFByb3RvdHlwZSgpOiBkZXRlY3RCcm93c2VyXG4gICAqIEBkZXNjcmlwdGlvbiBEZXRlY3QgdGhlIGN1cnJlbnQgUnVubmluZyBCcm93c2VyXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGRldGVjdEJyb3dzZXIoYnJvd3Nlcikge1xuICAgIHJldHVybiBicm93c2VyICAgICAgICAgICAgICAgICAgICA/IGJyb3dzZXJcbiAgICAgICAgIDogdGhpcy5pc09wZXJhKCkgICA/IE9wZXJhXG4gICAgICAgICA6IHRoaXMuaXNJRSgpICAgICAgPyBJRVxuICAgICAgICAgOiB0aGlzLmlzQ2hyb21lKCkgID8gQ2hyb21lXG4gICAgICAgICA6IHRoaXMuaXNGaXJlZm94KCkgPyBGaXJlZm94XG4gICAgICAgICA6IHRoaXMuaXNTaWxrKCkgICAgPyBTaWxrXG4gICAgICAgICA6IHRoaXMuaXNQaGFudG9tKCkgPyBQaGFudG9tXG4gICAgICAgICA6IHRoaXMuaXNTYWZhcmkoKSAgPyBTYWZhcmlcbiAgICAgICAgIDogQ2hyb21lXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICogQFByb3RvdHlwZSgpOiBzZXRCcm93c2VyXG4gICAqIEBkZXNjcmlwdGlvbiBQcml2YXRlIGNvbmZpZ3VyYXRpb25zIGJlZm9yZSBzZXR0aW5nIHRoZSBnbG9iYWwgQnJvd3NlclxuICAgKiBAcGFyYW0ge1N0cmluZ30gW2Jyb3dzZXJOYW1lXSBUaGUgZGV0ZWN0ZWQgUGxhdGZvcm0gTmFtZVxuICAgKi9cbiAgc2V0QnJvd3Nlcihicm93c2VyTmFtZSkge1xuICAgIHRoaXMuYnJvd3Nlck5hbWUgPSBicm93c2VyTmFtZVxuICAgIHRoaXMubG9jYWxOYW1lID0gYnJvd3Nlck5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAvLyBjb25maWcuX3ZlcnNpb25FeHByZXNzaW9uID0gY29uZmlnLlZFUlNJT05fRVhQUkVTU0lPTlNbdGhpcy5icm93c2VyTmFtZV07XG4gICAgcmV0dXJuIHRoaXMubG9jYWxOYW1lO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBQcm90b3R5cGUoKTogZ2V0QnJvd3NlclxuICAgKiBAcmV0dXJuIHtTdHJpbmd9IFRoaXMgUGxhdGZvcm0gTG9jYWwgTmFtZVxuICAgKi9cbiAgZ2V0QnJvd3NlcigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2NhbE5hbWU7XG4gIH1cblxuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAUHJvdG90eXBlKCk6IGRldGVjdFZlcnNpb25cbiAgICogQGRlc2NyaXB0aW9uIERldGVjdCB0aGUgY3VycmVudCB2ZXJzaW9uIGJhc2VkIG9uIHRoaXMgUGxhdGZvcm1cbiAgICogQHJldHVybiB7U3RyaW5nfSBWZXJzaW9uIE51bWJlclxuICAgKi9cbiAgZGV0ZWN0VmVyc2lvbih2ZXJzaW9uLCBfdmVyc2lvbikge1xuICAgIF92ZXJzaW9uID0gY29uZmlnLlVTRVJfQUdFTlQubWF0Y2goY29uZmlnLl92ZXJzaW9uRXhwcmVzc2lvbik7XG4gICAgcmV0dXJuIF92ZXJzaW9uLmxlbmd0aCA+IDJcbiAgICAgID8gcGFyc2VGbG9hdChfdmVyc2lvblsxXSArICcuJyArIF92ZXJzaW9uWzJdKVxuICAgICAgOiB2ZXJzaW9uO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqIEBQcm90b3R5cGUoKTogc2V0VmVyc2lvblxuICAgKiBAZGVzY3JpcHRpb24gUHJpdmF0ZSBjb25maWd1cmF0aW9ucyBiZWZvcmUgc2V0dGluZyB0aGUgZ2xvYmFsIFZlcnNpb24gTnVtYmVyXG4gICAqL1xuICBzZXRWZXJzaW9uKHZlcnNpb24pIHtcbiAgICB2ZXJzaW9uID0gdmVyc2lvbiB8fCAwO1xuICAgIHJldHVybiB2ZXJzaW9uID0gdmVyc2lvbiB8fCAwO1xuICB9XG5cbiAgLyoqXG4gICAqIEBQcm90b3R5cGUoKTogaXNPcGVyYVxuICAgKiBAZGVzY3JpcHRpb24gaXMgcnVubmluZyBicm93c2VyIE9wZXJhXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc09wZXJhKCkge1xuICAgIHJldHVybiBjb25maWcuaXNCcm93c2VyKE9wZXJhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IGlzT3BlcmFcbiAgICogQGRlc2NyaXB0aW9uIGlzIHJ1bm5pbmcgYnJvd3NlciBJRVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNJRSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNPcGVyYSgpICYmIGNvbmZpZy5pc0Jyb3dzZXIoSUUpXG4gIH1cblxuICAvKipcbiAgICogQFByb3RvdHlwZSgpOiBpc09wZXJhXG4gICAqIEBkZXNjcmlwdGlvbiBpcyBydW5uaW5nIGJyb3dzZXIgQ2hyb21lXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0Nocm9tZSgpIHtcbiAgICByZXR1cm4gIXRoaXMuaXNJRSgpICYmIGNvbmZpZy5pc0Jyb3dzZXIoQ2hyb21lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IGlzT3BlcmFcbiAgICogQGRlc2NyaXB0aW9uIGlzIHJ1bm5pbmcgYnJvd3NlciBGaXJlZm94XG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc0ZpcmVmb3goKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzQ2hyb21lKCkgJiYgY29uZmlnLmlzQnJvd3NlcihGaXJlZm94KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAUHJvdG90eXBlKCk6IGlzT3BlcmFcbiAgICogQGRlc2NyaXB0aW9uIGlzIHJ1bm5pbmcgYnJvd3NlciBTaWxrXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59XG4gICAqL1xuICBpc1NpbGsoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzRmlyZWZveCgpICYmIGNvbmZpZy5pc0Jyb3dzZXIoU2lsayk7XG4gIH1cblxuICAvKipcbiAgICogQFByb3RvdHlwZSgpOiBpc09wZXJhXG4gICAqIEBkZXNjcmlwdGlvbiBpcyBydW5uaW5nIGJyb3dzZXIgUGhhbnRvbVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNQaGFudG9tKCkge1xuICAgIHJldHVybiBjb25maWcuaXNCcm93c2VyKFBoYW50b20pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBQcm90b3R5cGUoKTogaXNPcGVyYVxuICAgKiBAZGVzY3JpcHRpb24gaXMgcnVubmluZyBicm93c2VyIFNhZmFyaVxuICAgKiBAcmV0dXJuIHtCb29sZWFufVxuICAgKi9cbiAgaXNTYWZhcmkoKSB7XG4gICAgcmV0dXJuICF0aGlzLmlzRmlyZWZveCgpICYmIGNvbmZpZy5pc0Jyb3dzZXIoU2FmYXJpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
