const firstAndLastOccurrences = (arr, target) => {
  const first = firstOccurrence(arr, arr.length, target);
  const last = lastOccurrence(arr, arr.length, target);

  return [first, last];
};

const firstOccurrence = (arr, length, target) => {
  let first = -1;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return first;
};

const lastOccurrence = (arr, length, target) => {
  let last = -1;
  let left = 0;
  let right = length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return last;
};

console.log(firstAndLastOccurrences([1, 2, 3, 4, 5, 8, 8, 8, 8, 8, 8, 9], 8));
