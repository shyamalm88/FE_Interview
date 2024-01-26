Function.prototype.myBind = function (context, args) {
  context._this = this;
  return function () {
    context._this(...args);
  };
};

Function.prototype.myBind2 = function (...args) {
  let callback = this;
  let ctx = args.slice(1);
  return function (...a) {
    callback.call(args[0], ...[...ctx, ...a]);
  };
};
