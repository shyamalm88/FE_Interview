const combinationSum = (arr, target) => {
  let ans = [];
  print(arr, 0, target, ans, []);
  return ans;
};

const print = (arr, index, target, ans, ds) => {
  if (index === arr.length) {
    if (target == 0) {
      ans.push([...ds]);
    }
    return;
  }
  if (arr[index] <= target) {
    ds.push(arr[index]);
    print(arr, index + 1, target - arr[index], ans, ds);
    ds.pop();
  }
  print(arr, index + 1, target, ans, ds);
};

console.log(combinationSum([1, 2, 3, 4, 5, 6, 7], 7));
