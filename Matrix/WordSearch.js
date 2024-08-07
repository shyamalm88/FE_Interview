const wordSearch = (matrix, word) => {
  let ROW = matrix.length;
  let COL = matrix[0].length;
  let length = word.length;

  function dfs(row, col, i, visited) {
    if (i === length) {
      return true;
    }

    if (
      row < 0 ||
      col < 0 ||
      row >= ROW ||
      col >= COL ||
      word[i] != matrix[row][col] ||
      visited[row][col]
    ) {
      return false;
    }
    visited[row][col] = true;
    let res =
      dfs(row + 1, col, i + 1, visited) ||
      dfs(row - 1, col, i + 1, visited) ||
      dfs(row, col + 1, i + 1, visited) ||
      dfs(row, col - 1, i + 1, visited);

    if (res) {
      visited[row][col] = false;
    }
    return res;
  }

  for (let i = 0; i < ROW; i++) {
    for (let j = 0; j < COL; j++) {
      visited = Array(ROW)
        .fill(0)
        .map((_) => Array(COL));
      if (dfs(i, j, 0, visited)) return true;
    }
  }
  return false;
};

console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
