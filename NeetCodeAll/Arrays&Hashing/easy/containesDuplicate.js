var containsDuplicate = function (nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) {
      return true;
    } else {
      map.set(nums[i], i);
    }
  }
  return false;
};

console.log(containsDuplicate([0, 4, 5, 0, 3, 6]));
