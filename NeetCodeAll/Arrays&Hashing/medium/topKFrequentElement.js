// Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

var topKFrequent = function (nums, k) {
  let map = new Map();
  let bucket = [],
    result = [];

  for (let i of nums) {
    let count = map.get(i) || 0;
    map.set(i, count + 1);
  }

  for (let [i, freq] of map) {
    bucket[freq] = (bucket[freq] || new Set()).add(i);
  }

  for (let i = bucket.length - 1; i >= 0; i--) {
    if (bucket[i]) result.push(...bucket[i]);
    if (result.length >= k) break;
  }

  return result;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
// console.log(topKFrequent([-1, -1], 1));
