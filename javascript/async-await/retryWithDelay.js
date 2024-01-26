const retryWithDelay = async (
  fn,
  retries = 3,
  interval = 50,
  finalErr = "Retry failed"
) => {
  try {
    // try
    await fn();
  } catch (err) {
    // if no retries left
    // throw error
    if (retries <= 0) {
      return Promise.reject(finalErr);
    }

    //delay the next call
    await wait(interval);

    //recursively call the same func
    return retryWithDelay(fn, retries - 1, interval, finalErr);
  }
};
