let linearSearch = (nums, target) => {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    if (nums[left] === target) {
      return left;
    } else {
      left++;
    }
  }
  return -1;
};
