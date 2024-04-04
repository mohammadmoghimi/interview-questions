// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one 
// of the symbols '+' and '-' before each integer in nums and 
// then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 
// and a '-' before 1 and concatenate them to build the 
// expression "+2-1".
// Return the number of different expressions that you 
// can build, which evaluates to target.

 

// Example 1:

// Input: nums = [1,1,1,1,1], target = 3
// Output: 5
// Explanation: There are 5 ways to assign symbols to make 
// the sum of nums be target 3.
// -1 + 1 + 1 + 1 + 1 = 3
// +1 - 1 + 1 + 1 + 1 = 3
// +1 + 1 - 1 + 1 + 1 = 3
// +1 + 1 + 1 - 1 + 1 = 3
// +1 + 1 + 1 + 1 - 1 = 3
// Example 2:

// Input: nums = [1], target = 1
// Output: 1

var findTargetSumWays = function(nums, target) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    }
    if (Math.abs(target) > sum || (sum + target) % 2 !== 0) {
        return 0;
    }
    let targetSum = (sum + target) / 2;
    let numRows = nums.length + 1;
    let numCols = targetSum + 1;
    let dp = new Array(numRows);
    for (let i = 0; i < numRows; i++) {
        dp[i] = new Array(numCols).fill(0);
    }
    dp[0][0] = 1;
    for (let i = 1; i < numRows; i++) {
        for (let j = 0; j < numCols; j++) {
            if (j - nums[i - 1] >= 0) {
                dp[i][j] += dp[i - 1][j - nums[i - 1]];
            }
            dp[i][j] += dp[i - 1][j];
        }
    }
    return dp[nums.length][targetSum];
};