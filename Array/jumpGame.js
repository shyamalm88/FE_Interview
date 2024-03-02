const jumpGame = (arr) => {
  let right = arr.length - 1;
  for (let i = right; i >= 0; i--) {
    // starting from backward
    if (i + arr[i] === right) {
      // if previous value can lead to the arr last value
      right = i;
    }
  }
  return right === 0; // if right can reach to 0 or not
};

console.log(jumpGame([2, 3, 1, 1, 4]));
