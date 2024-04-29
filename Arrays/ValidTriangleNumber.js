// Given an integer array nums, return the 
// number of triplets chosen from the 
// array that can make triangles if we 
// take them as side lengths of a triangle.

 

// Example 1:

// Input: nums = [2,2,3,4]
// Output: 3
// Explanation: Valid combinations are: 
// 2,3,4 (using the first 2)
// 2,3,4 (using the second 2)
// 2,2,3
// Example 2:

// Input: nums = [4,2,3,4]
// Output: 4

var triangleNumber = function(nums) {
    nums.sort((a, b) => a - b);
    let counter = 0;
    for (let right = nums.length - 1; right >= 2; right--) {
        let left = 0;
        let mid = right - 1;
        while (left < mid) {
            if (nums[left] + nums[mid] > nums[right]) {
                counter += mid - left;
                mid--; 
            } else {
                left++;
            }
        }
    }
    return counter;
};