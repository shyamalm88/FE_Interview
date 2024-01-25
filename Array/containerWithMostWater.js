const containerWithMostWater = (height) => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    const minArea = Math.min(height[left], height[right]) * (right - 1);
    max = Math.max(max, minArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

console.log(containerWithMostWater([3, 1, 2, 4, 5]));
