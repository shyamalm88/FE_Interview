const maximumSubArray = (nums) => {
  let maxSum = nums[0];
  let currentSum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (currentSum < 0) {
      currentSum = 0;
    }
    currentSum = nums[i] + currentSum;
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};

const arr = [-2, -3, 4, -1, -2, 1, 2, 5, -3, 2];
console.log(maximumSubArray(arr));
