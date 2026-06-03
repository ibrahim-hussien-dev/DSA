// ============================================================
// Problem 5 - maxSubarraySum(arr, n)
// Pattern: Sliding Window (Fixed Size)
// Find the maximum sum of n consecutive elements in the array.
// ============================================================

function maxSubarraySum(arr, n) {

    // Edge case: if the array is empty or smaller than n, no answer exists
    if (arr.length < n) {
        return null;
    }

    // Step 1: Calculate the sum of the FIRST window (first n elements)
    let maxSum = 0;
    for (let i = 0; i < n; i++) {
        maxSum += arr[i];
    }

    // tempSum will track the current window's sum as we slide
    // At the start, the current window IS the first window
    let tempSum = maxSum;

    // Step 2: Slide the window across the rest of the array
    // We start at index n (the first element NOT in the first window)
    for (let i = n; i < arr.length; i++) {

        // The magic of sliding window:
        // Add the new element coming into the window on the right → arr[i]
        // Subtract the element leaving the window on the left → arr[i - n]
        tempSum = tempSum - arr[i - n] + arr[i];

        // Check if this new window has a bigger sum than what we've seen so far
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }

    return maxSum;
}

// --- Test Cases ---
console.log("Problem 5 - maxSubarraySum()");
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubarraySum([4, 2, 1, 6], 1));           // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4));        // 13
console.log(maxSubarraySum([], 4));                      // null

// Time Complexity:  O(n)
// Space Complexity: O(1)
