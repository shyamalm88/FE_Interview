var isPalindrome = function (s) {
  let ms = s.replace(/[^a-zA-Z0-9]/g, "", "").toLowerCase();
  let i = 0;
  let j = ms.length - 1;
  while (i < j) {
    if (ms[i].toLowerCase() !== ms[j].toLowerCase()) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
