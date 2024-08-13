var canPlaceFlowers = function (flowerbed, n) {
  let newFlowerBed = [0, ...flowerbed, 0];
  for (let i = 1; i < newFlowerBed.length - 1; i++) {
    if (
      newFlowerBed[i - 1] == 0 &&
      newFlowerBed[i] == 0 &&
      newFlowerBed[i + 1] === 0
    ) {
      newFlowerBed[i] = 1;
      n -= 1;
    }
  }
  return n <= 0;
};

canPlaceFlowers([1, 0, 0, 0, 1], 2);
