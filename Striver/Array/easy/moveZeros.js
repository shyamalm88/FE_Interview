let moveZeroes = (nums) => {
  let l = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[l]] = [nums[l], nums[i]];
      l++;
    }
  }
  return nums;
};
