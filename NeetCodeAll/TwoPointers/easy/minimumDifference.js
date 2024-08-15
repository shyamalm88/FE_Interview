// You are given a 0-indexed integer array nums, where nums[i] represents the score of the ith student. You are also given an integer k.

// Pick the scores of any k students from the array so that the difference between the highest and the lowest of the k scores is minimized.

// Return the minimum possible difference.

var minimumDifference = function (nums, k) {
  nums.sort((a, b) => a - b);

  let i = 0;
  let j = k - 1;
  let diff = Number.MAX_SAFE_INTEGER;
  while (j < nums.length) {
    diff = Math.min(diff, nums[j] - nums[i]);
    i++;
    j++;
  }
  return diff;
};

console.log(minimumDifference([9, 4, 1, 7], 2));
