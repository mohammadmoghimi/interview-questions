// Given two strings s and p, return 
// an array of all the start indices 
// of p's anagrams in s. You may return 
// the answer in any order.

// An Anagram is a word or phrase formed 
// by rearranging the letters of a 
// different word or phrase, typically 
// using all the original letters exactly once.

 

// Example 1:

// Input: s = "cbaebabacd", p = "abc"
// Output: [0,6]
// Explanation:
// The substring with start index = 0 is 
// "cba", which is an anagram of "abc".
// The substring with start index = 6 is 
// "bac", which is an anagram of "abc".
// Example 2:

// Input: s = "abab", p = "ab"
// Output: [0,1,2]
// Explanation:
// The substring with start index = 0 is "ab", 
// which is an anagram of "ab".
// The substring with start index = 1 is "ba", 
// which is an anagram of "ab".
// The substring with start index = 2 is "ab", 
// which is an anagram of "ab".
 

// Constraints:

// 1 <= s.length, p.length <= 3 * 104
// s and p consist of lowercase English letters

var getFrequency = function(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
      var character = string.charAt(i);
      if (freq[character]) {
        freq[character]++;
      } else {
        freq[character] = 1;
      }
    }
    return freq;
  }
  
  var compareFrequencies = function (freq1, freq2) {
    for (let char in freq2) {
      if (freq1[char] !== freq2[char]) {
        return false;
      }
    }
  
    return true;
  };
  
  var findAnagrams = function(s, p) {
      let pFrequency = getFrequency(p) ;
      let leftPointer = 0 ;
      let rightPointer = p.length - 1; 
    let sWindowFrequency = getFrequency(s.substring(leftPointer, rightPointer + 1));
      let anagrams = [] ;
  
    for (let i = 0; i <= s.length - p.length; i++) {
      if (compareFrequencies(sWindowFrequency, pFrequency)) {
        anagrams.push(i);
      }
      sWindowFrequency[s[leftPointer]]--;
      leftPointer++;
      rightPointer++;
      if (rightPointer < s.length) {
        if (sWindowFrequency[s[rightPointer]] === undefined) {
          sWindowFrequency[s[rightPointer]] = 1;
        } else {
          sWindowFrequency[s[rightPointer]]++; 
        }
      }
    }
  
      return anagrams ;
  };