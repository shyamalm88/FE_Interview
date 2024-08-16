const threeSum = (nums, target) => {
  let res = [];
  nums.sort((a, b) => a - b); // sort the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) continue; // if current number and next number is same move to next number
    let targetSum = target - nums[i]; // calculate the difference from target
    let left = i + 1; // left pointer start from next ith position
    let right = nums.length - 1; // right pointer start from 2nd last position of the numbers array
    while (left < right) {
      // loop until left less than right
      let sum = nums[left] + nums[right]; // check the sum;
      if (sum === targetSum) {
        res.push([nums[i], nums[left], nums[right]]); // if sum matches put it into array
        while (nums[left] === nums[left + 1]) left++; // if next number of the left is same move the pointer to next
        while (nums[right] === nums[right - 1]) right--; // if previous number of the right is same move the pointer to previous
        left++;
        right--;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return res;
};

console.log(threeSum([-1, -2, -3, 4, 5, 6, 7, 0, 1, 2, 3], 0));
