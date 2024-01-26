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

const add = (a, b) => {
  return a + b;
};

const memoizeAdd = memoize(add);

console.log(memoizeAdd(2, 3));
console.log(memoizeAdd(2, 4));
