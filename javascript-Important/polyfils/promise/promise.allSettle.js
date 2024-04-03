const myPromiseAllSettled = (promises) => {
  let res = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((element, i) => {
      Promise.resolve(element)
        .then((resp) => {
          res[i] = { status: "fulfilled", value: resp };
        })
        .catch((err) => {
          res[i] = { status: "rejected", value: err };
        })
        .finally(() => {
          counter++;
          if (counter === promises.length - 1) {
            resolve(res);
          }
        });
    });
  });
};

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "one");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "two");
});

myPromiseAllSettled([promise1, promise2]).then((val) => {
  console.log(val);
});
