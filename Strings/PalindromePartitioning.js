// Given a string s, partition s such that every 
// substring
//  of the partition is a 
// palindrome
// . Return all possible palindrome partitioning of s.

 

// Example 1:

// Input: s = "aab"
// Output: [["a","a","b"],["aa","b"]]
// Example 2:

// Input: s = "a"
// Output: [["a"]]

var partition = function(s) {
    const result = [];
    const isPalindrome = (str) => {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        }
        return true;
    };
    const backtrack = (startIndex, currentPartition) => {
        if (startIndex === s.length) {
            result.push([...currentPartition]);
            return;
        }
        for (let i = startIndex; i < s.length; i++) {
            const substring = s.slice(startIndex, i + 1);
            if (isPalindrome(substring)) {
                currentPartition.push(substring);
                backtrack(i + 1, currentPartition);
                currentPartition.pop();
            }
        }
    };
    backtrack(0, []);
    return result;
};