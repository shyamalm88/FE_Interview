const sortVowels = (str) => {
  var vowels = str
    .split("")
    .filter(isVowel)
    .sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));
  var res = "";
  var index = 0;
  for (var i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      res += vowels[index++];
    } else {
      res += str[i];
    }
  }
  return res;
};

const isVowel = (str) => {
  let vowels = ["a", "e", "i", "o", "u"];
  return (
    vowels.includes(str.toLowerCase()) || vowels.includes(str.toUpperCase())
  );
};

console.log(sortVowels("lEetcOde"));
