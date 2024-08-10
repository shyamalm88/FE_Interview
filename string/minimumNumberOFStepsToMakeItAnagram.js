var minSteps = function (s, t) {
  var map = Array(26).fill(0);
  var a = "a".charCodeAt(0);
  for (var i = 0; i < t.length; i++) {
    map[t.charCodeAt(i) - a]++;
  }
  for (var j = 0; j < s.length; j++) {
    map[s.charCodeAt(j) - a]--;
  }
  var res = 0;
  for (var k = 0; k < 26; k++) {
    res += Math.abs(map[k]);
  }
  return res / 2;
};
