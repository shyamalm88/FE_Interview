const minimumOperationsNeededForEmptyArray = (arr) => {
  let map = {};
  let res = 0;
  for (let i = 0; i < arr.length; i++) {
    var num = arr[i];
    map[num] = map[num] || 0;
    map[num] += 1;
  }
  console.log(map);
  let keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    if (map[keys[i]] === 1) return -1;
    res += Math.ceil(map[keys[i]] / 3);
  }

  return res;
};

console.log(minimumOperationsNeededForEmptyArray([2, 3, 3, 2, 2, 4, 2, 3, 4]));
