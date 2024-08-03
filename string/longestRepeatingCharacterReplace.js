// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character.
//  You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

const longestRepeatingCharacterReplace = (str, k) => {
  const map = new Map();
  let left = 0;
  let res = 0;
  for (let i = 0; i < str.length; i++) {
    if (map.get(str[i])) {
      map.set(str[i], map.get(str[i]) + 1); //update every character occurrence frequency by 1
    } else {
      map.set(str[i], 1); // if character not present in map then set as 1
    }
    //                i-left+1       Math.max(...map.values())
    // here check the windowLength - max frequency of character in the map
    // and check if its greater than given K then update the left pointer

    while (i - left + 1 - Math.max(...map.values()) > k) {
      map.set(str[i], map.get(str[i]) - 1); // reduce the frequency in map
      left++; // move left pointer to shorten the window
    }
    //maximum of previous res and current window length
    res = Math.max(res, i - left + 1);
  }
  return res;
};

console.log(longestRepeatingCharacterReplace("ABABBA", 2));
