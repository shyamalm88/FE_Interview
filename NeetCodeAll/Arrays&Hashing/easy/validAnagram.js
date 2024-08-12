var isAnagram = function (s, t) {
  let map = Array(26).fill(0);
  for (char of s) {
    map[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  let key = map.join("");
  map = Array(26).fill(0);
  for (char of t) {
    map[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
  }
  let key2 = map.join("");
  return key === key2;
};

console.log(isAnagram("anagram", "nagaram"));
