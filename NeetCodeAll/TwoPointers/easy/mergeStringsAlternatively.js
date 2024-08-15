var mergeAlternately = function (word1, word2) {
  let l1 = 0;
  let l2 = 0;
  let s = "";
  while (l1 < word1.length || l2 < word2.length) {
    s += (word1[l1] ? word1[l1] : "") + (word2[l2] ? word2[l2] : "");
    l1++;
    l2++;
  }
  return s;
};

console.log(mergeAlternately("abcd", "pqrstuv"));
