const myPromiseAllSettled = function (promises) {
  let counter = 0;
  const results = new Array(promises.length);
  return new Promise((resolve, reject) => {
    promises.forEach((elem, i) => {
      elem
        .resolve()
        .then((res) => {
          results[i] = {
            status: "fulfilled",
            value: res,
          };
        })
        .catch((err) => {
          results[i] = { status: "rejected", err };
        })
        .finally(() => {
          counter++;
          if (counter === promises.length - 1) {
            resolve(results);
          }
        });
    });
  });
};
