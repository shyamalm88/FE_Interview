const minimumNumberBracketReversal = (str) => {
  // if the string length is not even then
  if (str.length % 2 !== 0) {
    return -1; // impossible to balance the tree
  }

  let stack = []; // create a stack for tracking the parenthesis

  for (let char of str) {
    if (char === "(") {
      // if its open parenthesis then push it into stack
      stack.push(char);
    } else if (char === ")") {
      if (stack.length && stack[stack.length - 1] === "(") {
        // if its closing parenthesis then check in stack if the previous element is opposite of this
        stack.pop(); // then pop it out
      } else {
        stack.push(char); // else push it into stack
      }
    }
  }

  let numOpen = 0;
  let numClose = 0;

  while (stack.length) {
    // until stack have length
    let bracket = stack.pop(); // pop every item
    if (bracket === "(") {
      // check if its opening or closing
      numOpen++; // if its opening then increase count
    } else {
      numClose++; // increase Close count
    }
  }

  // Calculate the minimum reversals needed
  // For `numOpen` unmatched opening brackets, we need (numOpen + 1) / 2 reversals
  // For `numClose` unmatched closing brackets, we need (numClose + 1) / 2 reversals

  let numReversalOpen = Math.ceil(numOpen / 2);
  let numReversalClose = Math.ceil(numClose / 2);

  return numReversalOpen + numReversalClose;
};
