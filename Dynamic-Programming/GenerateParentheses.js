// Given n pairs of parentheses, write a function 
// to generate all combinations of well-formed parentheses.

 

// Example 1:

// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]
// Example 2:

// Input: n = 1
// Output: ["()"]

var generateParenthesis = function(n) {
    let result = []; 
    function generate(combo, open, close) {
        if (open === n && close === n) {
            result.push(combo);
            return;
        }
        if (open < n) {
            generate(combo + '(', open + 1, close);
        }
        if (close < open) {
            generate(combo + ')', open, close + 1);
        }
    }
    generate('', 0, 0);
    return result;
}