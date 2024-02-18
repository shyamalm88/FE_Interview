// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
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
