// Given an array arr, replace every element in that array with the greatest
// element among the elements to its right, and replace the last element with -1.

// After doing so, return the array.

// Example 1:

// Input: arr = [17,18,5,4,6,1]
// Output: [18,6,6,6,1,-1]
// Explanation:
// - index 0 --> the greatest element to the right of index 0 is index 1 (18).
// - index 1 --> the greatest element to the right of index 1 is index 4 (6).
// - index 2 --> the greatest element to the right of index 2 is index 4 (6).
// - index 3 --> the greatest element to the right of index 3 is index 4 (6).
// - index 4 --> the greatest element to the right of index 4 is index 5 (1).
// - index 5 --> there are no elements to the right of index 5, so we put -1.
// Example 2:

// Input: arr = [400]
// Output: [-1]
// Explanation: There are no elements to the right of index 0.

var leadersInArrayReplaceValues = function (arr) {
  let max = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    let c = max;
    max = Math.max(arr[i], max);
    arr[i] = c;
  }
  return arr;
};

// Given an array A of positive integers.
// Your task is to find the leaders in the array.
// An element of array is a leader if it is greater
// than or equal to all the elements to its right side.
// The rightmost element is always a leader.
var leadersInArray = function (arr) {
  let max = Number.MIN_VALUE;
  let ans = [];
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] >= max) {
      ans.unshift(arr[i]);
      max = arr[i];
    }
  }
  return ans;
};

console.log(leadersInArrayReplaceValues([10, 22, 12, 3, 0, 6]));
console.log(leadersInArray([10, 22, 12, 3, 0, 6]));
