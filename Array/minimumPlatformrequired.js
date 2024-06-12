const minimumPlatformRequired = (intervals) => {
  intervals.sort(([a, b], [c, d]) => {
    if (a != c) {
      return a - c;
    }
    return b - d;
  });
  let platformRequired = 1;
  let i = 1,
    j = 0;
  let max = 1;

  while (i < intervals.length - 1 && j < intervals.length - 1) {
    if (intervals[i][0] <= intervals[j][1]) {
      platformRequired++;
      i++;
    }
    if (intervals[i][0] > intervals[j][1]) {
      platformRequired--;
      j++;
    }
    max = Math.max(max, platformRequired);
  }
  return max;
};

console.log(
  minimumPlatformRequired([
    [120, 600],
    [50, 550],
    [550, 700],
    [200, 500],
    [700, 900],
    [850, 1000],
  ])
);
