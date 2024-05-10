const spiralMatrix = (arr) => {
  let n = arr.length;
  let m = arr[0].length;
  let res = [];
  let left = 0;
  let right = m - 1;
  let top = 0;
  let bottom = n - 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      res.push(arr[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      res.push(arr[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i > top; i--) {
        res.push(arr[bottom][i]);
      }
      for (let i = bottom; i > left; i--) {
        res.push(arr[i][top]);
      }
    }

    left++;
    right--;
    top++;
    bottom--;
  }

  return res;
};

console.log(
  spiralMatrix([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
