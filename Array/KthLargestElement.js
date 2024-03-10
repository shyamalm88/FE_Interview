const kthLargestElement = (arr, k) => {
  k = arr.length - k;
  return quickSelect(arr, 0, arr.length - 1, k);
};

const quickSelect = (arr, l, r, k) => {
  let pivot = arr[r];
  let p = l;
  for (let i = l; i < r; i++) {
    if (arr[i] < pivot) {
      [arr[p], arr[i]] = [arr[i], arr[p]];
      p++;
    }
  }
  [arr[p], arr[r]] = [arr[r], arr[p]];

  if (p > k) return quickSelect(arr, l, p - 1, k);
  if (p < k) return quickSelect(arr, p + 1, r, k);
  else return arr[p];
};
console.log(kthLargestElement([5, 4, 3, 6, 4, 3, 2, 1], 2));
