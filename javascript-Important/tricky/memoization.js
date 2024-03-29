const memoize = function (func) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = func.apply(this, args);
    cache[key] = result;
    return result;
  };
};

const factorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
};

const memoizeFactorial = memoize(factorial);

console.time();
console.log(memoizeFactorial(100)); //9.33262154439441e+157
console.timeEnd(); // 2.445ms
console.time();
console.log(memoizeFactorial(100)); //9.33262154439441e+157
console.timeEnd(); // 0.045ms
