function longestUniqueSubstring(s) {
    let charSet = new Set();  // To store unique characters
    let left = 0;  // Left pointer of the sliding window
    let maxLength = 0;  // Store the maximum length found

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]); // Remove leftmost character
            left++; // Move left pointer forward
        }

        charSet.add(s[right]); // Add current character to the set
        maxLength = Math.max(maxLength, right - left + 1); // Update max length
    }

    return maxLength;
}

// Test cases
console.log(longestUniqueSubstring("abcabcbb")); // Output: 3
console.log(longestUniqueSubstring("bbbbbb"));   // Output: 1
console.log(longestUniqueSubstring("pwwkew"));   // Output: 3
console.log(longestUniqueSubstring(""));         // Output: 0
