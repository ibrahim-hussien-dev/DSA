// ============================================================
// Problem 7 - findLongestSubstring(str)
// Pattern: Sliding Window + Frequency Counter
// Find the length of the longest substring with all distinct characters.
// ============================================================

function findLongestSubstring(str) {

    // Edge case: empty string has no substrings
    if (str.length === 0) {
        return 0;
    }

    // This will store the length of the longest valid substring found
    let longest = 0;

    // This object maps each character to the LAST index where we saw it
    // We use this to know where to jump 'start' when we find a duplicate
    let seen = {};

    // 'start' is the left edge of our current window
    let start = 0;

    // 'end' is the right edge — it moves forward on every loop iteration
    for (let end = 0; end < str.length; end++) {

        // Get the current character at the right edge of our window
        let char = str[end];

        // Check if we've seen this character before AND
        // if where we saw it is INSIDE our current window (>= start)
        if (seen[char] !== undefined && seen[char] >= start) {

            // Duplicate found inside our window!
            // Jump start to one position AFTER the last occurrence of this char
            start = seen[char] + 1;
        }

        // Update (or set) the last-seen index of this character
        seen[char] = end;

        // Calculate the current window length and update longest if needed
        let currentLen = end - start + 1;
        if (currentLen > longest) {
            longest = currentLen;
        }
    }

    return longest;
}

// --- Test Cases ---
console.log("Problem 7 - findLongestSubstring()");
console.log(findLongestSubstring(''));                 // 0
console.log(findLongestSubstring('rithmschool'));      // 7
console.log(findLongestSubstring('thisisawesome'));    // 6
console.log(findLongestSubstring('thecatinthehat'));   // 7
console.log(findLongestSubstring('bbbbbb'));           // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit'));  // 6

// Time Complexity:  O(n)
// Space Complexity: O(1) — at most 26 letters in seen (fixed alphabet size)
