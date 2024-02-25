const combinationSum = (arr, target) => {
  const res = [];
  const length = arr.length;
  dfs(arr, res, [], 0, length, target);
  return res;
};

const dfs = (arr, res, stack, index, length, target) => {
  if (target < 0) return;
  if (target == 0) return res.push(stack);
  arr.sort((a, b) => a - b);
  for (let i = index; i < length; i++) {
    if (arr[i] > target) break;
    let temp = Array.from(stack);
    temp.push(arr[i]);
    dfs(arr, res, temp, i, length, target - arr[i]);
  }
};

console.log(combinationSum([2, 3, 5], 8));
