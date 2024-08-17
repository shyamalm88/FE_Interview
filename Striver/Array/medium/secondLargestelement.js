let secondLargestElement = (nums) => {
  // Get the length of the array
  let n = nums.length;

  // Check if the array has less than 2 elements
  if (n < 2) {
    /*If true, return -1 indicating there
            is no second largest element*/
    return -1;
  }

  /* Initialize variables to store the 
        largest and second largest elements*/
  let largest = Number.MIN_VALUE;
  let secondLargest = Number.MIN_VALUE;

  /*Single traversal to find the largest 
        and second largest elements*/
  for (let i = 0; i < n; i++) {
    if (nums[i] > largest) {
      secondLargest = largest; // assign secondlargest
      largest = nums[i]; // assign largest
    } else if (nums[i] > secondLargest && nums[i] != largest) {
      secondLargest = nums[i];
    }
  }
  // Return the second largest element
  return secondLargest == Number.MIN_VALUE ? -1 : secondLargest;
};
