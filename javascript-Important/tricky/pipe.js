function pipe(funcs) {
  return function (arg) {
    return funcs.reduce((result, func) => {
      return func(result);
    }, arg);
  };
}

const times = (y) => (x) => x * y;
const plus = (y) => (x) => x + y;
const subtract = (y) => (x) => x - y;
const divide = (y) => (x) => x / y;
console.log(pipe([times(2), subtract(3), divide(4)]));
