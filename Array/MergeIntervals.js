const mergeIntervals = (arr) => {
  arr.sort((a, b) => a[0] - b[0]);
  const ans = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let last = ans[ans.length - 1];
    if (current[0] <= last[1]) {
      last[1] = Math.max(last[1], current[1]);
    } else {
      ans.push(current);
    }
  }
  return ans;
};

console.log(
  mergeIntervals([
    [1, 3],
    [2, 4],
    [2, 6],
    [8, 9],
    [9, 11],
    [10, 12],
    [15, 18],
    [16, 17],
  ])
);
