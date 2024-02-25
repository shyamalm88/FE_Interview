const removeDuplicates = (arr) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != arr[j + 1]) {
      arr[i] = arr[j];
      i++;
    }
  }
  return arr.splice(0, i);
};

const arr = [
  1, 1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 9, 9,
  9,
];

console.log(removeDuplicates(arr));
