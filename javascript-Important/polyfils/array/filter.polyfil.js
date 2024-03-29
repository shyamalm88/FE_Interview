Array.prototype.myFilter = function (callback) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};

const ab = [1, 2, 3, 4].myFilter((item, index) => {
  return item > 2;
});

console.log(ab);
