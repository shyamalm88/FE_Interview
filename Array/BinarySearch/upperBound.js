const upperBound = (nums, x) => {
  let left = 0;
  let right = nums.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > x) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

console.log(upperBound([1, 2, 3, 4, 5, 6, 7, 8, 10, 10], 0));
