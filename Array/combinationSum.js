const combinationSum = (arr, target) => {
  let res = [];

  dfs(arr, 0, [], res, target);
  return res;
};

const dfs = (arr, index, current, res, target) => {
  if (target == 0) {
    res.push([...current]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    if (arr[i] <= target) {
      current.push(arr[i]);
      dfs(arr, i, current, res, target - arr[i]);
      current.pop();
    }
  }
};

console.log(combinationSum([2, 3, 4, 7], 7));
