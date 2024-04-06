// Write a program to solve a Sudoku puzzle by filling the empty cells.

// A sudoku solution must satisfy all of the following rules:

// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the digits 1-9 must occur exactly once in each of the 9 
// 3x3 sub-boxes of the grid.
// The '.' character indicates empty cells.

 

// Example 1:


// Input: board = [["5","3",".",".","7",".",".",".","."],
//                 ["6",".",".","1","9","5",".",".","."],
//                 [".","9","8",".",".",".",".","6","."],
//                 ["8",".",".",".","6",".",".",".","3"],
//                 ["4",".",".","8",".","3",".",".","1"],
//                 ["7",".",".",".","2",".",".",".","6"],
//                 [".","6",".",".",".",".","2","8","."],
//                 [".",".",".","4","1","9",".",".","5"],
//                 [".",".",".",".","8",".",".","7","9"]]
// Output: [["5","3","4","6","7","8","9","1","2"],
//         ["6","7","2","1","9","5","3","4","8"],
//         ["1","9","8","3","4","2","5","6","7"],
//         ["8","5","9","7","6","1","4","2","3"],
//         ["4","2","6","8","5","3","7","9","1"],
//         ["7","1","3","9","2","4","8","5","6"],
//         ["9","6","1","5","3","7","2","8","4"],
//         ["2","8","7","4","1","9","6","3","5"],
//         ["3","4","5","2","8","6","1","7","9"]]

function solveSudoku(board) {
    if (!board || board.length === 0) return;

    solve(board);
}

function solve(board) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === '.') {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num.toString())) {
                        board[row][col] = num.toString();

                        if (solve(board)) {
                            return true;
                        } else {
                            board[row][col] = '.';
                        }
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
        if (board[row][i] === num || board[i][col] === num || board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][Math.floor(col / 3) * 3 + i % 3] === num) {
            return false;
        }
    }
    return true;
}