const searchInRotatedSortedArray = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[start] <= arr[mid]) {
      if (arr[start] <= target && target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (arr[mid] <= target && target <= arr[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0));
