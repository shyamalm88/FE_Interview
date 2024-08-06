const subSequences = (arr) => {
  const n = arr.length;
  let ans = [];
  print(arr, [], 0, n, ans);
  return ans;
};

const print = (arr, stack, index, n, ans) => {
  if (index == n) {
    // console.log(stack);
    ans.push([...stack]);
    return;
  }
  stack.push(arr[index]);
  print(arr, stack, index + 1, n, ans);
  stack.pop();
  print(arr, stack, index + 1, n, ans);
};

console.log(subSequences([3, 1, 2]));
