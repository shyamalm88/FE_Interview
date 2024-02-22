function findKConsecutiveSubarraySum(nums, k, s) {
  let start = 0;
  let end = 0;
  let currentSum = 0;
  let result = [];

  while (end < nums.length) {
    currentSum += nums[end];

    while (currentSum > s && start <= end) {
      currentSum -= nums[start];
      start++;
    }

    if (end - start + 1 === k && currentSum === s) {
      result.push(nums.slice(start, end + 1));
      currentSum -= nums[start];
      start++;
    }

    end++;
  }

  return result;
}

// Example usage
const nums = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6];
const k = 4;
const s = 6;

const indices = findKConsecutiveSubarraySum(nums, k, s);
console.log(indices);
