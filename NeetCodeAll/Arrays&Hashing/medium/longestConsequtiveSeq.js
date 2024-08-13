var longestConsecutive = function (nums) {
  const numSet = new Set(nums);
  let longest = 0;
  for (const n of nums) {
    if (!numSet.has(n - 1)) {
      // if set not has items previous item present then it is the start of the sequence
      let length = 1;
      while (numSet.has(n + length)) {
        length++;
      }
      longest = Math.max(longest, length);
    }
  }
  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
