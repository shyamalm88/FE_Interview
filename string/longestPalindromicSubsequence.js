var longestPalindromeSubseq = function (s) {
  var dp = Array(s.length)
    .fill(0)
    .map(() => Array(s.length));
  var helper = function (i, j) {
    if (j < i) return 0;
    if (dp[i][j] !== undefined) return dp[i][j];
    if (s[i] === s[j]) {
      dp[i][j] = (i === j ? 1 : 2) + helper(i + 1, j - 1);
    } else {
      dp[i][j] = Math.max(
        helper(i + 1, j),
        helper(i, j - 1),
        helper(i + 1, j - 1)
      );
    }
    return dp[i][j];
  };
  return helper(0, s.length - 1);
};
