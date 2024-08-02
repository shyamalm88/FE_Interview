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
  console.log(matrix);
  return matrix;
};

let matrix = [
  [1, 5, 45, 80, 81],
  [6, 7, 48, 82, 83],
  [20, 22, 49, 85, 86],
  [21, 23, 50, 90, 92],
];

rotateImage(matrix);
