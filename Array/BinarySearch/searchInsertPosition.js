var searchInsert = function (nums, target) {
  var len = nums.length;
  var left = 0;
  var right = len - 1;
  var mid = 0;

  if (!len) return 0;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }

  return nums[mid] > target ? mid : mid + 1;
};
