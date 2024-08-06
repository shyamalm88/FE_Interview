const isFibonacci = (n) => {
  if (isPerfectSquare(5 * n * n - 4) || isPerfectSquare(5 * n * n + 4)) {
    return true;
  } else {
    return false;
  }
};

const isPerfectSquare = (x) => {
  const s = parseInt(Math.sqrt(x));
  if (s * s === x) {
    return true;
  } else {
    return false;
  }
};

console.log(isFibonacci(41));
