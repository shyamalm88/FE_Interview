Array.prototype.myReduce = function (callback, initialValue, context) {
  let accumulator = initialValue || undefined;
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(context, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};

const arr = [1, 2, 3, 4];
const reducedArr = arr.myReduce((acc, item) => {
  return acc + item;
});

console.log(reducedArr);
