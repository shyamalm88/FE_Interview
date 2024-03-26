const quickSort = (arr, l, h) => {
  if (arr.length < 2) {
    return arr;
  }
  if (l < h) {
    let j = partition(arr, l, h);
    quickSort(arr, l, j - 1);
    quickSort(arr, j + 1, h);
  }
  return arr;
};

const partition = (arr, l, h) => {
  let pivot = arr[h];
  let i = l - 1;
  for (let j = l; j <= h - 1; j++) {
    if (arr[j] <= pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, h);
  return i + 1;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(quickSort(arr, 0, arr.length - 1));
