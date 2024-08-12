var groupAnagram = (strs) => {
  let map = new Map();
  for (let word of strs) {
    let count = Array(26).fill(0);
    for (let char of word) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
    }
    let key = count.join();
    if (map.has(key)) {
      map.get(key).push(word);
    } else {
      map.set(key, [word]);
    }
  }
  return Array.from(map.values());
};

console.log(groupAnagram(["tea", "eat"]));
