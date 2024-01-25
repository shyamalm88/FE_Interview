const firstAndLastPosition = (arr, target) => {
  var index = findIndex(arr, target);
  return index === -1
    ? [-1, -1]
    : [findLeft(arr, target, index), findRight(arr, target, index)];
};

var findIndex = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

var findLeft = function (nums, target, index) {
  var left = 0;
  var right = index;
  while (left < right) {
    var mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

var findRight = function (nums, target, index) {
  var left = index;
  var right = nums.length - 1;
  while (left < right) {
    var mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] === target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

console.log(firstAndLastPosition([5, 7, 7, 8, 8, 10], 8));
