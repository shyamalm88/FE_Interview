const lowerBound = (arr, target) => {
  let ans = arr.length;
  let left = 0;
  let right = arr.length - 1;
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

console.log(lowerBound([1, 2, 3, 4, 5, 6, 7, 8, 10, 10], 9));
