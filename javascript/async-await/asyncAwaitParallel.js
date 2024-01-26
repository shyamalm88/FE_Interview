function asyncParallel(tasks, callback) {
  const results = [];

  const errors = [];

  let tasksCompleted = 0;

  tasks.forEach((asyncTask) => {
    try {
      asyncTask
        .then((value) => {
          results.push(value);
        })
        .catch((error) => {
          errors.push(error);
        })
        .finally(() => {
          tasksCompleted++;
          if (tasksCompleted >= tasks.length) {
            callback(errors, results);
          }
        });
    } catch {
      asyncTask((value) => {
        results.push(value);
      });
      tasksCompleted++;

      if (tasksCompleted >= tasks.length) {
        callback(errors, results);
      }
    }
  });
}

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value < 5) {
        reject(`Error ${value}`);
      } else {
        resolve(value * 1000);
      }
    }, value * 1000);
  });
}

function createAsyncTask2() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask2(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];

asyncParallel(taskList, (error, result) => {
  console.log("errors", error);
  console.log("results", result);
});
