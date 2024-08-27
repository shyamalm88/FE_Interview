Array.prototype.flatten = function () {
  let res = [];
  this.forEach((element) => {
    if (Array.isArray(element)) {
      res = res.concat(element.flatten());
    } else {
      res.push(element);
    }
  });
  return res;
};

console.log(
  [
    1,
    2,
    3,
    [],
    [5, 6, [7], [8, [9, [10]]]],
    11,
    12,
    13,
    [14, [[[[[15, [16]]]]]]],
    17,
    18,
    [19, [20, [21, [22, [23, [24, [[[[[25]]]]]]]]]]],
  ].flatten()
);
