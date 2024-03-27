const factorial = (n, dp) => {
  if (n == 0) return 0;
  if (n === 1) return 1;
  if (dp[n]) {
    return dp[n];
  }
  dp[n] = n * factorial(n - 1, dp);
  return dp[n];
};

console.log(factorial(10, []));
