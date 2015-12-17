System.register(['./analytics', 'aurelia-logging-console', 'aurelia-logging'], function (_export) {
  'use strict';

  var Analytics, ConsoleAppender, LogManager;

  _export('configure', configure);

  function configure(config) {
    var isLocal = document.domain !== 'aurelia.io';

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFJTyxXQUFTLFNBQVMsQ0FBQyxNQUFNLEVBQUU7QUFDaEMsUUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUM7O0FBRS9DLFFBQUksT0FBTyxFQUFFO0FBQ1gsZ0JBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxlQUFlLEVBQUUsQ0FBQyxDQUFDO0FBQzlDLGdCQUFVLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEQ7O0FBRUQsVUFBTSxDQUFDLFFBQVEsQ0FBQyxZQUFNO0FBQ3BCLFVBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9DLGNBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsQyxjQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLGNBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3RDLGNBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztLQUNsQixDQUFDLENBQUM7R0FDSjs7Ozs2QkFuQk8sU0FBUzs7K0NBQ1QsZUFBZSIsImZpbGUiOiJzZXJ2aWNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QW5hbHl0aWNzfSBmcm9tICcuL2FuYWx5dGljcyc7XG5pbXBvcnQge0NvbnNvbGVBcHBlbmRlcn0gZnJvbSAnYXVyZWxpYS1sb2dnaW5nLWNvbnNvbGUnO1xuaW1wb3J0ICogYXMgTG9nTWFuYWdlciBmcm9tICdhdXJlbGlhLWxvZ2dpbmcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlKGNvbmZpZykge1xuICBsZXQgaXNMb2NhbCA9IGRvY3VtZW50LmRvbWFpbiAhPT0gJ2F1cmVsaWEuaW8nO1xuXG4gIGlmIChpc0xvY2FsKSB7XG4gICAgTG9nTWFuYWdlci5hZGRBcHBlbmRlcihuZXcgQ29uc29sZUFwcGVuZGVyKCkpO1xuICAgIExvZ01hbmFnZXIuc2V0TGV2ZWwoTG9nTWFuYWdlci5sb2dMZXZlbC5kZWJ1Zyk7XG4gIH1cblxuICBjb25maWcucG9zdFRhc2soKCkgPT4ge1xuICAgIGxldCBpbnN0YW5jZSA9IGNvbmZpZy5jb250YWluZXIuZ2V0KEFuYWx5dGljcyk7XG4gICAgaW5zdGFuY2UuZW5hYmxlVHJhY2tpbmcoIWlzTG9jYWwpO1xuICAgIGluc3RhbmNlLmVuYWJsZUxvZ2dpbmcoaXNMb2NhbCk7XG4gICAgaW5zdGFuY2UuaW5pdCgnVUEtMzg0NDE4NzEtNicsICdnYScpO1xuICBcdGluc3RhbmNlLmF0dGFjaCgpO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
