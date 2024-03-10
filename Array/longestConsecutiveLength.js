const longestConsecutiveLength = (arr) => {
  arr.sort((a, b) => a - b);
  let longest = 1;
  let counter = 0;
  let lastSmaller = Number.MIN_VALUE;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 === lastSmaller) {
      counter++;
      lastSmaller = arr[i];
    } else if (arr[i] !== lastSmaller) {
      counter = 1;
      lastSmaller = arr[i];
    }
    longest = Math.max(longest, counter);
  }
  return longest;
};

console.log(longestConsecutiveLength([101, 1, 102, 2, 103, 104, 6, 5, 3, 7]));
