var majorityElement = function (nums) {
  // moore's voting algorithm
  let el;
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      el = nums[i];
      count++;
    } else if (nums[i] == el) {
      count++;
    } else {
      count--;
    }
  }
  let count1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === el) {
      count++;
    }
  }
  if (count >= nums.length / 2) return el;
  return -1;
};
