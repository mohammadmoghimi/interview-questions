// Given an array of positive integers nums and 
// a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. 
//  If there is no such subarray, return 0 instead.

 

// Example 1:

// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal 
// length under the problem constraint.
// Example 2:

// Input: target = 4, nums = [1,4,4]
// Output: 1
// Example 3:

// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0

var findSum = function(string) {
    let sum = 0 ;
    for(let i = 0 ; i < string.length ; i ++) {
        sum += string[i] ;
    }
    return sum ;
}

var minSubArrayLen = function(target, nums) {
    
    if(nums.length === 0 || findSum(nums) < target){
        return 0 ;
    }

    let rightPointer = 0 ;
    let leftPointer = 0 ;
    let currentSum = 0 ;
    let minLength = Infinity ;
    for( rightPointer ; rightPointer < nums.length ;  rightPointer ++) {
        currentSum += nums[rightPointer] ;

        while (currentSum >= target) {
            minLength = Math.min(minLength, rightPointer - leftPointer + 1);
            currentSum -= nums[leftPointer];
            leftPointer++;
        }
    }
    return minLength ;
};