const bestTimeToBuySellStock = (arr) => {
  let max = 0;
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (smallest > arr[i]) {
      smallest = arr[i];
    }
    max = Math.max(max, arr[i] - smallest);
  }
  return max;
};

console.log(bestTimeToBuySellStock([7, 1, 5, 3, 6, 4]));
console.log(bestTimeToBuySellStock([7, 6, 4, 3, 1]));
