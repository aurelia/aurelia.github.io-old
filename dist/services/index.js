System.register(['./analytics', 'aurelia-logging-console', 'aurelia-logging'], function (_export) {
  'use strict';

  var Analytics, ConsoleAppender, LogManager;

  _export('configure', configure);

  function configure(config) {
    var isLocal = window.location.protocol !== 'http' && window.location.protocol !== 'https';

    if (isLocal) {
      LogManager.addAppender(new ConsoleAppender());
      LogManager.setLevel(LogManager.logLevel.debug);
    }

    config.postTask(function () {
      var instance = config.container.get(Analytics);
      instance.enableTracking(!isLocal);
      instance.enableLogging(isLocal);
      instance.init('UA-38441871-6', 'ga');
      instance.attach();
    });
  }

  return {
    setters: [function (_analytics) {
      Analytics = _analytics.Analytics;
    }, function (_aureliaLoggingConsole) {
      ConsoleAppender = _aureliaLoggingConsole.ConsoleAppender;
    }, function (_aureliaLogging) {
      LogManager = _aureliaLogging;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJTyxXQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDaEMsUUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssTUFBTSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxLQUFLLE9BQU8sQ0FBQzs7QUFFMUYsUUFBSSxPQUFPLEVBQUU7QUFDWCxnQkFBVSxDQUFDLFdBQVcsQ0FBQyxJQUFJLGVBQWUsRUFBRSxDQUFDLENBQUM7QUFDOUMsZ0JBQVUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNoRDs7QUFFRCxVQUFNLENBQUMsUUFBUSxDQUFDLFlBQU07QUFDcEIsVUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0MsY0FBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xDLGNBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsY0FBUSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDdEMsY0FBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO0tBQ2xCLENBQUMsQ0FBQztHQUNKOzs7OzZCQW5CTyxTQUFTOzsrQ0FDVCxlQUFlIiwiZmlsZSI6InNlcnZpY2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBbmFseXRpY3N9IGZyb20gJy4vYW5hbHl0aWNzJztcbmltcG9ydCB7Q29uc29sZUFwcGVuZGVyfSBmcm9tICdhdXJlbGlhLWxvZ2dpbmctY29uc29sZSc7XG5pbXBvcnQgKiBhcyBMb2dNYW5hZ2VyIGZyb20gJ2F1cmVsaWEtbG9nZ2luZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnKSB7XG4gIGxldCBpc0xvY2FsID0gd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9PSAnaHR0cCcgJiYgd2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9PSAnaHR0cHMnO1xuXG4gIGlmIChpc0xvY2FsKSB7XG4gICAgTG9nTWFuYWdlci5hZGRBcHBlbmRlcihuZXcgQ29uc29sZUFwcGVuZGVyKCkpO1xuICAgIExvZ01hbmFnZXIuc2V0TGV2ZWwoTG9nTWFuYWdlci5sb2dMZXZlbC5kZWJ1Zyk7XG4gIH1cblxuICBjb25maWcucG9zdFRhc2soKCkgPT4ge1xuICAgIGxldCBpbnN0YW5jZSA9IGNvbmZpZy5jb250YWluZXIuZ2V0KEFuYWx5dGljcyk7XG4gICAgaW5zdGFuY2UuZW5hYmxlVHJhY2tpbmcoIWlzTG9jYWwpO1xuICAgIGluc3RhbmNlLmVuYWJsZUxvZ2dpbmcoaXNMb2NhbCk7XG4gICAgaW5zdGFuY2UuaW5pdCgnVUEtMzg0NDE4NzEtNicsICdnYScpO1xuICBcdGluc3RhbmNlLmF0dGFjaCgpO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
