// Given an integer array nums of unique elements, return all possible 
// subsets
//  (the power set).

// The solution set must not contain duplicate subsets. 
// Return the solution in any order.

 

// Example 1:

// Input: nums = [1,2,3]
// Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Example 2:

// Input: nums = [0]
// Output: [[],[0]]

var subsets = function(nums) {
    let combinations = [] ;
    var backTrack = function(combination, start) {
        if(start === nums.length) {
            combinations.push(combination.slice()) ;
            return ;
        }
            combination.push(nums[start]) ;
            backTrack(combination , start + 1) ;


            combination.pop() ;
            backTrack(combination , start + 1) ;

    }
    backTrack([] , 0) ;
    return combinations ;
};