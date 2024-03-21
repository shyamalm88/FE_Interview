const maximumSubArraySum = (arr) => {
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return max;
};

console.log(maximumSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
