const longestPalindromicSubstr = (s) => {
  let res = "";
  let resLength = 0;
  let l = 0;
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    // odd length
    l = i;
    r = i;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLength) {
        res = s.substring(l, r + 1);
        resLength = r - l + 1;
      }
      l -= 1;
      r += 1;
    }

    // even length

    l = i;
    r = i + 1;

    while (l >= 0 && r < s.length && s[l] === s[r]) {
      if (r - l + 1 > resLength) {
        res = s.substring(l, r + 1);
        resLength = r - l + 1;
      }
      l -= 1;
      r += 1;
    }
  }
  return res;
};

console.log(longestPalindromicSubstr("babad"));
console.log(longestPalindromicSubstr("cbbd"));
