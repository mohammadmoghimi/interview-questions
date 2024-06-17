// Given a pattern and a string s, find if s follows the same pattern.

// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

// Example 1:

// Input: pattern = "abba", s = "dog cat cat dog"
// Output: true
// Example 2:

// Input: pattern = "abba", s = "dog cat cat fish"
// Output: false
// Example 3:

// Input: pattern = "aaaa", s = "dog cat cat dog"
// Output: false

function wordPattern(pattern: string, s: string): boolean {
    const words = s.split(' ');

    // Check if the lengths of pattern and words are the same
    if (pattern.length !== words.length) {
        return false;
    }

    // Create two maps for bijection
    const charToWordMap = new Map<string, string>();
    const wordToCharMap = new Map<string, string>();

    // Iterate through pattern and words simultaneously
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        // Check if the char is already mapped to a word
        if (charToWordMap.has(char)) {
            // If mapped, but not to the current word, return false
            if (charToWordMap.get(char) !== word) {
                return false;
            }
        } else {
            // If not mapped, create the mapping
            charToWordMap.set(char, word);
        }

        // Check if the word is already mapped to a char
        if (wordToCharMap.has(word)) {
            // If mapped, but not to the current char, return false
            if (wordToCharMap.get(word) !== char) {
                return false;
            }
        } else {
            // If not mapped, create the mapping
            wordToCharMap.set(word, char);
        }
    }

    return true;
};