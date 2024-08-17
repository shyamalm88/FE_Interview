let sortZeroOneTwo = (nums) => {
  let left = 0;
  let mid = 0;
  let right = nums.length - 1;

  while (mid <= right) {
    switch (nums[mid]) {
      case 0:
        [nums[left], nums[mid]] = [nums[mid], nums[left]];
        left++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [nums[mid], nums[right]] = [nums[right], nums[mid]];
        right--;
        break;
    }
  }
  return nums;
};
