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
        .catch((err) => [reject(error)]);
    });
  });
};
