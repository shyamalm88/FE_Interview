const removeDuplicatesFromSortedArray = (arr) => {
  let start = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr[start] = arr[i];
      start++;
    }
  }
  arr[start] = arr[arr.length - 1];
  return arr.splice(0, start + 1);
};

console.log(
  removeDuplicatesFromSortedArray([
    1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 22,
  ])
);
