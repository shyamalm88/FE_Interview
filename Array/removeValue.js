const removeVal = (arr, val) => {
  let start = 0;
  let len = arr.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (arr[i] !== val) {
      arr[start] = arr[i];
      count++;
    }
  }
  return count;
};

console.log(removeVal([0, 1, 2, 2, 3, 0, 4, 2], 2));
