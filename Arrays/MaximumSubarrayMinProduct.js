// The min-product of an array is equal to the 
// minimum value in the array multiplied by the array's sum.

// For example, the array [3,2,5] (minimum value is 2) 
// has a min-product of 2 * (3+2+5) = 2 * 10 = 20.
// Given an array of integers nums, return the maximum 
// min-product of any non-empty subarray of nums. Since 
// the answer may be large, return it modulo 109 + 7.

// Note that the min-product should be maximized 
// before performing the modulo operation. 
// Testcases are generated such that the maximum 
// min-product without modulo will fit in a 64-bit 
// signed integer.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [1,2,3,2]
// Output: 14
// Explanation: The maximum min-product is achieved 
// with the subarray [2,3,2] (minimum value is 2).
// 2 * (2+3+2) = 2 * 7 = 14.
// Example 2:

// Input: nums = [2,3,3,1,2]
// Output: 18
// Explanation: The maximum min-product is achieved 
// with the subarray [3,3] (minimum value is 3).
// 3 * (3+3) = 3 * 6 = 18.
// Example 3:

// Input: nums = [3,1,5,6,4,2]
// Output: 60
// Explanation: The maximum min-product is achieved 
// with the subarray [5,6,4] (minimum value is 4).
// 4 * (5+6+4) = 4 * 15 = 60.

// my solution : O(n^3) 

// var minProduct = function(array) {
//     let minValue = Math.min(...array) ;
//     let sum = 0 ;
//     for(let i = 0 ; i < array.length ; i++) {
//         sum += array[i] ;
//     }
//     return sum * minValue
// }

// var maxSumMinProduct = function(nums) {
//     let maximumMinProduct = -Infinity ;
//     for(let left = 0 ; left < nums.length ; left++) {
//         for(let right = left ; right < nums.length ; right++) {
//             maximumMinProduct = Math.max(maximumMinProduct , minProduct(nums.slice(left , right + 1))) ;
//         }
//     }
//     return maximumMinProduct
// };

// the better solution :
// const find = (x) => parent[x] == x ? x : parent[x] = find(parent[x]);

// const union = (x, y) => {
//     let px = find(x);
//     let py = find(y);
//     parent[px] = py;
//     sum[py] += sum[px];
// };

// const BMOD = BigInt(1e9 + 7);
// let parent, sum;
// const maxSumMinProduct = (a) => {
//     let n = a.length;
//     let pos = Array(n).fill(0);
//     let visit = Array(n).fill(0);
//     parent = Array(n).fill(0);
//     sum = Array(n).fill(0n);
//     for (let i = 0; i < n; i++) {
//         parent[i] = i;
//         sum[i] = BigInt(a[i]);
//         pos[i] = i;
//     }
//     pos.sort((x, y) => a[y] - a[x]);
//     let res = 0n;
//     for (const i of pos) {
//         if (i - 1 >= 0 && visit[i - 1]) union(i - 1, i);
//         if (i + 1 < n && visit[i + 1]) union(i, i + 1);
//         visit[i] = 1;
//         let tmp = BigInt(a[i]) * sum[find(i)];
//         if (tmp > res) res = tmp;
//     }
//     return Number(res % BMOD);
// };