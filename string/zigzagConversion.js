const zigzagConvert = (s, numRows) => {
  if (s.length <= numRows || numRows < 2) return s;
  let len = s.length;
  let num = 2 * (numRows - 1);
  let res = Array(numRows).fill("");
  let temp = 0;
  for (let i = 0; i < len; i++) {
    temp = i % num;
    if (temp < numRows) {
      res[temp] += s[i];
    } else {
      res[num - temp] += s[i];
    }
  }
  return res.join(" ");
};

console.log(zigzagConvert("paypalishiring", 3));
