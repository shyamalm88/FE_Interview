var twoSum = function (nums, target) {
  let start = 0;
  let end = nums.length;
  while (start < end) {
    if (target - nums[start] == nums[end]) {
      return [start + 1, end + 1];
    }
    if (target - nums[start] > nums[end]) {
      start++;
    } else {
      end--;
    }
  }
};
