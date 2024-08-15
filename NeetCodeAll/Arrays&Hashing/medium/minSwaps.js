var minSwaps = function (s) {
  let close = 0;
  let max = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[") {
      close -= 1;
    } else {
      close += 1;
    }
    max = Math.max(max, close);
  }

  return Math.floor((max + 1) / 2);
};

console.log(minSwaps("][]["));
