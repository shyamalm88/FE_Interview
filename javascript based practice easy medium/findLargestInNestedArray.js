const findLargestInNestedArray = (arr) => {
  return formatArray(arr, max);
};

let max = Number.MIN_SAFE_INTEGER;

const formatArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      formatArray(arr[i]);
    } else {
      max = Math.max(max, arr[i]);
    }
  }
  return max;
};

console.log(
  findLargestInNestedArray([
    [
      [3, 4, 123],
      [70, 8, 9, [10, 11]],
      [111, 112, 123],
    ],
  ])
);
