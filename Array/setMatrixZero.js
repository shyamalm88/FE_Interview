const setMatrixZero = (matrix) => {
  let m = matrix.length;
  let n = matrix[0].length;
  let col = Array(n).fill(0); // taking an extra indicator to know which columns need to mark as 0
  let row = Array(m).fill(0); // taking an extra indicator to know which row need to mark as 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] == 0) {
        col[j] = 1; // marking the column index as 1 so later this whole column we can change into 0
        row[i] = 1; // marking the row index as 1 so later this whole column we can change into 0
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  return matrix;
};

console.log(
  setMatrixZero([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);

console.log(
  setMatrixZero([
    [1, 1, 0, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 0],
  ])
);
