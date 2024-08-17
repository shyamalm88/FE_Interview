let rearrangeArray = (nums) => {
  let positive = [];
  let negetive = [];
  let res = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) {
      negetive.push(nums[i]);
    } else {
      positive.push(nums[i]);
    }
  }

  let i = 0;
  while (res.length != nums.length) {
    res[2 * i] = positive[i];
    res[2 * i + 1] = negetive[i];
    i++;
  }
  return res;
};
