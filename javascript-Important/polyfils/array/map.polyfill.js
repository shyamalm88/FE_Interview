Array.prototype.myMap = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

const ab = [1, 2, 3, 4].myMap((item, index) => {
  return item * item;
});

console.log(ab);
