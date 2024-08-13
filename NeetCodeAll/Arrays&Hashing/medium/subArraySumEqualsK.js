var subarraySum = function (nums, k) {
  let map = {};
  let sum = 0;
  let res = 0;

  map[0] = 1;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    res += map[sum - k] || 0;
    map[sum] = 1 + (map[sum] || 0);
  }

  return res;
};

var subarraySum = function (nums, k) {
  // key: prefixSum
  // value: frequency
  let hash = new Map();
  // base case: handle case for subarray start from 0
  hash.set(0, 1);

  let total = 0;
  let prefixSum = 0;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    // there is a subarray ending at the current index whose sum is k
    if (hash.get(prefixSum - k) !== undefined) {
      total += hash.get(prefixSum - k);
    }

    // update hashmap
    hash.set(prefixSum, (hash.get(prefixSum) || 0) + 1);
  }

  return total;
};

console.log(subarraySum([1, 2, 3], 3));
