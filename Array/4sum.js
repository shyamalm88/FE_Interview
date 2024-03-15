const fourSum = (arr, target) => {
  if (arr.length == 0) {
    return [];
  }
  let res = [];
  arr.sort((a, b) => a - b);
  // after sorting take i as 0; j next to i (i+1)

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // take left right next to j;
      // take right array end index;
      let left = j + 1;
      let right = arr.length - 1;
      //calculate the ith and jth position sum
      let sum = arr[i] + arr[j];
      //check requiredSum
      let requireSum = target - sum;
      while (left < right) {
        // if required sum is less than array left and right sum
        // move right to previous because the right pointer is in largest value so
        // lesser number may solve the problem
        if (requireSum < arr[left] + arr[right]) {
          right--;
        }
        // if required sum is greater than array left and right sum
        // move left to next because the left pointer is in smallest value so
        // larger number may solve the problem
        else if (requireSum > arr[left] + arr[right]) {
          left++;
        } else {
          //if found sum is matching with required sum so put all four items in result array
          res.push([arr[i], arr[j], arr[left], arr[right]]);
          //move left forward as we dont want duplicates
          while (arr[left] == arr[left + 1]) left++;
          //move right backward as we dont want duplicates
          while (arr[right] == arr[right - 1]) right--;
          // point to next element of duplicate
          left++;
          right--;
        }
      }
      // move j to next as we dont want duplicates
      while (arr[j] == arr[j + 1]) j++;
    }
    // move i to next as we dont want duplicates
    while (arr[i] == arr[i + 1]) i++;
  }
  return res;
};

console.log(fourSum([4, 3, 3, 4, 4, 2, 1, 2, 1, 1], 9));
