let singleNumber = (nums) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  for (let [key, val] of Object.entries(map)) {
    if (val == 1) {
      return key;
    }
  }
  return -1;
};
