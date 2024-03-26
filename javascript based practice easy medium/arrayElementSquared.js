const arrayElementSquared = (arr1, arr2) => {
  if (arr1.length != arr2.length) return false;
  let set = new Set();
  for (let i = 0; i < arr1.length; i++) {
    set.add(arr1[i] * arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    if (!set.has(arr2[i])) {
      return false;
    }
  }
  return true;
};

console.log(arrayElementSquared([1, 2, 3], [4, 1, 9]));
