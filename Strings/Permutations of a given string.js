// Given a string S. The task is to 
// print all unique permutations of 
// the given string that may contain 
// dulplicates in lexicographically sorted order. 

// Example 1:

// Input: ABC
// Output:
// ABC ACB BAC BCA CAB CBA
// Explanation:
// Given string ABC has permutations in 6 
// forms as ABC, ACB, BAC, BCA, CAB and CBA .
// Example 2:

// Input: ABSG
// Output:
// ABGS ABSG AGBS AGSB ASBG ASGB BAGS 
// BASG BGAS BGSA BSAG BSGA GABS GASB 
// GBAS GBSA GSAB GSBA SABG SAGB SBAG 
// SBGA SGAB SGBA
// Explanation:
// Given string ABSG has 24 permutations.
// Your Task:  
// You don't need to read input or print anything. 
// Your task is to complete the function 
// find_permutation() which takes the string 
// S as input parameter and returns a vector 
// of string in lexicographical order.

// Expected Time Complexity: O(n! * n)
// Expected Space Complexity: O(n! * n)

// Constraints:
// 1 <= length of string <= 5

class Solution {
    find_permutation(S){
        // Create a res array to store results
        let res = [];
        // Convert string to array, sort the array in lexicographically order and convert back to string
        S = S.split('').sort().join('');

        do {
            // Keep adding while there is a next permutation
            res.push(S);
        } while ((S = this.next_permutation(S)));
        
        return res;
    }

    next_permutation(S) {
        let array = S.split('');
        let i = array.length - 2;
        
        // Find the first item that is smaller than the next one
        while (i >= 0 && array[i] >= array[i + 1]) {
            i--;
        }

        if (i < 0) {
            return false;
        }
        
        // Swap the found item with the next larger item to its right
        let j = array.length - 1;
        while (array[j] <= array[i]) {
            j--;
        }
        
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;

        // Reverse the order of the items after i
        let left = i + 1, right = array.length - 1;
        while (left < right) {
            temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }

        return array.join('');
    }
}


//couldnt solve it myself :(