const removeStarsFromString = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "*") {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }
  return stack.join("");
};

console.log(removeStarsFromString("leet**cod*e"));
console.log(removeStarsFromString("erase*****"));
