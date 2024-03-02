const jumpGameII = (arr) => {
  let steps = 0;
  let now = 0;
  let max = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    max = Math.max(max, i + arr[i]);
    if (i === now) {
      steps++;
      now = max;
    }
  }
  return steps;
};

console.log(jumpGameII([2, 3, 1, 1, 4]));
