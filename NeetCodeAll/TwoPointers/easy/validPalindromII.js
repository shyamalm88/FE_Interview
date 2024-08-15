var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
    }
    l++;
    r--;
  }
  return true;
};

isPalindrome = (s, i, j) => {
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(validPalindrome("abcaz"));
