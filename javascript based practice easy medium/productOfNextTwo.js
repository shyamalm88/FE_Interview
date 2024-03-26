function productOfNextTwo(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length - 2) {
      result.push(arr[i + 1] * arr[i + 2]);
    } else if (i === arr.length - 2) {
      result.push(arr[i + 1] * arr[0]);
    } else {
      result.push(arr[0] * arr[1]);
    }
  }
  return result;
}

console.log(productOfNextTwo([2, 3, 4, 5, 6, 7]));
