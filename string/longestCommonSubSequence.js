var longestCommonSubsequence = function (text1, text2) {
  var dp = Array(text1.length)
    .fill(0)
    .map(() => Array(text2.length));
  let dfs = (i, j) => {
    if (i === text1.length || j === text2.length) {
      return 0;
    }
    if (dp[i][j] !== undefined) return dp[i][j];
    if (text1[i] === text2[j]) {
      dp[i][j] = 1 + dfs(i + 1, j + 1);
    } else {
      dp[i][j] = Math.max(dfs(i + 1, j), dfs(i, j + 1), dfs(i + 1, j + 1));
    }
    return dp[i][j];
  };
  dfs(0, 0, 0);
  return dp[0][0];
};

console.log(longestCommonSubsequence("abcde", "ace"));
