const myPromiseAll = function (promises) {
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((element, i) => {
      element
        .then((res) => {
          result.push(res);
          if (i === promises.length - 1) {
            resolve(result);
          }
        })
        .catch((err) => [reject(err)]);
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "two");
});

myPromiseAll([promise1, promise2]).then((val) => {
  console.log(val);
});
