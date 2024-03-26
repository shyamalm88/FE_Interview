const mergeSort = (arr) => {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = arr.splice(0, mid);
  return merge(mergeSort(left), mergeSort(arr));
};

const merge = (left, right) => {
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

console.log(mergeSort([9, 8, 7, 6, 5, 6, 7, 8, 9, 4, 3, 2, 1, 2, 3, 4, 5]));
