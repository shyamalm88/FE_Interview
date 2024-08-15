var findDisappearedNumbers = function (nums) {
  let n = nums.length;
  const numSet = new Set(nums);
  const missingNumbers = [];

  for (let i = 1; i <= n; i++) {
    if (!numSet.has(i)) {
      missingNumbers.push(i);
    }
  }

  return missingNumbers;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
