// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

const lengthOfLongestSubstring = (s) => {
  let set = new Set();
  let left = 0;
  let max = 0;
  let len = s.length;

  for (let i = 0; i < len; i++) {
    while (set.has(str[i])) {
      set.delete(str[l]);
      left++;
      set.add(str[i]);
      max = Math.max(max, i - left + 1);
    }
  }
  return max;
};

lengthOfLongestSubstring("pwwkew");
