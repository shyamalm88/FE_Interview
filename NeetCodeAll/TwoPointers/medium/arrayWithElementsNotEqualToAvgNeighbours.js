var rearrangeArray = function (nums) {
  nums.sort((a, b) => a - b);
  let l = 0;
  let r = nums.length - 1;
  let res = [];

  while (res.length != nums.length) {
    res.push(nums[l]);
    l++;
    if (l <= r) {
      res.push(nums[r]);
      r--;
    }
  }
  return res;
};

console.log(rearrangeArray([6, 2, 0, 9, 7]));
