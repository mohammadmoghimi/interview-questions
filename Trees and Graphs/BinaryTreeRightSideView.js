// Given the root of a binary tree, imagine 
// yourself standing on the right side of 
// it, return the values of the nodes you 
// can see ordered from top to bottom.

 

// Example 1:


// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
// Example 2:

// Input: root = [1,null,3]
// Output: [1,3]
// Example 3:

// Input: root = []
// Output: []

var rightSideView = function(root) {
    if(!root) return [] ;
    let result = [] ;
    let queue = [root] ;

    while(queue.length > 0) {
        let levelSize = queue.length ;

        for(let i = 0 ; i < levelSize ; i++) {
            let current = queue.shift() ;

           if (i === levelSize - 1) {
                result.push(current.val);
            }        
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }
    return result ;
};