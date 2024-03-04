const maximumProductSubArray = (arr) => {
  let prefix = 1;
  let suffix = 1;
  let ans = Number.MIN_VALUE;
  let n = arr.length;

  for (i = 0; i < n; i++) {
    if (prefix == 0) prefix = 1;
    if (suffix == 0) suffix = 1;
    prefix = prefix * arr[i];
    suffix = suffix * arr[i];
    ans = Math.max(ans, Math.max(prefix, suffix));
  }
  return ans;
};
