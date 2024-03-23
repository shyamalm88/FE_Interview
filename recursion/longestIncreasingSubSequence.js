const longestIncreasingSubSequence = (arr) => {
  let n = arr.length;
  return util(0, -1, arr, n);
};

const util = (index, prevIndex, arr, n) => {
  if (index === n) {
    return 0;
  }
  let length = 0 + util(index + 1, prevIndex, arr, n);
  if (prevIndex == -1 || arr[index] > arr[prevIndex]) {
    length = Math.max(length, 1 + util(index + 1, index, arr, n));
  }
  return length;
};

console.log(longestIncreasingSubSequence([10, 9, 2, 5, 3, 7, 101, 18]));
