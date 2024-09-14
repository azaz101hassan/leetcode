// 1100. Find K-Length Substrings With No Repeated Characters

import { endConsoleTimer, startConsoleTimer } from "../utils";

// Solution 1 - My solution
const numKLenSubstrNoRepeats = (s: string, k: number): number => {
  if (s.length < k) return 0;

  let count = 0;
  const charCount = new Map<string, number>();
  let uniqueCount = 0;

  for (let i = 0; i < k; i++) {
    const char = s[i];
    if (!charCount.has(char)) {
      charCount.set(char, 1);
      uniqueCount++;
    } else {
      charCount.set(char, charCount.get(char)! + 1);
    }
  }
  if (uniqueCount === k) count++;

  for (let i = k; i < s.length; i++) {
    const newChar = s[i];
    const oldChar = s[i - k];

    if (!charCount.has(newChar)) {
      charCount.set(newChar, 1);
      uniqueCount++;
    } else {
      charCount.set(newChar, charCount.get(newChar)! + 1);
    }

    if (charCount.has(oldChar)) {
      const oldCount = charCount.get(oldChar)!;
      if (oldCount === 1) {
        charCount.delete(oldChar);
        uniqueCount--;
      } else {
        charCount.set(oldChar, oldCount - 1);
      }
    }

    if (uniqueCount === k) count++;
  }

  return count;
};

startConsoleTimer(numKLenSubstrNoRepeats.name);
console.log(numKLenSubstrNoRepeats("havefunonleetcode", 5)); // 6
console.log(numKLenSubstrNoRepeats("home", 5)); // 0
endConsoleTimer(numKLenSubstrNoRepeats.name);

// Solution 2 - Chat
const numKLenSubstrNoRepeats2 = (s: string, k: number): number => {
  if (s.length < k) return 0;

  let count = 0;
  const charCount: { [key: string]: number } = {};
  let uniqueCount = 0;

  // Initialize the first window
  for (let i = 0; i < k; i++) {
    const char = s[i];
    if (!charCount[char]) {
      charCount[char] = 1;
      uniqueCount++;
    } else {
      charCount[char]++;
    }
  }
  if (uniqueCount === k) count++;

  // Slide the window across the string
  for (let i = k; i < s.length; i++) {
    const newChar = s[i];
    const oldChar = s[i - k];

    // Add new character
    if (!charCount[newChar]) {
      charCount[newChar] = 1;
      uniqueCount++;
    } else {
      charCount[newChar]++;
    }

    // Remove old character
    if (charCount[oldChar] === 1) {
      delete charCount[oldChar];
      uniqueCount--;
    } else {
      charCount[oldChar]--;
    }

    // Check if the current window is valid
    if (uniqueCount === k) count++;
  }

  return count;
};

startConsoleTimer(numKLenSubstrNoRepeats2.name);
console.log(numKLenSubstrNoRepeats2("havefunonleetcode", 5)); // 6
console.log(numKLenSubstrNoRepeats2("home", 5)); // 0
endConsoleTimer(numKLenSubstrNoRepeats2.name);
