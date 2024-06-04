// Given an m x n matrix board containing 'X' and 'O', 
// capture all regions that are 4-directionally surrounded by 'X'.

// A region is captured by flipping all 'O's into 'X's 
// in that surrounded region.

 

// Example 1:


// Input: board = [["X","X","X","X"],["X","O","O","X"],
// ["X","X","O","X"],["X","O","X","X"]]
// Output: [["X","X","X","X"],["X","X","X","X"],
// ["X","X","X","X"],["X","O","X","X"]]
// Explanation: Notice that an 'O' should not be flipped if:
// - It is on the border, or
// - It is adjacent to an 'O' that should not be flipped.
// The bottom 'O' is on the border, so it is not flipped.
// The other three 'O' form a surrounded region, so they are flipped.
// Example 2:

// Input: board = [["X"]]
// Output: [["X"]]

var solve = function(board) {
    if(board.length ==0) return null 
    
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[0].length;j++){
            if(board[i][j] == 'O' && (i==0 || i==board.length-1 || j==0 || j==board[0].length-1)){
                  dfs(board,i,j)
               }
        }
    }
    
    for(var i=0;i<board.length;i++){
        for(var j=0;j<board[0].length;j++){
            if(board[i][j]=='W'){
                  board[i][j]='O'
               }
            else {
                    board[i][j]='X'
                    }
        }
    }
    
    return board
};

  function dfs(board,i,j){
      if(i<0 || j<0 || i>=board.length || j >=board[0].length || board[i][j]=='X' || board[i][j]=='W'){
            return 
         }
      board[i][j]='W';
      dfs(board,i+1,j)
      dfs(board,i-1,j)
      dfs(board,i,j+1)
      dfs(board,i,j-1)
      return 
  }