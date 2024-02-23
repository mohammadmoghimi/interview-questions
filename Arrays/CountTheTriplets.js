// Given an array Arr consisting of N distinct integers.
//  The task is to count all the triplets such that sum of two 
//  elements equals the third element.
 
// Example 1:

// Input: 
// N = 4 
// arr[] = {1, 5, 3, 2}
// Output: 2 
// Explanation: There are 2 triplets:
//  1 + 2 = 3 and 3 +2 = 5

// Example 2:

// Input: 
// N = 3
// arr[] = {2, 3, 4}
// Output: 0
// Explanation: No such triplet exits
// Your Task:  
// You don't need to read input or print anything.
//  Your task is to complete the function countTriplet() 
//  which takes the array arr[] and N as inputs and 
//  returns the triplet count
class Solution {
    countTriplet(arr, n) {
        let counter = 0;
        let sortedArray = arr.sort((a, b) => a - b);

        for (let i = n - 1; i >= 0; i--) {
            let left = 0;
            let right = i - 1;

            while (left < right) {
                let sum = sortedArray[left] + sortedArray[right];

                if (sum === sortedArray[i]) {
                    counter++;
                    left++;
                    right--;
                } else if (sum < sortedArray[i]) {
                    left++;
                } else {
                    right--;
                }
            }
        }

        return counter;
    }
}
