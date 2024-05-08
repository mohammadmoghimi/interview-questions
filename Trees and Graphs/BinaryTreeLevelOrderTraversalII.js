// Given the root of a binary tree, return 
// the bottom-up level order traversal of 
// its nodes' values. (i.e., from left to 
//     right, level by level from leaf to root).

// Example 1:


// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

var levelOrderBottom = function(root) {
    if (!root) return [];
const result = [] ;
const queue = [root] ;

while(queue.length > 0) {
    const levelSize = queue.length ;
    const currentLevel = [];

    for(let i = 0 ; i < levelSize ; i++) {
        const current = queue.shift() ;
        currentLevel.push(current.val) ;

        if(current.left) queue.push(current.left) ;
        if(current.right) queue.push(current.right) ;
    }
    result.unshift(currentLevel) ;
}
return result ;
};