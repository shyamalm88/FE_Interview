const sort012 = (arr) => {
  let left = 0;
  let mid = 0;
  let right = arr.length - 1;
  while (mid <= right) {
    switch (arr[mid]) {
      case 0:
        [arr[left], arr[mid]] = [arr[mid], arr[left]];
        left++;
        mid++;
        break;
      case 1:
        mid++;
        break;
      case 2:
        [arr[mid], arr[right]] = [arr[right], arr[mid]];
        right--;
        break;
    }
  }
  return arr;
};

console.log(sort012([1, 2, 1, 2, 0, 1, 0, 0, 2, 0]));
