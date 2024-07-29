const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

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
    await wait(delay);
    return retryPromiseWithDelay(fn, retries - 1, delay, finalError);
  }
};

// Input:
// // Test function
const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    // if called less than 5 times
    // throw error
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

// Test the code
const test = async () => {
  await retryPromiseWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryPromiseWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

// Print the result
test().catch(console.error);

// Output:
// "success" // 1st test
// "Retry failed" //2nd test
