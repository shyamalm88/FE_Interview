const mergeTwoSortedArrays = (arr1, arr2) => {
  let i = 1;
  let j = 1;
  let a = arr1[0];
  let b = arr2[0];
  let res = [];
  while (a || b) {
    if (b === undefined || a < b) {
      res.push(a);
      a = arr1[i];
      i++;
    } else {
      res.push(b);
      b = arr2[j];
      j++;
    }
  }
  return res;
};

console.log(mergeTwoSortedArrays([0, 3, 4, 31], [4, 6, 30]));
