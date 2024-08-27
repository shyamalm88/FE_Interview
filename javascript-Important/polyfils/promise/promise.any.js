const myPromiseAny = function (promises) {
  let errors = [];
  return new Promise((resolve, reject) => {
    promises.forEach((element, i) => {
      element
        .then((resp) => resolve(resp))
        .catch((err) => {
          errors[i] = err;
          if (i === promises.length) {
            reject(new AggregateError(errors), "All promises were rejected");
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

// Promise.any([test1, test2, test3])
//   .then((value) => {
//     console.log(value);
//     // Both resolve, but promise2 is faster
//   })
//   .catch((err) => console.log(err));
