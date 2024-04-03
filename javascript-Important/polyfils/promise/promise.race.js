const myPromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((element, i) => {
      Promise.resolve(element).then(resolve).catch(reject);
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

myPromiseRace([promise1, promise2])
  .then((value) => {
    console.log(value);
    // Both resolve, but promise2 is faster
  })
  .catch((err) => console.log(err));
