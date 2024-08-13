function validSudoku(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let value = board[i][j];
      if (value != ".") {
        if (
          !validColumn(board, i, j, value) ||
          !validRow(board, i, j, value) ||
          !validBox(board, i, j, value)
        ) {
          return false;
        }
      }
    }
  }
  return true;
}

const validRow = (board, row, col, value) => {
  for (let i = 0; i < 8; i++) {
    if (i != col) {
      if (board[row][i] === value) {
        return false;
      }
    }
  }
  return true;
};

const validColumn = (board, row, col, value) => {
  for (let i = 0; i < 8; i++) {
    if (i != row) {
      if (board[i][col] === value) {
        return false;
      }
    }
  }
  return true;
};

const validBox = (board, row, col, value) => {
  let startRow = row - (row % 3);
  let startColumn = col - (col % 3);
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startColumn; j < startColumn + 3; j++) {
      if (i != row || j != col) {
        if (board[i][j] === value) {
          return false;
        }
      }
    }
  }
  return true;
};

console.log(
  validSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
