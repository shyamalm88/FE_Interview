const searchInRotatedSortedArray = (arr, target) => {
  let len = arr.length;
  let left = 0;
  let end = len - 1;
  let mid = 0;
  while (left <= end) {
    mid = Math.floor((left + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > arr[end]) {
      if (arr[left] <= target && target < arr[mid]) {
        end = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (arr[mid] < target && target <= arr[mid]) {
        left = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

console.log(searchInRotatedSortedArray([4, 5, 6, 7, 0, 1, 2], 0));
