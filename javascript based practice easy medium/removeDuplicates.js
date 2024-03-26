const removeDuplicates = (arr) => {
  let map = {};
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = arr[i];
      res.push(arr[i]);
    }
  }
  return res;
};

const removeDuplicatesII = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i]) == -1) {
      res.push(arr[i]);
    }
  }
  return res;
};

console.log(
  removeDuplicates([1, 2, 1, 3, 4, 3, 2, 5, 4, 3, 1, 6, 7, 8, 9, 8, 7, 6, 5])
);

console.log(
  removeDuplicatesII([1, 2, 1, 3, 4, 3, 2, 5, 4, 3, 1, 6, 7, 8, 9, 8, 7, 6, 5])
);
