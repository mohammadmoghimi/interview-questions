// Given a string s containing just the characters 
// '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    const stack = [];
const mapping = {")": "(", "}": "{", "]": "["};

for (let char of s) {
    if (char in mapping) {
        const topElement = stack.pop() || '#';
        if (mapping[char] !== topElement) {
            return false;
        }
    } else {
        stack.push(char);
    }
}

return stack.length === 0;
};