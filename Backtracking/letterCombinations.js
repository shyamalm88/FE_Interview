const letterCombinations = (digits) => {
  let res = [];
  let digitToChar = {
    1: "",
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backTrack(i, currentChar) {
    if (currentChar.length === digits.length) {
      res.push(currentChar);
      return;
    }
    for (c of digitToChar[digits[i]]) {
      backTrack(i + 1, currentChar + c);
    }
  }
  if (digits) {
    backTrack(0, "");
    return res;
  } else {
    return [];
  }
};

console.log(letterCombinations("123"));
