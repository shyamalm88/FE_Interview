const removeElements = (arr, target) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] != target) {
      arr[i] = arr[j];
      i++;
    }
  }
  return arr.splice(0, i);
};

console.log(removeElements([1, 2, 2, 3, 2], 2));
