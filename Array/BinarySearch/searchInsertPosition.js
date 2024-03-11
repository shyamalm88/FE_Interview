const searchInsertPosition = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] >= target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return ans;
};
