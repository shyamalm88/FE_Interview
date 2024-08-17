let spiralOrder = (matrix) => {
  let n = matrix.length;
  let m = matrix[0].length;
  let res = [];
  let left = 0;
  let right = m - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > left; i--) {
        res.push(matrix[bottom][i]);
      }
      for (let i = bottom; i > top; i--) {
        res.push(matrix[i][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  return res;
};
