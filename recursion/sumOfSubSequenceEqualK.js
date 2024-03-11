const sumOfSubSequenceEqualK = (arr, k) => {
  let ans = [];
  print(arr, 0, k, 0, [], ans, arr.length);
  return ans;
};

const print = (arr, s, k, index, stack, ans, n) => {
  if (s > k) return;
  if (index === n) {
    if (k == s) {
      ans.push([...stack]);
      return ans;
    } else {
      return;
    }
  }

  s += arr[index];
  stack.push(arr[index]);
  print(arr, s, k, index + 1, stack, ans, n);
  s -= arr[index];
  stack.pop();
  print(arr, s, k, index + 1, stack, ans, n);
};

console.log(sumOfSubSequenceEqualK([1, 2, 1], 2));
