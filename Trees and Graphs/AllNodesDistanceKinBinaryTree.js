// Given the root of a binary tree, the value of a 
// target node target, and an integer k, return 
// an array of the values of all nodes that have 
// a distance k from the target node.

// You can return the answer in any order.

 

// Example 1:


// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 
// from the target node (with value 5) have values 7, 4, and 1.
// Example 2:

// Input: root = [1], target = 1, k = 3
// Output: []

function distanceK(root, target, k) {
    const parents = new Map(); 
    const result = []; 
    function dfs(node, parent) {
        if (!node) return;
        parents.set(node.val, parent);
        dfs(node.left, node); 
        dfs(node.right, node); 
    }
    function findKNodes(node, from, depth) {
        if (!node) return;
        if (depth === k) { 
            result.push(node.val);
            return;
        }
        if (node.left !== from) {
            findKNodes(node.left, node, depth + 1);
        }
        if (node.right !== from) { 
            findKNodes(node.right, node, depth + 1);
        }
        if (parents.get(node.val) !== from) { 
            findKNodes(parents.get(node.val), node, depth + 1);
        }
    }
    dfs(root, null); 
    findKNodes(target, null, 0);
    return result;
}