const nextPermutation = (arr) => {
  let index = -1;
  let l = arr.length;
  for (let i = l - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }
  if (index === -1) {
    reverse(arr, 0, arr.length - 1);
    return arr;
  }
  for (let i = l - 1; i >= index; i--) {
    if (arr[i] > arr[index]) {
      [arr[i], arr[index]] = [arr[index], arr[i]];
      break;
    }
  }
  reverse(arr, index + 1, arr.length - 1);
  return arr;
};

const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
};

console.log(nextPermutation([3, 1, 2, 4]));
