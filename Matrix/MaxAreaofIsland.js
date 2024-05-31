// You are given an m x n binary matrix grid. 
// An island is a group of 1's (representing land) 
// connected 4-directionally (horizontal or vertical.) 
// You may assume all four edges of the grid are surrounded by water.

// The area of an island is the number of cells with a value 1 in the island.

// Return the maximum area of an island in grid. If there is no island, return 0.

 

// Example 1:


// Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],
// [0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],
// [0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],
// [0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],
// [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Output: 6
// Explanation: The answer is not 11, because the island 
// must be connected 4-directionally.
// Example 2:

// Input: grid = [[0,0,0,0,0,0,0,0]]
// Output: 0

function maxAreaOfIsland(grid) {
    const rows = grid.length;
    const cols = grid[0].length;
    let maxArea = 0;
    const dfs = (row, col) => {
        if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] === 0) {
            return 0;
        }
        grid[row][col] = 0;
        let area = 1;
        area += dfs(row + 1, col);
        area += dfs(row - 1, col);
        area += dfs(row, col + 1);
        area += dfs(row, col - 1);
        return area;
    };
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] === 1) {
                const area = dfs(row, col);
                maxArea = Math.max(maxArea, area);
            }
        }
    }
    return maxArea;
}