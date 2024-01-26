const asyncSeriesExecuter = function (tasks) {
  tasks.reduce((acc, curr) => {
    return acc.then(() => {
      return new Promise((resolve, reject) => {
        try {
          curr.then((val) => {
            console.log(val);
            resolve();
          });
        } catch {
          curr((val) => {
            console.log(val);
            resolve();
          });
        }
      });
    });
  }, Promise.resolve());
};

const asyncTask = function (i) {
  return function (callback) {
    setTimeout(() => {
      callback(`Completing ${i}`);
    }, 100 * i);
  };
};

const asyncTask2 = function (i) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Completing ${i}`), 100 * i);
  });
};

const tasks = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask2(10),
  asyncTask(2),
  asyncTask(5),
];

asyncSeriesExecuter(tasks);
