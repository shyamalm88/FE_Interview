const printAllPerMutationsOfArrayOrString = (arr) => {
  let ans = [];
  recurPermute(arr, 0, ans);
  return ans;
};

const recurPermute = (arr, index, ans) => {
  if (index === arr.length) {
    let ds = [];
    for (let i = 0; i < arr.length; i++) {
      ds.push(arr[i]);
    }
    ans.push(ds);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    swap(index, i, arr);
    recurPermute(arr, index + 1, ans);
    swap(index, i, arr);
  }
};

const swap = (x, y, arr) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

console.log(printAllPerMutationsOfArrayOrString([3, 2, 1]));
