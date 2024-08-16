var minimumLength = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r && s[l] == s[r]) {
    let temp = s[l];
    while (l <= r && s[l] == temp) {
      l++;
    }
    while (l <= r && s[r] == temp) {
      r--;
    }
  }
  return r - l + 1;
};

console.log(minimumLength("cabaabac"));
