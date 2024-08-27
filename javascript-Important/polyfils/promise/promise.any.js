const myPromiseAny = function (promises) {
  let res = [];
  return new Promise((resolve, reject) => {
    promises.forEach((element, i) => {
      element
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          res[i] = { status: "error", reason: err };
          if (i === promises.length - 1) {
            reject(res);
          }
        });
    });
  });
};

const test1 = new Promise(function (resolve, reject) {
  setTimeout(reject, 500, "one");
});

const test2 = new Promise(function (resolve, reject) {
  setTimeout(resolve, 600, "two");
});

const test3 = new Promise(function (resolve, reject) {
  setTimeout(reject, 200, "three");
});

myPromiseAny([test1, test2, test3])
  .then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  })
  .catch((err) => console.log(err));
