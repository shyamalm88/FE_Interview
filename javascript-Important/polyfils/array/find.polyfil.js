Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return this[i];
    }
  }
};

const ab = [1, 2, 3, 4].myFind((item, index) => {
  return item > 2;
});

console.log(ab);
