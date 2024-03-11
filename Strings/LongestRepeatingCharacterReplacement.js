// You are given a string s and an integer k. 
// You can choose any character of the string 
// and change it to any other uppercase English 
// character. You can perform this operation at most k times.

// Return the length of the longest substring 
// containing the same letter you can get after 
// performing the above operations.

 

// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the 
// middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest 
// repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

var getFrequencies = function(string){
    let frequency = {} ;
    for(let i = 0 ; i < string.length ; i++) {
        let char = string.charAt(i) ;
        if(frequency[char]){
            frequency[char]++ ;
        }
        else{
            frequency[char] = 1 ;
        }
    }
    return frequency ;
}

var characterReplacement = function(s, k) {
    let leftPointer = 0 ;
    let rightPointer = 0 ;
    let maximumFrequency = 0 ;
    let maxLength = 0 ;
    while(rightPointer < s.length){
        let characterFrequencies = getFrequencies(s.substring(leftPointer , rightPointer + 1)) ;

            for (let char in characterFrequencies) {
            maximumFrequency = Math.max(maximumFrequency, characterFrequencies[char]);
        }

            if (rightPointer - leftPointer + 1 - maximumFrequency > k) {
            leftPointer++;
        }
        maxLength = Math.max(maxLength, rightPointer - leftPointer + 1);
        rightPointer ++ ;
    }
    return maxLength ;
};