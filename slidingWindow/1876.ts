import { endConsoleTimer, startConsoleTimer } from "../utils";

// Solution 1 - My Solution
const countGoodSubstrings = (s: string): number => {
  const size = 3;
  if (s.length < size) return 0;

  let count = 0;
  const hashMap = {};
  for (let i = 0; i < size; i++) {
    if (!hashMap[s[i]]) hashMap[s[i]] = 1;
    else hashMap[s[i]]++;
  }
  if (Object.keys(hashMap).length === size) count++;

  for (let i = size; i < s.length; i++) {
    if (hashMap[s[i]]) hashMap[s[i]]++;
    else hashMap[s[i]] = 1;
    if (--hashMap[s[i - size]] === 0) delete hashMap[s[i - size]];
    if (Object.keys(hashMap).length === size) count++;
  }
  return count;
};

startConsoleTimer(countGoodSubstrings.name);
console.log(countGoodSubstrings("xyzzaz")); // 1
console.log(countGoodSubstrings("aababcabc")); // 4
console.log(countGoodSubstrings("owuxoelszb")); // 8
endConsoleTimer(countGoodSubstrings.name);
// countGoodSubstrings: 1.568ms

// Solution 2 - Chat
const countGoodSubstrings2 = (s: string): number => {
  const size = 3;
  if (s.length < size) return 0;

  let count = 0;
  const charCount = new Map<string, number>();
  let uniqueCount = 0;

  // Initialize the first window
  for (let i = 0; i < size; i++) {
    const char = s[i];
    if (!charCount.has(char)) {
      charCount.set(char, 1);
      uniqueCount++;
    } else {
      charCount.set(char, charCount.get(char)! + 1);
    }
  }
  if (uniqueCount === size) count++;

  // Slide the window across the string
  for (let i = size; i < s.length; i++) {
    const newChar = s[i];
    const oldChar = s[i - size];

    // Add new character
    if (!charCount.has(newChar)) {
      charCount.set(newChar, 1);
      uniqueCount++;
    } else {
      charCount.set(newChar, charCount.get(newChar)! + 1);
    }

    // Remove old character
    if (charCount.has(oldChar)) {
      const oldCount = charCount.get(oldChar)!;
      if (oldCount === 1) {
        charCount.delete(oldChar);
        uniqueCount--;
      } else {
        charCount.set(oldChar, oldCount - 1);
      }
    }

    // Check if the current window is valid
    if (uniqueCount === size) count++;
  }

  return count;
};

// Test cases
startConsoleTimer(countGoodSubstrings2.name);
console.log(countGoodSubstrings2("xyzzaz")); // 1
console.log(countGoodSubstrings2("aababcabc")); // 4
console.log(countGoodSubstrings2("owuxoelszb")); // 8
endConsoleTimer(countGoodSubstrings2.name);
// countGoodSubstrings2: 0.638ms

// Solution 3 - Few changes by me in Solution 2 give by Chat
const countGoodSubstrings3 = (s: string): number => {
  const size = 3;
  if (s.length < size) return 0;

  let count = 0;
  const charCount = new Map<string, number>();
  let uniqueCount = 0;

  // Initialize the first window
  for (let i = 0; i < size; i++) {
    const char = s[i];
    if (!charCount.has(char)) {
      charCount.set(char, 1);
      uniqueCount++;
    } else {
      charCount.set(char, charCount.get(char)! + 1);
    }
  }
  if (uniqueCount === size) count++;

  // Slide the window across the string
  for (let i = size; i < s.length; i++) {
    const newChar = s[i];
    const oldChar = s[i - size];

    // Add new character
    if (!charCount.has(newChar)) {
      charCount.set(newChar, 1);
      uniqueCount++;
    } else {
      charCount.set(newChar, charCount.get(newChar)! + 1);
    }

    // Remove old character
    if (charCount.has(oldChar)) {
      charCount.set(oldChar, charCount.get(oldChar)! - 1);
      if (charCount.get(oldChar) === 0) {
        charCount.delete(oldChar);
        uniqueCount--;
      }
    }

    // Check if the current window is valid
    if (uniqueCount === size) count++;
  }

  return count;
};

// Test cases
startConsoleTimer(countGoodSubstrings3.name);
console.log(countGoodSubstrings3("xyzzaz")); // 1
console.log(countGoodSubstrings3("aababcabc")); // 4
console.log(countGoodSubstrings3("owuxoelszb")); // 8
endConsoleTimer(countGoodSubstrings3.name);
// countGoodSubstrings3: 0.805ms
