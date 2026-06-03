// ============================================================
// Problem 4 - countUniqueValues(arr)
// Pattern: Multiple Pointers (same direction)
// Count unique values in a sorted array.
// ============================================================

function countUniqueValues(arr) {

    // Edge case: if the array is empty, there are no unique values
    if (arr.length === 0) {
        return 0;
    }

    // i is the slow pointer — it marks the position of the last unique value we found
    // it starts at index 0 (first element is always unique by itself)
    let i = 0;

    // j is the fast pointer — it scouts ahead to find new unique values
    // it starts at index 1 (one step ahead of i)
    for (let j = 1; j < arr.length; j++) {

        // If the value at j is DIFFERENT from the value at i,
        // we found a new unique value!
        if (arr[i] !== arr[j]) {

            // Move i forward to the next spot
            i++;

            // Optional: you can also copy arr[j] into arr[i] here
            // to "rebuild" the array with only unique values
            // but we don't need to for just counting
        }

        // If arr[i] === arr[j], it's a duplicate → just let j keep moving (the for loop handles that)
    }

    // i is the index of the last unique value
    // so the COUNT of unique values is i + 1
    return i + 1;
}

// --- Test Cases ---
console.log("Problem 4 - countUniqueValues()");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));                       // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));    // 7
console.log(countUniqueValues([]));                                         // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1]));                       // 4

// Time Complexity:  O(n)
// Space Complexity: O(1)
