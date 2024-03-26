const reverseWordsInSentence = (str) => {
  strArr = str.split(" ");
  let res = "";
  for (let i = strArr.length - 1; i >= 0; i--) {
    res += strArr[i] + " ";
  }
  return res.trim();
};

console.log(reverseWordsInSentence("Arghya Is Awasome"));
