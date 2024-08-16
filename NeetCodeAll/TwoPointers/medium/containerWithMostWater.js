const containerWithMostWater = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let max = 0;
  while (left < right) {
    let area = (right - left) * Math.min(arr[left], arr[right]);
    if (area > max) {
      max = area;
    }
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(containerWithMostWater(arr));
