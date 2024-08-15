var removeDuplicates = function (nums) {
  let left = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[left] !== nums[i]) {
      nums[left + 1] = nums[i];
      left++;
    }
  }
  return left + 1;
};

console.log(removeDuplicates([1, 1, 2]));
