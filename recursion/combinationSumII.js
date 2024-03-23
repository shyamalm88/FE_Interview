const combinationSumII = (arr, target) => {
  let res = [];
  arr.sort((a, b) => a - b);
  dfs(arr, 0, [], res, target);
  return res;
};

const dfs = (arr, index, stack, res, target) => {
  if (target == 0) {
    res.push([...stack]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) {
      // Skip duplicates to avoid duplicate combinations
      continue;
    }
    if (arr[i] <= target) {
      stack.push(arr[i]);
      dfs(arr, i + 1, stack, res, target - arr[i]);
      stack.pop();
    }
  }
};

console.log(combinationSumII([10, 1, 2, 7, 6, 1, 5], 8));
