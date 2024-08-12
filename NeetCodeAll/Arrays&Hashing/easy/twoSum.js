var twoSum = function (nums, target) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      res.push(i, map.get(target - nums[i]));
    } else {
      map.set(nums[i], i);
    }
  }
  return res;
};
