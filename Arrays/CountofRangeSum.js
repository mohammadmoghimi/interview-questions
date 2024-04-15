// Given an integer array nums and two integers 
// lower and upper, return the number of range 
// sums that lie in [lower, upper] inclusive.

// Range sum S(i, j) is defined as the sum of 
// the elements in nums between indices i and 
// j inclusive, where i <= j.

 

// Example 1:

// Input: nums = [-2,5,-1], lower = -2, upper = 2
// Output: 3
// Explanation: The three ranges are: [0,0], [2,2], 
// and [0,2] and their respective sums are: -2, -1, 2.
// Example 2:

// Input: nums = [0], lower = 0, upper = 0
// Output: 1

var countRangeSum = function(nums, lower, upper) {
    const countRangeSums = (prefixSums, left, right) => {
        if (left === right) return 0; 
        const mid = Math.floor((left + right) / 2);
        let count = countRangeSums(prefixSums, left, mid) + countRangeSums(prefixSums, mid + 1, right);
        let temp = new Array(right - left + 1);
        let i = left, j = mid + 1, k = mid + 1, t = mid + 1;
        
        for (let idx = left; idx <= mid; idx++) {
            while (t <= right && prefixSums[t] - prefixSums[idx] < lower) t++;
            while (k <= right && prefixSums[k] - prefixSums[idx] <= upper) k++;
            count += k - t;
        }
        
        while (i <= mid && j <= right) {
            if (prefixSums[i] < prefixSums[j]) {
                temp[i + j - left - mid - 1] = prefixSums[i];
                i++;
            } else {
                temp[i + j - left - mid - 1] = prefixSums[j];
                j++;
            }
        }
        while (i <= mid) {
            temp[i + j - left - mid - 1] = prefixSums[i];
            i++;
        }
        while (j <= right) {
            temp[i + j - left - mid - 1] = prefixSums[j];
            j++;
        }
        for (let idx = left; idx <= right; idx++) {
            prefixSums[idx] = temp[idx - left];
        }
        return count;
    };
    
    let prefixSums = new Array(nums.length + 1).fill(0);
    for (let i = 1; i <= nums.length; i++) {
        prefixSums[i] = prefixSums[i - 1] + nums[i - 1];
    }
    
    return countRangeSums(prefixSums, 0, prefixSums.length - 1);
};