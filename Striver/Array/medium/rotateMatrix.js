let rotateMatrix = (matrix) => {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = i + 1; j < matrix[0].length; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  matrix.forEach((element) => {
    element.reverse();
  });

  return matrix;
};
