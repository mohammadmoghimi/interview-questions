// Given a list of non-negative integers nums, 
// arrange them such that they form the 
// largest number and return it.

// Since the result may be very large, so 
// you need to return a string instead of an integer.

 

// Example 1:

// Input: nums = [10,2]
// Output: "210"
// Example 2:

// Input: nums = [3,30,34,5,9]
// Output: "9534330"

var compare = function(a , b) {
    let ab = a + b ;
    let ba = b + a ;
    if(ab > ba) {
        return -1 ;
    } else if(ab < ba) {
        return 1 ;
    } else {
        return 0 ;
    }
}

var largestNumber = function(nums) {
    nums = nums.map(String) ;
    nums.sort(compare) ; 
    if (nums[0] === '0') {
        return '0';
    }
    return nums.join('')
};