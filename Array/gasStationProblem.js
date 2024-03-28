const gasCircuitCanComplete = (gas, price) => {
  let length = gas.length;
  let gasAvailable = 0;
  let gasUsed = 0;
  let paid = 0;
  let start = 0;

  for (let i = 0; i < length; i++) {
    gasUsed += gas[i];
    paid += price[i];
    gasAvailable = gas[i] - price[i];
    if (gasAvailable < 0) {
      gasAvailable = 0;
      start = i + 1;
    }
  }
  return paid > gasUsed ? -1 : start;
};
