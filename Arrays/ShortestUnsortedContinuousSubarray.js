// Given an integer array nums, you need to 
// find one continuous subarray such that 
// if you only sort this subarray in non-decreasing 
// order, then the whole array will be sorted 
// in non-decreasing order.

// Return the shortest such subarray 
// and output its length.

 

// Example 1:

// Input: nums = [2,6,4,8,10,9,15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] 
// in ascending order to make the whole array 
// sorted in ascending order.
// Example 2:

// Input: nums = [1,2,3,4]
// Output: 0
// Example 3:

// Input: nums = [1]
// Output: 0

var findUnsortedSubarray = function(nums) {
    const n = nums.length;
let start = -1;
let end = -2;
let max = nums[0];
let min = nums[n - 1];

for (let i = 1; i < n; i++) {
    max = Math.max(max, nums[i]);
    min = Math.min(min, nums[n - 1 - i]);
    if (nums[i] < max) end = i;
    if (nums[n - 1 - i] > min) start = n - 1 - i;
}

return end - start + 1;
};