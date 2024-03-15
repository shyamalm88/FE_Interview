const allPermutations = (arr) => {
  let ans = [];
  let map = Array(arr.length);
  print(arr, ans, [], map);
  return ans;
};

const print = (arr, ans, ds, map) => {
  if (ds.length === arr.length) {
    ans.push([...ds]);
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!map[i]) {
      map[i] = true;
      ds.push(arr[i]);
      print(arr, ans, ds, map);
      ds.pop();
      map[i] = false;
    }
  }
};

console.log(allPermutations([1, 2, 3]));
