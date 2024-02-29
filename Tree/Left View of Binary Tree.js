// Given a Binary Tree, return Left view of it. 
// Left view of a Binary Tree is set of nodes 
// visible when tree is visited from Left side. 
// The task is to complete the function leftView(), 
// which accepts root of the tree as argument. 
// If no left view is possible, return an empty tree.

// Left view of following tree is 1 2 4 8.

//           1
//        /     \
//      2        3
//    /  \      /  \ 
//   4     5   6    7
//    \
//      8   

// Example 1:

// Input:
//    1
//  /  \
// 3    2
// Output: 1 3 
// Your Task:
// You just have to complete the function leftView() 
// that returns an array containing the nodes that 
// are in the left view. The newline is automatically 
// appended by the driver code.
// Expected Time Complexity: O(N).
// Expected Auxiliary Space: O(N).

// Constraints:
// 0 <= Number of nodes <= 100
// 0 <= Data of a node <= 1000

class Solution {
    leftViewFinder(root ,level , max_level ,result){
        if(root == null) return null ;
        
        if(level > max_level[0]) {
            result.push(root.data) ;
            max_level[0] = level ;
        }
        
        this.leftViewFinder(root.left, level + 1, max_level, result)
        this.leftViewFinder(root.right, level + 1, max_level, result)
    }
    leftView(root)
    {
        let result = [] ;
        let max_level = [0] ;
        this.leftViewFinder(root ,1 , max_level ,result) ;
        return result
    }
}