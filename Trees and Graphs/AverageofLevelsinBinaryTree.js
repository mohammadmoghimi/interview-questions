// Given the root of a binary tree, return 
// the average value of the nodes on each 
// level in the form of an array. Answers 
// within 10-5 of the actual answer will be accepted.
 

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [3.00000,14.50000,11.00000]
// Explanation: The average value of nodes on 
// level 0 is 3, on level 1 is 14.5, and on 
// level 2 is 11.
// Hence return [3, 14.5, 11].
// Example 2:


// Input: root = [3,9,20,15,7]
// Output: [3.00000,14.50000,11.00000]

var averageOfLevels = function(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        let levelSum = 0;

        for (let i = 0; i < levelSize; i++) {
            const current = queue.shift();
            levelSum += current.val;

            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        
        result.push(levelSum / levelSize);
    }
    return result;
};