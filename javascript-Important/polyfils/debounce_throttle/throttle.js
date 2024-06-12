const throttle = function (callback, delay) {
  let flag = true;
  let context = this;
  let args = arguments;
  return function () {
    if (flag) {
      flag = false;
      callback.apply(context, args);
      setTimeout(() => {
        flag = true;
      }, delay);
    }
  };
};
