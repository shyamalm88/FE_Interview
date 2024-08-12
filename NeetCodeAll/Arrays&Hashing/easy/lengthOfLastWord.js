var lengthOfLastWord = function (s) {
  let tmp = s.trim().split(" ");
  return tmp[tmp.length - 1].length;
};

console.log(lengthOfLastWord("Hello World"));
