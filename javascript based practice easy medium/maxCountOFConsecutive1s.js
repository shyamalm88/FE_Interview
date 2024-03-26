const maxCountOFConsecutive1s = (arr) => {
  let max = Number.MIN_SAFE_INTEGER;
  counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      counter++;
      max = Math.max(max, counter);
    } else {
      counter = 0;
    }
  }
  return max;
};

console.log(maxCountOFConsecutive1s([1, 1, 2, 3, 4, 1, 1, 1, 1, 1]));
