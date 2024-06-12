var timeLimit = function (fn, t) {
  return async function (...args) {
    const originalFnPromise = fn(...args);

    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);
    });

    return Promise.race([originalFnPromise, timeoutPromise]);
  };
};

const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
t = 150;

timeLimit(fn, t);
