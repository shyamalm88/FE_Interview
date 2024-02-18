const selectionSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
};

const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(selectionSort(arr));
