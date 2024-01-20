const generateParenthesis = (n) => {
  if (n < 1) return [];
  let res = [];
  let str = "";
  generate(res, str, n, n);
  return res;
};

const generate = (res, str, open, close) => {
  if (open || close) {
    if (close > open) generate(res, str + ")", open, close - 1);
    if (open) generate(res, str + "(", open - 1, close);
  } else {
    res.push(str);
  }
};

console.log(generateParenthesis(2));
