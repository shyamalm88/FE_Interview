let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  };
};

console.log(sum(5)(4)(3)(2)());
console.log(sum(5, 3)());

const curriedSum = function (...args) {
  const allArgs = [...args];
  if (allArgs.length === 0) {
    return 0;
  } else {
    let curry = function (...nextArgs) {
      allArgs.push(...nextArgs);
      if (nextArgs.length === 0) {
        return allArgs.reduce((a, b) => a + b, 0);
      } else {
        return curry;
      }
    };
    return curry;
  }
};

console.log(curriedSum(1)(2)(3)(4)(5)()); // Outputs: 15
console.log(curriedSum(1, 2)(3)(4)(5)()); // Outputs: 15
console.log(curriedSum(1)(2, 3)(4)(5)()); // Outputs: 15
console.log(curriedSum(1)(2)(3, 4)(5)()); // Outputs: 15
console.log(curriedSum(1, 2, 3, 4, 5)()); // Outputs: 15
