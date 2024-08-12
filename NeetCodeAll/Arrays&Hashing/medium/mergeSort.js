var mergeSort = function (nums) {
  let length = nums.length;
  if (length < 2) {
    return nums;
  }
  let mid = Math.floor(length / 2);
  let left = nums.splice(0, mid);
  return merge(mergeSort(left), mergeSort(nums));
};

const mergeSort = (left, right) => {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift());
    } else {
      res.push(right.shift());
    }
  }
  return [...res, ...left, ...right];
};

console.log(mergeSort([5, 2, 3, 1]));
