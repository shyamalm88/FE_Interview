const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let length1 = strs.length;
  let length2 = strs[0].length;
  let temp = "";
  let res = "";

  outer: for (let i = 0; i < length2; i++) {
    temp = strs[0][i];
    for (let j = 1; j < length1; j++) {
      if (strs[j][i] !== temp) break outer;
    }
    res += temp;
  }
  return res;
};

console.log(longestCommonPrefix(["flower", "flow", "floght"]));
