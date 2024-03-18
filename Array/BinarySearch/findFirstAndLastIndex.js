const findFirstLastIndex = (arr, target) => {
  const index = findIndex(arr, target);
  if (index === -1) {
    return [-1, -1];
  } else {
    return [
      findFirstIndex(arr, target, index),
      findLastIndex(arr, target, index),
    ];
  }
};

const findIndex = (arr, target) => {
  let left = 0;
  let right = arr.length;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

const findFirstIndex = (arr, target, index) => {
  let left = 0;
  let right = index;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

const findLastIndex = (arr, target, index) => {
  let left = index;
  let right = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] == target) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }
  return right;
};

console.log(findFirstLastIndex([5, 7, 7, 8, 8, 10], 8));
