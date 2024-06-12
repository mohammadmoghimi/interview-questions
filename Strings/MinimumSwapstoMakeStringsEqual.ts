// You are given two strings s1 and s2 of equal length consisting of 
// letters "x" and "y" only. Your task is to make these two strings 
// equal to each other. You can swap any two characters that belong 
// to different strings, which means: swap s1[i] and s2[j].

// Return the minimum number of swaps required to make s1 and s2 
// equal, or return -1 if it is impossible to do so.

 

// Example 1:

// Input: s1 = "xx", s2 = "yy"
// Output: 1
// Explanation: Swap s1[0] and s2[1], s1 = "yx", s2 = "yx".
// Example 2:

// Input: s1 = "xy", s2 = "yx"
// Output: 2
// Explanation: Swap s1[0] and s2[0], s1 = "yy", s2 = "xx".
// Swap s1[0] and s2[1], s1 = "xy", s2 = "xy".
// Note that you cannot swap s1[0] and s1[1] to make s1 equal to 
// "yx", cause we can only swap chars in different strings.
// Example 3:

// Input: s1 = "xx", s2 = "xy"
// Output: -1

function minimumSwap(s1: string, s2: string): number {
    if (s1.length !== s2.length) {
        return -1;
    }

    let xyCount = 0;
    let yxCount = 0;

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === 'x' && s2[i] === 'y') {
            xyCount++;
        } else if (s1[i] === 'y' && s2[i] === 'x') {
            yxCount++;
        }
    }

    if ((xyCount + yxCount) % 2 !== 0) {
        return -1;
    }

    return Math.floor(xyCount / 2) + Math.floor(yxCount / 2) + (xyCount % 2) * 2;};