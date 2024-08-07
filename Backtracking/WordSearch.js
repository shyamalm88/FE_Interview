const wordSearch = (board, word) => {
  var ROW = board.length;
  var COL = (board[0] || []).length;
  var length = word.length;
  var visited = null;

  if (!ROW || !COL || !length) return false;

  for (var i = 0; i < ROW; i++) {
    for (var j = 0; j < COL; j++) {
      visited = Array(ROW)
        .fill(0)
        .map((_) => Array(COL));
      if (helper(board, word, i, j, 0, visited)) return true;
    }
  }

  return false;
};

var helper = function (board, word, row, col, index, visited) {
  if (index === word.length) return true;
  if (
    row < 0 ||
    col < 0 ||
    row >= board.length ||
    col >= board[row].length ||
    visited[row][col] ||
    board[row][col] !== word[index]
  )
    return false;

  var res = false;

  visited[row][col] = true;

  res =
    helper(board, word, row - 1, col, index + 1, visited) ||
    helper(board, word, row + 1, col, index + 1, visited) ||
    helper(board, word, row, col - 1, index + 1, visited) ||
    helper(board, word, row, col + 1, index + 1, visited);

  if (!res) visited[row][col] = false;

  return res;
};

console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCS"
  )
);
