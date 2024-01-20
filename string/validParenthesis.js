const validParenthesis = (str) => {
  const stack = [];
  const map = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (let i = 0; i < str.length; i++) {
    if (stack.length > 0 && map[stack[stack.length - 1]] === str[i]) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.length === 0;
};

console.log(validParenthesis("([])"));
