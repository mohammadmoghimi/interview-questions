// Given an array nums with n objects colored red, 
// white, or blue, sort them in-place so that objects 
// of the same color are adjacent, with the colors in 
// the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent 
// the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

 

// Example 1:

// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]
// Example 2:

// Input: nums = [2,0,1]
// Output: [0,1,2]

var sortColors = function(nums) {
    let leftPointer = 0 ;
    let rightPointer = nums.length - 1 ;
    let currentPointer = 0 ;
    while(currentPointer <= rightPointer){
        if(nums[currentPointer] === 0){
            [nums[leftPointer], nums[currentPointer]] = [nums[currentPointer], nums[leftPointer]];
            leftPointer++ ;
            currentPointer++ ;
        }
        else if(nums[currentPointer] === 2){
            [nums[rightPointer],nums[currentPointer]] = [nums[currentPointer] , nums[rightPointer]] ;
            rightPointer-- ;
        }
        else{
            currentPointer++ ;
        }
    }
    return nums ;
};