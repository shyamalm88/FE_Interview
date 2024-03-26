const longestWordInSentence = (sentence) => {
  let max = "";
  let arr = sentence.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
};

console.log(longestWordInSentence("Hi Iam Argya Majumder, Iam a UI Developer"));
