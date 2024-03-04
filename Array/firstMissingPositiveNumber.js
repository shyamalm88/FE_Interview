const firstMissingPositive = function (arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]); // add every value in set
  }
  let temp = null;
  for (let i = 1; i < arr.length + 1; i++) {
    // start from 1 because the minimum positive value starts from 1
    if (!set.has(i)) {
      // check if value exist in set
      temp = i;
      break;
    }
  }
  if (temp) {
    // if value does not exist in set
    return temp;
  }
  // other wise the minimum positive array will be the arr.length + 1 value
  return arr.length + 1;
};
