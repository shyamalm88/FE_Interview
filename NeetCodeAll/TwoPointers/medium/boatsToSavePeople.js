var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);
  let l = 0;
  let r = people.length - 1;
  let res = 0;
  while (l <= r) {
    let remaining = limit - people[r];
    r--;
    res++;
    if (l <= r && remaining >= people[l]) {
      l++;
    }
  }
  return res;
};

console.log(numRescueBoats([3, 2, 2, 1], 3));
