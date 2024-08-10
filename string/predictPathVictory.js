var predictPartyVictory = function (senate) {
  var s1 = [];
  var s2 = [];
  for (var i = 0; i < senate.length; i++) {
    if (senate[i] === "R") {
      s1.push(i);
    } else {
      s2.push(i);
    }
  }
  while (s1.length && s2.length) {
    if (s1[0] < s2[0]) {
      s1.push(s1.shift() + senate.length);
      s2.shift();
    } else {
      s2.push(s2.shift() + senate.length);
      s1.shift();
    }
  }
  return s1.length ? "Radiant" : "Dire";
};
