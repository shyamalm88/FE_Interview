const validParenthesis = (str) => {
  const stack = [];
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
      continue;
    }
    if (stack.length === 0) return false;

    let pick;
    switch (stack[i]) {
      case ")":
        pick = stack.pop();
        if (pick === "{" || pick === "[") {
          return false;
        }
      case "}":
        pick = stack.pop();
        if (pick === "(" || pick === "[") {
          return false;
        }
      case "]":
        pick = stack.pop();
        if (pick === "(" || pick === "{") {
          return false;
        }
    }
  }
  return stack.length === 0 ? true : false;
};

console.log(validParenthesis2("([]))"));
