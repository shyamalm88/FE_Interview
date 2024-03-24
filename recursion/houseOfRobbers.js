const houseRobber = (arr) => {
  let dp = [];
  return util(arr, dp, 0);
};

const util = (arr, dp, index) => {
  if (index >= arr.length) return 0;
  if (dp[index] === undefined) {
    dp[index] = Math.max(
      util(arr, dp, index + 1),
      arr[index] + util(arr, dp, index + 2)
    );
  }
  return dp[index];
};

console.log(houseRobber([2, 7, 9, 3, 1]));
