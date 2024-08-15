var backspaceCompare = function (s, t) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "#") {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  let sm = stack.join("");
  stack = [];
  for (let i = 0; i < t.length; i++) {
    if (t[i] == "#") {
      stack.pop();
    } else {
      stack.push(t[i]);
    }
  }
  let tm = stack.join("");

  return sm == tm;
};
