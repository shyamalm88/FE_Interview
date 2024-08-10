var numIslands = function (grid) {
  var m = grid.length;
  var n = (grid[0] || []).length;
  var dp = Array(m)
    .fill(0)
    .map((_) => Array(n));
  var num = 0;
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (dp[j][i] !== true && grid[j][i] === "1") {
        num++;
        mark(dp, j, i, grid);
      }
    }
  }
  return num;
};

var mark = function (dp, j, i, grid) {
  if (dp[j] && dp[j][i] !== true && grid[j][i] === "1") {
    dp[j][i] = true;
    mark(dp, j - 1, i, grid);
    mark(dp, j + 1, i, grid);
    mark(dp, j, i - 1, grid);
    mark(dp, j, i + 1, grid);
  }
};
