const leadersInArray = (arr) => {
  let max = Number.MIN_VALUE;
  let ans = [];
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] > max) {
      ans.push(arr[i]);
      max = arr[i];
    }
  }
  return ans;
};

console.log(leadersInArray([10, 22, 12, 3, 0, 6]));
