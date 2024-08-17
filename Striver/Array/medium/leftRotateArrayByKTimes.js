let rotateArray = (nums, k) => {
  let n = nums.length;
  k = k % nums.length;
  reverseArray(nums, 0, k - 1);
  reverseArray(nums, k, n - 1);
  reverseArray(nums, 0, n - 1);
};

const reverseArray = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};
