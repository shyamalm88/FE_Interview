const fourSum = (arr, target) => {
  if (arr.length == 0) {
    return [];
  }
  let res = [];
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      let left = j + 1;
      let right = arr.length - 1;
      let sum = arr[i] + arr[j];
      let requireSum = target - sum;
      while (left < right) {
        if (requireSum < arr[left] + arr[right]) {
          right--;
        } else if (requireSum > arr[left] + arr[right]) {
          left++;
        } else {
          res.push([arr[i], arr[j], arr[left], arr[right]]);
          while (arr[left] == arr[left + 1]) left++;
          while (arr[right] == arr[right - 1]) right--;
          left++;
          right--;
        }
      }
      while (arr[j] == arr[j + 1]) j++;
    }
    while (arr[i] == arr[i + 1]) i++;
  }
  return res;
};

console.log(fourSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));
