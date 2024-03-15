// Given two strings s and t of lengths m 
// and n respectively, return the minimum window 
// substring
//  of s such that every character in t 
//  (including duplicates) is included in 
//  the window. If there is no such substring, 
//  return the empty string "".

// The testcases will be generated such that 
// the answer is unique.

 

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" 
// includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.
 

var minWindow = function(s, t) {
    let tMap = {}; 
    for (let char of t) {
        tMap[char] = (tMap[char] || 0) + 1;
    }
    
    let requiredChars = Object.keys(tMap).length; 
    
    let left = 0; 
    let right = 0; 
    let formed = 0; 
    let windowCounts = {}; 
    let minLen = Infinity; 
    let minSubstring = ''; 
    
    while (right < s.length) {
        let char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1; 
        
        if (tMap[char] && windowCounts[char] === tMap[char]) {
            formed++; 
        }
        
        while (left <= right && formed === requiredChars) {
            let currentLen = right - left + 1;
            if (currentLen < minLen) {
                minLen = currentLen;
                minSubstring = s.substring(left, right + 1);
            }
            let leftChar = s[left];
            windowCounts[leftChar]--;
            if (tMap[leftChar] && windowCounts[leftChar] < tMap[leftChar]) {
                formed--; 
            }
            left++; 
        }
        
        right++; 
    }
    
    return minSubstring;
};