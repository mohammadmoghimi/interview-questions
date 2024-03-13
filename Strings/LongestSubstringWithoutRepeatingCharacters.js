// Given a string s, find the length of the longest 
// substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is 
// a subsequence and not a substring.

var lengthOfLongestSubstring = function(s) {
    let leftPointer = 0;
    let rightPointer = 0;
    let maxLength = 0;
    let charSet = new Set();

    while (rightPointer < s.length) {
        if (!charSet.has(s[rightPointer])) {
            charSet.add(s[rightPointer]);
            maxLength = Math.max(maxLength, charSet.size);
            rightPointer++;
        } else {
            charSet.delete(s[leftPointer]);
            leftPointer++;
        }
    }

    return maxLength;
};