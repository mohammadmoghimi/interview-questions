// Given a collection of candidate numbers 
// (candidates) and a target number (target), 
// find all unique combinations in candidates 
// where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

 

// Example 1:

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]
// Example 2:

// Input: candidates = [2,5,2,1,2], target = 5
// Output: 
// [
// [1,2,2],
// [5]
// ]

var combinationSum2 = function(candidates, target) {
    let result = [] ;
    var backTrack = function(start , target , path) {
        if(target === 0){
            result.push(path.slice()) ;
            return ;
        }
        if(target < 0) {
            return ;
        }
        for(let i = start ; i < candidates.length ; i ++) {
              if(i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }
            path.push(candidates[i]) ;
            backTrack(i + 1, target - candidates[i] , path) ;
            path.pop()
        }
    }

    candidates.sort((a , b) => a - b) ;
    backTrack(0 , target , []) ;
    return result
};