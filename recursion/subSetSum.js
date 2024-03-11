const subSetSum = (arr) => {
  let res = [];
  sumPrint(arr, 0, 0, res);
  return res;
};

const sumPrint = (arr, sum, index, res) => {
  if (index === arr.length) {
    res.push(sum);
    return;
  }
  sumPrint(arr, sum + arr[index], index + 1, res);
  sumPrint(arr, sum, index + 1, res);
};

console.log(subSetSum([1, 2, 3, 4]));
