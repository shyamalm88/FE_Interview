let missingNumber = (arr) => {
  let n = arr.length;
  let actualSum = (n * (n + 1)) / 2;
  let calculatedSum = 0;
  for (let i = 0; i < n; i++) {
    calculatedSum += arr[i];
  }
  return actualSum - calculatedSum;
};
