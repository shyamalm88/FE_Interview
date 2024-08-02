const findMissingNumber = (arr) => {
  let n = arr.length;
  actualSum = (n * (n + 1)) / 2;
  calculatedSum = 0;
  for (let i = 0; i < n - 1; i++) {
    calculatedSum += arr[i];
  }
  return actualSum - calculatedSum;
};

console.log(findMissingNumber([1, 2, 3, 4, 5, 7, 8, 9]));
