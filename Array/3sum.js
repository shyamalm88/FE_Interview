const threeSum = (nums, target) => {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) continue;
    let targetSum = target - nums[i];
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right];
      if (sum < targetSum) {
        left++;
      } else if (sum > targetSum) {
        right--;
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        while (nums[left] === nums[left + 1]) left++;
        while (nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, -2, -3, 4, 5, 6, 7, 0, 1, 2, 3], 0));
