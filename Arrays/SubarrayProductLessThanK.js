// Given an array of integers nums and an integer k, 
// return the number of contiguous subarrays where 
// the product of all the elements in the subarray is strictly less than k.

 

// Example 1:

// Input: nums = [10,5,2,6], k = 100
// Output: 8
// Explanation: The 8 subarrays that have product 
// less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note that [10, 5, 2] is not included as the 
// product of 100 is not strictly less than k.
// Example 2:

// Input: nums = [1,2,3], k = 0
// Output: 0
var numSubarrayProductLessThanK = function(nums, k) {
    let subArrays = 0;
    let leftPointer = 0;
    let rightPointer = 0;
    let productResult = 1; 
    while (rightPointer < nums.length) {
        productResult *= nums[rightPointer]; 
        while (leftPointer <= rightPointer && productResult >= k) {
            productResult /= nums[leftPointer]; 
            leftPointer++;
        }
        subArrays += rightPointer - leftPointer + 1; 
        rightPointer++; 
    }
    return subArrays;
};