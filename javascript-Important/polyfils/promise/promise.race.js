const myPromiseRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((element, i) => {
      Promise.resolve(p).then(resolve).catch(reject);
    });
  });
};
