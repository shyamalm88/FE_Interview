var maxNumberOfBalloons = function (text) {
  let balloon = new Map();
  let textMap = new Map();
  let res = text.length;
  for (ch of "balloon") {
    balloon.set(ch, balloon.get(ch) + 1 || 1);
  }
  for (ch of text) {
    textMap.set(ch, textMap.get(ch) + 1 || 1);
  }
  for (let [key, value] of balloon) {
    res = Math.min(
      res,
      textMap.get(key) && balloon.get(key)
        ? Math.floor(textMap.get(key) / balloon.get(key))
        : 0
    );
  }
  return res;
};

var maxNumberOfBalloons = function (text) {
  const map = new Map();

  for (let letter of text) {
    map.set(letter, map.get(letter) + 1 || 1);
  }

  let cnt = 0;

  while (true) {
    for (let letter of "balloon") {
      if (!map.has(letter) || map.get(letter) <= 0) {
        return cnt;
      }

      map.set(letter, map.get(letter) - 1);
    }

    cnt += 1;
  }
};

console.log(maxNumberOfBalloons("balon"));
