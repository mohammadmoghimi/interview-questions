// Given a string s which consists of lowercase 
// or uppercase letters, return the length of 
// the longest palindrome that can be built 
// with those letters.

// Letters are case sensitive, for example, 
// "Aa" is not considered a palindrome here.

 

// Example 1:

// Input: s = "abccccdd"
// Output: 7
// Explanation: One longest palindrome that 
// can be built is "dccaccd", whose length is 7.
// Example 2:

// Input: s = "a"
// Output: 1
// Explanation: The longest palindrome that 
// can be built is "a", whose length is 1.

function longestPalindrome(s) {
    const charCount = new Map();
    for (let char of s) {
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }
    let length = 0;
    let hasOddCount = false;
    charCount.forEach(count => {
        length += Math.floor(count / 2) * 2;
        if (count % 2 !== 0) {
            hasOddCount = true;
        }
    });
    if (hasOddCount) {
        length += 1;
    }
    return length;
}