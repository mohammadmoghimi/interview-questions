// Given two strings s and t, return true 
// if they are equal when both are typed 
// into empty text editors. '#' means a 
// backspace character.

// Note that after backspacing an empty text, 
// the text will continue empty.

 

// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".
// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".
// Example 3:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".

function backspaceCompare(s, t) {
    function getActualString(str) {
        const result = [];
        let backspaceCount = 0;
        for (let i = str.length - 1; i >= 0; i--) {
            if (str[i] === '#') {
                backspaceCount++;
            } else if (backspaceCount > 0) {
                backspaceCount--;
            } else {
                result.push(str[i]);
            }
        }
        return result.reverse().join('');
    }

    return getActualString(s) === getActualString(t);
}