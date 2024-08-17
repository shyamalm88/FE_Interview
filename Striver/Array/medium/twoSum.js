const twoSum = (nums, target) => {
  let map = {};
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]]) {
      res.push([nums[i], map[target - nums[i]]]);
    } else {
      map[nums[i]] = nums[i];
    }
  }
  console.log(res);
};

console.log(twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9], 15));
