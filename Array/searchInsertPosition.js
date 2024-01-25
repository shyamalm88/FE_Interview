const searchInsertPosition = (arr, target) => {
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;

  if (!arr.length) return 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return arr[mid] > target ? mid : mid + 1;
};

console.log(searchInsertPosition([1, 3, 5, 6], 9));
