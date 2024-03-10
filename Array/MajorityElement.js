// by applying Moore's voting algorithm
const majorityElement = (arr) => {
  let el;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      count++;
      el = arr[i];
    } else if (arr[i] == el) {
      count++;
    } else {
      count--;
    }
  }

  let count1 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == el) {
      count1++;
    }
  }
  if (count1 > arr.length / 2) return el;
  return -1;
};
