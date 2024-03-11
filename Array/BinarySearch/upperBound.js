const upperBound = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  let ans = arr.length;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] > target) {
      ans = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return ans;
};

console.log(upperBound([1, 2, 3, 4, 5, 6, 7, 8, 10, 10], 0));
