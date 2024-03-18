const nextGreaterElement = (arr) => {
  let n = arr.length;
  let answer = new Array(n);
  let stack = [];

  for (let i = 2 * (n - 1); i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= arr[i % n]) {
      stack.pop();
    }
    answer[i % n] = stack.length === 0 ? -1 : stack[stack.length - 1];
    stack.push(arr[i % n]);
  }
  return answer;
};

console.log(nextGreaterElement([4, 12, 5, 3, 1, 2, 5, 3, 1, 2, 5, 6]));
