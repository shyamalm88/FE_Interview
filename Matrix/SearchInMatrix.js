let searchInMatrix = function (matrix, value) {
  let M = matrix.length; // rows
  let N = matrix[0].length; // columns

  let i = 0;
  let j = N - 1;

  while (i < M && j >= 0) {
    if (matrix[i][j] === value) {
      return [i, j];
    } else if (value < matrix[i][j]) {
      // search left
      j = j - 1;
    } else {
      // search down
      i = i + 1;
    }
  }
  return [-1, -1];
};

let matrix = [
  [1, 5, 45, 80, 81],
  [6, 7, 48, 82, 83],
  [20, 22, 49, 85, 86],
  [21, 23, 50, 90, 92],
];

console.log("81 is at..");
output = searchInMatrix(matrix, 81);
console.log(output);
