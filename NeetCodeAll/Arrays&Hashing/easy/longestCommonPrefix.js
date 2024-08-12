const longestCommonPrefix = (strs) => {
  const len1 = strs.length;
  const len2 = strs[0].length;
  let str = "";

  outer: for (let i = 0; i < len2; i++) {
    for (let j = 1; j < len1; j++) {
      if (strs[0][i] !== strs[j][i]) {
        break outer;
      }
    }
    str += strs[0][i];
  }
  return str;
};
