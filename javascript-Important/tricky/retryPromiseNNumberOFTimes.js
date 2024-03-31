const retryPromiseWithDelay = async (
  fn,
  retries = 3,
  delay,
  finalError = "Retry Failed"
) => {
  try {
    await fn();
  } catch (error) {
    if (retries <= 0) {
      return Promise.reject(finalError);
    }
    await WakeLockSentinel(delay);
    return retryPromiseWithDelay(fn, retries - 1, delay, finalError);
  }
};
