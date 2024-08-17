var twoSumII = function (nums, target) {
  let start = 0;
  let end = nums.length;
  while (start < end) {
    if (target == nums[start] + nums[end]) {
      return [start + 1, end + 1];
    }
    if (target > nums[start] + nums[end]) {
      start++;
    } else {
      end--;
    }
  }
};

console.log(twoSumII([1, 3, 4, 5, 6, 7, 9, 10, 11], 9));
