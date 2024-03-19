// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// brute force solution
// time complexity -> O(m*n*logN)
const groupAnagrams = (strs) => {
  let map = {};
  let str = "";
  let length = strs.length;

  for (let i = 0; i < length; i++) {
    str = Array.from(strs[i]).sort().join("");
    if (!map[str]) {
      map[str] = [];
    }
    map[str].push(strs[i]);
  }
  return Object.values(map);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

//===============================****======================================//

// optimal solutions
// time complexity -> O(m*n*26) -> O(m*n)
var groupAnagramsOptimal = function (strs) {
  const anagramsMap = new Map();

  for (let word of strs) {
    const count = new Array(26).fill(0);
    for (let char of word) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    const key = count.join();
    if (anagramsMap.has(key)) {
      anagramsMap.get(key).push(word);
    } else {
      anagramsMap.set(key, [word]);
    }
  }

  return Array.from(anagramsMap.values());
};

console.log(groupAnagramsOptimal(["eat", "tea", "tan", "ate", "nat", "bat"]));
