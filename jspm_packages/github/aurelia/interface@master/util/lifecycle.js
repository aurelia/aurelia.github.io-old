/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  exports.invokeLifecycle = invokeLifecycle;

  function invokeLifecycle(instance, name, model) {
    if (typeof instance[name] === 'function') {
      var result = instance[name](model);

      if (result instanceof Promise) {
        return result;
      }

      if (result !== null && result !== undefined) {
        return Promise.resolve(result);
      }

      return Promise.resolve(true);
    }

    return Promise.resolve(true);
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwvbGlmZWN5Y2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQU8sV0FBUyxlQUFlLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDckQsUUFBSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDeEMsVUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDOztBQUVuQyxVQUFJLE1BQU0sWUFBWSxPQUFPLEVBQUU7QUFDN0IsZUFBTyxNQUFNLENBQUM7T0FDZjs7QUFFRCxVQUFJLE1BQU0sS0FBSyxJQUFJLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtBQUMzQyxlQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7T0FDaEM7O0FBRUQsYUFBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQzlCOztBQUVELFdBQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUM5QiIsImZpbGUiOiJ1dGlsL2xpZmVjeWNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpbnZva2VMaWZlY3ljbGUoaW5zdGFuY2UsIG5hbWUsIG1vZGVsKSB7XG4gIGlmICh0eXBlb2YgaW5zdGFuY2VbbmFtZV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICBsZXQgcmVzdWx0ID0gaW5zdGFuY2VbbmFtZV0obW9kZWwpO1xuXG4gICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCAmJiByZXN1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXN1bHQpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodHJ1ZSk7XG4gIH1cblxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
