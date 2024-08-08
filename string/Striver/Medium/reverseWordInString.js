const reverseWordInAString = (inputString) => {
  return inputString
    .split(" ")
    .filter((s) => s != "")
    .reverse()
    .join(" ");
};
