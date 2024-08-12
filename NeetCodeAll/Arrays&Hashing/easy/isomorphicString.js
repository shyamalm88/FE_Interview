var isIsomorphic = function (s, t) {
  let mapST = new Map(); // forward mapping
  let mapTS = new Map(); // reverse mapping

  for (let i = 0; i < s.length; i++) {
    let ch1 = s[i];
    let ch2 = t[i];
    if (
      (mapST.has(ch1) && mapST.get(ch1) !== ch2) ||
      (mapTS.has(ch2) && mapTS.get(ch2) !== ch1)
    ) {
      return false;
    } else {
      mapST.set(ch1, ch2);
      mapTS.set(ch2, ch1);
    }
  }
  return true;
};

console.log(isIsomorphic("egg", "foo"));
