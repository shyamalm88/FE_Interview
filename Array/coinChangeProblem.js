const coinChange = (arr, amount) => {
  let dp = [];
  return util(arr, amount, dp);
};

const util = (arr, amount, dp) => {
  if (dp[amount - 1]) return dp[amount - 1];
  if (amount < 0) return -1;
  if (amount === 0) return 0;
  let temp = 0;
  let max = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    temp = util(arr, amount - arr[i], dp);
    if (temp != -1) {
      max = Math.min(max, temp + 1);
    }
  }
  dp[amount - 1] = max === Number.MAX_SAFE_INTEGER ? -1 : max;
  return dp[amount - 1];
};

console.log(coinChange([1, 2, 5], 11));
