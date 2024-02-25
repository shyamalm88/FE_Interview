const nextPermutation = (arr) => {
  let length = arr.length;
  let i = length - 2;
  let j = length - 1;
  while (i >= 0 && arr[i] >= arr[i + 1]) i--;

  if (i >= 0) {
    while (j > i && arr[j] <= arr[i]) {
      j--;
    }
    [arr[i], arr[j]] = [arr[j], arr[i]];
    reverse(arr, i + 1, length - 1);
  } else {
    reverse(arr, 0, length - 1);
  }
  return arr;
};

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

console.log(nextPermutation([3, 1, 2]));
