var uniquePaths = function (m, n) {
  var dp = Array(m);
  if (!m || !n) return 0;
  for (var i = 0; i < m; i++) {
    dp[i] = Array(n);
    for (var j = 0; j < n; j++) {
      if (j > 0 && i > 0) dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      else if (j > 0 && i === 0) dp[i][j] = dp[i][j - 1];
      else if (j === 0 && i > 0) dp[i][j] = dp[i - 1][j];
      else dp[i][j] = 1;
    }
  }
  return dp[m - 1][n - 1];
};
