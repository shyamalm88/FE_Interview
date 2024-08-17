let leaders = (nums) => {
  let max = -Infinity;
  let res = [];
  for (let i = nums.length; i >= 0; i--) {
    if (nums[i] > max) {
      res.unshift(nums[i]);
      max = Math.max(max, nums[i]);
    }
  }
  return res;
};
