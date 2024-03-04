const rotateImage = (matrix) => {
  let n = matrix.length;

  // transposing matrix
  // every column will be row after transpose
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]; // swap in between i j indexes
    }
  }

  //reverse every row
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
};
