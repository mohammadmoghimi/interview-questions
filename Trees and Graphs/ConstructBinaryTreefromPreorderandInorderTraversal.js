// Given two integer arrays preorder and inorder
// where preorder is the preorder traversal of a 
// binary tree and inorder is the inorder traversal 
// of the same tree, construct and return the binary tree.

 

// Example 1:


// Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// Output: [3,9,20,null,null,15,7]
// Example 2:

// Input: preorder = [-1], inorder = [-1]
// Output: [-1]

var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) return null;
    
        
        let rootVal = preorder[0] ;
        let rootIndex = inorder.indexOf(rootVal)
        
        let root = new TreeNode(rootVal)
        
        root.left = buildTree(preorder.slice(1 , rootIndex + 1 ), inorder.slice(0 , rootIndex)) ;
        root.right = buildTree(preorder.slice(rootIndex+1 , preorder.length) , inorder.slice(rootIndex+1 , inorder.length)) ;
        
        return root
    };