Function.prototype.myApply = function (context, args) {
  context._this = this;
  return context._this(...args);
};

Function.prototype.myApply2 = function (context, args) {
  let currentContext = context || globalThis;
  let randomProp = Math.random();
  while (currentContext[randomProp] !== undefined) {
    randomProp = Math.random();
  }
  currentContext[randomProp] = this;
  let result = currentContext[randomProp](...args);
  delete currentContext[randomProp];
  return result;
};
