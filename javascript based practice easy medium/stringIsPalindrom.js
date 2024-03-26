const isPalindrome = (str) => {
  const strArr = str.split("");
  for (let i = 0; i < strArr.length / 2; i++) {
    if (strArr[i] !== strArr[strArr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome("madam"));
