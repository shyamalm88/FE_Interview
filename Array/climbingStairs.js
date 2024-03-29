const climbingStairs = (n, dp) => {
  if (n == 0 || n == 1) {
    return (dp[n] = 1);
  }
  if (dp[n]) {
    return dp[n];
  } else {
    left = climbingStairs(n - 1, dp);
    right = climbingStairs(n - 2, dp);
    dp[n] = left + right;
    return dp[n];
  }
};

const n = 5;
console.log(climbingStairs(n, Array(n + 1)));
