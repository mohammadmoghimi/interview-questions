// Given a collection of numbers, nums, 
// that might contain duplicates, return 
// all possible unique permutations in any order.

 

// Example 1:

// Input: nums = [1,1,2]
// Output:
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
// Example 2:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

var permuteUnique = function(nums) {
    nums.sort((a, b) => a - b);
    let permutations = [] ;
    var backTrack = function(path , used) {
        if(path.length === nums.length) {
            permutations.push([...path]) ;
            return ;
        }
        for(let i = 0; i < nums.length; i++) {
            if(used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue ;
            }
                used[i] = true;
                path.push(nums[i]) ;
                backTrack(path , used) ;
                path.pop() ;
                used[i] = false ;
            
        }
    }
    backTrack([] , []) ;
    return permutations
};