// ============================================================
// Problem 3 - sumZero(arr)
// Pattern: Multiple Pointers (from opposite ends)
// Find the first pair in a sorted array whose sum is zero.
// ============================================================

function sumZero(arr) {

    // Start left pointer at the beginning (smallest number)
    let left = 0;

    // Start right pointer at the end (largest number)
    let right = arr.length - 1;

    // Keep looping as long as the two pointers haven't crossed each other
    while (left < right) {

        // Calculate the sum of the two numbers our pointers are pointing at
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            // We found a pair that adds up to zero!
            return [arr[left], arr[right]];

        } else if (sum > 0) {
            // Sum is too big → right number is too large
            // Move the right pointer one step to the left (smaller value)
            right--;

        } else {
            // Sum is too small → left number is too negative
            // Move the left pointer one step to the right (bigger value)
            left++;
        }
    }

    // If we exit the loop without finding anything → no pair exists
    return undefined;
}

// --- Test Cases ---
console.log("Problem 3 - sumZero()");
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
console.log(sumZero([-2, 0, 1, 3]));             // undefined
console.log(sumZero([1, 2, 3]));                 // undefined

// Time Complexity:  O(n)
// Space Complexity: O(1)
