const combinationSum = (arr, target) => {
  let res = [];

  dfs(arr, 0, [], res, target);
  return res;
};

const dfs = (arr, index, stack, res, target) => {
  if (target == 0) {
    res.push([...stack]);
    return;
  }
  for (let i = index; i < arr.length; i++) {
    if (arr[i] <= target) {
      stack.push(arr[i]);
      dfs(arr, i, stack, res, target - arr[i]);
      stack.pop();
    }
  }
};

console.log(combinationSum([2, 3, 4, 7], 7));
