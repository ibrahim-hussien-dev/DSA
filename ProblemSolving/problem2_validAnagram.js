// ============================================================
// Problem 2 - validAnagram(str1, str2)
// Pattern: Frequency Counter
// Check if two strings are anagrams of each other.
// ============================================================

function validAnagram(str1, str2) {

    // Step 1: Different lengths = impossible to be anagrams
    if (str1.length !== str2.length) {
        return false;
    }

    // Step 2: Build a frequency counter from the FIRST string
    let counter = {};

    for (let letter of str1) {
        // If letter exists, add 1. If not, start at 0 and add 1.
        counter[letter] = (counter[letter] || 0) + 1;
    }

    // Step 3: Loop through the SECOND string and drain the counter
    for (let letter of str2) {

        // If the letter doesn't exist in counter at all,
        // OR its count has already hit 0 (used up), it's not an anagram
        if (!counter[letter]) {
            return false;
        }

        // Letter was found — subtract 1 from its count
        counter[letter]--;
    }

    // Step 4: If we got here, everything matched up perfectly
    return true;
}

// --- Test Cases ---
console.log("Problem 2 - validAnagram()");
console.log(validAnagram('', ''));                          // true
console.log(validAnagram('aaz', 'zza'));                   // false
console.log(validAnagram('anagram', 'nagaram'));           // true
console.log(validAnagram('rat', 'car'));                   // false
console.log(validAnagram('awesome', 'awesom'));            // false
console.log(validAnagram('qwerty', 'qeywrt'));             // true
console.log(validAnagram('texttwisttime', 'timetwisttext')); // true

// Time Complexity:  O(n)
// Space Complexity: O(1) — at most 26 keys (alphabet is fixed size)
