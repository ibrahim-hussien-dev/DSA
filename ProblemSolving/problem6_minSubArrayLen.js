// ============================================================
// Problem 6 - minSubArrayLen(arr, sum)
// Pattern: Sliding Window (Dynamic Size)
// Find the minimal length subarray with sum >= target.
// ============================================================

function minSubArrayLen(arr, sum) {

    // We start assuming no valid subarray exists
    // Infinity is a safe starting point — any real length will be smaller
    let minLen = Infinity;

    let start = 0;      // left edge of our window
    let end = 0;        // right edge of our window
    let currentSum = 0; // sum of elements currently inside the window

    // Move the right edge (end) forward one step at a time
    while (end < arr.length) {

        // Expand the window by adding the element at 'end'
        currentSum += arr[end];

        // Now try to SHRINK the window from the left
        // as long as the current sum still meets our target
        while (currentSum >= sum) {

            // This window is valid! Calculate its length
            let windowLen = end - start + 1;

            // Update minLen if this window is shorter than the best we've seen
            if (windowLen < minLen) {
                minLen = windowLen;
            }

            // Try shrinking: remove the leftmost element and move start forward
            currentSum -= arr[start];
            start++;
        }

        // Expand: move the right edge forward to look for more elements
        end++;
    }

    // If minLen never got updated, no valid subarray was found
    return minLen === Infinity ? 0 : minLen;
}

// --- Test Cases ---
console.log("Problem 6 - minSubArrayLen()");
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7));               // 2
console.log(minSubArrayLen([2, 1, 6, 5, 4], 9));                  // 2
console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11));           // 2
console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// Time Complexity:  O(n)
// Space Complexity: O(1)
