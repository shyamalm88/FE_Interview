const trappingRainWater = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  let leftMax = 0; // for checking what is the leftMax Building Height
  let rightMax = 0; // for checking what is the rightMax Building Height
  let result = 0;
  while (left <= right) {
    if (arr[left] <= arr[right]) {
      //checking with previous left building height, if its greater then update leftMax or store water
      if (arr[left] >= leftMax) {
        //updating the leftMax building height
        leftMax = arr[left];
      } else {
        // store the water
        result += leftMax - arr[left];
      } //move left to next
      left++;
    } else {
      //checking with previous right building height, if its greater then update rightMax or store water
      if (arr[right] >= rightMax) {
        //updating the rightMax building height
        rightMax = arr[right];
      } else {
        // store the water
        result += rightMax - arr[right];
      }
      //move right to previous
      right--;
    }
  }
  return result;
};

console.log(trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
