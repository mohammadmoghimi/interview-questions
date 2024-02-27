// Given an unsorted array A of size N that 
// contains only non negative integers, 
// find a continuous sub-array that adds 
// to a given number S and return the 
// left and right index(1-based indexing) of that subarray.

// In case of multiple subarrays, return 
// the subarray indexes which come 
// first on moving from left to right.

// Note:- You have to return an
// ArrayList consisting of two 
// elements left and right. 
// In case no such subarray exists 
// return an array consisting of element -1.

// Example 1:

// Input:
// N = 5, S = 12
// A[] = {1,2,3,7,5}
// Output: 2 4
// Explanation: The sum of elements 
// from 2nd position to 4th position 
// is 12.
// Example 2:

// Input:
// N = 10, S = 15
// A[] = {1,2,3,4,5,6,7,8,9,10}
// Output: 1 5
// Explanation: The sum of elements 
// from 1st position to 5th position
// is 15.

class Solution 
{
    subarraySum(arr, n, s)
    {

        let sum = 0 ;
        let left = 0 ;
        let right = 0 ;
        if (s === 0) {
            for (let i = 0; i < n; i++) {
                if (arr[i] === 0) {
                    return [i + 1, i + 1];
                }
            }
            return [-1];
        }
        while (right < n){
            sum += arr[right] ;
            
            while(sum > s){
                sum -= arr[left]
                left++ 
            }
            
            if( sum === s ){
                return [left + 1 , right + 1]
            }
            
            right ++ ;
        }
        return [-1]
    }
} 
