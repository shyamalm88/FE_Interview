// Given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

var replaceElements = function (arr) {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;

  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > max) {
      let temp = arr[i];
      arr[i] = max;
      max = temp;
    } else {
      arr[i] = max;
    }
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
