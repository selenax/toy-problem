// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
//  * @param {string} s
//  * @return {number}
 */

// NOTE: Medium
//O(N^2)
//max variable to keep track of max substr length
//2 loops
//variable keep track of substr
//return max

// let lengthOfLongestSubstring = function(s) {
//   let max = 0;

//   for (let x = 0; x < s.length; x++) {
//     let subStr = s[x];
//     max = Math.max(max, subStr.length);
//     for (let y = x + 1; y < s.length; y++) {
//       if (subStr.indexOf(s[y]) === -1) {
//         subStr += s[y];
//         max = Math.max(max, subStr.length);
//       } else {
//         break;
//       }
//     }
//   }

//   return max;
// };

//refactor
//O(N)
const lengthOfLongestSubstring = str => {
  let x = 0;
  let y = 0;
  let max = 0;
  let hash = {};
  while (x < str.length) {
    if (hash[str[x]]) {
      //y keeps track of substring
      hash[str[y]] = null;
      y++;
    } else {
      //x keeps track of current char
      hash[str[x]] = true;
      max = Math.max(max, x - y + 1);
      x++;
    }
  }
  return max;
};

console.log(lengthOfLongestSubstring('abcacbdb'));
