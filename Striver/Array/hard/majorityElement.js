let majorityElement = (nums) => {
  let elm;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (counter == 0) {
      elm = nums[i];
      counter++;
    } else if (elm == nums[i]) {
      counter++;
    } else {
      counter--;
    }
  }
  let counter1 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (elm == nums[i]) {
      counter1++;
    }
  }

  return counter1 >= nums.length / 2 ? elm : -1;
};
