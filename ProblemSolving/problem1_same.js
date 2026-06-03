// ============================================================
// Problem 1 - same(arr1, arr2)
// Pattern: Frequency Counter
// Check if every value in arr1 has its squared value in arr2
// with the same frequency.
// ============================================================

function same(arr1, arr2) {

    // Step 1: If lengths are different, it's impossible to match
    // No point going further
    if (arr1.length !== arr2.length) {
        return false;
    }

    // Step 2: Create two empty objects to count frequency of values
    let counter1 = {};
    let counter2 = {};

    // Step 3: Count each value in arr1
    for (let val of arr1) {
        // If val already exists in counter1, add 1 to it
        // If val doesn't exist yet, start it at 0 then add 1
        counter1[val] = (counter1[val] || 0) + 1;
    }

    // Step 4: Count each value in arr2
    for (let val of arr2) {
        counter2[val] = (counter2[val] || 0) + 1;
    }

    // Step 5: Now compare the two counters
    for (let key in counter1) {

        // Check if the square of this key even EXISTS in counter2
        // For example: key = 2, we check if 4 is in counter2
        if (!(key ** 2 in counter2)) {
            return false; // the squared value is not there at all
        }

        // Check if the FREQUENCY (count) matches
        // 1 appears 2 times in arr1 → 1 (which is 1²) should appear 2 times in arr2
        if (counter2[key ** 2] !== counter1[key]) {
            return false; // counts don't match
        }
    }

    // If we passed all checks → it's a valid match!
    return true;
}

// --- Test Cases ---
console.log("Problem 1 - same()");
console.log(same([1, 2, 3], [4, 1, 9]));    // true
console.log(same([1, 2, 3], [1, 9]));        // false
console.log(same([1, 2, 1], [4, 4, 1]));    // false

// Time Complexity:  O(n)
// Space Complexity: O(n)
