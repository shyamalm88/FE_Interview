var findContentChildren = function (g, s) {
  let counter = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  let minLength = s.length > g.length ? s.length : g.length;
  let j = 0;

  for (let i = 0; i < minLength; i++) {
    if (s[i] >= g[j]) {
      counter++;
      j++;
    }
  }

  return counter;
};

console.log(findContentChildren([1, 2], [1, 2, 3]));
